<template>
  <div style="background: #ccc; height: 50px;">
     <h2>input包装组件</h2>
        <input type="text" :value="value" @input="$emit('input',$event.target.value)">
        <!-- <span @input="$emit('in')">{{value}}</span> -->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'CustomInput',
    props:['value']
  }
</script>
