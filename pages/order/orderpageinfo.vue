<template>
  <view>
	<view class="container">
			<scroll-view class="scroll-container" scroll-x scroll-with-animation v-if="items.length > 1">
				<view :class="['scroll-item', { active: index == checkNum }]" 
				v-for="(item, index) in items"
				:key="index" 
				@tap="Whole(index)">
				{{ item.name }}
				</view>
			</scroll-view>
		</view>
		
		<view class="Listview">
			<view class="margin bgcColor"  v-for="(item,index) in orderSubject" :key="index">
				<view >
					<!-- 单号和状态 -->
					<view class="flex-row" style="display: flex;flex-direction: row;"  @tap="orderTap(item.os_id)">
						<view class="flex-view-item orderNO">订单号：<text>{{item.NO == null ? '':item.NO}}</text></view>
						<view class="flex-view-item orderState"><text>{{item.saname}}</text><i class="uni-icon uni-icon-arrowright"></i></view>
					</view>
					<!-- 商品 -->
					<view class="time">{{item.os_cd}}</view>
					<view v-for="(items, indexs) in item.detail" :key="indexs"  @tap="orderTap(item.os_id)">
						<view class="flex-row" style="display: flex;flex-direction: row;">
							<view class="flex-view-item orderImg">
								<!-- #ifdef H5 -->
								<img :src="encodeURI(items.od_img)"/>
								<!-- #endif -->
								<!-- #ifndef H5 -->
								<image :src="items.od_img"></image>
								<!-- #endif -->
							</view>
							<view class="flex-view-item orderInfo">
								<text class="orderDetailInfo orderD_typeName">{{items.ty_name}}</text>
								<view class="orderDetailInfo orderD_size">规格：<text>{{items.od_specs}}</text>数量：<text>{{items.od_quantity}}</text></view>
								<text class="orderDetailInfo orderD_total">￥ {{items.od_total}}</text>
							</view>
						</view>
					</view>
					<!-- 实付金额 -->
					<view class="zongPrice">
						<text class="shiTitle">共{{item.detail.length}}件商品，合计：</text><text> ￥ {{item.money}}</text>
					</view>
					<!-- 按钮 -->
					<view class="flex-row priceBtn">
						<view v-if="(item.os_status == 0)" class="btn-box"><!-- 未支付 -->
							<button type="default" size="mini" class="btns cancel" @tap="cancelOrder(index,item.os_id)">取消订单</button>
							<button type="warn" size="mini" class="btns pay" @tap="Repayment(index,item.payid)">付款</button>
						</view>
						<view v-else-if="(item.os_status) == 1" class="btn-box"><!-- 已付款 -->
						<button type="warn" size="mini" class="btns confirm pay" @tap="comfirmOrder(index,item.os_id)">确认收货</button>
							<button type="warn" size="mini" class="btns another pay" @tap="goDetails(item.NO, item.os_id)">前往传图</button>
							<button type="warn" size="mini" class="btns another pay" @tap="goPay(index)">再来一单</button>
						</view>
						<view v-else-if="(item.os_status) == 2" class="btn-box"><!--已完成-->
							<button type="warn" size="mini" class="btns another pay" @tap="goPay(index)">再来一单</button>
						</view>
						<view v-else-if="(item.os_status) == 3" class="btn-box"><!-- 已退款 -->
							<button type="warn" size="mini" class="btns another pay" @tap="goPay(index)">再来一单</button>
						</view>
						<view v-else-if="(item.os_status) == 8" class="btn-box"><!-- 已传图 -->
							<button type="warn" size="mini" class="btns confirm pay" @tap="comfirmOrder(index,item.os_id)">确认收货</button>
							<button type="warn" size="mini" class="btns another pay" @tap="goDetails(item.NO, item.os_id)">前往传图</button>
							<button type="warn" size="mini" class="btns another pay" @tap="goPay(index)">再来一单</button>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 加载更多数据提示 -->
		<text class="loading-text">{{loadingType === 0 ? contentText.contentdown : (loadingType === 1 ? contentText.contentrefresh : contentText.contentnomore)}}</text>
	<view v-show='payShow' >
	<unipay @payResult='payResult' :webData='webData' @editOrder='editOrder'></unipay>
	</view>
	</view>
