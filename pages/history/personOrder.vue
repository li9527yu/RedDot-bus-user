<template>
	<view class="container">
		<view class="enterpriseOrder">
			<view class="titleInfo">
				<view 	v-for="(item,index) in Lists" 
					:key="index" 
					@click="ListNum = index" 
					:class="{act: ListNum === index}"
					 class="titleInfo-btn">{{item}}</view>
			</view>
			<view class="order">
				<person-order-list v-if="flag" :order="orderlists" :Ordertype="ListNum"></person-order-list>
			</view>
			<view v-show="showEmpty" class="empty">
				<image 
				src="../../static/img/empty.png" 
				class="emptyImg"
				style="width: 100%;height: 100%;opacity: 0.4;z-index: -1;" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import{
		mapState
	} from 'vuex'
	import personOrderList from '../orderList/personOrderList.vue'
	export default{
		components:{
			personOrderList
		},
		data(){
			return{
				ListNum: 0,
				Lists:["正在进行","已完成","已取消"],
				count:"",
				showOrder:'',
				showEmpty:'',
				orderlists:[],
				flag:false
			}
		},
		computed:{
			...mapState(['EnterpriseId'])
		},
		onShow() {
			this.show()
			// this.orderInfo()
			console.log(this.ListNum)
		},
		onLoad() {
			// console.log(this.orderContent.length)
			this.show()
			this.orderInfo()
		},
		
		onPullDownRefresh() {
					console.log('refresh');
					setTimeout(function () {
						uni.stopPullDownRefresh();
						// 这里放刷新数据的方法
					}, 1000);
		},
		methods:{
			show(){
				if(this.orderlists.length==0){
					this.showOrder=false;
					this.showEmpty=true;
				}
				else{
					this.showOrder=true;
					this.showEmpty=false;
				}
			},
			orderInfo(){
				var that=this;
				uni.request({
					url:'http://mrbus.net/api/eorder/'+that.EnterpriseId,
					success: (res) => {
						console.log(res.data)
						var orderLists=res.data.data;
						for(let i in orderLists){
							var orderItem={};
							orderItem.time=orderLists[i].date;
							orderItem.start=orderLists[i].start;
							orderItem.end=orderLists[i].end;
							orderItem.state=orderLists[i].finished?1:(orderLists[i].revocation?2:0);
							orderItem.station1=orderLists[i].station1;
							orderItem.station2=orderLists[i].station2;
							orderItem.id=orderLists[i].id;
							if(orderLists[i].money){
								orderItem.extraMoney=orderLists[i].money;
							}
							else{
								orderItem.extraMoney=-1;
							}
							if(orderLists[i].money_commit){
								orderItem.reason=orderLists[i].money_commit;
							}
							else{
								orderItem.reason="无"
							}
							that.orderlists.splice(i,0,orderItem)
						}
						// console.log(that.orderlists)
						that.flag=true;
						if(res.status_code==200){
							
						}
					},
					fail: (err) => {
						
					}
				})
			}
		}
	}
</script>

<style>
	.container{
		width: 100%;
		background-color: #f9f9f9;
	}
	.enterpriseOrder{
		width: 100%;
		
	}
	.titleInfo {
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
		padding: 10rpx;
		background-color: #FFFFFF;
		/* margin-top: 20rpx; */
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
	.order{
		margin-top: 60rpx;
	}
	/* .empty{
		margin-top: 20%;
		width: 100%;
		height: 100%;
	} */
</style>
