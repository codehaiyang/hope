<template>
    <div id="specialZone">
        <div class="header">
            <div class="title">
                <span>特色专区</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="box">
                <div class="item now">
                    <span>新品尝鲜</span>
                    <p>不时不食，又闻菱角香</p>
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
                <div class="item hot">
                    <span>十二月爆款</span>
                    <p>世界之大，不过一盘番茄炒鸡蛋</p>
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
            </div>
            <div class="box">
                <div class="item">
                    <span>VIP 专享</span>
                    <p>阳光玫瑰 VIP只要12.9</p>
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
                <div class="box-other">
                    <div class="item">
                        <span>VIP 专享</span>
                        <p>阳光玫瑰 VIP只要12.9</p>
                        <img src="" alt="">
                        <img src="" alt="">
                    </div>
                    <div class="item">
                        <span>VIP 专享</span>
                        <p>阳光玫瑰 VIP只要12.9</p>
                        <img src="" alt="">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#specialZone {
    margin-top: 0.625rem;
    padding: 1.25rem 0.3rem 0.9375rem 0.3rem;
}
.header {
    margin-bottom: 0.5rem;
}
.title {
    border-left: 4px #3cb963 solid;
}
.title span {
    padding-left: 0.3rem;
}
.wrapper {
    border: 0.01rem solid #dddbc0;
}
.box {
    display: flex;
}
.item {
    width: 50%;
    padding: 0.5rem;
}
.item span {
    font-size: 0.6rem;
}
.item p {
    font-size: 0.6rem;
}
.now {
    border-right: 0.01rem solid #dddbc0;
    border-bottom: 0.01rem solid #dddbc0;
}
.hot {
    border-bottom: 0.01rem solid #dddbc0;
}
.box-other {
    display: flex;
}
</style>