<template>
	<view>
		<view class="back">
			<text class="top">当前余额（单位：元）</text></br>
			<text class="bot">{{balance}}</text>
		</view>
		<view class="block">
			<view class="title">
				充值金额
			</view>
			<view class="content">
				<view class="amount">
					<view class="list">
						<view class="box" v-for="(amount,index) in amountList" :key="index" @tap="select(amount)" :class="{'on':amount == inputAmount}">
							{{amount}}元
						</view>
					</view>
					<view class="list">
						<view class="box" v-for="(amount,index) in amountList2" :key="index" @tap="select(amount)" :class="{'on':amount == inputAmount}">
							{{amount}}元
						</view>
						<view class="box">
							<input type="number" v-model="inputAmount" @change="change(inputAmount)" placeholder="其他金额" />
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 实际到账和支付金额 -->
		<view class="block">
			<view class="actaul_money money_item">
				实际到账：
				<text>￥{{actaul_money}}</text>
			</view>
			<view class="pay_money money_item">
				支付金额：
				<text style="color: #FF0000;">￥{{inputAmount}}</text>
			</view>
		</view>
		<view class="block">
			<view class="title">
				选择支付方式
			</view>
			<view class="content">
				<view class="pay-list">
					<view class="row" @tap="paytype='1'">
							<view class="left">
								<image src="../../static/image/weixin.png"></image>
							</view>
							<view class="center">
								微信支付
							</view>
							<view class="right">
								<radio :checked="paytype=='1'" color="#FF0000" style="transform:scale(0.7)"/>
							</view>
					</view>
					<!-- #ifndef MP-WEIXIN -->
					<view class="row" @tap="paytype='2'">
							<view class="left">
								<image src="../../static/image/zhifu.png"></image>
							</view>
							<view class="center">
								支付宝支付
							</view>
							<view class="right">
								<radio :checked="paytype=='2'" color="#FF0000" style="transform:scale(0.7)"/>
							</view>
					</view>
					<!-- #endif -->
				</view>
			</view>
		</view>
		<!-- 优惠活动 -->
		<view class="rechargeMode">
			<view class="odes">优惠活动<text>{{rueles == '' ? '无优惠' : '满'+rueles.recharge+'送'+rueles.send}}</text></view>
			<view style="font-size: 0.7rem;display: flex;justify-content: center;padding-bottom: 10px;">
				<text>{{message}}</text>
			</view>
			<view class="hd_cont" v-for="(ruelesInfo,index) in ruelesInfo" :key="index" :class="{'hd_active':ruelesInfo.r_id==rueles.r_id}">
				<view >
					<text style="float: left;">满{{ruelesInfo.recharge}}送{{ruelesInfo.send}}</text>
				</view>
			</view>
		</view>
		<view class="pay">
			<view class="btn" @tap="doDeposit">立即充值<text v-show='isTest'>(模拟支付0.01)</text></view>
		</view>
		<view v-show='payShow' >
		<unipay @payResult='payResult' :webData='webData' :payFromCz='payFromCz'></unipay>
		</view>
	</view>
</template>

