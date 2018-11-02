<template>
    <div class="home-view-container page">
        <span class="home-olios-span">OLIOS</span>
        <span class="home-long-text-span">NEWEST FURNITURE SHOP TEMPLATE</span>
        <span class="home-newest-span">NEWEST</span>
        <button type="button" name="button" class="btn-more">VIEW MORE</button>
    </div>
</template>
<script>
export default {
    name: 'Home'
}
</script>

<style lang="scss">
.home-view-container{
    width:93vw;
    margin-left:7vw;
    height:100%;
    background: url('../assets/home/home.png');
    background-position:top left;
    background-size: 100% 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    position:relative;
    z-index:1;
    .home-newest-span{
        font-size:340px;
        font-weight:900;
        color:#e9e9e9;
        position:absolute;
        top:40px;
        z-index:2;
    }
    .home-olios-span{
        font-weight:300;
        font-size:150px;
        z-index:3;
        color::#555;
        margin-top:50px;
    }
    .home-long-text-span{
        z-index:3;
        color:#555;
        margin-bottom:20px;
    }
    .btn-more{
        padding:10px 25px;
        border-radius: 20px;
        background: #0038F8;
        border:none;
        font-weight: 700;
        color: #fff;
        display:inline-block;
        z-index:3;
    }
}
</style>
