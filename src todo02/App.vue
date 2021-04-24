<template>
   <div class="todo-container">
    <div class="todo-wrap">
      <Header  ref='header'/>
      <!-- <Header @addTodos='addTodos'/> -->
      <List :todos="todos" />
      <Footer :todos='todos' :clearTodos='clearTodos' :ischeckall='ischeckall'/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getTodos,setTodos} from "./utils/storageUtils";
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  import List from "./components/List";

  export default {

    components:{
      Header,
      Footer,
      List 

    },
    data(){
      return {
        todos:[
        ]
      }

    },
    mounted(){

     setTimeout(() => {

        this.todos = getTodos()

     }, 1000);
    
      this.$refs.header.$on('addTodos',this.addTodos)

      this.$globalEventBus.$on('updateTodo',this.updateTodo);

      this.$globalEventBus.$on('removeTodo',this.removeTodo);

    
    },
    methods:{
     addTodos(todo){

      
       this.todos.unshift(todo)

     },
     updateTodo({todo,value}){

       todo.isCheck = value

     },
     removeTodo(index){

       this.todos.splice(index,1)

     },
     clearTodos(){

      this.todos = this.todos.filter((todo)=>{
         
          return !todo.isCheck 
       })
      

     },
     ischeckall(value){

        this.todos.forEach((todo)=> todo.isCheck = value)
     }
    },
    beforeDestroy(){

        this.$refs.header.$off('addTodos')

      this.$globalEventBus.$off('updateTodo');

      this.$globalEventBus.$off('removeTodo');


    },
    watch:{
     todos:{
       deep:true,
       handler:(todos)=>{

         
         setTodos(todos)
          

       }
     }

    }
  }
</script>

<style scoped>

 
</style>
