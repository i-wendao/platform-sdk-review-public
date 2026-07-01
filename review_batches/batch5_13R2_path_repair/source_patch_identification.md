# Source Patch Identification

## 1. 查找范围

优先查找：

```text
review_queue/batch5_12R/
review_queue/batch5_12R*/
```

## 2. 发现结果

唯一 source patch：

```text
review_queue/batch5_12R/proposed_patch.diff
```

## 3. source patch header 摘要

source patch header 已指向：

```text
adapters/shopee_ts/src/sdk_boundary.ts
adapters/shopee_ts/src/output_contract.ts
adapters/shopee_ts/src/adapter_candidate.ts
```

未发现需要替换的顶层路径：

```text
shopee_ts/src/
```

## 4. 处理策略

因 source patch 已是正确路径，本批不得做重复路径替换，也不得改动 patch 语义。
