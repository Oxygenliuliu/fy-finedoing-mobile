<template>
	<view class="now" :style="{height:(height)+'px'}">
		<!-- 公司账号显示的个人信息块 -->
		<view class="uni-padding-wrap" style="height: 540px;">
			<uni-view class="uni-active">
				<uni-view class="uni-list-cell">
					<uni-view class="uni-list-cell-navigate" style="letter-spacing: 5px;color: #999999;">基本信息</uni-view>
				</uni-view>
				<uni-view class="uni-list-cell">
					<uni-view class="uni-list-cell-navigate informationName">公司名：</uni-view>
					<input type="text" v-model="companyName" :disabled="disabledValue" placeholder="请填写公司名" @click="companyClick">
				</uni-view>
				<uni-view class="uni-list-cell" >
					<uni-view class="uni-list-cell-navigate informationName">手机：</uni-view>
					<input type="number" v-model="telephone" :disabled="disabledValue" id="dom" placeholder="请填写手机号" @click="companyClick">
				</uni-view>
				<uni-view class="uni-list-cell">
					<uni-view class="uni-list-cell-navigate informationName">座机：</uni-view>
					<input type="text" v-model="phone" :disabled="disabledValue" placeholder="请填写座机号(如028-87588698)" @click="companyClick">
				</uni-view>
				<uni-view class="uni-list-cell">
					<uni-view class="uni-list-cell-navigate" style="letter-spacing: 5px;color: #999999;">开票信息</uni-view>
				</uni-view>
				<uni-view class="uni-list-cell">
					<uni-view class="uni-list-cell-navigate informationName">开票抬头：</uni-view>
					<input type="text" v-model="title" :disabled="disabledValue" placeholder="请填写开票抬头" @click="companyClick">
				</uni-view>
				<uni-view class="uni-list-cell" >
					<uni-view class="uni-list-cell-navigate informationName">税号：</uni-view>
					<input type="text" v-model="taxcode" :disabled="disabledValue" placeholder="请填写税号" @click="companyClick">
				</uni-view>
				<uni-view class="uni-list-cell" >
					<uni-view class="uni-list-cell-navigate informationName">开户行/账号：</uni-view>
					<input type="text" v-model="bank" :disabled="disabledValue" placeholder="请填写开户行/账号" @click="companyClick">
				</uni-view>
				<uni-view class="uni-list-cell" >
					<uni-view class="uni-list-cell-navigate informationName">地址/电话：</uni-view>
					<input type="text" v-model="address" :disabled="disabledValue" placeholder="请填写地址/电话" @focus="WdoRsize" @click="companyClick">
				</uni-view>
			</uni-view>	
		</view>
		<view id="navbottom" style="z-index: 999;" @tap="changePersonal">
			<button :disabled="disabledValue">保 存</button>
		</view>
	</view>
</template>
	
