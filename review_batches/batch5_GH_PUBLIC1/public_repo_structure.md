# Public Repository Structure

建议结构：

```text
README.md
review_batches/
  batch5_xxx/
patches/
  batch5_xxx/
diffs/
  batch5_xxx/
sanitized_runtime_notes/
mapping/
  private_to_public_commit_map.md
```

## 1. 目录用途

- `review_batches/`：脱敏后的 review_queue 审核材料。
- `patches/`：脱敏 proposed patch。
- `diffs/`：脱敏 diff 摘要或文件清单。
- `sanitized_runtime_notes/`：脱敏 runtime 摘要，不放 raw。
- `mapping/`：private commit 与 public commit 对应关系。

## 2. 禁止目录

public 仓库不得建立：

```text
raw/
staging/
ctrl/
DWD/
mart/
runtime_tokens/
node_modules/
database_dumps/
```
