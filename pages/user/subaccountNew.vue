<template>
	<view :style="{height:(height)+'px'}">
		<view class="" style="height: 90%;">
			<loginheader></loginheader>
			<view class="form re">
				<view class="user">
					<input placeholder="请输入子账户名" v-model="userName"  placeholder-style="color: #cccccc;"/>
				</view>
				<view class="password">
					<input placeholder="请输入子账户密码(至少6位)" v-model="passwd" password=true placeholder-style="color: #cccccc;"/>
				</view>
				<view class="username">
					<input placeholder="请输入子账户手机号" type="number" v-model="phoneNumber" placeholder-style="color: #cccccc;"/>
				</view>
			
				<view class="btn" @tap="doReg">立即注册</view>
				
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
				passwd:"",
				Signboard:'',
				Signguid:'',
				height:''
			}
		},
		onLoad() {
			try {
			    this.height = this.winHeight
			} catch (e) {
			    // error
			}
			var jsonList=uni.getStorageSync("jsonList");
			var data = JSON.parse(jsonList); //JSON字符串转对象
			this.Signboard = data.Ident_Signboard;
			this.Signguid = data.Ident_Signguid;
		},
		methods: {
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
				if(!RegExp(/^.{6,}$/).test(this.passwd)){
					uni.showToast({title: '密码格式不对，密码至少6位数',icon:"none"});
					return false; 
				}
				if(this.phoneNumber==''){
					uni.showToast({title: '请输入手机号',icon:"none"});
					return false; 
				}
				//模板示例部分验证规则
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))){ 
					uni.showToast({title: '请填写正确格式的手机号码',icon:"none"});
					return false; 
				} 

				uni.showLoading({
					title: '注册中...'
				})
				
					uni.request({
						url:getApp().globalData.webUrl+'/mobile/subaccount/creSubAccount', //注册接口地址
						method:'POST',
						data:{  
							Ident_Signboard: this.Signboard,
							Ident_Signguid: this.Signguid,
							loginname:this.userName,
							phone:this.phoneNumber,
							password:this.passwd
						},
						//注册请求成功后的回调函数
						success:(res) => {
							//判断返回的状态  0--成功
							if(res.data.status == 0){
								uni.showToast({title: '注册子账号成功',icon:"none"});
								uni.redirectTo({
									url: 'subaccount'
								})
							}else{
								uni.hideLoading()
								uni.showToast({title: '注册子账号失败，'+res.data.message,icon:"none"});
								
							}
						},
						fail:(e)=>{
							uni.hideLoading()
							uni.showToast({title: '注册子账号失败'+JSON.stringify(e),icon:"none"});
						}
					})
				
			},
		}
	}
</script>


<style lang="scss">
	@import "../../static/css/login.scss";
</style>
