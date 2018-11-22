import Vuex from 'vuex'
import Vue from 'vue'
require('whatwg-fetch')

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      selectTab: {
        about: false,
        project: false,
        blog: false,
        ability: false,
        index: false
      },
      aboutMe: {
        personalInfo: {},
        connection: [],
        portfolio: [
          {
            id: 'canvas',
            name: 'Canvas 画板',
            previewUrl: 'https://brendanzhang.github.io/canvas/index.html',
            codeLink: 'https://github.com/brendanzhang/canvas',
            projectImg: 'canvas.jpg',
            QRCode: 'canvas.png',
            projectIcons: [
              'jquery',
              'html',
              'language-css',
              'socialjavascript'
            ],
            projectDis:
              'Canvas画板，通过使用 Canvas API 实现画板的:画笔、橡皮擦、更改颜色、清屏、保存等功能。'
          },
          {
            id: 'keyboardNav',
            name: 'KeyBoard 导航页',
            previewUrl:
              'https://brendanzhang.github.io/myBookmarks/nav-demo/index.html',
            codeLink: 'https://github.com/brendanzhang/myBookmarks',
            projectImg: 'nav-page.jpg',
            projectIcons: [
              'jquery',
              'html',
              'language-css',
              'socialjavascript'
            ],
            projectDis:
              '使用键盘的网页导航，使用原生 JS 监听键盘事件。通过favicon获取网站图标，通过　favicon.byi.pw?url=domain　排除无法获取的网站图标'
          },
          {
            id: 'slide',
            name: 'Jquery 无缝轮播组件',
            previewUrl:
              'https://brendanzhang.github.io/Jquery-slide/index.html',
            codeLink: 'https://github.com/brendanzhang/Jquery-slide',
            projectImg: 'slide.jpg',
            projectIcons: [
              'html',
              'jquery',
              'language-css',
              'socialjavascript'
            ],
            projectDis:
              '使用 jQuery 制作。通过 settimeout 实现自动轮播，改变 class　状态机的方式来改变监听事件。'
          },
          {
            id: 'cssBatman',
            name: 'CSS 蝙蝠侠',
            previewUrl: 'https://BrendanZhang.github.io/cssBatman/index.html',
            codeLink: 'https://github.com/brendanzhang/cssBatman',
            projectImg: 'cssBatman.png',
            QRCode: 'cssBatman.png',
            projectIcons: [
              'html',
              'jquery',
              'language-css',
              'socialjavascript'
            ],
            projectDis:
              '使用 CSS3 绘制蝙蝠侠，通过 settimeout 实现：代码逐行显示，CSS逐步绘制蝙蝠侠，代码逐个显示速度可调整'
          },
          {
            id: 'jqueryMusic',
            name: 'Jquery 我的云音乐',
            previewUrl: 'http://163music.zealot.fun/',
            codeLink: 'https://github.com/brendanzhang/koa-163Music-demo',
            QRCode: 'music.png',
            projectImg: 'music.png',
            projectIcons: [
              'html',
              'jquery',
              'http',
              'language-css',
              'socialjavascript'
            ],
            projectDis:
              '使用七牛保存歌曲文件，LeanCloud 保存歌曲、歌单信息，通过 leanCloud 中间表指针关联歌单与歌曲。Jquery实现：上传歌曲、歌词，搜索歌曲加入歌单、新建、保存、编辑歌单（后台）;播放歌曲、播放时显示歌词、展示歌单、搜索歌曲、播放（客户端）'
          },
          {
            id: 'vueResumer',
            name: 'Vue 在线简历编辑器',
            previewUrl:
              'https://brendanzhang.github.io/vue-resumer-demo/dist/index.html',
            codeLink: 'https://github.com/brendanzhang/vue-resumer-demo',
            projectImg: 'vueResume.png',
            projectIcons: [
              'vuejs',
              'html',
              'jquery',
              'http',
              'language-css',
              'socialjavascript'
            ],
            projectDis:
              '通过 Vue 实现数据绑定，LeanCloud 实现用户注册登录信息的认证， SCSS 完成前端页面。实现在线简历编辑、保存、登陆调取用户数据等功能。'
          },
          {
            id: 'stickyNote',
            name: 'Express 在线便利贴',
            previewUrl: 'http://sticky-note.zealot.fun/',
            codeLink: 'https://github.com/brendanzhang/express-sticky-note',
            QRCode: 'sticky-note.png',
            projectImg: 'sticky-note.png',
            projectIcons: [
              'html',
              'jquery',
              'node-js',
              'http',
              'language-css',
              'socialjavascript'
            ],
            projectDis:
              '基于 express 框架处理路由 中间件, ejs 模板搭建页面， less 预处理器处理页面样式，基于 auth 认证的 github 登录。以用户登录秘钥判断是否登录以限制权限。'
          }
        ],
        skills: {
          skillsLeft: [
            {
              icon: 'socialjavascript',
              content:
                '在不使用框架的前提下能够使用原生 JS 常用 API 完成部分需求。熟悉 jQuery 常用API，能使用jQuery制作网站、轮播、tab组件等',
              progress: 80
            }
          ],
          skillsRight: [
            {
              icon: 'html',
              content:
                '熟练编写语义化 HTML 能使用 HTML5 CSS3 独立制作精美网页，掌握CSS3动画、过渡效果、响应式等常用技术',
              progress: 80
            },
            {
              icon: 'node-js',
              content:
                '了解 Node.js 的一些知识，能够使用 Node.js 搭建小型服务器，根据请求的 URL 返回指定数据。能够使用express进行ssr项目的搭建。',
              progress: 30
            },
            {
              icon: 'language-css',
              content:
                '移动端页面 会使用 rem、vw/vh 等技术制作适配手机设备的页面，能够在项目中使用 Scss 预处理工具',
              progress: 80
            },
            {
              icon: 'vuejs',
              content:
                '熟悉Vue常用功能如：组件、Vue-Router、vuex、双向绑定、数据响应原理等',
              progress: 60
            },
            {
              icon: 'http',
              content:
                '了解 HTTP 基础知识，了解常见状态码的含义，能够根据请求查看响应。',
              progress: 60
            }
          ]
        },
        jobExperience: []
      }
    },
    mutations: {
      SET_USER: function(state, user) {
        state.authUser = user
      }
    },
    actions: {}
  })

export default store
