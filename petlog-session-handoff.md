# 宠记 PetLog · 项目全量交接文档

> **用途**：将本会话中所有产品设计、技术方案、评审发现、大赛策略汇总为一份文档，供新平台/新会话直接调用，无需重新讨论。
>
> **最后更新**：2026-09-08
>
> **项目状态**：需求文档 + 交互原型 + 技术方案已完成，待启动开发

---

## 一、项目背景与定位

### 1.1 产品定位

**一句话**：宠物健康管理的「日历 + 闹钟」——用 AI 把散落在各处的养宠信息翻译成可执行的行动建议。

**核心价值**：不是又一个宠物社区，而是一个**AI 养宠决策助手 + 健康档案提醒工具**。

### 1.2 目标用户

| 用户类型 | 特征 | 核心需求 |
|---------|------|---------|
| 新手养宠人 | 第一次养宠物，知识不足 | 不知道该做什么、什么时候做 |
| 多宠家庭 | 2只以上宠物，信息混乱 | 每只宠物的疫苗/驱虫/体检时间记不住 |
| 科学养宠派 | 关注健康数据，愿意投入 | 想要结构化的健康档案和趋势分析 |
| 忙碌上班族 | 时间有限，容易遗忘 | 需要自动提醒，不想错过关键节点 |

### 1.3 竞争格局

| 竞品类型 | 代表 | 宠记的差异化 |
|---------|------|------------|
| 综合平台 | 波奇宠物、E宠 | 它们做电商，宠记做健康管理 |
| 垂直工具 | 小狗在家、宠物记录 | 它们是纯记录，宠记有 AI 分析 |
| IoT 厂商 | 小佩、猫猫狗狗 | 它们绑定硬件，宠记纯软件 |
| 问诊平台 | 萌爪医生、爱宠医生 | 它们做在线问诊，宠记做日常管理 |

### 1.4 市场数据

- 中国宠物数量：约 1.5 亿只（猫狗）
- 宠物消费市场：约 4000 亿元
- 线上宠物医疗：约 150 亿元
- 全球宠物健康管理 App 市场：15.4 亿美元（2025）
- 移动端渗透率：58%

---

## 二、产品架构

### 2.1 四页时间轴定位

| Tab | 定位 | 核心功能 |
|-----|------|---------|
| **首页** | 现在 | 养护指数环、今日待办、快捷操作 |
| **记录** | 过去 | 事项记录列表（备忘录式）、筛选、搜索 |
| **提醒** | 未来 | 待办提醒、日历视图、逾期催办 |
| **我的** | 元层 | 宠物管理、会员、设置、账户 |

### 2.2 功能模块树

```
宠记 PetLog
├── 首页
│   ├── 养护指数环（4维加权）
│   ├── 今日待办卡片（可操作：处理/预约）
│   ├── 消息通知（纯信息：AI更新/家人共享/趋势报告）
│   ├── 快捷操作（记一笔/体重/提醒/估体况/找医院/扫粮食）
│   └── AI 入口（指数解读→文字链）
├── 记录
│   ├── 事项记录 Tab
│   │   ├── 记录列表（左滑置顶/删除）
│   │   ├── 筛选 chips（全部/疫苗/驱虫/体检/用药/体重/其他）
│   │   ├── 搜索
│   │   └── 新建记录（备忘录式）
│   └── 成长记录 Tab（V1.5）
│       └── 照片时间线
├── 提醒
│   ├── 待办提醒列表
│   ├── 日历视图
│   ├── 新建提醒（飞书风格重复选择器）
│   └── AI 智能规划入口
├── 我的
│   ├── 宠物管理（毛孩子列表）
│   ├── 家庭成员共享
│   ├── AI 健康档案
│   ├── 附近医院（微信定位+导航）
│   ├── 成长记录
│   ├── 宠物保险
│   ├── 会员订阅
│   ├── 帮助与反馈
│   └── 设置
│       ├── 个人资料
│       ├── 通知设置
│       ├── 隐私设置
│       ├── 深色模式
│       ├── 清除缓存
│       └── 关于宠记
└── AI 能力
    ├── 养护指数解读（规则引擎 + LLM 白话）
    ├── AI 智能规划（品种+季节+档案）
    ├── AI 养护建议（饮食/运动/疫苗/体检/季节）
    ├── OCR 病历识别（拍照→识别→确认→保存）
    ├── 语音录入（语音→文字→结构化记录）
    ├── 📸 拍照估体况（AI视觉→BCS评分→写入档案）
    ├── 📊 健康报告卡（一键生成→保存图片→分享微信）
    ├── 🆘 附近宠物医院（定位→列表→拨号/导航）
    ├── 🍖 能吃啥（搜品牌→营养分析+缺口+怎么补；搜食物→能不能吃+安全速查）
    └── 📅 年度回顾（数据汇总→时间线→AI总结→分享，12月运营位触发）
```

