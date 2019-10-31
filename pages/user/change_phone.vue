<template>
	<view :style="{height:(height)+'px'}">
		<view style="height: 90%;">
        	<loginheader></loginheader>
        	<view class="form re">
        		<view class="username">
        			<input placeholder="请输入手机号" type="number" v-model="phoneNumber" placeholder-style="color: #cccccc;"/>
        		</view>
        		<view class="password">
        			<input placeholder="请输入登陆密码" v-model="passwd" password=true placeholder-style="color: #cccccc;"/>
        		</view>
        		<view class="btn" @tap="doChange">确认更改</view>
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
				passwd:'',
				Signboard:'',
				Signguid:'',
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
		onShow() {
			var jsonList=uni.getStorageSync("jsonList");
			var data = JSON.parse(jsonList); //JSON字符串转对象
			this.Signboard = data.Ident_Signboard;
			this.Signguid = data.Ident_Signguid;
		},
		methods: {
			doChange(){
				uni.hideKeyboard()
				
				if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))){ 
					uni.showToast({title: '请填写正确手机号码',icon:"none"});
					return false; 
				} 
				if(this.passwd==''){
					uni.showToast({title: '请输入登陆密码',icon:"none"});
					return false; 
				}
				
				uni.showLoading({
					title: '更改中...'
				})
				uni.request({
					url:route.variable+'/mobile/Security/updatePhone',
					method:'GET',
					data:{
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
						phone:this.phoneNumber,
						pwd:this.passwd,
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid
					},	
					success: (res) => {
						if (route.publicIf(res.data.status) == false){
							return false;
						}
						//判断返回的状态  0--成功,1--失败，2--密码错误
						if(res.data.status == 0){
							uni.showToast({title: res.data.message,icon:"none"});
						}else{
							uni.hideLoading()
							uni.showToast({title: res.data.message,icon:"none"});
						}
					},
					fail:(res)=>{
						uni.hideLoading()
						uni.showToast({title: '更改绑定手机号失败'+'错误码201',icon:"none"});
						console.log("fail: "+JSON.stringify(e));
					}	
				})	
			},
		}
	}
</script>


<style lang="scss">
	@import "../../static/css/login.scss";
</style>
