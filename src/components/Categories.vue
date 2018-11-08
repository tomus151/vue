<template lang="html">
  <div class="categories-wrapper">
        <div class="product-row">
            <ul>
                <li v-for="(value, index) in productsFirst">
                    <router-link :to="{ name: 'Product', params: {productId:index} }">
                        <div class="product-box" :class="'product-box-'+index">
                            <div class="product-image-container">
                                <img :src="value.imageUrl" alt="" class="product-image">
                            </div>
                            <div class="descriptions-container">
                                <div class="product-name-container">
                                    <span class="product-name">
                                        {{value.name}}
                                    </span>
                                </div>
                                <div class="product-description-container">
                                    <span class="product-description">
                                        {{value.description}}
                                    </span>
                                </div>
                                <div class="product-price-box">
                                    <span class="product-price">
                                        {{value.price}}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
import products from "@/components/products/products.json";
const productsFirst= products;
export default {
    name:"Categories",
    data(){
        return{
            productsFirst
        }
    }
}
</script>

<style lang="scss">
    .categories-wrapper{
        width:100%;
        height:100%;
        background:#fff;
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        background: #f0f0f0;
        .product-row{
            width:50%;
            margin-bottom:20px;
            display:flex;
            ul{
                display:flex;
                flex-wrap: wrap;
                li{
                    margin:10px;
                    padding:20px;
                    background:#fff;
                    max-height:300px;
                    &:nth-child(1){
                        width:calc( 25% - 20px);
                    }
                    &:nth-child(2){
                        width:calc( 75% - 20px);
                        .product-box{
                            display:flex;
                            align-items: center;
                            justify-content: space-around;
                            height:100%;
                            .product-image-container{
                                max-width:50%;
                            }
                        }
                    }
                    &:nth-child(3){
                        width:calc( 25% - 20px);
                    }
                    &:nth-child(4){
                        width:calc( 50% - 20px);
                        .product-box{
                            height:100%;
                            display:flex;
                            align-items: center;
                            justify-content: space-around;
                            .product-image-container{
                                max-width:50%;
                            }
                        }
                    }
                    &:nth-child(5){
                        width:calc( 25% - 20px);
                    }
                    list-style: none;
                    .product-box{
                        height:100%;
                        width:100%;
                        .product-image-container{
                            max-height:100%;
                            height:100%;
                            img{
                                width:100%;
                                height:100%;
                            }
                        }
                        .descriptions-container{
                            .product-name-container{
                                .product-name{
                                    color:#000;
                                    font-size:24px;
                                }
                            }
                            .product-description-container{
                                .product-description{
                                    color: #a8a8a8;
                                }
                            }
                            .product-price-box{
                                .product-price{
                                    color: #0023ff;
                                    font-weight:700;
                                }
                            }
                        }
                        &.product-box-0,
                        &.product-box-2,
                        &.product-box-4{
                            .product-image-container{
                                height:70%;
                                img{
                                    height:100%;
                                }
                            }
                        }
                    }
                }
            }
        }

    }
</style>
