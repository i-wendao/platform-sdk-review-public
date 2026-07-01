# Sanitization Rule Repair

## 1. 问题

GH-PUBLIC2 原规则使用宽泛内容扫描，无法区分：

- 安全策略文档中的说明性敏感词；
- 真实凭据值；
- 业务标识样例；
- raw/API 原文。

因此，导出 `review_queue/batch5_GH_PUBLIC1/` 时会必然误报。

## 2. 修订目标

新规则应分三层：

1. fatal path patterns：路径命中即停止。
2. fatal secret patterns：高置信真实凭据值命中即停止。
3. policy-doc context allowlist / manual review：说明性词汇计数，不直接停止。

## 3. 是否建议排除 batch5_GH_PUBLIC1

默认不建议排除 `batch5_GH_PUBLIC1`，因为它正是 public mirror 安全边界的核心说明材料。

但必须满足：

- 该目录仅作为 policy-doc context；
- 对高置信凭据模式仍执行 fatal 检查；
- 对说明性敏感词输出计数与文件列表；
- ChatGPT 复核通过后才允许公开。

如用户希望最低风险首发，也可在 GH-PUBLIC2 中先排除 `batch5_GH_PUBLIC1`，但这会降低 public review mirror 的规则透明度。

## 4. 仍需人工复核

自动规则不能证明“绝对无敏感信息”。每次 public 导出仍需记录导出文件清单、fatal path 检查结果、fatal secret 检查结果、policy-doc 说明性词汇计数、manual review 命中列表和 private/public commit mapping。
