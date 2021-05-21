<template>
   <div class="todo-footer">
        <label>
          <input type="checkbox" v-model="isCheckAll"/>
        </label>
        <span>
          <span>已完成{{done}}</span> / {{todoList.length}}全部
        </span>
        <button class="btn btn-danger" v-show="done" @click="clearTodo">清除已完成任务</button>
       
      </div>
</template>

<script type="text/ecmascript-6">
  export default {
    // created(){

    //   this.$bus.$on('getData',(data)=>{

    //       this.todoList =data

    //   })
      

    // },
    computed:{

      done(){
        const {todoList} = this  
          
          console.log('1');
          

         return todoList.reduce((pre,todo)=> todo.isCheck===true ? pre+1 : pre+0,0)
      },
      isCheckAll:{
         
         get(){
            const {todoList} = this 
         
        return todoList.reduce((pre,todo)=>todo.isCheck===true ? pre+1 : pre+0,0) === this.todoList.length&& this.todoList.length>0
         ? true : false
         },

        set(val){

          this.$parent.checkAll(val)

        }
      },

    },
    methods:{
      clearTodo(){

        this.$parent.clearTodo()

      }

    },
    props:{
      todoList:Array
    }
  }
</script>

<style scoped>

 
</style>
