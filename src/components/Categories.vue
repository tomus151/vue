<template lang="html">
  <div class="categories-wrapper">
        <div class="product-row">
            <ul>
                <li v-for="(value, index) in productsFirst">
                    <div class="product-box">
                        <div class="product-image-container">
                            <img :src="value.imageUrl" alt="" class="product-image">
                        </div>
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
                                {{value.prece}}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="product-row">
            <ul>
                <li v-for="(value, index) in productsSecounds">
                    <div class="product-box">
                        <div class="product-image-container">
                            <img :src="value.imageUrl" alt="" class="product-image">
                        </div>
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
                        <div class="product-price-container">
                            <span class="product-price">
                                {{value.prece}}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
    name:"Categories",
    data(){
        return{
            productsFirst:[
                {
                    nr:"1",
                    imageUrl:"@/assets/logo.png",
                    name:"RED SEAT",
                    description:"Lorem ipsum dolor sit amet",
                    price:"$45"
                },
                {
                    nr:"2",
                    imageUrl:"",
                    name:"WHITE TABLE",
                    description:"Lorem ipsum dolor sit amet",
                    price:"$350"
                },
            ],
            productsSecounds:[
                {
                    nr:"3",
                    name:"BLUE SEAT",
                    description:"Lorem ipsum dolor sit amet",
                    price:"$35",
                    imageUrl:""
                },
                {
                    nr:"4",
                    imageUrl:"",
                    name:"MODERN BEAD",
                    description:"Lorem ipsum dolor sit amet",
                    price:"$120"
                },
                {
                    nr:"5",
                    imageUrl:"aaaa",
                    name:"DARK SEAT",
                    description:"Lorem ipsum dolor sit amet",
                    price:"$35"
                }
            ]
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
        .product-row{
            width:50%;
            background:yellow;
            margin-bottom:20px;
            display:flex;
            .product-box{
                width:25%;
                display:flex;
                justify-content: center;
                border:1px solid black;
                margin:5px;
                &.product-box-4{
                    width: 50%;
                }
                &.product-box-2{
                    width:75%;
                }
            }
        }

    }
</style>
