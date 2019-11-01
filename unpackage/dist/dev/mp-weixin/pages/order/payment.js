(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/order/payment"],{

/***/ 226:
/*!************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/mobile-app-git/main.js?{"page":"pages%2Forder%2Fpayment"} ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _payment = _interopRequireDefault(__webpack_require__(/*! ./pages/order/payment.vue */ 227));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_payment.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 227:
/*!*****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/mobile-app-git/pages/order/payment.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payment_vue_vue_type_template_id_8ba279c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.vue?vue&type=template&id=8ba279c8& */ 228);
/* harmony import */ var _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.vue?vue&type=script&lang=js& */ 230);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment.vue?vue&type=style&index=0&lang=css& */ 232);
/* harmony import */ var _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _payment_vue_vue_type_template_id_8ba279c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _payment_vue_vue_type_template_id_8ba279c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator/Desktop/mobile-app-git/pages/order/payment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 228:
/*!************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/mobile-app-git/pages/order/payment.vue?vue&type=template&id=8ba279c8& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_template_id_8ba279c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./payment.vue?vue&type=template&id=8ba279c8& */ 229);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_template_id_8ba279c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_template_id_8ba279c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 229:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/mobile-app-git/pages/order/payment.vue?vue&type=template&id=8ba279c8& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var l0 = _vm.__map(_vm.payList, function(pay, index) {
    var m0 = _vm.iconFor(pay.name)
    var m1 = _vm.AccountBalance(pay.name)
    return {
      $orig: _vm.__get_orig(pay),
      m0: m0,
      m1: m1
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0
      }
    }
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 230:
/*!******************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/mobile-app-git/pages/order/payment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./payment.vue?vue&type=script&lang=js& */ 231);
/* harmony import */ var _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 231:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/mobile-app-git/pages/order/payment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;













































































































