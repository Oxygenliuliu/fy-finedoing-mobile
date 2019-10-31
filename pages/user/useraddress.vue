<template>
	<view>
		<view>
			<scroll-view  :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scroll="scroll" >
				 <!-- 地址列表 -->
				<view class="flex-row uni-bgc" style="display: flex;flex-direction: row;" v-for="(items, indexs) in addressList" :key="indexs" :data-addid='(items.addid)'>
					<view class="flex-view-item" style="width: 86%;"  @tap="selectAddress(items,indexs)">
						<view class="uni-addressRight">
							<view class="uni-addressName"><text>{{items.name}}</text></view>
							<view class="uni-sddressPhone"><text>{{items.telephone}}</text><text v-if="items.patientia==1" class="default">默认</text></view>
						</view>
						<view class="address">{{items.address}}</view>
					</view>
					<view class="moren" @tap="xiuGai(items,indexs)">
						<text class="iconfont icon-xiugaifuzhi"></text>
					</view>
				</view>
			</scroll-view>
			<view class="uni-count end" @tap="addressNew">
				<view class="uni-addBtn">新 建 地 址</view>
			</view>
		</view>
		<!-- <uni-address ref="uniaddress" @change="checkPj" :editType="(editType)"></uni-address> -->
		<mask v-if="showMask"></mask>
	</view>
</template>

<script>
	import route from "@/common/public.js"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	import uniAddress from "@/components/uni-address/uni-address.vue"
	export default {
		components: {
			uniAddress,
			uniPopup,
			uniIcon,
		},
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				Signboard:'',
				Signguid:'',
				addressList: '',	//地址列表
				showMask:false, //遮罩层的显示隐藏
				isSelect: false  ,
				indexNum:0, //选中地址的下标
				indexNumber:null, //数组下标
				prevPage:[], //获取页面页码
			}
		},
		methods: {
			myCallBack(val){},
			selectAddress(item,indexNum){
				if(!this.isSelect){
					this.xiuGai(item,indexNum);
					return false;
				}
				let arr=[];
				arr.addid = item.addid;  //地址编号
				arr.address = item.address;  //收件人地址
				arr.name = item.name;  //收件人姓名
				arr.patientia = item.patientia;  //是否默认地址
				arr.telephone = item.telephone;  //收件人电话
				this.prevPage.myAddressBack(arr);
				uni.navigateBack()
				this.addressMsg = false;
				return;
			},
			// 页面滑动
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			back() {
				uni.backbutton({
					detail:1
				})
	        },
			/* 设为默认地址 */
			dftAddress(evt){
				this.blnAddress=evt;
			},
			addressNew(){ //新增地址
				uni.navigateTo({
					url:"../user/edit?type=add"
				})
				
				this.myCallBack=function(val){ //获取传回来的数据并添加到addressList里面
					if(val.operationNum==2){
						this.addressList.push(val);
					}
					console.log("新增后的地址列表");
					console.log(this.addressList);
				}
			},
			/* 点击编辑图标触发的事件 (修改事件)*/
			xiuGai(row,indexNum){
				let _that = this;
				_that.indexNum=indexNum; //当前选中数据的下标
				uni.navigateTo({
					url:"../user/edit?type=edit"
				})
				_that.myCallBack=function(val){
					console.log("查看返回的数据");
					console.log(val);
					if(val.operationNum==0){ //operationNum是判断操作的参数，等于0是执行修改操作
						var det = _that.addressList[indexNum].patientia; //当前这条数据的原默认值
						_that.$set(_that.addressList,indexNum,val); //给addressList重新赋值
						if (indexNum != 0){
							if(val.patientia==1 && det == 0){ //判断传过来的参数是否是设为1（默认）且当前数据不是默认
								// if(_that.addressList.length!=1){ //当前数据不为空时进来，进行数据对换  _that.indexNumber!=null
									// this.$set(this.addressList,this.indexNumber,temp);
									_that.addressList[0].patientia=0;
									var temp = _that.addressList[0];
									_that.addressList[0] = _that.addressList[indexNum];
									_that.addressList[indexNum] = temp;
									_that.indexNumber=0;
								// }
							}
						}
						
					}
					//操作判断 等于1就说明执行删除操作
					if(val.operationNum==1){
						this.addressList.splice(indexNum,1);
					}
				}
			},
			// 获取地址信息接口
			onAddress(){
				uni.request({
					url: route.variable+'/mobile/personal/getAddress',
					method: 'GET',
					data:{ 
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid
					},
					success: (res) => {
						this.addressList = res.data.address;	//给地址addressList赋值
						if(this.addressList.length>0){
							if(this.addressList[0].patientia==1){
								this.indexNumber=0;
							}
						}
					},
					fail:(res)=>{
						uni.hideLoading()
						uni.showToast({title: '地址删除失败'+'错误码201',icon:"none"});
					}
				})
			},
		},
		onLoad:function(options){
			let pages = getCurrentPages();
			let prevPage = pages[pages.length - 2];  
			this.prevPage = prevPage
			
			let select=uni.getStorageSync('select');
			if(select=='select'){
				this.isSelect = true;
				uni.removeStorageSync('select');
			}
			var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
			var data = JSON.parse(wulala); //JSON字符串转对象
			this.Signboard = data.Ident_Signboard;  //给Signboard 赋值
			this.Signguid = data.Ident_Signguid;  //给Signguid 赋值
			this.addressDef='';
			this.addressList='';
			/* 调用获取信息地址接口 */
			this.onAddress();
		}
	}
</script>

<style>
	@import "../../common/css/useraddress.css";
</style>
