<template>
	<view :style="{height:(height)+'px'}">
        <view style="height: 90%;">
			<loginheader></loginheader>
			<!-- 账号密码输入框 -->
			<view class="form">
				<view class="username">
					<input placeholder="请输入用户名/手机号" v-model="phoneNumber" class="user-input"/>
				</view>
				<view class="password">
					<input placeholder="请输入密码" v-model="passwd" password=true class="password-input" :password="showPassword"/>
					<view class="uni-icon uni-icon-eye" :class="[!showPassword ? 'uni-active' : '']" @click="changePassword"></view>
				</view>
				<view class="btn" @tap="doLogin">登 录</view>
				<view class="res">
					<view @tap="toPage('register')">用户注册</view>
					<view @tap="toPage('retrievepwd')">忘记密码</view>
				</view>
				
				<!-- #ifdef APP-PLUS||MP-WEIXIN -->
				<view class="scanBtn">
					<uni-icon type="scan" size="30" @tap="scan"></uni-icon>
					<text @tap="scan">扫码登录</text>
				</view>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS -->
				<view class="setting">
					<text @tap="toPage('setting')">高级设置</text>
				</view>
				<!-- #endif -->
			</view>
		</view>
		<copyright></copyright>
	</view>
</template>
<script>
	import md5 from "@/common/SDK/md5.min.js";
	import route from "@/common/public.js"
	import copyright from "@/components/customize/copyright.vue"
	import loginheader from "@/components/customize/loginheader.vue"
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	import permision from "@/common/permission.js"
	import Base64 from "@/common/base64.min.js"
	export default {
		components: {
		    copyright,
			loginheader,
			uniIcon
		},
		data() {
			return {
				globalHttp:'',//全局网址
				phoneNumber: '',
				passwd:'',
				typeId: '',  //下单也过来的typeid
				showPassword: true,//显示密码
				height:'',
				flag:0,//-1是主页登陆不上的，0是正常的
			}
		},
		onLoad(options) {
			this.flag = options.flag;
			console.log(getApp().globalData.webUrl)
			this.typeId = options.typeid;
			if(options.userName){
				this.phoneNumber = options.userName
				this.passwd = ''
			}
			try {
				this.height = this.winHeight
			} catch (e) {
			    // error
			}
		}, 
		methods: {
			toPage(page){
				uni.hideKeyboard();
				if(this.flag ==-1){
					uni.navigateTo({
						url: 'setting'
					});
				}else{
					uni.navigateTo({
						url: page
					});
				}
			},
			doLogin(){
				if(this.phoneNumber == ''){
					uni.showToast({title: '请填写用户名或手机号',icon:"none"});
				}else if(this.passwd==''){
					uni.showToast({title: '请填写登录密码',icon:"none"});
				}else{
					uni.hideKeyboard();
					uni.showLoading({
						title: '登录中...'
					})
					//模板示例比对本地储存的用户信息，实际使用中请替换为上传服务器比对。
					setTimeout(()=>{
						uni.request({
							url:getApp().globalData.webUrl+'/mobile/index/dologin', //接口地址
							method: 'GET', //请求方式
							//传递的参数
							data:{
								name:this.phoneNumber,
								passwords:this.passwd
							},
							//请求成功后的回调函数
							success:(res) => {
								uni.hideLoading()
								//判断返回的状态  200--成功
								if(res.data.status == 200){
									uni.hideLoading();
									var json = JSON.stringify(res.data); //转换JSON格式
									uni.setStorageSync('jsonList',json) //存储进去
									uni.setStorageSync('isLogin','1')
									if(this.typeId == undefined){
										// #ifndef H5
										uni.switchTab({
											url:'index'
										});
										// #endif
										// #ifdef H5
										uni.redirectTo({
											url:'index'
										});
										// #endif
									}else{
										uni.navigateBack();   //返回到下单页面
									}
								}else{
									uni.showToast({
										title:'登录失败，账号或密码错误',
										icon:'none',
									})
									this.flag = -1;
								}
							},
							fail:(e)=>{
								uni.hideLoading()
								uni.showToast({title: '登录失败，请点击"高级设置"设置好服务器IP/域名，或直接扫码登录！',icon:"none",duration:4000});
								this.flag = -1;
							}
						})
					},1000)
				}
				
			},
			changePassword: function() {
				this.showPassword = !this.showPassword;
			},
			async scan() {
				// #ifdef APP-PLUS
				let status = await this.checkPermission();
				if (status !== 1) {
				    return;
				}
				// #endif
				uni.scanCode({
					success: (res) => {
						var data = JSON.parse(res.result); //JSON字符串转对象
						getApp().globalData.webUrl = data.url;
						uni.setStorageSync('domain',data.url);
						this.phoneNumber = decodeURI(data.username);
						this.passwd = Base64.Base64.decode(decodeURI(Base64.Base64.decode((data.password).replace(/\=/g,"/="))));
						this.doLogin()
					},
					fail: (err) => {
						// #ifdef MP
						uni.getSetting({
							success: (res) => {
								let authStatus = res.authSetting['scope.camera'];
								if (!authStatus) {
									uni.showModal({
										title: '授权失败',
										content: 'Hello uni-app需要使用您的相机，请在设置界面打开相关权限',
										success: (res) => {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									})
								}
							}
						})
						// #endif
					}
				});
			}
			// #ifdef APP-PLUS
			,
			async checkPermission(code) {
				let status = permision.isIOS ? await permision.requestIOS('camera') :
					await permision.requestAndroid('android.permission.CAMERA');
			
				if (status === null || status === 1) {
					status = 1;
				} else {
					uni.showModal({
						content: "需要相机权限",
						confirmText: "设置",
						success: function(res) {
							if (res.confirm) {
								permision.gotoAppSetting();
							}
						}
					})
				}
				return status;
			}
			// #endif
		},
	}
</script>
<style lang="scss" scoped>
	@import "../../common/uni.css";
	@import "../../static/css/login.scss";
	.form {
		.userName{
			.user-input{
				placeholder-color: #ccc;
			}
			.password-input{
				placeholder-color: #ccc;
			}
		}
		.res {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100upx;
			color: rgba($color: #222222, $alpha: 0.8);
		}
		/* #ifdef APP-PLUS || MP-WEIXIN */
		.scanBtn{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.setting{
			display: flex;
			justify-content: center;
			align-items: center;
			color: rgba(34, 34, 34, 0.8);
			margin-top:20vw;
		}
		/* #endif */
	}
</style>