<template>
	<view>
		<view class="orderItem">
			<view class="orderInfo">
				<uni-row class="Ordertitle">
					<uni-col :span="2"><image class="titleIcon" src="../../static/img/orderBus.png"/></uni-col>
					<uni-col :span="6" class="titleText">企业订单</uni-col>
					<uni-col :offset="10" :span="6" class="orderState">
						<!-- 已完成 -->{{state}}</uni-col>
				</uni-row>
				<uni-row class="OrderBody">
					<uni-col  :span="4">
						<view class="orderImg">
							<image class="orderIcon" src="../../static/img/orderBus.png"/>
						</view>
					</uni-col>	
					<uni-col :span="20">
						<ul>
							<li>时间：{{orderItem.time}}</li>
							<li>行程:
								<ul class='Route'>
									<li>{{RouteSplit_Start}}</li>
									<li v-if="orderItem.station1">{{RouteSplit_Station1}}</li>
									<li v-if="orderItem.station2">{{RouteSplit_Station2}}</li>
									<li>{{RouteSplit_End}}</li>
									<!-- <li>{{orderItem.start}}</li>
									<li>{{orderItem.end}}</li> -->
								</ul>
							</li>
							<!-- <li>司机电话：{{orderItem.phone}}</li> -->
						</ul>
					</uni-col>
				</uni-row>
				<uni-row v-if="orderItem.state==0" >
					<uni-col :span="6" :offset="1">
						<button
							v-if="orderItem.state==0" 
							class="cancelOrder" type="default" 
							size="mini" 
							@click="cancelOrder">取消订单</button>
					</uni-col>
					<uni-col :span="6" :offset="10">
						<button
							class="cancelOrder" type="default" 
							size="mini" 
							@click="turnMap">查看地图</button>
					</uni-col>
				</uni-row>
				<uni-row class="cancel" >
					<uni-col :span="6" :offset="17" >
						<button 
							v-if="orderItem.state==0" 
							class="confirmOrder" 
							type="default" 
							size="mini" 
							@click="confirmOrder">待确认</button>
						<button
							v-if="orderItem.state==1"
							class="EDconfirmOrder" 
							type="default" 
							size="mini" 
							:disabled="true">已确认</button>
						<uni-popup ref="popup" type="center">
							<view class="confirmDetail"> 
								<uni-row >
									<uni-col :span="2" :offset="21">
										<uni-icons @click="close" type="closeempty" size="30"></uni-icons>
									</uni-col>
								</uni-row>
								<uni-row><uni-col><text class="itemTitle">您需要确认一下订单：</text></uni-col></uni-row>
								<uni-row>
									<uni-col >
										<ul>
											<li><text class="itemText">出发时间：</text><text>{{orderItem.time}}</text></li>
											<li><text class="itemText">
												地点：
												<ul class='Route'>
													<li>{{RouteSplit_Start}}</li>
													<li v-if="orderItem.station1">{{RouteSplit_Station1}}</li>
													<li v-if="orderItem.station2">{{RouteSplit_Station2}}</li>
													<li>{{RouteSplit_End}}</li>
													<!-- <li>{{orderItem.start}}</li>
													<li>{{orderItem.end}}</li> -->
												</ul>
											</text></li>
											<li v-if="orderItem.extraMoney"><text class="itemText">额外费用：</text><text>￥{{orderItem.extraMoney}}</text></li>
											<li v-if="orderItem.reason"><text class="itemText">原因：</text><text>{{orderItem.reason}}</text></li>
										</ul>
										<text><text class="itemMoney">总金额:</text><text>￥3456</text></text>
									</uni-col>
								</uni-row>
								
								<uni-row class="orderRow">
									<uni-col><button type="primary" @click="ackOrder()" >确认订单</button></uni-col>
								</uni-row>
							</view>
						</uni-popup>
					</uni-col>
				</uni-row>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'orderItem',
		props:{
			orderItem:{
				type:Object,
				default(){
					return {
						orderItem:{}
					}
				}
			}
		},
		data(){
			return{
				
			}
		},
		onLoad() {
			console.log(this.orderItem)
		},
		computed:{
			RouteSplit_Station1:function(){
				if(this.orderItem.station1==null)
					{
						return;
					}
					else
					{
						let site=this.orderItem.station1.split(',')
						return site[0].slice(1)
					}
			},
			RouteSplit_Station2:function(){
				if(this.orderItem.station2==null)
					{
						return;
					}
					else
					{
						let site=this.orderItem.station2.split(',')
						return site[0].slice(1)
					}
			},
			RouteSplit_Start:function(){
				if(this.orderItem==null)
					{
						return `error`
					}
					else
					{
						let site=this.orderItem.start.split(',')
						return site[0].slice(1)
					}
			},
			RouteSplit_End:function(){
				if(this.orderItem==null)
					{
						return `error`
					}
					else
					{
						let site=this.orderItem.end.split(',')
						return site[0].slice(1)
					}
			},	
			state:function(){
				if(this.orderItem==null)
				{
					return `error`
				}
				else
				{
					switch(this.orderItem.state){
						case 1: {
							return `已确认`;
							break;
						}
						case 2:{
							return `已取消`;
							break;
						}
						case 0:{
							return `正在进行`;
							break;
						}
					}
				}
			}
		},
		methods:{
				close(){
					this.$refs.popup.close()
				},
				cancelOrder(){
					uni.showModal({
						content:'确定取消订单？'
					})
				},
				ackOrder(){
					var that=this;
					console.log(that.orderItem.id)
					uni.request({
						url:'http://mrbus.net/api/eorder/ack?oid='+that.orderItem.id,
						method:'POST',
						// data:{
						// 	oid:that.orderItem.id
						// },
						// header:{
						// 	"content-type":"application/x-www-form-urlencoded"
						// },
						success: (res) => {
							console.log(res.data)
							if(res.data.status_code==200){
								uni.showToast({
									title:'确认成功！'
								})
								setTimeout(function(){
									uni.switchTab({
										url:'../user/user'
									})
								},1500)
							}
						},
						fail(err) {
							console.log(err)
						}
					})
				},
				confirmOrder(){
					this.$refs.popup.open()
				},
				turnMap(){
					var that=this;
					uni.navigateTo({
						url:'../map/EnterpriseMap?orderId='+that.orderItem.id
					})
				}
		},
		created() {
			// console.log(this.orderItem.id)
		}
	}
