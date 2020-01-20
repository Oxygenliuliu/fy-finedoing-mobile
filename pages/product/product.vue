<template>
	<view  :class="(pageIsShow == false || net == false) == true?'container':''">
		<view v-if="pageIsShow == true && net == true">
			<!-- 占位 -->
			<!-- #ifdef H5 -->
			<view class="place"></view>
			<!-- #endif -->
			<view class="category-list">
				<!-- 左侧分类导航 -->
				<scroll-view  scroll-y="true" :style="'height:'+ scrollHeight" class="left" >
					<view class="row" v-for="(category,index) in categoryList" :key="index" :class="[index==showCategoryIndex?'on':'']" @tap="showCategory(index)">
						<view class="text">
							<view class="block"></view>
							{{category.gname}}
						</view>
					</view>
				</scroll-view>
				<!-- 右侧子导航 -->
				<scroll-view :style="'height:'+ scrollHeight" scroll-y="true" class="right" >
					<view class="category appRight" v-for="(category,index) in categoryList" :key="index" v-if="index==showCategoryIndex" >
						<view v-for="(two,twoindex) in category.second" :key="twoindex">
							<view class="level">{{two.gname}}</view>
							<view class="list">
								<view class="box" v-for="(box,i) in two.modity" :key="i">
									<navigator :url="'productinfo?type='+(box.tid)" class="rightList">
										<!-- #ifdef H5 -->
										<!-- <image v-lazy="imgUrl+(box.img || '/h5/static/img404.png')" style="width: 70px;height: 70px;" /> -->
										<img v-lazy="box.img" style="width: 70px;height: 70px;">
										<!-- #endif -->
										<!-- #ifndef H5 -->
										<img :src="box.img" lazy-load='true' style="width: 70px;height: 70px;" >
										<!-- #endif -->
									</navigator>
									<view class="text">{{box.gname}}</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="noData" v-if="pageIsShow == false || net == false">
			<noData :net="net" @handle='getType'></noData>
		</view>
		<!-- #ifdef H5 -->
		<tarBar :active='1' ref='child'></tarBar>
		<!-- #endif -->
	</view>
