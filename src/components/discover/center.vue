<template>
  <div id="tuijian" >
      <div class="wrap clearfix" >
        <Tuijian/>
        <Slide/>
          <Bangdan/>
          
      </div>
  </div>
</template>

<script>
import Bangdan from "../discover/bangdan"
import Tuijian from "./tuijian"
import Slide from "./slide"
export default {
  components:{Bangdan,Tuijian,Slide}
}
</script>

<style scoped>
/* .clearfix::after{
clear: both;
content: "";
display: block;
} */
#tuijian{
  background: #f2f2f2;
}
.wrap{
  width: 980px;
  min-height: 700px;
      margin: 0 auto;
      border: 1px solid #d3d3d3;
      border-width: 0 1px;
      background: white;
}
</style>