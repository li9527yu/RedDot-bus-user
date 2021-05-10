<template>
	<view class="container">
		<view class="Order">
			<view class="OrderList">
				<view class="RouteInfo">
					<view class="Title"><text class="InfoTitle">行程信息：</text></view>
					<uni-row class="orderListItem">
						<uni-col :span="6"><text class="orderTitle">出发时间:</text></uni-col>
						<uni-col :span="18"><text class="orderTitle">{{acceptData.time}}</text></uni-col>
					</uni-row>
					<uni-row class="orderListItem">
						<uni-col :span="24">
							<ul class="RouteItem">
								<li v-for="(item,index) in acceptData.lists" :key="index">{{item.address}}</li>
							</ul>
						</uni-col>
					</uni-row>
				</view>
				<view class="CarInfo">
					<view class="Title"><text class="InfoTitle">车辆信息：</text></view>
					<!-- <uni-list-item title="可乘坐人数：" :rightText="acceptData.pNum"></uni-list-item> -->
					<uni-row class="orderListItem">
						<uni-col :span="8"><text class="orderTitle">可乘坐人数：</text></uni-col>
						<uni-col :span="12"><text class="orderTitle">{{acceptData.pNum}}</text></uni-col>
					</uni-row class="orderListItem">
					<uni-row>
						<view class="cars">
							<view v-for="(item,index) in carsInfo" :key="index" class="carItem">
								<view class="carItemInfo"><image src="../../static/img/cartype1.png"></image></view>
								<view class="carItemInfo">
									<text >{{item.name}}</text>
									<text >{{item.note}}</text>
								</view>
								<view class="carItemInfo"> <text >X{{item.selectValue}}</text></view>
							</view>
						</view>
					</uni-row>
				</view>
				<view class="OtherInfo">
					<uni-row class="orderListItem">
						<uni-col :span="4"><text class="orderTitle">备注：</text></uni-col>
						<uni-col :span="18"><text class="orderTitle">{{acceptData.note.length?acceptData.note:`无`}}</text></uni-col>
					</uni-row>
				</view>
				<view class="OtherInfo">
					<uni-row class="orderListItem">
						<uni-col :span="6"><text class="orderTitle">行程费用：</text></uni-col>
						<uni-col :span="18"><text class="orderfee">￥{{RouteLen}}</text></uni-col>
					</uni-row>
				</view>
			</view>
			<view class="OrderConfirm">
				<view class="confirm">
					<view class="payTitle"><text >￥{{RouteLen}}</text></view>
					<view class="paybutton"><button type="primary" @click="confirmOrder">去支付</button></view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import{
		mapState
	} from 'vuex'
	var amapFile = require('@/common/amap-wx.js');
	export default{
		data(){
			return{
				acceptData:{
					time:'',
					lists:[],
					pNum:0,
					note:'',
					money:0
				},
				noteLen:0,
				RouteLen:0,
				carsInfo:[]
			}
		},
		onLoad(options) {
			if(options.submitData==null)
			{
				options.submitData='';
			}
			else{
				var data=JSON.parse(options.submitData)
				console.log(data)
				this.acceptData.time=data.timeValue;
				this.acceptData.lists.splice(0,0,data.start)
				var len=data.wayLists.length;
				var that=this;
				if(len>0){
					data.wayLists.forEach(function(item,index){
						that.acceptData.lists.splice(index+1,0,item);
					})
					this.acceptData.lists.splice(len+1,0,data.end);
				}
				else{
					this.acceptData.lists.splice(1,0,data.end);
				}
				console.log(this.acceptData.lists);
				this.acceptData.pNum=data.pNum;
				this.acceptData.note=data.note;
				this.getRoute()
			}
			var that=this;
			if(options.cars==null){
				options.cars=''
			}
			else{
				var cars=JSON.parse(options.cars)
				cars.forEach(function(item,index){
					let num=Number(item.selectValue);
					console.log(num)
					if(num>0){
						// let carItem={};
						that.carsInfo.push(item)
					}
					// console.log(item)
				})
				
				console.log(this.carsInfo)
			}
		},
		computed:{
			...mapState(['userId','EnterpriseId'])
		},
		methods:{
			getRoute() {
				let that = this;
				var myAmapFun = new amapFile.AMapWX({ key: 'e7a8d95066d5e9811f281eb714f86bbe' });
				var routes=that.acceptData.lists;
				routes.forEach(function(item,index){
					if(index<routes.length-1){
						var myLocal = routes[index].longitude+','+routes[index].latitude
						console.log(myLocal)
						var target = routes[index++].longitude+','+routes[index++].latitude
						console.log(target)
						myAmapFun.getDrivingRoute({//获取步行线路
							origin: myLocal,
							destination: target,
							success: function(data) {
								// console.log(data)
								// that.acceptData.money=data.paths[0].distance
								console.log(typeof(data.paths[0].distance));
								that.RouteLen+=Number(data.paths[0].distance);
								console.log(that.RouteLen)
								that.acceptData.money=that.RouteLen*2;
								//获取线路规划的数据，后面还需要在地图上画出来，未完成，完成后会发新博客
							},
							fail: function(info) {
								console.log(info);
							}
						});
					}
				})
				
			},
			confirmOrder(){
				var that=this;
				var len=this.acceptData.lists.length;
				var station1="";
				var station2="";
				var start=`(${this.acceptData.lists[0].address},${this.acceptData.lists[0].latitude},${this.acceptData.lists[0].longitude})`;
				if(len==3){
					station1=`(${this.acceptData.lists[1].address},${this.acceptData.lists[1].latitude},${this.acceptData.lists[1].longitude})`;
				}
				if(len==4){
					station1=`(${this.acceptData.lists[1].address},${this.acceptData.lists[1].latitude},${this.acceptData.lists[1].longitude})`;
					station2=`(${this.acceptData.lists[2].address},${this.acceptData.lists[2].latitude},${this.acceptData.lists[2].longitude})`;
				}
				var end=`(${this.acceptData.lists[len-1].address},${this.acceptData.lists[len-1].latitude},${this.acceptData.lists[len-1].longitude})`;
				// console.log(start)
				// console.log(end)
				// console.log(station1)
				console.log(station2)
				var time=`${this.acceptData.time}:00`;
				// console.log(this.userId)
				// console.log(this.EnterpriseId)
				console.log(that.acceptData.money)
				uni.navigateTo({
					url:'./pay?money='+that.acceptData.money
					// url:'./pay'
				})
				// uni.request({
				// 	url:'http://mrbus.net/api/eorder/add',
				// 	method:'POST',
				// 	header:{
				// 		"content-type":"application/json"
				// 	},
				// 	data:{
				// 		admin_id:that.userId,
				// 		date:time,
				// 		start:start,
				// 		end:end,
				// 		station1:station1,
				// 		station2:station2,
				// 		money:that.acceptData.money,
				// 		pnum:that.acceptData.pNum,
				// 		remark:that.acceptData.note,
				// 		enterprise_id:that.EnterpriseId
				// 	},
				// 	success: (res) => {
				// 		console.log(res.data)
				// 		if(res.data.status_code==200){
				// 			uni.showToast({
				// 				title:'下单成功！'
				// 			})
				// 			setTimeout(function(){
				// 				uni.reLaunch({
				// 					url:'../main/main'
				// 				})
				// 			},1000)
				// 		}
				// 		else{
				// 			uni.showToast({
				// 				title:'下单失败！'
				// 			})
				// 		}
				// 	},
				// 	fail: (err) => {
				// 		uni.showToast({
				// 			title:'下单失败！'
				// 		})
				// 	}
				// })
			}
		}
	}
