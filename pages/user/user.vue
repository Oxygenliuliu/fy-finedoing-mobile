<template>
	<view>
		<!-- 背景图 -->
		<!-- <view class="uni-img">
			<img src="/static/bgcImg.jpg" alt="">
		</view> -->
		<!-- 头像文本 -->
		<!-- <view class="uni-user-img">
			<img src="/static/img404.png" alt="">
			<span class="uni-span">{{userName}}</span>
		</view> -->
		
		<view class="userRadiu">
			<view class="uni-flex uni-row" style="width: 95%;margin-top: 1.2rem;">
				<view class="text" style="width: 3rem;height: 3rem;padding-left: 1rem;">
					<uni-icon type="contact" size="50" color="#DD524D"></uni-icon>
				</view>
				<view class="uni-flex uni-column" style="width: 100%;">
					<view class="text" >
						{{titleName}}
					</view>
					<view class="uni-flex uni-row" style="color: #999999;">
						<!-- <view class="text">{{userName}}</view> -->
						<view class="text">{{userType}}</view>
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
			<uni-view class="uni-active">
				<uni-view class="uni-list-cell" @tap="userClick(1)">
					<uni-view class="uni-list-cell-navigate uni-navigate-right">公司信息</uni-view>
				</uni-view>
				<uni-view class="uni-list-cell" @tap="userClick(2)">
					<uni-view class="uni-list-cell-navigate uni-navigate-right">个人信息</uni-view>
				</uni-view>
				<uni-view class="uni-list-cell" @tap="userClick(3)">
					<uni-view class="uni-list-cell-navigate uni-navigate-right">我的订单</uni-view>
				</uni-view>
				<uni-view class="uni-list-cell" @tap="userClick(4)">
					<uni-view class="uni-list-cell-navigate uni-navigate-right">资金流水</uni-view>
				</uni-view>
				<uni-view class="uni-list-cell" @tap="userClick(5)">
					<uni-view class="uni-list-cell-navigate uni-navigate-right">充值中心</uni-view>
				</uni-view>
				<uni-view class="uni-list-cell" @tap="userClick(6)">
					<uni-view class="uni-list-cell-navigate uni-navigate-right">安全中心</uni-view>
				</uni-view>
				<uni-view class="uni-list-cell" @tap="userClick(7)">
					<uni-view class="uni-list-cell-navigate uni-navigate-right">地址管理</uni-view>
				</uni-view>
				<!-- <view @tap="subaccountTap"> -->
				<uni-view class="uni-list-cell" @tap="userClick(8)">
					<uni-view class="uni-list-cell-navigate uni-navigate-right">账号管理</uni-view>
				</uni-view>
				<!-- </view> -->
			</uni-view>	
		</view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-btn-v">
				<button type="warn" class="user-btn" :class="{active:btnExit}" @tap="OutClick">退  出</button>
				<button type="warn" class="user-btn" :class="{active:btnLogin}" @tap="jumpLogin">登录/注册</button>
			</view>
		</view>
		<tarBar :active='3'></tarBar>
	</view>
</template>

<script>
	import route from "@/common/public.js"
	import Prompt from '@/components/zz-prompt/index.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	import tarBar from "@/components/customize/tarBar.vue"
	export default {
		components: {Prompt,uniIcon,tarBar},
		data() {
			return {
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
			}
		},
		methods:{
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
			/* 点击子账号管理触发的事件 */
			/* subaccountTap(evt){
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
			}, */
			/* 点击退出触发的事件 */
			OutClick(evt){
				uni.request({
					url:route.variable+'/mobile/index/loginOut',
					method:'GET',
					data:{
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
					},
					success: (res) => {
						uni.clearStorageSync();
						uni.setStorageSync('shop',0);
						uni.redirectTo({
							url:'../index/index'
						});
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
		onShow:function()
		{
			var jsonList=uni.getStorageSync("jsonList");
			if(jsonList){
				var data = JSON.parse(jsonList); //JSON字符串转对象
				this.Signboard = data.Ident_Signboard;
				this.Signguid = data.Ident_Signguid;
				this.userName = data.userName;
				this.dis=data.dis;
				
				this.titleName='用户名：'+this.userName;
				this.statusMsg="当前登录";
				this.btnExit=false;
				this.btnLogin=true;
				 /* 判断是公司账号还是子账号 */
				if(this.dis=="COMPANY"){
					this.userType="账号类型：主账号";
				}else{
					this.userType="账号类型：子账号";
				}
			}else{
				this.userType="";
				this.titleName="";
				this.userName="";
				this.statusMsg="未登录";
				this.btnExit=true;
				this.btnLogin=false;
			}
			
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
		}
	}
</script>

<style>
	 @import "../../common/uni.css";
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
		font-size: 16px;
	}	
</style>
