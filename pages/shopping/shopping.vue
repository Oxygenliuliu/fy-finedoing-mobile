	<template>
		<view :class="{isActive: isActive }" style="touch-action:none;touch-action:pan-y pinch-zoom;">
			<view class="topNum" v-if="shopNums!=0">({{shopNums}})</view>
			<view :class="{actives:escActive}" style="margin-bottom: 50px;">
				<view style="height: 20px;background: #FFFFFF;"></view>
				<view class="uni-shopinfo" v-for="(item, index) in shoppingList" :key="index">
					<view class="uni-middle flex-row">
						<view class="flex-view-item">
							<label class="checkbox bottomLable" style="width: 10px;height: 10px;margin-top: 1rem;"  @tap="checkboxChange(index)">
								<radio value="" :checked="(item.chec == 1?true:false)" borradius="30px" style="transform: scale(0.9)" color="red" />
							</label>
						</view>
						<view class="flex-view-item">
							<image :src="item.img==''?unExist:imgUrl+item.img" mode="" class="uni-comimg" onclick="return false"></image>
						</view>
						<view class="flex-view-item spMsg">
							<view class="flex-column" style="display:flex;flex-direction: column;" >
								<view class="flex-view-item title">
									<text>
										{{item.ty_name}}
									</text>
								</view>
								<view class="flex-view-item title">
									<text style="color: #999;">材料: </text>
									<view class="sd" @tap="NameTap(index,item.ty_id)">
										<text class="uni-textname" :data-gid="(item.g_id)" id="gname">{{item.g_name}}</text> 
									</view>
								</view>
								<view class="flex-view-item title">
									<text style="color: #999;">工艺:</text>
									<view class="uni-gongyi">
										<text :data-lpid="(item.lpid)">{{item.lpname}}</text> 
									</view>
								</view>
								<view class="flex-view-item title" style="margin-top: -0.25rem;">
									<text style="color: #999;">规格:</text>
									<view class="uni-guige">
										<text>{{item.sc_specs}}</text>
									</view>
								</view>
								<view class="flex-view-item" style="display: flex;flex-direction: row;">
									<view class="flex-view-item uni-price">
										<text class="moneyNum">￥<text class="totalPrice" style="margin-left: 0.2rem;">{{item.total}}</text></text>
									</view>
									<view class="flex-view-item InpBtn">
										<button :data-scid="(item.sc_id)" @click="reduceBtn(index)" class="plus" :disabled="isDisabled" :class="{disabled:(item.sc_number <= 1 ? true : false)}">-</button>
										<input type="number" class="inputNum" v-model="item.sc_number" :data-scid="(item.sc_id)" :data-index="index" @blur="numberName" > <!-- :disabled="(item.sc_number <= 1 ? true : false)" -->
										<button :data-scid="(item.sc_id)" @click="plusBtn(index)" class="plus" :disabled="isDisabled">+</button>		
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="uni-bottom">
					<label class="checkbox" style="width: 10px;height: 10px;padding: 13px 5px;"  @tap="checkAll">
						<radio value="" :checked="Allcheck" borradius="30px" style="transform: scale(0.9)" color="red"/>
					</label>
					<view class="qx">
						<view>全选</view>
					</view>
					<view class="btnSF">
						<view :class="{actives:btnDelete}" @tap="deleteCart" v-if="deleteId.length>0">删 除({{sltdGoods}})</view>
					</view>
					<view class="morend">
						<view style="font-size: 14px;">总计:<span>￥ {{TotalAmount}}</span></view>
					</view> 
					<view class="ends">
						<view @tap="Settlement">去结算({{sltdGoods}})</view>
					</view>
				</view>
			</view>
				
			<!-- 规格-模态层弹窗 组件 -->
			<uni-makings ref="unimakings" @change="makchange"  @tap="retPrice"></uni-makings>
				
			<!-- 当购物车没有商品时显示的板块 -->
			<view :class="{active:NonActive}" class="spTips">
				<view class="shpNo">
					<image src='../../static/image/sp.png'></image><br/>
					<view :class="{activeSP:activeGoods}" class="shpNoGoods">
						<text style="margin-top: 0.5rem;margin-bottom: 1rem;">登录后可同步购物车中商品</text>
						<view class="shpNoClick" @tap="shpNoLogin">登录</view>
					</view>
					<view :class="{activeSP:activeCmdyFree}" class="shpNoCmdyFree">
						<text>购物车暂无商品快来选购吧！</text>
					</view>
				</view>
				<view>
					<view>
						<view class="goosName">
							<text>热销商品</text>
							<hr>
						</view>
						<view class="goosList" style="background: #FFFFFF;margin-bottom: 50px;">
							<view class="flex-row" style="display: flex;flex-direction: row;flex-wrap:wrap;">
								<view class="flex-view-item uni-goods" v-for="(hotGoods , index) in hotGoods" :key="index">
									<navigator :url="'../product/productinfo?type='+(hotGoods.tid)" :data-tid=(hotGoods.tid)>
										<image :src="hotGoods.img==''?unExist:imgUrl+hotGoods.img" mode=""></image>
										<text class="uni-goodsName">{{hotGoods.gname}}</text>
										<text class="uni-goodsPrice"><!-- <i-price decimal="small" :value="(hotGoods.price)"></i-price> --></text>
									</navigator>
								</view>
							</view>
						</view> 
					</view> 
				</view>
			</view>
			<tarBar :active='2'></tarBar>
		</view>