### 2.3 完整页面清单（46页）

| # | 页面 ID | 页面名称 | 入口来源 |
|---|---------|---------|---------|
| 1 | home | 首页 | Tab |
| 2 | records | 记录 | Tab |
| 3 | reminders | 提醒 | Tab |
| 4 | mine | 我的 | Tab |
| 5 | pg-pet-detail | 宠物档案 | 首页/我的 |
| 6 | pg-handle | 处理提醒 | 待办卡片 |
| 7 | pg-book | 预约医院 | 处理提醒 |
| 8 | pg-weight | 体重记录 | 快捷操作 |
| 9 | pg-new-record | 新建记录 | 记录页+按钮 |
| 10 | pg-record-detail | 记录详情 | 记录条目 |
| 11 | pg-new-reminder | 新建提醒 | 提醒页+按钮 |
| 12 | pg-reminder-detail | 提醒详情 | 提醒条目 |
| 13 | pg-settings | 设置 | 我的页 |
| 14 | pg-profile-edit | 编辑资料 | 设置 |
| 15 | pg-pets-manage | 宠物管理 | 我的宫格 |
| 16 | pg-add-pet | 添加宠物 | 宠物管理 |
| 17 | pg-family | 家庭成员 | 我的宫格 |
| 18 | pg-export | 档案导出 | 我的宫格 |
| 19 | pg-visits | 就诊记录 | 宠物档案 |
| 20 | pg-insurance | 宠物保险 | 我的宫格 |
| 21 | pg-orders | 我的订单 | 我的宫格 |
| 22 | pg-member | 会员中心 | 我的宫格 |
| 23 | pg-privacy | 隐私政策 | 设置 |
| 24 | pg-notify-settings | 通知设置 | 设置 |
| 25 | pg-help | 帮助与反馈 | 我的页 |
| 26 | pg-about | 关于宠记 | 设置 |
| 27 | pg-notify | 消息通知 | 首页铃铛 |
| 28 | pg-login | 登录页 | 退出登录 |
| 29 | pg-health-ai | 养护指数解读 | 首页/宠物档案 |
| 30 | pg-plan-ai | AI 智能规划 | 指数解读/提醒页 |
| 31 | pg-ask-reminder | 保存确认 | 新建记录保存后 |
| 32 | pg-done | 操作成功 | 各种保存后 |
| 33 | pg-voice | 语音录入 | 新建记录 |
| 34 | pg-photo-picker | 拍照选择 | 新建记录 |
| 35 | pg-ocr | OCR 识别 | 拍照选择 |
| 36 | pg-care-ai | AI 养护建议 | 宠物档案/指数解读 |
| 37 | pg-growth | 成长记录 | 我的宫格 |
| 38 | pg-pet-photo | 宠物照相馆 | 我的宫格 |
| 39 | pg-photo-bcs | 拍照估体况 | 首页/宠物档案/指数解读 |
| 40 | pg-report | 健康报告卡 | 指数解读页 |
| 41 | pg-vet | 附近宠物医院 | 首页/我的宫格 |
| 42 | pg-food-scan | 能吃啥 | 首页快捷操作/宠物档案 |
| 43 | pg-annual | 年度回顾 | 12月运营位触发 |
| 44 | pg-logout | 退出登录确认 | 我的页 |
| 45 | pg-search | 搜索记录 | 记录页搜索按钮 |
| 46 | pg-todo | 今日待办列表 | 首页待办卡片「全部›」 |

> 注：原型中实际有38个页面（含3个弹窗/确认页），核心交互页35个。

### 2.4 交互机制

