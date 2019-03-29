import axios from "axios"
export default {
	getdata(context){
		axios.get("http://www.xiongmaoyouxuan.com/api/tabs?sa=").then((res)=>{
			context.commit("get",res.data.data.list)
		})
	}
	
}