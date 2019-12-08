<template>
  <div>
    <div class="ds-g-bd2">
      <!-- //侧边 -->
      <div class="ds-g-sd2">
        <div id="ds-singer-cat-nav">
          <div class v-for="(res,i) in res" :key="i">
            <h2 class="ds-tit">{{res.title}}</h2>
            <ul class="ds-nav" v-for="(ress,m) in res.authors" :key="m">
              <li>
                <router-link
                  :to="ress.id<=2?{path:'/discover/artist/'+ress.index}:{path:'/discover/artist/cat?id=',query:{id:ress.id}}"
         
                  :class="{'cat-flag':true,'z-slt':ress.id==num}"
                >{{ress.author}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 右边 -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      res: "",
      ress: "",
      hanzi: "",
      text:"",
      num: 1
    };
  },

  // created: function() {
  //   var id = this.$route.query.id;
  //   this.$axios
  //     .get("/discover/artist/" + id)
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // },

  mounted() {
    this.getGoodsList();
  },

  methods: {
    change(a) {
      this.num = a;
      console.log(a)
    },
    getGoodsList() {
      this.$axios.get("../../../static/json/artist.json").then(res => {
   
        this.res = res.data.slides;
        this.ress = res.data.list;
        this.hanzi = res.data.hanzi;
        this.text=res.data.text
      });
    }
  }
};
</script>
<style scoped>
.ds-g-bd2 {
  background: url(https://s2.music.126.net/style/web2/img/frame/wrap2.png?7da3586b0356191b3f715da8e6b2cb6a)
    repeat-y center 0;
  width: 980px;
  min-height: 1480px;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
}
.ds-g-wrap {
  padding: 30px 40px;
  height: 368px;
}
.ds-g-sd2 {
  position: relative;
  width: 180px;
  float: left;
}
#ds-singer-cat-nav {
  padding: 0 10px 40px;
  margin-top: 51px;
}
.cat-flag:hover {
  text-decoration: underline;
}
.ds-nav li {
  margin-bottom: 2px;
  float: left;
  width: 160px;
  height: 29px;
  line-height: 29px;
}
.ds-nav li a {
  width: 133px;
  padding-left: 27px;
  color: #333;
  float: left;
  font-size: 12px;
  background: url(https://s2.music.126.net/style/web2/img/singer.png?3b26431f4c209df28235a127397d0499)
    no-repeat 0 -30px;
  height: 29px;
  line-height: 29px;
}
.z-slt {
  background-position: 0 0 !important;
  text-decoration: none;
  color: #c20c0c;
}
.ds-g-mn2 {
  float: right;
  width: 100%;
  margin-left: -181px;
}
.ds-g-mn2c {
  margin-left: 181px;
}
.ds-u-title {
  height: 40px;
  border-bottom: 2px solid #c20c0c;
}
.m-cvrls {
  margin: 20px 0 0 -17px;
}
.m-cvrls li {
  float: left;
  padding-left: 17px;
  width: 130px;
  height: 154px;
  overflow: hidden;
  /* padding: 0 0 30px 50px; */
  line-height: 1.4;
}
.ds-u-cover {
  position: relative;
  display: block;
}
.m-cvrls p {
  margin-top: 3px;
  width: 100%;
}
.nm {
  color: #000;
  font-size: 12px;
  float: left;
  max-width: 80%;
  vertical-align: middle;
}
.msk {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://s2.music.126.net/style/web2/img/coverall.png?a3b66c6255a28e913986e98ae9b2dd8e)
    no-repeat 0 -680px;
}
.ds-u-icn {
  margin-top: -1px;
  position: relative;
  float: right;
  width: 17px;
  height: 18px;
  background: url(https://s2.music.126.net/style/web2/img/icon.png?861a29a6509f9a540e92a1fbcd46cb7a)
    no-repeat 0 -740px;
}
.m-cvrls li {
  padding: 0 0 30px 17px;
}
.ds-ul {
  width: 799px;
  margin-left: 210px;
  font-size: 12px;
}
.sml {
  height: 30px;
  width: 130px;
  line-height: 23px;
  float: left;
  overflow: hidden;
  padding: 0 0 0 17px;
}
.ds-me {
  color: #000;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.ds-biao {
  margin: 4px 0 0 2px;
  position: relative;
  width: 17px;
  height: 18px;
  display: inline-block;
  overflow: hidden;
  background: url(https://s2.music.126.net/style/web2/img/icon.png?861a29a6509f9a540e92a1fbcd46cb7a)
    no-repeat 0 -740px;
}
</style>