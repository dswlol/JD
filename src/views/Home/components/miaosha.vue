<template>
    <section>
        <div class="msTop"><span>京东秒杀</span><span class="miaoshaTishi">20点场</span><span class="timeD hour">00</span><span class="timeD fen">01</span><span class="timeD mill">34</span></div>
        <div class="swiper-container">
            <div class="swiper-wrapper msBottom">
                <dl class="swiper-slide" v-for="(v,i) in ms_list" :key="v+i">
                    <dt><img :src="v.pic_url"/></dt>
                    <p>￥{{v.cprice}}</p>
                    <p>￥{{v.oprice}}</p>
                </dl>
            </div>
        </div>
    </section>
</template>
<script>
import Swiper from "swiper"
export default {
    data(){
        return {
            ms_list:[]
        }
    },
    created(){
        this.$axios.get("https://webservice.juanpi.com/api/getGoods?page=1&zy_ids=p8_c4_l4_0&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc").then(res=>{
            this.ms_list=res.data.data.goods;
            console.log(this.ms_list)
            this.$nextTick().then(()=>{
                var vm =this;
                var mySwiper = new Swiper ('.swiper-container', {
                    freeMode:true,
                    slidesPerView:"auto",
                    freeModeMomentum:true 
                })
            })
        })
    }
}
</script>
<style lang="scss">
    $cs:30;
    section {
        .msTop{
            margin-left:15px; 
            span:nth-of-type(1){
                color:red;
                font-size:40px;
                font-weight: 800;
            }
            span:nth-of-type(2){
                margin: 0 0.15rem;
                font-size:25px;
            }
            .timeD {font-size:0.4rem;
            text-align: center;
                width:0.6rem;height:.5rem;display:inline-block;border:1px solid #aaa;margin: 0 10px;}
        }
        .msBottom {
            padding-left: 0.1rem;
            dl{
                img {width:block;width: 3rem;}
                width: 3.4rem;
                text-align: center;
                p:nth-of-type(1) {font-size:34px;font-weight: 600;color: red;}
                 p:nth-of-type(2) {font-size:24px;font-weight: 600;color: #999;text-decoration: line-through;}
            }
           
        }
    }
</style>


