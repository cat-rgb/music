<template>
  <div id="big">
    <div id="login" class="clearfix">
      <div class="zbar">
        <div class="zttl f-hide">登录</div>
      </div>
      <span class="zcls" title="关闭窗口" @click="acShow">X</span>
      <div v-show="hide">
        <div class="zcnt">
          <div class="lyct lyct-1">
            <div class="n-log2-1 clearfix">
              <!-- 手机号登录及注册 -->
              <div class="u-main">
                <div class="u-plt"></div>
                <div class="f-mgt10">
                  <a class="u-btn2 u-btn2-2" @click="skip('tel')">
                    <i>手机号登录</i>
                  </a>
                </div>
                <div class="f-mgt10">
                  <a class="u-btn2 u-btn2-1" @click="skip('reg')">
                    <i>注 册</i>
                  </a>
                </div>
              </div>

              <!-- 其它方法登录 -->
              <div class="u-alt">
                <ul>
                  <li>
                    <a href="javascript:;" @click="skip('wx')">
                      <i class="u-mlg2 u-mlg2-wx"></i>
                      微信登录
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" @click="skip('qq')">
                      <i class="u-mlg2 u-mlg2-qq"></i>
                      微信登录
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" @click="skip('sn')">
                      <i class="u-mlg2 u-mlg2-sn"></i>
                      微信登录
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" @click="skip('wy')">
                      <i class="u-mlg2 u-mlg2-wy"></i>
                      微信登录
                    </a>
                  </li>
                </ul>
              </div>

              <div class="u-official-terms">
                <input type="checkbox" id="j-official-terms" @click="checked" />
                <label for="j-official-terms">同意</label>
                <a href>《服务条款》</a>
                <a href>《隐私政策》</a>
                <a href>《儿童隐私政策》</a>
              </div>
            </div>
          </div>
        </div>

        <transition name="skip">
          <div class="prompt" v-show="skipp">请先勾选《服务条款》 《隐私政策》 《儿童隐私政策》</div>
        </transition>
      </div>

      <!-- 注册 -->
      <div id="reg" v-show="reg">
        <div class="n-log2-2">
          <div class="s-fc3">
            <label>手机号：</label>
          </div>

          <div class="j-mob f-mgt10">
            <div class="u-phonewrap">
              <a href="javascript:;" class="current">
                <span>+86</span>
                <span class="icn u-icn2 u-icn2-17"></span>
              </a>
              <div class="txtwrap">
                <input type="text" class="j-phone txt u-txt" v-model="username" name="username" />
              </div>
            </div>
          </div>

          <div class="s-fc3">
            <label>密码：</label>
          </div>
          <div class="f-mgt10">
            <input type="text" class="u-txt" v-model="password" name="password" />
          </div>
          <button @click="zhuce">注册</button>
        </div>

        <div class="n-loglink2">
          <a href="javascript:;" class="s-primary" @click="toggle">返回登录</a>
        </div>
      </div>


      <!-- login -->
      <div id="signIn" v-show="tel">
        <div class="n-log2-2">
          <div class="s-fc3">
            <label>手机号：</label>
          </div>

          <div class="j-mob f-mgt10">
            <div class="u-phonewrap">
              <a href="javascript:;" class="current">
                <span>+86</span>
                <span class="icn u-icn2 u-icn2-17"></span>
              </a>
              <div class="txtwrap">
                <input type="text" class="j-phone txt u-txt" v-model="username" name="username" />
              </div>
            </div>
          </div>

          <div class="s-fc3">
            <label>密码：</label>
          </div>
          <div class="f-mgt10">
            <input type="text" class="u-txt" v-model="password" name="password" />
          </div>
          <button @click="singIn">登录</button>
        </div>

        <div class="n-loglink2">
          <a href="javascript:;" class="s-primary" @click="toggle">返回登录</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions, mapState,mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["loginStatus"])
  },
  methods: {
    ...mapActions(["acShow"]),
    ...mapMutations(["show"]),
    checked(el) {
      this.num = el.target.checked;
    },
    toggle(){
      this.tel = false
      this.reg = false
      this.hide = !this.hide
    },
    //注册
    zhuce() {
      this.$axios({
        url: "api/reg",
        method: "post",
        data: {
          username: this.username,
          password: this.password
        }
      }).then((res)=>{
        const {status} = res.data
        if(status==2){
          this.username = ""
          this.password = ""
          alert("注册成功")
        }else if(status==1){
          this.username = ""
          this.password = ""
          alert("已经注册")
          
        }
      })
    },
    //登录
    singIn(){
      this.$axios({
        url:"api/login",
        method:"post",
        data:{
          username:this.username,
          password:this.password
        }
      }).then((res)=>{
        const {status} = res.data
        if(status==0){
          this.username = ""
          this.password = ""
          alert("没有注册")
        }else if(status==3){
          this.username = ""
          this.password = ""
          alert("登录成功")
          console.log(res)
          
          this.acShow(status)

        }else if(status == 4){
          this.username = ""
          this.password = ""
          alert("用户名或密码错误")
        }
      })
    },
    //跳转
    skip(a) {
      //跳转
      if (this.num) {
        switch (a) {
          case "tel":
            {
              this.hide = !this.hide
              this.tel = !this.tel;
            }
            break;
          case "reg":
            {
              this.hide = !this.hide
              this.reg = !this.reg;
            }
            break;
          default:
            break;
        }
      } else {
        //勾选框显示消失
        this.skipp = true;
        setTimeout(() => {
          this.skipp = false;
        }, 1500);
      }
    }
  },
  data() {
    return {
      //勾选
      skipp: false,
      num: false,
      //登录弹框页面
      hide: true,
      username: "",
      password: "",
      //登录页面
      tel:false,
      //注册页面
      reg:false
    };
  }
};
</script>

