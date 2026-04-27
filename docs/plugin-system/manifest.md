---
title: 清单文件
icon: file-lines
---

# 清单文件

## 核心文件

每个插件包都应包含 `plugin.toml`，它是插件的权威元数据入口。

## 关键信息

清单至少需要描述：

- 插件 ID
- 名称与版本
- 入口类
- Plugin API 版本
- 最低宿主版本
- 支持平台
- 运行时产物路径
- UI 模式
- 权限声明

## 典型字段

```toml
[plugin]
schemaVersion = 1
id = "example.plugin"
name = "Example Plugin"
version = "1.0.0"
entryClass = "com.example.plugin.ExamplePlugin"
apiVersion = "1.0"
minImageStudioVersion = "0.1.0"
supportedPlatforms = ["android", "windows", "macos", "linux"]
customPage = false
enabledByDefault = true

[runtime]
desktopJar = "runtime/desktop/plugin.jar"
androidDexJar = "runtime/android/plugin-dex.jar"
fatJar = true
```

## 权限与市场字段

RFC 中还预留了：

- 必需权限与可选权限
- 分类、标签、主页、源码地址
- 下载地址与更新通道
- 安全签名与哈希信息

这说明插件系统从一开始就考虑到了：

- 用户可见的权限管理
- 插件市场展示
- 安全校验与发布者可信度

## 文档建议

如果以后正式发布插件 SDK，建议把本页继续扩展成字段级参考文档。
