<template>
	<view>
		<!-- 发票类型 -->
		<view class="invoiceType">
			<uni-collapse>
				<text class="titleInvo">发票类型</text>
				<view style="margin-top: 10px;"> 
					<view class="uni-list">
						<radio-group>
							<label class="uni-list-cell uni-list-cell-pd" @tap="selectType(0)" :class="{active:invoiceisShow}">
								<label class="radio">
									<radio value="r2" color="#ea3b3d" style="transform:scale(0.7)" :checked="typeNum==0"/>
								</label>
								<view>普通发票</view>
							</label>
							<label class="uni-list-cell uni-list-cell-pd" @tap="selectType(1)" :class="{active:VATisShow}">
								<label class="radio">
									<radio value="r2" color="#ea3b3d" style="transform:scale(0.7)" :checked="typeNum==1"/>
								</label>
								<view>增值税发票</view>
							</label>
							<label class="uni-list-cell uni-list-cell-pd" @tap="selectType(2)">
								<label class="radio" >
									<radio value="r2" color="#ea3b3d" style="transform:scale(0.7)" :checked="typeNum==2"/>
								</label>
								<view>不开票</view>
							</label>
						</radio-group>
					</view>
				</view>	
			</uni-collapse>
		</view>
		
		<!-- 发票抬头 -->
		<view class="invoiceType01 invoiceType" :class="{active:typeNum==2}">
			<uni-collapse>
				<text class="titleInvo">发票抬头</text>
				<view style="margin-top: 10px;">
					<view class="uni-list">
						<radio-group >
							<label class="uni-list-cell uni-list-cell-pd" @tap="selectTitle(2)">
								<view>
									<radio  class="radioIpt" value="r2" color="#ea3b3d" style="transform:scale(0.7)"  :checked="titleNum==2"/>
								</view>
								<view>企业</view>
							</label>
							<label class="uni-list-cell uni-list-cell-pd" :class="{active:typeNum==1}" @tap="selectTitle(1)">
								<view>
									<radio  class="radioIpt" value="r2" color="#ea3b3d" style="transform:scale(0.7)"  :checked="titleNum==1"/>
								</view>
								<view>个人</view>
							</label>
						</radio-group>
					</view>
				</view>	
			</uni-collapse>
		</view>
		
		<!-- 发票内容 -->
		<view class="enterprise invoiceType" :class="{active:typeNum==2}">
			<!-- 企业发票内容 -->
			<uni-collapse>
				<text class="titleInvo">发票内容</text>
				<view style="padding: 0.07rem 0.7rem 4rem 0.7rem;background: #FFFFFF;margin-top: 10px;">
					<view class="enterpriseContent">
						<text>公司名称</text>
						<input type="text" v-model="companyName">
					</view>
					<view class="enterpriseContent" :class="{active:titleNum==1}">
						<text>纳税人识别号</text>
						<input type="text" v-model="taxcode">
					</view>
					<view class="enterpriseContent" :class="{active:titleNum==1}">
						<text>地址,电话</text>
						<input type="text" v-model="address">
					</view>
					<view class="enterpriseContent" :class="{active:titleNum==1}">
						<text>开户行及账号</text>
						<input type="text" v-model="bankcode">
					</view>
				</view>
			</uni-collapse>
		</view>
		<view class="dv_footer">
			<view class="dv_footer_taxpoint">税点<text style="margin-right: 10px;">{{taxPoint}}</text>税费<text>￥ {{taxes}}</text></view>
			<view class="dv_btn">
				<view class="dv_GoBack" @tap="btnCancel()">取消</view>
				<view class="dv_BtnAddress end" @tap="btnOK()">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	import route from "@/common/public.js"
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	export default{
		components:{
			uniList,uniListItem,uniCollapse,uniCollapseItem
		},
		data(){
			return{
				Signboard:'',
				Signguid:'',
				prevPage:[],
				
				invoiceName:'不开票',//发票名
				address:'',
				bankcode:'',
				taxcode:'',
				companyName:'',
				typeNum:2,//发票类型：0普票，1增票，2为不开票
				titleNum:0,//发票抬头：0为不开票，1个人，2企业
				
				totalMoney:0,//总金额
				taxType:[],//发票类型及税率
				taxPoint:'0%',//税率
				taxes:'0.00',//税费
				
				invoiceisShow:true,//普通发票是否显示
				VATisShow:true,//增值税发票是否显示,
				flag:0 //0代表公司信息中存在发票信息，1代表不存在
			}
		},
		methods:{
			// 发票类型选择  num:参数选择的发票类型
			selectType(num){
				this.typeNum=num;
				if(num==0){
					this.invoiceName='普通发票'
					this.taxPoint=this.taxType[0].taxpoint;
					this.titleNum = 2
					this.taxes=((parseFloat(this.taxPoint)/100)*parseFloat(this.totalMoney)).toFixed(2);
				}else if(num==1){
					this.invoiceName='增值税发票'
					this.titleNum = 2
					this.taxPoint=this.taxType[1].taxpoint;
					this.taxes=((parseFloat(this.taxPoint)/100)*parseFloat(this.totalMoney)).toFixed(2);
				}else{
					this.invoiceName='不开票'
					this.titleNum = 0
					this.taxPoint='0%';
					this.taxes=(0).toFixed(2);
				}
			},
			//发票抬头选择
			selectTitle(num){
				this.titleNum=num;
			},
			//获取发票接口
			getInvoice(){
				var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
				var data = JSON.parse(wulala); //JSON字符串转对象
				this.Signboard = data.Ident_Signboard;  //给Signboard 赋值最近更新
				this.Signguid = data.Ident_Signguid;  //给Signguid 赋值
				uni.request({
					url: route.variable+'/mobile/order/get_invoices',
					method: 'GET',
					data:{
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
					},
					success: (res) => {
						if(res.data.status == 0){
							if(res.data.billing){
								this.companyName=res.data.billing.title
								this.bankcode=res.data.billing.bankcode
								this.taxcode=res.data.billing.taxcode
								this.address=res.data.billing.address
								this.taxType=res.data.invoice
								if(res.data.billing.typeNum){
									this.typeNum = res.data.billing.typeNum
								}
								if(res.data.billing.titleNum){
									this.titleNum = res.data.billing.titleNum
								}
								this.flag = res.data.flag
								switch (res.data.billing.typeNum){
									case 0:
										this.invoiceName = '普通发票'
										break;
									case 1:
										this.invoiceName = '增值税发票'
										break;
									default:
										this.invoiceName = '不开票'
										break;
								}
							}
							for (var i = 0; i < res.data.invoice.length; i++) {
								if(res.data.invoice[i].value==1){
									this.VATisShow=false
								}
								if(res.data.invoice[i].value==0){
									this.invoiceisShow=false
								}
							}
						}
					},
					fail: (res) => {
						uni.showToast({title: '请求失败'+'错误码201',icon:"none"});
					}
				})
			},
			btnOK(){
				if(this.titleNum==2){
					if(this.companyName == ''){
						uni.showToast({title: '公司名称不能为空',icon: 'none'});
						return false;
					}
					if(this.taxcode == ''){
						uni.showToast({title: '纳税人识别号不能为空',icon: 'none'});
						return false;
					}
					if(this.address == ''){
						uni.showToast({title: '地址、电话不能为空',icon: 'none'});
						return false;
					}
					if(this.bankcode == ''){
						uni.showToast({title: '开户行及账号不能为空',icon: 'none'});
						return false;
					}
				}else if(this.titleNum==1){
					if(this.companyName == ''){
						uni.showToast({title: '公司名称不能为空',icon: 'none'});
						return false;
					}
				}
				if(this.flag == 1){
					uni.request({
						url: route.variable+'/mobile/order/updInvoice',
						method: 'POST',
						data:{
							Ident_Signboard: this.Signboard,
							Ident_Signguid: this.Signguid,
							title:this.companyName,
							tax_code:this.taxcode,
							bank_code:this.bankcode,
							address:this.address
						},
						success: (res) => {
							console.log(res)
						},
						fail: (res) => {
							uni.showToast({title: '请求失败'+'错误码201',icon:"none"});
						}
					})
				}
				let arr=[];
					arr.invoiceisShow = this.invoiceisShow;
					arr.VATisShow = this.VATisShow;
					arr.selectInvoTypeName = this.invoiceName;  //发票类型 名称
					arr.selectInvoice_type = this.typeNum;  //是否开票下标
					arr.selectFaPiaoNum = this.titleNum;  //公司还是个人
					arr.selectCorporateName = this.companyName;  //公司名称
					arr.selectTaxpayerNum = this.taxcode;  //纳税人识别号
					arr.selectaddressPhone = this.address;  //电话和地址
					arr.selectopenBankNum = this.bankcode;  //开户行及账户
					arr.selectTaxpoint = this.taxPoint;  //税点
					arr.selectShuiMoney = this.taxes;  //税费
					arr.selectSubTotal = this.totalMoney;  //总价
					arr.taxType = this.taxType;//发票类型
					// console.log(arr)
					this.prevPage.myInvoice(arr);
					// uni.navigateBack({
					// 	delta: 1,
					// 	animationType: 'pop-out',
					// 	animationDuration: 200
					// });
					uni.navigateBack();
					return; 
			},
			btnCancel(){
				this.prevPage.myInvoice(this.prevPage.invoiceInfo);
				// uni.navigateBack({
				// 	delta: 1,
				// 	animationType: 'pop-out',
				// 	animationDuration: 200
				// });
				uni.navigateBack();
				return; 
			}
		},
		onLoad(options) {
			let pages = getCurrentPages();
			let prevPage = pages[pages.length - 2];  
			this.prevPage=prevPage
			// console.log(prevPage)
			// console.log(prevPage.invoiceInfo)
			if(prevPage.TotalMoney){
				this.totalMoney = prevPage.TotalMoney
			}
			
			if(prevPage.invoiceInfo.selectCorporateName){
				// console.log(prevPage.invoiceInfo)
				this.invoiceisShow = prevPage.invoiceInfo.invoiceisShow;
				this.VATisShow = prevPage.invoiceInfo.VATisShow;
				this.invoiceName = prevPage.invoiceInfo.selectInvoTypeName;  //发票类型 名称
				this.typeNum = prevPage.invoiceInfo.selectInvoice_type;  //是否开票下标
				this.titleNum = prevPage.invoiceInfo.selectFaPiaoNum;  //公司还是个人
				this.companyName = prevPage.invoiceInfo.selectCorporateName;  //公司名称
				this.taxcode = prevPage.invoiceInfo.selectTaxpayerNum;  //纳税人识别号
				this.address = prevPage.invoiceInfo.selectaddressPhone;  //电话和地址
				this.bankcode = prevPage.invoiceInfo.selectopenBankNum;  //开户行及账户
				this.taxPoint = prevPage.invoiceInfo.selectTaxpoint;  //税点
				this.taxes = prevPage.invoiceInfo.selectShuiMoney;  //税费
				this.totalMoney = prevPage.invoiceInfo.selectSubTotal;  //总价
				this.taxType = prevPage.invoiceInfo.taxType;//发票类型
			}else{
				this.getInvoice();
			}
		}
	}
