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
							defaultValue="2020-12-08 10:30"
							start="2000-12-03 02:08"
							end="2021-10-28 22:58"
							fields="minute"
							@change="changeDatetimePicker"
						></biaofun-datetime-picker>
					</view>
				</view>		
			</uni-forms-item>		
			<uni-forms-item>
				<navigator  url="../show-map/ShowMap">
					<!-- <input type="text" focus  placeholder="输入起点"  /> -->
					<uni-easyinput prefixIcon="location-filled" focus autoHeight :inputBorder="false" placeholder="输入起点" confirmType="done"></uni-easyinput>
				</navigator>
			</uni-forms-item>
			<uni-forms-item>
				<navigator url="../show-map/ShowMap">
					<!-- <input type="text" focus  placeholder="输入终点"  /> -->
					<uni-easyinput prefixIcon="location-filled" focus autoHeight :inputBorder="false" placeholder="输入终点" confirmType="done"></uni-easyinput>
				</navigator>
			</uni-forms-item>
			<uni-forms-item>
				<button form-type="submit" class="confirm" @click="confirmInfo">下单</button>
			</uni-forms-item>
		</uni-forms>
	</view>
</template>

<script>
	import biaofunDatetimePicker from '../../components/biaofun-datetime-picker/biaofun-datetime-picker.vue'
	export default{
		name:'Person',
		components:{
			biaofunDatetimePicker
		},
		data() {
			return {
				submitForm:{
				slocation:'',
				elocation:'',
				timeValue: ''
				},
			   
			}
		},
		methods:{
			
			ShowMap(){
				this.$router.push('/page/show-map/ShowMap');
			},
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
				}
				else{
					// this.ConfirmOR=true;
					console.log("err");
				}
				console.log(this.submitForm.timeValue)
			}
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
	
	// .right-icon {
	// 	color: #707070;
	// }
	// #datechoose{
	// 	background-color: #FFFFFF;
	// }
</style>
