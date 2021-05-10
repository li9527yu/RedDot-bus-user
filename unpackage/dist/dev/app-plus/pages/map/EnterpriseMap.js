"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************************************************************************************!*\
  !*** E:/Code_Me/Webman/Redot/RedDot-bus-user/main.js?{"page":"pages%2Fmap%2FEnterpriseMap"} ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_map_EnterpriseMap_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/map/EnterpriseMap.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_map_EnterpriseMap_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_map_EnterpriseMap_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/map/EnterpriseMap'\n        _pages_map_EnterpriseMap_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_map_EnterpriseMap_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsaUZBQUc7QUFDWCxRQUFRLGlGQUFHO0FBQ1gsUUFBUSxpRkFBRztBQUNYLGdCQUFnQixpRkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9tYXAvRW50ZXJwcmlzZU1hcC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL21hcC9FbnRlcnByaXNlTWFwJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***************************************************************************!*\
  !*** E:/Code_Me/Webman/Redot/RedDot-bus-user/main.js?{"type":"appStyle"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************************************************************************!*\
  !*** E:/Code_Me/Webman/Redot/RedDot-bus-user/App.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Code_Me/Webman/Redot/RedDot-bus-user/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!****************************************************************************************!*\
  !*** E:/Code_Me/Webman/Redot/RedDot-bus-user/pages/map/EnterpriseMap.nvue?mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EnterpriseMap_nvue_vue_type_template_id_04454e4f_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnterpriseMap.nvue?vue&type=template&id=04454e4f&mpType=page */ 5);\n/* harmony import */ var _EnterpriseMap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EnterpriseMap.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _EnterpriseMap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _EnterpriseMap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./EnterpriseMap.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./EnterpriseMap.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _EnterpriseMap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _EnterpriseMap_nvue_vue_type_template_id_04454e4f_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _EnterpriseMap_nvue_vue_type_template_id_04454e4f_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"6852ef1c\",\n  false,\n  _EnterpriseMap_nvue_vue_type_template_id_04454e4f_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/map/EnterpriseMap.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0k7QUFDdEk7QUFDNkU7QUFDTDtBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDBFQUFrRTtBQUN0SCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMEVBQWtFO0FBQzNIOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLCtGQUFNO0FBQ1IsRUFBRSxvR0FBTTtBQUNSLEVBQUUsNkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9FbnRlcnByaXNlTWFwLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDQ0NTRlNGYmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0VudGVycHJpc2VNYXAubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9FbnRlcnByaXNlTWFwLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL0VudGVycHJpc2VNYXAubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL0VudGVycHJpc2VNYXAubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNjg1MmVmMWNcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbWFwL0VudGVycHJpc2VNYXAubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**********************************************************************************************************************!*\
  !*** E:/Code_Me/Webman/Redot/RedDot-bus-user/pages/map/EnterpriseMap.nvue?vue&type=template&id=04454e4f&mpType=page ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_EnterpriseMap_nvue_vue_type_template_id_04454e4f_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./EnterpriseMap.nvue?vue&type=template&id=04454e4f&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_EnterpriseMap_nvue_vue_type_template_id_04454e4f_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_EnterpriseMap_nvue_vue_type_template_id_04454e4f_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_EnterpriseMap_nvue_vue_type_template_id_04454e4f_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_EnterpriseMap_nvue_vue_type_template_id_04454e4f_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Code_Me/Webman/Redot/RedDot-bus-user/pages/map/EnterpriseMap.nvue?vue&type=template&id=04454e4f&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c("view", { staticClass: ["Mapcontent"] }, [
        _c(
          "view",
          { staticClass: ["pageMap"] },
          [
            _c("map", {
              ref: "Emap",
              staticClass: ["mymap2"],
              attrs: {
                id: "Emap",
                latitude: _vm.latitude,
                longitude: _vm.longitude,
                markers: _vm.covers
              }
            })
          ],
          1
        )
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!****************************************************************************************************************!*\
  !*** E:/Code_Me/Webman/Redot/RedDot-bus-user/pages/map/EnterpriseMap.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_EnterpriseMap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./EnterpriseMap.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_EnterpriseMap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_EnterpriseMap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_EnterpriseMap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_EnterpriseMap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_EnterpriseMap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXViLENBQWdCLG1lQUFHLEVBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbnRlcnByaXNlTWFwLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VudGVycHJpc2VNYXAubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Code_Me/Webman/Redot/RedDot-bus-user/pages/map/EnterpriseMap.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _vuex = __webpack_require__(/*! vuex */ 10);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =\n\n\n\n{\n  data: function data() {\n    return {\n      latitude: '',\n      longitude: '',\n      covers: [\n      {\n        latitude: 36,\n        longitude: 110,\n        iconPath: '../../static/img/location.png',\n        width: 30,\n        height: 30 }],\n\n\n      socketTask: null,\n      is_open_socket: false,\n      timer: null };\n\n\n  },\n  computed: _objectSpread({},\n  (0, _vuex.mapState)(['userId', 'hasLogin', 'num', 'forcedLogin', 'isClose'])),\n\n  created: function created() {\n    this.handleNotice();\n    this.getLocation();\n    if (this.hasLogin) {\n      this.connectSocketInit();\n    }\n  },\n  onShow: function onShow() {\n    this.getLocation();\n  },\n  onLoad: function onLoad(option) {\n    // console.log(option.orderId)\n    this.getLocation();\n\n  },\n  onReady: function onReady() {\n    this.map = uni.createMapContext(\"Emap\", this);\n  },\n  beforeDestroy: function beforeDestroy() {\n    if (this.hasLogin)\n    {\n      this.closeSocket();\n    }\n  },\n  methods: {\n    handleNotice: function handleNotice(e) {\n      var system = uni.getSystemInfoSync(); // 获取系统信息\n      // console.log(JSON.stringify(system));\n      if (system.platform === 'android') {// 判断平台\n        var context = plus.android.importClass(\"android.content.Context\");\n        var locationManager = plus.android.importClass(\"android.location.LocationManager\");\n        var main = plus.android.runtimeMainActivity();\n        var mainSvr = main.getSystemService(context.LOCATION_SERVICE);\n        if (!mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER)) {\n          uni.showModal({\n            title: '提示',\n            content: '请打开定位服务功能',\n            showCancel: false, // 不显示取消按钮\n            success: function success() {\n              if (!mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER)) {\n                var Intent = plus.android.importClass('android.content.Intent');\n                var Settings = plus.android.importClass('android.provider.Settings');\n                var intent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);\n                main.startActivity(intent); // 打开系统设置GPS服务页面\n              } else {\n                __f__(\"log\", 'GPS功能已开启', \" at pages/map/EnterpriseMap.nvue:88\");\n              }\n            } });\n\n        }\n      }\n      // uni.navigateTo({\n      // \t\turl: './../tabBar-3/notice/notice_list?type=1&userId='+_self.userInfo.userId\n      // });\n    },\n    getLocation: function getLocation() {\n      // if(this.timer==null)\n      // {\n      var that = this;\n      // this.timer=setInterval(function(){\n      uni.getLocation({\n        type: 'gcj02',\n        success: function success(res) {\n          // console.log('success')\n          that.covers = [\n          {\n            latitude: res.latitude,\n            longitude: res.longitude,\n            iconPath: '../../static/img/location.png',\n            width: 50,\n            height: 50 }];\n\n\n          // console.log(`center lat:${that.latitude},lon:${that.longitude}`)\n          that.latitude = res.latitude;\n          that.longitude = res.longitude;\n          // console.log(`lon:${res.longitude},lat:${res.latitude}`)\n        },\n        fail: function fail(err) {\n          __f__(\"log\", JSON.stringify(err), \" at pages/map/EnterpriseMap.nvue:122\");\n        } });\n\n      // \t},1000)\n      // }\n\n    },\n    handle: function handle(des_lat, des_lon, coverId) {\n      __f__(\"log\", \"mpove\", \" at pages/map/EnterpriseMap.nvue:130\");\n      this.map.translateMarker({\n        markerId: coverId,\n        destination: {\n          // latitude:25.500404,\n          // longitude:119.794946,\n          latitude: des_lat,\n          longitude: des_lon },\n\n        duration: 2000 },\n      function (ret) {\n        __f__(\"log\", JSON.stringify(ret), \" at pages/map/EnterpriseMap.nvue:141\");\n      });\n    },\n    connectSocketInit: function connectSocketInit() {var _this = this;\n      var that = this;\n      __f__(\"log\", that.userId, \" at pages/map/EnterpriseMap.nvue:146\");\n      // 创建一个this.socketTask对象【发送、接收、关闭socket都由这个对象操作】\n      this.socketTask = uni.connectSocket({\n        // 【非常重要】必须确保你的服务器是成功的,如果是手机测试千万别使用ws://127.0.0.1:9099【特别容易犯的错误】\n        url: \"ws://mrbus.net:8888/api/map/user/order/\" + that.userId,\n        success: function success(data) {\n          __f__(\"log\", \"websocket连接成功\", \" at pages/map/EnterpriseMap.nvue:152\");\n        } });\n\n\n      // 消息的发送和接收必须在正常连接打开中,才能发送或接收【否则会失败】\n      this.socketTask.onOpen(function (res) {\n        __f__(\"log\", \"WebSocket连接正常打开中...！\", \" at pages/map/EnterpriseMap.nvue:158\");\n        that.is_open_socket = true;\n        // if(that.num==1){\n        uni.showToast({\n          title: '连接成功！',\n          mask: true,\n          image: '../../static/img/success.png',\n          icon: 'none' });\n\n        _this.$store.commit('changeNum');\n        // }\n\n        // 注：只有连接正常打开中 ，才能正常成功发送消息\n        // 注：只有连接正常打开中 ，才能正常收到消息\n        _this.socketTask.onMessage(function (res) {\n          // console.log(JSON.parse(res.data))\n          var objs = JSON.parse(res.data);\n          // console.log(objs)\n          setTimeout(function () {\n            that.getLocation2();\n          }, 2000);\n          var testMakers = [\n          {\n            id: 999,\n            latitude: that.latitude,\n            longitude: that.longitude,\n            iconPath: '../../static/img/location.png',\n            width: 30,\n            height: 30 }];\n\n\n\n          objs.forEach(function (item, index) {\n\n\n            // console.log(item)\n            // console.log(obj)\n            // console.log(`lon:${that.longitude},lat${that.latitude}`)\n            // console.log(`item_x:${item.x},item_y:${item.y}index:${index}`)\n            var test = {};\n            if (item == null)\n            {\n              __f__(\"log\", 'null', \" at pages/map/EnterpriseMap.nvue:200\");\n              test.id = 999;\n              test.latitude = that.latitude;\n              test.longitude = that.longitude;\n              test.iconPath = '../../static/img/location.png';\n              test.width = 30;\n              test.height = 30;\n            } else\n            {\n              var obj = JSON.parse(item);\n              test.id = index;\n              test.latitude = obj.y;\n              test.longitude = obj.x;\n              test.iconPath = '../../static/img/busOrder.png';\n              test.width = 30;\n              test.height = 30;\n              test.alpha = 0.5;\n            }\n\n            // console.log(test)\n            testMakers.push(test);\n          });\n\n          that.covers = testMakers;\n          __f__(\"log\", that.covers, \" at pages/map/EnterpriseMap.nvue:224\");\n        });\n      });\n      // 这里仅是事件监听【如果socket关闭了会执行】\n      this.socketTask.onClose(function () {\n        __f__(\"log\", \"已经被关闭了\", \" at pages/map/EnterpriseMap.nvue:229\");\n      });\n    },\n    // 关闭websocket【离开这个页面的时候执行关闭】\n    closeSocket: function closeSocket() {\n      var that = this;\n      this.socketTask.close({\n        success: function success(res) {\n          that.is_open_socket = false;\n          __f__(\"log\", \"关闭成功\", res, \" at pages/map/EnterpriseMap.nvue:238\");\n        },\n        fail: function fail(err) {\n          __f__(\"log\", \"关闭失败\", err, \" at pages/map/EnterpriseMap.nvue:241\");\n        } });\n\n    },\n    getLocation2: function getLocation2() {\n      var that = this;\n      // this.timer=setInterval(function(){\n      uni.getLocation({\n        type: 'gcj02',\n        success: function success(res) {\n          that.latitude = res.latitude;\n          that.longitude = res.longitude;\n        },\n        fail: function fail(err) {\n          __f__(\"log\", JSON.stringify(err), \" at pages/map/EnterpriseMap.nvue:255\");\n        } });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbWFwL0VudGVycHJpc2VNYXAubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFlQSxnRDs7OztBQUlBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxtQkFGQTtBQUdBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLHNCQUZBO0FBR0EsaURBSEE7QUFJQSxpQkFKQTtBQUtBLGtCQUxBLEVBREEsQ0FIQTs7O0FBWUEsc0JBWkE7QUFhQSwyQkFiQTtBQWNBLGlCQWRBOzs7QUFpQkEsR0FuQkE7QUFvQkE7QUFDQSw4RUFEQSxDQXBCQTs7QUF1QkEsU0F2QkEscUJBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBN0JBO0FBOEJBLFFBOUJBLG9CQThCQTtBQUNBO0FBQ0EsR0FoQ0E7QUFpQ0EsUUFqQ0Esa0JBaUNBLE1BakNBLEVBaUNBO0FBQ0E7QUFDQTs7QUFFQSxHQXJDQTtBQXNDQSxTQXRDQSxxQkFzQ0E7QUFDQTtBQUNBLEdBeENBO0FBeUNBLGVBekNBLDJCQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0E5Q0E7QUErQ0E7QUFDQSxnQkFEQSx3QkFDQSxDQURBLEVBQ0E7QUFDQSwyQ0FEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUEsZ0NBRkE7QUFHQSw2QkFIQSxFQUdBO0FBQ0EsbUJBSkEscUJBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUpBLENBSUE7QUFDQSxlQUxBLE1BS0E7QUFDQTtBQUNBO0FBQ0EsYUFiQTs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E5QkE7QUErQkEsZUEvQkEseUJBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FEQTtBQUVBLG9DQUZBO0FBR0EscURBSEE7QUFJQSxxQkFKQTtBQUtBLHNCQUxBLEVBREE7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FqQkE7QUFrQkE7QUFDQTtBQUNBLFNBcEJBOztBQXNCQTtBQUNBOztBQUVBLEtBN0RBO0FBOERBLFVBOURBLGtCQThEQSxPQTlEQSxFQThEQSxPQTlEQSxFQThEQSxPQTlEQSxFQThEQTtBQUNBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUhBO0FBSUEsNEJBSkEsRUFGQTs7QUFRQSxzQkFSQTtBQVNBO0FBQ0E7QUFDQSxPQVhBO0FBWUEsS0E1RUE7QUE2RUEscUJBN0VBLCtCQTZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFGQTtBQUdBLGVBSEEsbUJBR0EsSUFIQSxFQUdBO0FBQ0E7QUFDQSxTQUxBOzs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLG9CQUZBO0FBR0EsK0NBSEE7QUFJQSxzQkFKQTs7QUFNQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLEVBRUEsSUFGQTtBQUdBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG1DQUZBO0FBR0EscUNBSEE7QUFJQSxxREFKQTtBQUtBLHFCQUxBO0FBTUEsc0JBTkEsRUFEQTs7OztBQVdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFUQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQS9CQTs7QUFpQ0E7QUFDQTtBQUNBLFNBckRBO0FBc0RBLE9BckVBO0FBc0VBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQXBLQTtBQXFLQTtBQUNBLGVBdEtBLHlCQXNLQTtBQUNBO0FBQ0E7QUFDQSxlQURBLG1CQUNBLEdBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBO0FBS0EsWUFMQSxnQkFLQSxHQUxBLEVBS0E7QUFDQTtBQUNBLFNBUEE7O0FBU0EsS0FqTEE7QUFrTEEsZ0JBbExBLDBCQWtMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FMQTtBQU1BO0FBQ0E7QUFDQSxTQVJBOztBQVVBLEtBL0xBLEVBL0NBLEUiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cIk1hcGNvbnRlbnRcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwicGFnZU1hcFwiPlxyXG5cdFx0XHQ8bWFwXHJcblx0XHRcdGlkPVwiRW1hcFwiXHJcblx0XHRcdHJlZj1cIkVtYXBcIlxyXG5cdFx0XHRjbGFzcz1cIm15bWFwMlwiXHJcblx0XHRcdDpsYXRpdHVkZT1cImxhdGl0dWRlXCJcclxuXHRcdFx0OmxvbmdpdHVkZT1cImxvbmdpdHVkZVwiXHJcblx0XHRcdDptYXJrZXJzPVwiY292ZXJzXCJcclxuXHRcdFx0PjwvbWFwPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQge1xyXG5cdFx0bWFwU3RhdGUsXHJcblx0XHRtYXBNdXRhdGlvbnNcclxuXHR9IGZyb20gJ3Z1ZXgnXHJcblx0ZXhwb3J0IGRlZmF1bHR7XHJcblx0XHRkYXRhKCl7XHJcblx0XHRcdHJldHVybntcclxuXHRcdFx0XHRsYXRpdHVkZTonJyxcclxuXHRcdFx0XHRsb25naXR1ZGU6JycsXHJcblx0XHRcdFx0Y292ZXJzOltcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bGF0aXR1ZGU6MzYsXHJcblx0XHRcdFx0XHRcdGxvbmdpdHVkZToxMTAsXHJcblx0XHRcdFx0XHRcdGljb25QYXRoOicuLi8uLi9zdGF0aWMvaW1nL2xvY2F0aW9uLnBuZycsXHJcblx0XHRcdFx0XHRcdHdpZHRoOjMwLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6MzBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFx0XHJcblx0XHRcdFx0c29ja2V0VGFzazogbnVsbCxcblx0XHRcdFx0aXNfb3Blbl9zb2NrZXQ6IGZhbHNlLFxyXG5cdFx0XHRcdHRpbWVyOm51bGwsXHJcblx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6e1xyXG5cdFx0XHQuLi5tYXBTdGF0ZShbJ3VzZXJJZCcsJ2hhc0xvZ2luJywnbnVtJywnZm9yY2VkTG9naW4nLCdpc0Nsb3NlJ10pXHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0dGhpcy5oYW5kbGVOb3RpY2UoKVxyXG5cdFx0XHR0aGlzLmdldExvY2F0aW9uKClcclxuXHRcdFx0aWYodGhpcy5oYXNMb2dpbil7XHJcblx0XHRcdFx0dGhpcy5jb25uZWN0U29ja2V0SW5pdCgpXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvblNob3coKSB7XHRcdFx0XHRcdFxyXG5cdFx0XHR0aGlzLmdldExvY2F0aW9uKClcdFx0XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKG9wdGlvbikge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhvcHRpb24ub3JkZXJJZClcclxuXHRcdFx0dGhpcy5nZXRMb2NhdGlvbigpXHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdG9uUmVhZHkoKSB7XHJcblx0XHRcdHRoaXMubWFwPXVuaS5jcmVhdGVNYXBDb250ZXh0KFwiRW1hcFwiLHRoaXMpXHJcblx0XHR9LFxyXG5cdFx0YmVmb3JlRGVzdHJveSgpIHtcclxuXHRcdFx0aWYodGhpcy5oYXNMb2dpbilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuY2xvc2VTb2NrZXQoKVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczp7XHJcblx0XHRcdGhhbmRsZU5vdGljZShlKXtcblx0XHRcdFx0bGV0IHN5c3RlbSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpOy8vIOiOt+WPluezu+e7n+S/oeaBr1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzeXN0ZW0pKTtcblx0XHRcdFx0aWYgKHN5c3RlbS5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnKSB7IC8vIOWIpOaWreW5s+WPsFxuXHRcdFx0XHRcdHZhciBjb250ZXh0ID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC5jb250ZW50LkNvbnRleHRcIik7XG5cdFx0XHRcdFx0dmFyIGxvY2F0aW9uTWFuYWdlciA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQubG9jYXRpb24uTG9jYXRpb25NYW5hZ2VyXCIpO1xuXHRcdFx0XHRcdHZhciBtYWluID0gcGx1cy5hbmRyb2lkLnJ1bnRpbWVNYWluQWN0aXZpdHkoKTtcblx0XHRcdFx0XHR2YXIgbWFpblN2ciA9IG1haW4uZ2V0U3lzdGVtU2VydmljZShjb250ZXh0LkxPQ0FUSU9OX1NFUlZJQ0UpO1xuXHRcdFx0XHRcdGlmICghbWFpblN2ci5pc1Byb3ZpZGVyRW5hYmxlZChsb2NhdGlvbk1hbmFnZXIuR1BTX1BST1ZJREVSKSkge1xuXHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5o+Q56S6Jyxcblx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+ivt+aJk+W8gOWumuS9jeacjeWKoeWKn+iDvScsXG5cdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlLCAvLyDkuI3mmL7npLrlj5bmtojmjInpkq5cblx0XHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIW1haW5TdnIuaXNQcm92aWRlckVuYWJsZWQobG9jYXRpb25NYW5hZ2VyLkdQU19QUk9WSURFUikpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBJbnRlbnQgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoJ2FuZHJvaWQuY29udGVudC5JbnRlbnQnKTtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBTZXR0aW5ncyA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcygnYW5kcm9pZC5wcm92aWRlci5TZXR0aW5ncycpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGludGVudCA9IG5ldyBJbnRlbnQoU2V0dGluZ3MuQUNUSU9OX0xPQ0FUSU9OX1NPVVJDRV9TRVRUSU5HUyk7IFxuXHRcdFx0XHRcdFx0XHRcdFx0bWFpbi5zdGFydEFjdGl2aXR5KGludGVudCk7IC8vIOaJk+W8gOezu+e7n+iuvue9rkdQU+acjeWKoemhtemdolxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnR1BT5Yqf6IO95bey5byA5ZCvJyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gXG5cdFx0XHRcdC8vIHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0Ly8gXHRcdHVybDogJy4vLi4vdGFiQmFyLTMvbm90aWNlL25vdGljZV9saXN0P3R5cGU9MSZ1c2VySWQ9Jytfc2VsZi51c2VySW5mby51c2VySWRcblx0XHRcdFx0Ly8gfSk7XG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRMb2NhdGlvbigpe1xyXG5cdFx0XHRcdC8vIGlmKHRoaXMudGltZXI9PW51bGwpXHJcblx0XHRcdFx0Ly8ge1xyXG5cdFx0XHRcdFx0dmFyIHRoYXQ9dGhpcztcclxuXHRcdFx0XHRcdC8vIHRoaXMudGltZXI9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0dW5pLmdldExvY2F0aW9uKHtcclxuXHRcdFx0XHRcdFx0XHR0eXBlOidnY2owMicsXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ3N1Y2Nlc3MnKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5jb3ZlcnM9W1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGF0aXR1ZGU6cmVzLmxhdGl0dWRlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxvbmdpdHVkZTpyZXMubG9uZ2l0dWRlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb25QYXRoOicuLi8uLi9zdGF0aWMvaW1nL2xvY2F0aW9uLnBuZycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6NTAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OjUwXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGBjZW50ZXIgbGF0OiR7dGhhdC5sYXRpdHVkZX0sbG9uOiR7dGhhdC5sb25naXR1ZGV9YClcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQubGF0aXR1ZGU9cmVzLmxhdGl0dWRlXHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmxvbmdpdHVkZT1yZXMubG9uZ2l0dWRlXHJcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhgbG9uOiR7cmVzLmxvbmdpdHVkZX0sbGF0OiR7cmVzLmxhdGl0dWRlfWApXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnIpKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQvLyBcdH0sMTAwMClcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdGhhbmRsZShkZXNfbGF0LGRlc19sb24sY292ZXJJZCl7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJtcG92ZVwiKVxyXG5cdFx0XHRcdHRoaXMubWFwLnRyYW5zbGF0ZU1hcmtlcih7XHJcblx0XHRcdFx0XHRtYXJrZXJJZDpjb3ZlcklkLFxyXG5cdFx0XHRcdFx0ZGVzdGluYXRpb246e1xyXG5cdFx0XHRcdFx0XHQvLyBsYXRpdHVkZToyNS41MDA0MDQsXHJcblx0XHRcdFx0XHRcdC8vIGxvbmdpdHVkZToxMTkuNzk0OTQ2LFxyXG5cdFx0XHRcdFx0XHRsYXRpdHVkZTpkZXNfbGF0LFxyXG5cdFx0XHRcdFx0XHRsb25naXR1ZGU6ZGVzX2xvblxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGR1cmF0aW9uOjIwMDBcdFx0XHRcdFx0XHJcblx0XHRcdFx0fSxyZXQ9PntcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJldCkpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29ubmVjdFNvY2tldEluaXQoKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQ9dGhpcztcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGF0LnVzZXJJZClcclxuXHRcdFx0XHQvLyDliJvlu7rkuIDkuKp0aGlzLnNvY2tldFRhc2vlr7nosaHjgJDlj5HpgIHjgIHmjqXmlLbjgIHlhbPpl61zb2NrZXTpg73nlLHov5nkuKrlr7nosaHmk43kvZzjgJFcclxuXHRcdFx0XHR0aGlzLnNvY2tldFRhc2sgPSB1bmkuY29ubmVjdFNvY2tldCh7XHJcblx0XHRcdFx0XHQvLyDjgJDpnZ7luLjph43opoHjgJHlv4Xpobvnoa7kv53kvaDnmoTmnI3liqHlmajmmK/miJDlip/nmoQs5aaC5p6c5piv5omL5py65rWL6K+V5Y2D5LiH5Yir5L2/55Sod3M6Ly8xMjcuMC4wLjE6OTA5OeOAkOeJueWIq+WuueaYk+eKr+eahOmUmeivr+OAkVxyXG5cdFx0XHRcdFx0dXJsOiBcIndzOi8vbXJidXMubmV0Ojg4ODgvYXBpL21hcC91c2VyL29yZGVyL1wiK3RoYXQudXNlcklkLFxyXG5cdFx0XHRcdFx0c3VjY2VzcyhkYXRhKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwid2Vic29ja2V06L+e5o6l5oiQ5YqfXCIpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KTtcclxuIFxyXG5cdFx0XHRcdC8vIOa2iOaBr+eahOWPkemAgeWSjOaOpeaUtuW/hemhu+WcqOato+W4uOi/nuaOpeaJk+W8gOS4rSzmiY3og73lj5HpgIHmiJbmjqXmlLbjgJDlkKbliJnkvJrlpLHotKXjgJFcclxuXHRcdFx0XHR0aGlzLnNvY2tldFRhc2sub25PcGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiV2ViU29ja2V06L+e5o6l5q2j5bi45omT5byA5LitLi4u77yBXCIpO1xyXG5cdFx0XHRcdFx0dGhhdC5pc19vcGVuX3NvY2tldCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdC8vIGlmKHRoYXQubnVtPT0xKXtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOifov57mjqXmiJDlip/vvIEnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWFzazp0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0aW1hZ2U6Jy4uLy4uL3N0YXRpYy9pbWcvc3VjY2Vzcy5wbmcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kc3RvcmUuY29tbWl0KCdjaGFuZ2VOdW0nKVxyXG5cdFx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly8g5rOo77ya5Y+q5pyJ6L+e5o6l5q2j5bi45omT5byA5LitIO+8jOaJjeiDveato+W4uOaIkOWKn+WPkemAgea2iOaBr1xyXG5cdFx0XHRcdFx0Ly8g5rOo77ya5Y+q5pyJ6L+e5o6l5q2j5bi45omT5byA5LitIO+8jOaJjeiDveato+W4uOaUtuWIsOa2iOaBr1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNvY2tldFRhc2sub25NZXNzYWdlKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHJlcy5kYXRhKSlcclxuXHRcdFx0XHRcdFx0XHR2YXIgb2Jqcz1KU09OLnBhcnNlKHJlcy5kYXRhKTtcclxuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhvYmpzKVxyXG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuZ2V0TG9jYXRpb24yKClcclxuXHRcdFx0XHRcdFx0XHR9LDIwMDApXHJcblx0XHRcdFx0XHRcdFx0dmFyIHRlc3RNYWtlcnM9W1xyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZDo5OTksXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxhdGl0dWRlOnRoYXQubGF0aXR1ZGUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxvbmdpdHVkZTp0aGF0LmxvbmdpdHVkZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvblBhdGg6Jy4uLy4uL3N0YXRpYy9pbWcvbG9jYXRpb24ucG5nJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6MzAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDozMFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdF07XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRvYmpzLmZvckVhY2goZnVuY3Rpb24oaXRlbSxpbmRleCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coaXRlbSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cob2JqKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhgbG9uOiR7dGhhdC5sb25naXR1ZGV9LGxhdCR7dGhhdC5sYXRpdHVkZX1gKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhgaXRlbV94OiR7aXRlbS54fSxpdGVtX3k6JHtpdGVtLnl9aW5kZXg6JHtpbmRleH1gKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgdGVzdD17fTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYoaXRlbT09bnVsbClcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdudWxsJylcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRlc3QuaWQ9OTk5O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRlc3QubGF0aXR1ZGU9dGhhdC5sYXRpdHVkZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXN0LmxvbmdpdHVkZT10aGF0LmxvbmdpdHVkZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXN0Lmljb25QYXRoPScuLi8uLi9zdGF0aWMvaW1nL2xvY2F0aW9uLnBuZyc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGVzdC53aWR0aD0zMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXN0LmhlaWdodD0zMDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBvYmo9SlNPTi5wYXJzZShpdGVtKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXN0LmlkPWluZGV4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRlc3QubGF0aXR1ZGU9b2JqLnk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGVzdC5sb25naXR1ZGU9b2JqLng7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGVzdC5pY29uUGF0aD0nLi4vLi4vc3RhdGljL2ltZy9idXNPcmRlci5wbmcnO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRlc3Qud2lkdGg9MzA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGVzdC5oZWlnaHQ9MzA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGVzdC5hbHBoYT0wLjU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHRlc3QpXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRlc3RNYWtlcnMucHVzaCh0ZXN0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5jb3ZlcnM9dGVzdE1ha2VycztcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGF0LmNvdmVycylcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQvLyDov5nph4zku4XmmK/kuovku7bnm5HlkKzjgJDlpoLmnpxzb2NrZXTlhbPpl63kuobkvJrmiafooYzjgJFcclxuXHRcdFx0XHR0aGlzLnNvY2tldFRhc2sub25DbG9zZSgoKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuW3sue7j+iiq+WFs+mXreS6hlwiKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWFs+mXrXdlYnNvY2tldOOAkOemu+W8gOi/meS4qumhtemdoueahOaXtuWAmeaJp+ihjOWFs+mXreOAkVxuXHRcdFx0Y2xvc2VTb2NrZXQoKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQ9dGhpcztcblx0XHRcdFx0dGhpcy5zb2NrZXRUYXNrLmNsb3NlKHtcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xuXHRcdFx0XHRcdFx0dGhhdC5pc19vcGVuX3NvY2tldCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLlhbPpl63miJDlip9cIiwgcmVzKVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZmFpbChlcnIpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5YWz6Zet5aSx6LSlXCIsIGVycilcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRMb2NhdGlvbjIoKXtcclxuXHRcdFx0XHR2YXIgdGhhdD10aGlzO1xyXG5cdFx0XHRcdC8vIHRoaXMudGltZXI9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHVuaS5nZXRMb2NhdGlvbih7XHJcblx0XHRcdFx0XHRcdHR5cGU6J2djajAyJyxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQubGF0aXR1ZGU9cmVzLmxhdGl0dWRlXHJcblx0XHRcdFx0XHRcdFx0dGhhdC5sb25naXR1ZGU9cmVzLmxvbmdpdHVkZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyKSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcblx0Lk1hcGNvbnRlbnR7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxNTAwcnB4O1xyXG5cdH1cclxuXHQucGFnZU1hcHtcclxuXHRcdHdpZHRoOjc1MHJweDtcclxuXHRcdGhlaWdodDogMTUwMHJweDtcclxuXHRcdFxyXG5cdH1cclxuXHQubXltYXAye1xyXG5cdFx0d2lkdGg6NzUwcnB4OyBcclxuXHRcdGhlaWdodDogMTUwMHJweDtcclxuXHRcdFxyXG5cdFx0ZmxleDogMTtcclxuXHR9XHJcblx0XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.install = install;exports.mapState = exports.mapMutations = exports.mapGetters = exports.mapActions = exports.createNamespacedHelpers = exports.Store = exports.default = void 0; /*!
                                                                                                                                                                                                                                                                      * vuex v3.4.0
                                                                                                                                                                                                                                                                      * (c) 2020 Evan You
                                                                                                                                                                                                                                                                      * @license MIT
                                                                                                                                                                                                                                                                      */
function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};

      options.init = options.init ?
      [vuexInit].concat(options.init) :
      vuexInit;
      _init.call(this, options);
    };
  }

  /**
     * Vuex init hook, injected into each instances init hooks list.
     */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ?
      options.store() :
      options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined' ?
