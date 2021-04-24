<template>
  
 <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>React Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a class="list-group-item" href="./about.html">About</a>
          <a class="list-group-item active" href="./home.html">Home</a> -->
          <router-link class="list-group-item" to='/about'>About</router-link>
          <router-link class="list-group-item" to='/home'>Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">

             <keep-alive>
              <router-view></router-view>
              </keep-alive>

          </div>
        </div>
      </div>
    </div>
  </div>
 
 
</template>

<script type="text/ecmascript-6">
  export default {
  }
  
</script>

<style scoped>

 
</style>
