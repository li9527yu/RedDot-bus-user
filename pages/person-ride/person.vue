<template>
	<view class="order">
		<form @submit="">
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-db">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input"><text>当前选择日期为：</text>{{date}}</view>
						</picker>
					</view>
				</view>
			</view>
			<navigator  url="../show-map/ShowMap">
				<input type="text" focus  placeholder="输入起点"  />
			</navigator>
			<navigator url="../show-map/ShowMap">
				<input type="text" focus  placeholder="输入终点"  />
			</navigator>			
		<button form-type="submit">下单</button>
			
		</form>
	</view>
</template>

<script>
	export default{
		name:'Person',
		data() {
		        const currentDate = this.getDate({
		            format: true
		        })
		        return {
		            date: currentDate
		        }
		    },
		computed: {
			// mapState(['forcedLogin', 'hasLogin', 'userName']),
			startDate() {
			    return this.getDate('start');
			},
			endDate() {
			    return this.getDate('end');
			}
		},
		methods:{
			getDate(type) {
				            const date = new Date();
				            let year = date.getFullYear();
				            let month = date.getMonth() + 1;
				            let day = date.getDate();
				
				            if (type === 'start') {
				                year = year;
				            } else if (type === 'end') {
				                year = year;
				            }
				            month = month > 9 ? month : '0' + month;;
				            day = day > 9 ? day : '0' + day;
				            return `${year}-${month}-${day}`;
				        },
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			ShowMap(){
				this.$router.push('/page/show-map/ShowMap');
			}
		}
	}
</script>

<style>
	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}
	
	.title {
		color: #8f8f94;
		margin-top: 25px;
	}
	
	.ul {
		font-size: 15px;
		color: #8f8f94;
		margin-top: 25px;
	}
	
	.ul>view {
		line-height: 25px;
	}
</style>
