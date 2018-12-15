<template>
  <div class="textArea">
    <div class="display">
      <div class="posts">
        <el-table
          :data="tableData.filter(data => !search || data.introduce.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%"
        >
          <el-table-column label="Date" prop="date"></el-table-column>
          <el-table-column label="Title" prop="title"></el-table-column>
          <el-table-column label="Introduce" prop="introduce"></el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="scope">
              <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
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
  data() {
    return {
      tempData: []
    }
  },
  store,
  async asyncData() {
    return {}
  },
  created() {
    this.display()
  },
  computed: {
    search: {
      get: function() {
        return this.$store.state.search
      },
      set: function(value) {
        this.$store.commit('search', value)
      }
    },
    tableData: {
      get: function() {
        return this.$store.state.tableData
      },
      set: function() {}
    },
    editPost() {
      return this.$store.state.editPost
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      this.delete(row.id)
      this.display()
    },
    formatter(row, column) {
      return row.introduce
    },
    async display() {
      await this.$store.dispatch('getAllPosts')
    },
    async addPost() {
      var post = {
        title: this.editPost.title,
        tags: this.editPost.tags,
        introduce: this.editPost.introduce,
        content: this.editPost.content
      }
      let flag = true
      for (const key in post) {
        if (
          (post[key] === 0 || post[key]) &&
          post[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== ''
        ) {
        } else {
          flag = false
          break
        }
      }
      if (flag) {
        await this.$axios.post('/admin/api/add', { post }).then(res => {
          this.display()
        })
      }
    },
    async delete(id) {
      await this.$axios.post('/admin/api/delete', { id: id }).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="scss">
.display {
  .posts {
    section {
      ol {
        display: flex;
      }
    }
  }
}
</style>
