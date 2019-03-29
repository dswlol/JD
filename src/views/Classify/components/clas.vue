<template>
	<div class="box">
		<ul >
			<li v-for="(item,index) in classify.list" @click='clickindex(index)'>
				<p >{{item.name}}</p>
				<img :src='item.imageUrl' />
			</li>			
		</ul>
		<div class="right">
			<Commodity :n="n"></Commodity>
		</div>
	</div>
</template>

<script>
	import Commodity from "./commodity"
	import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
	export default{
		data(){
			return{
				n:0
			}
		},
		components:{
			Commodity
		},
		computed:{
			...mapState(["classify","list"])
		},
		methods:{
			...mapActions(["getdata"]),
			//分类点击事件显示 传递当前点击下标
			clickindex(index){
				this.n=index;
			}
		},
		created(){
			this.getdata()		
		}
		
	}
</script>

<style scoped lang="scss">
	.box{
		display: flex;
		ul{
			width: 30%;
			margin-bottom: 2rem;
			border-right: 2px solid #eee;
			li{
				display:flex;
				justify-content: space-between;
				align-items: center;
				margin-left: .3rem;
				padding: 0.1rem 0;
				p{
					font-size:28px;	
				}
				img{
					width: 80px;
					height: 80px;
				}
			}
					
		}	
	}
	.right{
		width: 70%;
	}
	
</style>