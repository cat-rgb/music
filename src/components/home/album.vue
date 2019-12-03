<template>
  <div class="out">
    <div class="wrap">
      <div class="tit">
        <h3>热门新碟</h3>
      </div>
      <ul>
        <li v-for="(item, index) in hotList" :key="index">
          <img :src="item.img" alt />
          <a href class="bg">
            <a href class="play"></a>
          </a>
          <p class="title">
            <a href>{{item.title}}</a>
          </p>
          <p class="name">
            <a href>{{item.name}}</a>
          </p>
        </li>
      </ul>
      <div class="tit">
        <h3>全部新碟</h3>
      </div>
      <ul>
        <li v-for="(item, index) in allList" :key="index">
          <img :src="item.img" alt />
          <a href class="bg">
            <a href class="play"></a>
          </a>
          <p class="title">
            <a href>{{item.title}}</a>
          </p>
          <p class="name">
            <a href>{{item.name}}</a>
          </p>
        </li>
      </ul>
      <div class="nav">
        <!-- <button class="prev">《 上一页</button> -->
        <input type="button" value="< 上一页" class="prev" @click="prev" />
        <span
          :class="num==index?'active':''"
          @click="now(index)"
          v-for="(item, index) in arr"
          :key="index"
        >{{item}}</span>
        <input type="button" value="下一页 >" class="next" @click="next" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      res: null,
      hotList: null,
      allList: null,
      num: 0,
      arr: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    };
  },
  methods: {
    now(index) {
      this.num = index;
      this.hotList = this.res.data.New[this.num][0];
      this.allList = this.res.data.New[this.num][1];
    },
    prev() {
      if (this.num != 0) {
        this.num--;
      }
      this.hotList = this.res.data.New[this.num][0];
      this.allList = this.res.data.New[this.num][1];
    },
    next() {
      if (this.num != 9) {
        this.num++;
      }
      this.hotList = this.res.data.New[this.num][0];
      this.allList = this.res.data.New[this.num][1];
    }
  },
  mounted() {
    this.$axios({
      url: "/newCD/newList",
      method: "post"
    }).then(res => {
      this.res = res;
      this.hotList = res.data.New[this.num][0];
      this.allList = res.data.New[this.num][1];
    });
  }
};
</script>

<style scoped>
.out {
  width: 980px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid #d3d3d3;
  border-bottom: none;
  background: white;
}
.wrap {
  padding: 40px;
  overflow: hidden;
}
.tit {
  width: 100%;
  height: 40px;
  border-bottom: 2px solid #c20c0c;
  margin-top: 20px;
}
.tit h3 {
  float: left;
  font-size: 24px;
  color: #333;
  font-weight: normal;
}
ul {
  width: 100%;
  overflow: hidden;
}
li {
  float: left;
  width: 153px;
  float: left;
  margin-right: 33px;
  margin-top: 20px;
  overflow: hidden;
  position: relative;
  /* padding-bottom: 30px; */
}
ul li:nth-child(5n) {
  margin-right: 0;
}
li img {
  width: 130px;
  height: 130px;
}
.bg {
  position: absolute;
  width: 153px;
  height: 130px;
  top: 0;
  left: 0;
  background: url(https://s2.music.126.net/style/web2/img/coverall.png?a3b66c6255a28e913986e98ae9b2dd8e)
    no-repeat;
  background-position: 0 -845px;
}
.title a {
  float: left;
  padding: 8px 0 3px;
  color: #333;
  font-size: 14px;
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.title a:hover {
  text-decoration: underline;
}
.title {
  width: 135px;
}
.name a {
  font-size: 12px;
  color: #666;
}
li p {
  overflow: hidden;
}
.name a:hover {
  text-decoration: underline;
}
.play {
  width: 28px;
  height: 28px;
  position: absolute;
  right: 28px;
  bottom: 5px;
  background: url(https://s2.music.126.net/style/web2/img/iconall.png?666dfb76d45748115ad46e3289c67e1f)
    no-repeat;
  background-position: 0 -170px;
  display: none;
}
.bg:hover .play {
  display: block;
}
.nav {
  margin: 40px auto 20px;
  text-align: center;
  overflow: hidden;
}
.prev,
.next {
  width: 71px;
  height: 26px;
  border: 1px solid #ccc;
  border-radius: 2px;
  cursor: pointer;
}
.nav span {
  display: inline-block;
  width: 27px;
  height: 27px;
  border-radius: 2px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 27px;
  color: #333;
  cursor: pointer;
  margin-right: 4px;
}
.nav span:nth-child(2) {
  margin-left: 4px;
}
.nav .active {
  background: #f00;
  color: #fff;
}
</style>