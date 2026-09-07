# 宠记 PetLog · 微信小程序开发需求文档

> **目标**：将交互原型（42页 HTML）开发为可上线的微信小程序，参加2026微信小程序开发大赛（截止10月17日）。
> **技术栈**：微信小程序原生开发 + 微信云开发（云数据库 + 云函数 + 云存储）。
> **开发方式**：AI 辅助开发（Cursor），本文档作为 AI 的核心输入。

---

## 1. 项目约束

| 约束 | 说明 |
|---|---|
| 截止时间 | 2026年10月17日 23:59 |
| 技术栈 | 微信小程序原生（WXML/WXSS/JS）+ 微信云开发 |
| 参赛要求 | 必须通过微信公众平台正式上线，能在微信内正常运行 |
| AI 能力 | 鼓励接入微信 AI 生态；OCR 用腾讯云 OCR；LLM 用云函数调用 |
| 设计规范 | 遵循微信小程序设计指南；视觉风格参考薄荷健康（mint green #00b578） |
| 合规 | AI 只做建议不做诊断；高风险引导就医；页内免责声明 |

---

## 2. 功能优先级与排期

### P0 · 必须上线（第1-2周）

| 模块 | 功能 | 说明 |
|---|---|---|
| 用户系统 | 微信登录 | wx.login + 云开发用户表 |
| 宠物管理 | 建宠/编辑/多宠物 | 品种库联动，≤30秒建宠 |
| 健康记录 | 疫苗/驱虫/体重录入 | 备忘录式 + 类型标签，保存后可选添加提醒 |
| 提醒引擎 | 周期提醒 + 微信订阅消息 | T-7/T-1/T/逾期催办，频率上限 |
| 养护指数 | 4维加权评分 | 驱虫合规/免疫合规/体况评估/预防保健 |
| 首页 | 健康概览 + 待办 + 体重日历 | 四页时间轴导航 |

### P1 · 强烈建议（第3周）

| 模块 | 功能 | 说明 |
|---|---|---|
| OCR 识别 | 拍照识别疫苗本/处方单 | 腾讯云 OCR API |
| AI 养护建议 | 个性化饮食/运动/体检建议 | 云函数调用 LLM |
| 语音录入 | 录音转文字 | 微信语音识别插件 |
| 成长记录 | 照片时间线 + 里程碑 | 云存储图片 |
| 拍照估体况 | AI 视觉评估 BCS 体况评分 | 云函数调用 LLM 图片理解 |
| 健康报告卡 | 一键生成精美报告→分享微信 | Canvas 绘图 + wx.shareMessageToFriend |
| 附近宠物医院 | 微信定位→附近医院→拨号/导航 | wx.getLocation + 腾讯地图 POI |
| 粮食成分扫描 | 扫描配料表→AI 解读成分 | OCR + LLM 结构化分析 |
| 年度回顾 | 年度数据汇总→时间线→分享长图 | 数据聚合 + Canvas 长图 |

### P2 · 加分项（第4周）

| 模块 | 功能 | 说明 |
|---|---|---|
| 家庭成员 | 共享管理 | 分享卡片 + 权限 |
| 设置 | 通知/隐私/深色模式 | 系统配置 |

---

## 3. 页面清单（42页）

### 3.1 Tab 页（4个）

| Tab | 页面 | 定位 |
|---|---|---|
| 首页 | home | 现在 · 状态概览 |
| 记录 | records | 过去 · 数据资产（事项记录 + 成长记录两个子Tab） |
| 提醒 | reminders | 未来 · 行动调度 |
| 我的 | mine | 元层 · 账户资产 |

### 3.2 二级页面（31个）

| 页面ID | 名称 | 入口 |
|---|---|---|
| pg-pet-detail | 宠物档案 | 首页健康卡 |
| pg-weight | 体重记录 | 首页体重区 |
| pg-todo | 今日待办 | 首页待办 |
| pg-new-record | 新建记录 | 记录页铅笔按钮 |
| pg-record-detail | 记录详情 | 记录条目点击 |
| pg-search | 搜索记录 | 记录页搜索 |
| pg-new-reminder | 新建提醒 | 提醒页+号 |
| pg-reminder-detail | 提醒详情 | 提醒条目点击 |
| pg-handle | 处理提醒 | 待办处理按钮 |
| pg-book | 预约提醒 | 待办预约按钮 |
| pg-health-ai | 养护指数解读 | AI悬浮按钮 |
| pg-plan-ai | AI智能规划 | 提醒页AI入口 |
| pg-care-ai | AI养护建议 | 宠物档案/指数解读 |
| pg-ocr | OCR识别 | 拍照选择弹窗 |
| pg-voice | 语音录入 | 新建记录页 |
| pg-photo-picker | 拍照选择 | 新建记录页 |
| pg-ask-reminder | 添加提醒确认 | 保存记录后 |
| pg-done | 操作成功 | 各种保存操作 |
| pg-photo-bcs | 拍照估体况 | 首页/宠物档案/指数解读 |
| pg-report | 健康报告卡 | 指数解读页 |
| pg-vet | 附近宠物医院 | 首页/我的宫格 |
| pg-food-scan | 粮食成分扫描 | 宠物档案 |
| pg-annual | 年度回顾 | 我的宫格 |
| pg-pets-manage | 我的毛孩子 | 我的页宫格 |
| pg-add-pet | 添加宠物 | 毛孩子管理 |
| pg-profile-edit | 编辑资料 | 我的页头像 |
| pg-family | 家庭成员 | 我的页宫格/设置 |
| pg-export | 档案导出 | 我的页宫格 |
| pg-growth | 成长记录 | 记录页子Tab |
| pg-insurance | 宠物保险 | 我的页宫格 |
| pg-member | 会员订阅 | 我的页账户 |
| pg-settings | 设置 | 我的页齿轮 |
| pg-notify | 消息通知 | 首页铃铛 |
| pg-notify-settings | 通知设置 | 设置页 |
| pg-privacy | 隐私设置 | 设置页 |
| pg-help | 帮助与反馈 | 设置页 |
| pg-about | 关于宠记 | 设置页 |
| pg-logout | 退出登录 | 我的页 |
| pg-login | 登录页 | 退出后 |