| 机制 | 实现方式 | 说明 |
|------|---------|------|
| 页面跳转 | `data-open="pg-xxx"` | 点击打开全屏页面 |
| 返回 | `data-back` | 关闭当前页面 |
| Tab切换 | `data-tab="home/records/reminders/mine"` | 底部4Tab栏 |
| 筛选 | `data-chip` | chips点击切换选中态 |
| 分段 | `data-seg` | seg分段切换 |
| 重复选择 | `.segrow .opt` | 飞书风格重复选项切换 |
| 记录类型格子 | `#pg-new-record .cell` | 点击格子切换选中态（仅视觉） |
| 开关 | `.switch` | toggle开关 |
| 勾选 | `.plan-chk` | 复选框切换（AI规划/OCR识别结果） |
| 左滑 | touch事件 | 记录条目左滑显示置顶/删除 |
| AI加载 | `triggerAiLoad()` | 1.8秒加载动画→内容淡入 |
| 日历/趋势 | `wc-toggle` | 体重页日历/折线图切换 |
| 粮食输入品牌 | `#food-input-card` | 点击展开搜索框，隐藏热门品牌 |
| 热门品牌 | `#food-hot-brands .chip` | 点击chip隐藏热榜，显示分析结果 |

**待办 vs 通知职责拆分**：
- 今日待办（首页卡片）：可操作项，带「处理/预约」按钮（驱虫逾期、疫苗到期）
- 消息通知（铃铛页）：纯信息项，无操作按钮（AI更新、家人共享、趋势报告、版本更新）

**粮食模块（能吃啥）**：
- 统一搜索框（带搜索图标），输入食物名或品牌名
- 快捷chips（🍇葡萄/🍗鸡胸肉/🥛牛奶/🐱皇家K36/📷拍配料表）
- 搜食物→能不能吃结果（红色头部大卡片+详细解释+误食处理）
- 搜品牌→营养分析（产品概览+营养覆盖度进度条+怎么补编号建议卡）
- 速查表（圆点色标：🟢可以/🟡注意/🔴不能），始终可见
- 拍配料表→OCR识别→成分分析

**年度回顾**：非常驻功能，页面保留（pg-annual），12月运营位触发入口。

---

## 三、设计规范

### 3.1 视觉风格

**参考**：薄荷健康（Boohee Health）——浅绿渐变 hero、大量留白、大数字、克制的信息密度。

### 3.2 Design Tokens

```css
/* 主色 */
--primary: #00b578;        /* 薄荷绿 */
--primary-600: #009a67;    /* 深薄荷 */
--primary-soft: #e2f7ee;   /* 浅薄荷背景 */
--primary-tint: #f0fbf6;   /* 极浅薄荷 */

/* 文字 */
--ink: #1f2a26;            /* 主文字（深绿灰） */
--text: #5b6b63;           /* 次文字 */
--muted: #9aa7a0;          /* 辅助文字 */

/* 背景与线条 */
--bg: #f5f7f6;             /* 页面背景 */
--card: #fff;              /* 卡片背景 */
--line: #e8eeea;           /* 分割线 */

/* 语义色 */
--success: #10b981;        /* 成功/正常 */
--warning: #f59e0b;        /* 警告/即将到期 */
--danger: #ef4444;         /* 危险/逾期 */
--blue: #3b82f6;           /* 蓝色辅助 */
--violet: #7c6cf0;         /* AI 紫蓝 */

/* 圆角与阴影 */
--radius: 20px;            /* 卡片圆角 */
--shadow-sm: 0 1px 3px rgba(0,0,0,.04);
--shadow-md: 0 4px 12px rgba(0,0,0,.06);
```

### 3.3 AI 视觉标识

- AI 入口：`.ai-entry` 渐变卡片（mint 渐变）
- AI 加载：`.ai-loading` 三点跳动动画 + 文字提示
- AI 生成标签：`.ai-gen-tag` 紫色小标签
- AI 入口：首页健康分环旁「AI 解读→」文字链（`.phc-ai`），点击打开养护指数解读页
- AI 免责声明：`.ai-note` 灰色小字 + info图标

---

## 四、数据模型

### 4.1 云数据库集合

#### users 集合

```json
{
  "_id": "user_abc123",
  "openid": "oXXXX",
  "nickName": "林小姐",
  "avatarUrl": "cloud://xxx/avatar.jpg",
  "phone": "138****1234",
  "memberLevel": 0,           // 0=免费, 1=会员
  "memberExpireAt": null,
  "defaultPetId": "pet_xyz",
  "createdAt": "2026-09-01T00:00:00Z",
  "updatedAt": "2026-09-01T00:00:00Z"
}
```

#### pets 集合

