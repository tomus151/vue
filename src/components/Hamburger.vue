<template>
<div class="">
    <div class="hamburger-menu-wrapper">
        <img src="@/assets/hamburger-menu/hamburger.png" alt="hamburger-image">
    </div>
    <div class="menu-categories-wrapper">
        <ul>
            <li class="menu-hamburger-elements-wrapper">
                <span>aaaaaaaaaaaaaa</span>
                <img src="@/assets/hamburger-menu/list/ICON.png" alt="">
            </li>
            <li class="menu-hamburger-elements-wrapper">
                <span>aaaaaaaaaaaaaa</span>
                <img src="@/assets/hamburger-menu/list/ICON-001.png" alt="">
            </li>
            <li class="menu-hamburger-elements-wrapper">
                <span>aaaaaaaaaaaaaa</span>
                <img src="@/assets/hamburger-menu/list/ICON-002.png" alt="">
            </li>
            <li class="menu-hamburger-elements-wrapper">
                <span>aaaaaaaaaaaaaa</span>
                <img src="@/assets/hamburger-menu/list/ICON-003.png" alt="">
            </li>
            <li class="menu-hamburger-elements-wrapper">
                <span>aaaaaaaaaaaaaa</span>
                <img src="@/assets/hamburger-menu/list/ICON-004.png" alt="">
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default{
    name: 'Hamburger'
}
</script>
<style lang="scss">
.hamburger-menu-wrapper{
    width:50px;
    height:50px;
    background: #fff;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-top:40px;
    margin-right:40px;
    img{
        background:transparent;
    }
}
.menu-categories-wrapper{
    ul{
        display:flex;
        flex-direction: column;
        .menu-hamburger-elements-wrapper{
            display:flex;
            align-items: center;
            justify-content: center;
            span{
                margin-right:10px;
            }
        }
    }
}

</style>
