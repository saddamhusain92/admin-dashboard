<template>
    <div  :class="hide.split('/').includes('v-admin')?'hide-footer':'flex mt-4 bg-gray-100 justify-between items-center px-3 h-[50px] bg-slate-400'">
<div class=" h-[50px]  w-full flex justify-center items-center">&copy; Vue JS Learning {{year}}</div>
    
   </div>
   </template>
     
     <script>
     export default {
       name: 'NavFooter',
       data(){
               return{
                   
                   hide:window.location.pathname,
                   year: new Date().getFullYear()
               }
             },
            
     }
     </script>
     
     <style scoped>
   
    .hide-footer{
     display: none;
   }
   
     </style>
     