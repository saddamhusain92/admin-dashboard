<template  >
    <div class="dashboard-wrapper">
        <div class="flex relative">
            <!-- slider -->
            <div :class="hide?'hide-section':'md:w-1/5 sm:4/10 relative h-[100vh] bg-base'">
                <div class="text-light flex h-[50px] border-b-2  items-center justify-center">
                    Admin Dashboard
                </div>

                <div>
                    <ul>
                        <li class="navLink">

                            <router-link to="/v-admin/home" class="flex text-light">
                                <font-awesome-icon icon="fa-solid fa-house" class="mt-1 h-4 px-2" /> Dashboard
                            </router-link>


                        </li>
                        <li class="navLink">

                            <router-link to="/v-admin/chart" class="flex text-light">
                                <font-awesome-icon icon="fa-solid fa-chart-column" class="mt-1 h-4 px-2" /> Charts
                            </router-link>


                        </li>
                        <li class="navLink">

                            <router-link to="/v-admin/forms" class="flex text-light">
                                <font-awesome-icon icon="fa-solid fa-message" class="mt-1 h-4 px-2" /> Forms
                            </router-link>


                        </li>
                        <li class="navLink">

                            <router-link to="/v-admin/email" class="flex text-light">
                                <font-awesome-icon icon="fa-solid fa-envelope" class="mt-1 h-4 px-2" /> Email
                            </router-link>


                        </li>
                        <li class="navLink">

                            <router-link to="/v-admin/profile" class="flex text-light">

                                <font-awesome-icon icon="fa-solid fa-user" class="mt-1 h-4 px-2" /> Profile
                            </router-link>


                        </li>
                        <li class="navLink">

                            <router-link to="/v-admin/setting" class="flex my-  text-light">
                                <font-awesome-icon icon="fa-solid fa-gear" class="mt-1 h-4 px-2" /> Setting
                            </router-link>


                        </li>
                    </ul>
                </div>
                <div class="divider border-b border-dashed border-light h-2">

                </div>
                <div class="absolute bottom-0 h-[50px] cursor-pointer flex items-center justify-center w-full ">
                    <p class="text-danger" v-on:click="naviGate">Logout</p>
                </div>

            </div>


            <div class="main-section relative w-full h-[100vh]">
                <nav class="flex justify-between items-center px-3 h-[50px] bg-vbase">
                    <div>
                        <font-awesome-icon :icon="hide?'fa-solid fa-xmark':'fa-solid fa-bars'" v-on:click="toggle" />
                    </div>
                    <div class="flex items-center">
                        <p class="px-3">{{userName}}</p>
                        <div class="h-[40px]  w-[40px] ">
                        <img :src="avatar" class="h-[40px] rounded-full" alt="">
                    </div>
                    </div>
                    
                </nav>
                <div class="main-content-section p-4">
                    <router-view></router-view>
                </div>
                <div class="footer h-[50px] text-vbase justify-center bg-base flex items-center">Footer</div>
            </div>
        </div>
    </div>
</template>
<script >
import authControllers from '../api/Authuser'
import authUser from '@/services/auth'
import {profileName} from '@/Utils/index'
import {profileAvatar} from '@/Utils/index'
import {useAuthStore} from '@/Stores/user'

export default {
    name: 'Dashboard',
    setup(){
       const userStore = localStorage.getItem("userInfo")
       return useAuthStore().login(JSON.parse(userStore));
       
    },
    data() {
        return {
            hide: false,
            userName:profileName(),
            avatar:profileAvatar()
        }
    },
    methods: {
        naviGate() {
            authControllers.logout()
        },
        toggle() {
            this.hide = !this.hide
        }

    },
    mounted(){
      
      if(authUser()){
          
      // this.$router.push({name:"Dashboard"})
      }
      else{  
        this.$router.push({name:"Home"})
      }
  }}

</script>
<style>
.hide-section {
    display: none;
}

.main-section {
    overflow-y: scroll;
    min-height: 100vh;
}
.navLink a {
    margin-top: 5px;
    padding-left: 34px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    height: 40px;
    border-left: 6px solid #1e293b;


}

.navLink .router-link-active {
    border-left: 6px solid rgb(22, 142, 114);
}
</style>