```json
{
  "_id": "pet_xyz",
  "userId": "user_abc123",
  "name": "小白",
  "species": "cat",           // cat / dog / other
  "breed": "british_shorthair",
  "gender": "male",           // male / female
  "birthday": "2024-08-15",
  "neutered": true,
  "weight": 4.3,              // 最新体重
  "weightUnit": "kg",
  "avatarUrl": "cloud://xxx/pet.jpg",
  "bcsScore": 5,              // BCS 1-9（V1可选填）
  "healthScore": 88,          // 养护指数（缓存）
  "healthScoreUpdatedAt": "2026-09-01T00:00:00Z",
  "createdAt": "2026-09-01T00:00:00Z",
  "updatedAt": "2026-09-01T00:00:00Z"
}
```

#### records 集合（⚠️ 需结构化，见P0问题）

```json
{
  "_id": "rec_001",
  "userId": "user_abc123",
  "petId": "pet_xyz",
  "type": "vaccine",          // vaccine/deworm/checkup/medication/weight/note
  "title": "猫三联第3针",
  "content": "今天打了猫三联第三针，用的妙三多",  // 备忘录文本
  // === 结构化字段（按type不同） ===
  "vaccineName": "猫三联",
  "doseNo": 3,
  "brand": "妙三多",
  "shotAt": "2026-06-15",
  "nextAt": "2027-06-15",
  // === 通用字段 ===
  "happenedAt": "2026-06-15",
  "images": ["cloud://xxx/img1.jpg"],
  "aiExtracted": false,       // 是否OCR提取
  "pinned": false,
  "createdAt": "2026-06-15T10:30:00Z",
  "updatedAt": "2026-06-15T10:30:00Z"
}
```

**各类型结构化字段：**

| type | 结构化字段 |
|------|-----------|
| `weight` | `value`(数字), `unit`(kg/g), `recordedAt` |
| `vaccine` | `vaccineName`, `doseNo`, `brand`, `shotAt`, `nextAt` |
| `deworm` | `kind`(internal/external), `drug`, `dose`, `doneAt`, `nextAt` |
| `checkup` | `hospital`, `doctor`, `items`(检查项数组), `result`, `doneAt`, `nextAt` |
| `medication` | `drugName`, `dose`, `frequency`, `startDate`, `endDate`, `reason` |
| `note` | 仅 `content` 文本 |

#### reminders 集合

```json
{
  "_id": "rem_001",
  "userId": "user_abc123",
  "petId": "pet_xyz",
  "type": "deworm",           // 同records.type
  "title": "体内驱虫",
  "description": "上次6/5，建议每3个月",
  "dueDate": "2026-09-05",
  "repeatRule": "every_3_months",  // 不重复/每N天/每月/每季/每年/自定义
  "repeatInterval": 90,
  "status": "pending",        // pending/completed/snoozed/overdue
  "completedAt": null,
  "linkedRecordId": null,     // 完成后关联的记录ID
  "notifyDaysBefore": [7, 1], // 提前几天提醒
  "createdAt": "2026-09-01T00:00:00Z"
}
```

#### families 集合

```json
{
  "_id": "fam_001",
  "ownerId": "user_abc123",
  "memberId": "user_def456",
  "memberName": "张先生",
  "memberAvatar": "cloud://xxx/avatar2.jpg",
  "role": "member",           // owner / member
  "petIds": ["pet_xyz"],      // 可查看的宠物
  "createdAt": "2026-09-01T00:00:00Z"
}
```

### 4.2 品种库（breeds 集合）

```json
{
  "_id": "breed_british_shorthair",
  "species": "cat",
  "nameCN": "英国短毛猫",
  "nameEN": "British Shorthair",
  "weightRange": { "min": 3.5, "max": 5.5, "unit": "kg" },
  "lifespan": { "min": 12, "max": 20 },
  "neuteredAdjustment": 0.8,   // 绝育后代谢率调整系数
  "vaccineSchedule": [
    { "name": "猫三联", "firstAge": "8周", "boosterInterval": 365 },
    { "name": "狂犬疫苗", "firstAge": "12周", "boosterInterval": 365 }
  ],
  "dewormSchedule": {
    "internal": { "interval": 90, "drugs": ["海乐妙", "拜耳"] },
    "external": { "interval": 30, "drugs": ["博来恩", "福来恩"] }
  },
  "commonDiseases": ["心肌病", "多囊肾", "肥胖"],
  "checkupRecommendations": ["心脏超声", "血常规", "生化"]
}
```

> V1 先做10个品种：英短、美短、布偶、金毛、拉布拉多、柯基、泰迪、比熊、哈士奇、橘猫。

---

## 五、养护指数公式

### 5.1 四维加权模型

