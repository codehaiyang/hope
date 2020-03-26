<template>
    <div id="login">
        <div class="login-box">
            <div class="content">
                <div class="head-tool">
                    <img src="" alt="">
                    <img src="../../images/login/normal.png" alt="">
                    <van-icon name="close" @click="close" />
                </div>
                <van-tabs v-model="active" animated>
                <van-tab  title="登录" >
                    <van-cell-group>
                        <van-field v-model="value" label="手机号" placeholder="请输入用户名" />
                        <van-field v-model="value" label="密码" placeholder="请输入用户名" />
                        <van-field v-model="value" placeholder="请输入验证码"  center maxlength="4">
                            <img src="http://demo.itlike.com/web/xlmc/api/captcha" alt="" slot="button">
                        </van-field>
                    </van-cell-group>
                    <van-button type="info" size="large">登录</van-button>
                    <span class="tips">账号密码登录</span>
                </van-tab>
                <van-tab  title="注册" >
                    <van-cell-group>
                        <van-field v-model="value" label="手机号" placeholder="请输入用户名" />
                        <van-field v-model="value" label="密码" placeholder="请输入用户名" />
                    </van-cell-group>
                    <van-button type="info" size="large">注册</van-button>
                </van-tab>
                </van-tabs>
                <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
                    其他登录方式
                </van-divider>

                <van-grid clickable :column-num="2">
                <van-grid-item icon="photo-o" text="微信登录" />
                <van-grid-item icon="photo-o" text="QQ登录" />
                </van-grid>
                <p>
                    温馨提示：<br>
                    未注册的手机号,登录时将自动注册，<br>
                    代表同意<a>用户协议,</a><a>隐私策略</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    }
}
</script>

<style scoped>
#login {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("../../images/login/back2.jpg");
    background-size: 100% 100%;
    background-attachment: fixed;
}
.login-box {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    opacity: 0.95;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.content{
    max-width: 90%;
    background-color: #fff;
    flex-direction: column;
    border-radius: 0.3rem;
    padding: 0.3rem;
}
.head-tool{
    display: flex;
    justify-content: space-between;
}
.head-tool img {
    width: 4rem;
}
.head-tool i {
}
</style>