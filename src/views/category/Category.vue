<template>
    <div id="category">
        <Seach></Seach>
        <div class="wrapper">
            <div class="left-wrapper">
                <ul class="box">
                    <li class="item"><span>推荐</span></li>
                    <li class="item"><span>推荐</span></li>
                    <li class="item"><span>推荐</span></li>
                </ul>
            </div>

            <ContentView></ContentView>
        </div>
    </div>
</template>
<script>
import Seach from './components/seach/Seach'
import ContentView from './components/ContentView'
export default {
    components: {
        Seach,
        ContentView
    }
}
</script>

<style scoped>
#category {
    width: 100%;
    height: 100%;
}
.wrapper {
   display: flex;
}
.left-wrapper {
    width: 4rem;
    background: #f4f4f4;
}
.box {
    text-align: center;
}
.item {
    padding: 0.7rem 0.2rem;
    font-size: 0.88rem;
    border-left: solid 0.2rem #3cb963;
    border-bottom: solid 0.01rem #e8e9e8;
}
</style>