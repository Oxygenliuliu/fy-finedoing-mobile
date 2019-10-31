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

		<!-- 商品的详细信息 -->
		<view class="commodity">
			<view class="sp_tite">订单详情<text>共计 {{CSOrderDetail.length}} 件商品</text></view>
			<view class="sp_cont" v-for="(orderDetails,index) in CSOrderDetail" :key="index">
				<view class="sp_cont_img">
					<image :src="unExist"></image>
				</view>

				<view class="sp_cont_content">
					<view style="font-size: 0.7rem;font-weight: 600;"><text>{{orderDetails.BILLDETAIL_GOODSNAME}} </text></view>
					<view style="color: #999999;">工艺:<text>{{orderDetails.BILLDETAIL_LATEPROCESS}}</text></view>
					<view style="color: #999999;">规格:<text>{{orderDetails.BILLDETAIL_W}}x{{orderDetails.BILLDETAIL_H}}(M)*{{orderDetails.BILLDETAIL_QTY}}(个)</text></view>
					<view class="money" style="font-size: 0.7rem;"><text> ￥ {{orderDetails.BILLDETAIL_TOTALMONEY}}</text></view>
				</view>
				<view class="progress uni-flex uni-column" v-for="(pLt,i) in progressList" :key="i" v-if="orderDetails.BILLDETAIL_ID==pLt.detail_id">
					<text class="flex-item flex-item-V" style="color: rgb(26, 173, 25);" v-if="pLt.cur_proc_name">{{'已'+pLt.cur_proc_name}}</text>
					<button class="progressBtn flex-item flex-item-V" type="primary" size="mini" @tap="checkProgress(pLt.detail_id)">进度查看</button>
					<button class="progressBtn flex-item flex-item-V" type="primary" size="mini" @tap="checkDelivery(pLt)">物流跟踪</button>
				</view>
			</view>
		</view>

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
	export default {
		data() {
			return {
				org: '',
				orderData: {},
				CSOrderDetail: {},
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
					url: route.variable + "/mobile/order/logistics",
					dataType: "json",
					data: {
						Ident_Signboard: datas.Ident_Signboard,
						Ident_Signguid: datas.Ident_Signguid,
						express: dlcode
					},
					success: function(res) {
						console.log(_that.deliveryCodes)
						if (res.data.logisticsNodes.length > 0) {
							_that.deliveryList = res.data.logisticsNodes
							console.log(_that.deliveryList)
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
				console.log(this.orderData)
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
				uni.request({
					method: "GET",
					url: "http://" + datas.org + "/services/Query?dbname=" + datas.dbname + "&token=" + datas.softdog +
						"&params={%22QUERY_ID%22:2,%22BILL_ID%22: " + BILL_ID + "}",
					dataType: "json",
					data: {},
					success: function(result) {
						_that.CSOrderDetail = result.data.data;
						for (var i = 0; i < result.data.data.length; i++) {
							uni.request({
								url: "http://" + datas.org + "/services/order/progress?token=" + datas.softdog + "&dbname=" + datas.dbname +
									"&data={%22mode%22:1,%22detailidlists%22:[" + result.data.data[i].BILLDETAIL_ID + "]}",
								method: 'GET',
								success: (res) => {
									if (route.publicIf(res.data.status) == false) {
										return false;
									}
									// console.log(res.data.QueryResults[0])
									_that.progressList.push(res.data.QueryResults[0]);
									console.log(_that.progressList)
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
											console.log(_that.deliveryList)
										}
										console.log(_that.deliveryCodes)
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
			// 查看明细流程
			checkProgress(od_id) {
				for (var i = 0; i < this.progressList.length; i++) {
					if (this.progressList[i].detail_id == od_id) {
						if (this.progressList[i].cur_proc_name == '') {
							uni.showToast({title: '当前明细还未开始流程，请稍候！',icon: 'none',duration: 3000})
						} else {
							uni.navigateTo({
								url: '../order/progress?od_id=' + od_id + '&from_cs=1'
							})
						}
					}
				}
			},
			/* 调用发票查询的接口 */
			getInvoice(os_id) {
				var jsonList = uni.getStorageSync("jsonList"); //获取存储在Storage里的值
				var datas = JSON.parse(jsonList); //JSON字符串转对象
				this.org = datas.org
				uni.request({
					url: 'http://' + datas.org + '/services/invoice/query',
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
			// var arr = [];
			// arr.AcceptStation='暂无'
			// arr.AcceptTime=''
			// this.deliveryList.push(arr)
			this.unExist = route.unExist
			this.getDetails(options.BILL_ID)
			this.getInvoice(options.BILL_ID)
			let pages = getCurrentPages();
			let prevPage = pages[pages.length - 2];
			if (prevPage != undefined) {
				for (var i = 0; i < prevPage.CSorder.length; i++) {
					if (prevPage.CSorder[i].BILL_ID == options.BILL_ID) {
						this.orderData = prevPage.CSorder[i]
						this.paidMoney = (this.orderData.BILL_TOTALMONEY - this.orderData.BILL_LEFTMONEY).toFixed(2)
					}
				}
				if (this.orderData.BILL_LEFTMONEY != 0) {
					this.orderStatusKey = 1;
				}
				console.log(this.orderData)
			} else {

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
