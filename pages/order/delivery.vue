<template>
	<view class="page">
		<view class="block" style="display: block;">
			<view class="block_body">
				<uni-view class="uni-flex uni-row">
					<uni-view class="block_left ">订单编号:</uni-view>
					<uni-view class="block_right">{{orderNO}}</uni-view>
				</uni-view>
			</view>
		</view>
		<view class="block" style="display: block;">
			<view class="block_body">
				<!-- <uni-icon type="contact" size="30"></uni-icon> -->
				<view class="example-title">物流信息</view>
				<uni-steps :options="list" :active="active" direction="column" />
			</view>
		</view>
	</view>
</template>
<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	import route from "@/common/public.js"
	import uniIcon from "@/components/uni-icon/uni-icons.vue"
	export default {
		components: {
			uniSteps,uniIcon
		},
		data() {
			return {
				active: 0,
				list:[],
				orderNO:''
			}
		},
		methods: {
			getDelivery(exp) {
				let _that = this;
				var jsonList = uni.getStorageSync("jsonList"); //获取存储在Storage里的值
				var datas = JSON.parse(jsonList); //JSON字符串转对象
				uni.request({
					method: "GET",
					url: getApp().globalData.webUrl + "/mobile/order/logistics",
					dataType: "json",
					data: {
						Ident_Signboard: datas.Ident_Signboard,
						Ident_Signguid: datas.Ident_Signguid,
						express: exp
					},
					success: function(res) {
						console.log(res.data.logisticsNodes)
						if(!res.data.logisticsNodes){
							uni.showToast({title: '未查询到当前明细物流信息！',icon: 'none',duration: 3000})
							return false;
						}
						for (var i = 0; i < res.data.logisticsNodes.length; i++) {
							var arr = {};
							arr.title = res.data.logisticsNodes[i].AcceptStation
							arr.desc = res.data.logisticsNodes[i].AcceptTime
							_that.list.push(arr)
							console.log(_that.list)
							_that.active = _that.list.length-1
						}
					},
					fail: function(res) {
						uni.showToast({title: '未查询到当前明细物流信息，请稍候！错误码201',icon: 'none',duration: 3000})
					}
				})
			},
		},
		onLoad: function(options) {
			console.log(options)
			this.getDelivery(options.express)
			if(options.orderNO != 'undefined'){
				this.orderNO = options.orderNO
			}
		}
	}
</script>
<style lang="scss">
	@import "../../common/uni.css";
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #F7F7F7
	}
	view {
		font-size: 28upx;
		line-height: inherit
	}
	uni-view.uni-flex.uni-row {
	    margin: 0.3rem 0;
	}
	.block{
		display: block;
		.block_body {
			margin: 0 0 15px 0;
			padding: 10px;
			background: #fff;
			border-radius: 8px;
			font-size: 0.7rem;
			.uni-flex .block_left{
				color: #333333;
				padding: 0 0.5rem;
				font-weight: 600;
			}
			.uni-flex .block_right{
				padding: 0 0.5rem;
				color: #333333;
				font-weight: 600;
				text{
					color: #FF0000;
				}
			}
			.uni-flex .invoice_status_right{
				color: #FF0000;
			}
		}
	}
	
</style>