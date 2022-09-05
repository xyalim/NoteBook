const nav = require('./nav')

module.exports = {
  title: '笔记',
  description: '个人随笔',
  themeConfig: {
    // 右上角的导航
    nav,
    // 侧边栏
    // sidebar
    // sidebar: [
    //   {
    //       title: '介绍',
    //       path: '/',
    //       collapsable: false, // 不折叠
    //   },
    //   {
    //     title: "基础学习",
    //     path: '/handbook/ConditionalTypes',
    //     collapsable: false, // 不折叠
    //     children: [
    //       { title: "条件类型", path: "/handbook/ConditionalTypes" },
    //       { title: "泛型", path: "/handbook/Generics" }
    //     ],
    //   }
    // ]
  },
  plugins: [
    ["vuepress-plugin-auto-sidebar", {
      sort: {
        mode: "asc",
        readmeFirst: false,
        readmeFirstForce: false
      },
      sidebarDepth: 1,
      collapse: {
        open: false,
        collapseList: [],
        uncollapseList: []
      },
      ignore: [],
      removeEmptyGroup: false,
      git: {
        trackStatus: 'all'
      }
    }]
  ]
}