<template>
    <div id="flashList">
        <div class="wrapper">
            <ul class="item-wrapper">
                <li>
                    <div class="item">
                        <img class="item-pig" src="../../../../images/placeholderImg/product-img-load.png" alt="">
                        <span class="item-title">爱生五花肉 500g</span>
                        <div class="item-other">
                            <div class="item-price">
                                <p class="now-price">$14.80</p>
                                <p class="old-price">$14.80</p>
                            </div>
                            <div class="add-cart">
                                <van-icon name="cart-o" />
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="item">
                        <img class="item-pig" src="../../../../images/placeholderImg/product-img-load.png" alt="">
                        <span class="item-title">爱生五花肉 500g</span>
                        <div class="item-other">
                            <div class="item-price">
                                <p class="now-price">$14.80</p>
                                <p class="old-price">$14.80</p>
                            </div>
                            <div class="add-cart">
                                <van-icon name="cart-o" />
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="item">
                        <img class="item-pig" src="../../../../images/placeholderImg/product-img-load.png" alt="">
                        <span class="item-title">爱生五花肉 500g</span>
                        <div class="item-other">
                            <div class="item-price">
                                <p class="now-price">$14.80</p>
                                <p class="old-price">$14.80</p>
                            </div>
                            <div class="add-cart">
                                <van-icon name="cart-o" />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.wrapper {
    overflow: hidden;
}
.item-wrapper {
    display: flex;
    justify-content: flex-start;
}
.item {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.item-pig {
    width: 8rem;
}
.item-title {
    font-size: 0.6rem;
}
.item-other {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
}
.now-price {
    color: #f37078;
    font-size: 0.928rem;
}
.old-price {
    color: #999999;
    font-size: 0.6875rem;
    text-decoration: line-through;
    margin-top: 0.2rem;
}
.add-cart {
    margin-left: 1rem;
}
</style>