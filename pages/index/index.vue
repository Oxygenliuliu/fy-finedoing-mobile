<template>
	<view>
		<scroll-view style="height: 1350upx;" :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scroll="scroll">
			<view class="flex-row uni-header" :class="{isHeaderColor:isHeaderColor}" style="display: flex;flex-direction: row;position: fixed;z-index: 999;">
				<view class="flex-view-item uni-left" @tap="leftBars"><i class="uni-icon uni-icon-bars"></i></view>
				<!-- 搜索框 -->
				<view class="flex-view-item uni-content search">
					<div class="he_soss">
						<span class="uni-icon uni-icon-search he_so_icon"></span>
						<input id="soss" type="text" @tap="search()">
					</div>
				</view>
				<!-- 登录 -->
				<view class="flex-view-item uni-right">
					<navigator url="login" :class="{user:userActive}">登录</navigator>
					<text :class="{userImg:userImgActive}" @tap="userImgTap"><i class="uni-icon uni-icon-contact"></i></text>
				</view>
			</view>
			
			<!-- 轮播 -->
			<view class="uni-lunbo">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
							<swiper-item v-for="(item , lunList) in wheelPlanting" :key="lunList">
								<view class="swiper-item"><image :src="imgUrl+item.a_url" mode="" class="uni-image"></image></view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
			
			<!-- 选项导航 -->
			<view>
				<view class="flex-row" style="display: flex;flex-direction: row; flex-wrap:wrap">
					<view class="flex-view-item uni-li" @tap="leftBars">
						<view class="imgFize fenLei"><i class="iconfont icon-leimupinleifenleileibie"></i></view>
						<view class="uni-fontFize">全部分类</view>
					</view>
					<view class="flex-view-item uni-li" @tap="btnJump(num=2)">
						<view class="imgFize chongZhi"><i class="iconfont icon-chongzhi"></i></view>
						<view class="uni-fontFize">充值中心</view>
					</view>
					<view class="flex-view-item uni-li" @tap="btnJump(num=3)">
						<view class="imgFize dingDan"><i class="iconfont icon-el-icon-custom-order"></i></view>
						<view class="uni-fontFize">我的订单</view>
					</view>
					<view class="flex-view-item uni-li" @tap="btnJump(num=4)">
						<view class="imgFize anQuan"><i class="iconfont icon-anquan"></i></view>
						<view class="uni-fontFize">安全中心</view>
					</view>
					<view class="flex-view-item uni-li" id="personal" @tap="btnJump(num=5)">
						<view class="imgFize userName"><i class="iconfont icon-gerenxinxi"></i></view>
						<view class="uni-fontFize">个人信息</view>
					</view>
					<view class="flex-view-item uni-li" id="shopping" @tap="btnJump(num=6)">
						<view class="imgFize gouWuche"><i class="iconfont icon-gouwuche1"></i></view>
						<view class="uni-fontFize">购物车</view>
					</view>
					<view url="../user/useraddress" class="flex-view-item uni-li" @tap="btnJump(num=7)">
						<view class="imgFize diZhi"><i class="iconfont icon-dizhi"></i></view>
						<view class="uni-fontFize">地址管理</view>
					</view>
					<view url="../user/bill" class="flex-view-item uni-li" @tap="btnJump(num=8)">
						<view class="imgFize zhangDan"><i class="iconfont icon-zhangdan"></i></view>
						<view class="uni-fontFize">资金流水</view>
					</view>
				</view>
			</view>
			
			<!-- 商品展示 -->
			<view v-for="(item , index) in ListOfGoods" :key="index">
				<view class="goosName">
					<text>{{item.name}}</text>
					<hr>
				</view>
				
				<view class="uni-product-list">
					<view class="uni-product" v-for="(goods , ietm) in item.data" :key="ietm">
						<navigator :url="'../product/productinfo?type='+(goods.tid)" :data-tid=(goods.tid)>
						<view class="image-view">
							<img v-lazy="imgUrl+goods.img" class="image">
						</view>
						<view class="uni-product-title">{{goods.gname}}</view>
						<view class="uni-product-price">
							<text class="uni-product-price-original">￥ {{goods.price}}</text>
							<text class="uni-product-tip">{{goods.tid}}</text>
						</view>
						</navigator>
					</view>
				</view>
			</view> 
			
			<!-- 没有更多数据 -->
			<view class="PeriodNamw">
				<view class="Period">
					<text>没有更多数据了</text>
					<hr class="hr">
				</view>
			</view>
		<!-- 底部 -->
		<view class="uni-bottom">
			<view class="bot_top">
				<text class="bot_login">{{userName}}</text>
				<text class="bot_rei" @tap="OutClick">退出</text>
				<text class="bot_opentop uni-link uni-center"  @tap="backTop">
					回到顶部
				</text>
			</view>
			
		</view>
		<copyright></copyright>
		</scroll-view>
		<tarBar :active='0'></tarBar>
	</view>
