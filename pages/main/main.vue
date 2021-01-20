<template>
	<view class="content">
		<view class="end-title">
		     <view v-for="(item,index) in items" :key="index" :class="{btna:count == index}" @tap="change(index)">
		       <span class="item-title">{{item}}</span>
		    </view>
		</view>
		<view class="end-cont" :class="{ dis: btnnum == 0 }"><person></person></view>
		<view class="end-cont" :class="{ dis: btnnum == 1 }"><enterprise></enterprise></view>
<!-- 		<view class="end-cont" :class="{ dis: btnnum == 2 }"><child3></child3></view> -->
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
		data(){
			return {
			      btnnum: 0,
			      items:["个人乘车","企业乘车","其他方式"],
			      count:"",
			  }
		},
		// computed:{
		// 	getToken(){
		// 		return this.$store.state.usertoken
		// 	}
		// },
		onLoad() {
			let user_token=this.$store.state.usertoken
			if (user_token) {
				
			} else {
				this.guideToLogin()
			}
			// console.log(this.$store.state.usertoken)
		},
		
		methods: {
			// ...mapMutations(['login']),
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
			change(e) {
			     this.count = e
			     this.btnnum = e
			     console.log(this.count)
			  }

	},
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
	.item-title{
		font-size: 16px;
		/* font-weight: 400; */

		
	}
	.content{
		padding: 0;
		margin: 0;
		background-color: #FFFFFF;
	}
	.end-title{
	        display: flex;
			margin: 10px 0px  0px;
			
	    }
	.end-title view{
		flex-grow: 1;
		text-align: center;
	}
	.end-cont{
		display: none;
		margin-top:10px ;
	}
	.btna{
		font-weight: 600;
		padding-bottom: 5px;
		border-bottom: 2px #007AFF solid;
	}
	.dis{
		display: block;
	}
	
</style>
