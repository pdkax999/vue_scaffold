<template>
  
<div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter='addTodo'/>
</div>
 
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
     addTodos:Function
    },
    data(){
        
      return {
        title:''
      }  

    },
    methods:{
      addTodo(){

        const {title} = this 
         
        if(!title.trim()){

          alert('输入不能为空');

        } 

        let todo = {
          title,
          id:Date.now(),
          isCheck:false
        }

        // this.addTodos(todo);
        this.$emit('addTodos',todo);

        this.title = ''
         
      }
    }
  }
</script>

<style lang="stylus" rel="scoped">

 
</style>
