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
		</view>
		<view class="userdetail">
			<uni-forms border>
				<uni-forms-item label="联系人:">
					<uni-easyinput :value="acceptData.username" v-model="acceptData.username" placeholder="请输入名字"class="user" ></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="联系人手机号:">
					<uni-easyinput :value="acceptData.phone" v-model="acceptData.phone" placeholder="请输入手机号" class="user" ></uni-easyinput>
				</uni-forms-item>
				<uni-collapse>
					<uni-collapse-item title="备注" showAnimation>
						<uni-easyinput placeholder="您的备注	" v-model="acceptData.note" autoHeight type="textarea" :value="acceptData.note"></uni-easyinput>
					</uni-collapse-item>
				</uni-collapse>
			</uni-forms>
		</view>
		<view class="confirmPay">
			<!-- <span class="money">金额：{{acceptData.money}}</span> -->
			<button class="confirmTo" @click="payFor">确认支付</button>
			
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
					carNum:'',
					longitude_start:'',
					latitude_start:'',
					longitude_end:'',
					latitude_end:'',
					userId:this.$store.state.userId,
					token:this.$store.state.usertoken
				},
				cars: [
					["请选择车型",'奔驰', '大众', '本田', '马自达'],
					["请选择数量",1,2,3,4,5,6,7,8,9]
				],
				index1: 0,
				index2:0,
				// CarMoney:['奔驰', '大众', '本田', '马自达'],
				// 		 [186,987,256,432,218]
				
			}
		},
		onLoad(options) {
			if(options.submitData==null)
			{
				options.submitData='';
			}
			else{
				var data=JSON.parse(options.submitData)
				this.acceptData.time=data.timeValue;
				this.acceptData.start=data.slocation;
				this.acceptData.end=data.elocation;
				this.acceptData.title=data.title;
				this.acceptData.longitude_start=data.longitude_start
				this.acceptData.longitude_end=data.longitude_end
				this.acceptData.latitude_start=data.latitude_start
				this.acceptData.latitude_end=data.latitude_end
			}
			
		},
		methods:{
		 carsChange: function(e) {
			            // console.log(e)
						var CarMoney=new Map([['大众',188],['奔驰',298],['本田',318],['马自达',138]])
						// console.log(CarMoney.get('大众'))
						this.index1=e.detail.value[0]
						this.index2=e.detail.value[1]
						this.acceptData.chooseCar=this.cars[0][this.index1]
						this.acceptData.carNum=this.cars[1][this.index2]
						let car=this.acceptData.chooseCar; let num=this.acceptData.carNum
						console.log(car.toString()=='大众')
						// console.log(CarMoney.get(car.toString())=="大众")
						this.acceptData.money='￥'+CarMoney.get(car.toString())*num;
						// console.log(this.acceptData.money)	
			        },
			payFor(){
				// console.log(this.acceptData.username+' '+this.acceptData.phone)
				if(!(this.acceptData.username&&this.acceptData.phone))
				{
					uni.showToast({
						icon:'none',
						title:'请填写联系人和手机号！'
					})
					return;
				}
				else
				{
					var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;  
					if(!phoneReg.test(this.acceptData.phone))
					{
						uni.showToast({
							icon:'none',
							title:'请填写正确手机号！'
						})
					}
				}
				if(typeof this.acceptData.note == "undefined" || this.acceptData.note == null || this.acceptData.note == "")
				{
					this.acceptData.note="无"
				}
				console.log(this.acceptData.note)
				// console.log(typeof str)
				uni.request({
					url:'http://mrbus.net:8888/api/order/create/enterprise',
					header:{
						"Content-Type": "application/json",
						"token":this.acceptData.token
					},
					method:'POST',
					data:{
						  "end_point":this.acceptData.longitude_end+','+this.acceptData.latitude_end,
						  "enterprise_admin_phone":this.acceptData.phone,  
						  "remark":this.acceptData.note,
						  "required_bus":this.acceptData.chooseCar+' '+this.acceptData.carNum,
						  "start_date": this.acceptData.time+':00',
						  "start_point": this.acceptData.longitude_start+','+this.acceptData.latitude_start,
						  "user_name":this.acceptData.username,
						  "user_phone":this.acceptData.phone,
						  // "longitude_start":this.acceptData.longitude_start,
						  // "latitude_start":this.acceptData.latitude_start,
						  // "longitude_end":this.acceptData.longitude_end,
						  // "latitude_end":this.acceptData.latitude_end
					},
					success:(res)=> {
						console.log(res.data)
					}
				})
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
		height: 7%;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		
		display:flex;
	}
	
	.confirmTo{
		flex: 1;
		width: 100%;
		margin: 0;
		padding: 0;
		font-weight: 300;
		font-size: 18px;
		color: #FFFFFF;
		background-color: #007AFF;
	}
	/* .money{
		font-size: 18px;
		font-weight: 300;
		padding: 5px;
		border: 1px #C0C4CC solid;
		border-radius: 5px;
	} */
	.userdetail{
		margin: 10px 0 0;
	}
</style>