```
养护指数 = 驱虫合规(25%) + 免疫合规(25%) + 体况评估(25%) + 预防保健(25%)
```

### 5.2 各维度评分规则

#### 驱虫合规（25分满分）

```javascript
function calcDewormScore(records, pet) {
  const lastInternal = records.find(r => r.type === 'deworm' && r.kind === 'internal');
  if (!lastInternal) return 0;  // 无记录=0分

  const daysSince = daysBetween(lastInternal.doneAt, today);
  const interval = 90;  // 默认3个月

  if (daysSince <= interval) return 25;           // 按时
  if (daysSince <= interval * 1.5) return 15;     // 轻微逾期
  if (daysSince <= interval * 2) return 8;        // 严重逾期
  return 3;                                        // 极度逾期
}
```

#### 免疫合规（25分满分）

```javascript
function calcVaccineScore(records, pet) {
  const vaccines = records.filter(r => r.type === 'vaccine');
  if (vaccines.length === 0) return 0;

  let score = 0;
  // 核心疫苗（猫三联/犬四联）
  const core = vaccines.find(r => r.vaccineName.includes('三联') || r.vaccineName.includes('四联'));
  if (core) {
    const daysSince = daysBetween(core.shotAt, today);
    score += daysSince <= 365 ? 15 : daysSince <= 395 ? 10 : 5;
  }
  // 狂犬疫苗
  const rabies = vaccines.find(r => r.vaccineName.includes('狂犬'));
  if (rabies) {
    const daysSince = daysBetween(rabies.shotAt, today);
    score += daysSince <= 365 ? 10 : daysSince <= 395 ? 6 : 3;
  }
  return Math.min(score, 25);
}
```

#### 体况评估（25分满分）

```javascript
function calcBodyScore(pet) {
  // V1: 基于体重趋势（最近3次记录）
  // V2: 加入BCS手动评估
  const recentWeights = getRecentWeights(pet._id, 3);
  if (recentWeights.length === 0) return 12;  // 无数据给中间分

  const latest = recentWeights[0].value;
  const range = getBreedWeightRange(pet.breed, pet.neutered);

  // 在理想范围内
  if (latest >= range.min && latest <= range.max) {
    // 趋势稳定加分
    if (recentWeights.length >= 2) {
      const change = Math.abs(latest - recentWeights[1].value) / latest;
      if (change < 0.05) return 25;  // 变化<5%=稳定
      if (change < 0.10) return 20;
    }
    return 22;
  }
  // 轻微超标/偏低
  if (latest < range.min * 0.9 || latest > range.max * 1.1) return 12;
  return 8;  // 严重超标/偏低
}
```

#### 预防保健（25分满分）

```javascript
function calcCheckupScore(records) {
  const lastCheckup = records.find(r => r.type === 'checkup');
  if (!lastCheckup) return 5;  // 无记录给低分

  const daysSince = daysBetween(lastCheckup.doneAt, today);
  if (daysSince <= 365) return 25;    // 1年内
  if (daysSince <= 540) return 18;    // 1.5年内
  if (daysSince <= 730) return 10;    // 2年内
  return 5;                            // 超过2年
}
```

### 5.3 评分等级

| 分数 | 等级 | 颜色 | 说明 |
|------|------|------|------|
| 90-100 | 优秀 | 绿色 | 全部按时 |
| 75-89 | 良好 | 绿色 | 基本按时，1项轻微逾期 |
| 60-74 | 一般 | 黄色 | 1-2项逾期 |
| 40-59 | 需关注 | 橙色 | 多项逾期 |
| 0-39 | 危险 | 红色 | 严重缺失 |

---

## 六、提醒引擎规则

### 6.1 提醒类型与默认周期

| 类型 | 默认周期 | 提前提醒 | 逾期处理 |
|------|---------|---------|---------|
| 体内驱虫 | 每3个月 | T-7, T-1 | T+1催办，T+7强提醒 |
| 体外驱虫 | 每1个月 | T-3, T-1 | T+1催办 |
| 狂犬疫苗 | 每年 | T-30, T-7, T-1 | T+1催办，T+14强提醒 |
| 猫三联/犬四联 | 每年 | T-30, T-7, T-1 | T+1催办 |
| 年度体检 | 每年 | T-30, T-7 | T+1催办 |
| 自定义 | 用户设定 | T-1 | T+1催办 |

### 6.2 智能提醒生成逻辑

