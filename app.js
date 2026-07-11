"use strict";

const STORAGE_KEY = "datawhale-ai-roadmap-v31";

const resources = {
  aiSkills: ["AI Skills for Everyone", "https://github.com/datawhalechina/ai-skills-for-everyone"],
  prompting: ["AI Prompting for Everyone", "https://github.com/datawhalechina/ai-prompting-for-everyone"],
  smartPrompt: ["Smart Prompt", "https://github.com/datawhalechina/smart-prompt"],
  python: ["聪明办法学 Python", "https://github.com/datawhalechina/learn-python-the-smart-way"],
  git: ["Faster Git", "https://github.com/datawhalechina/faster-git"],
  llmCookbook: ["面向开发者的 LLM 入门教程", "https://github.com/datawhalechina/llm-cookbook"],
  llmUniverse: ["LLM Universe · 动手学大模型应用开发", "https://github.com/datawhalechina/llm-universe"],
  allInRag: ["All-in-RAG · RAG 技术全栈指南", "https://github.com/datawhalechina/all-in-rag"],
  easyVecdb: ["Easy-VecDB", "https://github.com/datawhalechina/easy-vecdb"],
  whatIsVs: ["向量检索与 RAG 实践", "https://github.com/datawhalechina/what-is-vs"],
  helloAgents: ["Hello-Agents · 从零构建智能体", "https://github.com/datawhalechina/hello-agents"],
  agentHub: ["Agent Learning Hub · 资料导航", "https://github.com/datawhalechina/Agent-Learning-Hub"],
  handyMultiAgent: ["Handy Multi-Agent", "https://github.com/datawhalechina/handy-multi-agent"],
  mcp: ["MCP 极简开发", "https://github.com/datawhalechina/mcp-lite-dev"],
  selfDify: ["Self Dify", "https://github.com/datawhalechina/self-dify"],
  n8n: ["Handy n8n", "https://github.com/datawhalechina/handy-n8n"],
  coze: ["Coze AI Assistant", "https://github.com/datawhalechina/coze-ai-assistant"],
  easyData: ["Easy Data x AI", "https://github.com/datawhalechina/easy-data-x-ai"],
  wonderfulSql: ["从 0 到 1 掌握 SQL", "https://github.com/datawhalechina/wonderful-sql"],
  joyfulPandas: ["Joyful Pandas", "https://github.com/datawhalechina/joyful-pandas"],
  huggingVis: ["Hugging Vision", "https://github.com/datawhalechina/hugging-vis"],
  huggingAudio: ["Hugging Audio", "https://github.com/datawhalechina/hugging-audio"],
  videoDevour: ["Video Devour", "https://github.com/datawhalechina/video-devour"],
  happyLlm: ["Happy-LLM · 从零开始构建大模型", "https://github.com/datawhalechina/happy-llm"],
  tinyUniverse: ["Tiny Universe · 大模型白盒子", "https://github.com/datawhalechina/tiny-universe"],
  llmScratch: ["从 0 构建大语言模型", "https://github.com/datawhalechina/llms-from-scratch-cn"],
  diyLlm: ["DIY LLM · 系统性大模型构建", "https://github.com/datawhalechina/diy-llm"],
  selfLlm: ["Self LLM · 开源大模型食用指南", "https://github.com/datawhalechina/self-llm"],
  llmDeploy: ["LLM Deploy", "https://github.com/datawhalechina/llm-deploy"],
  cv: ["动手学 CV-PyTorch", "https://github.com/datawhalechina/dive-into-cv-pytorch"],
  rec: ["Fun-Rec · 推荐系统入门", "https://github.com/datawhalechina/fun-rec"],
  rl: ["Easy-RL · 强化学习教程", "https://github.com/datawhalechina/easy-rl"],
  mllm: ["Start MLLM", "https://github.com/datawhalechina/start-mllm"],
  embodied: ["Every Embodied", "https://github.com/datawhalechina/every-embodied"],
  owasp: ["OWASP GenAI Security Project", "https://genai.owasp.org/"],
  fsdl: ["Full Stack Deep Learning", "https://fullstackdeeplearning.com/"],
  whalePaper: ["Whale Paper", "https://github.com/datawhalechina/whale-paper"],
  happyFigure: ["Happy Figure · AI 科研绘图", "https://github.com/datawhalechina/happy-figure"]
};

function quest(config) {
  return {
    type: "required",
    icon: "✦",
    duration: "2—4 小时",
    xp: 40,
    skipLevels: [],
    objectives: [],
    checklist: [],
    resources: [],
    ...config
  };
}

