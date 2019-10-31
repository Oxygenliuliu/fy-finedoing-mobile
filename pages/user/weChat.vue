<template>
  <view>
	   <view class="weChat">
		   <uni-icon :type="iconMsg" size="60" :color="bgColor"></uni-icon><text v-bind:style="{ color: bgColor}">{{resultMsg}}</text>
		   <view class="weChatReturn btn" @tap="weChatReturn" v-bind:style="{ background: bgColor}">返 回</view>
		   <view class="btnWeChat btn" @tap="btnWeChat" v-bind:style="{ background: bgColor}">查看资金流水</view>
	   </view>
  </view>
</template>

<script>
	import route from "@/common/public.js"
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
    export default {
		components: {uniIcon},
        data() {
            return {
                webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                },
				pmtNumName:'',
				orderNum:"", //充值订单号
				/* pmtNum:"", //支付方式 1-微信 2-支付宝 */
				rdmSingleNum:"", //随机生成的单号
				resultMsg:'', //支付结果 成功或失败
				iconMsg:'', //成功或失败图标
				bgColor:'', //动态赋值颜色
            }
        },
		onLoad:function(options){
			var _that = this
			var orderNum = uni.getStorageSync('tradeno');//充值单号
			var pmtNum=uni.getStorageSync('pmtNum'); //充值方式 1-微信 2-支付宝
			var rdmSingleNum=uni.getStorageSync('rdmSingleNum');//随机生成的单号
			if(orderNum !='' && pmtNum !='' && rdmSingleNum !=''){
				uni.showModal({
					title: '提示',
					content: '是否完成支付',
					success: function (res) {
						if (res.confirm) {
							_that.checkResult()
						} else{
							_that.checkResult()
						}
					}
				});
			}else{
				_that.resultStatus(0)
			}
		}, 
		methods:{
			weChatReturn(){
				uni.navigateTo({
					url:'../user/recharge_center'
				})
			},
			btnWeChat(){
				uni.navigateTo({
					url:'../user/bill'
				})
			},
			removeData(){
				uni.removeStorageSync('tradeno');
				uni.removeStorageSync('pmtNum');
				uni.removeStorageSync('rdmSingleNum');
			},
			resultStatus(state){
				var _that = this;
				switch (state){
					case 0:
						;
						/* uni.showToast({title:'充值成功',icon:'none'}); */
						_that.resultMsg='充值成功！';
						_that.iconMsg='checkmarkempty';
						_that.bgColor='#1AA034'; //绿色
						_that.removeData();
						break;
					case 1:
						
						/* uni.showToast({title:res.data.msg,icon:'none'}); */
						_that.resultMsg='充值失败';
						_that.iconMsg='closeempty';
						_that.bgColor='#FF0000'; //红色
						_that.removeData();
						break;
					case 2:
						_that.resultMsg='充值成功！';
						_that.iconMsg='checkmarkempty';
						_that.bgColor='#1AA034'; //绿色
						_that.removeData();
						break;
					default:
						break;
				}
			},
			checkResult(){
				var _that = this;
				var jsonList=uni.getStorageSync("jsonList");
				var data = JSON.parse(jsonList); //JSON字符串转对象
				var Signboard = data.Ident_Signboard;
				var Signguid = data.Ident_Signguid;
				var orderNum = uni.getStorageSync('tradeno');//充值单号
				var pmtNum=uni.getStorageSync('pmtNum'); //充值方式 1-微信 2-支付宝
				var rdmSingleNum=uni.getStorageSync('rdmSingleNum');//随机生成的单号
				if(pmtNum==1){ //充值方式 1-微信 2-支付宝
					uni.request({
							url:route.variable+'/mobile/wechat/orderquery',
							method:'GET',
							data:{
								Ident_Signboard: Signboard,
								Ident_Signguid: Signguid,
								tradeno:orderNum,
							},
							success: (res) => {
								var state = res.data.status;
								_that.resultStatus(state)
							},
							fail:(res)=>{
								
								uni.showToast({title: '充值失败'+'错误码201',icon:"none"});
								/* this.resultMsg='充值失败,错误码201！'; */
								_that.removeData();
							}
						})
				}else{
					uni.request({
						url:route.variable+'/mobile/Alipay/trade_query',
						method:'GET',
						data:{
							Ident_Signboard: Signboard,
							Ident_Signguid: Signguid,
							serial_num:rdmSingleNum,
						},
						success: (res) => {
							var state = res.data.status;
							_that.resultStatus(state)
						},
						fail:(res)=>{
							
							uni.showToast({title: '充值失败'+'错误码201',icon:"none"});
							_that.removeData();
						}
					})
				}
			}
		}
    }
	
</script>

<style>
	@import "../../common/uni.css";
	.weChat{
		text-align: center;
		/* letter-spacing: 5px; */
		position: relative;
		top: 5rem;
	}
	.weChat text{
		color: red;
		font-size: 20px;
		font-weight: bold;
	}
	.btn{
		width: 10rem;
		height: 2rem;
		line-height: 2rem;
		background: #FF0000;
		color: #FFFFFF;
		margin: 0 auto;
		font-size: 15px;
		margin-top: 20px;
		border-radius: 20px;
	}
</style>
