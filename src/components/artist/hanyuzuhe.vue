<template>
  <div class="ds-g-mn2">
    <div class="ds-g-mn2c">
      <div class="ds-g-wrap">
        <div class="ds-u-title">
          <h3 style="float: left;font-size: 24px;font-weight: normal;">
            <span>华语组合/乐队</span>
          </h3>
        </div>

        <div class="initial-selector">
          <li>
            <a href class="ch">热门</a>
          </li>
          <li>
            <a href class>A</a>
          </li>
          <li>
            <a href class>B</a>
          </li>
          <li>
            <a href class>C</a>
          </li>
          <li>
            <a href class>D</a>
          </li>
          <li>
            <a href class>E</a>
          </li>
          <li>
            <a href class>F</a>
          </li>
          <li>
            <a href class>J</a>
          </li>
          <li>
            <a href class>H</a>
          </li>
          <li>
            <a href class>I</a>
          </li>
          <li>
            <a href class>G</a>
          </li>
          <li>
            <a href class>K</a>
          </li>
          <li>
            <a href class>L</a>
          </li>
          <li>
            <a href class>M</a>
          </li>
          <li>
            <a href class>N</a>
          </li>
          <li>
            <a href class>O</a>
          </li>
          <li>
            <a href class>P</a>
          </li>
          <li>
            <a href class>Q</a>
          </li>
          <li>
            <a href class>R</a>
          </li>
          <li>
            <a href class>S</a>
          </li>
          <li>
            <a href class>T</a>
          </li>
          <li>
            <a href class>U</a>
          </li>
          <li>
            <a href class>V</a>
          </li>
          <li>
            <a href class>W</a>
          </li>
          <li>
            <a href class>X</a>
          </li>
          <li>
            <a href class>Y</a>
          </li>
          <li>
            <a href class>Z</a>
          </li>
          <li>
            <a
              href
              style="width: 45px;height: 24px;float: left;line-height: 24px;text-align: center;font-size: 12px;"
            >其他</a>
          </li>
        </div>

        <div class="m-sgerlist">
          <ul class="m-cvrls">
            <li v-for="(resw,m) in gu1" :key="m">
              <div class="ds-u-cover">
                <img :src="resw.tu" alt />
                <a href class="msk"></a>
              </div>
              <p>
                <a href class="nm">{{resw.name}}</a>
                <a href class="f-tdn">
                  <i class="ds-u-icn"></i>
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ul class="ds-ul">
      <li class="sml" v-for="(hanzi,q) in hanzi" :key="q">
        <a href class="ds-me">{{hanzi}}</a>
        <a href class="ds-biao"></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      res: "",
      ress: "",
      hanzi: "",
      gu1: "",
      num: 1
    };
  },
  mounted() {
    this.getGoodsList();
  },

  methods: {
    change(a) {
      this.num = a;
    },
    getGoodsList() {
      this.$axios.get("../../../static/json/artist.json").then(res => {
        this.res = res.data.slides;
        this.ress = res.data.list;
        this.hanzi = res.data.hanzi;
        this.gu1 = res.data.list4;
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
  min-height: 800px;
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
.initial-selector {
  padding: 20px;
  margin-left: -3px;
}
.initial-selector li {
  float: left;
  margin-left: 1px;
  font-size: 14px;
}
.initial-selector li a {
  float: left;
  width: 21px;
  line-height: 24px;
  text-align: center;
}
.ch {
  background: #c20c0c;
  border-radius: 2px;
  color: #fff;
  width: 45px !important;
  height: 24px;
  float: left;
  line-height: 24px;
  text-align: center;
  font-size: 12px;
}
</style>