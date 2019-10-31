<template>
  <view>
		<!-- <view class="search">
			<input type="text" value="" placeholder="请输入商品名称或单号" placeholder-style="font-size:0.6rem;color:#bbb;text-align:center;" />
		</view> -->
		<view class="navList"  >
			<view class="navItem" @tap="switchType(key)" v-for="(items,key) in items" :key="key">
				<text :class="{active:(key == checkNum ? true : false)}">{{items.name}}</text>
				<view class="" v-if="key==0">
					<uni-badge v-if="totalCount>0" :text="totalCount" type="danger" size="small" style="height: 20px;background: #ff0000;color: #ffffff;position: relative;top: -6px;left: -3px;"/>
				</view>
				<view class="" v-else-if="key==1">
					<uni-badge v-if="paidCount>0" :text="paidCount" type="danger" size="small" style="height: 20px;background: #ff0000;color: #ffffff;position: relative;top: -6px;left: -3px;"/>
				</view>
				<view class="" v-else>
					<uni-badge v-if="leftCount>0" :text="leftCount" type="danger" size="small" style="height: 20px;background: #ff0000;color: #ffffff;position: relative;top: -6px;left: -3px;"/>
				</view>
			</view>
		</view>
		<view class="orderSummary uni-flex uni-row">
			<view class="flex-item">
				总金额:<text>￥ {{summaryTotal}}</text>
			</view>
			<view class="flex-item">
				已付金额:<text>￥ {{summaryPaid}}</text>
			</view>
			<view class="flex-item">
				未付金额:<text>￥ {{summaryLeft}}</text>
			</view>
		</view>
		<view class="orderList" v-for="(row,index) in CSorder" :key="index">
			<view class="orderHeader">
				<view class="uni-flex uni-row" >
					<view class="oh_header flex-item">订单编号:<text>{{row.BILL_CODE}}</text></view>
					<view class="flex-item" v-if="row.BILL_LEFTMONEY==0" style="color: #09BB07;width: 30vw;text-align: center;">
						已结清
					</view>
					<view class="flex-item" v-if="row.BILL_LEFTMONEY!=0" style="color: #FF0000;width: 30vw;text-align: center;">
						未结清
					</view>
				</view>
				
				<view class="uni-flex uni-row">
					<view class="ohBody flex-item" >
						<view class="oh_body">下单日期:<text>{{row.BILL_DATE_STR}}</text></view>
						<view class="oh_body ">订单金额:<text>￥ {{row.BILL_TOTALMONEY}}</text></view>
						<view class="oh_body ">未结金额:<text>￥ {{row.BILL_LEFTMONEY}}</text></view>
					</view>
					<view class="checkDetails flex-item">
						<!-- <button class="btnDetails" type="primary">查看明细</button> -->
						<button class="btnDetails" type="primary" size="mini" @tap="getDetails(row.BILL_ID)">查看明细</button>
					</view>
				</view>
				
			</view>
		</view>
		<uni-load-more :status="status" :content-text="contentText" />
		<view class="gotop">
			
		</view>
  </view>
</template>


