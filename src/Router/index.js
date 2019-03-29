import AppHeader from "../components/AppHeader"
import FooterBar from "../components/FooterBar"
// 代码切割 路由懒加载
const Home=()=>import("../views/Home/Home")
const Classify=()=>import("../views/Classify/Classify")
const PingTuan=()=>import("../views/PingTuan/PingTuan")
const Cart=()=>import("../views/Cart/Cart")
const Login=()=>import("../views/Login/Login")



const routes = [
    {
    	path:"/",
    	redirect:"/home",
    	meta:{}
    },
    {
    	path:"/home",
    	name:"home",
    	meta:{
    		title:"首页",
    		icon:"fa fa-home",
    		isTabbar:true
    	},
    	components:{
			default:Home,
		    FooterBar
    	}
    },
    {
    	path:"/Classify",
    	name:"Classify",
    	meta:{
    		title:"分类",
    		icon:"fa fa-th-list",
    		isTabbar:true
    	},
    	components:{
			default:Classify,
			FooterBar
    	}
    },
    {
    	path:"/PingTuan",
    	name:"PingTuan",
    	meta:{
    		title:"拼团",
    		icon:"fa fa-users",
    		isTabbar:true
    	},
    	components:{
			default:PingTuan,
			FooterBar
    	}
    },
    {
    	path:"/Cart",
    	name:"Cart",
    	meta:{
    		title:"购物车",
    		icon:"fa fa-shopping-cart",
    		isTabbar:true
    	},
    	components:{
			default:Cart,
			FooterBar
    	}
    },
    {
    	path:"/Login",
    	name:"Login",
    	meta:{
    		title:"未登录",
    		icon:"fa fa-user-circle",
    		isTabbar:true
    	},
    	components:{
			default:Login,
			FooterBar
    	}
    }
]

export default routes
