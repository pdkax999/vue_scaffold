<template>
    <li :style="{backgroundColor: bgColor}" @mouseenter="todoState(true)"  @mouseleave ="todoState(false)">
          <label>
            <input type="checkbox" v-model="isOption"/>
            <span>{{todo.title}}</span>
          </label>
          <button class="btn btn-danger" v-if="isShow" @click="isRemove(index)">删除</button>
    </li>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      todo:Object,
      index:Number
     
    },
    data(){

      return {
        bgColor:'#fff',
        isShow: false
      } 

    },
    computed:{
     isOption:{

       get(){

         return  this.todo.isCheck
       },
       set(value){

         this.$globalEventBus.$emit('updateTodo',{todo:this.todo,value})
         
       }
     }
    },
    methods:{
      todoState(isEnter){
        
        
        if(isEnter){

          this.bgColor = 'grey'
          this.isShow = true

        }else{

           this.bgColor = '#fff'
           this.isShow = false

        }
        

        
      },
       isRemove(index){

       if(confirm('你确定要删除吗')){

         this.$globalEventBus.$emit('removeTodo',index);

       }
        

      }  

    },
    
  }
</script>

<style  scoped>

</style>


