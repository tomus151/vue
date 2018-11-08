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
                <div class="title-container">
                    <span class="title">PRODUCT</span>
                </div>
                <div class="subtitles-product-container">
                    <div class="name-product-container">
                        <span class="product-name">{{productsMine[productId].name}}</span>
                    </div>
                    <div class="description-product-container">
                        <span class="product-description">{{productsMine[productId].description}}</span>
                    </div>
                    <div class="prices-container">
                        <span>Cost</span>
                        <div class="normal-price-product-container">
                            <span class="product-price">{{productsMine[productId].price}}</span>
                        </div>
                        <div class="old-price-product-container">
                            <span class="product-old-price">{{productsMine[productId].oldPrice}}</span>
                        </div>
                    </div>
                </div>
                <div class="recomended-products-container">
                    <ul>
                        <li class="container-reccomended-name"><span>RECCOMENDED</span></li>
                        <li v-for="(value, index) in productsRecomended" :class="'product-row-'+index">
                            <router-link :to="{ name: 'Product', params: {productId:(value.id-1)} }">
                                <div class="image-product-recomended-container" >
                                    <img :src="value.imageUrl" alt="">
                                </div>
                                <div class="subtitles-product-recomended-container">
                                    <div class="name-product-recomended-container">
                                        <span class="product-recomended-name">{{value.name}}</span>
                                    </div>
                                    <div class="description-product-recomended-container">
                                        <span class="product-recomended-description">{{value.description}}</span>
                                    </div>
                                </div>
                            </router-link>
                        </li>
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
            productsRecomended: []
        }
    },
    created(){
        var self = this;
        this.productsMine.forEach((value, index) => {
            if(this.productsRecomended.length < 3){
                if(!(index == this.productMineId)){
                    this.productsRecomended.push(value)
                }
            }
        })
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
            box-shadow: 10px 0 10px -2px #ccc;
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
            display:flex;
            flex-direction:column;
            padding-left:30px;
            .title-container{
                .title{
                    font-size:35px;
                    font-weight: 400;
                }
            }
            .subtitles-product-container{
                height:70%;

                .name-product-container{
                    .product-name{
                        font-size:40px;
                        color:#0023ff;
                        font-weight:300;
                    }
                }
                .description-product-container{
                    .product-description{

                    }
                }
                .prices-container{

                    .normal-price-product-container{
                        .product-price{
                            color:#0023ff;
                        }
                    }
                    .old-price-product-container{
                        .product-old-price{
                            text-decoration: line-through;
                        }
                    }
                }
            }
            .recomended-products-container{
                height:30%;
                background:#fff;
                margin-left:-30px;
                box-shadow: inset 10px 0 10px -3px #ccc;
                padding-left:30px;
                ul{
                    display:flex;
                    li{
                        list-style: none;
                        &.container-reccomended-name{
                            transform: rotate(270deg)
                        }
                        .image-product-recomended-container{
                            width: 50px;
                            height:50px;
                            img{
                                width:100%;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
