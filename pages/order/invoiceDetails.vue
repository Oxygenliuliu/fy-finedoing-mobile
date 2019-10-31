<template>
    <view class="page">
		<view class="block" style="display: block;">
			<view class="block_body">
				<uni-view class="uni-flex uni-row" style="flex-wrap: wrap;color: rgb(121, 121, 121);">
					<uni-view class="text" style="font-size: 0.5rem;margin: 0.2rem 0;">
						1、电子发票在订单完成后24小时内自动开具（如在月初1-6号则48小时内开具）；增值税专用发票（纸质）在订单完成后3-4个工作日内为您寄出，请您注意查收；
					</uni-view>
					<uni-view class="text" style="font-size: 0.5rem;margin: 0.2rem 0;">
						2、发票在订单完成后，无法修改公司抬头，请您在完成订单前务必确认发票内容；
					</uni-view>
					<uni-view class="text" style="font-size: 0.5rem;margin: 0.2rem 0;">
						3、发票开具金额为您实际支付金额；
					</uni-view>
				</uni-view>
			</view>
		</view>
		<view class="block" style="display: block;">
			<view class="block_body">
				<uni-view class="uni-flex uni-row">
					<uni-view class="block_left ">开票状态</uni-view>
					<uni-view class="block_right invoice_status_right">已开票<text>({{imgList.length}}张)</text></uni-view>
				</uni-view>
			</view>
		</view>
		
		<view class="block" style="display: block;">
			<view class="block_body">
				<uni-view class="uni-flex uni-row">
					<uni-view class="block_left ">订单状态</uni-view>
					<uni-view class="block_right">{{orderData.saname}}</uni-view>
				</uni-view>
				<uni-view class="uni-flex uni-row">
					<uni-view class="block_left ">订单编号</uni-view>
					<uni-view class="block_right">{{orderData.NO}}</uni-view>
				</uni-view>
				<uni-view class="uni-flex uni-row">
					<uni-view class="block_left ">下单时间</uni-view>
					<uni-view class="block_right">{{orderData.date}}</uni-view>
				</uni-view>
				<uni-view class="uni-flex uni-row">
					<uni-view class="block_left ">发票类型</uni-view>
					<uni-view class="block_right">{{orderData.invoice_type}} </uni-view>
				</uni-view>
			</view>
		</view>
		
		<view class="block" style="display: block;">
			<view class="block_body">
				<uni-view class="uni-flex uni-row">
					<uni-view class="block_left ">发票抬头</uni-view>
					<uni-view class="block_right">{{orderData.invoice_title}}</uni-view>
				</uni-view>
				<uni-view class="uni-flex uni-row">
					<uni-view class="block_left ">公司税号</uni-view>
					<uni-view class="block_right">{{orderData.tax_code}}</uni-view>
				</uni-view>
			</view>
		</view>
		<view class="block">
			<view class="block_body">
				<view class="uni-list">
					<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item, index) in imgList" :key="index">
						<view class="uni-media-list">
							<!-- <view class="uni-media-list-logo">
								<image  :src="item.fileUrl"></image>
							</view> -->
							<!-- <view class="invoiceNum">
								<text>({{index+1}})</text>
							</view> -->
							<view class="uni-media-list-body">
								<text>{{item.fileName}}</text>
							</view>
							<view class="invoiceNum">
								<button class="downloadBtn" size="mini" plain="true" @tap="downloadInvoice(item.fileUrl)">下载发票</button>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
    </view>
</template>

<script>
	export default{
		data(){
			return{
				iveDtls:"",
				org:"",
				imgList:[],
				orderData:{}//订单对象
			}
		},
		methods:{
			downloadInvoice:function(url){
				window.location.href = url
			}
		},
		onLoad: function(options) {
			console.log(options)
			let pages = getCurrentPages();
			let prevPage = pages[pages.length - 2];  
			console.log(prevPage)
			console.log(prevPage.orderData[0])
			if(options.from_cs==0){
				this.orderData = prevPage.orderData[0]
			}else if(options.from_cs==1){
				let arr = [];
				arr.saname = prevPage.orderData.BILL_LEFTMONEY=0?'已结清':'未结清';
				arr.NO = prevPage.orderData.BILL_CODE
				arr.date = prevPage.orderData.BILL_DATE_STR
				arr.invoice_type = ''
				arr.invoice_title = ''
				arr.tax_code = ''
				this.orderData = arr;
			}else{
				console.log(prevPage)
				uni.showToast({title:'未查询到订单信息！',icon:'none',duration:3000})
			}
			this.iveDtls = prevPage.invoiceList;
			this.org = options.org;
			this.taxCode = options.tax_code;
			for (var i = 0; i < this.iveDtls.length; i++) {
				var arr=new Object;
				console.log(this.iveDtls[i].length)
				if(this.iveDtls[i].length<30){
					arr['fileName']=(this.iveDtls[i]).substring(9,30)
				}else{
					arr['fileName']=(this.iveDtls[i]).substring(9,30)+'...'+(this.iveDtls[i]).split('.').pop()
				}
				arr['fileUrl']='http://'+this.org+'/'+this.iveDtls[i].replace('\\','/')
				this.imgList.push(arr)
			}
			console.log(this.imgList)
		}
	}
</script>

<style lang="scss">
	@import "../../common/uni.css";
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #F7F7F7
	}
	
	view {
		font-size: 28upx;
		line-height: inherit
	}
	uni-view.uni-flex.uni-row {
	    margin: 0.3rem 0;
	}

	.block{
		display: block;
		.block_body {
			margin: 15px;
			padding: 10px;
			background: #fff;
			border-radius: 8px;
			font-size: 0.7rem;
			.uni-flex .block_left{
				color: #C0C0C0;
				padding: 0 0.5rem;
			}
			.uni-flex .block_right{
				padding: 0 0.5rem;
				color: #333333;
				text{
					color: #FF0000;
				}
			}
			.uni-flex .invoice_status_right{
				color: #FF0000;
			}
		}
	}
	
	
	uni-button[size=mini] {
		display: inline-block;
		width: 70px;
		line-height: 2.3;
		font-size: 12px;
		padding: 0;
		color: #333333;
		border: 1px solid #999999;
		border-radius: 5vw;
	}
	
	/* 发票下载 */
	.uni-list::before,.uni-list::after{
		display: none;
	}
	.uni-media-list-body{
		align-items: flex-start;
		justify-content: center;
	}
	.uni-media-list{
		padding: 9px 10px;
		.invoiceNum{
			display: inline-flex;
			justify-content: center;
			align-items: center;
		}
	}
	.uni-list-cell-hover{
		background: #FFFFFF;
	}

</style>
