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
  height: 370px;
  margin: 0 auto 0;
  padding-top: 104px;
  background: url(https://s2.music.126.net/style/web2/img/notlogin.jpg?3ef4b8f1e0f55db954156644368bf463)
    no-repeat center 0;
  background-position: 0 70px;
}
button {
  width: 160px;
  height: 50px;
  border: none;
  position: absolute;
  top: 329px;
  right: 202px;
  background: transparent;
  cursor: pointer;
}
button:hover {
  background: url(https://s2.music.126.net/style/web2/img/notlogin.jpg?3ef4b8f1e0f55db954156644368bf463)
    no-repeat;
  background-position: 0 -430px;
}
</style>