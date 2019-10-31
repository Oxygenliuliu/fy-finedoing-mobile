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
	export default {
		components: {
		    copyright,
			loginheader,
		},
		data() {
			return {
				phoneNumber: '',
				passwd:'',
				typeId: '',  //下单也过来的typeid
				showPassword: true,//显示密码
				height:'',
			}
		},
		onShow() {
			
		},
		onLoad(options) {
			this.typeId = options.typeid;
			console.log(options)
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
				uni.hideKeyboard()
				uni.navigateTo({
					url: page
				});
			},
			doLogin(){
				// console.log(this.phoneNumber)
				// console.log(this.passwd)
				if(this.phoneNumber==''){
					uni.showToast({title: '请填写用户名或手机号',icon:"none"});
				}else if(this.passwd==''){
					uni.showToast({title: '请填写登录密码',icon:"none"});
				}else{
					uni.hideKeyboard();
					//验证手机号码
					// if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))){ 
					// 	uni.showToast({title: '请填写正确手机号码',icon:"none"});
					// 	return false; 
					// }
					uni.showLoading({
						title: '登录中...'
					})
					//模板示例比对本地储存的用户信息，实际使用中请替换为上传服务器比对。
					setTimeout(()=>{
						uni.request({
							url:route.variable+'/mobile/index/dologin', //接口地址
							method: 'GET', //请求方式
							//传递的参数
							data:{
								name:this.phoneNumber,
								passwords:this.passwd
							},
							//请求成功后的回调函数
							success:(res) => {
								//判断返回的状态  200--成功
								if(res.data.status == 200){
									var loginData = new Object();  //声明一个对象
									loginData.csid = res.data.csid; //csid:
									loginData.dbname = res.data.dbname; //数据库名字
									loginData.dis = res.data.dis; //区分主账户还是子账户
									loginData.org = res.data.org; //请求的域名地址
									loginData.shop = res.data.shop; //数据库的数量
									loginData.softdog = res.data.softdog; //加密狗
									loginData.Ident_Signboard = res.data.tokenInfo.Ident_Signboard; //令牌
									loginData.Ident_Signguid = res.data.tokenInfo.Ident_Signguid; //Guid：识别用户身份
									loginData.userName = res.data.username;  //登录用户名
									var json = JSON.stringify(loginData); //转换JSON格式
									uni.setStorageSync('jsonList',json) //存储进去
									uni.setStorageSync('isLogin','1')
									if(this.typeId == undefined){
										uni.redirectTo({
											url:'index'
										});
									}else{
										uni.navigateBack();   //返回到下单页面
										// uni.navigateTo({
										// 	url: '../product/productinfo?type='+this.typeId
										// })
									}
								}else{
									uni.hideLoading()
									uni.showToast({
										title:'登录失败，账号或密码错误',
										icon:'none',
									})
									
								}
							},
							fail:function(e){
								uni.hideLoading()
								uni.showToast({title: '登录失败，请检查手机网络！',icon:"none"});
								
							}
						})
					},1000)
				}
				
			},
			changePassword: function() {
				this.showPassword = !this.showPassword;
			}
		}
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
	}
	
</style>
