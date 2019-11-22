<template>
  <div class="j-c clearfix">
      <div class="j-bill">
          <div class="j-hd2">
              <i class="cir"></i>
              <router-link to="" class="tit">榜单</router-link>
              <span class="more">
                  <router-link to="" class="j-f3">更多</router-link>
                  <i class="cor"></i>
              </span>
          </div>
          <div class="j-bilst">
              <!-- 1 -->
              <dl class="j-blk">
                  <dt class="j-top">
                      <div class="cver">
                          <router-link to=""><img class="j-img" src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" alt=""></router-link>
                      </div>

                    <div class="j-tit">
                        <router-link to = "">
                            <h3 class="j-fs">音乐飙升榜</h3>
                        </router-link>

                        <div class="j-btn">
                            <a class="j-bg j-bo j-posi" href="javascript:;"></a>
                            <a class="j-bg j-bo j-300" href="javascript:;"></a>
                        </div>

                    </div>

                  </dt>

                    <dd>
                        <ol class="">
                            <li class="clearfix" v-for="(item,index) in list" :key="index">
                                <span class="no" :class="{'no-top':item.num<=3}">{{item.num}}</span>
                                <a class="nm j-thired" href="javascript:;">{{item.item}}</a>
                                <div class="oper">

                                </div>
                            </li>
                        </ol>
                        <div class="j-more"> 
                            <router-link to="" class="all">查看全部></router-link>
                        </div>
                    </dd>

              </dl>
              <!-- 2 -->
               <dl class="j-blk">
                  <dt class="j-top">
                      <div class="cver">
                          <router-link to=""><img class="j-img" src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" alt=""></router-link>
                      </div>

                    <div class="j-tit">
                        <router-link to = "">
                            <h3 class="j-fs">音乐飙升榜</h3>
                        </router-link>

                        <div class="j-btn">
                            <a class="j-bg j-bo j-posi" href="javascript:;"></a>
                            <a class="j-bg j-bo j-300" href="javascript:;"></a>
                        </div>

                    </div>

                  </dt>

                    <dd>
                        <ol class="">
                            <li class="clearfix" v-for="(item,index) in list" :key="index">
                                <span class="no" :class="{'no-top':item.num<=3}">{{item.num}}</span>
                                <a class="nm j-thired" href="javascript:;">{{item.item}}</a>
                                <div class="oper">

                                </div>
                            </li>
                        </ol>
                        <div class="j-more"> 
                            <router-link to="" class="all">查看全部></router-link>
                        </div>
                    </dd>
               </dl>
                <!-- 3 -->
               <dl class="j-blk">
                  <dt class="j-top">
                      <div class="cver">
                          <router-link to=""><img class="j-img" src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" alt=""></router-link>
                      </div>

                    <div class="j-tit">
                        <router-link to = "">
                            <h3 class="j-fs">音乐飙升榜</h3>
                        </router-link>

                        <div class="j-btn">
                            <a class="j-bg j-bo j-posi" href="javascript:;"></a>
                            <a class="j-bg j-bo j-300" href="javascript:;"></a>
                        </div>

                    </div>

                  </dt>

                    <dd>
                        <ol class="">
                            <li class="clearfix" v-for="(item,index) in list" :key="index">
                                <span class="no" :class="{'no-top':item.num<=3}">{{item.num}}</span>
                                <a class="nm j-thired" href="javascript:;">{{item.item}}</a>
                                <div class="oper">

                                </div>
                            </li>
                        </ol>
                        <div class="j-more"> 
                            <router-link to="" class="all">查看全部></router-link>
                        </div>
                    </dd>
              </dl>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
               {num:1,item:"没有理由"},
               {num:2,item:"没有理由"},
               {num:3,item:"没有理由"},
               {num:4,item:"没有理由"},
               {num:5,item:"没有理由"},
               {num:6,item:"没有理由"},
               {num:7,item:"没有理由"},
               {num:8,item:"没有理由"},
               {num:9,item:"没有理由"},
               {num:10,item:"没有理由"}
            ]
        }
    }
}
</script>

<style scoped>

.no{
    float: left;
    position: relative;
    width: 35px;
    height: 32px;
    margin-left: -35px;
    text-align: center;
    color: #666;
    font-size: 16px;
}
.no-top{
    color: #c10d0c;
}
.nm{
    float: left;
    width: 170px;
    height: 32px;
}
.j-bilst ol{
    height: 319px;
    margin-left: 50px;
    line-height: 32px;
}
.j-bilst ol li{
        vertical-align: middle;
        font-size: 12px;
}
.j-bilst ol li a{
    color:#666;
}

.j-thired{
        overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}

.j-bg{
    background: url(https://s2.music.126.net/style/web2/img/index/index.png?0d0cc259ea53b5308353f86844a84cb6) no-repeat;
}
.j-btn{
    margin-top: 10px;
}
.j-bo{
    display: block;
    float: left;
    width: 22px;
    height: 22px;
    margin-right: 10px;
}

.j-posi{
    background-position: -267px -205px;
}
.j-300{
    background-position: -300px -205px;
}
.j-fs{
    width: 100%;
        overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    font-size: 14px;
    font-weight: normal;
}
.j-tit{
        float: left;
    width: 116px;
    margin: 6px 0 0 10px;
}
.j-img{
    display: block;
    width: 100%;
    height: 100%;
}
.cver{
    width: 80px;
    height: 80px;
    float: left;

}
.j-top{
    height: 100px;
    padding: 20px 0 0 19px;
}
.j-blk{
        float: left;
    width: 230px;
}
.j-bilst{
        height: 472px;
    margin-top: 20px;
    padding-left: 1px;
    background: url(https://s2.music.126.net/style/web2/img/index/index_bill.png?e0715bd99ccac892a9dc628a2f01952d) no-repeat;
}

.j-more{
        clear: both;
    height: 32px;
    margin-right: 32px;
    text-align: right;
    line-height: 32px;
}

.all{
    color: #000000;
    font-size: 12px;
}







.cir{
    float: left;
    width: 34px;
    height: 33px;

background: url(https://s2.music.126.net/style/web2/img/index/index.png?3c31c66f8398f2c8cabbd218cf3df8df) no-repeat ;
background-position: -225px -156px;
}
.cor{
        display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    vertical-align: middle;
     background: url(https://s2.music.126.net/style/web2/img/index/index.png?3c31c66f8398f2c8cabbd218cf3df8df) no-repeat;
    background-position: -1px -240px;
   
}
.j-f3{
    color: #666666;
    font-size: 12px;
}
.more{
    float: right;
    margin-top: 9px;
}
.j-c{
    float: left;
    width: 729px;
    padding: 20px 20px 40px;
}
.j-bill{
width: 100%;
}
.j-hd2{
    height: 33px;
    padding: 0 10px 0 0;
    border-bottom: 2px solid #C10D0C;
    
}
.tit{
        float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
    color: #000000;
}
</style>