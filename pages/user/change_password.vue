<template>
	<view :style="{height:(height)+'px'}">
		<view style="height: 90%;">
        	<loginheader></loginheader>
        	<view class="form re">
        		<view class="password">
        			<input placeholder="请输入原登陆密码" v-model="oldpasswd" password=true placeholder-style="color: #cccccc;"/>
        		</view>
        		<view class="password">
        			<input placeholder="请输入新登陆密码(至少6位)" v-model="newpasswd" password=true placeholder-style="color: #cccccc;"/>
        		</view>
        		<view class="password">
        			<input placeholder="请确认新登陆密码(至少6位)" v-model="confirmpasswd" password=true placeholder-style="color: #cccccc;"/>
        		</view>
        		<view class="btn" @tap="doChange">修改密码</view>
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
				oldpasswd:'',
				newpasswd:"",
				confirmpasswd:'',
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
				
				if(this.oldpasswd==''){
					uni.showToast({title: '请输入原登陆密码',icon:"none"});
					return false; 
				}
				if(this.newpasswd==''){
					uni.showToast({title: '请输入新登陆密码',icon:"none"});
					return false; 
				}
				if(this.confirmpasswd==''){
					uni.showToast({title: '请确认新登陆密码',icon:"none"});
					return false; 
				}
				if(this.confirmpasswd!=this.newpasswd){
					uni.showToast({title: '请确认两次输入的新密码一致',icon:"none"});
					return false; 
				}
				if(this.newpasswd==this.oldpasswd){
					uni.showToast({title: '不能和原登陆密码一致，请重新输入',icon:"none"});
					return false; 
				}
				if(!RegExp(/^.{6,}$/).test(this.oldpasswd)){
					uni.showToast({title: '原登陆密码格式不对，密码至少6位数',icon:"none"});
					return false; 
				}
				if(!RegExp(/^.{6,}$/).test(this.newpasswd)){
					uni.showToast({title: '新密码格式不对，密码至少6位数',icon:"none"});
					return false; 
				}
				uni.showLoading({
					title: '修改中...'
				})
				uni.request({
					url:route.variable+'/mobile/Security/updatePassword',
					method:'GET',
					data:{
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
						oldpwd:this.oldpasswd,
						newpwd:this.newpasswd,
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid
					},
					success: (res) => {
						console.log(res);
						if (route.publicIf(res.data.status) == false){
							return false;
						}
						if(res.data.status==0){
							uni.showToast({title: '登陆密码修改成功',icon:"none",duration:4000});
							setTimeout(function(){
								uni.redirectTo({
									url: '/pages/index/index'
								});
							},4000)
						}else{
							uni.hideLoading()
							uni.showToast({title: '登陆密码修改失败,'+res.data.message,icon:"none"});
						}
					},
					fail:(res)=>{
						uni.hideLoading()
						uni.showToast({title: '登陆密码修改失败'+'错误码201',icon:"none"});
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
