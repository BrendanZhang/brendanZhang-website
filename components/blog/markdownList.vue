<template>
  <div class="markdownList">
    <div class="blogTag" v-for="blog in model">
      <header>
        <h2>{{blog.year}}</h2>
        <h3>{{blog.day}}</h3>
        {{blog.time}}
      </header>
      <main>
        <h2>{{blog.title}}</h2>
        <p>{{blog.introduce}}</p>
      </main>
    </div>
  </div>
</template>
<script>
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
  computed: {}
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
    width: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
.markdownList {
  max-width: 1200px;
  min-width: 900px;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  .blogTag {
    width: 350px;
    background: white;
    margin: 20px 10px;
    height: 200px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    main {
      height: 100%;
      background: #252323;
      padding: 10px;
      width: 70%;
      font-size: 15px;
      color: #dddddd;
    }
    header {
      width: 20%;
      height: 100%;
      padding: 10px;
      font-size: 15px;
      color: black;
    }
  }
}
</style>
