# Risk Review

## 1. 风险等级

本批风险：medium。

原因：

- 本批处理 adapter patch，虽不实际 apply，但会影响后续正式 adapter skeleton 应用。
- 历史上曾出现错误顶层 `shopee_ts/` 路径。

## 2. 主要风险

- corrected patch 仍指向顶层 `shopee_ts/`。
- 后续执行者误以为本批已应用 patch。
- public mirror 导出包含不应公开内容。
- ChatGPT 仅看 public mirror 时误解 private repo 状态。

## 3. 控制措施

- 本批不实际 apply patch。
- 路径安全检查写入 `path_safety_check.txt`。
- `git apply --check` 输出写入 `apply_check_output.txt`。
- 导出 public mirror 前执行脱敏检查。
- public/private mapping 记录 private base commit。
