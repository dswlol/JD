<template>
	<footer>
		<ul class="footerbar">
			<router-link v-for="(v,i) in tabberBtn" tag="li" :key="v+i" :to="v.path">
			    <div class="icon">
					<i :class="v.meta.icon" aria-hidden="true"></i>
				</div>
				<div>{{v.meta.title}}</div>
			</router-link>
		</ul>
	</footer>
</template>

<script>
import routes from "../Router/index"
export default {
	data(){
		return {
			tabberBtn:routes.filter(item=>item.meta.isTabbar===true)
		}
	}
}
</script>

<style lang="scss" scoped>
     $cs:30;
    .footerbar {
			  width: 100%;
			  display:flex;
				position:fixed;
				bottom: 0;
				justify-content: space-around;
				text-align: center;
				background: #fff;	
				padding:15px 0;
				box-shadow: 1px -1px 6px 5px #ccc; 
				li {
					&.router-link-active{
							color: red;
					}
					width: 20%;
					color: #666;
					font-size:33px;
					.icon i::before{
						font-size: 50px;
					}
				}
		}
</style>