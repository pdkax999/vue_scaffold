<template>
   <div class="todo-footer">
        <label>
          <input type="checkbox" v-model="ischeckboxAll"/>
        </label>
        <span>
          <span>已完成{{todoNum}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" v-if="isClear" @click="clearTodos">清除已完成任务</button>
      </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['todos','clearTodos','ischeckall'],
    computed:{
      todoNum(){

        return  this.todos.reduce((pre,todo)=> todo.isCheck ? pre+1 : pre+0,0)
      },
      isClear(){

        return  this.todos.reduce((pre,todo)=> todo.isCheck ? pre+1 : pre+0,0)>0
      },
      ischeckboxAll:{

        get(){
                 console.log( this.todoNum , this.length);
                 
          return   this.todoNum == this.todos.length && this.todoNum>0
        },
        set(value){
          
          this.ischeckall(value)

        }

      }

    },
  }
</script>

<style scoped>

 
</style>
