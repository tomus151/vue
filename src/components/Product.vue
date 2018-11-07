<template lang="html">
    <div class="page">
    <div class="">
        <div class="product-box-container">
            <div class="image-product-container">
                <img :src="productsMine[productId-1].imageUrl" alt="">
            </div>
            <div class="name-product-container">
                <span class="product-name">{{productsMine[productId-1].name}}</span>
            </div>
            <div class="description-product-container">
                <span class="product-description">{{productsMine[productId-1].description}}</span>
            </div>
            <div class="price-product-container">
                <span class="product-price">{{productsMine[productId-1].price}}</span>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import products from "@/components/products/products.json"
var productsMine = products;
export default {
    name:"Product",
    data(){
        return{
            productsMine:productsMine
        }
    },
    props:['productId']
}
</script>

<style lang="scss">
</style>
