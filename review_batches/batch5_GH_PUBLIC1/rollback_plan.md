# Rollback Plan

## 1. GH-PUBLIC1 rollback

本批只新增审核包。如审核未通过：

- 不提交该审核包；
- 后续另批修订或删除；
- 不影响 private 主仓库 remote。

## 2. GH-PUBLIC2 rollback 候选

如后续配置 public remote 出错，需另批批准：

```bash
git remote remove public-review
```

如后续 public 仓库误推敏感内容，必须立即停止并由用户处理 GitHub 远端可见性、删除、rotate secret 等流程。

## 3. 本批禁止

- 不执行 rollback。
- 不删除 remote。
- 不访问 GitHub。
- 不 push。
