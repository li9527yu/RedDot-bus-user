import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		// 是否需要强制登录
		// num:1,
		forcedLogin: false,
		hasLogin: false,
		IsStaff:false,
		IsEnterprise:false,
		IsPrincipal:false,
		EnterpriseId:'',
		userName: "",
		userPhone:"",
		usertoken:"",
		userId:"",
		userAge:'',
		EnterpriseName:"",
		EnterpriseMoney:0,
	},
	mutations: {
		login(state, provider) {
			state.userName = provider.user.name;
			state.userPhone=provider.user.phone;
			state.usertoken=provider.token;
			state.userId=provider.user.id;
			state.hasLogin = true;
			if(provider.user.enterprise!=null){
				state.IsEnterprise=true;
				state.EnterpriseName=provider.user.enterprise.name;
				state.EnterpriseId=provider.user.enterprise.id;
				if(provider.user.type)
				{
					state.IsPrincipal=true
					state.EnterpriseMoney=provider.user.enterprise.money;
				}
			}
			uni.setStorage({
				key:'userInfo',
				data:provider
			})
		},
		// changeNum(state){
		// 	state.num=2;
		// },
		logout(state) {
			state.userName="";
			state.userPhone=' ';
			state.usertoken=' ';
			state.userId='';
			state.IsPrincipal=false;
			state.IsEnterprise=false;
			state.hasLogin = false;
			state.IsStaff=false;
			state.EnterpriseName='';
			state.EnterpriseId='';
			state.EnterpriseMoney=0;
			
			uni.removeStorage({
				key:'userInfo'
			})
		},
		
	}
})

export default store
