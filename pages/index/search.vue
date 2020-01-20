<template>
	<view class="page">
		<view class="uni-count flex-row" style="display: flex;">
			<view class="flex-view-item search">
				<div class="he_soss">
					<input id="soss" focus='true' type="text" @input="ipt_keyword" :value="goodsname" placeholder="请输入您需要查找的内容">
					<span class="uni-icon uni-icon-search he_so_icon"  @tap="btn_search"></span>
				</div>
			</view>
		</view>
		<!-- 历史搜索 -->
		<view class="so_from" >
			<p>历史搜索：</p>
			<view class="clear_btn" @tap="clear_keyword"><text class="iconfont icon-delete"></text></view>
			<view class="history_btn_list" v-for="(item , index) in hash_list" :key="index">
				<button class="history_btn"  size="mini" @click="history_btn_search(item)">{{item}}</button>
			</view>
		</view>
		<view class="uni-product-list">
			<view class="uni-product" v-for="(product,index) in productList" :key="index">
				<navigator :url="'../product/productinfo?type='+(product.ty_id)" :data-tid=(product.ty_id)>
				<view class="image-view">
					<!-- #ifdef H5 -->
					<img v-lazy="imgUrl+product.img" class="image">
					<!-- #endif -->
					<!-- #ifndef H5-->
					<image :src="imgUrl+product.img" lazy-load='true' class="image"></image>
					<!-- #endif -->
				</view>
				<view class="uni-product-title">{{product.ty_name}}</view>
				<view class="uni-product-price">
					<text class="uni-product-price-original">￥{{product.price || ''}}</text>
					<text class="uni-product-tip">{{product.ty_id}}</text>
				</view>
				</navigator>
			</view>
		</view>
	</view>
</template>
<script>
	import route from "@/common/public.js"
	import Vue from 'vue'
	import lazy from "@/common/vue-lazyload.js"
	Vue.use(lazy)
	export default{
		data(){
			return{
				imgUrl :'',  //图片访问ip
				goodsname:"", //拼接后的完整地址
				datalist:[],//缓存对象
				hash_list:[],//首次加载显示数据
				isExist:0,//判断关键词是否存在，-1存在,0为空值，1不存在，默认为0
				title: 'product-list',
                productList: [],
                renderImage: false,
				// searchGodsName: '',
				// search_list: ''
			}
		},
		methods:{
			ipt_keyword(evt){
				this.goodsname = evt.target.value.trim();
				// this.searchGodsName = evt.target.value.trim();// 去掉空格的搜索结果
			},
			check_exist_keyword(arr,val){// 查看关键词是否已经存在
				for (var i = 0; i < arr.length; i++) {
					if(arr[i]==val){
						return this.isExist= -1;
					}else{
						this.isExist= 1;
					}
				}
			},
			clear_keyword() {// 清除历史记录按钮
				try {
					uni.showModal({
						title: '提示',
						content: '是否确认清除搜索记录',
						success:  (res)=> {
							if (res.confirm) {
								//uni.removeStorageSync('search_list');
								uni.setStorageSync('search_list',[])
								this.hash_list = uni.getStorageSync('search_list');// 清空数据之后重新赋值
							} else if (res.cancel) {
								// 用户点击取消逻辑
							}
						}
					});
				} catch (e) {
					// error
				}
			},
			history_btn_search(val){// 点击历史记录搜索
				this.goodsname=val;
				this.loadData();
				setTimeout(() => {
				    this.renderImage = true;
				}, 300);
			},
			btn_search(evt){//点击搜索按钮
				if(this.goodsname == ''){
					uni.showToast({
						title: '请输入您需要查找的内容',
						icon: 'none'
					})
					return false;
				}else{
					let search_list = uni.getStorageSync('search_list');
					let searchGodsName = this.goodsname;
					this.isExist = this.check_exist_keyword(search_list, searchGodsName);
					if(this.isExist == -1){
						return false;
					}else if(searchGodsName == ''){
						return false;
					}else{
						if(search_list){
							this.datalist = search_list;
						}
						this.datalist.push(searchGodsName);
						try {
							uni.setStorageSync('search_list', this.datalist);
						} catch (e) {
							// error
						}
					}
					this.hash_list = uni.getStorageSync('search_list')
					this.loadData();
					setTimeout(() => {
					    this.renderImage = true;
					}, 300);
				}
			},
			loadData(action = 'add') {// 调用api查询搜索结果
				uni.request({
						url:getApp().globalData.webUrl+'/mobile/index/ProductSearch',
						method:'GET',
						data:{
							goodsname: this.goodsname,
						},
						success: (res) => {
							if (res.data.status==0){
								this.productList = [];
								res.data.data.forEach(item => {
								    this.productList.push(item);
								});
								console.log(this.productList)
							} else{
								uni.showToast({
									title: res.data.message+'，请重新输入',
									icon:'none',
									duration: 3000
								})
							}
						}
					})  
            },
			doRefresh() {// 下拉刷新函数
			// #ifndef H5 
			setTimeout(()=> {
						this.loadData();
						this.productList = [];
						uni.showToast({
							title:'数据已刷新',
							icon:'none'
						});
						setTimeout(() => {
							uni.stopPullDownRefresh();// 停止下拉刷新
							this.renderImage = true;
						}, 300);
			},2900)
			// #endif
			// #ifdef H5
			setTimeout(()=> {
				uni.startPullDownRefresh({
					success:()=> {
						this.loadData();
						this.productList = [];
						uni.showToast({
							title:'数据已刷新',
							icon:'none'
						});
						setTimeout(() => {
							   this.renderImage = true;
						}, 300);
					},
					fail:item=> {
						uni.showToast({
							title:'获取失败',
							icon:'none'
						})
					}
				})
			},2900)
			// #endif
			}
		},
		onLoad() {
			console.log(getApp().globalData.webUrl)
			this.imgUrl = getApp().globalData.webUrl;  //图片访问IP
            this.hash_list=uni.getStorageSync('search_list');
        },
		onPullDownRefresh() {// 下拉事件
		 // 微信下拉刷新会重复多次 wx.stopPullDownRefresh();
		this.doRefresh()
		},
	}
