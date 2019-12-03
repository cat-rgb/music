<template>
  <div class="ds-sd1">
    <div id="ds-module">
      <!-- 侧边栏 -->
      <div >
        <!-- 登录区域 -->
        <div class="ds-dengl">
          <p class="ds-note">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
          <a href id="ds-login">用户登录</a>
        </div>
        <!-- 入驻歌手 -->
        <div class="ds-singer">
          <h3 class="ds-hd3">
            <span class="ds-fl">入驻歌手</span>
            <!-- 跳 -->
            <router-link to>
              <a href class="ds-more">查看全部 ></a>
            </router-link>
          </h3>
          <div class="ds-singer-list">
            <li>
              <a href class="ds-tdn">
                <div class="ds-head">
                  <img src="../../assets/5931865232210340.jpg" class="j-img" alt />
                </div>
                <div class="ds-ifo">
                  <h4>
                    <span class="ds-thide">张惠妹aMEI</span>
                    <p class="ds-thide2">台湾歌手张惠妹</p>
                  </h4>
                </div>
              </a>
            </li>
            <li>
              <a href class="ds-tdn">
                <div class="ds-head">
                  <img src="../../assets/3302932937408956.jpg" class="j-img" alt />
                </div>
                <div class="ds-ifo">
                  <h4>
                    <span class="ds-thide">Fine乐团</span>
                    <p class="ds-thide2">独立音乐人</p>
                  </h4>
                </div>
              </a>
            </li>
            <li>
              <a href class="ds-tdn">
                <div class="ds-head">
                  <img src="../../assets/19027048718765608.jpg" class="j-img" alt />
                </div>
                <div class="ds-ifo">
                  <h4>
                    <span class="ds-thide">萬曉利</span>
                    <p class="ds-thide2">民谣歌手、中国现代民谣的代表人物之一</p>
                  </h4>
                </div>
              </a>
            </li>
            <li>
              <a href class="ds-tdn">
                <div class="ds-head">
                  <img src="../../assets/7943971513291094.jpg" class="j-img" alt />
                </div>
                <div class="ds-ifo">
                  <h4>
                    <span class="ds-thide">音乐人赵雷</span>
                    <p class="ds-thide2">民谣歌手</p>
                  </h4>
                </div>
              </a>
            </li>
            <li>
              <a href class="ds-tdn">
                <div class="ds-head">
                  <img src="../../assets/109951163892302996.jpg" class="j-img" alt />
                </div>
                <div class="ds-ifo">
                  <h4>
                    <span class="ds-thide">王三溥</span>
                    <p class="ds-thide2">音乐人</p>
                  </h4>
                </div>
              </a>
            </li>
          </div>
          <div>
            <a href class="ds-shenq" target="_blank">
              <i>申请成为网易音乐人</i>
            </a>
          </div>
        </div>
        <!-- 热门主播 -->
        <div class="ds-dj">
          <h3 class="ds-v-hd3">热门主播</h3>
          <ul class="ds-rem">
            <li>
              <a href class="ds-cver">
                <img src="../../assets/1407374893913311.jpg" alt />
              </a>
              <div class="ds-info">
                <p>
                  <a href class="ds-xing">陈立</a>
                  <sup class="ds-v"></sup>
                </p>
                <p class="ds-f-thide">心理学家、美食家陈立教授</p>
              </div>
            </li>
            <li>
              <a href class="ds-cver">
                <img src="../../assets/7942872001461517.jpg" alt />
              </a>
              <div class="ds-info">
                <p>
                  <a href class="ds-xing">DJ艳秋</a>
                  <sup class="ds-v"></sup>
                </p>
                <p class="ds-f-thide">著名音乐节目主持人</p>
              </div>
            </li>
            <li>
              <a href class="ds-cver">
                <img src="../../assets/3427177769086282.jpg.png" alt />
              </a>
              <div class="ds-info">
                <p>
                  <a href class="ds-xing">国家大剧院古典音乐频道</a>
                  <sup class="ds-v"></sup>
                </p>
                <p class="ds-f-thide">国家大剧院古典音乐官方</p>
              </div>
            </li>
            <li>
              <a href class="ds-cver">
                <img src="../../assets/3130309604335651.jpg" alt />
              </a>
              <div class="ds-info">
                <p>
                  <a href class="ds-xing">谢谢收听</a>
                  <sup class="ds-v"></sup>
                </p>
                <p class="ds-f-thide">南京电台主持人王馨</p>
              </div>
            </li>
            <li>
              <a href class="ds-cver">
                <img src="../../assets/3440371884651965.jpg" alt />
              </a>
              <div class="ds-info">
                <p>
                  <a href class="ds-xing">DJ晓苏</a>
                  <sup class="ds-v"></sup>
                </p>
                <p class="ds-f-thide">独立DJ，CRI环球旅游广播特邀DJ</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
