
<template>
    <div id="app">
        <Nav/>
        <!-- <Obarzek/> -->
        <router-view/>
    </div>
</template>

<script>
// import Obrazek from '@/components/Obrazek'
import Nav from '@/components/Nav'
export default {
  name: 'App',
  components:{
      // Obrazek,
      Nav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.aaa{
    display:flex;
}
</style>
