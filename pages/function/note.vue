<template>
	<view class="container">
		<uni-nav-bar 
			class="navbar" 
			color="#FFFFFF" 
			backgroundColor="#0faeff" 
			left-icon="back"  
			right-text="完成" 
			title="超级巴士"
			@clickLeft="backIn"
			@clickRight="complete"></uni-nav-bar>
		<view class="noteBody">
			<uni-row>
				<uni-col>
					<uni-easyinput :value="note" maxlength="20" type="textarea" placeholder="请输入您的备注"></uni-easyinput>
				</uni-col>
			</uni-row>
		</view>
		<view>
			<uni-row class="recommnedBody">
				<uni-col :span="12" :offset="1"><text class="recommendTitle">推荐标签</text></uni-col>
			</uni-row >
			<uni-row class="recommnedBody">
				<uni-col 
						:span="10" 
						:offset="1"
						v-for="(item,index) in noteLists" :key="index">
					<button class="notechoose" type="default" @click="addNote(index)">{{item}}</button>
				</uni-col>
				<!-- <uni-col :span="10" :offset="1"><button class="notechoose" type="default">有有孕妇老人</button></uni-col> -->
			</uni-row class="recommnedBody">
			<!-- <uni-row>
				<uni-col :span="10" :offset="1"><button class="notechoose" type="default">有有孕妇老人</button></uni-col>
				<uni-col :span="10" :offset="1"><button class="notechoose" type="default">有有孕妇老人</button></uni-col>
			</uni-row> -->
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				note:'',
				noteLists:['有孕妇，小孩','希望司机开平稳点','请安排好车辆']
			}
		},
		methods:{
			backIn(){
				// uni.switchTab({
				// 	url:'../main/main'
				// })
				uni.navigateBack({
					
				})
				
			},
			complete(){
				var that=this;
				uni.redirectTo({
					url:'../enterprise-ride/enterprise'
				})
				// uni.navigateBack({
				// })
				// uni.$emit('sendNote',{
				// 	note:that.note
				// })
			},
			addNote(index){
				console.log(index)
				this.note+=this.noteLists[index]
			}
		}
	}
</script>

<style>
	.container{
		width: 100vw;
	}
	.navbar{
		width: 100%;
	}
	.noteBody{
		padding: 3px;
	}
	.recommnedBody{
		margin-top: 5px;
	}
	.recommendTitle{
		font-size: 14px;
		font-weight: 600;
	}
	.notechoose{
		background-color: #FFFFFF;
	}
</style>
