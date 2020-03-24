<template>
    <div id="flash-buy">
        <div class="wrapper">
            <span class="title">限时抢购</span>
            <van-count-down class="count-down" :time="time">
                <template v-slot="timeData">
                    <span class="item">{{ timeData.hours }}</span>
                    <span class="item">{{ timeData.minutes }}</span>
                    <span class="item">{{ timeData.seconds }}</span>
                </template>
            </van-count-down>
            <span class="s-more">更多</span>
        </div>
        <FlashList></FlashList>
    </div>
</template>

<script>

import FlashList from './FlashList'

export default {
    components: {
        FlashList
    },
    data () {
        return {
            // 倒计时时间设置
            time: 30 * 60 * 1000 * 100
        }
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    margin-top: 0.5rem;
    padding: 0.3rem;
}
.title {
    border-left: 4px #3cb963 solid;
    padding-left: 0.3rem;
}
.s-more {
    margin-left: auto;
    color: #3bba63;
    font-size: 0.8rem;
}
.count-down {
    margin-left: 0.3rem;
} 
.item {
    display: inline-block;
    width: 22px;
    margin-right: 5px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #3cb963;
}
</style>