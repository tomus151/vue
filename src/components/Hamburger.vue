<template>
<div class="hamburger-menu" :class="isOpen">

    <div class="hamburger-menu-categories-wrapper">
        <ul>
            <li class="menu-hamburger-elements-wrapper">
                <span>Living Room</span>
                <img src="@/assets/hamburger-menu/list/icon.png" alt="">
            </li>
            <li class="menu-hamburger-elements-wrapper">
                <span>Office</span>
                <img src="../assets/hamburger-menu/list/icon-001.png" alt="">
            </li>
            <li class="menu-hamburger-elements-wrapper">
                <span>For Kids</span>
                <img src="../assets/hamburger-menu/list/icon-002.png" alt="">
            </li>
            <li class="menu-hamburger-elements-wrapper">
                <span>Kitchen</span>
                <img src="../assets/hamburger-menu/list/icon-003.png" alt="">
            </li>
            <li class="menu-hamburger-elements-wrapper">
                <span>Accesories</span>
                <img src="../assets/hamburger-menu/list/icon-004.png" alt="">
            </li>
        </ul>
    </div>
    <router-link :to="{ name: 'Categories', params: {} }">
        <div class="hamburger-menu-bottom-span">
            <span class="show-all-span">show all categories</span>
        </div>
    </router-link>
</div>
</template>
<script>
export default{
    name: 'Hamburger',
    props:['isOpen']
}
</script>
<style lang="scss" >
.hamburger-menu{
    position:absolute;
    top:0;
    right:0px;
    height:100vh;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    transform: translateX(100%);
    transition: all 0.5s;
    z-index:1;
    .hamburger-menu-categories-wrapper{
        margin-top:100%;
        ul{
            display:flex;
            flex-direction: column;
            .menu-hamburger-elements-wrapper{
                display:flex;
                align-items: center;
                justify-content: flex-end;
                margin-bottom:70px;
                padding:10px 40px;
                border-radius: 5px;
                margin-right:5px;
                span{
                    margin-right:20px;
                    color:#c1c1c1;
                }
                img{
                    max-width:40px;
                }
                &:hover{
                    background:#ccc;
                    cursor: pointer;
                    span{
                        color:#fff;
                    }
                    img{
                        -webkit-filter: invert(30%) grayscale(100%) brightness(70%) contrast(4);
                        filter: invert(30%) grayscale(100%) brightness(70%) contrast(4);
                    }
                }
            }
        }
    }
.hamburger-menu-bottom-span{
            margin-bottom: 40px;
            display:flex;
            justify-content: center;
            .show-all-span{
                color:#c1c1c1;
                padding: 0px 10px 5px 10px;
                position:relative;
                text-decoration: none;
                &:before{
                    content:"";
                    width:70%;
                    height:1px;
                    background:#c1c1c1;
                    position:absolute;
                    bottom:0px;
                    left:25px;
                    right:0px;
                }
                &:hover{
                    color: #484848;
                    &:before{
                        background:#484848;
                    }
                }
            }
        }
        &.open{
            transform: translateX(0px);
        }
}

</style>
