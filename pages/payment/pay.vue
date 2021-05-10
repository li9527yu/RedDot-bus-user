<template>
	<view class="container">
		<view class="mainPay">
			<view class="PayItem">
				<text id="Paytips">支付剩余时间</text>
				<uni-countdown :minute="15" :showDay="false" @timeup="time"></uni-countdown>
			</view>
			<view class="PayItem"><text class="PayMoney">￥{{payMoney}}</text></view>
		</view>
		<view class="choosetype">
			<text class="TypeTitle">支付方式：</text>
			<radio-group @change="changeRaido"> 
				<view class="checkItem">
					<view class="ItemImg"><image  src="../../static/img/Payweixin.png"/></view>
					<text>微信支付</text>
					<radio value="0" checked="true"></radio>
				</view>
				<view class="checkItem">
					<view class="ItemImg"><image  src="../../static/img/Payali.png"/></view>
					<text>支付宝支付</text>
					<radio value="1"></radio>
				</view>
			</radio-group>
		</view>
		<view class="payButton">
			<button type="default" @click="payTo">确认支付</button>
		</view>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				payMoney:0,
				payType:0,
				
			}
		},
		onLoad(options) {
			if(options.money!=null){
				console.log(options.money)
				this.payMoney=options.money;
			}
			console.log(this.payMoney)
		},
		methods:{
			time(){
				console.log('timeup')
			},
			changeRaido(e){
				// console.log(e.detail.value)
				this.payType=e.detail.value;
				console.log(this.payType)
			},
			payAli(){
				console.log('payAli')
			},
			payWei(){
				console.log('payWeixin')
			},
			payTo(){
				// console.log(this.payType)
				// switch (this.payType){
				// 	case 0:
				// 		console.log('payWeixin')
				// 		this.payWei();
				// 		break;
				// 	case 1:
				// 		console.log('payAli')
				// 		this.payAli();
				// 		break;
				// }
				var orderInfo="alipay_sdk=alipay-sdk-java-3.7.110.ALL&app_id=2021002143624325&biz_content=%7B%22out_trade_no%22%3A%2220210509%22%2C%22passback_params%22%3A%22memememememeji%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%2C%22subject%22%3A%22zzy%22%2C%22total_amount%22%3A%220.01%22%7D&charset=UTF-8&format=json&method=alipay.trade.app.pay&notify_url=http%3A%2F%2F8.131.71.33%3A8278%2Falipay%2Fnotify&sign=EJhKnU1blcCHvfJKA7zhtOZDYeV2yWV1ck7R40R%2BOIYOZXwKrFLDlLP7wPBIuXN1H%2FYAAEJmhq3c9aCleglN6NOqndp0xJ%2FtgIJbvaMzaZxPtO1QRu13pCWKAL69ZQbHoBldHpnhibdYZzhHp2RE%2BGLkSCpLflHlGFxxWkUfnSLtQ%2FsvU69oTNNLW%2BjjPaXdvbqtw%2BB0g9E4ZRMIKM5knXKVzWk4V6xn48cvQiNH3y%2B4bwlABuJgmsOO2MDBXuyWuir7n2n7whU0uDRlUKa%2B6WumSCNdC3YrYNPHhaRga%2F%2BIjk2nW75CS%2B24XF9jzNISe2NMoQi8ggKk3E0u80Sz6Q%3D%3D&sign_type=RSA2&timestamp=2021-05-09+21%3A51%3A57&version=1.0";
							
				console.log('pay')
				uni.requestPayment({
					provider:'alipay',
					orderInfo:orderInfo,
					success: function (res) {
					        console.log('success:' + JSON.stringify(res));
					    },
					    fail: function (err) {
					        console.log('fail:' + JSON.stringify(err));
					    }
				})
			}
		}
	}
</script>
<style>
	.container{
		margin: 0;
		padding: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.mainPay{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.PayItem{
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 10rpx 0;
	}
	#Paytips{
		font-size: 32rpx;
		font-weight: 200;
		color: #000000;
	}
	.PayItem text{
		font-size: 44rpx;
		font-weight: 600;
		color: #0000FF;
	}
	.choosetype{
		flex: 3;
		display: flex;
		flex-direction: column;
		padding: 10rpx;
	}
	.TypeTitle{
		font-size: 36rpx;
		font-weight: 600;
		margin: 20rpx 10rpx;
	}
	.checkItem{
		flex: 1;
		display: flex;
		margin:20rpx  8rpx;
		
	}
	.ItemImg{
		/* flex: 1; */
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.ItemImg image{
		width: 80rpx;
		height: 80rpx;
	}
	.checkItem text{
		flex: 1;
		font-size: 36rpx;
		font-weight: 300;
		justify-content: center;
		margin-left: 10rpx;
		margin-top: 6rpx;
	}
	.payButton{
		flex: 1;
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;	
	}
	.payButton button{
		font-size: 36rpx;
		font-weight: 600;
		color: #FFFFFF;
		padding: 6rpx;
		background-color: #0000FF;
	}
</style>