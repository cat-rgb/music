<template>
  <div class="b-out">
    <div class="top">
      <div class="wrap">
        <div class="logo"></div>
        <ul>
          <li
            :class="num==index?'active':''"
            v-for="(item, index) in headerArr"
            :key="index"
            @click="header(index)"
          >
            <a href @click.prevent="jump(index)">{{item}}</a>
            <div class="cur"></div>
          </li>
          <div class="hot"></div>
        </ul>
        <div class="login">
          <a href>登录</a>
        </div>
        <div class="crea">创作者中心</div>
        <div class="search">
          <input type="text" name id placeholder="音乐/视频/电台/用户" />
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="wrap">
        <ul v-if="flag">
          <li
            :class="num2==index?'active':''"
            v-for="(item, index) in headerArr2"
            :key="index"
            @click="header2(index)"
          >
            <a href @click.prevent="jump2(index)">{{item}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// document.getElementsByTagName("title")[0].innerHTML = "网易云音乐";
export default {
  data() {
    return {
      headerArr: [
        "发现音乐",
        "我的音乐",
        "朋友",
        "商城",
        "音乐人",
        "下载客户端"
      ],
      num: 0,
      headerArr2: ["推荐", "排行榜", "歌单", "主播电台", "歌手", "新碟上架"],
      num2: 0,
      flag: true
    };
  },
  methods: {
    header(index) {
      this.num = index;
      if (index > 0) {
        this.flag = false;
      } else {
        this.flag = true;
      }
      this.num2 = 0;
    },
    header2(index) {
      this.num2 = index;
    },
    jump(index) {
      switch (index) {
        case 0:
          this.$router.push({ path: "/" });
          break;
        case 1:
          this.$router.push({ path: "/my" });
          break;
        case 2:
          this.$router.push({ path: "/friend" });
          break;
        case 3:
          // this.$router.push({path:'/store/product'})
          break;
        case 4:
          // this.$router.push({path:'/nmusician/web/index'})
          break;
        case 5:
          this.$router.push({ path: "/download" });
          break;
        default:
          break;
      }
    },
    jump2(index) {
      switch (index) {
        case 0:
          this.$router.push({ path: "/discover" });
          break;
        case 1:
          this.$router.push({ path: "/discover/toplist" });
          break;
        case 2:
          this.$router.push({ path: "/discover/playlist" });
          break;
        case 3:
          this.$router.push({ path: "/discover/djradio" });
          break;
        case 4:
          this.$router.push({ path: "/discover/artist" });
          break;
        case 5:
          this.$router.push({ path: "/discover/album" });
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
.b-out {
  width: 100%;
  height: 105px;
  overflow: hidden;
  position: relative;
}

.b-out .top {
  height: 70px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;
  overflow: hidden;
  position: relative;
}

.b-out .wrap {
  width: 1100px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.b-out .logo {
  float: left;
  width: 179px;
  height: 100%;
  background: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?e6b56639366021fe1633cc600f27f214)
    no-repeat;
  cursor: pointer;
}

.b-out .top ul {
  float: left;
  height: 100%;
  position: relative;
}

.b-out .top li {
  float: left;
  position: relative;
}

.b-out .top ul li a {
  display: block;
  height: 100%;
  line-height: 70px;
  font-size: 14px;
  color: #ccc;
  padding: 0 19px;
}

.b-out .top li:hover {
  background: #000000;
}

.b-out .top li:hover a {
  color: #ffffff;
}

.b-out .top .active {
  background: #000000;
}

.b-out .top .active a {
  color: #ffffff;
}

.b-out .top li .cur {
  width: 12px;
  height: 7px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -6px;
}

.b-out .top .active .cur {
  background: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?e6b56639366021fe1633cc600f27f214)
    no-repeat;
  background-position: -226px 0;
}

.b-out .top .hot {
  position: absolute;
  width: 28px;
  height: 19px;
  background: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?e6b56639366021fe1633cc600f27f214)
    no-repeat;
  background-position: -190px 0;
  top: 21px;
  right: -14px;
}

.b-out .login {
  float: right;
  height: 100%;
  line-height: 70px;
}

.b-out .login a {
  color: #787878;
  font-size: 12px;
}

.b-out .login a:hover {
  text-decoration: underline;
}

.b-out .crea {
  float: right;
  width: 90px;
  height: 32px;
  margin: 19px 0 0 12px;
  box-sizing: border-box;
  line-height: 32px;
  border-radius: 20px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  border: 1px solid #4f4f4f;
  margin-right: 16px;
  cursor: pointer;
}

.b-out .crea:hover {
  border-color: #ffffff;
}

.b-out .search {
  float: right;
  width: 158px;
  height: 32px;
  background: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?e6b56639366021fe1633cc600f27f214)
    no-repeat;
  margin-top: 19px;
  background-position: 0 -99px;
  background-color: #fff;
  border-radius: 32px;
  position: relative;
}

.b-out .search input {
  width: 121px;
  height: 16px;
  margin: 0;
  padding: 0;
  background: transparent;
  font-size: 12px;
  color: #333;
  line-height: 16px;
  position: absolute;
  top: 8px;
  left: 27px;
  border: none;
}

.b-out .bottom {
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  border-bottom: 5px solid #c20c0c;
  background: #c20c0c;
}

.b-out .bottom ul {
  overflow: hidden;
  margin-left: 172px;
}

.b-out .bottom ul li {
  float: left;
  height: 34px;
  overflow: hidden;
  margin-left: 30px;
}

.b-out .bottom ul li a {
  display: block;
  padding: 2px 13px;
  color: #fff;
  font-size: 12px;
  border-radius: 20px;
  margin-top: 5px;
}

.b-out .bottom .active a {
  background: #9b0909;
}

.b-out .bottom ul li a:hover {
  background: #9b0909;
}
</style>