<template>
	<view>
		<view style="height: 560px;width: 100%;position: fixed;">
			<view class="example">
				<uni-steps :options="list1" :active="ceractive" />
			</view>
			<view :class="{cert:certificates}">
				<view class="cert-text">认证资料提交：</view>
				<view class="cert-text">1.企业营业执照（需含年检部分）</view>
				<view class="cert-text">2.企业法人身份证原件（需正反两面）</view>
				<view class="cert-text">3.真实场地信息照</view>
			</view>
			<view class="flex-row" style="display: flex;flex-wrap:wrap;padding: 10px 20px;justify-content: center;">
				<view class="viewImg" :class="{cert:certificates}">
					<view :class="{viewone:viewOne == false ? false : true}" @tap="chooseImage(0)">
						<view class="certview"><text class="iconfont icon-ID-positive"></text></view>
						<view class="certview">身份证（正面）</view>
					</view>
					<!-- <view class="canvasView" :class="{imgone:viewOne == false ? true : false}" @tap="chooseImage(0,'myCanvasOne')">
						<canvas style="display: inline-block; vertical-align: middle;" :style="{width:sizeW+'px',height:sizeH+'px'}"
						 canvas-id="myCanvasOne" id="myCanvasOne"></canvas>
					</view> -->
					<image class="uni-uploader__img" :class="{imgone:viewOne == false ? true : false}" :src="(imageList[0])" :data-src="imageList[0]" @tap="chooseImage(0)"></image>
				</view>
				<view class="viewImg viewLeft" :class="{cert:certificates}">
					<view :class="{viewtwo:viewTwo == false ? false : true}" @tap="chooseImage(1)">
						<view class="certview"><text class="iconfont icon-ID-back"></text></view>
						<view class="certview">身份证（反面）</view>
					</view>
					<!-- <view class="canvasView" :class="{imgtwo:viewTwo == false ? true : false}" @tap="chooseImage(1,'myCanvasTwo')">
						<canvas style="display: inline-block; vertical-align: middle;" :style="{width:sizeW+'px',height:sizeH+'px'}"
						 canvas-id="myCanvasTwo" id="myCanvasTwo"></canvas>
					</view> -->
					<image class="uni-uploader__img" :class="{imgtwo:viewTwo == false ? true : false}" :src="(imageList[1])" :data-src="imageList[1]" @tap="chooseImage(1)"></image>
				</view>
				<view class="viewImg viewTop" :class="{cert:certificates}">
					<view :class="{viewthree:viewThree == false ? false : true}" @tap="chooseImage(2)">
						<view class="certview"><text class="iconfont icon-business-license"></text></view>
						<view class="certview">企业营业执照</view>
					</view>
					<!-- <view class="canvasView" :class="{imgthree:viewThree == false ? true : false}" @tap="chooseImage(2,'myCanvasThree')">
						<canvas style="display: inline-block; vertical-align: middle;" :style="{width:sizeW+'px',height:sizeH+'px'}"
						 canvas-id="myCanvasThree" id="myCanvasThree"></canvas>
					</view> -->
					<image class="uni-uploader__img" :class="{imgthree:viewThree == false ? true : false}" :src="(imageList[2])" :data-src="imageList[2]" @tap="chooseImage(2)"></image>
				</view>
				<view class="viewImg viewTop viewLeft" :class="{cert:certificates}">
					<view :class="{viewfour:viewFour == false ? false : true}" @tap="chooseImage(3)">
						<view class="certview"><text class="iconfont icon-field"></text></view>
						<view class="certview">真实场地信息照</view>
					</view>
					<image class="uni-uploader__img" :class="{imgfour:viewFour == false ? true : false}" :src="(imageList[3])" :data-src="imageList[3]" @tap="chooseImage(3)"></image>
				</view>
			</view>
			<view>
				<view class="Success" :class="{errsucc:Success}">
					<!-- 审核成功 -->
					<view><text class="iconfont icon-chenggong"></text></view>
					<view class="errortext">{{errorMsg}}</view>
				</view>
				<view class="fail" :class="{errfail:Fial}">
					<!-- 审核失败 -->
					<view><text class="iconfont icon-shibai"></text></view>
					<view class="errortext">{{errorMsg}}</view>
					<view class="errorFail">{{errorFail}}</view>
					<button class="againBtn" size="mini" type="warn" @tap="againBtn">重新上传</button>
				</view>
				<view class="examine" :class="{shen:Examine}">
					<!-- 审核中 -->
					<view><text class="iconfont icon-shenhezhong"></text></view>
					<view class="errortext">{{errorMsg}}</view>
					<view class="errorMsg">{{error}}</view>
				</view>
			</view>
			<view class="uni-count end" :class="{buts:Submission}">
				<view class="uni-addBtn">
					<view class="addBtn" @tap="uploadFile">提 交</view>
				</view>
			</view>
			<!-- #ifdef MP-WEIXIN||APP-PLUS -->
			<view class="canvasMask" :style="{width:sizeW+'px',height:sizeH+'px'}"><canvas canvas-id="myCanvas" :style="{width:sizeW+'px',height:sizeH+'px'}"></canvas></view>
			<!-- #endif -->
		</view>
		<copyright class="copy"></copyright>
	</view>
