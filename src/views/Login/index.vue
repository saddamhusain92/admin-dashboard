<template>
    <div class=" flex justify-center items-center h-[100vh]">
        <div class="login-wrapper w-[320px]">
            <small class="text-red">{{error}}</small>
            <small class="text-vbase">{{info}}</small>
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
export default {
    name: 'Login',
    data() {
        return {
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
                    localStorage.setItem('userInfo',JSON.stringify(res.data.user))
                   // this.$router.push({name:"Dashboard"})
                    window.location.href='/v-admin'
                    this.error=""
                    this.info = "You are successfully logged in"
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