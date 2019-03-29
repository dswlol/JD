<template>
	<div>
		<div>
			<Search/>
		</div>
		<div class="box">
			<Clas/>
		</div>
	</div>
</template>

<script>
//搜索组件
import Search from "./components/search"
//分类组件
import Clas from "./components/clas"


export default{
	components:{
		Search,Clas
	}		
}
</script>

<style lang="scss" scoped>
	.box{
		display: flex;
		width: 30%;
		margin-bottom: 2rem;
	}
</style>