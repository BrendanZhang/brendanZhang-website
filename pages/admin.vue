<template>
  <div class="textArea">
    <div class="display">
      <div class="posts"></div>
    </div>
    <el-input v-model="this.post[0].title" placeholder="请输入标题"></el-input>
    <el-input v-model="this.post[0].tags" placeholder="请输入tag,以/分隔"></el-input>
    <el-input v-model="this.post[0].introduce" placeholder="请输入说明"></el-input>
    <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="this.post[0].content"></el-input>
    <div class="action">
      <el-button v-on:click="addPost">发布</el-button>
      <el-button v-on:click="display">获取</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      post: [
        {
          title: '测试用标题',
          tags: '测试用tag',
          introduce: '测试用描述',
          content: '#测试用内容'
        }
      ],
      allposts: [{}]
    }
  },
  async asyncData() {},
  create() {},
  methods: {
    async display() {
      await this.$axios.get('/admin/api/all').then(res => {
        console.log(res)
      })
    },
    async addPost() {
      var post = {
        title: this.post[0].title,
        tags: this.post[0].tags,
        introduce: this.post[0].introduce,
        content: this.post[0].content
      }
      console.log(post)
      await this.$axios.post('/admin/api/add', { note: 'xxx' }).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>