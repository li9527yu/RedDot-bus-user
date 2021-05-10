<template>
	<view class="content">
		<view class="staffInfo">
			<uni-forms  :value="staffInfo" :rules="rules">
				<uni-forms-item  label="姓名:" name="name" :required="true">
					<uni-easyinput 
						class="formItem"
						type="text" 
						v-model="staffInfo.name" 
						placeholder="请输入姓名"
						:disabled="perfect"
						:inputBorder="false"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item  label="年龄:" name="age" :required="true">
					<uni-easyinput
						class="formItem"
						type="number" 
						v-model="staffInfo.age" 
						placeholder="请输入年龄"
						:disabled="perfect"
						:inputBorder="false"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item  label="性别:" name="address" :required="true">
					<uni-data-checkbox :disabled="perfect" selectedColor="#0FAEFF" mode="tag" v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
					<!-- <uni-easyinput 
					class="formItem"
					type="text" 
					v-model="staffInfo.address" 
					placeholder="请输入详细地址"
					:inputBorder="false"></uni-easyinput> -->
				</uni-forms-item>
				<uni-forms-item>
					<view class="perfectInfo">
						<button @click="updateInfo">完善信息</button>
					</view>
				</uni-forms-item>
			</uni-forms>
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
				staffInfo:{
					name:'',
					age:'',
					sex:0
				},
				perfect:true,
				value: 0,
				range: [{"value": 0,"text": "男"},{"value": 1,"text": "女"}],
				rules:{}
			}
		},
		computed:{
			...mapState(['userPhone','userName','userAge'])
		},
		onLoad() {
			this.staffInfo.name=this.userName;
			this.staffInfo.age=this.userAge;
			console.log(this.userPhone)
		},
		methods:{
			change(e){
				console.log('e:',e.detail.value);
				this.staffInfo.sex=e.detail.value?`女`:`男`;
				// selectSex();
				console.log(this.staffInfo.sex)
			},
			updateInfo(){
				if(this.perfect){
					this.perfect=false;
				}
				else{
					var that=this;
					console.log(this.staffInfo)
					if(this.staffInfo.name&&this.staffInfo.age&&this.staffInfo.sex)
					{
						if(this.staffInfo.age>0&&this.staffInfo.age<100)
						{
							uni.request({
								url:'http://mrbus.net/api/user/'+that.userPhone,
								data:{
									gender:that.staffInfo.sex,
									age:that.staffInfo.age,
									name:that.staffInfo.name
								},
								method:'POST',
								header:{
									"content-type":"application/json"
								},
								success: (res) => {
									if(res.data.status_code==200){
										// this.$store.commit('login',{
											
										// 	userName:res.data.data.user.name
										// 	// eName:res.data.data.user.enterprise.name,
										// 	// eId:res.data.data.user.enterprise.id,
										// 	// Principal:res.data.data.user.type,
										// 	// eMoney:res.data.data.user.enterprise.money
										// })
										uni.showToast({
											title:'完善成功',
											icon:'none',
											mask:true,
											image:'../../static/img/success.png'
										})
										uni.switchTab({
											url:'../user/user'
										},1000)
									}
									console.log(res.data)
								},
								fail: (err) => {
									console.log(err)
								}
							})
						}
						else
						{
							uni.showToast({
								title:'请填写正确年龄'
							})
						}
					}
					else
					{
						uni.showToast({
							title:'请完善信息！'
						})
					}
				}
				
			}
			
		}
	}
</script>

<style>
	.staffInfo{
		background-color: #FFFFFF;
		border-radius: 5px;
		margin-top: 2vh;
		padding: 10rpx;
	}
	.perfectInfo{
		width: 95%;
		display: block;
		margin: 0 auto;
	}
	.perfectInfo button{
		background-color: #0FAEFF;
		color: #FFFFFF;
		font-size: 32rpx;
		font-weight: 600;
		padding: 10rpx;
	}
	/* .formItem{
		border-bottom: 1px solid #8a989f;
	} */
</style>
