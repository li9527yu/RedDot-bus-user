<template>
	<view class="payment">
		<view class="detail">
			<view class="row">
				<b><text class="name">{{acceptData.title}}</text></b>
			</view>
			<view class="row">
				<text class="name">用车时间:</text>
				<view class="value"><span>{{acceptData.time}}</span></view>
			</view>
			<view class="row">
				<text class="name">出发点:</text>
				<view class="value"><span>{{acceptData.start}}</span></view>
			</view>
			<view class="row">
				<text class="name">目的地:</text>
				<view class="value"><span>{{acceptData.end}}</span></view>
			</view>
			<view class="row">
				<text class="name">选择车型:</text>
				<view class="value">
					<picker @change="carsChange"  :range="cars"  mode="multiSelector">
						<view class="uni-input">{{cars[0][index1]}}  数量： {{cars[1][index2]}}</view>
					</picker>
				</view>
				<!-- <view class="value"><span></span></view> -->
			</view>			
			<!-- <van-cell-group class="detail-context">
			  <van-cell title="用车时间 :" :value="acceptData.time"   />
			  <van-cell title="出发点 :" :value="acceptData.start" left-icon="location-o"/>
			  <van-cell title="目的地 :" :value="acceptData.end" left-icon="location-o"  />
			  <van-cell title="选择车型" value="" is-link />			  
			</van-cell-group> -->
			<!-- <uni-forms-item label="用车时间:">
				<uni-easyinput :value="acceptData.time" disabled></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="出发点:">
				<uni-easyinput :value="acceptData.start" disabled></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="目的地:">
				<uni-easyinput :value="acceptData.end" disabled></uni-easyinput>
			</uni-forms-item> -->
		</view>
		<view class="userdetail">
			<uni-forms border>
				<uni-forms-item label="包车人:">
					<uni-easyinput :value="acceptData.username" placeholder="请输入名字"class="user" ></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="手机号:">
					<uni-easyinput :value="acceptData.phone" placeholder="请输入手机号" class="user" ></uni-easyinput>
				</uni-forms-item>
				<uni-collapse>
					<uni-collapse-item title="备注" showAnimation>
						<uni-easyinput placeholder="您的备注	" autoHeight type="textarea" :value="acceptData.note" v-model="acceptData.note"></uni-easyinput>
					</uni-collapse-item>
				</uni-collapse>
			</uni-forms>
<!-- 			<van-cell-group>
			  <van-field
			    :value="username"
			    label="包车人"
			    placeholder="请输入名字"
				class="user"
			  />
			  <van-field
			    :value="phone"
			    label="手机号"
			    placeholder="请输入手机号"
				class="user"
			  />
			</van-cell-group> -->
		</view>
		<view class="confirmPay">
			<span class="money">金额：{{acceptData.money}}</span>
			<button class="confirmTo" @click="payFor">确认支付</button>
			<!-- <button class="payto">确认支付</button> -->
			<!-- <van-cell title="金额 :" value="" class="money"/>
			<van-button type="primary" size="large" class="confirmTo"  color="#0faeff">确认支付</van-button> -->
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				acceptData:{
					title:'',
					time:'',
					start:'',
					end:'',
					username:'',
					phone:'',
					note:'',
					money:'',
					chooseCar:'',
					carNum:''
				},
				cars: [
					["请选择车型",'奔驰', '大众', '本田', '马自达'],
					["请选择数量",1,2,3,4,5,6,7,8,9]
				],
				index1: 0,
				index2:0,
				
			}
		},
		onLoad(options) {
			var data=JSON.parse(options.submitData)
			this.acceptData.time=data.timeValue;
			this.acceptData.start=data.slocation;
			this.acceptData.end=data.elocation;
			this.acceptData.title=data.title;
		},
		methods:{
		 carsChange: function(e) {
			            // console.log(e)
						this.index1=e.detail.value[0]
						this.index2=e.detail.value[1]
						this.acceptData.chooseCar=this.cars[0][this.index1]
						this.acceptData.carNum=this.cars[1][this.index2]
						// console.log(this.acceptData.chooseCar+':'+this.acceptData.carNum)
			        },
			payFor(){
				// let that=this
				// var acceptData=JSON.stringify(that.acceptData)
				
				// uni.request({
				// 	url:'',
				// 	data:{
						
				// 	},
				// 	header:{
						
				// 	},
				// 	success:(res)=> {
				// 		console.log(res.data)
				// 	}
				// })
			}
		}
	}
</script>

<style>
	.payment{
		position: relative;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
	}
	.row {
		display: flex;
		// height: 100upx;
		align-items: center;
		margin: 5px 0;
	}
	
	.row:active {
		opacity: 0.8;
	}
	
	.name {
		flex-shrink: 0;
		font-size: 18px;
		padding-left: 5px;
		padding-right: 5px;
		/* font-weight: 200; */
	}
	
	.value {
		flex: 1;
		font-size: 18px;
		padding-left:4px ;
		/* border-bottom: 1px #C0C4CC solid; */
	}
	.detail{
		width: 95%;
		margin: 4px auto;
		border: 1rpx #007AFF solid;
		border-radius: 10px;
	}
	/* .van-cell{
		width: 200px;
		background-color: #007AFF;
	} */
	.confirmPay{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		
		display:flex;
	}
	.money,.confirmTo{
		/* display: flex; */
		flex: 1;
		width: 50%;
		margin: 0;
		padding: 0;
		
	}
	.money{
		font-size: 20px;
		font-weight: 300;
		padding: 5px;
		border: 1px #C0C4CC solid;
		border-radius: 5px;
	}
	.confirmTo{
		font-weight: 300;
		color: #FFFFFF;
		background-color: #007AFF;
		/* border: 1px #2C405A solid; */
	}
	.userdetail{
		margin: 10px 0 0;
	}
</style>
