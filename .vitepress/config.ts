import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "706Portal",
  description: "706青年空间社区门户网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "论坛", link: "https://706.town/" },
    ],

    sidebar: [
      {
        text: "706社区",
        items: [
          { text: "关于社区", link: "/about/" },
          { text: "如何参与", link: "/about/onboarding" },
          { text: "社交媒体", link: "/media" },
        ],
      },
      {
        text: "城市节点",
        items: [
          { text: "城市节点介绍", link: "/city-nodes" },
          {
            text: "生活实验室",
            items: [
              {
                text: "上海1.1生活实验室",
                link: "/city-nodes/living/shanghai-1.1.md",
              },
            ],
          },
        ],
      },
      {
        text: "项目",
        items: [
          { text: "项目简介", link: "/projects/" },
          { text: "城市客厅", link: "/projects/city-living" },
          { text: "客厅对话", link: "/projects/talk" },
          { text: "生活实验室", link: "/projects/living-lab" },
        ],
      },
      {
        text: "工具包",
        items: [{ text: "工具包", link: "/toolkit" }],
      },
      {
        text: "治理机制",
        items: [
          { text: "治理机制", link: "/governance/mechanism" },
          { text: "治理小组", link: "/governance/groups" },
          { text: "节点大会", link: "/governance/meetings" },
        ],
      },
      {
        text: "财务",
        items: [
          { text: "公共基金", link: "/donate" },
          { text: "捐赠", link: "/donate" },
        ],
      },
      {
        text: "其他",
        items: [{ text: "常见问题", link: "/faq" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
