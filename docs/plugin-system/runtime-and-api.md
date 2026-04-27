---
title: 运行时与 API
icon: microchip
---

# 运行时与 API

## 插件入口

插件入口类应实现 `ImageStudioPlugin`，生命周期大致包括：

- `onLoad`
- `onEnable`
- `onDisable`
- `onUnload`
- `onSessionStart`
- `onSessionStop`
- `Content`

其中 `Content` 是插件 Compose UI 的主入口。

## 两种 UI 模式

### Dialog 模式

当 `customPage = false` 时，插件内容由宿主承载在对话框或容器内，更适合工具型扩展。

### Page 模式

当 `customPage = true` 时，插件拥有更完整的页面组织权，更适合复杂工作流。

## PluginContext 提供的能力

根据 RFC，宿主会向插件暴露以下能力边界：

- 插件 ID、宿主版本、平台信息
- 数据与缓存目录
- 权限查询与申请
- 日志
- 设置持久化
- 项目访问
- Shell 执行
- 任务管理
- 插件资源读取

## 为什么这套 API 边界合理

- 插件拿到的是能力而不是宿主内部实现
- 权限可以逐步细化并由用户控制
- 长任务可通过任务服务托管，不阻塞生命周期回调
- 不同平台可以通过同一接口获得统一体验

## 后续建议

如果你准备真的开放插件开发，我建议接下来补三件事：

1. 插件 SDK 示例工程
2. 字段与接口的稳定版本策略
3. 插件调试与打包文档
