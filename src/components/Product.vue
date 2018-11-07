<template lang="html">
    <div class="page">
        <div class="product-box-container">
            <div class="product-left-box">
                <div class="likes-product-container">
                    like
                    <img src="@/assets/product/heart.png" alt="">
                </div>
                <div class="image-product-container">
                    <img :src="productsMine[productId].imageUrl" alt="">
                </div>
                <div class="zoom-product-container">
                    <img src="@/assets/product/add.png" alt="">
                    <img src="@/assets/product/remove.png" alt="">
                </div>
            </div>
            <div class="product-right-box">
                <div class="subtitles-product-container">
                    <div class="name-product-container">
                        <span class="product-name">{{productsMine[productId].name}}</span>
                    </div>
                    <div class="description-product-container">
                        <span class="product-description">{{productsMine[productId].description}}</span>
                    </div>
                    <div class="price-product-container">
                        <span class="product-price">{{productsMine[productId].price}}</span>
                    </div>
                </div>
                <div class="recomended-products-container">
                    {{a}}
                    <ul>
                        <li v-for=""></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import products from "@/components/products/products.json";
export default {
    name:"Product",
    props:['productId'],
    data(){
        return{
            productsMine : products,
            productMineId: this.productId,
            a: products.length
        }
    }

}
</script>

<style lang="scss">
.page{
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    .product-box-container{
        display:flex;
        width: calc( 100% - 200px);
        height:calc( 100% - 200px);
        .product-left-box{
            width:50%;
            height:100%;
            background:#fff;
            box-shadow: 10px 0 5px -3px #ccc;
            display:flex;
            flex-direction: column;
            justify-content: center;
            .image-product-container{
            }
            .zoom-product-container{
            }
        }
        .product-right-box{
            width:50%;
            height:100%;
        }
    }
}
</style>
