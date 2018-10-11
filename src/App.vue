
<template>
    <div id="app">
        <Nav/>
        <router-view/>
        <Hamburger/>
    </div>
</template>

<script>
import Nav from '@/components/Nav'
import Hamburger from '@/components/Hamburger'
export default {
  name: 'App',
  components:{
      Nav,
      Hamburger
  }
}
</script>

<style lang="scss">
*{
    margin: 0;
    padding:0;
    background:#000;
    color:red;
}
#app{
    display:flex;
    justify-content: space-between;
}

</style>
