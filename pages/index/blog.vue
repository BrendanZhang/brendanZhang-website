<template>
  <div>
    <div class="Tab-inner-unfold">
      <h2>02</h2>
      <h1>Blog</h1>
    </div>
    <div class="clickBox">
      <router-link to="/" class="cross">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cross"></use>
        </svg>
      </router-link>
      <div class="preAndNext">
        <router-link to="/project" class="pre">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next1"></use>
          </svg>
        </router-link>
        <router-link to="/ability" class="next">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next1"></use>
          </svg>
        </router-link>
      </div>
    </div>
    <main class="inner-container">
      <el-input class="search-input" v-model="search" placeholder="请输入内容"></el-input>
      <markdownList :model="this.searchData"/>
    </main>
  </div>
</template>
<script>
import markdownList from '~/components/blog/markdownList'
export default {
  data() {
    return {
      model: 'aaa',
      search: ''
    }
  },
  created() {
    this.$axios
      .get('/blog/api/all')
      .then(res => {
        let tableData = res.data.data
        for (let i in tableData) {
          let date = tableData[i].createdAt.split(' ')[0]
          let year = date.split('-')[0]
          tableData[i].year = year
          tableData[i].day = date.split('-')[1] + '.' + date.split('-')[2]
        }
        return tableData
      })
      .then(tableData => {
        this.model = JSON.parse(JSON.stringify(tableData))
        console.log(this.model)
      })
  },
  computed: {
    searchData: function() {
      let search = this.search
      let data = this.model
      console.log(this.model)
      if (search) {
        return this.model.filter(
          data =>
            !search ||
            data.introduce.toLowerCase().includes(search.toLowerCase())
        )
      }
      console.log(this.model)
      return this.model
    }
  },
  components: {
    markdownList
  }
}
</script>

<style lang="scss">
.search-input {
  width: 500px;
  padding-right: 30px;
  display: flex;
  margin: auto;
}
</style>
