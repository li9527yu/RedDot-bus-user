<template>
	<view>
		<view class="ListInfo">
			<view v-show="!showEmpty" class="LineInfo" :key="Item.train_num" v-for="Item in LineLists" @click="LineClick">
				<view class="InfoHead">
					<!-- <text class="HeadInfo">发车时间：{{Item.start_time}}/{{Item.end_time}}</text> -->
					<text class="HeadInfo">发车时间：{{Item.time}}</text>
					<text class="HeadInfo">|  共有{{Item.train_num}}个车次</text>
				</view>
				<view class="InfoBody">
						<scroll-view 
									class="scroll-view_H" 
									scroll-x="true"
									:scroll-with-animation="true" 
									@scroll="scroll"
									 scroll-left="0">
							<image class="icon" src="../../static/img/start.png"></image>
							 <view  class="scroll-view-item" :key="site.id" v-for="site in Item.value">
								{{site}}
							 </view>
							 
						</scroll-view> 
				</view>
			</view>
			<view v-show="showEmpty" class="empty">
				<image 
						class="emptyImg"
						src="../../static/img/empty.png"
						 mode="widthFix"
						></image>
				<!-- <image 
				src="../../static/img/empty.png" 
				class="emptyImg"
				></image> -->
			</view>
		</view>
		<!-- <uni-list>
			<uni-list-item v-for="Item in LineLists">
				<template slot="body">
					
				</template>
			</uni-list-item>
		</uni-list> -->
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default{
		name:"LineList",
		data(){
			return{
				LineLists:[],
				old: {
					scrollTop: 0
				},
				showEmpty:true,
			}
		},
		computed:{
			...mapState(['userId','hasLogin','EnterpriseId','forcedLogin'])
		},
		onShow(){
			if(this.hasLogin){
				this.ListsInfo()
			}
			else
			{
				uni.showToast({
					title:'请先登录!',
					icon:'none',
					mask:true,
					image:'../../static/img/alert.png'
				})
			}
		},
		created() {
			if(this.hasLogin){
				this.ListsInfo()
			}
			else
			{
				uni.showToast({
					title:'请先登录!',
					icon:'none',
					mask:true,
					image:'../../static/img/alert.png'
				})
			}
			
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
			scroll: function(e) {
			          // console.log(e)
			          this.old.scrollTop = e.detail.scrollTop
			      },

			
			ListsInfo(){
				var that=this;
				uni.request({
					url:'http://mrbus.net:8888/api/line/'+that.EnterpriseId,
					method:'GET',
					success: (res) => {
						if(res.data.status_code==200){
							console.log(res.data.data)
							var objs=res.data.data
							// console.log(objs)
							var length=objs.length;
							var Lists=[];
							if(length==0){
								uni.showToast({
									title:'暂无数据！',
									icon:'none',
									mask:true,
									image:'../../static/img/error.png'
								})
							}
							else
							{
								uni.showToast({
									title:'请求成功！',
									icon:'none',
									mask:true,
									image:'../../static/img/success.png'
								})
								that.showEmpty=false
								objs.forEach((index,item)=>{
									
									// console.log(item.split('-'))
									var value=objs[item].value;
									var listItem={};
									listItem.id=objs[item].id;
									listItem.time=objs[item].time;
									listItem.value=value.split('-');
									listItem.enterprise_id=objs[item].enterprise_id;
									listItem.start_time=objs[item].start_time;
									listItem.end_time=objs[item].end_time;
									listItem.train_num=objs[item].train_num
									Lists.push(listItem)
									// console.log(listItem)
								})
								that.LineLists=Lists;
								// console.log(that.LineLists[0].value.length)
							}
							
							
						}
						else
						{
							console.log(res.data)
							uni.showToast({
								title:'请求失败！',
								icon:'none',
								mask:true,
								image:'../../static/img/error.png'
							})
						}
					},
					fail: (err) => {
						console.log(err)
						uni.showToast({
							title:'请求失败！',
							icon:'none',
							mask:true,
							image:'../../static/img/error.png'
						})
					}
				})
			},
			LineClick(){
				console.log("LineClick")
				
			}
		}
		
	}
</script>

<style>
	.ListInfo{
		margin-top: 10px;
	}
	
	.scroll-Y {
		height: 300rpx;
	}
	.icon{
		width: 10%;
		height: 4vh;	
		vertical-align:text-top;
	}
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;

	}
	
	.scroll-view-item {
		display: inline-block;
		width: 30%;
		text-align: center;
		font-size: 36rpx;
		font-weight: 400;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		margin: 0 5px;
		padding: 0;
		border: 2px solid #0ea8f4;
		border-radius: 10px;
	}
	
	
	
	.LineInfo{
		width: 93vw;
		display: flex;
		flex-direction: column;
		/* padding: 5px; */
		border: 1px solid #848484;
		border-radius: 10px;
		display: block;
		margin: 10px auto;
		padding: 5px;
	}
	.InfoHead, .InfoBody{
		flex: 1;
	}
	.InfoHead text{
		font-size: 3vw;
		font-weight: 400;
		color: #3a3a3a;
		margin-left: 12px;
		/* display: flex;
		flex-direction: column; */
	}
	.HeadInfo{
		/* flex: 1; */
		margin-left:5px ;
	}
	#LineStart,#LineEnd{
		display: flex;
	}
	
	.empty{
		width: 100%;
		height: 300px;
	}
	.emptyImg{
		margin-top: 5vh;
		width: 100%;
	}
	
	.infoText{
		width: 20vw;
		height: 5vh;
		overflow: hidden;	
		text-overflow:ellipsis;
		white-space: nowrap;
		flex: 3;
		/* text-align: center; */
	}
	.infoText text{
		width: 100%;
		height: 100%;
		line-height: 5vh;
		font-weight: 300;
		font-family: Georgia, 'Times New Roman', Times, serif;
		font-size: 4vw;
		justify-content: end;
	}
	.InfoBody{
		margin-top: 5px;
		display: flex;
		/* padding: 0 10px; */
	}
	.BodyMain{
		flex: 2;
	}
	.BodyImg{
		flex: 1;
		 display: flex;
        justify-content: center;
        align-items: center;
	}
	#LineImg{
		display: block;
		width: 10vw;
		height: 5vh;
		vertical-align: middle;
		margin: 0 auto;
	}
	#LineImg2{
		display: block;
		width: 6vw;
		height: 4vh;
		vertical-align: text-top;
		
	}
</style>
