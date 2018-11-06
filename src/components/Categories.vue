<template lang="html">
  <div class="categories-wrapper">
        <div class="product-row">
            <ul>
                <li v-for="(value, index) in productsFirst">
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
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
import red_seat from "@/assets/categories/products/red_seat.png";
import modern_bed from "@/assets/categories/products/modern_bed.png";
import white_table from "@/assets/categories/products/white_table.png";
import blue_seat from "@/assets/categories/products/blue_seat.png";
import dark_seat from "@/assets/categories/products/dark_seat.png";
const productsFirst=[
    {
        imageUrl:red_seat,
        name:"RED SEAT",
        description:"Lorem ipsum dolor sit amet",
        price:"$45"
    },
    {
        imageUrl:white_table,
        name:"WHITE TABLE",
        description:"Lorem ipsum dolor sit amet",
        price:"$350"
    },
    {
        name:"BLUE SEAT",
        description:"Lorem ipsum dolor sit amet",
        price:"$35",
        imageUrl:blue_seat
    },
    {
        imageUrl:modern_bed,
        name:"MODERN BED",
        description:"Lorem ipsum dolor sit amet",
        price:"$120"
    },
    {
        imageUrl:dark_seat,
        name:"DARK SEAT",
        description:"Lorem ipsum dolor sit amet",
        price:"$35"
    }
]
export default {
    name:"Categories",
    data(){
        return{
            productsFirst
        }
    },
    methods: {
        getPic(index) {
            return '../assets/categories/products/'+this.productsFirst[index].imageUrl;
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
                        .product-image-container{
                            max-height:100%;
                            height:100%;
                            img{
                                width:100%;
                                height:100%;
                            }
                        }
                    }
                }
            }
        }

    }
</style>
