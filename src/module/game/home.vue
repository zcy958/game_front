<template>
  <div class="page">
    <div class="left-nav">
      <div class="nav-top">
        <div class="left-nav-team">
          <div class="left-nav-team-logo">
            <img class="left-nav-team-logo-icon" src="../../img/game2.png" />
            <div class="left-nav-team-logo-text">星游News</div>
            <div style="display: flex; color: #6c5dd3; font-size: 25px">.</div>
          </div>
          <img class="left-nav-team-icon" src="../../img/burger_icon_2.png" />
        </div>
        <div class="left-nav-btnteam">
          <div class="left-nav-btnteam-name">
            <div
              style="
                font-family: Inter;
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                color: #808191;
              "
            >
              选择菜单
            </div>
          </div>
          <div class="btn-padding">
            <my-button type="primary" long>
              <template #prefix>
                <icon icon="home-light" color="white"></icon>
              </template>
              <router-link to="home">新闻资讯</router-link>
              <!-- <div>新闻资讯</div> -->
            </my-button>
          </div>
          <div class="btn-padding">
            <my-button type="grey" long>
              <template #prefix>
                <icon icon="game-light" color="#808191"></icon>
              </template>
              <router-link to="game">游戏板块</router-link>
              <!-- <div>游戏板块</div> -->
            </my-button>
          </div>
          <div class="btn-padding">
            <my-button type="grey" long>
              <template #prefix>
                <icon icon="mod-light" color="#808191"></icon>
              </template>
              <div>模组发布</div>
            </my-button>
          </div>
          <div class="btn-padding">
            <my-button type="grey" long>
              <template #prefix>
                <icon icon="chat-light" color="#808191"></icon>
              </template>
              <div>论坛交流</div>
            </my-button>
          </div>
        </div>
      </div>
      <div class="nav-user">
        <img class="nav-user-head" src="../../img/game2.png">
          <div class="nav-user-icon">
            <icon icon="history-light" color="#808191"></icon>
            <icon icon="notice-light" color="#808191"></icon>
            <icon icon="config-light" color="#808191"></icon>
          </div>
      </div>
    </div>
    <div class="nav-center">
      <!-- 上方搜索栏 -->
      <div class="top-nav">
        <div class="top-nav-search">
          <el-input placeholder="请输入内容" v-model="input" clearable>
          </el-input>
          <icon
            style="cursor: pointer"
            icon="search-light"
            color="#11142D"
          ></icon>
        </div>
      </div>
      <!-- 轮播图 -->
      <div class="swiper-container" id="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="swiper-slide-img" src="../../img/1.png" />
          </div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>

      <!-- 中间新闻栏 -->
      <div class="nav-news-title">热点新闻</div>
      <div class="nav-news">
        <div class="nav-news-one-left">
          <div>绝地求生</div>
          <img class="nav-big-img" src="../../img/lol.png" />
        </div>

        <div class="nav-news-one-right">
          <div class="nav-news-right-img">
            <img class="nav-small-img" src="../../img/lol.png" />
            <div style="flex-flow: column; text-align: center">
              <div style="padding-bottom: 20px">英雄联盟</div>
              <my-button type="grey" long> 点击查看 </my-button>
            </div>
          </div>
          <div class="nav-news-right-img">
            <img class="nav-small-img" src="../../img/lol.png" />
            <div style="flex-flow: column; text-align: center">
              <div style="padding-bottom: 20px">英雄联盟</div>
              <my-button type="grey" long> 点击查看 </my-button>
            </div>
          </div>
          <div class="nav-news-right-img">
            <img class="nav-small-img" src="../../img/lol.png" />
            <div style="flex-flow: column; text-align: center">
              <div style="padding-bottom: 20px">英雄联盟</div>
              <my-button type="grey" long> 点击查看 </my-button>
            </div>
          </div>
        </div>
      </div>
      <!-- 下方推荐游戏 -->
      <div class="nav-news-title">为您推荐</div>
      <div class="rec-game-bottom">
        <div class="rec-game-bottom-item">
          <div class="rec-game-bottom-img">
            <img class="nav-small-img" src="../../img/lol.png" />
            <div style="flex-flow: column; text-align: center">
              <div style="padding-bottom: 20px">英雄联盟</div>
              <my-button type="grey" long> 点击查看 </my-button>
            </div>
          </div>
        </div>
        <div class="rec-game-bottom-item">
          <div class="rec-game-bottom-img">
            <img class="nav-small-img" src="../../img/lol.png" />
            <div style="flex-flow: column; text-align: center">
              <div style="padding-bottom: 20px">英雄联盟</div>
              <my-button type="grey" long> 点击查看 </my-button>
            </div>
          </div>
        </div>
        <div class="rec-game-bottom-item">
          <div class="rec-game-bottom-img">
            <img class="nav-small-img" src="../../img/lol.png" />
            <div style="flex-flow: column; text-align: center">
              <div style="padding-bottom: 20px">英雄联盟</div>
              <my-button type="grey" long> 点击查看 </my-button>
            </div>
          </div>
        </div>
        <div class="rec-game-bottom-item">
          <div class="rec-game-bottom-img">
            <img class="nav-small-img" src="../../img/lol.png" />
            <div style="flex-flow: column; text-align: center">
              <div style="padding-bottom: 20px">英雄联盟</div>
              <my-button type="grey" long> 点击查看 </my-button>
            </div>
          </div>
        </div>
        <div class="rec-game-bottom-item">
          <div class="rec-game-bottom-img">
            <img class="nav-small-img" src="../../img/lol.png" />
            <div style="flex-flow: column; text-align: center">
              <div style="padding-bottom: 20px">英雄联盟</div>
              <my-button type="grey" long> 点击查看 </my-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../../components/SvgIcon/icon.vue";
