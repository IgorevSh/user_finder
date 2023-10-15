<template>
  <div class="menu_header">
    <span class="logo">Жилфонд</span>
    <span class="user_link">Пользователь</span>
  </div>
  <div class="menu_wrapper">
    <side-bar></side-bar>
    <user-main />
  </div>
</template>

<script>
import UserMain from "@/components/userMain";
import SideBar from "@/components/sideBar";
import {mapActions} from "vuex"
export default {
  name: "App",
  methods:{
    ...mapActions(['getUserList'])
  },
  computed: {
  },
  components: {
    SideBar,
    UserMain,
  },
  async mounted() {
   await this.getUserList();
  }
};
</script>

<style>
@font-face {
  font-family: "Montserrat";
  src: url("assets/fonts/Montserrat/static/Montserrat-Regular.ttf");
}
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px 50px;
  height: calc(100vh - 140px);
  width: calc(100vw - 100px);
}
</style>
<style scoped>
.menu_wrapper {
  display: flex;
  box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  height: 100%;
}
.menu_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 20px 0;
}
.logo {
  font-size: 32px;
  font-weight: 900;
  color: #e31f24;
}
</style>
