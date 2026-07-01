# 项目地图

## 1. 固定目录

```text
/opt/project/sdk/
  AGENTS.md
  CLAUDE.md
  README.md
  docs/
  sql/
  scripts/
  py/
  adapters/
  evidence/
  runtime/
```

## 2. 推荐目录结构

```text
/opt/project/sdk/
  AGENTS.md
  CLAUDE.md
  README.md

  docs/
    AI_LONG_PROJECT_RULES.md
    LONG_PROJECT_WORKFLOW.md
    PROJECT_MAP.md
    DECISION_LOG.md
    INSTRUCTION_REVIEW_POLICY.md
    HARNESS_POLICY.md
    RAG_RETRIEVAL_POLICY.md
    SMALL_BATCH_PLAN_TEMPLATE.md
    BATCH_LIFECYCLE.md
    TEST_AND_VALIDATION_POLICY.md
    CLOSURE_TEMPLATE.md

    TECH_STACK_DECISION.md
    SDK_ADAPTER_POLICY.md
    PLATFORM_SDK_SELECTION.md
    BUSINESS_DOMAIN_SCOPE.md
    SDK_METHOD_DISCOVERY_POLICY.md
    SDK_METHOD_REGISTRY.md
    SDK_METHOD_COVERAGE_RUNBOOK.md
    SDK_PARAMETER_AUTHORITY.md
    SDK_INSPECT_RUNBOOK.md
    SDK_RELEASE_WATCH_RUNBOOK.md
    SDK_CONCURRENCY_RUNBOOK.md
    PAGINATION_AND_TIME_WINDOW_RULES.md
    ERROR_HANDLING_POLICY.md

    DATABASE_CONTRACT.md
    RAW_EVIDENCE_CONTRACT.md
    STORE_CODE_REGISTRY.md
    AUTH_TOKEN_POLICY.md
    RUN_TAG_AND_EVIDENCE_POLICY.md
    HUMAN_REVIEW_GATE.md
    CODEX_EXECUTION_CHECKLIST.md
    BOOTSTRAP_TODO.md

  scripts/
    bootstrap/
    db/
    release_watch/

  py/
    core/
    jobs/
    db/
    evidence/
    review/
    cli/

  adapters/
    shopee_typescript/
    tiktok_go/

  evidence/
    shopee/
    tiktok/

  runtime/
    logs/
    run_state/
    release_watch/
    closures/
    rag_snapshots/
    plans/
```

## 3. 平台规划

| 平台 | 当前状态 | SDK 策略 | adapter |
|---|---|---|---|
| Shopee | 第一阶段先落地 | 社区 SDK-first，SDK 无法解释时再官方文档校验 | `adapters/shopee_typescript` |
| TikTok Shop | 预留 | 官方 SDK-first，优先 Go | `adapters/tiktok_go` |

## 4. 第一阶段业务域

第一阶段只按业务域规划，不预列 endpoint 清单。

| 优先级 | 业务域 | 说明 |
|---|---|---|
| P0 | 订单 | 订单列表、详情、状态、金额字段 raw evidence |
| P0 | 商品 | 商品、SKU、variation、价格/库存关联字段 raw evidence |
| P1 | 售后 | 退货、退款、售后状态、原因、平台判责 raw evidence |
| P1 | 回款 | escrow、payment、settlement、平台费用等高风险数据 |
| P2 | 库存 | 平台库存相关只读能力，禁止写库存 |
| P2 | 物流 | 物流状态、面单/轨迹/发货相关只读能力，禁止发货/取消等写操作 |

具体 SDK method 由 Codex 从 SDK 文档、类型定义、示例和源码中发现，并写入 `SDK_METHOD_REGISTRY.md`。

## 5. 长线工作流地图

```text
规则文件：AGENTS.md / CLAUDE.md / AI_LONG_PROJECT_RULES.md
↓
项目地图：PROJECT_MAP.md
↓
边界判断：HARNESS_POLICY.md + CODEX_EXECUTION_CHECKLIST.md
↓
资料筛选：RAG_RETRIEVAL_POLICY.md
↓
小批次计划：SMALL_BATCH_PLAN_TEMPLATE.md
↓
执行与测试：SDK runbook / TEST_AND_VALIDATION_POLICY.md
↓
交接闭环：CLOSURE_TEMPLATE.md
↓
下一批：BATCH_LIFECYCLE.md
```

## 6. 第一阶段范围

只做：

- SDK inspect；
- SDK method discovery；
- 只读 method raw evidence；
- 参数、分页、错误、并发边界；
- release watch；
- 人工核对；
- 数据库 raw/audit/review 写入；
- 小批次 Plan / Closure 管理。

不做：

- DWD/mart；
- 利润/补货；
- 自动经营结论；
- 写接口；
- 手工预列 endpoint 并绕过 SDK 探测；
- 没有 Closure 就进入下一批。

## 7. Codex 开工入口

每次执行前先读：

```text
AGENTS.md
CLAUDE.md
AI_LONG_PROJECT_RULES.md
LONG_PROJECT_WORKFLOW.md
PROJECT_MAP.md
DECISION_LOG.md
CODEX_EXECUTION_CHECKLIST.md
```

然后输出：

```text
本次层级：
本次批次目标：
本次业务域：
SDK method 来源：
Harness 边界判断：
RAG 检索范围：
是否调用 API：
是否写数据库：
是否刷新 token：
是否涉及 SDK update：
是否涉及并发：
是否涉及分页：
是否需要用户批准：
风险与中止条件：
Closure 输出位置：
```

## 8. Batch 5 治理补充地图

### 8.1 Public Review Mirror

```text
/opt/project/sdk_public_review
```

用途：独立 public sanitized review mirror，只用于向 ChatGPT 暴露白名单审核材料。它不包含 private git 历史，不是 source of truth，不得反向合并到 `/opt/project/sdk`。

### 8.2 新增治理文档

```text
docs/TOKEN_EFFICIENCY_POLICY.md
docs/AUDIT_SCRIPT_POLICY.md
```

- `TOKEN_EFFICIENCY_POLICY.md`：定义 Tier 1 / Tier 2 / Tier 3 执行分级与输出压缩边界。
- `AUDIT_SCRIPT_POLICY.md`：定义未来 `scripts/audit/` 的 planned / draft / reviewed / deprecated 状态治理；当前只建规则，不代表脚本可运行。

### 8.3 Batch 5 关键审核包

```text
review_queue/batch5_13R3_standard_patch/
review_queue/batch5_14_skeleton_static_review/
review_queue/batch5_governance_checkpoint1/
review_queue/batch5_governance_backfill1/
```

- `batch5_13R3_standard_patch/`：标准 patch header 修复与临时目录真实 apply 落点验证审核包。
- `batch5_14_skeleton_static_review/`：Shopee TS SDK adapter skeleton 三文件静态复核审核包。
- `batch5_governance_checkpoint1/`：v6 enhanced 治理落地 checkpoint 审核包。
- `batch5_governance_backfill1/`：Decision / Project Map / Issue / RAG / Closure 补写方案审核包。