window :
typeof global !== 'undefined' ?
global :
{};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin(store) {
  if (!devtoolHook) {return;}

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
   * Get the first item that pass the test
   * by second argument function
   *
   * @param {Array} list
   * @param {Function} f
   * @return {*}
   */

/**
       * forEach for object
       */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {return fn(obj[key], key);});
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {throw new Error("[vuex] " + msg);}
}

function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};

Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};

Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};

Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties(Module.prototype, prototypeAccessors);

var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};

ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};

ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) {return;}

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key);
};

function update(path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed');

        }
        return;
      }
      update(
      path.concat(key),
      targetModule.getChild(key),
      newModule.modules[key]);

    }
  }
}

var functionAssert = {
  assert: function assert(value) {return typeof value === 'function';},
  expected: 'function' };


var objectAssert = {
  assert: function assert(value) {return typeof value === 'function' ||
    typeof value === 'object' && typeof value.handler === 'function';},
  expected: 'function or object with "handler" function' };


var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert };


function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {return;}

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
      assertOptions.assert(value),
      makeAssertionMessage(path, key, type, value, assertOptions.expected));

    });
  });
}

function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}

var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins;if (plugins === void 0) plugins = [];
  var strict = options.strict;if (strict === void 0) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) {return plugin(this$1);});

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};exports.Store = Store;

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state;
};

