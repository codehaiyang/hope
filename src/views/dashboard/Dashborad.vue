<template>
    <div id="dashborad">
        <van-tabbar v-model="active">
            <van-tabbar-item 
                v-for="(item, index) in tabbars" 
                :key="index"
                @click="tab(index,item.name)">
                <span>{{ item.title }}</span>
                <template slot="icon" slot-scope="props">
                    <img :src="props.active ? item.active : item.normal">
                </template>
            </van-tabbar-item>
        </van-tabbar>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    mounted () {},
    created () {},
    data () {
        return {
            currIndex: 0,
            active: 0,
            tabbars: [
                {
                    name: 'home',
                    title: '首页',
                    normal: require('../../images/tabbar/home_default.png'),
                    active: require('../../images/tabbar/home_selected.png')
                },
                {
                    name: 'category',
                    title: '分类',
                    normal: require('../../images/tabbar/category_default.png'),
                    active: require('../../images/tabbar/category_selected.png')
                },
                {
                    name: 'eat',
                    title: '吃什么',
                    normal: require('../../images/tabbar/eat_default.png'),
                    active: require('../../images/tabbar/eat_selected.png')
                },
                {
                    name: 'cart',
                    title: '购物车',
                    normal: require('../../images/tabbar/shoppingcart_default.png'),
                    active: require('../../images/tabbar/shoppingcart_selected.png')
                },
                {
                    name: 'mine',
                    title: '我的',
                    normal: require('../../images/tabbar/mine_default.png'),
                    active: require('../../images/tabbar/mine_selected.png')
                }
            ]
        }
    },
    methods: {
        tab(index,val){
            this.currIndex = index
            this.$router.push(val)
            }
    }
}
</script>