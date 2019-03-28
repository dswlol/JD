<template>
<div class="home">
    <homeHeader></homeHeader>
    <!-- 轮播 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in swiper" :key="index" class="swiper-slide">
          <img :src="item.imageUrl" :alt="item.title" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <types></types>
</div>
</template>

<script>
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css";
import homeHeader from "./components/homeHeader"
import types from "./components/types"
export default {
    data(){
        return {
            swiper:[]
        }
    },
    created(){
        this.$http.getPanda().then(res=>{
            this.swiper=res.data.data.banners;
            console.log( res.data.data)
            this.$nextTick().then(()=>{
                this.initSwiper();
            })
        })
    },
    methods:{
        initSwiper() {
            this.$homeSwiper = new Swiper('.swiper-container', {
                loop: true, // 循环模式选项
                autoplay: true, // 自动轮播
                // 如果需要分页器
                pagination: {
                el: '.swiper-pagination'
                }
            })
        }
    },
    components:{
        homeHeader,
        types
    }
}
</script>

<style scoped lang="scss">

</style>