<template>
  <div class="out">
    <div class="wrap">
      <div class="left">
        <p class="li">
          <a href="">服务条款</a>
          <span>|</span>
          <a href="">隐私政策</a>
          <span>|</span>
          <a href="">儿童隐私政策</a>
          <span>|</span>
          <a href="">版权投诉指引</a>
          <span>|</span>
          <a href="">意见反馈</a>
        </p>
        <p class="info">
          <span style="margin-right:14px">网易公司版权所有©1997-2019</span>
          <span>杭州乐读科技有限公司运营：</span>
          <a href="">浙网文[2018]3506-263号</a>
        </p>
        <p class="info">
          <span style="margin-right:14px">违法和不良信息举报电话：0571-89853516</span>
          <span>举报邮箱：</span>
          <a href="">ncm5990@163.com</a>
        </p>
      </div>
      <ul class="right">
        <li>
          <a href="" class="a1"></a>
          <span class="s1"></span>
        </li>
        <li>
          <a href="" class="a2"></a>
          <span class="s2"></span>
        </li>
        <li>
          <a href="" class="a3"></a>
          <span class="s3"></span>
        </li>
        <li>
          <a href="" class="a4"></a>
          <span class="s4"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.out {
  position: relative;
  height: 148px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
}

.wrap {
  width: 980px;
  margin: 0 auto;
}

.left {
  float: left;
  width: 520px;
  padding-top: 15px;
  line-height: 24px;
  font-size: 12px;
}

p {
  overflow: hidden;
}

.li * {
  float: left;
  color: #999;
}

.li span {
  margin: 0 8px 0 10px;
}

a:hover {
  text-decoration: underline;
}

.info * {
  color: #666;
}

.right {
  width: 330px;
  margin-top: 21px;
  float: right;
}

.right li {
  float: left;
  width: 60px;
  height: 70px;
  margin-left: 30px;
  text-align: center;
  color: #666;
}

.right li:first-child {
  margin-left: 0;
}

.right li a {
  display: block;
  float: none;
  width: 50px;
  height: 45px;
  margin: 0 auto;
  background: url(https://s2.music.126.net/style/web2/img/foot_enter_new.png?4e070407304882efebcbab1ea7e5ff76) no-repeat;
  background-size: 110px 450px;
}

.right li .a1 {
  background-position: -63px -101px;
}

.right li .a2 {
  background-position: 0 0;
}

.right li .a3 {
  background-position: -60px -50px;
}

.right li .a4 {
  background-position: 0 -101px;
}

.right span {
  display: inline-block;
  margin: 5px 5px 0;
  width: 52px;
  height: 14px;
  background: url(https://s2.music.126.net/style/web2/img/foot_enter_tt.png?cd9d3a98e2cc00b31cf2d5b5e62620d1) no-repeat;
  background-size: 180px 100px;
}

.right .s1 {
  background-position: -1px -91px;
}

.right .s2 {
  background-position: 0 0;
}

.right .s3 {
  background-position: 0 -54px;
}

.right .s4 {
  background-position: -1px -72px;
}

</style>