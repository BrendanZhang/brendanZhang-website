<template>
  <div>
    <div class="textArea">
      <div class="display">
        <div class="posts"></div>
      </div>
      <el-input v-model="editPost.title" placeholder="请输入标题"></el-input>
      <el-input v-model="editPost.tags" placeholder="请输入tag,以/分隔"></el-input>
      <el-input v-model="editPost.introduce" placeholder="请输入说明"></el-input>
      <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="editPost.content"></el-input>
    </div>
  </div>
</template>

<script>
import store from '~/store/admin.js'
export default {
  store,
  computed: {
    editPost() {
      return this.$store.state.editPost
    }
  }
}
</script>
