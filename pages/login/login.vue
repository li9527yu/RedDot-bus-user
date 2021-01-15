<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">账号：</text>
				<uni-easyinput class="m-input" type="text" v-model="phone" clearable focus  placeholder="请输入手机号" :inputBorder="false"></uni-easyinput>
			</view>
			<view class="input-row">
				<text class="title">密码：</text>
				<uni-easyinput type="password" displayable v-model="password" placeholder="请输入密码" :inputBorder="false"></uni-easyinput>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="bindLogin">登录</button>
		</view>
		<view class="action-row">
			<navigator url="../reg/reg">注册账号</navigator>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				providerList: [],
				hasProvider: false,
				phone:'',
				password: '',
				positionTop: 0,
				isDevtools: false,
				codeDuration: 0
			}
		},
		computed: mapState(['forcedLogin']),
		methods: {
			// ...mapMutations(['login']),
			
			loginByPwd() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if (this.phone.length < 3) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 3 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				uni.request({
					url:'http://mrbus.net:8888/api/user/login',
					header:{
						"content-type":"application/json"
					},
					data:{
						phone:this.phone,
						password:this.password
					},
					method:'POST',
					success: (res) => {
						console.log(res)
						if(res.data.status_code==200){
							uni.showToast({
								title:'登录成功'
							})
							// console.log(res.data.data.token)
							// uni.setStorageSync('user_token', res.token)
							// uni.setStorageSync('username', this.phone)
							this.$store.commit('login',{
								userName:this.phone,
								token:res.data.data.token
							})
							uni.reLaunch({
								// url:'../main/main'
								url:'../user/user'
							})
						}else{
							uni.showToast({
								title:res.statusCode
							})
						}
					},
					fail: (err) => {
						console.log(err)
						uni.showToast({
							title:'登录失败'
						})
					}
				})

			},
			bindLogin() {
				this.loginByPwd()
			},
			// loginLocal(nickName) {
			// 	uni.setStorageSync('login_type', 'local')
			// 	uni.setStorageSync('username', nickName)
			// 	this.toMain(nickName);
			// },
			// toMain(userName) {
			// 	this.login(userName);
			// 	/**
			// 	 * 强制登录时使用reLaunch方式跳转过来
			// 	 * 返回首页也使用reLaunch方式
			// 	 */
			// 	if (this.forcedLogin) {
			// 		uni.reLaunch({
			// 			url: '../main/main',
			// 		});
			// 	} else {
			// 		uni.navigateBack();
			// 	}

			// },
	},
	}
</script>

<style>
	.login-type {
		display: flex;
		justify-content: center;
	}

	.login-type-btn {
		line-height: 30px;
		margin: 0px 15px;
	}

	.login-type-btn.act {
		color: #0FAEFF;
		border-bottom: solid 1px #0FAEFF;
	}

	.send-code-btn {
		width: 120px;
		text-align: center;
		background-color: #0FAEFF;
		color: #FFFFFF;
	}

	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.action-row navigator {
		color: #007aff;
		padding: 0 10px;
	}

	.oauth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.oauth-image {
		position: relative;
		width: 50px;
		height: 50px;
		border: 1px solid #dddddd;
		border-radius: 50px;
		margin: 0 20px;
		background-color: #ffffff;
	}

	.oauth-image image {
		width: 30px;
		height: 30px;
		margin: 10px;
	}

	.oauth-image button {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
</style>
