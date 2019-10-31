(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/order/invoice"],{

/***/ "../../mobile-app/main.js?{\"page\":\"pages%2Forder%2Finvoice\"}":
/*!*****************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/main.js?{"page":"pages%2Forder%2Finvoice"} ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../mobile-app/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _invoice = _interopRequireDefault(__webpack_require__(/*! ./pages/order/invoice.vue */ "../../mobile-app/pages/order/invoice.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_invoice.default));

/***/ }),

/***/ "../../mobile-app/pages/order/invoice.vue":
/*!**********************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/invoice.vue ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invoice_vue_vue_type_template_id_1a4da656___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice.vue?vue&type=template&id=1a4da656& */ "../../mobile-app/pages/order/invoice.vue?vue&type=template&id=1a4da656&");
/* harmony import */ var _invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.vue?vue&type=script&lang=js& */ "../../mobile-app/pages/order/invoice.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _invoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice.vue?vue&type=style&index=0&lang=css& */ "../../mobile-app/pages/order/invoice.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _invoice_vue_vue_type_template_id_1a4da656___WEBPACK_IMPORTED_MODULE_0__["render"],
  _invoice_vue_vue_type_template_id_1a4da656___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "mobile-app/pages/order/invoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../mobile-app/pages/order/invoice.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/invoice.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../plugins/uniapp-cli/node_modules/babel-loader/lib!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/order/invoice.vue?vue&type=script&lang=js&");
/* harmony import */ var _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../mobile-app/pages/order/invoice.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/invoice.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./invoice.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/order/invoice.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../mobile-app/pages/order/invoice.vue?vue&type=template&id=1a4da656&":
/*!*****************************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/invoice.vue?vue&type=template&id=1a4da656& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_1a4da656___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./invoice.vue?vue&type=template&id=1a4da656& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/order/invoice.vue?vue&type=template&id=1a4da656&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_1a4da656___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_1a4da656___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/order/invoice.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/invoice.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



































































var _uniIcon = _interopRequireDefault(__webpack_require__(/*! @/components/uni-icon/uni-icon.vue */ "../../mobile-app/components/uni-icon/uni-icon.vue"));
var _uniCollapse = _interopRequireDefault(__webpack_require__(/*! @/components/uni-collapse/uni-collapse.vue */ "../../mobile-app/components/uni-collapse/uni-collapse.vue"));
var _uniCollapseItem = _interopRequireDefault(__webpack_require__(/*! @/components/uni-collapse-item/uni-collapse-item.vue */ "../../mobile-app/components/uni-collapse-item/uni-collapse-item.vue"));
var _uniList = _interopRequireDefault(__webpack_require__(/*! @/components/uni-list/uni-list.vue */ "../../mobile-app/components/uni-list/uni-list.vue"));
var _uniListItem = _interopRequireDefault(__webpack_require__(/*! @/components/uni-list-item/uni-list-item.vue */ "../../mobile-app/components/uni-list-item/uni-list-item.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  components: { uniIcon: _uniIcon.default, uniCollapse: _uniCollapse.default, uniCollapseItem: _uniCollapseItem.default, uniList: _uniList.default, uniListItem: _uniListItem.default },
  data: function data() {
    return {
      el: 'cdcd',
      isActive: true,
      // isActivess: true,
      comActive: true,
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
      current: 0 };

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
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/order/invoice.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/invoice.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/order/invoice.vue?vue&type=template&id=1a4da656&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/order/invoice.vue?vue&type=template&id=1a4da656& ***!
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
  return _c("view", [
    _c("view", { staticClass: "invoice" }, [
      _c(
        "view",
        { staticClass: "invoiceType" },
        [
          _c(
            "uni-collapse",
            { attrs: { mpcomid: "5c5886c4-2" } },
            [
              _c(
                "uni-collapse-item",
                {
                  attrs: {
                    title: "发票类型",
                    "show-animation": false,
                    mpcomid: "5c5886c4-1"
                  }
                },
                [
                  _c("view", { staticStyle: { padding: "30rpx" } }, [
                    _c(
                      "view",
                      { staticClass: "uni-list" },
                      [
                        _c(
                          "radio-group",
                          {
                            attrs: {
                              eventid: "5c5886c4-0",
                              mpcomid: "5c5886c4-0"
                            },
                            on: { change: _vm.radioChange }
                          },
                          _vm._l(_vm.items, function(item, index) {
                            return _c(
                              "label",
                              {
                                key: item.value,
                                staticClass: "uni-list-cell uni-list-cell-pd"
                              },
                              [
                                _c(
                                  "view",
                                  [
                                    _c("radio", {
                                      attrs: {
                                        value: item.value,
                                        checked: index === _vm.current
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _c("view", [_vm._v(_vm._s(item.name))])
                              ]
                            )
                          })
                        )
                      ],
                      1
                    )
                  ])
                ]
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "view",
        { staticClass: "invoiceType01", class: { active: _vm.isActive } },
        [
          _c(
            "uni-collapse",
            { attrs: { mpcomid: "5c5886c4-5" } },
            [
              _c(
                "uni-collapse-item",
                {
                  attrs: {
                    title: "发票抬头",
                    "show-animation": false,
                    eventid: "5c5886c4-2",
                    mpcomid: "5c5886c4-4"
                  },
                  on: { change: _vm.invoiceChange }
                },
                [
                  _c("view", { staticStyle: { padding: "30rpx" } }, [
                    _c(
                      "view",
                      { staticClass: "uni-list" },
                      [
                        _c(
                          "radio-group",
                          {
                            attrs: {
                              eventid: "5c5886c4-1",
                              mpcomid: "5c5886c4-3"
                            },
                            on: { change: _vm.redioList }
                          },
                          _vm._l(_vm.invoices, function(invoice, index) {
                            return _c(
                              "label",
                              {
                                key: invoice.value,
                                staticClass: "uni-list-cell uni-list-cell-pd"
                              },
                              [
                                _c(
                                  "view",
                                  [
                                    _c("radio", {
                                      attrs: {
                                        value: invoice.value,
                                        checked: index === _vm.current
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _c("view", [_vm._v(_vm._s(invoice.name))])
                              ]
                            )
                          })
                        )
                      ],
                      1
                    )
                  ])
                ]
              )
            ],
            1
          )
        ],
        1
      ),
      _c("view", { staticClass: "enterprise" }, [
        _c(
          "view",
          {
            class: { active: _vm.comActive },
            staticStyle: { "margin-bottom": "5rem" }
          },
          [
            _c("text", [_vm._v("发票内容")]),
            _vm._l(_vm.wulala, function(wula, index) {
              return _c(
                "view",
                { key: index, staticClass: "enterpriseContent" },
                [
                  _c("text", [_vm._v(_vm._s(wula.name) + ":")]),
                  _c("input", { attrs: { type: "text", id: wula.id } })
                ]
              )
            })
          ],
          2
        )
      ]),
      _c(
        "view",
        { staticClass: "dv_button" },
        [_c("button", { attrs: { type: "" } }, [_vm._v("确定")]), _vm._m(0)],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", [_vm._v("税费"), _c("text", [_vm._v("￥493.0000")])])
  }
]
render._withStripped = true



/***/ })

},[["../../mobile-app/main.js?{\"page\":\"pages%2Forder%2Finvoice\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/invoice.js.map