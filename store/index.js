import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: false,
		hasLogin: false,
		userName: "",
		usertoken:"",
		userId:""
	},
	mutations: {
		login(state, user) {
			state.userName = user.userName || '新用户';
			state.usertoken=user.token || '';
			state.userId=user.id || '';
			state.hasLogin = true;
			uni.setStorage({
				key:'userinfo',
				data:user
			})
			// uni.setStorageSync('user_token',user.token)
			// uni.setStorageSync('username', user.userName)
			
		},
		logout(state) {
			state.userName =' ';
			state.usertoken=' ';
			state.userId=' ';
			state.hasLogin = false;
			uni.removeStorage({
				key:'userInfo'
			})
		}
	}
})

export default store