</template>

<script>
	import route from "@/common/public.js"
	import {
		pathToBase64,
		base64ToPath
	} from "../../common/js/base.js" //转换base64
	import uniSteps from "@/components/uni-steps/uni-steps.vue"
	import copyright from "@/components/customize/copyright.vue"
	export default {
		components: {
			uniSteps,copyright
		},
		data() {
			return {
				ceractive: -1, //默认显示哪一个
				list1: [{
					title: '采集信息'
				}, {
					title: '审核中'
				}, {
					title: '审核是否通过'
				}],
				certificates: true, //图片列表选择
				viewOne: false,
				viewTwo: false,
				viewThree: false,
				viewFour: false,
				imageList: ['', '', '', ''], //照片列表
				imgFile: ['', '', '', ''], //压缩后图片路径
				Signboard: '', //令牌
				Signguid: '', //用户id
				cerIndex: '', //当前点击选择上传的下标
				errorMsg: '', //错误提示
				Submission: true, //提交按钮是否显示
				Success: true, //成功
				Fial: true, //失败
				errorFail: '', //失败的提示
				Examine: true, //审核中
				error: '', //审核中的提示
				sizeH: '',
				sizeW: '',
				ImgSrc: '', //临时路径
			}
		},
		// mounted() {
		// 	this.isNoIos();
		// },
		methods: {
			// isNoIos(){
			//    //获取浏览器的userAgent,并转化为小写
			//    	var ua = navigator.userAgent.toLowerCase();
			//     //判断是否是苹果手机，是则是true
			//    	var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
			//    	if (isIos) {
			//        this.$delete(this.$refs.cameraInput,'capture');
			//   	}
			// },
			// isgetSetting(e){
			// 	// 先判断定位权限是否开启
			// 	uni.authorize({
			// 		scope: 'scope.camera',
			// 		success: (res) => {
			// 			this.chooseImage();
			// 		},
			// 		fail: (res) => {
			// 			uni.getSetting({
			// 				success: (res) => {
			// 					let authStatus = res.authSetting['scope.camera'];
			// 					if (!authStatus) {
			// 						uni.showModal({
			// 							title: '授权失败',
			// 							content: 'Hello uni-app需要使用您的相机，请在设置界面打开相关权限',
			// 							success: (res) => {
			// 								if (res.confirm) {
			// 									uni.openSetting()
			// 								}
			// 							}
			// 						})
			// 					}
			// 				}
			// 			})
			// 		}
			// 	})
				   //  uni.getLocation({
				   //      success(){
				   //          //定位权限开启，打开地图
				   //          // uni.chooseLocation({
				   //          //     success // 成功回调
				   //          // })
							
				   //      },
				   //      fail(e) {
				   //          // 定位权限未开启，引导设置
				   //          uni.showModal({
				   //              title: '温馨提示',
				   //              content: '您已拒绝定位,请开启',
				   //              confirmText: '去设置',
				   //              success(res){
				   //                  if (res.confirm) {
				   //                      //打开授权设置
				   //                      openSetting()
				   //                  }
				   //              }
				   //          })
				   //      }
				   //  })
			// },
			// 点击 选择上传图片
			chooseImage(e) {
				var _that = this;
				_that.cerIndex = e;
				uni.chooseImage({
					sizeType: ['compressed'],
					sourceType: ['album','camera'], //从相册选择
					count: 1,
					success: (res) => {
						// _that.ImgSrc = res.tempFilePaths[0];
						// $set(): 在数组里面创建一个东西
						_that.$set(_that.imageList, e, res.tempFilePaths[0]);
						switch (e) {
							case 0:
								_that.viewOne = true;
								break;
							case 1:
								_that.viewTwo = true;
								break;
							case 2:
								_that.viewThree = true;
								break;
							default:
								_that.viewFour = true;
								break;
						}
						// #ifdef MP-WEIXIN||APP-PLUS
						// 判断size是否大于2.5M,大于就进行base64的画布绘制
						if (res.tempFiles[0].size > 2621440) {
							var ratio, imageW, imageH;
							uni.getImageInfo({
								src: res.tempFilePaths[0],
								success: function(image) {
									console.log(image)
									imageW = image.width;
									imageH = image.height;
									if (imageW > imageH) {
										_that.sizeW = 1024;
										ratio = (imageW / _that.sizeW).toFixed(1);
										_that.sizeH = parseFloat((imageH / ratio).toFixed(1));
									} else {
										_that.sizeH = 1024;
										ratio = (imageH / _that.sizeH).toFixed(1);
										_that.sizeW = parseFloat((imageW / ratio).toFixed(1));
									}
									_that.getBase64Image('myCanvas', res.tempFilePaths[0], function(base64Data) {
										//  在此处处理得到的base64数据
										// $img_len = strlen($base64);
										_that.imgFile[e] = base64Data;
									}, _that.sizeW, _that.sizeH);
								}
							});
						} else {
							uni.getImageInfo({
								src: res.tempFilePaths[0],
								success: function(image) {
									console.log(image)
									_that.sizeW = image.width;
									_that.sizeH = image.height;
									const ctx = uni.createCanvasContext('myCanvas');
									ctx.drawImage(res.tempFilePaths[0], 0, 0, image.width, image.height);
									ctx.draw(false, () => {});
									pathToBase64(res.tempFilePaths[0]).then(base64 => {
										_that.imgFile[e] = base64;
									});
								}
							});
						}
						// #endif
						// #ifdef H5
						this.getImageInfo(this.imageList[e], e);
						// #endif
					},
					fail: () => {
						// 判断在app里面对访问相册授权
						// #ifdef APP-PLUS
						if(plus.os.name == 'iOS') {  
						    var PHPhotoLibrary = plus.ios.importClass('PHPhotoLibrary')  
						    var PHAuthorizationStatus = PHPhotoLibrary.authorizationStatus()  
						    if(PHAuthorizationStatus != 3 ) {  
								uni.showModal({  
									content: '需要访问您的相册，请在设置里开启',  
									confirmText: '设置',  
									success: res => {  
										if(res.confirm) {  
												plus.runtime.openURL('app-settings://')  
										}  
									}
								});   
						    }
						}  
						// #endif
					}
				})
			},
			getBase64Image(canvasId, imgUrl, callback, imgWidth, imgHeight) {
				const ctx = uni.createCanvasContext('myCanvas');
				ctx.drawImage(imgUrl, 0, 0, imgWidth, imgHeight);
				ctx.draw(false, () => {
					uni.canvasGetImageData({
						canvasId: 'myCanvas',
						x: 0,
						y: 0,
						width: imgWidth,
						height: imgHeight,
						success(res) {
							uni.canvasToTempFilePath({
								canvasId: 'myCanvas',
								success: function(res) {
									pathToBase64(res.tempFilePath).then(base64 => {
										callback(base64);
									});
								}
							});

						}
					});
				});
			},
			// 获取图片信息
			getImageInfo(src, index) {
				var _this = this;
				uni.getImageInfo({
					src,
					success: (res) => {
						var canvasWidth = res.width; //图片原始长宽
						var canvasHeight = res.height;
						// 最大尺寸限制
						var maxWidth = 1024,
							maxHeight = 1024;
						// 目标尺寸
						var targetWidth = canvasWidth,
							targetHeight = canvasHeight;
						// 图片尺寸超过500x500的限制
						if (canvasWidth > maxWidth || canvasHeight > maxHeight) {
							if (canvasWidth / canvasHeight > maxWidth / maxHeight) {
								// 更宽，按照宽度限定尺寸
								targetWidth = maxWidth;
								targetHeight = Math.round(maxWidth * (canvasHeight / canvasWidth));
							} else {
								targetHeight = maxHeight;
								targetWidth = Math.round(maxHeight * (canvasWidth / canvasHeight));
							}
						}
						const img = new Image();
						var canvas = document.createElement('canvas'); //创建canvas画布
						var context = canvas.getContext('2d')
						img.src = res.path;
						canvas.width = targetWidth; //压缩后的宽
						canvas.height = targetHeight; //压缩后的高
						// 清除画布
						context.clearRect(0, 0, targetWidth, targetHeight);
						// 图片压缩
						context.drawImage(img, 0, 0, targetWidth, targetHeight);
						var data = canvas.toDataURL();
						canvas.toBlob(function(fileSrc) {
							console.log(data)
							_this.imgFile[index] = data; //压缩后的base64进制流
						})
					}
				})
			},
			// 提交按钮
			uploadFile() {
				let _this = this;
				let a = _this.imageList;
				if (_this.imgFile[0] == '') {
					uni.showToast({
						title: '请上传身份证（正面）照片',
						icon: 'none'
					});
					return false;
				}
				if (_this.imgFile[1] == '') {
					uni.showToast({
						title: '请上传身份证（反面）照片',
						icon: 'none'
					});
					return false;
				}
				if (_this.imgFile[2] == '') {
					uni.showToast({
						title: '请上传营业执照照片',
						icon: 'none'
					});
					return false;
				}
				if (_this.imgFile[3] == '') {
					uni.showToast({
						title: '请上传真实场地信息照片',
						icon: 'none'
					});
					return false;
				}
				uni.showLoading({
					title: '资料上传中...'
				})
				uni.request({
					method: 'POST',
					url: getApp().globalData.webUrl + '/mobile/security/certify_img',
					data: {
						Ident_Signboard: _this.Signboard, //令牌
						Ident_Signguid: _this.Signguid, //用户id
						file: _this.imgFile,
					},
					success: (res) => {
						if (res.data.status == 0) {
							uni.showToast({
								title: '资料提交成功',
								icon: 'none'
							})
							this.ceractive = 1
							this.certificates = true; //图片选择列表显示与否 (不显示)
							this.Submission = true; //提交按钮显示与否 (不显示)
							this.Examine = false; //审核中 (显示)
							this.errorMsg = '提交材料正在审核中';
							this.error = '(审核时间为2-3个工作日)'
						}
					},
					fail: (res) => {
						uni.showToast({
							title: '资料提交失败' + '错误码201',
							icon: 'none'
						})
					}
				})
			},
			// 重新上传
			againBtn() {
				this.ceractive = 0
				this.certificates = false; //图片选择列表显示与否 (显示)
				this.Submission = false; //提交按钮显示与否 (显示)
				this.Fial = true; //认证失败提示信息 (不显示)
				this.imgFile = [];
				this.imageList = [];
			}
		},
		onLoad(options) {
			// var ua = navigator.userAgent.toLowerCase();
			// var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);//判断是否是苹果手机，是则是true
			// if (isIos) {
			// 	this.$nextTick(function(){
			// 		console.log(this.$refs.cameraInput.$el)
			// 		// this.$refs.cameraInput.$el.removeAttr("capture");
			// 		this.$refs.cameraInput.$el.removeAttr("capture")
			// 	})
			// };
			let jsonList = uni.getStorageSync("jsonList"); //获取存储在Storage里的值
			let data = JSON.parse(jsonList); //JSON字符串转对象
			this.Signboard = data.Ident_Signboard; //令牌
			this.Signguid = data.Ident_Signguid; //用户ID
			uni.request({
				url: getApp().globalData.webUrl + '/mobile/security/certification',
				method: 'GET',
				data: {
					Ident_Signboard: this.Signboard, //令牌
					Ident_Signguid: this.Signguid, //用户id
				},
				success: (res) => {
					if (res.data.audit == -1) { //需要提交认证材料
						this.ceractive = 0
						this.certificates = false; //图片选择列表显示与否 (显示)
						this.Submission = false; //提交按钮显示与否 (显示)
					} else if (res.data.audit == 0) { //材料审核中
						this.ceractive = 1
						this.certificates = true; //图片选择列表显示与否 (不显示)
						this.Submission = true; //提交按钮显示与否 (不显示)
						this.Examine = false; //审核中 (显示)
						this.errorMsg = '提交材料正在审核中';
						this.error = '(审核时间为2-3个工作日)';
					} else if (res.data.audit == 1) { //审核通过
						this.ceractive = 2;
						this.certificates = true; //图片选择列表显示与否 (不显示)
						this.Submission = true; //提交按钮显示与否 (不显示)
						this.Success = false; //认证成功提示
						this.errorMsg = '已实名认证成功';
					} else { //审核未通过
						this.ceractive = 2;
						this.certificates = true; //图片选择列表显示与否 (不显示)
						this.Submission = true; //提交按钮显示与否 (不显示)
						this.Fial = false; //认证失败提示
						this.Examine = true; //提示信息 (显示)
						this.errorMsg = '实名认证失败'
						this.errorFail = '(' + res.data.audit + ')';
						this.imgFile = [];
						this.imageList = [];
					}
				},
				fail: (res) => {
					uni.hideLoading()
					uni.showToast({
						title: '登录身份已过期，请重新登录' + '错误码201',
						icon: 'none'
					})
				}
			})
		}
	}
