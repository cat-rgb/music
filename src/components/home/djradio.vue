<template>
  <div>
    <div class="g-bd">
      <div class="g-wrap m-radio">
        <div id="id-category-box" class="rditype f-pr f-cd">
          <div class="boxes j-flay muti">
            <div class="swiper-button-next turn turn-left"></div>
            <div class="swiper-container lm1">
              <div class="swiper-wrapper">
                <div class="swiper-slide lmsp1">
                  <li v-for="(item,index) in data" :key="index">
                    <a>
                      <div class="icon">
                        <img :src="arr.itemDetail1[index].img" alt />
                      </div>
                      <em>{{arr.itemDetail1[index].tit}}</em>
                    </a>
                  </li>
                </div>
                <div class="swiper-slide lmsp1">
                  <li v-for="(item,index) in data1" :key="index">
                    <a>
                      <div class="icon">
                        <img :src="arr.itemDetail2[index].img" alt />
                      </div>
                      <em>{{arr.itemDetail2[index].tit}}</em>
                    </a>
                  </li>
                </div>
              </div>
              <!-- Add Arrows -->
            </div>
            <div class="swiper-button-prev turn turn-right"></div>
          </div>
        </div>
        <div class="rditop f-ch" style="display: inline-block;">
          <div class="blk f-fl">
            <div class="u-title f-cd">
              <h3>
                <a class="f-ff2">推荐节目</a>
              </h3>
              <a class="more s-fc3">更多 &gt;</a>
            </div>
            <ul class="m-plylist toplist">
              <li class="itm" v-for="(item,index) in data2" :key="index">
                <a class="cvr u-cover u-cover-tiny f-fl" title="播放">
                  <img :src="arr.itemDetail3[index].img" />
                </a>
                <div class="cnt f-f1">
                  <div class="f-thide">
                    <a class="s-fc1 f-fw0">{{arr.itemDetail3[index].tit1}}</a>
                  </div>
                  <p class="f-thide">
                    <a
                      class="s-fc4"
                      title="FEVER Electronic Music Series"
                    >{{arr.itemDetail3[index].tit2}}</a>
                  </p>
                </div>
                <a class="tag u-type">{{arr.itemDetail3[index].tit3}}</a>
              </li>
            </ul>
          </div>
          <div class="blk f-fr">
            <div class="u-title f-cd">
              <h3>
                <a class="f-ff2">节目排行榜</a>
              </h3>
              <a class="more s-fc3">更多 &gt;</a>
            </div>
            <ul class="m-plylist toplist">
              <li class="itm" v-for="(item,index) in data3" :key="index">
                <div class="rank s-fc4 f-f1">
                  <em class="red f-fs1">{{arr.itemDetail4[index].tit1}}</em>
                  <span class="u-rnk f-ff0">
                    <i class="u-icn u-icn-72"></i>
                    {{arr.itemDetail4[index].tit2}}
                  </span>
                </div>
                <a class="cvr u-cover u-cover-tiny f-fl lm2" title="播放" style="background:red">
                  <img :src="arr.itemDetail4[index].img" alt />
                </a>
                <div class="cnt f-fl lm3">
                  <h3 class="f-thide">
                    <a
                      href="/program?id=2064175462"
                      class="s-fc1 f-fw0"
                    >{{arr.itemDetail4[index].tit3}}</a>
                  </h3>
                  <p class="f-thide">
                    <a href="/djradio?id=793242384" class="s-fc4">{{arr.itemDetail4[index].tit4}}</a>
                  </p>
                </div>
                <span class="hot u-hot f-fl lm4">
                  <i :width="arr.itemDetail4[index].width">
                    <i></i>
                  </i>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="rdimore">
          <div class="u-title f-cb">
            <h3>
              <span class="f-ff2">
                <a>音乐故事</a>
                <span class="f-ff1">·</span>电台
              </span>
            </h3>
            <a class="more s-fc3">更多 &gt;</a>
          </div>
          <ul class="rdilist f-cb">
            <li v-for="(item,index) in data4" :key="index">
              <a class="cvr u-cover u-cover-rdi f-fl">
                <img
                  :src="arr.itemDetail5[index].img"
                  alt
                />
              </a>
              <div class="cnt">
                <h3 class="f-fs3">
                  <a  class="s-fc1" title="谜醉音乐FM">{{arr.itemDetail5[index].tit1}}</a>
                </h3>
                <p class="note s-fc4">{{arr.itemDetail5[index].tit2}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="rdimore">
          <div class="u-title f-cb">
            <h3>
              <span class="f-ff2">
                <a>美文读物</a>
                <span class="f-ff1">·</span>电台
              </span>
            </h3>
            <a class="more s-fc3">更多 &gt;</a>
          </div>
          <ul class="rdilist f-cb">
            <li v-for="(item,index) in data5" :key="index">
              <a class="cvr u-cover u-cover-rdi f-fl">
                <img
                  :src="arr.itemDetail6[index].img"
                  alt
                />
              </a>
              <div class="cnt">
                <h3 class="f-fs3">
                  <a  class="s-fc1" title="谜醉音乐FM">{{arr.itemDetail6[index].tit1}}</a>
                </h3>
                <p class="note s-fc4">{{arr.itemDetail6[index].tit2}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="rdimore">
          <div class="u-title f-cb">
            <h3>
              <span class="f-ff2">
                <a>脱口秀</a>
                <span class="f-ff1">·</span>电台
              </span>
            </h3>
            <a class="more s-fc3">更多 &gt;</a>
          </div>
          <ul class="rdilist f-cb">
            <li v-for="(item,index) in data6" :key="index">
              <a class="cvr u-cover u-cover-rdi f-fl">
                <img
                  :src="arr.itemDetail7[index].img"
                  alt
                />
              </a>
              <div class="cnt">
                <h3 class="f-fs3">
                  <a  class="s-fc1" title="谜醉音乐FM">{{arr.itemDetail7[index].tit1}}</a>
                </h3>
                <p class="note s-fc4">{{arr.itemDetail7[index].tit2}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="rdimore">
          <div class="u-title f-cb">
            <h3>
              <span class="f-ff2">
                <a>情感调频</a>
                <span class="f-ff1">·</span>电台
              </span>
            </h3>
            <a class="more s-fc3">更多 &gt;</a>
          </div>
          <ul class="rdilist f-cb">
            <li v-for="(item,index) in data7" :key="index">
              <a class="cvr u-cover u-cover-rdi f-fl">
                <img
                  :src="arr.itemDetail8[index].img"
                  alt
                />
              </a>
              <div class="cnt">
                <h3 class="f-fs3">
                  <a  class="s-fc1" title="谜醉音乐FM">{{arr.itemDetail8[index].tit1}}</a>
                </h3>
                <p class="note s-fc4">{{arr.itemDetail8[index].tit2}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="rdimore">
          <div class="u-title f-cb">
            <h3>
              <span class="f-ff2">
                <a>创作|翻唱</a>
                <span class="f-ff1">·</span>电台
              </span>
            </h3>
            <a class="more s-fc3">更多 &gt;</a>
          </div>
          <ul class="rdilist f-cb">
            <li v-for="(item,index) in data8" :key="index">
              <a class="cvr u-cover u-cover-rdi f-fl">
                <img
                  :src="arr.itemDetail9[index].img"
                  alt
                />
              </a>
              <div class="cnt">
                <h3 class="f-fs3">
                  <a  class="s-fc1" title="谜醉音乐FM">{{arr.itemDetail9[index].tit1}}</a>
                </h3>
                <p class="note s-fc4">{{arr.itemDetail9[index].tit2}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="rdimore">
          <div class="u-title f-cb">
            <h3>
              <span class="f-ff2">
                <a>人文历史</a>
                <span class="f-ff1">·</span>电台
              </span>
            </h3>
            <a class="more s-fc3">更多 &gt;</a>
          </div>
          <ul class="rdilist f-cb">
            <li v-for="(item,index) in data9" :key="index">
              <a class="cvr u-cover u-cover-rdi f-fl">
                <img
                  :src="arr.itemDetail10[index].img"
                  alt
                />
              </a>
              <div class="cnt">
                <h3 class="f-fs3">
                  <a  class="s-fc1" title="谜醉音乐FM">{{arr.itemDetail10[index].tit1}}</a>
                </h3>
                <p class="note s-fc4">{{arr.itemDetail10[index].tit2}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  data() {
    return {
      data: [],
      arr: [],
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      data5: [],
      data6: [],
      data7: [],
      data8: [],
      data9: []
    };
  },
  mounted() {
    this.$axios({
      url: "../../static/json/djradio.json",
      method: "get",
      params: []
    })
      .then(res => {
        this.arr = res.data;
        // console.log(res.data)
        this.data = res.data.itemDetail1;
        this.data1 = res.data.itemDetail2;
        this.data2 = res.data.itemDetail3;
        this.data3 = res.data.itemDetail4;
        this.data4 = res.data.itemDetail5;
        this.data5 = res.data.itemDetail6;
        this.data6 = res.data.itemDetail7;
        this.data7 = res.data.itemDetail8;
        this.data8 = res.data.itemDetail9;
        this.data9 = res.data.itemDetail10;
        // console.log(res.data.itemDetail4);
      })
      .catch(error => {
        console.log(error);
      });
    var swiper = new Swiper(".lm1", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
}
a {
  cursor: pointer;
  color: #333;
}
li {
  list-style: none;
}
body {
  font-size: 12px;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-text-size-adjust: none;
}
.g-bd {
  width: 980px;
  min-height: 3325px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid#d3d3d3;
  border-width: 0 1px;
}
.g-wrap {
  padding: 40px;
}
.m-radio .rditype {
  margin-bottom: 20px;
}
.f-pr {
  position: relative;
  zoom: 1;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: left;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-button-prev::after,
.swiper-container-rtl .swiper-button-next::after {
  content: "" !important;
}
.swiper-button-next::after,
.swiper-container-rtl .swiper-button-prev::after {
  content: "" !important;
}
.m-radio .rditype .turn {
  position: absolute;
  top: 50%;
  width: 20px;
  height: 30px;
  margin-top: -15px;
  opacity: 0.25;
  filter: alpha(opacity=25);
  text-indent: -9999px;
  cursor: pointer;
}
.m-radio .rditype .turn {
  background: url(https://s2.music.126.net/style/web2/img/index_radio/radio_slide.png?a93883dfb9c6e007d548a79aec8f0c6c);
}
.m-radio .rditype .turn-right {
  left: -26px;
  background-position: 0 -30px;
}
.m-radio .rditype .turn-left {
  right: -26px;
  background-position: -30px -30px;
}
.lm1 {
  margin-left: -33px;
}
.m-radio .rditype li {
  float: left;
  margin: 0 0 25px 30px;
}
.m-radio .rditype a {
  display: block;
  width: 70px;
  height: 70px;
  background-position: 0 9999px;
  text-align: center;
  color: #888;
}
.m-radio .rditype .icon {
  width: 48px;
  height: 48px;
  margin: 2px auto 0;
  background-position: 0 0;
  overflow: hidden;
}
.m-radio .rditype a em {
  margin-top: -3px;
  font-size: 12px;
}
.m-radio .rditop {
  margin-top: 10px;
}
.m-radio .rditop .blk {
  width: 426px;
}

.f-fl {
  float: left;
}
.f-fr {
  float: right;
}
.u-title {
  height: 40px;
  border-bottom: 2px solid #c20c0c;
}
.u-title h3 {
  float: left;
  font-size: 24px;
  font-weight: normal;
}
.f-ff2 {
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
}
.u-title .more {
  float: right;
  margin-top: 14px;
}
.f-cb::after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.m-radio .toplist {
  height: 600px;
  border: 1px solid #e2e2e2;
  border-top: none;
}
.m-radio .toplist .itm {
  width: 424px;
  height: 40px;
  padding: 10px 0;
  line-height: 40px;
}
.m-plylist .itm {
  float: left;
  width: 100%;
  background: #fff;
}
.m-radio .toplist .itm {
  line-height: 40px;
}
.m-radio .toplist .cvr {
  margin-left: 20px;
  _margin-left: 10px;
}
.u-cover-tiny {
  width: 40px;
  height: 40px;
}
.m-radio .toplist .cnt {
  width: 254px;
  margin: 1px 0 0 70px;
  line-height: 20px;
}
.f-thide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.s-fc1 {
  color: #333;
}
.f-fw0 {
  font-weight: normal;
}
.m-radio .toplist .tag {
  margin: 1px 0 0 10px;
  margin-top: 9px;
}
.u-type {
  display: block;
  position: relative;
  float: left;
  top: -30px;
  right: -315px;
  height: 16px;
  overflow: hidden;
  padding: 0 6px;
  border: 1px solid #999;
  line-height: 16px;
  color: #999;
  vertical-align: middle;
  font-size: 12px;
}
.m-radio .rdimore {
  margin-top: 35px;
}
.m-radio .toplist .rank {
  width: 47px;
  margin: 6px 0 0 0;
  text-align: center;
  line-height: normal;
}
.m-radio .toplist .rank em {
  display: block;
  width: 100%;
  text-align: center;
}
.m-radio .toplist .rank .red {
  color: #da4545;
}
.f-fs1 {
  font-size: 14px;
}
.u-rnk {
  line-height: normal;
  font-size: 10px;
}
.f-ff0 {
  font-family: Arial, Helvetica, sans-serif;
}
.u-rnk i {
  margin: -1px 2px 0 0;
  vertical-align: middle;
}
.u-icn-72 {
  width: 6px;
  height: 6px;
  background-position: -74px -274px;
}
.m-radio .toplist-r .cvr {
  margin-left: 0;
}
.u-cover-tiny {
  width: 40px;
  height: 40px;
}
.u-cover {
  position: relative;
  display: block;
}
.lm2 {
  position: relative;
  top: -38px;
  left: 28px;
}
.lm3 {
  position: relative;
  top: -38px;
  left: -28px;
}
.m-radio .toplist .hot {
  margin-top: 21px;
}
.u-hot,
.u-hot i {
  display: block;
  height: 8px;
}
.u-hot {
  display: block;
  position: relative;
  width: 100px;
  background-position: 0 -240px;
  line-height: normal;
}
.u-hot i {
  overflow: hidden;
  padding: 0 4px;
  background-position: right -318px;
  background: url(https://s2.music.126.net/style/web2/img/table.png?46434914b5272f93752ee3155b30ed62);
}
.u-hot i i {
  margin-left: -4px;
  padding: 0 0 0 4px;
  background-position: 0 -304px;
}
.lm4 {
  position: relative;
  top: -79px;
  right: -315px;
}
.m-radio .rdilist {
  margin-left: -30px;
}
.m-radio .rdilist li {
  float: left;
  width: 435px;
  height: 120px;
  margin-left: 30px;
  _margin-left: 15px;
  padding: 20px 0;
  border-bottom: 1px solid #e7e7e7;
}
.m-radio .rdilist .cvr {
  margin-right: -200px;
}
.m-radio .rdilist .cnt {
  margin-left: 140px;
}
.u-cover img {
  display: block;
  width: 100%;
  height: 100%;
}
.m-radio .rdilist .note {
  margin-bottom: 6px;
  line-height: 20px;
}
.m-radio .rdilist h3 {
  margin: 16px 0 20px;
}
.u-cover-rdi {
  width: 120px;
  height: 120px;
}
.u-cover {
  position: relative;
  display: block;
}
</style>