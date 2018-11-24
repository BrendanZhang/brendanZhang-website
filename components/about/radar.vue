<template>
  <div class="skillsRadar">
    <main class="chartContent">
      <div class="skillsIcon">
        <svg class="vue" aria-hidden="true">
          <use xlink:href="#icon-vuejs"></use>
        </svg>
        <svg class="node" aria-hidden="true">
          <use xlink:href="#icon-node-js"></use>
        </svg>
        <svg class="http" aria-hidden="true">
          <use xlink:href="#icon-http"></use>
        </svg>
        <svg class="cli" aria-hidden="true">
          <use xlink:href="#icon-minglinghang"></use>
        </svg>
        <svg class="html" aria-hidden="true">
          <use xlink:href="#icon-html"></use>
        </svg>
        <svg class="javascript" aria-hidden="true">
          <use xlink:href="#icon-socialjavascript"></use>
        </svg>
      </div>
      <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    </main>
    <div class="row-rightSkills">
      <div class="skillsContent" v-for="skill in skills">
        <el-progress
          :percentage="toNumber(skill.progress)"
          :width="50"
          type="circle"
          color="#ffb935"
        ></el-progress>
        <svg class="skillIcon" aria-hidden="true">
          <use v-bind:xlink:href="`#icon-${skill.icon}`"></use>
        </svg>
        <div class="skillsDiscription">
          <p>{{skill.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/radar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
	props: ['skills'],
	name: 'hello',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	mounted() {
		console.log('画图了')
		this.drawLine()
	},
	methods: {
		toNumber(number) {
			return number + 0
		},
		drawLine() {
			// 基于准备好的dom，初始化echarts实例
			let myChart = echarts.init(
				document.getElementById('myChart'),
				'dark'
			)
			// 绘制图表
			myChart.setOption({
				backgroundColor: '#242222',
				title: {},
				tooltip: {},
				legend: {},
				radar: {
					name: {
						textStyle: {
							color: 'rgba(238, 197, 102,0)'
						}
					},
					shape: 'circle',
					splitArea: {
						show: false
					},
					splitLine: {
						lineStyle: {
							color: [
								'rgba(102, 102, 102, 0.1)',
								'rgba(102, 102, 102, 0.2)',
								'rgba(102, 102, 102, 0.4)',
								'rgba(102, 102, 102, 0.6)',
								'rgba(102, 102, 102, 0.8)',
								'rgba(102, 102, 102, 1)'
							].reverse()
						}
					},
					axisLine: {
						lineStyle: {
							color: 'rgba(102, 102, 102, 0.5)'
						}
					},
					indicator: [
						{ name: 'Node.js', max: 100 },
						{ name: 'CLI', max: 100 },
						{ name: 'VUE', max: 100 },
						{ name: 'JavaScript', max: 100 },
						{ name: 'HTML', max: 100 },
						{ name: 'HTTP', max: 100 }
					]
				},
				series: [
					{
						type: 'radar',
						symbol: 'none',
						lineStyle: {
							width: 1,
							opacity: 0.8,
							color: '#ffb633'
						},
						areaStyle: {
							normal: {
								opacity: 0.6,
								color: '#ffb63380'
							}
						},
						data: [
							{
								value: [30, 50, 60, 70, 80, 60],
								name: ''
							}
						]
					}
				]
			})
		}
	}
}
</script>

<style lang="scss">
.skills-container {
	display: flex;
	flex-direction: column;
	background: #242222;
	padding: 80px 35px 80px 35px;
}
.header {
	margin-bottom: 50px;
	font-size: 15px;
	font-weight: 100;
	.breakLine {
		margin-top: 5px;
		width: 60px;
		height: 1px;
		background: #ffb633;
	}
}
.skills {
	display: flex;
	.skillsRadar {
		position: relative;
		height: 100%;
		width: 40%;
		margin-right: 3%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		.header {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			margin: 30px 0 20px 0;
			h3 {
				color: white;
				margin: 0 0 10px 4vw;
			}

			&::before {
				position: absolute;
				top: -1px;
				display: block;
				content: '';
				align-self: flex-start;
				background: #ffb633;
				height: 3px;
				width: 4.25vw;
			}
		}

		.row-rightSkills {
			flex-direction: column;
			margin-top: 10px;
			display: flex;

			.skillsContent {
				padding: 10px;
				border-left: 2px solid #ffb935;
				box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
				display: flex;
				position: relative;

				.el-progress__text {
					display: none;
				}
				.el-progress.el-progress--circle {
					height: 50px;
				}
				.skillIcon {
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
		.chartContent {
			margin-bottom: 30px;
			.skillsIcon {
				z-index: 10;
				left: 50px;
				top: 50px;
				position: relative;
				svg {
					position: absolute;
					fill: #222020;
					background: #ffb633;
					width: 26px;
					height: 26px;
					border-radius: 13px;
					border: 2px solid #ffb633;
				}
				.vue {
					top: 150px;
					left: -25px;
				}
				.cli {
					left: -25px;
					top: 25px;
				}
				.node {
					left: 87px;
					top: -40px;
				}
				.http {
					left: 200px;
					top: 25px;
				}
				.javascript {
					left: 87px;
					top: 215px;
				}
				.html {
					left: 200px;
					top: 150px;
				}
				.css {
					left: 136px;
					top: 135px;
				}
			}
		}
	}
}
</style>