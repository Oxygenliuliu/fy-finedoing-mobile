<template>
	<view :class="(pageIsShow == false || net == false) == true?'container':''">
		<view v-if="pageIsShow == true && net == true">
			<scroll-view :style="'height:'+ scrollHeight" :scroll-top="scrollTop" scroll-y="true" @scroll="scroll">
				<view class="tab" :style="{backgroundImage:'url(' + backImg_url + ')'}">
					<!-- <view class="nav-header"> -->
						<!-- 顶部导航栏 -->
						<view class="header" :style="{ height:statusHeight+44+'px',position: 'fixed',top:0,backgroundImage:'url(' + backImg_url + ')'}">
							<!-- 定位城市 -->
							<view class="addr" @tap="leftBars">
								<!-- <view class="icon location"></view> -->
								<i class="uni-icon uni-icon-bars"></i>
								<!-- <uni-icon class="icon bars" type="bars" size="20" color="#c3c3c3"></uni-icon> -->
								<!-- <icon type="bars" size="12" color="#000000" class="icon bars"></icon> -->
							</view>
							<!-- 搜索框 -->
							<view class="input-box">
								<input
									placeholder="请输入关键字"
									placeholder-style="color:#c0c0c0;"
									@tap="search()"
								/>
								<icon type="search" size="12" class="icon search"></icon>
							</view>
							<!-- 右侧图标按钮 -->
							<view class="icon-btn">
								<text class="login" v-if="!userActive" @tap="Login">登录</text>
								<text v-if="!userImgActive" @tap="userImgTap"><text class="i-icon uni-icon uni-icon-contact"></text></text>
								<!-- <view class="icon yuyin-home"></view>
								<view class="icon tongzhi" @tap="toMsg"></view> -->
							</view>
						</view>
						<!-- 占位 -->
						<view class="place"></view>
					<!-- </view> -->
					<!-- 分类选项 -->
					<!-- <scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false" :scroll-into-view="scrollInto">
						<view v-for="(tab,index) in tabBars" :key="tab.id" class="uni-tab-item" :id="tab.id" :data-current="index">
							<text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
						</view>
					</scroll-view> -->
					<!-- 轮播图 -->
					<view class="swiper">
						<view class="swiper-box">
							<swiper  autoplay="true" :interval="interval" :duration="duration">
								<swiper-item v-for="swiper in wheelPlanting" :key="swiper.id">
									<image :src="imgUrl+swiper.a_url" ></image>
								</swiper-item>
							</swiper>
						</view>
					</view>
					<!-- 选项导航 -->
					<view>
						<view class="flex-row navigation-list">
						<block v-for="(item,id) in navigationData" :key='id'>
							<view class="flex-view-item uni-li" @tap="btnJump(item.id)">
								<view class="imgFize" :class="item.classColor"><i :class="item.classIcon"></i></view>
								<view class="uni-fontFize">{{item.data}}</view>
							</view>
						</block>
						</view>
					</view>
				</view>
				
				<!-- 商品展示 -->
				<view v-for="(item , index) in ListOfGoods" :key="index">
					<view class="goosNameBgc">
						<view class="goosName">
							<text>{{item.name}}</text>
							<!-- <text style="border: 1px solid #000000;"></text> -->
							<!-- <hr> -->
						</view>
					</view>
					<view class="uni-product-list">
						<view class="uni-product" v-for="(goods , ietm) in item.data" :key="ietm">
							<navigator :url="'../product/productinfo?type=' + (goods.tid)" :data-tid='goods.tid'>
							<view class="image-view">
								<!-- #ifdef H5 -->
								<img v-lazy="imgUrl+goods.img" class="image">
								<!-- #endif -->
								<!-- #ifndef H5-->
								<image :src="imgUrl+goods.img" lazy-load='true' class="image"/>
								<!-- #endif -->
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
			<view class="uni-bottoms">
				<view class="bot_top">
					<text class="bot_login">{{userName}}</text>
					<text class="bot_rei" @tap="OutClick">退出</text>
					<text class="bot_opentop uni-link uni-center"  @tap="backTop">
						回到顶部
					</text>
				</view>
			</view>
			<!-- 感谢西安利客广告提供演示数据 -->
			<text class="copyright">感谢西安利客广告提供演示数据</text>
			<copyright></copyright>
			</scroll-view>
		
		</view>
		<view class="noData" v-if="pageIsShow == false || net == false">
			<noData :net="net" @handle='getData'></noData>
		</view>
		<!-- #ifdef H5 -->
		<tarBar :active='0' ref='child'></tarBar>
		<!-- #endif -->
		</view>
