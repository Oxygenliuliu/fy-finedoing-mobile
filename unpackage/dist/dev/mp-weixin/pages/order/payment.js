(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/order/payment"],{

/***/ "../../mobile-app/main.js?{\"page\":\"pages%2Forder%2Fpayment\"}":
/*!*****************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/main.js?{"page":"pages%2Forder%2Fpayment"} ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../mobile-app/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _payment = _interopRequireDefault(__webpack_require__(/*! ./pages/order/payment.vue */ "../../mobile-app/pages/order/payment.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_payment.default));

/***/ }),

/***/ "../../mobile-app/pages/order/payment.vue":
/*!**********************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/payment.vue ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payment_vue_vue_type_template_id_1c42fea2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.vue?vue&type=template&id=1c42fea2& */ "../../mobile-app/pages/order/payment.vue?vue&type=template&id=1c42fea2&");
/* harmony import */ var _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.vue?vue&type=script&lang=js& */ "../../mobile-app/pages/order/payment.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment.vue?vue&type=style&index=0&lang=css& */ "../../mobile-app/pages/order/payment.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _payment_vue_vue_type_template_id_1c42fea2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _payment_vue_vue_type_template_id_1c42fea2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "mobile-app/pages/order/payment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../mobile-app/pages/order/payment.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/payment.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../plugins/uniapp-cli/node_modules/babel-loader/lib!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./payment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/order/payment.vue?vue&type=script&lang=js&");
/* harmony import */ var _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../mobile-app/pages/order/payment.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/payment.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./payment.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/order/payment.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../mobile-app/pages/order/payment.vue?vue&type=template&id=1c42fea2&":
/*!*****************************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/payment.vue?vue&type=template&id=1c42fea2& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_1c42fea2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./payment.vue?vue&type=template&id=1c42fea2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/order/payment.vue?vue&type=template&id=1c42fea2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_1c42fea2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_1c42fea2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/order/payment.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/payment.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
































































































































var _uniIcon = _interopRequireDefault(__webpack_require__(/*! @/components/uni-icon/uni-icon.vue */ "../../mobile-app/components/uni-icon/uni-icon.vue"));
var _uniCollapse = _interopRequireDefault(__webpack_require__(/*! @/components/uni-collapse/uni-collapse.vue */ "../../mobile-app/components/uni-collapse/uni-collapse.vue"));
var _uniCollapseItem = _interopRequireDefault(__webpack_require__(/*! @/components/uni-collapse-item/uni-collapse-item.vue */ "../../mobile-app/components/uni-collapse-item/uni-collapse-item.vue"));
var _uniList = _interopRequireDefault(__webpack_require__(/*! @/components/uni-list/uni-list.vue */ "../../mobile-app/components/uni-list/uni-list.vue"));
var _uniListItem = _interopRequireDefault(__webpack_require__(/*! @/components/uni-list-item/uni-list-item.vue */ "../../mobile-app/components/uni-list-item/uni-list-item.vue"));
var _uniPopup = _interopRequireDefault(__webpack_require__(/*! @/components/uni-popup/uni-popup.vue */ "../../mobile-app/components/uni-popup/uni-popup.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  components: { uniIcon: _uniIcon.default, uniCollapse: _uniCollapse.default, uniCollapseItem: _uniCollapseItem.default, uniList: _uniList.default, uniListItem: _uniListItem.default, uniPopup: _uniPopup.default },
  data: function data() {
    return {
      el: 'cdcd',
      addressActive: false, //修改地址显示与隐藏
      delivery: false, //配送方式
      payment: false, //支付方式
      addressInfo: true, //收货地址
      addcheckNum: 0, //地址下标
      dis: "none",
      title: 'radio',
      items: [
      {
        value: 'no',
        name: '不开发票',
        checked: 'true' },

      {
        value: 'specialPurpose',
        name: '增值税专用发票' },

      {
        value: 'ordinary',
        name: '增值税普通发票' }],


      invoices: [{
        value: '1',
        name: '企业',
        checked: 'checked' },

      {
        value: '2',
        name: '个人' }],


      wulala: '',
      current: 0,
      shopList: '', //商品详情数据列表
      addressList: '', //地址列表信息
      logwayList: '', //物流方式列表信息
      subTotal: '' //总价价格
    };
  },
  methods: {
    radioChange: function radioChange(evt) {
      console.log('asdf');
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].value === evt.target.value) {
          this.current = i;
          if (this.items[i].value == 'no')
          {
            this.isActive = true;
            this.comActive = true;
          } else {
            this.isActive = false;
            console.log("11111111111");
            if (this.items[i].value === 'specialPurpose') {
              this.invoices = [{
                value: '1',
                name: '企业' }];


            } else if (this.items[i].value === 'ordinary') {
              this.invoices = [{
                value: '1',
                name: '企业' },

              {
                value: '2',
                name: '个人' }];


            }
          }
          break;
        }
      }
    },
    redioList: function redioList(evt) {//发票内容事件
      this.comActive = false;
      if (evt.target.value == '1') {
        this.wulala = [{
          id: '01',
          name: '公司名称' },
        {
          id: '02',
          name: '纳税人识别号' },
        {
          id: '03',
          name: '地址,电话' },
        {
          id: '04',
          name: '开户号及账号' }];

      } else if (evt.target.value == '2') {
        this.wulala = [{
          id: 'person',
          name: '名称' }];

      }
    },
    // 点击选择 配送方式
    deliveryClick: function deliveryClick(evt) {
      this.delivery = true;
    },
    // 配送方式的 取消 按钮
    deliveryPopup: function deliveryPopup(evt) {
      this.delivery = false;
    },
    // 点击选择 支付方式
    checkClick: function checkClick(evt) {
      this.payment = true;
    },
    // 支付方式页面的 取消 按钮
    checkPopup: function checkPopup(evt) {
      this.payment = false;
    },
    // 点击地址
    addressClick: function addressClick(evt) {
      console.log('哈哈');
      this.addressActive = true; //地址页面显示
      this.addressInfo = false; //订单详细信息页面隐藏
    },
    // 地址详情的 取消 按钮
    cancelBtn: function cancelBtn(e) {
      this.addressActive = false; //地址页面隐藏
      this.addressInfo = true; //订单详细信息页面显示
    },
    // 地址详情的 确定 按钮
    determineBtn: function determineBtn(e) {
      this.addressActive = false; //地址页面隐藏
      this.addressInfo = true; //订单详细信息页面显示
    },
    // 点击地址列表切换
    addTap: function addTap(index) {
      this.addcheckNum = index;
    } },

  onLoad: function onLoad(options) {var _this = this;
    if (options.l == 2) {
      uni.request({
        url: 'http://192.168.199.194/mobile/order/conOrder',
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
          spid: options.spid, //商品序号
          l: 2 //标识：区分是购物车发起的支付还是下单页直接过去的
        },
        success: function success(res) {
          if (res.data.status == 0) {
            _this.subTotal = res.data.total; //给subTotal（总价）赋值
            _this.shopList = res.data.shop; //给shopList（商品信息列表）赋值
            _this.addressList = res.data.address; //给addressList（地址列表信息）赋值
            _this.logwayList = res.data.logway; //给logwayList（物流方式列表信息）赋值
            console.log(res);
            console.log(_this.shopList);
          }
        } });

    }

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/order/payment.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/payment.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/order/payment.vue?vue&type=template&id=1c42fea2&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/payment.vue?vue&type=template&id=1c42fea2& ***!
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
    [
      _c(
        "view",
        { staticClass: "payment", class: { actives: _vm.addressActive } },
        [
          _c(
            "view",
            {
              staticClass: "address_view uni-flex",
              attrs: { eventid: "2e19ab77-0" },
              on: { tap: _vm.addressClick }
            },
            [
              _c(
                "view",
                [
                  _c("text", { staticClass: "name_phone" }, [
                    _vm._v("wadawd 18244257586")
                  ]),
                  _c("br"),
                  _c("text", { staticClass: "address" }, [
                    _vm._v("北京市/北京市/东城区")
                  ])
                ],
                1
              ),
              _c(
                "view",
                { staticClass: "one" },
                [
                  _c("uni-icon", {
                    staticClass: "jiantou",
                    attrs: {
                      type: "arrowright",
                      size: "30",
                      mpcomid: "2e19ab77-0"
                    }
                  })
                ],
                1
              )
            ]
          ),
          _vm._l(_vm.shopList, function(item, index) {
            return _c("view", { key: index, staticClass: "commodity_view" }, [
              _c(
                "view",
                { staticClass: "cd_tite", attrs: { "data-spId": item.ty_id } },
                [_vm._v(_vm._s(item.tradename))]
              ),
              _c("view", { staticClass: "cd_cont" }, [
                _c("image", { attrs: { src: item.img } }),
                _c("view", [
                  _c("view", [
                    _vm._v("材料:"),
                    _c("text", { attrs: { "data-gId": item.g_id } }, [
                      _vm._v(_vm._s(item.g_name))
                    ])
                  ]),
                  _c("view", [
                    _vm._v("工艺:"),
                    _c("text", { attrs: { "data-clId": item.lpid } }, [
                      _vm._v(_vm._s(item.lpname))
                    ])
                  ]),
                  _c("view", [
                    _vm._v("规格:"),
                    _c("text", [_vm._v(_vm._s(item.sc_specs))])
                  ]),
                  _c("view", [
                    _vm._v("数量:"),
                    _c("text", [_vm._v(_vm._s(item.sc_number))])
                  ]),
                  _c("view", { staticClass: "money" }, [
                    _c("text", { staticStyle: { color: "red" } }, [
                      _vm._v("￥" + _vm._s(item.sc_total_price))
                    ]),
                    _c("text", [_vm._v("备注")])
                  ])
                ])
              ])
            ])
          }),
          _c(
            "view",
            {
              staticClass: "delivery",
              staticStyle: { "margin-bottom": "1rem" },
              attrs: { eventid: "2e19ab77-1" },
              on: { click: _vm.deliveryClick }
            },
            [
              _c("view", [
                _vm._v("配送服务"),
                _c(
                  "text",
                  [
                    _vm._v("快递"),
                    _c("uni-icon", {
                      staticClass: "jiantou",
                      attrs: {
                        type: "arrowright",
                        size: "19",
                        mpcomid: "2e19ab77-1"
                      }
                    })
                  ],
                  1
                )
              ])
            ]
          ),
          _c(
            "navigator",
            { staticClass: "delivery", attrs: { url: "../order/invoice" } },
            [
              _c("view", [
                _vm._v("发票信息"),
                _c(
                  "text",
                  [
                    _vm._v("不开发票"),
                    _c("uni-icon", {
                      staticClass: "jiantou",
                      attrs: {
                        type: "arrowright",
                        size: "19",
                        mpcomid: "2e19ab77-2"
                      }
                    })
                  ],
                  1
                )
              ])
            ]
          ),
          _c(
            "view",
            {
              staticClass: "delivery",
              attrs: { eventid: "2e19ab77-2" },
              on: { click: _vm.checkClick }
            },
            [
              _c("view", [
                _vm._v("支付方式"),
                _c(
                  "text",
                  [
                    _vm._v("余额"),
                    _c("uni-icon", {
                      staticClass: "jiantou",
                      attrs: {
                        type: "arrowright",
                        size: "19",
                        mpcomid: "2e19ab77-3"
                      }
                    })
                  ],
                  1
                )
              ])
            ]
          ),
          _vm._m(0),
          _c("view", { staticClass: "orderAmount" }, [
            _vm._m(1),
            _vm._m(2),
            _vm._m(3),
            _c("view", { staticClass: "tomor" }, [
              _vm._v("总价:"),
              _c("text", [_vm._v("￥" + _vm._s(_vm.subTotal))])
            ]),
            _c("view", [_c("button", [_vm._v("支付")])], 1)
          ])
        ],
        2
      ),
      _c(
        "uni-popup",
        {
          attrs: {
            show: _vm.delivery,
            type: "bottom",
            position: "bottom",
            mpcomid: "2e19ab77-4"
          }
        },
        [
          _c("view", { staticClass: "delivery_view" }, [
            _c("view", { staticClass: "dv_mode" }, [
              _c("text", [_vm._v("配送方式")]),
              _c("view", { staticClass: "dv_show" }, [_vm._v("快递")]),
              _c("view", [_vm._v("自取")]),
              _c("view", [_vm._v("送货上门")])
            ]),
            _c("view", { staticClass: "dv_cont" }, [
              _c("text", [_vm._v("快递20")])
            ]),
            _c(
              "view",
              { staticClass: "dv_button" },
              [
                _c(
                  "button",
                  {
                    staticStyle: { background: "#B9B5B0" },
                    attrs: { type: "", eventid: "2e19ab77-3" },
                    on: { tap: _vm.deliveryPopup }
                  },
                  [_vm._v("取消")]
                ),
                _c("button", { attrs: { type: "" } }, [_vm._v("确定")]),
                _c("view", [_vm._v("配送费"), _c("text", [_vm._v("￥0.0000")])])
              ],
              1
            )
          ])
        ]
      ),
      _c(
        "uni-popup",
        {
          attrs: {
            show: _vm.payment,
            type: "bottom",
            position: "bottom",
            mpcomid: "2e19ab77-5"
          }
        },
        [
          _c("view", { attrs: { id: "zf_mode" } }, [
            _c("view", { staticClass: "zf_cont" }, [
              _c("text", [_vm._v("支付方式")]),
              _c(
                "view",
                { staticClass: "zf_show", attrs: { uid: "1" } },
                [
                  _c("i", {
                    staticClass: "iconfont icon-weixin",
                    staticStyle: { color: "#E93B3D" }
                  }),
                  _vm._v("微信")
                ],
                1
              ),
              _c(
                "view",
                { attrs: { uid: "2" } },
                [
                  _c("i", {
                    staticClass: "iconfont icon-zhifubao",
                    staticStyle: { color: "#C3C3C3" }
                  }),
                  _vm._v("支付宝")
                ],
                1
              ),
              _c(
                "view",
                { attrs: { uid: "2" } },
                [
                  _c("i", {
                    staticClass: "iconfont icon-yue",
                    staticStyle: { color: "#C3C3C3" }
                  }),
                  _vm._v("余额")
                ],
                1
              ),
              _c(
                "view",
                { attrs: { uid: "2" } },
                [
                  _c("i", {
                    staticClass: "iconfont icon-guazhang",
                    staticStyle: { color: "#C3C3C3" }
                  }),
                  _vm._v("挂账")
                ],
                1
              )
            ]),
            _c(
              "view",
              {
                staticClass: "flex-row",
                staticStyle: { display: "flex", "flex-direction": "row" }
              },
              [
                _c(
                  "view",
                  { staticClass: "flex-view-item addToCart" },
                  [_c("button", [_vm._v("确定")])],
                  1
                ),
                _c(
                  "view",
                  { staticClass: "flex-view-item immediatePayment" },
                  [
                    _c(
                      "button",
                      {
                        attrs: { eventid: "2e19ab77-4" },
                        on: { tap: _vm.checkPopup }
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
      ),
      _c(
        "view",
        { staticClass: "popupBgc", class: { addre: _vm.addressInfo } },
        [
          _c(
            "view",
            {
              staticClass: "popup-title",
              staticStyle: {
                "text-align": "center",
                "font-size": "1rem",
                color: "red"
              }
            },
            [_vm._v("选择地址")]
          ),
          _vm._l(_vm.addressList, function(address, index) {
            return _c(
              "radio-group",
              { key: index, attrs: { mpcomid: "2e19ab77-7-" + index } },
              [
                _c(
                  "view",
                  {
                    staticClass: "flex-row popupList",
                    staticStyle: { display: "flex", "flex-direction": "row" }
                  },
                  [
                    _c(
                      "view",
                      { staticClass: "flex-view-item" },
                      [
                        _c(
                          "label",
                          { staticClass: "radio uniRadio" },
                          [
                            _c("radio", {
                              staticClass: "form-radio",
                              attrs: {
                                "data-anid": address.cn_id,
                                color: index == _vm.addcheckNum ? "red" : "",
                                eventid: "2e19ab77-5-" + index
                              },
                              on: {
                                tap: function($event) {
                                  _vm.addTap(index)
                                }
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _c("view", { staticClass: "flex-view-item dizhiList" }, [
                      _c("view", { staticClass: "addressName" }, [
                        _vm._v(_vm._s(address.cn_name)),
                        _c("text", [_vm._v(_vm._s(address.cn_telphone))])
                      ]),
                      _c("view", { staticClass: "addressInfo" }, [
                        _vm._v(_vm._s(address.cn_address))
                      ])
                    ]),
                    _c(
                      "view",
                      { staticClass: "updateIcon" },
                      [
                        _c("uni-icon", {
                          staticClass: "uni-icon-compose uni-compose tubiao",
                          staticStyle: {
                            color: "#000000",
                            "font-size": "1.4",
                            "line-height": "1.3"
                          },
                          attrs: { mpcomid: "2e19ab77-6-" + index }
                        })
                      ],
                      1
                    )
                  ]
                )
              ]
            )
          }),
          _c("view", { staticClass: "uni-count" }, [
            _c(
              "view",
              {
                staticClass: "flex-row",
                staticStyle: { display: "flex", "flex-direction": "row" }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: "flex-view-item cancelBtn",
                    attrs: { eventid: "2e19ab77-6" },
                    on: { tap: _vm.cancelBtn }
                  },
                  [_c("button", [_vm._v("取消")])],
                  1
                ),
                _c(
                  "view",
                  {
                    staticClass: "flex-view-item determineBtn",
                    attrs: { eventid: "2e19ab77-7" },
                    on: { tap: _vm.determineBtn }
                  },
                  [_c("button", [_vm._v("确定")])],
                  1
                )
              ]
            )
          ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "remarks" }, [
      _c("text", [_vm._v("备注:")]),
      _c("textarea", {
        attrs: {
          rows: "5",
          cols: "30",
          maxlength: "320",
          placeholder: "请输入备注信息"
        }
      }),
      _c("view", [_c("text", [_vm._v("0")]), _vm._v("/320")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", [_vm._v("商品金额"), _c("text", [_vm._v("￥2900.0000")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", [_vm._v("运费"), _c("text", [_vm._v("￥20.0000")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", [_vm._v("税费"), _c("text", [_vm._v("￥0.0000")])])
  }
]
render._withStripped = true



/***/ })

},[["../../mobile-app/main.js?{\"page\":\"pages%2Forder%2Fpayment\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/payment.js.map