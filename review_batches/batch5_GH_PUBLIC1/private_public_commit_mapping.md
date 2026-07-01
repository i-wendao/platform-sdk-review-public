# Private / Public Commit Mapping

## 1. 映射目的

记录 public review 内容对应的 private source commit，避免 public 仓库成为事实源或出现漂移。

## 2. 建议格式

```markdown
| batch | private_repo | private_commit | public_repo | public_commit | exported_paths | sanitization_status | notes |
|---|---|---|---|---|---|---|---|
```

## 3. 规则

- 每次 public export 必须记录 private source commit。
- public commit 只说明审查视图，不代表 private 已合并。
- public 仓库中的修改不得反向 merge 到 private。
- 若 ChatGPT 对 public 内容提出修改，必须在 private 的 review_queue 中重新落盘。
