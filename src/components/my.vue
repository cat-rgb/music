<template>
  <div>
    <div>
      <div class="out">
    <div class="main"></div>
    <button></button>
    </div>
  </div>
    <div class="g_mymusic" v-show="false">
      <div class="g-bd3">
        <div class="g-sd3">
          <div class="ds-auti">
            <!-- 一个模块 -->
            <div class="n-minelst" @click="toggle">
              <h2 class="f-ff1">
                <a href class="xinj">
                  <i>新建</i>
                </a>
                <span class="rtitle">
                  <i :class="isTrue?'tro':'tri'"></i>
                  创建的歌单
                  <span class="f-pa"></span>
                  (
                  <!-- 歌单数量 -->
                  <span class="j-flag">1</span>
                  )
                </span>
              </h2>
              <ul class="j-flg" v-show="show">
                <div class="j-iflag">
                  <div class="itemw">
                    <div class="left">
                      <a href class="avatar">
                        <img
                          src="https://p2.music.126.net/EWC8bPR8WW9KvhaftdmsXQ==/3397490930543093.jpg?param=40y40"
                          alt
                        />
                      </a>
                    </div>
                    <p class="name">
                      <a href class="s-fc0">我喜欢的音乐</a>
                    </p>
                    <p class="num">0首</p>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <!-- 右边 -->
        <div class="ds-right">
          <div class="f-pr">
            <div class="j-flag">
              <div class="g-wrap">
                <div class="m-info">
                  <div class="cover">
                    <img
                      src="https://p2.music.126.net/PmYL0L48vbJQ1s8isQ1L1A==/18619129905605036.jpg?param=200y200"
                      alt
                    />
                    <span class="msk"></span>
                  </div>
                  <div class="cnt">
                    <div class="cntc">
                      <div class="hd">
                        <i class="typr"></i>
                        <h2>直播歌单——节奏感电音</h2>
                      </div>
                      <div class="user">
                        <a href class="face">
                          <img
                            src="http://p1.music.126.net/zAxFNrUis5zKlB3sueSEYA==/109951164039701466.jpg?param=200y200"
                            alt
                          />
                        </a>
                        <span class="name2">
                          <a href class="s-fc7">NobleLobster</a>
                        </span>
                        <span class="time">2018-02-01 创建</span>
                      </div>
                      <div class="btns">
                        <a id="flag_play">
                          <i>
                            <em class="ply"></em>播放
                          </i>
                        </a>
                        <a href class="u-btni"></a>
                        <a href class="yinyue">
                          <i>(4137)</i>
                        </a>
                        <!-- 分享 -->
                        <a href id="flag_share">
                          <i>(46)</i>
                        </a>
                        <!-- 下载 -->
                        <a href id="flag_dl">
                          <i>下载</i>
                        </a>
                        <!-- 评论 -->
                        <a href id="flag_comment">
                          <i>(137)</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 歌曲列表 -->
            <div class="j-flag2">
              <div id="auto-id-TkLp5bLo70g2zbKJ">
                <table class="m-table">
                  <!-- tou -->
                  <thead>
                    <tr>
                      <th class="first"></th>
                      <th>
                        <div class="wp"></div>
                      </th>
                      <th class="w2">
                        <div class="wp2"></div>
                      </th>
                      <th class="w3">
                        <div class="wp3"></div>
                      </th>
                      <th class="w4">
                        <div class="wp4"></div>
                      </th>
                    </tr>
                  </thead>
                  <!-- 1111 -->
                  <tbody style="border-collapse: collapse;border-spacing: 0;">
                    <tr id="4376088371575337128124" class="even">
                      <td class="ds-left">
                        <div class="ds-hd">
                          <span class="ds-ply"></span>
                          <span class="ds-num">1</span>
                        </div>
                      </td>
                      <td class>
                        <div class="f-cb-ds">
                          <div class="tt">
                            <div class="ttc-ds">
                              <span class="txt">
                                <a href style="font-size: 12px;">歌名</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td class="s-fc3">
                        <span class="u-dur">03:27</span>
                      </td>

                      <td>
                        <div class="text8">
                          <a href style="font-size: 12px;">歌手</a>
                        </div>
                      </td>

                      <td>
                        <div class="text8">
                          <a href style="font-size: 12px;">专辑</a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
  data() {
    return {
      show: true,
      isTrue: true
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
      this.isTrue = !this.isTrue;
    }
  }
};
</script>

