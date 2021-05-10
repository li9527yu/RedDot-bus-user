<template>
	<view class="container">
		<view>
			<uni-list>
				<uni-list-item
					title="订单确认"
					note="您有一个订单待确认"
					thumb="../../static/img/ordernews.png"
					thumbSize="lg"
					:clickable="true"
					rightText="3-25 19:57"
					@click="ordernews"
					></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			ordernews(){
				uni.navigateTo({
					url:'./newsItem'
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