</script>

<style scoped>
	@import "../../common/uni.css";
	@import "../../common/iconfont.css";
	.copy{
		position: absolute;
		bottom: 0;
		/* #ifdef APP-PLUS||MP-WEIXIN */
		left: 60px;
		/* #endif */
	}
	.cert-text {
		font-size: 16px;
		color: #000000;
		padding: 5px 10px;
	}

	.canvasView {
		width: 100%;
		height: 80px;
		text-align: center;
		line-height: 80px;
		border: 1px dashed #D3D3D4;
		overflow: hidden;
	}
	.canvasMask {
		position: relative;
		bottom: 0;
		opacity: 0;
		top: 500px;
		background: #FFF;
		z-index: 999;
	}

	.viewImg {
		position: relative;
		width: 142px;
		height: 80px;
		text-align: center;
		line-height: 80px;
		border: 1px dashed #D3D3D4;
	}

	.viewImg image {
		width: 100%;
		height: 100%;
	}

	.viewLeft {
		margin-left: 0.5rem;
	}

	.viewTop {
		margin-top: 0.5rem;
	}

	.certview {
		color: #ABABAA;
	}

	.icon-camera,
	.icon-ID-positive,
	.icon-ID-back,
	.icon-business-license,
	.icon-field {
		color: #DCDCDC;
	}

	/* 保存按钮 */
	.uni-count {
		width: 80vw;
		height: 6vh;
		z-index: 999;
		position: absolute;
		bottom: 0.1rem;
		left: 2rem;
		border: 1px solid #e4393c;
		border-radius: 14rem;
		text-align: center;
	}

	.uni-addBtn {
		color: #FFF;
		font-size: 1rem;
		margin-top: 0.5rem;
	}

	.uni-addBtn .addBtn {
		font-size: 16px;
		letter-spacing: 0.2rem;
	}

	.viewone {
		display: none;
	}

	.imgone {
		display: none;
	}

	.viewtwo {
		display: none;
	}

	.imgtwo {
		display: none;
	}

	.viewthree {
		display: none;
	}

	.imgthree {
		display: none;
	}

	.viewfour {
		display: none;
	}

	.imgfour {
		display: none;
	}

	/* 上传图片列表选择 */
	.cert {
		display: none;
	}

	.buts {
		display: none;
	}

	.icon-chenggong {
		color: #1aad19;
		font-size: 2.5rem;
	}

	.Success {
		width: 80%;
		text-align: center;
		margin-left: 40px;
		margin-top: 20px;
	}

	.Success>.errortext {
		color: #1aad19;
		font-size: 16px;
	}

	.errsucc {
		display: none;
	}

	.icon-shibai {
		color: #e43130;
		font-size: 2.5rem;
	}

	.fail {
		width: 80%;
		text-align: center;
		margin-left: 40px;
	}

	.fail>.errortext {
		color: #e43130;
		font-size: 16px;
	}

	.errfail {
		display: none;
	}

	.errorFail {
		color: #E43130;
		font-size: 14px;
	}

	/* 实名认证成功 */
	.icon-shenhezhong {
		color: #ffaf32;
		font-size: 2.5rem;
	}

	.examine {
		width: 80%;
		text-align: center;
		margin-left: 40px;
	}

	.examine>.errortext {
		color: #ffaf32;
		font-size: 16px;
	}

	.shen {
		display: none;
	}

	.errorMsg {
		color: #ffaf32;
		font-size: 12px;
	}

	/* 重新上传 */
	.againBtn {
		margin-top: 30px;
	}
</style>
