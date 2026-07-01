# Fatal Path Patterns

## 1. 规则

public repo 中任何文件路径命中以下内容必须停止，不得 commit / push：

```text
.env
.env.
id_ed25519
.pem
.key
.sqlite
.db
dump
node_modules
runtime_tokens
raw
staging
dwd
mart
```

## 2. 建议命令草案

```bash
find . -type f | sort > /tmp/public_files.txt

if grep -E '(^|/)(\.env$|\.env\.|id_ed25519|\.pem$|\.key$|\.sqlite$|\.db$|dump|node_modules|runtime_tokens|raw|staging|dwd|mart)' /tmp/public_files.txt; then
  echo "fatal path pattern matched; stop."
  exit 1
fi
```

## 3. 说明

- 路径黑名单不区分 policy-doc context。
- 任何路径命中均应停止。
- 本批默认不导出 `.env.example`。
