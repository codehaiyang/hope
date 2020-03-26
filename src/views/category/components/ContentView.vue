<template>
    <div class="wrapper">
        <div class="nav-wrapper">
            <ul class="nav-box">
                <li class="nav-item">
                    推荐
                </li>
                <li class="nav-item">
                    <span>推荐</span>
                </li>
                <li class="nav-item">
                    <span>推荐</span>
                </li>
                <li class="nav-item">
                    <span>推荐</span>
                </li>
                <li class="nav-item">
                    <span>推荐</span>
                </li>
            </ul>
        </div>
        <div class="btn-menu">
            <van-icon name="arrow-down" />
        </div>

        <div class="prolist">
            <div class="title">
                猜你喜欢
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.wrapper{
    width: 100%;
}
.nav-wrapper {

}
.nav-box {
    overflow: hidden;
    display: inline-block;
}
.nav-item {
    display: inline-block;
    padding: 1rem;
    font-size: 0.7rem;
}
.btn-menu {
    width: 10%;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    position: fixed;
    right: 0.2rem;
}
</style>