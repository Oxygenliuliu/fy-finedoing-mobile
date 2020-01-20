<template>
	<view class="content" :style="{height:(height)+'px'}">
		<view style="height: 100%;">
			<view class="login">
				<view class="l_top" style="margin-bottom:100upx;">
					<view class="l_text">{{tips[cztime].msg}}</view>
				</view>
				<view class="l_top">
					<view class="mima">
						<view class="item">
							<view v-if="len<=0" :class="{line:show}"></view>
							<view v-if="len>=1" class="dot"></view>
						</view>
						<view class="item">
							<view v-if="len==1" :class="{line:show}"></view>
							<view v-if="len>=2" class="dot"></view>
						</view>
						<view class="item">
							<view v-if="len==2" :class="{line:show}"></view>
							<view v-if="len>=3" class="dot"></view>
						</view>
						<view class="item">
							<view v-if="len==3" :class="{line:show}"></view>
							<view v-if="len>=4" class="dot"></view>
						</view>
						<view class="item">
							<view v-if="len==4" :class="{line:show}"></view>
							<view v-if="len>=5" class="dot"></view>
						</view>
						<view class="item">
							<view v-if="len==5" :class="{line:show}"></view>
							<view v-if="len>=6" class="dot"></view>
			
						</view>
						<view v-if="len>5" class="dot">{{numlength}}</view>
						<input class="trade_pwd" disabled="disabled" maxlength="6" id="targetInput" @focus="focus1" @blur="blur1" type="number"
						 v-model="trade_pwd" />
					</view>
				</view>
			</view>
			<view class="keypan">
				<!-- <view class="titles">
					<span @click="back()">取消</span>
					<span @click='setpwd'>确认</span>
				</view> -->
				<view class="pan_num_key" :class="[items.checked?'pan_num_checked':'pan_num_key']" v-for="(items,index) in boardlists"
				 :key="index" @click="writepwd(items.id)"><image class="" src="../../static/image/delete.png" :style="{display:(items.id == '12'?'block':'none')}"></image>{{items.con}}</view>
			</view>
			<uni-popup ref="popup" type="bottom" :show="showPopup" custom="true">
				<view class="layer uni-flex uni-column">
					<view class="flex-item flex-item-V layer_item layer_header">
						<text>验证手机号</text>
					</view>
					<view class="flex-item flex-item-V layer_item">
						<text>请输入尾号({{(telephone).substring(7, 11)}})的短信验证码</text>
					</view>
					<view class="flex-item flex-item-V layer_item code">
						<view class="get-code" :style="{'color':getCodeBtnColor}" @click.stop="getCode()">{{getCodeText}}</view>
						<input placeholder="输入验证码" type="number" v-model="code" placeholder-style="color: #cccccc;"/>
					</view>
					<view class="flex-item flex-item-V layer_item">
						<button class="mini-btn" type="default" size="mini" @tap="back()">取消</button>
						<button class="mini-btn" type="default" size="mini" @tap="codeBtn()">确定</button>
					</view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>
