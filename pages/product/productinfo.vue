<template>
	<view>
		<view class="status" :style="{ opacity: afterHeaderOpacity }"></view>
		<view class="header">
			<!-- 头部-默认显示 -->
			<view class="before" :style="{ opacity: 1 - afterHeaderOpacity, zIndex: beforeHeaderzIndex }">
				<view class="back">
					<view class="icon xiangqian" @tap="back" v-if="showBack"></view>
				</view>
				<view class="middle"></view>
				<view class="icon-btn">
					<view class="icon cart" @tap="GoBackCart"></view>
				</view>
			</view>
			<!-- 头部-滚动渐变显示 -->
			<view class="after" :style="{ opacity: afterHeaderOpacity, zIndex: afterHeaderzIndex }">
				<view class="back">
					<view class="icon xiangqian" @tap="back" v-if="showBack"></view>
				</view>
				<view class="middle">
					<view v-for="(anchor,index) in anchorlist" :class="[selectAnchor==index ?'on':'']" :key="index" @tap="toAnchor(index)">{{anchor.name}}</view>
				</view>
				<view class="icon-btn">
					<view class="icon cart" @tap="GoBackCart"></view>
				</view>
			</view>
		</view>
		<!-- 底部菜单 -->
		<view class="footer">
			<view class="icons">
				<view class="box" @tap="share">
					<view class="icon fenxiang"></view>
					<view class="text">分享</view>
				</view>
				<view class="box" @tap="toChat">
					<view class="icon kefu"></view>
					<view class="text">客服</view>
				</view>
				<view class="box" @tap="GoBackCart">
					<view class="icon cart"><text class="jiaobiao" :class="{JBnum:subscript}">{{shop}}</text></view>
					<view class="text">购物车</view>
				</view>
			</view>
			<view class="btn">
				<view class="joinCart" @tap="joinCart">加入购物车</view>
				<view class="buy end" @tap="buy">立即购买</view>
			</view>
		</view>

		<!-- 规格-模态层弹窗 组件 -->
		<uni-makings ref="unimakings" @change="makchange" @tap="retPrice"></uni-makings>

		<!-- 商品主图轮播 -->
			<view>
			<view class="swiper-box">
				<swiper circular="true" autoplay="true" @change="swiperChange">
					<swiper-item v-for="(swiper,item) in swiperList" :key="item">
						<img class="swiperImg" v-lazy="ImageUrl+swiperList[item].url" @tap='displayImg(item)'>
					</swiper-item>
				</swiper>
				<view class="indicator">{{currentSwiper+1}}/{{swiperList.length}}</view>
			</view>
			<!-- 标题 价格 -->
			<view class="info-box goods-info">
				<view class="price">￥ {{totalPrice}}</view>
				<view class="title" :data-tyid="(productList.ty_id)" :data-typarId="(productList.ty_parentid)">{{productList.ty_name}}</view>
			</view>

			<!-- 服务-规则选择 -->
			<view class="info-box spec">
				<view class="row" @tap="showSpec(false)">
					<view class="text">规格</view>
					<view class="content">
						<view :class="{norm:normShow}">选择规格：</view>
						<view class="sp">
							<!-- 材料 -->
							<view>{{stuffName}}</view>
						</view>
						<view class="sp">
							<!-- 规格和数量 -->
							<view>{{normsInfo}} {{numInfo}}</view>
						</view>
						<view class="sp">
							<!-- 工艺 -->
							<view v-for="(ite, index) in rSelect" :key="index">{{gongYiLen == index+1?ite:ite+','}}</view>
						</view>
					</view>
					<view class="arrow">
						<view class="icon xiangyou"></view>
					</view>
				</view>
			</view>
			<!-- 详情 -->
			<view class="description" id="productInfo">
				<view class="title">———— 商品详情 ————</view>
				<view class="content">
					<rich-text :nodes="descriptionStr"></rich-text>
				</view>
			</view>
		</view>
		<!-- 加入购物车动画 cartx 和 carty 是购物车位置在屏幕位置的比例 例如左上角x0.1 y0.1 右下角 x0.9 y0.9-->
		<shopCarAnimation ref="carAnmation" cartx="0.2" carty="1.1"></shopCarAnimation>

	</view>
