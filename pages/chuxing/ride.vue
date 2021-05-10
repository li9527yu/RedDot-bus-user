<template>
	<view class="container">
		<view class="page-body">
		     <view class="page-section page-section-gap" style="box-shadow: 0 7rpx 5rpx 5rpx #EFEFF4;" >
				<my-map></my-map>
		     </view>
			 <view class="qrimg">
				 <view class="titleInfo">
				 	<view 	v-for="(item,index) in Lists" 
				 		:key="index" 
				 		@click="ListNum = index" 
				 		:class="{act: ListNum === index}"
				 		 class="titleInfo-btn">{{item}}</view>
				 </view>
				 <view class="function" v-if="ListNum==0">
				 	<qr-code></qr-code>
				 </view>
				 <view class="function" v-else>
				 	<line-list></line-list>
				 </view>
			 </view>
		</view>
	</view>
</template>

<script>
	import MyMap from '../map/mymap2.nvue'
	import LineList from '../fixedRoute/LineList.vue'
	import QrCode from '../function/qrcode.vue'
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
		export default {
		    data() {
		        return {
					ListNum: 0,
					Lists:["二维码","线路列表"],
					count:"",
					
				}
			},
		    methods: {
				
		    },
			components: {
				tkiQrcode,
				MyMap,
				LineList,
				QrCode},
			onPullDownRefresh() {
				uni.reLaunch({
					url:'./ride'
				})
				setTimeout(function(){
					uni.stopPullDownRefresh()
				})
			},
			onHide() {				
				uni.$emit('hideMap',{
					flag:true
				})
			},
			onShow() {
				console.log('111')
				// if(!this.hasLogin){
				// 	uni.showToast({
				// 		title:'请先登录!',
				// 		icon:'none',
				// 		mask:true,
				// 		image:'../../static/img/alert.png'
				// 	})
				// }
			}
	}
			
</script>

<style>
	.container{
		width: 100%;
	}
	.qrimg{
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		/* background-color:#0FAEFF; */
	}
	.qrcode{
		box-shadow: 0 -10rpx 10rpx 10rpx #EFEFF4;
	}
	.function{
		background-color: #FFFFFF;
	}
	.titleInfo {
		display: flex;
		flex-direction: row;
		margin-top: 10px;
	}
	.titleInfo-btn {
		flex: 1;
		margin: 0 10px;
		font-size: 18px;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		height: 30px;
		line-height: 30px;
		text-align: center;
	}
	.titleInfo-btn.act {
		font-weight: 600;
		border-bottom: solid 2px rgb(15, 174, 255);
	}
</style>
