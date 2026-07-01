# Risk Review

## 1. 风险等级

整体风险：high for future execution，low for this package。

原因：

- 本批只落盘方案，不联网、不同步、不 push。
- 后续 public export 会引入公开泄露风险。

## 2. 主要风险

- private 主仓库内容误公开。
- `.env`、token、secret、runtime token、数据库 dump、raw/staging 数据误公开。
- 店铺、平台、订单、财务、客户数据误公开。
- public 仓库反向合并污染 private 主仓库。
- public review commit 与 private source commit 漂移。
- ChatGPT 将 public mirror 误当 source of truth。

## 3. 控制措施

- private → public 单向导出。
- 文件白名单。
- public 黑名单。
- 脱敏检查。
- commit mapping。
- 高风险节点仍保留 zip/evidence。
- public 仓库不替代 v6 内部闭环。

## 4. 本批未执行

- 未创建 public 仓库。
- 未配置第二 remote。
- 未 push。
- 未复制或导出 private 文件。