/* #ds-module {
  background: url(../../assets/wrap1.png) repeat-y 100% 100%;
  width: 980px;
  min-height: 700px;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
} */
.ds-sd1 {
  position: relative;
  float: right;
  width: 250px;
  font-size: 12px;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-text-size-adjust: none;
}
.ds-dengl {
  height: 126px;
  padding-top: 0;
  background: url(../../assets/index.png) no-repeat 0 0;
}
.ds-note {
  width: 205px;
  margin: 0 auto;
  padding: 16px 0;
  line-height: 22px;
}
#ds-login {
  margin: 0 auto;
  display: block;
  width: 100px;
  height: 31px;
  line-height: 31px;
  text-align: center;
  color: #fff;
  text-shadow: 0 1px 0 #8a060b;
  background: url(../../assets/index.png) no-repeat 0 -195px;
}
.ds-singer {
  margin-top: 15px;
}
.ds-hd3 {
  position: relative;
  height: 23px;
  margin: 0 20px;
  border-bottom: 1px solid #ccc;
  color: #333;
}
.ds-fl {
  float: left;
  color: #333;
  font-size: 12px;
}
.ds-more {
  float: right;
  font-weight: normal;
  color: #666;
  font-size: 12px;
}
.ds-singer-list {
  height: 380px;
  margin: 6px 0 14px 20px;
}
.ds-singer-list li {
  margin-top: 14px;
  float: left;
  width: 210px;
  height: 62px;
  background: #fafafa;
}
.ds-tdn {
  float: left;
  width: 210px;
  height: 62px;
  cursor: pointer;
  background: #fafafa;
}
.ds-head {
  float: left;
  width: 62px;
  height: 62px;
  cursor: pointer;
}
.ds-ifo {
  float: left;
  width: 133px;
  height: 60px;
  padding-left: 14px;
  border: 1px solid #e9e9e9;
  border-left: none;
  cursor: pointer;
}
.ds-ifo h4 {
  margin-top: 8px;
}
.ds-thide {
  width: 90%;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  font-size: 14px;
  color: #333;
  display: inline-block;
}
.ds-thide2 {
  cursor: pointer;
  width: 90%;
  margin-top: 8px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.ds-shenq {
  margin-left: 20px;
  border-radius: 4px;
  color: #333;
  padding: 0 5px 0 0;
  white-space: nowrap;
  display: inline-block;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
  background: url(../../assets/button2.png) no-repeat right -100px;
}
.ds-shenq i {
  width: 170px;
  font-weight: bold;
  color: #333;
  padding: 0 15px 0 20px;
  pointer-events: none;
  display: inline-block;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
  font-size: inherit;
  font-style: normal;
  cursor: pointer;
  background: url(../../assets/button2.png) no-repeat 0 -59px;
}
.ds-dj {
  margin-top: 30px;
}
.ds-v-hd3 {
  position: relative;
  height: 23px;
  margin: 0 20px;
  border-bottom: 1px solid #ccc;
  color: #333;
  font-size: 12px;
}
.ds-rem {
  margin: 20px 0 0 20px;
  height: 250px;
}
.ds-rem li {
  float: left;
  width: 210px;
  height: 50px;
}
.ds-cver {
  float: left;
  width: 40px;
  margin-right: 10px;
}
.ds-xing {
  display: inline-block;
  max-width: 88%;
  vertical-align: middle;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.ds-info {
  float: left;
  width: 160px;
  line-height: 21px;
}
.ds-v {
  width: 11px;
  height: 13px;
  background-position: 0 1px;
  font-size: 100%;
  font-style: normal;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  background: url(../../assets/icon.png) no-repeat;
}
.ds-f-thide {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
</style>