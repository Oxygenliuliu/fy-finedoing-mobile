<template>
	<view>
		<view class="back">
			<text class="top">当前余额（单位：元）</text></br>
			<text class="bot">{{balance}}</text>
		</view>
		<view class="block">
			<view class="title">
				充值金额
			</view>
			<view class="content">
				<view class="amount">
					<view class="list">
						<view class="box" v-for="(amount,index) in amountList" :key="index" @tap="select(amount)" :class="{'on':amount == inputAmount}">
							{{amount}}元
						</view>
					</view>
					<view class="list">
						<view class="box" v-for="(amount,index) in amountList2" :key="index" @tap="select(amount)" :class="{'on':amount == inputAmount}">
							{{amount}}元
						</view>
						<view class="box">
							<input type="number" v-model="inputAmount" @change="change(inputAmount)" placeholder="其他金额" />
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 实际到账和支付金额 -->
		<view class="block">
			<view class="actaul_money money_item">
				实际到账：
				<text>￥{{actaul_money}}</text>
			</view>
			<view class="pay_money money_item">
				支付金额：
				<text style="color: #FF0000;">￥{{inputAmount}}</text>
			</view>
		</view>
		<view class="block">
			<view class="title">
				选择支付方式
			</view>
			<view class="content">
				<view class="pay-list">
					<view class="row" @tap="paytype='1'">
							<view class="left">
								<image src="../../static/image/weixin.png"></image>
							</view>
							<view class="center">
								微信支付
							</view>
							<view class="right">
								<radio :checked="paytype=='1'" color="#FF0000" style="transform:scale(0.7)"/>
							</view>
					</view>
					<view class="row" @tap="paytype='2'">
							<view class="left">
								<image src="../../static/image/zhifu.png"></image>
							</view>
							<view class="center">
								支付宝支付
							</view>
							<view class="right">
								<radio :checked="paytype=='2'" color="#FF0000" style="transform:scale(0.7)"/>
							</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 优惠活动 -->
		<view class="rechargeMode" @tap="hdClick">
			<view class="odes">优惠活动<text>{{rueles == '' ? '无优惠' : '满'+rueles.recharge+'送'+rueles.send}}</text></view>
			<view class="hd_cont" v-for="(ruelesInfo,index) in ruelesInfo" :key="index" :class="{'hd_active':ruelesInfo.r_id==rueles.r_id}">
				<view >
					<text style="float: left;">满{{ruelesInfo.recharge}}送{{ruelesInfo.send}}</text>
					<!-- <text style="float: left;color: #222222;font-weight:600 ;" :style="{display:(index == ruelesNum?'inline-flex':'none')}">(当前最大优惠)</text> -->
					</view>
			</view>
		</view>
		
		<view class="pay">
			<view class="btn" @tap="doDeposit">立即充值</view>
			<!-- <view class="tis">
				点击立即充值，即代表您同意<view class="terms">
					《条款协议》
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import route from "@/common/public.js"
	export default {
		data() {
			return {
				inputAmount:'0.00',//金额
				amountList:[500,1000,2000],//预设3个可选快捷金额
				amountList2:[5000,10000],//预设3个可选快捷金额
				paytype:'1',//支付类型
				Signboard:'', //token令牌
				Signguid:'', //用户标识
				balance:"", //当前余额
				rueles:"", //当前优惠活动的数组
				ruelesInfo: '',
				actaul_money:'0.00'//实际到账金额
			};
		},
		methods:{
			hdClick() {
				console.log("点击优惠")
			},
			select(amount){
				this.inputAmount = amount.toFixed(2);
				this.discount(amount)
			},
			change(inputAmount){
				this.discount(inputAmount)
			},
			discount(inputAmount){
				this.rueles='';
				// this.actaul_money=parseFloat(inputAmount);
				let maxSend=0;
				//判断用户充值的金额是否满足活动满减的条件
				for(let i=0;i<this.ruelesInfo.length;i++){
					if(parseFloat(inputAmount) >= parseFloat(this.ruelesInfo[i].recharge)&&parseFloat(this.ruelesInfo[i].send)>=maxSend){
							this.rueles=this.ruelesInfo[i]
							maxSend=this.ruelesInfo[i].send;
					}
				}
				if(inputAmount==''){
					this.actaul_money=(0).toFixed(2);
					return false;
				}
				if(this.rueles==''){
					this.actaul_money=(parseFloat(inputAmount)).toFixed(2);
				}else{
					this.actaul_money=(parseFloat(inputAmount)+parseFloat(this.rueles.send)).toFixed(2);
				}
				console.log(this.rueles)
			},

			doDeposit(){
				if (parseFloat(this.inputAmount).toString() == "NaN") {
					uni.showToast({title:'请输入充值金额',icon:'none'});
					return ;
				}
				if(this.inputAmount<=0){
					uni.showToast({title:'请输入大于0的金额',icon:'none'});
					return ;
				}
				if(parseFloat(this.inputAmount).toFixed(2)!=parseFloat(this.inputAmount)){
					uni.showToast({title:'最多只能输入两位小数哦~',icon:'none'});
					return ;
				}
				let date = new Date().getTime(); //获取时间戳
				let rand = Math.floor(Math.random()*9999);//随机数
				let rdmSingleNum='',
				tradeno='';  
				rdmSingleNum = (date +''+ rand);  //随机单号
				uni.request({
					url:route.variable+'//mobile/recharge/Wapay',
					method:'GET',
					data:{
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
						moneys:this.inputAmount,
						zhifu:this.paytype,
						r_id:this.rueles.r_id,
						serial_num:rdmSingleNum
					},
					success: (res) => {
						if (route.publicIf(res.data.status) == false){
							return false;
						}
						tradeno=res.data.orderNum;
						uni.setStorageSync('pmtNum',this.paytype) //充值方式 1-微信 2-支付宝
						uni.setStorageSync('tradeno',tradeno) //充值单号
						uni.setStorageSync('rdmSingleNum',rdmSingleNum) //随机生成的单号
						
						 /* 1是微信,2是支付宝 */
						if(this.paytype==1){
							let i = encodeURI(route.variable+'/h5/pages/user/weChat');
							location.href = res.data.objectxml.mweb_url+'&redirect_url='+i;
							// this.wctPolling(); //调用微信轮询
						}else{
							const div = document.createElement('div')
							div.innerHTML = res.data //此处form就是后台返回接收到的数据
							document.body.appendChild(div);
							document.forms[0].submit();
							//this.apyPolling(); //调用支付宝轮询
						}
					}
				})
			}
		},
		onLoad() {
			var jsonList=uni.getStorageSync("jsonList");
			var data = JSON.parse(jsonList); //JSON字符串转对象
			var _that = this;
			_that.Signboard = data.Ident_Signboard;
			_that.Signguid = data.Ident_Signguid;
			route.checkCsid(data.csid);
			// console.log(result)
			//获取当前账户余额,并显示在页面中
			uni.request({
				url:route.variable+'/mobile/recharge/getRecharge',  //获取当前账户余额的接口地址
				method:'GET',
				data:{
					Ident_Signboard: _that.Signboard,
					Ident_Signguid: _that.Signguid
				},
				success: (res) => {
					if (route.publicIf(res.data.status) == false){
						return false;
					}
					console.log(res)
					if(res.data.status==0){
						// if(res.data.balance){
						// 	_that.balance=res.data.balance.account; //获取当前余额并将其存入this.balance
						// 	console.log(_that.balance);
						// }else{
						// 	uni.showToast({title: '请完善公司信息',icon:"none"});
						// }
						_that.balance=res.data.balance.account; //获取当前余额并将其存入this.balance
						console.log(_that.balance);
					}
				},
				fail:(res)=>{
					uni.hideLoading()
					uni.showToast({title: '数据加载失败'+'错误码201',icon:"none"});
					// console.log("fail: "+JSON.stringify(e));
				}
			}),
			/* 获取活动信息,满减活动 */
			uni.request({
				url:route.variable+'/mobile/recharge/rueles',
				method:'GET',
				data:{
					Ident_Signboard: _that.Signboard,
					Ident_Signguid: _that.Signguid
				},
				success: (res) => {
					if (route.publicIf(res.data.status) == false){
						return false;
					}
					if(res.data.status==0){
						// _that.rueles=res.data.data;
						_that.ruelesInfo=res.data.data;
						console.log(_that.rueles);
						console.log(_that.ruelesInfo);
					}
				},
				fail:(res)=>{
					uni.hideLoading()
					uni.showToast({title: '数据加载失败'+'错误码201',icon:"none"});
					// console.log("fail: "+JSON.stringify(e));
				}
			})
		},
	}
