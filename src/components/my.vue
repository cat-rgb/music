<template>
  <div class="out">
    <div class="main"></div>
    <button></button>
  </div>
</template>

<script>
export default {};
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
</style>