var _public = _interopRequireDefault(__webpack_require__(/*! @/common/public.js */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var uniAddress = function uniAddress() {return __webpack_require__.e(/*! import() | components/uni-address/uni-address */ "components/uni-address/uni-address").then(__webpack_require__.bind(null, /*! @/components/uni-address/uni-address.vue */ 418));};var uniIcon = function uniIcon() {return __webpack_require__.e(/*! import() | components/uni-icon/uni-icon */ "components/uni-icon/uni-icon").then(__webpack_require__.bind(null, /*! @/components/uni-icon/uni-icon.vue */ 411));};var uniPopup = function uniPopup() {return __webpack_require__.e(/*! import() | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/components/uni-popup/uni-popup.vue */ 161));};var mpvueCityPicker = function mpvueCityPicker() {return Promise.all(/*! import() | components/mpvue-citypicker/mpvueCityPicker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/mpvue-citypicker/mpvueCityPicker")]).then(__webpack_require__.bind(null, /*! @/components/mpvue-citypicker/mpvueCityPicker.vue */ 350));};var mpviePicker = function mpviePicker() {return __webpack_require__.e(/*! import() | components/mpvue-picker/mpvuePicker */ "components/mpvue-picker/mpvuePicker").then(__webpack_require__.bind(null, /*! @/components/mpvue-picker/mpvuePicker.vue */ 360));};var cityData = function cityData() {return __webpack_require__.e(/*! import() | common/city.data */ "common/vendor").then(__webpack_require__.t.bind(null, /*! @/common/city.data.js */ 119, 7));};var _default = { components: { uniAddress: uniAddress, 'mpvue-city-picker': mpvueCityPicker, 'mpvue-picker': mpviePicker, mpviePicker: mpviePicker, mpvueCityPicker: mpvueCityPicker, uniIcon: uniIcon, uniPopup: uniPopup, cityData: cityData }, data: function data() {return { scrollTop: 0, old: { scrollTop: 0 }, payType: '', // 判断从哪个页面过来的标识
      Balance: '', //余额：账户余额
      backNum: '', //返回的赋值变量
      showMask: false, //返回按钮：遮罩层的显示隐藏
      addressMsg: true, //没有收货地址时显示
      imgUrl: '', //图片访问ip
      isshow: false, el: 'cdcd', isActive: true, //发票抬头
      comActive: true, //发票内容
      dis: "none", title: 'radio', currents: 1, //公司或个人的选中下标
      getWay: '', //区分挂不挂账
      beiZhuNum: 0, //主体备注的字数
      desc: '', corporateName: '', //公司名称
      TaxpayerNum: '', //纳税人识别号
      addressPhone: '', //地址/电话
      openBankNum: '', //开户号及账号
      taxpoint: '', //发票=>税点
      taxpointMoney: '0.00', //发票税点金额  
      invoTypeName: '', //发票类型名称  
      invoTypeNum: '', //发票类型的 序号
      faPiaoNum: '', //发票类型下标（公司还是个人）
      addressActive: false, //修改地址显示与隐藏  
      delivery: false, //配送方式
      payment: false, //支付方式
      payList: '', //支付方式列表
      paychenkNum: 0, //支付方式的下标
      paychenkName: '', //支付名称
      payNum: '', //支付标识（1-微信，2-支付宝，3-余额）
      addressInfo: true, //收货地址
      defAddress: {}, //默认收货地址
      addcheckNum: 0, //地址下标
      shopList: '', //商品详情数据列表
      addressList: '', //地址列表信息
      logwayList: '', //物流方式列表信息
      logchenkNum: 0, //物流方式下标
      logSubscript: '', //物流方式区分（1,2,3,）
      LogName: '', //物流方式
      LogNameInfo: '', //物流方式详细说明
      logPrice: '', //物流方式价格
      kuaiDi: '', //快递显示
      kuaiDiMoney: '0.00', //快递价格显示
      subTotal: '', //订单总价价格
      TotalMoney: '', //订单总价
      shopInfoMoney: '', //商品价格
      Remarks: '', //订单主体备注
      // remarksContent: '',  //订单明细备注
      remarksindex: '', //替换点击当前明细下标
      xiuGaiActive: true, //定义的是修改地址时绑定的数据变量
      deepLength: 1, pickerValueDefault: [0], pickerValueArray: [], mulLinkageTwoPicker: cityData, cityPickerValueDefault: [0, 0, 1], themeColor: '#007AFF', pickerText: '', mode: '', Signboard: '', //令牌
      Signguid: '', //guid
      Distinguish: '', //区分是从哪个页面过来的
      payOrderid: '', //去支付的orderid
      DateRand: '', //随机单号
      judgeItems: [], figureid: '', invoiceInfo: [], //发票
      myAddress: [], //收货地址
      isCreateOrder: false };}, methods: { // 发票空回调函数
    myInvoice: function myInvoice(parameter) {}, // 点击选择发票
    invoiceTap: function invoiceTap(e) {this.myInvoice = function (parameter) {this.invoTypeName = parameter.selectInvoTypeName; //发票类型 名称
        this.invoTypeNum = parameter.selectInvoice_type; //是否开票下标
        this.faPiaoNum = parameter.selectFaPiaoNum; //公司还是个人
        this.corporateName = parameter.selectCorporateName; //公司名称
        this.TaxpayerNum = parameter.selectTaxpayerNum; //纳税人识别号
        this.addressPhone = parameter.selectaddressPhone; //地址，电弧
        this.openBankNum = parameter.selectopenBankNum; //开户行账户
        this.taxpointMoney = parameter.selectShuiMoney; //税费
        this.shuiMoney = parameter.selectShuiMoney; //发票税收
        this.subTotal = parseFloat(parameter.selectSubTotal) + parseFloat(parameter.selectShuiMoney) + parseFloat(this.kuaiDiMoney); //总价
        this.processing(this.subTotal); //总价计算方式
        this.invoiceInfo = parameter; // console.log(this.invoiceInfo)
      };uni.navigateTo({ url: 'invoice' });}, // 判断 支付方式 显示余额
    AccountBalance: function AccountBalance(payname) {if (payname == '余额') {return "(" + "账户余额：￥ " + this.Balance + ")";} else {return '';}}, // 返回
    back: function back() {uni.backbutton({ detail: 1 });}, // 配送方式的 取消函数
    ClosePopup: function ClosePopup(e) {this.delivery = false;this.payment = false;}, // 价格换算 公共函数
    processing: function processing(event) {if (this.figureid == 1) {//向上取整
        this.subTotal = parseFloat(Math.ceil(event)).toFixed(2); //给subTotal（总价）赋值
      } else if (this.figureid == 2) {//向下取整
        this.subTotal = parseFloat(Math.floor(event)).toFixed(2); //给subTotal（总价）赋值
      } else if (this.figureid == 3) {//四舍五入
        this.subTotal = parseFloat(Math.round(event)).toFixed(2); //给subTotal（总价）赋值
      } else {//保留两位小数
        this.subTotal = parseFloat(event).toFixed(2); //给subTotal（总价）赋值
      }}, // 点击选择 物流
    deliveryClick: function deliveryClick(evt) {uni.setNavigationBarTitle({ title: '物流' });this.delivery = true;}, // 点击选择 配送方式
    logisticsTap: function logisticsTap(evt) {this.logchenkNum = evt;this.logSubscript = this.logwayList[evt].delivery; //给logSubscript（支付序号）赋值
      this.LogName = this.logwayList[evt].wayname; //给LogName（物流方式）赋值
      this.LogNameInfo = this.logwayList[evt].declares; //给LogNameInfo（物流方式详细说明）赋值
      this.logPrice = parseFloat(this.logwayList[evt].price).toFixed(2); //给logPrice（物流方式价格）赋值
    }, // 配送方式的 确定 按钮
    Determine: function Determine(e) {this.delivery = false;this.kuaiDi = this.LogName; //给kuaiDi（快递方式显示）赋值
      this.kuaiDiMoney = parseFloat(this.logPrice).toFixed(2); //给kuaiDiMoney（快递价格显示）赋值   
      this.subTotal = parseFloat(this.TotalMoney) + parseFloat(this.taxpointMoney) + parseFloat(this.kuaiDiMoney); //总价
      this.processing(this.subTotal); //总价计算方式
      uni.setNavigationBarTitle({ title: '确认订单' });}, // 配送方式的 取消 按钮  
    deliveryPopup: function deliveryPopup(evt) {this.delivery = false;uni.setNavigationBarTitle({ title: '确认订单' });}, // 点击选择 支付方式
    paymentTap: function paymentTap(e, payName) {this.paychenkNum = e;this.paychenkName = payName.name; //给paychenkName（支付名称）赋值
      this.payNum = payName.fid; //给payNum（支付标识）赋值
    }, // 支付方式页面的 确定 按钮
    payBtn: function payBtn(e) {uni.setNavigationBarTitle({ title: '确认订单' });this.payment = false;}, // 支付方式页面的 取消 按钮
    checkPopup: function checkPopup(evt) {uni.setNavigationBarTitle({ title: '确认订单' });this.payment = false;}, //根据支付方式显示对应的图标；name: 支付方式名
    iconFor: function iconFor(name) {var classInof = null;switch (name) {
        case '微信':
          classInof = '../../static/image/weixin.png';
          break;
        case '支付宝':
          classInof = '../../static/image/zhifu.png';
          break;
        case '现金':
          classInof = '../../static/image/xianjin.png';
          break;
        case '挂账':
          classInof = '../../static/image/guazhang.png';
          break;
        case '余额':
          classInof = '../../static/image/yue.png';
          break;}

      return classInof;
    },
    // 地址回调函数
    myAddressBack: function myAddressBack(param) {},
    // 点击地址 跳转至 user的地址列表
    addressClick: function addressClick(evt) {
      uni.setStorageSync('select', 'select');
      this.myAddressBack = function (param) {
        this.defAddress = param;
      };
      uni.navigateTo({
        url: '../user/useraddress' });

    },
    // 订单主体备注
    remarks: function remarks(e) {
      if (this.beiZhuNum == 320) {
        uni.showToast({
          icon: 'none',
          title: '最多只能輸入320個字' });

      }
      this.beiZhuNum = e.detail.value.length; //给Remarks（订单主体明细）赋值
      this.Remarks = e.detail.value;
    },
    // 支付 公共函数
    PaymentFun: function PaymentFun(res) {
      console.log(res);
      uni.setStorageSync('orderCreation', 'orderCreation');
      if (this.payNum == 1) {//微信支付
        uni.setStorageSync('OddNumbers', res.data.orderNum);
        var j = 'Wxpay';
        uni.setStorageSync('PayMethod', j);
        var i = encodeURI(_public.default.variable + '/h5/pages/order/payResults');
        location.href = res.data.response.mweb_url + '&redirect_url=' + i;
      } else if (this.payNum == 2) {//支付宝支付
        var _i = 'Alipay';
        uni.setStorageSync('PayMethod', _i);
        uni.setStorageSync('DateRand', this.DateRand);
        var div = document.createElement('div');
        div.innerHTML = res.data; //此处form就是后台返回接收到的数据
        document.body.appendChild(div);
        document.forms[0].submit();
      } else {//余额支付
        uni.navigateTo({
          url: 'balance?orderNum=' + res.data.orderNum + '&money=' + res.data.money + '&amount=' + res.data.amount + '&usable=' + res.data.usable });

      }
    },
    // 总订单支付
    OrderPayment: function OrderPayment(e) {
      var date = new Date().getTime(); //获取时间戳
      var rand = Math.floor(Math.random() * 9999); //随机数
      this.DateRand = date + '' + rand; //随机单号
      if (this.defAddress.name == '' && this.defAddress.address == '' && this.defAddress.telephone == '') {
        uni.showToast({
          title: '请添加收货地址',
          icon: 'none' });

      } else if (this.kuaiDi == '') {
        uni.showToast({
          title: '请选择快递方式',
          icon: 'none' });

      } else if (this.invoTypeName == '') {
        uni.showToast({
          title: '请选择是否开票',
          icon: 'none' });

      } else if (this.paychenkName == '') {
        uni.showToast({
          title: '请选择支付方式',
          icon: 'none' });

      } else {
        // uni.setStorageSync('orders',1);
        if (this.payNum == 4) {//判断是否挂账：给getWay 赋值
          this.getWay = 1;
        } else {
          this.getWay = 0;
        }
        if (this.Distinguish == 3) {
          var url = _public.default.variable + '/mobile/order/orderAgain';
          this.OrderPayFun(url);
        } else {
          var urls = _public.default.variable + '/mobile/order/orderPay';
          this.OrderPayFun(urls);
        }
      }
    },
    // 订单总支付的 公共请求参数
    OrderPayFun: function OrderPayFun(e) {var _this = this;
      if (!this.isCreateOrder) {
        uni.request({
          url: e,
          method: 'POST',
          data: {
            Ident_Signboard: this.Signboard,
            Ident_Signguid: this.Signguid,
            shifukuan: this.subTotal, //付款总金额（后期不要）
            kuaidi: this.logSubscript, //快递方式
            invoice_type: this.invoTypeNum, //是否开票
            invoice: this.faPiaoNum, //发票：公司或者个人
            title: this.corporateName, //发票抬头（公司/个人）
            taxcode: this.TaxpayerNum, //税号（公司）
            qyaddress: this.addressPhone, //公司地址
            qykaihu: this.openBankNum, //公司开户行
            remarks: this.Remarks, //订单主体备注
            address: this.defAddress.address, //收货人地址
            linkman: this.defAddress.name, //收货人姓名 
            linkPhone: this.defAddress.telephone, //收货人电话
            chunkmoney: this.kuaiDiMoney, //快递运费
            taxpoint: this.shuiMoney, //发票税收
            zhifu: this.payNum, //支付方式
            detailed: this.shopList, //明细数组信息
            getWay: this.getWay, //辨别是否 挂账
            orderid: this.payOrderid, //订单id
            serial_num: this.DateRand, //随机生成的单号
            detailremark: '' //明细备注
          },
          success: function success(res) {
            _this.isCreateOrder = true;
            if (_this.Distinguish == 1) {
              var wulala = uni.getStorageSync("jsonList"); //获取存储在Storage里的值
              var data = JSON.parse(wulala); //JSON字符串转对象
              data.shop = data.shop - _this.shopList.length;
              uni.setStorageSync('shop', data.shop);
              var json = JSON.stringify(data); //对象转字符串
              uni.setStorageSync('jsonList', json); //将shop数据库数量从新存储进去
            }
            _this.PaymentFun(res); //调用支付封装函数接口
          },
          fail: function fail(res) {
            uni.hideLoading();
            uni.showToast({ title: '请求失败' + '错误码201', icon: "none" });
          } });

      } else {
        uni.redirectTo({
          url: 'orderpageinfo?orderNum=balance' });

      }
    },
    onLoadFun: function onLoadFun(res, payType) {
      if (res.data.status == 0) {
        this.shopInfoMoney = res.data.total; //商品总价
        this.figureid = res.data.figure[0].id;
        if (this.figureid == 1) {//向上取整
          this.subTotal = parseFloat(Math.ceil(res.data.total)).toFixed(2); //给subTotal（总价）赋值
          this.TotalMoney = parseFloat(res.data.total).toFixed(2); //给TotalMoney（商品总价）赋值
        } else if (this.figureid == 2) {//向下取整
          this.subTotal = parseFloat(Math.floor(res.data.total)).toFixed(2); //给subTotal（总价）赋值
          this.TotalMoney = parseFloat(res.data.total).toFixed(2); //给TotalMoney（商品总价）赋值
        } else if (this.figureid == 3) {//四舍五入
          this.subTotal = parseFloat(Math.round(res.data.total)).toFixed(2); //给subTotal（总价）赋值
          this.TotalMoney = parseFloat(res.data.total).toFixed(2); //给TotalMoney（商品总价）赋值
        } else {//保留两位小数
          this.subTotal = parseFloat(res.data.total).toFixed(2); //给subTotal（总价）赋值
          this.TotalMoney = parseFloat(res.data.total).toFixed(2); //给TotalMoney（商品总价）赋值
        }
        this.shopList = res.data.shop; //给shopList（商品信息列表）赋值
        if (res.data.address.length != 0) {
          // if(res.data.address[0].patientia == 1){  //判断是否存在默认收货地址
          this.defAddress = res.data.address[0]; //给defAddress（默认收货地址）赋值
          this.addressMsg = true;
          // }else{
          // 	this.defAddress = res.data.address[0];  //给defAddress（默认收货地址）赋值
          // 	this.addressMsg = true
          // }
        } else {
          this.addressMsg = false;
        }
        this.addressList = res.data.address; //给addressList（地址列表信息）赋值
        this.logwayList = res.data.logway; //给logwayList（物流方式列表信息）赋值
        this.payList = res.data.pay; //给payList（支付方式列表）赋值
        this.kuaiDi = res.data.logway[0].wayname; //默认快递方式
        this.kuaiDiMoney = parseFloat(res.data.logway[0].price).toFixed(2); //默认快递方式运费
        this.logSubscript = res.data.logway[0].delivery; //默认快递方式序号
        this.LogNameInfo = res.data.logway[0].declares; //默认地址的描述
        this.logPrice = parseFloat(res.data.logway[0].price).toFixed(2); //默认地址的价格
        this.invoTypeName = '不开发票'; //默认发票
        this.invoTypeNum = '2'; //默认是否开票value值
        this.shuiMoney = '0.00'; //默认发票税收
        this.paychenkName = res.data.pay[0].name; //默认支付方式
        this.payNum = res.data.pay[0].fid; //默认支付方式序号
        this.Balance = res.data.balance; //该账户（余额）
        this.invoiceInfo.invoiceisShow = false;
        this.invoiceInfo.VATisShow = false;
        this.invoiceInfo.selectInvoice_type = 2; //是否开票下标
        this.invoiceInfo.selectInvoTypeName = '不开发票'; //发票类型 名称
        this.invoiceInfo.selectFaPiaoNum = 0; //公司还是个人
        // this.invoiceInfo.selectCorporateName = '';  //公司名称
        // this.invoiceInfo.selectTaxpayerNum = '';  //纳税人识别号
        // this.invoiceInfo.selectaddressPhone = '';  //电话和地址
        // this.invoiceInfo.selectopenBankNum = '';  //开户行及账户
        this.invoiceInfo.selectTaxpoint = '0.00'; //税点
        this.invoiceInfo.selectShuiMoney = parseFloat(0.00).toFixed(2); //税费
        this.invoiceInfo.selectSubTotal = parseFloat(this.TotalMoney).toFixed(2); //总价

        if (payType == 3) {//我的订单（去支付点击过来的）
          if (res.data.payData.length != 0) {
            if (res.data.payData.remark != null) {
              this.desc = res.data.payData.remark; //订单主体备注
            }
            this.kuaiDi = res.data.logway[res.data.payData.delivery].wayname; //快递方式
            this.logchenkNum = res.data.payData.delivery; //选择快递方式的列表
            this.logPrice = parseFloat(res.data.payData.chunkmoney).toFixed(2); //快递费用  (页面)
            this.kuaiDiMoney = parseFloat(res.data.payData.chunkmoney).toFixed(2); //快递费用  (弹出层)
            this.invoTypeName = res.data.fapiao[res.data.payData.invoice_type].name; //默认发票 (页面)
            this.taxpointMoney = parseFloat(res.data.payData.taxpoint).toFixed(2); //税费 (页面)
            this.invoiceInfo.invoiceisShow = false;
            this.invoiceInfo.VATisShow = false;
            this.invoiceInfo.selectInvoice_type = res.data.payData.invoice_type; //是否开票下标
            this.invoiceInfo.selectInvoTypeName = res.data.fapiao[res.data.payData.invoice_type].name; //发票类型 名称
            this.invoiceInfo.selectFaPiaoNum = res.data.payData.invoice; //公司还是个人
            this.invoiceInfo.selectCorporateName = res.data.payData.title; //公司名称
            this.invoiceInfo.selectTaxpayerNum = res.data.payData.tax_code; //纳税人识别号
            this.invoiceInfo.selectaddressPhone = res.data.payData.address; //电话和地址
            this.invoiceInfo.selectopenBankNum = res.data.payData.bank; //开户行及账户
            this.invoiceInfo.selectTaxpoint = res.data.fapiao[res.data.payData.invoice_type].taxpoint; //税点
            this.invoiceInfo.selectShuiMoney = parseFloat(res.data.payData.taxpoint).toFixed(2); //税费
            this.invoiceInfo.selectSubTotal = parseFloat(res.data.payData.total).toFixed(2); //总价
          }
        }
      }
    } },

  onShow: function onShow(e) {
    // uni.getStorage({
    // 	key:'orders',
    // 	success: (e) => {
    // 		uni.removeStorage({
    // 			key:'orders'
    // 		})
    // 		uni.redirectTo({
    // 			url: 'orderpageinfo?orderNum=balance'
    // 		})
    // 	},
    // });
    // 判断是否存在地址 :不存在就显示提示  存在就将提示隐藏
    if (this.defAddress.addid == null) {
      this.addressMsg = false;
    } else {
      this.addressMsg = true;
    }
  },
  // 进入页面加载数据
  onLoad: function onLoad(options) {var _this2 = this;
    uni.setNavigationBarTitle({
      title: '确认订单' });

    this.Distinguish = options.l; //区分是用哪个页面过来进行支付的
    var wulala = uni.getStorageSync("jsonList"); //获取存储在Storage里的值
    var data = JSON.parse(wulala); //JSON字符串转对象
    this.Signboard = data.Ident_Signboard; //给Signboard 赋值最近更新
    this.Signguid = data.Ident_Signguid; //给Signguid 赋值
    this.imgUrl = _public.default.variable; //图片访问IP

    if (options.l == 2) {//下单页 直接购买
      uni.request({
        url: _public.default.variable + '/mobile/order/conOrder',
        method: 'GET',
        data: {
          Ident_Signboard: options.Ident_Signboard, //令牌
          Ident_Signguid: options.Ident_Signguid, //用户id
          long: options.long, //高
          kuan: options.kuan, //宽
          clid: options.clid, //材料id
          qty: options.qty, //数量
          total: options.total, //总价
          price: options.price, //单价
          gyid: options.gyid, //工艺id 
          gyname: options.gyname, //工艺名称
          typeid: options.spid, //商品序号
          l: 2 //标识：区分是购物车发起的支付还是下单页直接过去的
        },
        success: function success(res) {
          _this2.onLoadFun(res, options.l); //调用公共函数
        },
        fail: function fail(res) {
          uni.hideLoading();
          uni.showToast({ title: '请求失败' + '错误码201', icon: "none" });
        } });

    } else if (options.l == 1) {//购物车过来
      uni.request({
        url: _public.default.variable + '/mobile/order/conOrder',
        method: 'POST',
        data: {
          serial: options.serial, //购物车选中的商品序号
          Ident_Signboard: this.Signboard, //令牌
          Ident_Signguid: this.Signguid //用户id
        },
        success: function success(res) {
          _this2.onLoadFun(res, options.l); //调用公共函数
        },
        fail: function fail(res) {
          uni.hideLoading();
          uni.showToast({ title: '请求失败' + '错误码201', icon: "none" });
        } });

    } else {
      this.payOrderid = options.orderid;
      uni.request({
        url: _public.default.variable + '/mobile/order/Payagain',
        method: 'POST',
        data: {
          Ident_Signboard: options.Ident_Signboard, //令牌
          Ident_Signguid: options.Ident_Signguid, //用户id
          orderid: options.orderid //订单id
        },
        success: function success(res) {
          _this2.onLoadFun(res, options.l); //调用公共函数
        },
        fail: function fail(res) {
          uni.hideLoading();
          uni.showToast({ title: '请求失败' + '错误码201', icon: "none" });
        } });

    }
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 232:
/*!**************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/mobile-app-git/pages/order/payment.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./payment.vue?vue&type=style&index=0&lang=css& */ 233);
/* harmony import */ var _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 233:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/mobile-app-git/pages/order/payment.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[226,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/payment.js.map