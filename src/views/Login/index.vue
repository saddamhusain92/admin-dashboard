<template>
    <div class=" flex justify-center items-center h-[100vh]">
        <div class="login-wrapper w-[320px]">
           
            <div :class="error.length>0?'bg-red h-[50px] flex justify-center items-center text-light rounded-sm':''">{{error}}</div>
            <div :class="info.length>0?'bg-vbase h-[50px] flex justify-center items-center text-light rounded-sm':''">{{info}}</div>
            <div class="input-group border border-vbase">
                <input type="email" placeholder="Enter your Email" class="h-[35px] w-full px-2" v-model="body.email"/>
            </div>
            <div class="input-group border border-vbase my-4">
                <input type="password" placeholder="Enter your Email" class="h-[35px] w-full px-2" v-model="body.password" />
            </div>
            <button class="btn-login text-light px-4 py-2 bg-dark" v-on:click="naviGate">Login</button>

        </div>

    </div>
</template>
<script>
import authControllers from '../../api/Authuser'
import authUser from '@/services/auth'
import {useAuthStore} from '@/Stores/user'
export default {
    name: 'Login',
    data() {
        return {
           formVail:{
            error:""
           },
           info:"",
           error:"",
           body:{
            email:"",
            password:""
           }
        }
    },
    methods: {
      naviGate() { 
            authControllers.login(this.body).then((res)=>{
                if(res.data.status==200){
                    // this.$router.push({name:"Dashboard"})
                    window.location.href='/v-admin'
                    this.error=""
                    this.info = "You are successfully logged in"
                    const userStore = localStorage.setItem('userInfo',JSON.stringify(res.data.user))
                    useAuthStore().login(JSON.parse(userStore));
                    // console.log("You are successfully logged in");
                }
                else{
                   this.error="loggin failed"
                   
                };
            })
        }
    },
    mounted(){
      
        if(authUser()){
            window.location.href="/v-admin"
        // this.$router.push({name:"Dashboard"})
        }
        else{
            console.log("false");
        }
    }
}
</script>
<style>

</style>