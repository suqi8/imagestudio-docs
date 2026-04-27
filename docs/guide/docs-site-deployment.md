---
title: 文档站部署
icon: cloud-arrow-up
---

# 文档站部署

## 为什么选择 vuepress-theme-hope

结合官方文档与当前项目需求，这个主题非常适合 ImageStudio：

- 首页视觉完成度高
- 导航栏与侧边栏组织灵活
- 支持 Mermaid、Tabs、提示块等增强 Markdown
- 支持搜索、目录、深色模式与仓库链接
- 很适合“产品说明 + 开发文档 + 插件文档”混合站点

## 当前仓库结构

```text
imagestudio-docs/
├─ .github/workflows/deploy.yml
├─ docs/
│  ├─ .vuepress/
│  │  ├─ config.ts
│  │  ├─ theme.ts
│  │  ├─ navbar/
│  │  ├─ sidebar/
│  │  ├─ public/
│  │  └─ styles/
│  ├─ README.md
│  ├─ guide/
│  └─ plugin-system/
├─ package.json
└─ README.md
```

## 本地预览

```bash
pnpm install
pnpm docs:dev
```

## 构建

```bash
pnpm docs:build
```

## GitHub Pages 自动部署

本仓库已提供 `.github/workflows/deploy.yml`，默认使用：

- `pnpm`
- `Node.js 22`
- GitHub Pages 官方部署 Action

## base 路径策略

站点配置会自动读取：

- `DOCS_REPO`
- `GITHUB_REPOSITORY`
- `VUEPRESS_BASE`

如果你的仓库是：

- `username.github.io`，则 `base` 会使用 `/`
- 普通仓库，例如 `imagestudio-docs`，则会自动使用 `/imagestudio-docs/`

这样可以避免手动修改配置后再部署。

## 推荐托管方式

### 方案一：独立公开仓库

最推荐。

适合当前场景：主仓库私有，文档需要公开。

### 方案二：组织站点仓库

如果你有单独组织，也可以将文档挂到组织 Pages。

## 首次上线步骤

1. 在 GitHub 新建公开仓库
2. 将本目录初始化为独立 Git 仓库
3. 推送到 `main`
4. 在 GitHub Pages 中选择 `GitHub Actions`
5. 等待工作流完成

## 可继续增强的方向

- 接入自定义域名
- 接入站点分析
- 增加版本化文档
- 增加截图页面
- 增加更新日志页
- 增加 FAQ 与故障排查
