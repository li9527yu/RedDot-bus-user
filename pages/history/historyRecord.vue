<template>
	<view class="container">
		<view class="historyRecord">
			<uni-list class="Records" v-show="showOrder">
				<uni-list-item
							class="RecordItem"
							v-for="item in Records"
							title="扫码上车"
							:note="item.date"
							:key="item.id"
							rightText="已完成"></uni-list-item>
			</uni-list>
			<!-- <view v-for="item in Records">{{item.id}}:{{item.date}}</view> -->
			<view v-show="showEmpty" class="empty">
				<image 
						class="emptyImg"
						src="../../static/img/empty.png"
						 mode="widthFix"
						></image>
				<!-- <image 
				src="../../static/img/empty.png" 
				class="emptyImg"
				></image> -->
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default{
		data(){
			return{
				Records:[],
				isRequest:false,
				showOrder:false,
				showEmpty:true,
			}
		},
		computed: {
			...mapState(['userId'])
		},
		methods:{
			LoadRecords(){
				var that=this;
				uni.request({
					url:'http://mrbus.net:8888/api/order/fixed/'+that.userId,
					header:{
						"Content-Type":"application/json"
					},
					method:'GET',
					success: (res) => {
						// console.log(res)
						if(res.statusCode==200)
						{
							uni.showToast({
								title:`请求成功！`,
								icon:'none',
								mask:true,
								image:'../../static/img/success.png',
								duration:1500
							})
							this.isRequest=true;
							this.showOrder=true;
							this.showEmpty=false;
							console.log(this.isRequest)
							var objs=res.data;
							var info=[];
							var length=res.data.length;
							// console.log(length)
							for(let i=0;i<length;i++){
								if(objs[i]==null){
										continue;
								}	
								else
								{
									var item={};
									item.id=objs[i].id;
									item.userId=objs[i].user_id;
									item.driverId=objs[i].driver_id;
									item.date=objs[i].date;
									console.log(item)
									info.push(item)
								}
							}
							that.Records=info
							// console.log(that.Records)
						}
						else
						{
							uni.showToast({
								title:`${res.errMsg}`,
								icon:'none',
								mask:true,
								image:'../../static/img/error.png',
								duration:1500
							})
						}
					},
					fail: (err) => {
						uni.showToast({
							title:`出了点问题`,
							icon:'none',
							mask:true,
							image:'../../static/img/error.png',
							duration:1500
						})
						
					}
				})
			},
		
		},
		onLoad() {
			this.LoadRecords()
		},
		onShow() {
			// this.LoadRecords()
		},
		onPullDownRefresh() {
			this.LoadRecords()
			setTimeout(function(){
				uni.stopPullDownRefresh()
			},1000)
		}

	}
</script>

<style>
	.container{
		width: 100vw;
		height: 100vh;
	}
	.historyRecord{
		width: 100vw;
		height: 100vh;
		background-color: #FFFFFF;
	}
	.Records{
		width: 100%;
		height: 100%;
		border: 1px solid #FFFFFF;
		border-radius: 4vw;
	}
	.RecordItem{
		width: 100%;
		border: 1px solid #FFFFFF;
		border-radius: 4vw;
	}
	.empty{
		width: 100%;
		height: 300px;
	}
	.emptyImg{
		margin-top: 5vh;
		width: 100%;
	}
</style>
