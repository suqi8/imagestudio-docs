---
title: 开发指南
icon: code
---

# 开发指南

## 环境要求

建议至少准备：

- JDK 17+
- Android Studio 新版本
- 可用的 Android SDK
- Git
- Node.js 22+ 与 pnpm（仅文档站需要）

根据当前 Gradle 配置，项目已使用较新的 Kotlin / Compose / AGP 版本组合，因此本地环境尽量不要太旧。

## 主项目开发

### 拉取源码

```bash
git clone <主项目仓库地址>
```

### 常用命令

```bash
./gradlew assembleDebug
./gradlew runDistributable
./gradlew packageDistributionForCurrentOS
./gradlew packageReleaseApk
```

## 代码结构建议理解方式

### `App.kt`

负责应用级主题、导航和全局 UI 容器。

### `feature/*`

按页面组织功能，适合新增页面或扩展现有能力。

### `core/*`

放与页面解耦的公共能力，不建议把纯页面逻辑堆进 `core`。

### `plugin/*`

如果后续插件系统持续推进，这部分会逐步成为独立的子边界。

## 开发时应关注的约束

- 多平台代码优先放在 `commonMain`
- 平台差异再下沉到 `androidMain` / `jvmMain`
- 路由参数要保持稳定，尤其是 `projectName` 这类上下文参数
- 构建版本依赖 Git 历史，CI 中需要完整抓取提交记录

## 文档站开发

本目录下的文档站是独立子仓库，常用命令：

```bash
pnpm install
pnpm docs:dev
pnpm docs:build
```

## 建议的后续补充

你后续可以继续把这部分扩写成：

- 新功能开发流程
- 页面开发模板
- 状态管理约定
- 提交规范
- 版本发布流程
