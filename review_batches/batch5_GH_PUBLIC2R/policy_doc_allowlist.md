# Policy Doc Context Allowlist

## 1. 允许上下文

以下类型文档中的说明性敏感词不直接 fatal，但必须计数并列出文件：

```text
README.md
*policy*.md
*guardrail*.md
*checklist*.md
*risk_review.md
*blacklist*.md
*whitelist*.md
*matrix*.md
*plan*.md
```

## 2. 说明性词汇

以下词汇可作为说明性词汇出现：

```text
secret
token
.env
access_token
refresh_token
shop_id
partner_id
password
private key
```

## 3. 必须输出

GH-PUBLIC2 应输出：

- 说明性词汇总命中次数；
- 命中文件列表；
- 是否均处于 policy-doc context；
- 是否仍需人工复核。

## 4. 不允许绕过 fatal 规则

policy-doc context 不豁免 fatal path patterns、fatal secret patterns、私钥块、真实 token/secret 值、DB dump 或 raw evidence。
