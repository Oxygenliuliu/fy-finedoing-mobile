<template>
	<view class="noData hideToShow" :style="{ backgroundColor: bgColor }">
		<view class="image"><image :src="netWorkImg"></image></view>
		<!-- 网络连接失败默认显示内容 -->
		<view class="content" v-if="netType == 'none'">
			<text class="title" :style="{ color: mainColor }">{{ mainText }}</text>
			<!-- #ifdef MP -->
			<button class="btn" type="default" @tap="setting()">刷新试试</button>
			<!-- #endif -->
			<!-- #ifdef APP-PLUS -->
			<button class="btn" type="default" @tap="setting()">刷新试试</button>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
export default {
	props: {
		pageIsShow: {
			type: Boolean,
			default: false
		},
		/* 背景颜色自定义 */
		bgColor: {
			type: String,
			default: '#ffffff'
		},
		/* 标题颜色自定义 */
		mainColor: {
			type: String,
			default: '#373a40'
		},
		/* 描述颜色自定义 */
		viceColor: {
			type: String,
			default: '#8b8b8b'
		},
		net:{
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			type: '',
			netType: '',
			mainText: '网络居然崩溃了',
			netWorkImg: '/static/image/noNetWork.png'
		};
	},
	methods: {
		setting(status) {
				this.$emit('handle');
		}
	},
	mounted() {
		uni.getNetworkType({
		    success:  (res)=> {
		       this.netType =  res.networkType;
		    }
		});
	}
};
</script>

<style lang="less" scoped>
.noData {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	.image {
		width: 187upx;
		height: 144upx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.content {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		letter-spacing: 1upx;
		.title {
			font-size: 36upx;
		}
		.desc {
			font-size: 28upx;
			margin-top: 6upx;
		}
		.btn {
			width: 160upx;
			height: 65upx;
			color: #868d91;
			font-size: 24upx;
			margin-top: 34upx;
			border-radius: 36upx;
			border: 1upx solid #d4d4d4;
		}
		.btn::after {
			border: none;
		}
	}
}
</style>
