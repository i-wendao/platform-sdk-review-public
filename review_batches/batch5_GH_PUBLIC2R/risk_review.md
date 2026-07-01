# Risk Review

## 1. 风险等级

本批：low。只落盘审核包。

后续 GH-PUBLIC2：high。原因是 public 仓库公开可见，任何误导出都会扩大泄露面。

## 2. 修订收益

- 避免说明性敏感词导致必然误报。
- 保留真实凭据 fatal 检查。
- 保留路径黑名单 fatal 检查。
- 增加 policy-doc context 和 manual review 输出。

## 3. 剩余风险

- 正则不能证明绝对安全。
- policy 文档中仍可能夹带真实值。
- 人工复核仍必需。
- public repo 一旦推送，敏感信息可能已外泄。

## 4. 控制措施

- 仅白名单导出。
- 不复制 raw/runtime/DB/node_modules。
- fatal path patterns 优先。
- fatal secret patterns 优先。
- public/private commit mapping。
- public 不作为 source of truth。