<script>
	import unipay from "@/components/uni-popup/uni-isPay.vue"
	import route from "@/common/public.js"
	export default {
		components:{unipay},
		data() {
			return {
				webData: {},
				inputAmount:'',//金额
				amountList:[500,1000,2000],//预设3个可选快捷金额
				amountList2:[5000,10000],//预设3个可选快捷金额
				paytype:'',//支付类型
				Signboard:'', //token令牌
				Signguid:'', //用户标识
				balance:"", //当前余额
				rueles:"", //当前优惠活动的数组
				ruelesInfo: [],
				actaul_money:'0.00',//实际到账金额
				message:'',
				payUrl: '',
				payShow: false,
				payOrder: '',
				payWayNum: '',
				payFromCz: true,
				isChecked: {'window':false,'select':false},// 弹窗是否弹起 是否手动查询?
				isTest:false,
				};
		},
		methods:{
			leave(ee){//webView回调函数
				this.webData = ee;
			},
			payResult() {
				this.payShow = false;
				this.isChecked.select = true;
			},
			select(amount){// 获取用户选择的充值金额
				this.inputAmount = amount.toFixed(2);
				this.discount(amount)
			},
			change(inputAmount){
				// (/^(((([1-9]([0-9]{0,8}))|0)\.([0-9]{1,2}))|([1-9]([0-9]{0,8})))$/) 判断输入的是否为金额
				if(!(/^(((([1-9]([0-9]{0,8}))|0)\.([0-9]{1,2}))|([1-9]([0-9]{0,8})))$/).test(inputAmount))
				{
					this.inputAmount = inputAmount = 1;
				}
				this.discount(inputAmount)
			},
			discount(inputAmount){
				this.rueles='';
				// this.actaul_money=parseFloat(inputAmount);
				let maxSend=0;
				//判断用户充值的金额是否满足活动满减的条件
				for(let i=0;i<this.ruelesInfo.length;i++){
					if(parseFloat(inputAmount) >= parseFloat(this.ruelesInfo[i].recharge)&&parseFloat(this.ruelesInfo[i].send)>=maxSend){
							this.rueles=this.ruelesInfo[i]
							maxSend=this.ruelesInfo[i].send;
					}
				}
				if(inputAmount==''){
					this.actaul_money=(0).toFixed(2);
					return false;
				}
				if(this.rueles==''){
					this.actaul_money=(parseFloat(inputAmount)).toFixed(2);
				}else{
					this.actaul_money=(parseFloat(inputAmount)+parseFloat(this.rueles.send)).toFixed(2);
				}
			},
			doDeposit(){
				if (parseFloat(this.inputAmount).toString() == "NaN") {
					uni.showToast({title:'请输入充值金额',icon:'none'});
					return ;
				}
				if(this.inputAmount<=0){
					uni.showToast({title:'请输入大于0的金额',icon:'none'});
					return ;
				}
				if(parseFloat(this.inputAmount).toFixed(2)!=parseFloat(this.inputAmount)){
					uni.showToast({title:'最多只能输入两位小数哦~',icon:'none'});
					return ;
				}
				uni.showLoading({
					title:'支付中...',
				})
				setTimeout(function(){
					uni.hideLoading()
				},1000)
				// #ifdef MP-WEIXIN
				var _that = this;
				wx.login({
				  success: res => {
				    var code = res.code;
					uni.request({
						url:getApp().globalData.webUrl+'/mobile/recharge/Wapay',
						method:'POST',
						data: {
							Ident_Signboard: _that.Signboard,
							Ident_Signguid: _that.Signguid,
							moneys:_that.inputAmount,
							zhifu:_that.paytype,
							r_id:_that.rueles.r_id,
							trade_type: 'JSAPI',
							code: code
						},
						header: {
						  'content-type': 'application/x-www-form-urlencoded' // 默认值
						},
						success: res=> {
							if (res.data.state == 200){
								var data = res.data;
								uni.requestPayment({
									provider: 'wxpay',
								    timeStamp: res.data.timeStamp,
								    nonceStr: res.data.nonceStr,
								    package: res.data.package,
								    signType: res.data.signType,
								    paySign: res.data.paySign,
								    success: function (res) {
										uni.showLoading({
											title:'支付结果查询中...',
										})
										if (res.errMsg == 'requestPayment:ok'){
											uni.request({
													url:getApp().globalData.webUrl+'/mobile/wechat/orderquery',
													method:'GET',
													data:{
														Ident_Signboard: _that.Signboard,
														Ident_Signguid: _that.Signguid,
														tradeno:data['out_trade_no'],
													},
													success: (res) => {
														var state = res.data.status;
														uni.hideLoading()
														if(state == 0){
															uni.showToast({title: '充值成功!',icon:"none"});
															setTimeout(function(){
																	uni.redirectTo({
																		url:'/pages/user/bill'
																	})
																},1000)
														}else{
															uni.showToast({title: '充值失败!', icon:"none"});
														}
														
													},
													fail:(res)=>{
														uni.showToast({
															title: '接口连不上!' + res.errMsg,
															icon: 'none'
														});
														uni.hideLoading()
													}
												})
										}
								    },
								    fail: function (err) {
								        uni.showToast({
								        	title: '支付已取消',
											icon: 'none'
								        });
								    }
								})
							}else{
								uni.showToast({
									title: res.data.RETURN_MSG,
								});
							}
						}
					})
				  }
				})
				// #endif
				// #ifndef MP-WEIXIN
				let tradeno='';
				uni.request({
					url:getApp().globalData.webUrl+'//mobile/recharge/Wapay',
					data: {
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
						moneys:this.inputAmount,
						zhifu:this.paytype,
						r_id:this.rueles.r_id,
						// #ifdef H5
						trade_type: 'MWEB',
						// #endif
						// #ifndef H5
						trade_type: 'NATIVE',
						// #endif
					},
					success: res=> {
						if (route.publicIf(res.data.status) == false){
							return false;
							}
							tradeno=res.data.orderNum;
							let checkPayResult = {
								'payOrder': res.data.orderNum,
								'pmtNum': this.paytype,
								'webUrl': '',
								'isPayTrue':false
							}
							 /* 1是微信,2是支付宝 */
							 let webUrl = '';
							if(this.paytype == 1){
								webUrl = res.data.pay_link;
							}else{
								webUrl = res.data.pay_form;
								}
							checkPayResult.webUrl = webUrl;
							this.webData = checkPayResult;
							
							// #ifdef APP-PLUS
							uni.navigateTo({
								url: '../../pages/user/payWebView',
							})
							
							// #endif
							// #ifdef H5
							if(this.paytype == 1){
								uni.navigateTo({
									url: '../../pages/user/payWebView',
								})
							}
							else if(this.paytype == 2){
								let div = document.createElement('div')
								div.innerHTML = webUrl //此处form就是后台返回接收到的数据
								document.body.appendChild(div);
								document.forms[0].submit();
								setTimeout(()=>{
									this.payShow = true
								},1000)
							}
							
							// #endif
					}
				})
				// #endif
			},
		},
		onLoad() {
			var jsonList=uni.getStorageSync("jsonList");
			var data = JSON.parse(jsonList); //JSON字符串转对象
			this.Signboard = data.Ident_Signboard;
			this.Signguid = data.Ident_Signguid;
			route.checkCsid(data.csid);
			//获取当前账户余额,并显示在页面中
			uni.request({
				url:getApp().globalData.webUrl+'/mobile/recharge/getRecharge',  //获取当前账户余额的接口地址
				method:'GET',
				data:{
					Ident_Signboard: this.Signboard,
					Ident_Signguid: this.Signguid
				},
				success: (res) => {
					if (route.publicIf(res.data.status) == false){
						return false;
					}
					if(res.data.isTest == 1){
						this.isTest = true;
					}
					if(res.data.status==0){
						this.balance=res.data.balance.account; //获取当前余额并将其存入this.balance
					}
				},
				fail:(res)=>{
					uni.hideLoading()
					uni.showToast({title: '数据加载失败'+'错误码201',icon:"none"});
				}
			}),
			/* 获取活动信息,满减活动 */
			uni.request({
				url:getApp().globalData.webUrl+'/mobile/recharge/rueles',
				method:'GET',
				data:{
					Ident_Signboard: this.Signboard,
					Ident_Signguid: this.Signguid
				},
				success: (res) => {
					if (route.publicIf(res.data.status) == false){
						return false;
					}
					if(res.data.status==0){
						this.ruelesInfo=res.data.data;
					}
					if(res.data.data.length){
						this.message = '(活动时间：' + res.data.start_time + '至' + res.data.end_time + ')';
					}else{
						this.message = res.data.message;
					}
				},
				fail:(res)=>{
					uni.hideLoading()
					uni.showToast({title: '数据加载失败'+'错误码201',icon:"none"});
				}
			})
		},
		onShow() {
			// #ifndef MP-WEIXIN
				if(this.webData.isPayTrue==true){
					this.payShow = true;
					this.isChecked.window = true;
					this.webData.isPayTrue = false;
				}
			// #endif
		},
		beforeDestroy(){// 用户离开此页面
			// #ifndef MP-WEIXIN
			// 用户不点击窗口自动轮询
			if(!this.isChecked.select && this.isChecked.window){//弹窗弹起但为查询
					let wulala=JSON.parse(uni.getStorageSync("jsonList"));  //获取存储在Storage里的值JSON字符串转对象
					let Signboard = wulala.Ident_Signboard;
					let Signguid = wulala.Ident_Signguid;
					let payOrder = this.webData.payOrder;
					let paytype = this.webData.pmtNum;
					let gowhere = true;
					route.selectIsPay(paytype,Signboard,Signguid,payOrder,gowhere,'false');
				}
			// #endif
			}
	}