</template>
<script>
	import route from "@/common/public.js"
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
	// 弹出框样式外联
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniMakings from "@/components/uni-makings/uni-makings.vue"
	import tarBar from "@/components/customize/tarBar.vue"
	export default {
		components: {uniNavBar,uniIcon,uniNumberBox,uniMakings,tarBar},
		data() {
			return {
				isDisabled: false,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				imgUrl :'',  //图片访问ip
				// pages: 1,  //页码
				// lastpage: '',  //最后一页
				shoppingList: [],	//购物车上了列表
				TotalAmount: '0.00', //总计
				Allcheck: false, //全选是否有被选中
				gongYi: '',  //工艺名称
				width: '',  //规格：宽
				height: '',  //规格：高
				makings: '',  //材料列表
				checkNum: -1,  //材料切换替换颜色下标
				specs: false,  //选择切换材料弹出框
				unitlist: '',  //规格列表
				ggcheckNum: -1,  //规格切换替换颜色下标
				number: 1,  //数量
				craft: [],  //工艺列表
				// gongYiShow: false,  //是否存在工艺提示
				rSelect:[], //全部工艺选中 
				// checkCraft: '',  //工艺选中的状态
				gongYiName: [],  //工艺名称
				// k: [],
				gongYiId: [],  //工艺id
				temp : [],
				lineindex: 0, //存的是当前选中商品的下标
				lpid:'', //工艺序号
				lpmoney:'', //折扣后单价
				hotGoods:[], //热销商品数组
				escActive:false, //商品列表显示模块
				NonActive:true, //当购物车没有商品或未登录时显示的模块
				activeGoods:true, //有商品,
				activeCmdyFree:true, //无商品
				deleteId:[], //删除商品所需要的id
				btnDelete:false, //删除按钮
				sltdGoods:0, //选中的商品数量
				makingId:'', //当前选中的商品
				spListId:'', //当选正在选材料的商品
				isActive:false,//弹出遮罩层时，底部滚动是否禁止
				Signboard:'',
				Signguid:'',
				token:'', //给softdog(加密狗号)赋值
				org:'', //给org(接口IP地址)赋值
				dbname:'',  //给dbname(数据库)赋值
				Partnerid:'', //给csID(用户ID)赋值
				uName:'', //登录
				csid:'', //判断公司信息是否完善
				shopNums:'', //购物车数量
				totalPage: 1, // 统共页数，默认为1
				currentPage: 1, //当前页数 ，默认为1
				pageSize: 8, // 每页显示数量
				lastPage:0, //最后一页
				shopPaging:'', //当前页数据
				e:0, //下标
				unExist:'', //默认替换图片
				/* twinkle:0, //判断是否执行onHide(闪烁问题) */
			}
		},
		methods:{
			shpNoLogin(){ //在没有登录时显示的板块中点击其中的登录跳转到登录页面
				uni.navigateTo({ url:'../index/login'})
			},
			upNumber(){ //修改商品信息调用的接口
				uni.request({
					url:route.variable+'/mobile/index/upShopCartData',
					method:'POST',
					data:{
						Ident_Signboard: this.Signboard,
						Ident_Signguid: this.Signguid,
						sid: this.shoppingList[this.lineindex].sc_id, //购物车序号
						gid: this.shoppingList[this.lineindex].ty_id, //商品序号
						clid: this.shoppingList[this.lineindex].g_id, //材料序号
						qty: this.shoppingList[this.lineindex].sc_number, //商品数量
						total: this.TotalAmount, //小计
						price: this.temp.total, //单价
						lpid: this.gongYiId, //工艺序号
						lpname: this.shoppingList[this.lineindex].lpname, //工艺名称
						width:this.guigWidth, //宽
						height:this.guigHeight, //高
						lpmoney:this.lpmoney, //后期工艺价格
					},
					success: (res) => {
						let result = route.publicIf(res.data)
						if (result == false){
							return false;
						}
						if(res.data.status==0){
							uni.showToast({title:'商品信息修改成功',icon:'none'})
						}else{
							uni.showToast({title:'商品信息修改失败',icon:'none'})
						}
					},
					fail:(e)=>{
						uni.hideLoading()
						uni.showToast({title: '商品修改失败'+'错误码201',icon:"none"});
					}
				})
			},
			// 登录情况下 子组件返回的参数值 函数
			makchange(res){
				console.log(res)
				this.productInfo = res.cailList + '规格：'+res.guigWidth +'*'+ res.guigHeight + res.guigMonad + '数量：'+res.number;
				this.shoppingList[this.lineindex].g_name=res.cailList; //商品备注
				this.gongYi=[];
				this.gongYiId = res.gongYiId;  //工艺ID
				if(res.gongYiName.length>0){
					for(let j = 0; j < res.gongYiName.length; j++){
						this.gongYi += res.gongYiName[j] +',';
					}
					for(let i = 0; i < this.gongYiId.length; i++){
							this.lpid += this.gongYiId[i]
					}
					this.shoppingList[this.lineindex].lpname = this.gongYi.substring(0,this.gongYi.lastIndexOf(','));
					this.shoppingList[this.lineindex].lpid = this.lpid.substring(0,this.lpid.lastIndexOf(','));
				}else{
					this.shoppingList[this.lineindex].lpname='';
				}
				if(res.gongYiName != ''){  //判断gomgyiName是否为空 (不为空时：赋值给this.gongYiLen长度 作为上面判断工艺加逗号)
					this.gongYiLen = res.gongYiName.length;
				}
				this.temp.total = res.totalPrice;  //价格
				this.shoppingList[this.lineindex].g_id = res.caiLiaoId;  //材料ID
				this.shoppingList[this.lineindex].sc_number=res.number; //数量
				
				this.offerHeight = res.offerHeight;  //报价请求高
				this.offerWidth = res.offerWidth;  //报价请求宽
				this.guigHeight = res.guigHeight;  //高
				this.guigWidth = res.guigWidth;  //宽
				
				this.shoppingList[this.lineindex].sc_specs=this.guigWidth+'*'+res.guigHeight;
				this.lpmoney = res.lpMoney;  //工艺单价
				/* this.TotalAmount = res.totalPrice;  //总价 */
				this.ggcheckNum = res.ggcheckNum;  //规格选中下标
				this.checkNum = res.checkNum;  //材料选中下标
				this.Signguid = res.Signguid;
				this.Signboard = res.Signboard;
				this.operapeShop(this.lineindex); //调用数量修改函数接口
				this.upNumber(); //调用商品信息修改接口
			},
			// 点击材料切换选中
			NameTap(index,e){
				this.isActive =true;
				this.spListId=this.shoppingList[index].g_id;
				this.temp = this.shoppingList[index];
				this.lineindex = index;
				this.specs = true;
				uni.request({
					url: route.variable+'/mobile/order/productInfo',
					method: 'POST',
					data: {
						gid: e  //ty_id: 商品类别ID
					},
					success: (res) => {
						if(res.data.status == 0){
							this.makings = res.data.stuff;  //给makings（材料列表）赋值
							this.unitlist = res.data.unit;
						}
						let splitSize = this.shoppingList[index].sc_specs.split("*"); //使用空格来对地址进行分割
						this.gongYiName = this.shoppingList[index].lpname.split(",");
						this.gongYiId=[this.shoppingList[index].lpid]; //工艺Id
						// 请求参数数组：下单页
						let shopArray={"Signboard":this.Signboard,"Signguid":this.Signguid,"Price":this.temp.total,"stuffList":this.makings,"unitlist":this.unitlist,"shopImgs":this.temp.img,
							"Partnerid":this.Partnerid,"dbname":this.dbname,"token":this.token,"org":this.org,"userName":this.uName,'rSelect':this.gongYiName,'gongYiId':this.gongYiId,
							'caiLInfo':this.shoppingList[index].g_name,'caiLiaoId':this.shoppingList[index].g_id,'guigWidth':splitSize[0],'guigHeight':splitSize[1],'type_id':this.shoppingList[index].ty_id,'number':this.shoppingList[index].sc_number}
						console.log(shopArray);
						//调用规格弹出框
						this.$refs.unimakings.show(shopArray);  //调用子组件的show()函数 调起子组件
					},
					fail:(e)=>{
						uni.hideLoading()
						uni.showToast({title: '选中材料失败'+'错误码201',icon:"none"});
					}
				})
			},
			// 修改数量函数
			operapeShop(e){
				let _this = this;
				setTimeout(function() {
					_this.isDisabled = false
				},500)
				var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
				var data = JSON.parse(wulala); //JSON字符串转对象
				var Signboard = data.Ident_Signboard;  //给Signboard 赋值最近更新
				var Signguid = data.Ident_Signguid;  //给Signguid 赋值
				uni.request({
					url: route.variable+'/mobile/index/OperateShop',
					method: 'POST',
					data: {
						Ident_Signboard: Signboard,
						Ident_Signguid: Signguid,
						sid: this.shoppingList[e].sc_id,
						num: this.shoppingList[e].sc_number,
						money: this.shoppingList[e].total
					},
					success: (res) => {
						let result = route.publicIf(res.data)
						if (result == false){
							return false;
						}
						if(res.data.status != 0){
							uni.showToast({title:'数量修改失败',icon: 'none'})
						}//else{
						// 	uni.showToast({title:'数量修改失败',icon: 'none'})
						// }
					},
					fail:(e)=>{
						uni.hideLoading()
						uni.showToast({title: '数量加购失败'+'错误码201',icon:"none"});
					}
				})
			},
			//全选
			checkAll(){
				let shop_length = this.shoppingList.length;
				let total = 0.00;
				this.sltdGoods=0;
				if (this.Allcheck == false){
					this.deleteId=[];
					for(let i = 0; i<shop_length;i++){
							this.shoppingList[i].chec = true
							total +=+ parseFloat(this.shoppingList[i].total).toFixed(2)
							this.deleteId.push(this.shoppingList[i].sc_id);
					}
					this.Allcheck = true
					this.TotalAmount = total.toFixed(2)
				}else{
					this.deleteId=[];
					for(let i = 0; i<shop_length;i++){
						this.shoppingList[i].chec = false
					}
					this.Allcheck = false
					this.TotalAmount = "0.00";
				}
				this.sltdGoods=this.deleteId.length;
			}, 
			// 单选框
			checkboxChange(e){
				if (this.shoppingList[e].chec == true){
					this.deleteId.splice(this.deleteId.indexOf(e),1);
				}else{
					this.deleteId.push(this.shoppingList[e].sc_id);
				}
				this.shoppingList[e].chec = this.shoppingList[e].chec == 1?0:1;
				let shop_length = this.shoppingList.length;
				var arayLength=0;
				let total = 0.00;
				for(let i = 0; i<shop_length;i++){
					if(this.shoppingList[i].chec == 1){
						total +=+ parseFloat(this.shoppingList[i].total)
						arayLength++;
					}
				}
				this.sltdGoods=this.deleteId.length;
				/* 判断长度如果等于购物车商品总数量长度就选中全选的按钮 */
				if(shop_length==arayLength){
					this.Allcheck=true;
				}else{
					this.Allcheck=false;
				}
				this.TotalAmount = total.toFixed(2)
			},
			// 请求参数 第二次点击加入购物车或者立即购买时 调用一次报价接口
			requestFun(e=''){
				let splitSize = this.shoppingList[this.lineindex].sc_specs.split("*"); //使用空格来对地址进行分割
				return {'guigWidth':this.guigWidth,'guigHeight':this.guigHeight,"userName":this.uName,'Partnerid':this.Partnerid,
				'token':this.token,'dbname':this.dbname,'org':this.org,'caiLiaoId':this.shoppingList[this.lineindex].g_id,
				'offerWidth':splitSize[0]/1000,'offerHeight':splitSize[1]/1000,'LpidList':this.shoppingList[this.lineindex].lpid,
				'number':this.shoppingList[this.lineindex].sc_number,
				'checkNum':this.checkNum,'ggcheckNum':this.ggcheckNum,'clickNum':1};
			},
			retPrice(e){ //返回的接收参数
				this.shoppingList[this.lineindex].lpmoney=e.lpMoney;
				this.shoppingList[this.lineindex].price= e.Price;
				this.shoppingList[this.lineindex].total= e.totalPrice;
				let total = 0;
				for(let i = 0; i<this.shoppingList.length;i++){
					if (this.shoppingList[i].chec == '1'){
						total +=+this.shoppingList[i].total
					}
				}
				this.TotalAmount = parseFloat(total).toFixed(2)
				this.operapeShop(this.lineindex);
			},
			// 数量的加
			plusBtn(e,evt){
				this.isDisabled = true;
				// this.shoppingList
				this.lineindex=e;
				var plusNum=parseInt(this.shoppingList[e].sc_number);
				this.shoppingList[e].sc_number = plusNum+1;  //商品数量
				this.$refs.unimakings.offer(this.requestFun(evt)); //调用子组件里面的报价函数
				let reqPrice=this.$refs.unimakings.reqPrice;
			},
			// 数量的减
			reduceBtn(e){
				this.isDisabled = true;
				this.lineindex=e;
				if(this.shoppingList[e].sc_number == 1)
				{
					return false
				}
				this.shoppingList[e].sc_number = (this.shoppingList[e].sc_number - 1 > 0)?this.shoppingList[e].sc_number - 1:1;  //商品数量
				this.$refs.unimakings.offer(this.requestFun(e)); //调用子组件里面的报价函数
				let reqPrice=this.$refs.unimakings.reqPrice;
			},
			// 数量的输入框
			numberName(e){
				this.lineindex=e.target.dataset.index;
				if(e.target.value==''||e.target.value==null ||e.target.value==0){
					this.shoppingList[this.lineindex].sc_number=1;
					this.$refs.unimakings.offer(this.requestFun(e)); //调用子组件里面的报价函数
					let reqPrice=this.$refs.unimakings.reqPrice;
				}else{
					// if(e.target.value == this.shoppingList[this.lineindex].sc_number){  //判断：当前输入框里的数量和之前的一样不 一样的话就结束操作 不一样的话 就开始调接口
					// 	return false;
					// }else{
						this.shoppingList[this.lineindex].sc_number = e.target.value;  //改变数量时：给它重新赋值
						this.$refs.unimakings.offer(this.requestFun(e)); //调用子组件里面的报价函数
						let reqPrice=this.$refs.unimakings.reqPrice;
					// }
				}
			},
			// 去结算按钮
			Settlement(e){
				var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
				var data = JSON.parse(wulala); //JSON字符串转对象
				var Signboard = data.Ident_Signboard;  //给Signboard 赋值最近更新
				var Signguid = data.Ident_Signguid;  //给Signguid 赋值
				this.gId = [];
				for(let j = 0; j < this.shoppingList.length; j++){
					if(this.shoppingList[j].chec == true){
						this.gId.push(this.shoppingList[j].sc_id)
					}
				}
				if(this.deleteId.length==0){
					uni.showToast({title:'请选择结算商品',icon:'none'})
					return false;
				}
				uni.navigateTo({ //跳转到下单页+
					url: '../order/payment?serial='+ this.gId+ '&l=1'
				})
			},
			// 删除购物车数据
			deleteCart(){
				var _that=this;
				uni.showModal({  //模态弹窗
					title: '提示',
					content: '是否要删除选中信息',
					success: function (res) {
						if (res.confirm) {
							var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
							var data = JSON.parse(wulala); //JSON字符串转对象
							var Signboard = data.Ident_Signboard;  //给Signboard 赋值最近更新
							var Signguid = data.Ident_Signguid;  //给Signguid 赋值
							var shopNum = data.shop;  //购物车数量
							uni.request({
								url: route.variable+'/mobile/Classification/removeShop',
								method: 'POST',
								data: {
									Ident_Signboard: Signboard,
									Ident_Signguid: Signguid,
									distinction: 'alone',  //标识：区分是清空购物车还是单个删除
									shopping_number: _that.deleteId //购物车id
								},
								success: (res) => {
									let result = route.publicIf(res.data)
									if (result == false){
										return false;
									}
									if(res.data.status == 0){
										let shop = shopNum - _that.deleteId.length;  //购物车数量减去删除的数量
										data.shop = shop;  //data.shop 重新赋值
										_that.shopNums = data.shop;
										let json = JSON.stringify(data);  //对象转字符串
										uni.setStorageSync('shop',shop);
										
										uni.setStorageSync('jsonList',json) //将shop数据库数量从新存储进去
										for(let i=0;i<_that.shoppingList.length;i++){ //删除数组里面的对应的数据
											if (_that.shoppingList[i].chec){
											  _that.shoppingList.splice(i,1);
											  i--
											}
										}
										_that.deleteId=[];
										_that.sltdGoods=_that.deleteId.length;
										_that.TotalAmount='0.00';
										uni.showToast({title: '商品删除成功',icon: 'success'})
										_that.provider(); //调用分页函数
										/* 判断购物车里面是否有商品,如果没有商品就提示用户并显示热销商品 */
										if(_that.shoppingList.length==0){
											_that.hotGood();
											_that.escActive=true;
											_that.NonActive=false;
											_that.activeGoods=true;
											_that.activeCmdyFree=false;
										}
										//购物车下面角标的数量
										if(data.shop == '0'){
											// 移除购物车角标
											uni.removeTabBarBadge({
												index:2
											})
										}else{
											uni.setTabBarBadge({
												index: 2,
												text: data.shop+''
											})
										}
									}else{
										uni.showToast({title: '商品删除失败',icon: 'none'})
									}
								},
								fail:(e)=>{
									uni.hideLoading()
									uni.showToast({title: '商品删除失败'+'错误码201',icon:"none"});
								}
							})
						}
					}
				});
				
			},
			hotGood(){ //获取热销商品
				//判断csid是否为空
				uni.request({
					url:route.variable+'/mobile/classification/getHotGood',
					method:'GET',
					data:{},
					success: (res) => {
						if(res.data.status==0){
							this.hotGoods=res.data.hotGoods;
							this.escActive=true;
							this.NonActive=false;
						}
					},
					fail:(e)=>{
						uni.hideLoading()
						uni.showToast({title: '信息获取失败'+'错误码201',icon:"none"});
					}
				})
			},
			getShopList(){ //获取购物车商品信息
				let that=this;
				var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
				var datas = JSON.parse(wulala); //JSON字符串转对象
				// uni.showLoading() //加载动画
				uni.request({
					url: route.variable+'/mobile/index/getShopping',
					method:'POST',
					data:{
						Ident_Signboard:this.Signboard,
						Ident_Signguid: this.Signguid
					},
					success: (res) => {
						let result = route.publicIf(res.data)
						if (result == false){
							return false;
						}
						if(res.data.status == 0){
							that.shopNums=res.data.shopping.length;
							uni.setStorageSync('shop',that.shopNums);
							datas.shop = that.shopNums;
							let json = JSON.stringify(datas);  //对象转字符串
							uni.setStorageSync('jsonList',json);
								that.shoppingList=[];
								that.currentPage=1;
								that.shopPaging=res.data.shopping;
								that.lastPage=Math.ceil(that.shopPaging.length / that.pageSize); //计算最后一页 （当前总数量 除以 每页显示数量）
								that.e=0;
								this.provider();
							//购物车下面角标的数量
							if(res.data.shopping.length == '0'){
								// 移除购物车角标
								uni.removeTabBarBadge({index:2})
							}else{
								uni.setTabBarBadge({
									index: 2,
									text: res.data.shopping.length+''
								})
							}
						}
					},
					fail:(e)=>{
						uni.hideLoading()
						uni.showToast({title: '购物车商品获取失败'+'错误码201',icon:"none"});
					},
					// complete() { //无论失败成功都会调用的函数
					// 	setTimeout(function(){
					// 		uni.hideLoading() //关闭加载动画
					// 	},300)
					// }
				})
			},
			StatusMsg(){ //进行状态判断
				this.imgUrl = route.variable;
				let msg=route.checkStatus();
				if(msg.userName==''){ //判断是否登录
					this.shoppingList=[];
					this.shopNums=0;
					this.hotGood();
					this.activeCmdyFree=true;
					this.activeGoods=false;
					return false;
				}
				
				var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
				var data = JSON.parse(wulala); //JSON字符串转对象
				this.shopNums = data.shop;
				this.csid=data.csid;
				if(data.shop == 0){ //判断购物车是否为空，有没有商品
					this.shopNums=0;
					this.hotGood(); //如果购物车为空，那么就显示热销商品
					this.activeGoods=true;
					this.activeCmdyFree=false;
					if(this.csid==null){ //判断公司信息是否已经完善
						route.checkCsid(data.csid);
						return false
					}
					return false;
				}
				
				if(this.csid==null){ //判断公司信息是否已经完善
					route.checkCsid(data.csid);
					return false
				}
				
				var etmeNum=uni.getStorageSync("etmeNum");  //获取下单页存入的etmeNum参数
				if(etmeNum==1){
					this.deleteId = [];
					uni.removeStorageSync('etmeNum');
				}
				
				if (this.deleteId.length > 0){ //判断this.gId的长度，如果大于0就返回false 让商品呈选中状态
					return false;
				}
				
				this.escActive=false; //登录后的商品列表的显示
				this.NonActive=true; //当购物车没有商品或未登录时显示的模块
				this.activeGoods=true;  //显示登录按钮，提示登录后同步更新
				this.activeCmdyFree=true; //提示暂无商品，快来选购
				this.token = data.softdog; //给softdog(加密狗号)赋值
				this.org = data.org;  //给org(接口IP地址)赋值
				this.dbname = data.dbname;  //给dbname(数据库)赋值
				this.Partnerid = data.csid;  //给csID(用户ID)赋值
				this.Signboard = data.Ident_Signboard;  //给Signboard 赋值最近更新
				this.Signguid = data.Ident_Signguid; //给Signguid 赋值
				this.uName = data.userName;  //登录用户名、
				this.getShopList();
				this.Allcheck=false; //重新给全选按钮的是否选中赋值
				return true;
			},
			provider(){ //分页
				let that=this;
				let num=that.pageSize*that.currentPage; //计算显示多少条
				if(that.currentPage>that.lastPage){ 
					return false;
				}
				let spPgnNum=that.shopPaging.length;
				if(num>spPgnNum){
					num=spPgnNum;
				}
				for(that.e;that.e<num;that.e++){
					that.shoppingList.push(that.shopPaging[that.e]);
				}
				that.currentPage++;
			}
		},
		//上拉加载
		onPullDownRefresh() {
			this.getShopList();
			setTimeout(function () {
			    uni.stopPullDownRefresh();
			}, 1000);
		},
		onReachBottom() { //下拉刷新
			this.provider();
		},
		// onHide:function(){
		// 	this.escActive=true;
		// 	this.NonActive=true;
		// },
		onShow:function(){
			var jsonList=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
			var shop=uni.getStorageSync('shop');
			// if(shop!=''){
				// var wulala=uni.getStorageSync("jsonList");  //获取存储在Storage里的值
				if(jsonList){
					var data = JSON.parse(jsonList); //JSON字符串转对象
					if(shop!=data.shop || data.shop==0){
						this.StatusMsg();
					}
				}else{
					this.StatusMsg();
				}
			// }
			var orderCreation=uni.getStorageSync("orderCreation");  //将在下单页存入的值取出来判断是否存在
			//判断选中的商品是否生成订单
			if(orderCreation!=""){
				this.sltdGoods=0;
				this.deleteId.length=0;
				this.TotalAmount=0;
				this.TotalAmount = parseFloat(this.TotalAmount).toFixed(2)
				this.StatusMsg();
				uni.removeStorageSync('orderCreation');
			}
		},
		onLoad:function(){
			this.unExist = route.unExist
			this.StatusMsg();
		},
	}
