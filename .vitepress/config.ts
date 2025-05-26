import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "706Portal",
  description: "706青年空间社区门户网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "论坛", link: "https://706.town/" },
    ],

    sidebar: [
      {
        text: "706社区",
        items: [
          { text: "愿景", link: "/vision" },
          { text: "如何参与社区和发起项目", link: "/onboarding" },
          { text: "社交媒体和联系方式", link: "/media" },
          { text: "城市节点", link: "/city-nodes" },
          { text: "项目", link: "/projects" },
          { text: "捐赠", link: "/donate" },
          { text: "治理机制", link: "/governance" },
          { text: "工具包", link: "/toolkit" },
          { text: "常见问题", link: "/faq" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
