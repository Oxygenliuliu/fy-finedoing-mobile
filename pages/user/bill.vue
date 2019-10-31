<template>
	<view>
		<!-- 账单切换条件：例如-全部-充值-支付 -->
		<view class="orderPage flex-row " style="display: flex;flex-direction: row;position: relative;">
			<view class="orderPageInfo flex-view-item" v-for="(ite,index) in item" :key="index">
				<view class=" Whole" @tap="billBtn(index)" :style="{color:(index == checkNum?'#FF0000':'#000000')}" :class="{boderBottom:(index == checkNum ? true : false)}">
					{{ite.name}}
				</view>			
			</view>
		</view>
		<!-- 全部 -->
		<view :class="{ active: iswhole}">
			<view class="total">
				<text>余额：￥ {{totalBalance}}</text>
			</view>
			<!-- 账单条例明细 -->
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltolower="scrollBottom"  @scroll="scroll">
				<view class="scroll-view-item">
					<view class="uni-list">
						<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item, index) in PayAndPayList" :key="index">
							<view class="uni-media-list">
								<view class="uni-media-list-logo">
									<image  :src="iconFor(item.p_name)"></image>
								</view>
								<view class="uni-media-list-body">
									<view class="uni-media-list-text-top"><text style="margin-right: 2rem;font-weight: 600;">{{item.p_name}}</text></view>
									<view class="uni-media-list-text-bottom uni-ellipsis">{{item.time}}<text style="margin-left: 20upx;">{{item.u_name}}</text></view>
								</view>
								<view class="uni-media-list-money">
									<view class="uni-media-list-cash">{{item.cash}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<!-- 充值 -->
		<view :class="{ actives: isrecharge }">
			<view class="total">
				<text>总充值：￥ {{totalRecharge}}</text>
			</view>
			<!-- 账单条例明细 -->
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y"  @scrolltolower="rechscrollBottom" @scroll="scroll">
				<view class="scroll-view-item">
					<!-- 充值示例 -->
					<view class="uni-list">
						<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(items, index) in RechargeList" :key="index">
							<view class="uni-media-list">
								<view class="uni-media-list-logo">
									<image  :src="iconFor(items.p_name)"></image>
								</view>
								<view class="uni-media-list-body">
									<view class="uni-media-list-text-top"><text style="margin-right: 2rem;font-weight: 600;">{{items.p_name}}</text></view>
									<view class="uni-media-list-text-bottom uni-ellipsis">{{items.time}}<text style="margin-left: 20upx;">{{items.u_name}}</text></view>
								</view>
								<view class="uni-media-list-money">
									<view class="uni-media-list-cash">{{items.cash}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<!-- 支付 -->
		<view :class="{ activess: ispayment }">
			<view class="total">
				<text>总支出：￥ {{totalPayment}}</text>
			</view>
			<!-- 账单条例明细 -->
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y"  @scrolltolower="PayscrollBottom" @scroll="scroll">
				<view class="scroll-view-item">
					<!-- 支付示例 -->
					<view class="uni-list">
						<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(ite, index) in PaymentList" :key="index">
							<view class="uni-media-list">
								<view class="uni-media-list-logo">
									<image  :src="iconFor(ite.p_name)"></image>
								</view>
								<view class="uni-media-list-body">
									<view class="uni-media-list-text-top"><text style="margin-right: 2rem;font-weight: 600;">{{ite.p_name}}</text></view>
									<view class="uni-media-list-text-bottom uni-ellipsis">{{ite.time}}<text style="margin-left: 20upx;">{{ite.u_name}}</text></view>
								</view>
								<view class="uni-media-list-money">
									<view class="uni-media-list-cash">{{ite.cash}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	import route from "@/common/public.js"
	export default{
		data(){
			return{
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				Signboard: '',
				Signguid: '',
				iswhole: false, //支付和充值显示
				isrecharge: true, //单独的充值隐藏
				ispayment: true,  //单独的支付隐藏
				PayAndPayList: '',  //全部列表
				RechargeList: '',  //充值列表
				PaymentList: '', //余额列表
				PayReNum: '',  //作为：下拉刷新的参数
				totalBalance: '0.00',  //全部类别里的：余额
				totalRecharge: '0.00',  //充值类别里的：总充值
				totalPayment: '0.00',  //支付类别里的： 总支付
				checkNum: 0,
				item:[{
					value:'one',
					name:'全部',
				},
				{
					value:'one',
					name:'充值',
				},
				{
					value:'one',
					name:'支付',
				}],
				page: 1,
				lastpage: '',
				qbPage: '',
			}
		},
		methods:{
			// 页面滑动
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop;
			},
			// 全部的下拉加载数据
			scrollBottom() {
				//先定义一个变量页数，page=1，只要是存在上拉加载的页面这两个参数必不可少（lastpage，page)
				//先判断是否是最后一页,lastpage最后页数
				console.log(this.page)
				console.log(this.lastpage)
				if(this.page == this.lastpage){
					uni.showToast({
						title: '没有更多数据',
						icon: 'none'
					})
					return false;
				}
				uni.request({
					url: route.variable+'/mobile/personal/PayAndPayFor',
					method:'GET',
					data:{
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
						page: this.page + 1,
					},
					success: (res) => {
						if (route.publicIf(res.data.status) == false){
							return false;
						}
						if(res.data.status == 0){
							let dataLength = Object.keys(res.data.bill.data).length;
							for (var i = 0; i < dataLength; i++) {
								this.PayAndPayList.push(res.data.bill.data[i]);
							}
							this.page = res.data.bill.current_page;
						}
					},
					fail:(res)=>{
						uni.hideLoading()
						uni.showToast({title: '下拉刷新失败'+'错误码201',icon:"none"});
					}
				})	
			},
			// 充值的上拉加载更多数据
			rechscrollBottom(){
				//先定义一个变量页数，page=1，只要是存在上拉加载的页面这两个参数必不可少（lastpage，page)
				//先判断是否是最后一页,lastpage最后页数
				console.log(this.page)
				console.log(this.lastpage)
				if(this.page == this.lastpage){
					uni.showToast({
						title: '没有更多数据',
						icon: 'none'
					})
					return false;
				}
				uni.request({
					url: route.variable+'/mobile/personal/getRecharge',
					method:'GET',
					data:{
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
						page: this.page + 1,
					},
					success: (res) => {
						if (route.publicIf(res.data.status) == false){
							return false;
						}
						if(res.data.status == 0){
							let dataLength = Object.keys(res.data.bill.data).length;
							for (var i = 0; i < dataLength; i++) {
								this.RechargeList.push(res.data.bill.data[i]);
							}
							this.page = res.data.bill.current_page;
						}
					},
					fail:(res)=>{
						uni.hideLoading()
						uni.showToast({title: '上拉加载失败'+'错误码201',icon:"none"});
					}
				})	
			},
			// 充值的下拉加载更多数据
			PayscrollBottom(){
				//先定义一个变量页数，page=1，只要是存在上拉加载的页面这两个参数必不可少（lastpage，page)
				//先判断是否是最后一页,lastpage最后页数
				if(this.page == this.lastpage){
					uni.showToast({
						title: '没有更多数据',
						icon: 'none'
					})
					return false;
				}
				var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值大家都在发
				var data = JSON.parse(wulala); //JSON字符串转对象
				var Signboard = data.Ident_Signboard;  //给Signboard 赋值最近更新
				var Signguid = data.Ident_Signguid;  //给Signguid 赋值
				uni.request({
					url: route.variable+'/mobile/personal/getPayRecord',
					method:'GET',
					data:{
						Ident_Signboard: Signboard,
						Ident_Signguid: Signguid,
						page: this.page + 1,
					},
					success: (res) => {
						if (route.publicIf(res.data.status) == false){
							return false;
						}
						if(res.data.status == 0){
							let dataLength = Object.keys(res.data.bill.data).length;
							for (var i = 0; i < dataLength; i++) {
								this.PaymentList.push(res.data.bill.data[i]);
							}
							this.page = res.data.bill.current_page;
						}
					},
					fail:(res)=>{
						uni.hideLoading()
						uni.showToast({title: '下拉加载失败'+'错误码201',icon:"none"});
					}
				})	
			},
			//根据支付方式显示对应的图标；name: 支付方式名
			iconFor(name) {
				var classInof = null;
				switch(name) {
					case '微信':
						classInof = '../../static/image/weixin.png';
						break;
					case '支付宝':
						classInof = '../../static/image/zhifu.png';
						break;
					case '现金':
						classInof = '../../static/image/xianjin.png';
						break;
					case '挂账':
						classInof = '../../static/image/guazhang.png';
						break;
					case '余额':
						classInof = '../../static/image/yue.png';
						break;
				}
				return classInof;
			},
			// 根据支付方式 显示对应提示
			mode(ban){
				var balance = null;
				if(ban == null){
					balance = '支付'
					return balance;
				}else{
					balance = '充值'
					return balance;
				}	
			},		
			// 切换按钮状态
			billBtn(index){
				this.checkNum = index;
				this.PayReNum = index;
				// 全部
				if(index == 0){
					this.iswhole = false
					this.isrecharge = true
					this.ispayment = true
					this.lastpage = this.qbPage;  //分页的最后一页赋值
				}else if(index == 1){  //充值
					this.iswhole = true;
					this.isrecharge = false;
					this.ispayment = true;
					uni.request({
						url: route.variable+'/mobile/personal/getRecharge',
						method: 'GET',
						data:{
							Ident_Signboard: this.Signboard,
							Ident_Signguid: this.Signguid
						},
						success: (res) => {
							if (route.publicIf(res.data.status) == false){
								return false;
							}
							if(res.data.status == 0){
								this.RechargeList = res.data.bill.data;
								this.lastpage = res.data.bill.last_page;  //分页的最后一页赋值
								this.qbPage = res.data.bill.last_page
							}
						},
						fail:(res)=>{
							uni.hideLoading()
							uni.showToast({title: '请求失败'+'错误码201',icon:"none"});
						}
					})
				}else{  //支付
					this.iswhole = true
					this.isrecharge = true
					this.ispayment = false
					uni.request({
						url: route.variable+'/mobile/personal/getPayRecord',
						method: 'GET',
						data:{
							Ident_Signboard: this.Signboard,
							Ident_Signguid: this.Signguid
						},
						success: (res) => {
							if (route.publicIf(res.data.status) == false){
								return false;
							}
							if(res.data.status == 0){
								this.PaymentList = res.data.bill.data;
								this.lastpage = res.data.bill.last_page;  //分页的最后一页赋值
							}
						},
						fail:(res)=>{
							uni.hideLoading()
							uni.showToast({title: '请求失败'+'错误码201',icon:"none"});
						}
					})
				}
			}
		},
		onLoad:function(){
			var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值大家都在发
			if(wulala){
				var data = JSON.parse(wulala); //JSON字符串转对象
			}else{
				uni.showToast({
					title: '可能登陆状态失效，请重新登陆！',
					icon:'none',
					duration: 3000,
					complete() {
						setTimeout(function() {
							uni.navigateTo({
								url: "../index/login"
							})
						}, 1000);
					}
				});
			}
			this.Signboard = data.Ident_Signboard;  //给Signboard 赋值最近更新
			this.Signguid = data.Ident_Signguid;  //给Signguid 赋值
			this.PayReNum = 0;  //区分参数
			uni.request({
				url: route.variable+'/mobile/personal/PayAndPayFor',
				method: 'GET',
				data:{
					Ident_Signboard: this.Signboard,
					Ident_Signguid: this.Signguid
				},
				success: (res) => {
					if (route.publicIf(res.data.status) == false){
						return false;
					}
					if(res.data.status == 0){
						console.log(res)
						this.PayAndPayList = res.data.bill.data;  //全部列表：赋值
						this.totalRecharge = (res.data.recharge + res.data.send).toFixed(2);  //充值类别里的：总充值
						this.totalPayment = (res.data.totalPayment).toFixed(2);  //支付类别里的：总支付
						this.totalBalance = res.data.balance;  //全部类别里的：余额
						this.lastpage = res.data.bill.last_page;  //分页的最后一页赋值
					}
				},
				fail:(res)=>{
					uni.hideLoading()
					uni.showToast({title: '请求失败'+'错误码201',icon:"none"});
				}
			});
		},
		// 下拉刷新
		onPullDownRefresh() {
			var _this = this;
			// 开始刷新
			setTimeout(function () {
				uni.startPullDownRefresh();
				if(_this.PayReNum == 0){
					uni.request({
						url: route.variable+'/mobile/personal/PayAndPayFor',
						method: 'GET',
						data:{
							Ident_Signboard: _this.Signboard,
							Ident_Signguid: _this.Signguid
						},
						success: (res) => {
							if (route.publicIf(res.data.status) == false){
								return false;
							}
							if(res.data.status == 0){
								_this.PayAndPayList = res.data.bill.data;  //全部列表：赋值
								_this.totalRecharge = (res.data.recharge + res.data.send).toFixed(2);  //充值类别里的：总充值
								_this.totalPayment = (res.data.totalPayment).toFixed(2);  //支付类别里的：总支付
								_this.totalBalance = res.data.balance;  //全部类别里的：余额
								_this.lastpage = res.data.bill.last_page;  //分页的最后一页赋值
							}
						},
						fail:(res)=>{
							uni.hideLoading()
							uni.showToast({title: '下拉刷新失败'+'错误码201',icon:"none"});
						}
					});
				}else if(_this.PayReNum == 1){
					uni.request({
						url: route.variable+'/mobile/personal/getRecharge',
						method: 'GET',
						data:{
							Ident_Signboard: _this.Signboard,
							Ident_Signguid: _this.Signguid
						},
						success: (res) => {
							if (route.publicIf(res.data.status) == false){
								return false;
							}
							if(res.data.status == 0){
								_this.RechargeList = res.data.bill.data;
								_this.lastpage = res.data.bill.last_page;  //分页的最后一页赋值
								_this.qbPage = res.data.bill.last_page
							}
						},
						fail:(res)=>{
							uni.hideLoading()
							uni.showToast({title: '下拉刷新失败'+'错误码201',icon:"none"});
						}
					})
				}else{
					uni.request({
						url: route.variable+'/mobile/personal/getPayRecord',
						method: 'GET',
						data:{
							Ident_Signboard: _this.Signboard,
							Ident_Signguid: _this.Signguid
						},
						success: (res) => {
							if (route.publicIf(res.data.status) == false){
								return false;
							}
							if(res.data.status == 0){
								_this.PaymentList = res.data.bill.data;
								_this.lastpage = res.data.bill.last_page;  //分页的最后一页赋值
							}
						},
						fail:(res)=>{
							uni.hideLoading()
							uni.showToast({title: '下拉刷新失败'+'错误码201',icon:"none"});
						}
					})
				}
			}, 1000);
			// 停止刷新
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		}
	}
</script>

<style>
	@import "../../common/uni.css";
	.orderPageInfo{
		width: 20%;
		text-align: center;
		padding: 0.3rem 0.7rem;
	}
	.orderPageInfo view{
		font-size: 0.7rem;
	}
	.scroll-Y {
		height: 1160upx;
	}
	.scroll-view-item {
		height: 1160upx;
		line-height: 1160upx;
	}
	.billDetails{
		margin-bottom: 30px;
	}
	/* 状态选中的下划线 */
	.boderBottom{
		border-bottom: 2px solid #FF0000;
	}
	/* 将内容隐藏 */
	.active,.actives ,.activess{
		display: none;
	}
	/* 账单切换条件：例如-全部-充值-支付 */
	 .flex-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
    }
	.flex-container .flex-item {
        display: inline-block;
		width: auto;
		padding: 0 20px;
		text-align: center;
		line-height: 40px;
    }
	.billStatus{
		background-color: #EFEFF4;
		border-bottom: #CCC solid 1px;
	}
	/* 余额 */
	.total{
		height: 2.5rem;
		line-height: 2.5rem;
		background-color: #F7F7F7;
	}
	.total text {
		color: #999999;
		margin: 0 40upx;
	}
	.uni-list-cell::after,.uni-list::after{
		height: 2px;
		background-color: #F7F7F7;
	}
	.uni-list-cell-hover {
		background-color: #FFFFFF;
	}
	
	.uni-media-list-money .uni-media-list-cash {
		color:#333333;
		font-family: Trebuchet MS;
		font-size: 34upx;
		font-weight: 600;
	}
	uni-view.uni-media-list-money {
		display: flex;
		align-items: center;
	}
</style>
