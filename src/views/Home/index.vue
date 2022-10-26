<template>
    <div class="home-wrapper">
        <div class=" h-[100vh] grid 2xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-2 gap-2 sm:grid-cols-2 px-4">
  <div class="h-auto flex justify-center items-center">
    <div class="banner-body px-4">
        <p class="text-4xl">Vue JS Learning with <br> Dashboard first Project</p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum unde voluptatibus rem omnis magnam quos alias, vero quod! Veniam ducimus molestias fugiat, quod nemo amet inventore! Sed eum repellendus ex.
    </p>
  <div class="btn-group">
    <button class="btn">More Info</button><button class="btn">Contact US</button>
  
  </div>
    </div>


  </div>
  <div>
    <img src="../../assets/image/97525-code-dark.gif" class="h-[500px]" />
  </div>

</div>
    </div>
    </template>
    <script>
  
    export default {
        name:'Home',
        data(){
          return {
          
          }
        },
       
    }
    </script>
    <style scoped>
    
    .btn-group .btn:nth-child(1){
      
        background-color: black;
        color: aliceblue;
        margin: 10px;
        padding: 8px 10px;
    
    }
    .btn-group .btn:nth-child(2){
      
      background-color:#48C9B0;
      color: aliceblue;
      margin: 10px;
      padding: 8px 10px;
  
  }
    </style>