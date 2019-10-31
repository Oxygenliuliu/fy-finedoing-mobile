<template>
  <view>
		<navigator url="csOrder" class="csOrder">
			<!-- <text>线下订单</text> -->
			<button type="default" size="mini" class="csOrderBtn">线下订单</button>
		</navigator>
		<view class="orderPage flex-row " style="display: flex;flex-direction: row;position: fixed;z-index: 999;">
			<view class="orderPageInfo flex-view-item" v-for="(items,index) in items" :key="index" style="padding: 0.3rem 0.7rem;">
				<view class=" Whole" @tap="Whole(index)" :style="{color:(index == checkNum?'#FF0000':'#000000')}" :class="{boderBottom:(index == checkNum ? true : false)}">
					{{items.name}}
				</view>			
			</view>
		</view>
        <scroll-view style="padding: 2rem 0;height: 100vh;" :scroll-top="scrollTop"  class="scroll-Y" scroll-y="true"  @scrolltolower="rechscrollBottom" @scroll="scroll">
			<view class="margin bgcColor"  v-for="(item,index) in orderSubject" :key="index">
				<view >
					<!-- 单号和状态 -->
					<view class="flex-row" style="display: flex;flex-direction: row;"  @tap="orderTap(item.os_id)">
						<view class="flex-view-item orderNO">订单号：<text>{{item.NO}}</text></view>
						<view class="flex-view-item orderState"><text>{{item.saname}}</text><i class="uni-icon uni-icon-arrowright"></i></view>
					</view>
					<!-- 商品 -->
					<view class="time">{{item.os_cd}}</view>
					<view v-for="(items, indexs) in item.detail" :key="indexs"  @tap="orderTap(item.os_id)">
						<view class="flex-row" style="display: flex;flex-direction: row;">
							<view class="flex-view-item orderImg">
								<image :src="imgUrl+items.od_img" mode=""></image>
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
						<view v-if="(item.os_status == 0)">
							<button type="default" size="mini" class="btns cancel" @tap="cancelOrder(index,item.os_id)">取消订单</button>
							<button type="warn" size="mini" class="btns pay" @tap="Repayment(index)">付款</button>
						</view>
						<view v-else-if="(item.os_status) == 1">
							<button type="warn" size="mini" class="btns confirm pay" @tap="comfirmOrder(index,item.os_id)">确认收货</button>
						</view>
						<view v-else="(item.os_status) == 2">
							<button type="warn" size="mini" class="btns another pay" @tap="goPay(index)">再来一单</button>
						</view>
					</view>
				</view>
			</view>
        </scroll-view>
		<!-- 返回按钮：遮罩层 -->
		<!-- <mask v-if="showMask"></mask> -->
    </view>
</template>


