<template>
	<view class="container">
		<view class="newsBody">
			<uni-list>
				<uni-list-item 
					title="订单通知"
					note="超额订单,取消订单等"
					thumb="../../static/img/order.png"
					thumbSize="lg"
					:clickable="true"
					@click="newsDetail"
					></uni-list-item>
				<uni-list-item
					title="系统公告"
					thumb="../../static/img/notice.png" 
					thumbSize="lg"
					></uni-list-item>
			</uni-list>
		</view>
		<view class="NoneNews">
			
		</view>
	</view>
</template>

<script>
	// import newsItem from './newsItem.vue'
	export default{
		// components:{
		// 	newsItem
		// },
		data(){
			return{
				
			}
		},
		methods:{
			newsDetail(){
				console.log('news')
				uni.navigateTo({
					url:'./orderNews'
				})
			}
		}
	}
</script>

<style>
	.container{
		display: flex;
		width: 100%;
		flex-direction: column;
		background-color: #f9f9fd;
		padding: 5px;
	}
</style>
