import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar/zh.js";
import sidebar from "./sidebar/zh.js";

const repository = process.env.DOCS_REPO ?? process.env.GITHUB_REPOSITORY ?? "";
const hostname = process.env.DOCS_HOSTNAME ?? "";

export default hopeTheme({
  hostname,
  author: {
    name: "suqi8"
  },
  logo: "/logo.svg",
  repo: repository || undefined,
  repoDisplay: Boolean(repository),
  docsDir: "docs",
  editLink: Boolean(repository),
  lastUpdated: true,
  contributors: false,
  navbar,
  sidebar,
  breadcrumb: true,
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Search", "Repo", "Outlook"]
  },
  toc: true,
  footer: "ImageStudio Documentation",
  displayFooter: true,
  plugins: {
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      gfm: true,
      include: true,
      mark: true,
      mermaid: true,
      spoiler: true,
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true
    }
  }
});
