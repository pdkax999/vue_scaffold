<template>
  <div>
    <h2>深入v-model</h2>
    <input type="text" :value="msg" @input="msg=$event.target.value">
    <span>{{msg}}</span>
    <br>

  <custom-input :value="msg" @input="msg=$event"/>
  
  <custom-input v-model="msg"/>
  <div style="height:30px">

  </div>
  <!-- <el-input :value="msg" @input="msg=$event"> </el-input> -->
  <!-- <el-input :value="msg" @input="msg=$event" :style="{width:'20%'}"> </el-input> -->
  <el-input  v-model="msg"> </el-input>
  </div>
</template>

<script type="text/ecmascript-6">
  import CustomInput from './CustomInput.vue'
  export default {
    name: 'ModelTest',
    components: {
      CustomInput
    },
    data(){

      return {
        msg:"不负此生"
      }
    },

  }
</script>