</script>

<style lang="scss">
	// 顶部当前余额
	.back{
		margin: 0.3rem 0.5rem;
		border-radius: 5px;
		height: 30vw;
		position: relative;
		background: #FF0000;
		.top {
			color: #ffffff;
			position: absolute;
			font-size: 0.9rem;
			top: 8%;
			left: 1rem;
		}
		text{
			margin-top: 0;
			margin-bottom: 10px;
			color: #8f8f94;
		}
		.bot {
			font-weight: 600;
			margin: 0px;
			color: #ffffff;
			position: absolute;
			bottom: 0.5rem;
			left: 1rem;
			font-size: 2rem;
		}
	}
	/* 实际到账和支付金额 */
	.block {
		width: 94%;
		padding: 20upx 3%;
		.money_item{
			display: inline-block;
			width: 47vw;
			font-size: 0.8rem;
		}
		view>text {
			font-weight: 550;
			color: #000000;
		}
	}
	// 优惠活动样式
	.rechargeMode {
		width: 94%;
		padding: 20upx 3%;
		.odes {
			font-size: 0.8rem;
			margin: 0px!important;
			flex-grow: 1;
			display: flex;
			line-height: 7vh;
			text {
				flex-grow: 1;
				text-align: right;
			}
		}
		/* 优惠活动 */
		.hd_cont {
			padding: 0 0.5rem;
			view{
				width: 100%;
				height: 4vh;
				// border-bottom: 1px solid #F7F7F7;
				font-size: 0.7rem;
				line-height: 4vh;
				text{
					margin-left:0.5rem;
					margin-bottom: 0;
				}
			}
		}
		.hd_active{
			border:1px solid #06b4fd;
			border-radius: 5px;
			background: #06b4fd;
			color: #FFFFFF;
		}
	}
	.block{
		width: 94%;
		padding: 20upx 3%;
		.title{
			width: 100%;
			font-size: 0.8rem;
		}
		.content{
			.my{
				width: 100%;
				height: 120upx;
				display: flex;
				align-items: center;
				font-size: 0.7rem;
				border-bottom: solid 1upx #eee;
			}
			.amount{
				width: 100%;
				
				.list{
					display: flex;
					justify-content: space-between;
					padding: 20upx 0;
					.box{
						width: 30%;
						height: 80upx;
						display: flex;
						justify-content: center;
						align-items: center;
						border-radius: 10upx;
						box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.05);
						font-size: 0.7rem;
						background-color: #f1f1f1;
						color: 333;
						&.on{
							background-color: #FF0000;
							color: #fff;
						}
						uni-input {
							color: #000000;
						    display: inline-flex;
						    align-items: center;
						    justify-content: center;
						    height: 100%;
						    text-align: center;
						}
					}
				}
				
			}
			.pay-list{
				width: 100%;
				border-bottom: solid 1upx #eee;
				.row{
					width: 100%;
					height: 80upx;
					display: flex;
					align-items: center;
					.left{
						width: 100upx;
						flex-shrink: 0;
						display: flex;
						align-items: center;
						image{
							width: 50upx;
							height: 50upx;
						}
					}
					.center{
						width: 100%;
						font-size: 0.7rem;
					}
					.right{
						width: 100upx;
						flex-shrink: 0;
						display: flex;
						justify-content: flex-end;
					}
				}
			}
		}
	}
	.pay{
		margin: 20upx 0;
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.btn{
			width: 90%;
			height: 80upx;
			border-radius: 80upx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			background-color: #FF0000;
			box-shadow: 0upx 5upx 10upx rgba(0,0,0,0.2);
		}
		.tis{
			margin-top: 10upx;
			width: 100%;
			font-size: 0.6rem;
			display: flex;
			justify-content: center;
			align-items: baseline;
			color: #999;
			.terms{
				color: #5a9ef7;
			}
		}
	}
</style>
