<template>
	<view class="ShowMap">
		<text>选择位置</text>
		<map 		
		:latitude="latitude"	
		:longitude="longitude"		
		scale="11" 		
		:markers="markers"		
		:show-location="true"		
		@markertap="markertap"		
		@updated='mapUpdated'		
		@tap='closeMapMarker'></map>		
		
	</view>
</template>

<script>
	import amap from "../../libs/amap-wx.js";
	export default{
		onLoad() {
			this.amapPlugin = new amap.AMapWX({
			
			key: this.mapKey  //该key 是在高德中申请的微信小程序key
			
			});
			
			this.amapPlugin.getRegeo({
			
			type: 'gcj02', //map 组件使用的经纬度是国测局坐标， type 为 gcj02
			
			success: function(res) {
			
			const latitude = res[0].latitude;
			
			const longitude = res[0].longitude;
			
			that.longitude = longitude;
			
			that.latitude = latitude;
			
			that.mapInfo=res[0];
			
			},
			
			fail: (res) => {
			
			console.log(JSON.stringify(res));
			
			}
			
			});
			
		}
	}
</script>

<style>
</style>
