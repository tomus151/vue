<template lang="html">
    <nav>
        <div>

            <div class="logo-container">
                <img src="@/assets/menu/logo.png" alt="logo-icon">
            </div>
            <router-link :to="{ name: 'Home' }">
                <div class="home-container">
                    <img src="@/assets/menu/home.png" alt="home-icon">
                </div>
            </router-link>
            <div class="cart-container">
                <img src="@/assets/menu/basket.png" alt="cart-icon">
            </div>
            <div class="search-container">
                <img src="@/assets/menu/search.png" alt="search-icon">
            </div>
        </div>
        <div class="download-container">
            <img src="@/assets/menu/in.png" alt="download-icon">
        </div>
    </nav>
</template>

<script>
export default {
    name:"Nav"
}
</script>

<style lang="scss">
nav{
    width: 7vW;
    height: 100vh;
    background:#fff;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;
    *{
        background:#fff;
    }
    div{
        &:first-child{
            margin-top:10px;
            margin-bottom:100px;
        }
        &:nth-last-child(1){
            margin-bottom::70px;
        }
        margin-top:50px;
        div{
            display:flex;
            justify-content: center;
            align-items: center;
        }
        &.home-container,
        &.cart-container,
        &.search-container,
        &.download-container{
            img:hover{
                -webkit-filter: invert(30%) grayscale(100%) brightness(70%) contrast(4);
                filter: invert(30%) grayscale(100%) brightness(70%) contrast(4);
            }
        }

    }
}
</style>
