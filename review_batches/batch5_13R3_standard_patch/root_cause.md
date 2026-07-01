# Root Cause

## 1. 现象

Batch 5.13R2-APPLY1 中：

- `git apply --check` 通过；
- `git apply` 实际创建了顶层 `shopee_ts/src/...`；
- 正式目标 `adapters/shopee_ts/src/...` 未创建。

## 2. 根因

R2 patch 的 `diff --git` 行缺少标准 `a/`、`b/` 前缀：

```text
diff --git adapters/shopee_ts/src/sdk_boundary.ts adapters/shopee_ts/src/sdk_boundary.ts
```

`git apply` 默认 `-p1` 会剥离第一个路径段，因此 `adapters/shopee_ts/...` 被落到 `shopee_ts/...`。

## 3. 修复

R3 patch 标准化为：

```text
diff --git a/adapters/shopee_ts/src/sdk_boundary.ts b/adapters/shopee_ts/src/sdk_boundary.ts
+++ b/adapters/shopee_ts/src/sdk_boundary.ts
```

同样适用于 `output_contract.ts` 与 `adapter_candidate.ts`。
