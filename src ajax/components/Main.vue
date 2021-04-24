<template>
  <div>
    <h2 v-if="firstView">请输入关键字进行搜索</h2>
    <h2 v-else-if="loading">正在请求中......</h2>
    <h2 v-else-if="errorMsg">{{errorMsg}}</h2>
    <div class="row" v-else>
      <div class="card" v-for="(user, index) in users" :key="user.username">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.username}}</p>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'

export default {
    data () {
      return {
        firstView:true,
        loading:false,
        errorMsg: '',
        users:[]
      }
    },

    mounted () {

      this.$eventBus.$on('search',async (data)=>{

          this.firstView=false
          this.loading = true

          
          try{

          let  response = await axios.get('/api/search/users',{
              params:{
                q:data 
              }
            })
          let items = response.data.items

          let result = items.map((item)=>{

            return {
              username:item.login,
              url:item.html_url,
              avatar_url:item.avatar_url,
            }
          })
          this.loading=false
          this.users=result

          }catch(error){

          this.loading=false
          this.errorMsg=error.message

          }
      })

      
    },

    beforeDestroy () {
      this.$eventBus.$off('search')
    }
  }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
