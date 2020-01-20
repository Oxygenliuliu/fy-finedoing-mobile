<script>
	export default {
		globalData: {  
		    // #ifdef APP-PLUS
		    webUrl: uni.getStorageSync('domain'),
		    // #endif
			// #ifdef H5
			webUrl: 
			'http://www.finedoing.com',
			//'http://erdoscxgg.com',
			//'http://192.168.199.194',
			// #endif
			// #ifdef MP-WEIXIN
			webUrl: "https://cloud.fydlsoft.com",
			// #endif
		},  
		onLaunch: function() {
			 console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	
</style>
