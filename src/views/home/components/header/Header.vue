<template>
    <div class="wrapper">
        <div class="location-wrap">
            <svg viewBox="0 0 30 30"
                class="icon iconLocation">
                <path fill="#FFFFFF"
                    fill-rule="evenodd"
                    d="M14.521 30.445c.817.738 2.142.75 2.958 0 0 0 11.521-9.82 11.521-17.158C29 5.95 23.18 0 16 0S3 5.949 3 13.287c0 7.339 11.521 17.158 11.521 17.158zM16 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path>
            </svg>
            <router-link class="tolink" tag="span" to="/">请选择位置</router-link>
        </div>
        <div class="seach-wrap">
            <div class="seach-content">
                <svg viewBox="0 0 32 32"
                    class="icon iconSearch">
                    <path fill="#999"
                        fill-rule="evenodd"
                        d="M23.624 21.503c3.47-4.51 3.14-11.003-.992-15.135-4.491-4.49-11.773-4.49-16.264 0-4.49 4.491-4.49 11.773 0 16.264 4.132 4.131 10.625 4.462 15.135.992l4.66 4.66a1.5 1.5 0 1 0 2.121-2.121l-4.66-4.66zm-3.114-.993A8.5 8.5 0 1 0 8.49 8.49a8.5 8.5 0 0 0 12.02 12.02z"></path>
                </svg>
                <span class="seach-text">输入商品名称</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>
<style lang="less" scoped>
.wrapper {
    width: 100%;
    padding: 0.1rem;
    display: flex;
}
.location-wrap {
    width: 30%;
    height: 1.875rem;
    line-height: 1.875em;
    border-radius: 3.125rem;
    opacity: 0.6;
    background-color: black;
    }
.iconLocation{
    height: 1rem;
    vertical-align: middle;
}
.tolink {
    font-size: 0.8rem;
    margin-left: 0.3rem;
    color: #fff;
    vertical-align: middle;
}
.seach-wrap {
    width: 70%;
    height: 1.875em;
    line-height: 1.875em;
    display: flex;
    justify-content: center;
}
.iconSearch {
    height: 1rem;
    vertical-align: middle;
}
.seach-text {
    margin-left: 0.25rem;
    font-size: 0.875rem;
    color: #999999;
}
</style>