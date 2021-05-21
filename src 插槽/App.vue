
<template>
<div>

 <Child>
  <template>
    <p>不付此生</p>
  </template>
 </Child>  
 
  <Child>
    <template slot="XXX">
      <span>{{msg}}</span>
    </template>
    <template slot="YYY">
      <span>我</span>
    </template>
  </Child>

</div>
  
</template>

<script>

import Child from './components/Child.vue'
export default {
  name: '',
  components:{
    Child
    
  },
  data(){
    return {
      msg:'你好'
    }
  }
}
</script>

<style scoped>

</style>
