<template>
	<view>
		<view class="orderList">
			<!--  -->
			<order-item
				v-if="item.state==Ordertype"
				v-for="(item,index) in order" 
				:orderItem="item" 
				:key="index" 
				class="itemContainer"></order-item>
		</view>
	</view>
</template>

<script>
	import orderItem from './orderItem.vue'
	export default{
		name:'orderList',
		components:{
			orderItem
		},
		props:{
			Ordertype:{
				type:Number,
				default:2
			},
			order:{
				type:Array,
				default(){
					return []
				}
			}
		},
		created() {
			// console.log(this.order)
		},
		data(){
			return{
				// order:[]
			}
		}
	}
</script>

<style>
	 .orderList{
	        display: flex;
	        flex-wrap: wrap;
	        justify-content: space-around;
			
	    }
	.itemContainer{
		margin: 0 auto;
		width: 90%;
		padding: 10px;
	}
</style>
