<template>
    <div id="product-item">
        <div class="wrapper">
            <img src="../../../../images/placeholderImg/product-img-load.png" alt="">
            <p class="pname">康师傅大食代红烧牛肉面 5包/袋</p>
            <p class="guide">124g*5包 大块满足 畅快分享</p>
            <span class="now-price">15.9</span>
            <span class="old-price">15.9</span>
        </div>
        <div class="wrapper">
            <img src="../../../../images/placeholderImg/product-img-load.png" alt="">
            <p class="pname">康师傅大食代红烧牛肉面 5包/袋</p>
            <p class="guide">124g*5包 大块满足 畅快分享</p>
            <span class="now-price">15.9</span>
            <span class="old-price">15.9</span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#product-item {
    display: flex;
    overflow: hidden;
}
.wrapper {
    padding: 0.6rem;
}
.pname {
    font-size: 0.8rem;
}
.guide {
    font-size: 0.7rem;
    margin-top: 0.2rem;
    padding-bottom: 0.5rem;
}
.now-price {
    font-size: 0.8rem;
}
.old-price {
    font-size: 0.6rem;
    color: #999999;
    margin-left: 0.2rem;
    text-decoration: line-through;
}
</style>