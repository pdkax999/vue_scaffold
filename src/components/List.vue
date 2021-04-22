<template>
   <ul class="todo-main">
      <Item v-for="(todo,index) in todos" :key="todo.id" :todo='todo' :updateTodo='updateTodo' :removeTodo='removeTodo' :index='index'/>     
   </ul>
</template>

<script type="text/ecmascript-6">
import  Item from "./item.vue";
  export default {
    props:['todos','updateTodo','removeTodo'],
    components:{
      Item 

    }

   

  }
</script>

<style scoped>

 
</style>