<style scoped>
* {
  font-size: 12px;
}
@keyframes toggle {
  0% {
    display: none;
  }
  100% {
    display: block;
  }
}
.skip-enter,
.skip-leave-to {
  opacity: 1;
}
.skip-enter-active {
  transform: all 1.5s;
}
.skip-enter-to,
.skip-leave {
  opacity: 0;
}
#big {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
#login {
  position: fixed;
  z-index: 9998;
  width: 530px;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  border: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.zbar {
  position: relative;
  z-index: 10;
  border-bottom: 1px solid #191919;
  border-radius: 4px 4px 0 0;
  background: #2d2d2d;
  line-height: 30px;
}
.zttl {
  padding-right: 45px;
  margin: 0;
  height: 38px;
  line-height: 38px;
  padding-left: 18px;
  border-radius: 3px 3px 0 0;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  background-position: 50% 0;
  cursor: move;
}
.f-hide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.zcnt {
  padding: 0;
  border: 1px solid #878787;
  border-width: 0 1px 1px;
  border-radius: 0 0 4px 4px;
  background: #fff;
}
.n-log2-1 {
  padding: 40px 0 39px;
}
.u-main {
  float: left;
  width: 224px;
  padding: 0 35px 3px 40px;
  border-right: 1px dotted #ccc;
}
.u-main .u-plt {
  height: 120px;
  background: url(https://s2.music.126.net/style/web2/img/platform.png?377cfebec5f15f0e1b6f4fd672242e3a)
    no-repeat 13px 0;
}
.f-mgt10 {
  margin-top: 10px;
}
.u-main .u-btn2 {
  width: 219px;
  display: inline-block;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  line-height: 30px;
}
.u-btn2-2 {
  color: #fff;
  background: #3282ce;
}
.u-btn2 i {
  width: 184px;
  padding: 0 15px 0 20px;
  pointer-events: none;
}
.u-btn2-1 {
  color: #333;
  background: #f6f6f6;
}
.u-alt {
  float: left;
  padding: 3px 0 3px 39px;
  margin-top: -15px;
}
.u-alt li {
  margin-top: 15px;
}
.u-alt li a {
  font-size: 12px;
  color: #333;
  line-height: 38px;
}
.u-alt li a:hover {
  text-decoration: underline;
}
.u-mlg2 {
  margin-right: 14px;
  width: 38px;
  height: 38px;
  display: inline-block;
  vertical-align: middle;
  background: url(https://s2.music.126.net/style/web2/img/logo.png?74a2ad577e8dac68f60839498015fb76)
    no-repeat 0 9999px;
}
.u-mlg2-wx {
  background-position: -150px -670px;
}
.u-mlg2-qq {
  background-position: -190px -670px;
}
.u-mlg2-sn {
  background-position: -231px -670px;
}
.u-mlg2-wy {
  background-position: -271px -670px;
}
.u-official-terms {
  white-space: nowrap;
  float: left;
  margin-left: 40px;
  margin-top: 30px;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.4);
  line-height: 15px;
}
label {
  margin-left: 2px;
  color: #ccc;
}
.u-official-terms {
  color: #507daf;
}
.zcls {
  background: url(https://s2.music.126.net/style/web2/img/layer/layer.png?e628556d41310a35ec5579acd1e96372)
    no-repeat 0 9999px;
  position: absolute;
  z-index: 20;
  top: 16px;
  right: 20px;
  width: 10px;
  height: 10px;
  overflow: hidden;
  text-indent: -9999px;
  cursor: pointer;
  background-position: 0 -95px;
}
.prompt {
  position: absolute;
  padding: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 80px;
  line-height: 40px;
  font-size: 20px;
  color: white;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
}

/* 注册页面 */
#reg {
  background: white;
}
#signIn{
  background: white
}
.n-log2-2 {
  padding: 30px 0 43px;
  width: 220px;
  margin: 0 auto;
}
.s-fc3 {
  color: #666;
}
.f-mgt10 {
  margin-top: 10px;
}
.u-phonewrap {
  position: relative;
  height: 30px;
  margin: 0;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
  z-index: 10;
}
.u-phonewrap .current {
  position: relative;
  float: left;
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 0 18px 0 5px;
  border-right: 1px solid #cdcdcd;
}
.u-phonewrap .current .icn {
  position: absolute;
  top: 14px;
  right: 7px;
}
.u-icn2 {
  background: url(https://s2.music.126.net/style/web2/img/icon2.png?f9dde3dd5ffcad48d0ddcffae5460e2b)
    no-repeat 0 9999px;
}
.u-icn2-17 {
  width: 7px;
  height: 4px;
  background-position: -260px -450px;
}
.u-phonewrap .txtwrap {
  overflow: hidden;
}
.n-log2 .u-txt {
  width: 206px;
}

.u-phonewrap .txt {
  display: block;
  padding: 5px 8px 5px;
  height: 20px;
  line-height: 20px;
  border: none;
}
.u-txt {
  height: 19px;
  margin: 0;
  padding: 5px 6px 6px;
  border: 1px solid #cdcdcd;
  border-radius: 2px;
  line-height: 19px;
}
.n-loglink2 {
  padding: 0 19px;
  height: 48px;
  border-top: 1px solid #c6c6c6;
  border-radius: 0 0 4px 4px;
  line-height: 48px;
  background-color: #f7f7f7;
}
</style>