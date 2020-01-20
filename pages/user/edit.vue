<template>
	<view>
		<!-- #ifdef MP-WEIXIN --> 
				<my-header @toBack='toBack'></my-header>
		<!-- #endif -->
		<view class="modify"> 
			<view>
				<!--用户名-->
				<view class="flex-row uni-name" style="display: flex;flex-direction: row;">
					<view class="flex-view-item textName"><text>收货人</text></view>
					<view class="flex-view-item xxzddress"><input type="text" class="input-content" v-model="upName" placeholder="请填写收货人" @input="showMaskCage"></view>
				</view>
			</view>
			<view>
				<!--电话号码-->
				<view class="flex-row uni-name" style="display: flex;flex-direction: row;">
					<view class="flex-view-item textName"><text>手机号</text></view>
					<view class="flex-view-item xxzddress"><input type="text" class="input-content" v-model="upPhone" @blur="VerInfoPhone" placeholder="请填写手机号"  @input="showMaskCage"></view>
				</view>
			</view>
			<view>
				<!--地址-->
				<view class="flex-row uni-name" style="display: flex;flex-direction: row;" @tap="showMulLinkageThreePicker">
					<view class="flex-view-item textName"><text>所在地区</text></view>
					<view class="flex-view-item textaddress"><input type="text" class="input-content" disabled="true" v-model="upAddress" placeholder="请选择收货地址" @input="showMaskCage"></view>
					<view class="flex-view-item texticon"><i class="uni-icon uni-icon-arrowright"></i></view>
				</view>
			</view>
			<view>
				<!--详细地址-->
				<view class="flex-row uni-name" style="display: flex;flex-direction: row;">
					<view class="flex-view-item textName"><text>详细地址</text></view>
					<view class="flex-view-item xxzddress"><input type="text" class="input-content" v-model="upDeDetailed" placeholder="请填写详细地址" @input="showMaskCage"></view>
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
				<view @tap="btnIstAddress" class="uni-addBtn">保 存</view>
			</view>
		</view>
		<!-- 地址弹出框 -->
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" @onChange="onChange"></mpvue-city-picker>
		<mask v-if="showMask"></mask>
	</view>
</template>