</script>

<style>
	@import "../../common/uni.css";
	@import "../../common/iconfont.css";
	/* [v-cloak]{
		display: none !important;
	} */
	page{
		background-color: #F7F7F7;
	}	
	/* 顶部显示数量 */
	.topNum{
		display: inline;
		top: 2vw;
		left: 58vw;
		z-index: 999;
		font-size: 16px;
		position: fixed;
		font-weight: 700;
	}
	.gyshow{
		display: none
	}
	/*.isActive {
		z-index: 999;
		width: 100%;
		position:fixed;
		height: 100%;
		overflow: hidden;
	} */
	/* 购物车未登录和购物车为空时的板块显示样式 */
	.spTips{
		position: absolute;
		top: 44px;
	}
	.btnSF{
		width: 20%;
	}
	
	.btnSF view{
		width: 80%;
		height: 1.2rem;
		text-align: center;
		border: 1px solid #FF0000;
		border-radius: 15px;
		color: #FF0000;
		margin-top: 13px;
		margin-left: 0.2rem;
		font-size: 10px;
		line-height: 1.2rem;
	}
	.activeSP{
		display: none;
	}
	/* 工艺提示是否显示 */
	.gyshow{
		display: none
	}
	/* 禁止图片被点击 */
	image{ pointer-events: none; }
	img{pointer-events: none;}
	.disabled{  /* 禁用按钮颜色 */
		color: #ccc;  
	}  
	.uni-count{
		width: 100vw;
		z-index: 999;
		position: relative;
		bottom: 0px;
	}
	.active{
		display: none;
	}
	.actives{
		display: none;
	}
	/* 伪元素是行内元素 正常浏览器清除浮动方法 */
	.clearfix:after{
	    content: "";
	    display: block;
	    height: 0;
	    clear:both;
	    visibility: hidden;
	}
	/* ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行 */
	.clearfix{
	    zoom: 1;
	}
	/* 数量 加减按钮*/
	.InpBtn{
		float: left;
		position: relative;
	}
	.plus{
		padding-left: 0 !important;
		padding-right: 0 !important;
	}
	.InpBtn button{
		width: 30px;
		height: 30px;
		line-height: 30px;
		border-radius: 0 !important;
	}
	.inputNum{
		width: 40px;
		height: 28px;
		line-height: 32px;
		border: 1px solid #f8f8f8;
		text-align: center;
	}
	/* 数量 加减按钮*/
	.reduce{
		border-top-right-radius: none;
	}
	/* 工艺弹出框 确定/取消按钮 */
	.uni-shopinfo{
		background-color: #FFF;
		margin-bottom: 10px;
	}
	.uni-middle{
		display: flex;
		flex-direction: row;
	}
	.uni-comimg{
		max-width: 4.5rem;
		max-height: 4.5rem;
		padding: 6px 0 6px 16px;
	}
	.title>text{
		font-size: 14px;
		color: #000;
		padding: 0px 10px;
	}
	.flex-view-item{
		display: flex;
		flex-direction: row;
	}
	.sd{
		flex-grow: 1;
		width: 9rem;
		height: 23px;
		border: #D0D0D0 solid 1px;
		border-radius: 4px;
		color: #666;
		font-size: 0.8rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 1.3rem;
		-webkit-flex-grow: 0
	}
	.sd text{
		font-size: 14px;
	}
	.uni-gongyi{
		max-width: 160px;
		margin-top: 1px;
		flex-grow: 1;
		width: auto;
		margin: 0px;
		color: #666;
		font-size: 14px;
		
	}
	.uni-guige{
		margin-top: 10px;
		margin: 0px;
		color: #999;
	}
	.uni-price{
		width: 50%;
	}
	.uni-price text{
		color: red;
	}
	/* 数量 加减按钮*/
	.reduce{
		border-top-right-radius: none;
	}
	/* 底部 */
	.uni-bottom{
		height: 50px;
		position: fixed;
		bottom: 15vw;
		z-index: 999;
		background: #FFF;
		display: flex;
		width: 100%;
		border-top: #F0F0F0 solid 1px;
		border-bottom: #F0F0F0 solid 1px;
	}
	.qx{
		margin-left: 15px;
		width: 10%;
		display: inline-block;
	}
	.bottomLable{
		padding: 3px 5px;
		font-size: 20px;
	}
	.qx view{
		padding: 13px 0px;
		color: #C0C0C0;
		font-size: 14px;
	}
	.morend{
		width: 35%;
		text-align: right;
		margin-top: 13px;
		margin-right: 0.3rem;
	}
	.morend view span{
		color: red;
		font-weight: 600;
	}
	.ends {
		background: red;
		color: #FFF;
		width: 30%;
		text-align: center;
		padding: 12px 0px;
	}
	.ends>view{
		font-size: 14px;
	}
	/* 商品金额 */
	.moneyNum{
		line-height: 2rem;
	}
	/* 购物车没有商品时显示的模块的样式 */
	.shpNo{
		text-align: center;
		font-size: 0.7rem;
	}
	.shpNo>image{
		width: 90px;
		height: 90px;
	}
	.shpNo>text{
		color: rgba(51,51,51,.66);
		line-height: 24px;
		margin: 11px 0;
		margin-bottom: 2rem;
	}
	.shpNoClick{
		width: 60px;
		height: 30px;
		border: 1px solid #e93b3d;
		color: #e93b3d;
		line-height: 30px;
		border-radius: 4px;
		margin: 0 auto 15px;
		margin-top: 0.5rem;margin-bottom: 1rem;
	}
	.shpNoCmdyFree{
		margin-bottom: 1rem;
		margin-top: 0.5rem;
	}
	
	/* 商品展示 */
	.goosName{
		text-align: center;
		height: 40px;
		line-height: 20px;
		background-color: #FFF; 
	}
	.goosName>text{
		position: relative;
		top: 10px;
		z-index: 9;
		background: #FFF;
		padding: 0px 10px;
	}
	.uni-goods{
		background-color: #FFF;
		min-width: 45%;
		max-width: 45%;
		margin-left: 12px;
		margin-top: 10px;
	}
	.uni-goods image{
		width: 44vw;
		height: 44vw;
	}
	.uni-goodsName{
		padding: 0 10px;
	}
</style>
 