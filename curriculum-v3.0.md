# Datawhale 人工智能培养方案 3.0

## 课程摘要

> **Note**  
> 版本号：V3.0
> 本培养方案面向希望系统学习人工智能、构建 AI 应用、使用 AI 提升生产力的学习者。培养方案按照学习目标组织路线，并为每个阶段提供推荐课程、可选分支和项目验收标准。学习者不需要完成表中的全部课程，应根据自己的目标选择一条主线，再按项目需要补充相关知识。

## 前言

本培养方案是 Datawhale 社区围绕人工智能学习路线的一次系统整理。

在 2.0 版本中，我们主要按照自然语言处理、计算机视觉、推荐系统、数据分析、大数据开发等专业方向组织课程。这样的划分适合经典机器学习和深度学习时代，因为许多学习者的目标是掌握一个算法方向，再进入论文、竞赛、工程或岗位场景。

到了大模型时代，学习目标变得更加多元：有人希望理解 Transformer、预训练、后训练和推理部署；有人希望构建 RAG、Agent、MCP 和 AI 工作流；也有人并不准备训练模型，但希望把 AI 用在学习、办公、科研、写作、编程和个人生产系统中。

因此，3.0 版本希望回答一个更实际的问题：在今天的 AI 环境中，一个人应该如何根据自己的目标选择学习路线，并逐步做出真正能帮助自己和他人的作品？

本培养方案主要由以下部分组成：

- **故事汇**：通过具体的学习或工作场景，说明一条路线为什么值得学习、会在什么地方用到。
- **课程表**：按照学习关系、课程类型、课程名称和课程资料，列出推荐学习顺序。
- **能力标准**：为每个阶段提供可观察、可验收的学习产出。
- **项目实践**：让课程学习最终收束到一个可以运行、可以解释、可以复现、可以评估的项目。

3.0 版本继续遵循“Datawhale 内部项目优先、外部优秀资源补位”的收录原则。当 Datawhale 已有较完整项目时，优先作为主线资源；当关键模块暂时缺少内部项目时，再补充官方文档、经典课程或主流开源项目。

## 如何阅读课程表

课程表中的“学习关系”分为以下几类：

- **必达**：这条路线需要掌握的核心能力，建议按顺序完成并通过项目验收。
- **择一**：多门课程覆盖相近能力，学习者选择其中一门完成即可。
- **按需**：只有进入特定方向或遇到相应项目需求时才需要学习。
- **实践**：用于综合运用前面知识的项目，不以阅读完教程为完成标准。
- **参考**：资料导航、知识地图或扩展阅读，不需要从头到尾学习。

课程类型用于说明课程主要解决什么问题，例如 AI 素养、Python、RAG、Agent、评测或部署。学习关系回答“要不要学”，课程类型回答“学的是什么”，两者不再混在一起。

## 如何选择路线

学习者可以先根据自己的目标选择一条主线。公共起点只包含最少的 AI 素养与学习工具，不要求所有人先完成科学计算、数据分析、SQL、机器学习和深度学习。

| 你的目标 | 推荐路线 |
| --- | --- |
| 先学会正确使用 AI | 公共起点与 AI 素养 → AI 使用与个人生产力 |
| 用 AI 改造学习、办公或内容工作 | 公共起点与 AI 素养 → AI 使用与个人生产力 → 个人工作流项目 |
| 构建知识库问答 | 开发者最小工具包 → AI 应用开发 → RAG 分支 → 可靠交付关卡 |
| 构建智能体应用 | 开发者最小工具包 → AI 应用开发 → Agent 分支 → 可靠交付关卡 |
| 使用低代码平台搭建工作流 | 公共起点与 AI 素养 → 工作流分支 → 业务工作流项目 |
| 构建图片、音频或视频应用 | 开发者最小工具包 → AI 应用开发 → 多模态交互分支 → 可靠交付关卡 |
| 构建数据问答或分析助手 | 开发者最小工具包 → AI 应用开发 → 结构化数据与数据智能分支 → 可靠交付关卡 |
| 理解大模型原理 | 算法路线补给包 → 大模型原理、训练与推理 → 模型实验 |
| 进入 CV、推荐、强化学习等方向 | 算法路线补给包 → 选择一个专业方向 → 方向项目 |
| 进入多模态模型方向 | 深度学习与视觉基础 → 多模态模型 → 多模态项目 |
| 进入具身智能方向 | 视觉、强化学习与机器人补给 → 具身智能 → 仿真或机器人项目 |
| 提升科研与内容产出 | AI 使用与个人生产力 → 科研阅读、绘图或内容插件 → 作品实践 |
| 面向真实客户交付 AI 方案 | AI 应用开发 → 可靠交付关卡 → FDE 预备路线 |
| 建立个人生产与商业系统 | AI 使用与个人生产力 → AI 应用开发 → OPC 与个人生产系统 |

如果仍然不确定，可以先从“公共起点与 AI 素养”开始，完成一个小任务后再选择方向。路线不是一次性的终身选择，学习者可以在完成项目后切换或组合新的分支。

## 能力阶段与 OPC 九级人才能力标准

培养方案回答“学什么、怎么学、用什么项目学”，能力标准回答“学到什么程度算过关”。

3.0 版本保留 OPC 九级人才能力标准作为个人生产与商业交付方向的参考，同时不把它作为所有研究、算法和工程路线唯一的高低排序。对于多数学习者，L1—L6 可以作为通用的学习与构建阶段；L7—L9 是面向业务闭环、系统协作和生态贡献的进阶分支。

| 阶段 | 等级 | 能力目标 | 对应学习内容 |
| --- | --- | --- | --- |
| Learner | L1 认知者 | 理解 AI 与 OPC 概念，具备基本 AI 素养 | AI 通识、模型边界、提示与验证 |
| Learner | L2 工具使用者 | 熟悉主流 AI 工具，能够正确完成真实任务 | AI 办公、写作、科研与编程基础 |
| Learner | L3 场景识别者 | 识别可改造场景，完成需求和流程分析 | 业务流程拆解、数据与场景建模 |
| Builder | L4 工作流搭建者 | 组合模型和工具，替代部分重复工作 | Dify、Coze、n8n、RAG、MCP |
| Builder | L5 应用构建者 | 独立做出可运行的 AI 应用 | 工作流、RAG、Agent、多模态、数据智能 |
| Builder | L6 价值交付者 | 完成真实交付并形成明确价值 | 评测、部署、安全、用户反馈 |
| Founder | L7 业务闭环者 | 获客、交付、收款，形成持续收入 | OPC、产品设计、商业闭环 |
| Founder | L8 系统协作者 | 调度多种工具与智能体，一人多角色运作 | Agent Harness、多智能体、组织协作 |
| Founder | L9 生态贡献者 | 输出方法论，培养他人并参与生态共建 | 开源项目、课程共建、社区组织 |

学习者也可以使用更简洁的四阶段检查自己：

- **理解**：能够解释概念、能力边界和风险。
- **使用**：能够用 AI 稳定完成一个真实任务。
- **构建**：能够做出可以运行、可以复现的系统。
- **交付**：能够让真实用户采用，并用指标验证价值。

## Datawhale 书系与常见别名

Datawhale 有不少项目会以“某某书”或昵称传播。为了方便学习者识别，这里把常见叫法和正式项目对应起来。

