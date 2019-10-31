(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/order/details"],{

/***/ "../../mobile-app/main.js?{\"page\":\"pages%2Forder%2Fdetails\"}":
/*!*****************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/main.js?{"page":"pages%2Forder%2Fdetails"} ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../mobile-app/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _details = _interopRequireDefault(__webpack_require__(/*! ./pages/order/details.vue */ "../../mobile-app/pages/order/details.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_details.default));

/***/ }),

/***/ "../../mobile-app/pages/order/details.vue":
/*!**********************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/details.vue ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _details_vue_vue_type_template_id_56ee7a2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.vue?vue&type=template&id=56ee7a2a& */ "../../mobile-app/pages/order/details.vue?vue&type=template&id=56ee7a2a&");
/* harmony import */ var _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.vue?vue&type=script&lang=js& */ "../../mobile-app/pages/order/details.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.vue?vue&type=style&index=0&lang=css& */ "../../mobile-app/pages/order/details.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _details_vue_vue_type_template_id_56ee7a2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _details_vue_vue_type_template_id_56ee7a2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "mobile-app/pages/order/details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../mobile-app/pages/order/details.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/details.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../plugins/uniapp-cli/node_modules/babel-loader/lib!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/order/details.vue?vue&type=script&lang=js&");
/* harmony import */ var _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../mobile-app/pages/order/details.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/details.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./details.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/order/details.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../mobile-app/pages/order/details.vue?vue&type=template&id=56ee7a2a&":
/*!*****************************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/details.vue?vue&type=template&id=56ee7a2a& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_56ee7a2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./details.vue?vue&type=template&id=56ee7a2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/order/details.vue?vue&type=template&id=56ee7a2a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_56ee7a2a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_details_vue_vue_type_template_id_56ee7a2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/order/details.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/details.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





































































var _uniPopup = _interopRequireDefault(__webpack_require__(/*! @/components/uni-popup/uni-popup.vue */ "../../mobile-app/components/uni-popup/uni-popup.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  components: { uniPopup: _uniPopup.default },
  data: function data() {
    return {
      Signboard: '',
      Signguid: '',
      orderId: "", //接收下单页传过来的订单序号
      orderTips: false, //弹出框的显示隐藏
      orderMsg: "", //订单详细信息获取失败时的提示消息
      orderDetail: "", //订单明细
      orderData: "", //订单信息
      oldInfo: "", //历史记录
      historyOld: false };

  },
  methods: {
    /* 获取订单详情失败时弹出框的取消按钮 */
    orderPopup: function orderPopup(evt) {
      this.orderTips = false;
    },
    /* 获取订单详情失败时弹出框的确定按钮 --点确定的时候跳转回订单页面 */
    orderTipsYes: function orderTipsYes(evt) {
      uni.navigateTo({
        url: '../order/orderpageinfo' });

    },
    oldClick: function oldClick(evt) {var _this = this;
      var osId = evt;
      console.log(osId);
      this.historyOld = true;
      uni.request({
        url: 'http://192.168.199.194/mobile/order/orderParticular',
        method: 'GET',
        data: {
          Ident_Signboard: this.Signboard,
          Ident_Signguid: this.Signguid,
          orderid: osId,
          check: 1 },

        success: function success(res) {
          if (res.data.status == 0) {
            _this.orderData = res.data.orderData; //将获得的订单信息赋值存给this.orderData
            _this.orderDetail = res.data.orderDetail; //将获得的订单明细赋值存给this.orderDetail
            uni.showToast({
              title: res.data.message,
              icon: 'none' });

          } else {
            _this.orderMsg = res.data.message;
            _this.orderTips = true;
          }
        } });

    } },

  onLoad: function onLoad(options) {var _this2 = this;
    var jsonList = uni.getStorageSync("jsonList");
    var data = JSON.parse(jsonList); //JSON字符串转对象
    this.Signboard = data.Ident_Signboard;
    this.Signguid = data.Ident_Signguid;
    this.orderId = options.orderid;
    // console.log('传参过来的'+this.orderId);
    uni.request({
      url: 'http://192.168.199.194/mobile/order/orderParticular',
      method: 'GET',
      data: {
        Ident_Signboard: this.Signboard,
        Ident_Signguid: this.Signguid,
        orderid: this.orderId },

      success: function success(res) {
        if (res.data.status == 0) {
          console.log(res);
          _this2.orderData = res.data.orderData; //将获得的订单信息赋值存给this.orderData
          _this2.orderDetail = res.data.orderDetail; //将获得的订单明细赋值存给this.orderDetail
          _this2.oldInfo = res.data.oldInfo; //将获得的历史记录信息存进this.oldInfo
          console.log("oldInfo:");
          console.log(res.data.oldInfo);
          console.log(res.data.oldInfo.os_id);
          console.log("orderData:");
          console.log(res.data.orderData);
          console.log("orderDetail:");
          console.log(res.data.orderDetail);
          uni.showToast({
            title: res.data.message,
            icon: 'none' });

        } else {
          _this2.orderMsg = res.data.message;
          _this2.orderTips = true;
        }
      } });

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/order/details.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/details.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/order/details.vue?vue&type=template&id=56ee7a2a&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/details.vue?vue&type=template&id=56ee7a2a& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: "details" },
    [
      _vm._l(_vm.orderDetail, function(orderDetail, index) {
        return _c("view", { key: index, staticClass: "commodity" }, [
          _c("view", { staticClass: "sp_tite" }, [
            _vm._v(_vm._s(orderDetail.ty_name))
          ]),
          _c("view", { staticClass: "sp_cont" }, [
            _c("image", {
              attrs: { src: "http://192.168.199.194" + orderDetail.img }
            }),
            _c("view", [
              _c("view", [
                _vm._v("当前进度:"),
                _c("text", [_vm._v(_vm._s(orderDetail.process))])
              ]),
              _c("view", [
                _vm._v("材料:"),
                _c("text", [_vm._v(_vm._s(orderDetail.g_name))])
              ]),
              _vm._m(0, true),
              _c("view", [
                _vm._v("规格:"),
                _c("text", [_vm._v(_vm._s(orderDetail.specs) + "(M)")])
              ]),
              _c("view", [
                _vm._v("数量:"),
                _c("text", [_vm._v(_vm._s(orderDetail.od_quantity))])
              ]),
              _c("view", { staticClass: "money" }, [
                _c("text", [_vm._v("￥" + _vm._s(orderDetail.total))])
              ])
            ])
          ])
        ])
      }),
      _vm._l(_vm.orderData, function(orderData, indexs) {
        return _c("view", { key: "odrKey" + indexs }, [
          _c("view", { staticClass: "information" }, [
            _c("view", [
              _c("view", [
                _vm._v("订单状态:"),
                _c("text", [_vm._v(_vm._s(orderData.saname))])
              ]),
              _c("view", [
                _vm._v("订单编号:"),
                _c("text", [_vm._v(_vm._s(orderData.NO))])
              ]),
              _c("view", [
                _vm._v("下单时间:"),
                _c("text", [_vm._v(_vm._s(orderData.date))])
              ]),
              _c("view", [
                _vm._v("下单人:"),
                _c("text", [_vm._v(_vm._s(orderData.username))])
              ])
            ]),
            _c("view", [
              _c("view", [
                _vm._v("支付方式:"),
                _c("text", [_vm._v(_vm._s(orderData.payname))])
              ]),
              _c("view", [
                _vm._v("支付时间:"),
                _c("text", [_vm._v(_vm._s(orderData.paydata))])
              ])
            ]),
            _c("view", [
              _c("view", [
                _vm._v("配送方式:"),
                _c("text", [_vm._v(_vm._s(orderData.address))])
              ]),
              _c("view", [
                _vm._v("收货人:"),
                _c("text", [_vm._v(_vm._s(orderData.linkman))])
              ])
            ]),
            _c("view", [
              _c("view", [
                _vm._v("发票类型:"),
                _c("text", [_vm._v(_vm._s(orderData.Invoice))]),
                _c("text", { staticClass: "viewInvoice" }, [_vm._v("查看发票")])
              ])
            ])
          ]),
          _c(
            "view",
            { staticClass: "history", class: { active: _vm.historyOld } },
            [
              _vm._m(1, true),
              _c(
                "view",
                { staticClass: "historyInfo" },
                _vm._l(_vm.oldInfo, function(oldInfo, index) {
                  return _c("div", { key: index, staticClass: "oldInfo" }, [
                    _c("span", { staticClass: "text_hidden" }, [
                      _vm._v(_vm._s(oldInfo.os_cd))
                    ]),
                    _c("span", { staticClass: "text_hidden" }, [
                      _vm._v(_vm._s(oldInfo.linkman))
                    ]),
                    _c(
                      "span",
                      {
                        attrs: {
                          id: "xglsinfo_id",
                          eventid: "8c53289a-0-" + indexs + "-" + index
                        },
                        on: {
                          tap: function($event) {
                            _vm.oldClick(oldInfo.os_id)
                          }
                        }
                      },
                      [_vm._v("详情")]
                    )
                  ])
                })
              )
            ]
          ),
          _c("view", { staticClass: "actualPayment" }, [
            _c("view", [
              _vm._v("实付金额:"),
              _c("text", [_vm._v("￥" + _vm._s(orderData.total))])
            ])
          ])
        ])
      }),
      _c(
        "uni-popup",
        {
          attrs: {
            show: _vm.orderTips,
            type: "middle",
            mode: "fixed",
            mpcomid: "8c53289a-0"
          }
        },
        [
          _c("view", { attrs: { id: "orderBox" } }, [
            _c("text", [_vm._v(_vm._s(_vm.orderMsg))]),
            _c(
              "view",
              {
                staticClass: "flex-row btnOrder",
                staticStyle: { display: "flex", "flex-direction": "row" }
              },
              [
                _c(
                  "view",
                  { staticClass: "flex-view-item addToCart" },
                  [
                    _c(
                      "button",
                      {
                        staticStyle: {
                          background: "#0A98D5",
                          color: "#FFFFFF"
                        },
                        attrs: { eventid: "8c53289a-1" },
                        on: { tap: _vm.orderTipsYes }
                      },
                      [_vm._v("确定")]
                    )
                  ],
                  1
                ),
                _c(
                  "view",
                  {
                    staticClass: "flex-view-item immediatePayment",
                    staticStyle: { "margin-left": "1rem" }
                  },
                  [
                    _c(
                      "button",
                      {
                        attrs: { eventid: "8c53289a-2" },
                        on: { tap: _vm.orderPopup }
                      },
                      [_vm._v("取消")]
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ]
      )
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", [_vm._v("工艺:"), _c("text")])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "historyTite" }, [
      _c("text", [_vm._v("历史修改记录")])
    ])
  }
]
render._withStripped = true



/***/ })

},[["../../mobile-app/main.js?{\"page\":\"pages%2Forder%2Fdetails\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/details.js.map