<style scoped>
.out {
  width: 982px;
  height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  position: relative;
}
.out .main {
  width: 807px;
  height: 268px;
  margin: 0 auto 0;
  padding-top: 104px;
  background: url(https://s2.music.126.net/style/web2/img/mymusic.png?df2dd962fa9ecebe9e86f4372c485fb0)
    no-repeat;
  background-position: 0 104px;
}
button {
  width: 167px;
  height: 45px;
  border: none;
  position: absolute;
  top: 305px;
  right: 246px;
  background: transparent;
  cursor: pointer;
}
button:hover {
  background: url(https://s2.music.126.net/style/web2/img/mymusic.png?df2dd962fa9ecebe9e86f4372c485fb0)
    no-repeat;
  background-position: 0 -278px;
}
body {
  word-wrap: break-word;
  word-break: break-word;
}
.g_mymusic {
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
}
.g-bd3 {
  min-height: 331px;
  width: 980px;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  background: url(https://s2.music.126.net/style/web2/img/frame/wrap3.png?238383e75ae81bfc749e3bfbb84eef2b)
    repeat-y center 0;
}
.g-sd3 {
  height: 331px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 50px;
  padding-top: 40px;
  float: left;
  width: 240px;
  position: fixed;
}
.tro {
  border-color: #ccc transparent transparent !important;
  border-style: solid dashed dashed;
  border-width: 8px 7px 0;
  display: inline-block;
  vertical-align: middle;
  margin: 0 2px 0 5px;
  cursor: pointer;
  font-size: 0;
  height: 0;
  line-height: 0;
}
.n-minelst {
  margin-top: 5px;
}
.f-ff1 {
  padding: 0 10px 12px 15px;
  font-size: 14px;
  color: #000;
}
.xinj {
  width: 52px;
  height: 22px;
  float: right;
  display: inline-block;
  background: url(https://s2.music.126.net/style/web2/img/button.png?ef7f4710cc8ab2c121e0b342da8540d3)
    no-repeat 0 -96px;
}
.xinj i {
  display: inline-block;
  line-height: 22px;
  overflow: hidden;
  padding-left: 20px;
  color: #515151;
  font-size: 12px;
  font-weight: normal;
}
.rtitle {
  cursor: pointer;
  position: relative;
}
.tri {
  border: 8px solid #ccc;
  border-color: transparent transparent transparent #ccc;
  border-style: dashed dashed dashed solid;
  margin-right: 0;
  display: inline-block;
  vertical-align: middle;
  margin: 0 2px 0 5px;
  cursor: pointer;
  font-size: 0;
  height: 0;
  line-height: 0;
}
.f-pa {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-size: cover;
  background: url(https://s2.music.126.net/style/web2/img/black-r-icon@3x.png?d86120056fafd1e44483ad408ede9097);
}
.j-iflag {
  position: relative;
  height: 42px;
  padding: 6px 0 6px 20px;
  cursor: pointer;
}
.itemw {
  padding-left: 50px;
}
.left {
  display: inline;
  float: left;
  margin-left: -50px;
  overflow: hidden;
  width: 40px;
}
.avatar {
  display: block;
  position: relative;
  width: 40px;
  height: 40px;
}
.name {
  width: 150px;
  overflow: hidden;
  margin-top: 2px;
  margin-bottom: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.s-fc0 {
  color: #000;
  font-size: 12px;
}
.num {
  font-size: 12px;
}
.ds-right {
  height: 100%;
  float: right;
  width: 740px;
  padding-bottom: 50px;
  position: relative;
}
.f-pr {
  position: relative;
}
.g-wrap {
  padding: 40px;
}
.cover {
  position: relative;
  display: inline;
  margin: 0 -220px 0 0;
  width: 200px;
  height: 200px;
}
.msk {
  width: 208px;
  height: 208px;
  background-position: 0 -1285px;
  top: -4px;
  left: -4px;
  position: absolute;
}
.cnt {
  float: right;
  width: 100%;
}
.cntc {
  margin-left: 230px;
}
.hd {
  position: relative;
  margin: 0 0 12px;
  line-height: 24px;
}
.typr {
  position: relative;
  top: 3px;
  float: left;
  margin-right: 6px;
  width: 54px;
  height: 24px;
  display: inline-block;
  overflow: hidden;
  background: url(https://s2.music.126.net/style/web2/img/icon.png?a293dc35a8c900a5cc4e5c28d3eae9a7)
    no-repeat 0 -243px;
}
.hd h2 {
  line-height: 24px;
  font-size: 20px;
  font-weight: normal;
}
.user {
  margin: 0 0 20px;
  line-height: 35px;
}
.face {
  margin-right: 10px;
  float: left;
  width: 35px;
  height: 35px;
  cursor: pointer;
}
.name2 {
  max-width: 210px;
  float: left;
}
.face img {
  float: left;
  width: 35px;
  height: 35px;
}
.s-fc7 {
  color: #0c73c2;
  font-size: 12px;
}
.time {
  margin-left: 15px;
  line-height: 35px;
  font-size: 12px;
}
.btns {
  margin-bottom: 25px;
  margin-right: -30px;
}
#flag_play {
  float: left;
  color: #fff;
  text-decoration: none;
  padding: 0 5px 0 0;
  white-space: nowrap;
  display: inline-block;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  background: url(https://s2.music.126.net/style/web2/img/button2.png?9971191d2985dca705293488ca8b3494)
    no-repeat right -428px;
}
#flag_play i {
  color: #fff;
  pointer-events: none;
  display: inline-block;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
  background: url(https://s2.music.126.net/style/web2/img/button2.png?9971191d2985dca705293488ca8b3494)
    no-repeat 0 -387px;
}
.ply {
  float: left;
  width: 20px;
  height: 18px;
  margin: 6px 2px 2px 0;
  overflow: hidden;
  background: url(https://s2.music.126.net/style/web2/img/button2.png?9971191d2985dca705293488ca8b3494)
    no-repeat 0 -1622px;
}
.u-btni {
  margin-right: 5px;
  font-family: simsun, 宋体;
  width: 31px;
  margin-left: -3px;
  padding-right: 0;
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background: url(https://s2.music.126.net/style/web2/img/button2.png?9971191d2985dca705293488ca8b3494)
    no-repeat 0 -1588px;
}
.yinyue {
  margin-right: 6px;
  font-family: simsun, 宋体;
  cursor: default;
  padding: 0 5px 0 0;
  white-space: nowrap;
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  background: url(https://s2.music.126.net/style/web2/img/button2.png?9971191d2985dca705293488ca8b3494)
    no-repeat right -1192px;
}
.yinyue i {
  color: #bebebe;
  cursor: default;
  padding-right: 2px;
  padding-left: 28px;
  padding: 0 7px 0 36px;
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  background: url(https://s2.music.126.net/style/web2/img/button2.png?9971191d2985dca705293488ca8b3494)
    no-repeat 0 -1354px;
}
#flag_share {
  margin-right: 6px;
  font-family: simsun, 宋体;
  padding: 0 5px 0 0;
  white-space: nowrap;
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background: url(https://s2.music.126.net/style/web2/img/button2.png?9971191d2985dca705293488ca8b3494)
    no-repeat right -1020px;
}
#flag_share i {
  padding-right: 2px;
  padding-left: 28px;
  padding: 0 7px 0 36px;
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background: url(https://s2.music.126.net/style/web2/img/button2.png?9971191d2985dca705293488ca8b3494)
    no-repeat 0 -1225px;
}
#flag_dl {
  margin-right: 6px;
  font-family: simsun, 宋体;
  padding: 0 5px 0 0;
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background: url(https://s2.music.126.net/style/web2/img/button2.png?9971191d2985dca705293488ca8b3494)
    no-repeat right -1020px;
}
#flag_dl i {
  padding-right: 2px;
  padding-left: 28px;
  padding: 0 7px 0 36px;
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background: url(https://s2.music.126.net/style/web2/img/button2.png?9971191d2985dca705293488ca8b3494)
    no-repeat 0 -2761px;
}
#flag_comment {
  margin-right: 6px;
  font-family: simsun, 宋体;
  padding: 0 5px 0 0;
  white-space: nowrap;
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background: url(https://s2.music.126.net/style/web2/img/button2.png?9971191d2985dca705293488ca8b3494)
    no-repeat right -1020px;
}
#flag_comment i {
  padding-right: 2px;
  padding-left: 28px;
  padding: 0 7px 0 36px;
  float: left;
  height: 31px;
  line-height: 30px;
  min-width: 23px;
  cursor: pointer;
  background: url(https://s2.music.126.net/style/web2/img/button2.png?9971191d2985dca705293488ca8b3494)
    no-repeat 0 -1465px;
}
.m-table {
  width: 100%;
  border: 1px solid #d9d9d9;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
}
.first {
  width: 74px;
  height: 38px;
  background-color: #f7f7f7;
  background-repeat: repeat-x;
  vertical-align: top;
  text-align: left;
  font-weight: normal;
  color: #666;
  background: url(https://s2.music.126.net/style/web2/img/table.png?ef64f32934176fa84dc33f845daee9c3)
    no-repeat 0 0;
}
.m-table th {
  height: 38px;
  background-color: #f7f7f7;
  vertical-align: top;
  text-align: left;
  font-weight: normal;
  color: #666;
  background: url(https://s2.music.126.net/style/web2/img/table.png?ef64f32934176fa84dc33f845daee9c3)
    no-repeat 0 0;
  background-repeat: repeat-x;
}
.wp,
.wp2,
.wp3,
.wp4 {
  height: 18px;
  line-height: 18px;
  padding: 8px 10px;
  background: url(https://s2.music.126.net/style/web2/img/table.png?ef64f32934176fa84dc33f845daee9c3)
    no-repeat 0 -56px !important;
}
.wp::after {
  content: "\6b4c \66f2 \6807 \9898";
  line-height: 18px;
  font-size: 12px;
}
.w2 {
  width: 111px;
  height: 38px;
  background-color: #f7f7f7;
  background: url(https://s2.music.126.net/style/web2/img/table.png?ef64f32934176fa84dc33f845daee9c3)
    no-repeat 0 0 repeat-x;
}
.wp2::after {
  content: "\65f6 \957f";
  line-height: 18px;
  font-size: 12px;
}
.w3 {
  width: 14%;
  height: 38px;
  background-color: #f7f7f7;
  background: url(https://s2.music.126.net/style/web2/img/table.png?ef64f32934176fa84dc33f845daee9c3)
    no-repeat 0 0 repeat-x;
}
.wp3::after {
  content: "\6b4c \624b";
  line-height: 18px;
  font-size: 12px;
}
.w4 {
  width: 20%;
  height: 38px;
  background-color: #f7f7f7;
  background: url(https://s2.music.126.net/style/web2/img/table.png?ef64f32934176fa84dc33f845daee9c3)
    repeat 0 0 repeat-x;
}
.wp4::after {
  content: "\4e13 \8f91";
  line-height: 18px;
  font-size: 12px;
}
.ds-left {
  background-color: #f7f7f7;
  padding: 6px 10px;
  line-height: 18px;
  text-align: left;
  background: url(https://s2.music.126.net/style/web2/img/table.png?ef64f32934176fa84dc33f845daee9c3)
    no-repeat 0 9999px;
}
.ds-hd {
  height: 18px;
  line-height: 18px;
  text-align: left;
}
.ds-ply {
  float: right;
  width: 17px;
  height: 17px;
  cursor: pointer;
  background: no-repeat
    url(https://s2.music.126.net/style/web2/img/table.png?ef64f32934176fa84dc33f845daee9c3)
    0 -103px;
}
.ds-num {
  margin-left: 5px;
  color: #999;
  line-height: 18px;
  text-align: left;
  font-size: 12px;
}
.tt {
  float: left;
  width: 100%;
  line-height: 18px;
  text-align: left;
}
.ttc-ds {
  height: 18px;
  margin-right: 20px;
}
.txt {
  position: relative;
  display: inline-block;
  padding-right: 25px;
  margin-right: -25px;
  max-width: 99%;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.s-fc3 {
  background-color: #f7f7f7;
  padding: 6px 10px;
  line-height: 18px;
  text-align: left;
  background: url(https://s2.music.126.net/style/web2/img/table.png?ef64f32934176fa84dc33f845daee9c3)
    no-repeat 0 9999px;
}
.u-dur {
  line-height: 18px;
  text-align: left;
  font-size: 12px;
}
.even td {
  background-color: #f7f7f7;
  padding: 6px 10px;
  line-height: 18px;
  text-align: left;
  background: url(https://s2.music.126.net/style/web2/img/table.png?ef64f32934176fa84dc33f845daee9c3)
    no-repeat 0 9999px;
}
.text8 {
  width: 100%;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 18px;
  text-align: left;
}
</style>