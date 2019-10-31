<template>
	<view class="details">
		<!-- 订单状态 -->
		<uni-view class="uni-flex uni-column orderDetailStatus" v-for="(osl,index) in orderStatusList" :key="'order'+index" v-if="index==orderStatusKey">
			<uni-view class="flex-item flex-item-V">
				<view class="ods-image">
					<image :src="(osl.orderStatusImg)"></image>
				</view>
				<text style="font-size: 0.8rem;font-weight: 600;">{{osl.orderStatusTitle}}</text>
			</uni-view>
			<uni-view class="flex-item flex-item-V">{{osl.orderStatusMsg}}</uni-view>
			<uni-view class="flex-item flex-item-V ">
				<button type="default" size="mini" class="btns cancel" @tap="payStatusFun(index)">{{osl.orderStatusBtn}}</button>
			</uni-view>
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

		<!-- 商品的详细信息 -->
		<view class="commodity" >
			<view class="sp_tite">{{tyName}}<text>共计 {{orderDetail.length}} 件商品</text></view>
			<view class="sp_cont" v-for="(orderDetails,index) in orderDetail" :key="index">
					<view class="sp_cont_img">
						<image :src="orderDetails.img?imgUrl+orderDetails.img:unExist"></image>
					</view>
					
					<view class="sp_cont_content">
						<view style="font-size: 0.7rem;font-weight: 600;"><text>{{orderDetails.g_name}}  </text></view>
						<view style="color: #999999;">工艺:<text>{{orderDetails.process}}</text></view>
						<view style="color: #999999;">规格:<text>{{orderDetails.specs}}(M)*{{orderDetails.od_quantity}}(个)</text></view>
						<view class="money" style="font-size: 0.7rem;"><text> ￥ {{orderDetails.total}}</text></view>
					</view>
					<view class="progress uni-flex uni-column" v-for="(pLt,i) in progressList" :key="i" v-if="orderDetails.od_id==pLt.detail_id">
							<!-- <view class="cur_progress">当前流程</view> -->
							<text class="flex-item flex-item-V" style="color: rgb(26, 173, 25);" v-if="pLt.cur_proc_name">{{pLt.all_completed==1?pLt.cur_proc_name:'已'+pLt.cur_proc_name}}</text>
							<button class="progressBtn flex-item flex-item-V" type="primary" size="mini" @tap="checkProgress(pLt.detail_id)">进度查看</button>
							<button class="progressBtn flex-item flex-item-V" type="primary" size="mini" @tap="checkDelivery(pLt)">物流跟踪</button>
					</view>
			</view>
		</view>
		
		<view v-for="(orderDatas,indexs) in orderData" :key="indexs">
			<!-- 商品订单详情 -->
			<view class="information">
				<view>
					<view><text class="orderHeaderInfo">订单编号：</text><text class="orderHeaderContent">{{orderDatas.NO}}</text></view>
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

	</view>
