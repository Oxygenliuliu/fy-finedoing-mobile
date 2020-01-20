<template>
	<view>
		<view class="modify"> 
			<view>
				<!--用户名-->
				<view class="flex-row uni-name" style="display: flex;flex-direction: row;">
					<view class="flex-view-item textName"><text>收货人</text></view>
					<view class="flex-view-item xxzddress"><input type="text" class="input-content" placeholder="请填写收货人" @input="name"></view>
				</view>
			</view>
			<view>
				<!--电话号码-->
				<view class="flex-row uni-name" style="display: flex;flex-direction: row;">
					<view class="flex-view-item textName"><text>联系电话</text></view>
					<view class="flex-view-item xxzddress"><input type="text" class="input-content" placeholder="请填写联系电话" @input="phone"></view>
				</view>
			</view>
			<view>
				<!--地址-->
				<view class="flex-row uni-name" style="display: flex;flex-direction: row;" @tap="showMulLinkageThreePicker">
					<view class="flex-view-item textName"><text>所在地区</text></view>
					<view class="flex-view-item textaddress"><input type="text" class="input-content" disabled="true" v-model="insertAddress" placeholder="请选择所在地区"></view>
					<view class="flex-view-item texticon"><i class="uni-icon uni-icon-arrowright"></i></view>
				</view>
			</view>
			<view>
				<!--详细地址-->
				<view class="flex-row uni-name" style="display: flex;flex-direction: row;">
					<view class="flex-view-item textName"><text>详细地址</text></view>
					<view class="flex-view-item xxzddress"><input type="text" class="input-content" placeholder="请填写详细地址" @input="detailed"></view>
				</view>
			</view>
			<!-- 按钮 -->
			<view class="uni-count end">
				<view class="uni-addBtn">
					<view class="addBtn" @tap="btnIstAddress">保  存</view>
				</view>
			</view>
		</view>
		<copyright></copyright>
		<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault" @onConfirm="onConfirm" @="" :pickerValueArray="pickerValueArray"></mpvue-picker>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault" @="" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>
<script>
	import route from "@/common/public.js"
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	import mpviePicker from '@/components/mpvue-picker/mpvuePicker.vue'
	import cityData from '@/common/city.data.js'
	import copyright from "@/components/customize/copyright.vue"
	export default{
		components: {
			'mpvue-city-picker':mpvueCityPicker,
			'mpvue-picker':mpviePicker,
			copyright
		},
		data(){
			return{
				mulLinkageTwoPicker: cityData,
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				pickerText: '',
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray:[],
				istName:"", //获取用户输入的收货人
				istPhone:"", //获取用户输入的联系电话
				istDetailed:"", //获取用户输入的详细地址
				insertAddress:"", //获取用户选择后的地址
				addressDetailed:"" ,//拼接后的完整地址
				opType: ''
			}
		},
		onLoad(options){
			this.opType = options.type
		},
		methods:{
			 showMulLinkageThreePicker() {
			    this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
			    this.pickerText = JSON.stringify(e)
				this.pickerText = JSON.parse(this.pickerText)
				this.insertAddress=this.pickerText.label;
			},
			name:function(evt){
				this.istName=evt.target.value;
			},
			phone:function(evt){
				this.istPhone=evt.target.value;
			},
			detailed:function(evt){
				this.istDetailed=evt.target.value;	
			},
			btnIstAddress(evt){
				if(this.istName==""||this.istPhone==""||this.istDetailed==""||this.insertAddress==""){
					uni.showToast({title:'请将信息填写完整，不允许为空',icon:'none'})
				}else if(!RegExp(/^[\u4E00-\u9FA5A-Za-z0-9]+$/).test(this.istName)){
					uni.showToast({title:"用户名只能包含中文，字母，数字",icon: "none"})
				}else if(!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/).test(this.istPhone)){
					uni.showToast({title:"手机号码格式不正确",icon: "none"})
				}else{
					var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
					var data = eval( '(' + wulala + ')' ); //JSON字符串转对象
					var Signboard = data.Ident_Signboard;  //给Signboard 赋值
					var Signguid = data.Ident_Signguid;  //给Signguid 赋值
					this.addressDetailed=this.insertAddress+" "+this.istDetailed;
					uni.request({
						url:getApp().globalData.webUrl+'/mobile/personal/createAdd',
						method:'GET',
						data:{
							Ident_Signboard: Signboard,
							Ident_Signguid: Signguid,
							name:this.istName,
							telephone:this.istPhone,
							address:this.addressDetailed
						},
						success: (res) => {
							let result = route.publicIf(res.data)
							if (result == false){
								return false;
							}
							if(res.data.status==0){
								uni.showToast({title:res.data.message,icon:'none'})
								
								if(this.opType != ''){
									uni.navigateTo({
										url: 'useraddress?type='+this.opType
									})
									return false
								}
								uni.navigateTo({
									url:'../user/useraddress'
								})
							}else{
								uni.showToast({title:'新增地址失败',icon:'none'})
							}
						},
						fail:(res)=>{
							uni.hideLoading()
							uni.showToast({title: '新增地址失败'+'错误码201',icon:"none"});
						}
					})
				}
			}
		}
	}
</script>

<style>
	@import "../../common/uni.css";
	.uni-name{
		border-bottom: #e3e3e3 solid 1px;
	}
	.textName{
		padding: 0 0.5rem;
		width: 16vw;
		height: 2.5rem;
		line-height: 2.5rem;
		color: #999;
		font-size: 0.7rem;
	}
	.biaoti{
		color: #999;
		margin-right: 6px;
	}
	.textCom{
		max-width: 30vw;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		height: 2.5rem;
		line-height: 2.5rem;
	}
	.textaddress{
		width: 70vw;
	}
	.texticon{
		color: #999;
		height: 2.5rem;
		line-height: 2.5rem;
	}
	.input-content{
		height: 2.5rem;
		line-height: 2.5rem;
		font-size: 0.7rem
	}
	.xxzddress{
		width: 80vw;
		display: inline-block;
	}
	/* 保存按钮 */
	.uni-count{
		width: 80vw;
		height: 40px;
		z-index: 999;
		position: absolute;
		bottom: 0.1rem;
		left: 2rem;
		border: 1px solid #e4393c;
		border-radius: 14rem;
		text-align: center;
	}
	.uni-addBtn{
		color: #FFF;
		font-size: 1rem;
		justify-content: center;
		align-items: center;
		display: inline-flex;
		height: 100%;
	}
	.addBtn{
		color: #FFF;
		font-size:16px;
	}
</style>
