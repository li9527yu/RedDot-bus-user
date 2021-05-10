<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">手机号：</text>
				<!-- <m-input type="text" focus clearable v-model="username" placeholder="请输入账号"></m-input> -->
				<uni-easyinput class="m-input" focus clearable v-model="phone" placeholder="请输入手机号" :inputBorder="false"></uni-easyinput>
			</view>
			<view class="input-row border">
				<text class="title">验证码：</text>
				<!-- <m-input type="text" focus clearable v-model="username" placeholder="请输入账号"></m-input> -->
				<uni-easyinput class="m-input" focus clearable v-model="sms_code" placeholder="请输入验证码" :inputBorder="false"></uni-easyinput>
				<!-- <button type="default" @click="sendCode">{{codeDuration ? codeDuration + 's' : '发送验证码' }}</button> -->
				<button class="send-code-btn" @click="sendCode" :disabled="clickable">{{codeDuration ? codeDuration + 's' : '发送验证码' }}</button>
				<!-- <view class="send-code-btn" @click="sendCode">{{codeDuration ? codeDuration + 's' : '发送验证码' }}</view> -->
			</view>
			<view class="input-row border">
				<text class="title">密码：</text>
				<!-- <m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input> -->
				<uni-easyinput class="m-input" type="password" displayable v-model="password" placeholder="请输入密码" :inputBorder="false"></uni-easyinput>
			</view>
			<view class="input-row">
				<text class="title">确认密码：</text>
				<!-- <m-input type="password" displayable v-model="confirmPassword" placeholder="请确认密码"></m-input> -->
				<uni-easyinput class="m-input" type="password" displayable v-model="confirmPassword" placeholder="请确认密码" :inputBorder="false"></uni-easyinput>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="register">注册</button>
		</view>
	</view>
</template>

<script>
	// import mInput from '../../components/m-input.vue';

	export default {
		// components: {
		// 	mInput
		// },
		data() {
			return {
				phone: '',
				password: '',
				sms_code:'',
				confirmPassword: '',
				codeDuration:0,
				codeInterVal:null,
				clickable:false
			}
		},
		methods: {
			sendCode(){
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
								title:'发送成功！',
								icon:'none',
								mask:true,
								image:'../../static/img/success.png'
							})
							this.codeDuration = 60
							this.codeInterVal = setInterval(() => {
								this.clickable=true
								this.codeDuration--
								if (this.codeDuration === 0) {
									this.clickable=false
									if (this.codeInterVal) {
										clearInterval(this.codeInterVal)
										this.codeInterVal = null
									}
								}
							}, 1000)
						}else{
							uni.showToast({
								title:'发送失败！',
								icon:'none',
								mask:true,
								image:'../../static/img/error.png'
							})
						}	
					},
					fail: (err) => {
						console.log(err)
						uni.showToast({
							title:'发送失败'
						})
					}
				})
			},
			register() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if (!/^1\d{10}$/.test(this.phone)) {					
					uni.showToast({
						title:'手机号填写错误！',
						icon:'none',
						mask:true,
						image:'../../static/img/error.png'
					})
					return
				}
				else if(!/^\d{6}$/.test(this.sms_code)){
					uni.showToast({
						title:'验证码为6位纯数字！',
						icon:'none',
						mask:true,
						image:'../../static/img/error.png'
					})
					return;
				}
				else if(this.password.length < 6) {
					uni.showToast({
						title:'密码最短为 6 个字符',
						icon:'none',
						mask:true,
						image:'../../static/img/error.png'
					})
					
					return;
				}
				else if (this.password !== this.confirmPassword) {					
					uni.showToast({
						title:'两次密码输入不一致',
						icon:'none',
						mask:true,
						image:'../../static/img/error.png'
					})
					return;
				}
				else{
					uni.request({
						url:'http://mrbus.net:8888/api/user/register',
						method: 'POST',
						header: {
							"content-type": "application/json "
						},
						data: {
							  password: this.password,
							  phone: this.phone,
							  sms_code: this.sms_code
						},
						success: (res) => {
							// console.log("注册成功")							
							uni.showToast({
								title:'注册成功',
								icon:'none',
								mask:true,
								image:'../../static/img/success.png'
							})
							uni.navigateTo({
								url:'../login/login'
							})
							console.log(res.data)
							// 获得token，以及username并存储在localstorage
							// uni.setStorageSync('uniIdToken', )
							// uni.setStorageSync('username', )
							// uni.reLaunch({
							// 	url:'../main/main'
							// })
							
						},
						fail: (err) => {
							uni.showToast({
								title:'注册失败',
								icon:'none',
								mask:true,
								image:'../../static/img/error.png'
							})							
						}
					})
				} 
			}
		},
	}
</script>

<style>
	#send_sms{
		background-color: #0faeff;
		color: #0faeff;
		
	}
	.send-code-btn {
		width: 120px;
		text-align: center;
		background-color: #0FAEFF;
		color: #FFFFFF;
	}
</style>
