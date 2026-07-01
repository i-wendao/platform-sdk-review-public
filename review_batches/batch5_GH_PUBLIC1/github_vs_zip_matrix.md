# GitHub vs Zip Matrix

## 1. 可优先给 public GitHub 链接

- 纯文档审核包。
- 脱敏 patch / diff。
- 公开白名单内的 review_queue 导出内容。
- 不含真实业务数据的设计方案。
- 不含 token/secret 的代码草案。

## 2. 仍必须 zip/evidence 上传

- 未提交工作区快照。
- 执行前后状态证据。
- API / DB / SDK install / patch apply 的运行结果。
- raw evidence 或 runtime 输出的脱敏前原始材料。
- ChatGPT 需要核对文件完整性但 public 仓库只包含摘要时。
- public 仓库尚未同步或同步结果存疑时。

## 3. 双轨原则

GitHub 链接用于降低传输成本；zip/evidence 用于保证一次性执行上下文的完整快照。

二者都不替代 Closure / RAG / Issue / Decision。
