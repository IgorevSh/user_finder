<template>
  <div class="user_menu_wrapper">
    <div v-if="!currentUser" class="user_menu_placeholder">Выберите сотрудника, чтобы посмотреть его профиль</div>
    <div v-if="currentUser" class="user_menu_left">
      <img v-if="currentUser?.photo" style="height: 300px"   :src="currentUser?.photo"  >
      <img
          v-else
        style="height: 300px;"
        src="../../public/Rectangle_big.png"
      />
    </div>
    <div v-if="currentUser" class="user_menu_right">
      <div class="descript">
        <h4 style="margin: 0px">{{currentUser?.name}}</h4>
        <span><b>email:</b> {{currentUser?.email ||'Email отсутствует'}}</span>
        <span><b>phone:</b> {{currentUser?.phone ||'Телефон отсутствует'}}</span>
        <div class="user_about">
          <h4 style="margin-top: 10px">О себе:</h4>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "userMain",
  computed:{
    ...mapGetters(['currentUser'])
  }
};
</script>

<style scoped lang="scss">
.user_menu_wrapper {
  display: flex;
  position: relative;
  overflow: hidden;
  padding: 40px 20px;
  justify-content: center;
  align-items: flex-start;
  border-left: 1px solid #e0e0e0;
  width: 80%;
  gap: 40px;

  .user_menu_left {
    width: 50%;
    border: 1px solid #e0e0e0;
    height: 300px;
    max-width: 445px;
    overflow: hidden;
    object-position: center;
    display: flex;
    justify-content: center;
  }

  .user_menu_right {
    position: relative;
    height: 300px;
    overflow: visible;
    width: 50%;

    .descript {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
      height: 300px;
      gap: 15px;

      span {
        font-size: 14px;
      }
    }
  }

  .user_about {
    div {
      text-align: justify;
      font-size: 14px;
    }

    h4 {
      text-align: left;
    }
  }

  .user_menu_placeholder {
    color: #76787D;
    font-size: 14px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (max-width: 1000px) {
  .user_menu_wrapper {
    overflow-x: hidden;
    overflow-y: scroll;
    flex-wrap: wrap;
  .user_menu_left {
    width: 100%;
    max-width: 445px;
  }
  .user_menu_right {
    width: 100%;

  }
  }
}
</style>
