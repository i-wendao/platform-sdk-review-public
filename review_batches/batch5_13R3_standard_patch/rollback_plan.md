# Rollback Plan

## 1. 本批 rollback

本批只新增 review_queue 审核包。如复核未通过：

- 不提交；
- 后续另批修订；
- 无需回滚正式 adapter，因为本批不在正式工作区 apply。

## 2. 临时目录

临时目录仅用于验证，不复制回正式工作区。可由系统临时清理策略或后续用户批准清理。

## 3. 后续正式 apply rollback 候选

若后续正式 apply 后需要回滚，只允许处理：

```text
adapters/shopee_ts/src/sdk_boundary.ts
adapters/shopee_ts/src/output_contract.ts
adapters/shopee_ts/src/adapter_candidate.ts
```
