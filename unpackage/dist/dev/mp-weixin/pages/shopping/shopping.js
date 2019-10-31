(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/shopping/shopping"],{

/***/ "../../mobile-app/components/uni-number-box/uni-number-box.vue":
/*!*******************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/components/uni-number-box/uni-number-box.vue ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_number_box_vue_vue_type_template_id_6341ea11___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-number-box.vue?vue&type=template&id=6341ea11& */ "../../mobile-app/components/uni-number-box/uni-number-box.vue?vue&type=template&id=6341ea11&");
/* harmony import */ var _uni_number_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-number-box.vue?vue&type=script&lang=js& */ "../../mobile-app/components/uni-number-box/uni-number-box.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_number_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_number_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _uni_number_box_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uni-number-box.vue?vue&type=style&index=0&lang=css& */ "../../mobile-app/components/uni-number-box/uni-number-box.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _uni_number_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_number_box_vue_vue_type_template_id_6341ea11___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_number_box_vue_vue_type_template_id_6341ea11___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "mobile-app/components/uni-number-box/uni-number-box.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../mobile-app/components/uni-number-box/uni-number-box.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/components/uni-number-box/uni-number-box.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_number_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../plugins/uniapp-cli/node_modules/babel-loader/lib!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./uni-number-box.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/components/uni-number-box/uni-number-box.vue?vue&type=script&lang=js&");
/* harmony import */ var _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_number_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_number_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_number_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_number_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_number_box_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../mobile-app/components/uni-number-box/uni-number-box.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/components/uni-number-box/uni-number-box.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_number_box_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./uni-number-box.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../mobile-app/components/uni-number-box/uni-number-box.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_number_box_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_number_box_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_number_box_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_number_box_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_number_box_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../mobile-app/components/uni-number-box/uni-number-box.vue?vue&type=template&id=6341ea11&":
/*!**************************************************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/components/uni-number-box/uni-number-box.vue?vue&type=template&id=6341ea11& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_number_box_vue_vue_type_template_id_6341ea11___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./uni-number-box.vue?vue&type=template&id=6341ea11& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/components/uni-number-box/uni-number-box.vue?vue&type=template&id=6341ea11&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_number_box_vue_vue_type_template_id_6341ea11___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_uni_number_box_vue_vue_type_template_id_6341ea11___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../../mobile-app/main.js?{\"page\":\"pages%2Fshopping%2Fshopping\"}":
/*!*********************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/main.js?{"page":"pages%2Fshopping%2Fshopping"} ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../mobile-app/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _shopping = _interopRequireDefault(__webpack_require__(/*! ./pages/shopping/shopping.vue */ "../../mobile-app/pages/shopping/shopping.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_shopping.default));

/***/ }),

/***/ "../../mobile-app/pages/shopping/shopping.vue":
/*!**************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/shopping/shopping.vue ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shopping_vue_vue_type_template_id_12eab099___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping.vue?vue&type=template&id=12eab099& */ "../../mobile-app/pages/shopping/shopping.vue?vue&type=template&id=12eab099&");
/* harmony import */ var _shopping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping.vue?vue&type=script&lang=js& */ "../../mobile-app/pages/shopping/shopping.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _shopping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _shopping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _shopping_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping.vue?vue&type=style&index=0&lang=css& */ "../../mobile-app/pages/shopping/shopping.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _shopping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _shopping_vue_vue_type_template_id_12eab099___WEBPACK_IMPORTED_MODULE_0__["render"],
  _shopping_vue_vue_type_template_id_12eab099___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "mobile-app/pages/shopping/shopping.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../mobile-app/pages/shopping/shopping.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/shopping/shopping.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_shopping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../plugins/uniapp-cli/node_modules/babel-loader/lib!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./shopping.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/shopping/shopping.vue?vue&type=script&lang=js&");
