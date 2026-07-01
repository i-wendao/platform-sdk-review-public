# Approved Execution Checklist

## 1. 本审核包通过标准

- 区分说明性敏感词与真实凭据值。
- fatal path patterns 明确。
- fatal secret patterns 明确。
- policy-doc context allowlist 明确。
- manual review patterns 明确。
- 说明是否建议导出 `batch5_GH_PUBLIC1`。

## 2. GH-PUBLIC2R 后续执行前确认

- ChatGPT 复核 PASS。
- 用户确认是否继续导出 `batch5_GH_PUBLIC1`。
- 用户确认 public 仓库仍为空或可接收首批导出。
- 用户确认使用修订后的检查策略。

## 3. GH-PUBLIC2 执行时禁止

- 不在 private repo 添加 public remote。
- 不从 private repo 直接 push public。
- 不复制整个 private repo。
- 不复制整个 review_queue。
- 不复制黑名单路径。
- 不读取 `.env`。
- 不调用 API。
- 不写数据库。
