<template>
	<div>
		<ul>
			<li v-for='item in comlist'>
				<router-link to="">
					<img :src='item.imageUrl' />
					<p>{{item.title}}</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from "axios"
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default{
	props:["n"],
	data(){
		return{
			comlist:[]
		}
	},
	watch:{
		//监测n的变化 如果发生变化 调用getCom,并把新值当作参数
		n(newn,oldn){
			this.getCom(newn)
		}
	},
	computed:{
		...mapState(["classify","commodityReq"])
	},
	methods:{
		//定义方法 将父组件传来的下标去找对应的请求 形参n为下标 初始为0
		getCom(n){
			axios.get(this.classify.commodityReq[n]).then((res)=>{
				this.comlist=res.data.data.categories
				console.log(this.comlist)
			})	
		}
		
	},
	created(){
		//组件创建后立即调用此方法 此时n为父组件传来的默认值0
		this.getCom(this.n)		
	}
}
</script>

<style scoped lang="scss">
	ul{
		padding-left: 0.2rem;
		margin-top: 0.5rem;
		li{
			display:inline-block;
			box-sizing: border-box;
			width: 32.8%;
			text-align: center;
			margin: 0 0.2%;
			a{
				display: block;
				img{
					width:2rem;
					height: 2rem;
				}
				p{
					font-size: 28px;
					color: #333
				}
			}
		}
	}
</style>