<template>
	<view>
		<!-- 支付订单界面-主界面 -->
		<view class="payment" :class="{actives: addressActive }">
			<!-- 收货地址 -->
			<view class="flex-row uni-bgc address_view" style="display: flex;flex-direction: row;"  @tap="addressClick">
				<view class="flex-view-item" style="width: 86%;" v-show="displayNone?false:true">
					<view class="uni-addressRight" >
						<view class="uni-addressName" :data-cnId="(defAddress.addid)"><text>{{defAddress.name}} </text></view>
						<view class="uni-sddressPhone"><text>{{defAddress.telephone}}</text> </view>
					</view>
					<view class="address">{{defAddress.address}}</view>	
			</view>
				<view class="addressMsg" :class="{dizhiMsg:addressMsg}">
					<view class="add-image">
						<image src="../../static/image/address.png"></image>
					</view>	
					<text>添加收货地址</text>
				</view>
				<view class="moren">
					<uni-icons class="jiantou" type="arrowright" size="30"></uni-icons>
				</view>
			</view>
			<!-- 商品视图 -->
			<view class="commodity_view" v-for="(item , index) in shopList" :key="index">
				<text class="cd_tite" :data-spId="(item.ty_id)">{{item.tradename}}</text>
				<view class="cd_cont">
					<view class="cd_cont_img">
						<image :src="imgUrl+(item.img)"></image>
					</view>
					<view class="cd_cont_content">
						<view class="productName"><text :data-gId="(item.g_id)">{{item.g_name}}</text></view>
						<view><text>规格:{{item.sc_specs}}  {{item.sc_number}}(个)</text></view>
						<view><text :data-clId="(item.lpid)">工艺:{{item.lpname}}</text></view>
						<view class="money">
							<text style="color: #E93B3D;font-size: 0.8rem;">￥ {{item.sc_total_price}}</text>
							<!-- <text @tap="remarksTap(index)">备注</text> -->
						</view>
					</view>
				</view>
			</view>
			<!-- 配送服务 -->
			<view class="delivery"  @click="deliveryClick">
				<view>配送服务<text>{{kuaiDi}}<uni-icon class="jiantou" type="arrowright" size="19"></uni-icon></text></view>
			</view>
			<!-- 发票信息 -->
			<view class="delivery" @click="invoiceTap">
				<view>发票信息<text>{{invoTypeName}}<uni-icon class="jiantou" type="arrowright" size="19"></uni-icon></text></view>
			</view>
			<!-- 备注 -->
			<view class="remarks" v-show="textareaIsShow">
				<text>备注:</text>
				<textarea rows="5" cols="30" maxlength="320" placeholder="请输入备注信息" @input="remarks" v-model="desc"></textarea>
				<view>
					<text>{{beiZhuNum}}</text>/320
				</view>
			</view>
			<view class="paymentMethod">
				<!-- #ifdef MP-WEIXIN -->
				<view class="flex-row"  v-if="pay.name=='支付宝'?false:true" style="display: flex;flex-direction: row;height: 4vh;line-height: 4vh;padding: 0.2rem 0;" v-for="(pay, index) in payList" :key="index" @tap="paymentTap(index,pay)">
						<view class="flex-view-item" style="padding: 0.2rem 0.4rem 0 0;">
								<!-- #ifdef H5 -->
								<image :src="iconFor(pay.name)" style="width: 1rem;height: 1rem;;"></image>
								<!-- #endif -->
								<!-- #ifndef H5 -->
								<image src="../../static/image/weixin.png" v-if="pay.name == '微信'" style="width: 1rem;height: 1rem;;"></image>
								<image src='../../static/image/zhifu.png' v-if="pay.name == '支付宝'" style="width: 1rem;height: 1rem;;"></image>
								<image src='../../static/image/xianjin.png' v-if="pay.name == '现金'" style="width: 1rem;height: 1rem;;"></image>
								<image src='../../static/image/guazhang.png' v-if="pay.name == '挂账'" style="width: 1rem;height: 1rem;;"></image>
								<image src='../../static/image/yue.png' v-if="pay.name == '余额'" style="width: 1rem;height: 1rem;;"></image>
								<!-- #endif -->
								</view>
								<view class="flex-view-item" style="width: 90vw;">{{pay.name}}支付<text style="color: #0081FF;margin-left: 0.8rem;">{{AccountBalance(pay.name)}}</text></view>
							<view class="flex-view-item" style="width: 10vw;"><text class="iconfont" :class="{'icon-round-check':index == paychenkNum ? true : false}" style="color: #333333;font-size: 14px;"></text></view>
						</view>
				</view>
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<view class="flex-row" style="display: flex;flex-direction: row;height: 4vh;line-height: 4vh;padding: 0.2rem 0;" v-for="(pay, index) in payList" :key="index" @tap="paymentTap(index,pay)">
						<view class="flex-view-item" style="padding: 0.2rem 0.4rem 0 0;">
								<!-- #ifdef H5 -->
								<image :src="iconFor(pay.name)" style="width: 1rem;height: 1rem;;"></image>
								<!-- #endif -->
								<!-- #ifndef H5 -->
								<image src="../../static/image/weixin.png" v-if="pay.name == '微信'" style="width: 1rem;height: 1rem;;"></image>
								<image src='../../static/image/zhifu.png' v-if="pay.name == '支付宝'" style="width: 1rem;height: 1rem;;"></image>
								<image src='../../static/image/xianjin.png' v-if="pay.name == '现金'" style="width: 1rem;height: 1rem;;"></image>
								<image src='../../static/image/guazhang.png' v-if="pay.name == '挂账'" style="width: 1rem;height: 1rem;;"></image>
								<image src='../../static/image/yue.png' v-if="pay.name == '余额'" style="width: 1rem;height: 1rem;;"></image>
								<!-- #endif -->
								</view>
								<view class="flex-view-item" style="width: 90vw;">{{pay.name}}支付<text style="color: #0081FF;margin-left: 0.8rem;">{{AccountBalance(pay.name)}}</text></view>
							<view class="flex-view-item" style="width: 10vw;"><text class="iconfont" :class="{'icon-round-check':index == paychenkNum ? true : false}" style="color: #333333;font-size: 14px;"></text></view>
						</view>
				</view>
				<!-- #endif -->
			<!-- 订单金额信息-->
			<view class="orderAmount">
				<view><text class="orderAmount_left">运费</text><text class="orderAmount_right">￥ {{kuaiDiMoney}}</text></view>
				<view><text class="orderAmount_left">税费</text><text class="orderAmount_right">￥ {{taxpointMoney}}</text></view>
				<view class="tomor">总价:<text style="margin-left: 0.4rem;">￥ {{subTotal}}</text></view>
				<text style="font-size: 10px;color: #999999;position: relative;left: 14rem;top: -0.6rem;" v-show="isTest=='1'?true:false">(模拟支付0.01元)</text>
				<view style="height: 50px;"></view>
			</view>
			
			<view class="dv_footer">
				<view class="payFuKuan">实付款：<text style="color: red;">￥ {{isTest=='1'?'0.01':subTotal}}</text></view>
				<!-- <view class="payFuKuan">实付款：<text style="color: red;">￥ {{subTotal}}</text></view> -->
				<view class="OrderPayment" @tap="OrderPayment">{{paychenkName}}支付</view>
			</view>
		</view>
		<!-- 物流配送服务界面弹出 --> 
		<uni-popup :show="delivery" type="bottom" position="bottom" @hidePopup="ClosePopup">
			<view class="delivery_view" >
				<view class="dv_mode">
					<text>请选择配送方式</text>
					<view class="dv_show" @tap="logisticsTap(index)" v-for="(logistics,index) in logwayList" :key="index">
						<text :style="{color:(index == logchenkNum?'#FFF':''),background:(index == logchenkNum?'red':'')}">{{logistics.wayname}}</text>
					</view>
				</view>
				<!-- 配送信息logcur -->
				<view class="dv_cont">
					<text>{{LogNameInfo}}</text>
				</view>
				<view class="dv_footer">
					<view class="dv_Price">配送费 <text>￥ {{logPrice}}</text></view>
					<view class="dv_btn">
						<view class="dv_GoBack" @tap="deliveryPopup">取消</view>
						<view class="dv_BtnAddress end" @tap="Determine">确定</view>
					</view>
				</view>
			</view>
		</uni-popup>
		<view v-show='payShow' >
			<unipay @payResult='payResult'  :webData='webData' goOrder="true"></unipay>
		</view>
	</view>
