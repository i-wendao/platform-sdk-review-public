# 决策日志

## 2026-07-01：v5 定版方向

- 根目录定为 `/opt/project/sdk`。
- 数据库名改为 `sdk_dw`，禁止使用 `ebike` 作为数据库名。
- 默认中文返回。
- 主控脚本以 Python / sh 为主。
- Shopee 使用 TypeScript adapter。
- TikTok 优先使用 Go adapter。
- 放弃 QuoVadis86/shopee-sdk 作为 Shopee Go SDK 候选。
- 项目文档不再预列 endpoint 清单。
- 第一阶段重点业务域为商品、订单、售后、库存、物流、回款。
- 具体 SDK method、参数、分页、限流、返回结构由 Codex 从 SDK 文档、类型定义、示例和源码中发现。
- 旧 endpoint 清单式登记文件废弃，统一使用 `SDK_METHOD_REGISTRY.md`。
- 旧 endpoint coverage 逻辑废弃，统一使用 `SDK_METHOD_COVERAGE_RUNBOOK.md`。
- 旧 endpoint registry 表废弃，统一使用 `sdk_meta.sdk_method_registry`。
- registry 只记录 SDK method 发现状态、验证状态和 evidence，不维护参数权威。
- 参数优先以 SDK 文档/类型/示例/源码为准；SDK 无法解释报错时再查官方 API 文档。
- ChatGPT 与 Codex 必须复核用户指令，不得盲目执行。

## v6 决策：长线项目工作流闭环

- 补充根目录 `CLAUDE.md`，用于 Claude / Claude Code / 其他 AI 编程代理读取。
- 明确主流程：规则文件 → 用户拍板 → 项目地图 → Harness 边界判断 → RAG 资料筛选 → 小批次计划 → 用户确认 → 执行 → 测试验证 → Closure → 下一批。
- 明确硬规则：没有 Plan，不执行；没有 Closure，不进入下一批。
- 新增 Harness、RAG、小批次计划、测试验证、Closure、批次生命周期相关文档。
- 保持 v5 已定规则：数据库 `sdk_dw`；不预列 endpoint；第一阶段按商品/订单/售后/库存/物流/回款业务域，由 Codex 从 SDK 中发现 method。

## 决策：吸收工作流编排思想，但不引入外部依赖

- 状态：已确认
- 内容：外部工作流编排项目可作为方法论参考，但 `/opt/project/sdk` 不引入其作为主依赖。
- 吸收内容：质量模式、上下文注入、角色分工、问题闭环、Closure 知识沉淀。
- 不吸收内容：全自动执行、hooks 接管、SDK 调用接管、数据库写入接管、token refresh 接管、绕过用户确认。

## 2026-07-01：Batch 5 治理补写决策

- 私有仓库 `/opt/project/sdk` 是 source of truth；公开仓库 `/opt/project/sdk_public_review` 只作为 ChatGPT 可访问的 sanitized review mirror，不替代私有仓库事实源。
- private -> public 只能执行单向白名单导出；public mirror 不得反向合并到 private，不替代 Closure / RAG / Issue / Decision。
- 后续批次采用 `docs/TOKEN_EFFICIENCY_POLICY.md` 定义的 Tier 1 / Tier 2 / Tier 3 额度效率执行分级；额度效率不得覆盖安全边界。
- 后续可复用审核脚本必须遵守 `docs/AUDIT_SCRIPT_POLICY.md` 的 `planned` / `draft` / `reviewed` / `deprecated` 状态治理；Codex 不得运行 planned 或 draft 脚本。
- Shopee TypeScript SDK adapter skeleton 仅为静态 candidate / boundary / output contract 代码；不代表 SDK/API 已验证，不得据此调用平台 API。
- 涉及新增文件的 patch 必须使用标准 `diff --git a/... b/...` header；存在路径风险时，`git apply --check` 之外还必须用临时目录真实 apply 验证最终落点。