<script>
	import route from "@/common/public.js"
	export default {
		components: {},
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
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
				}],
				page: 1,
				lastpage: '',  //最后一页
				typeid: '-1',  //类别ID
				Signboard: '',  //令牌
				Signguid: '',  //guid
				balanceNum: '',  //辨别是不是从余额支付页跳过来的
				// showMask:false, //返回按钮：遮罩层的显示隐藏
			};
		},
		methods: {
			// 页面滑动
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop;
			},
			// 再来一单按钮
			goPay(e){
				uni.navigateTo({
					url: '../order/payment?Ident_Signboard='+this.Signboard+'&Ident_Signguid='+this.Signguid+'&orderid='+this.orderSubject[e].os_id+'&l=4'
				})
			},
			// 付款按钮
			Repayment(e){
				uni.navigateTo({
					url: '../order/payment?Ident_Signboard='+this.Signboard+'&Ident_Signguid='+this.Signguid+'&orderid='+this.orderSubject[e].os_id+'&l=3'
				})
			},
			// 点击切换类别
			Whole(index){
				this.checkNum = index;
				this.typeid = this.items[index].typeId;  //typeid  状态类别id
				if(this.typeid == -1){
					uni.request({
						url: route.variable+'/mobile/order/OwnOrder',
						method: 'GET',
						data:{
							Ident_Signboard: this.Signboard,
							Ident_Signguid: this.Signguid
						},
						success: (res) => {
							if (route.publicIf(res.data.status) == false){
								return false;
							}
							if(res.data.status == 0){
								if(res.data.order == ''){
									uni.showToast({title: '暂未查询到订单',icon:"none"});
								}else{
									this.orderSubject = res.data.order;  //给orderSubject 订单主体赋值
									// this.lastpage = res.data.last
								}
							}
						},
						fail:(e)=>{
							uni.hideLoading()
							uni.showToast({title: '加载失败'+'错误码201',icon:"none"});
						}
					})
				}else {
					uni.request({
						url: route.variable+'/mobile/order/orderTypes',
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
								if(res.data.order == ''){
									this.orderSubject = '';  //给orderSubject 订单主体赋值
									uni.showToast({title: '暂未查询到订单',icon:"none"});
								}else{
									this.orderSubject = res.data.order;  //给orderSubject 订单主体赋值
									this.page = res.data.current
									this.lastpage = res.data.last
								}
							}
						},
						fail:(e)=>{
							uni.hideLoading()
							uni.showToast({title: '加载失败'+'错误码201',icon:"none"});
						}
					})
				}
			},
			// 点击订单:跳转至订单详情
			orderTap(e){
				uni.navigateTo({
					url: 'details?orderid='+e
				})
			},
			cancelOrder(evt,osId){
				console.log(evt)
				var Signboard=this.Signboard;
				var Signguid=this.Signguid;
				var _that = this;
				uni.showModal({
					title: '提示',
					content: '是否确认取消该订单',
					success: function (res) {
						if (res.confirm) {
							uni.request({
								url: route.variable+'/mobile/order/cancel',
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
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			comfirmOrder(evt,osId){
				var _that = this;
				uni.showModal({
									title: '提示',
									content: '是否确认收货?',
									confirmColor:'#E93B3D',
									success: function (res) {
											if (res.confirm) {  //点击确认
											uni.request({
												url: route.variable+'/mobile/order/confirm',
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
																//_that.orderSubject.splice(evt,1);
																// 确认收货之后订单不会被隐藏 而是直接改变订单状态
																_that.orderSubject.forEach(item=> {
																	console.log(_that.orderSubject,item,osId)
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
														uni.showToast({title: '收货失败'+'错误码201',icon:"none"})}
												})
											}
									}
							});
							function cofirm(){
								uni.request({
									url: route.variable+'/mobile/order/confirm',
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
													console.log(_that.orderSubject,evt);
													_that.orderSubject.forEach(item=>{
														if(item.os_id == osId){
															item.saname = '已完成';
															item.os_status = 2;
															console.log(item)
														}
													})
													//_that.orderSubject.splice(evt,1);
													// setTimeout(function() {
													// 	uni.navigateTo({
													// 		url: "../order/orderpageinfo"
													// 	})
													// }, 1000);
												}
											})
										}
									}
								})
							}
			},
			// 上拉加载
			rechscrollBottom() {
				//先定义一个变量页数，page=1，只要是存在上拉加载的页面这两个参数必不可少（lastpage，page)
				//先判断是否是最后一页,lastpage最后页数
				if(this.page == this.lastpage){
					uni.showToast({
						title: '没有更多数据',
						icon: 'none'
					})
					return false;
				}
				if(this.typeid == -1){
					uni.request({
						url: route.variable +'/mobile/order/OwnOrder',
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
								console.log(res)
								for (var i = 0; i < res.data.order.length; i++) {
									this.orderSubject.push(res.data.order[i]);
								}
								
								this.page = res.data.current;
							}
						},
						fail:(e)=>{
							uni.hideLoading()
							uni.showToast({title: '上拉加载失败'+'错误码201',icon:"none"});
						}
					})
				}else{
					uni.request({
						url: route.variable +'/mobile/order/orderTypes',
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
								this.page = res.data.current;
							}
						},
						fail:(e)=>{
							uni.hideLoading()
							uni.showToast({title: '上拉加载失败'+'错误码201',icon:"none"});
						}
					})
				}
			},
			 getOrder(){
				var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
				var datas= JSON.parse(wulala);//JSON字符串转对象
				this.Signboard = datas.Ident_Signboard;  //给Signboard 赋值
				this.Signguid = datas.Ident_Signguid;  //给Signguid 赋值
				uni.removeStorage({key:'orders'});  //清除payment页面存储的orders判断值
				uni.request({
					url: route.variable+'/mobile/order/OwnOrder',
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
							if(res.data.order == ''){
								uni.showToast({title: '暂未查询到订单',icon:"none"});
							}else{
								this.orderSubject = res.data.order;  //给orderSubject 订单主体赋值
								this.lastpage = res.data.last
							}
						}
					},
					fail:(e)=>{
						uni.hideLoading()
						uni.showToast({title: '订单信息加载失败'+'错误码201',icon:"none"});
					}
				})
			}
		},
		onLoad : function(options) {
			this.imgUrl = route.variable;  //图片访问IP
			this.getOrder();  //调用获取数据函数
			if(options.orderNum == 'balance'){
				this.balanceNum = options.orderNum;  //判断是否从余额支付页跳转过来的
				// this.showMask = true;
			}
			// if (window.history && window.history.pushState) {
			// 	// history.pushState(null, null, document.URL);
			// 	window.addEventListener('popstate', this.fun, false); //false阻止默认事件
			// }
		},
		// 监听页面隐藏
		// onHide() {
		// 	// this.orderSubject = [];
		// 	window.removeEventListener('popstate', this.fun, false); //false阻止默认事件
		// },
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
		// onReady() {
		// 	if (window.history && window.history.pushState) {
		// 		history.pushState(null, null, document.URL);
		// 		window.addEventListener('popstate', this.fun, false); //false阻止默认事件
		// 	}
		// },	
		// 页面销毁时，取消监听。否则其他vue路由页面也会被监听
		// destroyed() {
		// 	window.removeEventListener('popstate', this.fun, false);//false阻止默认事件
		// },
		// 下拉刷新
		onPullDownRefresh() {
			// 开始刷新
			setTimeout(function () {
				console.log('start pulldown');
			}, 1000);
			uni.startPullDownRefresh();
			
			// 停止刷新
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		}
	};
