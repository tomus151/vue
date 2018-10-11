<template>
    <nav class="nav">
        <ul>
            <li v-for="element in navList">
                <router-link to='/a'>
                    <button>{{element}}</button>
                </router-link>

            </li>

            <li v-for="route in this.$router.options.routes">
                <router-link :to="route.path">{{route.name}}</router-link>
            </li>
            <router-link to="/">
                <button>zmień</button>
            </router-link>
        </ul>
    </nav>
</template>
<script>
// const navigations = ['Home','Blog','Products','Learn','Team'];
export default{
    name: 'Nav',
    data() {
        return{
            navList: ['home','account','products']
        }
    }
}
</script>
<style scoped>
    li{
        list-style: none;
    }
</style>
