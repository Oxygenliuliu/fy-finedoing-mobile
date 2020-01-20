<template>
		<view class="cover">
			<view class="layer uni-flex uni-column">
				<view class="flex-item flex-item-V layer_item layer_header">
					<text>确认支付是否已完成</text>
				</view>
				<view class="flex-item flex-item-V layer_item pay_finish" @tap="payResult()">
					<text>已完成支付</text>
				</view>
				<view class="flex-item flex-item-V layer_item pay_unfinish" @tap="payResult()">
					<text>支付遇到问题</text>
				</view>
			</view>
		</view>
</template>

<script>
	import route from "@/common/public.js";
	export default {
		data() {
			return {
			}
		},
		props:['payFromCz','webData','os_id','goOrder'],
		methods:{
			payResult() { 
				this.$emit('payResult');
				let wulala=JSON.parse(uni.getStorageSync("jsonList"));  //获取存储在Storage里的值JSON字符串转对象
				let Signboard = wulala.Ident_Signboard;
				let Signguid = wulala.Ident_Signguid;
				let payOrder = this.webData.payOrder;
				let paytype = this.webData.pmtNum;
				let sendPicture = this.webData.sendPicture;
				console.log(this.webData)
				route.selectIsPay(paytype,Signboard,Signguid,payOrder,this.payFromCz,'true',this.callBack,this.goOrder,sendPicture)
				
				//                支付方式  密钥      秘钥      订单号   是否是充值       是否轮询     回调函数 是否去往订单页面 // 传图或转化订单
			},
			callBack(a){
				//this.payFromCz 支付 null
				if(this.payFromCz == null){
					this.$emit('editOrder')
				}
			}
		},
		}
</script>

<style lang="scss" scoped>
	// body,html,page{
	// 	height: 100%;
	// 	overflow: hidden;
	// }
	/*订单完成与否提示*/
	.cover{
		top: 0;
		left: 0;
		position: fixed;
		width: 100vw;
		height: 100vh;
		background: rgba(0,0,0,0.5);
		z-index: 100;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	.layer{
		width: 70vw;
		height: 40vw;
		background: #ffffff;
		border: 1px solid #ffffff;
		border-radius: 5px;
		margin-top: -84px;
		font-size: 14px;
		.layer_header{
			font-weight: 600;
			height: 10vw;
			border-bottom: 1px solid #F7F7F7;
			font-size: 14px;
		}
		.layer_item{
			width: 100%;
			padding: 20upx 0;
			display: inline-flex;
			align-items: center;
			justify-content: center;
		}
		.pay_finish {
			color: #FF0000;
			border-bottom: 1px solid #F7F7F7;
		}
		.pay_unfinish{
			color: #888888;
		}
	}
		}
</style>
