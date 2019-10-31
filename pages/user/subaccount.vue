<template>
	<view>
		<view :class="{active:subaccount}">
			<scroll-view  :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scroll="scroll" >
				<!-- <view class="flex-row uni-bgc" style="display: flex;flex-direction: row;"  v-for="(items,index) in subaccountInfo" :key="index" @tap="composeTap(items)">
					<view class="flex-view-item" style="width: 80%;">
						<view class="uni-subRight">
							<view class="uni-subname">账户名：<text>{{items.uname}}</text></view>
							<view class="uni-subPhone">联系方式:<text>{{items.telephone}}</text></view>
						</view>
					</view>
					<view class="flex-view-item compose" style="width: 20%;text-align: center;">
							<view class="" @tap="composeTap(items)">编辑</view>
							<text class="iconfont icon-xiugaifuzhi" @tap="composeTap(items)"></text>
					</view>
				</view> -->
				<view class="flex-row uni-bgc" style="display: flex;flex-direction: row;" v-for="(items,index) in subaccountInfo" :key="index">
					<view class="flex-view-item" style="width: 86%;"  @tap="composeTap(items)">
						<view class="uni-addressRight">
							<view class="uni-addressName"><text>账户名：</text></view>
							<view class="uni-sddressPhone" style="margin-left: 0px;"><text>{{items.uname}}</text></view>
						</view>
						<view class="address">{{items.telephone}}</view>
					</view>
					<view class="moren" @tap="composeTap(items)">
						<text class="iconfont icon-xiugaifuzhi"></text>
					</view>
				</view>
			</scroll-view>
			<!-- 新建子账号 -->
			 <view class="uni-count end">
			 	<navigator url="subaccountNew" class="uni-addBtn">
			 		<!-- <i class="uni-icon uni-icon-plusempty"></i> -->新建子账号
			 	</navigator>
			 </view>
		</view>		
			
		<!-- 编辑子账号 -->
		<view class="uni-bianJi" :class="{actives:bianJi}">
			<view>
				<!--用户名-->
				<view class="flex-row uni-name" style="display: flex;flex-direction: row;">
					<view class="flex-view-item textName"><text>用户名</text></view>
					<view class="flex-view-item textInput"><input type="text" class="input-content" v-model="inputName" placeholder="请输入用户名" @input="name"></view>
				</view>
				
			</view>
			
			<view>
				<!--电话-->
				<view class="flex-row uni-name" style="display: flex;flex-direction: row;">
					<view class="flex-view-item textName"><text>电话</text></view>
					<view class="flex-view-item textInput"><input type="text" class="input-content" v-model="inputPhone" placeholder="请输入联系电话" @input="phone"></view>
				</view>
			</view>
			<view>
				<!--密码-->
				<view class="flex-row uni-name" style="display: flex;flex-direction: row;">
					<view class="flex-view-item textName"><text>密码</text></view>
					<view class="flex-view-item textInput"><input type="password" class="input-content" placeholder="请输入密码" @input="password" ></view>
				</view>
			</view>
			<!-- <button @tap="dlSubaccounts(subid)" class="btnDelete">删除子账号</button> -->
			<!-- <view class="deleteAdd" @tap="dlSubaccounts(subid)">
				<text>删除</text>
			</view> -->
			<!-- 按钮 -->
			<view class="footer">
				<view class="btn">
					<view class="upReturn" @tap="dlSubaccounts(subid)">删 除</view>
					<view class="upSubaccounts end"  @tap="upSubaccounts">保 存</view>
				</view>
			</view>
			
			<!-- <view class="uni-count end">
					<view class="uni-addBtn" @tap="upSubaccounts" style="height: 7vh;">保存账号</view>
			</view> -->
		</view>
		<mask v-if="showMask"></mask>
	</view>
</template>