prototypeAccessors$1.state.set = function (v) {
  if (true) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });

  this._subscribers.
  slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
  .forEach(function (sub) {return sub(mutation, this$1.state);});

  if (
   true &&
  options && options.silent)
  {
    console.warn(
    "[vuex] mutation type: " + type + ". Silent option has been removed. " +
    'Use the filter functionality in the vue-devtools');

  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }

  try {
    this._actionSubscribers.
    slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .filter(function (sub) {return sub.before;}).
    forEach(function (sub) {return sub.before(action, this$1.state);});
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1 ?
  Promise.all(entry.map(function (handler) {return handler(payload);})) :
  entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.after;}).
        forEach(function (sub) {return sub.after(action, this$1.state);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.error;}).
        forEach(function (sub) {return sub.error(action, this$1.state, error);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  });
};

Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};

Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};

Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () {return getter(this$1.state, this$1.getters);}, cb, options);
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path);
};

Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties(Store.prototype, prototypeAccessors$1);

function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ?
    subs.unshift(fn) :
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}

function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function get() {return store._vm[key];},
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state },

    computed: computed });

  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {return oldVm.$destroy();});
  }
}

function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && "development" !== 'production') {
      console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join('/'));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if (true) {
        if (moduleName in parentState) {
          console.warn(
          "[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + path.join('.') + "\"");

        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
   * make localized dispatch, commit, getters and state
   * if there is no namespace, just use root ones
   */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }

      return store.dispatch(type, payload);
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }

      store.commit(type, payload, options);
    } };


  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ?
      function () {return store.getters;} :
      function () {return makeLocalGetters(store, namespace);} },

    state: {
      get: function get() {return getNestedState(store.state, path);} } });



  return local;
}

