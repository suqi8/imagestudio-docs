---
title: 技术栈
icon: layers
---

# 技术栈

## 核心框架

### Kotlin Multiplatform

项目使用 `Kotlin Multiplatform` 共享核心业务代码，减少 Android 与桌面端之间的重复实现。

### Compose Multiplatform

界面层使用 `Compose Multiplatform`，统一声明式 UI 写法，并让多平台保持更一致的交互风格。

### 依赖注入

项目中通过 `Koin` 管理页面模型与服务对象，当前可见的依赖注入注册集中在 `di/KoinModule.kt`。

### 导航

应用入口使用导航宿主管理页面切换，并通过路由对象承载参数，例如项目名等上下文。

## UI 相关

### MIUIX KMP

项目使用 `MIUIX KMP` 作为设计语言基础，形成区别于默认 Material 风格的视觉表达。

### Compose 生态能力

现有依赖包含：

- `material3`
- `material-icons-extended`
- `components-resources`
- `lifecycle-runtime-compose`
- `lifecycle-viewmodel-compose`

## 数据与工具依赖

代码中可以看到项目还引入了以下能力：

- `kotlinx-serialization-json`
- `okhttp`
- `protobuf-kotlin-lite`
- `ktoml`
- `multiplatform-markdown-renderer`

这说明项目除了 UI，还在逐步覆盖：

- 数据序列化
- 网络访问
- TOML 配置解析
- Markdown 渲染
- 部分二进制数据处理

## 构建与版本

### Gradle

项目使用 `Gradle Kotlin DSL` 管理构建。

### 版本号策略

应用版本采用以下思路：

- 主版本号 `majorVersion`
- 次版本号 `minorVersion`
- Git 提交数 `commitCount`
- Git 短哈希 `shortHash`

最终形成两类版本：

- **显示版本**：`major.minor.commitCount.shortHash`
- **数字版本**：`major.minor.commitCount`

这种做法兼顾了可追踪性与桌面安装包对纯数字版本号的要求。
