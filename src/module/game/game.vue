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
            <my-button type="grey" long>
              <template #prefix>
                <icon icon="home-light" color="white"></icon>
              </template>
              <router-link to="home">新闻资讯</router-link>
              <!-- <div>新闻资讯</div> -->
            </my-button>
          </div>
          <div class="btn-padding">
            <my-button type="primary" long>
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
        <img class="nav-user-head" src="../../img/game2.png" />
        <div class="nav-user-icon">
          <icon icon="history-light" color="#808191"></icon>
          <icon icon="notice-light" color="#808191"></icon>
          <icon icon="config-light" color="#808191"></icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../../components/SvgIcon/icon.vue";
import MyButton from "../../components/my-button/my-button.vue";
export default {
  components: { MyButton, Icon},
  name: "",
  data() {
    return {
      input: "",
    };
  },
  mounted() {
    
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
.router-link-active {
  text-decoration: none;
  color: white;
}
a{
  text-decoration: none;
  color: black;
}
</style>
