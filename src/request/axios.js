import axios from "axios"
import { Indicator, Toast } from 'mint-ui'

const $axios = axios.create({
	baseURL:"http://www.xiongmaoyouxuan.com"
})

// 拦截请求参数
$axios.interceptors.request.use(config=>{
	// 显示加载中...
	Indicator.open("加载中...");
	//POST传参序列化
	if(config.method  === 'post'){
		config.data = qs.stringify(config.data);
	}
	return config;
},(error)=>{
	Toast({
		message: '错误的传参',
		duration: 1000
	  })
	return Promise.reject(error);
})
//拦截响应
$axios.interceptors.response.use(resp=>{
	//隐藏"加载中..."
	Indicator.close();
    if(resp.data.code === 200){
        return resp;
	}else{
		 // 显示一个错误信息，在1s后自动隐藏
		 Toast({
			message: '请求出错',
			duration: 1000
		  })
	}
},(error)=>{
	Toast({
		message: '请求异常',
		duration: 1000
	  })
	return Promise.reject(error);
})

export const getPanda=()=>{
	return $axios.get('/api/tab/1?start=0');
}