</script>
<style scoped lang='scss'>
@import "../../common/uni.css";
@import "../../static/css/base.scss";
@import "../../common/iconfont.css";
	.uni-count{
		width: 90%;
		height: 44px;
		z-index: 999;
		position: fixed;
		top: 0;
		left: 10%;
	}
	uni-view.search {
		width: 98%;
	}	
	.he_so_icon{
		font-size: 20px;
		width: 10vw;
		text-align: right;
	}
	.he_soss {
		flex-grow: 1;
		display: flex;
		height: 30px;
		line-height: 30px;
		border: none;
		border-radius: 38px;
		padding: 0px 8px;
		align-items: center;
		background: #FFF;
		margin-top: 6px;
	}
	#soss {
		width: 90vw;
		border: none;
		padding: 0px;
		margin: 0px;
		height: 28px;
	}
	.proBtn{
		width: 10px;
		padding: 4px 6px;
		margin: 0px 10px;
		flex-grow: 1;
		border: none;
		background: #e43130;
		color: #FFF;
		font-size: 14px
	}
	.uni-tag--error[data-v-69998649] {
		border: 1px solid #dd524d;
		padding: 1px 4px;
		background: #e43130;
		color: #FFF;
		border-radius: 5px;
	}
	.tag-view[data-v-cc68ed8e] {
		margin: 8px 10px;
		display: inline-block;
	}
	/* 历史搜索 */
	.so_from {
		font-size: 12px;
		border-top: #E3E3E3 solid 1px;
		width: 97%;
		    padding: 0 0.3rem;
		background: #FFF;
		position: absolute;
		z-index: 200;
	}
	.so_from p{
		padding: 10px;
		font-weight: 700;
	}
	.history_btn {
		padding: 0 0.5rem;
		margin: 0.3rem 0.2rem;
		font-size: 12px;
		float: left;
		overflow: hidden;
		color: rgb(102,102,102);
		background: reb(102,102,102);
	}
	uni-button{
		background: #f0f2f5;
	}
	uni-button:after {
		border: 0;
	}
	.clear_btn {
		float: right;
		display: block;
		position: absolute;
		top: -1px;
		right: 5px;
	}
	.clear_btn>.icon-delete{
		color: #8F8F94;
	}
	page {
	    background: #F8F8F8;
	}
	view {
	    font-size: 28upx;
	}
	.uni-product-list {
		position: relative;
		z-index: 555;
		background: #ffffff;
	    display: flex;
	    width: 100%;
	    flex-wrap: wrap;
	    flex-direction: row;
		overflow:auto;
	}
	.uni-product {
		width: 45%;
	    padding: 10px 0 10px 3.2%;
	    display: flex;
	    flex-direction: column;
		/* #ifdef MP-WEIXIN||APP-PLUS */
		height: 210px;
		padding: 10px 0 30px 3.2%;
		/* #endif */
	}
	.image-view {
	    height: 100%;
	    width: 100%;
	    margin: 12upx 0;
	}
	img.image{
		width: 100%;
		height: 100%;
	}
	.uni-product-image {
	    height: 330upx;
	    width: 330upx;
	}
	.uni-product-title {
	    width: 300upx;
	    word-break: break-all;
	    display: list-item;
	    overflow: hidden;
	    line-height: 1.5;
	    text-overflow: ellipsis;
	    -webkit-box-orient: vertical;
	    -webkit-line-clamp: 2;
		white-space: nowrap;
		text-overflow: ellipsis;
		/* #ifdef MP-WEIXIN */
		margin-top: 20px;
		/* #endif */
	}
	.uni-product-price {
	    margin-top: 10upx;
	    font-size: 28upx;
	    line-height: 1.5;
	    position: relative;
	}
	.uni-product-price-original {
	    color: #ff0000;
	}
	.uni-product-price-favour {
	    color: #888888;
	    text-decoration: line-through;
	    margin-left: 10upx;
	}
	.uni-product-tip {
		display: none;
	    position: absolute;
	    right: 10upx;
	    background-color: #ff3333;
	    color: #ffffff;
	    padding: 0 10upx;
	    border-radius: 5upx;
	}
	/* #ifndef H5 */
	image.image{
		width: 100%;
		height: 25vh;
	}
	.uni-count{
		width: 100%;
		left: 0;
		border: none;
		background: rgb(248,248,248);
		border-radius: 0;
		.search{
			margin-left: 5%;
			width: 90%;
		}
	}
		/*历史记录*/
		.so_from{
			top:50px;
		}
		/*图片展示内容*/
		.uni-product-list{
			margin-top: 50px;
			.uni-product{
				height: 205px;
				navigator {
					height: 160px;
					/* #ifdef APP-PLUS */
					height: 175px;
					/* #endif */
				}
			}
		}
	/* #endif */
</style>
