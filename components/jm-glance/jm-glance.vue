<template>
	<view class="keyWordBox ov">

		<view class="fl keyBoxBo">
			<view class="fl ov keyBoxB" :style="'width:'+data.length*208+'rpx'">
				<view class="fl keyBox" @tap="clickKeyword(item.id,item.title)" v-for="(item,index) in data" :key='index'>
					<view class="key" :class="{check:item.id==key}">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				key: '1'
			};
		},
		props: {
			//载入的标签数据
			data: Array

		},
		methods: {
			clickKeyword(e, title) {
				console.log(title)
				this.key = e;
				var data={
					key:e,
					name:title
				}
				this.$emit('clickKeyword', data);
			}
		}
	}
</script>

<style>
	.fl {
		float: left;
	}

	.fr {
		float: right;
	}

	.ov {
		overflow: hidden;
	}

	.check {
		color: #0B877F !important;
		border-bottom: 3px solid #0B877F;
	}

	.keyWordBox {
		background-color: #f5f5f5;
		height: 80rpx;
		width: 100%;
		font-size: 30rpx;
		z-index: 9999;
	}

	.keyBox {
		color: #666;
		width: 200rpx;
		height: 50rpx;
		margin-top: 15rpx;
		line-height: 50rpx;
		text-align: center;
		border-right: 1px solid #ccc;

	}

	.key {
		width: 160rpx;
		margin-left: 20rpx;
		height: 47rpx;
	}

	.keyBoxBo {
		overflow-x: scroll;
		width: 94%;
		margin-left: 3%;

	}
</style>