</template>

<script>
	import route from "@/common/public.js"
	import iPrice from '@/components/i-price/i-price.vue'
	import Vue from 'vue'
	import lazy from "@/common/vue-lazyload.js"
	import copyright from "@/components/customize/copyright.vue"
	import tarBar from "@/components/customize/tarBar.vue"
	Vue.use(lazy)
	export default {
		components: {
			iPrice,
			copyright,
			tarBar
		},
		data() {
			return {
				imgUrl :'',  //图片访问ip
				isHeaderColor:true,//header在首页顶部时背景色透明
				background: ['color1', 'color2', 'color3'],
				indicatorDots: false, //是否显示面板指示点
				autoplay: true,  //是否自动切换
				circular:true,  //是否衔接切换
				interval: 3000,  //自动切换时间间隔
				duration: 500  ,//滑动动画时长
				ListOfGoods:'', //商品列表
				wheelPlanting: '', //轮播图片
				Signboard: '',
				Signguid: '',
				//滚动条位置
				scrollTop:0, 
				old: {  
					scrollTop: 0 
				},
				userName: '',  //登录用户名
				userActive: false,  //登录按钮
				userImgActive: true,  //娃娃头像
				shop: '0',  //购物车数量
				dis: 0,//判断获取的数据是否是已经登陆后的数据，0是未登录数据，1是已登陆数据
			}
		},
		methods: {
			// 获取轮播和产品数据
			getData:function(){
				var jsonList=uni.getStorageSync("jsonList");
				if(jsonList){
					var data = JSON.parse(jsonList); //JSON字符串转对象
					this.Signboard = data.Ident_Signboard;
					this.Signguid = data.Ident_Signguid;
				}
				uni.request({
					url:route.variable+'/mobile/index/index',
					method: 'GET',
					data: {
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
					},
					success: res => {
						if(res.statusCode == 200){
							// 商品列表
							this.ListOfGoods = res.data.goods;
							// 轮播图片
							this.wheelPlanting = res.data.lun;
							if(res.data.dis == 1){
								this.dis == 1
							}
						}
					},
				});	
			},
			//记录滚动条位置
			scroll(e) {
				this.old.scrollTop = e.detail.scrollTop
				// header在滚动高度大于该值时（默认设置的20）,就会去掉透明度
				if(this.old.scrollTop>20){
					this.isHeaderColor=false;
				}else{
					this.isHeaderColor=true;
				}
			},
			//记录滚动条位置
			backTop(evt) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
			},
			search(){
				uni.navigateTo({
					url: "/pages/index/search",
				})
			},
			// 轮播开始
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			// 轮播结束
			judge(e){
				uni.showToast({
					title: '请登录后再进行下面操作',
					icon: 'none'
				})
				uni.navigateTo({
					url: 'login'
				})
				return false
			},
			// 跳转链接 
			btnJump(evt) { //option为object类型，会序列化上个页面传递的参数
				console.log(evt);
				if(this.userName == ''){
					this.judge();
				}else{
					/* 根据判断evt参数来跳转页面 */
					switch (evt){
						case 1:
							uni.navigateTo({
								url: '../product/product'
							});
							break;
						case 2:
							uni.navigateTo({
								url: '../user/recharge_center'
							});
							break;
						case 3:
							uni.navigateTo({
								url: '../order/orderpageinfo'
							});
							break;
						case 4:
							uni.navigateTo({
								url: '../user/safety'
							});
							break;
						case 5:
							uni.navigateTo({
								url: '../user/personalInfo'
							});
							break;
						case 6:
							uni.navigateTo({
								url: '../shopping/shopping'
							});
							break;
						case 7:
							uni.navigateTo({
								url: '../user/useraddress'
							});
							break;
						case 8:
							uni.navigateTo({
								url: '../user/bill'
							});
							break;
						default:
							uni.navigateTo({
								url: '../index/index'
							});
							break;
					}
				}
			},
			// 跳转分类
			classification(e){
				if(this.userName == ''){
					this.judge();
				}else{
					uni.navigateTo({
						url: '../product/product'
					})
				}
			},
			// 搜索框
			leftBars(e){
				uni.navigateTo({
					url: "../product/product"
				})
			},
			// 点击娃娃头像:跳转到用户中心
			userImgTap(e){
				if(this.userName == ''){
					this.judge();
				}
				uni.navigateTo({
					url: '../user/user'
				})
			},
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
						if(res.data.status == 0){
							uni.clearStorageSync();
							uni.showToast({title: res.data.message,icon:'none'});
							this.userImgActive = true;
							this.userActive = false;
						}
					}
				})
			}
		},
		// 数据接口请求( 初始化页面完成时触发)
		onLoad() {
			this.imgUrl = route.variable;  //图片访问IP
			
			this.getData();
		},
		onShow() {
			let result = route.checkStatus();
			this.userName = result.userName;
			this.userImgActive = result.userImgActive;
			this.userActive = result.userActive;
			
			var isLogin = uni.getStorageSync('isLogin');
			if(isLogin){
				if(isLogin == 1&&this.dis==0){
					this.getData();
				}
			}else{
				this.dis = 0
			}
			
			var jsonList=uni.getStorageSync("jsonList");
			if(jsonList){
				var data = JSON.parse(jsonList); //JSON字符串转对象
				this.shop = data.shop;  //购物车数量
			}else{
				this.shop = '0';
			}
			if(this.shop == '0'){  // 购物车数据为0 就移除购物车角标
				uni.removeTabBarBadge({
					index:2
				})
			}else{
				uni.setTabBarBadge({
					index: 2,
					text: this.shop+''
				})
			}
		},
		onReady() {
		}
	}
