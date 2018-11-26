<template>
  <div class="router">
    <div class="Tab-inner-unfold">
      <h2>00</h2>
      <h1>About Me</h1>
    </div>
    <div class="clickBox">
      <router-link to="/" class="cross">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cross"></use>
        </svg>
      </router-link>
      <div class="preAndNext">
        <div class="pre">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next1"></use>
          </svg>
        </div>
        <router-link to="/project" class="next">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-next1"></use>
          </svg>
        </router-link>
      </div>
    </div>
    <main class="inner-container">
      <aboutMe/>
    </main>
  </div>
</template>

<script>
import aboutMe from '~/components/about/aboutMe'

export default {
	components: {
		aboutMe
	}
}
</script>

<style lang="scss">
$designWidth: 1920;
@function px($px) {
	@return $px/$designWidth * 10 + rem;
}
.router {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 0 0 80px;
	main.inner-container {
		display: block;
    height: 100vh;
    width:100%;
		overflow-x: auto;
		overflow-y: scroll;
		&::-webkit-scrollbar {
			display: none;
		}
		div.aboutMe-Container {
			margin: 120px auto;
			color: rgb(255, 255, 255);
			display: flex;
      min-width: 900px;
      max-width:900px;
			flex-direction: column;
			header.aboutMe-header {
				display: flex;
				div.aboutMe-header-text {
					display: flex;
					flex-direction: column;
					width: 100%;
					.logo {
						display: flex;
						align-items: flex-end;
						justify-content: space-between;
						svg {
							fill: rgb(141, 141, 141);
							height: 40px;
							width: 40px;
						}
						p {
							color: rgb(119, 119, 119);
						}
					}
					div.aboutMe-board {
						margin-top: 130px;
						display: flex;
						justify-content: flex-start;
						height: 550px;
						padding: 50px 0;
						position: relative;
						background: rgb(33, 30, 30);
						div.photo {
							width: 40%;
							height: 100%;
							position: relative;
							&::after {
								content: '';
								display: block;
								background: white;
								width: 90%;
								height: 90%;
								position: absolute;
								right: 0;
								bottom: 0;
							}
							&::before {
								content: '';
								display: block;
								border: 5px solid #ffb935;
								width: 90%;
								height: 90%;
								position: absolute;
								left: 0;
								top: 0;
							}
						}
						.row-right {
							display: flex;
							flex-direction: column;
							background: rgb(33, 30, 30);
							justify-content: flex-start;
							align-items: flex-start;
							flex: 1;
							padding: 45px 35px 0 50px;
							main.aboutMe-main-container {
								width: 100%;
								margin-top: 30px;
								display: flex;
								flex: 1;
								justify-content: space-between;
								align-items: flex-start;
								flex-direction: column;
								div.aboutMe-header-h1 {
									display: flex;
									flex-direction: row;
									width: 100%;
									justify-content: space-between;
									.aboutMe-connection {
										padding: 20px 10px 20px 10px;
										display: flex;

										border-right: 5px solid
											#ffb223;
										border-bottom: 5px solid
											#ffb223;
										flex-direction: column;
										justify-content: center;
										align-items: flex-start;
										.github,
										.wechat {
											display: flex;
											width: 100%;
											justify-content: space-between;
											align-items: center;
											div {
												display: flex;
												justify-content: center;
												align-items: flex-end;
											}
											svg {
												height: 20px;
												width: 20px;
												fill: #ffb223;
											}
											a {
												color: rgb(
													175,
													175,
													175
												);
												margin-left: 10px;
											}
											p {
												color: rgb(
													175,
													175,
													175
												);
												margin-left: 10px;
											}
										}
										.wechat {
											margin-top: 5px;
										}
									}
									.title1 {
										display: flex;
										justify-content: flex-start;
										width: 40%;
										height: 100%;
										.sayHello {
											display: flex;
											padding-left: 20px;
											flex-direction: column;
											align-items: flex-end;
											display: none;
											h3 {
												font-size: 20px;
												margin: 0;
												color: rgb(
													202,
													202,
													202
												);
											}
											p {
												font-size: 18px;
												color: white;
											}
										}
										h1 {
											margin: 0 0 0 12px;
											font-size: 20px;
											font-weight: 100;
										}
									}
									.mainText {
										flex: 1;
										height: 100%;
									}
								}
								.row-1 {
									display: flex;
									justify-content: space-between;
									div {
										display: flex;
										flex-direction: column;
										justify-content: flex-start;
										align-items: flex-start;
										font-size: 18px;
										p {
											margin-bottom: 5px;
										}
									}
									.messageTitle {
										margin-right: 80px;
										p {
											color: #787878;
										}
									}
									.messageContent {
										p {
											font-weight: normal;
										}
									}
								}
							}
							> .aboutMe-message {
								display: flex;
								h1 {
									margin: 0;
									font-family: 'Franklin Gothic Medium',
										'Arial Narrow', Arial,
										sans-serif;
									font-weight: 100;
									font-size: 50px;
									color: #ffb935;
								}
								.aboutMe-message-tltle2 {
									display: inherit;
									flex-direction: column;
									justify-content: center;
									h2 {
										font-weight: 100;
										font-size: 24px;
										color: rgb(175, 175, 175);
									}
									.aboutMe-message-title2-site {
										display: flex;
										justify-content: flex-start;
										align-items: center;
										svg {
											fill: rgb(112, 112, 112);
											height: 20px;
											width: 20px;
										}
										p {
											color: rgb(112, 112, 112);
											font-size: 15px;
										}
									}
								}
							}
						}
					}
				}
			}
			.jobExperience {
				margin-bottom: 130px;
				display: block;
				height: 100%;
				padding: 60px 35px 60px 35px;
				background: #211e1e;
				.jobExperience-row {
					display: flex;
					align-items: flex-start;
					justify-content: flex-start;
					width: 100%;
					margin-bottom: 30px;
					.jobExperience-duration {
						width: 20%;
						font-size: 20px;
						text-align: left;
						display: block;
						border-left: 2px solid #ffb935;
						padding: 10px 15px;
						box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
					}
					.dutyAndCompany {
						display: flex;
						margin-left: 25%;
						.duty {
							font-size: 20px;
							font-weight: 300;
							width: 150px;
							text-align: left;
							color: #ffb935;
						}
						.companyAndJobDetail {
							display: flex;
							flex-direction: column;
							align-items: flex-start;
							justify-content: flex-start;
							p {
								color: #787878;
								text-align: left;
								width: 300px;
							}
							.company {
								color: #dddddd;
								width: 300px;
							}
						}
					}
				}
			}
		}
	}
}
</style>

