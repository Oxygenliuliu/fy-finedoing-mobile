<template>
	<view>
		<!-- 订单状态 -->
		<uni-view class="uni-flex uni-column orderDetailStatus" v-for="(row,index) in orderStatus" :key="index" v-if="index==orderStatusKey">
			<uni-view class="flex-item flex-item-V">
				<view class="ods-image">
					<image :src="(row.orderStatusImg)"></image>
				</view>
				<text style="font-size: 0.8rem;font-weight: 600;">{{row.orderStatusTitle}}</text>
			</uni-view>
			<uni-view class="flex-item flex-item-V">{{row.orderStatusMsg}}</uni-view>
			<!-- 	<uni-view class="flex-item flex-item-V ">
				<button type="default" size="mini" class="btns cancel" >{{row.orderStatusBtn}}</button>
			</uni-view> -->
		</uni-view>
		<!-- 物流跟踪 -->
		<view class="userAddress" >
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
		<order-Details :options="orderDetails" :progress="progressList" :orderNum="orderDetails.length" :orderNO="orderData.BILL_CODE" :orderbs="false"/>
		<view>
			<!-- 商品订单详情 -->
			<view class="information">
				<view>
					<view><text class="orderHeaderInfo">订单编号：</text><text class="orderHeaderContent">{{orderData.BILL_CODE}}</text></view>
					<view><text class="orderHeaderInfo">下单时间：</text><text class="orderHeaderContent">{{orderData.BILL_DATE_STR}}</text></view>
				</view>
				<view>
					<view><text class="orderHeaderInfo">发票类型：</text><text class="orderHeaderContent"></text><text class="viewInvoice"
						 @tap="ckInvoice()">查看发票({{invoiceList.length?invoiceList.length:'无'}})</text></view>
				</view>
			</view>
			<!-- 实付金额 -->
			<view class="actualPayment">
				<view class="ap_center">
					<text>订单金额</text><text class="ap_right">￥ {{orderData.BILL_TOTALMONEY}}</text>
				</view>
				<view class="ap_center">
					<text>已结金额</text><text class="ap_right">￥ {{paidMoney}}</text>
				</view>
				<view class="ap_center">
					<text>未结金额</text><text class="ap_right">￥ {{orderData.BILL_LEFTMONEY}}</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import route from "@/common/public.js"
	import orderDetails from '@/components/customize/orderdetail.vue'
	import copyright from "@/components/customize/copyright.vue"
	export default {
		components: {
			orderDetails,copyright
		},
		data() {
			return {
				org: '',
				orderData: {},
				// CSOrderDetail: {},
				orderDetails:[],
				orderStatusKey: 0,
				orderStatus: [{
						orderStatusNum: 0,
						orderStatusImg: '../../static/image/finish.png',
						orderStatusTitle: '已结清',
						orderStatusMsg: '亲！您的订单已结清，祝您购物愉快！',
						orderStatusBtn: '再来一单'
					},
					{
						orderStatusNum: 1,
						orderStatusImg: '../../static/image/tips.png',
						orderStatusTitle: '未结清',
						orderStatusMsg: '亲！您的订单还未结清，请尽快支付哟！',
						orderStatusBtn: '去支付'
					}
				],
				progressList: [], //当明细流程数组
				invoiceList: {},
				paidMoney: '',
				unExist: '',
				deliveryList: [],
				deliveryCodes:[]
			}
		},
		methods: {
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
						if(!res.data.logisticsNodes){
							_that.deliveryList = [{AcceptStation:'暂无物流信息',AcceptTime:''}]
							return false;
						}
						if (res.data.logisticsNodes.length > 0) {
							_that.deliveryList = res.data.logisticsNodes
						}else{
							_that.getDelivery(_that.deliveryCodes)
						}
					},
					fail: function(res) {
						_that.deliveryList = [{AcceptStation:'暂无物流信息',AcceptTime:''}]
					}
				})
			},
			checkDelivery(progress) {
				if(progress.delivered == 1){
					uni.navigateTo({
						url: '/pages/order/delivery?express=' + progress.delivercode + '&orderNO=' + this.orderData.BILL_CODE
					})
				}else{
					uni.showToast({title: '未查询到当前明细物流信息，请稍候！',icon: 'none',duration: 3000})
				}
			},
			getDetails(BILL_ID) {
				let _that = this;
				var jsonList = uni.getStorageSync("jsonList"); //获取存储在Storage里的值
				var datas = JSON.parse(jsonList); //JSON字符串转对象
				// 针对ios %22无法转码问题
				let url = "http://" + datas.org + "/services/Query?dbname=" + datas.dbname + "&token=" + datas.softdog +
						"&params={%22QUERY_ID%22:2,%22BILL_ID%22: " + BILL_ID + "}";
				uni.getSystemInfo({
					success: (res)=>{
						   if( res.platform == 'ios'){
							url = url.replace(/\%22/g,'"')
						}
						}
				});
				uni.request({
					method: "GET",
					// #ifndef MP-WEIXIN
					url: url,
					// #endif
					// #ifdef MP-WEIXIN
					url: route.varCsQuery+ "/services/Query?dbname=" + datas.dbname + "&token=" + datas.softdog +
						"&params={%22QUERY_ID%22:2,%22BILL_ID%22: " + BILL_ID + "}",
					// #endif
					dataType: "json",
					data: {},
					success:async function(result) {
						// _that.CSOrderDetail = result.data.data;
						for (let i in result.data.data) {
								var arr = {};
								arr.g_name =result.data.data[i].BILLDETAIL_GOODSNAME;
								arr.img ='../../static/image/unExist.png';
								arr.od_quantity =result.data.data[i].BILLDETAIL_QTY;
								arr.process =result.data.data[i].BILLDETAIL_LATEPROCESS;
								arr.specs =result.data.data[i].BILLDETAIL_W+'X'+result.data.data[i].BILLDETAIL_H;
								arr.total =result.data.data[i].BILLDETAIL_TOTALMONEY;
								arr.ty_name ='';
								arr.od_id = result.data.data[i].BILLDETAIL_ID;
								_that.orderDetails.push(arr);
						}
						for (var i = 0; i < result.data.data.length; i++) {
							// 针对ios无法转码%22
							let url1 = "http://" + datas.org + "/services/order/progress?token=" + datas.softdog + "&dbname=" + datas.dbname +
									"&data={%22mode%22:1,%22detailidlists%22:[" + result.data.data[i].BILLDETAIL_ID + "]}";
							uni.getSystemInfo({
								success: (res)=>{
									   if( res.platform == 'ios'){
										url1 = url1.replace(/\%22/g,'"')
									}
									}
							});
							uni.request({
								// #ifndef MP-WEIXIN
								url: url1,
								// #endif
								// #ifdef MP-WEIXIN
								url: route.varCsQuery + "/services/order/progress?token=" + datas.softdog + "&dbname=" + datas.dbname +
									"&data={%22mode%22:1,%22detailidlists%22:[" + result.data.data[i].BILLDETAIL_ID + "]}",
								// #endif
								method: 'GET',
								success: (res) => {
									if (route.publicIf(res.data.status) == false) {
										return false;
									}
									_that.progressList.push(res.data.QueryResults[0]);
									// console.log(_that.progressList);
									if (i == _that.progressList.length) {
										var flag = false;
										for (var k = 0; k < _that.progressList.length; k++) {
											if (_that.progressList[k].delivered == 1) {
												_that.deliveryCodes.push(_that.progressList[k].delivercode)
												flag = true
											}
										}
										if(!flag){
											_that.deliveryList = [{AcceptStation:'暂无物流信息',AcceptTime:''}]
										}
										_that.getDelivery(_that.deliveryCodes)
										
									}
								},
								fail: (res) => {
									uni.showToast({title: '流程查询失败' + '错误码201',icon: "none"});
								}
							})
						}
					},
					fail: function(res) {
						uni.showToast({title: '获取订单明细失败' + '错误码201',icon: "none"});
					}
				})
			},
			/* 调用发票查询的接口 */
			getInvoice(os_id) {
				var jsonList = uni.getStorageSync("jsonList"); //获取存储在Storage里的值
				var datas = JSON.parse(jsonList); //JSON字符串转对象
				this.org = datas.org
				uni.request({
					// #ifndef MP-WEIXIN
					url: 'http://' + datas.org + '/services/invoice/query',
					// #endif
					// #ifdef MP-WEIXIN
					url: route.varCsQuery + '/services/invoice/query',
					// #endif
					method: 'GET',
					data: {
						token: datas.softdog,
						dbname: datas.dbname,
						orderid: os_id,
						from_cs: 1
					},
					success: (res) => {
						if (route.publicIf(res.data.status) == false) {
							return false;
						}
						if (res.data.invoices.length > 0) {
							this.invoiceList = res.data.invoices;
						}
					},
					fail: (res) => {
						uni.showToast({
							title: '发票查询失败' + '错误码201',
							icon: "none"
						});
					}
				})
			},
			/* 点击查看发票触发的事件 */
			ckInvoice(evt) {
				if (this.invoiceList.length == undefined || this.invoiceList.length <= 0) {
					uni.showToast({
						title: '当前没有可查看的发票',
						icon: 'none'
					})
					return false;
				} else {
					uni.navigateTo({
						url: '../order/invoiceDetails?org=' + this.org + '&from_cs=1'
					});
				}
			}
		},
		onLoad: function(options) {
			this.unExist = route.unExist
			this.getDetails(options.BILL_ID)
			this.getInvoice(options.BILL_ID)
			let pages = getCurrentPages();
			let prevPage = pages[pages.length - 2];
			// console.log(prevPage)
			//#ifndef H5
			prevPage = prevPage.$vm;
			//#endif
			if (prevPage) {
				for (var i = 0; i < prevPage.CSorder.length; i++) {
					if (prevPage.CSorder[i].BILL_ID == options.BILL_ID) {
						this.orderData = prevPage.CSorder[i]
						this.paidMoney = (this.orderData.BILL_TOTALMONEY - this.orderData.BILL_LEFTMONEY).toFixed(2)
					}
				}
				if (this.orderData.BILL_LEFTMONEY != 0) {
					this.orderStatusKey = 1;
				}
			} 
		},
	}
</script>

<style>
	@import "../../common/uni.css";
	@import "../../common/css/details.css";
	page {
		color: #333333;
		background-color: #F7F7F7;
	}
</style>