/* harmony import */ var _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_shopping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_shopping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_shopping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_shopping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_shopping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../mobile-app/pages/shopping/shopping.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/shopping/shopping.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_shopping_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./shopping.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/shopping/shopping.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_shopping_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_shopping_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_shopping_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_shopping_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_shopping_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../mobile-app/pages/shopping/shopping.vue?vue&type=template&id=12eab099&":
/*!*********************************************************************************************************************************!*\
  !*** D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/shopping/shopping.vue?vue&type=template&id=12eab099& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_shopping_vue_vue_type_template_id_12eab099___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./shopping.vue?vue&type=template&id=12eab099& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/shopping/shopping.vue?vue&type=template&id=12eab099&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_shopping_vue_vue_type_template_id_12eab099___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_shopping_vue_vue_type_template_id_12eab099___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/components/uni-number-box/uni-number-box.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/components/uni-number-box/uni-number-box.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =







{
  name: 'UniNumberBox',
  props: {
    value: {
      type: [Number, String],
      default: 1 },

    min: {
      type: Number,
      default: 0 },

    max: {
      type: Number,
      default: 100 },

    step: {
      type: Number,
      default: 1 },

    disabled: {
      type: Boolean,
      default: false } },


  data: function data() {
    return {
      inputValue: 0 };

  },
  watch: {
    value: function value(val) {
      this.inputValue = +val;
    },
    inputValue: function inputValue(newVal, oldVal) {
      if (+newVal !== +oldVal) {
        this.$emit('change', newVal);
      }
    } },

  created: function created() {
    this.inputValue = +this.value;
  },
  methods: {
    _calcValue: function _calcValue(type) {
      if (this.disabled) {
        return;
      }
      var scale = this._getDecimalScale();
      var value = this.inputValue * scale;
      var step = this.step * scale;
      if (type === 'minus') {
        value -= step;
      } else if (type === 'plus') {
        value += step;
      }
      if (value < this.min || value > this.max) {
        return;
      }
      this.inputValue = value / scale;
    },
    _getDecimalScale: function _getDecimalScale() {
      var scale = 1;
      // 浮点型
      if (~~this.step !== this.step) {
        scale = Math.pow(10, (this.step + '').split('.')[1].length);
      }
      return scale;
    },
    _onBlur: function _onBlur(event) {
      var value = event.detail.value;
      if (!value) {
        this.inputValue = 0;
        return;
      }
      value = +value;
      if (value > this.max) {
        value = this.max;
      } else if (value < this.min) {
        value = this.min;
      }
      this.inputValue = value;
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/shopping/shopping.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/shopping/shopping.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


















































































var _uniIcon = _interopRequireDefault(__webpack_require__(/*! @/components/uni-icon/uni-icon.vue */ "../../mobile-app/components/uni-icon/uni-icon.vue"));
var _uniNumberBox = _interopRequireDefault(__webpack_require__(/*! @/components/uni-number-box/uni-number-box.vue */ "../../mobile-app/components/uni-number-box/uni-number-box.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  components: { uniIcon: _uniIcon.default, uniNumberBox: _uniNumberBox.default },
  data: function data() {
    return {
      pages: '',
      shoppingList: '', //购物车上了列表
      activeIndex: -1,
      TotalAmount: '' };

  },
  methods: {
    // 返回上一页
    goBack: function goBack(e) {
      var pages = getCurrentPages();
      var currPage = pages[pages.length - 1]; //当前页面
      var prevPage = pages[pages.length - 2]; //上一个页面
    },
    switchActive: function switchActive(index) {
      console.log(123);
      this.activeIndex = 1;
      console.log(this.activeIndex);
    },
    checkboxChange: function checkboxChange(e) {
      console.log(e);
      this.shoppingList[e].chec = !this.shoppingList[e].chec;
      if (this.shoppingList[e].chec == true) {

      }
      console.log(this.shoppingList);

    },
    NameTap: function NameTap(e) {
      uni.navigateTo({
        url: '../product/productinfo' });

    },
    // changeTotal(evt){
    // 	console.log(evt);
    // },
    // 数量的加
    plusBtn: function plusBtn(e) {

      console.log(e);
      console.log(this.shoppingList[e].sc_number);
      console.log(this.shoppingList[e].total);
      return;
      var wulala = uni.getStorageSync("jsonList"); //获取存储在Storage里的值
      var data = JSON.parse(wulala); //JSON字符串转对象
      var softdog = data.softdog; //给softdog(加密狗号)赋值
      var orgip = data.org; //给org(接口IP地址)赋值
      var dbname = data.dbname; //给dbname(数据库)赋值
      var csId = data.csid; //给csID(用户ID)赋值
      // console.log(softdog)
      // console.log(orgip)
      // console.log(dbname)
      // console.log(csId)

      // console.log(item)
      var shopId = item.sc_id; //购物车ID
      this.shoppingList[e].sc_number = this.shoppingList[e].sc_number + 1; //商品数量
      var clId = item.g_id; //材料ID
      var lpId = item.lpid; //后期工艺ID
      var apecs = item.sc_specs; //规格大小
      var arr = apecs.split('*'); //split：字符串分割函数
      var width = arr[0]; //规格：宽
      var height = arr[1]; //规格：高
      var urlInfo = '{"params": [{"goodsid": "' + clId + '","partnerid": "' + csId + '","w": "' + width + '","h": "' + height + '","LpidList": "' + lpId + '","qty": "' + this.shoppingList[e].sc_number + '"}]}';

      uni.request({
        url: "http://" + orgip + "/services/order/query",
        method: 'GET',
        data: {
          token: softdog, //令牌
          dbname: dbname, //数据库
          data: urlInfo },

        success: function success(res) {
          if (res.data.status == 0) {
            console.log(res);
            var noDiscount = res.data.QueryResults[0]['totalmoney']; //没有折扣价
            var Discount = res.data.QueryResults[0]['disctotalmoney']; //有折扣价
            console.log(noDiscount);
            console.log(Discount);
            if (typeof res.data.QueryResults[0]['discprice'] === 'undefined') {

            }
          }
        } });

    },
    // 数量的减
    reduceBtn: function reduceBtn(e) {
      // var query = uni.createSelectorQuery();
      // query.select("#gname").boundingClientRect(function (res) {                         
      // 	console.log(res);
      // }).exec();  
      this.shoppingList[e].sc_number = this.shoppingList[e].sc_number - 1 > 0 ? this.shoppingList[e].sc_number - 1 : 1;
    } },

  onLoad: function onLoad() {var _this = this;
    var wulala = uni.getStorageSync("jsonList"); //获取存储在Storage里的值大家都在发
    var data = JSON.parse(wulala); //JSON字符串转对象
    var Signboard = data.Ident_Signboard; //给Signboard 赋值最近更新
    var Signguid = data.Ident_Signguid; //给Signguid 赋值
    console.log(Signboard);
    console.log(Signguid);

    uni.request({
      url: 'http://192.168.199.194/mobile/index/getShopping',
      method: 'GET',
      data: {
        Ident_Signboard: Signboard,
        Ident_Signguid: Signguid },

      success: function success(res) {
        if (res.data.status == 0) {
          _this.shoppingList = res.data.shopping.data;
        }
      } });

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../mobile-app/components/uni-number-box/uni-number-box.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/components/uni-number-box/uni-number-box.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/shopping/shopping.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/shopping/shopping.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/components/uni-number-box/uni-number-box.vue?vue&type=template&id=6341ea11&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/components/uni-number-box/uni-number-box.vue?vue&type=template&id=6341ea11& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", { staticClass: "uni-numbox" }, [
    _c(
      "view",
      {
        staticClass: "uni-numbox__minus",
        class: {
          "uni-numbox--disabled": _vm.inputValue <= _vm.min || _vm.disabled
        },
        attrs: { eventid: "5be8e3ce-0" },
        on: {
          click: function($event) {
            _vm._calcValue("minus")
          }
        }
      },
      [_vm._v("-")]
    ),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.inputValue,
          expression: "inputValue"
        }
      ],
      staticClass: "uni-numbox__value",
      attrs: { disabled: _vm.disabled, type: "number", eventid: "5be8e3ce-1" },
      domProps: { value: _vm.inputValue },
      on: {
        blur: _vm._onBlur,
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.inputValue = $event.target.value
        }
      }
    }),
    _c(
      "view",
      {
        staticClass: "uni-numbox__plus",
        class: {
          "uni-numbox--disabled": _vm.inputValue >= _vm.max || _vm.disabled
        },
        attrs: { eventid: "5be8e3ce-2" },
        on: {
          click: function($event) {
            _vm._calcValue("plus")
          }
        }
      },
      [_vm._v("+")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../mobile-app/pages/shopping/shopping.vue?vue&type=template&id=12eab099&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/softwara/HBuilderX.1.9.2.20190417.full/HBuilderX/mobile-app/pages/shopping/shopping.vue?vue&type=template&id=12eab099& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        {
          staticClass: "uni-edit flex-row",
          staticStyle: { display: "flex", "flex-direction": "row" }
        },
        [
          _c(
            "view",
            {
              staticClass: "viewone",
              attrs: { eventid: "da631f3e-0" },
              on: { tap: _vm.goBack }
            },
            [_c("i", { staticClass: "uni-icon uni-icon-back" })],
            1
          ),
          _c("view", { staticClass: "viewtwo" }, [_vm._v("编辑商品")])
        ]
      ),
      _vm._l(_vm.shoppingList, function(item, index) {
        return _c(
          "view",
          { key: index, staticClass: "uni-shopinfo" },
          [
            _c(
              "checkbox-group",
              {
                staticClass: "uni-top flex-row",
                attrs: {
                  eventid: "da631f3e-1-" + index,
                  mpcomid: "da631f3e-0-" + index
                },
                on: {
                  change: function($event) {
                    _vm.checkboxChange(index)
                  }
                }
              },
              [_c("view", [_vm._v(_vm._s(item.ty_name))])]
            ),
            _c("view", { staticClass: "uni-middle flex-row" }, [
              _vm._m(0, true),
              _c("view", { staticClass: "flex-view-item" }, [
                _c(
                  "view",
                  {
                    staticClass: "flex-column",
                    staticStyle: { display: "flex", "flex-direction": "column" }
                  },
                  [
                    _c("view", { staticClass: "flex-view-item title" }, [
                      _c("text", [_vm._v("材料:")]),
                      _c("view", { staticStyle: { padding: "6px 0" } }, [
                        _c(
                          "view",
                          {
                            staticClass: "sd",
                            attrs: { eventid: "da631f3e-2-" + index },
                            on: { tap: _vm.NameTap }
                          },
                          [
                            _c(
                              "text",
                              {
                                staticClass: "uni-textname",
                                attrs: { "data-gid": item.g_id, id: "gname" }
                              },
                              [_vm._v(_vm._s(item.g_name))]
                            )
                          ]
                        )
                      ])
                    ]),
                    _c("view", { staticClass: "flex-view-item title" }, [
                      _c("text", [_vm._v("工艺:")]),
                      _c("view", { staticStyle: { padding: "6px 0" } }, [
                        _c("view", { staticClass: "uni-gongyi" }, [
                          _c("text", { attrs: { "data-lpid": item.lpid } }, [
                            _vm._v(_vm._s(item.lpname))
                          ])
                        ])
                      ])
                    ]),
                    _c("view", { staticClass: "flex-view-item title" }, [
                      _c("text", [_vm._v("规格:")]),
                      _c("view", { staticStyle: { padding: "6px 0" } }, [
                        _c("view", { staticClass: "uni-guige" }, [
                          _c("text", [_vm._v(_vm._s(item.sc_specs))])
                        ])
                      ])
                    ]),
                    _c(
                      "view",
                      {
                        staticClass: "flex-row",
                        staticStyle: {
                          display: "flex",
                          "flex-direction": "row"
                        }
                      },
                      [
                        _c(
                          "view",
                          { staticClass: "flex-view-item uni-price" },
                          [
                            _c("text", { staticClass: "moneyNum" }, [
                              _vm._v("￥"),
                              _c("text", { staticClass: "totalPrice" }, [
                                _vm._v(_vm._s(item.total))
                              ])
                            ])
                          ]
                        ),
                        _c(
                          "view",
                          { staticClass: "flex-view-item InpBtn" },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "reduce",
                                attrs: {
                                  "data-scid": item.sc_id,
                                  eventid: "da631f3e-3-" + index
                                },
                                on: {
                                  click: function($event) {
                                    _vm.reduceBtn(index)
                                  }
                                }
                              },
                              [_vm._v("-")]
                            ),
                            _c("input", {
                              staticClass: "inputNum",
                              attrs: {
                                type: "text",
                                value: item.sc_number,
                                "data-scid": item.sc_id,
                                eventid: "da631f3e-4-" + index
                              },
                              on: { input: _vm.numberName }
                            }),
                            _c(
                              "button",
                              {
                                staticClass: "plus",
                                attrs: {
                                  "data-scid": item.sc_id,
                                  eventid: "da631f3e-5-" + index
                                },
                                on: {
                                  click: function($event) {
                                    _vm.plusBtn(index)
                                  }
                                }
                              },
                              [_vm._v("+")]
                            )
                          ],
                          1
                        )
                      ]
                    ),
                    _c("view", { staticClass: "uni-delete" }, [
                      _c("text", { attrs: { "data-scid": item.sc_id } }, [
                        _vm._v("删除")
                      ])
                    ])
                  ]
                )
              ])
            ])
          ],
          1
        )
      }),
      _vm._m(1)
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "flex-view-item" }, [
      _c("image", {
        staticClass: "uni-comimg",
        attrs: { src: "../../static/bgcImg.jpg", mode: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "uni-bottom" }, [
      _c("view", { staticClass: "qx" }, [_c("view", [_vm._v("全选")])]),
      _c("view", { staticClass: "morend" }, [
        _c("view", [_vm._v("总计:"), _c("span", [_vm._v("￥0.0000")])])
      ]),
      _c("view", { staticClass: "end" }, [_c("text", [_vm._v("去结算")])]),
      _c("view", { staticClass: "delete" }, [_c("text", [_vm._v("删除")])])
    ])
  }
]
render._withStripped = true



/***/ })

},[["../../mobile-app/main.js?{\"page\":\"pages%2Fshopping%2Fshopping\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/shopping/shopping.js.map