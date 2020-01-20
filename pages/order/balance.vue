<template>
	<view class="situ paymoney_view">
		<view class="block">
			<image src="../../static/image/yue01.png" lazy-load='true'></image></br>
			<text>支付金额</text>
			<view class="blockOne">
				<text>￥{{payMoney}}</text></br>
			</view>
			<text>信用额度：￥{{usable}}/{{amount}}</text>
		</view></br>
		<button @tap="pytClick">确认</button>
		<!-- 输入支付密码界面弹出 -->
		<uni-popup :show="pytPwd" type="bottom" position="bottom">
			<view class="content">
				<view class="login">
					<view class="l_top" style="margin-bottom:100upx;">
						<view class="l_text">请输入6位支付密码，注意输入三次以上账户将被锁定</view>
					</view>
					<view class="l_top">
						<view class="mima">
							<view class="item">
								<view v-if="len<=0" :class="{line:show}"></view>
								<view v-if="len>=1" class="dot"></view>
							</view>
							<view class="item">
								<view v-if="len==1" :class="{line:show}"></view>
								<view v-if="len>=2" class="dot"></view>
							</view>
							<view class="item">
								<view v-if="len==2" :class="{line:show}"></view>
								<view v-if="len>=3" class="dot"></view>
							</view>
							<view class="item">
								<view v-if="len==3" :class="{line:show}"></view>
								<view v-if="len>=4" class="dot"></view>
							</view>
							<view class="item">
								<view v-if="len==4" :class="{line:show}"></view>
								<view v-if="len>=5" class="dot"></view>
							</view>
							<view class="item">
								<view v-if="len==5" :class="{line:show}"></view>
								<view v-if="len>=6" class="dot"></view>
							</view>
							<view v-if="len>5" class="dot">{{numlength}}</view>
							<input class="trade_pwd" disabled="disabled" maxlength="6" id="targetInput" @focus="focus1" @blur="blur1" type="number"
							 v-model="trade_pwd" />
						</view>
					</view>
				</view>
				<view class="keypan">
				<view class="pan_num_key" :class="[items.checked?'pan_num_checked':'pan_num_key']" v-for="(items,index) in boardlists"
					 :key="index" @click="writepwd(items.id)"><image lazy-load='true' src="../../static/image/delete.png" :style="{display:(items.id == '12'?'block':'none')}"></image>{{items.con}}</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	import route from "@/common/public.js"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import {
		mapGetters,
		mapActions
	} from 'vuex';
	export default {
		components: {uniPopup},
		computed: {
			...mapGetters(['statusBarHeight'])
		},
		data() {
			return {
				payMoney: '',  //支付总金额
				amount: '',  //可用信用额度
				usable: '',  //剩余可用信用额度
				orderId: '',  //订单id
				Signboard: '', //令牌
				Signguid: '',  //id
				pytPwd:false,
				trade_pwd: '',
				focus: true,
				show: false,
				numarr: [],
				d_time: 10,
				nextsteep: false,
				tel: 0,
				numlength: "",
				gopen: false,
				isactive: true,
				resgetcode: false,
				boardlists: [
					{id: 1,con: 1,checked: false,},
					{id: 2,con: 2,checked: false,},
					{id: 3,con: 3,checked: false,},
					{id: 4,con: 4,checked: false,}, 
					{id: 5,con: 5,checked: false,}, 
					{id: 6,con: 6,checked: false,},
					{id: 7,con: 7,checked: false}, 
					{id: 8,con: 8,checked: false}, 
					{id: 9,con: 9,checked: false}, 
					{id: 10,con: "",checked: false}, 
					{id: 11,con: 0,checked: false},
					{id: 12,con: "",checked: false},
	
				]
			};
		},
		computed: {
			len: function() {
				if (this.trade_pwd.length == 6) {
					// 第一次进来可以点击的
				}
				return this.trade_pwd.length
			}
		},
		onLoad(options) {
			let jsonList = uni.getStorageSync("jsonList");  //获取存储在Storage里的值
			let jsondata = JSON.parse(jsonList); //JSON字符串转对象
			this.Signboard = jsondata.Ident_Signboard; //令牌
			this.Signguid = jsondata.Ident_Signguid; //用户id
			this.payMoney = options.money
			this.amount = options.amount
			this.usable = options.usable
			this.orderId = options.orderNum
			uni.removeStorageSync('isPayTrue');
		},
		methods: {
			pytClick(evt){
				this.pytPwd=true;
				
			},
			writepwd(num) {
				if (num == 12) {
					this.close();
					return;
				}
				if (num == 10) {
					return;
				}
				if (num == 11) {
					num = 0;
					this.boardlists[10].checked = true;
				} else {
					this.boardlists[num - 1].checked = true;
				}
				this.numarr.push(num);
				var that = this;
				setTimeout(function() {
					for (var i = 0; i < that.boardlists.length; i++) {
						that.boardlists[i].checked = false;
					}
				}, 200)
				this.trade_pwd = this.numarr.join("");
				if (this.numarr.length == 6) {
					this.setpwd();
				}
			},
			//密码框
			back() {
				uni.navigateBack();
			},
			//回退方法
			close() {
				this.numarr.pop();
				if (this.trade_pwd.length > 0) {
					this.trade_pwd = this.trade_pwd.substring(0, this.trade_pwd.length - 1);
				}
			},
			blur1() {
				this.show = false
			},
			focus1() {
				this.show = true
			},
			reset(){
				this.trade_pwd = '';
				this.show = true
				this.numarr = [],
				this.numlength = ""
			},
			// 确认执行的方法
			setpwd() {
				if (this.trade_pwd.length < 6) {
					uni.showToast({
						title: '密码长度不能少于6位',
						icon: 'none'
					})
					return;
				}
				// 密码长度为6位以后执行方法
				uni.request({
					url: getApp().globalData.webUrl+'/mobile/Balance/yuepay',
					method: 'POST',
					data: {
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
						order_num: this.orderId,  //订单号
						paypwd: this.trade_pwd, //支付密码
						money: this.payMoney,  //支付金额
					},
					success: (res) => {
						if(res.data.status == 0){
							uni.showToast({
								title: '支付成功',
								icon: 'none',
								duration:1000,
							});
							/* stat 转化订单或上传图片*/
							console.log( res.data.orderId,666666,res)
							let detailsId = res.data.orderId;
							setTimeout(()=>{
								let sendPicture = {
									"msg":true,
									"data":{
										'tradeno': this.orderId,
										'status': 1,
									}
								}
									uni.setStorageSync('sendPicture',JSON.stringify(sendPicture))
									uni.showModal({
											title:"提示",
											content: '是否立即提交订单',
											cancelText:'等待传图',
											confirmText:'提交订单',
											success: res => {
													if(res.confirm) {
														sendPicture.msg = false;
														uni.setStorageSync('sendPicture',JSON.stringify(sendPicture))
														let orderWay = 1;
														route.orderOrSendPi(this.orderId, sendPicture, orderWay)
														setTimeout(()=>{ 
															uni.redirectTo({
																url: 'orderpageinfo?orderNum=balance'
															})
														},1000)
													}else{
														sendPicture.msg = false;
														uni.setStorageSync('sendPicture',JSON.stringify(sendPicture))
														setTimeout(()=>{
															uni.navigateTo({
																url: 'details?orderid='+ detailsId 
															})
														},1000)
														
											}
											}
									})
							},1100)
							/* end 转化订单或上传图片*/
						}else{
							uni.showToast({
								title: '支付失败，'+res.data.message,
								icon: 'none'
							})
							this.reset();
						}
					},
					fail:(res)=>{
						uni.hideLoading()
						uni.showToast({title: '支付失败'+'错误码201',icon:"none"});
					}
				})
			},
		}
	}