const quests = {
  g0: quest({
    id: "g0", stage: "共同起点", title: "AI 素养与使用边界", icon: "◎", duration: "2—3 小时", xp: 30,
    summary: "认识模型能力边界，学会查证、引用，并建立自己的安全使用规则。",
    objectives: ["判断一个任务是否适合交给 AI", "使用目标、上下文、约束和格式描述任务", "识别幻觉、隐私、版权与提示注入风险"],
    checklist: ["完成一次带来源核查的 AI 辅助任务", "写出《我的 AI 使用边界》清单", "能够解释为什么最终结果仍需人工负责"],
    resources: [resources.aiSkills, resources.prompting]
  }),
  g1: quest({
    id: "g1", stage: "开发补给", title: "开发者最小工具包", icon: "⌘", duration: "1—2 周", xp: 55,
    summary: "只学足够支持第一个项目的 Python、API、JSON、命令行与 Git。",
    skipLevels: ["developer", "ml"],
    objectives: ["运行 Python 程序并使用环境变量", "理解 API 请求、响应与 JSON", "阅读报错并完成基本 Git 操作"],
    checklist: ["调用一次模型 API 并保存 JSON 结果", "项目使用环境变量而不是硬编码密钥", "README 能让另一位学习者完成复现"],
    resources: [resources.python, resources.git]
  }),
  a1: quest({
    id: "a1", stage: "Learner", title: "会选、会问、会验证", icon: "✦", duration: "3—5 小时", xp: 35,
    summary: "从“随便问问”升级到能够稳定完成真实任务。",
    objectives: ["根据任务选择合适工具", "使用示例和输出格式稳定结果", "对事实、数字和引用进行验证"],
    checklist: ["选择一个真实学习或工作任务", "保存原始提示、模型输出与人工修改", "写下三条对下次任务有用的复盘"],
    resources: [resources.prompting, resources.smartPrompt]
  }),
  a2: quest({
    id: "a2", stage: "Learner", title: "识别可改造场景", icon: "⌕", duration: "3—5 小时", xp: 45,
    summary: "先理解流程，再判断 AI 应该介入哪一步。",
    objectives: ["把任务拆成输入、判断、执行与验收", "区分适合自动化和必须人工负责的步骤", "定义时间、质量或成本基线"],
    checklist: ["画出一个现有工作流程", "标注 AI 节点和人工确认节点", "记录至少一个改造前基线指标"],
    resources: [resources.aiSkills]
  }),
  a3: quest({
    id: "a3", stage: "Builder", title: "搭建个人 AI 工作流", icon: "↻", duration: "1 周", xp: 60,
    summary: "Dify 与 Coze 选择一种；需要跨系统自动化时再加入 n8n。",
    type: "choice",
    objectives: ["用一个平台实现多步骤流程", "加入输入校验和人工确认", "记录失败并持续调整"],
    checklist: ["工作流能够连续完成三次真实任务", "至少包含一个人工确认节点", "保存运行记录和失败案例"],
    resources: [resources.selfDify, resources.coze, resources.n8n]
  }),
  aCap: quest({
    id: "aCap", stage: "项目验收", title: "我的 AI 生产力系统", icon: "⚑", duration: "1 周", xp: 90, type: "project",
    summary: "把一个真实、高频任务变成每周可重复使用的个人系统。",
    objectives: ["整合工具、提示和工作流", "保留引用、人工判断与复盘", "用真实结果验证效率提升"],
    checklist: ["提交工作流说明或演示录屏", "记录至少三次真实使用结果", "比较改造前后的时间或质量", "整理一份可复用模板"],
    resources: [resources.whalePaper, resources.happyFigure]
  }),
  b1: quest({
    id: "b1", stage: "应用起点", title: "模型 API 与结构化输出", icon: "{ }", duration: "4—8 小时", xp: 50,
    summary: "做出第一个可运行的 AI 功能，并开始记录失败和成本。",
    objectives: ["调用至少一种模型 API", "让模型返回可验证的结构化数据", "处理基础错误、超时与重试"],
    checklist: ["完成命令行或网页形式的单功能助手", "保存至少五条测试输入与结果", "记录模型名称、参数和粗略成本"],
    resources: [resources.llmCookbook, resources.llmUniverse]
  }),
  workflow1: quest({
    id: "workflow1", stage: "工作流分支", title: "低代码平台择一", icon: "↯", duration: "3—5 天", xp: 50, type: "choice",
    summary: "Dify 与 Coze 选择一个完成主线，不需要同时精通多个平台。",
    objectives: ["理解节点、变量与条件分支", "连接一个模型和一个外部工具", "为关键操作保留人工确认"],
    checklist: ["选择并说明使用 Dify 或 Coze 的理由", "完成一个多步骤工作流", "展示成功和失败各一次"],
    resources: [resources.selfDify, resources.coze]
  }),
  workflow2: quest({
    id: "workflow2", stage: "工作流分支", title: "跨系统自动化", icon: "⇄", duration: "3—5 天", xp: 55,
    summary: "在确实需要定时、Webhook 或跨应用操作时学习 n8n。",
    objectives: ["理解触发器与 Webhook", "在两个外部系统之间传递结构化数据", "设计失败通知或人工接管"],
    checklist: ["接通至少两个真实工具或数据源", "配置一次定时或事件触发", "对失败执行提供明确提示"],
    resources: [resources.n8n]
  }),
  rag0: quest({
    id: "rag0", stage: "RAG 分支", title: "个人知识库快速入门", icon: "▤", duration: "1 周", xp: 55,
    summary: "通过一个完整小项目认识文档、切分、Embedding、检索和生成。",
    objectives: ["说清楚 RAG 的完整数据流", "加载、切分并索引自己的文档", "返回答案和来源"],
    checklist: ["使用自己的至少五份文档", "回答中能够展示来源", "记录三个失败问题并分析原因"],
    resources: [resources.llmUniverse]
  }),
  rag1: quest({
    id: "rag1", stage: "RAG 分支", title: "检索、重排与评测", icon: "⌕", duration: "1—2 周", xp: 70,
    summary: "从“能搜到”走向能够定位检索瓶颈并用数据改进。",
    objectives: ["比较切分和检索策略", "理解混合检索与重排", "分别评估检索和生成"],
    checklist: ["建立不少于 20 条的问答或检索集", "比较至少两种检索配置", "用指标和案例说明改进是否有效"],
    resources: [resources.allInRag]
  }),
  ragChoice: quest({
    id: "ragChoice", stage: "RAG 深潜", title: "向量检索专项择一", icon: "◇", duration: "按需 1 周", xp: 45, type: "choice",
    summary: "只有需要深入索引原理或向量数据库时，再从两本专项教程中选择一本。",
    objectives: ["理解近似最近邻与索引取舍", "知道召回、速度和存储之间的关系", "能为项目选择合适的向量方案"],
    checklist: ["选择一本专项资源并说明原因", "完成一个索引或查询实验", "把结论应用到当前 RAG 项目"],
    resources: [resources.easyVecdb, resources.whatIsVs]
  }),
  agent0: quest({
    id: "agent0", stage: "Agent 分支", title: "从工作流到智能体", icon: "◉", duration: "1 周", xp: 60,
    summary: "理解工具调用、状态、记忆、规划，以及什么时候不该使用 Agent。",
    objectives: ["区分固定工作流和 Agent", "实现基本工具调用循环", "理解状态、记忆和上下文的边界"],
    checklist: ["实现一个调用至少两个工具的 Agent", "保存完整工具调用轨迹", "列出一个不适合用 Agent 的场景"],
    resources: [resources.helloAgents, resources.agentHub]
  }),
  agent1: quest({
    id: "agent1", stage: "Agent 分支", title: "上下文、MCP 与权限", icon: "⌬", duration: "1 周", xp: 70,
    summary: "让智能体可控地连接外部世界，并对失败和高风险操作负责。",
    objectives: ["设计上下文与长期记忆", "使用 MCP 或等价接口暴露工具", "设置最小权限和人工确认"],
    checklist: ["完成一次 MCP 工具调用", "限制工具可访问的数据或操作", "高风险动作必须由用户确认"],
    resources: [resources.helloAgents, resources.mcp]
  }),
  agentChoice: quest({
    id: "agentChoice", stage: "Agent 深潜", title: "框架或多智能体择一", icon: "⌘", duration: "按需 1 周", xp: 45, type: "choice",
    summary: "先掌握概念，再根据项目选择一个框架或多智能体实践。",
    objectives: ["根据状态、可靠性和生态选择框架", "避免为了框架而框架", "比较单 Agent 与多 Agent 的成本"],
    checklist: ["选择一个框架或多智能体项目", "完成一个端到端案例", "记录它相对简单工作流的收益与代价"],
    resources: [resources.handyMultiAgent, resources.helloAgents]
  }),
  multimodal0: quest({
    id: "multimodal0", stage: "多模态分支", title: "图片、音频与视频输入", icon: "◫", duration: "1 周", xp: 60,
    summary: "使用现有多模态模型处理至少两种输入，而不是从头训练模型。",
    objectives: ["理解不同模态的输入格式与限制", "从图片、音频或视频中提取结构化信息", "记录文件大小、Token、延迟和成本"],
    checklist: ["完成至少两种模态的 API 调用", "输出包含来源位置或时间戳", "记录三个模型容易误解的案例"],
    resources: [resources.huggingVis, resources.huggingAudio, resources.videoDevour]
  }),
  multimodal1: quest({
    id: "multimodal1", stage: "多模态分支", title: "多模态交互与评测", icon: "◉", duration: "1 周", xp: 70,
    summary: "围绕真实任务设计输入、反馈和失败回退，而不只是展示模型能看图听音。",
    objectives: ["设计多模态任务的用户交互", "处理模态缺失、解析失败和不确定结果", "为不同模态建立验收样例"],
    checklist: ["完成一条端到端多模态任务", "包含失败提示或人工修正入口", "建立不少于 15 条的多模态测试集"],
    resources: [resources.videoDevour, resources.fsdl]
  }),
  data0: quest({
    id: "data0", stage: "数据智能分支", title: "业务口径、Schema 与只读查询", icon: "▦", duration: "1 周", xp: 60,
    summary: "先理解表结构、指标口径和权限，再让模型生成查询。",
    objectives: ["阅读数据库 Schema 和数据字典", "定义业务指标与查询边界", "使用只读权限和查询审计"],
    checklist: ["为一个数据集编写数据字典", "整理十个真实业务问题", "限制危险语句并保存查询记录"],
    resources: [resources.wonderfulSql, resources.joyfulPandas, resources.easyData]
  }),
  data1: quest({
    id: "data1", stage: "数据智能分支", title: "Text-to-SQL 与结果解释", icon: "⌘", duration: "1—2 周", xp: 75,
    summary: "让系统不仅生成可运行 SQL，还能验证结果是否符合业务问题。",
    objectives: ["根据 Schema 生成和修正 SQL", "验证执行结果与业务口径", "把结果转成表格、图表和解释"],
    checklist: ["在至少 20 个问题上测试查询", "区分语法正确与业务正确", "对错误查询提供拒绝或修正机制"],
    resources: [resources.easyData, resources.wonderfulSql]
  }),
  q1: quest({
    id: "q1", stage: "质量关卡", title: "建立最小评测闭环", icon: "✓", duration: "3—5 天", xp: 65,
    summary: "没有评测，就无法知道换模型、改提示或加 Agent 是否真的更好。",
    objectives: ["定义任务成功标准", "建立可重复运行的最小评测集", "同时观察平均分和典型失败"],
    checklist: ["评测集不少于 20 条", "记录一个可以复现的基线", "输出改动前后对比和失败分析"],
    resources: [resources.fsdl, resources.allInRag]
  }),
  q2: quest({
    id: "q2", stage: "质量关卡", title: "日志、成本与可靠性", icon: "⌁", duration: "3—5 天", xp: 65,
    summary: "让系统出错时能够定位，让成本和延迟保持在可接受范围。",
    objectives: ["记录请求、工具、错误和延迟", "设计超时、重试、缓存和降级", "测量单次或周期成本"],
    checklist: ["能够从日志定位一次失败", "至少实现一种失败降级", "提交延迟与成本记录"],
    resources: [resources.fsdl]
  }),
  q3: quest({
    id: "q3", stage: "质量关卡", title: "安全检查与可部署", icon: "▣", duration: "1 周", xp: 75,
    summary: "为数据、工具和高风险操作设置边界，并让其他人可以稳定运行。",
    objectives: ["检查提示注入和敏感数据泄漏", "设置最小权限与人工确认", "完成部署、配置和回滚说明"],
    checklist: ["按照 OWASP 清单完成一次自查", "密钥和敏感信息未进入代码仓库", "另一位用户可以按照说明部署或访问", "高风险操作存在确认或拒绝机制"],
    resources: [resources.owasp, resources.fsdl]
  }),
  capWorkflow: quest({
    id: "capWorkflow", stage: "项目验收", title: "可交付的业务工作流", icon: "⚑", duration: "1—2 周", xp: 110, type: "project",
    summary: "把一个重复业务任务改造成可运行、可观察、有人负责的工作流。",
    objectives: ["覆盖真实输入到可用输出", "有异常和人工接管路径", "用数据说明流程是否变好"],
    checklist: ["真实或高仿真用户完成试用", "提交流程图和演示", "提交运行日志、指标和失败复盘", "整理可复用模板"],
    resources: [resources.selfDify, resources.n8n]
  }),
  capRag: quest({
    id: "capRag", stage: "项目验收", title: "有依据的知识助手", icon: "⚑", duration: "1—2 周", xp: 120, type: "project",
    summary: "完成一个支持引用、更新、评测和部署的真实知识应用。",
    objectives: ["持续更新知识源", "回答提供可核查引用", "分别优化检索与生成"],
    checklist: ["支持来源引用和知识更新", "提交不少于 30 条的最终评测集", "记录延迟、成本和失败案例", "完成部署和使用说明"],
    resources: [resources.allInRag, resources.llmUniverse]
  }),
  capAgent: quest({
    id: "capAgent", stage: "项目验收", title: "可控的任务智能体", icon: "⚑", duration: "1—2 周", xp: 120, type: "project",
    summary: "构建能完成真实任务、过程可追踪、关键动作可控制的智能体。",
    objectives: ["在真实任务中组合模型与工具", "提供行为轨迹和失败解释", "控制权限、成本和循环"],
    checklist: ["至少完成 20 个真实或模拟任务", "所有工具调用可追踪", "存在停止、超时和人工确认机制", "提交评测与安全报告"],
    resources: [resources.helloAgents, resources.handyMultiAgent]
  }),
  capMultimodal: quest({
    id: "capMultimodal", stage: "项目验收", title: "多模态资料助手", icon: "⚑", duration: "1—2 周", xp: 120, type: "project",
    summary: "处理图片、音频或视频，并生成可核查、可修正的结构化结果。",
    objectives: ["组合至少两种模态", "保留来源位置、时间戳或输入证据", "让用户能够修正模型误解"],
    checklist: ["完成真实资料的端到端处理", "提交多模态测试集与失败分析", "记录延迟、成本和文件限制", "至少获得三位用户反馈"],
    resources: [resources.huggingVis, resources.huggingAudio, resources.videoDevour]
  }),
  capData: quest({
    id: "capData", stage: "项目验收", title: "可信的数据问答助手", icon: "⚑", duration: "1—2 周", xp: 125, type: "project",
    summary: "连接结构化数据，用可审计查询回答真实业务问题。",
    objectives: ["安全连接数据库或表格", "验证 SQL 和业务结果", "生成表格、图表与可追溯解释"],
    checklist: ["使用只读权限并保存查询记录", "提交不少于 30 个真实问题的评测集", "记录语法错误和业务口径错误", "完成权限与敏感数据自查"],
    resources: [resources.easyData, resources.wonderfulSql]
  }),
  c0: quest({
    id: "c0", stage: "算法补给", title: "数学、数据与 PyTorch 最小包", icon: "∑", duration: "1—3 周", xp: 65,
    summary: "围绕模型实验补齐 NumPy、线代、概率、优化和 PyTorch，不做漫长统一前置。",
    skipLevels: ["ml"],
    objectives: ["理解张量、梯度和训练循环", "处理实验数据并绘制结果", "解释损失、优化和过拟合"],
    checklist: ["手写并训练一个小型神经网络", "绘制训练与验证曲线", "通过一次对照实验解释模型变化"],
    resources: [resources.python]
  }),
  c1: quest({
    id: "c1", stage: "LLM 主线", title: "Transformer 与 LLM 训练流程", icon: "T", duration: "2—4 周", xp: 85,
    summary: "以 Happy-LLM 为系统主线，理解架构、预训练、微调和生成。",
    objectives: ["解释注意力与 Transformer 数据流", "理解预训练、SFT 与偏好对齐", "运行并修改一个小模型实验"],
    checklist: ["画出 Transformer 的数据流", "运行至少一个训练或微调实验", "写出实验假设、结果和局限"],
    resources: [resources.happyLlm]
  }),
  cChoice: quest({
    id: "cChoice", stage: "白盒实践", title: "从零构建项目择一", icon: "◇", duration: "2—3 周", xp: 75, type: "choice",
    summary: "LLMs-from-Scratch 与 Tiny-Universe 选择一个深入，不要求重复手搓相同模块。",
    objectives: ["从代码层理解模型核心组件", "独立运行并调试训练或推理", "把公式、张量和实现对应起来"],
    checklist: ["选择一个白盒项目并说明原因", "完成一个核心模块的复现或修改", "写一份代码导读或实验报告"],
    resources: [resources.llmScratch, resources.tinyUniverse]
  }),
  c2: quest({
    id: "c2", stage: "系统进阶", title: "训练、后训练与推理择向", icon: "⇈", duration: "2—4 周", xp: 90, type: "choice",
    summary: "根据目标选择训练系统、微调或推理工程，不要求三条同时深入。",
    objectives: ["理解数据、计算和模型规模的约束", "选择训练、微调或推理中的一个方向", "使用指标分析效率与质量"],
    checklist: ["明确选择的专项方向", "完成一次可复现实验", "记录吞吐、显存、质量或训练指标"],
    resources: [resources.diyLlm, resources.selfLlm, resources.llmDeploy]
  }),
  cCap: quest({
    id: "cCap", stage: "项目验收", title: "可复现的模型实验", icon: "⚑", duration: "1—2 周", xp: 125, type: "project",
    summary: "让别人能够复现、理解并评价你的模型实验，而不只是看到最终截图。",
    objectives: ["提出清晰实验问题", "控制变量并记录配置", "诚实报告结果、失败和限制"],
    checklist: ["代码、依赖和数据说明完整", "至少包含基线与对照实验", "记录关键指标和资源消耗", "发布实验报告或技术文章"],
    resources: [resources.happyLlm, resources.diyLlm]
  }),
  d1: quest({
    id: "d1", stage: "专业方向", title: "选择一个专业问题", icon: "⌖", duration: "1 周", xp: 45,
    summary: "从 CV、推荐、强化学习、多模态或具身中选择一个问题，而不是把所有方向列成必修。",
    objectives: ["描述方向中的典型任务与数据", "找到一个可复现基线", "明确需要补齐的数学和工程基础"],
    checklist: ["确定一个具体任务和数据集", "找到并运行一个公开基线", "写出八周以内的学习与实验计划"],
    resources: [resources.cv, resources.rec, resources.rl, resources.mllm]
  }),
  dChoice: quest({
    id: "dChoice", stage: "专业方向", title: "方向主线择一", icon: "◇", duration: "4—8 周", xp: 100, type: "choice",
    summary: "选择一条方向教程完成主线，并通过实验而不是阅读数量积累能力。",
    objectives: ["掌握一个方向的核心模型与评测", "完成基线复现和一次改进", "理解数据与实验偏差"],
    checklist: ["完成所选方向的一套主线资源", "复现公开结果或解释差异", "完成一个有对照的改进实验"],
    resources: [resources.cv, resources.rec, resources.rl, resources.mllm, resources.embodied]
  }),
  dCap: quest({
    id: "dCap", stage: "项目验收", title: "专业方向作品", icon: "⚑", duration: "2 周", xp: 130, type: "project",
    summary: "把专业学习收束为可复现基线、实验报告或可演示系统。",
    objectives: ["将方法应用到一个明确任务", "对比基线并分析失败", "公开可复现材料"],
    checklist: ["提交代码、环境和数据说明", "包含基线、指标和误差分析", "完成演示、报告或开源发布"],
    resources: [resources.cv, resources.rec, resources.rl, resources.mllm]
  }),
  f1: quest({
    id: "f1", stage: "FDE · 发现", title: "需求访谈与场景拆解", icon: "◎", duration: "1 周", xp: 65,
    summary: "贴近用户工作流，区分表面需求、真实问题和不该使用 AI 的部分。",
    objectives: ["开展结构化用户访谈", "还原现有数据与决策流程", "识别约束、风险和利益相关者"],
    checklist: ["完成至少两次访谈或高仿真角色访谈", "绘制现有工作流程", "列出 AI 方案的非目标与风险"],
    resources: [resources.fsdl]
  }),
  f2: quest({
    id: "f2", stage: "FDE · 定界", title: "技术范围与价值指标", icon: "⌖", duration: "3—5 天", xp: 65,
    summary: "把模糊愿望转化为可交付范围、成功指标和停止条件。",
    objectives: ["定义业务与技术成功指标", "比较规则、工作流、RAG 和 Agent", "管理范围、速度与质量取舍"],
    checklist: ["提交一页技术范围说明", "记录当前流程基线指标", "明确第一阶段不做什么"],
    resources: [resources.fsdl]
  }),
  f3: quest({
    id: "f3", stage: "FDE · 原型", title: "一周价值原型", icon: "↯", duration: "1 周", xp: 80,
    summary: "使用真实或脱敏数据做端到端原型，尽快验证价值而不是堆叠功能。",
    objectives: ["选择最简单可行架构", "使用接近真实的数据和输入", "让目标用户完成一次试用"],
    checklist: ["一周内完成端到端原型", "至少一位目标用户完成试用", "记录反馈、反例和是否继续的判断"],
    resources: [resources.llmUniverse, resources.helloAgents]
  }),
  f4: quest({
    id: "f4", stage: "FDE · 集成", title: "数据、权限与现有系统", icon: "⇄", duration: "1—2 周", xp: 90,
    summary: "将原型连接到 API、SQL、文件或业务系统，并清楚定义权限边界。",
    objectives: ["设计数据流和接口", "处理认证、授权与审计", "适应已有系统和代码约束"],
    checklist: ["提交系统架构图和数据字典", "接入至少一个真实或模拟业务系统", "完成权限矩阵与敏感数据说明"],
    resources: [resources.fsdl, resources.owasp]
  }),
  f5: quest({
    id: "f5", stage: "FDE · 采用", title: "上线、培训与采用复盘", icon: "↗", duration: "1—2 周", xp: 95,
    summary: "上线不是终点；观察真实采用、工作流影响，并把经验沉淀为可复用资产。",
    objectives: ["设计灰度、回滚与支持流程", "指导用户采用新工作流", "收集指标并形成产品反馈"],
    checklist: ["提交上线检查表和运行手册", "完成一次用户培训或演示", "记录采用率或工作流指标", "沉淀模板、组件或交付手册"],
    resources: [resources.fsdl]
  }),
  fCap: quest({
    id: "fCap", stage: "交付验收", title: "真实 AI 交付档案", icon: "★", duration: "2 周", xp: 150, type: "project",
    summary: "用需求、系统、指标、用户与复盘共同证明交付能力。",
    objectives: ["完成从发现到采用的闭环", "用指标而不是演示效果说明价值", "把现场经验反馈为可复用方案"],
    checklist: ["包含需求访谈和技术范围", "包含架构、评测、安全和运行材料", "包含上线前后指标与用户反馈", "包含一次迭代和最终复盘", "获得客户、导师或项目负责人验收"],
    resources: [resources.fsdl, resources.owasp]
  })
};

