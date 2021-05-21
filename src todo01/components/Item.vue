<template>
    <li :style="{backgroundColor:bgColor}"   @mouseenter="todoState(true)"  @mouseleave ="todoState(false)"> 
              <label>
                <input type="checkbox" v-model="todo.isCheck"/>
                <span>{{todo.title}}</span>
              </label>
          <button class="btn btn-danger" v-show="btnShow" @click.once="removeTodo">删除</button>
    </li>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      todo:Object
    },
    data(){
      return {
        bgColor:'#fff',
        btnShow:false
      }
    },
    methods:{
      removeTodo(){

        this.$bus.$emit('removeTodo',this.todo)

      },
      todoState(flay){

        
        if(flay){
          this.bgColor='gray',
          this.btnShow = true
        }else{

           this.bgColor='#fff',
           this.btnShow=false
        }
      }
    },
    watch:{

     'todo.isCheck'(value){
        
        this.$bus.$emit('updateTodo',{value,todo:this.todo})
       
     }
    }
  }
</script>

<style  scoped>
  
</style>


