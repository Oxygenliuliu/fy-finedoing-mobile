<template name="uni-address">
	<!-- 修改地址 -->
	<view :class="{ active: isActive }">
		<view class="modify"> 
			<view>
				<!--用户名-->
				<view class="flex-row uni-name" style="display: flex;flex-direction: row;">
					<view class="flex-view-item textName"><text>收货人</text></view>
					<view class="flex-view-item xxzddress"><input type="text" class="input-content" v-model="upName" placeholder="请填写收货人"></view>
				</view>
			</view>
			<view>
				<!--电话号码-->
				<view class="flex-row uni-name" style="display: flex;flex-direction: row;">
					<view class="flex-view-item textName"><text>手机号</text></view>
					<view class="flex-view-item xxzddress"><input type="text" class="input-content" v-model="upPhone" @blur="VerInfoPhone" placeholder="请填写手机号"></view>
				</view>
			</view>
			<view>
				<!--地址-->
				<view class="flex-row uni-name" style="display: flex;flex-direction: row;" @tap="showMulLinkageThreePicker">
					<view class="flex-view-item textName"><text>所在地区</text></view>
					<view class="flex-view-item textaddress"><input type="text" class="input-content" disabled="true" v-model="upAddress" placeholder="请选择收货地址"></view>
					<view class="flex-view-item texticon"><i class="uni-icon uni-icon-arrowright"></i></view>
				</view>
			</view>
			<view>
				<!--详细地址-->
				<view class="flex-row uni-name" style="display: flex;flex-direction: row;">
					<view class="flex-view-item textName"><text>详细地址</text></view>
					<view class="flex-view-item xxzddress"><input type="text" class="input-content" v-model="upDeDetailed" placeholder="请填写详细地址"></view>
				</view>
			</view>
			
			<view  v-if="(editType=='edit'?true:false)">
				<!--详细地址-->
				<view class="flex-row uni-name" style="display: flex;flex-direction: row;">
					<view class="flex-view-item" style="padding: 0.6rem 0.5rem;color: #999;"><text>设置默认地址</text></view>
					<view class="flex-view-item texticon" style="margin-left: 10rem;"><switch color="#FF0000" :checked="(patientia == 1 ? true : false)" @change="isDefaultChange" /></view>
				</view>
			</view>
			<view class="footer" v-if="(editType=='edit'?true:false)">
				<view class="btn">
					<view class="GoBack" @tap="shanChu(addressId)">删 除</view>
					<view class="BtnAddress end" @tap="btnAddress">保 存</view>
				</view>
			</view>
			<view class="uni-count end" v-if="(editType=='add'?true:false)">
				<view class="uni-addBtn">
					<view class="addBtn" @tap="btnIstAddress">保  存</view>
				</view>
			</view>
		</view>
		<!-- 地址弹出框 -->
		<!-- <mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault" @onConfirm="onConfirm" @="" :pickerValueArray="pickerValueArray"></mpvue-picker>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault" @="" @onConfirm="onConfirm"></mpvue-city-picker> -->
		<!-- <mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault" @onConfirm="onConfirm" :pickerValueArray="pickerValueArray"></mpvue-picker> -->
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import route from "@/common/public.js"
	import mpvueCityPicker from '../mpvue-citypicker/mpvueCityPicker.vue'
	import mpviePicker from '../mpvue-picker/mpvuePicker.vue'
	import cityData from '../../common/city.data.js'
	export default {
		name:'uni-address',
		components: {
			'mpvue-city-picker':mpvueCityPicker,
			'mpvue-picker':mpviePicker,
			'cityData':cityData
		},
		props:{
			editType: '',  //区分 是 编辑地址 还是新增地址
		},
		data() {
			return {
				Signboard:'',
				Signguid:'',
				mulLinkageTwoPicker: cityData,
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				pickerText: '',
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0,0,0],
				pickerValueArray:[],
				
				isActive:true,	//修改地址显示与隐藏
				upName:"", //修改的名字
				upPhone:"", //修改的电话
				upAddress:"", //修改的地址
				upDeDetailed:"", //修改的详细地址
				patientia:0, //是否设置为默认地址
				addressId:"", //地址序号
				judgeItems:"" ,//原数据的存入 用于进行判断
				showMask: true,
			};
		},
		methods:{
			// 新增地址 保存按钮
			btnIstAddress(e){
				if(this.upName==""||this.upPhone==""||this.upAddress==""||this.upDeDetailed==""){
					uni.showToast({
						title:'请将信息填写完整，不允许为空',
						icon:'none'
					})
				}else if(!RegExp(/^[\u4E00-\u9FA5A-Za-z0-9]+$/).test(this.upName)){
					uni.showToast({
						title:"用户名只能包含中文，字母，数字",
						icon: "none"
					})
				}else if(!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/).test(this.upPhone)){
					uni.showToast({
						title:"手机号码格式不正确",
						icon: "none"
					})
				}else{
					this.addressDetailed=this.upAddress+" "+this.upDeDetailed;   //拼接：所在地址+详细地址
					console.log(this.addressDetailed);
					uni.request({
						url:getApp().globalData.webUrl+'/mobile/personal/createAdd',
						method:'GET',
						data:{
							Ident_Signboard: this.Signboard,
							Ident_Signguid: this.Signguid,
							name:this.upName,
							telephone:this.upPhone,
							address:this.addressDetailed
						},
						success: (res) => {
							let result = route.publicIf(res.data)
							if (result == false){
								return false;
							}
							if(res.data.status==0){
								uni.showToast({
									title:res.data.message,
									icon:'none'
								})
								this.isActive=true;
								this.$emit("change",-1);
							}else{
								uni.showToast({
									title:'新增地址失败',
									icon:'none'
								})
							}
						},
						fail:(res)=>{
							uni.hideLoading()
							uni.showToast({title: '新增地址失败'+'错误码201',icon:"none"});
						}
					})
				}
			},
			//失去焦点时验证手机号
			VerInfoPhone(){
				if(!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/).test(this.upPhone)){
					uni.showToast({
						title:'手机号码格式不正确',
						icon:'none'
					})
				}
			},
			/* 判断是否将地址设置成默认地址 true-设为默认  false-没设为默认*/
			isDefaultChange(e){
				if(e.detail.value==true){
					this.patientia=1;
				}else{
					this.patientia=0;
				}
			},
			/* 点击删除图标触发的事件 */
			shanChu(evt){
				let _that = this;
				uni.showModal({
					title: '提示',
					content: '是否删除此条地址信息？',
					confirmColor:'#E93B3D',
					success: function (res) {
						if (res.confirm) {
							//当用户点击确定,便调用删除地址的接口
							uni.request({
								url:getApp().globalData.webUrl+'/mobile/personal/deleteAdd',
								method:'GET',
								data:{
									addid:_that.addressId,
									Ident_Signboard:_that.Signboard,
									Ident_Signguid: _that.Signguid
								},
								success: (res) => {
									if(res.data.status==0){
										_that.isActive=true;
										_that.$emit("change",_that.addressId);
										// _that.$refs.useraddress.onAddress();
										uni.setNavigationBarTitle({
											title: '地址管理'
										})
									}else{
										uni.showToast({
											title:'地址删除失败',
											icon:'none'
										})
									} 
								},
								fail:(res)=>{
									uni.hideLoading()
									uni.showToast({title: '地址删除失败'+'错误码201',icon:"none"});
								}
							})
							
						} else if (res.cancel) {
							/* _that.dltAds = false;
							_that.upIfmtn=false;
							_that.isActive = true;
							_that.isActives = false; */
							uni.setNavigationBarTitle({
								title: '地址管理'
							})
						}
					}
				});
			},
			/* 修改地址信息 修改默认地址所需调用的接口 */
			upInformation(){
				this.dtlAddress=this.upAddress+" "+this.upDeDetailed;
				//判断现有数据是否有修改 如果有修改就调用修改接口，如果没有修改就不调用修改接口
				if(this.judgeItems.name!=this.upName||this.judgeItems.telephone!=this.upPhone||this.judgeItems.address!=this.dtlAddress||this.judgeItems.patientia!=this.patientia){
					if(this.upName == "" || this.upPhone == "" || this.upAddress == "" || this.upDeDetailed == ""){
						uni.showToast({
							title:'请将信息填写完整,不允许为空',
							icon:'none'
						})
					}else if(!RegExp(/^[\u4E00-\u9FA5A-Za-z0-9]+$/).test(this.upName)){
						uni.showToast({
							title:"用户名只能包含中文，字母，数字",
							icon: "none"
						})
					}else if(!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/).test(this.upPhone)){
						uni.showToast({
							title:"手机号码格式不正确",
							icon: "none"
						})
					}else{
						uni.request({
							url:getApp().globalData.webUrl+'/mobile/personal/updateAdd',
							method:'GET',
							data:{
								addid:this.addressId,
								name:this.upName,
								telephone:this.upPhone,
								address:this.dtlAddress,
								Ident_Signboard: this.Signboard,
								Ident_Signguid: this.Signguid,
								patientia:this.patientia
							},
							success: (res) => {
								if(res.data.status==0){
									uni.showToast({
										title:res.data.message,
										icon:'none'
									})
									// this.$refs.useraddress.onAddress();
									// this.onAddress();
									this.isActive=true;
									// 
									this.$emit("change",-1);
									// this.isActives=false;
								}
							},
							fail:(res)=>{
								uni.hideLoading()
								uni.showToast({title: '设置默认地址失败'+'错误码201',icon:"none"});
							}
						})
					}
				}
			},
			/* 修改中的保存按钮 ----点击保存按钮触发的事件 */
			btnAddress(evt){
				this.upInformation();
			},
			// 隐藏 
			hide(){
				this.isActive = true;
				console.log(this.isActive)
			},
			showMaskFun(){
				return {'name':this.upName,'telephone':this.upPhone,'patientia':this.patientia,'address':this.upAddress+' '+this.upDeDetailed}
			},
			// 编辑地址的显示
			show(e,token,guid) {
			    setTimeout(() => {
					if (this.editType == 'edit'){
						this.judgeItems = e;
						this.upName = e.name;
						this.upPhone = e.telephone;
						this.patientia = e.patientia;
						this.addressId = e.addid;
						this.upAddress = e.address.substring(0,e.address.indexOf(' '));
						this.upDeDetailed = e.address.substring(e.address.indexOf(' ')+1);
					}else{
						this.judgeItems = '';
						this.upName = '';
						this.upPhone = '';
						this.patientia = '';
						this.addressId = '';
						this.upAddress = '';
						this.upDeDetailed = '';
					}
					this.Signboard = token;
					this.Signguid = guid;
					this.isActive = false;
			    }, 0);
			},
			showMulLinkageThreePicker() {
			    this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
			    this.pickerText = JSON.stringify(e)
				this.pickerText = JSON.parse(this.pickerText)
				this.upAddress=this.pickerText.label;
			},
		},
	}
</script>

<style>
	@import "../../common/css/publicAdd.css";
	.active{
		display: none;
	}
</style>
