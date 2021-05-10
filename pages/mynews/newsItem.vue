<template>
	<view class="container">
		<view>
			<uni-row>
				<uni-col :span="12">您有一个订单待确认！</uni-col>
			</uni-row>
			<uni-row>
				<uni-col  :span="4">订单通知</uni-col>
				<uni-col :span="6">03-25 20:01</uni-col>
			</uni-row>
			<uni-row>
				<uni-col :span="24">
					
				</uni-col>
			</uni-row>
			<uni-row>
				<uni-col :span="12"></uni-col>
			</uni-row>
		</view>
	</view>
</template>

<script>
	export default{
		name:'newsItem',
		data(){
			return{
				
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
