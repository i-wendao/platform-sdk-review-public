# Fatal Secret Patterns

## 1. 规则

以下高置信真实凭据内容命中必须停止，不得 commit / push：

```text
-----BEGIN .*PRIVATE KEY-----
BEGIN OPENSSH PRIVATE KEY
access_token\s*[:=]\s*['"]?[A-Za-z0-9._-]{20,}
refresh_token\s*[:=]\s*['"]?[A-Za-z0-9._-]{20,}
secret\s*[:=]\s*['"]?[^'"\s]{12,}
password\s*[:=]\s*['"]?[^'"\s]{8,}
passwd\s*[:=]\s*['"]?[^'"\s]{8,}
token\s*[:=]\s*['"]?[A-Za-z0-9._-]{20,}
```

## 2. 建议执行逻辑

后续 GH-PUBLIC2 可使用脚本或受审命令实现上述模式。实现时必须避免 shell quoting 错误，并把匹配结果写入脱敏检查报告。

## 3. 注意

- 说明性词汇本身不 fatal。
- 形如 `token=` 且后面是长随机值才 fatal。
- 真实私钥块必须 fatal。