const routes = {
  productivity: {
    mission: "productivity", name: "AI 使用与个人生产力", short: "提效航线", icon: "✦", reward: "场景改造者",
    description: "从会用工具，到识别场景，再搭建一个每周真实使用的个人工作流。",
    quests: ["g0", "a1", "a2", "a3", "aCap"]
  },
  "builder-workflow": {
    mission: "builder", name: "AI 应用构建 · 工作流", short: "工作流航线", icon: "↻", reward: "工作流构建者",
    description: "选择一个低代码平台，连接真实工具，并通过质量关卡完成业务流程交付。",
    quests: ["g0", "g1", "b1", "workflow1", "workflow2", "q1", "q2", "q3", "capWorkflow"]
  },
  "builder-rag": {
    mission: "builder", name: "AI 应用构建 · RAG", short: "知识应用航线", icon: "▤", reward: "知识应用构建者",
    description: "从个人知识库入门，进阶检索与评测，完成一个有依据、可更新的知识助手。",
    quests: ["g0", "g1", "b1", "rag0", "rag1", "ragChoice", "q1", "q2", "q3", "capRag"]
  },
  "builder-agent": {
    mission: "builder", name: "AI 应用构建 · Agent", short: "智能体航线", icon: "◉", reward: "智能体构建者",
    description: "掌握工具调用、上下文、MCP 和权限，完成过程可追踪、关键动作可控制的 Agent。",
    quests: ["g0", "g1", "b1", "agent0", "agent1", "agentChoice", "q1", "q2", "q3", "capAgent"]
  },
  "builder-multimodal": {
    mission: "builder", name: "AI 应用构建 · 多模态交互", short: "多模态应用航线", icon: "◫", reward: "多模态应用构建者",
    description: "使用图片、音频或视频模型完成真实任务，并建立输入限制、用户修正和多模态评测。",
    quests: ["g0", "g1", "b1", "multimodal0", "multimodal1", "q1", "q2", "q3", "capMultimodal"]
  },
  "builder-data": {
    mission: "builder", name: "AI 应用构建 · 数据智能", short: "数据智能航线", icon: "▦", reward: "数据应用构建者",
    description: "连接表格和数据库，理解业务口径、Text-to-SQL、查询安全与结果验证。",
    quests: ["g0", "g1", "b1", "data0", "data1", "q1", "q2", "q3", "capData"]
  },
  "model-llm": {
    mission: "model", name: "模型与算法 · LLM", short: "LLM 原理航线", icon: "T", reward: "模型实验者",
    description: "围绕 Transformer、训练与推理建立系统理解，并完成一项可复现的模型实验。",
    quests: ["g0", "g1", "c0", "c1", "cChoice", "c2", "cCap"]
  },
  "model-domain": {
    mission: "model", name: "模型与算法 · 专业方向", short: "专业方向航线", icon: "⌖", reward: "方向探索者",
    description: "选择 CV、推荐、强化学习、多模态或具身中的一个问题，完成基线和方向作品。",
    quests: ["g0", "g1", "c0", "d1", "dChoice", "dCap"]
  },
  "fde-delivery": {
    mission: "fde", name: "FDE 预备 · AI 解决方案交付", short: "FDE 交付航线", icon: "↗", reward: "AI 价值交付者",
    description: "从需求发现、范围界定和快速原型，到系统集成、可靠上线与采用复盘。",
    quests: ["g0", "g1", "b1", "f1", "f2", "f3", "f4", "q1", "q2", "q3", "f5", "fCap"]
  }
};

