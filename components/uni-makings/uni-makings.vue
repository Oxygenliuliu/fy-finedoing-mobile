<template name="uni-makings">
	<view class="popup spec" :class="specClass" @tap="hideSpec">
		<!-- 遮罩层 -->
		<view class="mask"></view>
		<view class="layer" v-bind:style="{ height: wholeHeight+ 'px', bottom:- wholeHeight + 'px' }" @tap.stop="discard">
			<view class="content">
				<view class="flex-row headerList" style="display: flex;flex-direction: row;">
					<view class="flex-view-item specImg">
						<!-- v-if 判断src是否已经获取 防止小程序报错-->
						<image v-if='shopImgs' :src="ImageUrl+shopImgs"></image>
					</view>
					<view class="flex-view-item specsList">
						<text class="uni-goodsPrice" style="color: red;">
							<text>￥ {{totalPrice}}</text>
						</text>
						<text class="iconClose" @tap="hideSpec"><text class="iconfont icon-fork"></text></text>
						<view class="specsName"><text>材料：</text><text>{{cailList}}</text></view>
						<view class="specsName" style="width: 100%;word-break: break-all;"><text>工艺：</text><text v-for="(ite, index) in gongYiName" :key="index">{{gongYiLen == index+1?ite:ite+','}}</text></view>
						<view class="specsName"><text>规格：</text><text>{{guigWidth}}*{{guigHeight}}{{guigMonad}}</text></view>
					</view>
				</view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scroll="scroll" @scrolltolower="lower" @scrolltoupper="upper">
					<view class="scroll-view-item">
						<!-- 选择规格 -->
						<view class="clearfix specs">
							<view class="title titleList">选择规格：</view>
							<view style="padding: 0 10px 10px 0;">
								<view class="enter">
									<text>宽</text>
									<input type="number" pattern="[0-9]*" placeholder="请输入宽度" placeholder-style="color: #c0c0c0;font-size:0.7rem"
									 @focus="ficusInput" @blur="widthInput" v-model="width">
									<text>mm</text>
									<text style="padding: 20px;margin-left: 10px;"></text>
									<text>高</text>
									<input type="number" pattern="[0-9]*" placeholder="请输入高度" placeholder-style="color: #c0c0c0;font-size:0.7rem"
									 @focus="ficusInput" @blur="heightInput" v-model="height">
									<text style="margin-left: 7px;">mm</text>
								</view>
							</view>
							<view class="sp arrangement">
								<view @tap="norms(index)" v-for="(ggList,index) in unitlist" :key="index" :style="{color:(((ggList.width == guigWidth && ggList.height == guigHeight) || index == ggcheckNum)?'#FFF':'#000000'),background:(((ggList.width == guigWidth && ggList.height == guigHeight) || index == ggcheckNum)?'#FF0000':'#f3f2f8')}">{{ggList.width}}*{{ggList.height}}
									{{ggList.monad}}</view>
							</view>
						</view>
						<!-- 选择全部分类 -->
						<view v-for="(item,index) in allLevel" :key="index" style="border-bottom: 1px solid #aaa;margin-top: 15px;">
							<view class="title titleList">{{item.name}}：</view>
							<view class="sp">
								<view @tap="levelTap(index,ite.tid,inde)" v-for="(ite,inde) in item.items" :key="inde" :style="{color:(inde == item.checked ?'#FFF':'#000000'),background:(inde == item.checked ? '#FF0000':'#f3f2f8')}">{{ite.dname}}</view>
							</view>
						</view>

						<!-- 选择材料 -->
						<view>
							<view class="title titleList">选择材料：</view>
							<view class="sp">
								<view @tap="makings(index)" :data-gid="(stuffList.g_id)" v-for="(item,index) in stuffList" :key="index" :style="{color:((item.g_id == caiLiaoId || index == checkNum)?'#FFF':'#000000'),background:((item.g_id == caiLiaoId || index == checkNum)?'#FF0000':'#f3f2f8')}">{{item.g_name}}</view>
							</view>
						</view>
						
						<!-- 选择工艺 -->
						<view style="border-top: 1px solid #aaa;margin-top: 15px;">
							<view class="title titleList">选择工艺：</view>
							<view class="sp">
								<view @tap="craftTap(index,item)" :data-thid="(item.th_id)" v-for="(item, index) in craft" :key="index" :class="{'cur': item.action == 'false' ? false : true}">{{item.th_name}}</view>
							</view>
							<view style="color: #C0C0C0;padding: 0 2%;" :class="{gyshow: gongYiShow}">该材料没有可选择的工艺</view>
						</view>
						<view class="length" style="height: 60%;">
							<view class="text">数量：</view>
							<view class="number" style="margin-left: 12.4rem;margin-top: -1.2rem;">
								<view class="sub" @tap.stop="sub">
									<view class="icon jian"></view>
								</view>
								<view class="input" @tap.stop="discard">
									<input type="number"  v-model="number" @blur="numberInput" />
								</view>
								<view class="add" @tap.stop="add">
									<view class="icon jia"></view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="footer">
				<view class="btn" :style="{display:(buyOrShopcart==3?'':'none')}">
					<view class="button end" @tap="makingshideSpec">完成</view>
				</view>
				<!-- <view class="btn2" :style="{display:(buyOrShopcart==3?'none':'')}">
					<view class="joinCart" @tap="makingshideSpec(1)">加入购物车</view>
					<view class="buy end" @tap="makingshideSpec(2)">立即购买</view>
				</view> -->
				<view class="footer" :style="{display:(buyOrShopcart==3?'none':'')}">
					<view class="icons">
						
						<!-- #ifdef H5 -->
						<view class="box" @tap="share">
							<view class="icon fenxiang"></view>
							<view class="text">分享</view>
						</view>
						<!-- #endif -->
						
						<!-- #ifndef H5 -->
						<share  :screenData='screenInfo' :toShareData='shareData' style="z-index: 1001;"></share>
						<!-- #endif -->
						
						<view class="box" @tap="toChat">
							<view class="icon kefu"></view>
							<view class="text">客服</view>
						</view>
						<view class="box" @tap="goBackCart">
							<view class="icon cart"><text class="jiaobiao" :class="{JBnum:subscript}">{{shop}}</text></view>
							<view class="text">购物车</view>
						</view>
					</view>
					<view class="btns">
						<view class="joinCart" @tap="makingshideSpec(1)">加入购物车</view>
						<view class="buy end" @tap="makingshideSpec(2)">立即购买</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import route from "@/common/public.js"
	import share from "@/components/uni-share/share.vue"
	export default {
		components:{
			share
		},
		name: "uni-makings",
		data() {
			return {
				shop: 0,
				subscript: true, //购物车数量角标是否显示
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				product: '', //判断是从那个页面过来
				Signboard: '', //令牌
				Signguid: '', //用户id
				Partnerid: '', //客户ID
				dbname: '', //数据库
				token: '', //token值
				org: '', //加密狗
				ImageUrl: '', //商品图片
				selectSpec: null, //选中规格
				specClass: '', //规格弹窗css类，控制开关动画
				layerHeight: 0, //弹框高度
				ggcheckNum: -1, //规格按钮下标
				checkNum: -1, //材料选择下标
				number: 1, //数量
				shopImgs: '', //弹出层图片
				Price: '', // 商品单价价格
				defPrice: '', //商品价格
				unitlist: '', //规格大小
				cailList: '', //选中的材料
				caiLiaoId: '', //材料id
				stuffList: '', //材料列表
				guigWidth: '', //规格：宽
				guigHeight: '', //规格：高
				offerWidth: '', //规格：宽 报价使用
				offerHeight: '', //规格：高 报价使用
				guigMonad: '', //规格单位
				craft: [], //储存工艺数组
				gongYiLen: '', //工艺名称长度
				lpMoney: '', //工艺价格
				checkCraft: -1,
				gongYiId: [], //工艺id
				gongYiName: [], //工艺名称
				width: '', // 输入框 宽
				height: '', //输入框 高
				gongYiShow: false, //是否存在工艺提示
				typeid: '', //typeID
				totalPrice: '', //商品总价
				result: '', //判断是否存在登录的用户名
				RequestArray: '', //报价需要的参数json数组
				reqPrice: '', //未登录的情况下 从新登录点击立即购买或者加入购物车时 返回价格的参数值
				wholeHeight: 0, //页面高度（动态赋值）
				allLevel: [], //全部分类
				allSort: [], //分类替换数据数组
				allSortLen: '', //数组长度
				// levelSubscript: 0,  //下标
				buyOrShopcart:0,//0代表都没点，1.购物车，2.直接购买,3.购物车页面发起
			}
		},
		methods: {
			goBackCart(){
				this.$emit('goBackCart');
			},
			share(){
				this.$emit('share');
			},
			toChat(){
				this.$emit('toChat');
			},
			show(res) {
				setTimeout(() => {
					const larheight = uni.getSystemInfoSync();
					// #ifdef MP-WEIXIN
					this.wholeHeight = larheight.windowTop + larheight.windowBottom + larheight.windowHeight * 0.8 + 50; //动态设置页面高度
					// #endif
					// #ifndef MP-WEIXIN
					this.wholeHeight = larheight.windowTop + larheight.windowBottom + larheight.windowHeight * 0.8; //动态设置页面高度
					// #endif
					this.layerHeight = larheight.windowHeight * 0.8; //加入购物车动画加载
					this.specClass = 'show';
					this.ImageUrl = getApp().globalData.webUrl;
					this.Signboard = res.Signboard; //令牌
					this.Signguid = res.Signguid; //用户id
					this.shopImgs = res.shopImgs; //商品图片
					this.Price = res.Price; //商品价格
					this.totalPrice = res.Price; //商品价格
					this.stuffList = res.stuffList; //材料列表
					this.unitlist = res.unitlist; //规格列表
					this.Partnerid = res.Partnerid; //客户ID
					this.dbname = res.dbname; //数据库
					this.token = res.token; //令牌
					this.org = res.org; //加密狗
					this.result = res.userName; //判断是否存在登录的用户名
					this.typeid = res.type_id;
					this.buyOrShopcart = res.buyOrShopcart;
					if (res.product != 'product') { //判断:this.product不等于product 就从购物车过来的数据
						this.cailList = res.caiLInfo; //材料列表
						this.unitlist = res.unitlist; //规格列表
						this.gongYiFun(res.caiLiaoId); //调用工艺函数
						this.guigWidth = res.guigWidth; //宽	
						this.guigHeight = res.guigHeight; //高
						this.offerWidth = res.guigWidth / 1000; //报价请求 ：宽
						this.offerHeight = res.guigHeight / 1000; //报价请求 :高
						this.caiLiaoId = res.caiLiaoId; //材料IDS
						this.gongYiLen = res.rSelect.length; //工艺名称长度
						this.width = res.guigWidth;
						this.height = res.guigHeight;
						this.checkNum = res.checkNum;
						this.ggcheckNum = res.ggcheckNum;
						this.number = res.number;
						if(res.gongYiId != ''){
							this.gongYiId = res.gongYiId; //工艺ID
						}
						if(res.rSelect != ''){
							this.gongYiName = res.rSelect; //工艺名称
						}
					}
					// 获取全部分类数据
					uni.request({
						url: getApp().globalData.webUrl + '/pc/cds/cxxc',
						method: 'GET',
						data: {gid: res.type_id},
						success: (res) => {
							if (res.statusCode == 200) {
								if (res.data.level != '') {  //判断接口返回的数据是否为空
									this.allSort = res.data.level;  //this.allSort：储存接口拿回来的所有数据
									this.allSortLen = res.data.level.length;  //this.allSortLen：获取所有数据的长度
									this.allLevel.push(res.data.level[0]);  //this.allLevel：储存第一条数据
									let parent_id = res.data.level[0].items[0].tid;  //parent_id：获取第一条数据里的当前节点tid
									let levels = res.data.level[0].level + 1;  //levels：层级数（+1：是为了查找下一级的数据）
									this.draw(parent_id,levels);  //调用draw()公共函数：参数当前节点id 和 层级数
								}
							}
						}
					})
					let jsonList = uni.getStorageSync("jsonList"); //获取存储在Storage里的值
					let data = JSON.parse(jsonList); //JSON字符串转对象
					this.shop = data.shop; //购物车数量
					if (this.shop == 0) {
						this.subscript = true;
						this.Signboard, this.Signguid
					} else {
						this.subscript = false;
					}
					// #ifdef H5
					this.nativeShare = new NativeShare(); //定义分享
					// #endif
				}, 0);
			},
			//levles = 4  数据循环函数
			draw(parent_id, levels) {
				let _that = this;
				let array = [];
				let tid,level;
				let level_length = _that.allSortLen + 2;  
				let temp = JSON.parse(JSON.stringify(this.allSort));  //将数组取出来
				for (var i = 0; i < _that.allSortLen; i++) {  //循环所有数据长度
					if (temp[i].level == levels) {  //判断：当前层级数和传进来的层级数是否相等
						array = JSON.parse(JSON.stringify(temp[i]));  //将数组取出来
						let itemIndex = temp[i].items.length;  //当前的数组长度
						array.items = [];  //将array.items置空
						for (var j = 0; j < itemIndex; j++) {  //循环当前点击的数组长度
							if (parent_id == temp[i].items[j].pid) {  //判断传进来的当前节点和循环数组里的节点长度是否相等
									array.items.push(temp[i].items[j]);  //将数据加入到数组array.items中
							}
						}
						tid = array.items[0].tid;  //重新赋值当前节点id
						level = levels + 1;  //重新赋值下次层需要找的层级数
						_that.allLevel.push(array);  //将重新组装数组array赋值给allLevel全部数据
						break;
					}
				}
				if(level_length == levels){  //判断当前的层级数是否为最后一层，如果是就掉材料接口，不是就再次循环调用自己
					this.stuffFun(tid);  //调取材料函数
				}else{
					_that.draw(tid,level);  //调 数据循环函数  
				}
			},
			// 分类数据的点击事件
			levelTap(evt,tid,inde){
				let startIndex = evt + 1;  //当前下标+1 （为了找下一个）
				this.allLevel[evt].checked = inde;  //给数组里的checked赋值为当前点击的下标，切换选中状态
				if(startIndex == this.allSortLen){  //判断是不是最后一条数据
					this.stuffFun(tid);  //调取材料函数
					return false;
				}
				let levels = this.allLevel[evt].level + 1;    //层数
				let deleteNum = this.allSortLen - startIndex;  //删除条数：数组长度-当前下标
				this.allLevel.splice(startIndex,deleteNum);  //移除当前下标后面的所有数组
				this.draw(tid,levels);  //调 数据循环函数  
			},
			// 请求材料公共函数
			stuffFun(tid){
				uni.request({
					url: getApp().globalData.webUrl + '/pc/cds/getStuff',
					method: 'GET',
					data: {
						goods_id:tid,
					},
					success: (res) => {
						if(res.data.status == 0){
							this.stuffList = res.data.stuff;  //给材料列表赋值
						}
					}
				})
			},
			// 报价时请求的参数 (公共部分)
			requestFun() {
				return {
					'guigWidth': this.guigWidth,
					'guigHeight': this.guigHeight,
					"userName": this.result,
					'Partnerid': this.Partnerid,
					'token': this.token,
					'dbname': this.dbname,
					'org': this.org,
					'caiLiaoId': this.caiLiaoId,
					'offerWidth': this.offerWidth,
					'offerHeight': this.offerHeight,
					'LpidList': this.gongYiId,
					'number': this.number,
					'checkNum': this.checkNum,
					'ggcheckNum': this.ggcheckNum
				};
			},
			// 报价函数
			offer(e) {
				this.reqPrice = '';
				if (e.userName == '') {
					return false;
				}
				if (e.offerWidth != '' && e.offerHeight != '' && e.caiLiaoId != '') {
					let urlInfo = '{"params": [{"goodsid": "' + e.caiLiaoId + '","partnerid": "' + e.Partnerid + '","w": "' + e.offerWidth +
						'","h": "' + e.offerHeight + '","LpidList":"' + e.LpidList + '","qty": "' + e.number + '"}]}';
					uni.request({
						// #ifndef MP-WEIXIN
						url: "http://" + e.org + "/services/order/query",
						// #endif
						// #ifdef MP-WEIXIN
						url: route.varCsQuery + "/services/order/query",
						// #endif
						method: 'GET',
						data: {
							token: e.token, //令牌
							dbname: e.dbname, //数据库
							data: urlInfo, //其他参数
						},
						success: (res) => {
							if (res.data.status == 0) {
								let price = res.data.QueryResults[0]['price']; //单价
								let disPirce = res.data.QueryResults[0]['discprice']; //折扣后单价 （成交单价）
								let discMoney = res.data.QueryResults[0]['disctotalmoney']; //当前行的小计（以折后单价计算）+ 后期工艺价格
								let totalMoney = res.data.QueryResults[0]['totalmoney']; //当前行的小计（以指导单价计算）+ 后期工艺价格
								this.lpMoney = res.data.QueryResults[0]['lpmoney']; //工艺价格
								// 判断: 折扣后单价是否为空
								if (res.data.QueryResults[0]['discprice'] == 0) {
									// 总价-工艺价格 = 单价
									this.totalPrice = totalMoney.toFixed(2);  //总价
									this.Price = price.toFixed(2);  //单价
									
								}else {
									this.totalPrice = discMoney.toFixed(2);  //总价
									this.Price = price.toFixed(2);  //单价
								}
								// 未登录的情况下 从新登录点击立即购买或者加入购物车时 返回价格的参数值
								this.reqPrice = {
									'lpMoney': this.lpMoney,
									'Price': this.Price,
									'totalPrice': this.totalPrice,
									'touches': e.touches
								};
								if (e.clickNum == '1') { // clickNum：判断是否点击过加入购物车或者立即购买按钮（1为点击过）
									this.$emit("changeInfo", this.reqPrice); //返回主页面 （传参数）
								}
							} else if (res.data.status == 4) {
								uni.showToast({title: '请选择材料或规格',icon: 'none'})
							}
						},
						fail: (res) => {
							// uni.showToast({
							// 	title: '请求失败' + '错误码201',
							// 	icon: 'none'
							// })
						}
					})
				}
			},

			// 选择材料
			makings(index) {
				if (this.checkNum == index) {
					this.checkNum = -1;
					this.cailList = ''; //将选中的材料 打印到上面显示
					this.caiLiaoId = ''; //获取材料id
					this.craft = [];
					this.gongYiShow = false;
					return false;
				}
				this.craft = [];
				this.gongYiId = [];
				this.gongYiName = [];
				this.checkNum = index;
				this.cailList = this.stuffList[index].g_name; //将选中的材料 打印到上面显示
				this.caiLiaoId = this.stuffList[index].g_id; //获取材料id
				this.makingId = this.stuffList[index].g_id; //获取材料id

				if (this.guigWidth != '' && this.guigHeight != '') {
					let RequestArray = this.requestFun();
					this.offer(RequestArray); //调用报价接口
				}
				this.gongYiFun(this.makingId);
			},
			gongYiFun(gyId) {
				// 请求工艺接口
				uni.request({
					url: getApp().globalData.webUrl + '/mobile/order/shiftsTechelog',
					method: 'GET',
					data: {
						gid: gyId
					},
					success: (res) => {
						let result = route.publicIf(res.data)
						if (result == false) {
							return false;
						}
						if (res.data.status == 0) {
							// 判断工艺是否为空， null代表没有工艺
							if (res.data.technology == null) {
								this.craft = []; //将数组赋值为空
								this.gongYiName = [];
								this.gongYiId = [];
								this.gongYiShow = false;
							} else {
								this.gongYiShow = true;
								for(var i in res.data.technology){
									res.data.technology[i].action = 'false';
								}
								// 购物车点击判断是否存在该工艺,如果存在就选中
								for(var p in res.data.technology){
									for(var j in this.gongYiName){
										if(res.data.technology[p].th_name == this.gongYiName[j]){
											res.data.technology[p].action = 'true';
										}
									}
								}
								this.craft = [];
								this.craft = res.data.technology; //给craft（工艺数组）赋值
							}
						}
					},
					fail: (res) => {
						uni.hideLoading()
						uni.showToast({
							title: '请求失败' + '错误码201',
							icon: "none"
						});
						this.craft = ''; //将数组赋值为空
						this.gongYiName = [];
						this.gongYiId = [];
					}
				})
			},
			// 选择规格
			norms(e) {
				if (this.ggcheckNum == e) {
					this.ggcheckNum = -1;
					this.guigWidth = '';
					this.guigHeight = '';
					this.guigMonad = '';
					return false;
				}
				this.ggcheckNum = e;
				this.guigWidth = this.unitlist[e].width;
				this.guigHeight = this.unitlist[e].height;
				this.guigMonad = this.unitlist[e].monad;
				this.offerWidth = this.unitlist[e].width / 1000; //mm换算成m
				this.offerHeight = this.unitlist[e].height / 1000; //mm换算成m

				this.width = this.unitlist[e].width;
				this.height = this.unitlist[e].height;
				let RequestArray = this.requestFun();
				this.offer(RequestArray); //调用报价接口
			},
			// 当选择了规格后 点击输入框就会把选中的规格取消选中状态
			ficusInput(e) {
				this.ggcheckNum = -1
			},
			// 自定义规格:宽
			widthInput(e) {
				e.detail.value = e.detail.value.replace(/^0+/,"")
				//e.detail.value
				this.width = e.detail.value
				this.guigWidth = e.detail.value;
				this.offerWidth = e.detail.value / 1000; //mm换算成m
				let RequestArray = this.requestFun();
				this.offer(RequestArray); //调用报价接口
			},
			// 自定义规格:高
			heightInput(e) {
				e.detail.value = e.detail.value.replace(/^0+/,"")
				this.height = e.detail.value
				this.guigHeight = e.detail.value;
				this.offerHeight = e.detail.value / 1000; //mm换算成m
				this.guigMonad = 'mm';
				let RequestArray = this.requestFun();
				this.offer(RequestArray); //调用报价接口
			},
			// 工艺选中样式操作
			craftTap(index, evt) {
				this.checkCraft = index;
				if (this.gongYiName.indexOf(evt.th_name) != -1) {
					this.gongYiId.splice(this.gongYiId.indexOf('~' + evt.th_id + '~'), 1);
					this.gongYiName.splice(this.gongYiName.indexOf(evt.th_name), 1); //工艺名称 存在的话就不添加
					this.gongYiLen = this.gongYiName.length;
					this.craft[index].action = 'false';
					let RequestArray = this.requestFun();
					this.offer(RequestArray); //调用报价接口
				} else {
					this.gongYiId.push('~' + evt.th_id + '~'); //获取工艺ID 添加到yongYiId
					this.gongYiName.push(evt.th_name); //获取工艺名称 添加到gongYiName
					this.gongYiLen = this.gongYiName.length;
					this.craft[index].action = 'true';
					let RequestArray = this.requestFun();
					this.offer(RequestArray); //调用报价接口
				}
			},
			//减少数量
			sub() {
				if (this.number <= 1) {
					return;
				}
				this.number--;
				let RequestArray = this.requestFun();
				this.offer(RequestArray); //调用报价接口
			},
			//增加数量
			add() {
				this.number++;
				let RequestArray = this.requestFun();
				this.offer(RequestArray); //调用报价接口
			},
			// 输入框数量
			numberInput(e) {
				 if(!(/^\d+$/.test(e.detail.value)) || /\b(0+)/gi.test(e.detail.value)){
					this.number = '1'
				 }
				if(this.number == ''){
					this.number = '1'
				}
				if(this.number.length >=10 ){
					uni.showToast({
						title: '超出最大数量',
						icon: 'none'
					});
					this.number = '1';
				}
				let RequestArray = this.requestFun();
				this.offer(RequestArray); //调用报价接口
			},
			// 规格选中完后 点击加入购物车按钮
			makingshideSpec(e) {
				this.buyOrShopcart = e;
				this.result = route.checkStatus();
				if (this.checkNum == -1) {
					uni.showToast({
						title: '请选择材料',
						icon: 'none'
					});
					return false;
				} else if (this.guigWidth == '' || this.guigHeight == '' && this.ggcheckNum == -1) {
					uni.showToast({
						title: '请选择规格',
						icon: 'none'
					});
					return false;
				} else if (this.guigWidth == 0) {
					uni.showToast({
						title: '宽不能为0',
						icon: 'none'
					});
					return false;
				} else if (this.guigHeight == 0) {
					uni.showToast({
						title: '高不能为0',
						icon: 'none'
					});
					return false;
				} else {
					let RequestArray = this.requestFun();
					this.offer(RequestArray); //调用报价接口
					this.specClass = 'hide';
					this.allLevel = [];
					//回调
					this.selectSpec && this.specCallback && this.specCallback();
					this.specCallback = false;
					setTimeout(() => {
						this.specClass = 'none';
					}, 200);
				}
				this.isActive = false;
				// uni.navigateTo({
				// 	url:'../../pages/order/payment'
				// })
				// switch (this.buyOrShopcart){
				// 	case 2:
				// 		uni.navigateTo({
				// 			url: '../../pages/order/payment?Ident_Signboard=' + this.Signboard + '&Ident_Signguid=' + this.Signguid + '&long=' +
				// 				this.guigWidth + '&kuan=' + this.guigHeight +
				// 				'&clid=' + this.caiLiaoId + '&qty=' + this.number + '&total=' + this.totalPrice + '&price=' + this.Price + '&gyid=' +
				// 				this.gongYiId + '&gyname=' + this.rSelect +
				// 				'&spid=' + this.typeid + '&lpmoney=' + this.lpMoney + '&l=2'
				// 		});
				// 		// uni.navigateTo({
				// 		// 	url:'../../pages/order/payment'
				// 		// })
				// 		break;
				// 	default:
				// 		break;
				// }
				this.$emit("change", this.retmakings()); //返回主页面 （传参数）
			},
			// 储存返回参数 函数
			retmakings() {
				return {
					'guigWidth': this.guigWidth,
					'guigHeight': this.guigHeight,
					'guigMonad': this.guigMonad,
					'number': this.number,
					'cailList': this.cailList,
					'gongYiName': this.gongYiName,
					'Price': this.Price,
					'caiLiaoId': this.caiLiaoId,
					'gongYiId': this.gongYiId,
					'offerHeight': this.offerHeight,
					'offerWidth': this.offerWidth,
					"width": this.guigWidth,
					"height": this.guigHeight,
					'lpMoney': this.lpMoney,
					"totalPrice": this.totalPrice,
					'checkNum': this.checkNum,
					'ggcheckNum': this.ggcheckNum,
					'Signboard': this.Signboard,
					'Signguid': this.Signguid,
					'buyOrShopcart':this.buyOrShopcart
				}
			},
			//关闭规格弹窗
			hideSpec() {
				this.specClass = 'hide';
				//回调
				this.selectSpec && this.specCallback && this.specCallback();
				this.specCallback = false;
				setTimeout(() => {
					this.specClass = 'none';
				}, 200);
				this.isActive = false;
				this.allLevel = [];
				// this.Price = this.defPrice; //将价格恢复至原来的价格
				// this.checkNum = -1; //将材料选中的下标 变为默认的 不选中
				// this.caiLiaoId = ''; //将材料选中的下标 变为不选中
				// this.ggcheckNum = -1; //将规格中选中的 规格下标变为默认的 不选中
				// this.checkCraft = -1; //将规格中选中的 工艺下标变为默认的 不选中
				// this.craft = []; //将规格中选中的 工艺id全部清空
				// this.guigWidth = ''; //将规格宽 初始化（为空）
				// this.guigHeight = ''; //将规格高 初始化（为空）
				// this.guigMonad = ''; //将规格单位 初始化（为空）
				// this.width = '';
				// this.height = '';
				// // cailList    gongYiName  guigWidth  guigHeight  guigMonad  gongYiLen
				// this.cailList = '';
				// this.gongYiName = '';
				// this.allSort = [];
				// this.allSortLen = '';
				// this.allLevel = [];
			},
			// 页面滑动
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
			lower(e) {
				this.old.scrollTop = "100%";
			},
			upper(e) {
				this.old.scrollTop = "0";
			},
			// 关闭弹窗小事
			discard() {
				//丢弃
				// return;
			},
		},
		onShow() {
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/iconfont.css";
	@import "../../static/font.scss";
	@import "../../common/uni.css";

	page {
		background-color: #f8f8f8;
	}
	// 主页面底部样式
	// 数字角标
	.jiaobiao {
		width: 0.9rem;
		height: 0.9rem;
		font-size: 0.6rem;
		line-height: 0.9rem;
		border: 1ps solid red;
		border-radius: 50%;
		position: absolute;
		top: 0.1rem;
		color: #fff;
		background-color: #dd524d;
		text-align: center;
	}
	.JBnum {
		display: none;
	}
	.footer {
		position: fixed;
		bottom: 0upx;
		width: 92%;
		padding: 0 2%;
		height: 99upx;
		border-top: solid 1upx #eee;
		background-color: #fff;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.icons {
			display: flex;
			height: 80upx;
			margin-left: -4%;
			.box {
				width: 90upx;
				height: 80upx;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				.unibadge {
					z-index: 999;
					position: absolute;
					top: 3px;
					background-color: #FF0000;
					color: #FFF;
				}
				.icon {
					font-size: 40upx;
					color: #828282;
					margin-top: -3px;
				}
				.text {
					margin-top: -8px;
					display: flex;
					justify-content: center;
					width: 100%;
					font-size: 22upx;
					color: #666;
				}
			}
		}
	
		.btns {
			height: 80upx;
			border-radius: 40upx;
			overflow: hidden;
			display: flex;
			margin-right: -2%;
			.joinCart,
			.buy {
				height: 80upx;
				padding: 0 40upx;
				color: #fff;
				display: flex;
				align-items: center;
				font-size: 28upx;
			}
			.joinCart {
				background-color: #f0b46c;
			}
		}
	}
	.headerList{
		padding: 0 2%;
	}
	.fix {
		position: fixed;
	}

	.addToCart button {
		padding: 0 1rem;
	}

	.immediatePayment button {
		padding: 0 1rem;
	}

	.swiperImg {
		width: 100%;
		height: 100%;
	}

	.cur {
		/* #ifdef APP-PLUS||H5 */
		background-color: #FF0000 !important;
		/* #endif */
		background-color: #FF0000 !important;
		color: #FFF;
	}

	.technoList {
		text-align: left;
		padding: 10px;
	}

	.scroll-Y {
		box-sizing: border-box;
		padding-bottom: 100px;
		/* #ifndef APP-PLUS */
		max-height: 450px;
		/* #endif */
		/* #ifdef APP-PLUS */
		max-height: 470px;
		/* #endif */
		
	}

	.scroll-view-item {
		height: 86vh;
	}

	.specsList {
		padding: 10px 0 10px 10px;
	}

	.specImg image {
		width: 5rem;
		height: 5rem;
		position: relative;
		top: -1.5rem;
		background: #FFF;
		border-radius: 4px;
		border: #e5e5e5 solid 1px;
	}
	.iconClose{
		position: fixed;
		right: 24px;
	}
	.icon-fork{
		color: #666;
		font-size: 20px;
	}
	.specsName {
		width: 100%;
		color: #666;
		font-size: 12px
	}

	/* 伪元素是行内元素 正常浏览器清除浮动方法 */
	.clearfix:after {
		content: "";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}

	/* ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行 */
	.clearfix {
		zoom: 1;
	}

	/* // 弹出框-宽高输入框样式 */
	.specs{
		border-top: 1px solid #aaa;
		border-bottom: 1px solid #aaa;
		margin-top: 15px;
	}
	.enter {
		width: 18.4rem;
		display: flex !important;
		background: transparent !important;
		height: 40px;
		line-height: 40px;
		padding-bottom: 1px !important;
		padding: 0 2%;
	}

	.enter>input {
		width: 106px;
		margin: 0px;
		border: none;
		border-bottom: #E5E5E5 solid 1px;
		height: 39px;
		line-height: 39px;
		text-align: center;
		font-size: 0.7rem;
		color: #000000;
	}

	/* // 弹出框-选择工艺的样式 */
	.gyshow {
		display: none
	}

	@keyframes showPopup {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes hidePopup {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}

	@keyframes showLayer {
		0% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(-100%);
		}
	}

	@keyframes hideLayer {
		0% {
			transform: translateY(-100%);
		}

		100% {
			transform: translateY(0);
		}
	}

	.icon {
		font-size: 26upx;
	}

	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		top: 0;
		background-color: #f1f1f1;
		transition: opacity 0.05s linear;
	}

	.isActive {
		width: 100%;
		position: fixed;
		top: 0;
		height: 100%;
		overflow: hidden;
	}

	.popup {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 999;
		display: none;

		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 21;
			background-color: rgba(0, 0, 0, 0.6);
		}

		.layer {
			/* #ifdef MP-WEIXIN */
			height: 558.6px;
			bottom: -558px !important;
			/* #endif */
			position: absolute;
			display: block;
			z-index: 99;
			width: 100%;
			background-color: #fff;

			.content {
				width: 100%;
				padding: 20upx 0;
			}

			.btn {
				background-color: #fff;
				width: 100%;
				height: 100upx;
				position: fixed;
				bottom: 0;

				.button {
					width: 86%;
					height: 80upx;
					border-radius: 40upx;
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 28upx;
					z-index: 9999;
					margin-left: 7%;
				}
			}
			.btn2 {
				position: fixed;
				bottom: 0;
				width: 96vw;
				height: 34px;
				// border-radius: 40upx;
				// overflow: hidden;
				display: flex;
				align-items: center;
				justify-content: center;
				/* #ifdef MP-WEIXIN */
				width: 100%;
				background-color: #FFF;
				/* #endif */
				/* #ifdef APP-PLUS */
				height: 40px;
				/* #endif */
				.joinCart,
				.buy {
					width: 20vw;
					height: 80upx;
					padding: 0 80upx;
					margin: 0 20upx;
					color: #fff;
					display: flex;
					border-radius: 25px;
					align-items: center;
					justify-content: center;
					font-size: 28upx;
				}
				.joinCart {
					background-color: #f0b46c;
				}
			}
		}

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.2s linear both;
			}

			.layer {
				animation: showLayer 0.2s linear both;
			}
		}

		&.hide {
			display: block;

			.mask {
				animation: hidePopup 0.2s linear both;
			}

			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}

		&.none {
			display: none;
		}

		&.service {
			.row {
				margin: 30upx 0;

				.title {
					font-size: 30upx;
					margin: 10upx 0;
				}
				.description {
					font-size: 28upx;
					color: #999;
				}
			}
		}

		&.spec {
			.title {
				font-size: 30upx;
				margin: 30upx 0;
				padding: 0 2%;
			}
			.sp {
				width: 100%;
				display: -webkit-box;
				padding: 0 2%;
				view {
					font-size: 28upx;
					padding: 5upx 20upx;
					border-radius: 28upx;
					margin: 0 30upx 20upx 0;
					background-color: #f6f6f6;
					display: inline-block;
					

					&.on {
						padding: 3upx 18upx;
						border: solid 1upx #f47925;
						background-color: #f47925;
					}
				}
			}

			.length {
				height: 800upx;
				margin-top: 30upx;
				border-top: solid 1upx #aaa;
				justify-content: space-between;
				align-items: center;
				padding-top: 20upx;
				padding: 2%;

				.text {
					font-size: 30upx;
				}

				.number {
					display: flex;
					align-items: center;
					margin-top: 10px;

					.input {
						width: 80upx;
						height: 60upx;
						margin: 0 10upx;
						background-color: #f3f3f3;
						display: flex;
						justify-content: center;
						align-items: center;
						text-align: center;

						input {
							width: 80upx;
							height: 60upx;
							display: flex;
							justify-content: center;
							align-items: center;
							text-align: center;
							font-size: 26upx;
							z-index: 0;
						}
					}

					.sub,
					.add {
						width: 60upx;
						height: 60upx;
						background-color: #f3f3f3;
						border-radius: 5upx;

						.icon {
							font-size: 30upx;
							width: 60upx;
							height: 60upx;
							display: flex;
							justify-content: center;
							align-items: center;

						}
					}
				}
			}

		}
	}
	/* #ifdef MP-WEIXIN */
	.titleList{
		// position: relative;
	}
	.enter{
		margin-left: 10px !important;
	}
	/* #endif */
</style>
