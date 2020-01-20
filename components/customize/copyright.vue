<template>
	<!-- 底部 -->
	<view class="uni-bottom">
		<text class="copyright">© {{year}} 版权所有-成都飞扬动力软件有限公司</text>
	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				year:''
			}
		},
		created() {
			let time = new Date();
			this.year = time.getFullYear();
		}
	}
</script>
	
<style>
	.uni-bottom {
		width: 100%;
	}
	.uni-bottom text{
		font-size: 0.7rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	/* 底部感谢语 */
	.botLanguage{
		text-align: center;
		font-size: 12px;
		color: #999;
		margin-bottom: 5px;
	}
	.copyright{
		color: #8f8f94;
		font-size: 0.7rem;
		display: block;
		text-align: center;
	}
</style>
