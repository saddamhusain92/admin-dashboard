<template>
 <div  :class="hide.split('/').includes('v-admin')?'hide-nav':'flex bg-gray-100 justify-between items-center px-3 h-[50px] bg-slate-400'">
  <div class="font-bold text-vbase">
    &#60;Vue Js&#62;
  </div>
<div>
<ul class="list-none navLinnk sm:hidden">
<li><router-link to="/">Home</router-link></li>
<li><router-link to="/about">About</router-link></li>
<li><router-link to="/service">Services</router-link></li>
  </ul>

</div>
<div :class=" btn?'hide-btn':''">
<router-link to="/login"><button class="login-btn">Login</button></router-link>
</div>
<div :class=" btn?'flex justify-center items-center':'hide-btn'">
  <p>{{userName}}</p>
<button class="login-btn" v-on:click="naviGate()">Logout</button>
</div>


</div>
</template>
  
  <script>
  import authUser from '@/services/auth'
  import authControllers from '@/api/Authuser'
  import {profileName} from '@/Utils/index'
  import {useAuthStore} from '@/Stores/user'
  export default {
    name: 'NaviGation',
    setup(){
       const userStore = localStorage.getItem("userInfo")
       return useAuthStore().login(JSON.parse(userStore));
       
    },
    data(){
            return{
                authLabel:authUser()?"Logout":"Login",
                btn:authUser(),
                hide:window.location.pathname,
                userName:authUser()?profileName():""
            }
      },
      methods:{
        naviGate() {
          
            authControllers.logout()
        },
      }
         
  }
  </script>
  
  <style scoped>
 .navLinnk li{
  display:inline-block;
  padding: 10px 12px;
  text-transform: uppercase;
 }
 .hide-nav{
  display: none;
}
.hide-btn{
  display: none;
}
.login-btn{
    
  background-color:#48C9B0;
      color: aliceblue;
      margin: 10px;
      padding: 6px 10px;
}
  </style>
  