// 部署版构建：源文件 petlog-app-prototype-moe.html → 压缩版 deploy/index.html
// 用法：node build-deploy.js（需先 npm install terser，脚本依赖 ./node_modules/terser）
const fs = require('fs');
let minify;
try { ({ minify } = require('./node_modules/terser')); }
catch (e) { console.error('缺少 terser，先执行: npm install terser'); process.exit(1); }

(async () => {
  const src = fs.readFileSync(__dirname + '/petlog-app-prototype-moe.html', 'utf8');
  const scripts = [];
  // 抽出每个内联 <script>…</script>（外链 src= 的不动）
  const out = src.replace(/<script([^>]*)>([\s\S]*?)<\/script>/g, (m, attrs, body) => {
    if (/\bsrc\s*=/.test(attrs)) return m;
    scripts.push(body);
    return '<script' + attrs + '>@@JS' + (scripts.length - 1) + '@@</script>';
  });
  const minified = await Promise.all(scripts.map(async (code) => {
    const r = await minify(code, { compress: { passes: 2 }, mangle: false });
    if (r.error) { console.error('TERSER FAIL:', r.error); process.exit(1); }
    return r.code;
  }));
  let html = out;
  minified.forEach((c, i) => { html = html.replace('@@JS' + i + '@@', () => c); });
  // CSS 轻量压缩：去注释 + 收空白
  html = html.replace(/<style([^>]*)>([\s\S]*?)<\/style>/g, (m, attrs, css) => {
    let c = css.replace(/\/\*[\s\S]*?\*\//g, '')
               .replace(/\s+/g, ' ')
               .replace(/\s*([{}:;,>])\s*/g, '$1')
               .replace(/;}/g, '}');
    return '<style' + attrs + '>' + c + '</style>';
  });
  fs.writeFileSync(__dirname + '/deploy/index.html', html);
  console.log('源:', (src.length/1024).toFixed(0)+'KB', '→ 部署:', (html.length/1024).toFixed(0)+'KB');
  // 校验：关键函数还在
  ['openFeedSheet','_migrateFeedTitles','renderHeroQuickLogs','REC_META'].forEach(k => {
    if (!html.includes(k)) { console.error('MISSING:', k); process.exit(1); }
  });
  console.log('关键标记校验通过');
})();
