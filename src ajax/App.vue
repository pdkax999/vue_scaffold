<template>
   <div>
    <Search/>
    <Main/>
  </div>
</template>

<script type="text/ecmascript-6">
import Main from "./components/Main.vue";
import Search from "./components/Search.vue";

  export default {
    data(){

      return {
        url:'',
        name:''
      }

    },
    components:{
      Main,
      Search

    },
  }
</script>

<style scoped>

 
</style>
