<template>
  <div>
    <ul>
    <li v-for="m in messages" :key="m.id">      
    <router-link :to='{name:"detail",params:{id:m.id}}'> {{m.title}}</router-link>
    <button @click="pushShow(m.id)">push查看</button>
    <button @click="replaceShow(m.id)">replace查看</button>
    </li>
  </ul>
  <button @click="$router.back()">返回</button>
  <hr/>
  <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
    
      return {
        messages:[]
         
         
      }

        
    },
    mounted(){

      setTimeout(() => {

      this.messages = [
            {id:1,title:'messages01'},
            {id:3,title:'messages03'},
            {id:5,title:'messages05'}
        ] 
        

    }, 1000);

    },
    methods:{
    
     pushShow(id){
       
      /*  this.$router.push({name:"detail",params:{id:id}}) */
      this.$router.push(`/home/message/detail/${id}`)

     },
     replaceShow(id){

       this.$router.replace({name:"detail",params:{id:id}}) 

     }
     
    },
    
  
  }
</script>

<style scoped>

 
</style>