</template>
<script>
	import noData from '@/components/noData/noData.vue'
	import route from "@/common/public.js"
	import Vue from 'vue'
	import lazy from "@/common/vue-lazyload.js"
	import copyright from "@/components/customize/copyright.vue"
	import tarBar from "@/components/customize/tarBar.vue"
	Vue.use(lazy)
	export default {
		components: {
			copyright,
			tarBar,
			noData
		},
		data() {
			return {
				net:true,// 没有网络
				pageIsShow:true,// 后台请求错误
				statusHeight:0,
				navigationData: [ // 导航数据
					{id:0, data: '全部分类', classIcon: 'iconfont icon-leimupinleifenleileibie', classColor: 'fenLei'},
					{id:1, data: '充值中心', classIcon: 'iconfont icon-chongzhi', classColor: 'chongZhi', url: ''},
					{id:2, data: '我的订单', classIcon: 'iconfont icon-el-icon-custom-order', classColor: 'dingDan'},
					{id:3, data: '安全中心', classIcon: 'iconfont icon-anquan', classColor: 'anQuan', url: ''},
					{id:4, data: '个人信息', classIcon: 'iconfont icon-gerenxinxi', classColor: 'userName'},
					{id:5, data: '购物车', classIcon: 'iconfont icon-gouwuche1', classColor: 'gouWuche'},
					{id:6, data: '地址管理', classIcon: 'iconfont icon-dizhi', classColor: 'diZhi'},
					{id:7, data: '资金流水', classIcon: 'iconfont icon-zhangdan', classColor: 'zhangDan'},
				],
				scrollHeight: '0',
				setBadge: 0,
				imgUrl: '',  //图片访问ip
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
				dis: 0,//判断获取的数据是否是已经登录后的数据，0是未登录数据，1是已登录数据
				backImg_url:'',//首页背景图片地址
			}
		},
		methods: {
			Login(){
				uni.navigateTo({
					url: '/pages/index/login'
				})
			},
			// 获取轮播和产品数据
			getData:function(){
				uni.getNetworkType({
				    success:  (res)=> {
						if(res.networkType == 'none'){
							 this.net = false;
						}else{
							 this.net = true;
						}
				    }
				});
				var jsonList=uni.getStorageSync("jsonList");
				if(jsonList){
					var data = JSON.parse(jsonList); //JSON字符串转对象
					this.Signboard = data.Ident_Signboard;
					this.Signguid = data.Ident_Signguid;
				}
					uni.request({
						url:getApp().globalData.webUrl+'/mobile/index/index',
						method: 'POST',
						data: {
							Ident_Signboard: this.Signboard,
							Ident_Signguid: this.Signguid,
						},
						success: res => {
							if(res.statusCode == 200){
								try{
									this.pageIsShow = true;
									// 商品列表
									this.ListOfGoods = res.data.goods;
									// 轮播图片
									this.wheelPlanting = res.data.lun;
									this.backImg_url = getApp().globalData.webUrl + res.data.skin.img_url;
									if(res.data.dis == 1){
										this.dis == 1
									}
								}catch(e){
									this.pageIsShow=false;
									uni.showToast({
										title:'获取数据异常,请稍后重试!',
										icon:'none'
									})
								}
							}
						},
						fail:()=> {
							// #ifdef H5
							// uni.showToast({title: '请求失败'+'错误码201',icon:"none"});
							// #endif
							// #ifdef APP-PLUS
							uni.redirectTo({
								url:'login?flag=-1'
							})
							// #endif
							this.pageIsShow = false;
						}
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
				var toHeight = evt.currentTarget.offsetTop
				this.scrollTop = this.old.scrollTop;
				var annimateTop = setInterval(()=> {
					if(toHeight > 0){
						toHeight -= 500 
						this.$nextTick(function() {
							this.scrollTop = toHeight
						});	
						if(toHeight<0)toHeight = 0
					}else{clearInterval(annimateTop)}
				},20)
			},
			search(){
				uni.navigateTo({
					url: "/pages/index/search",
					animationType: 'pop-in',
					animationDuration: 300
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
					url: '/pages/index/login'
				})
				return false
			},
			// 跳转链接 
			btnJump(evt) { //option为object类型，会序列化上个页面传递的参数
			evt = evt + 1; 
				if(this.userName == ''){
					this.judge();
				}else{
					/* 根据判断evt参数来跳转页面 */
					switch (evt){
						case 1:
						// #ifdef H5
						uni.navigateTo({
							url: '../product/product'
						});
						// #endif
						// #ifndef H5
						uni.switchTab({
							url: '../product/product'
						});
						// #endif
							
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
						// #ifdef H5
						uni.navigateTo({
							url: '../shopping/shopping'
						});
						// #endif
						// #ifndef H5
						uni.switchTab({
							url: '../shopping/shopping'
						});
						// #endif
							
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
				// #ifdef H5
				uni.navigateTo({
					url: "../product/product"
				})
				// #endif
				// #ifndef H5
				uni.switchTab({
					url: "../product/product"
				})
				// #endif
			},
			// 点击娃娃头像:跳转到用户中心
			userImgTap(e){
				if(this.userName == ''){
					this.judge();
				}
				// #ifndef H5
				uni.switchTab({
					url: '../user/user'
				})
				// #endif
				// #ifdef H5
				uni.navigateTo({
					url: '../user/user'
				})
				// #endif
				
			},
			/* 点击退出触发的事件 */
			OutClick(evt){
				uni.request({
					url:getApp().globalData.webUrl+'/mobile/index/loginOut',
					method:'GET',
					data:{
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
					},
					success: (res) => {
						if(res.data.status == 0){
							var domain = uni.getStorageSync("domain");
							uni.clearStorageSync();
							uni.setStorageSync('domain',domain);
							uni.showToast({title: res.data.message,icon:'none'});
							this.userImgActive = true;
							this.userActive = false;
							this.userName = '';
						}
					}
				})
			},
			changeShopCar() {// 购物车数量改变
				this.$nextTick(function(){
					// #ifdef H5
					if(this.pageIsShow == true){
						this.$refs.child.add();
					}
					// #endif
				})
			},
			getScrollHeight() {// 获取设备高度
				// #ifdef H5
				this.scrollHeight = this.winHeight/0.93 - 50 + 'px';
				// #endif
				// #ifdef MP-WEIXIN
				this.scrollHeight = this.winHeight/0.93 + 'px';
				// #endif
				// #ifdef APP-PLUS
				uni.getSystemInfo({
				    success:(res)=> {
				        if(res.model == 'iPhoneX'){
							this.scrollHeight = this.winHeight/0.93 - 84 + 'px';
						}else{
							this.scrollHeight = this.winHeight/0.93 - 50 + 'px';
						}
				    }
				});
				// #endif
			}
		},
		// 数据接口请求( 初始化页面完成时触发)
		onLoad() {
			console.log(getApp().globalData.webUrl);
			this.imgUrl = getApp().globalData.webUrl;  //图片访问IP
			this.getData();
			// #ifdef APP-PLUS
			this.statusHeight = plus.navigator.getStatusbarHeight()-20;
			// #endif
	},
		onShow() {
			this.getScrollHeight();
			this.changeShopCar();
			let result = route.checkStatus();
			this.userName = result.userName;
			this.userImgActive = result.userImgActive;
			this.userActive = result.userActive;
			
			var isLogin = uni.getStorageSync('isLogin');
			if(isLogin){
				if(isLogin == 1&&this.dis==0){
					this.getData();
					uni.removeStorageSync('isLogin');
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
	}
</script>
<style lang="scss">
	@import "../../common/uni.css";
	@import "../../common/iconfont.css";
	@import "../../static/css/base.scss";
.container {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	.noData {
		flex: 1;
		.title {
			color: #bbd9fd;
			font-size: 30upx;
			margin-top: 30upx;
			text-shadow: 2upx 2upx 8upx #e4f2fe;
			letter-spacing: 1upx;
		}
	}
}
	.copyright{
		color: #8f8f94;
		font-size: 0.7rem;
		display: block;
		text-align: center;
	}
	// .header-search{
	// 	display: flex;
	// 	flex-direction: row;
	// 	position: fixed;
	// 	z-index: 999;
	// }
	/* 购物车角标 */
	.uni-tabbar .uni-tabbar__reddot{
		background-color: #0B877F !important;
	}
	
	.header {
		width: 100vw;
		
		// padding: 0 4%;
		// height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		// background: url(http://www.finedoing.com/h5/static/image/jd2.jpg) no-repeat fixed top;
		// background-image: url(http://www.finedoing.com/h5/static/image/jd2.jpg);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
	
		/*  #ifdef  APP-PLUS  */
		// top: var(--status-bar-height);
		padding-top: 20px;
		/*  #endif  */
		.uni-icon{
			color: #fff;
		}
		.addr {
			
			width: 10vw;
			height: 60upx;
			padding: 0 2vw;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			font-size: 28upx;
			// .icon {
			// 	height: 60upx;
			// 	margin-right: 5upx;
			// 	display: flex;
			// 	align-items: center;
			// 	font-size: 42upx;
			// 	color: #ffc50a;
			// }
		}
		.input-box {
			min-width: 70vw;
			max-width: 70vw;
			height: 28px;
			background-color: #f5f5f5;
			border-radius: 15px;
			position: relative;
			display: flex;
			align-items: center;
			.icon {
				display: flex;
				align-items: center;
				position: absolute;
				top: 0;
				right: 0;
				width: 60upx;
				height: 60upx;
				font-size: 34upx;
				color: #c0c0c0;
			}
			input {
				padding-left: 28upx;
				height: 28upx;
				font-size: 28upx;
			}
		}
		.icon-btn {
			width: 10vw;
			padding: 0 3vw;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			.icon {
				width: 60upx;
				height: 60upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 42upx;
			}
		}
	}
	.place {
		background-color: #ffffff;
		height: 44px;
		
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	
	.tab{
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		// background-image: url(http://www.finedoing.com/h5/static/image/jd2.jpg);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
	}
	
	/* 轮播 */
	.swiper {
		width: 100%;
		padding-bottom: 10px;
		display: flex;
		justify-content: center;
		
		.swiper-box {
			width: 95%;
			height: 40.7vw;
	
			overflow: hidden;
			border-radius: 15upx;
			box-shadow: 0upx 8upx 25upx rgba(0, 0, 0, 0.2);
			//兼容ios，微信小程序
			position: relative;
			z-index: 1;
			swiper {
				width: 100%;
				height: 40.7vw;
				swiper-item {
					image {
						width: 100%;
						height: 40.7vw;
					}
				}
			}
			.indicator {
				position: absolute;
				bottom: 20upx;
				left: 20upx;
				background-color: rgba(255, 255, 255, 0.4);
				width: 150upx;
				height: 5upx;
				border-radius: 3upx;
				overflow: hidden;
				display: flex;
				.dots {
					width: 0upx;
					background-color: rgba(255, 255, 255, 1);
					transition: all 0.3s ease-out;
					&.on {
						width: (100%/3);
					}
				}
			}
		}
	}
	.uni-image{
		width: 100% !important;
	}
	/* 选项导航 */
	.navigation-list{
		display: flex;
		flex-direction: row;
		flex-wrap:wrap;
		color:#FFFFFF;
	}
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
		display: inline-flex;
		justify-content: center;
		align-items: center;
		height: 40px;
		width: 40px;
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
	.goosNameBgc{
		height: 40px;
		line-height: 20px;
		background-color: #FFF; 
	}
	.goosName{
		text-align: center;
		border-bottom: 1px solid #BEBEBE;
	}
	.goosName>text{
		position: relative;
		top: 12px;
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
		width: 47%;
		/* #ifdef H5 */
	    padding: 10px 0 10px 2%;
		/* #endif */
		/* #ifndef H5 */
		padding: 10px 0 20px 2%;
		/* #endif */
	    display: flex;
	    flex-direction: column;
		font-size: 0.7rem;
	}
	.image-view {
	    height: 100%;
	    width: 100%;
		/* #ifdef H5 */
	    margin: 12px 0;
			/* #endif */
		/* #ifndef H5 */
		margin: 15px 0;
		 height: 75%;
			/* #endif */
	}
	/* #ifdef H5 */
	img.image {
		width: 100%;
		height: 100%;
	}
	/* #endif */
	/* #ifndef H5 */
	image{display: block;}
	image.image {
		display: block;
		width: 100%;
		height: 47vw;
	}
	/* #endif */
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
	.uni-bottoms{
		position: relative;
		margin-bottom: 20px;
	}
</style>