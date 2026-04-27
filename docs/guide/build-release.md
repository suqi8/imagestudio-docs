---
title: 构建与发布
icon: boxes-stacked
---

# 构建与发布

## 版本规则

当前项目采用基于 Git 的自动版本策略：

- `majorVersion`
- `minorVersion`
- `commitCount`
- `shortHash`

最终组合出：

- 完整版本号：用于显示与 Android
- 数字版本号：用于桌面安装包命名与分发

## 平台构建目标

### Android

```bash
./gradlew assembleRelease
```

### Windows

```bash
./gradlew packageReleaseMsi
```

### macOS

```bash
./gradlew packageReleaseDmg
```

### Linux

```bash
./gradlew packageReleaseDeb
```

## CI / CD 现状

仓库中已有一份 CI/CD 说明文档，但当前源码目录下还没有实际提交的 `.github/workflows` 文件。

这意味着：

- 构建流程设计已经形成
- 但工作流文件可能尚未同步到当前仓库
- 后续需要把说明真正落地为可执行工作流

## 建议的发布体系

### 应用发布仓库

建议继续维持应用产物与源码仓库解耦，例如：

- 私有源码仓库：存放主工程
- 公共 Builds 仓库：存放 Release 安装包
- 公共 Docs 仓库：存放产品文档站

### 好处

- 源码私有不影响产品公开文档
- 安装包发布与文档站维护互不干扰
- 用户访问路径更清晰

## 发布前检查清单

- 版本号是否正确
- Git 历史是否完整
- Android 签名材料是否可用
- 桌面端安装包命名是否统一
- Release 文案与更新日志是否准备好
