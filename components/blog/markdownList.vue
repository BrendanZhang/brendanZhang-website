<template>
  <div class="markdownList-container">
    <div class="markdownList" v-if="searchData.length>0">
      <div class="blogTag" v-for="blog in model">
        <header>
          <h2>{{blog.year}}</h2>
          <h3>{{blog.day}}</h3>
        </header>
        <main>
          <h2>{{blog.title}}</h2>
          <p>{{blog.introduce}}</p>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['model'],
  data() {
    return {}
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
    width: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
.markdownList-container {
  max-width: 1200px;
  min-width: 900px;
  padding: 0 100px 0 50px;
  display: flex;
  flex-direction: column;
  margin: auto;
}
.markdownList {
  max-width: 1200px;
  min-width: 900px;
  padding: 0 100px 0 50px;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  justify-content: space-between;
  .blogTag {
    width: 49%;
    min-width: 350px;
    height: 200px;
    display: flex;
    margin: 10px 0;
    justify-content: space-between;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    main {
      height: 100%;
      width: 80%;
      background: #252323;
      padding: 10px;
      font-size: 15px;
      color: #dddddd;
      h2 {
        margin-bottom: 20px;
        color: #ffa033;
      }
      p {
        word-wrap: break-word;
        word-break: break-all;
      }
    }
    header {
      padding: 10px;
      font-size: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #9c9c9c;
    }
  }
}
</style>
