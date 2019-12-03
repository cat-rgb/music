<template>
  <div>
    <div class="head">
      <div class="wrap">
        <div class="logo"></div>
        <div class="search">
          <input type="text" name id placeholder="真无线耳机" />
        </div>
        <div class="shop">
          <span class="num">0</span>
        </div>
        <div class="login">
          登录
          <ul>
            <li>
              <em class="phone"></em>
              手机号登录
            </li>
            <li>
              <em class="wechat"></em>
              微信登录
            </li>
            <li>
              <em class="qq"></em>
              qq登录
            </li>
            <li>
              <em class="sina"></em>
              新浪微博登录
            </li>
            <li>
              <em class="netease"></em>
              网易邮箱账号登录
            </li>
          </ul>
          <i class="icon"></i>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="swiper-container swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="banner">
              <img
                src="http://p3.music.126.net/a_ZP8Egdh1NtVw3nkuCZXg==/109951164518548585.jpg"
                alt
              />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="banner2">
              <img
                src="http://p3.music.126.net/Ja8qa5-QCHe-W2rxjsiL7Q==/109951164518547512.jpg"
                alt
              />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="banner3">
              <img
                src="http://p3.music.126.net/I4o-DCNpQtz552wHaGZS-g==/109951164518464281.jpg"
                alt
              />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="banner4">
              <img
                src="http://p4.music.126.net/RYi6d4NQSPZhTQmFTZBbQw==/109951164515881271.jpg"
                alt
              />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="banner5">
              <img
                src="http://p4.music.126.net/WbVZMNnTZN5728ciykiFRQ==/109951164515083744.jpg"
                alt
              />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="banner6">
              <img
                src="http://p4.music.126.net/VrliuSEzECvZDF5dGxTS3A==/109951164512994465.jpg"
                alt
              />
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next"></div>
        <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
      <div class="wrap">
        <div>
          <em></em>
          <img src="http://p3.music.126.net/UKhDHWnEMmoOo27PQmDPbA==/19117208672446378.jpg" alt />
          <span>热销爆品</span>
        </div>
        <div>
          <em></em>
          <img src="http://p4.music.126.net/tKMAm5OvR-2lAj7dnEOhsg==/18623527952924939.jpg" alt />
          <span>IP周边</span>
        </div>
        <div>
          <em></em>
          <img src="http://p3.music.126.net/PzH4QQKE5R97J9f2V-SvqQ==/18585045045959929.jpg" alt />
          <span>数码影音</span>
        </div>
        <div>
          <img
            src="https://s2.music.126.net/store/web/img/jifen.png?300e05c16260bd68f3e23338e6c216e8"
            alt
          />
          <span>积分商城</span>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="content1">
        <div class="sub">
          <img src="http://p4.music.126.net/kQqf40w-NFhLXIksQPgSwg==/109951164207184328.jpg" alt />
        </div>
        <div class="sub">
          <img src="http://p4.music.126.net/QtFPuBnRPFatpnGsyNJYhw==/109951163973446450.jpg" alt />
        </div>
      </div>
      <div class="content2">
        <h1 class="title">编辑推荐</h1>
        <div class="product">
          <div class="goods" v-for="(item, index) in list1" :key="index">
            <img :src="item.img" alt />
            <div class="des">
              <h3>
                <span>特价</span>
                <a href>{{item.des}}</a>
              </h3>
              <p class="price">￥{{item.price}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content3">
        <div class="inner">
          <span>
            <i></i>
            数字专辑
          </span>
          <p>Taylor Swift 新专辑火热售卖中</p>
          <a href>立 即 购 买 ></a>
        </div>
        <div class="pic">
          <img
            src="https://p1.music.126.net/D1gL45hPNWNxoq1Foanh6Q==/109951164370176967.jpg?param=120y120"
            alt
            class="img1"
          />
          <img
            src="https://p2.music.126.net/6CB6Jsmb7k7qiJqfMY5Row==/109951164260234943.jpg?param=120y120"
            alt
            class="img2"
          />
          <i></i>
        </div>
      </div>
      <div class="content4">
        <h1 class="title">热门商品</h1>
        <div class="product">
          <div class="goods" v-for="(item, index) in list2" :key="index">
            <img :src="item.img" alt />
            <div class="des">
              <h3>
                <span>特价</span>
                <a href>{{item.des}}</a>
              </h3>
              <p class="price">￥{{item.price}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  mounted() {
    document.getElementsByTagName("title")[0].innerHTML = "云音乐商城";
    // 轮播图
    var swiper = new Swiper(".swiper-container", {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      loop: true,
      observer: true,
      observeParents: true
    });
    swiper.el.onmouseover = function() {
      swiper.autoplay.stop();
    };
    swiper.el.onmouseleave = function() {
      swiper.autoplay.start();
    };
  },
  data() {
    return {
      list1: [
        {
          img:
            "http://p4.music.126.net/bjuML9O6zMvw22miFq3sUg==/109951164202388691.jpg?param=244y244",
          des: "伯朗 i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用",
          price: 129
        },
        {
          img:
            "http://p3.music.126.net/beiczpZk_x4tNqK2RNqoEg==/109951164389371286.jpg?param=244y244",
          des: "kinbor 音乐的力量套装 DTB6550",
          price: 138
        },
        {
          img:
            "http://p3.music.126.net/bkBHYFMjYuufyULKoSpu-w==/109951164386108151.jpg?param=244y244",
          des: "网易云音乐青春系列印花羽绒服 NO.1",
          price: 369
        },
        {
          img:
            "http://p4.music.126.net/SuPD2sAWzilVM2OpcwYr6A==/109951164310449986.jpg?param=244y244",
          des: "网易云音乐联名款真无线蓝牙耳机TWS1",
          price: 298
        },
        {
          img:
            "http://p4.music.126.net/iZRyIW1Cwit0ol1gJZ2OZA==/109951164523959687.jpg?param=244y244",
          des: "电钢琴88键智能家用专业成人初学者数码儿童电子钢琴",
          price: 1599
        },
        {
          img:
            "http://p3.music.126.net/eZO47Pir75pgd1eQbY4OVA==/109951164094159737.jpg?param=244y244",
          des: "伯朗 i9S蓝牙5.0真无线耳机双耳通话苹果安卓通用",
          price: 89
        },
        {
          img:
            "http://p4.music.126.net/BWZCBNkmsGHepFgXbz_LGw==/109951164205753600.jpg?param=244y244",
          des: "兰士顿 D4线控重低音炮四核双动圈耳机 苹果安卓通用 带麦",
          price: 99
        },
        {
          img:
            "http://p4.music.126.net/lmfGbwn-QLVfLCvLabmJwQ==/109951164495968246.jpg?param=244y244",
          des: "网易云音乐潮流系列保温杯",
          price: 49
        }
      ],
      list2: [
        {
          img:
            "http://p4.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=329x9999&quality=75",
          des: "伯朗 E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话",
          price: 299
        },
        {
          img:
            "http://p4.music.126.net/R_r4pT1Gh874yl_G8kGhtg==/18905002928382973.jpg?param=329x9999&quality=75",
          des: "网易云音乐&本来设计 原木创意手机支架手机座扩音器",
          price: 149
        },
        {
          img:
            "http://p3.music.126.net/517Cf4Nuebgpn476tMbXyQ==/109951164017036341.jpg?param=329x9999&quality=75",
          des: "击音【触控级】降噪防水手势识别蓝牙运动耳机",
          price: 149
        },
        {
          img:
            "http://p3.music.126.net/CuFi30UFj9utZXs6mTpNPA==/18984167765584687.jpg?param=329x9999&quality=75",
          des: "本来设计 原创木质冰箱磁贴 创意礼品生日礼物",
          price: 59
        },
        {
          img:
            "http://p3.music.126.net/GFl96omijnkthA9BJmR6YA==/109951164389493621.jpg?param=329x9999&quality=75",
          des: "网易云音乐联名款W800X头戴式蓝牙耳机",
          price: 199
        },
        {
          img:
            "http://p4.music.126.net/AJROyT-mKFn8sQhl5Z-QEg==/109951164111206325.jpg?param=329x9999&quality=75",
          des: "JBL C200SI立体声入耳式耳机  手机音乐耳机 运动游戏耳机 耳机耳麦 带麦可通话",
          price: 138
        },
        {
          img:
            "http://p4.music.126.net/8kcx8B6BGwcqcWN2EbFIXg==/109951163679752096.jpg?param=329x9999&quality=75",
          des: "网易云音乐氧气蓝牙耳机Pro版",
          price: 399
        },
        {
          img:
            "http://p4.music.126.net/6qF9znLn2yfBgBjunZx9bg==/109951163725394326.jpg?param=329x9999&quality=75",
          des: "漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机 蓝牙5.0 左右可独立使用",
          price: 299
        },
        {
          img:
            "http://p4.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=329x9999&quality=75",
          des: "伯朗 E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话",
          price: 299
        },
        {
          img:
            "http://p4.music.126.net/R_r4pT1Gh874yl_G8kGhtg==/18905002928382973.jpg?param=329x9999&quality=75",
          des: "网易云音乐&本来设计 原木创意手机支架手机座扩音器",
          price: 149
        },
        {
          img:
            "http://p3.music.126.net/517Cf4Nuebgpn476tMbXyQ==/109951164017036341.jpg?param=329x9999&quality=75",
          des: "击音【触控级】降噪防水手势识别蓝牙运动耳机",
          price: 149
        },
        {
          img:
            "http://p3.music.126.net/CuFi30UFj9utZXs6mTpNPA==/18984167765584687.jpg?param=329x9999&quality=75",
          des: "本来设计 原创木质冰箱磁贴 创意礼品生日礼物",
          price: 59
        },
        {
          img:
            "http://p3.music.126.net/GFl96omijnkthA9BJmR6YA==/109951164389493621.jpg?param=329x9999&quality=75",
          des: "网易云音乐联名款W800X头戴式蓝牙耳机",
          price: 199
        },
        {
          img:
            "http://p4.music.126.net/AJROyT-mKFn8sQhl5Z-QEg==/109951164111206325.jpg?param=329x9999&quality=75",
          des: "JBL C200SI立体声入耳式耳机  手机音乐耳机 运动游戏耳机 耳机耳麦 带麦可通话",
          price: 138
        },
        {
          img:
            "http://p4.music.126.net/8kcx8B6BGwcqcWN2EbFIXg==/109951163679752096.jpg?param=329x9999&quality=75",
          des: "网易云音乐氧气蓝牙耳机Pro版",
          price: 399
        },
        {
          img:
            "http://p4.music.126.net/6qF9znLn2yfBgBjunZx9bg==/109951163725394326.jpg?param=329x9999&quality=75",
          des: "漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机 蓝牙5.0 左右可独立使用",
          price: 299
        },
        {
          img:
            "http://p4.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=329x9999&quality=75",
          des: "伯朗 E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话",
          price: 299
        },
        {
          img:
            "http://p4.music.126.net/R_r4pT1Gh874yl_G8kGhtg==/18905002928382973.jpg?param=329x9999&quality=75",
          des: "网易云音乐&本来设计 原木创意手机支架手机座扩音器",
          price: 149
        },
        {
          img:
            "http://p3.music.126.net/517Cf4Nuebgpn476tMbXyQ==/109951164017036341.jpg?param=329x9999&quality=75",
          des: "击音【触控级】降噪防水手势识别蓝牙运动耳机",
          price: 149
        },
        {
          img:
            "http://p3.music.126.net/CuFi30UFj9utZXs6mTpNPA==/18984167765584687.jpg?param=329x9999&quality=75",
          des: "本来设计 原创木质冰箱磁贴 创意礼品生日礼物",
          price: 59
        },
        {
          img:
            "http://p3.music.126.net/GFl96omijnkthA9BJmR6YA==/109951164389493621.jpg?param=329x9999&quality=75",
          des: "网易云音乐联名款W800X头戴式蓝牙耳机",
          price: 199
        },
        {
          img:
            "http://p4.music.126.net/AJROyT-mKFn8sQhl5Z-QEg==/109951164111206325.jpg?param=329x9999&quality=75",
          des: "JBL C200SI立体声入耳式耳机  手机音乐耳机 运动游戏耳机 耳机耳麦 带麦可通话",
          price: 138
        },
        {
          img:
            "http://p4.music.126.net/8kcx8B6BGwcqcWN2EbFIXg==/109951163679752096.jpg?param=329x9999&quality=75",
          des: "网易云音乐氧气蓝牙耳机Pro版",
          price: 399
        },
        {
          img:
            "http://p4.music.126.net/6qF9znLn2yfBgBjunZx9bg==/109951163725394326.jpg?param=329x9999&quality=75",
          des: "漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机 蓝牙5.0 左右可独立使用",
          price: 299
        },
        {
          img:
            "http://p4.music.126.net/amHv4RfrvGUX-5k3dpHzeQ==/109951163689849242.jpg?param=329x9999&quality=75",
          des: "伯朗 E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话",
          price: 299
        },
        {
          img:
            "http://p4.music.126.net/R_r4pT1Gh874yl_G8kGhtg==/18905002928382973.jpg?param=329x9999&quality=75",
          des: "网易云音乐&本来设计 原木创意手机支架手机座扩音器",
          price: 149
        },
        {
          img:
            "http://p3.music.126.net/517Cf4Nuebgpn476tMbXyQ==/109951164017036341.jpg?param=329x9999&quality=75",
          des: "击音【触控级】降噪防水手势识别蓝牙运动耳机",
          price: 149
        },
        {
          img:
            "http://p3.music.126.net/CuFi30UFj9utZXs6mTpNPA==/18984167765584687.jpg?param=329x9999&quality=75",
          des: "本来设计 原创木质冰箱磁贴 创意礼品生日礼物",
          price: 59
        },
        {
          img:
            "http://p3.music.126.net/GFl96omijnkthA9BJmR6YA==/109951164389493621.jpg?param=329x9999&quality=75",
          des: "网易云音乐联名款W800X头戴式蓝牙耳机",
          price: 199
        },
        {
          img:
            "http://p4.music.126.net/AJROyT-mKFn8sQhl5Z-QEg==/109951164111206325.jpg?param=329x9999&quality=75",
          des: "JBL C200SI立体声入耳式耳机  手机音乐耳机 运动游戏耳机 耳机耳麦 带麦可通话",
          price: 138
        }
      ]
    };
  }
};
</script>

<style>
.b-out {
  display: none;
}
.head {
  height: 70px;
}
.wrap {
  width: 1100px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.head .wrap {
  overflow: visible;
}
.head .logo {
  float: left;
  width: 290px;
  height: 100%;
  background: url(https://s2.music.126.net/store/web/img/sprite/modules.png?eb4d9a890120d63e8bd158c636702471)
    no-repeat;
  background-position: 0px -48px;
  cursor: pointer;
}
.head .search {
  width: 300px;
  height: 38px;
  margin-top: 15px;
  background: url(https://s2.music.126.net/store/web/img/sprite/modules.png?eb4d9a890120d63e8bd158c636702471)
    no-repeat;
  background-position: 0px -0px;
  float: left;
  margin-left: 334px;
  position: relative;
}
.head .search input {
  width: 80%;
  margin: 12px 0 0 34px;
  border: 0;
  background: transparent;
}
.head .shop {
  width: 36px;
  height: 36px;
  margin: 17px 0 0 41px;
  float: left;
  background: url(https://s2.music.126.net/store/web/img/sprite/modules.png?eb4d9a890120d63e8bd158c636702471)
    no-repeat;
  background-position: -110px -158px;
  cursor: pointer;
  position: relative;
}
.head .num {
  position: absolute;
  background: url(https://s2.music.126.net/store/web/img/sprite/modules.png?eb4d9a890120d63e8bd158c636702471)
    no-repeat;
  top: -8px;
  left: 26px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  color: #fff;
  background-position: -156px -158px;
}
.head .login {
  width: 62px;
  height: 36px;
  margin: 15px 0 0 37px;
  background: url(https://s2.music.126.net/store/web/img/arrow-d.png?1f442e3ae48220cf44d1fc3ec4ebaa99)
    no-repeat 110% center;
  float: left;
  cursor: pointer;
  line-height: 36px;
  text-align: left;
  text-indent: 10px;
  font-size: 14px;
}
.head ul {
  position: absolute;
  z-index: 100;
  top: 70px;
  right: 143px;
  width: 160px;
  height: auto;
  box-shadow: 0 4px 7px #555;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
  overflow: hidden;
  display: none;
}
.head li {
  padding-left: 24px;
  font-size: 12px;
  color: #333;
  background-color: #fff;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.head li:hover {
  background: rgb(248, 248, 248);
}
.head em {
  display: inline-block;
  position: relative;
  top: 4px;
  width: 18px;
  height: 18px;
  margin-right: 9px;
}
.head .phone {
  background: url(https://s2.music.126.net/store/web/img/phonelog.png?c1ded3f8bcb4d3b99a1b6448b3621c4e)
    no-repeat;
}
.head .wechat {
  background: url(https://s2.music.126.net/store/web/img/sprite/logins.png?070dac1e29a846e99e4c3b8966e3f927)
    no-repeat;
  background-position: -112px -0px;
}
.head .qq {
  background: url(https://s2.music.126.net/store/web/img/sprite/logins.png?070dac1e29a846e99e4c3b8966e3f927)
    no-repeat;
  background-position: -112px -0px;
}
.head .sina {
  background: url(https://s2.music.126.net/store/web/img/sina.png?6c103428cab9ce2f5f180593bbed7a26)
    no-repeat;
}
.head .netease {
  background: url(https://s2.music.126.net/store/web/img/netease.png?8c0dd2a6f754dfb72d237a9668292d2a)
    no-repeat;
}
.head .icon {
  position: absolute;
  top: 52px;
  right: 143px;
  z-index: 100;
  width: 160px;
  height: 18px;
  background: url(https://s2.music.126.net/store/web/img/sprite/modules.png?eb4d9a890120d63e8bd158c636702471)
    no-repeat;
  background-position: 0px -128px;
  display: none;
}
.head .login:hover {
  background: url(https://s2.music.126.net/store/web/img/arrow-u.png?e55f04d3227b22ca7a123e1114ce2b39)
    no-repeat 110% center;
}
.head .login:hover ul {
  display: block;
}
.head .login:hover .icon {
  display: block;
}
.content {
  overflow: hidden;
}
.swiper {
  width: 100%;
  height: 480px;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  content: "";
}
.swiper-button-prev,
.swiper-button-next {
  width: 37px;
  height: 63px;
  background: #000;
  opacity: 0.1;
  cursor: pointer;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  opacity: 0.2;
}
.swiper-button-prev {
  background-image: url(https://s2.music.126.net/store/web/img/sprite/pointlist.png?2d4d08a9dd73184a3613ae3792d63a22);
  background-position: 0px -0px;
}
.swiper-button-next {
  background-image: url(https://s2.music.126.net/store/web/img/sprite/pointlist.png?2d4d08a9dd73184a3613ae3792d63a22);
  background-position: -48px -0px;
}
.swiper-pagination-bullet-active {
  background: red;
}
.content .banner {
  width: 100%;
  height: 100%;
  background: url(http://p3.music.126.net/IGdX0PZcuwc3RneEJT0Z1A==/109951164513000672.jpg)
    repeat-x;
}
.content img {
  display: block;
  width: 1100px;
  height: 100%;
  margin: 0 auto;
}
.content .banner2 {
  width: 100%;
  height: 100%;
  background: url(http://p3.music.126.net/zCtehVmrpO75Q-Iqx7Uxqg==/109951164518545084.jpg)
    repeat-x;
}
.content .banner3 {
  width: 100%;
  height: 100%;
  background: url(http://p4.music.126.net/vTDjk9xh-xeQn026uWIpuw==/109951164518464715.jpg)
    repeat-x;
}
.content .banner4 {
  width: 100%;
  height: 100%;
  background: url(http://p4.music.126.net/D9yu95xtesb5iY4N3ZqKFg==/109951164515882229.jpg)
    repeat-x;
}
.content .banner5 {
  width: 100%;
  height: 100%;
  background: url(http://p3.music.126.net/mVcLeQVv7UwyThzJObBVFA==/109951164515072718.jpg)
    repeat-x;
}
.content .banner6 {
  width: 100%;
  height: 100%;
  background: url(http://p3.music.126.net/IGdX0PZcuwc3RneEJT0Z1A==/109951164513000672.jpg)
    repeat-x;
}
.content .wrap {
  height: 80px;
}
.content .wrap div {
  box-sizing: border-box;
  float: left;
  width: 275px;
  height: 100%;
  position: relative;
  cursor: pointer;
}
.content .wrap em {
  height: 48px;
  width: 1px;
  background: rgb(230, 230, 230);
  position: absolute;
  top: 18px;
  right: 0;
}
.content .wrap img {
  display: inline-block;
  width: 48px;
  height: 48px;
  vertical-align: top;
  padding-top: 16px;
  margin-left: 80px;
}
.content .wrap span {
  display: inline-block;
  max-width: 190px;
  height: 80px;
  padding-left: 12px;
  line-height: 80px;
  font-size: 14px;
  font-weight: bold;
  color: #333333;
}
.content {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.content1 {
  margin-top: 40px;
  overflow: hidden;
}
.content1 .sub {
  float: left;
  width: 542px;
  height: 300px;
}
.content1 .sub:first-child {
  padding-right: 16px;
}
.content1 .sub img {
  cursor: pointer;
}
.content2 {
  margin-top: 50px;
}
.title {
  font-size: 24px;
  color: #333;
  font-weight: bold;
}
.product {
  overflow: hidden;
}
.goods {
  float: left;
  position: relative;
  width: 263px;
  height: 382px;
  margin-right: 16px;
}
.product .goods:nth-child(4n) {
  margin-right: 0;
}
.product img {
  width: 263px;
  cursor: pointer;
}
.des {
  margin-top: 10px;
}
.des h3 {
  font-size: 14px;
  line-height: 18px;
  font-weight: normal;
  color: #333;
  text-align: center;
}
.des h3 span {
  box-sizing: border-box;
  line-height: 19px;
  padding: 0 3px;
  border-radius: 1px;
  color: #d74d45;
  font-size: 12px;
  border: 1px solid #d74d45;
}
.des h3 a {
  color: #333;
}
.des h3 a:hover {
  text-decoration: underline;
}
.des .price {
  text-align: center;
  font-size: 16px;
  color: #d33a31;
  padding-top: 4px;
}
.content3 {
  margin-top: 10px;
  background-color: #f9f9f9;
  position: relative;
  width: 100%;
  height: 180px;
  cursor: pointer;
}
.content3 .inner {
  width: 700px;
  height: 100%;
  float: left;
  margin-left: 60px;
}
.content3 span {
  display: block;
  padding-top: 28px;
  font-size: 32px;
  font-weight: bold;
  color: #000000;
  cursor: pointer;
}
.content3 span i {
  position: relative;
  top: 5px;
  margin-right: 10px;
  display: inline-block;
  width: 32px;
  height: 32px;
  background: url(https://s2.music.126.net/store/web/img/digitalicon.png?6a6750b33e5a15a1466ad79ee348dad5)
    no-repeat;
}
.content3 p {
  margin-top: 9px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
}
.content3 a {
  display: block;
  margin-top: 18px;
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  text-decoration: none;
}
.content3 .pic {
  position: absolute;
  top: 30px;
  right: 50px;
  width: 210px;
  height: 120px;
}
.content3 .img1 {
  position: absolute;
  top: 15px;
  left: 0;
  width: 100px;
  height: 100px;
}
.content3 .img2 {
  position: absolute;
  z-index: 99;
  top: 0;
  left: 60px;
  width: 120px;
  height: 120px;
}
.content3 .pic i {
  position: absolute;
  top: 0;
  left: 175px;
  width: 35px;
  height: 120px;
  border: none;
  background: url(https://s2.music.126.net/store/web/img/sprite/pointlist.png?2d4d08a9dd73184a3613ae3792d63a22)
    no-repeat;
  background-position: 0px -73px;
}
.content4{
  margin-top: 50px;
  overflow: hidden;
}
</style>