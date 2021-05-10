<template>
	<view class="content">
		<view>
			<view class="end-title">
			     <view class="titleItem" v-for="(item,index) in items" :key="index"  @tap="change(index)">
					  <view :class="{btna:count == index}">
						   <text class="item-title">{{item}}</text>
					  </view>  
			    </view>
			</view>
			<view class="MainContent">
				<view class="end-cont"  v-if="!btnnum">
					<enterprise></enterprise>
				</view>
				<view class="end-cont"  v-else>
					<digital></digital>
				</view>
			</view>
	</view>
	</view>
</template>

<script>
	import Person from '../person-ride/person.vue'
	import Enterprise from '../enterprise-ride/enterprise.vue'
	import FixedLine from '../fixedRoute/FixedLine.vue'
	import Digital from '../Digitalcharter/digital.vue'
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		components:{
			Person,
			Enterprise,
			FixedLine,
			Digital
		},
		data(){
			return {
			      btnnum: 0,
			      // items:["固定路线","个人乘车","企业乘车"],
				   items:["企业乘车","数字包车"],
			      count:"",
			  }
		},
		computed:{
			...mapState(['userId','hasLogin','forcedLogin','IsPrincipal'])
		},
		
		onLoad() {
		
		},
		
		methods: {
			// ...mapMutations(['login']),
			guideToLogin() {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					}
				});
			},
			change(e) {
			     this.count = e
			     this.btnnum = e
			     console.log(this.count)
			  }

	},
	}
</script>

<style>
	.item-title{
		font-size: 32rpx;
		font-weight: 300;
		color: #000000;
		/* font-weight: 400; */
	}
	.content{
		padding: 0;
		margin: 0;
		background-color: #FFFFFF;
	}
	.end-title{
		display: flex;
		padding: 20rpx;
		flex-direction: row;
		/* padding: 20rpx 0 20rpx; */
		/* background-color:rgb(15, 174, 255) ; */
		/* border-radius: 0 0 40rpx 40rpx; */
		border-bottom: 1px solid #F5F5F5;
   }
	.titleItem{
		flex: 1;
		/* flex-grow: 1; */
		text-align: center;
	}
	.MainContent{
		position: relative;
		/* margin-top: -20rpx; */
		background-color: #FFFFFF;
		margin-top: 20rpx;
	}
	.btna text{
		font-weight: 600;
		padding-bottom: 10rpx;
		border-bottom: 2px #000000 solid;
	}
	.dis{
		display: block;
	}
	
</style>
