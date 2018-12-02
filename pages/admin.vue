<template>
  <div class="textArea">
    <div class="display">
      <div></div>
    </div>
    <el-input v-model="title" placeholder="请输入标题"></el-input>
    <el-input v-model="tags" placeholder="请输入tag,以/分隔"></el-input>
    <el-input v-model="introduce" placeholder="请输入说明"></el-input>
    <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="content"></el-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      post: [
        {
          title: '',
          tags: '',
          introduce: '',
          content: ''
        }
      ],
      allposts: [{}]
    }
  },
  create() {
    axios
      .get('/admin/posts', {})
      .then(res => {
        console.log(res.data)
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  methods: {
    addPost() {
      axios.post('/admin/add', {
        title: this.post.title,
        tags: this.post.tags,
        introduce: this.post.introduce,
        content: this.post.content
      })
    }
  }
}
</script>