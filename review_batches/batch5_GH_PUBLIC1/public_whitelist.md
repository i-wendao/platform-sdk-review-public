# Public Whitelist

允许公开前提：必须脱敏、无 secret、无 token、无真实业务数据。

## 1. 可考虑公开

- `review_queue/` 中经检查可公开的审核包。
- proposed patch / diff。
- 文档类审核材料。
- 风险说明。
- 白名单文件清单。
- 脱敏后的 runtime 摘要。
- 不含店铺 ID / token / raw 数据的代码草案。
- `git diff --name-only` / `git diff --stat` 摘要。
- private/public commit 映射表。

## 2. 条件白名单

- `.env.example`：仅在确认无真实敏感值后可公开。
- package manifests：仅在不包含私有 registry token 或内部 URL 时可公开。
- runtime 摘要：仅允许脱敏摘要，不允许 raw response 原文。

## 3. 默认不公开

未列入白名单的文件默认不公开。
