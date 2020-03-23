<template>
    <div id="home">
        <!-- 头部 -->
        <Header></Header>

        <!-- 轮播 -->
        <Banner :bannerData="bannerList"></Banner>
    </div>
</template>

<script>
import { getHomeData } from '../../serve/api/index'

import Header from './components/header/Header'
import Banner from './components/banner/Banner'
export default {
    components: {
        Header,
        Banner
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