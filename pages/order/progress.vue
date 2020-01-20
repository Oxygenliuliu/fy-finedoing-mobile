<template>
	<view class="example">
		<view class="example-title">当前商品</view>
		<order-Details :options="orderDatailList" :showTitle="false" />
		<view class="example-title">业务流程</view>
		<uni-steps :options="progressList" :active="active" direction="column" />
	</view>
</template>
<script>
	import uniSteps from '@/components/uni-steps/uni-steps-progress.vue'
	import route from "@/common/public.js"
	import orderDetails from '@/components/customize/orderdetail.vue'
	export default {
		components: {
			uniSteps,
			orderDetails
		},
		data() {
			return {
				imgUrl:'',
				active: 0,
				orderDatailList:[],
				progressList:[],
			}
		},
		methods: {
		},
		onLoad: function(options) {
			console.log(options)
			this.imgUrl=getApp().globalData.webUrl;
			let pages = getCurrentPages();
			let prevPage = pages[pages.length - 2];  
			// console.log(pages)
			
			//#ifndef H5
			prevPage = prevPage.$vm;
			//#endif
			for (var i = 0; i < prevPage.orderDetails.length; i++) {
				if(prevPage.orderDetails[i].od_id == options.od_id){
					this.orderDatailList.push(prevPage.orderDetails[i]);
				}
			}
			for (var i = 0; i < prevPage.progressList.length; i++) {
				if(prevPage.progressList[i].detail_id == options.od_id){
					this.progressList = prevPage.progressList[i].proc_lists
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #FFFFFF;
	}
	view {
		font-size: 28upx;
		line-height: inherit
	}
	.example {
		padding: 0 30upx 30upx;
		.example-title {
			font-size: 0.7rem;
			line-height: 0.7rem;
			color: #777;
			// margin: 40upx 25upx;
			margin: 40upx 0;
			position: relative;
		}
	}
</style>