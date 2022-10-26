<template>
<NaviGation/>

<router-view></router-view>
<NavFooter/>
</template>

<script>
import NaviGation from './components/Navigation/index.vue'
import NavFooter from './components/Footer/index.vue'
import {envData} from '@/Utils/index'


export default {
  name: 'App',
  components:{
    NaviGation,
    NavFooter
  },
  data(){
 return{
  edata:envData()
 
 }
  },
  methods:{}

}
</script>
<style>


</style>