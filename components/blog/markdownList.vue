<template>
  <div class="markdownContainer">
    <div v-html="markdownContent" class="markdownInner"></div>
  </div>
</template>
<script>
import hljs from 'markdown-it-highlightjs/index.js'
export default {
  created() {
    console.log(this.markdownContent)
  },
  computed: {
    markdownContent() {
      return require('~/source/posts/JavaScript-函数.md')
    }
  }
}
</script>
<style lang="scss">
.router {
  justify-content: center;
  align-items: center;
  padding: 0 0 0 80px;
  main.inner-container {
    display: block;
    height: 100vh;
    overflow-x: auto;
    max-width: 100%;
    min-width: 900px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .markdownContainer {
      max-width: 1200px;
      min-width: 900px;
      display: flex;
      margin: auto;
      .markdownInner {
        width: 100%;
        section {
          display: block;
          width: 100%;
          height: 100%;
          background: #222020;
          border: none;
          font-size: 18px;
          * {
            margin: 10px 0;
          }
          code {
            background: #1b1a1a;
            margin: 0 5px;
            color: #9ac4e7;
          }
          h1 {
            color: #ffb633;
            margin: 20px 0;
          }
          h2 {
            color: #ffb833d5;
            margin: 20px 0;
          }
          h3 {
            color: #ffffff;
            font-size: 22px;
            margin: 20px 0;
          }
          ul {
            margin: 20px 0 20px 20px;
          }
          li {
            color: #e7e7e7;
          }
          p {
            color: #dddddd;
            line-height: 24px;
          }
          strong {
            margin: 0 3px;
          }
          table {
            width: 100%;
            margin: 20px 0;
            color: #dddddd;
            border-left: 2px solid #ffb633;
            background: #242222;
            padding: 5px 5px 5px 10px;
            td {
              padding: 10px 14px;
              border-bottom: 1px solid #424242;
            }

            thead {
              color: #ffb833d5;

              tr {
                th {
                  border-bottom: 1px solid #9ac4e7;
                  color: inherit;
                  padding: 10px 14px;
                }
              }
            }
          }
          pre {
            background: #1b1a1a;
            margin: 20px 10px;
            border-radius: 5px;
            padding: 8px;
            overflow: scroll;
            code {
              background: #1b1a1a;
              margin: 0 5px;
              color: #dddddd;
            }
          }
        }
      }
    }
  }
}
</style>
