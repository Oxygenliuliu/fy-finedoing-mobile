"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var DownloadImg = {};
DownloadImg.appDownImg = function (o) {
    wx.showLoading({
        title: "保存中..."
    }),
    uni.downloadFile({
        url: o,
        success: function (o) {
            200 === o.statusCode && uni.saveImageToPhotosAlbum({
                filePath: o.tempFilePath,
                success: function () {
                    uni.showToast({
                        title: "保存成功",
                        icon: "none"
                    })
                },
                fail: function () {
                    uni.showToast({
                        title: "保存失败，请稍后重试",
                        icon: "none"
                    })
					console.log('选择图片失败！')  
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
				
                },
                complete: function () {
                    wx.hideLoading()
                }
            })
        }
    })
},
DownloadImg.appDownPdf = function (o) {
    wx.showLoading({
        title: "保存中..."
    }),
    uni.downloadFile({
        url: o,
        success: function (o) {
            var n = o.tempFilePath;
            uni.openDocument({
                filePath: n,
                success: function (o) {},
                fail: function () {
                    uni.showToast({
                        title: "保存失败，请稍后重试",
                        icon: "none"
                    })
                },
                complete: function () {
                    wx.hideLoading()
                }
            })
        }
    })
},
DownloadImg.wxDownImg = function (o) {
    wx.showLoading({
        title: "保存中..."
    }),
    wx.downloadFile({
        url: o,
        success: function (o) {
            wx.saveImageToPhotosAlbum({
                filePath: o.tempFilePath,
                success: function (o) {
                    wx.hideLoading(),
                    wx.showModal({
                        title: "提示",
                        content: "已保存进手机相册",
                        showCancel: !1
                    })
                },
                fail: function (o) {
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
                },
                complete: function (o) {
                    wx.hideLoading()
                }
            })
        }
    })
};
export
default DownloadImg;