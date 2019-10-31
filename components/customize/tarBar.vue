<template>
	<view class="tarBar">
		<view class="item" :class="active==0?'active':''" @tap="skipTo(0)">
			<image :src="active==0?'../../static/image/homes.png':'../../static/image/home.png'" mode=""></image>
			<text>首页</text>
		</view>
		<view class="item" :class="active==1?'active':''" @tap="skipTo(1)">
			<image :src="active==1?'../../static/image/sorts.png':'../../static/image/sort.png'" mode=""></image>
			<text>首页</text>
		</view>
		<view class="item" :class="active==2?'active':''" @tap="skipTo(2)">
			<image :src="active==2?'../../static/image/shops.png':'../../static/image/shop.png'" mode=""></image>
			<text>购物车</text>
		</view>
		<view class="item" :class="active==3?'active':''" @tap="skipTo(3)">
			<image :src="active==3?'../../static/image/users.png':'../../static/image/user.png'" mode=""></image>
			<text>我的</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			active: { // 当前是哪一个页面
				type: Number,
				default: 0
			}
		},
		data() {
			return {}
		},
		methods:{
			skipTo(flag){
				if(flag == this.active){
					return false;
				}
				switch (flag){
					case 0:
						uni.navigateTo({
							url: '../../pages/index/index'
						});
						break;
					case 1:
						uni.navigateTo({
							url: '../../pages/product/product'
						});
						break;
					case 2:
						uni.navigateTo({
							url: '../../pages/shopping/shopping'
						});
						break;
					case 3:
						uni.navigateTo({
							url: '../../pages/user/user'
						});
						break;
					default:
						break;
				}
			}
		}
	}
</script>

<style lang="scss">
	.tarBar{
		display: flex;
		width: 100vw;
		height: 15vw;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		border-top: 1px solid #F0F0F0;
		align-items: center;
		justify-content: center;
		.item{
			width: 25vw;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction:column;
			image{
				width: 25px;
				height: 25px;
			}
			text{
				font-size: 0.6rem;
				color: #DCDBDB;
			}
		}
		.active{
			text{
				color: #E43130;
			}
		}
	}
</style>
