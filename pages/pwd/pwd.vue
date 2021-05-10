<template>
	<view class="content">
			<!-- <view class="input-row">
				<uni-steps class="stepIn" :options="[{title: '身份验证'}, {title: '重置密码'}, {title: '重置完成'}]" :active="step" activeColor="#0faeff"></uni-steps>				
			</view> -->
			<view class="input-group">
				<view class="input-row">
					<text class="title">手机：</text>
					<uni-easyinput class="m-input" type="text" clearable focus v-model="phone" placeholder="请输入手机号码" :inputBorder="false"></uni-easyinput>
				</view>
				<view class="input-row" >
					<text class="title">验证码：</text>
					<uni-easyinput type="text" v-model="code" placeholder="请输入验证码" :inputBorder="false"></uni-easyinput>
					<!-- <view class="send-code-btn" @click="sendSmsCode">{{codeDuration ? codeDuration + 's' : '发送验证码' }}</view> -->
					<button class="send-code-btn" @click="sendSmsCode" :disabled="clickable">{{codeDuration ? codeDuration + 's' : '发送验证码' }}</button>
				</view> 
				<view class="input-row" >
					<text class="title">新密码：</text>
					<uni-easyinput type="text" v-model="newPassword" placeholder="请输入新密码" :inputBorder="false"></uni-easyinput>
				</view> 
				<view class="input-row" >
					<text class="title">确认密码：</text>
					<uni-easyinput type="text" v-model="RenewPassword" placeholder="请确认密码" :inputBorder="false"></uni-easyinput>
				</view> 
			</view>
<!-- 			<view class="input-group" v-show="isshow2">
			<view class="input-row border">
					<text class="title">新密码：</text>
					<uni-easyinput class="m-input" type="text" clearable focus v-model="newPassword" placeholder="请输入新密码" :inputBorder="false"></uni-easyinput>
				</view> 
				<view class="input-row border">
					<text class="title">确认密码：</text>
					<uni-easyinput class="m-input" type="text" clearable focus v-model="RenewPassword" placeholder="请输入新密码" :inputBorder="false"></uni-easyinput>
				</view> 
				
			</view>
			<view class="input-group" v-show="isshow3">
				<view class="input-row border">
					<text>密码重置成功，请重新登录</text>
				</view> 
				
			</view>	 -->
		<view class="btn-row">
			<button class="primary" @click="findPassword">找回密码</button>
			<!-- <button @click=""  v-show="showNext">重新登陆</button> -->
			<!-- <button type="primary" class="primary" @tap="findPassword">提交</button> -->
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
				phone:'',
				code:'',
				newPassword:'',
				RenewPassword:'',
				step:0,
				clickable:false,
				codeDuration:0,
				codeInterVal:null
			}
		},
		onShow() {
			// uni.showModal({
			// 	content:'此功能待开放',
			// 	showCancel:false,
			// 	success: (res) => {
			// 		if(res.confirm)
			// 		{
			// 			uni.switchTab({
			// 				url:'../user/user'
			// 			})
			// 		}
			// 	}
			// })
		},
		methods: {
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
						if(res.data.status_code==200){
							uni.showToast({
								title:'发送成功',
								icon:'none',
								mask:true,
								image:'../../static/img/success.png'
							})
							this.codeDuration =60
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
			findPassword() {
				if (!/^1\d{10}$/.test(this.phone)) {
					uni.showToast({
						title:'手机号填写错误',
						icon:'none',
						mask:true,
						image:'../../static/img/error.png'
					})
					return
				}
				else if (!/^\d{6}$/.test(this.code)) {
					uni.showToast({
						title:'验证码6位数字',
						icon:'none',
						mask:true,
						image:'../../static/img/error.png'
					})
					return;
				}
				else if(this.newPassword.length<6)
				{
					// console.log(this.newPassword.length)
					uni.showToast({
						title:'密码最短为6个',
						icon:'none',
						mask:true,
						image:'../../static/img/error.png'
					})				
					return;
				}
				else if(this.newPassword!=this.RenewPassword)
				{
					console.log(this.newPassword!=this.RenewPassword)
					
					uni.showToast({
						title:'两次密码不一致',
						icon:'none',
						mask:true,
						image:'../../static/img/error.png'
					})	
					return;
				}
				else{
					uni.request({
							url:'http://mrbus.net:8888/api/user/forget',
							data:{
								phone:this.phone,
								code:this.code,
								pw:this.newPassword
							},
							method:'POST',
							header:{
								"content-type":"application/json"
							},
							success: (res) => {
								console.log(res.data)
								if(res.data.status_code==200)
								{
									uni.showToast({
										title:'成功找回密码!',
										icon:'none',
										mask:true,
										image:'../../static/img/success.png'
									})
									uni.switchTab({
										url:'../user/user'
									})
								}
								else
								{
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
									title:'找回失败!',
									icon:'none',
									mask:true,
									image:'../../static/img/error.png'
								})
							}
						})
				}
				
				
			}
		}
	}
</script>

<style>
	.stepIn{
		background-color: #efeff4
	}
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
		border-radius: 5px;
	}
	
	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.primary{
		color: #FFFFFF;
	}
	
</style>
