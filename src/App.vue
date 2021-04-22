<template>
   <div class="todo-container">
    <div class="todo-wrap">
      <Header  :addTodos='addTodos' />
      <List :todos="todos" :updateTodo='updateTodo' :removeTodo='removeTodo' />
      <Footer :todos='todos' :clearTodos='clearTodos' :ischeckall='ischeckall'/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
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
          {title:'吃饭',id:1,isCheck:false},
          {title:'睡觉',id:2,isCheck:false},
          {title:'打豆豆',id:3,isCheck:false},
        ]


      }

    },
    methods:{
     addTodos(todo){

        console.log(todo);
        
       this.todos.unshift(todo)

     },
     updateTodo(todo,value){

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
    }
  }
</script>

<style scoped>

 
</style>