</template>

<script>
	import route from "@/common/public.js"
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import Vue from 'vue'
	import lazy from "@/common/vue-lazyload.js"
	import NativeShare from "@/common/NativeShare.js" //分享组件
	import shopCarAnimation from '@/components/fly-in-cart/fly-in-cart.vue' // 加入购物车动画组件
	import uniMakings from "@/components/uni-makings/uni-makings.vue"
	// import hm from "@/common/hm.js"
	// Vue.use(hm)
	Vue.use(lazy)
	export default {
		components: {
			uniPopup,
			shopCarAnimation,
			uniMakings,
			NativeShare
		},
		data() {
			return {
				// 购物车小球
				ball: {
					show: false,
					el: ''
				},
				ImageUrl: '', //图片访问ip
				//控制渐变标题栏的参数
				beforeHeaderzIndex: 11, //层级
				afterHeaderzIndex: 10, //层级
				beforeHeaderOpacity: 1, //不透明度
				afterHeaderOpacity: 0, //不透明度
				//是否显示返回按钮
				// #ifndef MP
				showBack: true,
				// #endif
				//轮播主图数据
				swiperList: '',
				//轮播图下标
				currentSwiper: 0,
				anchorlist: [], //导航条锚点
				selectAnchor: 0, //选中锚点
				specClass: '', //规格弹窗css类，控制开关动画
				selectSpec: null, //选中规格
				//商品描述html
				descriptionStr: '',
				productInfo: '', //规格赋值(材料，规格，数量)

				ggcheckNum: -1, //规格按钮下标
				checkNum: -1, //材料选择下标
				number: 1, //数量
				productList: '', //商品列表
				// shopImgs: '',  //弹出层图片
				Price: '', // 商品单价价格
				totalPrice: '',  //商品总价
				caiLiaoId: '', //材料id
				guigWidth: '', //规格：宽
				guigHeight: '', //规格：高
				offerWidth: '', //规格：宽 报价使用
				offerHeight: '', //规格：高 报价使用
				guigMonad: '', //规格单位
				rSelect: [], //全部工艺选中 
				gongYiLen: '', //工艺名称长度
				lpMoney: '', //工艺价格
				gongYiId: [], //工艺id

				width: '', //输入框 宽
				height: '', //输入框 高
				gongYiShow: false, //是否存在工艺提示
				opType: '', //typeID

				shop: 0, //购物车数量
				subscript: true, //购物车数量角标是否显示
				Partnerid: '', //客户ID
				dbname: '', //数据库
				token: '', //token值
				org: '', //加密狗
				Signboard: '', //令牌
				Signguid: '', //用户id
				doubt_qq: '', //联系客服 qq
				uName: '', //登录用户名
				log: '', //判断是从登录页过来的还是其他页面
				difNum: '', //判断是从哪个页面点击商品过来的
				// isActive:false,//弹出遮罩层时，底部滚动是否禁止
				shareClass: '', //分享弹窗css类，控制开关动画
				nativeShare: '', //分享
				layerHeight: 0,
				stuffName: '', //材料显示
				normsInfo: '', //规格显示
				numInfo: '', //数量显示
				normShow: false, //选择规格 是否显示
			};
		},
		onLoad(options) {
			uni.removeStorage({
				key: 'orders'
			})
			//小程序隐藏返回按钮
			// #ifdef MP
			//小程序隐藏返回按钮
			this.showBack = false;
			// #endif
			this.ImageUrl = route.variable; //图片访问IP
			this.prodOnLoad(options); //调用函数
			var _hmt = _hmt || [];
			(function() {
				var hm = document.createElement("script");
				hm.src = "https://hm.baidu.com/hm.js?d69321757dcfbfbe09dbddd4dca87b28";
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(hm, s);
			})();
			this.nativeShare = new NativeShare(); //定义分享
			// 动态添加 弹框高度
			try {
				const res = uni.getSystemInfoSync();
				this.layerHeight = res.windowHeight * 0.8;
			} catch (e) {
				// error
			}
		},
		onReady() {
			this.calcAnchor(); //计算锚点高度，页面数据是ajax加载时，请把此行放在数据渲染完成事件中执行以保证高度计算正确
		},
		onShow() {
			let jsonList = uni.getStorageSync("jsonList"); //获取存储在Storage里的值
			let data = JSON.parse(jsonList); //JSON字符串转对象
			this.Partnerid = data.csid; //客户ID
		},
		onPageScroll(e) {
			//锚点切换
			this.selectAnchor = e.scrollTop >= this.anchorlist[1].top ? 1 : 0;
			//导航栏渐变
			let tmpY = 375;
			e.scrollTop = e.scrollTop > tmpY ? 375 : e.scrollTop;
			this.afterHeaderOpacity = e.scrollTop * (1 / tmpY);
			this.beforeHeaderOpacity = 1 - this.afterHeaderOpacity;
			//切换层级
			this.beforeHeaderzIndex = e.scrollTop > 0 ? 10 : 11;
			this.afterHeaderzIndex = e.scrollTop > 0 ? 11 : 10;
		},
		methods: {
			displayImg(e) {// 点击图片放大
				var urls = new Array;
				for(var i = 0;i < this.swiperList.length;i++){
					urls.push(route.variable + this.swiperList[i].url)
				}
				uni.previewImage({
					urls:urls,
					current:e
				})
			},
			retPrice(e) {
				this.Price = e.Price;
				this.totalPrice = e.totalPrice;
				this.lpMoney = e.lpMoney;
				console.log(e)
				let Distinguish = uni.getStorageSync("Distinguish");
				let jsonList = uni.getStorageSync("jsonList"); //获取存储在Storage里的值
				let data = JSON.parse(jsonList); //JSON字符串转对象
				// Distinguish==shopCart:做加入购物车操作
				if (Distinguish == 'shopCart') {
					console.log(this.number)
					uni.request({
						url: route.variable + '/mobile/Classification/joinShop',
						method: 'GET',
						data: {
							Ident_Signboard: this.Signboard, //令牌
							Ident_Signguid: this.Signguid, //用户id
							long: this.guigWidth, //宽
							kuan: this.guigHeight, //高
							clid: this.caiLiaoId, //材料id
							qty: this.number, //数量
							total: e.totalPrice, //总价
							price: e.Price, //单价
							gyid: this.gongYiId, //工艺id 
							gyname: this.rSelect, //工艺名称
							lpmoney: e.lpMoney, //后期工艺金额
							typeid: this.opType,  //类别id
						},
						success: (res) => {
							let result = route.publicIf(res.data)
							if (result == false) {
								return false;
							}
							if (res.data.status == 0) {
								this.shop = (this.shop) + 1; //购物车数量+1
								data.shop = this.shop; //data.shop 重新赋值
								let json = JSON.stringify(data); //对象转字符串
								uni.setStorageSync('jsonList', json) //将shop数据库数量从新存储进去
								uni.showToast({
									title: '加入购物车成功',
									icon: 'success',
								})
								uni.setStorageSync('etmeNum', "1");   //给购物车作区分
								this.subscript = false;
								// 成功的话，调用加入购物车动画
								var cd = {
									"img": this.ImageUrl + this.shopImgs,
									"touches": e.touches
								};
								this.$refs.carAnmation.touchOnGoods(cd);
							} else if (res.data.status == 202) {
								uni.showToast({
									title: '登录身份已过期，请重新登录',
									icon: 'none',
									duration: 3000,
								})
								setTimeout(function() {
									uni.navigateTo({
										url: '../index/login?typeid=' + this.opType
									})
								}, 3000);
							} else {
								uni.showToast({
									title: '加入购物车失败',
									icon: 'none'
								})
							}
						},
						fail: (res) => {
							uni.hideLoading()
							uni.showToast({
								title: '登录身份已过期，请重新登录' + '错误码201',
								icon: 'none'
							})
						}
					})
				}
			},
			// 登录情况下 子组件返回的参数值 函数
			makchange(res) {
				this.normShow = true;
				this.stuffName = res.cailList;
				this.normsInfo = '规格：' + res.guigWidth + '*' + res.guigHeight + res.guigMonad;
				this.numInfo = '数量：' + res.number;
				this.rSelect = res.gongYiName; //工艺列表
				if (res.gongYiName != '') { //判断gomgyiName是否为空 (不为空时：赋值给this.gongYiLen长度 作为上面判断工艺加逗号)
					this.gongYiLen = res.gongYiName.length;
				}
				this.Price = res.Price; //价格
				this.number = res.number;  //数量
				this.caiLiaoId = res.caiLiaoId; //材料ID
				this.gongYiId = res.gongYiId; //工艺ID
				this.offerHeight = res.offerHeight; //报价请求高
				this.offerWidth = res.offerWidth; //报价请求宽
				this.guigHeight = res.guigHeight; //高
				this.guigWidth = res.guigWidth; //宽
				this.lpMoney = res.lpMoney; //工艺单价
				this.totalPrice = res.totalPrice; //总价
				this.ggcheckNum = res.ggcheckNum; //规格选中下标
				this.checkNum = res.checkNum; //材料选中下标
				this.Signguid = res.Signguid;
				this.Signboard = res.Signboard;
				console.log(res)
			},
			// 进页面加载数据函数
			prodOnLoad(options) {
				this.opType = options.type;
				this.log = options.log; //区别：判断是从登录页过来的还是其他页面
				this.difNum = options.difNum; //区别：判断是从哪个页面点击商品过来的
				let result = route.checkStatus();
				if (result.userName != '') {
					let jsonList = uni.getStorageSync("jsonList"); //获取存储在Storage里的值
					let data = JSON.parse(jsonList); //JSON字符串转对象
					this.dbname = data.dbname; //数据库
					this.token = data.softdog; //加密狗
					this.org = data.org; //访问IP地址
					this.Partnerid = data.csid; //客户ID
					this.Signboard = data.Ident_Signboard; //令牌
					this.Signguid = data.Ident_Signguid; //用户id
					this.shop = data.shop; //购物车数量
					this.uName = data.userName; //登录用户名
					if (this.shop == 0) {
						this.subscript = true;
						this.Signboard, this.Signguid
					} else {
						this.subscript = false;
					}
				}
				uni.request({
					url: route.variable + '/mobile/order/productInfo',  
					method: 'GET',
					data: {
						gid: options.type
					},
					success: (res) => {
						console.log(res)
						let result = route.publicIf(res.data)
						if (result == false) {
							return false;
						}
						if (res.data.status == 0) {
							if(res.data.dis != 1){  //判断是不是多级不是就给材料赋值
								this.stuffList = res.data.stuff; //给stuffList(材料列表)赋值
							}
							this.doubt_qq = res.data.doubt_qq; //给doubt_qq（联系客服 qq）赋值
							this.productList = res.data.goods; //给productList(商品列表)赋值
							this.swiperList = res.data.shopimg; //给shopImg(顶部商品图片)赋值
							this.Price = res.data.goods.price; //给Price（商品价格）赋值
							this.totalPrice = res.data.goods.price; //给Price（商品价格）赋值
							this.defPrice = res.data.goods.price; //给defPrice（商品价格）赋值
							this.shopImgs = res.data.shopimg[0].url; //弹出框图片
							this.unitlist = res.data.unit; //给unitlist(规格列表)赋值
							this.descriptionStr = res.data.Introduc.replace(/\<img/gi, '<img style="max-width:100%;height:auto" '); //给descriptionStr(商品详情)赋值
						}
					},
					fail: (res) => {
						uni.hideLoading()
						uni.showToast({
							title: '请求失败' + '错误码201',
							icon: "none"
						});
					}
				});
			},
			// 分享功能开始
			share() {
				console.log("分享")
				var name = this.productList.ty_name;
				var url = location.href;
				var shareData = {
					title: name,
					desc: '',
					// 如果是微信该link的域名必须要在微信后台配置的安全域名之内的。
					link: url,
					icon: '',
					// 不要过于依赖以下两个回调，很多浏览器是不支持的
					success: function() {},
					fail: function() {}
				}
				this.nativeShare.setShareData(shareData)
				try {
					this.nativeShare.call()
				} catch (err) {}
			},
			
			// 分享功能结束

			moveHandle() {
				return false;
			},
			//轮播图指示器
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			},
			// 客服: 打开qq聊天
			toChat(e) {
				window.location.href = "mqqwpa://im/chat?chat_type=wpa&uin=" + this.doubt_qq + "&version=1&src_type=web&web_src=oicqzone.com";
			},
			// 点击购物车图标 跳转购物车页面        
			GoBackCart() {
				uni.setStorageSync('pageNum', 1);
				uni.setStorageSync('typeid', this.opType);
				uni.navigateTo({
					url: '../shopping/shopping'
				})
			},
			// 请求参数 第二次点击加入购物车或者立即购买时 调用一次报价接口
			requestFun(e = '') {
				// clickNum：判断是否点击过加入购物车或者立即购买按钮
				return {
					'guigWidth': this.guigWidth,
					'guigHeight': this.guigHeight,
					"userName": this.result.userName,
					'Partnerid': this.Partnerid,
					'token': this.token,
					'dbname': this.dbname,
					'org': this.org,
					'caiLiaoId': this.caiLiaoId,
					'offerWidth': this.offerWidth,
					'offerHeight': this.offerHeight,
					'LpidList': this.gongYiId,
					'number': this.number,
					'checkNum': this.checkNum,
					'ggcheckNum': this.ggcheckNum,
					'touches': e.touches,
					'clickNum': 1
				};
			},
			// 加入购物车
			joinCart(e) {
				let _that = this;
				this.result = route.checkStatus();
				uni.setStorageSync('Distinguish', 'shopCart'); //存储Distinguish的值 在报价返回函数里面做区分操作
				if (this.result.userName != '') {
					let jsonList = uni.getStorageSync("jsonList"); //获取存储在Storage里的值
					let data = JSON.parse(jsonList); //JSON字符串转对象
					this.dbname = data.dbname; //数据库
					this.token = data.softdog; //加密狗
					this.org = data.org; //访问IP地址
					this.Partnerid = data.csid; //客户ID
					this.Signboard = data.Ident_Signboard; //令牌
					this.Signguid = data.Ident_Signguid; //用户id
					this.shop = data.shop; //购物车数量
					if (this.stuffName == '' || this.normsInfo == '' || this.numInfo == '') {
						uni.showToast({
							title: '请选择规格',
							icon: 'none',
							duration:1000,
						});
						setTimeout(function(fun) {
							_that.prodShow(fun);  //直接调起规格选择组件
						}, 1000);
						return false;
					} else {
						this.$refs.unimakings.offer(this.requestFun(e)); //调用子组件里面的报价函数（参数e：是加入购物车动画时需要的参数）
					}
				} else {
					uni.showToast({
						title: '账户未登录，请前往登录' + '错误码201',
						icon: 'none',
						duration: 3000
					})
					setTimeout(function() {
						uni.navigateTo({
							url: '../index/login?typeid=' + this.opType
						})
					}, 3000)
				}
			},
			//立即购买
			buy(fun) {
				let _that = this;
				this.result = route.checkStatus();
				uni.setStorageSync('Distinguish', 'purchase'); //存储Distinguish的值 在报价返回函数里面做区分操作
				if (this.result.userName != '') {
					let jsonList = uni.getStorageSync("jsonList"); //获取存储在Storage里的值
					let data = JSON.parse(jsonList); //JSON字符串转对象
					this.dbname = data.dbname; //数据库
					this.token = data.softdog; //加密狗
					this.org = data.org; //访问IP地址
					this.Partnerid = data.csid; //客户ID
					this.Signboard = data.Ident_Signboard; //令牌
					this.Signguid = data.Ident_Signguid; //用户id
					this.shop = data.shop; //购物车数量
					if (this.stuffName == '' || this.normsInfo == '' || this.numInfo == '') {
						uni.showToast({
							title: '请选择规格',
							icon: 'none',
							duration:1000,
						});
						setTimeout(function(fun) {
							_that.prodShow(fun);  //直接调起规格选择组件
						}, 1000);
						return false;
					} else {
						this.rqt()
						uni.navigateTo({
							url: '../order/payment?Ident_Signboard=' + this.Signboard + '&Ident_Signguid=' + this.Signguid + '&long=' +
								this.guigWidth + '&kuan=' + this.guigHeight +
								'&clid=' + this.caiLiaoId + '&qty=' + this.number + '&total=' + this.totalPrice + '&price=' + this.Price + '&gyid=' +
								this.gongYiId + '&gyname=' + this.rSelect +
								'&spid=' + this.productList.ty_id + '&lpmoney=' + this.lpMoney + '&l=2'
						});
					}
				} else {
					uni.showToast({
						title: '账户未登录，请前往登录' + '错误码201',
						icon: 'none',
						duration: 3000
					})
					setTimeout(function() {
						uni.navigateTo({
							url: '../index/login?typeid=' + this.opType
						})
					}, 3000)
				}
			},
			rqt:async function(){
				var [error, res] = await uni.request({
				        url: "http://" + this.org + "/services/order/query",
				        method: 'GET',
				        data: {
				        	token: this.token, //令牌
				        	dbname: this.dbname, //数据库
				        	data: '{"params": [{"goodsid": "' + this.caiLiaoId + '","partnerid": "' + this.Partnerid + '","w": "' + this.offerWidth +
					'","h": "' + this.offerHeight + '","LpidList":"' + this.LpidList + '","qty": "' + this.number + '"}]}', //其他参数
				        },
				    });
				    console.log(res.data);
					if (res.data.status == 0) {
						this.lpMoney = res.data.QueryResults[0]['lpmoney']; //工艺价格
						// 判断: 折扣后单价是否为空
						if (res.data.QueryResults[0]['discprice'] == 0) {
							// 总价-工艺价格 = 单价
							this.totalPrice = (res.data.QueryResults[0]['totalmoney']).toFixed(2);  //总价
							this.Price = (res.data.QueryResults[0]['price']).toFixed(2);  //单价
						}else {
							this.totalPrice = (res.data.QueryResults[0]['disctotalmoney']).toFixed(2);  //总价
							this.Price = (res.data.QueryResults[0]['price']).toFixed(2);  //单价
						}
					} else if (res.data.status == 4) {
						uni.showToast({
							title: '请选择材料或规格',
							icon: 'none'
						})
					}
			},
			//跳转锚点
			toAnchor(index) {
				this.selectAnchor = index;
				uni.pageScrollTo({
					scrollTop: this.anchorlist[index].top,
					duration: 200
				});
			},
			//计算锚点高度
			calcAnchor() {
				this.anchorlist = [{
						name: '主图',
						top: 0
					},
					{
						name: '详情',
						top: 0
					}
				]
				let commentsView = uni.createSelectorQuery().select("#productInfo");
				commentsView.boundingClientRect((data) => {
					let statusbarHeight = 0;
					//APP内还要计算状态栏高度
					// #ifdef APP-PLUS
					statusbarHeight = plus.navigator.getStatusbarHeight()
					// #endif
					let headerHeight = uni.upx2px(100);
					this.anchorlist[1].top = data.top - headerHeight - statusbarHeight;

				}).exec();
			},
			//返回上一页
			back(e) {
				// 判断:是否从登录页面跳转过来
				if (this.log == '1') {
					uni.navigateTo({
						url: '../index/index'
					})
				} else if (this.log == '2') {
					uni.navigateTo({
						url: '../index/index'
					})
				} else {
					history.go(-1)
				}
			},
			//点击选择规格 弹窗组件弹起
			showSpec(fun) {
				// 判断是否存在csid 不存在就去完善公司信息
				if (this.Partnerid == null) {  
					route.checkCsid(this.Partnerid);
					return false;
				}
				this.prodShow(fun);
			},
			prodShow(fun){
				let results = route.checkStatus();
				this.specCallback = fun;
				// 请求参数数组：下单页
				let productArray = {
					'product': "product",
					"Signboard": this.Signboard,
					"Signguid": this.Signguid,
					"Price": this.Price,
					"stuffList": this.stuffList,
					"unitlist": this.unitlist,
					"shopImgs": this.shopImgs,
					"Partnerid": this.Partnerid,
					"dbname": this.dbname,
					"token": this.token,
					"org": this.org,
					"userName": results.userName,
					'type_id':this.opType,
				}
				this.$refs.unimakings.show(productArray); //调用子组件的show()函数 调起子组件	
			},
			specCallback() {
				return;
			},
		}
	};
