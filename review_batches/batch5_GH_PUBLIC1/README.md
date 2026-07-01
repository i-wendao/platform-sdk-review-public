# Batch 5.GH-PUBLIC1 公开审核仓库方案审核包

## 1. 本批目标

设计 `platform-sdk-review-public` 公开审核仓库方案，用于降低 ChatGPT 复核时反复上传 zip 的成本。

## 2. 核心定位

- private 主仓库 `platform-sdk-ingestion` 是 source of truth。
- public 审核仓库仅作为 ChatGPT 可访问的 review mirror。
- public 审核仓库不替代 private 主仓库。
- public 审核仓库不替代 Closure / RAG / Issue / Decision。
- 同步方向只能是 private → public 的白名单脱敏导出。

## 3. 本批边界

- 不创建 GitHub public 仓库。
- 不配置第二 remote。
- 不 push。
- 不访问 GitHub 网络。
- 不复制 private 文件到 public 目录。
- 不生成导出包。
- 不修改 adapter/package/lockfile。

## 4. 复核方式

用户可将 `review_queue/batch5_GH_PUBLIC1/` 交给 ChatGPT 复核。复核通过且用户确认后，才可规划 GH-PUBLIC2。
