# Public Review Repository Plan

## 1. 推荐仓库

```text
platform-sdk-review-public
```

建议 URL：

```text
https://github.com/i-wendao/platform-sdk-review-public
git@github.com:i-wendao/platform-sdk-review-public.git
```

## 2. 定位

public 仓库仅用于公开可复核材料：

- review_queue 中经脱敏检查的审核包；
- proposed patch / diff；
- 风险说明；
- 白名单文件清单；
- 脱敏后的 runtime 摘要；
- 不含真实业务数据的代码草案。

## 3. 不作为事实源

public 仓库不得作为：

- source of truth；
- 正式项目仓库；
- runtime evidence 事实源；
- SDK method registry；
- Decision Log；
- raw/staging/ctrl/DWD/mart 数据源。

## 4. 需要用户确认

GH-PUBLIC2 前需要用户确认：

- 公开仓库已创建；
- 仓库名为 `platform-sdk-review-public`；
- 允许配置第二 remote；
- 允许按白名单导出；
- 允许 push public review 内容。
