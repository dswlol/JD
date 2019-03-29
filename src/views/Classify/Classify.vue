<template>
	<div>
		<div>
			<Search/>
		</div>
		<div>
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
	
</style>