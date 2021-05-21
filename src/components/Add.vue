<template>
  <div class="col-md-4">
        <form class="form-horizontal">
          <div class="form-group">
            <label>用户名</label>
            <input type="text" class="form-control" placeholder="用户名" v-model="name">
          </div>
          <div class="form-group">
            <label>评论内容</label>
            <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button  type="button" class="btn btn-default pull-right" @click="addComment">提交</button>
            </div>
          </div>
        </form>
      </div>
</template>

<script>
export default {
    data(){
     return {
      content:'',
      name:'' 
     } 
    },
    methods:{
      addComment(){
        const {content,name} = this

        if(!content.trim() || !name.trim()){

          alert('输入不能为空')

          return 
        }
        console.log(name);
        
      
       let obj = {name,content,id:Date.now()}
 
        // this.PubSub.publish('add',obj);
         this.$parent.addComment(obj);
         this.content = ''
         this.name = '' 
      }
     
    }
}
</script>

<style scoped>

</style>

