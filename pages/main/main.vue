<template>
	<view class="content">
		<person></person>
		<!-- <view class="order">
			<form @submit="">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-db">
							<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
								<view class="uni-input"><text>当前选择日期为：</text>{{date}}</view>
							</picker>
						</view>
					</view>
				</view>
				<navigator  url="../show-map/ShowMap">
					<input type="text" focus  placeholder="输入起点"  />
				</navigator>
				<navigator url="../show-map/ShowMap">
					<input type="text" focus  placeholder="输入终点"  />
				</navigator>			
			<button form-type="submit">下单</button>
				
			</form>
		</view> -->
	</view>
</template>

<script>
	import Person from '../person-ride/person.vue'
	import Enterprise from '../enterprise-ride/enterprise.vue'
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		components:{
			Person,
			Enterprise
		},
		// data() {
		//         const currentDate = this.getDate({
		//             format: true
		//         })
		//         return {
		//             date: currentDate
		//         }
		//     },
		// computed: {
		// 	// mapState(['forcedLogin', 'hasLogin', 'userName']),
		// 	startDate() {
		// 	    return this.getDate('start');
		// 	},
		// 	endDate() {
		// 	    return this.getDate('end');
		// 	}
		// },
		onLoad() {
			const loginType = uni.getStorageSync('login_type')
			if (loginType === 'local') {
				this.login(uni.getStorageSync('username'))
				return
			}
			let uniIdToken = uni.getStorageSync('uniIdToken')
			if (uniIdToken) {
				this.login(uni.getStorageSync('username'))
				uniCloud.callFunction({
					name: 'user-center',
					data: {
						action: 'checkToken',
					},
					success: (e) => {

						console.log('checkToken success', e);

						if (e.result.code > 0) {
							//token过期或token不合法，重新登录
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					},
					fail(e) {
						uni.showModal({
							content: JSON.stringify(e),
							showCancel: false
						})
					}
				})
			} else {
				this.guideToLogin()
			}
		},
		
		methods: {
			...mapMutations(['login']),
			guideToLogin() {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					}
				});
			},
		// 	getDate(type) {
		// 	            const date = new Date();
		// 	            let year = date.getFullYear();
		// 	            let month = date.getMonth() + 1;
		// 	            let day = date.getDate();
			
		// 	            if (type === 'start') {
		// 	                year = year;
		// 	            } else if (type === 'end') {
		// 	                year = year;
		// 	            }
		// 	            month = month > 9 ? month : '0' + month;;
		// 	            day = day > 9 ? day : '0' + day;
		// 	            return `${year}-${month}-${day}`;
		// 	        },
		// bindDateChange: function(e) {
		// 	this.date = e.target.value
		// },
		// ShowMap(){
		// 	this.$router.push('/page/show-map/ShowMap');
		// }
		}

	}
</script>

<style>
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
</style>