---

## 4. 数据模型（云开发数据库集合）

### 4.1 users 集合

```json
{
  "_id": "auto",
  "_openid": "wx_xxx",
  "nickname": "林小姐",
  "avatar": "cloud://xxx/avatar.jpg",
  "phone": "138****0000",
  "memberLevel": 1,
  "memberExpireAt": "2027-02-28",
  "createdAt": "2026-09-01T00:00:00Z"
}
```

### 4.2 pets 集合

```json
{
  "_id": "auto",
  "_openid": "wx_xxx",
  "name": "小白",
  "breedId": "british_shorthair",
  "breedName": "英国短毛猫",
  "species": "cat",
  "birthday": "2024-06-01",
  "sex": "female",
  "neutered": true,
  "weight": 4.3,
  "weightUpdatedAt": "2026-09-29",
  "allergy": "",
  "chronic": "",
  "source": "purchased",
  "avatar": "cloud://xxx/pet.jpg",
  "createdAt": "2024-06-01T00:00:00Z"
}
```

### 4.3 records 集合（统一记录表）

```json
{
  "_id": "auto",
  "_openid": "wx_xxx",
  "petId": "pet_xxx",
  "type": "vaccine",
  "content": "今天带小白打了猫三联第3针，妙三多，无不良反应",
  "memo": "接种部位左后腿",
  "recordedAt": "2026-09-02",
  "nextAt": "2027-09-02",
  "photos": ["cloud://xxx/photo1.jpg"],
  "createdAt": "2026-09-02T10:00:00Z",
  "pinned": false
}
```

**type 枚举值**：`vaccine`（疫苗）、`deworm`（驱虫）、`weight`（体重）、`checkup`（体检）、`medication`（用药）、`other`（其他）

### 4.4 reminders 集合

```json
{
  "_id": "auto",
  "_openid": "wx_xxx",
  "petId": "pet_xxx",
  "type": "vaccine",
  "title": "猫三联第3针",
  "description": "距上次已87天，建议本周完成",
  "triggerAt": "2026-09-02",
  "repeatRule": "none",
  "status": "pending",
  "source": "ai_plan",
  "createdAt": "2026-09-01T00:00:00Z"
}
```

**repeatRule**：`none`（单次）、`monthly`（每月）、`quarterly`（每3月）、`yearly`（每年）
**status**：`pending`（待处理）、`done`（已完成）、`snoozed`（已推迟）
**source**：`manual`（手动）、`auto`（记录后自动）、`ai_plan`（AI规划）

### 4.5 breeds 集合（品种库，只读）

```json
{
  "_id": "british_shorthair",
  "name": "英国短毛猫",
  "species": "cat",
  "weightRange": [4.0, 5.0],
  "lifespan": [12, 17],
  "vaccineSchedule": {
    "core": ["猫三联", "狂犬"],
    "kitten": [8, 12, 16],
    "adult": [12]
  },
  "dewormSchedule": {
    "internal": 3,
    "external": 1
  },
  "checkupFrequency": 12,
  "commonDiseases": ["心肌病", "多囊肾"],
  "bcsIdeal": [4, 6]
}
```

### 4.6 health_scores 集合

```json
{
  "_id": "auto",
  "_openid": "wx_xxx",
  "petId": "pet_xxx",
  "totalScore": 88,
  "dimensions": {
    "deworm": { "score": 45, "status": "overdue", "source": "病历 · 上次 6/5" },
    "vaccine": { "score": 70, "status": "expiring", "source": "接种记录 · 6月" },
    "bodyCondition": { "score": 92, "status": "ideal", "source": "体重 4.2kg · BCS 5/9" },
    "checkup": { "score": 74, "status": "pending", "source": "体检 · 去年 9/14" }
  },
  "calculatedAt": "2026-09-01T00:00:00Z"
}
```

---

## 5. 养护指数计算公式

参考来源：Purina BCS 9分制 + WSAVA 2024 疫苗指南 + VetMetrica HRQL

```
总分 = 驱虫合规×25% + 免疫合规×25% + 体况评估×25% + 预防保健×25%
```

