<template>
  
</template>

<script>

import Bus from "../../Bus/bus"
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
      })
      .catch(err => {
        console.log(err);
      });   
                                               
  },
  computed: {
    change(){
        if (this.$route.query.id) {
          this.id = this.$route.query.id;
        }else{
          this.id = 0
        } 
        return this.id
    }
  },
}
</script>

<style scoped>

</style>