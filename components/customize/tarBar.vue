<template>
	<view class="tarBar">
		<block v-for="(item,id) in tabarData" :key='id'>
			<view class="item" @tap="skipTo(item.id)"  :class="active==item.id?'active':''">
				<text class="iconfont" :class="item.iconfont"></text>
				<view class="badge" v-if='item.id == 2?true:false' v-show="badge==0?false:true">{{badge}}</view>
				<text class="cont-text">{{item.data}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			active: { // 当前是哪一个页面
				type: Number,
				default: 0,
			},
		},
		data() {
			return {
				badge: 0,
				tabarData: [
					{id: 0, data: '首页', iconfont:'icon-shouye'},
					{id: 1, data: '分类',  iconfont:'icon-leimupinleifenleileibie'},
					{id: 2, data: '购物车',  iconfont:'icon-icon-test'},
					{id: 3, data: '我的',  iconfont:'icon-wode'},
					]
			}
		},
		methods:{
			add(){
				uni.getStorage({
				    key: 'jsonList',
				    success:  (res)=> {
				        this.badge = JSON.parse(res.data).shop;
				    },
					fail:()=> {
						this.badge = 0;
					}
				});
			},
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
	},
	}
</script>

<style scoped lang="scss">
	@import "../../static/css/iconfont.css";
	 .tarBar{
		display: flex;
		width: 100%;
		height: 50px;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		border-top: 1px solid #F0F0F0;
		align-items: center;
		justify-content: center;
		z-index: 100;
		.item{
			width: 25%;
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			.iconfont{
				font-size: 26px;
				line-height: 28px;
			}
			.badge{
				position: absolute;
				width: 30px;
				line-height: 20px;
				border-radius: 10px;
				background: #DD524D;
				text-align: center;
				margin-top:-10px;
				margin-left:30px;
				color: #fff;
				font-size: 16px;
			}
			image{
				width: 25px;
				height: 25px;
			}
			.cont-text{
				line-height: 19px;
			}
			 text{
				font-size: 14px;
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