| 维度 | 100分 | 80分 | 60分 | 40分 | 0分 |
|---|---|---|---|---|---|
| 驱虫合规 | 按时完成 | 逾期≤7天 | 逾期8-30天 | 逾期>30天 | 从未做过 |
| 免疫合规 | 核心疫苗全部按时 | 部分到期 | 有逾期 | 严重逾期 | 无记录 |
| 体况评估 | BCS 5/9 理想 | BCS 4或6 | BCS 3或7 | BCS 1-2或8-9 | 无记录 |
| 预防保健 | 年度体检按时 | 逾期≤6月 | 逾期>6月 | 从未体检 | 无记录 |

---

## 6. 提醒引擎规则

### 6.1 推送时机

| 时机 | 触发条件 | 推送内容 |
|---|---|---|
| T-7 预告 | 距到期7天 | 「小白的狂犬疫苗将于 9/12 到期，建议提前预约」 |
| T-1 提醒 | 距到期1天 | 「明天是小白的驱虫日，记得带药」 |
| T 当天 | 到期当天 | 「今天是小白的驱虫日 → [标记完成]」 |
| 逾期催办 | 逾期3天 | 「小白的驱虫已逾期3天 → [立即处理]」（最多2次） |

### 6.2 防骚扰规则

- 每宠物每周推送 ≤ 3 条
- 免打扰 22:00–8:00
- 同类合并：多宠物同类型提醒合并为一条
- 用户可一键关闭所有提醒

### 6.3 微信订阅消息模板

需要申请以下模板：
- 到期提醒模板（疫苗/驱虫/体检）
- 逾期催办模板
- 每日待办汇总模板

---

## 7. AI 能力接入

### 7.1 OCR 识别（P1）

- **API**：腾讯云 OCR 通用印刷体识别
- **流程**：拍照 → 上传云存储 → 云函数调用 OCR → 提取文字 → 正则匹配结构化字段 → 返回结果
- **识别目标**：疫苗本（种类/日期/批号）、处方单（药品/剂量）、化验单（指标/数值）

### 7.2 LLM 养护建议（P1）

- **API**：云函数调用大模型 API（腾讯混元 / OpenAI）
- **输入**：宠物档案JSON（品种/年龄/体重/疫苗/驱虫/体检记录/季节）
- **输出**：5个维度的个性化建议（饮食/运动/疫苗驱虫/体检/季节性）
- **合规**：每条建议标注数据来源 + 免责声明

### 7.3 语音录入（P1）

- **API**：微信同声传译插件（wx.createInnerAudioContext + 语音识别）
- **流程**：录音 → 转文字 → 填入记录内容框

---

## 8. 设计规范

### 8.1 色彩系统

```css
--primary: #00b578;        /* 薄荷绿 主色 */
--primary-600: #009a67;    /* 深薄荷 */
--primary-soft: #e2f7ee;   /* 浅薄荷底 */
--primary-tint: #f0fbf6;   /* 极浅薄荷 */
--ink: #1f2a26;            /* 深色文字 */
--text: #5b6b63;           /* 正文 */
--muted: #9aa7a0;          /* 辅助文字 */
--bg: #f5f7f6;             /* 页面背景 */
--card: #fff;              /* 卡片背景 */
--line: #e8eeea;           /* 边框 */
--success: #10b981;        /* 成功 */
--warning: #f59e0b;        /* 警告 */
--danger: #ef4444;         /* 危险 */
--violet: #7c6cf0;         /* AI身份色 */
```

### 8.2 组件规范

- 卡片圆角：20px
- 按钮圆角：13px
- 图标尺寸：20px（默认）、17px（小）、22px（大）
- 字体：系统字体（PingFang SC）
- 阴影：`0 8px 24px rgba(21,40,32,.06)`

### 8.3 页面结构

- 四页 Tab 导航（首页/记录/提醒/我的）
- 二级页面从右侧滑入
- AI 悬浮按钮（右下角，「我的」页隐藏）
- 记录页有事项记录/成长记录两个子Tab

---

## 9. 云函数清单

| 云函数 | 触发方式 | 功能 |
|---|---|---|
| login | 用户登录 | wx.login → 创建/更新用户记录 |
| calcHealthScore | 记录变更时 | 重新计算养护指数 |
| sendReminder | 定时触发器 | 检查到期提醒 → 发送订阅消息 |
| ocrRecognize | 用户拍照 | 调用腾讯云OCR → 返回结构化数据 |
| aiCareAdvice | 用户请求 | 调用LLM → 返回养护建议 |
| generateReport | 用户请求 | 生成PDF档案导出 |

---

## 10. 上线清单

- [ ] 注册微信小程序账号，获取 AppID
- [ ] 开通微信云开发
- [ ] 申请微信订阅消息模板
- [ ] 申请腾讯云 OCR API 密钥
- [ ] 品种库数据导入（至少50个主流犬猫品种）
- [ ] 真机测试（iOS + Android 主流机型）
- [ ] 提交审核 → 上线
- [ ] 参赛资料：PDF介绍文档 + 演示视频 + 技术方案
