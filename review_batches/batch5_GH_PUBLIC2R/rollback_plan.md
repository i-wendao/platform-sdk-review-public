# Rollback Plan

## 1. 本批 rollback

本批只新增审核包。如复核未通过：

- 不提交该审核包；
- 另批修订或删除；
- 不影响 private repo；
- 不影响 public repo。

## 2. 后续 GH-PUBLIC2 rollback

如后续 public 导出失败：

- 停止 commit / push；
- 删除 `/opt/project/sdk_public_review` 需用户另批批准；
- 若已 push 且发现敏感信息，必须立即停止并由用户决定 public 仓库下线、删除、secret rotate 等动作。

## 3. 本批禁止

- 不创建 public repo 工作目录。
- 不配置 remote。
- 不 push。
- 不复制 private 文件。
