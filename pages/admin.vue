<template>
  <div class="textArea">
    <div class="display">
      <div class="posts"></div>
    </div>
    <el-input v-model="editPost.title" placeholder="请输入标题"></el-input>
    <el-input v-model="editPost.tags" placeholder="请输入tag,以/分隔"></el-input>
    <el-input v-model="editPost.introduce" placeholder="请输入说明"></el-input>
    <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="editPost.content"></el-input>
    <div class="action">
      <el-button v-on:click="addPost">发布</el-button>
      <el-button v-on:click="display">获取</el-button>
    </div>
  </div>
</template>
<script>
import store from '~/store/admin.js'
export default {
  store,
  async asyncData() {},
  create() {},
  computed: {
    editPost() {
      return this.$store.state.editPost
    }
  },
  methods: {
    async display() {
      await this.$axios.get('/admin/api/all').then(res => {
        console.log(res.data)
      })
    },
    async addPost() {
      var post = {
        title: this.editPost.title,
        tags: this.editPost.tags,
        introduce: this.editPost.introduce,
        content: this.editPost.content
      }
      console.log(this.editPost)
      await this.$axios.post('/admin/api/add', { post }).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>