<template>
  <main class="project-container">
    <transition name="el-fade-in-linear">
      <swiper v-if="!$route.params.id" :projects="$store.state.aboutMe.portfolio"/>
    </transition>
    <transition name="el-fade-in-linear">
      <projectsList v-if="!$route.params.id" :projects="$store.state.aboutMe.portfolio"/>
    </transition>
    <transition name="el-fade-in-linear">
      <nuxt-child/>
    </transition>
  </main>
</template>
<script>
import swiper from './swiper'
import projectsList from './projectsList'
export default {
	components: {
		swiper,
		projectsList
	}
}
</script>
<style lang="scss">
.project-container {
	position: relative;
}
.slider {
	margin-bottom: 60px;
}
.el-carousel__item h3 {
	color: #475669;
	font-size: 18px;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
}
</style>
