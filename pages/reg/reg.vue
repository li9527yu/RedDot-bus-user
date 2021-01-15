<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">手机号：</text>
				<!-- <m-input type="text" focus clearable v-model="username" placeholder="请输入账号"></m-input> -->
				<uni-easyinput focus clearable v-model="phone" placeholder="请输入手机号" :inputBorder="false"></uni-easyinput>
			</view>
			<view class="input-row border">
				<text class="title">验证码：</text>
				<!-- <m-input type="text" focus clearable v-model="username" placeholder="请输入账号"></m-input> -->
				<uni-easyinput focus clearable v-model="sms_code" placeholder="请输入验证码" :inputBorder="false"></uni-easyinput>
				<button type="default" @click="sendCode">发送验证码</button>
			</view>
			<view class="input-row border">
				<text class="title">密码：</text>
				<!-- <m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input> -->
				<uni-easyinput type="password" displayable v-model="password" placeholder="请输入密码" :inputBorder="false"></uni-easyinput>
			</view>
			<view class="input-row">
				<text class="title">确认密码：</text>
				<!-- <m-input type="password" displayable v-model="confirmPassword" placeholder="请确认密码"></m-input> -->
				<uni-easyinput type="password" displayable v-model="confirmPassword" placeholder="请确认密码" :inputBorder="false"></uni-easyinput>
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
				confirmPassword: ''
			}
		},
		methods:{
			sendCode(){
				console.log(this.phone)
				uni.request({
					url:'http://mrbus.net:8888/api/user/smsCode'+'?phone='+this.phone,
					method:'POST',
					success: (res) => {
						console.log(res)
						uni.showToast({
							title: "发送成功"
						})
					}
				})
			},
			// sendCode(){
			// 	console.log(this.phone)
			// 	uni.request({
			// 		url:'http://mrbus.net:8888/api/user/smsCode'+'?phone='+this.phone,
			// 		method:'POST',
			// 		success: (res) => {
			// 			console.log(res)
			// 			if(res.statusCode==200){
			// 				uni.showToast({
			// 					title:'发送成功'
			// 				})
			// 			}else{
			// 				uni.showToast({
			// 					title:res.statusCode
			// 				})
			// 			}	
			// 		},
			// 		fail: (err) => {
			// 			console.log(err)
			// 			uni.showToast({
			// 				title:'发送失败'
			// 			})
			// 		}
			// 	})
			// },
			register() {
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
				if (this.password !== this.confirmPassword) {
					uni.showToast({
						icon: 'none',
						title: '两次密码输入不一致'
					});
					return;
				}
				uni.request({
					url:'http://mrbus.net:8888/api/user/register',
					data:{
						phone:this.phone,
						password:this.password,
						sms_code:this.sms_code
					},
					header:{
						"content-type":"application/json"
					},
					method:'POST',
					success: (res) => {
						// console.log("注册成功")
						console.log(res)
						if(res.statusCode==200){
							uni.showToast({
								title: '注册成功'
							});
							uni.navigateTo({
								url:'../login/login'
							})
						}else{
							uni.showToast({
								title:res.message
							})
						}
					},
					fail: (err) => {
						console.log(err)
						uni.showToast({
							title:'注册失败'
						})
					}
				})
		}
	},
	}
</script>

<style>
#send_sms{
	background-color: #0faeff;
	color: #0faeff;
	
}
</style>
