
<template>
    <div id="app">
        <Nav/>
        <transition name="router-anim" enter-active-class="animated rollIn" leave-active-class="animated rollOut">
        <router-view/>
        </transition>
        <Hamburger :isOpen="open"/>
        <div class="hamburger-menu-container">
            <div @click="hideShowMenu" class="hamburger-menu-wrapper">
                <img src="@/assets/hamburger-menu/hamburger.png" alt="hamburger-image">
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav'
import Hamburger from '@/components/Hamburger'
import Fourofour from '@/components/Fourofour'
let isHamburgerOpen = true
export default {
    name: 'App',
    data(){
        return{
            open: ''
        }
    },
    components:{
        Nav,
        Hamburger,
        Fourofour
    },
    methods:{
        hideShowMenu: function(){
            if(this.open == 'open'){
                this.open = ''
            }else{
                this.open = 'open'
            }

        }
    }

}
</script>

<style lang="scss">
.page{
    position:fixed !important;
    width:93vw;
    margin-left:7vw;
    background: #f0f0f0;
}
@import "css/animate.css";
@import url("https://fonts.googleapis.com/css?family=Libre+Franklin:100,300,400,700,900&amp;subset=latin-ext");
body{
    overflow:hidden;
}
*{
    margin: 0;
    padding:0;
    color:red;
    box-sizing: border-box;
    font-family: 'Libre Franklin', sans-serif;
}
#app{
    display:flex;
    justify-content: space-between;
    height:100vh;
    .hamburger-menu-container{
        display:flex;
        justify-content: flex-end;
        position:absolute;
        top:30px;
        right:0px;
        z-index:1;
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
}
a:-webkit-any-link {
    text-decoration: none;
}
</style>
