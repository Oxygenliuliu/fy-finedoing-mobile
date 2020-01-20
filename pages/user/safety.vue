<template>
	<view >
		<view class="uni-padding-wrap uni-common-mt" style="height: 550px;">
			<uni-view class="uni-active">
				<uni-view class="uni-list-cell" id="navbottom" @tap="changepwd">
					<uni-view class="uni-list-cell-navigate uni-navigate-right">修改登录密码</uni-view>
				</uni-view>
				<uni-view class="uni-list-cell" @tap="judge(2)" >
					<uni-view class="uni-list-cell-navigate uni-navigate-right">找回登录密码</uni-view>
				</uni-view>
				<uni-view class="uni-list-cell" @tap="judge(1)">
					<uni-view class="uni-list-cell-navigate uni-navigate-right">修改支付密码</uni-view>
				</uni-view>
				<uni-view class="uni-list-cell" @tap="judge(4)">
					<uni-view class="uni-list-cell-navigate uni-navigate-right">找回支付密码</uni-view>
				</uni-view>
				<uni-view class="uni-list-cell" @tap="judge(3)">
					<uni-view class="uni-list-cell-navigate uni-navigate-right">更改绑定手机</uni-view>
				</uni-view>
				<uni-view  class="uni-list-cell" @tap="judge(5)">
					<uni-view class="uni-list-cell-navigate uni-navigate-right">实名认证</uni-view>
				</uni-view>
			</uni-view>	
		</view>
		<copyright></copyright>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon/uni-icons.vue"
	import route from "@/common/public.js"
	import copyright from "@/components/customize/copyright.vue"
	export default {
		components: {uniIcon,copyright},
		methods:{
			changepwd: function (option) { //option为object类型，会序列化上个页面传递的参数
				uni.navigateTo({
					url: '../user/change_password'
				});
			},
			
			judge(evt){
				var jsonList=uni.getStorageSync("jsonList");
				var data = JSON.parse(jsonList); //JSON字符串转对象
				this.dis=data.dis;
				/* 判断是否为公司账号 如果不是就显示弹框对用户进行提示 */
				if(this.dis!="COMPANY"){
					uni.showToast({
						title:'当前账号为子账号，暂无权进行操作',
						icon:'none'
					})
				}else{
					switch (evt){
						case 1:
							uni.navigateTo({
								url:'../user/change_payment'
							})
							break;
						case 2:
							uni.navigateTo({
								url:'../index/retrievepwd'
							})
							break;
						case 3:
							uni.navigateTo({
								url:'../user/change_phone'
							})
							break;
						case 4:
							uni.navigateTo({
								url:'../user/change_payment?cztime=3'
							})
							break;
						case 5:
							uni.navigateTo({
								url:'../user/certificates'
							})
							break;
						default:
							break;
					}
				}
			}
		},
		onShow() {
			var jsonList=uni.getStorageSync("jsonList");
			var data = JSON.parse(jsonList); //JSON字符串转对象
			route.checkCsid(data.csid);
		}
	}
</script>

<style>
	@import "../../common/uni.css";
	page{
		overflow: hidden;
	}
	.uni-bottom{
		position: absolute;
		bottom: 10px;
	}
/* 	.uni-list::before,.uni-list::after,.uni-list-cell::before,.uni-list-cell::after{
		display: none;
	}
	.uni-collapse .uni-list-cell{
		padding-left: 0;
		border-bottom: 1px #F7f7f7 solid;
	} */
 	.uni-list-cell-navigate{
		font-size: 0.7rem;
	}
</style>
