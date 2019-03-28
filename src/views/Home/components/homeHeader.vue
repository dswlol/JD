<template>
    <header>
            <router-link :to="{name:'classs'}"><i class="fa fa-bars" aria-hidden="true"></i></router-link>
            <router-link :to="{name:'search'}" class="searching"><span>JD</span><i class="fa fa-search" aria-hidden="true"></i><span>小狗吸尘器</span></router-link>
            <router-link :to="{name:'search'}" class="loading">登陆</router-link>           
    </header>
</template>

<script>
export default {
    
}
</script>
<style lang="scss">
     header{
       z-index:100;
       line-height: 1;
       position: fixed;
       width: 100%;
       height:1.4rem;
       display: flex;
       padding: 0.4rem;
       box-sizing: border-box;
       justify-content: space-between;
       align-items: center;
       .loading {font-size: 0.6rem;}
       .searching {
           flex: 1;
           background: #fff;
           margin: 0 0.4rem;
           font-size: 0.4rem;
           height: 1rem;
           line-height: 1rem;
           padding-left: 0.4rem;
           border-radius: 0.5rem;
           color:#232326;
           span:first-child {
               color:red;
               font-size: 0.7rem;
           }
           span:first-child::after{
               content:"";
               height:0.5rem;
               display: inline-block;
               border-left: 1px solid #666;
               margin-left:0.2rem;
           }
           .fa-search::before{
            transform: translateY(-0.1rem);
            padding-bottem:2px;
               color:#ccc;
               height: 1rem;
               display: inline-block;
               line-height: 1rem;
               margin: 0 0.2rem;
           }
           span:last-child {
                height: 1rem;
                transform: translateY(-0.1rem);
                line-height: 1rem;
                display: inline-block !important;
           }
        }
       font-size:1rem;
       a {
           color:#fff;
           
       }
   }
</style>


