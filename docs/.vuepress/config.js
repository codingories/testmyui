module.exports = {
  title: 'Hello VuePress',
  // 这句话不加会导致github样式找不到
  base:'/testmyui/',
  description: 'Just playing around',
  themeConfig: {
    logo: '1.png',
    themeConfig: {
      // 最后更新时间
      lastUpdated: '最后更新时间',
      // 所有页面自动生成侧边栏
      sidebar: 'auto',
      // 仓库地址
      repo: 'https://github.com/wangtunan/vuepress-blog-demo',
      // 仓库链接label
      repoLabel: 'Github',
      // 编辑链接
      editLinks: true,
      // 编辑链接label
      editLinkText: '编辑此页',
      // 导航
      nav: [
        { text: '前端面试之道',link: '/interview/'},
        { text: 'JavaScript书籍', items: [
            { text: '你不知道的JavaScript(上)', link: '/books/你不知道的javascript上'},
            { text: '你不知道的JavaScript(中)', link: '/books/你不知道的javascript中'},
            { text: '你不知道的JavaScript(下)', link: '/books/你不知道的javascript下'}
          ]
        },
        { text: '数据结构和算法', link: '/algorithm/'},
        { text: 'Vue.js', link: '/vue/'},
        { text: 'Webpack',link: '/webpack/'},
        { text: 'VuePress',link: '/vuepress/'},
        { text: '基础配置功能',link: '/common/'}
      ]},
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
        ]
      },
    ]

  },
  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        '@vuepress': '../images/vuepress',
        '@vue': '/Users/ories/Downloads/vue造轮子/testMyUi/testmyui/src',
      }
    }
  }
}
