<template>
    <div id="tabbarItem">
        <van-tabs v-model="activeName" color="#28BE57" title-active-color="#28BE57">
            <van-tab title="全部" name="a">
                <TabbarGoodsItem></TabbarGoodsItem>
            </van-tab>
            <van-tab title="晚餐" name="b">晚餐</van-tab>
            <van-tab title="人气" name="c">人气</van-tab>
            <van-tab title="人气" name="d">心选</van-tab>
        </van-tabs>
        <div class="content">
        </div>
    </div>
</template>

<script>
import TabbarGoodsItem from './ProductItem'
export default {
    components: {
        TabbarGoodsItem
    },
    data () {
        return {
            activeName: 'a'
        }
    }
}
</script>

<style scoped>
.content{
    height: 50rem;
}
</style>