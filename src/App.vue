<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/public/header"
import Footer from "./components/public/footer"
export default {
  name: 'App',
  components:{Header,Footer}
}
</script>

<style>

</style>
