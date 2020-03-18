<template>

    <div id="mine">
        <van-nav-bar
            title="我的"
            :fixed=true
            :border=false>
        </van-nav-bar>
        <!-- 头部 -->
        <van-cell-group style="margin-top:2.4rem">
            <van-cell style="background-color: #3bba63;" >
                <template>
                    <div class="top-header">
                        <img :src="user_image.noLogin_icon" alt="">
                        <div class="header-login">
                            立即登录
                        </div>
                    </div>
                </template>
            </van-cell>
        </van-cell-group>

        <!-- 订单相关-->
        <van-cell-group>
        <van-cell title="我的订单"
                    icon="label"
                    value="查看全部订单"
                    is-link
                    @click="goTomyOrder(-1)">
        </van-cell>
        <!-- 订单状态导航 -->
        <van-grid>
            <van-grid-item 
                v-for="(order,index) in orderData" 
                :key="index" 
                :icon="order.icon"
                :text="order.title">
            </van-grid-item>
        </van-grid>
        </van-cell-group>

        <van-cell-group style="margin-top:0.5rem">
            <van-cell title="我的优惠券" icon="gold-coin" is-link></van-cell>
            <van-cell title="我的收货地址" icon="todo-list" is-link></van-cell>
        </van-cell-group>

        <van-cell-group style="margin-top:0.5rem">
            <van-cell title="我的绿卡" icon="vip-card" is-link></van-cell>
        </van-cell-group>

        <van-cell-group style="margin-top:0.5rem">
            <van-cell title="联系客服" icon="phone" is-link></van-cell>
            <van-cell title="意见反馈" icon="comment-circle" is-link></van-cell>
            <van-cell title="语言" icon="clock" is-link></van-cell>
        </van-cell-group>

    </div>

</template>

<script>
export default {
    data () {
        return {
            // 头像
            user_image: {
                login_icon: require('../../images/mine/defaultImg.jpeg'),
                noLogin_icon: require('../../images/login/grey.jpg'),
                female: require('../../images/mine/female.png'),
                male: require('../../images/mine/male.png')
            },
            // 订单状态
            orderData: [
                {icon: 'cart-circle-o', title: '待支付'},
                {icon: 'gift-o',title: '待收货'},
                {icon: 'smile-comment-o', title: '待评价'},
                {icon: 'cash-back-record', title: '售后/退款'}
            ]
        }
    }
}
</script>
<style lang="less" scoped>
#mine {
    background-color: #f5f5f5;
    .van-nav-bar {
        background: #3bba63;
    }
    .van-nav-bar__title {
        color: #ffffff;
    }
    .van-cell{
        .top-header {
            display: flex;
            align-items: center;
            img {
                width: 4rem;
                height: 4rem;
                border-radius: 50%
            }
            .header-login{
                color: #ffffff;
                display: flex;
                margin-left: 0.8rem;
            }
         }
    }
    .van-cell__left-icon {
        color: #45c763;
    }
}
</style>