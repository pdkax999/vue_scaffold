<template>
   <ul class="todo-main">
    <Item v-for="(todo,index) in todoList" :key="todo.id" :todo='todo'/>
   </ul>
</template>

<script type="text/ecmascript-6">
  import Item from "./Item.vue";
  export default {
    components:{
      Item
    },
    props:{
      todoList:Array
    }
  }
</script>

<style scoped>

 
</style>
