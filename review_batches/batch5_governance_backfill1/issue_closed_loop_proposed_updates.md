# Issue Closed Loop Proposed Updates

Proposed runtime issue updates for Batch 5 governance backfill.

## ISSUE-B5-004 public grep false positive for policy docs

- symptom: public mirror sanitization grep treated explanatory policy text such as `secret`, `token`, `.env`, and private-key marker examples as fatal.
- root_cause: rule did not distinguish policy context from high-confidence credential values or actual private key blocks.
- impact: GH-PUBLIC2 stopped correctly, but public export could not proceed until rule repair.
- fix: created `review_queue/batch5_GH_PUBLIC2R/` with revised path fatal, credential-value fatal, private-key block logic, and manual-review patterns.
- verification: public mirror initial export later passed and produced public commit `18958d3`.
- status: proposed_closed_after_backfill
- linked_batches: GH-PUBLIC2, GH-PUBLIC2R, GH-PUBLIC2C

## ISSUE-B5-005 GitHub private visibility mismatch

- symptom: public ChatGPT review needed lower-friction links, but private repo could not safely expose all project content.
- root_cause: private project source-of-truth and public review accessibility requirements were different governance concerns.
- impact: required dual-repo strategy and strict one-way sanitized export.
- fix: created GH-PUBLIC1 plan and independent `/opt/project/sdk_public_review` mirror.
- verification: public mirror available at `https://github.com/i-wendao/platform-sdk-review-public/tree/review/batch5-sdk-adapter` and used for ChatGPT review.
- status: proposed_closed_after_backfill
- linked_batches: GH-PUBLIC1, GH-PUBLIC2R, GH-PUBLIC2C, governance checkpoint

## ISSUE-B5-006 git push did not use dedicated SSH key

- symptom: direct `git push origin review/batch5-sdk-adapter` failed with `Permission denied (publickey)` even though explicit `ssh -T -i ...` succeeded.
- root_cause: git push did not automatically use the dedicated GitHub key.
- impact: private branch push initially failed; risk of ad hoc SSH/global config changes.
- fix: use one-time `GIT_SSH_COMMAND='ssh -i ~/.ssh/id_ed25519_github_i_wendao -o IdentitiesOnly=yes'` for approved pushes.
- verification: later private pushes succeeded without modifying global SSH config or remotes.
- status: proposed_closed_after_backfill
- linked_batches: GH-PRIVATE-PUSH1, GH-PRIVATE-PUSH1R, GH-PRIVATE-PUSH2

## ISSUE-B5-007 corrected patch missing a/b git header

- symptom: `git apply --check` passed, but actual apply created top-level `shopee_ts/` instead of `adapters/shopee_ts/`.
- root_cause: corrected patch used non-standard `diff --git adapters/... adapters/...` and `+++ adapters/...`; default `git apply -p1` stripped the first path segment.
- impact: unauthorized top-level path was briefly created and then cleaned; formal skeleton files were not created until R3 standard patch.
- fix: generated `review_queue/batch5_13R3_standard_patch/standard_patch.diff` with `a/` and `b/` headers, then validated in a temporary directory.
- verification: R3 temporary apply landed files under `adapters/shopee_ts/src/`; formal apply and skeleton commit `ea86412` succeeded.
- status: proposed_closed_after_backfill
- linked_batches: 5.13R2-APPLY1, 5.13R3-REVIEW1, 5.13R3-COMMIT-AND-APPLY1, 5.13R3-SKELETON-COMMIT1

## Count

Proposed issue entries: 4
