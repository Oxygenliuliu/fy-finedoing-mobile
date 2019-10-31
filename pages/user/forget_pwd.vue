<template>
	<view :style="{height:(height)+'px'}">
		<view style="height: 90%;">
        	<loginheader></loginheader>
        	<view class="form re">
        		<view class="username">
        			<view class="get-code" :style="{'color':getCodeBtnColor}" @click.stop="getCode()">{{getCodeText}}</view>
        			<input :placeholder="'请输入尾号('+(telephone).substring(7, 11) +')手机号'" type="number" v-model="phoneNumber" placeholder-style="color: #cccccc;"/>
        		</view>
        		<view class="code">
        			<input placeholder="请输入验证码" type="number" v-model="code" placeholder-style="color: #cccccc;"/>
        		</view>
        		<view class="password">
        			<input placeholder="请输入新支付密码(6位纯数字)" type="number" v-model="paywd" password=true placeholder-style="color: #cccccc;" :password="showPassword"/>
        			<view class="uni-icon uni-icon-eye" :class="[!showPassword ? 'uni-active' : '']" @click="changePassword"></view>
        		</view>
        		<view class="btn" @tap="doReset">重置密码</view>
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
				phoneNumber:"",
				code:'',
				paywd:"",
				getCodeText:'获取验证码',
				getCodeBtnColor:"#ff0000",
				getCodeisWaiting:false,
				showPassword: true,//显示密码
				Signboard:'',
				Signguid:',',
				telephone:'',//判断输入的手机号和当前账户注册的手机号是否一致
				height:'',
			}
		},
		onLoad() {
			try {
			    this.height = this.winHeight
			} catch (e) {
			    // error
			}
			var jsonList = uni.getStorageSync("jsonList");
			var data = JSON.parse(jsonList); //JSON字符串转对象
			this.Signboard = data.Ident_Signboard;
			this.Signguid = data.Ident_Signguid;
			uni.request({
				url:route.variable+'/mobile/Subaccount/getMain', //获取验证时调用的接口
				method:'POST',
				data:{
					Ident_Signboard: this.Signboard,
					Ident_Signguid: this.Signguid,
				},
				success: (result) => {
					console.log(result.data.telephone);
					if(result.data.status==0){
						this.telephone=result.data.telephone;
					}else{
						uni.showToast({title: '获取原手机号失败！，'+result.data.message,icon:"none"});
					}
				},
				fail:(e)=>{
					uni.showToast({title: '获取原手机号失败'+'错误码201',icon:"none"});
					console.log("fail: "+'错误码201');
				}
			})
		},
		methods: {
			Timer(){},
			getCode(){
				if(this.getCodeisWaiting){
					return ;
				}
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))){ 
					uni.showToast({title: '请填写正确手机号码',icon:"none"});
					return false; 
				} 
				if(this.telephone!=this.phoneNumber){
					uni.showToast({title: '输入的手机号与该账户注册手机号不一致',icon:"none"});
					return false;
				}
				this.getCodeText = "发送中..."
				this.getCodeisWaiting = true;
				this.getCodeBtnColor = "rgba(255,0,0,0.5)"
				//示例用定时器模拟请求效果
				setTimeout(()=>{
					uni.request({
						url:route.variable+'/mobile/security/verCode', //获取验证时调用的接口
						method:'POST',
						data:{
							telephone:this.phoneNumber
						},
						success: (result) => {
							console.log(result);
							if(result.data.status==0){
								uni.showToast({title: '验证码已发送',icon:"none"});
							}else{
								uni.showToast({title: '获取验证码失败，'+result.data.message,icon:"none"});
							}
						},
						fail:(res)=>{
							uni.showToast({title: '获取验证码失败'+'错误码201',icon:"none"});
							console.log("fail: "+JSON.stringify(e));
						}
					})
					this.setTimer();
				},1000)
				
				
			},
			changePassword: function() {
				this.showPassword = !this.showPassword;
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
			doReset(){
				uni.hideKeyboard()
				if(this.phoneNumber==''){
					uni.showToast({title: '请输入手机号',icon:"none"});
					return false; 
				}
				//模板示例部分验证规则
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))){ 
					uni.showToast({title: '请填写正确手机号码',icon:"none"});
					return false; 
				} 

				//示例验证码，实际使用中应为请求服务器比对验证码是否正确。
				if(this.code==''){ 
					uni.showToast({title: '请输入验证码',icon:"none"});
					return false; 
				}
				
				//示例验证码，实际使用中应为请求服务器比对验证码是否正确。
				if(this.paywd==''){ 
					uni.showToast({title: '请输入6位新支付密码',icon:"none"});
					return false; 
				}
				
				if(!RegExp(/^\d{6}$/).test(this.paywd)){
					uni.showToast({title: '密码格式不对，请输入6位纯数字',icon:"none"});
					return false; 
				}
				
				uni.showLoading({
					title: '提交中...'
				})
				uni.request({
					url:route.variable+'/mobile/security/resetpayment',
					method:'POST',
					data:{
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
						password:this.paywd,
						telephone:this.phoneNumber,
						vercode:this.code
					},
					success: (res) =>{
						console.log(res);
						if(res.data.status==0){
							uni.showToast({
								title:res.data.message,
								icon:'none',
								complete() {
									setTimeout(function() {
										uni.navigateTo({
											url:'../index/login'
										})
									}, 1000);
								}
							})
						}else{
							uni.showToast({
								title:res.data.message,
								icon:'none'
							})
						}
					},
					fail:(e)=>{
						uni.hideLoading()
						uni.showToast({title: '修改支付密码失败'+'错误码201',icon:"none"});
						console.log("fail: "+JSON.stringify(e));
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/uni.css";
	@import "../../static/css/login.scss";
</style>
