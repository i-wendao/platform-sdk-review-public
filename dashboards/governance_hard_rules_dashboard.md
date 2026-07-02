# Governance Hard Rules Dashboard

## 顶部摘要

- dashboard_version: `v1`
- last_updated_private_commit: `7661a5b`
- last_updated_public_commit: `c5c640b`
- latest_codex_batch: `Batch 6.GOVERNANCE-HARD-RULES-DASHBOARD-INIT1`
- latest_chatgpt_audit_status: `PENDING`
- governance_due: `yes`
- blocked_next_stage: `yes`
- next_required_governance_action: `ChatGPT audit dashboard public export, then Codex update dashboard audit status`

## Governance Due

- Governance Due: `yes`
- Reason:
  - 本批初始化了新的长期治理 Dashboard
  - Dashboard 本身尚未经过 ChatGPT public audit
  - 最近存在治理文档变更、public export 和 Tier 3 import-only execution
- Required Next:
  - `ChatGPT audit dashboard public export`
  - `Codex write back dashboard audit status`

## 硬性指标表

| 指标ID | 硬性指标中文名 | 规则来源 | Codex执行状态 | 最近执行证据 | ChatGPT审核状态 | 最近public证据 | 是否阻断下一阶段 | 风险/备注 | 下次触发条件 |
|---|---|---|---|---|---|---|---|---|---|
| HR-01 | V7唯一治理入口 | `docs/GOVERNANCE_V7.md` | 已执行 | `review_queue/batch6_governance_v7_hard_rules_compliance_audit1/` | PASS | `ffa7fb6` | 否 | 当前有效 | V7变更 |
| HR-02 | 旧规则文件从属于V7 | `docs/GOVERNANCE_V7.md`、`AGENTS.md`、`CLAUDE.md` | 已规范化 | `7661a5b`、`review_queue/batch6_governance_v7_hard_rules_warn_fix1/` | PENDING | 本批待导出 | 否 | 需等本批Dashboard/WARN-FIX公开复核 | 从属文档变更 |
| HR-03 | 默认聚焦读取顺序 | `docs/GOVERNANCE_V7.md`、`AGENTS.md`、`CLAUDE.md`、`docs/CODEX_EXECUTION_CHECKLIST.md` | 已规范化 | `7661a5b` | PENDING | 本批待导出 | 否 | 已移除默认全量补读 | 读取顺序变更 |
| HR-04 | 每批V7自审 | `docs/GOVERNANCE_V7.md` | 已执行 | 最近批次均有自审 | PASS | `ffa7fb6` | 否 | 当前有效 | 每批执行前 |
| HR-05 | 每批Tier判定 | `docs/GOVERNANCE_V7.md`、`docs/TOKEN_EFFICIENCY_POLICY.md` | 已执行 | Tier 2 / Tier 3 批次均已声明 | PASS | `ffa7fb6` | 否 | 当前有效 | 每批执行前 |
| HR-06 | 每批preflight | `docs/GOVERNANCE_V7.md`、`docs/AUDIT_SCRIPT_POLICY.md` | 已规范化并执行 | `7661a5b`，本批 preflight 通过 | PENDING | 本批待导出 | 是 | 新硬规则需公开复核 | V7变更、每批执行前 |
| HR-07 | 分支/remote/status校验 | `docs/GOVERNANCE_V7.md` | 已执行 | 最近批次和本批均校验 | PASS | `ffa7fb6` | 是 | 状态不符即停止 | 每批执行前 |
| HR-08 | 最终工作区clean | `docs/GOVERNANCE_V7.md` | 已规范化并执行 | `7661a5b`，最近批次结束均 clean | PENDING | 本批待导出 | 是 | 新单列硬规则需公开复核 | 提交后、批次结束 |
| HR-09 | reviewed audit script边界 | `docs/AUDIT_SCRIPT_POLICY.md` | 已执行 | `preflight_v6.sh` 仅用 `bash` 调用 | PASS | `19439e8` | 是 | 非 reviewed script 不得运行 | 审核脚本变更 |
| HR-10 | 默认中文输出 | `docs/GOVERNANCE_V7.md`、`AGENTS.md`、`CLAUDE.md` | 已执行 | 最近批次中文输出 | PASS | `a2881ad` | 否 | 当前有效 | 语言规则变更 |
| HR-11 | 无Plan不执行 | `docs/GOVERNANCE_V7.md`、`AGENTS.md` | 已执行 | 静态阶段与runtime gate链路均闭环推进 | PASS | `a2881ad` | 是 | 跳过Plan会阻断 | phase切换、批次升级 |
| HR-12 | 无Closure不进下一批 | `docs/GOVERNANCE_V7.md`、`AGENTS.md`、`CLAUDE.md` | 已执行 | static phase closure / handoff 已完成 | PASS | `14a7a2a` | 是 | 闭环缺失会阻断 | phase closure |
| HR-13 | 模型/Effort不写入Codex正文 | `docs/GOVERNANCE_V7.md`、`docs/TOKEN_EFFICIENCY_POLICY.md` | 已执行 | 最近批次已停止要求 Codex 推断 | PASS | `ffa7fb6` | 否 | 当前有效 | 模型治理变更 |
| HR-14 | 禁读env/token/secret | `docs/GOVERNANCE_V7.md`、`docs/TOKEN_EFFICIENCY_POLICY.md` | 已执行 | import-only execution attestation | PASS | `c5c640b` | 是 | 越界即停止 | Tier 3+执行 |
| HR-15 | 禁止未授权API/DB/runtime/auth/sandbox | `docs/GOVERNANCE_V7.md`、`docs/TOKEN_EFFICIENCY_POLICY.md` | 已执行 | import-only execution zero-budget evidence | PASS | `c5c640b` | 是 | 未批准即阻断 | Tier 3+执行 |
| HR-16 | 禁止npm install/npx/npm exec/pip install | `docs/GOVERNANCE_V7.md`、`docs/TOKEN_EFFICIENCY_POLICY.md` | 已执行 | import-only execution evidence | PASS | `c5c640b` | 是 | 当前有效 | Tier 2/3执行 |
| HR-17 | package/lockfile/scripts/audit/governance修改边界 | `docs/GOVERNANCE_V7.md`、`docs/AUDIT_SCRIPT_POLICY.md` | 已执行 | 最近批次按 allowlist 修改 | PASS | `ffa7fb6` | 是 | 越界修改即停止 | 文档/脚本变更批次 |
| HR-18 | public-safe export | `docs/GOVERNANCE_V7.md`、`docs/TOKEN_EFFICIENCY_POLICY.md` | 已执行 | remote truth/public export evidence | PASS | `c733a5b` | 是 | public-safe 失败即阻断 | 每次 public export |
| HR-19 | public export remote truth check | `docs/GOVERNANCE_V7.md`、`docs/CODEX_EXECUTION_CHECKLIST.md`、`docs/TOKEN_EFFICIENCY_POLICY.md` | 已执行 | `review_queue/batch6_public_export_remote_truth_check_rule1/` | PASS | `c733a5b` | 是 | local/SSH/HTTPS 不一致即阻断 | 每次 public export |
| HR-20 | commit-hash URL优先审核 | 同上 | 已执行 | remote truth rule evidence | PASS | `c733a5b` | 是 | branch URL 仅辅助 | 每次 public export |
| HR-21 | ChatGPT public audit硬闭环 | `docs/GOVERNANCE_V7.md`、`docs/TOKEN_EFFICIENCY_POLICY.md` | 已规范化 | `7661a5b` | PENDING | 本批待导出 | 是 | 本规则刚被固化，待公开复核 | public export、phase closure |
| HR-22 | governance rollup触发规则 | `docs/GOVERNANCE_V7.md` | 已执行 | batch5/batch6 governance rollup evidence | PASS | `ffa7fb6`、`a2881ad`、`96e1355` | 否 | 当前有效 | 3-5 batch、phase closure、public export 后 |
| HR-23 | external watch只读观察 | `docs/GOVERNANCE_V7.md` | 已执行 | external watch audit evidence | PASS | `7e84971` | 否 | 当前有效 | external watch 批次 |
| HR-24 | external adoption必须用户+ChatGPT共同决定 | `docs/GOVERNANCE_V7.md` | 已执行 | joint decision rule evidence | PASS | `96e1355` | 是 | 未共同批准不得吸收 | external adoption 提案 |
| HR-25 | review_queue证据归档 | `AGENTS.md`、`docs/CODEX_EXECUTION_CHECKLIST.md` | 已执行 | 最近治理/执行批次均有 review_queue | PASS | `c5c640b` | 是 | 中高风险批次必须留档 | 中高风险变更 |
| HR-26 | Tier 3+必须用户明确批准 | `docs/GOVERNANCE_V7.md`、`docs/TOKEN_EFFICIENCY_POLICY.md` | 已执行 | import-only execution user approval scope | PASS | `c5c640b` | 是 | 未批准不得执行 | Tier 3+执行 |
| HR-27 | Tier 3+必须白名单/budget/stop condition | `docs/GOVERNANCE_V7.md`、`docs/TOKEN_EFFICIENCY_POLICY.md` | 已规范化并执行 | import-only execution + `7661a5b` | PENDING | 本批待导出 | 是 | 新 canonical 表述待公开复核 | Tier 3+执行 |
| HR-28 | no fallback | `docs/GOVERNANCE_V7.md`、`docs/TOKEN_EFFICIENCY_POLICY.md` | 已规范化并执行 | import-only execution no fallback | PENDING | 本批待导出 | 是 | 当前批次未触发 fallback | Tier 3+执行 |
| HR-29 | no pagination/no retry storm/no full scan | `docs/GOVERNANCE_V7.md`、`docs/TOKEN_EFFICIENCY_POLICY.md` | 已规范化 | `7661a5b` + runtime gate evidence | PENDING | 本批待导出 | 是 | 规范已收紧，待公开复核 | runtime/API gate |
| HR-30 | no DB write unless separately approved | `docs/GOVERNANCE_V7.md`、`docs/TOKEN_EFFICIENCY_POLICY.md` | 已规范化并执行 | import-only execution zero DB evidence | PENDING | 本批待导出 | 是 | 新 canonical 表述待公开复核 | Tier 3+执行 |
| HR-31 | 不自动进入下一阶段 | `docs/GOVERNANCE_V7.md`、runtime gate evidence | 已执行 | import-only execution recommended next batch only | PASS | `c5c640b` | 是 | 未获批准不得自动推进 | phase completion、Tier 升级 |

