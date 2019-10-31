var variable="http://ht.finedoing.com",
// var variable="http://erdoscxgg.com",//创新广告
// var variable="http://www.zxr360.cn",//佐贤广告
	unExist = '/static/image/unExist.png';
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
		return {"userName":data.userName,"userImgActive":false,"userActive":true};
	}else{
		return {"userName":'',"userImgActive":true,"userActive":false};
	}
}
// 总金额计算
let totalMoney = function(subTotal,freight,taxes,discount,rebate){
	let total_money = (subTotal+freight+taxes-discount)*rebate
	return {'total_money':total_money}
}
export default {
	variable : variable,
	unExist:unExist,
	publicIf: publicIf,
	checkStatus:checkStatus,
	totalMoney:totalMoney,
	checkCsid:checkCsid
}
