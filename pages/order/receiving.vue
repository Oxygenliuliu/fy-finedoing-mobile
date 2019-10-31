<template>
	<view class="receivingAddress">
		<view>
				<!-- 收货地址单选按钮 -->
			<view class="singleAddress">
				<view class="individual">
					<radio color="red" class="form-radio"/>
				</view>
				<view class="addcont">
					<text id="name">李潇</text>
					<text id="phone">17738027894</text><br/>
					<text>成都市/武侯区/机投镇  潮音</text>
				</view>
				<view class="updateIcon">
					<uni-icon class="uni-icon-compose uni-compose tubiao" style="color: #000000;font-size: 2rem;line-height: 1.3;"></uni-icon>
				</view>
			</view>
			<view class="singleAddress">
				<view class="individual">
					<radio color="red" class="form-radio"/>
				</view>
				<view class="addcont">
					<text id="name">李潇</text>
					<text id="phone">17738027894</text><br/>
					<text>成都市/武侯区/机投镇  潮音</text>
				</view>
				<view class="updateIcon">
					<navigator url="">
						<uni-icon class="uni-icon-compose uni-compose tubiao" style="color: #000000;font-size: 2rem;line-height: 1.3;"></uni-icon>
					</navigator>
				</view>
			</view>
		</view>
		<view class="insertAddres">
			<navigator url="">新增收货地址</navigator>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {uniIcon,uniCollapse,uniCollapseItem,uniList,uniListItem,uniPopup},
		data() {
			return {
				current: 0
			}
		},
		methods: {
		}
	}
</script>

<style>
	@import "../../common/uni.css";
	@import "../../common/iconfont.css";
	page{
		background-color: #F7F7F7;
	}
	/* 收货地址管理界面 */
	.singleAddress{
		border-top: 1px solid #C3C3C3;
		border-bottom: 1px solid #C3C3C3;
		display: flex;
	    flex-direction: row;
	}
	.individual{
		line-height:5.4vh;
		padding: 2px 0.5rem;
	}
	.individual .form-radio{
		/* transform: scale(1.5); */
		padding-left: 0.5rem;
	}
	.addcont text:nth-child(1){
		padding-right: 1rem;
	}
	.addcont{
		padding: 2px 0.5rem;
		padding-right: 4rem;
		vertical-align: middle;
	}
	.updateIcon{
		padding: 2px 0.2rem;
	}
	.uni-radio .uni-radio-input{
		width: 40px;
		height: 40px;
	}
	
	/* 新增收货地址 */
	.insertAddres{
		background-color: #E4393C;
		text-align: center;
		color: #FFFFFF;
		font-size: 0.9rem;
		letter-spacing: 3px;
		height: 6vh;
		line-height: 6vh;
		position: fixed;
		bottom: 0px;
		width: 100vw;
	}
</style>
