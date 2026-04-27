---
title: 安装与运行
icon: download
---

# 安装与运行

## 系统要求

### Android

- Android 8.0 及以上
- 某些核心能力需要更高权限环境

### Windows

- Windows 10 / 11 64 位

### macOS

- macOS 11 及以上

### Linux

- 常见 64 位发行版

## 获取方式

当前 README 中的分发说明显示，安装包按平台分别提供：

- Android：APK
- Windows：MSI
- macOS：DMG
- Linux：DEB

如果你准备把这套文档对外公开，建议在这里补充：

- 最新版本下载地址
- 更新日志入口
- SHA256 校验值
- 已知平台限制

## 本地开发运行

### Android

```bash
./gradlew assembleDebug
```

### 桌面端

```bash
./gradlew runDistributable
```

## 打包

```bash
./gradlew packageDistributionForCurrentOS
./gradlew packageReleaseApk
```

## 建议补充项

为了让用户文档更完整，后续可以追加：

- 首次启动说明
- 权限说明
- 项目目录默认位置
- 失败场景与恢复办法
