<template>
	<view :style="'margin-bottom:44px; height:' + height + 'px;'">
		<view class="userRadiu">
			<view class="uni-flex uni-row" style="width: 95%;margin-top: 1.2rem;">
				<view class="text" style="width: 6rem;line-height: 2.2rem;padding-left: 1rem;">
					<view class="real-name">{{realName}}</view>
					<uni-box type="contact" size="50" color="#DD524D"></uni-box> <!-- 小娃娃 -->
				</view>
				<view class="uni-flex uni-column" style="width: 100%;">
					<view class="text" >
						用户名：{{statusMsg=='当前登录'?titleName:' -'}}
					</view>
					<view class="uni-flex uni-row" style="color: #999999;">
						<!-- <view class="text">{{userName}}</view> -->
						<view class="text">账户类型： {{statusMsg=='当前登录'?userType:'-'}}</view>
					</view>
					<!-- <view class="text" >
						账号：子账号
					</view> -->
				</view>
				<view class="uni-flex uni-column" style="width: 9rem;text-align: right;">
					<view class="text" style="margin-right: 0.7rem;">
						状态
					</view>
					<view class="text" style="color: #DD524D;">
						<view class="text">{{statusMsg}}</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 列表 -->
		<view class="uni-padding-wrap uni-common-mt">
			<uni-view class="uni-active" v-for='(item,id) in userList' :key='id'>
				<uni-view class="uni-list-cell" @tap="userClick(item.id)">
					<uni-view class="uni-list-cell-navigate uni-navigate-right" v-if="item.id != 9?true:false">{{item.data}}</uni-view>
					<view v-if='item.id == 9?true:false' class="update">
					<view class="update-text">{{item.data}}</view>
					<view class="update-id">v4.0.829</view>
					</view>
				</uni-view>
			</uni-view>	
		</view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-btn-v">
				<button type="warn" class="user-btn" :class="{active:btnExit}" @tap="OutClick">退  出</button>
				<button type="warn" class="user-btn" :class="{active:btnLogin}" @tap="jumpLogin">登录/注册</button>
			</view>
		</view>
		<!-- #ifdef H5 -->
			<tarBar :active='3' ref='child'></tarBar>
		<!-- #endif -->
	</view>
</template>

