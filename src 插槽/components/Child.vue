<template>
  <div>
      <h2>Vue真好</h2>
      <slot>
          <p>我是默认插槽中的  如果父组件中传递 则会被覆盖 如果没有传 会使用</p>
      </slot>
      <slot name="XXX"></slot>
      <slot name="YYY">
          <ul>
              <li>我是子组件中数据</li>
              <li>我是子组件中数据</li>
          </ul>
      </slot>
  </div>
</template>

<script>
export default {
  name: '',
}
</script>

<style scoped>

</style>