</template>
<script>
	import unipay from "@/components/uni-popup/uni-isPay.vue"
	import route from "@/common/public.js"
	import uniIcons from "@/components/uni-icon/uni-icons.vue"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import mpviePicker from '@/components/mpvue-picker/mpvuePicker.vue'
	export default {
		components: {
			'mpvue-picker':mpviePicker,
			mpviePicker,
			uniIcons,uniPopup,unipay,
		},
		data() {
			return {
				scrollTop: 0,
					old: {
						scrollTop: 0
				},
				webData:{},// webView需要的数据
				displayNone: true,
				payAgain: false,
				payShow: false,
				payUrl: '',// 跳转支付地址
				textareaIsShow: true,
				payType: '' ,  // 判断从哪个页面过来的标识
				Balance: '',  //余额：账户余额
				backNum: '',  //返回的赋值变量
				addressMsg: true,  //没有收货地址时显示
				imgUrl :'',  //图片访问ip
				isshow: false,
				el: 'cdcd',
				isActive: true,  //发票抬头
				comActive : true,  //发票内容
				dis:"none",
				title: 'radio',
				currents: 1,  //公司或个人的选中下标
				getWay: '',  //区分挂不挂账
				beiZhuNum: 0,  //主体备注的字数
				desc: '',
				corporateName: '',  //公司名称
				TaxpayerNum: '',  //纳税人识别号
				addressPhone: '',  //地址/电话
				openBankNum: '',  //开户号及账号
				taxpoint: '',  //发票=>税点
				taxpointMoney: '0.00',  //发票税点金额  
				invoTypeName: '',  //发票类型名称  
				
				invoTypeNum: '',  //发票类型的 序号
				faPiaoNum: '',  //发票类型下标（公司还是个人）
				addressActive: false,  //修改地址显示与隐藏  
				delivery: false,  //配送方式
				payment: false,  //支付方式
				payList: '',  //支付方式列表
				paychenkNum: 0,  //支付方式的下标
				paychenkName: '',  //支付名称
				payNum: '',  //支付标识（1-微信，2-支付宝，3-余额）
				addressInfo: true,  //收货地址
				defAddress: {},  //默认收货地址
				addcheckNum: 0,  //地址下标
				shopList: '',  //商品详情数据列表
				addressList: '',  //地址列表信息
				logwayList: '',  //物流方式列表信息
				logchenkNum: 0,  //物流方式下标
				logSubscript: '',  //物流方式区分（1,2,3,）
				LogName: '',  //物流方式
				LogNameInfo: '',  //物流方式详细说明
				logPrice: '',  //物流方式价格
				kuaiDi: '',  //快递显示
				kuaiDiMoney: '0.00',  //快递价格显示
				subTotal: '',  //订单总价价格
				TotalMoney: '',  //订单总价
				shopInfoMoney: '',  //商品价格
				Remarks: '',  //订单主体备注
				// remarksContent: '',  //订单明细备注
				remarksindex: '',  //替换点击当前明细下标
				xiuGaiActive: true,  //定义的是修改地址时绑定的数据变量
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray:[],
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				pickerText: '',
				mode: '',
				Signboard: '',  //令牌
				Signguid: '',  //guid
				Distinguish: '',  //区分是从哪个页面过来的
				payOrderid: '',  //去支付的orderid
				judgeItems: [],
				figureid: '',
				invoiceInfo:[],  //发票
				myAddress: [],  //收货地址
				isCreateOrder:false,// 订单是否生成
				isTest:0,//1是模拟支付，其他就是原价
				isChecked: {'window':false,'select':false},// 弹窗是否弹起 是否手动查询?
			}
		},
		methods: {
			leave(ee){ //webView回调函数
				this.webData = ee;
			},
			// 发票空回调函数
			myInvoice(parameter){},
			// 点击选择发票
			invoiceTap(e){
				this.myInvoice=function(parameter){
					this.invoTypeName = parameter.selectInvoTypeName;  //发票类型 名称
					this.invoTypeNum = parameter.selectInvoice_type;  //是否开票下标
					this.faPiaoNum = parameter.selectFaPiaoNum;  //公司还是个人
					this.corporateName = parameter.selectCorporateName;  //公司名称
					this.TaxpayerNum = parameter.selectTaxpayerNum;  //纳税人识别号
					this.addressPhone = parameter.selectaddressPhone;  //地址，电弧
					this.openBankNum = parameter.selectopenBankNum;  //开户行账户
					this.taxpointMoney = parameter.selectShuiMoney;  //税费
					this.shuiMoney = parameter.selectShuiMoney;  //发票税收
					this.subTotal = parseFloat(parameter.selectSubTotal)+parseFloat(parameter.selectShuiMoney)+parseFloat(this.kuaiDiMoney);   //总价
					this.processing(this.subTotal);   //总价计算方式
					this.invoiceInfo = parameter;
				}
				uni.navigateTo({
					url: '../../pages/order/invoice'
				})
			},
			// 判断 支付方式 显示余额
			AccountBalance(payname){
				if(payname == '余额'){
					return "("+"账户余额：￥ "+this.Balance+")"
				}else{
					return '';
				}
			},
			// 返回
			back() {  
				uni.backbutton({
					detail:1
				})
			},
			// 配送方式的 取消函数
			ClosePopup(e){
				this.delivery = false;
				this.payment = false;
				this.textareaIsShow = !this.textareaIsShow;
			},
			// 价格换算 公共函数
			processing(event){
				if(this.figureid == 1){  //向上取整
					this.subTotal = parseFloat(Math.ceil(event)).toFixed(2);  //给subTotal（总价）赋值
				}else if(this.figureid == 2){  //向下取整
					this.subTotal = parseFloat(Math.floor(event)).toFixed(2);  //给subTotal（总价）赋值
				}else if(this.figureid == 3){  //四舍五入
					this.subTotal = parseFloat(Math.round(event)).toFixed(2);  //给subTotal（总价）赋值
				}else{  //保留两位小数
					this.subTotal = parseFloat(event).toFixed(2);  //给subTotal（总价）赋值
				}
			},
			// 点击选择 物流
			deliveryClick(evt){
				uni.setNavigationBarTitle({
					title: '物流'
				})
				this.delivery=true;
				this.textareaIsShow = !this.textareaIsShow;
			},
			// 点击选择 配送方式
			logisticsTap(evt){
				this.logchenkNum = evt;
				this.logSubscript = this.logwayList[evt].delivery;  //给logSubscript（支付序号）赋值
				this.LogName = this.logwayList[evt].wayname;  //给LogName（物流方式）赋值
				this.LogNameInfo = this.logwayList[evt].declares;  //给LogNameInfo（物流方式详细说明）赋值
				this.logPrice = parseFloat(this.logwayList[evt].price).toFixed(2);  //给logPrice（物流方式价格）赋值
			},
			// 配送方式的 确定 按钮
			Determine(e){
				this.delivery=false;
				this.textareaIsShow = !this.textareaIsShow;
				this.kuaiDi = this.LogName;  //给kuaiDi（快递方式显示）赋值
				this.kuaiDiMoney = parseFloat(this.logPrice).toFixed(2);  //给kuaiDiMoney（快递价格显示）赋值   
				this.subTotal = parseFloat(this.TotalMoney) + parseFloat(this.taxpointMoney) + parseFloat(this.kuaiDiMoney);  //总价
				this.processing(this.subTotal);  //总价计算方式
				uni.setNavigationBarTitle({
					title: '确认订单'
				})
			},
			// 配送方式的 取消 按钮  
			deliveryPopup(evt){
				this.delivery=false;
				uni.setNavigationBarTitle({
					title: '确认订单'
				})
			},
			// 点击选择 支付方式
			paymentTap(e,payName){
				this.paychenkNum = e;
				this.paychenkName = payName.name;  //给paychenkName（支付名称）赋值
				this.payNum = payName.fid;  //给payNum（支付标识）赋值
			},
			// 支付方式页面的 确定 按钮
			payBtn(e){
				uni.setNavigationBarTitle({
					title: '确认订单'
				})
				this.payment=false;
			},
			// 支付方式页面的 取消 按钮
			checkPopup(evt){
				uni.setNavigationBarTitle({
					title: '确认订单'
				})
				this.payment=false;
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
			// 地址回调函数
			myAddressBack(param){
			},
			// 点击地址 跳转至 user的地址列表
			addressClick(evt){
				uni.setStorageSync('select','select');
				this.myAddressBack=function(param){
					this.defAddress = param;
						this.displayNone = false;
				}
				uni.navigateTo({
					url: '../../pages/user/useraddress'
				})
			},
			// 订单主体备注
			remarks(e){
                if(this.beiZhuNum == 320){
                    uni.showToast({
                        icon: 'none',
                        title: '最多只能輸入320個字'
                    });
                }
				this.beiZhuNum = e.detail.value.length;  //给Remarks（订单主体明细）赋值
				this.Remarks = e.detail.value;
			},
			// 总订单支付
			OrderPayment(e){
				if(this.defAddress.name == undefined && this.defAddress.address == undefined && this.defAddress.telephone == undefined){
					uni.showToast({
						title: '请添加收货地址',
						icon: 'none'
					})
				}else if(this.kuaiDi == ''){
					uni.showToast({
						title: '请选择快递方式',
						icon: 'none'
					})
				}else if(this.invoTypeName == ''){
					uni.showToast({
						title: '请选择是否开票',
						icon: 'none'
					})
				}else if(this.paychenkName == ''){
					uni.showToast({
						title: '请选择支付方式',
						icon: 'none'
					})
				}else{
					// uni.setStorageSync('orders',1);
					if(this.payNum == 4){  //判断是否挂账：给getWay 赋值
						this.getWay = 1
					}else{
						this.getWay = 0
					}
					if(this.Distinguish == 3){ 
						let url = getApp().globalData.webUrl+'/mobile/order/orderAgain';
						// this.OrderPayFun(url);
					}else{
						if(this.payAgain){// 再次生成新单子
							uni.showToast({
								title:'订单已生成，请前往订单页面支付！',
								duration:2000,
								icon:'none'
							})
							setTimeout(function(){
								uni.redirectTo({
									url: '../../pages/order/orderpageinfo'
								});
							},2100)
							return false;
						}
						let urls = getApp().globalData.webUrl+'/mobile/order/orderPay';
						this.OrderPayFun(urls)
					}
				}
			},
			// 订单总支付的 公共请求参数
			OrderPayFun(e){
				if(this.isCreateOrder){
					uni.redirectTo({
						url: 'orderpageinfo?orderNum=balance'
					})
					return false;
				}
				// #ifdef MP-WEIXIN
				var _that = this;
				wx.login({
				  success: res => {
				    var code = res.code;
					uni.request({
					url: e,
					method: 'POST',
					data: {
						Ident_Signboard: _that.Signboard,
						Ident_Signguid: _that.Signguid,
						shifukuan: _that.isTest==1?0.01:_that.subTotal,  //付款总金额（后期不要）
						kuaidi: _that.logSubscript,  //快递方式
						invoice_type: _that.invoTypeNum,  //是否开票
						invoice: _that.faPiaoNum,  //发票：公司或者个人
						title: _that.corporateName,  //发票抬头（公司/个人）
						taxcode: _that.TaxpayerNum,  //税号（公司）
						qyaddress: _that.addressPhone,  //公司地址
						qykaihu: _that.openBankNum,  //公司开户行
						remarks: _that.Remarks,  //订单主体备注
						address: _that.defAddress.address,  //收货人地址
						linkman: _that.defAddress.name,  //收货人姓名 
						linkPhone: _that.defAddress.telephone,  //收货人电话
						chunkmoney: _that.kuaiDiMoney,  //快递运费
						taxpoint: _that.shuiMoney,  //发票税收
						zhifu: _that.payNum,  //支付方式
						detailed: _that.shopList,  //明细数组信息
						getWay: _that.getWay,  //辨别是否 挂账
						orderid: _that.payOrderid,  //订单id
						trade_type: 'JSAPI',
						detailremark: '',   //明细备注
						code: code
					},
					success: (res) => {
						_that.payAgain = true;// 不允许形成新单子
						if(res.data.state ==200){
							_that.isCreateOrder = true;
							_that.payOrder = res.data.orderNum;
							if(_that.Distinguish==1){
								var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
								var data = JSON.parse(wulala); //JSON字符串转对象
								data.shop=data.shop-_that.shopList.length;
								uni.setStorageSync('shop',data.shop);
								let json = JSON.stringify(data);  //对象转字符串
								uni.setStorageSync('jsonList',json) //将shop数据库数量从新存储进去
							}
							if(_that.payNum == 1){
								var data = res.data;
								uni.requestPayment({
									provider: 'wxpay',
								    timeStamp: res.data.timeStamp,
								    nonceStr: res.data.nonceStr,
								    package: res.data.package,
								    signType: res.data.signType,
								    paySign: res.data.paySign,
								    success: function (res) {
										uni.showLoading({
											title:'支付结果查询中...',
										})
										if (res.errMsg == 'requestPayment:ok'){
											setTimeout(function(){
												uni.request({
													url: getApp().globalData.webUrl+'/mobile/wechat/Repquery',
													method: 'GET',
													data:{
														Ident_Signboard: _that.Signboard,
														Ident_Signguid: _that.Signguid,
														tradeno: data['out_trade_no']
													},
													success: (res) => {
														var state = res.data.status;
														if(state == 0){
															uni.showToast({title: '订单完成!',icon:"none",duration:1000});
															/* stat 转化订单或上传图片*/
															setTimeout(()=>{
																let sendPicture = {
																	"msg":true,
																	"data":{
																		'tradeno': this.orderId,
																		'status': 1,
																	}
																}
																	uni.setStorageSync('sendPicture',JSON.stringify(sendPicture))
																	uni.showModal({
																			title:"提示",
																			content: '是否立即提交订单',
																			cancelText:'等待传图',
																			confirmText:'提交订单',
																			success: res => {
																					if(res.confirm) {
																						sendPicture.msg = false;
																						uni.setStorageSync('sendPicture',JSON.stringify(sendPicture))
																						route.orderOrSendPi(this.orderId,sendPicture)
																					}else{
																						sendPicture.msg = false;
																						uni.setStorageSync('sendPicture',JSON.stringify(sendPicture))
																			}
																			}
																	})
															},1100)
															/* end 转化订单或上传图片*/
														}else{
															uni.showToast({title: '订单支付失败!',icon:"none"});
														}
													},
													fail:(res)=>{
														uni.showToast({
															title: '接口连不上!' + res.errMsg,
															icon: 'none'
														});
													},
													complete() {
														setTimeout(function(){
															uni.redirectTo({
																url:'/pages/order/orderpageinfo'
															})
														},1000)
													}
												})
											},1000)
										}
								    },
								    fail: function (err) {
								        uni.showToast({
								        	title: '支付已取消',
								        });
								    }
								})
							}else{
								uni.navigateTo({
									url: 'balance?orderNum='+ res.data.orderNum +'&money='+res.data.money+'&amount='+res.data.amount+'&usable='+res.data.usable
								})
							}
						}else if(res.data.status == 0){
								_that.isCreateOrder = true;
								_that.payOrder = res.data.orderNum;
								if(_that.Distinguish==1){
									var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
									var data = JSON.parse(wulala); //JSON字符串转对象
									data.shop=data.shop-_that.shopList.length;
									uni.setStorageSync('shop',data.shop);
									let json = JSON.stringify(data);  //对象转字符串
									uni.setStorageSync('jsonList',json) //将shop数据库数量从新存储进去
								}
								if (_that.payNum == 3){
									uni.navigateTo({
										url: 'balance?orderNum='+ res.data.orderNum +'&money='+res.data.money+'&amount='+res.data.amount+'&usable='+res.data.usable
									})
								}
						}
						else {
							uni.showToast({
								title: res.data.RETURN_MSG,
								duration: 2000,
								icon:'none'
							})
							setTimeout(()=>{
								uni.redirectTo({
									url: '/pages/order/orderpageinfo'
								});
							},1000)
						}
					},
					fail:(res)=>{
						uni.hideLoading()
						uni.showToast({title: '请求失败'+'错误码201',icon:"none"});
					}
				})
				},
			});
				// #endif
				// #ifndef MP-WEIXIN
				uni.request({
					url: e,
					method: 'POST',
					data: {
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
						shifukuan: this.isTest==1?0.01:this.subTotal,  //付款总金额（后期不要）
						kuaidi: this.logSubscript,  //快递方式
						invoice_type: this.invoTypeNum,  //是否开票
						invoice: this.faPiaoNum,  //发票：公司或者个人
						title: this.corporateName,  //发票抬头（公司/个人）
						taxcode: this.TaxpayerNum,  //税号（公司）
						qyaddress: this.addressPhone,  //公司地址
						qykaihu: this.openBankNum,  //公司开户行
						remarks: this.Remarks,  //订单主体备注
						address: this.defAddress.address,  //收货人地址
						linkman: this.defAddress.name,  //收货人姓名 
						linkPhone: this.defAddress.telephone,  //收货人电话
						chunkmoney: this.kuaiDiMoney,  //快递运费
						taxpoint: this.shuiMoney,  //发票税收
						zhifu: this.payNum,  //支付方式
						detailed: this.shopList,  //明细数组信息
						getWay: this.getWay,  //辨别是否 挂账
						orderid: this.payOrderid,  //订单id
						// #ifdef H5
						trade_type: 'MWEB',
						// #endif
						// #ifndef H5
						trade_type: 'NATIVE',
						// #endif
						//getApp().globalData.webUrl //成功返回页面
						//redirect_url:encodeURI(getApp().globalData.webUrl+'/h5/pages/order/orderpageinfo'),
						//'http://192.168.199.213:80'
						detailremark: '',   //明细备注
					},
					success: (res) => {
						this.payAgain = true;// 不允许形成新单子
						if(res.data.status ==0){
							this.isCreateOrder = true;
							this.payOrder = res.data.orderNum;
							if(this.Distinguish==1){
								var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
								var data = JSON.parse(wulala); //JSON字符串转对象
								data.shop=data.shop-this.shopList.length;
								uni.setStorageSync('shop',data.shop);
								let json = JSON.stringify(data);  //对象转字符串
								uni.setStorageSync('jsonList',json) //将shop数据库数量从新存储进去
							}
							let checkPayResult = {
								'payOrder': res.data.orderNum,
								'pmtNum': '',
								'webUrl': '',
								'isPayTrue':false,
								'sendPicture':true
							}
							 /* 1是微信,2是支付宝 */
							 let webUrl = '';
							if(this.payNum == 1 || this.payNum == 2){
								if(this.payNum == 1){
									webUrl = res.data.pay_link;
									checkPayResult.pmtNum = 1;
								}else{
									webUrl = res.data.pay_form;
									checkPayResult.pmtNum = 2;
								}
								checkPayResult.webUrl = webUrl;
								this.webData = checkPayResult;
								// #ifdef APP-PLUS
								uni.navigateTo({
									url: '../../pages/user/payWebView',
								})
								// #endif
								// #ifdef H5
								if(this.payNum == 1){
									uni.navigateTo({
										url: '../../pages/user/payWebView',
									})
								}else if(this.payNum == 2){ //不走payWevView
									let div = document.createElement('div')
									div.innerHTML = webUrl //此处form就是后台返回接收到的数据
									document.body.appendChild(div);
									document.forms[0].submit();
									setTimeout(()=>{
										this.payShow = true
									},1000)
								}
								// #endif
							}else{
								uni.navigateTo({
									url: 'balance?orderNum='+ res.data.orderNum +'&money='+res.data.money+'&amount='+res.data.amount+'&usable='+res.data.usable
								})
							}
						}
						else if(res.data.status == 1){
							uni.showToast({
								title: '订单异常！',
								duration: 1000,
								icon:'none'
							})
							setTimeout(()=>{
								uni.redirectTo({
									url: '/pages/order/orderpageinfo'
								});
							},1000)
						}
					},
					fail:(res)=>{
						uni.hideLoading()
						uni.showToast({title: '请求失败'+'错误码201',icon:"none"});
					}
				})
				// #endif
			},
			payResult() {
				this.payShow = false
				this.isChecked.select = true
			},
			onLoadFun(res,payType){
				if(res.data.status == 0){
					this.shopInfoMoney = res.data.total;  //商品总价
					this.figureid = res.data.figure[0].id;
					if(this.figureid == 1){  //向上取整
						this.subTotal = parseFloat(Math.ceil(res.data.total)).toFixed(2);  //给subTotal（总价）赋值
						this.TotalMoney = parseFloat(res.data.total).toFixed(2);  //给TotalMoney（商品总价）赋值
					}else if(this.figureid == 2){  //向下取整
						this.subTotal = parseFloat(Math.floor(res.data.total)).toFixed(2);  //给subTotal（总价）赋值
						this.TotalMoney = parseFloat(res.data.total).toFixed(2);  //给TotalMoney（商品总价）赋值
					}else if(this.figureid == 3){  //四舍五入
						this.subTotal = parseFloat(Math.round(res.data.total)).toFixed(2);  //给subTotal（总价）赋值
						this.TotalMoney = parseFloat(res.data.total).toFixed(2);  //给TotalMoney（商品总价）赋值
					}else{  //保留两位小数
						this.subTotal = parseFloat(res.data.total).toFixed(2);  //给subTotal（总价）赋值
						this.TotalMoney = parseFloat(res.data.total).toFixed(2);  //给TotalMoney（商品总价）赋值
					}
					this.shopList = res.data.shop;  //给shopList（商品信息列表）赋值
					if(res.data.address.length != 0){
						// if(res.data.address[0].patientia == 1){  //判断是否存在默认收货地址
						this.defAddress = res.data.address[0];  //给defAddress（默认收货地址）赋值
						this.addressMsg = true
						this.displayNone = false;
						// }else{
						// 	this.defAddress = res.data.address[0];  //给defAddress（默认收货地址）赋值
						// 	this.addressMsg = true
						// }
					}else{
						this.addressMsg = false;
						this.displayNone = true;
					}
					this.addressList = res.data.address;  //给addressList（地址列表信息）赋值
					this.logwayList = res.data.logway;  //给logwayList（物流方式列表信息）赋值
					this.payList = res.data.pay;  //给payList（支付方式列表）赋值
					this.kuaiDi = res.data.logway[0].wayname;  //默认快递方式
					this.kuaiDiMoney = parseFloat(res.data.logway[0].price).toFixed(2);  //默认快递方式运费
					this.logSubscript = res.data.logway[0].delivery;  //默认快递方式序号
					this.LogNameInfo = res.data.logway[0].declares;  //默认地址的描述
					this.logPrice = parseFloat(res.data.logway[0].price).toFixed(2);  //默认地址的价格
					this.invoTypeName = '不开发票';  //默认发票
					this.invoTypeNum = '2';   //默认是否开票value值
					this.shuiMoney = '0.00';  //默认发票税收
					this.paychenkName = res.data.pay[0].name;  //默认支付方式
					this.payNum = res.data.pay[0].fid;   //默认支付方式序号
					this.Balance = res.data.balance;  //该账户（余额）
					this.invoiceInfo.invoiceisShow = false;
					this.invoiceInfo.VATisShow = false;
					this.invoiceInfo.selectInvoice_type = 2;  //是否开票下标
					this.invoiceInfo.selectInvoTypeName = '不开发票';  //发票类型 名称
					this.invoiceInfo.selectFaPiaoNum = 0;  //公司还是个人
					// this.invoiceInfo.selectCorporateName = '';  //公司名称
					// this.invoiceInfo.selectTaxpayerNum = '';  //纳税人识别号
					// this.invoiceInfo.selectaddressPhone = '';  //电话和地址
					// this.invoiceInfo.selectopenBankNum = '';  //开户行及账户
					this.invoiceInfo.selectTaxpoint = '0.00';  //税点
					this.invoiceInfo.selectShuiMoney = parseFloat(0.00).toFixed(2);  //税费
					this.invoiceInfo.selectSubTotal = parseFloat(this.TotalMoney).toFixed(2);  //总价
					// if(payType == 3){  //我的订单（去支付点击过来的）
					// 	if(res.data.payData.length != 0){
					// 		if(res.data.payData.remark != null){
					// 			this.desc = res.data.payData.remark;  //订单主体备注
					// 		}
					// 		this.kuaiDi = res.data.logway[res.data.payData.delivery].wayname;  //快递方式
					// 		this.logchenkNum = res.data.payData.delivery;  //选择快递方式的列表
					// 		this.logPrice = parseFloat(res.data.payData.chunkmoney).toFixed(2);  //快递费用  (页面)
					// 		this.kuaiDiMoney = parseFloat(res.data.payData.chunkmoney).toFixed(2);  //快递费用  (弹出层)
					// 		if(res.data.payData.invoice_type != 2){
					// 			this.invoTypeName = res.data.fapiao[res.data.payData.invoice_type].name;  //默认发票 (页面)
					// 		}
					// 		this.taxpointMoney = parseFloat(res.data.payData.taxpoint).toFixed(2);  //税费 (页面)
					// 		this.invoiceInfo.invoiceisShow = false;
					// 		this.invoiceInfo.VATisShow = false;
					// 		this.invoiceInfo.selectInvoice_type = res.data.payData.invoice_type;  //是否开票下标
					// 		if(res.data.payData.invoice_type != 2){
					// 			this.invoiceInfo.selectInvoTypeName = res.data.fapiao[res.data.payData.invoice_type].name;  //发票类型 名称
					// 		}
					// 		this.invoiceInfo.selectFaPiaoNum = res.data.payData.invoice;  //公司还是个人
					// 		this.invoiceInfo.selectCorporateName = res.data.payData.title;  //公司名称
					// 		this.invoiceInfo.selectTaxpayerNum = res.data.payData.tax_code;  //纳税人识别号
					// 		this.invoiceInfo.selectaddressPhone = res.data.payData.address;  //电话和地址
					// 		this.invoiceInfo.selectopenBankNum = res.data.payData.bank;  //开户行及账户
					// 		if(res.data.payData.invoice_type != 2){
					// 			this.invoiceInfo.selectTaxpoint = res.data.fapiao[res.data.payData.invoice_type].taxpoint;  //税点
					// 		}
					// 		this.invoiceInfo.selectShuiMoney = parseFloat(res.data.payData.taxpoint).toFixed(2);  //税费
					// 		this.invoiceInfo.selectSubTotal = parseFloat(res.data.payData.total).toFixed(2);  //总价
					// 	}
					// }
				}
			},
		}, 
		onShow(e){
			// #ifndef MP-WEIXIN
				if(this.webData.isPayTrue==true){// 是否弹起完成支付弹窗
						this.payAgain = true;// 不允许形成新单子
						this.isChecked.window = true
						this.payShow = true;
						this.webData.isPayTrue = false;
				}
			// #endif
			
			// 判断是否存在地址 :不存在就显示提示  存在就将提示隐藏
			if(this.defAddress.addid == null){
				this.addressMsg = false;
			}else{
				this.addressMsg = true;
			}
		},
		// 进入页面加载数据
		onLoad(options) {
			uni.setNavigationBarTitle({ 
				title: '确认订单'
			})
			this.Distinguish = options.l;  //区分是用哪个页面过来进行支付的
			var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
			var data = JSON.parse(wulala); //JSON字符串转对象
			this.Signboard = data.Ident_Signboard;  //给Signboard 赋值最近更新
			this.Signguid = data.Ident_Signguid;  //给Signguid 赋值
			this.imgUrl = getApp().globalData.webUrl;  //图片访问IP
			
			if (options.l == 2){  //下单页 直接购买
				uni.request({
					url: getApp().globalData.webUrl+'/mobile/order/conOrder',
					method: 'GET',
					data: {
						Ident_Signboard: options.Ident_Signboard,  //令牌
						Ident_Signguid: options.Ident_Signguid,  //用户id
						long: options.long, //高
						kuan: options.kuan,  //宽
						clid: options.clid,  //材料id
						qty: options.qty,  //数量
						total: options.total,  //总价
						price: options.price,  //单价
						gyid: options.gyid,  //工艺id 
						gyname: options.gyname,  //工艺名称
						typeid: options.spid , //商品序号
						l: 2,  //标识：区分是购物车发起的支付还是下单页直接过去的
					},
					success: (res) => {
						this.isTest = res.data.isTest;
						this.onLoadFun(res,options.l);  //调用公共函数
					},
					fail:(res)=>{
						uni.hideLoading()
						uni.showToast({title: '请求失败'+'错误码201',icon:"none"});
					}
				})
			}else if(options.l == 1) {  //购物车过来
				uni.request({
					url: getApp().globalData.webUrl+'/mobile/order/conOrder',
					method: 'POST',
					data:{
						serial: options.serial,  //购物车选中的商品序号
						Ident_Signboard: this.Signboard,  //令牌
						Ident_Signguid: this.Signguid,  //用户id
					},
					success: (res) => {
						this.onLoadFun(res,options.l);  //调用公共函数
					},
					fail:(res)=>{
						uni.hideLoading()
						uni.showToast({title: '请求失败'+'错误码201',icon:"none"});
					}
				})
			}else{
				this.payOrderid = options.orderid;
				uni.request({
					url: getApp().globalData.webUrl+'/mobile/order/Payagain',
					method: 'POST',
					data: {
						Ident_Signboard: options.Ident_Signboard,  //令牌
						Ident_Signguid: options.Ident_Signguid,  //用户id
						orderid: options.orderid,  //订单id
					},
					success: (res) => {
						this.onLoadFun(res,options.l);  //调用公共函数
					},
					fail:(res)=>{
						uni.hideLoading()
						uni.showToast({title: '请求失败'+'错误码201',icon:"none"});
					}
				})
			}
		},
		onUnload(){// 用户离开此页面
		// #ifndef MP-WEIXIN
			route.comCheckout(this.isChecked.select,this.isChecked.window,this.webData); //自动轮询
		// #endif
		},
	}
</script>
<style scoped lang="scss">
	@import "../../common/uni.css";
	@import "../../common/iconfont.css";
	@import "../../common/css/useraddress.css";
	page{
		color: #333333;
		background-color: #F7F7F7;
	}
	
	.def{
		display: none;
	}
	/* 支付方式 */
	.paymentMethod{
		background: #FFFFFF;
		padding: 5px 0.5rem;
		border-bottom: 1px solid #F7F7F7;
	}
	/* 确定支付按钮 */
	.payFuKuan{
		width: 70%;
		font-size: 14px;
		font-weight: 600;
		text-align: right;
		margin-left: -1rem;
	}
	.OrderPayment{
		width: 30%;
		height: 99upx;
		line-height: 99upx;
		text-align: center;
		background-color: #FF0000;
		color: #FFF;
		font-size: 16px;
		font-weight: 600;
	}
	.dizhiMsg{
		display: none;
	}
	.addressMsg{
		/* color: #C3C3C3; */
		margin-top: 14px;
		position: absolute;
		left: 2rem;
		top: 12px;
	}
	.add-image {
		width: 10%;
		height: 10%;
		position: absolute;
		left: -1.5rem;
	}
	.add-image image {
		width: 50upx;
		height: 50upx;
	}
	/* 修改地址 */
	.XGactive{
		display: none;
	}
	/* 新建地址 */
	.textInput{
		width: 78%;
	}
	/* 确定 和 返回按钮 */
	.footer {
		position: fixed;
		bottom: 0upx;
		width: 94vw;
		padding: 0 4%;
		height: 99upx;
		border-top: solid 1upx #eee;
		background-color: #fff;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.btn {
		height: 80upx;
		border-radius: 40upx;
		overflow: hidden;
		display: flex;
		margin-right: -2%;
	}
	.GoBack,
	.BtnAddress {
		height: 80upx;
		padding: 0 138upx;
		color: #fff;
		display: flex;
		align-items: center;
		font-size: 0.7rem;
		letter-spacing: 0.2rem;
	}
	.GoBack {
		background-color: #dcdbdb;
	}
	 /* 收货地址 */
	.address_view{
		width: 100vw;
		padding: 0.4rem 0 1.2rem 0;
		background: #FFFFFF url(../../static/image/02.png) -7px bottom repeat-x;
		background-size: 64px 5px; 
		margin-bottom: 1rem; 
		height: 2.8rem; 
		position: relative; 
		line-height: 24px;
	}
	.jiantou{
		// color: #C3C3C3;
		position: absolute;
		right: 0;
		line-height: initial;
	}
	/* 商品视图 */
	.commodity_view{
		background-color: #FFFFFF;
		margin-top: 36upx;
	}
	.commodity_view .cd_tite{
		padding: 0.5rem;
		font-size: 0.8rem;
		font-weight: 600;
		border-bottom: #F7F7F7 solid 1px;
	}
	.cd_cont {
		display: flex;
		padding: 0.5rem;
		border-bottom: #F7F7F7 solid 1px;
	}
	.cd_cont .cd_cont_img{
		width: 30%;
		margin: 0 0 0 0.2rem;
	}
	.cd_cont .cd_cont_img>image {
		height: 5rem;
		width: 5rem;
		margin-top: 0.5rem;
		border-radius: 10upx ;
	}
	.cd_cont .cd_cont_content {
		width: 70%;
	}
	.cd_cont>view view text{
		color: #999999;
		font-size: 0.7rem;
	}
	.cd_cont uni-view {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.cd_cont .productName text{
		font-weight: 600;
		font-size: 0.8rem;
		color: #333333;
	}
	.cd_cont>view{
		margin-left: 0.8rem;
	}
	.money>text:nth-child(2){
		float: right;
	}
	/* 配送服务 的样式 */
	.delivery_view{
		height: 70vh;
		z-index: 999;
	}
	.delivery{
		background: #FFFFFF;
		padding: 5px 0.5rem;
		height: 6vh;
		border-bottom: #F7F7F7 solid 1px;
	}
	.delivery>view{
		font-size: 0.7rem;
		margin: 0px!important;
		flex-grow: 1;
		display: flex;
		height: 6vh;
		line-height: 6vh;
	}
	.delivery>view>text{
		flex-grow: 1;
		text-align: right;
		color: #999999;
	}
	/* 单据主体备注 */
	.remarks{
		padding: 0.1rem 0 0 0.5rem;
		background: #FFFFFF;
		border-bottom: 1px solid #F7F7F7 ;
	}
	.remarks text{
		font-size: 0.7rem;
	}
	/* 备注输入框 */
	.remarks>textarea{
		border-bottom: #F7F7F7 solid 1px;
		height:10vh;
		font-size: 0.7rem;
		width: 98%;
		background: #F7F7F7;
		z-index: 0;
	}
	.remarks>view{
		text-align: right;
		padding: 0 0.4rem 0 0;
		font-size: 0.5rem;
		color: #e4e2e2;
	}/* 配送方式选中样式 */
	.logcur{  
	    background-color: #FF0000;  
	    border: 1upx dotted #FF0000;  
	    color: #fff;  
	}  
	/* 订单金额信息 */
	.orderAmount{
		background: #FFFFFF;
		padding: 0px 0.5rem;
	}
	.orderAmount view{
		margin-bottom: 0.2rem;
	}
	.orderAmount .orderAmount_left {
		font-size: 0.8rem;
	}
	.orderAmount .orderAmount_right {
		font-size: 0.8rem;
		float: right;
		color: red;
	}
	.tomor{
		text-align:right;
		font-size:1rem;
		font-weight: 600;
	}
	.tomor>text{
		color: red;
		font-weight: 400;
	}
	.orderAmount view>button{
		background: #3884FF;
		color: #FFFFFF;
		margin-top: 1rem;
	}
	
	/* 物流配送服务视图 */
	.dv_mode{
		background: #FFF;
		padding: 0.5rem;
		padding-bottom: 0.8rem;
	}
	.dv_mode>text{
		display: block;
		font-size: 0.8rem;
		color: #666;
		padding: 3px 0.1rem;
	}
	.dv_mode view{
		display: inline-block;
		margin: 0.25rem 0.25rem;
	}
	.dv_mode view text{
		border: #C3C3C3 solid 1.25px;
		border-radius: 3px;
		padding: 0.1rem 0.25rem;
		font-size: 0.8rem;
		color: #C3C3C3;
	}
	/* 配送信息 */
	.dv_cont{
		padding: 0.5rem;
		color: #333;
		font-size: 0.8rem;
		border: 1px solid #F7F7F7;
		z-index: 999;
	}
	/* 底部配送费和确定按钮 */
	.dv_footer {
		position: fixed;
		bottom: 0upx;
		width: 100vw;
		padding: 0 6% 0 0;
		height: 99upx;
		border-top: solid 1upx #eee;
		background-color: #fff;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.dv_footer .dv_footer_taxpoint{
		margin: 0 0.5rem;
	}
	.dv_btn {
		height: 80upx;
		border-radius: 40upx;
		overflow: hidden;
		display: flex;
		margin-right: 4%;
	}
	.dv_Price{
		padding: 0 1rem;
	}
	.dv_GoBack,
	.dv_BtnAddress {
		height: 80upx;
		padding: 0 58upx;
		color: #fff;
		display: flex;
		align-items: center;
		font-size: 0.7rem;
		letter-spacing: 0.2rem;
	}
	.dv_GoBack {
		background-color: #dcdbdb;
	}
</style>
