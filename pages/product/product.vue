<template>
	<view>
		<!-- 状态栏 -->
		<view class="status" :style="{position:headerPosition}"></view>
		<view class="header" :style="{position:headerPosition}">
			<view class="input-box">
				<input placeholder="默认关键字" placeholder-style="color:#c0c0c0;" @tap="toSearch()"/>
				<view class="icon search"></view>
			</view>
       </view>
		<!-- 占位 -->
		<view class="place"></view>
		<view class="category-list">
			<!-- 左侧分类导航 -->
			<scroll-view  scroll-y="true" class="left" >
                <view class="row" v-for="(category,index) in categoryList" :key="index" :class="[index==showCategoryIndex?'on':'']" @tap="showCategory(index)">
					<view class="text">
						<view class="block"></view>
						{{category.gname}}
					</view>
				</view>
            </scroll-view>
			<!-- 右侧子导航 -->
			<scroll-view  scroll-y="true" class="right" >
			    <view class="category" v-for="(category,index) in categoryList" :key="index" v-show="index==showCategoryIndex" >
					<view v-for="(two,twoindex) in category.second" :key="twoindex">
						<view class="level">{{two.gname}}</view>
						<view class="list">
							<view class="box" v-for="(box,i) in two.modity" :key="i">
								<navigator :url="'productinfo?type='+(box.tid)" class="rightList">
									<img v-lazy="imgUrl+(box.img || '/h5/static/img404.png')" style="width: 70px;height: 70px;" >
								</navigator>
								<view class="text">{{box.gname}}</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<tarBar :active='1'></tarBar>
	</view>
</template>
<script>
	//高德SDK
	import route from "@/common/public.js"
	import Vue from 'vue'
	import lazy from "@/common/vue-lazyload.js"
	import tarBar from "@/components/customize/tarBar.vue"
	Vue.use(lazy)
	export default {
		components: {
			tarBar
		},
		data() {
			return {
				Signboard: '',
				Signguid: '',
				imgUrl :'', 
				showCategoryIndex:0,
				headerPosition:"fixed",
				//分类列表
				categoryList:[],
				diagram:require('../../static/img404.png'),
				dis:0,//判断获取的数据是否是已经登陆后的数据，0是未登录数据，1是已登陆数据
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
			this.imgUrl = route.variable;
			this.getType();
		},
		onShow() {
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
			handleError(e){
				console.log(e);
			},
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
				var jsonList=uni.getStorageSync("jsonList");
				if(jsonList){
					var data = JSON.parse(jsonList); //JSON字符串转对象
					this.Signboard = data.Ident_Signboard;
					this.Signguid = data.Ident_Signguid;
				}
				 uni.request({
				 	url:route.variable+'/mobile/index/getType',
				 	method:'GET',
				 	data:{
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
					},
				 	success: (res) => {
				 		this.categoryList = res.data.setype;
						if(res.data.dis == 1){
							this.dis == 1
						}
				 	},
					fail:(res)=>{
						uni.hideLoading()
						uni.showToast({title: '请求失败'+'错误码201',icon:"none"});
					}
				 })
			}
		}
	}
</script>
<style lang="scss">
@import "@/static/font.scss";
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
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	.category-list{
		width: 100%;
		background-color: #fff;
		display: flex;
		.left,.right{
			position: absolute;
			
			top: 100upx;
			/*  #ifdef  APP-PLUS  */
			top: calc(100upx + var(--status-bar-height));
			/*  #endif  */
			bottom: 0upx;
		}
		.left{
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
	}

</style>
