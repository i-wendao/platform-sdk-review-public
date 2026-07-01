# Batch 5.13R3 standard patch header 审核包

## 1. 本批目标

修复 Batch 5.13R2 patch header 缺少 `a/`、`b/` 前缀的问题，并在临时目录执行真实 `git apply` 验证最终落点。

## 2. 本批边界

- 不在正式工作区 apply patch。
- 不创建正式 adapter skeleton 文件。
- 不创建顶层 `shopee_ts/`。
- 不修改 adapter/package/lockfile。
- 不调用 Shopee/TikTok API。
- 不写数据库。
- 不读取 `.env`。
- 不提交、不 push。

## 3. 输出文件

- `standard_patch.diff`
- `header_check.txt`
- `temp_apply_check.txt`
- `temp_apply_file_list.txt`
- `temp_apply_status.txt`
- `final_workspace_check.txt`

## 4. 下一步

本审核包需先交给 ChatGPT 复核。复核通过且用户确认后，才能规划正式 apply。
