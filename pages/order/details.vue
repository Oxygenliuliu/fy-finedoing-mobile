<template>
	<view class="details">
		<!-- 订单状态 -->
		<!-- :key="'order'+index" -->
		<uni-view class="uni-flex uni-column orderDetailStatus"
		v-for="(osl,index) in orderStatusList" :key="'order-'+index" v-if="index==orderStatusKey">
		 	<uni-view class="flex-item flex-item-V">
				<view class="ods-image">
					<image :src="(osl.orderStatusImg)"></image>
				</view>
				<text style="font-size: 0.8rem;font-weight: 600;">{{osl.orderStatusTitle}}</text>
			</uni-view>
			<uni-view class="flex-item flex-item-V">{{osl.orderStatusMsg}}</uni-view>
			<uni-view class="flex-item flex-item-V ">
				
				<button type="default" size="mini" class="btns cancel" @tap="payStatusFun(index)">{{osl.orderStatusBtn}}</button>
				<button type="default" size="mini" class="btns cancel" @tap="uploadImg(1)" v-show="(themeTrue==true||(orderStatusKey==2||orderStatusKey==3))==true?true:false">主体传图</button>
				<button type="default" size="mini" class="btns cancel" @tap="changeOrderStatus()" v-show="orderStatusKey==5?true:false">再次传图</button>
			
			</uni-view>
		</uni-view>
		
		<!-- 物流跟踪 -->
		<view class="userAddress">
			<view class="add-image">
				<image src="../../static/image/delivery.png"></image>
			</view>
			<view class="add-body" v-for="(dL,index) in deliveryList" :key="index" v-if="deliveryList.length - 1 === index">
				<view class="uni-flex uni-row">
					<text style="font-size: 0.7rem;font-weight: 600;">{{dL.AcceptStation}}</text>
				</view>
				<view class="uni-flex uni-row">
					<text style="font-size: 0.7rem;color: #999999;" >{{dL.AcceptTime}}</text>
				</view>
			</view>
		</view>

		<!-- 客户收货地址 -->
		 <view class="userAddress" >
			<view class="add-image">
				<image src="../../static/image/address.png"></image>
			</view>
			<view class="add-body">
				<view class="uni-flex uni-row">
					<text style="font-size: 0.7rem;">{{addressList.linkman}}  {{addressList.phone}}</text>
				</view>
				<view class="uni-flex uni-row">
					<text style="font-size: 0.7rem;color: #999999;">{{addressList.address}}</text>
				</view>
			</view>
		</view>	
		<order-Details @getImg='getImg' :options="orderDetails" :tyName="tyName" :progress="progressList" :orderNum="orderDetailsLength" :orderNO="orderDataNO" :orderid="orderId" :orderbs="orderStatusKey===2?true:false"/>
		<view v-for="(orderDatas,indexs) in orderData" :key="indexs">
			<!-- 商品订单详情 -->
			<view class="information">
				<view>
					<view><text class="orderHeaderInfo">订单编号：</text><text class="orderHeaderContent">{{orderDatas.NO == null ? '' : orderDatas.NO}}</text></view>
					<view><text class="orderHeaderInfo">下单时间：</text><text class="orderHeaderContent">{{orderDatas.date}}</text></view>
					<view><text class="orderHeaderInfo">支付方式：</text><text class="orderHeaderContent">{{orderDatas.payname}}</text></view>
					<view><text class="orderHeaderInfo">支付时间：</text><text class="orderHeaderContent">{{orderDatas.paydata}}</text></view>
					<view><text class="orderHeaderInfo">配送方式：</text><text class="orderHeaderContent">{{orderDatas.logistics}}</text></view>
				</view>
				<view>
					<view><text class="orderHeaderInfo">发票类型：</text><text class="orderHeaderContent">{{orderDatas.invoice_type=='不开'?'不开票':orderDatas.invoice_type+'('+orderDatas.invoice+')'}}</text><text class="viewInvoice" @tap="ckInvoice">查看发票({{invoiceList.length?invoiceList.length:'无'}})</text></view>
				</view>
			</view>

			<!-- 实付金额 -->
			<view class="actualPayment">
				<view class="ap_center">
					<text>商品金额</text><text class="ap_right"> ￥ {{orderMoney}}</text>
				</view>
				<view class="ap_center">
					<text>税额</text><text class="ap_right">+ ￥ {{orderDatas.taxpoint}}</text>
				</view>
				<view class="ap_center">
					<text>运费</text><text class="ap_right">+ ￥ {{orderDatas.chunkmoney}}</text>
				</view>
				<view class="ap_bottom"><text class="ap_left">实付金额:</text><text class="ap_money"> ￥ {{orderDatas.total}}</text></view>
			</view>
			<!-- 历史修改记录 -->
			<view class="history" :class="{active:historyOld}">
				<view class="historyTite">
					<text class="orderHeaderInfo">历史修改记录</text>
				</view>
				<view class="historyInfo">
					<div class="oldInfo" v-for="(oldInfos,indexk) in oldInfo" :key="indexk">
						<span class="text_hidden">{{oldInfos.os_cd}}</span>
						<span class="text_hidden">{{oldInfos.linkman}}</span>
						<span id="xglsinfo_id" @tap="oldClick(oldInfos.os_id)">详情</span>
					</div>
				</view>
			</view>
		</view>
	<view v-show='payShow' >
	<unipay @payResult='payResult' :webData='webData' @editOrder='editOrder'></unipay>
	</view>
	</view>
