<template>
  <div class="content">
    <div class="box">
      <div class="b">
        <div class="cont">
          <div class="cover">
            <img src="http://p3.music.126.net/F10w6yg1qywRwpcGuWkDog==/109951164524342306.jpg" />
          </div>
          <div class="con">
            <div class="co">
              <div class="hd">
                <i class="icon">
                  <span></span>
                </i>
                <h2 class="h2">{{newsList.title}}</h2>
              </div>
              <div class="user">
                <a class="face" href>
                  <img
                    src="http://p1.music.126.net/O9zV6jeawR43pfiK2JaVSw==/109951164232128905.jpg"
                  />
                </a>
                <span class="name">
                  <a href class="na">路游里</a>
                  <div class="icon2"></div>
                  <span class="time">2019-10-27&nbsp;创建</span>
                </span>
              </div>
              <div class="btns">
                <a class="one" href>
                  <i>
                    <em class="em"></em>
                    播放
                  </i>
                </a>
                <a class="two" href></a>
                <a class="btn three" href>
                  <i>(3409)</i>
                </a>
                <a class="btn four" href>
                  <i>(29)</i>
                </a>
                <a class="btn five" href>
                  <i>下载</i>
                </a>
                <a class="btn six" href>
                  <i>(51)</i>
                </a>
              </div>
              <div class="tags">
                <b>标签：</b>
                <a class="tag" href>
                  <i>华语</i>
                </a>
                <a class="tag" href>
                  <i>流行</i>
                </a>
                <a class="tag" href>
                  <i>感动</i>
                </a>
              </div>
              <p class="intr ">
                <b>介绍：</b>
                没有你的日子我也很好，虽然冬天真的太冷了，会有陌生人愿意给我一个温暖的拥抱吗？哪怕只是一句礼貌的问候。
                <br />如果没有也没关系呀，我还有我的小猫和温暖的被窝，我是世界上最幸福的人吧
                <br />
                <br />画师：yuki
                <br />
              </p>
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
            newsList: this.$route.query.id
        }
    },
    created: function() {
      
    }
};
</script>

<style  scoped>
.intr{
    font-size: 12px;
    color: #666;
}
.tag i {
  position: relative;
  padding: 0 3px 0 13px;
  float: left;
  height: 22px;
  line-height: 22px;
  background: url(https://s2.music.126.net/style/web2/img/button2.png) no-repeat;
  background-position: 0 0;
}
.tag {
  float: left;
  margin: 0px 10px 3px 0;
  padding: 0 10px 0 0;
  text-shadow: 0 1px#fdfdfd;
  height: 22px;
  line-height: 22px;
  background: url(https://s2.music.126.net/style/web2/img/button2.png) no-repeat;
  background-position: right -27px;
}
.tags b {
  float: left;
  font-weight: normal;
  color: #666;
}
.tags {
  display: table;
  font-size: 12px;
  margin: 25px 0 5px;
  line-height: 22px;
}
.btn.six i {
  background-position: 0 -1268px;
}
.btn.five i {
  background-position: 0 -1268px;
}
.btn.four i {
  padding-right: 2px;
  padding-left: 28px;
  background-position: 0 -1268px;
}
.btn.three i {
  padding: 0 7px 0 36px;
  background-position: 0 -977px;
}
.btn i {
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  font-size: 12px;
  background: url(https://s2.music.126.net/style/web2/img/button2.png) no-repeat;
  padding: 0 7px 0 36px;
}
.btn {
  float: left;
  margin-right: 6px;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background: url(https://s2.music.126.net/style/web2/img/button2.png) no-repeat;
  background-position: right -1020px;
  padding: 0 5px 0 0;
  white-space: nowrap;
}
.two {
  float: left;
  padding: 0 5px 0 0;
  white-space: nowrap;
  width: 31px;
  margin-left: -5px;
  padding-right: 0;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background: url(https://s2.music.126.net/style/web2/img/button2.png) no-repeat
    0 9999px;
  background-position: 0 -1588px;
  margin-right: 5px;
}
.em {
  float: left;
  width: 20px;

  height: 18px;
  margin: 6px 2px 2px 0;
  background: url(https://s2.music.126.net/style/web2/img/button2.png) no-repeat
    0 9999px;
  background-position: 0 -1622px;
  overflow: hidden;
}
.one i {
  padding: 0 7px 0 8px;
  color: #fff;
  display: inline-block;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
  background: url(https://s2.music.126.net/style/web2/img/button2.png) no-repeat
    0 9999px;
  background-position: 0 -387px;
}
.one {
  float: left;
  padding: 0 5px 0 0;
  white-space: nowrap;
  color: #fff;
  display: block;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  text-align: center;
  background: url(https://s2.music.126.net/style/web2/img/icon.png) no-repeat 0
    9999px;
  background-position: right -428px;
}
.btns {
  margin-bottom: 25px;
  margin-right: -10px;
  display: table;
}
.time {
  margin-left: 15px;
  color: #999;
  font-size: 12px;
}
.icon2 {
  display: inline-block;
  overflow: hidden;
  margin: 9px 0 0 3px;
  width: 12px;
  height: 13px;
  background: url(https://s2.music.126.net/style/web2/img/icon.png) no-repeat 0
    9999px;
  background-position: -65px -840px;
}
.na {
  color: #0c73c2;
  font-size: 12px;
}
.name {
  float: left;
}
.face img {
  width: 35px;
  height: 35px;
}
.face {
  margin-right: 10px;
  float: left;
  width: 35px;
  height: 35px;
}
.user {
  display: inline-block;
  margin: 0 0 20px;
  line-height: 35px;
}
.h2 {
  margin-left: 64px;
  position: relative;
  line-height: 24px;
  font-size: 20px;
  font-weight: normal;
}
.icon span {
  background: url(https://s2.music.126.net/style/web2/img/white-r-icon@3x.png);
  display: inline-block;
  width: 8px;
  height: 8px;
  position: absolute;
  top: 2px;
  background-size: cover;
  left: 34px;
}
.icon {
  position: relative;
  float: left;
  width: 54px;
  height: 24px;
  display: block;
  overflow: hidden;
  background: url(https://s2.music.126.net/style/web2/img/icon.png) no-repeat 0
    9999px;
  background-position: 0 -243px;
}
.hd {
  position: relative;
  margin: 0 0 12px;
  line-height: 24px;
}
.co {
  margin-left: 230px;
}
.con {
  float: right;
  width: 100%;
}
.cover img {
  width: 100%;
  height: 100%;
}
.cover {
  float: left;
  width: 200px;
  height: 200px;
  position: relative;
  display: block;
  margin: 0 -220px 0 0;
}
.b {
  margin-right: 271px;
}
.cont {
  padding: 47px 30px 40px 39px;
}
.box {
  float: left;
  width: 100%;
  margin-right: -270px;
}
.content {
  background: url(https://s2.music.126.net/style/web2/img/frame/wrap4.png)
    repeat-y center 0;
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  border: 1px solid#d3d3d3;
  border-width: 0 1px;
}
</style>