<template>
   <div>
    <Header></Header>
    <div class="container">
      <Add></Add>
      <List ref="List"></List>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Add from './components/Add.vue'
import List from './components/List.vue'
export default {
  components: { 
      Header ,
      Add,
      List
  },
  mounted(){

    this.$refs.List.$emit('getComments',this.comments);

   /*  this.PubSub.subscribe('add',(msg,comment)=>{
          
       
       


    }) */

  },
  data(){
    return {

      comments:[
        {
          name:'老师',
          title:'react不是很难 ?',
          id: 1          
        },
        {
          name:'班长',
          title:'react很难 ?',
          id: 2     
        },
        {
          name:'我',
          title:'react努力就超级简单 ?',
          id: 3          
        }
      ]
      
    }

  },
  methods:{
  removeComment(comment){

   this.comments.splice(this.comments.indexOf(comment),1);

  },
  addComment(com){
     this.comments.unshift(com); 
  }
  }
}
</script>

<style scoped>

</style>
