<template>
  <main class="projectsList">
    <div class="projectInner" v-for="project in projects">
      <nuxt-link :to="`/project/${project.id}`">
        <div class="projectList-title">
          <h2>{{project.name.split(' ')[0]}}</h2>
          <h3>{{project.name.split(' ')[1]}}</h3>
        </div>
      </nuxt-link>
      <img :src="`/portfolio/${project.projectImg}`" alt="projectImg">
    </div>
  </main>
</template>

<script>
export default {
  props: ['projects']
}
</script>

<style lang="scss">
.projectsList {
  max-width: 1200px;
  min-width: 900px;
}
img {
  width: 100%;
  height: 100%;
}
.projectsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .projectInner {
    display: flex;
    width: 49%;
    margin-bottom: 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    position: relative;
    a {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #222020f1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-self: center;
      padding: 30px;
      transition: all 0.3s;
      opacity: 0;
      .projectList-title {
        display: flex;
        flex-direction: column;
        text-align: left;
        align-self: center;

        h2 {
          font-size: 30px;
          color: #f8f8f8;
          margin-bottom: 30px;
        }
        h3 {
          font-size: 15px;
          color: #777777;
          font-weight: bold;
        }
      }
    }
    &:hover {
      a {
        display: flex;
        opacity: 1;
      }
    }
  }
}
</style>
