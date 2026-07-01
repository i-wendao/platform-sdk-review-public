# Approved Execution Checklist

## 1. GH-PUBLIC1 审核通过标准

- 明确 public 仓库定位。
- 明确 private source of truth。
- 明确 private → public 单向导出。
- 明确白名单和黑名单。
- 明确脱敏检查。
- 明确 GitHub vs zip 使用矩阵。
- 明确 GH-PUBLIC2 候选边界。

## 2. GH-PUBLIC2 前必须确认

- 用户已创建 `platform-sdk-review-public`。
- 用户确认仓库公开。
- 用户确认允许配置第二 remote。
- 用户确认允许导出哪些批次。
- 用户确认 public 内容可被 ChatGPT 访问。

## 3. GH-PUBLIC2 必须停止条件

- 工作区不干净。
- 候选导出命中黑名单。
- 脱敏检查失败。
- remote 指向错误账号或错误仓库。
- 发现 public 仓库被误当 source of truth。