function makeLocalGetters(store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) {return;}

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function get() {return store.getters[type];},
        enumerable: true });

    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace];
}

function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state },
    payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}

function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(
    local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {return this._data.$$state;}, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState(state, path) {
  return path.reduce(function (state, key) {return state[key];}, state);
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', "expects string as the type, but found " + typeof type + ".");
  }

  return { type: type, payload: payload, options: options };
}

function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.');

    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
   * Reduce the code which written in Vue.js for getting the state.
   * @param {String} [namespace] - Module's namespace
   * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
   * @param {Object}
   */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if ( true && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ?
      val.call(this, state, getters) :
      state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for committing the mutation
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapState = mapState;
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if ( true && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ?
      val.apply(this, [commit].concat(args)) :
      commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for getting the getters
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} getters
     * @return {Object}
     */exports.mapMutations = mapMutations;
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if ( true && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if ( true && !(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for dispatch the action
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapGetters = mapGetters;
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if ( true && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ?
      val.apply(this, [dispatch].concat(args)) :
      dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
     * @param {String} namespace
     * @return {Object}
     */exports.mapActions = mapActions;
var createNamespacedHelpers = function createNamespacedHelpers(namespace) {return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace) };
};

/**
    * Normalize the map
    * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
    * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
    * @param {Array|Object} map
    * @return {Object}
    */exports.createNamespacedHelpers = createNamespacedHelpers;
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }
  return Array.isArray(map) ?
  map.map(function (key) {return { key: key, val: key };}) :
  Object.keys(map).map(function (key) {return { key: key, val: map[key] };});
}

/**
   * Validate whether given map is valid or not
   * @param {*} map
   * @return {Boolean}
   */
function isValidMap(map) {
  return Array.isArray(map) || isObject(map);
}

/**
   * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
   * @param {Function} fn
   * @return {Function}
   */
function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

/**
   * Search a special module from store by namespace. if module not exist, print error message.
   * @param {Object} store
   * @param {String} helper
   * @param {String} namespace
   * @return {Object}
   */
function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }
  return module;
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers };var _default =


index;exports.default = _default;

/***/ }),
/* 11 */
/*!************************************************************************************************************************!*\
  !*** E:/Code_Me/Webman/Redot/RedDot-bus-user/pages/map/EnterpriseMap.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_EnterpriseMap_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./EnterpriseMap.nvue?vue&type=style&index=0&lang=css&mpType=page */ 12);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_EnterpriseMap_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_EnterpriseMap_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_EnterpriseMap_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_EnterpriseMap_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_EnterpriseMap_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/Code_Me/Webman/Redot/RedDot-bus-user/pages/map/EnterpriseMap.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "Mapcontent": {
    "width": "750rpx",
    "height": "1500rpx"
  },
  "pageMap": {
    "width": "750rpx",
    "height": "1500rpx"
  },
  "mymap2": {
    "width": "750rpx",
    "height": "1500rpx",
    "flex": 1
  },
  "@VERSION": 2
}

/***/ }),
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);