</script>

<style lang="scss" scoped>
	// 顶部当前余额
	.back{
		margin: 0.3rem 0.5rem;
		border-radius: 5px;
		height: 30vw;
		position: relative;
		background: #FF0000;
		.top {
			color: #ffffff;
			position: absolute;
			font-size: 0.9rem;
			top: 8%;
			left: 1rem;
		}
		text{
			margin-top: 0;
			margin-bottom: 10px;
			color: #8f8f94;
		}
		.bot {
			font-weight: 600;
			margin: 0px;
			color: #ffffff;
			position: absolute;
			bottom: 0.5rem;
			left: 1rem;
			font-size: 2rem;
		}
	}
	/* 实际到账和支付金额 */
	.block {
		width: 94%;
		padding: 20upx 3%;
		.money_item{
			display: inline-block;
			width: 47vw;
			font-size: 0.8rem;
		}
		view>text {
			font-weight: 550;
			color: #000000;
		}
	}
	// 优惠活动样式
	.rechargeMode {
		width: 94%;
		padding: 20upx 3%;
		.odes {
			font-size: 0.8rem;
			margin: 0px!important;
			flex-grow: 1;
			display: flex;
			line-height: 7vh;
			text {
				flex-grow: 1;
				text-align: right;
			}
		}
		/* 优惠活动 */
		.hd_cont {
			padding: 0 0.5rem;
			view{
				width: 100%;
				height: 4vh;
				// border-bottom: 1px solid #F7F7F7;
				font-size: 0.7rem;
				line-height: 4vh;
				text{
					margin-left:0.5rem;
					margin-bottom: 0;
				}
			}
		}
		.hd_active{
			border:1px solid #06b4fd;
			border-radius: 5px;
			background: #06b4fd;
			color: #FFFFFF;
		}
	}
	.box input{
		text-align: center;
	}
	.block{
		width: 94%;
		padding: 20upx 3%;
		.title{
			width: 100%;
			font-size: 0.8rem;
		}
		.content{
			.my{
				width: 100%;
				height: 120upx;
				display: flex;
				align-items: center;
				font-size: 0.7rem;
				border-bottom: solid 1upx #eee;
			}
			.amount{
				width: 100%;
				
				.list{
					display: flex;
					justify-content: space-between;
					padding: 20upx 0;
					.box{
						width: 30%;
						height: 80upx;
						display: flex;
						justify-content: center;
						align-items: center;
						border-radius: 10upx;
						box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.05);
						font-size: 0.7rem;
						background-color: #f1f1f1;
						color: 333;
						&.on{
							background-color: #FF0000;
							color: #fff;
						}
						uni-input {
							color: #000000;
						    display: inline-flex;
						    align-items: center;
						    justify-content: center;
						    height: 100%;
						    text-align: center;
						}
					}
				}
				
			}
			.pay-list{
				width: 100%;
				border-bottom: solid 1upx #eee;
				.row{
					width: 100%;
					height: 80upx;
					display: flex;
					align-items: center;
					.left{
						width: 100upx;
						flex-shrink: 0;
						display: flex;
						align-items: center;
						image{
							width: 50upx;
							height: 50upx;
						}
					}
					.center{
						width: 100%;
						font-size: 0.7rem;
					}
					.right{
						width: 100upx;
						flex-shrink: 0;
						display: flex;
						justify-content: flex-end;
					}
				}
			}
		}
	}
	.pay{
		margin: 20upx 0;
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.btn{
			width: 90%;
			height: 80upx;
			border-radius: 80upx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			background-color: #FF0000;
			box-shadow: 0upx 5upx 10upx rgba(0,0,0,0.2);
		}
		.tis{
			margin-top: 10upx;
			width: 100%;
			font-size: 0.6rem;
			display: flex;
			justify-content: center;
			align-items: baseline;
			color: #999;
			.terms{
				color: #5a9ef7;
			}
		}
	}
</style>
