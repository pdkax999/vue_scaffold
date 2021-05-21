<template>
    <div class="todo-container">
      <div class="todo-wrap">
        <Header  @addTodos='addTodo'/>
        <List :todoList='todoList'/>
        <Footer @isCheckAll='checkAll' :todoList='todoList'/>
           <template slot='peiqi'>

              <span>吃了没</span>

            </template>
        </Footer>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import todoOperate from "./util/index";
    import Header from "./components/Header";
    import Footer from "./components/Footer";
    import List from "./components/List";

  export default {
    components:{
      Header,
      Footer,
      List 
    },

    beforeMount(){
      this.todoList = todoOperate.getTodo()
    },
    mounted(){
      console.log(this);
      
      this.$bus.$on('updateTodo',this.updateTodo)
      
      this.$bus.$on('removeTodo',this.removeTodo)

      this.$bus.$emit('getData',this.todoList)

    },
    data(){
      return {
        todoList:[
          /* {title:'吃饭',id:1,isCheck:true},
          {title:'睡觉',id:2,isCheck:false},
          {title:'打豆豆',id:3,isCheck:false}, */
        ]
      }
    },
    methods:{

      addTodo(todo){

        this.todoList.unshift(todo)

      },
      updateTodo(todo,isCheck){
        todo.isCheck = isCheck
      },
      removeTodo(todo){
        this.todoList.splice(this.todoList.indexOf(todo),1);
      },
      checkAll(val){

        this.todoList.forEach((todo)=>{

          todo.isCheck=val

        })

      },
      clearTodo(){

       this.todoList=this.todoList.filter((todo)=>{
          
           return !todo.isCheck
        })

      }
    },
    watch:{
     todoList:{

      deep:true,
      handler(val){

         todoOperate.setTodo(val);

      }

     }
    }
  }
</script>

<style scoped>

</style>
