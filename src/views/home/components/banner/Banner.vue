<template>
    <swiper id="swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) in bannerData" :key="index">
            <img :src="item.icon_url" alt="item.public_name">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name: 'Banner',
    props: ['bannerData'],
    components: {
        Swiper,
        SwiperSlide
    },
    data () {
        return {
            // 轮播图配置对象
            swiperOption: {
                notNextTick: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                loop: true,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false
                },
                observer: true,
                observerParents: true,
                speed: 600,
                on: {
                    slideChangeTransitionEnd () {

                    }
                }
            }
        }
    }
}
</script>
<style scoped>
#swiper{
    width: 100%;
    height: 10rem;
}
#swiper img {
  width: 100%;
  height: 100%;
}
/*
穿透修改样式
*/
#swiper >>> .swiper-pagination-bullet-active {
  background-color: #75a342;
}

#swiper >>> .swiper-pagination-bullet {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 1;
}
</style>