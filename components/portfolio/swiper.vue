<template>
  <header class="slider">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide v-for="project in projects">
        <nuxt-link :to="`/project/${project.id}`" class="router-clickArea">
          <div class="projectInfo">
            <header class="slider-header">
              <h2>{{project.name.split(' ')[0]}}</h2>
              <h3>{{project.name.split(' ')[1]}}</h3>
            </header>
            <main class="slider-discription">
              <h3>说明</h3>
              <p>{{project.projectDis}}</p>
            </main>
            <footer class="slider-techStack">
              <h3>技术栈</h3>
              <div class="slider-techStackIcon">
                <svg class="icon" aria-hidden="true" v-for="projectIcon in project.projectIcons">
                  <use v-bind:xlink:href="`#icon-${projectIcon}`"></use>
                </svg>
              </div>
            </footer>
          </div>
          <div class="imgContainer">
            <img :src="`/portfolio/${project.projectImg}`" alt="projectImg">
          </div>
        </nuxt-link>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </header>
</template>

<script>
import {
	swiper,
	swiperSlide
} from 'vue-awesome-swiper/dist/vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
	props: ['projects'],
	components: {
		swiper,
		swiperSlide
	},
	data() {
		return {
			imgPath: '../../../assets/projectImg',
			swiperOption: {
				observer: true,
				observeParents: true,
				spaceBetween: 30,
				centeredSlides: true,
				runCallbacksOnInit: false,
				loop: true,
				swiping: false,
				autoplay: {
					delay: 3500,
					disableOnInteraction: false
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
			}
		}
	},
	methods: {
		callback() {}
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.swiper
		}
	}
}
</script>
<style lang="scss">
.router-clickArea {
	display: flex;
	height: 500px;
}
.slider {
	height: 500px;
	&:hover {
		.projectInfo {
			background: #ffffff;
			h2,
			p {
				color: black;
			}
			h3 {
				color: #777777;
				font-weight: bold;
			}
		}
	}
}
.projectInfo {
	transition: all 0.3s;
	padding: 40px 50px;
	height: 100%;
	width: 30%;
	background: #211e1e;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	.slider-header {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		justify-content: flex-start;
		margin-bottom: 20px;
		h2 {
			font-size: 30px;
			margin-bottom: 5px;
		}
		h3 {
			color: rgb(200, 200, 200);
			font-size: 20px;
		}
	}
	.slider-techStack {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		.slider-techStackIcon {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			align-self: flex-end;
			svg {
				padding: 1px;
				width: 26px;
				height: 26px;
				background: #ffb935;
				margin-right: 10px;
				border: 1px solid #ffb935;
				align-items: center;
				border-radius: 13px;
				margin-bottom: 8px;
				fill: #222020;
			}
		}
		h3 {
			font-size: 15px;
			margin-bottom: 10px;
			color: #ffffff;
			font-weight: normal;
		}
	}
	.slider-discription {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		margin-bottom: 20px;
		h3 {
			font-size: 15px;
			margin-bottom: 10px;
			color: #ffffff;
			font-weight: normal;
		}
		p {
			font-size: 12px;
			text-align: left;
			line-height: 15px;
			font-weight: normal;
		}
	}
}
.imgContainer {
	width: 70%;
	height: 100%;
}
.swiper-container {
	width: 100%;
	height: 100%;
}

.swiper-slide {
	text-align: center;
	font-size: 18px;

	/* Center slide text vertically */
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffb935'%2F%3E%3C%2Fsvg%3E");
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
	background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffb935'%2F%3E%3C%2Fsvg%3E");
}
.swiper-pagination-bullet-active {
	background: #b34242d5;
}
</style>