</script>

<style>
	.orderItem{
		position: relative;
		width: 100%;
		border: 2px solid #ffffff; 
		padding: 3px;
		border-radius: 10px;
		background-color: #FFFFFF;
	}
	.orderInfo{
		padding: 8rpx;
	}
	.Ordertitle{
		padding: 2px;
		border-bottom: 1px solid #f0f0f0;
	}
	.titleText{
		font-size: 14px;
		line-height:31.25px;
		font-weight: 600;
	}
	.orderState{
		font-size: 14px;
		line-height:31.25px;
		color: #4c4c4c;
	}
	.orderImg{
		width: 100%;
		height: 100%;
		margin: 0 auto;
	}
	ul{
		margin: 0;
		padding-left: 20px;
	}
	ul li{
		list-style: none;
		padding: 8rpx 0;
	}
	.OrderBody{
		margin-top: 4px;
	}
	.orderButton{
		display: flex;
		
	}
	.buttonTurn{
		flex: 1;
		padding: 10px;
	}
	.buttonTurn button{
		font-size: 16px;
		font-weight: 300;
	}
	.orderIcon{
		width: 15vw;
		height: 15vw;
	}
	.titleIcon{
		width: 7vw;
		height: 7vw;
	}
	.cancel{
		margin-top: 2px;
	}
	.cancelOrder{
		font-size: 28rpx;
		font-weight: 600;
		padding: 6rpx 12rpx;
		color: #FFFFFF;
		background-color:#0FAEFF;
		border-radius: 10rpx;
	}
	.confirmOrder{
		font-size: 28rpx;
		padding: 6rpx 12rpx;
		font-weight: 600;
		color: #FFFFFF;
		background-color: #ffaf0e;
		border-radius: 6rpx;
	}
	.EDconfirmOrder{
		font-size: 28rpx;
		font-weight: 500;
		color: #676767;
		background-color: #e3e7d9;
		border-radius: 5px;
	}
	.confirmDetail{
		background-color: #FFFFFF;
		border: 2rpx solid #F0F0F0;
		border-radius: 20rpx;
		padding: 24rpx;
		/* margin: 10rpx; */
	}
	.orderRow{
		margin-top: 5px;
	}
	.itemTitle{
		font-weight: 600;
		font-size: 36rpx;
	}
	.itemText{
		font-size: 32rpx;
		font-weight: 200;
	}
	.itemMoney{
		font-weight: 600;
		font-size: 32rpx;
	}
	.Route{
		margin-top: 4rpx;
		margin-left: 20rpx;
		
	}
	.Route li:first-child{
		list-style: circle;
	}
	.Route li{
		list-style: disc;
	}
</style>
