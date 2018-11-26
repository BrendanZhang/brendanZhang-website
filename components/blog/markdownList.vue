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
          font-size: 18px;
          h1,
          h2,
          h3,
          h4 {
            margin: 10px 0;
          }
          h1 {
            color: #ffb633;
            margin: 20px 0;
          }
          h2 {
            color: #ffb833d5;
          }
          h3 {
            color: #ffffff;
          }
          ul {
            margin: 10px 0 10px 10px;
          }
          li {
            color: #e7e7e7;
          }
          p {
            color: #dddddd;
          }
          pre {
            background: #1b1a1a;
            margin: 20px 10px;
            border-radius: 5px;
            padding: 5px;
          }
        }
      }
    }
  }
}
</style>