</script>

<style>
	@import "../../common/uni.css";
	@import "../../common/iconfont.css";
	@import "../../static/css/base.scss";
	
	/* 购物车角标 */
	.uni-tabbar .uni-tabbar__reddot{
		background-color: #0B877F !important;
	}
	/* header在首页顶部时,背景色透明 */
	.user,.userImg{
		display: none
	}
	.uni-header{
		height: 40px;
		align-items: center;
		background-color: rgba(255,0,0,0.9);
	}
	.isHeaderColor{
		background-color: rgba(255,0,0,0);
	}
	.uni-left{
		min-width: 10vw;
		max-width: 10vw;
		color: #FFF;
		padding: 0 10px;
		font-size: 24px;
		font-weight: 400;
		margin-top: -8px;
	}
	.uni-right{
		min-width: 15vw;
		max-width: 15vw;
		text-align: center;
		color: #FFF;
		font-size: 15px
	}
    .uni-content{
		min-width: 70vw;
		max-width: 70vw;
	}
	.he_so_icon{
		font-size: 20px;
	}
	.he_soss {
		flex-grow: 1;
		display: flex;
		height: 30px;
		line-height: 30px;
		border: none;
		border-radius: 38px;
		padding: 0px 8px;
		align-items: center;
		background: #FFF;
	}
	#soss {
		width: 60vw;
		border: none;
		padding: 0px;
		margin: 0px;
		height: 28px;
	}
	.proBtn{
		width: 10px;
		padding: 4px 6px;
		margin: 0px 10px;
		flex-grow: 1;
		border: none;
		background: #e43130;
		color: #FFF;
		font-size: 14px
	}
	.uni-tag--error[data-v-69998649] {
		border: 1px solid #dd524d;
		padding: 1px 10px;
		background: #e43130;
		color: #FFF;
		border-radius: 5px;
	}
	.tag-view[data-v-cc68ed8e] {
		margin: 8px 10px;
		display: inline-block;
	}
	
	/* 轮播 */
	.uni-image{
		/* width: 376px !important; */
		width: 100% !important;
	}
	
	/* 选项导航 */
	.uni-li{
		padding: 10px 0;
		width: 25%;
		text-align: center;
	}
	/* 字体 */
	.uni-fontFize{
		font-size: 0.6rem
	}
	.imgFize{
		display: inline-block;
		height: 40px;
		width: 40px;
		line-height: 40px;
		text-align: center;
		border-radius: 50%;
	}
	.fenLei{
		background-image: linear-gradient(175deg, #d73579, #d8487b 73%, #da617e)
	}
	.chongZhi{
		background-image: linear-gradient(175deg, #e0a913, #e0b923 73%, #e5cc50);
	}
	.dingDan{
		background-image: linear-gradient(175deg, #069ecd, #0bb3d8 73%, #5ed9ec);
	}
	.anQuan{
		background-image: linear-gradient(175deg, #3ec43d, #4ccd3f 73%, #aeeba4)
	}
	.userName{
		background-image: linear-gradient(175deg, #8231bb, #8f49c1 73%, #b983d9)
	}
	.gouWuche{
		background-image: linear-gradient(175deg, #d45a52, #e55f57 73%, #f36868)
	}
	.diZhi{
		background-image: linear-gradient(175deg, #d45b16, #d87024 73%, #dc8233);
	}
	.zhangDan{
		background-image: linear-gradient(175deg, #08cec3, #2ae1d6 73%, #d5fbf9);
	}
	
	/* 商品展示 */
	.goosName{
		text-align: center;
		height: 40px;
		line-height: 20px;
		background-color: #FFF; 
	}
	.goosName>text{
		position: relative;
		top: 10px;
		z-index: 0;
		background: #FFF;
		padding: 0px 10px;
	}
	page {
	    background: #F8F8F8;
	}
	
	view {
	    font-size: 28upx;
	}
	.uni-product-list {
		/* position: relative; */
		z-index: 999;
		background: #ffffff;
	    display: flex;
	    width: 100%;
	    flex-wrap: wrap;
	    flex-direction: row;
		overflow:auto;
		overflow-x: hidden;
	}
	
	.uni-product {
		width: 45%;
	    padding: 10px 0 10px 3.2%;
	    display: flex;
	    flex-direction: column;
	}
	
	.image-view {
	    height: 100%;
	    width: 100%;
	    margin: 12upx 0;
	}
	
	img.image {
		width: 100%;
		height: 100%;
	}
	
	.uni-product-image {
	    height: 330upx;
	    width: 330upx;
	}
	
	.uni-product-title {
	    width: 300upx;
	    word-break: break-all;
	    display: -webkit-box;
	    overflow: hidden;
	    line-height: 1.5;
	    text-overflow: ellipsis;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
	}
	
	.uni-product-price {
	    margin-top: 10upx;
	    font-size: 28upx;
	    line-height: 1.5;
	    position: relative;
	}
	
	.uni-product-price-original {
	    color: #ff0000;
	}
	
	.uni-product-price-favour {
	    color: #888888;
	    text-decoration: line-through;
	    margin-left: 10upx;
	}
	
	.uni-product-tip {
		display: none;
	    position: absolute;
	    right: 10upx;
	    background-color: #ff3333;
	    color: #ffffff;
	    padding: 0 10upx;
	    border-radius: 5upx;
	}
	
	/* 没有更多数据 */
	.PeriodNamw{
		background: #efeff4;
	}
	.Period{
		text-align: center;
		height: 40px;
		line-height: 20px;
		background-color: transparent; 
	}
	.Period>text{
		position: relative;
		top: 10px;
		z-index: 9;
		background: #efeff4;
		color: #D5D5D5;
		padding: 0px 10px;
	}
	.Period .hr{
		background: #D5D5D5;
		height: 1px;
		border: none;
	}
	/* 底部 */
	.bot_top{
		display: flex;
		padding: 20px 25px;
		border-bottom: #d9d9d9 solid 1px;
	}
	.bot_top > text {
		font-size: 0.7rem;
		flex-grow: 1;
		text-align: center;
		color: #999;
		border-right: #999 solid 1px;
	}
	
	.bot_top .bot_opentop{
		border-right: none;
	}
	.uni-bottom{
		position: static;
		margin-bottom: 30px;
	}
	.uni-bottom .copyright{
		color: #8f8f94;
		font-size: 0.7rem;
		display: block;
		text-align: center;
	}
	
</style>
