<template>
  <div class="banner">
    <router-link to="/project" class="clickArea-backToProject">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cross"></use>
      </svg>
    </router-link>
    <div class="banner-inner">
      <img :src="`/portfolio/${currentProject.projectImg}`" alt="projectImg">
      <div class="detail-projectInfo">
        <main class="infoTitle">
          <div class="infoTitle-row1">
            <h1>{{currentProject.name.split(' ')[0]}}</h1>
            <h2>{{currentProject.name.split(' ')[1]}}</h2>
            <div class="slider-techStackIcon">
              <svg
                class="icon"
                aria-hidden="true"
                v-for="projectIcon in currentProject.projectIcons"
              >
                <use v-bind:xlink:href="`#icon-${projectIcon}`"></use>
              </svg>
            </div>
          </div>
          <div class="infoTitle-row2">
            <p>{{currentProject.projectDis}}</p>
          </div>
        </main>
        <main class="QRCode" v-if="currentProject.QRCode">
          <img :src="`/portfolio/QR/${currentProject.QRCode}`" alt="">
        </main>
      </div>
      <footer class="codeButton">
        <a :href="`${currentProject.previewUrl}`">
          <p>查看Demo</p>
        </a>
        <a :href="`${currentProject.codeLink}`">
          <p>查看源码</p>
        </a>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
	mounted() {
		console.log(this.$route.params.id)
	},
	computed: {
		currentProject() {
			var projectId = this.$route.params.id
			const result = this.$store.state.aboutMe.portfolio.filter(
				project => project.id === projectId
			)
			return result[0]
		}
	}
}
</script>

<style lang="scss">
.banner {
	padding-top: 100px;
	margin: 30px 0 200px 0;
	z-index: 10;
	background: #222020;
	display: flex;
	flex: 1;
	justify-content: center;
	position: relative;
	.clickArea-backToProject {
		position: absolute;
		right: 0;
		top: 0;
		svg {
			width: 30px;
			height: 30px;
		}
	}
	.banner-inner {
		display: flex;
		flex-direction: column;
		flex: 1;
		background: #211e1e;
		img {
			width: 900px;
			height: 675px;
		}
		.detail-projectInfo {
			padding: 20px 0;
			display: flex;
			justify-content: space-between;
			.infoTitle {
				display: flex;
				justify-content: flex-start;
				align-items: flex-start;
				flex-direction: column;
				text-align: left;
				.infoTitle-row1 {
					display: flex;
					margin-bottom: 5px;
					align-items: flex-end;
					.slider-techStackIcon {
						margin-left: 30px;
						display: flex;
						justify-content: flex-start;
						align-items: flex-end;
						svg {
							padding: 1px;
							width: 30px;
							height: 30px;
							background: #ffb633;
							margin-right: 10px;
							border: 1px solid #ffb633;
							align-items: center;
							border-radius: 13px;
						}
					}
				}
				h1 {
					margin: 0;
				}
				h2 {
					color: #dddddd;
				}
			}
			.QRCode > img {
				margin-left: 20px;
				width: 100px;
				height: 100px;
			}
		}
		.codeButton {
			width: 100%;
			justify-content: space-between;
			display: flex;
			a {
				justify-content: center;
				display: flex;
				align-items: center;
				width: 48%;
				height: 40px;
				background: #211e1e;
				border-left: 2px solid #ffb633;
				border-right: 2px solid rgb(26, 26, 26);
				box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
			}
		}
	}
}
</style>
