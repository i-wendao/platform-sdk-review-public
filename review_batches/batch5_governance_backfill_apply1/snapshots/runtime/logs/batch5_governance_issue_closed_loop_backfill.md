# Batch 5 Governance Issue Closed Loop Backfill

本文件补写 Batch 5 后半段治理问题闭环。相关 Closure 与 RAG 也在本批写入：

- RAG snapshot：`runtime/rag_snapshots/batch5_governance_backfill.md`
- Closure：`runtime/closures/2026-07-01_batch5_governance_backfill_closure.md`

## ISSUE-B5-004 public grep false positive for policy docs

- symptom: public mirror sanitization grep 将 `secret`、`token`、`.env`、private-key marker 等策略说明文本误判为 fatal。
- root_cause: 脱敏规则没有区分 policy context、说明性敏感词、高置信真实凭据值和真实 private key block。
- impact: GH-PUBLIC2 正确停止，但 public mirror 首批导出无法继续。
- fix: 创建并复核 `review_queue/batch5_GH_PUBLIC2R/`，将检查拆为路径 fatal、高置信凭据值 fatal、private key block fatal、说明性词汇人工复核。
- verification: public mirror 后续导出成功，首批 public commit `18958d3`，后续 review package 也成功通过 public mirror 复核。
- status: closed_after_backfill
- linked_batches: GH-PUBLIC2, GH-PUBLIC2R, GH-PUBLIC2C

## ISSUE-B5-005 GitHub private visibility mismatch

- symptom: ChatGPT 复核需要可访问链接，但 private 主仓库不能直接公开全部内容。
- root_cause: private source-of-truth 与 public review accessibility 是两个不同治理需求。
- impact: 需要建立双仓库策略，避免泄露 private history、runtime evidence、secret/token、DB/raw/staging/DWD/mart 或真实业务数据。
- fix: 建立 `/opt/project/sdk_public_review` 独立 public sanitized review mirror，只接收 private -> public 白名单导出。
- verification: public mirror URL 可用于 ChatGPT review；private repo 仍保留 source of truth。
- status: closed_after_backfill
- linked_batches: GH-PUBLIC1, GH-PUBLIC2R, GH-PUBLIC2C, governance checkpoint

## ISSUE-B5-006 git push did not use dedicated SSH key

- symptom: `ssh -T -i ~/.ssh/id_ed25519_github_i_wendao git@github.com` 认证成功，但普通 `git push origin review/batch5-sdk-adapter` 失败：`Permission denied (publickey)`。
- root_cause: `git push` 默认未使用专用 GitHub key。
- impact: private 分支推送阻塞，且存在误改全局 SSH/git 配置的风险。
- fix: 后续 push 使用一次性 `GIT_SSH_COMMAND='ssh -i ~/.ssh/id_ed25519_github_i_wendao -o IdentitiesOnly=yes'`，不修改全局 SSH 配置。
- verification: private review branch 后续多次推送成功。
- status: closed_after_backfill
- linked_batches: GH-PRIVATE-PUSH1, GH-PRIVATE-PUSH1R, GH-PRIVATE-PUSH2

## ISSUE-B5-007 corrected patch missing a/b git header

- symptom: `git apply --check` 通过，但实际 apply 将文件创建到顶层 `shopee_ts/`，而不是 `adapters/shopee_ts/`。
- root_cause: R2 corrected patch 使用非标准 `diff --git adapters/... adapters/...` 与 `+++ adapters/...` header；`git apply` 默认 `-p1` 剥离首段路径。
- impact: 产生未授权顶层路径，虽然已清理且未提交，但说明 `git apply --check` 不足以验证最终落点。
- fix: 创建 `review_queue/batch5_13R3_standard_patch/standard_patch.diff`，使用标准 `a/...` / `b/...` header，并通过临时目录真实 apply 验证落点。
- verification: 正式 skeleton 文件以 commit `ea86412` 落到 `adapters/shopee_ts/src/`；`review_queue/batch5_14_skeleton_static_review/` 已通过静态复核。
- status: closed_after_backfill
- linked_batches: 5.13R2-APPLY1, 5.13R3-REVIEW1, 5.13R3-COMMIT-AND-APPLY1, 5.13R3-SKELETON-COMMIT1, 5.14-SKELETON-STATIC-REVIEW1
