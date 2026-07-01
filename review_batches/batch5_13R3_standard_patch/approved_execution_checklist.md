# Approved Execution Checklist

## 1. 本审核包通过标准

- `standard_patch.diff` 使用标准 `a/`、`b/` header。
- 不包含顶层 `shopee_ts/` 目标路径。
- 临时目录 `git apply --check` 通过。
- 临时目录真实 `git apply` 后落点正确。
- 临时目录未创建顶层 `shopee_ts/`。
- 正式工作区未实际 apply。

## 2. 后续正式 apply 前置条件

- ChatGPT 复核 PASS。
- 用户批准正式 apply。
- private 工作区干净。
- 目标 skeleton 文件仍不存在。
- 顶层 `shopee_ts/` 仍不存在。

## 3. 后续正式 apply 禁止事项

- 不修改 package/lockfile。
- 不调用 API。
- 不写数据库。
- 不读取 `.env`。
- 不运行 SDK 示例/auth/sandbox。
- 不做 SDK method discovery。