<script>
	import route from "@/common/public.js"
	export default {
	  data() {
		return {
			Signboard:'',
			Signguid:'',
			
			companyName:'', //用户名
			telephone:'', //手机号
			phone:'', //座机号
			bank:'', //开户行/账号
			title:'', //开票抬头
			taxcode:'', //税号
			address:'', //地址
			disabledValue:false ,//是否禁用
			
			unicommonHeight: false,
			windowHeight: '',
			dis:'', //用于判断是公司 还是 个人
		  // btnActive:true,
		}
	},
	methods: {
		WdoRsize() {
			// 获取系统信息 windowHeight：可使用窗口高度
			 uni.getSystemInfo({
				success: (res)=> {
					this.windowHeight = res.windowHeight;
				}
			}); 
			// 监听窗口高度变化事件
			uni.onWindowResize((res) => {
				// 判断页面高度是否改变
		        if(res.size.windowHeight != this.windowHeight){
		            this.unicommonHeight = true;
		        }else{
					this.unicommonHeight = false;
		        }
		    });
		},
		companyClick(){
			if(this.dis!='COMPANY'){
				this.disabledValue=true;
				uni.showToast({
					title: '当前为子账号，暂无操作权限',
					icon:'none'
				});
			}
		},
		/* 点击保存按钮触发的事件 */
		changePersonal(evt){
			if(this.dis!='COMPANY'){
				this.disabledValue=true;
				uni.showToast({title: '当前为子账号，暂无操作权限',icon:'none'});
				return false;
			}
			
			if(this.telephone==""){
				uni.showToast({title:'请填写手机号',icon:'none'})
				return false;
			}
			// if(this.phone==""){
			// 	uni.showToast({title:'请填写座机号',icon:'none'})
			// 	return false;
			// }
			if(!(/^1[3456789]\d{9}$/).test(this.telephone)){
				uni.showToast({title:'手机号格式不正确',icon:'none'})
				return false;
			}
			
			if(this.phone!=""){
				if (!RegExp(/^(\d{2,4}-?)?\d{7,8}$/).test(this.phone)){
					uni.showToast({title:'座机号码格式不正确',icon:'none'})
					return false;
				}
			}
			
			if(this.title!=""||this.taxcode!=""||this.bank!=""||this.address!=""){
				if(!(this.title!="" && this.taxcode!="" && this.bank!="" && this.address!="")){
					uni.showToast({title:'请将开票信息填写完整',icon:'none'})
					return false;
				}else{
					if(!RegExp(/^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{15,}$|^[0-9]{15,}$/).test(this.taxcode)){ 
						uni.showToast({title:'税号格式不正确',icon:'none'})
						return false;
					}
				}
			}
			
			uni.request({
				url:getApp().globalData.webUrl+'/mobile/personal/updUserInfo',
				method:'POST',
				data:{
					Ident_Signboard: this.Signboard,
					Ident_Signguid: this.Signguid,
					name:this.companyName, //用户名
					title:this.title, //开票抬头
					tax_code:this.taxcode, //税号
					bank_code:this.bank, //开户行
					address:this.address, //地址
					phone:this.phone, //座机
					telephone:this.telephone //手机号
				},
				success: (res) => {
					if (route.publicIf(res.data.status) == false){
						return false;
					}
					if(res.data.status==0){
						uni.showToast({title:"保存成功",icon:"none"})
						if(res.data.dis=='first'){
							var jsonList=uni.getStorageSync("jsonList");
							var data = JSON.parse(jsonList); //JSON字符串转对象
							data.csid=res.data.check;
							let json = JSON.stringify(data);  //对象转字符串
							uni.setStorageSync('jsonList',json) //将csid重新存进去
						}
					}else{
						uni.showToast({title:res.data.message,icon:'none'})
					}
				},
				fail:(res)=>{
					uni.showToast({title: '信息保存失败'+'错误码201',icon:"none"});
				}
			})
		}
	  },
	onLoad:function(){
		try {
		    this.height = this.winHeight
		} catch (e) {
		    // error
		}
		 var jsonList=uni.getStorageSync("jsonList");
		 var data = JSON.parse(jsonList); //JSON字符串转对象
		 this.dis=data.dis;
		 this.Signboard = data.Ident_Signboard;
		 this.Signguid = data.Ident_Signguid;
		 /* 判断csid是否存在 */
		 if(data.csid!=null){
			 uni.request({
			 	url:getApp().globalData.webUrl+'/mobile/personal/getPersonInfo',
			 	method: 'GET',
			 	data:{
			 		Ident_Signboard: this.Signboard,
			 		Ident_Signguid: this.Signguid
			 	},
			 	success: (res) => {
			 		if (route.publicIf(res.data.status) == false){
			 			return false;
			 		}
			 		if(res.data.status == 0){
			 			this.companyName=res.data.userInfo.companyname;
			 			this.telephone=res.data.userInfo.telephone;
			 			this.phone=res.data.userInfo.phone;
			 			this.title=res.data.userInfo.rise;
			 			this.bank=res.data.userInfo.bank;
			 			this.taxcode=res.data.userInfo.taxcode;
			 			this.address=res.data.userInfo.address;
			 		}
			 	},
			 	fail:(res)=>{
			 		uni.showToast({title: '加载失败'+'错误码201',icon:"none"});
			 	}
			 })
		 }
	  }
	}
</script>

<style>
	@import "../../common/css/newsStyle.css";
</style>
