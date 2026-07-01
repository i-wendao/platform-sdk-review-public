# Private To Public Sync Policy

## 1. 单向原则

同步方向只能是：

```text
private source of truth -> sanitized public review mirror
```

禁止：

```text
public -> private
```

## 2. 同步方式

public 仓库应通过显式白名单复制或生成，不得对整个 private 仓库做 mirror push。

推荐：

- 由审核包声明允许导出的文件；
- 复制到独立临时导出目录；
- 运行文件名和内容脱敏检查；
- 生成 public commit；
- 记录 private commit 与 public commit 映射。

## 3. 禁止同步

- 不同步 `.git/`。
- 不同步 private remote 配置。
- 不同步 `.env`。
- 不同步 runtime token、raw evidence、DB dump。
- 不同步 `node_modules/`。

## 4. 反向污染防线

- private 仓库不得从 public 仓库 merge。
- private 仓库不得 pull public 分支。
- public 仓库中的修订必须回到 private 的 review_queue，经复核后再进入 private。
- public 仓库只保存审查视图，不保存最终事实。