import MyButton from "../../components/my-button/my-button.vue";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  components: { MyButton, Icon, Swiper },
  name: "",
  data() {
    return {
      input: "",
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: "auto", // 开启自定义slide宽度，配合下面css样式设置即可
      loop: true,
      // 如果需要分页器
      pagination: ".swiper-pagination",
      // 如果需要前进后退按钮
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      // 如果需要滚动条
      // scrollbar: '.swiper-scrollbar',
      //如果需要自动切换海报
      autoplay: 3000,
      autoplayStopOnLast: true,
      // autoplay:1,//自动滚动
      // loop:true,//循环
      // speed:5000,//滚动速度
      // slidesPerView : 4,//slide可见数量
      // spaceBetween : 10//slide之间的距离（单位px）
    });
  },
  methods: {
    news_click(){
      this.$router.push("/news")
    },
    game_click(){
      this.$router.push("/game")
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.page {
  display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;
  /* overflow-x: hidden;
  overflow-y: scroll; */
  overflow: hidden;
  align-items: stretch;
  /* background: #F2F2F2; */
}

.icon {
  width: 24px;
  height: 24px;
}
.btn-padding {
  padding-bottom: 2px;
}
.left-nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 256px;
  border-right: 2px solid #f0f3f6;
}
/* 左侧 logo区域 */
.nav-top {
  display: flex;
  flex-direction: column;
}
.left-nav-team {
  display: flex;
  padding: 41.6px 0 0 0;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
}
.left-nav-team-logo {
  display: inline-flex;
  width: 141px;
  justify-content: center;
  align-items: center;
}
.left-nav-team-logo-icon {
  display: flex;
  width: 26px;
  height: 26px;
}
.left-nav-team-logo-text {
  display: flex;
  color: #11142d;
  padding-left: 10px;
  font-size: 20px;
}
.left-nav-team-icon {
  display: flex;
  width: 32px;
  height: 20px;
  padding-left: 3px;
  cursor: pointer;
}
/* 左侧 按钮区域 */
.left-nav-btnteam {
  display: flex;
  flex-wrap: wrap;
  padding-top: 36px;
  justify-content: center;
  align-items: center;
}
.left-nav-btnteam-name {
  width: 176px;
  height: 32px;
}
.nav-center {
  width: calc(100vw - 256px);
  height: 100vh !important;
  overflow-y: scroll;
}
/* 左侧用户区 */
.nav-user{
  display: flex;
  border-top: 2px solid #f0f3f6;
  height: 100px;
  align-items: center;
  justify-content: space-between;
}
.nav-user-head{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid gray;
  cursor: pointer;
}
.nav-user-icon{
  display: flex;
  width: 100px;
  padding-right: 20px;
  justify-content: space-between;
}
/* 上方搜索栏 */
.top-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  border-bottom: 2px solid #f0f3f6;
}
.top-nav-search {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 轮播图 */
.swiper-container {
  width: 100%;
  height: 488px;
}
.swiper-slide {
  background-color: #42b983;
}
.swiper-slide-img {
  width: 100%;
  object-fit: contain;
  object-position: center;
}
/* 新闻部分 */
.nav-news {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  height: 748px;
  margin-right: 63px;
  justify-content: center;
}
.nav-news-title {
  margin-top: 64px;
  color: #11142d;
  font-size: 24px;
}
.nav-news-one-left {
  width: 512px;
  height: 676px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
.nav-big-img {
  max-width: 512px;
  max-height: 676px;
  background: linear-gradient(
    180deg,
    rgba(58, 62, 69, 0.0001) 30.57%,
    rgba(27, 29, 33, 0.900787) 81.59%
  );
  border-radius: 24px;
}
.nav-news-one-right {
  padding-top: 20px;
  padding-left: 30px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
}
.nav-news-right-img {
  width: 400px;
  height: 200px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
}
.nav-small-img {
  max-width: 240px;
  max-height: 188px;
  background: linear-gradient(
    180deg,
    rgba(58, 62, 69, 0.0001) 30.57%,
    rgba(27, 29, 33, 0.900787) 81.59%
  );
  border-radius: 24px;
}
.rec-game-bottom{
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 501px;
  margin-top: 40px;
}
.rec-game-bottom-img {
  width: 250px;
  height: 200px;
  display: flex;
  flex-flow: column;
  /* justify-content: center; */
  align-items: center;
}
.router-link-active {
  text-decoration: none;
  color: white;
}
a{
  text-decoration: none;
  color: black;
}
.router-link-active {
  text-decoration: none;
  color: white;
}
a{
  text-decoration: none;
  color: black;
}
.rec-game-bottom-item{
  
}
</style>
