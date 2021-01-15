<template>
	<!--
	 本页面模板教程：https://ext.dcloud.net.cn/plugin?id=2717
	 uni-list 文档：https://ext.dcloud.net.cn/plugin?id=24
	 uniCloud 文档：https://uniapp.dcloud.io/uniCloud/README
	 uni-clientDB 组件文档：https://uniapp.dcloud.net.cn/uniCloud/uni-clientdb-component
	 DB Schema 规范：https://uniapp.dcloud.net.cn/uniCloud/schema
	 -->
	
		
</template>

<script>
	// export default {
	// 	components: {},
	// 	data() {
	// 		return {
	// 			// 数据表名
	// 			collection: 'opendb-news-articles',
	// 			// 查询字段，多个字段用 , 分割
	// 			field: '_id,mode,avatar,title,user_name,excerpt,last_modify_date',
	// 			formData: {
	// 				status: 'more', // 加载状态
	// 				direction: () => {}
	// 			},
	// 			tipShow: false // 是否显示顶部提示框
	// 		};
	// 	},
	// 	onLoad() {
	// 		this.formData.direction = this.direction
	// 	},
	// 	methods: {
	// 		/**
	// 		 * 切换商品列表布局方向
	// 		 */
	// 		select() {
	// 			this.formData.waterfall = !this.formData.waterfall;
	// 		},
	// 		/**
	// 		 * 下拉刷新回调函数
	// 		 */
	// 		onPullDownRefresh() {
	// 			this.tipShow = true
	// 			this.formData.status = 'more'
	// 			this.$refs.udb.loadData({
	// 				clear: true
	// 			}, () => {
	// 				this.tipShow = false
	// 				uni.stopPullDownRefresh()
	// 			})
	// 		},
	// 		/**
	// 		 * 上拉加载回调函数
	// 		 */
	// 		onReachBottom() {
	// 			this.$refs.udb.loadMore()
	// 		},
	// 		load(data, ended) {
	// 			if (ended) {
	// 				this.formData.status = 'noMore'
	// 			}
	// 		}
	// 	}
	// };
</script>

<style lang="scss">
	@import '@/common/uni-ui.scss';

	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	.tips {
		color: #67c23a;
		font-size: 14px;
		line-height: 40px;
		text-align: center;
		background-color: #f0f9eb;
		height: 0;
		opacity: 0;
		transform: translateY(-100%);
		transition: all 0.3s;
	}

	.tips-ani {
		transform: translateY(0);
		height: 40px;
		opacity: 1;
	}

	.content {
		width: 100%;
		display: flex;
	}

	.list-picture {
		width: 100%;
		height: 145px;
	}

	.thumb-image {
		width: 100%;
		height: 100%;
	}

	.ellipsis {
		display: flex;
		overflow: hidden;
	}

	.uni-ellipsis-1 {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.uni-ellipsis-2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
