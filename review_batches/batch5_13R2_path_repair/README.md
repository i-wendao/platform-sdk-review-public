# Batch 5.13R2 adapter skeleton patch 路径修复审核包

## 1. 本批目标

复核并修复 Batch 5.12R adapter skeleton patch 的目标路径，确保后续获批应用时只会新增：

- `adapters/shopee_ts/src/sdk_boundary.ts`
- `adapters/shopee_ts/src/output_contract.ts`
- `adapters/shopee_ts/src/adapter_candidate.ts`

## 2. 本批边界

- 不实际 apply patch。
- 不创建正式 adapter skeleton 文件。
- 不创建顶层 `shopee_ts/`。
- 不修改 `adapters/shopee_ts/package.json`。
- 不修改 `adapters/shopee_ts/package-lock.json`。
- 不调用 Shopee/TikTok API。
- 不写数据库。
- 不读取 `.env`。

## 3. 当前结论

本批定位到唯一 source patch：

```text
review_queue/batch5_12R/proposed_patch.diff
```

该 source patch 当前已指向 `adapters/shopee_ts/src/...`，未发现顶层 `shopee_ts/src/...` header。因此 `corrected_patch.diff` 保持 source patch 语义不变，仅作为 Batch 5.13R2 路径复核后的 corrected patch 归档。
