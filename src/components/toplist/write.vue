<template>
  <div>
      <div class="n-cmt">
          <div>
              <div class="u-title u-title-1">
                  <h3>
                      <span >评论</span>
                  </h3>
                  <span class="sub">共 123 条评论</span>
              </div>

              <div class="m-cmmt">
                  <div class="iptarea">
                      <div class="head">
                          <img src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50" alt="">
                      </div>
                      <div>
                          <div class="m-cmmtipt f-cb f-pr">
                              <div class="u-txtwrap holder-parent f-pr">
                                  <textarea class="u-txt area j-flag" name="" id="" cols="30" rows="10" v-model="msg"></textarea >
                              </div>
                              <div class="btn"><button @click="send">评论</button></div>
                          </div>
                      </div>
                  </div>

                <div >
                    <h3 class="u-hd4">最新评论({{list.length}})</h3>
                    <div class="itm" v-for="(item,index) in list" :key="index">
                        <div class="head">
                            <router-link to="">
                                <img src="https://p1.music.126.net/4RBI9mBfkQJt1SSdzIDAQQ==/109951163951944468.jpg?param=50y50" alt="">
                            </router-link>
                        </div>
                        <div class="cntwrap" >
                            <div>
                                <div class="cnt f-brk">
                                    <router-link to="">
                                        用户1778642212
                                    </router-link>
                                   : {{item.a}}
                                </div>
                            </div>

                            <div class="rp">
                                <div class="time s-fc4">24分钟前</div>

                            </div>
                        </div>
                    </div>
                </div>

              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        msg:"",
        list:[]
    }
},
methods: {
    send(){
        this.list.push({
            a:this.msg
        })
    }
},
}
</script>

<style scoped>
.n-cmt{
    margin-top: 40px;
}
.u-title-1 {
    height: 33px;
}
.u-title {
    height: 40px;
    border-bottom: 2px solid #c20c0c;
}
.u-title-1 h3 {
    font-size: 20px;
    line-height: 28px;
}
.u-title h3 {
    float: left;
    font-size: 24px;
    font-weight: normal;
}
.u-title-1 .sub {
    margin: 9px 0 0 20px;
}

.u-title .sub {
    float: left;
    margin: 13px 0 0 10px;
}
.s-fc3, a.s-fc3:hover {
    color: #666;
}
.m-cmmt {
    margin-top: 20px;
}
.m-cmmt .iptarea {
    margin-bottom: 20px;
}
.m-cmmt .head, .m-cmmt .head img {
    float: left;
    width: 50px;
    height: 50px;
    margin-right: -100px;
}
.m-cmmt .iptarea .m-cmmtipt {
    margin-left: 62px;
}
.f-pr {
    position: relative;
    zoom: 1;
}
div.holder-parent {
    position: relative;
    zoom: 1;
}

.u-txtwrap {
    padding-right: 14px;
}
.m-cmmtipt .area {
    height: 50px;
    display: block;
}

textarea.u-txt, div.u-txt {
    width: 100%;
    margin-right: -20px;
}
.u-txt {
    height: 19px;
    margin: 0;
    padding: 5px 6px 6px;
    border: 1px solid #cdcdcd;
    border-radius: 2px;
    line-height: 19px;
}
textarea {
    resize: none;
    overflow: auto;
}
.btn{
    margin-top: 10px;
}
.btn button{
    float: right;
        width: 46px;
    height: 25px;
    color: #fff;
    text-align: center;
    line-height: 25px;
    background:rgb(5, 47, 138);
    border: none;
    outline: none;
}
.u-hd4 {
    position: relative;
    top: 1px;
    height: 20px;
    border-bottom: 1px solid #cfcfcf;
}
.m-cmmt  .itm {
    padding: 15px 0;
    border-top: 1px dotted #ccc;
}
.m-cmmt .head, .m-cmmt .head img {
    float: left;
    width: 50px;
    height: 50px;
    margin-right: -100px;
}
.cntwrap{
    margin-left: 60px;
}
.m-cmmt  .cnt {
    width: 100%;
    overflow: hidden;
    line-height: 20px;
}
.f-brk {
    word-wrap: break-word;
    word-break: break-word;
    white-space: normal;
}
.m-cmmt  div.rp {
    margin-top: 15px;
    text-align: right;
}
.m-cmmt  .time {
    float: left;
    margin: 0 !important;
}

.s-fc4, a.s-fc4:hover {
    color: #999;
}
</style>