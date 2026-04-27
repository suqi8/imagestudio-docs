---
home: true
icon: house
heroImage: /logo.svg
heroText: ImageStudio 文档
heroFullScreen: true
tagline: 面向用户、开发者与插件生态的统一文档门户
actions:
  - text: 开始阅读
    icon: lightbulb
    link: /guide/
    type: primary
  - text: 插件系统
    icon: puzzle-piece
    link: /plugin-system/
    type: default
features:
  - title: 跨平台
    icon: laptop-code
    details: 基于 Kotlin Multiplatform 与 Compose Multiplatform，覆盖 Android、Windows、macOS 与 Linux。
  - title: 现代界面
    icon: palette
    details: 使用 MIUIX KMP 构建统一风格界面，具备较好的桌面与移动端一致性。
  - title: 项目工作流
    icon: folder-tree
    details: 围绕 ROM 项目创建、管理、进入工作台、执行插件与任务展开。
  - title: 插件扩展
    icon: puzzle-piece
    details: 规划中的原生插件系统以 .isp 为载体，支持 Compose UI、权限与任务能力。
  - title: 开发友好
    icon: code
    details: 文档覆盖目录结构、构建方式、版本规则、发布流程与后续维护建议。
  - title: 独立部署
    icon: rocket
    details: 文档仓库与私有主仓库解耦，可单独部署到 GitHub Pages。
footer: ImageStudio Documentation
---

## 为什么要单独做这套文档

ImageStudio 主仓库目前是私有项目，不适合直接把完整源码与说明全部公开。
因此更合适的方式是将文档站拆成一个独立仓库：

- 面向用户提供安装与使用说明
- 面向开发者提供架构和构建信息
- 面向未来插件作者提供插件系统文档
- 与主仓库发布节奏解耦，便于独立维护

## 你可以在这里看到什么

- 项目定位、技术栈与平台支持
- 应用导航、功能模块与架构关系
- 用户安装、工作区管理、工作台与插件使用说明
- 开发环境、构建脚本、版本规则与 CI/CD 思路
- 原生插件系统的设计目标、包结构、清单格式与 API 边界

## 当前项目画像

ImageStudio 是一个以 **ROM 定制流程** 为核心的跨平台工具，当前仓库主要信息显示：

- 使用 `Kotlin Multiplatform` 共享业务逻辑
- 使用 `Compose Multiplatform` 构建统一 UI
- 使用 `Koin` 做依赖注入
- 使用导航组件管理页面切换
- 面向 `Android + JVM Desktop` 构建，再延伸到 Windows / macOS / Linux 分发

## 推荐阅读路径

- **首次了解项目**：先看 [项目总览](/guide/project-overview.html)
- **准备参与开发**：看 [开发指南](/guide/development.html)
- **关注插件能力**：看 [插件系统](/plugin-system/)
- **准备上线文档站**：看 [文档站部署](/guide/docs-site-deployment.html)
