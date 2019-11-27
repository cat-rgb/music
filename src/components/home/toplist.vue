<template>
  <body class="clearfix">
    <div class="center clearfix">
      <Left></Left>
      <Right/>
    </div>
  </body>
</template>

<script>
import Left from "../toplist/left"
import Right from "../toplist/right"

export default {
components:{Left,Right}
}
</script>

<style scoped>
body{
  width: 100%;
  background: #f5f5f5;
}
.center{
  margin: 0 auto;
  width: 980px;
  background: #f5f5f5;
  border: 1px solid #d3d3d3;
      border-width: 0 1px;
      min-height: 700px;
}
</style>