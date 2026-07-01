# Risk Review

## 1. 风险等级

medium。

本批仍处理 adapter patch，但不在正式工作区 apply，仅在临时目录验证。

## 2. 主要风险

- patch header 修复不完整。
- 临时验证误用正式工作区。
- patch 内容语义被意外修改。
- 后续正式 apply 时再次产生顶层 `shopee_ts/`。

## 3. 控制措施

- 正式工作区 preflight。
- header grep 检查。
- 临时目录 `git archive HEAD` 后真实 `git apply`。
- 临时目录验证目标文件存在且顶层 `shopee_ts/` 不存在。
- 正式工作区最终确认未 apply。