</script>

<style lang="scss">
	@import "../../static/font.scss";
	@import "../../common/uni.css";

	page {
		background-color: #f8f8f8;
	}

	// 数字角标
	.jiaobiao {
		width: 0.9rem;
		height: 0.9rem;
		font-size: 0.6rem;
		line-height: 0.9rem;
		border: 1ps solid red;
		border-radius: 50%;
		position: absolute;
		top: 0.1rem;
		color: #fff;
		background-color: #dd524d;
		text-align: center;
	}

	.JBnum {
		display: none;
	}

	// 数字角标结束
	.fix {
		position: fixed;
	}

	.addToCart button {
		padding: 0 1rem;
	}

	.immediatePayment button {
		padding: 0 1rem;
	}

	.swiperImg {
		width: 100%;
		height: 100%;
	}

	.cur {
		background-color: #FF0000 !important;
		color: #FFF;
	}

	.technoList {
		text-align: left;
		padding: 10px;
	}

	.scroll-Y {

		box-sizing: border-box;
		max-height: 379px;
		padding-bottom: 100px;
	}

	.scroll-view-item {
		height: 86vh;
	}

	.specsList {
		padding: 10px 0 10px 10px;
	}

	.specImg image {
		width: 5rem;
		height: 5rem;
		position: relative;
		top: -1.5rem;
		background: #FFF;
		border-radius: 4px;
		border: #e5e5e5 solid 1px;
	}

	.specsName {
		width: 100%;
		color: #666;
		font-size: 12px
	}

	/* 伪元素是行内元素 正常浏览器清除浮动方法 */
	.clearfix:after {
		content: "";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}

	/* ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行 */
	.clearfix {
		zoom: 1;
	}

	// 弹出框-宽高输入框样式
	.enter {
		width: 18.4rem;
		margin: 0px !important;
		padding: 0px !important;
		display: flex !important;
		background: transparent !important;
		height: 40px;
		line-height: 40px;
		padding-bottom: 1px !important;
	}

	.enter>input {
		width: 106px;
		margin: 0px;
		border: none;
		border-bottom: #E5E5E5 solid 1px;
		height: 39px;
		line-height: 39px;
		text-align: center;
		font-size: 0.7rem;
		color: #000000;
	}

	// 弹出框-选择工艺的样式
	.gyshow {
		display: none
	}

	@keyframes showPopup {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes hidePopup {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}

	@keyframes showLayer {
		0% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(-100%);
		}
	}

	@keyframes hideLayer {
		0% {
			transform: translateY(-100%);
		}

		100% {
			transform: translateY(0);
		}
	}

	.icon {
		font-size: 26upx;
	}

	// 主页面-头部阴影样式
	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height); //覆盖样式
		/*  #endif  */
		background-color: #f1f1f1;
		transition: opacity 0.05s linear;
	}

	// .isActive {
	// 	width: 100%;
	// 	position:fixed;
	// 	top:0;
	// 	height: 100%;
	// 	overflow: hidden;
	// }
	// 选择规格是否显示
	.norm {
		display: none;
	}

	// 主页面-头部样式
	.header {
		width: 100%;

		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);

		/*  #endif  */
		.before,
		.after {
			width: 92%;
			padding: 0 4%;
			height: 100upx;
			display: flex;
			align-items: center;
			position: fixed;
			top: 0;
			/*  #ifdef  APP-PLUS  */
			top: var(--status-bar-height);
			/*  #endif  */
			transition: opacity 0.05s linear;

			.back {
				width: 125upx;
				height: 60upx;
				flex-shrink: 0;

				.icon {
					margin-left: -10%;
					width: 60upx;
					height: 60upx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 42upx;
				}
			}

			.middle {
				width: 100%;
			}

			.icon-btn {
				width: 60upx;
				height: 60upx;
				flex-shrink: 0;
				display: flex;

				.icon {
					&:first-child {
						margin-right: 5upx;
					}

					width: 60upx;
					height: 60upx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 42upx;
				}
			}
		}

		.before {
			.back {
				.icon {
					color: #fff;
					background-color: rgba(0, 0, 0, 0.2);
					border-radius: 100%;
				}
			}
			.icon-btn {
				.icon {
					color: #fff;
					background-color: rgba(0, 0, 0, 0.2);
					border-radius: 100%;

				}
			}
		}
		.after {
			background-color: #f1f1f1;
			.back {
				.icon {
					color: #666;
				}
			}
			.icon-btn {
				.icon {
					color: #666;
				}
			}
			.middle {
				font-size: 32upx;
				height: 90upx;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 7%;
				view {
					width: (100%/3);
					padding: 0 3%;
					margin: 0 3%;
					display: flex;
					justify-content: center;
					align-items: center;
					&.on {
						margin-bottom: -4upx;
						color: #f47952;
						border-bottom: solid 4upx #f47952;
					}
				}
			}
		}
	}

	// 主页面-轮播图样式
	.swiper-box {
		position: relative;
		width: 100%;
		height: 100vw;
		swiper {
			width: 100%;
			height: 100vw;
			swiper-item {
				image {
					width: 100%;
					height: 100vw;
				}
			}
		}

		.indicator {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0 25upx;
			height: 40upx;
			border-radius: 40upx;
			font-size: 22upx;
			position: absolute;
			bottom: 20upx;
			right: 20upx;
			color: #fff;
			background-color: rgba(0, 0, 0, 0.2);
		}
	}
	// 价格 规格 共有样式
	.info-box {
		width: 100%;
		background-color: #fff;
		margin-bottom: 20upx;
	}
	// 主页面-标题价格样式
	.goods-info {
		.price {
			font-size: 46upx;
			font-weight: 600;
			color: #f47925;
			padding: 0 0 0 12upx;
		}
		.title {
			font-size: 30upx;
			padding: 0 0 0 12upx;
		}
	}

	// 主页面-规则选择样式
	.spec {
		.row {
			width: 100%;
			display: flex;
			align-items: center;
			margin: 0 0 30upx 20upx;
			height: 50px;
			.text {
				width: 11%;
				font-size: 24upx;
				color: #a2a2a2;
				margin-right: 20upx;
			}
			.content {
				font-size: 28upx;
				display: flex;
				flex-wrap: wrap;
				.serviceitem {
					margin-right: 10upx;
				}
				.sp {
					width: 98%;
					display: flex;
					view {
						background-color: #f6f6f6;
						color: #999;
						font-size: 20upx;
						border-radius: 5upx;
						&.on {
							border: solid 1upx #f47952;
							padding: 4upx 8upx;
						}
					}
				}
			}
			.arrow {
				position: absolute;
				right: 2%;

				.icon {
					color: #ccc;
				}
			}
		}
	}

	// 商品详情样式
	.description {
		.title {
			width: 100%;
			height: 80upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 26upx;
			color: #999;
		}
		.content {
			padding-bottom: 3rem;
		}
	}

	// 主页面底部样式
	.footer {
		position: fixed;
		bottom: 0upx;
		width: 92%;
		padding: 0 4%;
		height: 99upx;
		border-top: solid 1upx #eee;
		background-color: #fff;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.icons {
			display: flex;
			height: 80upx;
			margin-left: -4%;
			.box {
				width: 90upx;
				height: 80upx;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				.unibadge {
					z-index: 999;
					position: absolute;
					top: 3px;
					background-color: #FF0000;
					color: #FFF;
				}
				.icon {
					font-size: 40upx;
					color: #828282;
					margin-top: -3px;
				}
				.text {
					margin-top: -8px;
					display: flex;
					justify-content: center;
					width: 100%;
					font-size: 22upx;
					color: #666;
				}
			}
		}

		.btn {
			height: 80upx;
			border-radius: 40upx;
			overflow: hidden;
			display: flex;
			margin-right: -2%;
			.joinCart,
			.buy {
				height: 80upx;
				padding: 0 40upx;
				color: #fff;
				display: flex;
				align-items: center;
				font-size: 28upx;
			}
			.joinCart {
				background-color: #f0b46c;
			}
		}
	}
</style>
