<template>
     <div class="types">
         <dl v-for="(v,i) in imgs.indexTypes" :key="v+i">
            <dt><img :src="v[1]"></dt>
            <dd>{{v[0]}}</dd>
         </dl>
     </div>
</template>

<script>

import {mapState} from "vuex"
export default {
    computed:{
        ...mapState(["imgs","indexTypes"])
    }
}
</script>

<style scoped lang="scss">
    $sc:64;
    .types {
        display:flex;
        flex-wrap: wrap;
        font-size:0.4rem;
        color: #666;
        justify-content: space-around;
        text-align: center;
        dl {
            width: 20%;
            margin: 0.3rem 0 0;
            img {width: 34/30+rem}
            dd {margin-top: 0.1rem;}
        }
    }
</style>

