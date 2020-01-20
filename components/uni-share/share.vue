<template>
	<view>
		<view class="cover" v-if='isCover' :style="'width:'+ screenData.screenWidth +'px;height:'+ screenData.screenHeight +'px;'"></view>
		
		<!-- #ifdef H5 -->
		<view class="box" @tap="shareWhere">
			<view class="icon fenxiang"></view>
			<view class="text" >分享</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef  APP-PLUS -->
		<view class="container" :style="'width:'+ screenData.screenWidth +'px'" v-if="isShare">
			<view class="title"><view class="left">分享</view></view>
			<view class="share-list">
				<view  v-for="item in shareData" :key="item.id">
					<view class="share-btn" @tap='shareWhere(item.id)'>
						<view class="png-box">
							<image class="img" :src="item.src"></image>
						</view>
						<view class="share-text">{{item.name}}</view>
					</view>
				</view>
			</view>
		<view class="close-share">
			<view class="right" @tap='closeShare'>取消</view>
		</view>
		</view>
		<view class="box" @tap="share">
			<view class="icon fenxiang"></view>
			<view class="text" >分享</view>
		</view>
		<!-- #endif -->
		
		<!-- #ifdef  MP-WEIXIN -->
		<button class="text" open-type="share">
			<view class="icon fenxiang"></view>
			<view class="text-share">分享</view>
		</button>
		<!-- #endif -->
	</view>
</template>

<script>
	import route from '../../common/public.js'
	// #ifdef H5
	import NativeShare  from './NativeShare.js';
	// #endif
	export default {
		name:'share',
		data() {
			return {
				ht: getApp().globalData.webUrl,
				toHref: getApp().globalData.webUrl + '/h5/pages/product/productinfo?type=',
				isCover: false,// 是否显示遮罩层
				isShare: false,//是否弹出分享窗
				shareData:[
					{id: 0, name: '微信朋友圈', src:'../../static/image/wxs.png'},
					{id: 1, name: '微信好友', src:'../../static/image/wx.png'},
					{id: 2, name: 'QQ空间', src:'../../static/image/qqs.png'},
					{id: 3, name: 'QQ好友', src:'../../static/image/qq.png'},
					]
			}
		},
		props: ['toShareData', 'screenData'],
		methods: {
			// #ifdef APP-PLUS
			share() {	
				this.isShare = !this.isShare;
				this.isCover = !this.isCover;
			} ,
			closeShare() {
				this.isShare = !this.isShare;
				this.isCover = !this.isCover;
			},
			// #endif
			shareWhere(res) {
				// #ifdef H5
				var nativeShare = new NativeShare();
				nativeShare.setShareData({
					icon: this.ht + this.toShareData.shopimg[0].url,
					link: this.toHref + this.toShareData.goods.ty_id,
					title: this.toShareData.goods.ty_name,
					desc: "我正在购买实惠商品，赶紧跟我一起来购买吧！",
					from: '印客宝'
				})
				// 唤起浏览器原生分享组件(如果在微信中不会唤起，此时
				//call方法只会设置文案)
				try{
					nativeShare.call()
				}catch(e){
					alert(e)
				}
				// #endif
				// #ifdef APP-PLUS
				if(res == 0){//微信朋友圈
					uni.share({
					    provider: "weixin",
					    scene: "WXSenceTimeline",
					    type: 0,
					    href: this.toHref + this.toShareData.goods.ty_id,
					    title: this.toShareData.goods.ty_name,
					    summary: "我正在购买实惠商品，赶紧跟我一起来购买吧！",
					    imageUrl: this.ht + this.toShareData.shopimg[0].url,
					    success: function (res) {
							uni.showToast({
								title: '分享成功！',
								icon: 'success',
							})
					    },
					    fail: function (err) {
							uni.showToast({
								title: '分享失败！',
								icon: 'success',
							})
					    }
					});
				}else if(res == 1){//微信好友
					uni.share({
					    provider: "weixin",
					    scene: "WXSceneSession",
					    type: 0,
					    href: this.toHref + this.toShareData.goods.ty_id,
					    title: this.toShareData.goods.ty_name,
					    summary: "我正在购买实惠商品，赶紧跟我一起来购买吧！",
					    imageUrl: this.ht + this.toShareData.shopimg[0].url,
					    success: function (res) {
					    	uni.showToast({
					    		title: '分享成功！',
					    		icon: 'success',
					    	})
					    },
					    fail: function (err) {
					    	uni.showToast({
					    		title: '分享失败！',
					    		icon: 'success',
					    	})
					    }
						})
				}
				else if(res == 2){//qq空间
					uni.share({
					    provider: "qq",
					    type: 1,
					    href: this.toHref + this.toShareData.goods.ty_id,
					    title: this.toShareData.goods.ty_name,
						summary: "我正在购买实惠商品，赶紧跟我一起来购买吧！",
					    imageUrl: this.ht + this.toShareData.shopimg[0].url,
					  success: function (res) {
					  	uni.showToast({
					  		title: '分享成功！',
					  		icon: 'success',
					  	})
					  },
					  fail: function (err) {
					  	uni.showToast({
					  		title: '分享失败！',
					  		icon: 'success',
					  	})
					  }
						})
				}else{//qq好友
					uni.share({
					    provider: "qq",
					    type: 1,
					    href: this.toHref + this.toShareData.goods.ty_id,
					    title: this.toShareData.goods.ty_name,
						summary: "我正在购买实惠商品，赶紧跟我一起来购买吧！",
					    imageUrl: this.ht + this.toShareData.shopimg[0].url,
					  success: function (res) {
					  	uni.showToast({
					  		title: '分享成功!',
					  		icon: 'success',
					  	})
					  },
					  fail: function (err) {
					  	uni.showToast({
					  		title: '分享失败！',
					  		icon: 'success',
					  	})
					  }
						})
				}
				// #endif
			}
	
		},
		
	}