</script>

<style>
	@import "../../common/uni.css";
	@import "../../common/iconfont.css";
	page{
		color: #333333;
		background-color: #FFF;
	}
	.active{
		display: none;
	}
	.titleInvo{
		background-color: #f1f1f1;
		padding: 0.4rem 0 0 0.8rem;
		font-size: 14px;
	}
	.delivery_view{
		height: 70vh;
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
	/* radio按钮的样式 */
	.uni-list-cell {
		justify-content: flex-start
	}
	.uni-list::before,.uni-list::after,.uni-list-cell::before,.uni-list-cell::after,.uni-collapse::before,.uni-collapse::after{
		background: #FFFFFF;
	}
	.uni-list[data-v-1c42fea2]::before{
		background-color: none !important;
		height: 0 !important;
	}
	.uni-collapse[data-v-719bab91]:before{
		background-color: none !important;
		height: 0px !important;
	}
	.uni-list[data-v-1c42fea2]:after{
		background-color: none !important;
		height: 0px !important;
	}
	.uni-list-cell[data-v-1c42fea2]::after{
		position: none !important;
		height: 0px !important;
	}
	.uni-collapse .uni-collapse-cell__title{
		background: #ffffff;
		border-bottom: 1px #F7F7F7 solid;
	}
	.uni-list-cell-pd {
		padding: 5px 12px;
	}
	
	/* 发票类型 */
	.invo{
		display: none;
	}
	/* 企业发票内容 */
	.enterprise{
		width: 100%;
		/* height: 300px; */
	}
	.enterpriseContent{
		font-size: 0.7rem;
		height: 46px;
		border-bottom: 1px solid #F7F7F7;
		line-height: 46px;
	}
	.enterpriseContent text{
		text-align: center;
		width: 30%;
		display: inline-block;
		height: 46px;
		line-height: 46px;
	}
	.enterpriseContent input{
		width: 69%;
		height: 38px;
		line-height: 38px;
		float: right;
		background-color: #F7F7F7;
		margin-top: 0.2rem;
	}
	.uni-collapse[data-v-719bab91]:after{
		content: none;
	}
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
