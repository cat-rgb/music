<template>
  <div id="left">
      <div class="top" v-for = "(i,index) in bang" :key="index">
          <h2>{{i.title}}</h2>
          <ul class="fcb">
              <li :class="[{mine:true},{selected:index==0}]" v-for="(item,index) in i.list" :key="index"   >
                  <div class="item">
                      <div class="left">
                          <router-link class="avatar" :to="{path:'/discover/toplist',query:{id:item.id}}">
                          <img :src="item.img" alt="">
                      </router-link>
                      </div>
                      
                      <p class="name">
                          <router-link to="">
                              {{item.name}}
                          </router-link>
                      </p>
                      <p class="s-fc4">{{item.update}}</p>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            bang:""
        }
    },
    methods: {
        bg(){
            this.refs.a.style.background="#e6e6e6"
        }
    },
mounted() {
    this.$axios({
        url:"../../../static/json/toplist.json",
        method:"get",
        params:{},
    }).then((res)=>{
        this.bang = res.data[0].bang
    })
    .catch((err)=>{
        throw err
    })
},
}
</script>                             

<style scoped>
*{
    font-size: 12px;
}
#left{
    float: left;
    width: 240px;
}
.top{
    padding-top:40px;
}
.top>h2{
        padding: 0 10px 12px 15px;
    font-size: 14px;
    color: #000;
    font-weight: normal;
}
.scd{
    margin-top: 20px;
}
.fgb *{
    cursor: pointer;
    vertical-align: middle;
}
.mine{
    position: relative;
    height: 42px;
    padding: 10px 0 10px 20px;
}
.mine:hover{
    background: #f4f2f2;
}
.selected{
    background: #e6e6e6;
}
.item{
    padding-left: 50px;
}
.left{
    float: left;
    margin-left: -50px;
    overflow: hidden;
    width: 40px;
}
.avatar{
        display: block;
      
    position: relative;
    width: 40px;
    height: 40px;
}
.name{
        width: 150px;
    overflow: hidden;
    margin-top: 2px;
    margin-bottom: 8px;
}
.name a{
    white-space: nowrap;
    color: #000;
    font-size: 12px;
}
.s-fc4{
    color: #999;
}
</style>