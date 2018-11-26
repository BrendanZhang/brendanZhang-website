<template>
  <div class="markdownContainer">
    <div v-html="markdownContent" class="markdownInner"></div>
  </div>
</template>
<script>
import markdownContent from '~/source/posts/AJAX.md'

export default {
  computed: {
    markdownContent() {
      return markdownContent
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
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .markdownContainer {
      width: 900px;
      .markdownInner {
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
            margin: 20px 0;
            color: #dddddd;
            border-left: 2px solid #ffb633;
            background: #242222;
            padding: 5px;
            td {
              padding: 5px 10px;
              border-bottom: 1px solid #424242;
            }
            thead {
              color: #ffb833d5;

              tr {
                th {
                  border-bottom: 1px solid #9ac4e7;
                  color: inherit;
                  padding: 10px 0;
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
