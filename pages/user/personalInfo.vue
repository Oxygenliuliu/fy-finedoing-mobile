<template>
	<view class="now" :style="{height:(height)+'px'}">
		<!-- 子账号个人信息显示块 -->
		<view class="uni-padding-wrap" style="height: 540px;">
			<uni-view class="uni-active">
				<uni-view class="uni-list-cell" @tap="nameAndTelClick('name')">
					<uni-view class="uni-list-cell-navigate informationName">用户名：</uni-view>
					<input type="text" v-model="name" :disabled="disUser" placeholder="请填写用户名" @change="stateChange">
				</uni-view>
				<uni-view class="uni-list-cell" @tap="nameAndTelClick('telphone')">
					<uni-view class="uni-list-cell-navigate informationName">联系电话：</uni-view>
					<input type="text" v-model="telephone" disabled="true" placeholder="请填写联系电话" @change="stateChange">
				</uni-view>
				<uni-view class="uni-list-cell">
					<uni-view class="uni-list-cell-navigate informationName">性别：</uni-view>
					<picker @change="bindPickerChange" :value="sex" :range="array">
						{{array[sex]}}
					</picker>
				</uni-view>
				<uni-view class="uni-list-cell">
					<uni-view class="uni-list-cell-navigate informationName">微信：</uni-view>
					<input type="text" v-model="wechat" placeholder="请填写微信" @change="stateChange">
				</uni-view>
				<uni-view class="uni-list-cell">
					<uni-view class="uni-list-cell-navigate informationName">QQ：</uni-view>
					<input type="text" v-model="qq" placeholder="请填写QQ" @change="stateChange">
				</uni-view>
				<uni-view class="uni-list-cell" >
					<uni-view class="uni-list-cell-navigate informationName">地址：</uni-view>
					<input type="text" v-model="address" placeholder="请填写地址" @change="stateChange">
				</uni-view>
			</uni-view>	
		</view>
		<view id="navbottom" style="z-index: 999;">
			<button @tap="changePersonal">保 存</button>
		</view>
	</view>
</template>
	
<script>
	import route from "@/common/public.js"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
	  components: {
		uniPopup
	  },
	  data() {
		return {
		  Signboard:'',
		  Signguid:'',
		  name: '', //用户名
		  telephone:'', //联系电话
		  sex:'', //性别
		  wechat:'', //微信号
		  qq:'', //qq号
		  address:'', //地址
		  sexFrame:false, /* 修改性别的弹出框 */
		  dis:'', //判断是公司账号还是user账号
		  array: ['女','男'], //性别数组
		  disUser:'', //是否禁用输入框
		  height:'',
		  state: false,
		}
	},
	methods: {
		stateChange(e){
			this.state = true;
		},
		bindPickerChange(e) {
			 this.sex = e.detail.value;
			 this.state = true;
		 },
		nameAndTelClick(val){
			if(val=='name'){
				if(this.dis=="USER"){
					this.disUser=true;
					uni.showToast({title:'请联系主账户，修改用户名',icon:'none'})
				}
				this.disUser=false;
			}else{
				uni.showToast({title: '请前往安全中心更改绑定手机号！',icon:"none"})
			}
		},
		
		/* 点击保存按钮触发的事件 */
		changePersonal(evt){
			if(this.state == false){
				return false;
			}
			if(this.name==""){
				uni.showToast({title:'请填写用户名',icon:'none'})
				return false;
			}
			
			if(this.wechat!=""){
				if(!RegExp(/^[-_a-zA-Z0-9]{5,19}$/).test(this.wechat)){
					uni.showToast({title:'微信号格式不正确',icon:'none'})
					return false;
				}
			}
			
			if(this.qq!=''){
				if(!RegExp(/^[0-9]{5,12}$/).test(this.qq)){
					uni.showToast({title:'QQ格式不正确',icon:'none'})
					return false;
				}
			}
			uni.request({
				url:getApp().globalData.webUrl+'/mobile/personal/altering_info',
				method:'POST',
				data:{
					Ident_Signboard: this.Signboard,
					Ident_Signguid: this.Signguid,
					loginname:this.name, //用户名
					qq:this.qq, //QQ号
					wechat:this.wechat, //微信号
					address:this.address, //地址
					sex:this.sex //性别
				},
				success: (res) => {
					if (route.publicIf(res.data.status) == false){
						return false;
					}
					if(res.data.status==0){
						uni.showToast({title:"保存成功",icon:"none"})
					}else{
						uni.showToast({title:'保存失败',icon:'none'})
					}
				},
				fail:(res)=>{
					uni.showToast({title: '信息保存失败'+'错误码201',icon:"none"});
				}
			})
		},
		isNull(userInfo){ //判断返回的数据是否为空，如果为空则将null换成字符串的空
			this.name=userInfo.name;
			this.telephone=userInfo.telephone;
			// #ifdef MP-WEIXIN||APP-PLUS
			this.sex=userInfo.sex.toString();
			// #endif
			// #ifdef H5
			this.sex=userInfo.sex;
			// #endif
			this.wechat=userInfo.wechat;
			this.qq=userInfo.qq;
			this.address=userInfo.address;
			if(userInfo.wechat==null){
				this.wechat="";
			}
			if(userInfo.qq==null){
				this.qq="";
			}
			if(userInfo.address==null){
				this.address="";
			}
		}
	  },
	onLoad:function(){
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
		var jsonList=uni.getStorageSync("jsonList");
		var data = JSON.parse(jsonList); //JSON字符串转对象
		this.Signboard = data.Ident_Signboard;
		this.Signguid = data.Ident_Signguid;
		this.dis=data.dis;
		uni.request({
			url:getApp().globalData.webUrl+'/mobile/personal/get_user_info',
			method: 'GET',
			data:{
				Ident_Signguid: this.Signguid,
				Ident_Signboard:this.Signboard,
			},
			success: (res) => {
				if (route.publicIf(res.data.status) == false){
					return false;
				}
				if(res.data.status == 0){
					this.isNull(res.data.userInfo);
				}
			},
			fail:(res)=>{
				uni.showToast({title: '加载失败'+'错误码201',icon:"none"});
			}
		})
	  }
	}
</script>
<style>
	@import "../../common/css/newsStyle.css";
</style>