const routeStories = {
  productivity: {
    title: "一个工作流，如何真正留在日常生活里？",
    description: "预留给科研、办公、内容创作或个人知识管理实践者，分享从工具尝鲜到稳定习惯的真实过程。"
  },
  "builder-workflow": {
    title: "低代码 Demo 是怎样变成长期运行流程的？",
    description: "预留给 Dify、Coze 或 n8n 实践者，分享平台选择、流程拆解、人工确认和维护经验。"
  },
  "builder-rag": {
    title: "最初以为是模型问题，后来发现是检索问题",
    description: "预留给知识库、搜索或企业问答负责人，分享数据、召回、引用和评测中的真实取舍。"
  },
  "builder-agent": {
    title: "什么时候值得使用 Agent，而不是固定工作流？",
    description: "预留给 Agent 与 MCP 开发者，分享工具权限、循环成本、失败恢复和架构选择。"
  },
  "builder-multimodal": {
    title: "会调用多模态模型，离可用产品还有多远？",
    description: "预留给图片、语音、视频或实时交互开发者，分享输入限制、延迟、体验和评测。"
  },
  "builder-data": {
    title: "SQL 能运行，为什么业务答案仍然可能错？",
    description: "预留给数据分析与 Text-to-SQL 实践者，分享 Schema、业务口径、权限和结果验证。"
  },
  "model-llm": {
    title: "一次模型实验，是如何从失败走向可复现的？",
    description: "预留给模型训练、后训练或推理工程嘉宾，分享假设、实验、失败分析与工程取舍。"
  },
  "model-domain": {
    title: "这个方向最适合初学者的第一个问题是什么？",
    description: "预留给 CV、推荐、强化学习、图学习、多模态或具身方向嘉宾，介绍基线和入门作品。"
  },
  "fde-delivery": {
    title: "真实客户现场，如何改变最初的 AI 方案？",
    description: "预留给 FDE 与解决方案工程师，围绕需求发现、现场约束、上线采用和价值指标分享。"
  }
};

