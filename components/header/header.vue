<template>
	<view class="header">
		<view class="back" @tap="back">
			<image src="../../static/image/icon_back_black.png" mode=""></image>
		</view>
		<view class="center-text">编辑地址</view>
	</view>
</template>

<script>
	export default {
		data() {
			return{
			
			}
		},
		methods:{
			back(){
				this.$emit('toBack')
			}
		} 
		}
</script>

<style scoped lang="scss">
	/* 自定义导航栏 */
	.header{
		width: 100vw;
		height: 90px;
		background: #FF5C3B;
		position: fixed;
		top:0;
		color: white;
		.back{
			position: absolute;
			line-height: 90px;
			align-items: center;
			margin-top: 25px;
			margin-left: 5px;
			image{
				width: 20px;
				height: 20px;
			}
		}
		.center-text{
			padding-top: 20px;
			line-height: 90px;
			flex: 8;
			font-size: 14px;
			text-align: center;
			font-weight: 600;
		}
	}
</style>
