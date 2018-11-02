<template>
    <div class="home-view-container">
        <img src="@/assets/home/home.png" alt="home-img">
    </div>
</template>
<script>
export default {
    name: 'Home'
}
</script>

<style lang="scss">
.home-view-container{
    width:100%;
    height:100%;
    img{
        max-width:100%;
        width:100%;
        object-fit:fill;
        height:100%;
    }
}
</style>
