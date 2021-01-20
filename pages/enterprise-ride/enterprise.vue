<template>
	<view class="order">	
		<uni-forms border>
			<uni-forms-item>
				<view class="row">
					<text class="name">出发时间：</text>
					<view class="value">
						<biaofun-datetime-picker
							id="datechoose"
							placeholder="请选择活动时间"
							defaultValue="2021-1-08 10:30"
							start="2020-12-03 02:08"
							end="2025-11-28 22:58"
							fields="minute"
							@change="changeDatetimePicker"
						></biaofun-datetime-picker>
					</view>
				</view>
			</uni-forms-item>
			<view>
				<view class="input-row border" id="inputone">
					<uni-easyinput :value="submitForm.slocation" 
									v-model="submitForm.slocation" 
									prefixIcon="location-filled" 									
									focus autoHeight 
									:inputBorder="false"
									 placeholder="输入起点" 
									 confirmType="done"></uni-easyinput>
					<button type="default" size="mini" @click="chooseStart">选择</button>
				</view>
				<view class="input-row border" >
					<uni-easyinput :value="submitForm.elocation" 
									v-model="submitForm.elocation" 
									prefixIcon="location-filled" 
									focus autoHeight 
									:inputBorder="false" 
									placeholder="输入终点" 
									confirmType="done" ></uni-easyinput>
					<button type="default" size="mini" @click="chooseEnd">选择</button>
				</view>
			</view>
			<uni-forms-item>
				<button form-type="submit"  class="confirm" @click="confirmInfo">下单</button>	
			</uni-forms-item>
				
		</uni-forms>
		
	</view>
</template>

<script>
	import biaofunDatetimePicker from '../../components/biaofun-datetime-picker/biaofun-datetime-picker.vue'
	var util = require('../../common/util.js');
	var formatLocation = util.formatLocation;
	export default{
		name:'Person',
		components:{
			biaofunDatetimePicker
		},
		data() {
			return {
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
			   hasLocation: false,
			   location_start: {},
			   location_end:{},
			   locationAddress: ''
			}
		},
		methods:{
			changeDatetimePicker(date) {
				let that=this
				that.submitForm.timeValue=date.f3
				console.log('选择的日期时间数据：', date.f3);
			},
			confirmInfo(){
				let that=this;
				var submitForm=JSON.stringify(that.submitForm);
				console.log(this.submitForm);
				if(this.submitForm.elocation&&this.submitForm.slocation&&this.submitForm.timeValue){
					uni.navigateTo({
						url:'/pages/payment/payment?submitData='+submitForm
					})
					// uni.redirectTo({
					// 	url:'../payment/payment'
					// })
				}
				else{
					// this.ConfirmOR=true;
					uni.showToast({
						icon:'none',
						title:'请您填写完整信息！'
					})
					console.log("err");
				}
				// uni.navigateTo({
				// 	url:'../payment/payment'
				// })
				console.log(this.submitForm.timeValue)
			},
			chooseStart: function () {
				uni.chooseLocation({
					success: (res) => {
						this.submitForm.slocation=res.address
						console.log(res.address)
						this.location_start = formatLocation(res.longitude, res.latitude)
						this.submitForm.longitude_start='E:'+this.location_start.longitude[0]+'°'+this.location_start.longitude[1]+'′'
						console.log(this.submitForm.longitude_start)
						this.submitForm.latitude_start='N:'+this.location_start.latitude[0]+'°'+this.location_start.latitude[1]+'′'
						console.log(this.submitForm.latitude_start)
							// this.locationAddress = res.address
							// {{location.longitude[0]}}°{{location.longitude[1]}}
					}
				})
			},
			chooseEnd: function () {
				uni.chooseLocation({
					success: (res) => {
						this.submitForm.elocation=res.address
						console.log(res.address)
						// console.log(res)
						this.location_end = formatLocation(res.longitude, res.latitude)
						this.submitForm.longitude_end='E:'+this.location_end.longitude[0]+'°'+this.location_end.longitude[1]+'′'
						console.log(this.submitForm.longitude_end)
						this.submitForm.latitude_end='N:'+this.location_end.latitude[0]+'°'+this.location_end.latitude[1]+'′'
						console.log(this.submitForm.latitude_end)
							// this.locationAddress = res.address
						
					}
				})
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}
	
	.title {
		color: #8f8f94;
		margin-top: 25px;
	}
	
	.ul {
		font-size: 15px;
		color: #8f8f94;
		margin-top: 25px;
	}
	
	.ul>view {
		line-height: 25px;
	}
	.confirm{
		color: #FFFFFF;
		background-color: #0FAEFF;
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
</style>
