<template>
<div>
  <div class="swiper" ref="bg">
    <div class="swiper-container swiper-bg">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in arrItem" :key="index">
          <img :src="item.imgUrl" alt />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="down">
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
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
      arrItem: [
        {
          imgUrl:
            "http://p1.music.126.net/fd7plFDXoxo6zDcd8xiFDg==/109951164503074726.jpg?imageView&quality=89"
        },
        {
          imgUrl:
            "http://p1.music.126.net/EFOJyI7FaFAcPm4OMsCZnw==/109951164503761713.jpg?imageView&quality=89"
        },
        {
          imgUrl:
            "http://p1.music.126.net/NjevmCRxb0oqBUthhnhe5A==/109951164503772626.jpg?imageView&quality=89"
        },
        {
          imgUrl:
            "http://p1.music.126.net/4AQ-neZ5OYjQ331CkA_I5g==/109951164503082619.jpg?imageView&quality=89"
        },
        {
          imgUrl:
            "http://p1.music.126.net/yI5Bzm8MOx2aDboAxmVn7w==/109951164502009550.jpg?imageView&quality=89"
        },
        {
          imgUrl:
            "http://p1.music.126.net/BY1gL1RGAVSHxP6-9d3Mqw==/109951164501999516.jpg?imageView&quality=89"
        },
        {
          imgUrl:
            "http://p1.music.126.net/3UgrvzfeveXB7TkQluKJ_g==/109951164503770506.jpg?imageView&quality=89"
        },
        {
          imgUrl:
            "http://p1.music.126.net/ERrZy5EpcwJnyZaWtEs0xw==/109951164501993643.jpg?imageView&quality=89"
        },
        {
          imgUrl:
            "http://p1.music.126.net/M0yC8YnuC88NsqZEFR6FSg==/109951164503615246.jpg?imageView&quality=89"
        }
      ]
    };
  },
  mounted() {
    const Swiper1 = new Swiper(".swiper-bg", {
      loop: true,
      autoplay:true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      effect: "fade",
      autoplayDisableOnInteraction: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    const bg= this.$refs.bg;
    Swiper1.on("slideChangeTransitionEnd", function() {
      if (Swiper1.realIndex == 0) {   
        bg.style.backgroundImage="url('http://p1.music.126.net/fXEQ1aYu3xmEpZSwu6u27A==/109951164503758739.jpg?imageView&blur=40x20')";
        bg.style.backgroundSize = 6000+'px';
      } else if (Swiper1.realIndex == 1) {
        bg.style.backgroundImage="url('http://p1.music.126.net/EFOJyI7FaFAcPm4OMsCZnw==/109951164503761713.jpg?imageView&blur=40x20')";
        bg.style.backgroundSize = 6000+'px';
      } else if (Swiper1.realIndex == 2) {
       bg.style.backgroundImage="url('http://p1.music.126.net/NjevmCRxb0oqBUthhnhe5A==/109951164503772626.jpg?imageView&blur=40x20')";
        bg.style.backgroundSize = 6000+'px';
      } else if (Swiper1.realIndex == 3) {
       bg.style.backgroundImage="url('http://p1.music.126.net/4AQ-neZ5OYjQ331CkA_I5g==/109951164503082619.jpg?imageView&blur=40x20')";
        bg.style.backgroundSize = 6000+'px';
      } else if (Swiper1.realIndex == 4) {
        bg.style.backgroundImage="url(http://p1.music.126.net/BY1gL1RGAVSHxP6-9d3Mqw==/109951164501999516.jpg?imageView&blur=40x20)";
        bg.style.backgroundSize= 6000+'px';
      } else if (Swiper1.realIndex == 5) {
        bg.style.backgroundImage="url('http://p1.music.126.net/NjevmCRxb0oqBUthhnhe5A==/109951164503772626.jpg?imageView&blur=40x20')";
        bg.style.backgroundSize = 6000+'px';
      } else if (Swiper1.realIndex == 6) {
      bg.style.backgroundImage="url('http://p1.music.126.net/3UgrvzfeveXB7TkQluKJ_g==/109951164503770506.jpg?imageView&blur=40x20')";
        bg.style.backgroundSize = 6000+'px';
      } else if (Swiper1.realIndex == 7) {
      bg.style.backgroundImage="url('http://p1.music.126.net/M0yC8YnuC88NsqZEFR6FSg==/109951164503615246.jpg?imageView&blur=40x20')";
        bg.style.backgroundSize = 6000+'px';
      } else if (Swiper1.realIndex == 8) {
       bg.style.backgroundImage="url('http://p1.music.126.net/NjevmCRxb0oqBUthhnhe5A==/109951164503772626.jpg?imageView&blur=40x20')";
        bg.style.backgroundSize = 6000+'px';
      } 
    });
  }
};
</script>


<style scoped>
.swiper{
  background-image: url("http://p1.music.126.net/fXEQ1aYu3xmEpZSwu6u27A==/109951164503758739.jpg?imageView&blur=40x20");
  background-size: 6000px;
}
.swiper-container {
  position: relative;
  width: 982px;
  height: 285px;
  overflow: initial;
  margin: 0 auto;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  justify-content: center;
  align-items: center;
}
.down {
  position: absolute;
  top: 0;
  z-index: 20;
  right: -1px;
  width: 254px;
  height: 285px;
  background: black;
  background: url(../../assets/download.png) no-repeat 0 0;
}
.down p {
  margin-top: 250px;
  text-align: center;
  color: #8d8d8d;
  font-size: 12px;
}
.swiper-slide img {
  display: block;
  width: 730px;
}
.swiper-pagination-bullets {
  width: 730px !important;
  height: 20px;
}
.swiper-pagination-bullet {
  margin: 0 !important;
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url(../../assets/banner.png) 0 9999px no-repeat;
  background-position: 3px -343px;
}
.swiper-pagination-bullet-active {
  background-position: -16px -343px !important;
}
.swiper-button-prev {
  left: -68px;
  background: url(../../assets/banner.png) no-repeat;
  background-position: 0 -360px;
  margin-top: -31px;
  width: 37px;
  height: 63px;
}
.swiper-button-prev:hover {
  background-position: 0 -430px;
}
.swiper-button-next::after {
  content: none;
}
.swiper-button-next {
  right: -68px;
  background: url(../../assets/banner.png) no-repeat;
  background-position: 0 -508px;
  margin-top: -31px;
  width: 37px;
  height: 63px;
}
.swiper-button-next:hover {
  background-position: 0 -578px;
}
.swiper-button-prev::after {
  content: none;
}
</style>
