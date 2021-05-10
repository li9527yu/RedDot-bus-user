<script >
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		onLaunch: function() {
				uni.getStorage({
					key:'userInfo',
					success: (res) => {						
						this.login(res.data)						
						console.log(res.data)
					},
					fail: (err) => {
						console.log(err)
					}
				})
			console.log('App Launch');
		},
		onShow: function() {
			// console.log('App Show');
		},
		onHide: function() {
			// console.log('App Hide');
		},
		methods: {
			...mapMutations(['login','StaffCertify']),
		}
	}
</script>

<style >
	 /* #ifndef APP-PLUS-NVUE */
	page {
		min-height: 100%;
		display: flex;
		font-size: 14px;
	}
	
	input,
	textarea,
	button {
		font-size: 14px;
	}
	 /* #endif*/
	/* #ifdef MP-BAIDU */
	page {
		width: 100%;
		height: 100%;
		display: block;
	}

	swan-template {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* 原生组件模式下需要注意组件外部样式 */
	custom-component {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	/* #ifdef MP-ALIPAY */
	page {
		min-height: 100vh;
	}

	/* #endif */

	/* 原生组件模式下需要注意组件外部样式 */
	

	 /* #ifndef APP-PLUS-NVUE */
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
		padding: 10px;
	}
	
	.m-input {
		border: 1px solid #FFFFFF;
		border-radius: 10px;
		flex: 1;
		height: 40px;
		min-height: 40px;
		font-size: 16px;
	}
	.input-group {
		background-color: #efeff4;
		margin-top: 20px;
		position: relative;
		/* border-radius: 20px; */
	}

	.input-group::before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #efeff4;
	}

	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		 /* #ifndef APP-PLUS-NVUE */
		-webkit-transform: scaleY(.5);
		 /* #endif*/
		transform: scaleY(.5);
		background-color: #efeff4;
	}

	.input-row {
		/* width: 95vw; */
		display: flex;
		flex-direction: row;
		position: relative;
		padding:1px 2px;
		/* font-size: 18px; */
		margin-top: 10px;
		line-height: 40px;
		border: 1px solid #e4e5ea;
		border-radius: 10px;
		background-color: #FFFFFF;
	}

	.title {
		/* width: 60px; */
		height: 40px;
		font-size: 16px;
		padding-left: 15px;
	}

	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 8px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}

	.btn-row {
		margin-top: 25px;
		padding: 5px;
	}

	button.primary {
		width: 90%;
		font-size: 16px;
		background-color: #0faeff;
	}
	 /* #endif*/
</style>
