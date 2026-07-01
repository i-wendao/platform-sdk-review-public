# Approved Execution Checklist

## 1. 本审核包通过标准

- source patch 唯一。
- corrected patch 不包含顶层 `shopee_ts/` 目标路径。
- corrected patch 包含 3 个 `adapters/shopee_ts/src/...` 目标路径。
- `git apply --check` 通过。
- 未实际应用 patch。
- 未创建正式 adapter skeleton 文件。
- 已导出到 public mirror 供 ChatGPT 复核。

## 2. 后续正式 apply 批次前置条件

- ChatGPT 复核 PASS。
- 用户明确批准 apply。
- private repo 工作区干净。
- 再次执行 `git apply --check`。
- apply 后只允许新增 3 个 adapter skeleton 文件。

## 3. 后续正式 apply 批次禁止

- 不修改 package/lockfile。
- 不调用 API。
- 不读取 `.env`。
- 不写数据库。
- 不运行 SDK 示例、auth、sandbox。
- 不做 SDK method discovery。
