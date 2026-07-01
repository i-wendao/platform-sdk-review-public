# Rollback Plan

## 1. 本批 rollback

本批只新增 review_queue 审核包。如复核未通过：

- 不提交 private repo；
- 可在后续修订批次替换该审核包；
- 不需要回滚正式 adapter，因为本批不 apply patch。

## 2. 后续 apply rollback 候选

若后续正式 apply 后需要回滚，必须另批批准，候选动作仅限删除或 restore 以下 3 个文件：

```text
adapters/shopee_ts/src/sdk_boundary.ts
adapters/shopee_ts/src/output_contract.ts
adapters/shopee_ts/src/adapter_candidate.ts
```

不得使用 destructive git reset。