```javascript
async function generateReminders(petId) {
  const pet = await db.collection('pets').doc(petId).get();
  const records = await db.collection('records')
    .where({ petId })
    .orderBy('happenedAt', 'desc')
    .get();

  const breed = await db.collection('breeds').doc(pet.breed).get();
  const reminders = [];

  // 驱虫提醒
  const lastDeworm = records.find(r => r.type === 'deworm' && r.kind === 'internal');
  if (lastDeworm) {
    const nextDate = addDays(lastDeworm.doneAt, breed.dewormSchedule.internal.interval);
    reminders.push({
      type: 'deworm',
      title: '体内驱虫',
      dueDate: nextDate,
      repeatRule: 'every_3_months',
      notifyDaysBefore: [7, 1]
    });
  }

  // 疫苗提醒
  const lastVaccine = records.find(r => r.type === 'vaccine' && r.vaccineName.includes('三联'));
  if (lastVaccine) {
    const nextDate = addDays(lastVaccine.shotAt, 365);
    reminders.push({
      type: 'vaccine',
      title: '猫三联年度接种',
      dueDate: nextDate,
      repeatRule: 'yearly',
      notifyDaysBefore: [30, 7, 1]
    });
  }

  // 体检提醒
  const lastCheckup = records.find(r => r.type === 'checkup');
  if (lastCheckup) {
    const nextDate = addDays(lastCheckup.doneAt, 365);
    reminders.push({
      type: 'checkup',
      title: '年度体检',
      dueDate: nextDate,
      repeatRule: 'yearly',
      notifyDaysBefore: [30, 7]
    });
  }

  return reminders;
}
```

### 6.3 冷启动策略

用户建宠时引导填写「当前状态」：

```
最近一次疫苗是什么时候？ [可选填]
最近一次驱虫是什么时候？ [可选填]
最近一次体检是什么时候？ [可选填]
```

- 有数据 → 按实际日期计算下次提醒
- 无数据 → 根据宠物年龄和品种推荐默认模板，标记为「建议补充」
- 宠物年龄 < 1岁 → 按幼宠疫苗schedule生成

---

## 七、AI 能力设计

### 7.1 AI 能力分层

| 阶段 | 能力 | 技术实现 | 大赛阶段 |
|------|------|---------|---------|
| V1 | 养护指数计算 | 规则引擎（纯前端/云函数） | ✅ 必做 |
| V1 | 智能提醒生成 | 规则引擎 + 品种库 | ✅ 必做 |
| V1 | OCR 病历识别 | 微信AI OCR + LLM结构化 | ✅ 必做 |
| V2 | 养护指数AI解读 | LLM 白话翻译 | ✅ 必做 |
| V2 | AI养护建议 | LLM + 档案数据 | ✅ 必做 |
| V2 | 语音录入 | 微信语音识别 + LLM结构化 | ✅ 必做 |
| V3 | 数据飞轮 | 用户行为 → 个性化推荐 | ❌ V2再做 |

### 7.2 微信AI接入方案

```javascript
// 云函数：调用微信AI OCR
const cloud = require('wx-server-sdk');
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

exports.main = async (event) => {
  const { fileID } = event;
  // 1. 获取图片临时URL
  const { fileList } = await cloud.getTempFileURL({ fileList: [fileID] });
  const imageUrl = fileList[0].tempFileURL;

  // 2. 调用微信OCR（基础印刷体识别）
  const result = await cloud.openapi.ocr.printedText({
    imgUrl: imageUrl,
    type: 'photo'
  });

  // 3. 调用LLM结构化提取
  const llmResult = await callLLM({
    prompt: `从以下疫苗本OCR文本中提取结构化记录：
${JSON.stringify(result.items)}

返回JSON格式：
[{
  "type": "vaccine|deworm",
  "name": "疫苗/药品名称",
  "date": "YYYY-MM-DD",
  "dose": "剂量",
  "brand": "品牌",
  "batchNo": "批号"
}]`
  });

  return { records: JSON.parse(llmResult) };
};
```

### 7.3 AI 养护建议 Prompt 模板