<script>
	import route from "@/common/public.js"
	import uniIcon from '@/components/uni-icon/uni-icons.vue'
	import tarBar from "@/components/customize/tarBar.vue"
	export default {
		components: {'uni-box':uniIcon,tarBar},
		data() {
			return {
			userList:[
				{id: 1, data: '公司信息'},
				{id: 2, data: '个人信息'},
				{id: 3, data: '我的订单'},
				{id: 4, data: '资金流水'},
				{id: 5, data: '充值中心'},
				{id: 6, data: '安全中心'},
				{id: 7, data: '地址管理'},
				{id: 8, data: '账号管理'},
				{id: 9, data: '检查更新'}
				],
			Signboard:'',
			Signguid:'',
			userInfo: '',
			userName: '',
			dis:'', //用于判断是公司账号还是子账号
			statusMsg:'', //登录状态
			btnExit:true,
			btnLogin:true,
			titleName:'',
			userType:"", //账号类型 子账号-主账号
			height: '',// 页面高度
			realName: ''//是否实名
			}
		},
		methods:{
			changeShopCar() {// 购物车数量改变
				this.$nextTick(function(){
					// #ifdef H5
						this.$refs.child.add()
					// #endif
				})
			},
			checkVersion(){
				let status;
				uni.getNetworkType({
				    success: (res)=> {
				       status = res.networkType;
				    },
				});
				let vl = 200;
				if(vl == 100){ // 热更新
					uni.showModal({
						title: '版本更新',
						content: '有新版本发布，检测到你当前处于' + status + '是否立即进行新版本的下载安装?',
						cancelText:'取消',
						cancelColor:'#000',
						confirmText:'立即更新',
						confirmColor:'#007aff',
						success: (res)=> {
							if (res.confirm) {
								var wgt = "http://www.finedoing.com/lhbtest/testupdate/__UNI__E0284F1.wgt";
								this.downWgt(wgt)
						}
					}
					});
				}else if(vl == 200){ // 版本更新
					uni.showModal({
						title: '版本更新',
						content: '有新版本发布，检测到你当前处于' + status + '是否立即进行新版本的下载安装?',
						cancelText:'取消',
						cancelColor:'#E5E5E5',
						confirmText:'立即更新',
						confirmColor:'#007aff',
						success: (res)=> {
							if (res.confirm) {
								uni.showToast({
									title:'下载中...',
									duration: 2000
								})
								var url= //"http://www.finedoing.com/lunbo/20190514/812860820e069b225dfa6047fe9f806c.jpg"
								"http://www.finedoing.com/lhbtest/apk/1227102603.apk"; // 下载文件地址 
								var dtask = plus.downloader.createDownload(url,{},function(d,status){
									if(status == 200){
										var path = d.filename; 
										plus.runtime.install(path);
									}else{
										uni.showToast({
											title:'下载失败，请稍后重试!'
										})
									}
								});dtask.start();
						}
					}
					});
				}else{
					uni.showToast({
						title:"已经是最新版本了",
						duration:1000
					})
				}
				
				//http://www.finedoing.com/lhbtest/testupdate/__UNI__E0284F1.wgt
			},
			// 版本更新
			// 更新应用资源 
			downWgt(url){
				var wgtUrl = url;  
				plus.nativeUI.showWaiting("下载更新文件...");
				let _that = this;
				plus.downloader.createDownload( wgtUrl, {filename:"_doc/update/"}, function(d,status){
					console.log(status)
					if ( status == 200 ) { 
						plus.nativeUI.closeWaiting();
						_that.installWgt(d.filename); // 安装wgt包 
					} else {  
						plus.nativeUI.closeWaiting();
						plus.nativeUI.alert("下载更新失败！");  
					}  
					plus.nativeUI.closeWaiting();  
				}).start();  
			},
			installWgt(path){  
				plus.nativeUI.showWaiting("安装更新文件...");  
				plus.runtime.install(path,{},function(){  
					plus.nativeUI.closeWaiting();  
					console.log("安装更新文件成功！");  
					plus.nativeUI.alert("应用资源更新完成！",function(){  
						plus.runtime.restart();  
					});  
				},function(e){  
					plus.nativeUI.closeWaiting();  
					console.log("安装更新文件失败["+e.code+"]："+e.message);  
					plus.nativeUI.alert("安装更新文件失败["+e.code+"]："+e.message);  
				});  
			},
			userClick(evt){
				if(this.statusMsg=="未登录"){
					uni.showToast({
						title:'当前未登录，暂无权操作',
						icon:'none'
					})
				}else{
					switch (evt){
						case 1:
							uni.navigateTo({
								url:"../user/companyInfo"
							})
							break;
						case 2:
							uni.navigateTo({
								url:"../user/personalInfo"
							})
							break;
						case 3:
							uni.navigateTo({
								url:"../order/orderpageinfo"
							})
							break;
						case 4:
							uni.navigateTo({
								url:"../user/bill"
							})
							break;
						case 5:
							uni.navigateTo({
								url:"../user/recharge_center"
							})
							break;
						case 6:
							uni.navigateTo({
								url:"../user/safety"
							})
							break;
						case 7:
							uni.navigateTo({
								url:"../user/useraddress"
							})
							break;
						case 8:
							if(this.dis=="COMPANY"){
								uni.navigateTo({
									url:'../user/subaccount'
								})
							}else{
								uni.showToast({
									title:'当前账号为子账号，您暂时无权查看',
									icon:'none'
								})
							}
							break;
						case 9:
						this.checkVersion();
							break;
						default:
							break;
					}
				}
			},
			jumpLogin(){
				uni.navigateTo({
					url:"../index/login"
				})
			},
			OutClick(evt){
				uni.request({
					url:getApp().globalData.webUrl+'/mobile/index/loginOut',
					method:'GET',
					data:{
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
					},
					success: (res) => {
						var domain = uni.getStorageSync("domain");
						uni.clearStorageSync();
						uni.setStorageSync('domain',domain);
						uni.setStorageSync('shop',0);
						// #ifndef H5
						uni.switchTab({
							url:'../index/index'
						});
						// #endif
						// #ifdef H5
						uni.redirectTo({
							url:'../index/index'
						});
						// #endif
					},
					fail:(res)=>{
						uni.hideLoading()
						uni.showToast({title: '退出失败'+'错误码201',icon:"none"});
					}
				})
				// 移除购物车角标
				uni.removeTabBarBadge({
					index:2
				})
			}
		},
		onShow(){
			/* if(jsonList==""||jsonList==null){
				this.statusMsg="未登录";
				this.btnExit=true;
				this.btnLogin=false;
			}else{
				this.titleName='用户名：'+this.userName;
				this.statusMsg="当前登录";
				this.btnExit=false;
				this.btnLogin=true;
			} */
			this.changeShopCar();
			var jsonList=uni.getStorageSync("jsonList");
			if(jsonList){
				var data = JSON.parse(jsonList); //JSON字符串转对象
				this.Signboard = data.Ident_Signboard;
				this.Signguid = data.Ident_Signguid;
				this.userName = data.username;
				this.dis=data.dis;
				this.titleName=this.userName;
				this.statusMsg="当前登录";
				this.btnExit=false;
				this.btnLogin=true;
				 /* 判断是公司账号还是子账号 */
				if(this.dis=="COMPANY"){
					this.userType=" 主账号";
				}else{
					this.userType=" 子账号";
				}
			}else{
				this.userType="";
				this.titleName="";
				this.userName="";
				this.statusMsg="未登录";
				this.btnExit=true;
				this.btnLogin=false;
			}
			
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
			uni.request({
				url:getApp().globalData.webUrl + '/verification_name',
				method:'POST',
				data:{
					Ident_Signboard: this.Signboard, //令牌
					Ident_Signguid: this.Signguid, //用户id
				},
				header: {
					"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" //自定义请求头信息
				},
				success:(res)=> {
					this.realName = res.data.audit
				},
				fail:()=> {
					this.realName = ''
				}
			})
		},
		onLoad() {
			
			
		}
	}
