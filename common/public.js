// #ifdef MP-WEIXIN
// var variable = "https://cloud.fydlsoft.com";
// #endif
var varCsQuery = "https://cloud.fydlsoft.com/transfer/Request_Path=";
// #ifndef MP-WEIXIN
// var variable = 'http://erdoscxgg.com' 
//'http://192.168.199.194' 
"http://www.finedoing.com"; 
// #endif
// var variable="http://erdoscxgg.com",//创新广告
// var variable="http://www.zxr360.cn",//佐贤广告

let unExist = '/static/image/unExist.png';
let publicIf = function(data){
	if (data == 201 || data == 202){
			uni.removeStorageSync('jsonList');
			uni.showToast({
			title: '登录身份已过期，请重新登录',
			icon: 'none',
			complete() {
				setTimeout(function() {
					uni.navigateTo({
						url: "../index/login"
					})
				}, 1000);
			}
		})
		return false;
	}
}

let checkCsid = function(csid){
	if (!csid){
			uni.showToast({
			title: '请先完善公司信息',
			icon: 'none',
			duration:3000,
			complete() {
				setTimeout(function() {
					uni.navigateTo({
						url: "../user/companyInfo"
					})
				}, 3000);
			}
		})
		return false;
	}
}
let checkStatus = function(){
	var jsonList = uni.getStorageSync("jsonList");
	if(jsonList){
		var data = JSON.parse(jsonList); //JSON字符串转对象
		return {"userName":data.username,"userImgActive":false,"userActive":true};
	}else{
		return {"userName":'',"userImgActive":true,"userActive":false};
	}
}
// 总金额计算
let totalMoney = function(subTotal,freight,taxes,discount,rebate){
	let total_money = (subTotal+freight+taxes-discount)*rebate
	return {'total_money':total_money}
}
// 用于查询订单完成与否
let selectIsPay = function(paytype,Signboard,Signguid,payOrder,goWhere,own,fun,goOrder,sendPic){ //用来判断订单支付成功与否
		if(goWhere == true){// 为true是充值
			if(paytype == 1){ //充值方式 1-微信 2-支付宝
				uni.request({
						url:getApp().globalData.webUrl+'/mobile/wechat/orderquery',
						method:'GET',
						data:{
							Ident_Signboard: Signboard,
							Ident_Signguid: Signguid,
							tradeno:payOrder,
						},
						success: (res) => {
							var state = res.data.status;
							if(state == 0){
								if(own == 'true'){
									setTimeout(function(){
										uni.redirectTo({
											url:'/pages/user/bill'
										})
									},1000)
								}
							}else{
								uni.showToast({title: '充值失败!', icon:"none"});
							}
						},
						fail:(res)=>{
							uni.showToast({
								title: '接口连不上!' + res.errMsg,
								icon: 'none'
							});
						}
					})
			}else{
				uni.request({
					url:getApp().globalData.webUrl+'/mobile/Alipay/trade_query',
					method:'GET',
					data:{
						Ident_Signboard: Signboard,
						Ident_Signguid: Signguid,
						serial_num: payOrder,
					},
					success: (res) => {
						if(res.data.status == 0){
							if(own == 'true'){
								setTimeout(function(){
									uni.redirectTo({
										url:'/pages/user/bill'
									})
								},1000)
							}
						}else{
							uni.showToast({title: '充值失败!',icon:"none"});
						}
					},
					fail:(res)=>{
						uni.showToast({
							title: '接口连不上!' + res.errMsg,
							icon: 'none'
						});
					}
				})
			}
		}else{
			if(paytype == 2){
				uni.request({
					url: getApp().globalData.webUrl+'/mobile/Alipay/order_query',
					method: 'GET',
					data:{
						Ident_Signboard: Signboard,
						Ident_Signguid: Signguid,
						Alipay_order_no: payOrder
					},
					success: (res) => {
						var state = res.data.status;
						let detailsId = res.data.orderId;
						if(state == 0){
							fun();
							let detailsId = res.data.orderId;
							/* stat 转化订单或上传图片*/
							let sendPicture = {
								"msg":true,
								"data":{
									'tradeno': payOrder,
									'status': 1,
									'detailsId':detailsId
									
								}
							}
							if(sendPic == true){
								uni.setStorageSync('sendPicture',JSON.stringify(sendPicture))
								uni.showModal({
										title:"提示",
										content: '是否立即提交订单',
										cancelText:'等待传图',
										confirmText:'提交订单',
										success: res => {
												if(res.confirm) {
													orderOrSendPi(payOrder,sendPicture,'1',goOrder)
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
							}else{
								uni.setStorageSync('sendPicture',JSON.stringify(sendPicture))
								if(goOrder == 'true'){
									setTimeout(function(){
										uni.redirectTo({
											url:'/pages/order/orderpageinfo'
										})
									},1000)
								}
							}
							/* end 转化订单或上传图片*/
						}else{
							uni.showToast({title: '订单支付失败!',icon:"none"});
							if(goOrder == 'true'){
								setTimeout(function(){
									uni.redirectTo({
										url:'/pages/order/orderpageinfo'
									})
								},1000)
							}
						}
					},
					fail:(res)=>{
						uni.showToast({
							title: '接口连不上!' + res.errMsg,
							icon: 'none'
						});
						if(goOrder == 'true'){
							setTimeout(function(){
								uni.redirectTo({
									url:'/pages/order/orderpageinfo'
								})
							},1000)
						}
					}
				})
			}else if(paytype == 1){
				uni.request({
					url: getApp().globalData.webUrl+'/mobile/wechat/Repquery',
					method: 'GET',
					data:{
						Ident_Signboard: Signboard,
						Ident_Signguid: Signguid,
						tradeno: payOrder
					},
					success: (res) => {
						var state = res.data.status;
						let detailsId = res.data.orderId;
						if(state == 0){
							fun();
							/* stat 转化订单或上传图片*/
							let sendPicture = {
								"msg":true,
								"data":{
									'tradeno': payOrder,
									'status': 1,
									'detailsId':detailsId
								}
							}
							if(sendPic == true){
								uni.setStorageSync('sendPicture',JSON.stringify(sendPicture))
								uni.showModal({
										title:"提示",
										content: '是否立即提交订单',
										cancelText:'等待传图',
										confirmText:'提交订单',
										success: res => {
												if(res.confirm) {
													orderOrSendPi(payOrder,sendPicture,'1',goOrder)
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
							}else{
								
								uni.setStorageSync('sendPicture',JSON.stringify(sendPicture))
								if(goOrder == 'true'){
									setTimeout(function(){
										uni.redirectTo({
											url:'/pages/order/orderpageinfo'
										})
									},1000)
								}
							}
							/* end 转化订单或上传图片*/
						}else{
							uni.showToast({title: '订单支付失败!',icon:"none"});
							if(goOrder == 'true'){
								setTimeout(function(){
									uni.redirectTo({
										url:'/pages/order/orderpageinfo'
									})
								},1000)
							}
						}
					},
					fail:(res)=>{
						uni.showToast({
							title: '接口连不上!' + res.errMsg,
							icon: 'none'
						});
						if(goOrder == 'true'){
							setTimeout(function(){
								uni.redirectTo({
									url:'/pages/order/orderpageinfo'
								})
							},1000)
						}
					}
				})
			}
		}
}

// 是否传图还是转化订单
let orderOrSendPi = function(orderNum,sendPicture,orderWay,goOrder){
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
		success(res) {
			if(res.data.status == 0){
				sendPicture.msg = false;
				uni.setStorageSync('sendPicture',JSON.stringify(sendPicture))
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
		fail() {
			uni.showToast({
				title:'提交订单失败,请稍后重试',
				icon:'none',
				duration:1000
			})
		},
		complete() {
			if(goOrder == 'true'){
				setTimeout(function(){
					uni.redirectTo({
						url:'/pages/order/orderpageinfo'
					})
				},2000)
			}
		}
	})
	
}
//支付接口封装
let payment = function(Signboard,Signguid,os_id,payid){
	uni.showLoading({
		title:'支付中...'
	})
	uni.request({
		url: getApp().globalData.webUrl+'/mobile/order/pay_pay',
		method: 'GET',
		data:{
			Ident_Signboard: Signboard,
			Ident_Signguid: Signguid,
			id:os_id,
		},
		success: (res) => {
			payWay(res,payid);
		},
		fail:(e)=>{
			uni.showToast({title: '加载失败'+'错误码201',icon:"none"});
		},
		complete(res) {
			uni.hideLoading();
		}
	})
}
let payWay = function(res,payid){
	console.log(res,payid==1)
	if(payid == 1){
		location.href = res;
	}else if(payid == 2){
		let div = document.createElement('div')
		div.innerHTML = res //此处form就是后台返回接收到的数据
		document.body.appendChild(div);
		document.forms[0].submit();
	}
	// 	uni.navigateTo({
	// 		url: 'balance?orderNum='+ res.data.orderNum +'&money='+res.data.money+'&amount='+res.data.amount+'&usable='+res.data.usable
	// 	})
}
// 用于用户直接退出自动帮忙轮询
let comCheckout = function (one, two,webData) {
	if(one == false && two == true){//弹窗弹起但为查询
			let wulala=JSON.parse(uni.getStorageSync("jsonList"));  //获取存储在Storage里的值JSON字符串转对象
			let Signboard = wulala.Ident_Signboard;
			let Signguid = wulala.Ident_Signguid;
			let payOrder = webData.payOrder;
			let paytype = webData.pmtNum;
			let goweher = false;
			selectIsPay(paytype,Signboard,Signguid,payOrder,goweher,'false');
		}
}
//判断图片是否存在
let imgIsExist = function(obj){
	if(obj == ''){
		return unExist;
	}
	if(obj.indexOf('http')==-1){
		return getApp().globalData.webUrl+obj;
	}else{
		return obj;
	}
}
export default {
	unExist:unExist,
	publicIf: publicIf,
	checkStatus:checkStatus,
	totalMoney:totalMoney,
	checkCsid:checkCsid,
	payment:payment,
	payWay:payWay,
	imgIsExist:imgIsExist,
	selectIsPay: selectIsPay,
	varCsQuery: varCsQuery,
	comCheckout: comCheckout,
	orderOrSendPi:orderOrSendPi,
}
