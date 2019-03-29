<template>
	<div>
		<div class="header">
			<router-link to="/"><i class="fa fa-angle-left" aria-hidden="true"></i></router-link>
			<div><i class="fa fa-search" aria-hidden="true"></i><input placeholder="搜索更多商品" /></div>
			<div>...</div>
		</div>
	</div>
</template>

<script>
export default{
	
}
	
</script>

<style scoped lang="scss">
	.header{
		font-size: 16px;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1px solid #e5e5e5;
		padding: 0.2rem 0;
		a{
			font-size:0.8rem;
			margin:0 0.5rem 0 0.5rem;
			i{
				color:#252525;
			}
		}
		div:nth-of-type(1){
			flex: 1;
			background: #f7f7f7;
			height:1rem;
			line-height: 1rem;
			border-radius: 0.5rem;
			i{
				display:inline-block;
				height: 100%;
				font-size: 0.5rem;
				color: #ccc;
				margin: 0 0.5rem;
			}
			input{
				height: 100%;
				border: none;
				outline: none;
				box-sizing: border-box;
				background:#f7f7f7 ;
				font-size: 0.4rem;
			}
		}
		div:nth-of-type(2){
			margin: 0 0.6rem;
		}
	}
</style>