const routeExtensions = {
  productivity: [
    { type: "设计指南", title: "People + AI Guidebook", description: "场景选择、用户控制、反馈和信任。", url: "https://pair.withgoogle.com/guidebook-v2/" },
    { type: "案例集", title: "PAIR Case Studies", description: "真实团队如何设计和迭代 AI 产品。", url: "https://pair.withgoogle.com/guidebook-v2/case-studies" },
    { type: "官方文档", title: "n8n Advanced AI", description: "把个人流程扩展成可运行的自动化系统。", url: "https://docs.n8n.io/advanced-ai/" }
  ],
  "builder-workflow": [
    { type: "官方文档", title: "Dify Documentation", description: "工作流编排、知识库、插件与部署。", url: "https://docs.dify.ai/" },
    { type: "官方文档", title: "n8n Advanced AI", description: "AI 节点、工具、人工介入和跨系统自动化。", url: "https://docs.n8n.io/advanced-ai/" },
    { type: "设计指南", title: "People + AI Guidebook", description: "用户控制、失败回退和 AI 产品体验。", url: "https://pair.withgoogle.com/guidebook-v2/" }
  ],
  "builder-rag": [
    { type: "论文", title: "RAG 原始论文", description: "理解检索增强生成最初的问题设定。", url: "https://arxiv.org/abs/2005.11401" },
    { type: "GitHub", title: "Microsoft GraphRAG", description: "图结构知识、全局问题与社区摘要。", url: "https://github.com/microsoft/graphrag" },
    { type: "GitHub", title: "Ragas", description: "RAG 数据集、自动评测与实验闭环。", url: "https://github.com/explodinggradients/ragas" }
  ],
  "builder-agent": [
    { type: "论文", title: "ReAct", description: "推理与行动交替的经典 Agent 范式。", url: "https://arxiv.org/abs/2210.03629" },
    { type: "工程博客", title: "Building Effective Agents", description: "Anthropic 对工作流、Agent 与架构模式的总结。", url: "https://www.anthropic.com/engineering/building-effective-agents" },
    { type: "官方 SDK", title: "OpenAI Agents SDK", description: "Agent、Handoff、Guardrail 与 Tracing。", url: "https://openai.github.io/openai-agents-python/" },
    { type: "开放规范", title: "Model Context Protocol", description: "模型、工具和数据源的标准化连接。", url: "https://modelcontextprotocol.io/specification/" }
  ],
  "builder-multimodal": [
    { type: "官方文档", title: "HF Multimodal Chat Templates", description: "开源多模态模型输入格式与推理。", url: "https://huggingface.co/docs/transformers/en/chat_templating_multimodal" },
    { type: "官方文档", title: "Gemini Image Understanding", description: "图片问答、检测、分割与结构化结果。", url: "https://ai.google.dev/gemini-api/docs/image-understanding" },
    { type: "官方文档", title: "Gemini Audio Understanding", description: "音频理解、转写、时间戳和输出格式。", url: "https://ai.google.dev/gemini-api/docs/audio" },
    { type: "官方文档", title: "Gemini Video Understanding", description: "长视频、视听理解和时间定位。", url: "https://ai.google.dev/gemini-api/docs/video-understanding" }
  ],
  "builder-data": [
    { type: "GitHub", title: "DB-GPT", description: "数据库、表格、代码分析与数据 Agent。", url: "https://github.com/eosphoros-ai/DB-GPT" },
    { type: "论文 / 基准", title: "Spider 2.0", description: "真实企业级 Text-to-SQL 工作流与评测。", url: "https://github.com/xlang-ai/Spider2" },
    { type: "GitHub", title: "ReFoRCE", description: "Schema 探索、自我修正和复杂 Text-to-SQL。", url: "https://github.com/Snowflake-Labs/ReFoRCE" }
  ],
  "model-llm": [
    { type: "论文", title: "Attention Is All You Need", description: "Transformer 的原始结构与设计动机。", url: "https://arxiv.org/abs/1706.03762" },
    { type: "公开课程", title: "Stanford CS336", description: "从数据和 Tokenizer 到训练与系统。", url: "https://stanford-cs336.github.io/spring2025/" },
    { type: "GitHub", title: "vLLM", description: "高吞吐推理、调度和服务化。", url: "https://github.com/vllm-project/vllm" }
  ],
  "model-domain": [
    { type: "GitHub", title: "OpenMMLab", description: "视觉任务的开源算法与工程生态。", url: "https://github.com/open-mmlab" },
    { type: "GitHub", title: "RecBole", description: "推荐系统统一实验与基准。", url: "https://github.com/RUCAIBox/RecBole" },
    { type: "GitHub", title: "CleanRL", description: "小而清晰的强化学习实现。", url: "https://github.com/vwxyzjn/cleanrl" }
  ],
  "fde-delivery": [
    { type: "公开课程", title: "Full Stack Deep Learning", description: "AI 产品从数据、测试到部署和监控。", url: "https://fullstackdeeplearning.com/" },
    { type: "设计指南", title: "People + AI Guidebook", description: "用户采用、控制、失败和信任。", url: "https://pair.withgoogle.com/guidebook-v2/" },
    { type: "安全清单", title: "OWASP GenAI Security", description: "面向真实交付的威胁建模和检查清单。", url: "https://genai.owasp.org/" }
  ]
};

