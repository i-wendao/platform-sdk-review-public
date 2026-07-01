# Path Repair Notes

## 1. 历史问题

Batch 5.13 apply check 曾通过，但实际应用产生错误顶层路径：

```text
shopee_ts/src/adapter_candidate.ts
shopee_ts/src/output_contract.ts
shopee_ts/src/sdk_boundary.ts
```

该错误路径已清理，当前 private repo 中顶层 `shopee_ts/` 不存在。

## 2. 本批修复判断

本批复核的 source patch 已指向正式目标路径：

```text
adapters/shopee_ts/src/
```

因此本批只做 corrected patch 归档、路径安全检查和 `git apply --check`，不做语义修改。

## 3. 后续应用前硬性检查

后续如进入正式 apply 批次，仍必须确认：

- `git status --short` 为空；
- 顶层 `shopee_ts/` 不存在；
- 三个正式 adapter skeleton 文件不存在；
- `git apply --check` 通过；
- apply 后只新增 3 个允许文件。
