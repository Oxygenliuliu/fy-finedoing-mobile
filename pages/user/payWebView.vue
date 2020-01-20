<template>
	<view>
		<web-view  :src="src"></web-view> <!-- @message="getMessage" -->
	</view>
</template>

<script>
	import route from '@/common/public.js'
	var payDate = '';
	export default {
		data(){
			return {
				src: '',
				webData: { },
			}
		},
		methods:{
			back(){
				uni.navigateBack({
				    delta: 1
				});
			}
		},
		onBackPress() {
			// #ifdef APP-PLUS  
			var pages = getCurrentPages();
			var page = pages[pages.length - 1];  
			uni.getSystemInfo({
			    success: (res)=>{
			       if( res.platform == 'ios'){
					if(this.webData.pmtNum == 2){
						var currentWebview = page.$getAppWebview(); //页面栈最顶层就是当前webview
						currentWebview.close();
					}
				   }
			    }
			});
			// #endif
		},
		onLoad(options) { 
			try{
				let pages = getCurrentPages();
				let prevPage = 
				// #ifdef H5
				pages[pages.length - 2];
				// #endif
				// #ifndef H5
				pages[pages.length - 2].$vm;
				// #endif
				
				this.webData = prevPage.webData;
				this.webData.isPayTrue = true;
				prevPage.leave(this.webData)
				let webUrl = prevPage.webData.webUrl;
				// #ifdef H5
				route.payWay(webUrl,this.webData.pmtNum) 
				// #endif
				// #ifndef H5
				this.src = getApp().globalData.webUrl + '/html/payment.html?src=' + webUrl;
				// #endif
				if(this.webData.pmtNum == 1){
					setTimeout(()=>{
						uni.navigateBack({
							delta:1
						})
					},4000)
				}
			}catch(e){
				uni.showToast({
					title:'请稍后重试' + e,
					icon:'none'
				})
			} 
			
			
		},
		onShow() {
		}
	};
</script>

<style scoped lang="scss">
	.back{
		position: absolute;
		z-index: 999;
		top:50%;
		left:50%;
		margin-top: -23px;
		margin-left: -50px;
	}
</style>