```
你是宠记App的AI助手。根据以下宠物档案数据，生成个性化养护建议。

宠物信息：
- 名字：{name}
- 品种：{breed}
- 年龄：{age}
- 体重：{weight}kg（品种标准范围：{weightRange}）
- 是否绝育：{neutered}
- 养护指数：{healthScore}

健康记录摘要：
- 最近驱虫：{lastDeworm}（{dewormStatus}）
- 最近疫苗：{lastVaccine}（{vaccineStatus}）
- 最近体检：{lastCheckup}（{checkupStatus}）
- 体重趋势：{weightTrend}

当前季节：{season}

请生成5个方面的养护建议：
1. 饮食建议（基于体重和品种）
2. 运动建议（基于品种和年龄）
3. 疫苗/驱虫建议（基于记录和逾期情况）
4. 体检建议（基于年龄和品种易感疾病）
5. 当季提醒（基于当前季节）

每条建议标注数据来源。语气温暖专业，不替代兽医诊断。
```

---

## 八、会员模式

### 8.1 权益对比

| 权益 | 免费用户 | 会员用户 |
|------|---------|---------|
| 宠物数量 | 1只 | 不限 |
| 基础记录 | ✅ | ✅ |
| 基础提醒 | ✅ | ✅ |
| 养护指数 | ✅ | ✅ |
| AI深度解读 | ❌ | ✅ |
| 宠物照相馆 | ❌ | ✅ |
| 无限OCR识别 | 3次/月 | 不限 |
| 家庭成员共享 | ❌ | ✅ |

### 8.2 定价建议

- 月卡：12元
- 年卡：98元（约8.2元/月）
- 永久卡：198元（大赛期间可考虑）

---

## 九、产品评审发现的问题

### 🔴 P0 · 必须在开发前解决

| # | 问题 | 影响 | 建议方案 |
|---|------|------|---------|
| 1 | records表用纯文本存所有记录 | 养护指数无法自动计算、趋势图无法渲染、智能提醒无法生成 | 按type扩展结构化字段（见第四章） |
| 2 | BCS体况评分无法自动计算 | 养护指数的体况维度缺数据 | V1改为体重趋势维度，BCS手动评估作为V2 |
| 3 | 冷启动无数据 | 新用户建宠后系统不知道该提醒什么 | 建宠时引导填写最近一次疫苗/驱虫/体检时间 |
| 4 | 微信订阅消息一次性授权 | 用户每次只能收到一条提醒消息 | 关键节点集中引导授权，应用内提醒作为补充 |

### 🟡 P1 · 开发中解决

| # | 问题 | 建议方案 |
|---|------|---------|
| 5 | 宠物保险/档案导出是空壳功能 | 要么做实要么删掉 |
| 6 | 宠物照相馆和核心价值无关 | 砍掉或纯展示页 |
| 7 | 首页信息密度过高 | 只保留指数环+待办+快捷操作 |
| 8 | 记录页双Tab增加复杂度 | V1只做事项记录 |

### 🟢 P2 · 优化项

| # | 问题 | 建议方案 |
|---|------|---------|
| 9 | 品种库数据量 | 先做10个最常见品种 |
| 10 | 无数据迁移路径 | V2再考虑 |

---

## 十、大赛策略

### 10.1 大赛信息

- **赛事**：2026微信小程序开发大赛
- **主题**：「与AI共生」
- **截止**：2026年10月17日
- **奖金**：49万
- **评审标准**：实用性30% + 创新性30% + 体验20% + 完整度20%

### 10.2 获奖概率评估

| 奖项 | 概率 | 前提条件 |
|------|------|---------|
| 赛区三等奖 | 75% | 按时上线 + 核心功能完整 |
| 赛区二等奖 | 45% | + 接入微信AI + 种子用户 |
| 赛区一等奖 | 15-20% | + 数据闭环 + 用户口碑 |
| AI专项奖 | 15-20% | + 深度AI集成 + 创新场景 |

### 10.3 开发时间线（45天）

| 阶段 | 时间 | 交付物 |
|------|------|--------|
| P0 核心链路 | 第1-2周 | 建宠→记录→提醒→养护指数 |
| P1 AI能力 | 第3周 | OCR + AI解读 + 语音录入 |
| P2 加分项 | 第4周 | 家庭共享 + 会员 + 品种库 |
| 打磨 | 第5-6周 | UI优化 + Bug修复 + 种子用户 |
| 提交 | 第7周 | 材料准备 + 提交 |

### 10.4 开发方案

**推荐方案C：AI + 1个前端开发者**

- 你负责：产品决策、UI设计、测试验收
- 前端开发者负责：小程序开发、云函数、AI接入
- AI辅助：Cursor生成代码、需求文档转工单

**技术栈**：
- 微信小程序原生（WXML + WXSS + JS）
- 微信云开发（云数据库 + 云函数 + 云存储）
- 微信AI能力（OCR、语音识别）
- 外部LLM API（养护建议、白话解读）

