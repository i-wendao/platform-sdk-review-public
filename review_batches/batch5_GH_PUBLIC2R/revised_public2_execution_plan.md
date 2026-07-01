# Revised GH-PUBLIC2 Execution Plan

## 1. 前置检查

```bash
cd /opt/project/sdk
git status --short
git branch --show-current
git remote -v
git log --oneline -5
```

如果 private 工作区不干净，停止。

## 2. public repo 初始化

仍使用独立目录：

```text
/opt/project/sdk_public_review
```

禁止在 private repo 添加 public remote。

## 3. 白名单导出

只导出批准目录：

```text
review_queue/batch5_GH_PUBLIC1/
review_queue/batch5_V6R/
review_queue/batch5_V6R_closure/
review_queue/batch5_V6R_write/
review_queue/batch5_V6R_backfill_apply_review/
```

禁止复制整个 `review_queue/` 或 private `.git/`。

## 4. 修订后的检查顺序

1. `find . -type f | sort`
2. fatal path patterns
3. fatal secret patterns
4. policy-doc context allowlist 计数
5. manual review patterns 计数
6. 输出检查报告
7. ChatGPT / 用户确认后才 commit / push

## 5. 是否继续包含 batch5_GH_PUBLIC1

建议继续包含，但必须作为 policy-doc context 处理。

如果 ChatGPT 认为 public 首发应更保守，可改为 GH-PUBLIC2B，仅导出 V6R 相关材料，并把 GH_PUBLIC1 留到后续。