const branches = {
  productivity: [["productivity", "个人生产力与工作流"]],
  builder: [
    ["builder-rag", "RAG 与知识应用"],
    ["builder-agent", "Agent 与工具调用"],
    ["builder-workflow", "低代码工作流"],
    ["builder-multimodal", "多模态与实时交互"],
    ["builder-data", "结构化数据与数据智能"]
  ],
  model: [["model-llm", "LLM 原理、训练与推理"], ["model-domain", "CV / 推荐 / 强化学习 / 多模态等专业方向"]],
  fde: [["fde-delivery", "FDE · AI 解决方案交付"]]
};

const sideQuests = [
  { icon: "#", title: "SQL 与业务数据", text: "从查询语法进入关系模型、业务口径、权限与审计。", path: ["SQL", "关系模型", "数据口径", "数据问答"], fit: "接回：数据智能 / RAG / FDE" },
  { icon: "▥", title: "数据分析与统计", text: "用数据清洗、统计、可视化和实验设计支持可靠结论。", path: ["Pandas", "统计", "可视化", "实验评测"], fit: "接回：评测 / 推荐 / FDE" },
  { icon: "∑", title: "科学计算与数学", text: "在真正需要理解公式和训练过程时补齐数理基础。", path: ["NumPy", "线性代数", "概率", "优化"], fit: "接回：LLM / CV / 强化学习" },
  { icon: "⬡", title: "软件工程与部署", text: "把只能本地运行的 Demo 变成可复现、可测试、可部署系统。", path: ["Git", "HTTP/API", "测试", "Docker", "CI/CD"], fit: "接回：所有 Builder / FDE" },
  { icon: "◎", title: "产品与用户研究", text: "从真实问题、用户流程和可用性出发设计 AI 应用。", path: ["访谈", "流程", "原型", "用户测试", "迭代"], fit: "接回：工作流 / Agent / OPC" },
  { icon: "▣", title: "安全、隐私与治理", text: "理解身份、权限、数据分级和威胁建模，再进入 GenAI 安全。", path: ["Web 基础", "权限", "隐私", "威胁建模", "安全测试"], fit: "接回：RAG / Agent / 企业交付" },
  { icon: "R", title: "科研方法与技术表达", text: "让论文复现、模型实验和开源成果具备完整证据链。", path: ["文献", "实验设计", "复现", "图表", "发布"], fit: "接回：模型研究 / 开源共建" }
];

