<template>
	<view class="content">
		<view class="changePwd">
			<uni-forms class="changeMain" >
				<uni-forms-item label="手机号：" class="changeItem">
					<uni-easyinput type="text" v-model="phone" placeholder="请输入手机号" :inputBorder="false" :value="userPhone"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="验证码：" class="changeItem">
					<view class="Code" >
						<uni-easyinput type="text" v-model="code" placeholder="请输入验证码"  :inputBorder="false"></uni-easyinput>
						<button class="send-code-btn" @click="sendSmsCode" :disabled="clickable">{{codeDuration ? codeDuration + 's' : '发送验证码' }}</button>
					</view>
				</uni-forms-item >
				<uni-forms-item label="新密码：" class="changeItem">
					<uni-easyinput type="password" v-model="newPassword" placeholder="请输入新密码" :inputBorder="false"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="确认密码"  class="changeItem">
					<uni-easyinput type="password" displayable v-model="RenewPassword" placeholder="请确认密码" :inputBorder="false"></uni-easyinput>
				</uni-forms-item>
			</uni-forms>
		</view>
		<view class="btn-row">
			<button  @click="changePwd">修改密码</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default{
		data(){
			return{
				phone:'',
				code:'',
				newPassword:'',
				RenewPassword:'',
				codeDuration:0,
				codeInterVal:null,
				clickable:false
			}
		},
		computed:{
			...mapState(['userId','userName','userPhone'])
		},
		onLoad() {
			console.log(this.userPhone)
			this.phone=this.userPhone
		},
		methods:{
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
			changePwd(){
				if (!/^\d{6}$/.test(this.code)) {
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
					uni.showToast({
						title:'密码最短为6个',
						icon:'none',
						mask:true,
						image:'../../static/img/error.png'
					})
					return
				}			
				else if(this.newPassword!=this.RenewPassword)
				{
					uni.showModal({
						title: '两次密码不一致',
						showCancel: false
					})
					return
				}
				else{
					var that=this;
					console.log(`id:${this.userId},phone:${this.phone},pw:${this.newPassword}`)
					uni.request({
						url:'http://mrbus.net/api/user/password',
						header:{
							"Content-Type":"application/json"
						},
						data:{
							phone:this.phone,
							id:this.userId,
							code:this.code,
							pw:this.newPassword
						},
						method:'POST',
						success: (res) => {
							console.log(res)
							if(res.data.status_code==200)
							{
								uni.showToast({
									title:'成功修改密码!',
									icon:'none',
									mask:true,
									image:'../../static/img/success.png'
								})
								// uni.showLoading({
									
								// })
								setTimeout(function(){
									that.$store.commit('logout')
									uni.switchTab({
										url:'../user/user'
									})
								},1000)
								
							}
							else{
								uni.showToast({
									title:`${res.data.message}`,
									icon:'none',
									mask:true,
									image:'../../static/img/error.png'
								})
							}
							// console.log(res.data)
						},
						fail: (err) => {
							console.log(err)
							uni.showToast({
								title:'修改失败!',
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
	.changePwd{
		width: 100%;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		font-size: 32rpx;
		margin-top: 20rpx;
	}
	.changeMain{
		padding: 0 20rpx;
	}
	.changeItem{
		margin: 0 10rpx;
	}
	.send-code-btn {
		width: 120px;
		text-align: center;
		background-color: #0FAEFF;
		color: #FFFFFF;
		border-radius: 5px;
	}
	.Code{
		display: flex;
		flex-direction: row;
		position: relative;
	}
	.btn-row button{
		font-size: 32rpx;
		font-weight: 600;
		padding: 10rpx;
		color: #FFFFFF;
		background-color: #0FAEFF;
	}
</style>
