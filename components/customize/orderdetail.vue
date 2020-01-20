<template>
	<!-- 商品的详细信息 -->
	<view class="order-Details" >
		<view class="sp_tite" v-show="showTitle">{{tyName}}<text>共计 {{orderNum}} 件商品</text></view>
		<view class="sp_cont" v-for="(item,index) in options" :key="index">
				<view class="sp_cont_img">
					<!-- #ifdef H5 -->
					<img :src="encodeURI(item.img)" :onerror="defaulImg"/>
					<!-- <image :src="encodeURI(item.img)"></image> -->
					<!-- #endif -->
					<!-- #ifndef H5 -->
					<image :src="item.img"></image>
					<!-- #endif -->
				</view>
				
				<view class="sp_cont_content" :style="{width:(showTitle?'50vw':'62vw')}">
					<view style="font-size: 0.7rem;font-weight: 600;"><text>{{item.g_name}}  </text></view>
					<view style="color: #999999;">工艺:<text>{{item.process}}</text></view>
					<view style="color: #999999;">规格:<text>{{item.specs}}(M)*{{item.od_quantity}}(个)</text></view>
					<view class="money" style="font-size: 0.7rem;"><text> ￥ {{item.total}}</text></view>
				</view>
				<view class="progress uni-flex uni-column" v-for="(prog,indexs) in progress" :key="indexs" v-if="item.od_id==prog.detail_id">
					<text class="flex-item flex-item-V" style="color: rgb(26, 173, 25);" v-if="prog.cur_proc_name">已{{prog.cur_proc_name}}</text>
					<button class="progressBtn flex-item flex-item-V" type="primary" size="mini" @tap="checkProgress(prog.detail_id)">进度查看</button>
					<button class="progressBtn flex-item flex-item-V" type="primary" size="mini" @tap="checkDelivery(prog)">物流跟踪</button>
					<button class="progressBtn flex-item flex-item-V" type="primary" size="mini" @tap="uploadImg(2,prog.detail_id)" v-show="orderbs">明细传图</button>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'orderDetails',
		props: {
			orderbs:{ // true代表bs传图，false代表cs传图
				type:Boolean,
				default:true
			},
			orderNO: { // 商品名
				type: String,
				default: '暂无单号'
			},
			tyName: { // 商品名
				type: String,
				default: '商品明细'
			},
			orderid: { // 商品名
				type: String,
				default: ''
			},
			orderNum: { // 产品数量
				type: Number,
				default: 1
			},
			showTitle:{
				type:Boolean,
				default:true
			},
			options: {
				type: Array,
				default () {
					return []
				}
			} ,// 订单明细数据
			progress: {
				type: Array,
				default () {
					return []
				}
			} // 明细流程数据
		},
		data() {
			return {
				defaulImg:'this.src="' + require('../../static/image/unExist.png') + '"',//图片地址获取失败，报错404时，显示默认图片
			}
		},
		methods:{
			//图片地址获取失败，报错404时，显示默认图片
			imageError: function(e) {
			},
			uploadImg(orderbs,detailid) {
				uni.navigateTo({
					url: '../../pages/order/fileUpload?orderid=' + this.orderid + '&orderno=' + this.orderNO + '&orderbs=' + orderbs + '&detailid=' + detailid + '&product=' + this.tyName,
				})
			},
			// 查看明细流程
			checkProgress(od_id) {
				for (var i = 0; i < this.progress.length; i++) {
					if (this.progress[i].detail_id == od_id) {
						if (this.progress[i].cur_proc_name == '') {
							uni.showToast({title: '当前明细还未开始流程，请稍候！',icon: 'none',duration: 3000})
						} else {
							uni.navigateTo({
								url: '../order/progress?od_id=' + od_id + '&from_cs=1'
							})
						}
					}
				}
			},
			checkDelivery(progress) {
				if(progress.delivered == 1){
					uni.navigateTo({
						url: '/pages/order/delivery?express=' + progress.delivercode + '&orderNO=' + this.orderNO
					})
				}else{
					uni.showToast({title: '未查询到当前明细物流信息，请稍候！',icon: 'none',duration: 3000})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	view{
		font-size: 14px;
		line-height: 1.8;
	}
	/* 商品信息详情 */
	.order-Details {
		margin: 35upx 0;
		background-color: #FFF;
		width: 100%;
		/* 商品名样式 */
		.sp_tite {
			padding: 0.5rem;
			font-weight: 400;
			font-size: 0.8rem;
			border-bottom: 1.2px solid #F7F7F7;
			text {
				font-size: 0.7rem;
				float: right;
				color: #999999;
				padding: 0.2rem;
			}
		}
		.sp_cont {
			display: flex;
			padding: 0.5rem;
			border-bottom: #E5E5E5 solid 1px;
			.sp_cont_img{
				width: 30vw;
				margin: 0 0 0 0.2rem;
				img,image {
					height: 5rem;
					width: 5rem;
					border-radius: 10upx ;
				}
			}
			.sp_cont_content{
				display: flex;
				flex-direction: column;
				view{
					margin-left: 0.3rem;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.money {
					color: red;
				}
			}
			.progress{
					width: 18vw;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					border-left: 1px solid #f7f7f7;
					text{
						-webkit-line-clamp: 1; 
						-webkit-box-orient: vertical; 
						word-break: break-all;
						overflow: hidden; 
						text-overflow: ellipsis; 
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.progressBtn{
						border: 1px solid #f7f7f7;
						width: 18vw;
						font-size: 0.6rem;
						padding: 0;
						// margin: 3px 0;
						margin-top: 3px;
						line-height: 2;
						background: #ffffff;
						color: #333333;
					}
					.progressBtn::after{
						display: none;
					}
				}
				
		}
	}
</style>