<script>
	import route from "@/common/public.js"
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	import mpviePicker from '@/components/mpvue-picker/mpvuePicker.vue'
	// 引入自定义导航栏
	import header from '@/components/header/header.vue'
	export default {
		name:'uni-address',
		components: {
			'mpvue-city-picker':mpvueCityPicker,
			'mpvue-picker':mpviePicker,
			'my-header': header
		},
		data() {
			return {
				Signboard:'',
				Signguid:'',
				//mulLinkageTwoPicker: cityData,
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				pickerText: '',
				pickerValueDefault: [0,0,0],
				pickerValueArray:[],
				upName:"", //修改的名字
				upPhone:"", //修改的电话
				upAddress:"", //修改的地址
				upDeDetailed:"", //修改的详细地址
				patientia:0, //是否设置为默认地址
				addressId:"", //地址序号
				judgeItems:"" ,//原数据的存入 用于进行判断
				editType:'', //判断是修改还是新增
				operationNum:0, //操作判断
				did:'',//新增时返回的id
				showMask:false, //遮罩层的显示隐藏
			};
		},
		
		onBackPress(options) { //监听返回
		console.log('返回')
			if(this.showMask) {
				uni.showModal({
					title: '提示',
					content: '是否要保存已编辑的信息?',
					confirmColor:'#E93B3D',
					success: (res)=> {
						if (res.confirm) {
							if(this.editType=='edit'){
								this.upInformation();
							}else{
								this.InsertAds();
							}
						}else{
							this.show=false;
							uni.navigateBack();
						}
					}
				});
				this.showMask = false;  
				return true; 
			}else{
				 if (options.from === 'navigateBack'||options.from === 'backButton') {
					 return false;  
				}
				this.showMask = false;
				this.back();
				return true; 
			}
		},
		methods:{
			onChange(){ //地址改变触发
				this.showMask=true;
			},
			showMaskCage(){ //change事件，用于给遮罩层赋值
				this.showMask=true;
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			},		
			prevPageFun(){ //向useraddress传回参数
				let pages = getCurrentPages();
				let prevPage = pages[pages.length - 2];  
				let arr={};
				arr.operationNum=this.operationNum;
				if(arr.operationNum==0||arr.operationNum==2){ //判断操作，0是修改，2是新增
					if(arr.operationNum==2){ //如果是新增操作，要加上id
						arr.addid=this.did;
					}else{
						arr.addid=this.addressId;
					}
					arr.name=this.upName;
					arr.telephone=this.upPhone;
					arr.address=this.upAddress+' '+this.upDeDetailed;
					arr.patientia=this.patientia;
				}
				// #ifdef H5
				prevPage.myCallBack(arr)
				// #endif
				// #ifndef H5
				prevPage.$vm.myCallBack(arr)
				// #endif
				
			},
			InsertAds(){ //新增地址信息
				this.showMask=false;
				if(this.upName==""||this.upPhone==""||this.upAddress==""||this.upDeDetailed==""){
					uni.showToast({title:'请将信息填写完整，不允许为空',icon:'none'})
				}else if(!RegExp(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/).test(this.upName)){
					uni.showToast({title:"用户名只能由中英文、数字或下划线组成",icon: "none"})
				}else if(!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/).test(this.upPhone)){
					uni.showToast({title:"手机号码格式不正确",icon: "none"})
				}else if(!RegExp(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/).test(this.upDeDetailed)){
					uni.showToast({title:"详细地址中不能包含特殊字符",icon: "none"})
				}else{
					this.addressDetailed=this.upAddress+" "+this.upDeDetailed;   //拼接：所在地址+详细地址
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
									title:'保存成功',
									icon:'none'
								})
								this.$emit("change",-1);
								this.operationNum=2;
								this.did=res.data.did;
								this.prevPageFun(); //调用将参数传回到userAddress的函数
								uni.navigateBack();
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
			// 新增地址 保存按钮
			btnIstAddress(e){
				this.InsertAds(); //调用新增地址函数
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
				this.showMask=true;
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
										_that.$emit("change",_that.addressId);
										uni.showToast({
											title:'地址删除成功',icon:'none'
										})
										_that.operationNum=1;
										_that.prevPageFun();
										uni.navigateBack();
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
							uni.setNavigationBarTitle({
								title: '地址管理'
							})
						}
					}
				});
			},
			/* 修改地址信息 修改默认地址所需调用的接口 */
			upInformation(){
				this.showMask=false;
				this.dtlAddress=this.upAddress+" "+this.upDeDetailed;
				//判断现有数据是否有修改 如果有修改就调用修改接口，如果没有修改就不调用修改接口
				if(this.judgeItems.name!=this.upName||this.judgeItems.telephone!=this.upPhone||this.judgeItems.address!=this.dtlAddress||this.judgeItems.patientia!=this.patientia){
					if(this.upName == "" || this.upPhone == "" || this.upAddress == "" || this.upDeDetailed == ""){
						uni.showToast({
							title:'请将信息填写完整,不允许为空',icon:'none'
						})
					}else if(!RegExp(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/).test(this.upName)){
						uni.showToast({
							title:"用户名只能由中英文、数字或下划线组成",icon: "none",
						})
					}else if(!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/).test(this.upPhone)){
						uni.showToast({
							title:"手机号码格式不正确",icon: "none"
						})
					}else if(!RegExp(/^[\u4E00-\u9FA5A-Za-z0-9_]+$/).test(this.upDeDetailed)){
					uni.showToast({title:"详细地址中不能包含特殊字符",icon: "none"})
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
										title:'修改成功',icon:'none'
									})
									this.$emit("change",-1);
									this.operationNum=0; //操作参数
									this.prevPageFun(); //调用操作判断函数，将参数传回userAddress页面
									uni.navigateBack(); //关闭当前页面，返回到useraddress
								}else{
									uni.showToast({
										title:'信息修改失败',icon:'none'
									})
								}
							},
							fail:(res)=>{
								uni.hideLoading()
								uni.showToast({title: '设置默认地址失败'+'错误码201',icon:"none"});
							}
						})
					}
				}else{
					uni.navigateBack();
				}
			},
			/* 修改中的保存按钮 ----点击保存按钮触发的事件 */
			btnAddress(evt){
				this.upInformation();
			},
			// 编辑地址的显示
			showMulLinkageThreePicker() {
			    this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
			    this.pickerText = JSON.stringify(e)
				this.pickerText = JSON.parse(this.pickerText)
				this.upAddress=this.pickerText.label;
			},
			toBack(){
				if(this.showMask) { // 小程序左上角返回按钮无法监听
				console.log('取消',1)
					uni.showModal({
						title: '提示',
						content: '是否要保存已编辑的信息?',
						confirmColor:'#E93B3D',
						success: (res)=> {
							if (res.confirm) {
								if(this.editType=='edit'){
									this.upInformation();
								}else{
									this.InsertAds();
								}
							}else{
								this.back();
								this.showMask = false;
								this.show = false;
								return true; 
							}
						}
					});
					this.showMask = false;  
					return true; 
				}else{
					this.back();
					this.showMask = false;
					return true; 
				}
			}
		},
		onLoad:function(e) {
			var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
			var data = JSON.parse(wulala); //JSON字符串转对象
			this.Signboard = data.Ident_Signboard;  //给Signboard 赋值最近更新
			this.Signguid = data.Ident_Signguid;  //给Signguid 赋值
			//获取传递过来的参数
			this.editType = e.type;
			if(e.type=='edit'){ //判断是修改的话才进来赋值将数据绑定在页面上
				let pages = getCurrentPages();
				let prevPage = pages[pages.length - 2];
				let addressList2 = '',addressList3 = '';
				// prePage.$vm
				// #ifdef H5
				addressList2=prevPage.addressList[prevPage.indexNum];
				// #endif
				// #ifndef H5
				// 小程序app调用前一个页面的数据时 需要添加$vm
				addressList3 = prevPage.$vm.addressList[prevPage.$vm.indexNum];
				// #endif
				let addressList = addressList2 || addressList3;
				this.judgeItems = addressList;
				this.upName = addressList.name;
				this.upPhone = addressList.telephone;
				this.patientia = addressList.patientia;
				this.addressId = addressList.addid;
				this.upAddress = addressList.address.substring(0,addressList.address.indexOf(' '));
				this.upDeDetailed = addressList.address.substring(addressList.address.indexOf(' ')+1);
				
			}
		},
		mounted(){
			// #ifndef MP-WEIXIN
			if (window.history && window.history.pushState) {
				history.pushState(null, null, document.URL);
				window.addEventListener('popstate', this.toBack, false);
			}
			// #endif
		
		},
		destroyed(){
			// #ifndef MP-WEIXIN
				window.removeEventListener('popstate', this.toBack, false);
			// #endif
		},
	}
</script>

<style>
@import "../../common/css/publicAdd.css";
/* #ifdef MP-WEIXIN */
	.modify{
		margin-top: 110px;
		position: relative;
	}
/* #endif */

	.active{
		display: none;
	}
</style>
