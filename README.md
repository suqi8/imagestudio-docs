# ImageStudio Docs

这是 `ImageStudio` 的独立文档站仓库骨架，使用 `VuePress 2 + vuepress-theme-hope` 构建。

## 仓库定位

- 面向用户提供安装、使用、功能说明
- 面向开发者提供架构、构建、发布说明
- 面向未来插件生态提供插件系统文档
- 与主项目源码仓库解耦，适合单独托管到 GitHub

## 本地启动

```bash
pnpm install
pnpm docs:dev
```

## 构建静态站点

```bash
pnpm docs:build
```

构建产物输出目录：`docs/.vuepress/dist`

## GitHub Pages 部署

仓库内已提供 `.github/workflows/deploy.yml`。

推荐步骤：

1. 在 GitHub 创建一个新的公开仓库，例如 `imagestudio-docs`
2. 进入该仓库的 `Settings -> Pages`
3. 将 `Source` 设置为 `GitHub Actions`
4. 推送本目录内容到新仓库的 `main` 分支
5. 等待 Actions 自动构建与发布

## 初始化为独立 Git 仓库

```bash
git init
git branch -M main
git remote add origin <你的文档仓库地址>
git add .
git commit -m "docs: initialize ImageStudio docs site"
git push -u origin main
```

## 可选环境变量

- `DOCS_REPO`: 指定仓库名，便于本地预览 GitHub Pages 子路径
- `VUEPRESS_BASE`: 强制指定站点基础路径
- `DOCS_HOSTNAME`: 自定义站点域名，用于 SEO / sitemap 等场景

## 说明

当前文档内容基于主项目现有代码结构、README、构建脚本与插件 RFC 整理而成。
主项目源码仓库为私有仓库，因此本仓库更适合作为公开文档门户。
