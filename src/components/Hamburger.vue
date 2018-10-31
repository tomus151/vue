<template>
<div class="hamburger-menu">
    <div class="hamburger-menu-container">
        <div class="hamburger-menu-wrapper">
            <img src="@/assets/hamburger-menu/hamburger.png" alt="hamburger-image">
        </div>
    </div>
    <div class="hamburger-menu-categories-wrapper">
        <ul>
            <li class="menu-hamburger-elements-wrapper">
                <span>Living Room</span>
                <img src="@/assets/hamburger-menu/list/ICON.png" alt="">
            </li>
            <li class="menu-hamburger-elements-wrapper">
                <span>Office</span>
                <img src="@/assets/hamburger-menu/list/ICON-001.png" alt="">
            </li>
            <li class="menu-hamburger-elements-wrapper">
                <span>For Kids</span>
                <img src="@/assets/hamburger-menu/list/ICON-002.png" alt="">
            </li>
            <li class="menu-hamburger-elements-wrapper">
                <span>Kitchen</span>
                <img src="@/assets/hamburger-menu/list/ICON-003.png" alt="">
            </li>
            <li class="menu-hamburger-elements-wrapper">
                <span>Accesories</span>
                <img src="@/assets/hamburger-menu/list/ICON-004.png" alt="">
            </li>
        </ul>
    </div>
    <div class="hamburger-menu-bottom-span">
        <span class="show-all-span">show all categories</span>
    </div>
</div>
</template>
<script>
export default{
    name: 'Hamburger'
}
</script>
<style lang="scss" >
.hamburger-menu{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    .hamburger-menu-container{
        display:flex;
        justify-content: flex-end;
        .hamburger-menu-wrapper{
            width:50px;
            height:50px;
            display:flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            margin-top:40px;
            margin-right:40px;
            box-shadow: 0 0 5px 3px #c1c1c1;
            img{
                background:transparent;
                -webkit-filter: invert(30%) grayscale(100%) brightness(70%) contrast(4);
                filter: invert(30%) grayscale(100%) brightness(70%) contrast(4);
            }
        }
    }
    .hamburger-menu-categories-wrapper{
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
        }
    }
}

</style>
