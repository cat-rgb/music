
<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer/>
    <Login v-if="show"></Login>
  </div>
</template>

<script>
import Header from "./components/public/header"
import Footer from "./components/public/footer"
import Login from "./components/public/login"
import {mapState,mapActions} from "vuex"
export default {
  name: 'App',
  components:{Header,Footer,Login},
  computed: {
    ...mapState(["show","storeShow"])
  },
 
}
</script>

<style>

</style>


