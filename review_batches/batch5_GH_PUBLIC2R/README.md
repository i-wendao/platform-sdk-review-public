# Batch 5.GH-PUBLIC2R public 导出脱敏检查规则修订审核包

## 1. 本批目标

修订 GH-PUBLIC2 的 public 导出脱敏检查策略，解决“策略说明性敏感词”和“真实凭据值”混淆导致的误报。

## 2. 背景

GH-PUBLIC2 被 Codex 正确停止，原因是首批允许导出的安全策略文档会自然包含以下说明性词汇：

- `secret`
- `token`
- `.env`
- `access_token`
- `refresh_token`
- `shop_id`
- `partner_id`

原始 grep 规则会把这些说明性词汇视为 fatal，导致公开导出必然失败。

## 3. 修订原则

- 路径黑名单仍必须 fatal。
- 高置信真实凭据模式仍必须 fatal。
- policy / guardrail / checklist / risk / README / blacklist / whitelist / matrix 文档中的说明性词汇不直接 fatal。
- 说明性词汇必须计数并输出文件列表，供人工复核。
- 高风险业务标识进入 manual review。

## 4. 本批边界

本批只落盘审核包，不创建 `/opt/project/sdk_public_review`，不复制 private 文件，不配置 remote，不 push，不访问 GitHub 网络，不提交。
