<template>
  <div class="user_item_wrapper" @click="setUserFromList">
    <div class="user_item_image">
      <img style="height: 70px" :src="user?.photo" v-if="user?.photo">
      <img style="height: 70px" src="../../public/Rectangle.png" v-else />
    </div>
    <div class="user_item_info">
      <span class="user_item_name">{{user?.name}}</span>
      <span class="user_item_mail">{{user?.email}}</span>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: "userItem",
  props:{
    user:{
      type:Object
    },
    photo:{
      type:String,
      default:null
    },

  },
  methods:{
    ...mapActions(['setCurrentUser']),
    setUserFromList(){
      this.setCurrentUser(this.user);
    }
  },
  computed:{
  }
};
</script>

<style scoped lang="scss">
.user_item_wrapper {
  height: 70px;
  width: 100%;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
&:hover{
  .user_item_info {
    background-color: #e0e0e0;
    cursor: pointer;
  }
}
.user_item_info {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: calc(100% - 70px);
  justify-content: center;
  padding: 0 20px;
  overflow: hidden;
  white-space: nowrap;
  border-left: 1px solid #e0e0e0;
}
.user_item_name {
  color: #333333;
  font-weight: 600;
}
.user_item_mail {
  color: #76787d;
}
.user_item_image {
  height: 70px;
  width: 70px;
  min-width: 70px;
  overflow: hidden;
  object-position: center;
  display: flex;
  justify-content: center;
}
.user_item_mail, .user_item_name {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
}
</style>
