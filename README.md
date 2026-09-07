# Datawhale AI Learning Roadmap

Datawhale 人工智能培养方案 V3.0 与闯关式学习地图。

本项目面向希望系统学习人工智能、构建 AI 应用或使用 AI 提升生产力的学习者。路线按照学习目标组织，强调最小前置、同类择一、项目验收和按需补齐基础能力。

## 在线体验

GitHub Pages 开启后可访问：

<https://datawhalechina.github.io/ai-learning-roadmap/>

也可以直接下载仓库并双击 `index.html`。网页为纯静态实现，不依赖后端；学习进度保存在当前浏览器的 LocalStorage 中。

## 培养方案

- [阅读完整培养方案](./curriculum-v3.0.md)
- [打开闯关式学习地图](https://datawhalechina.github.io/ai-learning-roadmap)

## 当前路线

- AI 使用与个人生产力
- AI 应用构建
  - 低代码与工作流
  - RAG 与知识应用
  - Agent 与工具调用
  - 多模态与实时交互
  - 结构化数据与数据智能
- 模型与算法
  - LLM 原理、训练与推理
  - CV、推荐、强化学习、多模态等专业方向
- FDE 预备与 AI 解决方案交付

培养方案还提供 SQL、统计、数学、软件工程、产品、安全和科研方法等自选支线，以及论文、官方文档和 GitHub 仓库等高级扩展材料。

## 文件结构

```text
.
├── index.html          # 闯关式学习地图入口
├── styles.css          # 页面样式
├── app.js              # 路线数据、关卡逻辑与本地进度
├── curriculum-v3.0.md  # 完整培养方案文档
├── LICENSE
└── README.md
```

## 本地预览

直接打开 `index.html`，或者在仓库目录启动静态服务器：

```bash
python -m http.server 8000
```

然后访问 <http://localhost:8000/>。

## 共建

欢迎补充课程资源、修正路线关系、提供真实学习故事或完善项目验收标准。新增资源时建议说明：

- 适合放入的主路线和分支
- 学习关系：必达、择一、按需、实践或参考
- 适合人群和前置知识
- 建议学习投入与最终产出
- 与现有资源的重合和差异
- 最近更新时间与维护状态

## License

本项目采用 [Apache License 2.0](./LICENSE)。
