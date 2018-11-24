<template>
  <div class="aboutMe-Container">
    <header class="aboutMe-header">
      <div class="aboutMe-header-text">
        <div class="logo">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gerenlogoBold"></use>
          </svg>
          <p>ex.arc.zhang@gmail.com</p>
        </div>
        <div class="aboutMe-board">
          <div class="photo"></div>
          <main class="row-right">
            <div class="aboutMe-message">
              <h1>张博涵</h1>
              <div class="aboutMe-message-tltle2">
                <div class="aboutMe-message-title2-site">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-site"></use>
                  </svg>
                  <p>重庆</p>
                </div>
                <h2>前端工程师</h2>
              </div>
            </div>
            <main class="aboutMe-main-container">
              <ul class="row-1">
                <div class="messageTitle">
                  <p>姓名:</p>
                  <p>出生年月:</p>
                  <p>年龄:</p>
                  <p>城市:</p>
                  <p>学历:</p>
                  <p>毕业院校:</p>
                </div>
                <div class="messageContent">
                  <p>张博涵</p>
                  <p>1994.2.25</p>
                  <p>24</p>
                  <p>重庆</p>
                  <p>本科</p>
                  <p>大连民族大学</p>
                </div>
              </ul>
              <div class="aboutMe-header-h1">
                <div class="mainText">
                  <div class="aboutMe-connection">
                    <div class="github">
                      <div>
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-github"></use>
                        </svg>
                        <a href="https://github.com/BrendanZhang">https://github.com/BrendanZhang</a>
                      </div>
                      <div>
                        <svg class="qq" aria-hidden="true">
                          <use xlink:href="#icon-gmail"></use>
                        </svg>
                        <p>ex.arc.zhang@gmail.com</p>
                      </div>
                    </div>
                    <div class="wechat">
                      <div>
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-wechat"></use>
                        </svg>
                        <p>z574549756</p>
                      </div>
                      <div>
                        <svg class="qq" aria-hidden="true">
                          <use xlink:href="#icon-qq"></use>
                        </svg>
                        <p class="justifyQQ">574549756</p>
                      </div>
                      <div>
                        <svg class="qq" aria-hidden="true">
                          <use xlink:href="#icon-1101dianhua"></use>
                        </svg>
                        <p>+86 18640961725</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </main>
        </div>
      </div>
    </header>
    <main class="skills-container">
      <header class="header">
        <h2>Skills</h2>
        <div class="breakLine"></div>
      </header>
      <main class="skills">
        <radar v-bind:skills="$store.state.aboutMe.skills.skillsLeft"/>
        <skillsRowButtom v-bind:skills="$store.state.aboutMe.skills.skillsRight"/>
      </main>
    </main>
    <main class="jobExperience">
      <header class="header">
        <h2>Experience</h2>
        <div class="breakLine"></div>
      </header>
      <div class="jobExperience-row">
        <span class="jobExperience-duration">2017.3~2017.7</span>
        <div class="dutyAndCompany">
          <span class="duty">建筑师</span>
          <div class="companyAndJobDetail">
            <span class="company">重庆孚思厅建筑规划设计有限公司</span>
            <p class="jobDetail">建筑方案设计，投标方案，效果图绘制，建筑模型制作</p>
          </div>
        </div>
      </div>
      <div class="jobExperience-row">
        <span class="jobExperience-duration">2017.7~2018.3</span>
        <div class="dutyAndCompany">
          <h2 class="duty">平面设计师</h2>
          <div class="companyAndJobDetail">
            <span class="company">重庆赛薇汀文化创意有限公司</span>
            <p class="jobDetail">宣传图制作、排版、拍摄</p>
          </div>
        </div>
      </div>
      <div class="jobExperience-row">
        <span class="jobExperience-duration">2018.3~</span>
        <div class="dutyAndCompany">
          <h2 class="duty">自学前端</h2>
          <div class="companyAndJobDetail">
            <span class="company">自学前端半年</span>
            <p class="jobDetail"></p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import skillsRowButtom from './skillsRowButtom'
import radar from './radar'
export default {
	components: {
		radar,
		skillsRowButtom
	}
}
</script>
<style lang="scss">
$designWidth: 1920;
@function px($px) {
	@return $px/$designWidth * 10 + rem;
}
</style>
logo