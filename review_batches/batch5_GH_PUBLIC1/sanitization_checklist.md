# Sanitization Checklist

## 1. 文件名检查

公开导出前必须检查文件路径是否包含：

```text
.env
node_modules
runtime_tokens
token
secret
.pem
.key
.sqlite
.db
dump
raw
staging
ctrl
DWD
mart
```

## 2. 内容检查

公开导出前必须检查候选文件是否包含：

- access token
- refresh token
- partner key
- app secret
- private key block
- shop ID / partner ID 的真实值
- 订单号、客户资料、财务原始数据
- API raw response 原文

## 3. 人工复核

自动检查不能替代人工复核。任何疑似敏感内容必须由用户确认后才可公开。

## 4. 输出要求

每次 public export 必须记录：

- private source commit；
- public export commit；
- 导出文件清单；
- 脱敏检查结果；
- 被排除文件；
- 是否仍需要 zip/evidence 兜底。
