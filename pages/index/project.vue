<template>
  <div>
    <div class="Tab-inner-unfold">
      <h2>01</h2>
      <h1>Portfolio</h1>
    </div>
    <div class="clickBox" v-if="!$route.params.id">
      <router-link to="/" class="cross">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cross"></use>
        </svg>
      </router-link>
      <div class="preAndNext">
        <router-link to="/about" class="pre">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next1"></use>
          </svg>
        </router-link>
        <router-link to="/blog" class="next">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next1"></use>
          </svg>
        </router-link>
      </div>
    </div>
    <main class="inner-container">
      <portfolio/>
    </main>
  </div>
</template>
<script>
import portfolio from '~/components/portfolio/portfolio.vue'
export default {
  components: {
    portfolio
  }
}
</script>

<style lang="scss">
.router {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 80px;
  main.inner-container {
    display: block;
    height: 100vh;
    overflow-x: hidden;
    max-width: 100%;
    min-width: 900px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    main.project-container {
      margin: 300px auto;
      color: rgb(255, 255, 255);
      display: flex;
      min-width: 900px;
      max-width: 1200px;
      flex-direction: column;
      .row1 {
        width: 100%;
        border: 1px solid red;
      }
    }
  }
}
</style>
