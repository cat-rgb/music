<template>
  <div id="right">
    {{$route.query.id}}
    <div class="g-mn3c" v-for="(item,index) in data" :key="index">
      <div class="g-wrap">
        <div class="clearfix">
          <div class="cover rank">
            <img :src="item.titImg" />
          </div>
          <div class="cnt">
            <div class="cntc">
              <div class="hd">
                <h2 class="ff2 clearfix">{{item.title}}</h2>
              </div>
              <div class="user">
                <i class="icn icn-57"></i>
                <span class="sep">最近更新：{{item.date}}</span>
                <span class="s-fc4">（每天更新）</span>
              </div>
              <div class="btns">
                <a href class="ds-bofang">
                  <i>
                    <em class="ply"></em>播放
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="g-wrap12 clearfix">
        <div class="u-title u-title-1 clearfix">
          <h3>歌曲列表</h3>
          <span class="sub">
            <span>100</span>
            首歌
          </span>
          <div class="more">
            播放:
            <strong class="c-red">2581349120</strong>次
          </div>
        </div>
        <div class="j-flag">
          <table class="m-table m-table-rank">
            <thead>
              <tr>
                <th class="first w1"></th>
                <th>
                  <div class="wp">标题</div>
                </th>
                <th class="w2-1">
                  <div class="wp">时长</div>
                </th>
                <th class="w3-1">
                  <div class="wp">歌手</div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr :class="i%2==0?'even':''" v-for='(arr,i) in item.songs' :key = "i">
                <td>
                  <div class="hd">
                    <span class="num">{{arr.songLength}}</span>
                    <div class="rk">
                      <span class="u-icn u-icn-75"></span>
                    </div>
                  </div>
                </td>
                <td class="rank">
                  <div class="clearfix">
                    <div class="tt">
                      <router-link to>
                        <img
                          class="rpic"
                          :src="arr.img"
                          alt
                        />
                      </router-link>
                      <span class="ply"></span>
                      <div class="ttc">
                        <span class="txt">
                          <router-link to>
                            <b>{{arr.name}}</b>
                          </router-link>
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="s-fc3">
                  <span class="u-dur">{{arr.time}}</span>
                </td>
                <td>
                  <div class="text">
                    <span>{{arr.author}}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    
        <Write/>
      </div>

      
    </div>
  </div>
</template>

<script>
import Write from "./write"
export default {
  components:{Write},
  data() {
    return {
      id: 0,
      data: ""
    };
  },
  mounted() {
    this.$axios
      .post("/toplist/songs")
      .then(res => {
        if (this.$route.query.id) {
          this.id = this.$route.query.id;
        }else{
          this.id = 0
        }
        this.data = res.data.Dan[this.id];
        console.log(this.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
* {
  font-size: 12px;
}
#right {
  height: 100%;
  float: right;
  width: 740px;
  padding-bottom: 50px;
  background: white;
}
.u-icn,
.u-title-1 .out .icon {
  background: url(https://s2.music.126.net/style/web2/img/icon.png?861a29a6509f9a540e92a1fbcd46cb7a)
    no-repeat 0 9999px;
}
.g-wrap {
  padding: 40px;
}
.cover {
  float: left;
  position: relative;
  margin: 0 -220px 0 0;
}
.rank {
  padding: 3px;
  border: 1px solid #ccc;
}
.rank img {
  width: 150px;
  height: 150px;
  display: block;
}
.cnt {
  float: right;
  width: 100%;
}
.cntc {
  margin-left: 187px;
}
.hd {
  line-height: 24px;
  position: relative;
  margin: 16px 0 4px;
}
.user {
  margin: 0 0 20px;
  line-height: 35px;
}
.btns {
  margin-bottom: 25px;
  margin-right: -10px;
}
.ff2 {
  line-height: 24px;
  font-size: 20px;
  font-weight: normal;
}
.icn {
  float: left;
  margin: 9px 0 0 3px;
  background: url(https://s2.music.126.net/style/web2/img/icon.png?861a29a6509f9a540e92a1fbcd46cb7a)
    no-repeat 0 9999px;
}
.icn-57 {
  width: 13px;
  height: 13px;
  background-position: -18px -682px;
}
.sep {
  margin-left: 5px;
  color: #666;
}
.s-fc4 {
  color: #999;
}
.g-wrap12 {
  padding: 0 30px 40px 40px;
}
.u-title-1 {
  height: 31px;
  width: 100%;
}
.u-title {
  border-bottom: 2px solid #c20c0c;
}
.u-title {
  font-size: 24px;
  line-height: 28px;
  float: left;
  font-weight: normal;
}
.u-title h3 {
  font-size: 20px;
  line-height: 28px;
  float: left;
}
.sub {
  margin-left: 20px;
  margin-top: 3px;
  float: left;
  color: #666;
}
.more {
  margin-top: 5px;
  float: right;
  color: #666;
}
.c-red {
  color: #c20c0c;
}

.m-table {
  width: 100%;
  border: 1px solid #d9d9d9;
}
.m-table-rank {
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
}
.first {
  width: 77px;
}
.m-table th {
  background-image: url(https://s2.music.126.net/style/web2/img/table.png?d224e9e7906d8f2ae6af5d7b70fb0676);
  height: 38px;
  background-color: #f7f7f7;
  background-position: 0 0;
  background-repeat: repeat-x;
  vertical-align: top;
  text-align: left;
  font-weight: normal;
  color: #666;
}
.m-table th .wp {
  height: 18px;
  line-height: 18px;
  padding: 8px 10px;
  background-position: 0 -56px;
}
.m-table .w2-1 {
  width: 91px;
}
.m-table .w3-1 {
  width: 26%;
}
.m-table td {
  padding: 6px 10px;
  line-height: 18px;
  text-align: left;
}
.m-table .even td {
  background-color: #f7f7f7;
}
.m-table .hd {
  height: 18px;
}
.m-table-rank .hd .num {
  float: left;
  width: 25px;
  margin-left: 0;
  text-align: center;
}
.m-table .hd .num {
  width: 25px;
  margin-left: 5px;
  color: #999;
}
.m-table-rank .rk {
  float: right;
  width: 32px;
  margin-right: -5px;
  text-align: center;
}
.m-table-rank .rk .u-icn-75 {
  float: none;
  margin: 0 auto;
  padding-left: 0;
}
.u-icn-75 {
  width: 16px;
  height: 17px;
  background-position: -67px -283px;
}
.u-icn,
.u-icn2,
.u-icn3 {
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.m-table-rank td.rank {
  padding-top: 10px;
  padding-bottom: 10px;
}
.m-table .tt {
  float: left;
  width: 100%;
}
.m-table-rank .rpic {
  float: left;
  width: 50px;
  height: 50px;
  margin-right: 14px;
}
.m-table-rank td.rank .ply {
  margin-top: 17px;
}
.m-table .tt .ply {
  margin-right: 8px;
}
.m-table .ply {
  float: left;
}

.m-table .ply {
  width: 17px;
  height: 17px;
  cursor: pointer;
  background-position: 0 -103px;
}
.m-table .ttc {
  height: 18px;
  margin-right: 20px;
}
.m-table-rank td.rank .txt {
  max-width: 67%;
}

.m-table-rank .txt {
  max-width: 88%;
}
.m-table .txt {
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
.m-table .text {
  width: 100%;
  position: relative;
  zoom: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>