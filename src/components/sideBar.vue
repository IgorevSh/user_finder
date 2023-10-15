<template>

  <div class="search_wrapper">
    <h4>Поиск сотрудников</h4>
    <input class="search_input" @input="filterUsers" placeholder="Введите ID или имя" v-model="searchField" />
    <p class="inner_error" v-if="userList?.error" >Внутренняя ошибка</p>
    <div v-else>
      <p class="search_result">Результаты</p>
      <p class="search_info" v-if="searchField?.trim()?.length==0">Начните поиск</p>
      <p class="search_info" v-if="filteredUsers?.length==0&&searchField?.trim()?.length>0&&!loader">Ничего не найдено</p>
      <div class="loader" v-if="loader&&searchField?.trim()?.length>0"></div>
    </div>
    <div class="search_user_list" v-if="filteredUsers?.length>0&&!loader">
      <user-item v-for="user in filteredUsers" :key="user.name" :user="user" />
    </div>
  </div>
</template>

<script>
import UserItem from "@/components/userItem";
import {mapGetters} from "vuex";
export default {
  name: "sideBar",
  components: { UserItem },
  data(){
    return{
      inputTimeout: null,
      searchField:'',
      filteredUsers:[],
      loader:false
    }
  },
  computed: {
    ...mapGetters(['userList'])
  },
  methods:{
    filterUsers(){
      this.loader=true;
      clearTimeout(this.inputTimeout);
      setTimeout(()=>{
      const filterValues=this.searchField?.toLowerCase()?.trim().replace(/(,|\s)/gi,'@').split('@');
      this.filteredUsers=this.userList.filter((user)=>{
        return filterValues.includes(user.name?.trim()?.toLowerCase())||filterValues.includes(String(user.id)?.trim())
      })
        this.loader=false;
      },1000);
    }
  },
};
</script>

<style scoped lang="scss">
.search_wrapper {
  width: 20%;
  padding: 20px;
  min-width: 260px;
  text-align: left;
}
.search_input {
  height: 10px;
  width: 200px;
  border-radius: 8px;
  padding: 16px;
  border: 2px solid #e9ecef;
  color: #76787d;
}
.search_result{
  color: #333;
  font-weight: 600;
  font-size: 16px
}
.inner_error{
  color: red;
  font-weight: 600;
  font-size: 16px
}
.search_info {
  color: #76787d;
  font-weight: 400;
  font-size: 14px;
}
.search_user_list{
  display: flex;
  overflow-y: auto;
  overflow-x:hidden;
  flex-direction: column;
  gap:10px;
  padding:10px;
  margin:0 -10px;
  height: calc(100% - 200px);
}
.loader {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 80px;

&:after {
  content: " ";
  display: block;
  width: 32px;
  height: 32px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #76787d;
  border-color: #76787d transparent #76787d transparent;
  animation: loader 1.2s linear infinite;
}

}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
