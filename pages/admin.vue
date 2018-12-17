<template>
  <div class="textArea">
    <header class="topbar">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gerenlogoBold"></use>
      </svg>
      <svg class="icon" aria-hidden="true" v-on:click="switchEditFlagToNew">
        <use xlink:href="#icon-add"></use>
      </svg>
    </header>
    <div class="display">
      <div class="posts">
        <el-table
          :data="tableData.filter(data => !search || data.introduce.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%"
          max-height="600"
        >
          <el-table-column label="Date" prop="date"></el-table-column>
          <el-table-column label="Title" prop="title"></el-table-column>
          <el-table-column label="tags" prop="tags"></el-table-column>
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

      <el-input v-model="editPost.title" placeholder="请输入标题"></el-input>
      <el-input v-model="editPost.tags" placeholder="请输入tag,以/分隔"></el-input>
      <el-input v-model="editPost.introduce" placeholder="请输入说明"></el-input>
      <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="editPost.content"></el-input>
      <div class="action">
        <el-button v-if="!editFlag" v-on:click="addPost">发布</el-button>
        <el-button v-if="editFlag" v-on:click="addPost">更新</el-button>
        <p v-if="this.editFlag" v-model="editPost.id">文章ID: {{editPost.id}}</p>
      </div>
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
    editPost: {
      get: function() {
        return this.$store.state.editPost
      },
      set: function(payload) {
        this.$store.commit('switchToCurrent', payload)
      }
    },
    editFlag: {
      get: function() {
        return this.$store.state.editFlag
      },
      set: function(payload) {
        this.$store.commit('switchEditFlag', payload)
      }
    }
  },
  methods: {
    switchEditFlagToNew() {
      this.editFlag = false
    },
    handleEdit(index, row) {
      let obj = {}
      this.editPost = JSON.parse(JSON.stringify(row))
      this.editFlag = true
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
      let id = this.editPost.id
      console.log(post.introduce)
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
      if (flag && !id) {
        await this.$axios.post('/admin/api/add', { post }).then(res => {
          this.display()
        })
      } else if (flag && id) {
        await this.$axios.post('/admin/api/edit', { post, id }).then(res => {
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
.topbar {
  background: #323030;
  height: 40px;
  width: 100%;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon {
    fill: white;
    height: 25px;
    width: 25px;
    cursor: pointer;
  }
}
.display {
  .action {
    display: flex;
    justify-content: space-between;
  }
  padding: 30px;
  .posts {
    section {
      ol {
        display: flex;
      }
    }
  }
}
</style>