---

## 十一、已有交付物清单

| 文件 | 路径 | 说明 |
|------|------|------|
| 交互原型 | `petlog-app-prototype.html` | 35页，160KB，全交互 |
| 功能PRD | `pet-health-record-prd.md` | 完整功能需求文档 |
| 项目分析 | `petlog-project-analysis/petlog-project-analysis.html` | 8章，含ECharts雷达图 |
| 参赛分析 | `petlog-competition-analysis/petlog-competition-analysis.html` | 评分/概率/时间线 |
| 开发需求 | `petlog-miniapp-requirements.md` | 数据模型/云函数/公式/规则 |
| 本交接文档 | `petlog-session-handoff.md` | 全量信息汇总 |

---

## 十二、下一步行动

1. **注册微信小程序账号** → 获取 AppID
2. **确认开发方案** → AI辅助 / 找前端 / 外包
3. **基于本交接文档生成 Spec → 工单 → TDD开发**
4. **修复P0问题** → records表结构化、BCS方案、冷启动策略
5. **飞书文档写入** → 需用户授权飞书bot编辑权限

---

## 十三、关键决策记录

| 决策 | 理由 | 日期 |
|------|------|------|
| 产品入口 = AI养宠决策助手 | 差异化，非电商非社区 | 2026-09-01 |
| 四页时间轴定位 | 首页=现在/记录=过去/提醒=未来/我的=元层 | 2026-09-01 |
| 薄荷健康视觉风格 | 信息优先、留白克制、专业感 | 2026-09-02 |
| 养护指数4维×25% | 基于WSAVA+Purina BCS，科学可溯源 | 2026-09-03 |
| AI只做建议不做诊断 | 合规要求，高风险引导就医 | 2026-09-01 |
| 记录统一备忘录式 | 降低录入门槛，存储结构化 | 2026-09-02 |
| 免费1只宠物，会员不限 | 商业化基础 | 2026-09-02 |
| 砍掉宠物照相馆 | 和核心价值无关，节省开发时间 | 2026-09-04（评审建议） |
| V1不做成长记录双Tab | 降低复杂度，V1.5再做 | 2026-09-04（评审建议） |
| 底部Tab保持4个不加AI | 5Tab挤占空间、AI是功能跳转不是页面切换 | 2026-09-04 |
| AI入口=首页文字链 | 首页「AI解读→」是最自然的入口，不需要悬浮按钮 | 2026-09-04 |
| 年度回顾不常驻宫格 | 一年用一次，改为12月运营位触发 | 2026-09-04 |
| 粮食模块双入口 | 扫描+手动输入品牌，降低使用门槛 | 2026-09-04 |
| 粮食页重做为「能吃啥」 | 去掉hero/对比表/搜索按钮，极简搜索+圆点速查，页面连贯 | 2026-09-07 |
| 待办vs通知拆分 | 待办=可操作，通知=纯信息，不重复 | 2026-09-04 |
| 首页快捷操作6格 | 记一笔/体重/提醒/估体况/找医院/扫粮食 | 2026-09-04 |
| 首页快捷操作精简为4格 | 「找医院」「能吃啥」移入其他页面，首页只留记一笔/体重/提醒/估体况 | 2026-09-05 |
| 首页宠物切换改为顶部分段选择器 | 原在大卡内按钮切换很怪，改为卡片上方的紧凑胶囊 Seg，切换时待办/日历/头像全量联动 | 2026-09-05 |
| 首页问候语动物第一视角+按时段 | 去掉「嗨，林小姐」，改为「主人早呀/中午好呀/下午好呀/晚上好呀」并禁止折行 | 2026-09-06 |
| 删除首页「健康趋势」风险预警长条 | 与今日待办内容重复，核心信息区保持干净；风险只看顶部警示胶囊 | 2026-09-08 |
| 警示胶囊文案俏皮化 | 「驱虫已逾期 7 天，必须处理啦！」替代「需处理」，亲和口吻 | 2026-09-08 |
| 首页宠物头像可点击（下载/更换） | 头像加相机角标，点击弹底部面板：下载头像 / 更换头像（本地上传，且绑定当前宠物，切换后记住） | 2026-09-08 |
| 欢迎封面改为进入后弹窗 | 去掉3个误导性轮播点，全屏封面改为半透明遮罩+居中欢迎卡片，加「随便逛逛」跳过，不拦截首页 | 2026-09-08 |