<script>
	import route from "@/common/public.js"
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default{
		components: {uniIcon,uniPopup},
		data(){
			return {
				scrollTop: 0,
					old: {
						scrollTop: 0
				},
				subaccount:false,
				bianJi:true,
				sonName:"", //获取用户输入的用户名
				sonPhone:"", //获取用户输入的电话
				sonPwd:"",  //获取用户输入的密码
				Signboard:'',
				Signguid:'',
				subaccountInfo:'', //定义this.subaccountInfo 来存 res.data.subaccount;
				subid: '' ,//用来存items.uid
				inputName: '',				
				inputPhone: '',
				sacntList:'', //将原数据存起来用作判断数据是否有被改动
				showMask:false, //遮罩层的显示隐藏
			}
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			},			// 页面滑动
			// 页面滑动
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			// 点击修改图标触发的事件 编辑地址
			composeTap(e){
				this.sacntList=e;
				this.subaccount = true;
				this.bianJi = false;
				this.showMask=true;
				this.subid = e.uid;
				this.inputName = e.uname;
				this.inputPhone = e.telephone;
				this.sonName = e.uname;
				this.sonPhone = e.telephone;
				uni.setNavigationBarTitle({
					title: '编 辑 子 账 号'
				})
			},
			// 删除地址的确定按钮
			dlSubaccounts(){
				let _that = this;
				uni.showModal({
					title:"提示",
					content:"是否删除此条账号信息？",
					confirmColor:'#E93B3D',
					success:function(res){
						if(res.confirm){
							_that.subAdsYesFun();
							uni.setNavigationBarTitle({
								title: '子 账 号  管 理'
							})
						}else if(res.cancel){
							uni.setNavigationBarTitle({
								title: '子 账 号  管 理'
							})
						}
					}
				})
			},
			// 删除地址 弹出层里的确定按钮
			/* subAdsYes(e){
				this.subAdsYesFun();
				uni.setNavigationBarTitle({
					title: '子 账 号  管 理'
				})
			}, */
			// 删除地址 弹出层里的 取消按钮
			subAdsNo(e){
				this.subAds = false;
			},
			//获取用户输入的数据 1.用户名 2.电话 3.密码
			name:function(evt){
				this.sonName=evt.target.value;
			},
			phone:function(evt){
				this.sonPhone=evt.target.value;
			},
			password:function(evt){
				this.sonPwd=evt.target.value;
			}, 
			//点击修改页面的确定按钮触发的事件
			upSubaccounts(evt){
				//对表单进行验证
				if(this.sonName=="" || this.sonPhone==""){
					uni.showToast({
						title:'请将信息填写完整,不允许为空',
						icon:'none'
					})
				}else if(!RegExp(/^[\u4E00-\u9FA5A-Za-z0-9]+$/).test(this.sonName)){
					uni.showToast({
						title:"用户名只能包含中文，字母，数字",
						icon: "none"
					})
				}else if(!RegExp(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9])\d{8}$/).test(this.sonPhone)){
					uni.showToast({
						title:"手机号码格式不正确",
						icon: "none"
					})
				}else if(this.sonPwd != "" && !RegExp(/^[A-Za-z0-9]{5,16}$/).test(this.sonPwd)){
					uni.showToast({
						title:"密码只能由字母数字组成,长度不能小于6位大于16位",
						icon: "none"
					})
				}else{
					//调updSubAccount(修改子账户)的接口
					uni.request({
						url:route.variable+'/mobile/Subaccount/updSubAccount',
						method:'POST',
						data:{
							Ident_Signboard: this.Signboard,
							Ident_Signguid: this.Signguid,
							uid: this.subid,
							uname:this.sonName,
							telephone:this.sonPhone,
							password:this.sonPwd
						},
						success: (res) => {
							if (route.publicIf(res.data.status) == false){
								return false;
							}
							if(res.data.status==0){
								uni.showToast({
									title:res.data.message,
									icon:'none'
								})
								this.bianJi = true;
								this.subaccount = false;
								this.showMask=false;
								this.onSubaccount();
								/* uni.setNavigationBarTitle({
									title: '子 账 号  管 理'
								}) */
							}else{
								uni.showToast({
									title:res.data.message,
									icon:'none'
								})
							}
						},
						fail:(res)=>{
							uni.hideLoading()
							uni.showToast({title: '数据加载失败'+'错误码201',icon:"none"});
							console.log("fail: "+JSON.stringify(e));
						}
					})
				}
			},
			// 删除子账号 函数
			subAdsYesFun(evt){
				uni.request({
					url:route.variable+'/mobile/Subaccount/delSubAccount',
					method:'GET',
					data:{
						uid:this.subid,
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid
					},
					success: (res) => {
						if (route.publicIf(res.data.status) == false){
							return false;
						}
						if(res.data.status==0){
							uni.showToast({
								title:res.data.message,
								icon:'none'
							})
							uni.navigateTo({
								url:'../user/subaccount'
							})
						}else{
							uni.showToast({
								title:'子账户删除失败',
								icon:'none'
							})
						}
					},
					fail:(res)=>{
						uni.hideLoading()
						uni.showToast({title: '删除子账号失败'+'错误码201',icon:"none"});
						console.log("fail: "+JSON.stringify(e));
					}
				})
			},
			//获取子账号信息
			onSubaccount(){
				uni.request({ 
					//获取子账号信息
					url: route.variable+'/mobile/Subaccount/getSubAccount',  //调用子账号接口的地址
					method: 'GET',
					data: {
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid
					},
					success: (res) => {
						if (route.publicIf(res.data.status) == false){
							return false;
						}
						if(res.data.status == 0){
							this.subaccountInfo = res.data.subaccount;
						}
					},
					fail:(res)=>{
						uni.hideLoading()
						uni.showToast({title: '数据加载失败'+'错误码201',icon:"none"});
						console.log("fail: "+JSON.stringify(e));
					}
				})
			}
		},
		
		onLoad:function(){
			var jsonList=uni.getStorageSync("jsonList");
			var data = JSON.parse(jsonList); //JSON字符串转对象
			this.Signboard = data.Ident_Signboard;
			this.Signguid = data.Ident_Signguid;
		},
		onShow() {
			this.onSubaccount();
		},
		onBackPress(options) {
			let _that=this;
			if(this.showMask) {
				if(this.showMask == true){
					if(this.sacntList.uname != this.inputName || this.sacntList.telephone != this.inputPhone){
						uni.showModal({
							title:"提示",
							content:"是否保存已修改的信息",
							confirmColor:'#E93B3D',
							success:function(res){
								if(res.confirm){
									_that.upSubaccounts();
									/* this.isActive = true;
									this.isActives = false; */
									uni.setNavigationBarTitle({
										title: '子 账 号 管 理'
									})
								}else if(res.cancel){
									uni.setNavigationBarTitle({
										title: '子 账 号 管 理'
									})
								}
							}
						})
						/* this.showMask = false;
						return true; */
					}else{
						this.bianJi = true;
						this.subaccount = false;
						uni.setNavigationBarTitle({
							title: '子 账 号 管 理'
						})
					}
					this.showMask = false;  
					return true;  
				}
		  }else{
			  if (options.from === 'navigateBack'||options.from === 'backButton') {
				  return false;  
			  }
			  this.bianJi = true;
			  this.subaccount = false;
			  this.showMask = false;  
			  this.back();  
			  return true;  
		  }
		},
	}
