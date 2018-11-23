<template>
  <main class="skillsButtom">
    <div class="skillsContent" v-for="skill in skills">
      <el-progress :percentage="toNumber(skill.progress)" :width="50" type="circle" color="#ffb935"></el-progress>
      <svg class="skillsIcon" aria-hidden="true">
        <use v-bind:xlink:href="`#icon-${skill.icon}`"></use>
      </svg>
      <div class="skillsDiscription">
        <p>{{skill.content}}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
	props: ['skills'],
	methods: {
		toNumber(number) {
			return number + 0
		}
	}
}
</script>

<style lang="scss">
.skillsButtom {
	height: 100%;
	width: 60%;
	padding-left: 30px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: space-between;
	.skillsContent {
		width: 100%;
		padding: 10px;
		border-left: 2px solid #ffb935;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
		display: flex;
		position: relative;
		margin-bottom: 20px;
		.el-progress__text {
			display: none;
		}
		.el-progress.el-progress--circle {
			height: 50px;
		}
		.skillsIcon {
			position: absolute;
			left: 25px;
			top: 25px;
			fill: #f8f8f8;
			height: 20px;
			width: 20px;
		}
		.skillsDiscription {
			margin-left: 20px;
			p {
				font-weight: normal;
				color: #b9b9b9;
				text-align: left;
				line-height: 20px;
			}
		}
	}
}
</style>
