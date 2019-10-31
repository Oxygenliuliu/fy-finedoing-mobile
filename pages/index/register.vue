<template>
	<view :style="{height:(height)+'px'}">
		<view style="height: 90%;">
			<loginheader></loginheader>
			<view class="form re">
				<view class="user">
					<input placeholder="请输入用户名" v-model="userName"  placeholder-style="color: #cccccc;"/>
				</view>
				<view class="password">
					<input placeholder="请输入密码" v-model="passwd" password=true placeholder-style="color: #cccccc;"/>
				</view>
				<view class="username">
					<view class="get-code" :style="{'color':getCodeBtnColor}" @click.stop="getCode()">{{getCodeText}}</view>
					<input placeholder="请输入手机号" type="number" v-model="phoneNumber" placeholder-style="color: #cccccc;"/>
				</view>
				<view class="code">
					<input placeholder="请输入验证码" type="number" v-model="code" placeholder-style="color: #cccccc;"/>
				</view>
				<view class="btn" @tap="doReg">立即注册</view>
				<view class="res">
					<view @tap="toLogin">已有账号立即登录</view>
				</view>
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
				userName:'',
				phoneNumber:"",
				code:'',
				passwd:"",
				getCodeText:'获取验证码',
				getCodeBtnColor:"#ff0000",
				getCodeisWaiting:false,
				height:'',
			}
		},
		onLoad() {
			try {
			    this.height = this.winHeight
			} catch (e) {
			    // error
			}
		},
		methods: {
			Timer(){},
			getCode(){
				if(this.userName==''){
					uni.showToast({title: '请输入用户名',icon:"none"});
					return false; 
				}
				if(this.passwd==''){
					uni.showToast({title: '请输入密码',icon:"none"});
					return false; 
				}
				if(this.phoneNumber==''){
					uni.showToast({title: '请输入手机号',icon:"none"});
					return false; 
				}
				
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))){ 
					uni.showToast({title: '请填写正确手机号码',icon:"none"});
					return false; 
				} 
				//验证用户名和手机号是否已注册
				uni.request({
					url:route.variable+'/mobile/index/Ahthenticated', //获取验证时调用的接口
					method:'POST',
					data:{
						username:this.userName,
						phone:this.phoneNumber
					},
					success: (res) => {
						if(res.data.status==0){
							uni.hideKeyboard()
							if(this.getCodeisWaiting){
								return ;
							}
							// console.log(res.data.msg);
							this.getCodeText = "发送中..."
							this.getCodeisWaiting = true;
							this.getCodeBtnColor = "rgba(255,0,0,0.5)"
							//示例用定时器模拟请求效果
							
								uni.request({
									url:route.variable+'/mobile/index/sendSms', //获取验证时调用的接口
									method:'POST',
									data:{
										mobile:this.phoneNumber
									},
									success: (result) => {
										console.log(result);
										if(result.data.status==0){
											uni.showToast({title: '验证码已发送',icon:"none"});
										}else{
											uni.showToast({title: '获取验证码失败',icon:"none"});
										}
									}
								})
								this.setTimer();
							
						}else{
							console.log(res.data.msg);
							uni.showToast({title: res.data.msg,icon:"none"});
						}
					},
					fail:(e)=>{
						console.log("fail: "+'错误码201');
						setTimeout(()=>{uni.showToast({title: '获取验证码失败'+'错误码201',icon:"none"});},3000);
					}
				})
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
			doReg(){
				uni.hideKeyboard()
				
				if(this.userName==''){
					uni.showToast({title: '请输入用户名',icon:"none"});
					return false; 
				}
				if(this.passwd==''){
					uni.showToast({title: '请输入密码',icon:"none"});
					return false; 
				}
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
				uni.showLoading({
					title: '注册中...'
				})
				//模板示例把用户注册信息储存在本地，实际使用中请替换为上传服务器。
				
					uni.request({
						url:route.variable+'/mobile/index/registrant', //注册接口地址
						method:'POST',
						data:{  //注册所需传递的参数
							Ident_Signboard: this.Signboard,
							Ident_Signguid: this.Signguid,
							uname:this.userName,
							password:this.passwd,
							pone:this.phoneNumber,
							verify:this.code
						},
						//注册请求成功后的回调函数
						success:(res) => {
							console.log(res);
							//判断返回的状态  0--成功
							if(res.data.status == 0){
								console.log(res)
								uni.redirectTo({
									url: 'login?userName='+this.userName
								})
							}else{
								uni.hideLoading()
								uni.showToast({title: '注册失败，'+res.data.message,icon:"none"});
								
							}
						},
						fail:(e)=>{
							uni.hideLoading()
							uni.showToast({title: '注册失败'+'错误码201',icon:"none"});
							console.log("fail: "+'错误码201');
						}
					})
				
			},
			toLogin(){ 
				uni.hideKeyboard()
				uni.redirectTo({url: 'login'});
				uni.navigateBack();
			},
		}
	}
</script>


<style lang="scss">
	@import "../../static/css/login.scss";
</style>
