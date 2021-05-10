<template>
	<view class="content">
		<view class="login-type">
			<view v-for="(item,index) in loginTypeList" :key="index" @click="loginType = index" :class="{act: loginType === index}"
			 class="login-type-btn">{{item}}</view>
		</view>
		<!-- <uni-popup id="popupMessage" ref="popupMessage" type="message" >
			<uni-popup-message type="info" message="待开放" :duration="2000"></uni-popup-message>
		</uni-popup> -->
		<view class="input-group" v-if="loginType === 1">
			<view class="input-row">
				<text class="title">手机：</text>
				<uni-easyinput class="m-input" type="text" clearable  v-model="phone" placeholder="请输入手机号码" :inputBorder="false"></uni-easyinput>
			</view>
			<view class="input-row" >
				<text class="title">验证码：</text>
				<uni-easyinput type="text" class="m-input" v-model="code" placeholder="请输入验证码" :inputBorder="false"></uni-easyinput>
				<button class="send-code-btn" @click="sendSmsCode" :disabled="clickable">{{codeDuration ? codeDuration + 's' : '发送验证码' }}</button>
				<!-- <view class="send-code-btn" @click="sendSmsCode">{{codeDuration ? codeDuration + 's' : '发送验证码' }}</view> -->
			</view>
			
		</view>
		<view class="input-group" v-else>
			<view class="input-row ">
				<text class="title">账号：</text>
				<uni-easyinput class="m-input" type="text" v-model="phone" clearable   placeholder="请输入手机号" :inputBorder="false"></uni-easyinput>
			</view>
			<view class="input-row">
				<text class="title">密码：</text>
				<uni-easyinput class="m-input" type="password" displayable v-model="password" placeholder="请输入密码" :inputBorder="false"></uni-easyinput>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="bindLogin">登录</button>
		</view>
		<view class="action-row">
			<navigator url="../reg/reg">注册账号</navigator>
			<navigator url="../pwd/pwd">忘记密码</navigator>
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
				loginType: 0,
				loginTypeList: ['密码登录','免密登录'],
				providerList: [],
				hasProvider: false,
				phone:'',
				code:'',
				password: '',
				positionTop: 0,
				isDevtools: false,
				codeDuration: 0,
				codeInterVal:null,
				loading:false,
				clickable:false
			}
		},
		computed: mapState(['forcedLogin']),
		methods: {
			// ...mapMutations(['login']),
			sendSmsCode() {
				console.log(this.phone)
				if (this.codeDuration) {
					uni.showToast({
						title:`请在${this.codeDuration}秒后重试`,
						icon:'none',
						mask:true,
						image:'../../static/img/error.png'
					})
				}
				if (!/^1\d{10}$/.test(this.phone)) {
					uni.showToast({
						title:'手机号填写错误',
						icon:'none',
						mask:true,
						image:'../../static/img/error.png'
					})
					return
				}
				
				uni.request({
					url:'http://mrbus.net:8888/api/user/smsCode'+'?phone='+this.phone,
					method:'POST',
					success: (res) => {
						console.log(res)
						if(res.statusCode==200){
							uni.showToast({
								title:'发送成功',
								icon:'none',
								mask:true,
								image:'../../static/img/success.png'
							})
							this.codeDuration = 60
							this.codeInterVal = setInterval(() => {
								this.clickable=true
								this.codeDuration--
								if (this.codeDuration === 0) {
									if (this.codeInterVal) {
										this.clickable=false
										clearInterval(this.codeInterVal)
										this.codeInterVal = null
									}
								}
							}, 1000)
						}else{
							uni.showToast({
								title:`${res.data.message}`,
								icon:'none',
								mask:true,
								image:'../../static/img/error.png'
							})
						}	
					},
					fail: (err) => {
						console.log(err)
						uni.showToast({
							title:'发送失败',
							icon:'none',
							mask:true,
							image:'../../static/img/error.png'
						})
					}
				})
			},
			loginByPwd() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if (!/^1\d{10}$/.test(this.phone)) {
					uni.showToast({
						title:'手机号填写错误',
						icon:'none',
						mask:true,
						image:'../../static/img/error.png'
					})
					return
				}
				if (this.password.length < 6) {
					uni.showToast({
						mask:true,
						image:'../../static/img/error.png',
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
						console.log(res.data)
						if(res.data.status_code==200){
							uni.showToast({
								title:'登录成功',
								mask:true,
								image:'../../static/img/success.png',
								icon: 'none',
							})
							this.$store.commit('login',res.data.data)
							// this.$store.commit('login',{
								
							// 	userPhone:res.data.data.user.phone,
							// 	token:res.data.token,
							// 	id:res.data.data.user.id,
							// 	// userName:res.data.data.user.name,
							// 	// eName:res.data.data.user.enterprise.name,
							// 	// eId:res.data.data.user.enterprise.id,
							// 	// Principal:res.data.data.user.type,
							// 	// eMoney:res.data.data.user.enterprise.money
							// })
							uni.switchTab({
								url:'../user/user'
							})
						}
						else{
							uni.showToast({
								title:'密码错误!',
								icon:'none',
								mask:true,
								image:'../../static/img/error.png'
							})
						}
					},
					fail: (err) => {
						console.log(err)
						uni.showToast({
							title:'出了点问题!',
							icon:'none',
							mask:true,
							image:'../../static/img/error.png'
						})
					}
				}) 

			},
			loginBySms() {
				if (!/^1\d{10}$/.test(this.phone)) {					
					uni.showToast({
						title:'手机号填写错误',
						icon:'none',
						mask:true,
						image:'../../static/img/error.png'
					})
					return
				}
				if (!/^\d{6}$/.test(this.code)) {					
					uni.showToast({
						title:'验证码为6位纯数字',
						icon:'none',
						mask:true,
						image:'../../static/img/error.png'
					})
					return;
				}
				this.loading = true;
				setTimeout((e=>{
					this.loading = false;
				}),1500);
				uni.request({
					url:'http://mrbus.net:8888/api/user/login2',
					data:{
						phone:this.phone,
						code:this.code
					},
					method:'POST',
					header:{
						"content-type":"application/json"
					},
					success: (res) => {
						console.log(res)
						if(res.data.status_code==200){							
							uni.showToast({
								title:'登录成功',
								icon:'none',
								mask:true,
								image:'../../static/img/success.png'
							})
							this.$store.commit('login',res.data)
							// this.$store.commit('login',{
								
							// 	userPhone:this.phone,
							// 	token:res.data.token,
							// 	id:res.data.data.user.id,
							// 	// userName:res.data.data.user.name,
							// 	// eName:res.data.data.user.enterprise.name,
							// 	// eId:res.data.data.user.enterprise.id,
							// 	// Principal:res.data.data.user.type,
							// 	// eMoney:res.data.data.user.enterprise.money
							// })
							uni.switchTab({
								url:'../user/user'
							},1000)
						}else{
							uni.showToast({
								title:`${res.data.message}`,
								icon:'none',
								mask:true,
								image:'../../static/img/error.png'
							})	
						}
					},
					fail: (err) => {
						uni.showToast({
							title:'登录失败！',
							icon:'none',
							mask:true,
							image:'../../static/img/error.png'
						})
					}
				})
				
			},
			bindLogin() {
				console.log(this.loginType)
				switch (this.loginType) {
					case 1:
						this.loginBySms()
						break;
					case 0:
						this.loginByPwd()
						break;
					default:
						break;
				}
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
		font-size: 16px;
		border-radius: 7px;
		text-align: center;
		background-color: #0FAEFF;
		/* border: 1px solid #FFFFFF; */
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
