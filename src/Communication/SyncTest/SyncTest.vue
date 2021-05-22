<template>
  <div>
    小明的爸爸现在有{{money}}元    
    <h2>不使用sync修改符</h2>
    <Child :money='money' @update:money="money=$event"/>
    <h2>使用sync修改符</h2>
     <Child :money.sync='money'/>
    <h2>使用v-model修改符</h2>
    <Child2 v-model="money"></Child2>
    
    <hr>
  
   <el-button type="primary" @click="test">吃了吗</el-button>
   <el-button type="primary" @dblclick.native="test">没吃</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import Child from './Child.vue'
  import Child2 from './Child2.vue'
  export default {
    name: 'SyncTest',
    components: {
      Child,
      Child2
    },
     data(){
      return {
        money:1000
      }
    },
    methods:{
      test(){

        alert(1)

      }
    }
  }
</script>