</template>
<script>
	import unipay from "@/components/uni-popup/uni-isPay.vue"
	import loadMore from '@/components/uni-load-more/uni-load-more.vue';
	import route from "@/common/public.js";
	export default {
		components: {'uni-load-more': loadMore,unipay},
		data() {
			return {
				loadingType: 0,  //用于判断显示的加载提示
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				webData:{},// webView需要的数据
				isChecked: {'window':false,'select':false},// 弹窗是否弹起 是否手动查询?
				payShow: false,
				imgUrl :'',  //图片访问ip
				orderSubject: [],  //订单主体	
				checkNum : 0,
				items:[{
					value:'red',
					name:'全部',
					typeId:"-1"
				},
				{
					value:'red',
					name:'未支付',
					typeId:"0"
				},
				{
					value:'red',
					name:'已支付',
					typeId:"1"
				},
				{
					value:'red',
					name:'已完成',
					typeId:"2"
				},
				{
					value:'red',
					name:'已退款',
					typeId:"3"
				},
				{
				value:'red',
				name:'线下订单',
				typeId:"4"	
				}],
				page: 1,
				lastpage: '',  //最后一页
				typeid: '-1',  //类别ID
				Signboard: '',  //令牌
				Signguid: '',  //guid
				balanceNum: '',  //辨别是不是从余额支付页跳过来的
				// showMask:false, //返回按钮：遮罩层的显示隐藏
				isThumbnail:false,//是否是缩略图标识
				defaulImg:'this.src="' + require('../../static/image/unExist.png') + '"',//图片地址获取失败，报错404时，显示默认图片
				os_id: '',//订单号
			};
		},
		methods: {
			editOrder() {
				this.orderSubject.forEach(item =>{
					if(this.os_id == item.os_id){
						item.saname = '已付款';
						item.os_status = 1;
					}
				})
			},
			editPi() {
				this.orderSubject.forEach(item =>{
					if(item.os_id == this.os_id){
						item.saname = '已传图';
						item.os_status = 8;
					}
				})
			},
			leave(ee){ //webView回调函数
				this.webData = ee;
				this.os_id = ee.os_id;
			},
			//图片地址获取失败，报错404时，显示默认图片
			imageError: function(e) {
			},
			// 再来一单按钮
			goPay(e){
				uni.navigateTo({
					url: '../order/payment?Ident_Signboard='+this.Signboard+'&Ident_Signguid='+this.Signguid+'&orderid='+this.orderSubject[e].os_id+'&l=4',
				})
			},
			goDetails(no,os_id){
				uni.navigateTo({
					url: 'details?orderid='+ os_id
				})
			},
			// 付款按钮
			Repayment(e,payid){
				if(this.orderSubject[e].money == '0.00'){
					uni.showToast({
						title:'总金额为0元，请核实订单金额是否正确',
						icon:'none',
						duration:3000
					})
					return false;
				}
				// 定位
				this.payment(this.Signboard,this.Signguid,this.orderSubject[e].os_id,payid);
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
				////
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
						if(res.data.status == 1){
							uni.showToast({
								title:'订单异常',
								duration:1000,
								icon:'none'
							})
							return false;
						}
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
							console.log(webUrl,555)
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
						}else{
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
			payResult() {
				this.payShow = false
				this.isChecked.select = true;
				this.sendPicture = true;
			},
			// 点击切换类别
			Whole(index){
				this.loadingType = 0;
				this.page = '';
				this.checkNum = index;
				this.typeid = this.items[index].typeId;  //typeid  状态类别id
				if(this.typeid == 4){
					uni.navigateTo({
						url:'/pages/order/csOrder'
					})
				}
				else if(this.typeid == -1){  //全部
					this.getOrder();
				}else {
					this.stateType();
				}
			},
			// 点击订单:跳转至订单详情
			orderTap(e){
				uni.navigateTo({
					url: 'details?orderid='+e
				})
			},
			// 取消订单
			cancelOrder(evt,osId){
				var Signboard=this.Signboard;
				var Signguid=this.Signguid;
				var _that = this;
				uni.showModal({
					title: '提示',
					content: '是否确认取消该订单',
					success: function (res) {
						if (res.confirm) {
							uni.request({
								url: getApp().globalData.webUrl+'/mobile/order/cancel',
								method: 'GET',
								data: {
									Ident_Signboard: Signboard,
									Ident_Signguid: Signguid,
									orderid: osId
								},
								success: (result) => {
									if (route.publicIf(result.data.status) == false){
										return false;
									}
									if(result.data.status==0){
										uni.showToast({
											title: '订单取消成功',
											icon:'none',
											duration: 3000,
											complete() {
												_that.orderSubject.splice(evt,1);
											}
										})
									} else{
										uni.showToast({
											title: result.data.message+'订单取消失败',
											icon:'none',
											duration: 3000
										})
									}
								},
								fail:(e)=>{
									uni.hideLoading()
									uni.showToast({title: '订单取消失败'+'错误码201',icon:"none"});
								}
							})
						}
					}
				});
			},
			// 确认收货[[
			comfirmOrder(evt,osId){
				var _that = this;
				uni.showModal({
					title: '提示',
					content: '是否确认收货?',
					confirmColor:'#E93B3D',
					success: function (res) {
						if (res.confirm) {  //点击确认
							uni.request({
								url: getApp().globalData.webUrl+'/mobile/order/confirm',
								method: 'GET',
								data: {
									Ident_Signboard: _that.Signboard,
									Ident_Signguid: _that.Signguid,
									orderid: osId
								},
								success: (result) => {
									if (route.publicIf(result.data.status) == false){
										return false;
									}
									if(result.data.status==0){
										uni.showToast({
											title: '已收货完成',
											duration: 3000,
											complete() {
												_that.orderSubject.forEach(item=> {
													if(item.os_id == osId){
														item.saname = '已完成'
														item.os_status = 2 
													}	
												})
											}
										})
									} else{
										uni.showToast({
											title: result.data.message+'，收货失败',
											icon:'none',
											duration: 3000
										})
									}
								},
								fail:(e)=>{
									uni.hideLoading()
									uni.showToast({title: '收货失败'+'错误码201',icon:"none"});
								}
							})
						}
					}
				});
			},
			getOrder(){
				
				var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
				var datas= JSON.parse(wulala);//JSON字符串转对象
				this.Signboard = datas.Ident_Signboard;  //给Signboard 赋值
				this.Signguid = datas.Ident_Signguid;  //给Signguid 赋值
				uni.removeStorage({key:'orders'});  //清除payment页面存储的orders判断值
				this.loadingType = 0;
				uni.showNavigationBarLoading();
				uni.request({
					url: getApp().globalData.webUrl+'/mobile/order/OwnOrder',
					data: {
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid
					},
					method: 'GET',
					success: res => {
						if (route.publicIf(res.data.status) == false){
							return false;
						}
						if(res.data.status == 0){
							if(res.data.count<3){
								this.loadingType = 2;
							}
							if(res.data.order == ''){
								uni.showToast({title: '暂未查询到订单',icon:"none"});
							}else{
								for (var i = 0; i < res.data.order.length; i++) {
									for (let k in res.data.order[i].detail) {
										res.data.order[i].detail[k].od_img =  route.imgIsExist(res.data.order[i].detail[k].od_img);
									}
								}
								this.orderSubject = res.data.order;  //给orderSubject 订单主体赋值
								this.lastpage = res.data.last
							}
						}
						uni.hideNavigationBarLoading();
						uni.stopPullDownRefresh();//得到数据后停止下拉刷新
					},
					fail:(e)=>{
						uni.hideLoading()
						uni.showToast({title: '订单信息加载失败'+'错误码201',icon:"none"});
					}
				})
			},
			// 切换类别函数
			stateType(){
				this.loadingType = 0;
				uni.showNavigationBarLoading();
				uni.request({
					url: getApp().globalData.webUrl+'/mobile/order/orderTypes',
					method: 'GET',
					data: {
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
						typesid: this.typeid
					},
					success: (res) => {
						if (route.publicIf(res.data.status) == false){
							return false;
						}
						if(res.data.status == 0){
							if(res.data.count<3){
								this.loadingType = 2;
							}
							if(res.data.order == ''){
								this.orderSubject = '';  //给orderSubject 订单主体赋值
								uni.showToast({title: '暂未查询到订单',icon:"none"});
								this.loadingType = 2;
							}else{
								this.orderSubject = res.data.order;//给orderSubject 订单主体赋值
								// 图片地址加域名
								this.addHttp();
								this.page = res.data.current
								this.lastpage = res.data.last
							}
						}
						uni.hideNavigationBarLoading();
						uni.stopPullDownRefresh();//得到数据后停止下拉刷新
					},
					fail:(e)=>{
						uni.hideLoading()
						uni.showToast({title: '加载失败'+'错误码201',icon:"none"});
					}
				})
			},
			addHttp(){ // 为图片加域名
				this.orderSubject.forEach(item =>{
					item.detail.forEach(i =>{
						if(i.od_img.indexOf('http') == -1){
							i.od_img = getApp().globalData.webUrl  + i.od_img;
						}
					})
				})
			},
			orderOrSendPi(orderNum,sendPicture,orderWay){
				uni.request({
					url: getApp().globalData.webUrl + '/mobile/order/conversion', //转化订单
					method:'POST',
					// header: {
					// 	"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" //自定义请求头信息
					// },
					data:{
						order_num: orderNum,
						convert_it: orderWay
					},
					success:(res)=> {
						if(res.data.status == 0){
							sendPicture.msg = false;
							uni.setStorageSync('sendPicture',JSON.stringify(sendPicture))
							this.orderSubject.forEach(i=>{
								if(i.seat == orderNum){
									i.saname = '已传图';
									i.os_status = 8;
								}
							})
							uni.showToast({
								title:'提交订单成功',
								icon:'none',
								duration:1000
							})
						}else{
							uni.showToast({
								title:'提交订单失败',
								icon:'none',
								duration:1000
							})
						}
					},
					fail:()=> {
						uni.showToast({
							title:'提交订单失败,请稍后重试',
							icon:'none',
							duration:1000
						})
					}
				})
			}
		},
		onLoad: function (options){
			this.imgUrl = getApp().globalData.webUrl;  //图片访问IP
			this.getOrder();  //调用获取数据函数
			if(options.orderNum == 'balance'){
				this.balanceNum = options.orderNum;  //判断是否从余额支付页跳转过来的
			}
		},
		onShow() {
			if(this.webData.isPayTrue==true){// 是否弹起完成支付弹窗
					this.payAgain = true;// 不允许形成新单子
					this.isChecked.window = true
					this.payShow = true;
					this.webData.isPayTrue = false;
			}
			// 是否立即转换为订单或者传图
			// let senPi = uni.getStorageSync('sendPicture')
			// if(senPi){
			// 	let sendPicture = JSON.parse(uni.getStorageSync('sendPicture'));
			// if(sendPicture.msg == true){
			// 	uni.showModal({
			// 			title:"提示",
			// 			content: '是否立即提交订单',
			// 			cancelText:'等待传图',
			// 			confirmText:'提交订单',
			// 			success: res => {
			// 					if(res.confirm) {
			// 						sendPicture.msg = false;
			// 						uni.setStorageSync('sendPicture',JSON.stringify(sendPicture))
			// 						this.orderOrSendPi(sendPicture.data.tradeno,sendPicture,'1')
			// 					}else{
			// 						sendPicture.msg = false;
			// 						uni.setStorageSync('sendPicture',JSON.stringify(sendPicture))
			// 						setTimeout(()=>{
			// 							uni.navigateTo({
			// 								url: 'details?orderid='+ sendPicture.data.detailsId 
			// 							})
			// 						},1000)
			// 			}
			// 			}
			// 	})
			// }
			// }
		},
		// 返回
		onBackPress(options) {
			// 判断 this.balanceNum== balance的话就是从余额支付页跳转过来的 就直接返回到首页
			if(this.balanceNum == 'balance'){
				if (options.from == "navigateBack" || options.from == "backButton") {
				   uni.navigateTo({
						url: '../index/index'
				   })
				   return true;
				}
		   }
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.page = 1;
			if(this.typeid == -1){  //全部
				this.getOrder();
			}else {
				this.stateType();
			}
		},
		// 上拉加载
		onReachBottom:function(){
			if(this.page == this.lastpage){
				this.loadingType = 2;
				uni.hideNavigationBarLoading();//关闭加载动画
				return false;
			}
			this.loadingType = 1;
			uni.showNavigationBarLoading();//显示加载动画
			if(this.typeid == -1){
				uni.request({
					url: getApp().globalData.webUrl +'/mobile/order/OwnOrder',
					method:'GET',
					data:{
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
						page:this.page + 1,
					},
					success: (res) => {
						if (route.publicIf(res.data.status) == false){
							return false;
						}
						if(res.data.status == 0){
							for (var i = 0; i < res.data.order.length; i++) {
								this.orderSubject.push(res.data.order[i]);
							}
							this.addHttp();
							this.page = res.data.current;
						}
						this.loadingType = 0;//将loadingType归0重置
						uni.hideNavigationBarLoading();//关闭加载动画
					},
					fail:(e)=>{
						uni.hideLoading()
						uni.showToast({title: '上拉加载失败'+'错误码201',icon:"none"});
					}
				})
			}else{
				uni.request({
					url: getApp().globalData.webUrl +'/mobile/order/orderTypes',
					method:'GET',
					data:{
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
						page:this.page + 1,
						typesid: this.typeid
					},
					success: (res) => {
						if (route.publicIf(res.data.status) == false){
							return false;
						}
						if(res.data.status == 0){
							for (var i = 0; i < res.data.order.length; i++) {
								this.orderSubject.push(res.data.order[i]);
							}
							this.addHttp();
							this.page = res.data.current;
						}
						this.loadingType = 0;//将loadingType归0重置
						uni.hideNavigationBarLoading();//关闭加载动画
					},
					fail:(e)=>{
						uni.hideLoading()
						uni.showToast({title: '上拉加载失败'+'错误码201',icon:"none"});
					}
				})
			}
		},
		beforeDestroy(){// 用户离开此页面
			route.comCheckout(this.isChecked.select,this.isChecked.window,this.webData); //自动轮询
		}
	};
</script>

<style lang="scss">
	/* 滚动导航条 */
	.scroll-container {
	    box-sizing: border-box;
	    white-space: nowrap;
	    height: 80upx;
	    background: #fff;
		position: fixed;
		z-index: 1;
	    .scroll-item {
	      text-align: center;
	      display: inline-block;
		  padding: 0 0.7rem;
	      line-height: 70upx;
	      font-size: .7rem;
	      color: rgba(0,0,0,1);
	      &.active {
	        display: inline-block;
	        color: rgb(255, 0, 0);;
			border-bottom: 2px solid red;
	      }
	    }
	  }
	
	@import "../../common/uni.css";
	/*订单完成与否提示*/
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
	.loading-text{
		height: 80upx;
		line-height: 80upx;
		font-size: 30upx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	/* #ifdef MP-WEIXIN */
	.WXhight{
		height: 600px;
	}
	/* #endif */
	.Listview {
		padding: 2rem 0 0.1rem 0;
		background-color: #f3f3f3;
		box-sizing: border-box;
	}
	.bg-white{
		background-color: #FFF;
	}
	.margin {
		margin: 30upx;
		padding: 12px 0 0 0;
	}
	.bgcColor{
		border-radius: 10px;
		background-color: #FFF;
	}
	/* 单号 */
	.orderNO{
		width: 80%;
		padding: 0 0 0 0.6rem;
	}
	.time{
		padding: 0 0 0 0.6rem;
	}
	.orderNO text{
		font-size: 0.7rem;
		margin-top: 0;
		margin-bottom: 10px;
		padding: 10px;
		color: #8f8f94;
	}
	/* 状态 */
	.orderState{
		width: 20%;
	}
	.orderState i{
		font-size: 1rem;
		color: #999;
	}
	.orderState text{
		color: #ff0000;
		font-size: 0.7rem;
	}

	/* 商品详情[图片] */
	.orderImg{
		width: 26%;
		    padding: 0 0 0 0.6rem;
	}
	.orderImg img,.orderImg image{
		width: 75px;
		height: 75px;
		border-radius: 5px;
	}
	
	.orderDetailInfo {
		padding: 0 0 0 10px;
		color: #000000;
	}
	.orderD_typeName text {
		
	}
	.orderD_size {
		color: #797979;
	}
	.orderD_size text{
		margin-right: 10px;
	}
	
	.orderD_total text {
		text-align: right;
	}
	/* 实付金额 */
	.Price{
		margin-bottom: 0.5rem;
	}
	.zongPrice{
		text-align: right;
		padding: 0 10px 0 0;
	}
	.shiTitle{
		font-size: 0.7rem;
		color: #999;
	}
	/* 按钮 */
	.priceBtn{
		border-top: 1px solid #f3f3f3;
		text-align: right;
		padding: 3% 6px;
	}
	.btn-box{
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
	}
	.btns {
		/* #ifdef APP-PLUS */
		width: 216upx;
		/* #endif */
		/* #ifdef H5 */
		width: 180upx;
		min-width: 120upx;
		/* #endif */
		line-height: 2;
		font-size: 0.7rem;;
		color: #666666;
		padding: 0 20upx;
		border-radius: 50upx;
		border: 0.5px solid #ccc;
		background: #fff!important;
		margin:0 5px;
	}
	.btns::after{
		border: 0;
	}
	.pay,.confirm {
		border: solid 0.5px #ff0000;
		color: #ff0000;
	}
	/* #ifndef H5 */
	.pay{
		color: red!important;
		background: white!important;
	}
	/* #endif */
	.example-body{//加载框位置
		width: 100%;
		bottom: 0;
		background: #F7F7F7;
		/* #ifdef H5 */
		position: absolute;
		/* #endif */
		/* #ifdef MP-WEIXIN||APP-PLUS */
		position:fixed;
		/* #endif */
	}
</style>