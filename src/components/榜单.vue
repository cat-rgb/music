<template>
  <div class="content">
    <div class="bg">
      <div class="title">
        <div class="left">
          <span class="d-flag">全部</span>
          <a class="a" href="javascript:;" @click="toggle">
            <i>
              选择分类
              <em class="icon"></em>
            </i>
          </a>
        </div>
        <a class="right">热门</a>
      </div>
      <div class="check" v-show="show">
        <div class="hd">
          <div class="jiao"></div>
        </div>
        <div class="bd">
          <h3 class="h3">
            <a href class="btn">
              <em>全部风格</em>
            </a>
          </h3>
          <dl class="dl">
            <dt>
              <i class="u-icn"></i>语种
            </dt>
            <dd>
              <router-link class="lange" :to="{path:  './dan', query:{cat:'华语'}}">华语</router-link>
              <span class="line">|</span>
              <router-link class="lange" :to="{path:  './dan', query:{cat:'欧美'}}">欧美</router-link>
              <span class="line">|</span>
              <a class="lange" href>日语</a>
              <span class="line">|</span>
              <a class="lange" href>韩语</a>
              <span class="line">|</span>
              <a class="lange" href>粤语</a>
              <span class="line">|</span>
            </dd>
          </dl>
          <dl class="dl">
            <dt>
              <i class="u-icn"></i>风格
            </dt>
            <dd>
              <a class="lange" href>流行</a>
              <span class="line">|</span>
              <a class="lange" href>摇滚</a>
              <span class="line">|</span>
              <a class="lange" href>民谣</a>
              <span class="line">|</span>
              <a class="lange" href>电子</a>
              <span class="line">|</span>
              <a class="lange" href>舞曲</a>
              <span class="line">|</span>
              <a class="lange" href>说唱</a>
              <span class="line">|</span>
              <a class="lange" href>轻音乐</a>
              <span class="line">|</span>
              <a class="lange" href>爵士</a>
              <span class="line">|</span>
              <a class="lange" href>乡村</a>
              <span class="line">|</span>
              <a class="lange" href>R&B/Soul</a>
              <span class="line">|</span>
              <a class="lange" href>古典</a>
              <span class="line">|</span>
              <a class="lange" href>名族</a>
              <span class="line">|</span>
              <a class="lange" href>英伦</a>
              <span class="line">|</span>
              <a class="lange" href>金属</a>
              <span class="line">|</span>
              <a class="lange" href>朋克</a>
              <span class="line">|</span>
              <a class="lange" href>蓝调</a>
              <span class="line">|</span>
              <a class="lange" href>雷鬼</a>
              <span class="line">|</span>
              <a class="lange" href>世界音乐</a>
              <span class="line">|</span>
              <a class="lange" href>拉丁</a>
              <span class="line">|</span>
              <a class="lange" href>New Age</a>
              <span class="line">|</span>
              <a class="lange" href>古风</a>
              <span class="line">|</span>
              <a class="lange" href>后摇</a>
              <span class="line">|</span>
              <a class="lange" href>Bossa Nova</a>
              <span class="line">|</span>
            </dd>
          </dl>
          <dl class="dl">
            <dt>
              <i class="u-icn"></i>场景
            </dt>
            <dd>
              <a class="lange" href>清晨</a>
              <span class="line">|</span>
              <a class="lange" href>夜晚</a>
              <span class="line">|</span>
              <a class="lange" href>学习</a>
              <span class="line">|</span>
              <a class="lange" href>工作</a>
              <span class="line">|</span>
              <a class="lange" href>午休</a>
              <span class="line">|</span>
              <a class="lange" href>下午茶</a>
              <span class="line">|</span>
              <a class="lange" href>地铁</a>
              <span class="line">|</span>
              <a class="lange" href>驾车</a>
              <span class="line">|</span>
              <a class="lange" href>运动</a>
              <span class="line">|</span>
              <a class="lange" href>旅行</a>
              <span class="line">|</span>
              <a class="lange" href>散步</a>
              <span class="line">|</span>
              <a class="lange" href>酒吧</a>
              <span class="line">|</span>
            </dd>
          </dl>
          <dl class="dl">
            <dt>
              <i class="u-icn"></i>情感
            </dt>
            <dd>
              <a class="lange" href>怀旧</a>
              <span class="line">|</span>
              <a class="lange" href>清新</a>
              <span class="line">|</span>
              <a class="lange" href>伤感</a>
              <span class="line">|</span>
              <a class="lange" href>浪漫</a>
              <span class="line">|</span>
              <a class="lange" href>治愈</a>
              <span class="line">|</span>
              <a class="lange" href>放松</a>
              <span class="line">|</span>
              <a class="lange" href>孤独</a>
              <span class="line">|</span>
              <a class="lange" href>感到</a>
              <span class="line">|</span>
              <a class="lange" href>兴奋</a>
              <span class="line">|</span>
              <a class="lange" href>快乐</a>
              <span class="line">|</span>
              <a class="lange" href>安静</a>
              <span class="line">|</span>
              <a class="lange" href>思绪</a>
              <span class="line">|</span>
            </dd>
          </dl>
          <dl class="dl">
            <dt>
              <i class="u-icn"></i>主题
            </dt>
            <dd>
              <a class="lange" href>影视原声</a>
              <span class="line">|</span>
              <a class="lange" href>ACG</a>
              <span class="line">|</span>
              <a class="lange" href>儿童</a>
              <span class="line">|</span>
              <a class="lange" href>校园</a>
              <span class="line">|</span>
              <a class="lange" href>游戏</a>
              <span class="line">|</span>
              <a class="lange" href>70后</a>
              <span class="line">|</span>
              <a class="lange" href>80后</a>
              <span class="line">|</span>
              <a class="lange" href>90后</a>
              <span class="line">|</span>
              <a class="lange" href>网络歌曲</a>
              <span class="line">|</span>
              <a class="lange" href>KTV</a>
              <span class="line">|</span>
              <a class="lange" href>经典</a>
              <span class="line">|</span>
              <a class="lange" href>翻唱</a>
              <span class="line">|</span>
              <a class="lange" href>吉他</a>
              <span class="line">|</span>
              <a class="lange" href>钢琴</a>
              <span class="line">|</span>
              <a class="lange" href>器乐</a>
              <span class="line">|</span>
              <a class="lange" href>榜单</a>
              <span class="line">|</span>
              <a class="lange" href>00后</a>
              <span class="line">|</span>
            </dd>
          </dl>
        </div>
        <div class="ft"></div>
      </div>
      <ul class="ul">
        <li v-for="(item,index) in dataShow" :key="index" @click="get(item)">
          <div class="img">
            <img class="pic" :src="item.img" alt />
            <div class="bottom">
              <span class="icon1"></span>
              <span class="nb">{{item.number}}</span>
              <a class="play" href></a>
            </div>
          </div>
          <p class="dec">
            <a class="tit">{{item.title}}</a>
          </p>
          <p>
            <span class="by">by</span>
            <a href class="name">{{item.name}}</a>
          </p>
        </li>
      </ul>
      <div class="page">
        <a href="javascript:;" class="prv" @click="prev">上一页</a>
        <a href="javascript:;" v-for="(item,index) in pages" :key="index" class="zpgi" @click="select(item)" >{{item}}</a>
        <a href="javascript:;" class="next" @click="next">下一页</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      // 所有页面的数据
      newsList: [],
      totalPage: [],
      // 每页显示数量
      pageSize: 30,
      // 共几页
      pageNum: 1,
      // 当前显示的数据
      dataShow: "",
      // 默认当前显示第一页
      currentPage: 0,
      show:false
    };
  },
  computed: {
    pages() {
      const c = this.currentPage
      const t = this.pageNum
      if (c <= 5) {
         return [1, 2, 3, 4, 5, 6, 7, 8, 9, '...', t]
      }else if (c >= t - 4) {
         return [1, '...', t-8, t-7, t-6, t-5, t-4, t-3, t-2, t-1, t]
      }else {
         return [1, '...', c-3, c-2, c-1, c, c+1, c+2, c+3, '...', t]
      }
    }
  },

  created: function() {
    this.$axios.get("/dan").then(res => {
      this.newsList = res.data.Articles;
      // console.log(this.newsList)
      this.pageNum = Math.ceil(this.newsList.length / this.pageSize) || 1;
      for (let i = 0; i < this.pageNum; i++) {
        // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
        // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为5， 则第一页是1-5(对slice操作来说是0-5)条，第二页是6-10(对slice操作来说是5-10)条...
        this.totalPage[i] = this.newsList.slice(this.pageSize * i,this.pageSize * (i + 1))
        this.dataShow = this.totalPage[this.currentPage]; 
      }
    });
    
  },
  methods: {

    select(item) {
      if (item === this.currentPage) return
      if (typeof item === 'string') return
      this.currentPage = item
      this.dataShow = this.totalPage[this.currentPage-1];
      // console.log(this.dataShow)
    },
    prev(){
    
    if(this.currentPage-1<1){
       this.currentPage=1
    }else{
       this.currentPage+=-1
    }
    this.dataShow = this.totalPage[this.currentPage-1];
      
    },
    next(){
      if(this.currentPage>this.pageNum-1){
       this.currentPage=this.pageNum
    }else{
       this.currentPage+=1
    }
      this.dataShow = this.totalPage[this.currentPage-1];
    },

    get(id){
      this.$router.push({path: '/playlist', query: {id:id}})
    },

    toggle(){
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.next {
  width: 57px;
  padding-left: 12px;
  height: 24px;
  font-size: 12px;
  line-height: 24px;
  color: #333;
  margin: 0 1px 0 2px;
  display: inline-block;
  border: 1px solid#ccc;
  border-radius: 2px;
  background: url(../assets/button.png) no-repeat 0 9999px;
  background-position: -75px -590px;
  vertical-align: middle;
  text-align: left;
}
.zpgi {
  height: 22px;
  padding: 0 8px;
  background-color: #fff;
  line-height: 22px;
  margin: 0 1px 0 2px;
  display: inline-block;
  border: 1px solid#ccc;
  border-radius: 2px;
  vertical-align: middle;
}
.prv {
  font-size: 12px;
  margin: 0 1px 0 2px;
  display: inline-block;
  border: 1px solid#ccc;
  border-radius: 2px;
  vertical-align: middle;
  color: #cacaca;
  width: 47px;
  padding-left: 22px;
  height: 24px;
  line-height: 24px;
  text-align: left;
  background: url(../assets/button.png) no-repeat 0 9999px;
  background-position: 0 -620px;
}
.page {
  margin: 20px 0;
  text-align: center;
}
.line {
  margin: 0 8px 0 10px;
  color: #d8d8d8;
}
.lange {
  white-space: nowrap;
  color: #333;
}
.u-icn {
  margin-right: 8px;
  margin-bottom: 4px;
  width: 23px;
  height: 23px;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  background: url(../assets/icon.png) no-repeat 0 9999px;
  background-position: -20px -735px;
}
dd {
  font-size: 12px;
  margin-left: 96px;
  padding: 16px 15px 0 15px;
  border-left: 1px solid #e6e6e6;
  line-height: 24px;
}
dt {
  font-size: 12px;
  float: left;
  display: block;
  width: 70px;
  margin: 0 -100px 0 26px;
  padding-top: 15px;
  border-right: 1px solid #e6e6e6;
  font-weight: bold;
}
em {
  color: #333;
  font-style: normal;
  text-align: left;
  font-size: 12px;
}
.btn {
  display: inline-block;
  width: 75px;
  height: 26px;
  background: url(../assets/button.png) no-repeat 0 9999px;
  background-position: 0 -64px;
  text-align: center;
  line-height: 26px;
}
.h3 {
  height: 37px;
  padding-left: 26px;
  border-bottom: 1px solid#e6e6e6;
  font-weight: normal;
}
.jiao {
  position: absolute;
  top: 2px;
  left: 132px;
  display: inline-block;
  width: 24px;
  height: 11px;
  background: url(../assets/iconall.png) no-repeat;
  background-position: -48px 0;
}
.ft {
  height: 20px;
  background: url(../assets/sltlyr.png) no-repeat;
  background-position: -1440px -12px;
}
.bd {
  height: 364px;
  width: 700px;
  padding: 0 10px;
  background: url(../assets/sltlyr.png) no-repeat;
  background-position: -720px 0;
  background-repeat: repeat-y;
}
.hd {
  background: url(../assets/sltlyr.png) no-repeat;
  height: 32px;
}
.check {
  left: 0;
  /* display: none; */
  position: absolute;
  top: 75px;
  z-index: 5;
  width: 720px;
}
.content {
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
}
.bg {
  padding: 40px;
  position: relative;
}
.title {
  height: 40px;
  border-bottom: 2px solid#c20c0c;
}
.left {
  float: left;
  font-size: 24px;
  font-weight: normal;
}
.a {
  display: inline-block;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
  font-size: 12px;
  font-weight: normal;
  margin: 2px 0 0 12px;
  color: #333;
  background: url(../assets/button2.png) no-repeat 0 9999px;
  background-position: right -100px;
  padding: 0 4px 0 0;
  white-space: nowrap;
}
.a i {
  color: #0c73c2 !important;
  padding: 0 10px 0 15px;
  display: inline-block;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
  background: url(../assets/button2.png) no-repeat 0 9999px;
  background-position: 0 -59px;
}
.icon {
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  margin-left: 5px;
  width: 8px;
  height: 5px;
  background: url(../assets/icon.png) no-repeat 0 9999px;
  background-position: -70px -543px;
}
.right {
  color: #fff;
  width: 46px;
  height: 29px;
  line-height: 29px;
  text-align: center;
  float: right;
  background: url(../assets/button.png) no-repeat 0 9999px;
  background-position: 0 0;
  border-radius: 3px;
}
.ul {
  margin: 30px 0 0 -50px;
}
ul li {
  display: inline-block;
  width: 140px;
  height: 188px;
  overflow: hidden;
  padding: 0 0 30px 50px;
  line-height: 1.4;
}
.img {
  width: 140px;
  height: 140px;
  position: relative;
  display: block;
}
.pic {
  display: block;
  width: 100%;
  height: 100%;
}
.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 27px;
  background: url(../assets/coverall.png) no-repeat;
  background-position: 0 -537px;
  color: #ccc;
}
.icon1 {
  float: left;
  width: 14px;
  height: 11px;
  background: url(../assets/iconall.png) no-repeat;
  background-position: 0 -24px;
  margin: 9px 5px 9px 10px;
  display: block;
}
.nb {
  float: left;
  display: block;
  margin: 7px 0 0 0;
  color: #ccc;
  font-size: 12px;
}
.play {
  display: block;
  position: absolute;
  right: 10px;
  bottom: 5px;
  width: 16px;
  height: 17px;
  background: url(../assets/iconall.png) no-repeat;
  background-position: 0 0;
}
.dec {
  margin: 8px 0 3px;
  font-size: 14px;
}
.tit {
  vertical-align: middle;
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.by {
  line-height: 1.4;
  font-size: 12px;
  color: #999;
}
.name {
  color: #666;
  font-size: 12px;
  display: inline-block;
  max-width: 76%;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
</style>