<template>
	<view>
		<view class="page-body">
		     <view class="page-section page-section-gap" style="box-shadow: 0 7rpx 5rpx 5rpx #EFEFF4;" >
				<map 
					style="width:750rpx; height:850rpx; " 
					:latitude="latitude" 
					:longitude="longitude" 
					:markers="covers"
					
					:polyline="polyline"
					scale="16"
					>
		        </map>
		     </view>
			 <view class="qrimg">
				 <tki-qrcode class="qrcode"
				  v-if="ifShow" 
				  cid="qrcode1" 
				  ref="qrcode" 
				  :val="val" :size="size" 
				  :unit="unit" 
				  :background="background" 
				  :foreground="foreground" 
				  :pdground="pdground" 
				  :icon="icon" :iconSize="iconsize" 
				  :lv="lv" :onval="onval" 
				  :loadMake="loadMake" 
				  :usingComponents="true" />
				  
				  <text>乘车码</text>
			 </view>
		</view>
	</view>
</template>

<script>
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
		export default {
		    data() {
		        return {
					//地图
					id:0, // 使用 marker点击事件 需要填写id
					latitude: 23.099994,//修改坐标
					longitude: 113.324520,
					name: 'T.I.T 创意园',
					covers: [{
					     latitude:23.099994,
					     longitude:113.324520,
					     iconPath: '../../static/img/location.png' 
					},{
					     latitude: 23.088888,
					     longitude: 113.20000,
					     iconPath: '../../static/img/location.png'
					}],
					polyline: [{
						points: [
						   {latitude: 23.099994,longitude: 113.324520}, 				
						   {latitude: 23.088888,longitude: 113.20000}
						],
						width: 10,
						color: "#00aaff",
						dottedLine: false,
					}],
					//二维码
					ifShow: true,
					val: '二维码', // 要生成的二维码值
					size: 360, // 二维码大小
					unit: 'upx', // 单位
					background: '#ffffff', // 背景色
					foreground: '#000000', // 前景色
					pdground: '#000000', // 角标色
					icon: '', // 二维码图标
					iconsize: 40, // 二维码图标大小
					lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
					onval: false, // val值变化时自动重新生成二维码
					loadMake: true, // 组件加载完成后自动生成二维码
					src: '' // 二维码生成后的图片地址或base64
				}
			},
		    methods: {
		
		    },
			components: {tkiQrcode},
	}
			
</script>

<style>
	.qrimg{
		padding: 50px 100px;
		text-align: center;
		font-size: large;
		/* background-color:#0FAEFF; */
	}
	.qrcode{
		box-shadow: 0 -10rpx 10rpx 10rpx #EFEFF4;
	}
</style>