</script>
<style lang="scss" scoped>
	@import "../../common/uni.css";
	.situ{
		text-align: center;
		margin-top: 4rem;
	}
	.block image{
		width: 5rem;
		height: 5rem;
		margin: 0 auto;
	}
	.blockOne{
		border-bottom: 1px solid #AFA3A3;
		width: 12rem;
		margin: 0 auto;
		margin-bottom: 0.5rem;
	}
	.blockOne>text{
		font-size: 1.5rem;
		font-weight: bold;
	}
	.situ button{
		width: 17rem;
		background: #1D82FE;
		color:#FFFFFF;
	}
	.content {
		width: 100%;
		font-size: 28upx;
		background: #fff;
		color: #555;
		height: 100vh;
		font-weight: 400;
		.keypan {
			width: 100vw;
			height: 35vh;
			position: fixed;
			left: 0;
			bottom: 0;
			background: #E6E6E6;
			.pan_num_key {
				width: 33vw;/*写给不支持calc()的浏览器*/
				width: -moz-calc(33vw - 1px);
				width: -webkit-calc(33vw - 1px);
				width: calc(33vw - 1px);
				height: 25%;
				float: Left;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				background: #fff;
				border: 1px solid #f7f7f7;
				font-size: 1rem;
				font-weight: 600;
				line-height: 25px;
			}
			.pan_num_key image{
				width: 5vw;
				height: 5vw;
			}
			
			.pan_num_checked {
				animation: checked_bg 0.08s ease;
			}
		}
	.navigation_bar {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-top: 60upx;
		.back-icon {
			width: 18upx;
			height: 34upx;
		}
	}
	.login {
		width: 100%;
		height: 300upx;
		.l_top {
			width: 700upx;
			height: 200upx;
			margin: 0 auto;
			position: relative;
			.l_text {
				width: 445upx;
				height: 69upx;
				font-size: 28upx;
				text-align: center;
				margin: auto;
				top: 144upx;
				position: relative;
			}
			.lt {
				margin-top: -20upx;
				font-size: 25upx;
				color: #555
			}
		}
	}
		.title {
			color: #616161;
			text-align: center;
			font-size: 30upx;
			margin-bottom: 34upx;
		}
	.mima {
		flex-direction: row;
		width: 680upx;
		height: 78upx;
		margin: 0 auto;
		position: relative;
		.item {
			width: 92upx;
			height: 100%;
			box-sizing: border-box;
			display: flex;
			float: left;
			align-items: center;
			justify-content: center;
			border-bottom: 1upx solid #E5E5E5;
			margin-left: 20upx;
			.line {
				width: 2upx;
				height: 40upx;
				background: #979797;
				animation: shan 1s ease infinite;
			}
			.dot {
				width: 20upx;
				height: 20upx;
				border-radius: 20upx;
				background: black;
			}
		}
		.trade_pwd {
			position: absolute;
			height: 78upx !important;
			width: 480upx;
			opacity: 0;
		}
	}
}
	@keyframes shan {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
	@keyframes checked_bg {
		0% {
			background: #fff
		}
		50% {
			background: #D3D1E2
		}
		100% {
			background: #fff
		}
	}
</style>
