<template>
	<view class="container">
		<view class="qrImg">
		    <tki-qrcode class="qrcode"
		     v-if="ifShow" 
		     cid="qrcode1" 
		     ref="qrcode" 
		     :val="val" :size="size" 
		     :unit="unit" 
		     
		     :icon="icon" :iconSize="iconsize" 
		     :lv="lv" :onval="onval" 
		     :loadMake="loadMake" 
		     :usingComponents="true" />
			 <text class="tips">请扫码上车</text>
		</view>
		<view class="tipTitle">
			
		</view>
	</view>
</template>

<script>
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
	    components: {tkiQrcode},
		data(){
			return{
				ifShow: true,
				val: '二维码', // 要生成的二维码值
				size: 250, // 二维码大小
				unit: 'px', // 单位
				background: '#ffffff', // 背景色
				foreground: '#000000', // 前景色
				pdground: '#000000', // 角标色
				icon: '', // 二维码图标
				iconsize: 40, // 二维码图标大小
				lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
				onval: true, // val值变化时自动重新生成二维码
				loadMake: true, // 组件加载完成后自动生成二维码
				src: '' // 二维码生成后的图片地址或base64
			}
		},
		computed:{
			...mapState(['userId','hasLogin','forcedLogin'])
		},
		created() {
			if(this.hasLogin){
				this.Qrcode()
			}
			else
			{
				uni.showToast({
					title:'请先登录',
					mask:true,
					image:'../../static/img/alert.png',
					icon: 'none',
				})
			}
		},
		onLoad() {
			
		
		},
		onShow(){
			if(this.hasLogin){
				this.Qrcode()
			}
			else
			{
				uni.showToast({
					title:'请先登录!',
					icon:'none',
					mask:true,
					image:'../../static/img/alert.png'
				})
			}
		},
		methods:{
			Qrcode(){
				var that=this
				uni.request({
					url:'http://mrbus.net:8888/api/user/code/'+this.userId,
					header:{
						"Content-Type": "application/json"
					},
					method:'GET',
					success: (res) => {
						console.log(res.data)
						let ans=res.data;
						if(ans.status_code==200)
						{
							that.val=res.data.message
						}
					}
				})
			}
		}
	}
</script>

<style>
	.container{
		width: 100%;
		margin: 0;
		padding: 0;
		background-color: #FFFFFF;
	}
	.qrImg{
		background-color: #FFFFFF;
		width: 100%;
		/* height: 100%; */
		padding: 20rpx 0;
		margin-top:20rpx;
		/* border: 1px solid #0000FF; */
		text-align: center;
	}
	.qrcode{
		vertical-align: middle;
		margin: 0 auto;
	}
	.tips{
		width: 100%;
		text-align: center;
		/* margin-bottom: 20rpx; */
		/* padding-bottom: 20rpx; */
		font-size: 22px;
		font-weight: 400;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
	.tipTitle{
		margin: 0 auto;
	}
</style>
