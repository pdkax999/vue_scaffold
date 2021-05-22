<template>
  <div style="background: #ccc; height: 80px;">
    <h2 @click="$emit('click','吃了没?')">Event1组件</h2>
    <span>其它内容</span>
  </div>
</template>