</template>
<script>
	import noData from '@/components/noData/noData.vue'
	//高德SDK
	import route from "@/common/public.js"
	import Vue from 'vue'
	import lazy from "@/common/vue-lazyload.js"
	import tarBar from "@/components/customize/tarBar.vue"
	Vue.use(lazy)
	export default {
		components: {
			tarBar,
			noData
		},
		data() {
			return {
				net:true,// 没有网络
				pageIsShow:true,// 后台请求错误
				scrollHeight: '',
				Signboard: '',
				Signguid: '',
				imgUrl :'', 
				showCategoryIndex:0,
				headerPosition:"fixed",
				//分类列表
				categoryList:[],
				diagram:require('../../static/img404.png'),
				dis:0,//判断获取的数据是否是已经登录后的数据，0是未登录数据，1是已登录数据
			}
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			if(e.scrollTop>=0){
				this.headerPosition = "fixed";
			}else{
				this.headerPosition = "absolute";
			}
		},
		onLoad() {
			this.imgUrl = getApp().globalData.webUrl;
			this.getType();
		},
		onShow() {
			this.getScrollHeight();
			this.changeShopCar();
			var isLogin = uni.getStorageSync('isLogin');
			if(isLogin){
				if(isLogin == 1&&this.dis==0){
					this.getType();
				}
			}else{
				this.dis = 0
			}
		},
		methods: {
			//分类切换显示
			showCategory(index){
				this.showCategoryIndex = index;
			},
			//搜索跳转
			toSearch(){
				uni.navigateTo({
					url: "../index/search"
				})
			},
			getType(){
				uni.getNetworkType({
				    success:  (res)=> {
						if(res.networkType == 'none'){
							 this.net = false;
						}else{
							 this.net = true;
						}
				    }
				});
				uni.showLoading({
					title:'加载中...'
				})
				var jsonList=uni.getStorageSync("jsonList");
				if(jsonList){
					var data = JSON.parse(jsonList); //JSON字符串转对象
					this.Signboard = data.Ident_Signboard;
					this.Signguid = data.Ident_Signguid;
				}
				 uni.request({
				 	url:getApp().globalData.webUrl+'/mobile/index/getType',
				 	method:'GET',
				 	data:{
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
					},
				 	success: (res) => {
				 		try{
				 			res.data.setype.map(item =>{
				 				item.second.forEach(i =>{
				 					i.modity.forEach(j =>{
				 						if(j.img == null){
				 							j.img = '../../static/img404.png'
				 						}else{
				 							j.img = this.imgUrl + j.img
				 						}
				 					})
				 				})
				 			})
				 			this.categoryList = res.data.setype;
				 			if(res.data.dis == 1){
				 				this.dis == 1
				 			}
							this.pageIsShow = true
				 		}catch(e){
				 			//TODO handle the exception
							uni.showToast({
								title:'获取数据异常,请稍后重试!',
								icon:'none'
							})
							this.pageIsShow = false
				 		}
				 	},
					fail:(res)=>{
						this.pageIsShow = false
						uni.hideLoading()
						uni.showToast({title: '请求失败'+'错误码201',icon:"none"});
					},
					complete() {
						uni.hideLoading();
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
				this.scrollHeight = this.winHeight/0.93 - 90 + 'px';
			// #endif
			// #ifdef MP-WEIXIN
			this.scrollHeight = this.winHeight/0.93 + 'px';
			// #endif
			// #ifdef APP-PLUS
			if(plus.os.name == 'Android') {
				this.scrollHeight = this.winHeight/0.93 - 50 - 15 + 'px';
			}else{
				uni.getSystemInfo({
				    success:(res)=> {
				        if(res.model == 'iPhoneX'){
							this.scrollHeight = this.winHeight/0.93 - 50 - 44 - 60 + 'px';
						}else{
							this.scrollHeight = this.winHeight/0.93 - 50 - 44 - 25 + 'px';
						}
				    }
				});
			}
			// #endif
			}
		}
	}
</script>
<style lang="scss" scoped>
@import "@/static/font.scss";
/* 404页面样式 */
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

	page{
		font-size: 0.7rem;
	}
	.level{
		font-size: 0.7rem;
	}
	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height);//覆盖样式
		/*  #endif  */
		
	}

	.header{
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #fff;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
		
		.addr{
			width: 120upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			font-size: 0.7rem;
			.icon{
				height: 60upx; 
				margin-right: 5upx;
				display: flex;
				align-items: center;
				font-size: 0.7rem;
				color: #ffc50a;
			}
		}
		.input-box{
			width: 100%;
			height: 60upx;
			background-color: #f5f5f5;
			border-radius: 30upx;
			position: relative;
			display: flex;
			align-items: center;
			.icon{
				display: flex;
				align-items: center;
				position: absolute;
				top:0;
				right: 0;
				width: 60upx;
				height: 60upx;
				font-size: 0.7rem;
				color: #c0c0c0;
			}
			input{
				padding-left: 28upx;
				height: 28upx;
				font-size: 0.7rem;
				width: 100%;
			}
		}
		.icon-btn{
			width: 60upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			.icon{
				width: 60upx;
				height: 60upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 0.7rem;
			}
		}
	}
	.place{
		background-color: #ffffff;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: 0;
		height: 0;
		/*  #endif  */
	}
	.category-list{
		width: 100%;
		background-color: #fff;
		display: flex;
		position: fixed;
		/* #ifndef MP-WEIXIN */
		top:40px;
		/* #endif */
		.left,.right{
			position: absolute;
			top: 0upx;
			bottom: 0upx;
		}
		.left{
			/*  #ifdef  APP-PLUS  */
			margin-top: -42px;
			/*  #endif  */
			width: 24%;
			left: 0upx;
			background-color: #f2f2f2;
			.row{
				width: 100%;
				height: 90upx;
				display: flex;
				justify-content: center;
				align-items: center;
				.text{
					width: 70%;
					text-align: center;
					position: relative;
					font-size: 0.7rem;
					display: flex;
					justify-content: center;
					color: #3c3c3c;
					.block{
						position: absolute;
						width: 0upx;
						left: 0;
					}
				}
				&.on{
					height: 100upx;
					background-color: #fff;
					.text{
						font-size: 0.7rem;
						font-weight: 600;
						color: #2d2d2d;
						.block{
							width: 10upx;
							height: 80%;
							top: 10%;
							background-color: #f06c7a;
						}
					}
				}
			}
		}
		.right{
			/*  #ifdef  APP-PLUS  */
			margin-top: -34px;
			/*  #endif  */
		    width: 76%;
			left: 24%;
			.category{
				width: 94%;
				padding: 20upx 3%;
				.banner{
					width: 100%;
					height: 24.262vw;
					border-radius: 10upx;
					overflow: hidden;
					box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.3);
					image{
						width: 100%;
						height: 24.262vw;
					}
				}
				.list{
					margin-top: 40upx;
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					.box{
						width: calc(71.44vw / 3);
						margin-bottom: 30upx;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-wrap: wrap;
						image{
							width: 60%;
							height: calc(71.44vw / 3 * 0.6);
						}
						.text{
							margin-top: 5upx;
							width: 100%;
							display: flex;
							justify-content: center;
							font-size: 0.7rem;
						}
					}
				}
			}
		}
		/* #ifdef APP-PLUS */
		.appRight{
			margin-bottom: 40px;
		}
		/* #endif */
	}

</style>