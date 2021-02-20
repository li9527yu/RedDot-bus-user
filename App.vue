<!-- <script type="text/javascript" src="//api.map.baidu.com/api?type=webgl&v=1.0&ak=l7n0ORx7O050a7IHaZPZs5piwKTpYM7o"></script> -->
<script >
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		onLaunch: function() {
			let userInfo =uni.getStorageInfoSync('userInfo')||'';
			if(userInfo.id){
				//更新登录状态
				uni.getStorage({
					key:'userInfo',
					success: (res) => {
						// this.login(res.data)
						this.$store.commit('login',res.data)
						console.log(res.data)
					}
				})
			}
			console.log('App Launch');
		},
		onShow: function() {
			// console.log('App Show');
		},
		onHide: function() {
			// console.log('App Hide');
		},
		methods: {
			...mapMutations(['login']),
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
	/* m-input {
		width: 100%;
		
		display: flex;
		flex: 1;
	}
 */
	 /* #ifndef APP-PLUS-NVUE */
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
		padding: 10px;
	}

	.input-group {
		background-color: #ffffff;
		margin-top: 20px;
		position: relative;
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
		background-color: #c8c7cc;
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
		background-color: #c8c7cc;
	}

	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
		/* font-size: 18px; */
		line-height: 40px;
	}

	.input-row .title {
		width: 70px;
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
		padding: 10px;
	}

	button.primary {
		background-color: #0faeff;
	}
	 /* #endif*/
</style>
