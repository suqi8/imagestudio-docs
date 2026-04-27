---
title: 包格式
icon: box-open
---

# 包格式

## 设计目标

插件包使用 `.isp` 作为后缀，本质上是一个压缩包，但它并不是普通资源包，而是包含：

- 元数据
- 平台运行产物
- 静态资源
- 许可证信息
- 插件说明文档

## 推荐结构

```text
example.plugin-1.0.0.isp
├─ plugin.toml
├─ runtime/
│  ├─ desktop/
│  │  └─ plugin.jar
│  └─ android/
│     └─ plugin-dex.jar
├─ assets/
│  ├─ icon.png
│  └─ screenshots/
├─ licenses/
│  └─ third-party.txt
└─ README.md
```

## 平台产物约定

### Desktop

桌面平台共用 `runtime/desktop/plugin.jar`。

### Android

Android 使用 `runtime/android/plugin-dex.jar`，由构建流程处理成可被宿主加载的形式。

## 为什么这种格式实用

- 元数据和运行产物边界清晰
- 便于宿主做校验与安装
- 便于未来市场化展示截图、说明与许可证
- 对多平台扩展友好
