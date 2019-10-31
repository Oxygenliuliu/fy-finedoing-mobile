<template>
	<view class="page">
		<view class="uni-count flex-row" style="display: flex;">
			<view class="flex-view-item search">
				<div class="he_soss">
					<!-- <span class="uni-icon uni-icon-search he_so_icon"></span> -->
					<input id="soss" focus='true' type="text" @blur="ipt_keyword" :value="(goodsname)" placeholder="请输入您需要查找的内容">
					<span class="uni-icon uni-icon-search he_so_icon"  @tap="btn_search"></span>
				</div>
			</view>
			<!-- <view class="flex-view-item search-btn"> -->
				<!-- <button class="proBtn">搜索</button> -->
				<!-- <uni-view data-v-cc68ed8e="" class="tag-view">
					<uni-view data-v-69998649="" data-v-cc68ed8e="" class="uni-tag uni-tag--normal uni-tag--error" @tap="btn_search()">搜索</uni-view>
				</uni-view>
			</view> -->
		</view>
		<!-- 历史搜索 -->
		<view class="so_from" >
			<p>历史搜索：</p>
			<button class="clear_btn" @click="clear_keyword()">删</button>
			<view class="history_btn_list" v-for="(item , index) in hash_list" :key="index">
				<button class="history_btn"  size="mini" @click="history_btn_search(item)">{{item}}</button>
			</view>
		</view>
		
		<view class="uni-product-list">
			<view class="uni-product" v-for="(product,index) in productList" :key="index">
				<navigator :url="'../product/productinfo?type='+(product.ty_id)" :data-tid=(product.ty_id)>
				<view class="image-view">
					<img v-lazy="imgUrl+product.img" class="image">
				</view>
				<view class="uni-product-title">{{product.ty_name}}</view>
				<view class="uni-product-price">
					<text class="uni-product-price-original">￥{{product.price}}</text>
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
                renderImage: false
			}
		},
		methods:{
			ipt_keyword:function(evt){
				this.goodsname=evt.target.value;
				this.isExist=this.check_exist_keyword(uni.getStorageSync('search_list'),(evt.target.value).trim());
				if(this.isExist==-1){
					console.log('该词已经存在!')
					return false;
				}else if((evt.target.value).trim()==''){
					console.log('请输入您需要查找的内容！')
					return false;
				}else{
					if(uni.getStorageSync('search_list')){
						this.datalist=uni.getStorageSync('search_list');
					}
					this.datalist.push(evt.target.value.trim());
					try {
						uni.setStorageSync('search_list', this.datalist);
					} catch (e) {
						console.log('没有缓存起')// error
					}
				}
				
			},
			
			check_exist_keyword:function(arr,val){
				for (var i = 0; i < arr.length; i++) {
					if(arr[i]==val){
						return this.isExist= -1;
					}else{
						this.isExist= 1;
					}
				}
			},
			clear_keyword:function(){
				try {
					uni.showModal({
						title: '提示',
						content: '是否确认清除搜索记录',
						success: function (res) {
							if (res.confirm) {
								uni.removeStorageSync('search_list');
								uni.redirectTo({
									url: "../index/search"
								})
							} else if (res.cancel) {
								
							}
						}
					});
				} catch (e) {
					// error
				}
			},
			history_btn_search(val){
				this.goodsname=val;
				this.loadData();
				setTimeout(() => {
				    this.renderImage = true;
				}, 300);
			},
			btn_search(evt){
				console.log(this)
				if(this.goodsname == ''){
					uni.showToast({
						title: '请输入您需要查找的内容',
						icon: 'none'
					})
					return false;
				}else{
					this.hash_list = uni.getStorageSync('search_list')
					this.loadData();
					setTimeout(() => {
					    this.renderImage = true;
					}, 300);
				}
			},
			loadData(action = 'add') {
				uni.request({
						url:route.variable+'/mobile/index/ProductSearch',
						method:'GET',
						data:{
							goodsname: this.goodsname,
						},
						success: (res) => {
							console.log(res);
							if (res.data.status==0){
								this.productList = [];
								res.data.data.forEach(item => {
								    this.productList.push(item);
								});
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
		},
		onLoad() {
			this.imgUrl = route.variable;  //图片访问IP
            this.hash_list=uni.getStorageSync('search_list');
        },
		onReady() {
			
		},
		 onPullDownRefresh() {// 下拉事件
		 let _this = this;
		 setTimeout(function() {
			 _this.productList = [];
		 },2900)
			setTimeout(function() {
				uni.startPullDownRefresh({
					success:function() {
						_this.loadData();
						uni.showToast({
							title:'数据已刷新',
							icon:'none'
						});
						setTimeout(() => {
						    _this.renderImage = true;
						}, 300);
					},
					fail:item=> {
						uni.showToast({
							title:'获取失败',
							icon:'none'
						})
					}
				})
			},3000)
		},

	}
</script>

<style scoped>
@import "../../common/uni.css";
@import "../../static/css/base.scss";
/* 	uni-page-wrapper{
		overflow-x: hidden;
	} */

	.uni-count{
		width: 90%;
		height: 44px;
		z-index: 999;
		position: fixed;
		top: 0;
		left: 10%;
	}
/* 	.uni-back{
		max-height: 44px;
		line-height: 44px;
		color: #999;
	}
	 */
	/* 搜索框 */
	/* uni-view.search {
		width: 80%;
	}	 */
	/* 改 */
	uni-view.search {
		width: 98%;
	}	
	/* uni-view.search-btn {
		width: 20%;
		text-align: center;
	} */
	/* .he_so_icon{
		font-size: 20px;
	} */
	/* 改 */
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
		/* margin-left: 2.3rem; */
	}
	#soss {
		/* width: 60vw; */
		/* 改 */
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
		background: url(//st.360buyimg.com/so/images/layout/search-sprites.png) no-repeat;
		height: 15px;
		width: 15px;
		background-position: 0 -35px;
		background-size: 50px 50px;
		position: relative;
		top: -31px;
		right: 5px;
	}
	
	
	/* product */
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
		/* overflow-x: hidden; */
	}
	
	.uni-product {
		width: 45%;
	    padding: 10px 0 10px 3.2%;
	    display: flex;
	    flex-direction: column;
	}
	
	.image-view {
	    height: 100%;
	    width: 100%;
		/* max-height: 150px; */
	    margin: 12upx 0;
	}
	
	img.image {
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
</style>