</script>

<style scoped lang="scss">
	@import "../../static/font.scss";
	.cover{
		background: rgba(0,0,0,0.3);
		position: absolute;
		z-index: 55;
		bottom: 0;
	}
	.container{
		width: 359px;
		position: relative;
		z-index: 99;
		top:-155px;
		height: 200px;
		background: rgba(255,255,255,1);
		border-radius: 5px;
		.close-share{
			width: 100%;
			height: 80px;
			background: #FCFCFC;
			bottom: -30px;
			position: relative;
			text-align: center;
			.right{
				font-size: 18px;
				color: #666;
			}
		}
		.title{
			font-size: 12px;
			width: 100%;
			color: #999;
			padding-left: 10px;
			display: flex;
			justify-content: space-between;
		}
		.share-list{
			display: flex;
			justify-content: space-between;
			line-height: 50px;
			position: relative;
			bottom: -15px;
			.share-btn{
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				.png-box{
					width: 40px;
					height: 40px;
					border-radius: 50%;
					background: #F8F8FF;
					display: flex;
					justify-content: center;
					align-items: center;
					.img{
						width: 25px;
						height: 25px;
						
					}
				}
				.share-text{
					font-size: 24rpx;
					color: #666;
				}
				
			}
		}
	}
	/* #ifdef H5 */
	.box{
		width: 45px;
		height: 40px;
		display: flex;
		justify-content: center;  
		flex-wrap: wrap;
		.icon{
			font-size: 20px;
			color: #828282;
			margin-top: -3px;
		}
		.text{
			margin-top: -8px;
			display: flex;
			justify-content: center;
			width: 100%;
			font-size: 11px;
			color: #666;
		}
	}
	/* #endif */
	button{
		padding: 0;
		line-height: 16px;
		position: relative;
		background-color:#fff ;
	}
	button::after{
		border: none;
	}
	.text{
		border: none;
		width: 36px;
		.icon{
			font-size: 32rpx;
		}
		.text-share{
			line-height: 12px;
			font-size: 12px;
			font-weight:normal;
		}
		
	}
</style>
