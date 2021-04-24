<template>
  <ul>
    <li>id:{{id}}</li>
    <li>title:{{detail.title}}</li>
    <li>content:{{detail.content}}</li>
   <!--  <li>{{name}}</li> -->
  </ul>
</template>

<script type="text/ecmascript-6">

   const allMessageDetils = [
    {id: 1, title: 'message001', content: 'message content001'},
    {id: 3, title: 'message003', content: 'message content003'},
    {id: 5, title: 'message005', content: 'message content005'},
  ]


  export default {
   props:['id','name'],
   data(){

     return {
       detail:{}
     }

   },
   mounted(){
     
     console.log('mounted');
     
    this.detail = allMessageDetils.find((mes)=>{

       return  this.id*1 === mes.id 
       
    })
    
   
   },
   watch:{
     '$route'(){

         this.detail = allMessageDetils.find((mes)=>{   //*为什么要加定时器

         return  this.id*1 === mes.id 
       
        })


     }
   }
  }
</script>

<style scoped>

 
</style>
