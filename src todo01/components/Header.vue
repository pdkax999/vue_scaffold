<template> 

  <div class="todo-header">
      <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keydown.enter="addTodo"/>
  </div>
  
</template>

<script type="text/ecmascript-6">
  //子向父通信自定义事件
  export default {
  methods:{
  addTodo(){

    const {title} = this

      if(!title.trim()){

         alert('输入不能为空')

      }

    let todo={
      title,
      id:Date.now(),
      isCheck:false

    };
    this.$emit('addTodos',todo);
    this.title=''
  }
  },
  data(){
     return {
       title:''
     }
  }
  }
</script>

<style lang="stylus" rel="scoped">

 
</style>
