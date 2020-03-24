<template>
    <div id="home">
        <div>
            <!-- 头部 -->
            <Header></Header>
            <!-- 轮播 -->
            <Banner :bannerData="bannerList"></Banner>
            <!-- 消息提示 -->
            <Tip></Tip>
        </div>
        <!-- 宫格菜单 -->
        <Nav></Nav>
        <!-- 会员提示 -->
        <VipTip></VipTip>
        <!-- 限时抢购 -->
        <FlashBuy></FlashBuy>
        <!-- 特色专区 -->
        <SpecialZone></SpecialZone>
        <!--TabbarItem 商品 -->
        <TabbarGoodsItem></TabbarGoodsItem>

    </div>
</template>

<script>
import { getHomeData } from '../../serve/api/index'

import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Tip from './components/tip/Tip'
import Nav from './components/nav/Nav'
import VipTip from './components/myVip/VipTip'
import FlashBuy from './components/flash/FlashBuy'
import SpecialZone from './components/special/SpecialZone'
import TabbarGoodsItem from './components/tabbar/TabbarGoodsItem'

export default {
    components: {
        Header,
        Banner,
        Tip,
        Nav,
        VipTip,
        FlashBuy,
        SpecialZone,
        TabbarGoodsItem
    },
    created() {
        this.initData()
    },
    data () {
        return {
            bannerList: []
        }
    },
    methods: {
        async initData(){
            const response = await getHomeData();
            if(response.success){
                const data = response.data
                this.bannerList = data.list[0].icon_list
            }
        }
    }
}
</script>

<style lang="less" scoped>
#home{
    background-color: '#f5f5f5';
}
</style>