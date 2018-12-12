<template>
  <div class="nameBoard">
    <main v-bind:class="{normal:selectTab.index}" class="nameBoard-container">
      <section
        v-bind:class="{active:selectTab.about}"
        v-on:click="switchTab()"
        class="clickAreaContainer"
      >
        <nuxt-link to="/about" class="clickable">
          <div class="Tab-inner">
            <h2>00</h2>
            <h1>About Me</h1>
          </div>
          <div class="Board-inner">
            <h2>00</h2>
            <h1>About Me</h1>
          </div>
        </nuxt-link>
        <nuxt-child class="router"/>
      </section>
      <section v-bind:class="{active:selectTab.project}" v-on:click="switchTab()">
        <nuxt-link to="/project" class="clickable">
          <div class="Tab-inner">
            <h2>01</h2>
            <h1>Portfolio</h1>
          </div>
          <div class="Board-inner">
            <h2>01</h2>
            <h1>Portfolio</h1>
          </div>
        </nuxt-link>
        <nuxt-child class="router"/>
      </section>
      <section v-bind:class="{active:selectTab.blog}" v-on:click="switchTab()">
        <router-link to="/blog" class="clickable">
          <div class="Tab-inner">
            <h2>02</h2>
            <h1>My Blog</h1>
          </div>
          <div class="Board-inner">
            <h2>02</h2>
            <h1>My Blog</h1>
          </div>
        </router-link>
        <router-view class="router"></router-view>
      </section>
      <section v-bind:class="{active:selectTab.ability}" v-on:click="switchTab()">
        <router-link to="/ability" class="clickable">
          <div class="Tab-inner">
            <h2>03</h2>
            <h1>Before Coding</h1>
          </div>
          <div class="Board-inner">
            <h2>03</h2>
            <h1>Before Coding</h1>
          </div>
        </router-link>
        <router-view class="router"></router-view>
      </section>
    </main>
  </div>
</template>
<script>
import store from '~/store/index'
export default {
  transition: 'page',
  name: 'resumeBoard',
  store,
  mounted() {
    this.switchTab()
  },
  watch: {
    $route: function() {
      this.switchTab()
    }
  },
  methods: {
    switchTab() {
      for (let i in this.selectTab) {
        this.selectTab[i] = false
      }
      console.log('改之前')
      console.log(this.selectTab.about)
      console.log(this.$route.name)
      this.selectTab[
        this.$route.name.replace('index-', '').replace('-id', '')
      ] = true
      console.log('改之后')
      console.log(this.selectTab.about)
      console.log(this.$route.name)
    }
  },
  computed: {
    selectTab() {
      return this.$store.state.selectTab
    }
  }
}
</script>

<style lang="scss" src="~/assets/index/reset.scss">
</style>

<style lang="scss" src="~/assets/index/tabCSS.scss">
</style>