<script>
	import uniPopup from "@/components/uni-popup/uni-popupPayResults.vue"
	import route from "@/common/public.js"
	import copyright from "@/components/customize/copyright.vue"
	import {
		mapGetters,
		mapActions
	} from 'vuex';


	export default {
		components: {uniPopup,copyright},
		computed: {
			...mapGetters(['statusBarHeight'])
		},
		data() {
			return {
				height:'',
				Signboard:'',
				Signguid:'',
				code:'',//验证码
				trade_pwd: '',
				old_pwd:'',
				new_pwd:'',
				comfirm_pwd:'',
				// focus: true,
				show: false,
				numarr: [],
				cztime:0,
				numlength: "",
				
				telephone:'',//获取当前主账户注册的手机号
				getCodeText:'获取验证码',
				getCodeBtnColor:"#ff0000",
				getCodeisWaiting:false,
				showPopup:false,
				boardlists: [{
						id: 1,
						con: 1,
						checked: false
					}, {
						id: 2,
						con: 2,
						checked: false
					}, {
						id: 3,
						con: 3,
						checked: false
					}, {
						id: 4,
						con: 4,
						checked: false
					}, {
						id: 5,
						con: 5,
						checked: false
					}, {
						id: 6,
						con: 6,
						checked: false
					}, {
						id: 7,
						con: 7,
						checked: false
					}, {
						id: 8,
						con: 8,
						checked: false
					}, {
						id: 9,
						con: 9,
						checked: false
					}, {
						id: 10,
						con: "",
						checked: false
					}, {
						id: 11,
						con: 0,
						checked: false
					},
					{
						id: 12,
						con: "",
						checked: false
					},
				],
				tips:[
					{msg:'请输入原支付密码'},
					{msg:'请输入新支付密码'},
					{msg:'请再次输入新支付密码'},
					{msg:'请输入新支付密码'},
				]
			};
		},
		computed: {
			len: function() {
				if (this.trade_pwd.length == 6) {
					// 第一次进来可以点击的

				}
				return this.trade_pwd.length
			}
		},
		onLoad(e) {
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
			if(e.cztime){
				//判断是否从找回支付密码页面过来，是就把cztime改为3
				this.cztime = 3;
				this.showPopup = true;
				uni.setNavigationBarTitle({
					title:'找回支付密码'
				});
			}
			var jsonList=uni.getStorageSync("jsonList");
			var data = JSON.parse(jsonList); //JSON字符串转对象
			this.Signboard = data.Ident_Signboard;
			this.Signguid = data.Ident_Signguid;
			uni.request({
				url:getApp().globalData.webUrl+'/mobile/Subaccount/getMain', //获取验证时调用的接口
				method:'POST',
				data:{
					Ident_Signboard: this.Signboard,
					Ident_Signguid: this.Signguid,
				},
				success: (result) => {
					if(result.data.status==0){
						this.telephone=result.data.telephone;
					}else{
						uni.showToast({title: '获取原手机号失败！，'+result.data.message,icon:"none"});
					}
				},
				fail:(e)=>{
					uni.showToast({title: '获取原手机号失败'+'错误码201',icon:"none"});
				}
			})
		},
		methods: {
			Timer(){},
			changeStatus(flag){
				switch (flag){
					case 0:
						this.getCodeText = "获取验证码";
						this.getCodeisWaiting = false;
						this.getCodeBtnColor = "#ff0000";
						
						break;
					case 1:
						this.getCodeText = "发送中...";
						this.getCodeisWaiting = true;
						this.getCodeBtnColor = "rgba(255,0,0,0.5)";
						break;
					case 2:
						this.getCodeText = "重新获取(60)";
						this.getCodeisWaiting = false;
						this.getCodeBtnColor = "#ff0000";
						break;
					default:
						break;
				}
			},
			getCode(){
				if(this.getCodeisWaiting){
					return ;
				}
				this.changeStatus(1);
				//示例用定时器模拟请求效果
				setTimeout(()=>{
					uni.request({
						url:getApp().globalData.webUrl+'/mobile/security/verCode', //获取验证时调用的接口
						method:'POST',
						data:{
							telephone:this.telephone
						},
						success: (result) => {
							if(result.data.status==0){
								uni.showToast({title: '验证码已发送',icon:"none"});
							}else{
								uni.showToast({title: '获取验证码失败，'+result.data.message,icon:"none"});
								this.changeStatus(0);
							}
						},
						fail:(res)=>{
							uni.showToast({title: '获取验证码失败'+'错误码201',icon:"none"});
							this.changeStatus(0);
						}
					})
					this.setTimer();
				},1000)
				
				
			},
			setTimer(){
				let holdTime = 60;
				this.getCodeText = "重新获取(60)"
				this.Timer = setInterval(()=>{
					if(holdTime<=0){
						this.getCodeisWaiting = false;
						this.getCodeBtnColor = "#ff0000";
						this.getCodeText = "获取验证码"
						clearInterval(this.Timer);
						return ;
					}
					this.getCodeText = "重新获取("+holdTime+")"
					holdTime--;
					
				},1000)
			},
			codeBtn(){
				//判断验证码是否为空
				if(this.code==''){ 
					uni.showToast({title: '请输入验证码',icon:"none"});
					return false; 
				}
				
				uni.request({
					url:getApp().globalData.webUrl+'/mobile/security/validation',
					method:'POST',
					data:{
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
						telephone:this.telephone,
						vercode:this.code
					},
					success: (res) =>{
						if(res.data.status==0){
							this.showPopup =false
						}else{
							uni.showToast({title:'验证不通过，'+res.data.message,icon:'none'})
						}
					},
					fail:(e)=>{
						uni.hideLoading()
						uni.showToast({title: '修改支付密码失败'+'错误码201',icon:"none"});
					}
				})
			},
			writepwd(num) {
				if (num == 12) {
					this.close();
					return;
				}
				if (num == 10) {
					return;
				}
				if (num == 11) {
					num = 0;
					this.boardlists[10].checked = true;
				} else {
					this.boardlists[num - 1].checked = true;
				}
				this.numarr.push(num);
				
				
				var that = this;
				setTimeout(function() {
					for (var i = 0; i < that.boardlists.length; i++) {
						that.boardlists[i].checked = false;
					}
				}, 200)
				this.trade_pwd = this.numarr.join("");
				if (this.numarr.length == 6) {
					this.setpwd();
				}
			},
			//密码框
			back() {
				uni.navigateBack();
			},
			//回退方法
			close() {
				this.numarr.pop();
				if (this.trade_pwd.length > 0) {
					this.trade_pwd = this.trade_pwd.substring(0, this.trade_pwd.length - 1);
				}
			},
			blur1() {
				this.show = false
			},
			focus1() {

				this.show = true
			},
			reset(){
				this.trade_pwd = '';
				this.show = true
				this.numarr = [],
				this.numlength = ""
			},
			// 确认执行的方法
			setpwd() {
				if (this.trade_pwd.length < 6) {
					uni.showToast({title: '密码长度不能少于6位',icon:"none",duration:2000});
					return;
				}
				switch (this.cztime){
					case 0:
						this.old_pwd = this.trade_pwd;
						uni.request({
							url:getApp().globalData.webUrl+'/mobile/security/check_pass',
							method:'GET',
							data:{
								Ident_Signboard: this.Signboard,
								Ident_Signguid: this.Signguid,
								oldpay:this.old_pwd,
							},
							success: (res) => {
								console.log(res)
								uni.hideLoading();
								if (route.publicIf(res.data.status) == false){
									return false;
								}
								if(res.data.status==0){
									// uni.showToast({title: '支付密码修改成功，返回首页',icon:"none",duration:4000});
									++this.cztime;
									this.reset()
								}else{
									uni.showToast({title: '原支付密码不正确,请重新输入',icon:"none"});
									this.reset();
								}
							},
							fail:(res)=>{
								uni.hideLoading()
								uni.showToast({title: '原支付密码验证失败,请重新输入'+'错误码201',icon:"none"});
								this.reset();
							}	
						})	
						
						break;
					case 1:
						this.new_pwd = this.trade_pwd;
						this.reset()
						if(this.new_pwd==this.old_pwd){
							uni.showToast({title: '不能和旧支付密码一致，请重新输入',icon:"none"});
							return false; 
						}
						++this.cztime;
						break;
					case 2:
						this.comfirm_pwd = this.trade_pwd;
						if(this.new_pwd != this.comfirm_pwd){
							uni.showToast({title: '请确认两次输入的新支付密码一致',icon:"none"});
							this.reset()
							return false;
						}
						uni.showLoading({
							title: '修改中...'
						})
						uni.request({
							url:getApp().globalData.webUrl+'/mobile/Modify/updatePayPwd',
							method:'GET',
							data:{
								Ident_Signboard: this.Signboard,
								Ident_Signguid: this.Signguid,
								oldpay:this.old_pwd,
								newpay:this.new_pwd,
							},
							success: (res) => {
								if (route.publicIf(res.data.status) == false){
									return false;
								}
								if(res.data.status==0){
									uni.showToast({title: '支付密码修改成功，返回首页',icon:"none",duration:1000});
									setTimeout(function(){
										// #ifndef H5
										uni.switchTab({
											url: '../../pages/index/index'
										})
										// #endif
										// #ifdef H5
										uni.redirectTo({
											url: '../../pages/index/index'
										});
										// #endif
									},1100)
								}else{
									uni.hideLoading();
									uni.showToast({title: '支付密码修改失败',icon:"none"});
									this.reset();
								}
							},
							fail:(res)=>{
								uni.hideLoading()
								uni.showToast({title: '支付密码修改失败'+'错误码201',icon:"none"});
								this.reset();
							}	
						})	
						break;
					case 3:
						this.new_pwd = this.trade_pwd;
						uni.request({
							url:getApp().globalData.webUrl+'/mobile/security/resetpayment',
							method:'POST',
							data:{
								Ident_Signboard: this.Signboard,
								Ident_Signguid: this.Signguid,
								password:this.new_pwd
							},
							success: (res) =>{
								if(res.data.status==0){
									uni.showToast({title:'重设支付密码成功，返回首页',icon:'none',duration:4000})
									setTimeout(function(){
										// #ifndef H5
										uni.switchTab({
											url: '../../pages/index/index'
										})
										// #endif
										// #ifdef H5
										uni.redirectTo({
											url: '../../pages/index/index'
										});
										// #endif
										
									},1100)
								}else{
									uni.showToast({title:'重设支付密码失败，请重新输入密码',icon:'none'})
									this.reset();
								}
							},
							fail:(e)=>{
								uni.hideLoading()
								uni.showToast({title:'重设支付密码失败'+'错误码201',icon:'none'})
								this.reset();
							}
						})
						break;
					default:
						break;
				}
				
			},

		}

	};