</template>
<script>
	import route from "@/common/public.js"
	import orderDetails from '@/components/customize/orderdetail.vue'
	import unipay from "@/components/uni-popup/uni-isPay.vue"
	export default {
		components: {
			orderDetails,unipay
		},
		data() {
			return {
				themeTrue: false,
				webData:{},// webView需要的数据
				imgUrl :'',  //图片访问ip
				Signboard: '',
				Signguid: '',
				payShow: false,
				orderStatusKey: 4,//订单状态标识
				orderStatusList:[
					{orderStatusNum:0,orderStatusImg:'../../static/image/finish.png',orderStatusTitle:'已完成',orderStatusMsg:'亲！您的订单已结清，祝您购物愉快！',orderStatusBtn:'再来一单'},
					{orderStatusNum:1,orderStatusImg:'../../static/image/tips.png',orderStatusTitle:'未付款',orderStatusMsg:'亲！您的订单还未付款，请尽快支付哟！',orderStatusBtn:'去支付'},
					{orderStatusNum:2,orderStatusImg:'../../static/image/finish.png',orderStatusTitle:'已付款',orderStatusMsg:'亲！您的订单已支付，我们会尽快安排发货！',orderStatusBtn:'确认收货'},
					{orderStatusNum:3,orderStatusImg:'../../static/image/tips.png',orderStatusTitle:'',orderStatusMsg:'亲！您的订单状态无法查询，请联系我们客服哟！',orderStatusBtn:''},
					{orderStatusNum:4,orderStatusImg:'',orderStatusTitle:'',orderStatusMsg:'',orderStatusBtn:''},
					{orderStatusNum:5,orderStatusImg:'../../static/image/finish.png',orderStatusTitle:'已传图',orderStatusMsg:'亲！您的订单已传图！',orderStatusBtn:'确认收货'},
				],
				orderId: "", //接收下单页传过来的订单序号
				orderMsg: "", //订单详细信息获取失败时的提示消息
				orderDetails: [], //订单明细
				tyName:'',//产品类别名
				orderData: "", //订单信息
				orderMoney:"",//商品金额
				orderDetailsLength: 0,
				
				oldInfo: "", //历史记录
				historyOld: false, //历史记录的显示隐藏
				
				org:"", //请求的域名地址
				progressList:[],//当明细流程数组
				invoiceList:{},//发票对象
				addressList:{},
				unExist:'',
				deliveryList: [],
				deliveryCodes:[],
				payid:0,//支付方式
				orderDataNO: '',
				isChecked: {'window':false,'select':false},// 弹窗是否弹起 是否手动查询?
			}
		},
		methods: {
			changeOrderStatus(){ //订单明细里面点击按钮改变状态
				uni.request({
					url: getApp().globalData.webUrl + '/mobile/order/conversion', //转化订单
					method:'POST',
					data:{
						order_num: this.orderData[0].NO,
						convert_it: 2
					},
					success:(res)=> {
						if(res.data.status == 0){
							this.orderStatusKey = 2;
							uni.showToast({
								title: '您可以传图了',
								icon: 'none',
								duration: 2000
							})
							this.themeTrue = true;
						}else{
							uni.showToast({
								title:res.data.message,
								icon:'none',
								duration:2000
							})
						}
					},
					fail:(res)=> {
					}
					})
			},
			getImg(res){// 更改明细地址
			},
			editOrder(){
				this.orderStatusKey = 2;
			},
			leave(ee){//webView回调函数
				this.webData = ee;
				this.os_id = ee.os_id;
			},
			payResult() {
				this.payShow = false;
				this.isChecked.select = true;
			},
			uploadImg(orderbs) {
				uni.navigateTo({
					url: '../../pages/order/fileUpload?orderid=' + this.orderId + '&orderno=' + this.orderData[0].NO + '&orderbs=' + orderbs + '&detailid=' + '' + '&product=' + this.tyName,
				})
			},
			getDelivery(exp) {
				let _that = this,
					dlcode = '',
					jsonList = uni.getStorageSync("jsonList"),//获取存储在Storage里的值
					datas = JSON.parse(jsonList); //JSON字符串转对象
				
				if(exp.length == 0){
					return false;
				}
				dlcode = exp.shift();
				uni.request({
					method: "GET",
					url: getApp().globalData.webUrl + "/mobile/order/logistics",
					dataType: "json",
					data: {
						Ident_Signboard: datas.Ident_Signboard,
						Ident_Signguid: datas.Ident_Signguid,
						express: dlcode
					},
					success: function(res) {
						if (res.data.logisticsNodes.length > 0) {
							_that.deliveryList = res.data.logisticsNodes
						}else{
							_that.getDelivery(_that.deliveryCodes)
						}
					},
					fail: function(res) {
						uni.showToast({
							title: '获取订单明细失败' + '错误码201',
							icon: "none"
						});
					}
				})
			},
			checkDelivery(progress) {
				if(progress.delivered == 1){
					uni.navigateTo({
						url: '/pages/order/delivery?express=' + progress.delivercode + '&orderNO=' + this.orderData[0].NO
					})
				}else{
					uni.showToast({title: '未查询到当前明细物流信息，请稍候！',icon: 'none',duration: 3000})
				}
			},
			/* 点击详情触发的事件 */
			oldClick(evt) {
				let osId = evt;
				this.historyOld = true;
				uni.request({
					url: getApp().globalData.webUrl + '/mobile/order/orderParticular',
					method: 'GET',
					data: {
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
						orderid: osId,
						check: 1
					},
					success: (res) => {
						if (route.publicIf(res.data.status) == false){
							return false;
						}
						if (res.data.status == 0) {
							this.orderData = res.data.orderData; //将获得的订单信息赋值存给this.orderData
							this.orderDetails = res.data.orderDetail; //将获得的订单明细赋值存给this.orderDetail
							uni.showToast({
								title: res.data.message,
								icon: 'none'
							})
						}else {
							this.orderMsg = res.data.message;
							// this.orderTips = false;
						}
					},
					fail:(res)=>{
						uni.hideLoading()
						uni.showToast({title: '获取失败'+'错误码201',icon:"none"});
					}
				})
			},
			/* 点击查看发票触发的事件 */
			ckInvoice(evt){
				if(this.invoiceList.length == undefined || this.invoiceList.length<=0){
					uni.showToast({
						title:'当前没有可查看的发票',
						icon:'none'
					})
					return false;
				}else{
					uni.navigateTo({
						url:'../order/invoiceDetails?org='+this.org +'&from_cs=0'
					});
				}
			},
			payStatusFun(flag){
				// 定位
				switch (flag){
					case 0:
						uni.navigateTo({
							url: '../order/payment?Ident_Signboard='+this.Signboard+'&Ident_Signguid='+this.Signguid+'&orderid='+this.orderId+'&l=4'
						})
						break;
					case 1:
						this.payment(this.Signboard,this.Signguid,this.orderId,this.payid);
						break;
					case 2:
						uni.request({
							url: getApp().globalData.webUrl+'/mobile/order/confirm',
							method: 'GET',
							data: {
								Ident_Signboard: this.Signboard,
								Ident_Signguid: this.Signguid,
								orderid: this.orderId
							},
							success: (result) => {
								if (route.publicIf(result.data.status) == false){
									return false;
								}
								if(result.data.status==0){
									uni.showToast({
										title: '已收货完成',
										duration: 3000,
									})
									this.orderStatusKey = 0
								} else{
									uni.showToast({
										title: result.data.message+'，收货失败',
										icon:'none',
										duration: 3000
									})
								}
							},
							fail:(res)=>{
								uni.hideLoading()
								uni.showToast({title: '收货失败'+'错误码201',icon:"none"});
							}
						})
						break;
					case 3:
						break;
					case 5: // 从已传图变成已完成
						uni.request({
							url: getApp().globalData.webUrl+'/mobile/order/confirm',
							method: 'GET',
							data: {
								Ident_Signboard: this.Signboard,
								Ident_Signguid: this.Signguid,
								orderid: this.orderId
							},
							success: (result) => {
								if (route.publicIf(result.data.status) == false){
									return false;
								}
								if(result.data.status==0){
									uni.showToast({
										title: '已收货完成',
										duration: 3000,
									})
									this.orderStatusKey = 0
								} else{
									uni.showToast({
										title: result.data.message+'，收货失败',
										icon:'none',
										duration: 3000
									})
								}
							},
							fail:(res)=>{
								uni.hideLoading()
								uni.showToast({title: '收货失败'+'错误码201',icon:"none"});
							}
						})
						break;
					default:
						break;
				}
			},
			//支付接口封装
			payment(Signboard,Signguid,os_id,payid){
				uni.showLoading({
					title:'支付中...'
				})
				// #ifdef MP-WEIXIN
				wx.login({
				  success: res => {
				    var code = res.code;
					uni.request({
						url:getApp().globalData.webUrl+'/mobile/order/pay_pay',
						method:'POST',
						data: {
							Ident_Signboard: Signboard,
							Ident_Signguid: Signguid,
							id:os_id,
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
											setTimeout(function(){
												uni.request({
													url: getApp().globalData.webUrl+'/mobile/wechat/Repquery',
													method: 'GET',
													data:{
														Ident_Signboard: Signboard,
														Ident_Signguid: Signguid,
														tradeno: data['out_trade_no']
													},
													success: (res) => {
														var state = res.data.status;
														if(state == 0){
															uni.showToast({title: '订单完成!',icon:"none",duration:1000});
															/* stat 转化订单或上传图片*/
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
																						route.orderOrSendPi(this.orderId,sendPicture)
																					}else{
																						sendPicture.msg = false;
																						uni.setStorageSync('sendPicture',JSON.stringify(sendPicture))
																			}
																			}
																	})
															},1100)
															/* end 转化订单或上传图片*/
														}else{
															uni.showToast({title: '订单支付失败!',icon:"none"});
														}
													},
													fail:(res)=>{
														uni.showToast({
															title: '接口连不上!' + res.errMsg,
															icon: 'none'
														});
													},
													complete() {
														setTimeout(function(){
															uni.redirectTo({
																url:'/pages/order/orderpageinfo'
															})
														},1000)
													}
												})
											},1000)
										}
								    },
								    fail: function (err) {
								        uni.showToast({
								        	title: '支付已取消',
								        });
								    }
								})
							}else if(res.data.status == 0){
								uni.navigateTo({
									url: 'balance?orderNum='+ res.data.orderNum +'&money='+res.data.money+'&amount='+res.data.amount+'&usable='+res.data.usable
								})
							}else{
								uni.showToast({
									title: res.data.RETURN_MSG,
								});
							}
						},complete(res) {
							uni.hideLoading();
						}
					})
				  }
				})
				// #endif
				// #ifndef MP-WEIXIN
				uni.request({
					url: getApp().globalData.webUrl+'/mobile/order/pay_pay',
					method: 'GET',
					data:{
						Ident_Signboard: Signboard,
						Ident_Signguid: Signguid,
						id:os_id,
					},
					success: (res) => {
						let checkPayResult = {
							'payOrder': res.data.orderNum,
							'pmtNum': '',
							'webUrl': '',
							'isPayTrue':false,
							'os_id': os_id,
							'sendPicture':true
						}
						 /* 1是微信,2是支付宝 */
						 let webUrl = '';
						if(res.data.pay_link){
							webUrl = res.data.pay_link;
							checkPayResult.pmtNum = 1;
							checkPayResult.webUrl = webUrl;
							this.webData = checkPayResult;
							uni.navigateTo({
								url: '../../pages/user/payWebView',
							})
						}else if(res.data.pay_form){
							// #ifdef MP-WEIXIN
							uni.showToast({
								title: '暂不支持支付宝支付，请在其他端口支付或者重新下单',
								icon: 'none'
							})
							return false;
							// #endif
							// #ifndef MP-WEIXIN
							webUrl = res.data.pay_form;
							checkPayResult.pmtNum = 2;
							checkPayResult.webUrl = webUrl;
							this.webData = checkPayResult;
							// #ifdef APP-PLUS
							uni.navigateTo({
								url: '../../pages/user/payWebView',
							})
							// #endif
							// #ifdef H5
							let div = document.createElement('div')
							div.innerHTML = webUrl //此处form就是后台返回接收到的数据
							document.body.appendChild(div);
							document.forms[0].submit();
							setTimeout(()=>{
								this.payShow = true
							},1000)
							// #endif
							// #endif
							}
						else{
							uni.navigateTo({
								url: 'balance?orderNum='+ res.data.orderNum +'&money='+res.data.money+'&amount='+res.data.amount+'&usable='+res.data.usable
							})
						}
					},
					fail:(e)=>{
						uni.showToast({title: '加载失败'+'错误码201',icon:"none"});
					},
					complete(res) {
						uni.hideLoading();
					}
				})
				// #endif
			},
		},
		onLoad(options) {
			this.imgUrl = getApp().globalData.webUrl;  //图片访问IP
			this.unExist = route.unExist; //图片不存在时，替代图片地址
			var jsonList = uni.getStorageSync("jsonList");
			var data = JSON.parse(jsonList); //JSON字符串转对象
			this.Signboard = data.Ident_Signboard;
			this.Signguid = data.Ident_Signguid;
			this.org=data.org;
			this.orderId = options.orderid;
			uni.request({
				url: getApp().globalData.webUrl + '/mobile/order/orderParticular',
				method: 'GET',
				data: {
					Ident_Signboard: this.Signboard,
					Ident_Signguid: this.Signguid,
					orderid: this.orderId
				},
				success: (res) => {
					if (route.publicIf(res.data.status) == false){
						return false;
					}
					if (res.data.status == 0) {
						console.log(res)
						this.payid = res.data.orderData[0].payid;
						switch (res.data.orderData[0].saname){
							case '已完成':
								this.orderStatusKey = 0;
								break;
							case '未付款':
								this.orderStatusKey = 1;
								break;
							case '已付款':
								this.orderStatusKey = 2;
								break;
							case '':
								this.orderStatusKey = 3;
								break;
							case '已传图':
								this.orderStatusKey = 5;
								break;
							default:
								break;
						}
						if(res.data.orderData.length>0){
							let arr = {};
							arr.linkman=res.data.orderData[0].linkman;
							arr.phone=(res.data.orderData[0].phone).replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2");
							arr.address=res.data.orderData[0].address;
							this.orderMoney=(res.data.orderData[0].order_money).toFixed(2);
							this.addressList = arr;
						}
						if(res.data.orderDetail.length>0){
							this.orderDetailsLength = res.data.orderDetail.length
							this.tyName=res.data.orderDetail[0].ty_name;
							// 如果订单明细大于1,获取每个明细,对应的流程
							for (var i = 0; i < res.data.orderDetail.length; i++) {
								let detailList='{"detailidlists":['+res.data.orderDetail[i].od_id+']}';
								uni.request({
									// #ifndef MP-WEIXIN
									url:'http://'+data.org+"/services/order/progress?token=" + data.softdog + "&dbname="+data.dbname+"&data=" + detailList,
									// #endif
									// #ifdef MP-WEIXIN
									url: route.varCsQuery+"/services/order/progress?token=" + data.softdog + "&dbname="+data.dbname+"&data=" + detailList,
									// #endif
									method:'GET',
									success: (res) => {
										if (route.publicIf(res.data.status) == false){
											return false;
										}
										this.progressList.push(res.data.QueryResults[0]);
										if (i == this.progressList.length) {
											var flag = false;
											for (var k = 0; k < this.progressList.length; k++) {
												if (this.progressList[k].delivered == 1) {
													this.deliveryCodes.push(this.progressList[k].delivercode)
													flag = true
												}
											}
											if(!flag){
												this.deliveryList = [{AcceptStation:'暂无物流信息',AcceptTime:''}]
											}
											this.getDelivery(this.deliveryCodes)
										}
									},
									fail:(res)=>{
										this.deliveryList = [{AcceptStation:'流程查询失败',AcceptTime:''}]
										uni.showToast({title: '流程查询失败'+'错误码201',icon:"none"});
									}
								})
							}
						}
						this.orderData = res.data.orderData; //将获得的订单信息赋值存给this.orderData
						this.orderDataNO = res.data.orderData[0].NO;
						for (let k in res.data.orderDetail) {
							res.data.orderDetail[k].img =  route.imgIsExist(res.data.orderDetail[k].img);
						}
						this.orderDetails = res.data.orderDetail; //将获得的订单明细赋值存给this.orderDetail
						this.oldInfo = res.data.oldInfo; //将获得的历史记录信息存进this.oldInfo
					} 
				},
				fail:(res)=>{
					uni.hideLoading()
					uni.showToast({title: '请求失败'+'错误码201',icon:"none"});
				}
			})
			
			/* 调用发票查询的接口 */

			uni.request({
				// #ifndef MP-WEIXIN
				url:'http://'+data.org+'/services/invoice/query',
				// #endif
				// #ifdef MP-WEIXIN
				url:route.varCsQuery+'/services/invoice/query',
				// #endif
				method:'GET',
				data:{
					token:data.softdog,
					dbname:data.dbname,
					orderid:this.orderId,
					from_cs: 0
				},
				success: (res) => {
					if (route.publicIf(res.data.status) == false){
						return false;
					}
					if(res.data.invoices.length>0){
						this.invoiceList= res.data.invoices;
					}
				},
				fail:(res)=>{
					uni.showToast({title: '发票查询失败'+'错误码201',icon:"none"});
				}
			})
			
		},
		onShow(e){
		   if(this.webData.isPayTrue==true){// 是否弹起完成支付弹窗
		   		this.payAgain = true;// 不允许形成新单子
		   		this.isChecked.window = true
		   		this.payShow = true;
		   		this.webData.isPayTrue = false;
		   }
		},
		onUnload(){// 用户离开此页面
			route.comCheckout(this.isChecked.select,this.isChecked.window,this.webData); //自动轮询
		}
	}
</script>

<style scoped lang="scss">
	@import "../../common/uni.css";
	@import "../../common/css/details.css";

	page {
		color: #333333;
		background-color: #F7F7F7;
	}
</style>
