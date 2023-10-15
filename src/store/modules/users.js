 import axios from 'axios'
 export default {
 state:{
    userList: [],
    currentUser: null,
},

getters : {
    userList(state){
        return state.userList
    },
    currentUser(state){
        return state.currentUser
    }
},

actions:{
   async getUserList({commit}) {
       try {
           const userFields = await axios.get('https://jsonplaceholder.typicode.com/users');
           commit('updateUserList', userFields?.data);
       }catch (e) {
          console.log(e);
           commit('updateUserList',{error:e});
       }
   },
    async setCurrentUser({commit},user) {
        commit('setCurrentUser',user);
    },
},

mutations:{
    async updateUserList( state,list ) {
       state.userList=list
    },
    async setCurrentUser( state,user ) {
        state.currentUser=user
    }
}

}
