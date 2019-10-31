<template>
	<view class="example">
		<view class="example-title">当前商品</view>
		<!-- 商品的详细信息 -->
		<view class="commodity" >
			<view class="sp_cont" v-for="(orderDetails,index) in orderDatailList" :key="index">
					<view class="sp_cont_img">
						<image :src="flag?imgUrl+orderDetails.img:orderDetails.img"></image>
					</view>
					
					<view class="sp_cont_content">
						<view style="font-size: 0.7rem;font-weight: 600;"><text>{{orderDetails.g_name}}  </text></view>
						<view style="color: #999999;">工艺:<text>{{orderDetails.process}}</text></view>
						<view style="color: #999999;">规格:<text>{{orderDetails.specs}}(M)*{{orderDetails.od_quantity}}(个)</text></view>
						<view class="money" style="font-size: 0.7rem;"><text> ￥ {{orderDetails.total}}</text></view>
					</view>
			</view>
		</view>
		<view class="example-title">业务流程</view>
		<uni-steps :options="progressList" :active="active" direction="column" />
	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps-progress.vue'
	import route from "@/common/public.js"

	export default {
		components: {
			uniSteps
		},
		data() {
			return {
				imgUrl:'',
				active: 0,
				orderDatailList:[],
				progressList:[],
				flag:true //flag为options.type，details过来的为true，csDetails过来的为false
			}
		},
		methods: {
		},
		onLoad: function(options) {
			console.log(options)
			this.imgUrl=route.variable;
			let pages = getCurrentPages();
			let prevPage = pages[pages.length - 2];  
			// console.log(pages)
			if(options.from_cs == 0){
				for (var i = 0; i < prevPage.orderDetail.length; i++) {
					if(prevPage.orderDetail[i].od_id == options.od_id){
						this.orderDatailList.push(prevPage.orderDetail[i])
					}
				}
				for (var i = 0; i < prevPage.progressList.length; i++) {
					if(prevPage.progressList[i].detail_id == options.od_id){
						this.progressList = prevPage.progressList[i].proc_lists
					}
				}
				console.log(this.progressList)
			}else if(options.from_cs == 1){
				this.flag = false
				for (var i = 0; i < prevPage.CSOrderDetail.length; i++) {
					if(prevPage.CSOrderDetail[i].BILLDETAIL_ID == options.od_id){
						let arr=[];
						arr.img = '../../static/image/unExist.png';
						arr.g_name = prevPage.CSOrderDetail[i].BILLDETAIL_GOODSNAME
						arr.process = prevPage.CSOrderDetail[i].BILLDETAIL_LATEPROCESS
						arr.specs = prevPage.CSOrderDetail[i].BILLDETAIL_W+'X'+prevPage.CSOrderDetail[i].BILLDETAIL_H
						arr.od_quantity = prevPage.CSOrderDetail[i].BILLDETAIL_QTY
						arr.total = prevPage.CSOrderDetail[i].BILL_TOTALMONEY
						this.orderDatailList.push(arr)
					}
				}
				for (var i = 0; i < prevPage.progressList.length; i++) {
					if(prevPage.progressList[i].detail_id == options.od_id){
						this.progressList = prevPage.progressList[i].proc_lists
					}
				}
				console.log(this.progressList)
			}else{
				uni.showToast({title:'未查询到流程！',icon:'none',duration:3000})
			}
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}
	.example-title {
		font-size: 0.7rem;
		line-height: 0.7rem;
		color: #777;
		margin: 40upx 25upx;
		position: relative;
		/* text-align: center; */
	}

	.example .example-title {
		margin: 40upx 0
	}
	/* 商品信息详情 */
	.commodity {
		margin: 35upx 0;
		background-color: #FFF;
		width: 100%;
	}
	
	/* 商品名样式 */
	.sp_tite {
		padding: 0.5rem;
		font-weight: 400;
		font-size: 0.8rem;
		border-bottom: 1.2px solid #F7F7F7;
	}
	
	.sp_tite text {
		font-size: 0.7rem;
		float: right;
		color: #999999;
		padding: 0.2rem;
	}
	
	.sp_cont {
		display: flex;
		padding: 0.5rem;
		border-bottom: #E5E5E5 solid 1px;
	}
	
	.sp_cont .sp_cont_img{
		width: 30%;
		margin: 0 0 0 0.2rem;
	}
	
	.sp_cont .sp_cont_img>image {
		height: 5rem;
		width: 5rem;
		border-radius: 10upx ;
	}
	
	.sp_cont .sp_cont_content{
		width: 70%;
	}
	
	.sp_cont_content uni-view {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.sp_cont>view {
		margin-left: 0.3rem;
	}
	
	.money {
		color: red;
	}
</style>