</script>
<style lang="scss" scoped>
	@import "../../common/uni.css";
	page{overflow: hidden;height: calc(100% - 44px);}
	.content {
		width: 100%;
		font-size: 28upx;
		background: #fff;
		color: #555;
		height: 100vh;
		font-weight: 400;

		.keypan {
			width: 100vw;
			height: 35vh;
			position: fixed;
			left: 0;
			bottom: 0;
			background: #E6E6E6;
			.pan_num_key {
				width: 33vw;/*写给不支持calc()的浏览器*/
				width: -moz-calc(33vw - 1px);
				width: -webkit-calc(33vw - 1px);
				width: calc(33vw - 1px);
				height: 25%;
				float: Left;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				background: #fff;
				border: 1px solid #f7f7f7;
				font-size: 1rem;
				font-weight: 600;
				line-height: 25px;
			}
			.pan_num_key image{
				width: 5vw;
				height: 5vw;
			}
			
			.pan_num_checked {
				animation: checked_bg 0.08s ease;
			}
		}

		.navigation_bar {
			display: flex;
			flex-direction: row;
			align-items: center;
			padding-top: 60upx;

			.back-icon {
				width: 18upx;
				height: 34upx;
			}
		}

		.login {
			width: 100%;
			height: 300upx;

			.l_top {
				width: 700upx;
				height: 200upx;
				margin: 0 auto;
				position: relative;

				.l_text {
					width: 445upx;
					height: 69upx;
					font-size: 0.7rem;
					font-weight: 600;
					text-align: center;
					margin: auto;
					top: 100upx;
					position: relative;

				}

				.lt {
					margin-top: -20upx;
					font-size: 25upx;
					color: #555
				}
			}
		}

		.title {
			color: #616161;
			text-align: center;
			font-size: 30upx;
			margin-bottom: 34upx;
		}

		.mima {

			flex-direction: row;
			width: 680upx;
			height: 78upx;
			margin: 0 auto;
			position: relative;

			.item {
				width: 92upx;
				height: 100%;
				box-sizing: border-box;
				display: flex;
				float: left;
				align-items: center;
				justify-content: center;
				border-bottom: 1upx solid #E5E5E5;
				margin-left: 20upx;

				.line {
					width: 2upx;
					height: 40upx;
					background: #979797;
					animation: shan 1s ease infinite;
				}

				.dot {
					width: 20upx;
					height: 20upx;
					border-radius: 20upx;
					background: black;
				}
			}

			.trade_pwd {
				position: absolute;
				height: 78upx !important;
				width: 480upx;
				opacity: 0;
			}
		}
		// .bottom {
		// 	.uni-popup {
				
		// 	}
		// }
		
	}
	.layer{
		width: 80vw;
		height: 60vw;
		background: #ffffff;
		border: 1px solid #ffffff;
		border-radius: 5px;
		display: inline-flex;
		align-items: center;
		justify-content: flex-start;
		.layer_header{
			font-weight: 600;
			border-bottom: 1px solid #F7F7F7;
		}
		.layer_item{
			width: 100%;
			padding: 20upx 0;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			.mini-btn{
				margin: 0 60upx;
			}
			.mini-btn::after{
				display: none;
			}
		}
		.code {
			width: calc(70% - 90upx);
			height: 90upx;
			display: flex;
			align-items: center;
			border-radius: 10upx;
			background-color: rgba(150, 150, 150, 0.1);
			padding: 0 45upx;
			margin-bottom: 26upx;
			position: relative;
			.get-code{
				position: absolute;
				height: 90upx;
				display: flex;
				align-items: center;
				justify-content: center;
				right: 0;
				padding: 0 40upx;
				z-index: 3;
				&:after {
					display: none;
				}
			}
			input {
				width: 100%;
				height: 50upx;
				color: rgba($color: #222222, $alpha: 0.8);
				font-weight: 200;
			}
		}
	}

	@keyframes shan {
		from {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	}

	@keyframes checked_bg {
		0% {
			background: #fff
		}

		50% {
			background: #D3D1E2
		}

		100% {
			background: #fff
		}
	}
</style>
