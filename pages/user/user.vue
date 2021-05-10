<template>
	<view class="container">
		<view class="center">
			<view class="logo" @click="bindLogin" :hover-class="!hasLogin ? 'logo-hover' : ''">
				<image class="logo-img" :src="avatarUrl"></image>
				<view class="logo-title">
					<view class="TitleText">
						<text class="user-name" >Hi，{{hasLogin ? (userName?userName:userPhone) : '您未登录'}}</text>
						<text v-if="IsEnterprise" class="user-enterprise">{{IsEnterprise?`企业名称: ${EnterpriseName}`:`暂未与企业绑定`}}</text>
					</view>
					<view v-if="IsPrincipal" class="TitleText">
						<text class="user-name" >{{IsPrincipal?`已认证企业负责人`:''}}</text>
						<text class="user-enterprise">{{IsPrincipal?`企业余额:${EnterpriseMoney}`:``}}</text>
					</view>
					<view class="TitleText" >
						<image v-if="!hasLogin" class="arrow" src="/static/img/arrowRight.png"></image>
					</view>
					<!-- <text class="go-login navigat-arrow" >&#xe65e;</text> -->
				</view>
			</view>
			<view class="userMain">
				<uni-list class="userMainList">
					<uni-list-item class="ListItem" title="帐号管理" @click="changePwd" link :clickable="true" thumb="/static/img/user_control.png" thumbSize="base"></uni-list-item>
					<uni-list-item class="ListItem" title="信息完善" @click="PerfectInfo" link :clickable="true" thumb="/static/img/user_write.png" thumbSize="base"></uni-list-item>
					<uni-list-item class="ListItem" title="历史订单" @click="orderHis" link :clickable="true" thumb="/static/img/user_order.png" thumbSize="base"></uni-list-item>
					<uni-list-item class="ListItem" title="服务条款及隐私" @click="tips" link :clickable="true" thumb="/static/img/user_write.png" thumbSize="base"></uni-list-item>
					<uni-list-item class="ListItem" title="关于应用"  @click="tips" link :clickable="true" thumb="/static/img/user_about.png" thumbSize="base"></uni-list-item>
					
				</uni-list>
			</view>
			<view class="loginOut">
				<button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		data(){
			return {
				avatarUrl: "../../static/img/logo.png",
				extra1:'',
				inviteUrl: '',
			}
		},
		computed: {
			...mapState(['hasLogin','userPhone', 'forcedLogin','userId','userName','EnterpriseName','IsPrincipal','IsEnterprise','EnterpriseMoney'])
		},
		onLoad() {
			console.log(this.IsPrincipal)
			console.log(this.EnterpriseName)
			console.log(this.userName)
		},
		onShow() {
			console.log(this.hasLogin)
			console.log(this.IsEnterprise)
			console.log(this.IsPrincipal)
			console.log(this.EnterpriseName)
			console.log(this.userName)
		},
		methods: {
			// ...mapMutations(['logout']),
			PerfectInfo(){
				if(this.hasLogin){
					uni.navigateTo({
							// url:'../userInfo/PerfectInfo'
							url:'../userInfo/StaffInfo'
						})
					}
				else{
					uni.showToast({
						title:'请先登录!',
						icon:'none',
						mask:true,
						image:'../../static/img/alert.png'
					})
				}
			},	
			// certify(){
			// 	if(!this.IsStaff){
			// 		console.log('tes')
			// 		var that=this;
			// 		uni.request({
			// 			url:'http://mrbus.net:8888/api/user/enterprise/'+that.userId,
			// 			method:'GET',
			// 			success: (res) => {
			// 				console.log(res.data)
			// 				if(res.data.status_code==200){
			// 					if(res.data.message==null){
			// 						uni.showToast({
			// 							title:'还未绑定企业！',
			// 							icon:'none',
			// 							mask:true,
			// 							image:'../../static/img/alert.png'
			// 						})
			// 					}
			// 					else
			// 					{
			// 						uni.showToast({
			// 							title:'员工认证成功！',
			// 							icon:'none',
			// 							mask:true,
			// 							image:'../../static/img/success.png'
			// 						})
			// 					}
			// 					this.$store.commit('StaffCertify',res.data)
			// 				}else{
			// 					uni.showToast({
			// 						title:'员工认证失败',
			// 						icon:'none',
			// 						mask:true,
			// 						image:'../../static/img/error.png'
			// 					})
			// 				}
			// 			},fail: (err) => {
			// 				uni.showToast({
			// 					title:'员工认证失败',
			// 					icon:'none',
			// 					mask:true,
			// 					image:'../../static/img/error.png'
			// 				})
			// 			}
			// 		})
			// 	}
			// },
			changePwd(){
				if(this.hasLogin){
					uni.navigateTo({
						url:'../userInfo/changePwd'
					})
					}
				else{
					uni.showToast({
						title:'请先登录!',
						icon:'none',
						mask:true,
						image:'../../static/img/alert.png'
					})
				}
				
			},
			orderHis(){
				if(this.hasLogin){
					uni.navigateTo({
							url:'../userInfo/hisOrder'
						})
					}
				else{
					uni.showToast({
						title:'请先登录!',
						icon:'none',
						mask:true,
						image:'../../static/img/alert.png'
					})
				}
			},	
			bindLogin() {
				if (!this.hasLogin) {
					uni.navigateTo({
						url: '../login/login',
					});					
				} 
			},
			bindLogout() {
				uni.showModal({
					content:'确认退出吗？',
					success: (res) => {
						if(res.confirm){
							this.$store.commit('logout')
							uni.showToast({
								title:'退出成功！',
								icon:'none',
								mask:true,
								image:'../../static/img/success.png'
							})
							setTimeout(function(){
								uni.switchTab({
									url:'../main/main'
								})
							})
						}
					}
				})
				
				
			},
			tips(){
				uni.showToast({
					title:'待开放',
					icon:'none',
					mask:true,
					image:'../../static/img/alert.png'
				})
			},
			// Mynew(){
			// 	uni.navigateTo({
			// 		url:'../mynews/newsList'
			// 	})
			// }
		}
	}
