<template>
	<view class="container">
		<view class="hisOrder">
			<uni-list>
				<uni-list-item 
							   thumb="/static/img/carRecords.png" 
							   thumbSize="base" 
							   link
							   to="../history/historyRecord"
							   title="上车记录"></uni-list-item>
				<uni-list-item 
								v-show="IsPrincipal"
							   thumb="/static/img/orderEnterprise.png"
							  thumbSize="base" 
							   link
							   to="../history/enterpriseOrder"
							   title="企业订单"></uni-list-item>
				<uni-list-item
							   thumb="/static/img/orderPerson.png"
							   thumbSize="base" 
							   link
							   to="../history/personOrder"
							   title="数字订单"></uni-list-item>			   
			</uni-list>
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
				isEnterprise:true,
				chatMessage:{
					color:'#0faeff',
					size:'22',
					type:'chat'
				}
				
			}
		},
		computed:{
			...mapState(['IsPrincipal'])
		},
		onShow() {
			
		},
		onLoad() {
			
		},		
		methods:{
			
		}
	}
</script>

<style>
	.container{
		width: 100%;
	}
	.hisOrder{
		width: 100%;
		font-size: 32rpx;
		padding: 5rpx;
	}
	/* .empty{
		margin-top: 20%;
		width: 100%;
		height: 100%;
	} */
</style>