const defaultState = {
  mission: "",
  route: "",
  level: "zero",
  completed: {},
  checks: {},
  actions: 0,
  theme: "light"
};

let state = loadState();
let activeQuestId = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function loadState() {
  try {
    const loaded = { ...defaultState, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
    if (loaded.route && !routes[loaded.route]) {
      loaded.route = branches[loaded.mission]?.[0]?.[0] || "";
    }
    return loaded;
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function visibleQuestIds(routeKey = state.route) {
  if (!routeKey || !routes[routeKey]) return [];
  return routes[routeKey].quests.filter((id) => !quests[id].skipLevels.includes(state.level));
}

function questState(id, index, routeIds) {
  if (state.completed[id]) return "completed";
  if (index === 0) return "unlocked";
  const previousId = routeIds[index - 1];
  return state.completed[previousId] ? "unlocked" : "locked";
}

function labelForType(type) {
  return ({ required: "必达关卡", choice: "同类择一", project: "项目验收", optional: "按需插件" })[type] || "必达关卡";
}

function renderMissionSelection() {
  $$(".mission-card").forEach((card) => {
    const selected = card.dataset.mission === state.mission;
    card.classList.toggle("selected", selected);
    card.setAttribute("aria-checked", String(selected));
  });
  $("#level-select").value = state.level;
  renderBranches();
}

function renderBranches() {
  const select = $("#branch-select");
  const options = branches[state.mission] || [];
  select.innerHTML = options.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
  if (options.some(([value]) => value === state.route)) select.value = state.route;
  $("#branch-field").hidden = options.length <= 1;
}

function renderRouteSwitcher() {
  const select = $("#route-switcher");
  select.innerHTML = `<option value="">选择航线</option>` + Object.entries(routes)
    .map(([key, route]) => `<option value="${key}">${route.name}</option>`).join("");
  select.value = state.route;
}

function renderRouteBanner() {
  const route = routes[state.route];
  if (!route) {
    $("#route-banner-icon").textContent = "?";
    $("#route-kicker").textContent = "等待领取任务";
    $("#route-name").textContent = "请先选择一个目标";
    $("#route-description").textContent = "系统会根据你的目标和当前基础生成推荐关卡。";
    $("#route-reward").textContent = "路线徽章";
    return;
  }
  $("#route-banner-icon").textContent = route.icon;
  $("#route-kicker").textContent = `${route.short} · ${visibleQuestIds().length} 个关卡`;
  $("#route-name").textContent = route.name;
  $("#route-description").textContent = route.description;
  $("#route-reward").textContent = route.reward;
}

function renderStorySlot() {
  const story = routeStories[state.route];
  if (!story) {
    $("#story-slot-title").textContent = "这条航线将保留一个真实故事";
    $("#story-slot-description").textContent = "选择航线后，这里会显示对应方向计划邀请的嘉宾和分享主题。";
    $("#story-slot-status").textContent = "嘉宾待邀请";
    return;
  }
  $("#story-slot-title").textContent = story.title;
  $("#story-slot-description").textContent = story.description;
  $("#story-slot-status").textContent = "嘉宾待邀请";
}

function renderExtensions() {
  const items = routeExtensions[state.route] || [];
  const container = $("#extension-list");
  if (!items.length) {
    container.innerHTML = `<span class="resource-link">选择一条航线后显示对应的高级选修材料</span>`;
    return;
  }
  container.innerHTML = items.map((item) => `
    <a class="extension-card" href="${item.url}" target="_blank" rel="noreferrer">
      <small>${item.type}</small>
      <strong>${item.title}</strong>
      <span>${item.description}</span>
      <i>打开材料 ↗</i>
    </a>`).join("");
}

function renderQuestMap() {
  const container = $("#quest-list");
  const ids = visibleQuestIds();
  if (!ids.length) {
    container.innerHTML = `<div class="empty-map"><strong>航线还没有生成</strong>在上方选择目标与当前基础，然后领取你的第一组关卡。</div>`;
    return;
  }

  container.innerHTML = ids.map((id, index) => {
    const q = quests[id];
    const status = questState(id, index, ids);
    const statusIcon = status === "completed" ? "✓" : status === "locked" ? "⌁" : String(index + 1).padStart(2, "0");
    const rewardText = status === "completed" ? "已领取" : `+${q.xp} XP`;
    const statusText = status === "completed" ? "已完成" : status === "locked" ? "完成上一关后解锁" : "查看任务";
    return `
      <article class="quest-row ${status} ${q.type}" data-quest="${id}">
        <div class="quest-node"><span>${statusIcon}</span><small>${q.stage}</small></div>
        <button class="quest-card" type="button" ${status === "locked" ? "disabled" : ""} data-open-quest="${id}" aria-label="${q.title}，${statusText}">
          <div>
            <div class="quest-tags"><span class="tag ${q.type}">${labelForType(q.type)}</span><span class="tag">${q.duration}</span></div>
            <h3>${q.title}</h3>
            <p>${q.summary}</p>
          </div>
          <div class="quest-reward"><strong>${rewardText}</strong><span>${statusText}</span></div>
        </button>
      </article>`;
  }).join("");

  $$('[data-open-quest]').forEach((button) => button.addEventListener("click", () => openQuest(button.dataset.openQuest)));
}

function renderSideQuests() {
  $("#side-quest-list").innerHTML = sideQuests.map((item) => `
    <article class="side-card">
      <span>${item.icon}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <div class="side-route" aria-label="推荐学习顺序">${item.path.map((step) => `<b>${step}</b>`).join("<i>→</i>")}</div>
      <small>${item.fit}</small>
    </article>`).join("");
}

function totalXp() {
  return Object.keys(state.completed).reduce((sum, id) => sum + (quests[id]?.xp || 0), 0);
}

function currentRank(xp) {
  if (xp >= 700) return ["L5", "价值交付者"];
  if (xp >= 450) return ["L4", "可靠构建者"];
  if (xp >= 260) return ["L3", "应用构建者"];
  if (xp >= 100) return ["L2", "场景探索者"];
  return ["L1", "初航者"];
}

function completedRoutes() {
  return Object.keys(routes).filter((key) => {
    const ids = visibleQuestIds(key);
    return ids.length && ids.every((id) => state.completed[id]);
  });
}

function renderProgress() {
  const ids = visibleQuestIds();
  const done = ids.filter((id) => state.completed[id]).length;
  const percent = ids.length ? Math.round(done / ids.length * 100) : 0;
  const xp = totalXp();
  const [rankCode, rankName] = currentRank(xp);

  $("#rank-badge").textContent = rankCode;
  $("#rank-name").textContent = rankName;
  $("#xp-total").textContent = xp;
  $("#current-route-label").textContent = routes[state.route]?.name || "尚未选择航线";
  $("#progress-percent").textContent = `${percent}%`;
  $("#progress-bar").style.width = `${percent}%`;
  $("#completed-count").textContent = done;
  $("#badge-count").textContent = completedRoutes().length + ids.filter((id) => quests[id].type === "project" && state.completed[id]).length;
  $("#streak-count").textContent = state.actions;

  const nextIndex = ids.findIndex((id) => !state.completed[id]);
  if (nextIndex === -1 && ids.length) {
    $("#next-quest-summary").innerHTML = `<span class="mini-icon">★</span><div><small>航线状态</small><strong>全部通关，可以选择进阶航线</strong></div>`;
  } else if (nextIndex >= 0) {
    const q = quests[ids[nextIndex]];
    const status = questState(q.id, nextIndex, ids);
    const text = status === "locked" ? `先完成：${quests[ids[nextIndex - 1]].title}` : q.title;
    $("#next-quest-summary").innerHTML = `<span class="mini-icon">${q.icon}</span><div><small>下一关</small><strong>${text}</strong></div>`;
  } else {
    $("#next-quest-summary").innerHTML = `<span class="mini-icon">◌</span><div><small>下一关</small><strong>先选择你的学习目标</strong></div>`;
  }
}

function openQuest(id) {
  const q = quests[id];
  if (!q) return;
  activeQuestId = id;
  $("#dialog-icon").textContent = q.icon;
  $("#dialog-title").textContent = q.title;
  $("#dialog-summary").textContent = q.summary;
  $("#dialog-labels").innerHTML = `<span class="tag ${q.type}">${labelForType(q.type)}</span><span class="tag">${q.stage}</span>`;
  $("#dialog-meta").innerHTML = `<span>预计投入 <strong>${q.duration}</strong></span><span>通关经验 <strong>+${q.xp} XP</strong></span><span>验收项 <strong>${q.checklist.length} 项</strong></span>`;
  $("#dialog-objectives").innerHTML = q.objectives.map((item) => `<li>${item}</li>`).join("");
  $("#dialog-resources").innerHTML = q.resources.length
    ? q.resources.map(([name, url]) => `<a class="resource-link" href="${url}" target="_blank" rel="noreferrer">${name}<span>打开 ↗</span></a>`).join("")
    : `<span class="resource-link">本关以真实任务为学习材料</span>`;

  const savedChecks = state.checks[id] || [];
  $("#dialog-checklist").innerHTML = q.checklist.map((item, index) => `
    <label class="check-item">
      <input type="checkbox" data-check-index="${index}" ${savedChecks[index] ? "checked" : ""} ${state.completed[id] ? "disabled" : ""}>
      <span>${item}</span>
    </label>`).join("");
  $$('[data-check-index]').forEach((input) => input.addEventListener("change", updateDialogCompletion));
  updateDialogCompletion();
  $("#quest-dialog").showModal();
}

function updateDialogCompletion() {
  if (!activeQuestId) return;
  const q = quests[activeQuestId];
  const inputs = $$('[data-check-index]');
  const values = inputs.map((input) => input.checked);
  state.checks[activeQuestId] = values;
  saveState();
  const allChecked = values.length > 0 && values.every(Boolean);
  const completed = Boolean(state.completed[activeQuestId]);
  $("#complete-quest").disabled = !allChecked || completed;
  $("#complete-quest").textContent = completed ? "本关已完成" : `完成关卡并领取 ${q.xp} XP`;
  $("#dialog-status").textContent = completed ? "经验值已领取，继续下一关吧" : allChecked ? "验收完成，可以通关" : `已完成 ${values.filter(Boolean).length} / ${values.length} 项`;
}

function completeActiveQuest() {
  if (!activeQuestId || state.completed[activeQuestId]) return;
  const q = quests[activeQuestId];
  const values = state.checks[activeQuestId] || [];
  if (!values.length || !values.every(Boolean)) return;
  state.completed[activeQuestId] = new Date().toISOString();
  state.actions += 1;
  saveState();
  $("#quest-dialog").close();
  renderAll();
  showToast(`通关「${q.title}」 · +${q.xp} XP`);
}

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function selectMission(mission) {
  state.mission = mission;
  const firstRoute = branches[mission]?.[0]?.[0] || "";
  if (!routes[state.route] || routes[state.route].mission !== mission) state.route = firstRoute;
  saveState();
  renderMissionSelection();
}

function setRoute(routeKey, scroll = false) {
  if (!routes[routeKey]) return;
  state.route = routeKey;
  state.mission = routes[routeKey].mission;
  saveState();
  renderAll();
  if (scroll) $("#quest-map").scrollIntoView({ behavior: "smooth" });
}

function generateRoute() {
  if (!state.mission) {
    showToast("请先选择一种学习目标");
    $("#choose").scrollIntoView({ behavior: "smooth" });
    return;
  }
  state.level = $("#level-select").value;
  state.route = $("#branch-select").value || branches[state.mission][0][0];
  saveState();
  renderAll();
  showToast(`已生成「${routes[state.route].name}」`);
  $("#quest-map").scrollIntoView({ behavior: "smooth" });
}

function resetCurrentRoute() {
  if (!state.route) return;
  if (!window.confirm(`确认重置「${routes[state.route].name}」的进度吗？共同起点将保留。`)) return;
  visibleQuestIds().filter((id) => id !== "g0").forEach((id) => {
    delete state.completed[id];
    delete state.checks[id];
  });
  saveState();
  renderAll();
  showToast("本路线进度已重置");
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  $("#theme-toggle").textContent = state.theme === "dark" ? "☀" : "☾";
}

function renderAll() {
  renderMissionSelection();
  renderRouteSwitcher();
  renderRouteBanner();
  renderStorySlot();
  renderQuestMap();
  renderExtensions();
  renderProgress();
  applyTheme();
}

function bindEvents() {
  $$(".mission-card").forEach((card) => card.addEventListener("click", () => selectMission(card.dataset.mission)));
  $("#level-select").addEventListener("change", (event) => {
    state.level = event.target.value;
    saveState();
  });
  $("#generate-route").addEventListener("click", generateRoute);
  $("#route-switcher").addEventListener("change", (event) => {
    if (event.target.value) setRoute(event.target.value);
  });
  $("#reset-progress").addEventListener("click", resetCurrentRoute);
  $("#continue-button").addEventListener("click", () => {
    (state.route ? $("#quest-map") : $("#choose")).scrollIntoView({ behavior: "smooth" });
  });
  $("#theme-toggle").addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    saveState();
    applyTheme();
  });
  $("#dialog-close").addEventListener("click", () => $("#quest-dialog").close());
  $("#complete-quest").addEventListener("click", completeActiveQuest);
  $("#quest-dialog").addEventListener("click", (event) => {
    if (event.target === $("#quest-dialog")) $("#quest-dialog").close();
  });
  $$('[data-jump-route]').forEach((button) => button.addEventListener("click", () => setRoute(button.dataset.jumpRoute, true)));
}

function init() {
  renderSideQuests();
  bindEvents();
  renderAll();
}

init();
