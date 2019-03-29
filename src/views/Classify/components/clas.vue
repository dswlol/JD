<template>
	<div>
		<ul >
			<li v-for="(item,index) in classify.list">
				<p >{{item.name}}</p>
				<img :src='item.imageUrl' />
			</li>			
		</ul>
	</div>
</template>

<script>
	import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
	export default{
		data(){
			return{
			}
		},
		computed:{
			...mapState(["classify","list"])
		},
		methods:{
			...mapActions(["getdata"])
		},
		created(){

			this.getdata()
			
		}
		
	}
</script>

<style scoped lang="scss">
	ul{
		li{
			display:flex;
			justify-content: center;
			align-items: center;
			margin-left: .3rem;
			padding: 0.3rem 0;
			p{
				font-size:24px;	
			}
			img{
				width: 80px;
				height: 80px;
			}
		}
				
	}
</style>