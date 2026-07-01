# GH-PUBLIC2 Execution Plan Draft

## 1. 目标

在用户确认 public 仓库已创建且 ChatGPT 复核 PASS 后，配置 public remote 并推送首个脱敏审核内容。

## 2. 候选 remote

```text
git@github.com:i-wendao/platform-sdk-review-public.git
```

## 3. 候选命令

以下仅为草案，GH-PUBLIC1 不执行：

```bash
cd /opt/project/sdk
git status --short
git remote -v
git remote add public-review git@github.com:i-wendao/platform-sdk-review-public.git
```

实际导出应使用独立导出目录或 orphan 分支策略，须另批详细规划。

## 4. GH-PUBLIC2 必须禁止

- 不 mirror push private 仓库。
- 不推送 `.env`、token、secret、raw evidence、DB dump。
- 不从 public 仓库 pull/merge 到 private。
- 不把 public 仓库设为 source of truth。

## 5. GH-PUBLIC2 前置条件

- public 仓库已由用户创建。
- 公开范围和脱敏策略已确认。
- 导出白名单已确认。
- ChatGPT 复核 GH-PUBLIC1 PASS。