</script>

<style lang="scss" scoped>
	 @import "../../common/uni.css";
	 /*版本号*/
	.update{
		display: flex;
		padding: 11px 15px;
		justify-content: space-between;
		width: 100%;
		.update-text{
			 
		 }
		.update-id{
			 
		 }
	 }
	 .active{
		 display: none;
	 }
	.userRadiu{
		background: #FFF9F9;
		width: 90%;
		margin: 0.5rem auto;
		height: 5rem;
		border-radius: 15px;
		border: 1px solid #DD524D;
	}
	.uni-img img{
		width: 100%;
		height: 6.8rem;
	}
	.uni-user-img{
		position: relative;
		height: 1.8rem;
		line-height: 6.1rem;
		padding: 0px 1rem;
	}
	.uni-user-img img{
		position: absolute;
		top: -2.2rem;
		z-index: 9;
		border: #E5E5E5 solid 1px;
		height: 3.5rem;
		width: 3.5rem;
	}
	.uni-span{
		position: absolute;
		margin: 0px;
		top: -4.3rem;
		left: 5rem;
		font-size: 1rem;
		color: #FFF;
		text-shadow: 1px 1px 1px #000;
	}
	.user-btn{
		background-color: #FF0000;
		border-radius: 25rem;
		font-size: .7rem;
	}	
	.uni-navigate-right{
		font-size: .7rem;
	}
	.real-name{
		position: absolute;
		top: 10px;
		left: 2.3rem;
		font-size: .6rem;
		color: rgb(221, 82, 77);
	}
	.real-name-active{
		color: green;
	}
</style>
