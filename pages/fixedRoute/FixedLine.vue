<template>
	<view class="homeContent">
		<view class="titleInfo">
			<view 	v-for="(item,index) in Lists" 
				:key="index" 
				@click="ListNum = index" 
				:class="{act: ListNum === index}"
				 class="titleInfo-btn">{{item}}</view>
		</view>
		<!-- <line-list v-if="ListNum==1"></line-list> -->
		<!-- v-if="ListNum===1" -->
		<view class="MapIn" v-if="ListNum==0">
			<my-map></my-map>
		</view>
		<view v-else>
			<line-list></line-list>
		</view>
		
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import MyMap from '../map/mymap2.nvue'
	import LineList from './LineList.vue'
	export default{
		name:'FixedLine',
		components:{
			LineList,
			MyMap
		},
		data(){
			return{
				ListNum: 0,
				Lists:["地图显示","线路列表"],
				count:"",
			}
		},
		computed:{
			...mapState(['userId','hasLogin','forcedLogin'])
		},
		methods:{
			guideToLogin() {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: this.forcedLogin,
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
			
		},
		onHide() {
			console.log('leave')

		},
		onShow() {
			if(!this.hasLogin)
			{
				// this.guideToLogin()
			}
		}
	}
</script>

<style>
	.homeContent{
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}
	.titleInfo {
		display: flex;
		margin-top: 10px;
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
	.MapIn{
		width: 100%;
		height: 100%;
	}
</style>