</script>

<style>
	.container{
		width: 100%;
		padding: 5px;
		background-color: #f7f7f7;
	}
	.Order{
		/* border: 2px solid #F0F0F0; */
		/* border-radius: 5px; */
		padding: 4px;
	}
	.OrderList{
		/* margin-top: 2vh; */
		padding: 4px;
		/* border-bottom: 1px solid #F1F1F1; */
	}
	.RouteInfo{
		display: block;
		background-color: #FFFFFF;
		border: 2rpx solid #FFFFFF;
		border-radius: 20rpx;
		padding: 10rpx;
		margin-bottom: 20rpx;
	}
	.CarInfo{
		display: block;
		background-color: #FFFFFF;
		border: 2rpx solid #FFFFFF;
		border-radius: 20rpx;
		padding: 10rpx;
		margin-bottom: 20rpx;
	}
	.OtherInfo{
		display: block;
		background-color: #FFFFFF;
		border: 2rpx solid #FFFFFF;
		border-radius: 20rpx;
		padding: 10rpx;
		margin-bottom: 20rpx;
	}
	.Title{
		display: flex;
		align-items: center;
		margin: 6rpx 0;
	}
	.InfoTitle{
		text-align: center;
		font-size: 36rpx;
		font-weight: 600;
	}
	.orderTitle{
		font-size: 16px;
		font-weight: 500;
	}
	.orderfee{
		font-size: 32rpx;
		font-weight: 600;
	}
	.orderListItem{
		margin: 10px;
	}
	.RouteItem{
		font-size: 32rpx;
		font-weight: 200;
	}
	.RouteItem li:first-child{
		list-style-type: circle;
		
	}
	.RouteItem li{
		list-style-type: square;
		
	}
	.RouteItem li:last-child{
		list-style-type: disc;
		
	}
	.OrderConfirm{
		/* margin-top: 2vh; */
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
	}
	.confirm{
		display: flex;
	}
	.payTitle{
		flex:2;
		display: flex;
		align-items: center;
	}
	.payTitle text{
		font-size: 36rpx;
		font-weight: 600;
		margin-left: 10rpx;
	}
	.paybutton{
		flex: 1;
	}
	.paybutton button{
		padding: 8rpx;
		font-size: 32rpx;
	}
	.TipsTitle{
		font-weight: 600;
		font-size: 16px;
	}
	.cars{
		display: flex;
		flex-direction: column;
	}
	.carItem{
		display: flex;
		flex-direction: row;
		flex: 1;
		width: 100%;
	}
	.carItemInfo{
		display: flex;
		flex-direction: column;
		flex: 1;
		align-items: center;
		justify-content: center;
	}
	.carItemInfo text{
		margin: 10rpx 6rpx;
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.carItemInfo image{
		width: 120rpx;
		height: 120rpx;
	}
</style>
