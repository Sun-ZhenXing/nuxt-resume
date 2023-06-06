import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "文档演示",
      description: "vuepress-theme-hope 的文档演示",
    }
  },
  theme,
});
