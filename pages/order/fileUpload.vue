<template>
	<view>
		<web-view :src="weburl" @message="handleMessage"></web-view>
	</view>
</template>
<script>  
	import route from "@/common/public.js"
    export default {  
		data() {
			return {
				weburl:'',//PC缩略图接口
				url:'',//传图服务器地址
				webviewStyles: {
					progress: {
						color: '#FF3333'
					},
					width:'320px'
				}
			}
		},
        methods: {  
            handleMessage(evt) {
				let msg = '@message传递数据：' + JSON.stringify(evt.detail.data)
				// uni.showModal({
				// 	content: msg,
				// 	showCancel: false
				// });
                console.log(msg);
				// todo 写入到store中
            }
        },
		onLoad(options) {
			let jsonList = uni.getStorageSync("jsonList"); //获取存储在Storage里的值
			if(!jsonList){
				uni.showToast({title: '请先登录账号',icon: 'none',duration:3000});
				setTimeout(()=>{
					uni.hideToast();
					uni.navigateTo({
						url:'../../pages/index/login'
					})
				},3000);
				return false;
			}
			var data = JSON.parse(jsonList); //JSON字符串转对象
			this.url = 'http://'+data.transfers_url+'/image/public/index/index/';
			this.weburl = getApp().globalData.webUrl +'/html/index.html?orderno=' + options.orderno + '&uid=111&orderbs=' + options.orderbs + '&orderid=' + options.orderid + '&detailid=' + options.detailid + '&tokendog=' + data.softdog + '&weburl=' + getApp().globalData.webUrl + '&orgip=' + data.org + '&url=' + this.url;
		}
    }  
</script>
<style>
</style>
