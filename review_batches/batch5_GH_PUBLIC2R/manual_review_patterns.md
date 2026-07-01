# Manual Review Patterns

## 1. manual review 词汇

以下词汇不直接 fatal，但必须进入人工复核列表：

```text
shop_id
partner_id
order_sn
return_sn
access token
refresh token
seller
buyer
finance
raw response
API response
```

## 2. 处理规则

- 出现在 policy-doc context 中：记录计数和文件列表。
- 出现在 patch/code/runtime notes 中：人工复核后才可公开。
- 与长随机值、真实 ID、订单号、财务原文组合出现：停止并要求人工复核。

## 3. 输出格式

建议输出：

```text
manual_review_pattern:
  pattern:
  file:
  line:
  context_type: policy_doc / code_draft / runtime_note / unknown
  decision: needs_human_review
```
