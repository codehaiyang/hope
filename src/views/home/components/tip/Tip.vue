<template>
    <div id="tip">
        <div class="tip-box">
            <img src="../../../../images/icon/transport.png" alt="">
            <span>最快29分钟送达</span>
        </div>
        <div class="tip-box">
            <img src="../../../../images/icon/money.png" alt="">
            <span>0元起送 0元配送</span>
        </div>
        <div class="tip-box">
            <img src="../../../../images/icon/seal.png" alt="">
            <span>安心退</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#tip{
    display: flex;
    padding: 0.1rem;
}
.tip-box{
    width: 33%;
    text-align: center;
}
.tip-box img {
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
}
.tip-box span {
    margin-left: 0.2rem;
    font-size: 0.6rem;
    color: #45c763;
}
</style>