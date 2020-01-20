<template>
	<view :style="{height:(height)+'px'}">
		<view style="height: 90%;">
        	<loginheader></loginheader>
        	<view class="form re">
        		<view class="password">
        			<input placeholder="请输入服务器(IP/域名)" v-model="domain" type="text" placeholder-style="color: #cccccc;" />
        		</view>
        		<view class="btn" @tap="doReset">设置服务器(IP/域名)</view>
        	</view>
        </view>
		<copyright></copyright>
	</view>
</template>
<script>
	import route from "@/common/public.js"
	import copyright from "@/components/customize/copyright.vue"
	import loginheader from "@/components/customize/loginheader.vue"
	export default {
		components: {
		    copyright,
			loginheader
		},
		data() {
			return {
				domain:'',
				height:''
			}
		},
		onLoad() {
			// #ifndef APP-PLUS
			uni.redirectTo({
				url:'login'
			})
			// #endif
			var domain = uni.getStorageSync('domain');
			if(domain){
				this.domain = domain;
			}
			try {
				// #ifndef APP-PLUS
				this.height = this.winHeight - statusBarHeight
				// #endif
				// #ifdef APP-PLUS
				let statusBarHeight = uni.getSystemInfoSync().statusBarHeight
				this.height = this.winHeight - statusBarHeight
				// #endif
			} catch (e) {
			    // error
			}
			
		},
		methods: {
			
			doReset(){
				uni.hideKeyboard()
				if(this.domain==''){
					uni.showToast({title: '请输入域名',icon:"none"});
					return false; 
				}
				getApp().globalData.webUrl = this.domain;
				uni.setStorageSync('domain',this.domain);
				uni.redirectTo({
					url:'login'
				})
			}
		}
	}
</script>
<style lang="scss">
	@import "../../common/uni.css";
	@import "../../static/css/login.scss";
	.uni-bottom {
		position: absolute;
		bottom: 10px;
	}
</style>