</template>
<script>
	import route from "@/common/public.js"
	export default {
		data() {
			return {
				imgUrl :'',  //图片访问ip
				Signboard: '',
				Signguid: '',
				orderStatusKey: 4,//订单状态标识
				orderStatusList:[
					{orderStatusNum:0,orderStatusImg:'../../static/image/finish.png',orderStatusTitle:'已完成',orderStatusMsg:'亲！您的订单已结清，祝您购物愉快！',orderStatusBtn:'再来一单'},
					{orderStatusNum:1,orderStatusImg:'../../static/image/tips.png',orderStatusTitle:'未付款',orderStatusMsg:'亲！您的订单还未付款，请尽快支付哟！',orderStatusBtn:'去支付'},
					{orderStatusNum:2,orderStatusImg:'../../static/image/finish.png',orderStatusTitle:'已付款',orderStatusMsg:'亲！您的订单已支付，我们会尽快安排发货！',orderStatusBtn:'确认收货'},
					{orderStatusNum:3,orderStatusImg:'../../static/image/tips.png',orderStatusTitle:'',orderStatusMsg:'亲！您的订单状态无法查询，请联系我们客服哟！',orderStatusBtn:''},
					{orderStatusNum:3,orderStatusImg:'',orderStatusTitle:'',orderStatusMsg:'',orderStatusBtn:''}
				],
				orderId: "", //接收下单页传过来的订单序号
				orderMsg: "", //订单详细信息获取失败时的提示消息
				orderDetail: "", //订单明细
				tyName:'',//产品类别名
				orderData: "", //订单信息
				orderMoney:"",//商品金额
				
				oldInfo: "", //历史记录
				historyOld: false, //历史记录的显示隐藏
				
				org:"", //请求的域名地址
				progressList:[],//当明细流程数组
				invoiceList:{},//发票对象
				addressList:{},
				unExist:'',
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
					url: route.variable + '/mobile/order/orderParticular',
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
							this.orderDetail = res.data.orderDetail; //将获得的订单明细赋值存给this.orderDetail
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
			// 查看明细流程
			checkProgress(od_id){
				for (var i = 0; i < this.progressList.length; i++) {
					if(this.progressList[i].detail_id == od_id){
						if(this.progressList[i].cur_proc_name == ''){
							uni.showToast({title:'当前明细还未开始流程，请稍候！',icon:'none',duration:3000})
						}else{
							uni.navigateTo({
								url:'../order/progress?od_id='+od_id+'&from_cs=0'
							})
						}
					}
				}
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
				switch (flag){
					case 0:
						uni.navigateTo({
							url: '../order/payment?Ident_Signboard='+this.Signboard+'&Ident_Signguid='+this.Signguid+'&orderid='+this.orderId+'&l=4'
						})
						break;
					case 1:
						uni.navigateTo({
							url: '../order/payment?Ident_Signboard='+this.Signboard+'&Ident_Signguid='+this.Signguid+'&orderid='+this.orderId+'&l=3'
						})
						break;
					case 2:
						uni.request({
							url: route.variable+'/mobile/order/confirm',
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
					default:
						break;
				}
			}
		},
		onLoad: function(options) {
			this.imgUrl = route.variable;  //图片访问IP
			this.unExist = route.unExist; //图片不存在时，替代图片地址
			var jsonList = uni.getStorageSync("jsonList");
			var data = JSON.parse(jsonList); //JSON字符串转对象
			this.Signboard = data.Ident_Signboard;
			this.Signguid = data.Ident_Signguid;
			this.org=data.org;
			this.orderId = options.orderid;
			console.log(this.orderId)
			uni.request({
				url: route.variable + '/mobile/order/orderParticular',
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
							default:
								break;
						}
						if(res.data.orderData.length>0){
							let arr=[]
							arr.linkman=res.data.orderData[0].linkman;
							arr.phone=(res.data.orderData[0].phone).replace(/^(\d{3})\d{4}(\d{4})$/,"$1****$2");
							arr.address=res.data.orderData[0].address;
							this.orderMoney=(res.data.orderData[0].order_money).toFixed(2);
							this.addressList = arr;
						}
						if(res.data.orderDetail.length>0){
							this.tyName=res.data.orderDetail[0].ty_name;
							// 如果订单明细大于1,获取每个明细,对应的流程
							for (var i = 0; i < res.data.orderDetail.length; i++) {
								let detailList='{"detailidlists":['+res.data.orderDetail[i].od_id+']}';
								uni.request({
									url:'http://'+data.org+"/services/order/progress?token=" + data.softdog + "&dbname="+data.dbname+"&data=" + detailList,
									method:'GET',
									success: (res) => {
										if (route.publicIf(res.data.status) == false){
											return false;
										}
										this.progressList.push(res.data.QueryResults[0]);
										console.log(this.progressList)
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
												console.log(this.deliveryList)
											}
											console.log(this.deliveryCodes)
											this.getDelivery(this.deliveryCodes)
											
										}
									},
									fail:(res)=>{
										uni.showToast({title: '流程查询失败'+'错误码201',icon:"none"});
									}
								})
							}
						}
						console.log(this.progressList)
						this.orderData = res.data.orderData; //将获得的订单信息赋值存给this.orderData
						this.orderDetail = res.data.orderDetail; //将获得的订单明细赋值存给this.orderDetail
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
				url:'http://'+data.org+'/services/invoice/query',
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
					// console.log(res);
					if(res.data.invoices.length>0){
						this.invoiceList= res.data.invoices;
					}
					
				},
				fail:(res)=>{
					uni.showToast({title: '发票查询失败'+'错误码201',icon:"none"});
				}
			})
			
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