| 常见叫法 | 正式项目 / 书名 | 适合放入路线 | 说明 |
| --- | --- | --- | --- |
| 南瓜书 | [`pumpkin-book`](https://github.com/datawhalechina/pumpkin-book) | 机器学习理论 | 《机器学习》（西瓜书）公式详解 |
| 西瓜书代码实战 | [`machine-learning-toy-code`](https://github.com/datawhalechina/machine-learning-toy-code) | 机器学习实践 | 机器学习经典算法代码实践 |
| 宝箱书 | [`key-book`](https://github.com/datawhalechina/key-book) | 机器学习理论进阶 | 《机器学习理论导引》的证明、案例和概念补充 |
| 熊猫书 | [`joyful-pandas`](https://github.com/datawhalechina/joyful-pandas) | 数据分析 | Pandas 中文教程，适合系统掌握表格数据处理 |
| 葡萄书 | [`grape-book`](https://github.com/datawhalechina/grape-book) | 图学习 / GNN | 图深度学习教程 |
| 蘑菇书 | [`easy-rl`](https://github.com/datawhalechina/easy-rl) | 强化学习 | 强化学习中文教程 |
| 苹果书 | [`leedl-tutorial`](https://github.com/datawhalechina/leedl-tutorial) | 深度学习 | 李宏毅深度学习教程 |
| 杨桃书 | [`happy-llm`](https://github.com/datawhalechina/happy-llm) | 大模型原理与实践 | 从 NLP、Transformer、训练到 RAG、Agent 的系统路线 |
| 香蕉书 | [`happy-figure`](https://github.com/datawhalechina/happy-figure) | AI 科研绘图 | 科研绘图、提示策略、矢量化后处理和期刊合规 |

# 专业方向

## 公共起点与 AI 素养

### 故事汇

小鲸第一次接触大模型时，最先学会的是向模型提问。它可以帮他总结资料、修改文字、解释代码，看起来什么都能做。但在真正使用时，他很快遇到了新的问题：答案有时会编造事实，引用可能不存在，把内部资料直接上传也会带来隐私风险。

公共起点的目标不是让所有人先学完一整套计算机和数学课程，而是让学习者知道什么时候可以相信 AI、什么时候必须查证、如何保护数据，以及如何把一个模糊任务表达清楚。完成这个起点后，学习者应当马上选择自己的目标路线，在项目中继续补充知识。

### 课程表

| 学习关系 | 课程类型 | 课程名称 | 课程资料 |
| --- | --- | --- | --- |
| 必达 | AI 工具素养 | AI Skills for Everyone | [`ai-skills-for-everyone`](https://github.com/datawhalechina/ai-skills-for-everyone) |
| 择一 | Prompt 入门 | AI Prompting for Everyone | [`ai-prompting-for-everyone`](https://github.com/datawhalechina/ai-prompting-for-everyone) |
| 择一 | Prompt 工程 | 构建“听话”提示词教程 | [`smart-prompt`](https://github.com/datawhalechina/smart-prompt) |
| 必达 | 负责任使用 | 模型边界、事实核查、隐私与版权基础 | 培养方案公共任务 |
| 实践 | AI 素养任务 | 完成一次带来源核查的 AI 辅助任务 | 公共起点验收项目 |

### 验收标准

- 能够说明生成式 AI 适合和不适合完成的任务。
- 能够对事实、数字和引用进行基本核查。
- 能够写出目标、上下文、约束和输出格式清晰的任务说明。
- 能够列出自己的隐私、版权和人工确认边界。

## 开发者最小工具包

### 故事汇

小雨准备做一个知识库助手。她没有先把 Python、数据库、Docker 和机器学习全部学完，而是从模型 API 开始：运行一段 Python、配置密钥、发送请求、读取 JSON，再把项目放进 Git 仓库。当项目需要部署时，她才补上 Docker；当需要查询业务数据时，她再学习 SQL。

开发者最小工具包不是一条必须从头学到底的独立路线，而是技术学习者的补给站。已经具备相关能力的学习者可以直接跳过；零基础学习者也只需要先掌握足以支持第一个项目的部分。

### 课程表

| 学习关系 | 课程类型 | 课程名称 | 课程资料 |
| --- | --- | --- | --- |
| 按需 | Python 基础 | 聪明办法学 Python | [`learn-python-the-smart-way`](https://github.com/datawhalechina/learn-python-the-smart-way) |
| 必达 | API 与 JSON | 使用模型 API 完成结构化调用 | [`llm-cookbook`](https://github.com/datawhalechina/llm-cookbook) 入门章节 |
| 按需 | Git | Git 教程 | [`faster-git`](https://github.com/datawhalechina/faster-git) |
| 按需 | Docker | Docker 教程 | [`docker-notes`](https://github.com/datawhalechina/docker-notes) |
| 按需 | 数据分析 | 熊猫书：Joyful Pandas | [`joyful-pandas`](https://github.com/datawhalechina/joyful-pandas) |
| 按需 | SQL | 从 0 到 1 掌握 SQL | [`wonderful-sql`](https://github.com/datawhalechina/wonderful-sql) |
| 按需 | 科学计算 | Python 科学计算教程 | [`scientific-computing`](https://github.com/datawhalechina/scientific-computing) |

### 如何判断是否需要学习

| 学习目标 | 科学计算 | 数据分析 | SQL |
| --- | --- | --- | --- |
| AI 工具与个人提效 | 不要求 | 按场景学习 | 按场景学习 |
| 低代码工作流 | 不要求 | 选修 | 选修 |
| RAG / Agent 应用 | 基础了解即可 | 处理数据时学习 | 连接结构化数据时学习 |
| FDE / 企业 AI 交付 | 选修 | 建议掌握 | 建议掌握 |
| 机器学习 / 模型训练 | 建议掌握 | 建议掌握 | 按方向学习 |
| 数据科学 / 推荐系统 | 必学 | 必学 | 必学或强烈建议 |
| CV / 具身智能 | 必学 | 按需 | 通常不是前置 |

## AI 使用与个人生产力

### 故事汇

> **嘉宾分享预留**：计划邀请科研、办公、内容创作或个人知识管理实践者，分享一个真实工作流如何被 AI 改造，以及工具热潮过去后真正留下了哪些长期习惯。

小陈并不准备成为算法工程师。他最希望解决的问题，是每天需要阅读大量资料、整理会议记录、撰写文章和反复处理相似文件。最开始，他收集了很多 AI 工具，却发现工具越多，工作反而越碎。

后来他先画出自己的工作流程，区分资料输入、信息判断、内容生成、人工确认和最终发布，再选择少量工具完成每一步。这条路线关注的不是“会多少工具”，而是能否把 AI 变成一个每周真实使用、能够持续改进的个人生产系统。

### 课程表

| 学习关系 | 课程类型 | 课程名称 | 课程资料 |
| --- | --- | --- | --- |
| 必达 | AI 工具素养 | AI Skills for Everyone | [`ai-skills-for-everyone`](https://github.com/datawhalechina/ai-skills-for-everyone) |
| 择一 | Prompt | AI Prompting for Everyone / Smart Prompt | [`ai-prompting-for-everyone`](https://github.com/datawhalechina/ai-prompting-for-everyone) / [`smart-prompt`](https://github.com/datawhalechina/smart-prompt) |
| 必达 | 场景分析 | 识别可改造任务，拆解现有工作流程 | 路线实践任务 |
| 择一 | 低代码应用 | Self Dify / Coze AI 私人提效助理 | [`self-dify`](https://github.com/datawhalechina/self-dify) / [`coze-ai-assistant`](https://github.com/datawhalechina/coze-ai-assistant) |
| 按需 | 跨工具自动化 | Handy n8n | [`handy-n8n`](https://github.com/datawhalechina/handy-n8n) |
| 按需 | 论文阅读 | Whale Paper | [`whale-paper`](https://github.com/datawhalechina/whale-paper) |
| 按需 | 个人知识系统 | Whale Paper Pal | [`whale-paper-pal`](https://github.com/datawhalechina/whale-paper-pal) |
| 按需 | 科研绘图 | 香蕉书：AI 科研绘图 | [`happy-figure`](https://github.com/datawhalechina/happy-figure) |
| 按需 | 技术博客 | Vibe Blog | [`vibe-blog`](https://github.com/datawhalechina/vibe-blog) |
| 按需 | 视频资料整理 | Video Devour | [`video-devour`](https://github.com/datawhalechina/video-devour) |
| 实践 | 个人工作流 | 我的 AI 生产力系统 | 综合项目 |

### 验收标准

- 能够拆解一个真实、重复发生的工作流程。
- 能够说明 AI 节点和人工负责节点。
- 工作流至少连续完成三次真实任务。
- 能够比较改造前后的时间、质量或体验。

### 进阶选修与扩展材料

| 材料类型 | 名称 | 适合继续探索的问题 |
| --- | --- | --- |
| 设计指南 | [Google People + AI Guidebook](https://pair.withgoogle.com/guidebook-v2/) | 场景选择、用户控制、反馈与信任 |
| 案例集 | [PAIR Case Studies](https://pair.withgoogle.com/guidebook-v2/case-studies) | 真实团队如何设计和迭代 AI 产品 |
| 官方文档 | [n8n Advanced AI](https://docs.n8n.io/advanced-ai/) | 将个人流程扩展为可运行的自动化系统 |

## AI 应用开发

### 故事汇

#### 《AI 应用开发工程师工作的一天》

小望，一名练习时长两年半的 AI 应用开发工程师，最擅长给 codex、claude code 和 cursor 进行任务分包。

作为一个成熟的 AI 应用开发工程师，小望到公司的第一件事是冲杯咖啡，以待看到满屏 Bad Case 反馈的时候压压惊。这天小望打开反馈界面，发现昨天一共反馈了 30 多条 Bad Case，赶紧饮下一口苦咖啡——又是艰苦奋斗的一天了。好在聪明的 codex 已经接入了日志系统，通过指导 codex 按照经验抓取日志并逐个分析，小望很快总结出了三个核心问题：

- 超过一半的 Case 反馈是昨晚开始实时问答等待时间超长，且经常出现回答失败。小望通过错误 Case 的 Pipeline 日志发现超时都出现在搜索阶段，再结合昨晚搜索大盘的时延明显上升的指标，判断是昨晚的异步任务带来的突发流量导致搜索资源不足；
- 三分之一的 Case 反馈是 AI 对用户的状态记录有误，这是一个之前就偶发的 Case，小望关联之前出现过的零星 Case，找到了一个通用归因：AI 在记录用户的一件事情进展的时候，总是记住了开始，忘记了最近的进展；
- 最后的 Case 都是有关实时问答与周期复盘出现矛盾，AI 在实时回答的时候回答了 A，周期复盘却回答了 B，给用户造成了困扰。针对这个 Case，小望一眼就看出是实时链路和周期复盘两个链路的一致性问题。

Bad Case 都需要解决，但经验丰富的小望知道如何进行任务的分发以高效完成修复。他判断记录用户事件错误大概率是因为召回信息失败，因此让 codex 根据 Case 去查召回内容和 AI 输入，判断是不是召回策略的问题；实时链路和周期复盘链路一致性是历史遗留问题，需要抽取共有资源来提高一致性，因此他让 claude code 去分析链路架构，设计架构改进文档。小望则先投入到最紧急、当前仍有偶发报错的搜索资源问题中。

首先是要快速保障当前资源可用。小望先暂停了非核心离线任务，并让实时问答在搜索不可用时进入保守降级，优先保障线上问答基本质量。然后将资源问题反馈给搜索平台，push 平台扩容的同时，对消费任务的重试策略进行调整并加入幂等能力。搜索服务初步恢复之后，小望没有立即把积压任务全部放开，而是调整并发情况，分批恢复消费，在保障实时链路的同时推进离线挤压任务消费。随着搜索问题初步恢复，小望将整体恢复过程和沟通情况提给 claude code，让它完成事故复盘文档。

下一个问题是记忆错误。小望 review 了 codex 的分析，发现历史召回和长期记忆都存在问题：基于语义匹配的搜索策略会优先召回语义关联度更高的开始或进行中描述，而遗漏了更新但语义关联度较弱的结束描述；而长期记忆中存在的事实性幻觉来源则更复杂也更难修复。针对这两个问题，小望从两个维度同时入手：一是调整搜索 query 生成的策略，要求其寻找开始、暂停、取消、恢复和完成等状态变化，并在重排时考虑信息发生的先后顺序；另一个则是降低模型对长期记忆的依赖，限制它必须要基于原消息来进行回答。

制定完优化策略，小望就可以将代码任务分包给已经制定了完善 harness 流程的 codex 进行代码的编写和测试，自己则投入到最后一个 Case 也就是链路一致性问题中。他先 review 了 claude code 写好的架构改进文档，基于自己的经验指出了文档中的几个问题，claude 逐一修复之后，再交给 codex 进行交叉评审。完成对所有细节的修订之后，小望把文档交给 cursor 进行代码生成，自己则对生成的事故复盘文档进行了一些人工润色后提交给了老板。

几个事情完成，小望终于可以歇下来一边督促 codex 和 cursor 写代码，一边打开 github datawhale 首页准备学习些新知识。刚看两行，PM 杀到工位让对齐下一步进度，于是2个小时过去了......

满脑子嗡嗡的小望回到工位，发现 codex 和 cursor 都已经完成了代码的书写和测试。小望分别让 codex 和 cursor 进行交叉 code review，并一边将两版代码提交到两个测试环境进行人工测试。测试无误，小望快速核对了核心改动代码之后，手工将两版代码合并到主代码，开始灰度上线。经过紧张刺激的上线，发现接入部分流量之后没有任何大面积报错，小望长出一口气，明天再来评估新版本效果就可以宣告修复完成，于是美滋滋合上电脑下班。

深夜2点半，小望被告警电话惊醒，发现突发流量把模型服务打崩了，定睛一看，是合并资源的实时链路和周期复盘错误地使用了同一个在线模型资源，在线资源扛不住突发的复盘流量......

AI 应用开发路线关注如何把模型能力组合成一个真正可用的系统。学习者先掌握模型 API 和结构化输出，再根据目标选择工作流、RAG、Agent、多模态交互或数据智能分支。RAG 不再作为所有人都必须单独完成的一条大路线，而是 AI 应用开发中的知识应用分支；Agent、工作流、多模态和数据能力也可以根据项目自由组合。

### 共同主线

| 学习关系 | 课程类型 | 课程名称 | 课程资料 |
| --- | --- | --- | --- |
| 择一 | LLM 应用入门 | 面向开发者的 LLM 入门教程 | [`llm-cookbook`](https://github.com/datawhalechina/llm-cookbook) |
| 择一 | 项目式入门 | 动手学大模型应用开发 | [`llm-universe`](https://github.com/datawhalechina/llm-universe) |
| 必达 | 结构化输出 | API、JSON、错误处理与成本记录 | 共同实践任务 |
| 实践 | 第一个 AI 功能 | 命令行或网页形式的单功能助手 | 共同验收项目 |

### 工作流与低代码分支

#### 故事汇（嘉宾分享预留）

> 计划邀请使用 Dify、Coze 或 n8n 改造真实业务流程的实践者，分享如何选择平台、如何拆解流程、哪些环节必须保留人工确认，以及工作流从演示走向长期运行时遇到的问题。嘉宾、案例和分享链接将在后续共建中补充。

| 学习关系 | 课程类型 | 课程名称 | 课程资料 |
| --- | --- | --- | --- |
| 择一 | Dify | Self Dify | [`self-dify`](https://github.com/datawhalechina/self-dify) |
| 择一 | Coze | Coze AI 私人提效助理 | [`coze-ai-assistant`](https://github.com/datawhalechina/coze-ai-assistant) |
| 按需 | n8n | Handy n8n | [`handy-n8n`](https://github.com/datawhalechina/handy-n8n) |
| 按需 | 跨设备助手 | OpenClaw 学习教程 | [`openclaw-tutorial`](https://github.com/datawhalechina/openclaw-tutorial) |
| 实践 | 业务工作流 | 可交付的自动化工作流 | 综合项目 |

Dify 和 Coze 主要用于完成同类的低代码入门目标，初学者选择一个即可。n8n 更适合需要定时任务、Webhook 和跨系统自动化的场景，不要求所有学习者统一前置。

#### 进阶选修与扩展材料

| 材料类型 | 名称 | 适合继续探索的问题 |
| --- | --- | --- |
| 官方文档 | [Dify Documentation](https://docs.dify.ai/) | 工作流编排、知识库、插件与生产部署 |
| 官方文档 | [n8n Advanced AI](https://docs.n8n.io/advanced-ai/) | AI 节点、工具调用、人工介入和跨系统自动化 |
| 设计指南 | [Google People + AI Guidebook](https://pair.withgoogle.com/guidebook-v2/) | 用户控制、失败回退、信任与 AI 产品体验 |

### RAG 与知识应用分支

#### 故事汇（嘉宾分享预留）

> 计划邀请知识库、搜索或企业问答项目的负责人，分享数据清洗、切分、召回、引用和评测中的真实取舍。故事应包含一个“最初以为是模型问题，后来发现是数据或检索问题”的具体案例。

| 学习关系 | 课程类型 | 课程名称 | 课程资料 |
| --- | --- | --- | --- |
| 必达 | RAG 快速入门 | 动手学大模型应用开发 | [`llm-universe`](https://github.com/datawhalechina/llm-universe) |
| 必达 | RAG 系统主线 | RAG 技术全栈指南 | [`all-in-rag`](https://github.com/datawhalechina/all-in-rag) |
| 择一 | 向量数据库 | 从零开始的向量数据库原理与实践 | [`easy-vecdb`](https://github.com/datawhalechina/easy-vecdb) |
| 择一 | 向量检索 | 向量检索与 RAG 实践 | [`what-is-vs`](https://github.com/datawhalechina/what-is-vs) |
| 按需 | 信息检索 | 信息检索导论 | [`fun-ir`](https://github.com/datawhalechina/fun-ir) |
| 按需 | 数据到 AI | Easy Data x AI | [`easy-data-x-ai`](https://github.com/datawhalechina/easy-data-x-ai) |
| 实践 | RAG 框架 | Wow RAG | [`wow-rag`](https://github.com/datawhalechina/wow-rag) |
| 实践 | 知识应用 | 有依据的知识助手 | 综合项目 |

[`llm-universe`](https://github.com/datawhalechina/llm-universe) 适合作为个人知识库快速入门，[`all-in-rag`](https://github.com/datawhalechina/all-in-rag) 作为系统主线。[`easy-vecdb`](https://github.com/datawhalechina/easy-vecdb) 与 [`what-is-vs`](https://github.com/datawhalechina/what-is-vs) 都包含向量检索相关内容，初学者不需要同时完成，可根据自己更关注数据库原理还是检索实践进行选择。

#### 进阶选修与扩展材料

| 材料类型 | 名称 | 适合继续探索的问题 |
| --- | --- | --- |
| 论文 | [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401) | RAG 的原始问题设定与基本架构 |
| GitHub | [Microsoft GraphRAG](https://github.com/microsoft/graphrag) | 图结构知识、全局问题与社区摘要 |
| GitHub | [Ragas](https://github.com/explodinggradients/ragas) | RAG 数据集、自动评测和实验闭环 |
| 论文 / 基准 | [BRIGHT](https://github.com/xlang-ai/BRIGHT) | 推理密集型检索与更困难的评测任务 |

### 智能体与工具调用分支

#### 故事汇（嘉宾分享预留）

> 计划邀请 Agent、MCP 或自动化项目的开发者，分享为什么选择 Agent 而不是固定工作流、如何控制工具权限和循环成本，以及一次真实失败如何改变了系统设计。

| 学习关系 | 课程类型 | 课程名称 | 课程资料 |
| --- | --- | --- | --- |
| 参考 | Agent 资料导航 | AI Agent 学习路线与资料库 | [`Agent-Learning-Hub`](https://github.com/datawhalechina/Agent-Learning-Hub) |
| 必达 | Agent 原理与实践 | 从零开始构建智能体 | [`hello-agents`](https://github.com/datawhalechina/hello-agents) |
| 择一 | Agent 框架 | Wow Agent | [`wow-agent`](https://github.com/datawhalechina/wow-agent) |
| 择一 | LangGraph 实战 | Deep Agents 实战 | [`deepagents-in-action`](https://github.com/datawhalechina/deepagents-in-action) |
| 择一 | Langent 教程 | Easy Langent | [`easy-langent`](https://github.com/datawhalechina/easy-langent) |
| 必达 | MCP | MCP 极简开发 | [`mcp-lite-dev`](https://github.com/datawhalechina/mcp-lite-dev) |
| 按需 | Agent Skills | Agent Skills with Anthropic 中文整理 | [`agent-skills-with-anthropic`](https://github.com/datawhalechina/agent-skills-with-anthropic) |
| 按需 | Harness 工程 | Self Harness | [`self-harness`](https://github.com/datawhalechina/self-harness) |
| 按需 | 多智能体 | Handy Multi-Agent | [`handy-multi-agent`](https://github.com/datawhalechina/handy-multi-agent) |
| 实践 | Agent 应用 | 可控的任务智能体 | 综合项目 |

[`hello-agents`](https://github.com/datawhalechina/hello-agents) 作为原理与实践主线。框架类教程选择一门完成即可；只有项目确实需要复杂协作时，再进入 Harness 或多智能体内容。

#### 进阶选修与扩展材料

| 材料类型 | 名称 | 适合继续探索的问题 |
| --- | --- | --- |
| 论文 | [ReAct: Synergizing Reasoning and Acting](https://arxiv.org/abs/2210.03629) | 推理与行动交替的经典 Agent 范式 |
| 工程博客 | [Anthropic：Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) | 工作流与 Agent 的边界及常见架构模式 |
| 官方 SDK | [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) | Agent、Handoff、Guardrail 和 Tracing |
| 开放规范 | [Model Context Protocol](https://modelcontextprotocol.io/specification/) | 模型、工具与数据源之间的标准化连接 |

### 多模态与实时交互分支

#### 故事汇（嘉宾分享预留）

> 计划邀请图片理解、语音助手、视频分析或实时交互应用的开发者，分享不同模态的输入处理、延迟与成本、用户体验和评测方法。故事应说明“能够调用多模态模型”和“做出可用的多模态产品”之间的差距。

这条分支关注使用现有多模态模型构建应用，而不是从头训练多模态模型。希望深入模型原理和训练的学习者，可以继续进入后文的“多模态模型”专业方向。

| 学习关系 | 课程类型 | 课程名称 | 课程资料 |
| --- | --- | --- | --- |
| 必达 | 多模态 API | 图片、音频、视频输入与结构化输出 | 主流模型官方 API 文档 |
| 按需 | 视觉模型 | Hugging Vision | [`hugging-vis`](https://github.com/datawhalechina/hugging-vis) |
| 按需 | 音频模型 | Hugging Audio | [`hugging-audio`](https://github.com/datawhalechina/hugging-audio) |
| 按需 | 视频资料 | Video Devour | [`video-devour`](https://github.com/datawhalechina/video-devour) |
| 实践 | 多模态资料助手 | 处理图片、音频或视频并生成有依据的结果 | 综合项目 |

#### 进阶选修与扩展材料

| 材料类型 | 名称 | 适合继续探索的问题 |
| --- | --- | --- |
| 官方文档 | [Hugging Face Multimodal Chat Templates](https://huggingface.co/docs/transformers/en/chat_templating_multimodal) | 开源多模态模型的输入格式与推理 |
| 官方文档 | [Gemini Image Understanding](https://ai.google.dev/gemini-api/docs/image-understanding) | 图片描述、问答、检测与分割 |
| 官方文档 | [Gemini Audio Understanding](https://ai.google.dev/gemini-api/docs/audio) | 音频理解、转写、时间戳和结构化输出 |
| 官方文档 | [Gemini Video Understanding](https://ai.google.dev/gemini-api/docs/video-understanding) | 长视频、视听联合理解和时间定位 |
| GitHub | [Qwen2.5-VL](https://github.com/QwenLM/Qwen2.5-VL) | 开源视觉语言模型、部署与应用案例 |

### 结构化数据与数据智能分支

#### 故事汇（嘉宾分享预留）

> 计划邀请数据分析、Text-to-SQL 或企业数据助手项目的实践者，分享如何理解表结构和业务口径、怎样限制查询权限、为什么“SQL 能运行”不等于“业务答案正确”，以及如何用真实问题建立评测集。

这条分支面向表格、数据库、数据仓库和业务指标。它与 RAG 的区别是：RAG 主要连接非结构化知识，数据智能主要连接结构化数据和可执行查询；真实项目也可以同时使用两者。

| 学习关系 | 课程类型 | 课程名称 | 课程资料 |
| --- | --- | --- | --- |
| 按需 | SQL | 从 0 到 1 掌握 SQL | [`wonderful-sql`](https://github.com/datawhalechina/wonderful-sql) |
| 按需 | 数据分析 | 熊猫书：Joyful Pandas | [`joyful-pandas`](https://github.com/datawhalechina/joyful-pandas) |
| 必达 | 数据到 AI | Easy Data x AI | [`easy-data-x-ai`](https://github.com/datawhalechina/easy-data-x-ai) |
| 必达 | 数据权限与口径 | Schema、指标定义、只读权限与查询审计 | 分支实践任务 |
| 实践 | 数据问答助手 | 自然语言查询、结果解释与图表报告 | 综合项目 |

#### 进阶选修与扩展材料

| 材料类型 | 名称 | 适合继续探索的问题 |
| --- | --- | --- |
| GitHub | [DB-GPT](https://github.com/eosphoros-ai/DB-GPT) | 数据库、表格、代码分析和数据 Agent |
| 论文 / 基准 | [Spider 2.0](https://github.com/xlang-ai/Spider2) | 真实企业级 Text-to-SQL 工作流与评测 |
| GitHub | [ReFoRCE](https://github.com/Snowflake-Labs/ReFoRCE) | Schema 探索、自我修正和复杂 Text-to-SQL |
| 设计指南 | [Google People + AI Guidebook](https://pair.withgoogle.com/guidebook-v2/) | 数据结果解释、用户信任和失败处理 |

### AI 产品设计与人机交互（共享选修）

#### 故事汇（嘉宾分享预留）

> 计划邀请 AI 产品经理、设计师或一线用户，分享如何设置合理预期、让用户纠正模型、设计人工接管，以及为什么模型指标提升并不一定带来更好的产品体验。

该模块不是一条独立技术路线，而是所有应用分支都可以选择的共享扩展。建议至少在结业项目前完成一次真实用户测试。

| 学习关系 | 课程类型 | 课程名称 | 课程资料 |
| --- | --- | --- | --- |
| 按需 | 人本 AI 设计 | People + AI Guidebook | [Google PAIR](https://pair.withgoogle.com/guidebook-v2/) |
| 实践 | 用户测试 | 观察用户完成任务并记录误解、失败和接管 | 项目实践 |
| 实践 | 反馈闭环 | 让用户评价、纠正或拒绝 AI 结果 | 项目实践 |

## 可靠交付：评测、工程化与安全

### 故事汇

#### 《AI 平台工程师工作的一天》

小之，一名工作经验三年的 AI 平台工程师，日常奔赴在各个业务一线的救火中。

一个普普通通的工作日，还没到闹钟点，手机就以迅雷不及掩耳之势连响十几下成功叫醒小之。打开一看，自己被拉进了一个“优惠券超发紧急处理”群里，客服、运营、财务和几位老板已经完成了从“是不是页面错了”到“谁先去解释一下”的充分讨论。

来不及去公司了，小之赶紧爬起来打开电脑回顾整体经过。作为新时代 AI 平台，小之所在组提供了通用 Agent 搭建及运维能力，支持了包括数分、财务、运营等多个业务团队的自定义业务 Agent，其中一个就是客服的业务 Agent，其可以在审批通过的前提下自动完成舆情观测、优惠券发放等任务。问题就出在这个 Agent。

昨天下午，某个业务故障影响了一批用户，客服团队让 Agent 统计人数，并制定每人发放 20 元优惠券的方案。Agent 查到 312 名用户，生成计划后暂停任务，等待运营负责人审批。负责人在会议间隙核对了页面上的“312 人，每人 20 元”，点击同意并安排晚上发放。结果今早财务预警，显示实际发放金额从预计的 6,240 元变成了 36,840 元——Agent 已经给 1842 人发完了优惠券。

小之打开平台大盘，上面一片祥和：模型请求成功，用户审批成功，工具调用成功，1842 张券也一张不少地发放成功。从系统的角度看，每个环节都完成了工作；从人的角度看，它们最好有一个环节当时没那么努力。经验丰富的小之一下就猜出了原因——大概率是审批前后环境发生了变化。

当务之急是避免事故再次发生，因为各业务线复用一套 Agent 审核、行动机制，理论上来说，这样的错误也可能在其他业务线的 Agent 复现。小之先冻结了 Agent 所有涉及线上用户的行动机制，并撰写文案同步各业务团队，然后根据自己的推测让 codex 去拉客服 Agent 的日志来验证。

完成紧急补救，小之先进行了极速洗漱+咖啡续命，飞奔至公司准备开始今日的火线救援——看来今天又是元气满满的一天。

来到公司，codex 已经给出了事故的整体时间线：生成审批方案时视图中只有 312 人，等待审批期间数据团队补全了遗漏数据，视图变成 1842 人。Agent 只保存了对话 History，原用户列表被压缩成“已找到 312 名用户”；审批后，它拿不到原列表，便在当前环境重新查询，将最新的 1842 人送给了发券工具。

小之整理了事故原因，先参与复盘会。在复盘会上报告完事故原因，客服同学负责后续的超发券召回及解释，业务方则需要对此类高风险工具加入验证机制，小之则需要思考一个通用问题——如何解决 Agent 运行期间环境变化导致的结果不可信问题？

通过 claude code 检查当前各个业务 Agent，小之梳理了业务和平台的边界：

- 业务负责提交确定的待执行动作，提供业务对象或快照引用、前置条件和幂等语义；
- 平台负责保存模型的运行现场，将审批与待执行动作绑定，并记录任务从中断到恢复的全部事实；
- 恢复时，平台检查现场和当前权限，业务检查业务前置条件；任何一项不通过，都不能悄悄继续。

基于这三点，小之收敛了一个通用 Feature 方案：**AI 任务运行检查点**。

- 业务进入审批前需要提交 Pending Action，声明动作、业务快照引用、审批摘要、前置条件和幂等键。平台不理解它们的业务意义，只负责规范化并生成操作指纹，将审批与指纹绑定。
- 平台会生成 StepContext，自动保存模型、Prompt、输出 Schema、工具路由和权限策略；追加式 Rollout 则记录模型输入输出、工具结果、History 压缩、审批、中断和重试。History 可以为模型效果而压缩，工程事实却不会跟着一起丢失。
- 恢复时，平台根据 Rollout 重建 History，检查 StepContext、操作指纹和当前权限，再调用业务的前置条件检查。全部通过后，平台才把原幂等键交给业务工具。业务如果将 312 人的快照换成 1842 人，指纹就会变化，原审批立即失效；之后是重新规划、转人工还是取消，由业务决定。

方案得到老板通过之后，小之立刻开始开发。通过组合 codex、claude code 和 cursor，小之很快完成了 agent harness 的改造与单测。初步完成之后，小之先将这个改动灰度开放给客服 agent 来进行测试。通过让业务方复现事故触发原因，并故意在审批期间改动数据将更新受影响用户视图，在业务方完成审批之后，平台侧重建时会拦截无法匹配的审批和工具执行，发起重新审批要求。

验证通过，小之将 agent 推全并同步各下游业务方，顺便恢复了已经确认安全的 agent 行动机制，今天的救火就算圆满解决了。

小之美滋滋收拾东西准备下班，刚走到电梯口，突然被拉进一个新群。定睛一看，一个业务方提需：希望平台侧支持有约束解码，能够较大程度提高业务稳定性，很急，希望尽快支持......

因此，3.0 版本不再把“AI 工程化、评测与安全”作为一条内容混杂的独立路线，而是把它拆成所有应用项目都需要逐步通过的可靠交付关卡。

### 质量关卡

| 学习关系 | 关卡 | 学习目标 | 推荐资料 |
| --- | --- | --- | --- |
| 必达 | 可评测 | 建立最小评测集，定义成功标准和基线 | All-in-RAG 评测章节、OpenAI Evals |
| 必达 | 可观察 | 记录请求、工具调用、错误、延迟和成本 | Full Stack Deep Learning 相关资料 |
| 必达 | 可控制 | 处理超时、重试、缓存、降级和人工确认 | 项目工程实践 |
| 必达 | 可部署 | 提供依赖、配置、部署和回滚说明 | [`docker-notes`](https://github.com/datawhalechina/docker-notes)、托管平台官方文档 |
| 必达 | 安全与治理 | 检查权限、隐私、提示注入和敏感信息泄漏 | OWASP GenAI Security Top 10 |
| 按需 | 本地模型 | 动手学 Ollama | [`handy-ollama`](https://github.com/datawhalechina/handy-ollama) |
| 按需 | 推理部署 | LLM Deploy | [`llm-deploy`](https://github.com/datawhalechina/llm-deploy) |
| 按需 | GPU | Hello GPU | [`hello-gpu`](https://github.com/datawhalechina/hello-gpu) |
| 按需 | ROCm | Hello ROCm | [`hello-rocm`](https://github.com/datawhalechina/hello-rocm) |

### 验收标准

- 有不少于 20 条的最小评测集，能够重复运行。
- 能够从日志定位至少一次真实失败。
- 记录延迟、成本、模型和关键配置。
- 对高风险工具设置最小权限和人工确认。
- 其他学习者能够根据说明完成部署或访问应用。

### 进阶选修与扩展材料

| 材料类型 | 名称 | 适合继续探索的问题 |
| --- | --- | --- |
| GitHub | [Promptfoo](https://github.com/promptfoo/promptfoo) | 模型与提示评测、红队测试和 CI 集成 |
| GitHub | [Langfuse](https://github.com/langfuse/langfuse) | Trace、数据集、在线评测与可观测性 |
| 安全清单 | [OWASP GenAI Security Project](https://genai.owasp.org/) | LLM 与 Agent 应用的威胁和防护 |
| 公开课程 | [Full Stack Deep Learning](https://fullstackdeeplearning.com/) | AI 产品从数据、测试到部署和监控的生命周期 |

## 大模型原理、训练与推理

### 故事汇

> **嘉宾分享预留**：计划邀请模型训练、后训练或推理系统方向的研究者与工程师，分享一次模型实验从假设、失败到复现的完整过程。

小文已经会使用 ChatGPT、DeepSeek 和 Claude，但在做项目时经常遇到三个问题：模型为什么会答错、怎么让输出更稳定、什么时候应该微调或部署本地模型。

大模型路线的目标，是让学习者从“会调用模型”走向“理解模型结构和系统边界”。它包括 Transformer、预训练、后训练和推理部署，也包括数据、计算资源、评测和实验复现。由于多门课程都包含从零构建模型的内容，初学者应选择一条白盒实践完成，而不是重复手搓相似模块。

### 算法路线补给包

| 学习关系 | 课程类型 | 课程名称 | 课程资料 |
| --- | --- | --- | --- |
| 按需 | 数学基础 | 人工智能的数学基础 | [`math-for-ai`](https://github.com/datawhalechina/math-for-ai) |
| 必达 | 深度学习理论 | 李宏毅深度学习教程（苹果书） | [`leedl-tutorial`](https://github.com/datawhalechina/leedl-tutorial) |
| 必达 | 深度学习框架 | 深入浅出 PyTorch | [`thorough-pytorch`](https://github.com/datawhalechina/thorough-pytorch) |
| 按需 | 机器学习理论 | 南瓜书：《机器学习》公式详解 | [`pumpkin-book`](https://github.com/datawhalechina/pumpkin-book) |
| 按需 | 机器学习实践 | 西瓜书代码实战 | [`machine-learning-toy-code`](https://github.com/datawhalechina/machine-learning-toy-code) |

数学知识可以围绕注意力、损失函数、优化、评测等具体任务按需补齐，不建议把全部数学课程设置为长期统一前置。

### 课程表

| 学习关系 | 课程类型 | 课程名称 | 课程资料 |
| --- | --- | --- | --- |
| 择一 | 大模型通识 | 大模型基础：一文了解大模型基础知识 | [`so-large-lm`](https://github.com/datawhalechina/so-large-lm) |
| 择一 | 大模型入门 | 理工科大模型入门实训课程 | [`llm-preview`](https://github.com/datawhalechina/llm-preview) |
| 按需 | NLP 到 LLM | 从 NLP 到 LLM 的算法全栈教程 | [`base-llm`](https://github.com/datawhalechina/base-llm) |
| 必达 | LLM 系统主线 | 杨桃书：Happy-LLM | [`happy-llm`](https://github.com/datawhalechina/happy-llm) |
| 择一 | 从零构建 | 从 0 构建大语言模型 | [`llms-from-scratch-cn`](https://github.com/datawhalechina/llms-from-scratch-cn) |
| 择一 | 白盒构建 | 大模型白盒子构建指南 | [`tiny-universe`](https://github.com/datawhalechina/tiny-universe) |
| 按需 | 训练系统进阶 | 系统性大语言模型构建课程 | [`diy-llm`](https://github.com/datawhalechina/diy-llm) |
| 按需 | 微调与部署 | 开源大模型食用指南 | [`self-llm`](https://github.com/datawhalechina/self-llm) |
| 按需 | 本地部署 | 动手学 Ollama | [`handy-ollama`](https://github.com/datawhalechina/handy-ollama) |
| 按需 | 推理部署 | 大模型推理和部署理论与实践 | [`llm-deploy`](https://github.com/datawhalechina/llm-deploy) |
| 按需 | 后训练 | Post-Training for LLMs 中文整理 | [`post-training-of-llms`](https://github.com/datawhalechina/post-training-of-llms) |
| 按需 | 前沿解读 | DeepSeek 系列工作解读、扩展和复现 | [`unlock-deepseek`](https://github.com/datawhalechina/unlock-deepseek) |
| 按需 | 推理机制 | 推理王国 | [`reasoning-kingdom`](https://github.com/datawhalechina/reasoning-kingdom) |
| 实践 | 模型实验 | 可复现的模型训练、微调或推理实验 | 综合项目 |

[`happy-llm`](https://github.com/datawhalechina/happy-llm) 作为系统主线；[`llms-from-scratch-cn`](https://github.com/datawhalechina/llms-from-scratch-cn) 与 [`tiny-universe`](https://github.com/datawhalechina/tiny-universe) 选择一个完成白盒实践；[`diy-llm`](https://github.com/datawhalechina/diy-llm) 更适合希望继续进入训练系统、分布式训练和推理优化的学习者。

### 进阶选修与扩展材料

| 材料类型 | 名称 | 适合继续探索的问题 |
| --- | --- | --- |
| 论文 | [Attention Is All You Need](https://arxiv.org/abs/1706.03762) | Transformer 的原始结构与设计动机 |
| 课程 / 实现 | [Stanford CS336: Language Modeling from Scratch](https://stanford-cs336.github.io/spring2025/) | 数据、Tokenizer、训练、系统和 Scaling |
| GitHub | [Hugging Face Transformers](https://github.com/huggingface/transformers) | 主流开源模型实现与训练生态 |
| GitHub | [vLLM](https://github.com/vllm-project/vllm) | 高吞吐推理、调度和服务化 |

## 经典 AI 方向与专业分支

### 故事汇

> **嘉宾分享预留**：各专业方向分别保留嘉宾位置。计划邀请 CV、推荐、强化学习、图学习、数据竞赛及行业应用实践者，介绍该方向最适合初学者的第一个问题、基线和作品。

大模型正在改变 AI 的学习方式，但经典方向并没有消失。CV、推荐系统、强化学习、图学习、数据竞赛、医学影像和量化金融等方向，仍然是科研、竞赛、实习、岗位和行业应用的重要入口。

这些方向彼此并不是一条连续的必修路线。一个希望学习推荐系统的人，不需要先把 CV 和强化学习全部学完。学习者应选择一个具体问题、一个公开数据集和一个可复现基线，在项目中深入对应方向。

### 课程表

| 学习关系 | 专业方向 | 课程名称 | 课程资料 |
| --- | --- | --- | --- |
| 择一 | 数据竞赛 | Competition Baseline | [`competition-baseline`](https://github.com/datawhalechina/competition-baseline) |
| 按需 | 大数据 | Datawhale 大数据处理导论 | [`juicy-bigdata`](https://github.com/datawhalechina/juicy-bigdata) |
| 择一 | 计算机视觉 | 动手学 CV-PyTorch | [`dive-into-cv-pytorch`](https://github.com/datawhalechina/dive-into-cv-pytorch) |
| 按需 | CV 检测 | YOLO Master | [`yolo-master`](https://github.com/datawhalechina/yolo-master) |
| 按需 | OpenMMLab | OpenMMLab Tutorial | [`openmmlab-tutorial`](https://github.com/datawhalechina/openmmlab-tutorial) |
| 择一 | 推荐系统 | 推荐系统入门教程 | [`fun-rec`](https://github.com/datawhalechina/fun-rec) |
| 实践 | 推荐系统 | Torch-RecHub | [`torch-rechub`](https://github.com/datawhalechina/torch-rechub) |
| 择一 | 强化学习 | 强化学习中文教程（蘑菇书） | [`easy-rl`](https://github.com/datawhalechina/easy-rl) |
| 实践 | 强化学习 | JoyRL Book | [`joyrl-book`](https://github.com/datawhalechina/joyrl-book) |
| 择一 | 图深度学习 | 图深度学习（葡萄书） | [`grape-book`](https://github.com/datawhalechina/grape-book) |
| 按需 | AI 安全 | 网络安全中的人工智能方法 | [`ml-for-security`](https://github.com/datawhalechina/ml-for-security) |
| 按需 | 医学影像 | 医学影像处理开源教程 | [`med-imaging-primer`](https://github.com/datawhalechina/med-imaging-primer) |
| 按需 | 金融量化 | Quant for Beginners / Whale Quant | [`quant-for-beginners`](https://github.com/datawhalechina/quant-for-beginners) / [`whale-quant`](https://github.com/datawhalechina/whale-quant) |
| 参考 | AGI 路径 | Path2AGI | [`Path2AGI`](https://github.com/datawhalechina/Path2AGI) |

### 项目验收

- 选择一个明确任务和公开或自有数据集。
- 运行一个可复现基线。
- 完成至少一次有对照的改进实验。
- 报告指标、资源消耗、误差分析和局限。

### 进阶选修与扩展材料

专业方向变化较快，扩展资料优先选择原始论文、官方仓库和公开基准。每个方向的嘉宾分享页可以继续维护一份“论文三篇、仓库两个、基准一个”的精简清单，避免再次堆积成无法选择的资源目录。

| 方向 | 扩展入口 |
| --- | --- |
| 计算机视觉 | [OpenMMLab](https://github.com/open-mmlab)、[Ultralytics](https://github.com/ultralytics/ultralytics) |
| 推荐系统 | [RecBole](https://github.com/RUCAIBox/RecBole)、[TorchRec](https://github.com/pytorch/torchrec) |
| 强化学习 | [CleanRL](https://github.com/vwxyzjn/cleanrl)、[Gymnasium](https://github.com/Farama-Foundation/Gymnasium) |
| 图学习 | [PyTorch Geometric](https://github.com/pyg-team/pytorch_geometric)、[DGL](https://github.com/dmlc/dgl) |

## 多模态模型

### 故事汇

> **嘉宾分享预留**：计划邀请视觉语言、音频或视频模型方向的研究者与开发者，分享多模态数据、训练、评测和应用中的实际经验。

小航想做一个能够看图、听音频、读视频和理解屏幕的资料助手。他发现，文本模型只是入口，多模态系统还需要理解不同模态的数据表示、模型能力和评测方式。

多模态路线适合希望学习视觉语言模型、音频模型、视频理解和多模态生成的学习者。它可以服务于应用开发，也可以继续深入模型训练与研究。

### 课程表

| 学习关系 | 课程类型 | 课程名称 | 课程资料 |
| --- | --- | --- | --- |
| 必达 | 多模态大模型 | Start MLLM | [`start-mllm`](https://github.com/datawhalechina/start-mllm) |
| 按需 | 视觉模型 | Hugging Vision | [`hugging-vis`](https://github.com/datawhalechina/hugging-vis) |
| 按需 | 音频模型 | Hugging Audio | [`hugging-audio`](https://github.com/datawhalechina/hugging-audio) |
| 按需 | 音乐生成 | MusicLM Universe | [`musiclm-universe`](https://github.com/datawhalechina/musiclm-universe) |
| 实践 | 多模态应用 | 多模态资料助手 | 综合项目 |

## 具身智能

### 故事汇

> **嘉宾分享预留**：计划邀请机器人、仿真、VLA 或强化学习方向的实践者，分享从算法到真实环境之间最容易被初学者忽视的工程问题。

小航进一步希望让系统控制机器人。他很快发现，能够理解图片和视频并不等于能够在真实环境中行动。具身智能还需要感知、决策、控制、强化学习、机器人系统和仿真环境等知识。

因此，具身智能不再与多模态入门放在同一条必修序列中。学习者应先根据项目补齐视觉、强化学习或机器人基础，再进入具身智能工程。

### 课程表

| 学习关系 | 课程类型 | 课程名称 | 课程资料 |
| --- | --- | --- | --- |
| 必达 | 具身智能 | Every Embodied | [`every-embodied`](https://github.com/datawhalechina/every-embodied) |
| 必达 | 具身智能工程 | Dive into Embodied AI | [`dive-into-embodied-ai`](https://github.com/datawhalechina/dive-into-embodied-ai) |
| 按需 | World Model | Learn World Model | [`learn-world-model`](https://github.com/datawhalechina/learn-world-model) |
| 实践 | 机器人教程 | Hello Robotics | [`hello-robotics`](https://github.com/datawhalechina/hello-robotics) |
| 实践 | AI 语音小车 | Whale Bot | [`whale-bot`](https://github.com/datawhalechina/whale-bot) |
| 实践 | 具身项目 | 感知、决策、控制或仿真链路 | 综合项目 |

## FDE 预备路线

### 故事汇

> **嘉宾分享预留**：计划邀请 FDE、解决方案工程师或企业 AI 项目负责人，围绕需求发现、现场约束、上线采用和价值指标讲述一次真实交付。

小周已经可以做出 RAG 和 Agent Demo，但第一次面对真实客户时，问题完全不同：客户并不能准确说出需求，数据分散在多个系统中，权限和安全要求复杂，上线之后还需要培训用户、观察采用率并持续迭代。

Forward Deployed Engineer 位于客户问题、产品能力和工程交付的交叉位置。FDE 不只需要会构建 AI 应用，还需要完成需求发现、技术范围界定、系统集成、可靠上线和价值验证。

真实 FDE 岗位通常要求已有工程和客户交付经验，因此本培养方案将其称为“FDE 预备路线”。它适合作为 AI 应用开发后的进阶方向，而不是零基础学习者的第一条路线。

### 课程表

| 学习关系 | 能力模块 | 学习内容 | 验收产出 |
| --- | --- | --- | --- |
| 必达 | 问题发现 | 用户访谈、现有流程、约束和利益相关者 | 访谈记录与现状流程图 |
| 必达 | 技术定界 | 成功指标、方案比较、范围和停止条件 | 技术范围说明与基线指标 |
| 必达 | 快速原型 | 使用真实或脱敏数据完成端到端验证 | 一周价值原型与试用反馈 |
| 必达 | 数据集成 | API、SQL、文件、身份认证与权限 | 架构图、数据字典和权限矩阵 |
| 必达 | 可靠上线 | 评测、安全、日志、成本、灰度与回滚 | 上线检查表和运行手册 |
| 必达 | 用户采用 | 培训、反馈、采用率和工作流影响 | 上线复盘和价值指标 |
| 实践 | 真实交付 | 完成一个真实或高仿真的 AI 交付项目 | FDE 交付档案 |

### FDE 结业要求

- 至少一个真实或高仿真的客户场景。
- 有需求访谈和技术范围界定，而不只是自拟题目。
- 有上线前后的业务、效率或质量指标。
- 有评测集、权限边界、日志和成本记录。
- 有用户反馈、项目迭代和交付文档。
- 将有效方案沉淀为模板、组件或交付手册。

## OPC 与个人生产系统

### 故事汇

> **嘉宾分享预留**：计划邀请独立开发者、内容创业者和社区贡献者，分享从个人效率、首次交付到业务闭环的真实过程。

小玥不只想学习 AI，她希望 AI 能成为自己的生产系统：帮助自己找资料、做内容、写代码、交付项目、复盘收入和沉淀方法论。

OPC 路线对应从个人效率到产品交付、业务闭环和生态贡献的能力升级。它不只是工具使用路线，也不要求所有 AI 学习者都走向创业。希望进行个人商业实践、独立产品和社区共建的学习者，可以在完成 AI 使用或应用构建路线后进入。

### 课程表

| 学习关系 | 课程类型 | 课程名称 | 课程资料 |
| --- | --- | --- | --- |
| 必达 | AI 工具素养 | AI Skills for Everyone | [`ai-skills-for-everyone`](https://github.com/datawhalechina/ai-skills-for-everyone) |
| 按需 | 个人知识系统 | Whale Paper Pal | [`whale-paper-pal`](https://github.com/datawhalechina/whale-paper-pal) |
| 必达 | 工作流 | Handy n8n | [`handy-n8n`](https://github.com/datawhalechina/handy-n8n) |
| 择一 | AI 应用 | Self Dify / Coze AI Assistant | [`self-dify`](https://github.com/datawhalechina/self-dify) / [`coze-ai-assistant`](https://github.com/datawhalechina/coze-ai-assistant) |
| 实践 | 内容生产 | Vibe Blog | [`vibe-blog`](https://github.com/datawhalechina/vibe-blog) |
| 实践 | 产品设计 | VC Lab | [`vc-lab`](https://github.com/datawhalechina/vc-lab) |
| 实践 | 个人交付 | 完成一次真实需求、交付和复盘 | OPC 实践项目 |
| 参考 | 生态共建 | Datawhale 开源项目管理委员会 | DOPMC |

# 自选支线：AI 之外的基础能力

AI 应用并不是只由模型、RAG 和 Agent 构成。真实项目还会遇到数据库、统计、软件工程、产品设计、安全和技术表达等问题。这些内容不适合全部放进公共前置，否则初学者会在做出第一个作品前学习过多知识；但如果完全省略，又容易让项目停留在 Demo 阶段。

因此，3.0 版本将这些非 AI 知识整理为自选支线。学习者可以先进入 AI 主线，在项目遇到具体问题时选择一条支线，再把支线成果带回原项目。

自选支线不要求全部完成，也不用于判断不同学习者能力的高低。

| 自选支线 | 推荐学习路线 | 可以接回的 AI 场景 |
| --- | --- | --- |
| SQL 与业务数据 | SQL → 关系模型 → 数据口径 → 只读查询与审计 → 数据问答项目 | Text-to-SQL、数据智能、RAG、FDE |
| 数据分析与统计 | Pandas → 描述统计 → 可视化 → 实验设计 → 指标与误差分析 | 评测集、模型实验、推荐系统、业务分析 |
| 科学计算与数学 | Python → NumPy → 线性代数 → 概率统计 → 优化与数值实验 | 机器学习、LLM 原理、CV、强化学习 |
| 软件工程与部署 | Git → 命令行 → HTTP/API → 测试 → Docker → CI/CD 与监控 | 所有 Builder 项目、模型服务、FDE |
| 产品与用户研究 | 需求访谈 → 流程分析 → 原型 → 可用性测试 → 指标与反馈 | 工作流、RAG、Agent、多模态、OPC、FDE |
| 安全、隐私与治理 | 网络与 Web 基础 → 身份与权限 → 数据分级 → 威胁建模 → 安全测试 | RAG、Agent、数据智能、企业交付 |
| 科研方法与技术表达 | 文献检索 → 实验设计 → 复现 → 图表 → 写作 → 代码发布 | 模型研究、专业方向、开源共建 |

## SQL 与业务数据支线

### 适合什么时候进入

当项目需要连接数据库、理解业务指标、生成 SQL，或者回答“某项数据为什么发生变化”时进入。这条支线不只学习 SQL 语法，还需要理解表之间的关系、指标口径、权限和查询审计。

### 推荐学习路线

| 阶段 | 学习内容 | 推荐资料或任务 | 支线产出 |
| --- | --- | --- | --- |
| S1 | SQL 查询基础 | 从 0 到 1 掌握 SQL | 完成筛选、聚合、连接和子查询练习 |
| S2 | 关系模型与数据字典 | 主键、外键、范式、事实表与维度表 | 为一个项目绘制 ER 图并编写数据字典 |
| S3 | 业务指标与数据口径 | 指标定义、时间范围、缺失值和异常值 | 建立不少于 10 个业务问题与标准答案 |
| S4 | 权限与查询审计 | 只读账号、危险语句限制、日志 | 提交权限矩阵和查询记录 |
| S5 | 项目实践 | 数据问答或 Text-to-SQL 助手 | 用真实问题验证 SQL 与业务答案 |

完成后可以接入“结构化数据与数据智能”“RAG 与知识应用”或“FDE 预备路线”。

## 数据分析与统计支线

### 适合什么时候进入

当项目需要清洗数据、建立评测集、比较方案效果、解释用户行为或绘制图表时进入。重点不是记住所有统计公式，而是能够正确描述数据、设计比较并识别误导性结论。

### 推荐学习路线

| 阶段 | 学习内容 | 推荐资料或任务 | 支线产出 |
| --- | --- | --- | --- |
| D1 | 表格数据处理 | 熊猫书：Joyful Pandas | 完成读取、清洗、连接和分组统计 |
| D2 | 数据分析实践 | 动手学数据分析 | 提交一份从问题到结论的数据分析报告 |
| D3 | 描述统计与抽样 | 分布、均值、中位数、方差、抽样偏差 | 为项目数据编写统计摘要 |
| D4 | 可视化 | Fantastic Matplotlib / Plotly | 选择合适图表表达一个结论 |
| D5 | 实验与评测 | 基线、对照组、误差分析、置信区间 | 比较两个模型或工作流方案 |

完成后可以接入 AI 评测、推荐系统、数据智能、FDE 价值验证和各类模型实验。

## 科学计算与数学支线

### 适合什么时候进入

当学习者希望理解模型内部原理、阅读公式、实现算法或分析训练过程时进入。应用工作流和低代码路线通常不需要先完成这条支线。

### 推荐学习路线

| 阶段 | 学习内容 | 推荐资料或任务 | 支线产出 |
| --- | --- | --- | --- |
| M1 | Python 与 NumPy | Python 科学计算教程 | 使用数组和向量化完成数值计算 |
| M2 | 线性代数 | 向量、矩阵、特征值和矩阵分解 | 用代码解释一个矩阵运算 |
| M3 | 概率统计 | 随机变量、常见分布、期望与估计 | 完成一次模拟实验并解释结果 |
| M4 | 微积分与优化 | 导数、梯度、链式法则、梯度下降 | 可视化一个优化过程 |
| M5 | 综合实践 | 人工智能的数学基础 | 将公式对应到一个模型或算法实现 |

完成后可以接入机器学习、大模型原理、CV、多模态模型、强化学习和具身智能方向。

## 软件工程与部署支线

### 适合什么时候进入

当项目开始出现“只能在我的电脑运行”、代码难以协作、错误无法定位、部署后不稳定等问题时进入。这条支线是从个人 Demo 走向可复现和可交付系统的重要桥梁。

### 推荐学习路线

| 阶段 | 学习内容 | 推荐资料或任务 | 支线产出 |
| --- | --- | --- | --- |
| E1 | Git 与协作 | Faster Git | 使用分支、提交和 Pull Request 管理项目 |
| E2 | 命令行与环境 | Linux / Shell、环境变量、依赖管理 | 编写一份可复现的环境配置说明 |
| E3 | Web 与 API 基础 | HTTP、JSON、状态码、认证和 Webhook | 调用并调试一个外部 API |
| E4 | 测试与代码质量 | 单元测试、集成测试、日志和错误处理 | 为核心流程加入测试和失败提示 |
| E5 | 容器与部署 | Docker 教程 | 将项目打包并在另一台环境运行 |
| E6 | 持续交付与监控 | CI/CD、配置、回滚、指标和告警 | 完成一次自动检查、部署和运行记录 |

完成后可以接入所有 AI 应用项目、模型服务、可靠交付关卡和 FDE 预备路线。

## 产品与用户研究支线

### 适合什么时候进入

当学习者已经能够实现功能，但不确定用户是否真的需要、是否理解模型边界、是否愿意长期使用时进入。这条支线帮助学习者从“我能做什么”转向“用户的问题是什么”。

### 推荐学习路线

| 阶段 | 学习内容 | 推荐资料或任务 | 支线产出 |
| --- | --- | --- | --- |
| P1 | 问题与需求访谈 | 访谈、观察、现有流程与痛点 | 完成至少两次用户访谈 |
| P2 | 场景和流程分析 | 用户旅程、服务蓝图、人工与 AI 边界 | 绘制当前流程和目标流程 |
| P3 | 原型与范围 | 低保真原型、最小范围和非目标 | 在开发前完成一次原型评审 |
| P4 | 人机交互 | People + AI Guidebook | 设计预期、反馈、解释和人工接管 |
| P5 | 用户测试 | 任务成功率、观察记录和可用性问题 | 让至少三位用户完成真实任务 |
| P6 | 指标与迭代 | 采用率、任务质量、时间和留存 | 根据反馈完成一次产品迭代 |

完成后可以接入工作流、RAG、Agent、多模态应用、OPC 和 FDE 路线。

## 安全、隐私与治理支线

### 适合什么时候进入

当项目开始处理真实用户、内部文件、数据库、外部工具或可能产生现实影响的操作时进入。安全不只是过滤模型输出，还包括身份、权限、数据、依赖和运行环境。

### 推荐学习路线

| 阶段 | 学习内容 | 推荐资料或任务 | 支线产出 |
| --- | --- | --- | --- |
| G1 | 网络与 Web 基础 | 请求、服务、Cookie、Token 和常见攻击面 | 画出项目的数据与信任边界 |
| G2 | 身份与权限 | 认证、授权、最小权限和密钥管理 | 建立角色与权限矩阵 |
| G3 | 数据隐私 | 数据分级、脱敏、保留与删除 | 编写项目数据处理说明 |
| G4 | 威胁建模 | 资产、攻击者、入口、风险和缓解措施 | 完成一次轻量威胁建模 |
| G5 | GenAI 安全 | OWASP GenAI Security Project | 检查提示注入、数据泄漏和不安全工具调用 |
| G6 | 安全测试 | Promptfoo 或同类工具 | 建立一组项目安全测试样例 |

完成后可以接入 RAG、Agent、数据智能、可靠交付和企业 FDE 项目。

## 科研方法与技术表达支线

### 适合什么时候进入

当学习者准备复现论文、比较算法、撰写技术报告或参与开源共建时进入。重点是让结论有证据、实验可复现、图表能够正确表达结果。

### 推荐学习路线

| 阶段 | 学习内容 | 推荐资料或任务 | 支线产出 |
| --- | --- | --- | --- |
| R1 | 文献检索与阅读 | Whale Paper | 建立带来源和阅读状态的文献表 |
| R2 | 研究问题与实验设计 | 假设、基线、变量、数据和指标 | 写出一页实验计划 |
| R3 | 实验复现 | 环境、随机种子、配置和日志 | 复现一个公开基线并解释差异 |
| R4 | 图表表达 | Happy Figure、Matplotlib 或 Plotly | 制作一张可解释、可复用的结果图 |
| R5 | 技术写作 | 方法、结果、局限和引用 | 完成实验报告或技术文章 |
| R6 | 代码发布 | README、许可证、数据说明和发布流程 | 发布一个可复现仓库或共建 PR |

完成后可以接入大模型研究、经典 AI 专业方向、科研内容生产和 Datawhale 开源共建。

# 综合项目池

课程学习最后需要收束到项目。项目不一定要大，但要能运行、能解释、能复现、能评估。

| 项目 | 覆盖方向 | 对应能力阶段 | 核心验收标准 |
| --- | --- | --- | --- |
| 我的 AI 生产力系统 | AI 使用、工作流、个人知识系统 | L2—L4 | 连续完成三次真实任务，有人工确认和效果对比 |
| Datawhale 社区知识库 | RAG、Agent、评测 | L4—L6 | 支持引用、更新、评测和部署 |
| AI 课程助教 | RAG、Agent、工作流 | L4—L6 | 能回答课程问题、整理作业、生成反馈并保留依据 |
| 技术文章生产系统 | 内容创作、Agent、OPC | L5—L7 | 支持选题、调研、写作、配图、发布和复盘 |
| 可控任务智能体 | Agent、MCP、评测、安全 | L5—L6 | 工具可追踪，具有超时、停止、权限和人工确认 |
| 数据问答与分析助手 | SQL、数据智能、评测、安全 | L4—L6 | 查询可审计，口径清晰，有真实问题集与结果验证 |
| 多模态资料助手 | 多模态、RAG、内容创作 | L4—L6 | 处理 PDF、视频或图片并生成有依据的结构化笔记 |
| 本地模型服务 | LLM、推理、部署 | L5—L7 | 支持本地调用、日志、性能和资源记录 |
| 专业方向基线 | CV、推荐、强化学习或图学习 | 方向专项 | 有公开基线、对照实验、指标与误差分析 |
| 具身智能仿真项目 | 多模态、强化学习、机器人 | 方向专项 | 跑通感知、决策、控制或仿真链路 |
| FDE 真实交付档案 | 需求、集成、评测、上线、采用 | L6—L8 | 有访谈、系统、指标、用户反馈和交付复盘 |

## 统一项目验收标准

所有项目至少满足前四项；面向真实交付的项目建议满足全部八项。

| 验收维度 | 验收问题 |
| --- | --- |
| 可运行 | 新用户能否按照说明运行或访问？ |
| 可解释 | 学习者能否解释关键设计选择？ |
| 可复现 | 是否记录依赖、数据、模型和参数？ |
| 可评估 | 是否有样例、评测集和成功标准？ |
| 可观察 | 是否记录错误、延迟、成本和关键行为？ |
| 可控制 | 是否有权限、人工确认、降级和回滚？ |
| 有价值 | 是否改善了真实任务或用户体验？ |
| 可沉淀 | 是否形成 README、报告、模板或可复用组件？ |

# 故事汇共建

故事汇可以邀请各个方向的行业前辈、项目负责人和学习者共同参与。故事的重点不是展示履历，而是帮助读者理解一个人为什么选择这条路线、遇到过什么问题、最后做出了什么。

建议每篇故事包含以下内容：

1. 当时想解决什么问题。
2. 最初误判了什么，走过什么弯路。
3. 哪个项目或事件带来转折。
4. 真正学习了哪些内容，又跳过了哪些内容。
5. 最后做出了什么作品，或产生了什么真实变化。
6. 如果今天重新开始，会如何选择学习路线。
7. 对应本培养方案中的入口、课程和项目。

故事汇既欢迎行业专家，也欢迎普通学习者、转行者、非技术用户和失败复盘。行业前辈的经历可以吸引读者，普通学习者的经历可以让初学者看到一条能够到达的路径。

# 共建方式

欢迎任何有意向为本培养方案贡献新课程、补充现有课程、修正项目状态或提供学习案例的同学参与共建。

建议共建时提供以下信息：

- 项目名称和链接。
- 适合放入的主路线和分支。
- 学习关系：必达、择一、按需、实践或参考。
- 课程类型：教程、实验、项目或资料导航。
- 适合人群和前置知识。
- 建议学习投入。
- 学习目标和最终可验收产出。
- 与现有资源的重合与差异。
- 是否仍在维护，以及最近更新时间。

如果后续 Datawhale 有新的书系、纸质书或开源项目出版，可以同步补充到“Datawhale 书系与常见别名”表格中，方便学习者把常见叫法和正式课程对应起来。

## 编制参考

- [UNESCO AI Competency Framework for Students](https://www.unesco.org/en/articles/ai-competency-framework-students)
- [ACM / IEEE-CS / AAAI CS2023](https://csed.acm.org/)
- [Google Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course/)
- [Full Stack Deep Learning](https://fullstackdeeplearning.com/)
- [OWASP GenAI Security Project](https://genai.owasp.org/)
- [OpenAI Forward Deployed Engineer](https://openai.com/careers/forward-deployed-engineer-%28fde%29-sf-san-francisco/)