</script>

<style>
	@import "../../common/uni.css";
	/* 数字角标 */
	/* .jiaobiao{
		position: absolute;
		top: 0;
		color: #fff;
		background-color: #dd524d;
	} */
	
	.csOrder{
		position: fixed;
		z-index: 999;
		top: 0;
		right: 20upx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 44px;
	}
	.csOrderBtn{
		border: 1px solid #cccccc;
		border-radius: 25px;
		padding: 0 10px;
	}
	.csOrderBtn::after{
		display: none;
	}
	
	.orderPage{
		width: 100%;
		background-color: #fff;
	}
	.orderPageInfo uni-view{
		font-size: 0.7rem;
	}
	/* 状态选中的下划线 */
	.boderBottom{
		border-bottom: 2px solid red;
	}
	scroll-view {
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
		border-radius: 3%;
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
	.orderImg image{
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
/* 	.orderInfoText{
		padding: 10px;
	}
	.orderInfo{
		width: 90%;
	}
	.orderList{
		padding: 10px 10px;
		text-align: left;
		font-size: 0.55rem;
		color: #999;
	} */
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

	.btns {
		width: 180upx;
		min-width: 120upx;
		line-height: 2;
		font-size: 0.7rem;;
		color: #666666;
		padding: 0 20upx;
		border-radius: 50upx;
		border: 0.5px solid #ccc;
		background: #ffffff;
		margin:0 5px;
	}
	.btns::after{
		border: 0;
	}
	.pay,.confirm {
		border: solid 0.5px #ff0000;
		color: #ff0000;
	}
</style>