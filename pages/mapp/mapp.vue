<template>
	<view class="map-content">
		<!-- <uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件"></uni-nav-bar> -->
		<iframe id="mapPage" width="100%" height="100%" frameborder=0
		    src="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=2RPBZ-X46CW-ACVR7-RRGU5-BIEP6-DKBHU&referer=bus-andriod">
		</iframe>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				selectType:'',
				loc:''
			}
		},
		onLoad(option) {
			this.selectType=option.type; 
			// console.log(this.selectType)
			window.addEventListener('message', function(event) {
				// 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
				this.loc = event.data.poiaddress;
				// if (loc && loc.module == 'locationPicker') {//防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
				//   console.log('location', loc.poiaddress+loc.poiname);
				// }
				 // console.log('location', loc.poiaddress+loc.poiname);
				if(this.selectType=='start'){
					uni.setStorage({
						key:"start_item",
						data:loc
					})
					uni.getStorage({
						key:"start_item",
						success:function(res){
							console.log(res.data)
						}
					})
				}
				else if(this.selectType=='end')
				{
					uni.setStorage({
						key:"end_item",
						data:loc
					})
				}
				uni.switchTab({
					url:'../person-ride/person'
				})
			}, false);
				
				
		}
		
	}
</script>

<style>
	.map-content{
		position: fixed;
		left: 0;
		right: 0;
	}
</style>
