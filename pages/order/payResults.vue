<template>
	<view>
		<view class="payResults">
			<view class="payImg">
				<image :src="(payImg)" mode="" ></image>
			</view>
			<view class="payPrice">
				<text>{{payPrice}}</text>
			</view>
			<view class="payText">
				<text>{{payText}}</text>
			</view>
			<view class="payClick" @tap="skipTo()">
				<text style="color: #0081FF;">点击返回订单</text>
			</view>
		</view>
			<!-- #ifndef MP-WEIXIN -->
		<uni-popup :show="payShow" type="middle" >
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
		</uni-popup>
		<!-- #endif -->
	</view>
</template>

<script>
	import route from "@/common/public.js"
	import uniPopup from '@/components/uni-popup/uni-popupPayResults.vue'
	export default{
		components: {
			uniPopup
		},
		data() {
			return{
				Signboard: '',  //token值
				Signguid: '',  //登录uid
				orderNum: '',  //单号
				tag: '2',  //充值和订单支付的区分
				payImg: '',  //支付方式图标
				payText: '',  //支付方式描述
				payPrice: '',  //支付金额
				payShow:true //支付是否完成弹框，true显示，false隐藏
			}
		},
		methods:{
			skipTo(){
				uni.redirectTo({
					url:'orderpageinfo?orderNum=balance'
				})
			},
			removeKey(){
				uni.removeStorageSync('OddNumbers');
				uni.removeStorageSync('PayMethod');
				uni.removeStorageSync('DateRand');
			},
			payResult(){
				this.payShow = false;
				uni.showToast({
					title: '支付结果查询中...',
					icon: 'loading'
				});
				let that = this;
				let jsonList = uni.getStorageSync("jsonList");  //获取存储在Storage里的值
				let data = JSON.parse(jsonList); //JSON字符串转对象
				that.Signboard = data.Ident_Signboard; //令牌
				that.Signguid = data.Ident_Signguid; //用户id
				that.orderNum = uni.getStorageSync('OddNumbers');  //储存的 订单号
				that.PayMethod = uni.getStorageSync('PayMethod');  //储存的区分支付宝或者微信 （做回调）
				that.DateOrder = uni.getStorageSync('DateRand');  //随机生成的单号
				if(that.PayMethod == 'Alipay'){
					uni.request({
						url: getApp().globalData.webUrl+'/mobile/Alipay/order_query',
						method: 'GET',
						data:{
							Ident_Signboard: that.Signboard,
							Ident_Signguid: that.Signguid,
							Alipay_order_no: that.DateOrder
						},
						success: (res) => {
							var state = res.data.status;
							this.payImg = '../../static/image/zhifu.png'
							switch (state){
								case 0:
									uni.hideLoading();
									that.payPrice = '支付金额：'+ res.data.total + '元';
									that.payText = '订单支付成功';
									that.removeKey();
									break;
								case 1:
									uni.hideLoading()
									that.payText = res.data.msg;
									that.removeKey();
									break;
								case 2:
									uni.hideLoading();
									that.payPrice = '支付金额：'+ res.data.total + '元';
									that.payText = '订单支付成功';
									that.removeKey();
									break;
								default:
									break;
							}
						},
						fail:(res)=>{
							uni.hideLoading();
							that.payText = '订单支付失败'
							that.removeKey();
						}
					})
				}else{
					uni.request({
						url: getApp().globalData.webUrl+'/mobile/wechat/Repquery',
						method: 'GET',
						data:{
							Ident_Signboard: that.Signboard,
							Ident_Signguid: that.Signguid,
							tradeno: that.orderNum,
						},
						success: (res) => {
							that.payImg = '../../static/image/weixin.png'
							var state = res.data.status;
							switch (state){
								case 0:
									uni.hideLoading();
									that.payPrice = '支付金额：'+ res.data.total + '元';
									that.payText = '订单支付成功';
									that.removeKey();
									break;
								case 1:
									uni.hideLoading()
									that.payText = res.data.msg;
									that.removeKey();
									break;
								case 2:
								uni.hideLoading();
								that.payPrice = '支付金额：'+ res.data.total + '元';
								that.payText = '订单支付成功';
								that.removeKey();
									break;
								default:
									break;
							}
						},
						fail:(res)=>{
							uni.hideLoading();
							that.payText = '订单支付失败';
							that.removeKey();
						}
					})
				}
			}
		},
		onLoad:function(options){
			
		}
	}
</script>

<style lang="scss">
	@import "../../common/uni.css";
	.payResults{
		width: 100%;
		padding: 5rem 0 0 0 ;
	}
	.payImg{
		display: flex;
		justify-content: center;
	}
	.payImg image{
		width: 100px;
		height: 100px;
	}
	.payText{
		width: 100%;
		/* padding:1 rem 7rem; */
		text-align: center;
		font-size: 24px;
	}
	.payPrice{
		width: 100%;
		text-align: center;
		font-size: 16px;
	}
	.payClick{
		margin-top: 8rem;
		display: flex;
		justify-content: center;
	}
	
	
	
	
	.layer{
		width: 70vw;
		height: 40vw;
		background: #ffffff;
		border: 1px solid #ffffff;
		border-radius: 5px;
		display: inline-flex;
		align-items: center;
		justify-content: flex-start;
		.layer_header{
			font-weight: 600;
			height: 10vw;
			border-bottom: 1px solid #F7F7F7;
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
</style>