</script>

<style>
	@import "../../common/uni.css";
	@import "../../common/iconfont.css";
	@import "../../common/css/useraddress.css";
	.uni-bgc{
		padding: 0 0 0 2%;
		background-color: #FFF;   
		border-bottom: #EEE solid 1px;
	}
	.uni-subname{
		padding: 0.5rem 0 0 0.5rem;
		font-size: 0.7rem;
		color: #000;
		font-weight: bold;
		font-family: -apple-system,Helvetica,sans-serif;
	}
	.uni-subPhone{
		font-family: -apple-system,Helvetica,sans-serif;
		font-size: 14px;
		color: #666;
		padding: 0 0.5rem;
		letter-spacing:1.5px;
	}
	.uni-trash{
		padding: 0.5rem;
	}
	/* 新建子账号按钮 */
	/* .uni-count{
		width: 80vw;
		height: 6vh;
		z-index: 999;
		position: absolute;
		bottom: 0.1rem;
		left: 2rem;
		border: 1px solid #e4393c;
		border-radius: 14rem;
		text-align: center;
	} */
	/* .uni-addBtn{
		color: #FFF;
		font-size: 15px;
	} */
	/* .uni-addBtn view{
		line-height: 6vh;
		align-items: center;
	} */
	/* .uni-icon-plusempty{
		font-weight: 600;
	} */
	/* 删除地址 */
	/* .deleteAdd{
		width: 10vw;
		margin-top: 0.2rem;
		text-align: right;
		position: absolute;
		top: -38px;
		right: 14px;
		z-index: 999;
		color: #E4393C;
		font-weight: 600;
	} */
	/* 编辑子账号 */
	.compose{
		text-align: right;
		margin-top: 1rem;
		color: #e93b3d;
		font-size: 14px;
	}
	.uni-bianJi{
		background-color: #fff;
	}
	.uni-name{
		border-bottom: #e3e3e3 solid 1px;
	}
	.textName{
		padding: 0 0.5rem;
		width: 15vw;
		height: 2.5rem;
		line-height: 2.5rem;
		color: #999;
	}
	.input-content{
		height: 2.5rem;
		line-height: 2.5rem;
		color: #333;
		font-size: 0.7rem;
	}
	.textInput{
		width: 80vw;
		display: inline-block;
	}
	/* .textCom{
		max-width: 30vw;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		height: 2.5rem;
		line-height: 2.5rem;
	} */
	/* .textInput{
		margin-left: 10px;
	} */
	/* .input-content{
		height: 2.5rem;
		line-height: 2.5rem;
	} */
	.uni-wrap{
		border-bottom: #e3e3e3 solid 1px;
	}
	.uni-wrap button{
		margin-bottom: 10px;
	}
	/* 确定/返回按钮 */
	/* .footer {
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
	} */
	.upReturn,
	.upSubaccounts {
		height: 80upx;
		padding: 0 138upx;
		color: #fff;
		display: flex;
		align-items: center;
		font-size: 16px;
		/* letter-spacing: 0.2rem; */
	}
	.upReturn {
		background-color: #dcdbdb;
	}
	.end{
		background: #FF0000;
	}
</style>
