(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-address/uni-address"],{

/***/ 418:
/*!********************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/mobile-app-git/components/uni-address/uni-address.vue ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_address_vue_vue_type_template_id_2e1a3f98_name_uni_address___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-address.vue?vue&type=template&id=2e1a3f98&name=uni-address& */ 419);
/* harmony import */ var _uni_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-address.vue?vue&type=script&lang=js& */ 421);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _uni_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uni-address.vue?vue&type=style&index=0&lang=css& */ 423);
/* harmony import */ var _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _uni_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_address_vue_vue_type_template_id_2e1a3f98_name_uni_address___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_address_vue_vue_type_template_id_2e1a3f98_name_uni_address___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator/Desktop/mobile-app-git/components/uni-address/uni-address.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 419:
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/mobile-app-git/components/uni-address/uni-address.vue?vue&type=template&id=2e1a3f98&name=uni-address& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_address_vue_vue_type_template_id_2e1a3f98_name_uni_address___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-address.vue?vue&type=template&id=2e1a3f98&name=uni-address& */ 420);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_address_vue_vue_type_template_id_2e1a3f98_name_uni_address___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_address_vue_vue_type_template_id_2e1a3f98_name_uni_address___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 420:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/mobile-app-git/components/uni-address/uni-address.vue?vue&type=template&id=2e1a3f98&name=uni-address& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 421:
/*!*********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/mobile-app-git/components/uni-address/uni-address.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-address.vue?vue&type=script&lang=js& */ 422);
/* harmony import */ var _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 422:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/mobile-app-git/components/uni-address/uni-address.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var mpvueCityPicker = function mpvueCityPicker() {return Promise.all(/*! import() | components/mpvue-citypicker/mpvueCityPicker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/mpvue-citypicker/mpvueCityPicker")]).then(__webpack_require__.bind(null, /*! ../mpvue-citypicker/mpvueCityPicker.vue */ 350));};var mpviePicker = function mpviePicker() {return __webpack_require__.e(/*! import() | components/mpvue-picker/mpvuePicker */ "components/mpvue-picker/mpvuePicker").then(__webpack_require__.bind(null, /*! ../mpvue-picker/mpvuePicker.vue */ 360));};var cityData = function cityData() {return __webpack_require__.e(/*! import() | common/city.data */ "common/vendor").then(__webpack_require__.t.bind(null, /*! ../../common/city.data.js */ 119, 7));};var _default = { name: 'uni-address', components: { 'mpvue-city-picker': mpvueCityPicker, 'mpvue-picker': mpviePicker, 'cityData': cityData }, props: { editType: '' //区分 是 编辑地址 还是新增地址
  }, data: function data() {return { Signboard: '', Signguid: '', mulLinkageTwoPicker: cityData, cityPickerValueDefault: [0, 0, 1], themeColor: '#007AFF', pickerText: '', mode: '', deepLength: 1, pickerValueDefault: [0, 0, 0], pickerValueArray: [], isActive: true, //修改地址显示与隐藏
      upName: "", //修改的名字
      upPhone: "", //修改的电话
      upAddress: "", //修改的地址
      upDeDetailed: "", //修改的详细地址
      patientia: 0, //是否设置为默认地址
      addressId: "", //地址序号
      judgeItems: "", //原数据的存入 用于进行判断
      showMask: true };}, methods: { // 新增地址 保存按钮
    btnIstAddress: function btnIstAddress(e) {var _this = this;if (this.upName == "" || this.upPhone == "" || this.upAddress == "" || this.upDeDetailed == "") {uni.showToast({ title: '请将信息填写完整，不允许为空', icon: 'none' });} else if (!RegExp(/^[\u4E00-\u9FA5A-Za-z0-9]+$/).test(this.upName)) {uni.showToast({ title: "用户名只能包含中文，字母，数字", icon: "none" });} else if (!RegExp(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9])\d{8}$/).test(this.upPhone)) {uni.showToast({ title: "手机号码格式不正确", icon: "none" });} else {this.addressDetailed = this.upAddress + " " + this.upDeDetailed; //拼接：所在地址+详细地址
        console.log(this.addressDetailed);uni.request({ url: _public.default.variable + '/mobile/personal/createAdd', method: 'GET', data: { Ident_Signboard: this.Signboard, Ident_Signguid: this.Signguid, name: this.upName, telephone: this.upPhone, address: this.addressDetailed }, success: function success(res) {var result = _public.default.publicIf(res.data);if (result == false) {return false;
            }
            if (res.data.status == 0) {
              uni.showToast({
                title: res.data.message,
                icon: 'none' });

              _this.isActive = true;
              _this.$emit("change", -1);
            } else {
              uni.showToast({
                title: '新增地址失败',
                icon: 'none' });

            }
          },
          fail: function fail(res) {
            uni.hideLoading();
            uni.showToast({ title: '新增地址失败' + '错误码201', icon: "none" });
          } });

      }
    },
    // 删除/修改后的信息改动接口
    // onAddress(){
    // 	uni.request({
    // 		url: route.variable+'/mobile/personal/getAddress',
    // 		method: 'GET',
    // 		data:{ 
    // 			Ident_Signboard: this.Signboard,
    // 			Ident_Signguid: this.Signguid
    // 		},
    // 		success: (res) => {
    // 			console.log("删除之后调接口")
    // 			console.log(res)
    // 			if(res.data.default.length == 0){
    // 				this.defAddre = true
    // 			}else{
    // 				this.defAddre = false
    // 				this.addressDef = res.data.default;	//给默认地址addressDef赋值
    // 			}
    // 			/* 判断如果默认地址数组里面没有值且地址信息里面只有一条信息时即设置为默认地址 */
    // 			if(res.data.default.length == 0 && res.data.address.length==1){
    // 				this.defAddre = false
    // 				this.addressDef = res.data.address;	//给默认地址addressDef赋值
    // 			}else{
    // 				this.addressList = res.data.address;	//给默认地址addressDef赋值
    // 			}
    // 			
    // 		}
    // 	})
    // },
    //失去焦点时验证手机号
    VerInfoPhone: function VerInfoPhone() {
      if (!RegExp(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9])\d{8}$/).test(this.upPhone)) {
        uni.showToast({
          title: '手机号码格式不正确',
          icon: 'none' });

      }
    },
    /* 判断是否将地址设置成默认地址 true-设为默认  false-没设为默认*/
    isDefaultChange: function isDefaultChange(e) {
      if (e.detail.value == true) {
        this.patientia = 1;
      } else {
        this.patientia = 0;
      }
    },
    /* 点击删除图标触发的事件 */
    shanChu: function shanChu(evt) {
      var _that = this;
      uni.showModal({
        title: '提示',
        content: '是否删除此条地址信息？',
        confirmColor: '#E93B3D',
        success: function success(res) {
          if (res.confirm) {
            //当用户点击确定,便调用删除地址的接口
            uni.request({
              url: _public.default.variable + '/mobile/personal/deleteAdd',
              method: 'GET',
              data: {
                addid: _that.addressId,
                Ident_Signboard: _that.Signboard,
                Ident_Signguid: _that.Signguid },

              success: function success(res) {
                if (res.data.status == 0) {
                  _that.isActive = true;
                  _that.$emit("change", _that.addressId);
                  // _that.$refs.useraddress.onAddress();
                  uni.setNavigationBarTitle({
                    title: '地址管理' });

                } else {
                  uni.showToast({
                    title: '地址删除失败',
                    icon: 'none' });

                }
              },
              fail: function fail(res) {
                uni.hideLoading();
                uni.showToast({ title: '地址删除失败' + '错误码201', icon: "none" });
              } });


          } else if (res.cancel) {
            /* _that.dltAds = false;
                                  _that.upIfmtn=false;
                                  _that.isActive = true;
                                  _that.isActives = false; */
            uni.setNavigationBarTitle({
              title: '地址管理' });

          }
        } });

    },
    /* 修改地址信息 修改默认地址所需调用的接口 */
    upInformation: function upInformation() {var _this2 = this;
      this.dtlAddress = this.upAddress + " " + this.upDeDetailed;
      //判断现有数据是否有修改 如果有修改就调用修改接口，如果没有修改就不调用修改接口
      if (this.judgeItems.name != this.upName || this.judgeItems.telephone != this.upPhone || this.judgeItems.address != this.dtlAddress || this.judgeItems.patientia != this.patientia) {
        if (this.upName == "" || this.upPhone == "" || this.upAddress == "" || this.upDeDetailed == "") {
          uni.showToast({
            title: '请将信息填写完整,不允许为空',
            icon: 'none' });

        } else if (!RegExp(/^[\u4E00-\u9FA5A-Za-z0-9]+$/).test(this.upName)) {
          uni.showToast({
            title: "用户名只能包含中文，字母，数字",
            icon: "none" });

        } else if (!RegExp(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|17[0|1|2|3|5|6|7|8|9])\d{8}$/).test(this.upPhone)) {
          uni.showToast({
            title: "手机号码格式不正确",
            icon: "none" });

        } else {
          uni.request({
            url: _public.default.variable + '/mobile/personal/updateAdd',
            method: 'GET',
            data: {
              addid: this.addressId,
              name: this.upName,
              telephone: this.upPhone,
              address: this.dtlAddress,
              Ident_Signboard: this.Signboard,
              Ident_Signguid: this.Signguid,
              patientia: this.patientia },

            success: function success(res) {
              if (res.data.status == 0) {
                uni.showToast({
                  title: res.data.message,
                  icon: 'none' });

                // this.$refs.useraddress.onAddress();
                // this.onAddress();
                _this2.isActive = true;
                // 
                _this2.$emit("change", -1);
                // this.isActives=false;
              }
            },
            fail: function fail(res) {
              uni.hideLoading();
              uni.showToast({ title: '设置默认地址失败' + '错误码201', icon: "none" });
            } });

        }
      }
    },
    /* 修改中的保存按钮 ----点击保存按钮触发的事件 */
    btnAddress: function btnAddress(evt) {
      this.upInformation();
    },
    // 隐藏 
    hide: function hide() {
      this.isActive = true;
      console.log(this.isActive);
    },
    showMaskFun: function showMaskFun() {
      return { 'name': this.upName, 'telephone': this.upPhone, 'patientia': this.patientia, 'address': this.upAddress + ' ' + this.upDeDetailed };
    },
    // 编辑地址的显示
    show: function show(e, token, guid) {var _this3 = this;
      setTimeout(function () {
        if (_this3.editType == 'edit') {
          _this3.judgeItems = e;
          _this3.upName = e.name;
          _this3.upPhone = e.telephone;
          _this3.patientia = e.patientia;
          _this3.addressId = e.addid;
          _this3.upAddress = e.address.substring(0, e.address.indexOf(' '));
          _this3.upDeDetailed = e.address.substring(e.address.indexOf(' ') + 1);
        } else {
          _this3.judgeItems = '';
          _this3.upName = '';
          _this3.upPhone = '';
          _this3.patientia = '';
          _this3.addressId = '';
          _this3.upAddress = '';
          _this3.upDeDetailed = '';
        }
        _this3.Signboard = token;
        _this3.Signguid = guid;
        _this3.isActive = false;
      }, 0);
    },
    showMulLinkageThreePicker: function showMulLinkageThreePicker() {
      this.$refs.mpvueCityPicker.show();
    },
    onConfirm: function onConfirm(e) {
      this.pickerText = JSON.stringify(e);
      this.pickerText = JSON.parse(this.pickerText);
      this.upAddress = this.pickerText.label;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 423:
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/mobile-app-git/components/uni-address/uni-address.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-address.vue?vue&type=style&index=0&lang=css& */ 424);
/* harmony import */ var _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_HBuilderX_2_3_7_20191024_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_address_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 424:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/mobile-app-git/components/uni-address/uni-address.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/uni-address/uni-address.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-address/uni-address-create-component',
    {
        'components/uni-address/uni-address-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(418))
        })
    },
    [['components/uni-address/uni-address-create-component']]
]);                
