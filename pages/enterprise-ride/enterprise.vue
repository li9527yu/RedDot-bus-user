<template>
	<view class="order">	
		<uni-forms class="orderBody">
			<uni-forms-item label="出发时间:">
				<uni-datetime-picker
					type="datetime" 
					:start="startTime" 
					end="2025-6-15" 
					@change="dateChange"></uni-datetime-picker>
			</uni-forms-item>
			<uni-forms-item left-icon="location-filled" label="起点:" class="formItem">
				<uni-easyinput :value="OrderInfo.start.address"
								v-model="OrderInfo.start.address"  
								@focus="chooseStart()" 									
								autoHeight 
								placeholder="输入起点" 
								confirmType="done"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item  label="途经点:" class="formItem">
				<uni-row>
					<uni-col :span="3">
						<view class="addSite" @click="addWayPoint">
							<image class="addImg"  src="../../static/img/addSite.png"/>
						</view></uni-col>
					<uni-col :span="21"><text class="addText">添加途经点</text></uni-col>
				</uni-row>
				<uni-row v-for="(item,index) in OrderInfo.wayLists" :key="index">
					<uni-col :span="3"><view class="deleteSite" @click="deleteWayPoint(index)">
							<image class="deleteImg" src="../../static/img/deleteSite.png"/>
						</view></uni-col>
					<uni-col :span="21"><uni-easyinput
								v-model="item.address"
								:value="item.address"
								@focus="chooseWayPoint(index)"
								autoHeight 
								placeholder="输入途经点" 
								confirmType="done">
					</uni-easyinput></uni-col>
				</uni-row>
			</uni-forms-item>
			<uni-forms-item left-icon="location-filled" label="终点:" class="formItem">
				<uni-easyinput :value="OrderInfo.end.address"
								v-model="OrderInfo.end.address"  
								@focus="chooseEnd()" 
								autoHeight 
								placeholder="输入终点" 
								confirmType="done" ></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item>
				<uni-list :border="false">
					<!-- <uni-list-item title="乘车人数">
						<uni-easyinput slot="footer"  autoHeight  :inputBorder="false" placeholder="请输入乘车人数"></uni-easyinput>
					</uni-list-item> -->
					<uni-list-item 
						title="选择车辆" 
						showArrow="true" 
						:rightText="carState" 
						:clickable="true"
						@click="chooseCar"></uni-list-item>
					<uni-list-item>
							<uni-collapse slot="body" class="noteMain">
								<uni-collapse-item class="notecontent" title="备注" showAnimation>
									<uni-easyinput maxlength="20" v-model="OrderInfo.note" :value="OrderInfo.note"  placeholder="您的备注" autoHeight type="textarea"></uni-easyinput>
								</uni-collapse-item>
							</uni-collapse>
					</uni-list-item>	
					<!-- <uni-list-item 
							title="备注" 
							link 
							to="../function/note" 
							rightText="选填" ></uni-list-item> -->
					<uni-popup type="center" ref="popup">
						<view class="CarType">
							<uni-row><uni-col :offset="1"><text class="cartypeTitle">请选择车辆：</text></uni-col></uni-row>
							<uni-row>
								<uni-col :offset="1" :span="6"><text class="carInfoText">已选择{{carNum}}车辆</text></uni-col>
								<uni-col :offset="1" :span="6"><text class="carInfoText">可乘坐{{passengerNum}}人</text></uni-col>
								<uni-col :offset="4" :span="6">
									<button class="clearCar" type="default" size="mini" @click="clearNum">清空</button>
								</uni-col>
							</uni-row>
							
							<uni-row v-for="(car,index) in cars" :key=index class="typeItem">
								<uni-col :span="6"><view><image class="carImage" :src="car.img"/></view></uni-col>
								<uni-col :span="10"><view class="carInfo">
									<text class="carInfoHead">{{car.name}}</text>
									<text class="carInfoDetail">{{car.note}}</text>
									<text class="carInfoDetail">{{car.type}}</text>
								</view></uni-col>
								<uni-col :span="8">
									<view class="carNum">
										<uni-number-box v-model="car.selectValue">	
										<!-- :value="car.selectValue" @change="changeNum(index)" -->
										</uni-number-box>
									</view>
								</uni-col>
							</uni-row>
							<uni-row>
								<uni-col>
									<button class="confirmCar" @click="confirmCars">确定</button>
								</uni-col>
							</uni-row>
						</view>
					</uni-popup>
				</uni-list>
			</uni-forms-item>
			<uni-forms-item>
				<view class="confirm">
					<button class="confirmButton" @click="confirmInfo" type="default">下单</button>	
				</view>
			</uni-forms-item>	
		</uni-forms>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	var amapFile = require('@/common/amap-wx.js');
	import format from '../../common/format.js'
	import biaofunDatetimePicker from '../../components/biaofun-datetime-picker/biaofun-datetime-picker.vue'
	var util = require('../../common/util.js');
	var formatLocation = util.formatLocation;
	export default{
		name:'Enterprise',
		components:{
			biaofunDatetimePicker
		},
		data() {
			return {
				OrderInfo:{
					timeValue:'',
					start:{
						latitude:'',
						longitude:'',
						address:'',
					},
					end:{
						latitude:'',
						longitude:'',
						address:'',
					},
					wayLists:[],
					choosedCar:[],
					note:'',
					pNum:'',
				},
				submitForm:{
					title:'个人乘车',
					slocation:'',
					elocation:'',
					timeValue: '',
					longitude_start:'',
					latitude_start:'',
					longitude_end:'',
					latitude_end:''
				},
			   lists:[],
			   hasLocation: false,
			   defaultTime:'',
			   startTime:'',
			   locationAddress: '',
			   carState:'请选择车辆',
			   carNum:0,
			   passengerNum:0,
			   cars:[
			   				   {
			   					   
			   					   name:'17座巴士（中巴）',
			   					   note:'带行李舱',
			   					   // type:'上汽/丰田等车型',
			   					   value:17,
			   					   selectValue:0,
			   					   img:'../../static/img/car_type3.jpg'
			   				   },
			   				   {
			   					   name:'35座巴士（大巴）',
			   					   note:'带行李舱',
			   					   // type:'上汽/丰田等车型',
			   					   value:35,
			   					   selectValue:0,
			   					   img:'../../static/img/car_type2.jpg'
			   				   },
			   				   {
			   					   name:'45座巴士（大巴）',
			   					   note:'带行李舱',
			   					   // type:'上汽/丰田等车型',
			   					   value:45,
			   					   selectValue:0,
			   					   img:'../../static/img/car_type2.jpg'
			   				   },
			   				   {
			   					   name:'53座巴士（大巴）',
			   					   note:'带行李舱',
			   					   // type:'上汽/丰田等车型',
			   					   value:53,
			   					   selectValue:0,
			   					   img:'../../static/img/car_type1.jpg'
			   				   },
			   ]
			}
		},
		watch:{
			cars:{
				handler:function(newval,oldval){
					// console.log(newlav)
					var sum=0;
					var carnum=0;
					newval.forEach(function(item,index){
						let num=Number(item.selectValue);
						carnum+=num;
						sum+=num*item.value;
					})
					this.Carsum(carnum)
					this.PassengerSum(sum)
				},
				deep:true,
				immediate:true
			}
		},
		created() {
			this.timePass()
		},
		onLoad() {
			this.timePass()
		},
		onShow() {
			this.timePass()
		},
		computed:{
			Carsum(){
				return function(carnum){
					return this.carNum=carnum
				}
			},
			PassengerSum(){
				return function(passengerNum){
					return this.passengerNum=passengerNum
				}
			},
			...mapState(['IsPrincipal','hasLogin'])
		},
		methods:{
			timePass(){
				this.defaultTime=new Date();
				this.startTime=new Date();
				this.defaultTime=format(this.defaultTime,'YYYY-MM-DD HH:mm',false)
				this.startTime=format(this.startTime,'YYYY-MM-DD HH:mm',true)
				// console.log(this.defaultTime);
				// console.log(this.startTime);
			},
			chooseWayPoint(index){
				var that=this;
				console.log(index)
				uni.chooseLocation({
					success: (res) => {
						var site={
							latitude:res.latitude,
							longitude:res.longitude,
							address:res.name
						};
						// that.lists.splice(index,1,site)
						that.OrderInfo.wayLists.splice(index,1,site)
						// console.log(that.lists[index])
					}
				})
			},
			deleteWayPoint(index){
				// this.lists.splice(index,1);
				// console.log(this.lists)
				this.OrderInfo.wayLists.splice(index,1);
			},
			clearNum(){
				for(let i=0;i<this.cars.length;i++){
					console.log(this.cars[i].selectValue)
					this.cars[i].selectValue=0;
				}
			},
			confirmCars(){
				if(this.carNum>0){
					this.OrderInfo.pNum=this.passengerNum;
					this.carState=`已选择${this.carNum}辆车`;
				}
				else{
					this.carState=`请选择车辆`
				}
				this.$refs.popup.close()
			},
			addWayPoint(){
				var len=this.OrderInfo.wayLists.length;
				if(len>=2){
					uni.showToast({
						title:'最多添加两个！'
					})
				}
				else{
					// this.lists.push({latitude:'',longitude:'',address:''})
					this.OrderInfo.wayLists.push({latitude:'',longitude:'',address:''})
				}
				// console.log(this.num)
				// this.num=this.num+1;
				// this.lists.splice(this.num)
				// console.log(this.num)
			},
			chooseCar(){
				// console.log('11')
				this.$refs.popup.open()
			},
			dateChange(e){
				// console.log(e)
				let that=this
				that.OrderInfo.timeValue=e;
			},
			confirmInfo(){
				if(!this.hasLogin){
					uni.showToast({
						title:'请先登录！',
						icon:'none',
						mask:true,
						image:'../../static/img/alert.png'
					})
					return;
				}
				if(!this.IsPrincipal){
					uni.showToast({
						title:'您得是企业负责人',
						icon:'none',
						mask:true,
						image:'../../static/img/alert.png'
					})
					return;
				}
				let that=this;
				var OrderInfo=JSON.stringify(that.OrderInfo);
				var cars=JSON.stringify(that.cars)
				if(this.OrderInfo.timeValue&&this.OrderInfo.start&&this.OrderInfo.end&&this.OrderInfo.pNum){
					uni.navigateTo({
						url:'/pages/payment/OrderDetail?submitData='+OrderInfo+'&cars='+cars
					})
				}
				else{
					uni.showToast({
						icon:'none',
						mask:true,
						image:'../../static/img/alert.png',
						title:'请您填写完整信息！'
					})
				}
			},
			chooseStart: function () {
				uni.chooseLocation({
					success: (res) => {
						// console.log(res)
						// this.submitForm.slocation=res.address					
						// this.submitForm.longitude_start=res.longitude
						// this.submitForm.latitude_start=res.latitude
						this.OrderInfo.start.address=res.name;
						this.OrderInfo.start.latitude=res.latitude;
						this.OrderInfo.start.longitude=res.longitude
					}
				})
			},
			chooseEnd: function () {
				uni.chooseLocation({
					success: (res) => {
						this.OrderInfo.end.address=res.name;
						this.OrderInfo.end.latitude=res.latitude;
						this.OrderInfo.end.longitude=res.longitude
						// this.submitForm.elocation=res.address
						// console.log(res.address)
						// // console.log(res)
						// // this.location_end = formatLocation(res.longitude, res.latitude)
						// this.submitForm.longitude_end=res.longitude
						// console.log(this.submitForm.longitude_end)
						// this.submitForm.latitude_end=res.latitude
						// console.log(this.submitForm.latitude_end)
							// this.locationAddress = res.address
						
					}
				})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.formItem{
		font-size: 16px;
		font-weight: 400;
	}
	.order{
		width:95%;
		margin: 0 auto;
		border: 2px solid #F1F1F1;
		border-radius: 10px;
	}
	.orderBody{
		padding: 10px;
	}
	.noteMain{
		width: 100%;
	}
	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}
	.radioGroup{
		line-height: 36px;
	}
	.labelItem{
		margin-left: 10px;
	}
	.title {
		color: #8f8f94;
		margin-top: 25px;
	}
	.confirm button{
		color: #FFFFFF;
		background-color: #0FAEFF;
		padding: 8rpx;
		font-size: 32rpx;
		font-weight: 600;
	}	
	.row {
		display: flex;
		// height: 100upx;
		align-items: center;
		color: #040506;
		
	}
	
	.row:active {
		opacity: 0.8;
	}
	
	.name {
		flex-shrink: 0;
	}
	
	.value {
		flex: 1;
	}
	#inputone{
		margin-bottom: 5px;
	}
	.CarType{
		background-color:#FFFFFF;
		border: 1px solid #FFFFFF;
		border-radius: 20rpx;
		padding: 5px;
	}
	.cartypeTitle{
		font-size: 22px;
		font-weight: 600;
		padding-bottom: 5px;
	}
	.carInfoText{
		font-size: 28rpx;
		font-weight: 600;
		line-height: 27px;
	}
	.clearCar{
		background-color: #0FAEFF;
		color: #FFFFFF;
		font-size: 28rpx;
		font-weight: 600;
		// padding: 4rpx;
		border-radius: 10rpx;
	}
	.typeItem{
		border-top: 1px solid #b5b5b5;
		border-bottom: 1px solid #F0F0F0;
		padding: 5px 0 5px 0;
		
	}
	.carImage{
		width: 80px;
		height: 80px;
	}
	.carInfo{
		display: flex;
		flex-direction: column;
		
	}
	.carInfoHead, .carInfoDetail{
		flex: 1;
		text-align: center;
	}
	.carInfoHead{
		font-weight: 600;
		font-size: 28rpx;
	}
	.carInfoDetail{
		font-size: 24rpx;
		font-weight: 200;
		
	}
	.carNum{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.confirmCar{
		background-color: #0FAEFF;
		color: #FFFFFF;
		font-size: 28rpx;
		font-weight: 600;
		padding: 6rpx;
		border-radius: 20rpx;
	}
	.addSite{
		width: 100%;
		height: 36px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.addImg{
		width: 25px;
		height: 25px;
	}
	.addText{
		font-size: 14px;
		color: #474747;
		line-height: 36px;
	}
	.deleteSite{
		width: 100%;
		height: 36px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.deleteImg{
		width: 25px;
		height: 25px;
	}
	.noteBody{
		width: 100%;
	}
	.notecontent{
		background-color: #ffffff;
	}
</style>
