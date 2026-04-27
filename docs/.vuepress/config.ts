import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const repository = process.env.DOCS_REPO ?? process.env.GITHUB_REPOSITORY ?? "";
const repoName = repository.includes("/") ? repository.split("/")[1] : repository;
const base = process.env.VUEPRESS_BASE ?? (repoName && !repoName.endsWith(".github.io") ? `/${repoName}/` : "/");

export default defineUserConfig({
  base,
  lang: "zh-CN",
  title: "ImageStudio 文档",
  description: "ImageStudio 项目文档、架构说明与插件系统文档",
  head: [
    ["meta", { name: "theme-color", content: "#6c63ff" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }]
  ],
  theme,
  bundler: viteBundler()
});