</script>

<style>
	.container{
		width: 100%;
	}

	page,
	view {
		display: flex;
	}

	page {
		background-color: #f8f8f8;
	}

	button {
		width: 100%;
	}

	.center {
		width: 100%;
		flex-direction: column;
	}

	.logo {
		width: 100%;
		height: 280rpx;
		padding: 20rpx;
		box-sizing: border-box;
		background-color: #0faeff;
		flex-direction: row;
		align-items: center;
		border-radius: 0 0 30rpx 30rpx;
	}

	.logo-hover {
		opacity: 0.8;
	}

	.logo-img {
		width: 120rpx;
		height: 120rpx;
		padding: 10rpx;
		border-radius: 150rpx;
		border: 4rpx solid #f1f1f1;
	}

	.logo-title {
		display: flex;
		/* flex-direction:column; */
		height: 150rpx;
		flex: 1;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		margin-left: 20rpx;
	}
	.TitleText{
		display: flex;
		flex-direction: column;
	}
	.userMain{
		width: 95%;
		position: relative;
		margin: -30rpx auto 0;
	}
	.userMainList{
		width: 100%;
		padding: 0 10rpx;
		border-radius: 18rpx;
	}
	.ListItem{
		padding: 18rpx;
	}
	.user-name {
		flex: 1;
		font-size:28rpx;
		height: 60rpx;
		line-height: 60rpx;
		color: #FFFFFF;
	}
	.user-enterprise{
		flex: 1;
		font-size:28rpx;
		height: 60rpx;
		line-height: 60rpx;
		color: #FFFFFF;
	}
	.go-login.navigat-arrow {
		color: #FFFFFF;
	}

	.login-title {
		height: 150rpx;
		align-items: self-start;
		justify-content: center;
		flex-direction: column;
		margin-left: 20rpx;
	}

	.center-list {
		background-color: #FFFFFF;
		margin-top: 20rpx;
		width: 750rpx;
		flex-direction: column;
	}

	.center-list-item {
		height: 90rpx;
		width: 750rpx;
		box-sizing: border-box;
		flex-direction: row;
		padding: 0rpx 20rpx;
	}

	.border-bottom {
		border-bottom-width: 1rpx;
		border-color: #c8c7cc;
		border-bottom-style: solid;
	}

	.list-icon {
		width: 40rpx;
		height: 90rpx;
		line-height: 90rpx;
		color: #0faeff;
		text-align: center;
		font-family: texticons;
		margin-right: 20rpx;
	}

	.list-text {
		height: 90rpx;
		line-height: 90rpx;
		color: #555;
		flex: 1;
		text-align: left;
	}
	.arrow{
		width: 40rpx;
		height: 40rpx;
	}
	.navigat-arrow {
		height: 90rpx;
		width: 40rpx;
		line-height: 90rpx;
		color: #555;
		text-align: right;
		font-family: texticons;
	}
	.loginOut{
		width: 95%;
		margin: 80rpx auto 0;
		/* position: fixed;
		bottom: 100rpx;
		right: 0;
		left: 0; */
	}
	.loginOut button{
		font-size: 32rpx;
		font-weight: 600;
		padding: 10rpx;
		background-color: #0FAEFF;
		color: #FFFFFF;
	}
</style>