<script>
	import route from "@/common/public.js"
	import uniBadge from '@/components/uni-badge/uni-badge.vue'
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	
	export default {
		components: {uniBadge,uniLoadMore},
		data() {
			return {
				Signboard:'',
				Signguid:'',
				CSorder:[],
				CSOrderDetail:[],
				baseInfo:[],
				summaryTotal:'0',//合计总金额
				summaryPaid:'0',//合计已支付金额
				summaryLeft:'0',//合计剩余金额
				totalCount:'0',
				paidCount:'0',
				leftCount:'0',
				checkNum:0,
				items:[{
					value:'red',
					name:'全部',
				},
				{
					value:'red',
					name:'已结清',
				},
				{
					value:'red',
					name:'未结清',
				}],
				pagesIndex: 0,
				totalIndex: 0,
				reload: false,
				status: 'more',
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			};
		},
		onLoad: function (options){
			this.getOrder();
		},
		onPullDownRefresh(){
			this.reload = true;
			this.pagesIndex = 0;
			this.getOrder();
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onReachBottom() {
			this.reload = false;
			if(this.pagesIndex < this.totalIndex){
				this.status = 'more';
			}
			if(this.totalIndex == 0){
				++this.pagesIndex;
				this.getOrder();
			}else{
				if(this.pagesIndex >= 0 && this.pagesIndex < this.totalIndex){
					++this.pagesIndex;
					this.getOrder();
				}else{
					return false;
				}
			}
		},
		methods: {
			getDetails(BILL_ID){
				uni.navigateTo({
					url:'/pages/order/csDetails?BILL_ID='+BILL_ID
				})
			},
			getOrder(){
				let _that = this;
				var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
				var datas= JSON.parse(wulala);//JSON字符串转对象
				this.Signboard = datas.Ident_Signboard;  //给Signboard 赋值
				this.Signguid = datas.Ident_Signguid;  //给Signguid 赋值
				if(_that.pagesIndex>0 && _that.pagesIndex<_that.totalIndex){
					this.status = 'loading';
				}else{
					this.status = 'noMore';
				}
				uni.request({
					method: "GET",
					url: "http://" + datas.org + "/services/Query?dbname=" + datas.dbname + "&token=" + datas.softdog + "&params={%22QUERY_ID%22:1,%22PAGE_SIZE%22:10,%22PAGE_INDEX%22:"+_that.pagesIndex+",%22BEGINDATE%22:%221900-01-01%22,%22ENDDATE%22:%223000-01-01%22,%22Status%22:0,%22PARTNER_ID%22:" + datas.csid + "}",
					data: {},
					success: function (msg) {
					  if(msg.data.count!=0){
						  _that.baseInfo = _that.reload ? msg.data.data:_that.baseInfo.concat(msg.data.data);
						  console.log(_that.baseInfo)
						  _that.totalIndex = Math.ceil(msg.data.data[0].SUMMARY_BILLCOUNT/10)
						  _that.summaryTotal=msg.data.data[0].SUMMARY_TOTALMONEY;
						  _that.summaryLeft=msg.data.data[0].SUMMARY_LEFTMONEY;
						  _that.summaryPaid=(_that.summaryTotal)-(_that.summaryLeft);
						  _that.totalCount=msg.data.data[0].SUMMARY_BILLCOUNT;
						  _that.leftCount=msg.data.data[0].SUMMARY_BILLCOUNT_HASLEFT;
						  _that.paidCount=(_that.totalCount-_that.leftCount).toString();
						  _that.switchType(_that.checkNum)
						  this.reload = false;
					  }else{
						  this.status = 'noMore';
						  // uni.showToast({title:'未查询到CS订单',icon:'none'});
					  }
					},
					fail: function (msg) {
						uni.showToast({title:'与服务器通讯失败，请稍候再试！错误码201',icon:'none'});
					}
				})
				
			},
			switchType(flag){
				this.checkNum=flag;
				let _that = this,
				paidArr=[],
				leftArr=[];
				for (var i = 0; i < _that.baseInfo.length; i++) {
					if(_that.baseInfo[i].BILL_LEFTMONEY==0){
						paidArr.push(_that.baseInfo[i])
					}else{
						leftArr.push(_that.baseInfo[i])
					}
				}
				switch (flag){
					case 0:
						this.CSorder = _that.baseInfo
						break;
					case 1:
						this.CSorder = paidArr
						break;
					case 2:
						this.CSorder = leftArr
						break;
					default:
						break;
				}
				
			}
		}
	};
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
	.search{
		width: 100%;
		height: 13vw;
		background: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		margin:1px 0;
		input{
			width: 93%;
			height: 70%;
			background: #F7F7F7;
			border:1px solid #F7F7F7;
			border-radius: 25px;
		}
	}
	.navList{
		position: fixed;
		z-index: 999;
		width: 100%;
		height: 10vw;
		background: #FFFFFF;
		display: flex;
		.navItem{
			width: 25%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			text{
				color: #444444;
				display: inline-flex;
				align-items: center;
				height: 100%;
				line-height:100%;
				
			}
			
			.active{
				color: #FF0000;
				border-bottom: 2px solid #FF0000;
			}
		}
	}
	.orderSummary{
		width: 100%;
		background: #FFFFFF;
		margin-top: 10px;
		height: 10vw;
		.flex-item{
			color: #878787;
			width: 33%;
			display: inline-flex;
			align-items: center;
			justify-content: center;
		}
	}
	.orderList{
		margin: 12px;
		padding: 5px 0 0 0;
		border-radius: 5%;
		background-color: #FFF;		
		line-height: 1.8;
		display: block;
		.orderHeader{
			width: 100%;
			.oh_header{
				width: 70%;
				padding: 0 10px;
			}
			.uni-flex{
				border-bottom: 1px solid #F7F7F7;
			}
			text{
				color: #878787;
				padding: 0 10px;
			}
			.ohBody{
				width: 70%;
				padding:0 10px;
				.oh_body{
					// padding-left: 10px ;
				}
			}
			.checkDetails{
				width: 30vw;
				display: flex;
				justify-content: center;
				align-items: center;
				.btnDetails{
					width: 16vw;
					font-size: 0.6rem;
					padding: 0;
					margin: 0;
					background: #ffffff;
					color: #333333;
				}
			}
		}
		
	}
</style>