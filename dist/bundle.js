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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/Crosshair_Red.cur":
/*!**********************************!*\
  !*** ./assets/Crosshair_Red.cur ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2ddbb46ec85bde7f448e22ffe01cf498.cur");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/AttackL__000.png":
/*!*******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/AttackL__000.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "40db6795dc249c318f94586e0a53f4eb.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/AttackL__001.png":
/*!*******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/AttackL__001.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2247422ddfb0c227118f1072fe14572a.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/AttackL__002.png":
/*!*******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/AttackL__002.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ef3cb3ea5cc8f361ca28dbbd167f6477.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/AttackL__003.png":
/*!*******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/AttackL__003.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "adaf59a396b92693cebf75c9b4f80b7c.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/AttackL__004.png":
/*!*******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/AttackL__004.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6c8857994e0e9c2a3991a16bf880c516.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/AttackL__005.png":
/*!*******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/AttackL__005.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "220b739559ca9c78d2d0a8c5aac01284.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/AttackL__006.png":
/*!*******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/AttackL__006.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a7789ebde4f3ceb96c39ade312d5023a.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/AttackL__007.png":
/*!*******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/AttackL__007.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "26b6499c882dc5a89239715c8e1e0763.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/AttackL__008.png":
/*!*******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/AttackL__008.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4e36382e49d44d2f9a446ada58e70544.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/AttackL__009.png":
/*!*******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/AttackL__009.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "692494739a98b7bba679a6c6c630fc4f.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Attack__000.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Attack__000.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f768888bb9b04f2e630cc014f8500a31.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Attack__001.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Attack__001.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f9ecffee918bfb788e72c70743817645.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Attack__002.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Attack__002.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "37d0480c10f08ccbf736a18e8cef7550.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Attack__003.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Attack__003.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "75d1723c471de78aba09668beee54ade.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Attack__004.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Attack__004.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9e602901b1986991b6be5de039e2b4f9.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Attack__005.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Attack__005.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "71df7067a9bb4d1d58af869c894b21f8.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Attack__006.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Attack__006.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "965ffbffaf987a521c40feea12032291.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Attack__007.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Attack__007.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "064ba5a0656e108f5b50fd31e8b0a46d.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Attack__008.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Attack__008.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "81cedb527987f22bdf8fb15d311c74b2.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Attack__009.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Attack__009.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2a53127cf901b9397e8f761d7190629e.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Climb_000.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Climb_000.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6248c1d45e9c7e47f3a4b2e94e0a20e8.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Climb_001.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Climb_001.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "60f69aeadb2042cbe05eeaf847965712.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Climb_002.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Climb_002.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "68c6430dd95e4e7ef869b86983c73463.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Climb_003.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Climb_003.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "43fdd1d992e4d6ba7ca38d5d7d53a0c2.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Climb_004.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Climb_004.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "db0e54454f1e71bdf221c0ab2bf99221.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Climb_005.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Climb_005.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "385ac2a9f5c6f91215bb6fc6e48ab08b.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Climb_006.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Climb_006.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "26c497cb15bef1703c09807028748258.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Climb_007.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Climb_007.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7adbbc92de460d744d8e64779c8219a8.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Climb_008.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Climb_008.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "92d3605263d52698d48a94b52f7defe0.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Climb_009.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Climb_009.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e8df50eb7271002bd789eae0210863c0.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/DeadL__000.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/DeadL__000.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8722517a5ce5264eba16d1cba8c30faa.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/DeadL__001.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/DeadL__001.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b35268f8146b06e751a12efcc556e8b3.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/DeadL__002.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/DeadL__002.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "828bf928c6bbfab4fb0ebea7e20469f1.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/DeadL__003.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/DeadL__003.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b09464b1e5d7e2c9d4c80e7e779f1370.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/DeadL__004.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/DeadL__004.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "95a7b3c2dd7647b56329580aecc7351f.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/DeadL__005.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/DeadL__005.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9538cd606d880cba53950ebec6857dc3.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/DeadL__006.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/DeadL__006.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5e8b07b41db04f66e61d5f6ab900f956.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/DeadL__007.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/DeadL__007.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5e8b07b41db04f66e61d5f6ab900f956.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/DeadL__008.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/DeadL__008.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5e8b07b41db04f66e61d5f6ab900f956.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/DeadL__009.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/DeadL__009.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5e8b07b41db04f66e61d5f6ab900f956.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Dead__000.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Dead__000.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b4838e474d72727c8c4951c39ed1a4b2.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Dead__001.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Dead__001.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "82975020105c19a10d5a71b190fc4830.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Dead__002.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Dead__002.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fed5a048d85c050dea78860327074ccb.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Dead__003.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Dead__003.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9d69adc9fd9fa4e26dbac215b535e87c.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Dead__004.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Dead__004.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5ec14a5ef3a48c9dc43b31a82e317908.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Dead__005.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Dead__005.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5b83375ae4ba3d217eb2d40972078550.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Dead__006.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Dead__006.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f5280100d1335221dfd4bf5b80ab8aa0.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Dead__007.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Dead__007.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f5280100d1335221dfd4bf5b80ab8aa0.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Dead__008.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Dead__008.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f5280100d1335221dfd4bf5b80ab8aa0.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Dead__009.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Dead__009.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f5280100d1335221dfd4bf5b80ab8aa0.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/GlideL_000.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/GlideL_000.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dcd84bb206b40297050bf41e0abd1ab9.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/GlideL_001.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/GlideL_001.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "af2b9c1c054f17aa9b8c8ac86bf9168f.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/GlideL_002.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/GlideL_002.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "df4489d2faa6e88e7ab8793cc5107b49.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/GlideL_003.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/GlideL_003.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9a383571c5cd65ee5e35afefc7f4e84a.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/GlideL_004.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/GlideL_004.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "70e3011b814a64d20d765f7c59493642.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/GlideL_005.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/GlideL_005.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f34c902df655dac2c2c76af10497946b.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/GlideL_006.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/GlideL_006.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "76e2cdc5f3df438698a8b00437b8c670.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/GlideL_007.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/GlideL_007.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f8ce3cf52278d1e11da0815383d7fb1e.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/GlideL_008.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/GlideL_008.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "39e0f03c8f686a47a4aba94de4ae8e6a.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/GlideL_009.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/GlideL_009.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0b81daf59e54da25fa0e72eb18da254a.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Glide_000.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Glide_000.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a417bd785d03f9191f9383476ef7c92f.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Glide_001.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Glide_001.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a6d1c03299b72e680a04a87b5555ee30.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Glide_002.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Glide_002.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "64c676f5234333adb9f84f4ff178c715.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Glide_003.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Glide_003.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d0294b0cb20f0317c65b9bab0ec059ee.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Glide_004.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Glide_004.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c53d8f13ea1d43b2798466d9bbdd1aaa.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Glide_005.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Glide_005.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7fb67eccaa7dc4281334ffd891d6d085.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Glide_006.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Glide_006.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d6a91c538333c7dd53a472ce1a165d89.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Glide_007.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Glide_007.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f1d01c0764abe0d7ca6f206528d88428.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Glide_008.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Glide_008.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "047637a42961a0fadce38e81cc187a0d.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Glide_009.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Glide_009.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b54148836fb8fb08ae67009e40488447.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/IdleL__000.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/IdleL__000.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1eb31ba3d8bc79e327e39ddb33426047.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/IdleL__001.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/IdleL__001.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c0a1c14efe8b794ad6dc0531ea892e74.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/IdleL__002.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/IdleL__002.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b30c57cc338d1f7ef335ba00b3cc9b44.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/IdleL__003.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/IdleL__003.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "292b7961a56e64d886852f0d9219ce75.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/IdleL__004.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/IdleL__004.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8dcf6b93bca0b439f29a02a126d8101c.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/IdleL__005.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/IdleL__005.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0ae2f9ac3c96a2128d27c1d24b96fe13.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/IdleL__006.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/IdleL__006.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8dcf6b93bca0b439f29a02a126d8101c.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/IdleL__007.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/IdleL__007.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "292b7961a56e64d886852f0d9219ce75.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/IdleL__008.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/IdleL__008.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b30c57cc338d1f7ef335ba00b3cc9b44.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/IdleL__009.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/IdleL__009.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c0a1c14efe8b794ad6dc0531ea892e74.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Idle__000.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Idle__000.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9f9c47a039f29bd6fb6eeb636f664c37.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Idle__001.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Idle__001.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9f49d5470943d9fb1926e9fc87072396.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Idle__002.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Idle__002.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d8f9271d063a570bff71dad13b61a376.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Idle__003.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Idle__003.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8d6e251a5cdc35d1465bccb2bb58e2d7.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Idle__004.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Idle__004.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c050e35825c52d9e9fe53055882bdf63.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Idle__005.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Idle__005.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1a87995a5573053e1b984cddbb605fbf.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Idle__006.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Idle__006.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c050e35825c52d9e9fe53055882bdf63.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Idle__007.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Idle__007.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8d6e251a5cdc35d1465bccb2bb58e2d7.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Idle__008.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Idle__008.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d8f9271d063a570bff71dad13b61a376.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Idle__009.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Idle__009.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9f49d5470943d9fb1926e9fc87072396.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/JumpL__000.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/JumpL__000.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e77ce61defd3c159518db5243e70c465.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/JumpL__001.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/JumpL__001.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "40e2577400d011fcec4df0b63bd29773.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/JumpL__002.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/JumpL__002.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b79ba229d15165031f43e42e25a92240.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/JumpL__003.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/JumpL__003.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b79ba229d15165031f43e42e25a92240.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/JumpL__004.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/JumpL__004.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b79ba229d15165031f43e42e25a92240.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/JumpL__005.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/JumpL__005.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b79ba229d15165031f43e42e25a92240.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/JumpL__006.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/JumpL__006.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6d25a692312977b0dadf23bf9bdc04f4.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/JumpL__007.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/JumpL__007.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8a88ae58d58c0c6ac5fffeba9704611f.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/JumpL__008.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/JumpL__008.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "98f1c393d807e6f4fb11185b70e78efd.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/JumpL__009.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/JumpL__009.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "98f1c393d807e6f4fb11185b70e78efd.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_AttackL__000.png":
/*!************************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_AttackL__000.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "13a06dd56ae9202a332d3dcf23c99d23.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_AttackL__001.png":
/*!************************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_AttackL__001.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0f69243d06603c0487a1144ef74ac725.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_AttackL__002.png":
/*!************************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_AttackL__002.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "82c23eb512f7e65cd88b9064c19f5df7.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_AttackL__003.png":
/*!************************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_AttackL__003.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c1acf7a9edfdcbf52fe3a5e5250cc60e.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_AttackL__004.png":
/*!************************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_AttackL__004.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "be1f3f5cd23a839cbebb88b7890eb191.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_AttackL__005.png":
/*!************************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_AttackL__005.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9bbe9979b37b2c9ca19bd5cee63097e4.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_AttackL__006.png":
/*!************************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_AttackL__006.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e2fea1c5b1d6c1c65d7032923f6a2a2e.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_AttackL__007.png":
/*!************************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_AttackL__007.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3d53d801e04fde0d79b5a317ab56cfb6.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_AttackL__008.png":
/*!************************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_AttackL__008.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a918c4eb2ba72324f87fba94c212c02c.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_AttackL__009.png":
/*!************************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_AttackL__009.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7835b3f97b1399398519ea7afd2cf53a.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Attack__000.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Attack__000.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "74837d25aa6be8c98c9f7514102fd52a.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Attack__001.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Attack__001.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "231952b38e1d70b2bbacc1ccaf9af752.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Attack__002.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Attack__002.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "72faa46fc04639c28b363b39d2254ba3.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Attack__003.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Attack__003.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "57d13b3d71cd1e8b25104471fe9fda7c.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Attack__004.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Attack__004.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "df62c83c78c331b1f6e3c7c71404862b.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Attack__005.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Attack__005.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8e8afc75948495b647bed28a0bd95f47.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Attack__006.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Attack__006.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3f585d107e2cdbd0d74aee5b35f83f30.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Attack__007.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Attack__007.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ef0dbb4ab8213bcfe51dddefb1cc0023.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Attack__008.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Attack__008.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "960be814a6825a3c7eb384e77e04ea22.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Attack__009.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Attack__009.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2edefee933b8f6c3646cbcc11d2cde29.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_ThrowL__000.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_ThrowL__000.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f688ff0fb2127af263d49bf93838f63c.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_ThrowL__001.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_ThrowL__001.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b635869d8038a9a1f7d7f0f10c57ee9a.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_ThrowL__002.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_ThrowL__002.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cc1db2c78f0b85023f9b5cc875c025cd.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_ThrowL__003.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_ThrowL__003.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1734359b010b570b6fc5f533ef992329.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_ThrowL__004.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_ThrowL__004.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "85b03c817cd2af7bcf230501d6bc6a73.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_ThrowL__005.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_ThrowL__005.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ab8efb97348546fd4f934e34236885c0.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_ThrowL__006.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_ThrowL__006.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "70eab5f69b0ccafc79c83d85c6268ac2.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_ThrowL__007.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_ThrowL__007.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9d2cc52498b66b9eb5bcfe4a9042fd18.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_ThrowL__008.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_ThrowL__008.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9e69d11ae7d005c5d973c6296f420828.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_ThrowL__009.png":
/*!***********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_ThrowL__009.png ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3f46f0205a581fb86c833b3b603b03cb.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Throw__000.png":
/*!**********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Throw__000.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4f7412ad23348e7a834d6ebe7cf44a3d.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Throw__001.png":
/*!**********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Throw__001.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "13c80426cb4e18c09ac4d9ad3f76404e.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Throw__002.png":
/*!**********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Throw__002.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fdbf1a14c29be4096ebf30fccbe79873.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Throw__003.png":
/*!**********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Throw__003.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d0aebbc1736b327c49ab0cdd22870c9e.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Throw__004.png":
/*!**********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Throw__004.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f12bd3ce737333bc4317968a72687af9.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Throw__005.png":
/*!**********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Throw__005.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d283e0258099a746caf3c7b9aaae9f7f.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Throw__006.png":
/*!**********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Throw__006.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "88a2e57d8d8c66e655e33197c017a52c.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Throw__007.png":
/*!**********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Throw__007.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1e9796b67930274e9eebe5789ca52e78.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Throw__008.png":
/*!**********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Throw__008.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3624eb3897822dfae6a67871a94b8bfa.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump_Throw__009.png":
/*!**********************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump_Throw__009.png ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6072b10603380bf754e5ed02074dd65a.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump__000.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump__000.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "facf19846f6dd3e35ae29fb657a361e7.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump__001.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump__001.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "269cbb519c2daf0c4b8fba86732bcf71.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump__002.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump__002.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fbd912335053f46aa12d7560c87e6e12.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump__003.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump__003.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fbd912335053f46aa12d7560c87e6e12.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump__004.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump__004.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fbd912335053f46aa12d7560c87e6e12.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump__005.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump__005.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fbd912335053f46aa12d7560c87e6e12.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump__006.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump__006.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4b688a5767d36985a18cc700c9c55062.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump__007.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump__007.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "242167bbe3e2015ac858304dccb85fbb.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump__008.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump__008.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b80161ba30d298e2dd2208001d451f1f.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Jump__009.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Jump__009.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b80161ba30d298e2dd2208001d451f1f.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/RunL__000.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/RunL__000.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c122470a62bee49aa37122a7f9734806.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/RunL__001.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/RunL__001.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "54c08a723747fb3f9aaecbb3309515c6.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/RunL__002.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/RunL__002.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "643cd613780e6dc6b690f7cc14d6ffee.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/RunL__003.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/RunL__003.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "74c17750da864bbac5f1197101b47f96.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/RunL__004.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/RunL__004.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "56a67e521e5b08aee80c97810ad936d0.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/RunL__005.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/RunL__005.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4c58a69637451e53199a90ab756ed922.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/RunL__006.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/RunL__006.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "14b922f8f884c396745e420701f864df.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/RunL__007.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/RunL__007.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7258670e641d834dcb8e625d4ddad0ec.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/RunL__008.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/RunL__008.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5c940249a5fb1bb1019843ad0d226fde.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/RunL__009.png":
/*!****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/RunL__009.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d7b64fc4ffe28f63814e18a79810e201.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Run__000.png":
/*!***************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Run__000.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c59cf5df38f9b3350e6a67c38148a22d.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Run__001.png":
/*!***************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Run__001.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "50c9bbb58d4a530d5df66e6b85cccb37.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Run__002.png":
/*!***************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Run__002.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "59e5121f4eeb999c78eee5bcf0e060b8.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Run__003.png":
/*!***************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Run__003.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3aa1db9624e7f17a40efd3ba106ea014.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Run__004.png":
/*!***************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Run__004.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cb350b40cd8e6b8501e320b5b3fe0c94.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Run__005.png":
/*!***************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Run__005.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "adb5fe6adc87b06ef7cc897bc4fc92d5.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Run__006.png":
/*!***************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Run__006.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "64a3d430ecd37858878bc95d5ebd6d6e.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Run__007.png":
/*!***************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Run__007.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1753d3eb78a15cb6318c87ec26f15b6b.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Run__008.png":
/*!***************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Run__008.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "723a32f21a2d545374ded1f8942510b9.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Run__009.png":
/*!***************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Run__009.png ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4bfd8a2f1faa48b21ad8408d668e45db.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/SlideL__000.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/SlideL__000.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b0269a109c778fe64cd5ff9ee1eb4572.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/SlideL__001.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/SlideL__001.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "21251b20a7e3229e5d118da3db940be8.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/SlideL__002.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/SlideL__002.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "07cc66024936241a162336bbfa2a3e00.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/SlideL__003.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/SlideL__003.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6e2d50157805e6f1557bab67a94c63db.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/SlideL__004.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/SlideL__004.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "90b5310cc093c740321ffefaf9ed348a.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/SlideL__005.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/SlideL__005.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "aef2ef23aa45d1c0e823f0bc5a5ef0d6.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/SlideL__006.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/SlideL__006.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5da790b9dd14fccdbf3ffebcc7eed9bf.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/SlideL__007.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/SlideL__007.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "42121653fb8b1390e91135e83afe5aa7.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/SlideL__008.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/SlideL__008.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "03dc3a1dace90b2e5d9bfe980cf10167.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/SlideL__009.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/SlideL__009.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "60bf3d04c356fb5924dc945158e8b5a4.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Slide__000.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Slide__000.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e897fd79a4c40af85db5d12dbab3f253.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Slide__001.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Slide__001.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "753f365ce4c271703659eafa78149d9a.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Slide__002.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Slide__002.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "508a77bf1149c09c3bb0b490e3a357d2.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Slide__003.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Slide__003.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0f52aca0799079332c89d69d393f4900.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Slide__004.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Slide__004.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1a546a32f8bbe990fbad73be5e9e07b5.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Slide__005.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Slide__005.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "79e5fd628482c21a3d8ece5c20ee14b7.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Slide__006.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Slide__006.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b4f2fbc7446eb64b959e88365a61dfb0.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Slide__007.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Slide__007.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a27393074736a597a5e924389600ffa0.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Slide__008.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Slide__008.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "20aab7e43a20e9ed0fe6fed9c77ed372.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Slide__009.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Slide__009.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d0122997a673e703b89b6943c7d57b4c.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/ThrowL__000.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/ThrowL__000.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bff6861c24c4b077259591165b887d27.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/ThrowL__001.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/ThrowL__001.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "906bb11e80e6aca8ae9784e908fb8f48.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/ThrowL__002.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/ThrowL__002.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f5376d4dedab17f479c5cc24c0aba40b.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/ThrowL__003.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/ThrowL__003.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e84a5cc7677a1270d3cff3c4576272c8.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/ThrowL__004.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/ThrowL__004.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dc2882dcf2c19ca1d606687a30740df7.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/ThrowL__005.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/ThrowL__005.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "09cbfe10b230aba04daa049022cfa1e2.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/ThrowL__006.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/ThrowL__006.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0f04edfff06c0b60eae7f5973b169a13.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/ThrowL__007.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/ThrowL__007.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cdbd1a93d5015ea3e8aac51923398e79.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/ThrowL__008.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/ThrowL__008.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5a4f2b592ceff158829f45c8b140b72c.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/ThrowL__009.png":
/*!******************************************************!*\
  !*** ./assets/sprites/ninja_sprites/ThrowL__009.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "407e4bbdb35acb10dba49adee107fd6d.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Throw__000.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Throw__000.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "02ce317549a54c5acb173e534f7efe7c.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Throw__001.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Throw__001.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "40e82f42df1b78a64018731d4f3d4f26.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Throw__002.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Throw__002.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0cd36d9bad820df3611fb1f411d368aa.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Throw__003.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Throw__003.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "527378d317b6a1fba6f95b555e4f0c27.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Throw__004.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Throw__004.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d8953e09f4dc69bb81325295afbb5fa0.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Throw__005.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Throw__005.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "64038c432069a55c9953a4dd34dcf06d.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Throw__006.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Throw__006.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "66a650e9f2d9cb228ddaa6f318d901d1.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Throw__007.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Throw__007.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1b8c5d5048292e2a98baeb6c4f4941eb.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Throw__008.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Throw__008.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "91f75c694c55fb7855776512b7f36834.png");

/***/ }),

/***/ "./assets/sprites/ninja_sprites/Throw__009.png":
/*!*****************************************************!*\
  !*** ./assets/sprites/ninja_sprites/Throw__009.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a9ccfc87bf5c7ca83f6764772e30ea24.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/BG/BG.png":
/*!********************************************!*\
  !*** ./assets/sprites/tileset_1/BG/BG.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e53185d22e6fc8f829bab3fa21e4ead1.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/Tiles/1.png":
/*!**********************************************!*\
  !*** ./assets/sprites/tileset_1/Tiles/1.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5fec7cf581bc04f185db789ec9dd4c4f.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/Tiles/10.png":
/*!***********************************************!*\
  !*** ./assets/sprites/tileset_1/Tiles/10.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "711d855b0eae6a667aab85c6d3351ee4.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/Tiles/11.png":
/*!***********************************************!*\
  !*** ./assets/sprites/tileset_1/Tiles/11.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "91605a54dde138a2f344586ec8ac23b3.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/Tiles/12.png":
/*!***********************************************!*\
  !*** ./assets/sprites/tileset_1/Tiles/12.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ce13d5404b5a033bf7a862a4b2283ed3.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/Tiles/13.png":
/*!***********************************************!*\
  !*** ./assets/sprites/tileset_1/Tiles/13.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5aa45312352db7703cc8950dcbcf9b8c.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/Tiles/14.png":
/*!***********************************************!*\
  !*** ./assets/sprites/tileset_1/Tiles/14.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "091664e7308b487434fc322e526a246c.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/Tiles/15.png":
/*!***********************************************!*\
  !*** ./assets/sprites/tileset_1/Tiles/15.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "10346e3bc4a83abccfb09c97ce481212.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/Tiles/16.png":
/*!***********************************************!*\
  !*** ./assets/sprites/tileset_1/Tiles/16.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "faf3f9068f1d1567c700face08689380.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/Tiles/17.png":
/*!***********************************************!*\
  !*** ./assets/sprites/tileset_1/Tiles/17.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "99d1ade58af3b6337e2f1139d8974d97.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/Tiles/18.png":
/*!***********************************************!*\
  !*** ./assets/sprites/tileset_1/Tiles/18.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "805a2c38183beaf4cd6f6b0ec4b39c9f.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/Tiles/2.png":
/*!**********************************************!*\
  !*** ./assets/sprites/tileset_1/Tiles/2.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "323dd2ca265aa9258916154895a1d356.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/Tiles/3.png":
/*!**********************************************!*\
  !*** ./assets/sprites/tileset_1/Tiles/3.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a06968e7293bdd3ba5b5e219e90855e9.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/Tiles/4.png":
/*!**********************************************!*\
  !*** ./assets/sprites/tileset_1/Tiles/4.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "029ed9922bba9f29e7becb2db3e507bd.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/Tiles/5.png":
/*!**********************************************!*\
  !*** ./assets/sprites/tileset_1/Tiles/5.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9138504833b22944d833524c63511a6a.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/Tiles/6.png":
/*!**********************************************!*\
  !*** ./assets/sprites/tileset_1/Tiles/6.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ce37c38b32b70fb02c914e0f39dfeff1.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/Tiles/7.png":
/*!**********************************************!*\
  !*** ./assets/sprites/tileset_1/Tiles/7.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7edc86bb5075e9e7ee71bbb407196201.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/Tiles/8.png":
/*!**********************************************!*\
  !*** ./assets/sprites/tileset_1/Tiles/8.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dd9ae5821b7d5c4087f2145fd94add0a.png");

/***/ }),

/***/ "./assets/sprites/tileset_1/Tiles/9.png":
/*!**********************************************!*\
  !*** ./assets/sprites/tileset_1/Tiles/9.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9498848fe77f52b09e33d219f8f14505.png");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_Crosshair_Red_cur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Crosshair_Red.cur */ "./assets/Crosshair_Red.cur");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_Crosshair_Red_cur__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n    margin: 0;\n    overflow: hidden;\n}\n\nh1 {\n    margin: 0 0 14px 0;\n}\n\nh3 {\n    margin: 6px;\n    border-bottom: 1px solid black;\n}\n\ncanvas {\n    position: absolute;\n}\n\n.wrapper {\n    border: 2px solid black;\n    width: 95%;\n    padding: 6px;\n}\n\nlabel {\n    display: flex;\n    margin: 6px;\n    justify-content: space-between;\n    font-size: medium;\n}\n\n.button {\n    background: rgb(66, 184, 221);\n    color: white;\n    border-radius: 10px;\n    font-size: large;\n    font-weight: 500;\n    outline: none;\n}\n\n.active {\n    outline: 6px solid yellow;\n}\n\n.button:hover {\n    background: rgb(46, 163, 199);\n}\n\n.button:active {\n    background: rgb(11, 63, 79);\n}\n\n.saveBtn {\n    background: rgb(34, 228, 95);\n    color: white;\n    position: absolute;\n    top: 790px;\n    left: 50px;\n    width: 100px;\n    height: 50px;\n}\n\n.menuBtn {\n    position: absolute;\n    top: 50px;\n    left: 50px;\n    width: 100px;\n    height: 50px;\n}\n\n.propertiesBtn {\n    position: absolute;\n    top: 50px;\n    left: 175px;\n    width: 100px;\n    height: 50px;\n}\n\n.builderBtn {\n    position: absolute;\n    top: 50px;\n    left: 300px;\n    width: 100px;\n    height: 50px;\n}\n\n.menu {\n    background: rgb(211, 238, 247);\n    position: absolute;\n    padding: 30px;\n    top: 125px;\n    left: 50px;\n    width: 350px;\n    height: 600px;\n    overflow: scroll;\n}\n\n.prop-menu {\n    background: rgb(211, 238, 247);\n    position: absolute;\n    padding: 30px;\n    top: 125px;\n    left: 50px;\n    width: 350px; \n}\n\n.builder-mode {\n    background: rgb(211, 238, 247);\n    position: absolute;\n    padding: 30px;\n    top: 125px;\n    left: 50px;\n    width: 350px;\n}\n\n.builder--tile-selector {\n    background: rgb(71, 75, 72);\n    color: white;\n    padding: 40px 20px;\n    position: absolute;\n    right: 0;\n    height: 100%;\n}\n\n.builder--tile-image {\n    height: 10vh;\n    width: 10vh;\n    margin: 1vh;\n    overflow: scroll;\n}\n\n.removing-tiles:hover {\n    cursor: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), default;\n}\n\n.hidden {\n    display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,4BAA4B;IAC5B,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;IACb,UAAU;IACV,UAAU;IACV,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;IACb,UAAU;IACV,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;IACb,UAAU;IACV,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,2BAA2B;IAC3B,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,wDAAmD;AACvD;;AAEA;IACI,aAAa;AACjB","sourcesContent":["body {\n    margin: 0;\n    overflow: hidden;\n}\n\nh1 {\n    margin: 0 0 14px 0;\n}\n\nh3 {\n    margin: 6px;\n    border-bottom: 1px solid black;\n}\n\ncanvas {\n    position: absolute;\n}\n\n.wrapper {\n    border: 2px solid black;\n    width: 95%;\n    padding: 6px;\n}\n\nlabel {\n    display: flex;\n    margin: 6px;\n    justify-content: space-between;\n    font-size: medium;\n}\n\n.button {\n    background: rgb(66, 184, 221);\n    color: white;\n    border-radius: 10px;\n    font-size: large;\n    font-weight: 500;\n    outline: none;\n}\n\n.active {\n    outline: 6px solid yellow;\n}\n\n.button:hover {\n    background: rgb(46, 163, 199);\n}\n\n.button:active {\n    background: rgb(11, 63, 79);\n}\n\n.saveBtn {\n    background: rgb(34, 228, 95);\n    color: white;\n    position: absolute;\n    top: 790px;\n    left: 50px;\n    width: 100px;\n    height: 50px;\n}\n\n.menuBtn {\n    position: absolute;\n    top: 50px;\n    left: 50px;\n    width: 100px;\n    height: 50px;\n}\n\n.propertiesBtn {\n    position: absolute;\n    top: 50px;\n    left: 175px;\n    width: 100px;\n    height: 50px;\n}\n\n.builderBtn {\n    position: absolute;\n    top: 50px;\n    left: 300px;\n    width: 100px;\n    height: 50px;\n}\n\n.menu {\n    background: rgb(211, 238, 247);\n    position: absolute;\n    padding: 30px;\n    top: 125px;\n    left: 50px;\n    width: 350px;\n    height: 600px;\n    overflow: scroll;\n}\n\n.prop-menu {\n    background: rgb(211, 238, 247);\n    position: absolute;\n    padding: 30px;\n    top: 125px;\n    left: 50px;\n    width: 350px; \n}\n\n.builder-mode {\n    background: rgb(211, 238, 247);\n    position: absolute;\n    padding: 30px;\n    top: 125px;\n    left: 50px;\n    width: 350px;\n}\n\n.builder--tile-selector {\n    background: rgb(71, 75, 72);\n    color: white;\n    padding: 40px 20px;\n    position: absolute;\n    right: 0;\n    height: 100%;\n}\n\n.builder--tile-image {\n    height: 10vh;\n    width: 10vh;\n    margin: 1vh;\n    overflow: scroll;\n}\n\n.removing-tiles:hover {\n    cursor: url('../assets/Crosshair_Red.cur'), default;\n}\n\n.hidden {\n    display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/animations/imageBuilder.ts":
/*!****************************************!*\
  !*** ./src/animations/imageBuilder.ts ***!
  \****************************************/
/*! exports provided: ImageBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBuilder", function() { return ImageBuilder; });
class ImageBuilder {
    constructor(imagesSources) {
        this.images = [];
        for (const img of imagesSources) {
            const image = new Image();
            image.src = img;
            this.images.push(image);
        }
    }
    getImages() {
        return this.images;
    }
}


/***/ }),

/***/ "./src/animations/ninjaAnimations.ts":
/*!*******************************************!*\
  !*** ./src/animations/ninjaAnimations.ts ***!
  \*******************************************/
/*! exports provided: NinjaAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NinjaAnimations", function() { return NinjaAnimations; });
/* harmony import */ var _assets_sprites_ninja_sprites_Idle_000_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Idle__000.png */ "./assets/sprites/ninja_sprites/Idle__000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Idle_001_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Idle__001.png */ "./assets/sprites/ninja_sprites/Idle__001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Idle_002_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Idle__002.png */ "./assets/sprites/ninja_sprites/Idle__002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Idle_003_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Idle__003.png */ "./assets/sprites/ninja_sprites/Idle__003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Idle_004_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Idle__004.png */ "./assets/sprites/ninja_sprites/Idle__004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Idle_005_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Idle__005.png */ "./assets/sprites/ninja_sprites/Idle__005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Idle_006_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Idle__006.png */ "./assets/sprites/ninja_sprites/Idle__006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Idle_007_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Idle__007.png */ "./assets/sprites/ninja_sprites/Idle__007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Idle_008_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Idle__008.png */ "./assets/sprites/ninja_sprites/Idle__008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Idle_009_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Idle__009.png */ "./assets/sprites/ninja_sprites/Idle__009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_IdleL_000_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/IdleL__000.png */ "./assets/sprites/ninja_sprites/IdleL__000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_IdleL_001_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/IdleL__001.png */ "./assets/sprites/ninja_sprites/IdleL__001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_IdleL_002_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/IdleL__002.png */ "./assets/sprites/ninja_sprites/IdleL__002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_IdleL_003_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/IdleL__003.png */ "./assets/sprites/ninja_sprites/IdleL__003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_IdleL_004_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/IdleL__004.png */ "./assets/sprites/ninja_sprites/IdleL__004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_IdleL_005_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/IdleL__005.png */ "./assets/sprites/ninja_sprites/IdleL__005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_IdleL_006_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/IdleL__006.png */ "./assets/sprites/ninja_sprites/IdleL__006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_IdleL_007_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/IdleL__007.png */ "./assets/sprites/ninja_sprites/IdleL__007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_IdleL_008_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/IdleL__008.png */ "./assets/sprites/ninja_sprites/IdleL__008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_IdleL_009_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/IdleL__009.png */ "./assets/sprites/ninja_sprites/IdleL__009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Attack_000_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Attack__000.png */ "./assets/sprites/ninja_sprites/Attack__000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Attack_001_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Attack__001.png */ "./assets/sprites/ninja_sprites/Attack__001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Attack_002_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Attack__002.png */ "./assets/sprites/ninja_sprites/Attack__002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Attack_003_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Attack__003.png */ "./assets/sprites/ninja_sprites/Attack__003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Attack_004_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Attack__004.png */ "./assets/sprites/ninja_sprites/Attack__004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Attack_005_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Attack__005.png */ "./assets/sprites/ninja_sprites/Attack__005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Attack_006_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Attack__006.png */ "./assets/sprites/ninja_sprites/Attack__006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Attack_007_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Attack__007.png */ "./assets/sprites/ninja_sprites/Attack__007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Attack_008_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Attack__008.png */ "./assets/sprites/ninja_sprites/Attack__008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Attack_009_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Attack__009.png */ "./assets/sprites/ninja_sprites/Attack__009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_AttackL_000_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/AttackL__000.png */ "./assets/sprites/ninja_sprites/AttackL__000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_AttackL_001_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/AttackL__001.png */ "./assets/sprites/ninja_sprites/AttackL__001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_AttackL_002_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/AttackL__002.png */ "./assets/sprites/ninja_sprites/AttackL__002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_AttackL_003_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/AttackL__003.png */ "./assets/sprites/ninja_sprites/AttackL__003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_AttackL_004_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/AttackL__004.png */ "./assets/sprites/ninja_sprites/AttackL__004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_AttackL_005_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/AttackL__005.png */ "./assets/sprites/ninja_sprites/AttackL__005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_AttackL_006_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/AttackL__006.png */ "./assets/sprites/ninja_sprites/AttackL__006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_AttackL_007_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/AttackL__007.png */ "./assets/sprites/ninja_sprites/AttackL__007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_AttackL_008_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/AttackL__008.png */ "./assets/sprites/ninja_sprites/AttackL__008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_AttackL_009_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/AttackL__009.png */ "./assets/sprites/ninja_sprites/AttackL__009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Run_000_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Run__000.png */ "./assets/sprites/ninja_sprites/Run__000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Run_001_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Run__001.png */ "./assets/sprites/ninja_sprites/Run__001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Run_002_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Run__002.png */ "./assets/sprites/ninja_sprites/Run__002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Run_003_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Run__003.png */ "./assets/sprites/ninja_sprites/Run__003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Run_004_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Run__004.png */ "./assets/sprites/ninja_sprites/Run__004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Run_005_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Run__005.png */ "./assets/sprites/ninja_sprites/Run__005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Run_006_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Run__006.png */ "./assets/sprites/ninja_sprites/Run__006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Run_007_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Run__007.png */ "./assets/sprites/ninja_sprites/Run__007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Run_008_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Run__008.png */ "./assets/sprites/ninja_sprites/Run__008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Run_009_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Run__009.png */ "./assets/sprites/ninja_sprites/Run__009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_RunL_000_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/RunL__000.png */ "./assets/sprites/ninja_sprites/RunL__000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_RunL_001_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/RunL__001.png */ "./assets/sprites/ninja_sprites/RunL__001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_RunL_002_png__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/RunL__002.png */ "./assets/sprites/ninja_sprites/RunL__002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_RunL_003_png__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/RunL__003.png */ "./assets/sprites/ninja_sprites/RunL__003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_RunL_004_png__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/RunL__004.png */ "./assets/sprites/ninja_sprites/RunL__004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_RunL_005_png__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/RunL__005.png */ "./assets/sprites/ninja_sprites/RunL__005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_RunL_006_png__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/RunL__006.png */ "./assets/sprites/ninja_sprites/RunL__006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_RunL_007_png__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/RunL__007.png */ "./assets/sprites/ninja_sprites/RunL__007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_RunL_008_png__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/RunL__008.png */ "./assets/sprites/ninja_sprites/RunL__008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_RunL_009_png__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/RunL__009.png */ "./assets/sprites/ninja_sprites/RunL__009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Climb_000_png__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Climb_000.png */ "./assets/sprites/ninja_sprites/Climb_000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Climb_001_png__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Climb_001.png */ "./assets/sprites/ninja_sprites/Climb_001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Climb_002_png__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Climb_002.png */ "./assets/sprites/ninja_sprites/Climb_002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Climb_003_png__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Climb_003.png */ "./assets/sprites/ninja_sprites/Climb_003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Climb_004_png__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Climb_004.png */ "./assets/sprites/ninja_sprites/Climb_004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Climb_005_png__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Climb_005.png */ "./assets/sprites/ninja_sprites/Climb_005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Climb_006_png__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Climb_006.png */ "./assets/sprites/ninja_sprites/Climb_006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Climb_007_png__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Climb_007.png */ "./assets/sprites/ninja_sprites/Climb_007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Climb_008_png__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Climb_008.png */ "./assets/sprites/ninja_sprites/Climb_008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Climb_009_png__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Climb_009.png */ "./assets/sprites/ninja_sprites/Climb_009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Dead_000_png__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Dead__000.png */ "./assets/sprites/ninja_sprites/Dead__000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Dead_001_png__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Dead__001.png */ "./assets/sprites/ninja_sprites/Dead__001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Dead_002_png__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Dead__002.png */ "./assets/sprites/ninja_sprites/Dead__002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Dead_003_png__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Dead__003.png */ "./assets/sprites/ninja_sprites/Dead__003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Dead_004_png__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Dead__004.png */ "./assets/sprites/ninja_sprites/Dead__004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Dead_005_png__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Dead__005.png */ "./assets/sprites/ninja_sprites/Dead__005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Dead_006_png__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Dead__006.png */ "./assets/sprites/ninja_sprites/Dead__006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Dead_007_png__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Dead__007.png */ "./assets/sprites/ninja_sprites/Dead__007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Dead_008_png__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Dead__008.png */ "./assets/sprites/ninja_sprites/Dead__008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Dead_009_png__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Dead__009.png */ "./assets/sprites/ninja_sprites/Dead__009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_DeadL_000_png__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/DeadL__000.png */ "./assets/sprites/ninja_sprites/DeadL__000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_DeadL_001_png__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/DeadL__001.png */ "./assets/sprites/ninja_sprites/DeadL__001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_DeadL_002_png__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/DeadL__002.png */ "./assets/sprites/ninja_sprites/DeadL__002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_DeadL_003_png__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/DeadL__003.png */ "./assets/sprites/ninja_sprites/DeadL__003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_DeadL_004_png__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/DeadL__004.png */ "./assets/sprites/ninja_sprites/DeadL__004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_DeadL_005_png__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/DeadL__005.png */ "./assets/sprites/ninja_sprites/DeadL__005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_DeadL_006_png__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/DeadL__006.png */ "./assets/sprites/ninja_sprites/DeadL__006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_DeadL_007_png__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/DeadL__007.png */ "./assets/sprites/ninja_sprites/DeadL__007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_DeadL_008_png__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/DeadL__008.png */ "./assets/sprites/ninja_sprites/DeadL__008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_DeadL_009_png__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/DeadL__009.png */ "./assets/sprites/ninja_sprites/DeadL__009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Glide_000_png__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Glide_000.png */ "./assets/sprites/ninja_sprites/Glide_000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Glide_001_png__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Glide_001.png */ "./assets/sprites/ninja_sprites/Glide_001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Glide_002_png__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Glide_002.png */ "./assets/sprites/ninja_sprites/Glide_002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Glide_003_png__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Glide_003.png */ "./assets/sprites/ninja_sprites/Glide_003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Glide_004_png__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Glide_004.png */ "./assets/sprites/ninja_sprites/Glide_004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Glide_005_png__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Glide_005.png */ "./assets/sprites/ninja_sprites/Glide_005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Glide_006_png__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Glide_006.png */ "./assets/sprites/ninja_sprites/Glide_006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Glide_007_png__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Glide_007.png */ "./assets/sprites/ninja_sprites/Glide_007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Glide_008_png__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Glide_008.png */ "./assets/sprites/ninja_sprites/Glide_008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Glide_009_png__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Glide_009.png */ "./assets/sprites/ninja_sprites/Glide_009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_GlideL_000_png__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/GlideL_000.png */ "./assets/sprites/ninja_sprites/GlideL_000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_GlideL_001_png__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/GlideL_001.png */ "./assets/sprites/ninja_sprites/GlideL_001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_GlideL_002_png__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/GlideL_002.png */ "./assets/sprites/ninja_sprites/GlideL_002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_GlideL_003_png__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/GlideL_003.png */ "./assets/sprites/ninja_sprites/GlideL_003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_GlideL_004_png__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/GlideL_004.png */ "./assets/sprites/ninja_sprites/GlideL_004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_GlideL_005_png__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/GlideL_005.png */ "./assets/sprites/ninja_sprites/GlideL_005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_GlideL_006_png__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/GlideL_006.png */ "./assets/sprites/ninja_sprites/GlideL_006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_GlideL_007_png__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/GlideL_007.png */ "./assets/sprites/ninja_sprites/GlideL_007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_GlideL_008_png__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/GlideL_008.png */ "./assets/sprites/ninja_sprites/GlideL_008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_GlideL_009_png__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/GlideL_009.png */ "./assets/sprites/ninja_sprites/GlideL_009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_000_png__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump__000.png */ "./assets/sprites/ninja_sprites/Jump__000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_001_png__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump__001.png */ "./assets/sprites/ninja_sprites/Jump__001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_002_png__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump__002.png */ "./assets/sprites/ninja_sprites/Jump__002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_003_png__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump__003.png */ "./assets/sprites/ninja_sprites/Jump__003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_004_png__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump__004.png */ "./assets/sprites/ninja_sprites/Jump__004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_005_png__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump__005.png */ "./assets/sprites/ninja_sprites/Jump__005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_006_png__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump__006.png */ "./assets/sprites/ninja_sprites/Jump__006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_007_png__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump__007.png */ "./assets/sprites/ninja_sprites/Jump__007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_008_png__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump__008.png */ "./assets/sprites/ninja_sprites/Jump__008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_009_png__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump__009.png */ "./assets/sprites/ninja_sprites/Jump__009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_JumpL_000_png__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/JumpL__000.png */ "./assets/sprites/ninja_sprites/JumpL__000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_JumpL_001_png__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/JumpL__001.png */ "./assets/sprites/ninja_sprites/JumpL__001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_JumpL_002_png__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/JumpL__002.png */ "./assets/sprites/ninja_sprites/JumpL__002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_JumpL_003_png__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/JumpL__003.png */ "./assets/sprites/ninja_sprites/JumpL__003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_JumpL_004_png__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/JumpL__004.png */ "./assets/sprites/ninja_sprites/JumpL__004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_JumpL_005_png__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/JumpL__005.png */ "./assets/sprites/ninja_sprites/JumpL__005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_JumpL_006_png__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/JumpL__006.png */ "./assets/sprites/ninja_sprites/JumpL__006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_JumpL_007_png__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/JumpL__007.png */ "./assets/sprites/ninja_sprites/JumpL__007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_JumpL_008_png__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/JumpL__008.png */ "./assets/sprites/ninja_sprites/JumpL__008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_JumpL_009_png__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/JumpL__009.png */ "./assets/sprites/ninja_sprites/JumpL__009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Attack_000_png__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Attack__000.png */ "./assets/sprites/ninja_sprites/Jump_Attack__000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Attack_001_png__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Attack__001.png */ "./assets/sprites/ninja_sprites/Jump_Attack__001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Attack_002_png__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Attack__002.png */ "./assets/sprites/ninja_sprites/Jump_Attack__002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Attack_003_png__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Attack__003.png */ "./assets/sprites/ninja_sprites/Jump_Attack__003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Attack_004_png__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Attack__004.png */ "./assets/sprites/ninja_sprites/Jump_Attack__004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Attack_005_png__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Attack__005.png */ "./assets/sprites/ninja_sprites/Jump_Attack__005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Attack_006_png__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Attack__006.png */ "./assets/sprites/ninja_sprites/Jump_Attack__006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Attack_007_png__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Attack__007.png */ "./assets/sprites/ninja_sprites/Jump_Attack__007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Attack_008_png__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Attack__008.png */ "./assets/sprites/ninja_sprites/Jump_Attack__008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Attack_009_png__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Attack__009.png */ "./assets/sprites/ninja_sprites/Jump_Attack__009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_AttackL_000_png__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_AttackL__000.png */ "./assets/sprites/ninja_sprites/Jump_AttackL__000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_AttackL_001_png__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_AttackL__001.png */ "./assets/sprites/ninja_sprites/Jump_AttackL__001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_AttackL_002_png__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_AttackL__002.png */ "./assets/sprites/ninja_sprites/Jump_AttackL__002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_AttackL_003_png__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_AttackL__003.png */ "./assets/sprites/ninja_sprites/Jump_AttackL__003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_AttackL_004_png__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_AttackL__004.png */ "./assets/sprites/ninja_sprites/Jump_AttackL__004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_AttackL_005_png__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_AttackL__005.png */ "./assets/sprites/ninja_sprites/Jump_AttackL__005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_AttackL_006_png__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_AttackL__006.png */ "./assets/sprites/ninja_sprites/Jump_AttackL__006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_AttackL_007_png__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_AttackL__007.png */ "./assets/sprites/ninja_sprites/Jump_AttackL__007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_AttackL_008_png__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_AttackL__008.png */ "./assets/sprites/ninja_sprites/Jump_AttackL__008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_AttackL_009_png__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_AttackL__009.png */ "./assets/sprites/ninja_sprites/Jump_AttackL__009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Throw_000_png__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Throw__000.png */ "./assets/sprites/ninja_sprites/Jump_Throw__000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Throw_001_png__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Throw__001.png */ "./assets/sprites/ninja_sprites/Jump_Throw__001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Throw_002_png__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Throw__002.png */ "./assets/sprites/ninja_sprites/Jump_Throw__002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Throw_003_png__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Throw__003.png */ "./assets/sprites/ninja_sprites/Jump_Throw__003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Throw_004_png__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Throw__004.png */ "./assets/sprites/ninja_sprites/Jump_Throw__004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Throw_005_png__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Throw__005.png */ "./assets/sprites/ninja_sprites/Jump_Throw__005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Throw_006_png__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Throw__006.png */ "./assets/sprites/ninja_sprites/Jump_Throw__006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Throw_007_png__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Throw__007.png */ "./assets/sprites/ninja_sprites/Jump_Throw__007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Throw_008_png__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Throw__008.png */ "./assets/sprites/ninja_sprites/Jump_Throw__008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_Throw_009_png__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_Throw__009.png */ "./assets/sprites/ninja_sprites/Jump_Throw__009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_ThrowL_000_png__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_ThrowL__000.png */ "./assets/sprites/ninja_sprites/Jump_ThrowL__000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_ThrowL_001_png__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_ThrowL__001.png */ "./assets/sprites/ninja_sprites/Jump_ThrowL__001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_ThrowL_002_png__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_ThrowL__002.png */ "./assets/sprites/ninja_sprites/Jump_ThrowL__002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_ThrowL_003_png__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_ThrowL__003.png */ "./assets/sprites/ninja_sprites/Jump_ThrowL__003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_ThrowL_004_png__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_ThrowL__004.png */ "./assets/sprites/ninja_sprites/Jump_ThrowL__004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_ThrowL_005_png__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_ThrowL__005.png */ "./assets/sprites/ninja_sprites/Jump_ThrowL__005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_ThrowL_006_png__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_ThrowL__006.png */ "./assets/sprites/ninja_sprites/Jump_ThrowL__006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_ThrowL_007_png__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_ThrowL__007.png */ "./assets/sprites/ninja_sprites/Jump_ThrowL__007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_ThrowL_008_png__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_ThrowL__008.png */ "./assets/sprites/ninja_sprites/Jump_ThrowL__008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Jump_ThrowL_009_png__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Jump_ThrowL__009.png */ "./assets/sprites/ninja_sprites/Jump_ThrowL__009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Slide_000_png__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Slide__000.png */ "./assets/sprites/ninja_sprites/Slide__000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Slide_001_png__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Slide__001.png */ "./assets/sprites/ninja_sprites/Slide__001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Slide_002_png__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Slide__002.png */ "./assets/sprites/ninja_sprites/Slide__002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Slide_003_png__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Slide__003.png */ "./assets/sprites/ninja_sprites/Slide__003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Slide_004_png__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Slide__004.png */ "./assets/sprites/ninja_sprites/Slide__004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Slide_005_png__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Slide__005.png */ "./assets/sprites/ninja_sprites/Slide__005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Slide_006_png__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Slide__006.png */ "./assets/sprites/ninja_sprites/Slide__006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Slide_007_png__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Slide__007.png */ "./assets/sprites/ninja_sprites/Slide__007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Slide_008_png__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Slide__008.png */ "./assets/sprites/ninja_sprites/Slide__008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Slide_009_png__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Slide__009.png */ "./assets/sprites/ninja_sprites/Slide__009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_SlideL_000_png__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/SlideL__000.png */ "./assets/sprites/ninja_sprites/SlideL__000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_SlideL_001_png__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/SlideL__001.png */ "./assets/sprites/ninja_sprites/SlideL__001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_SlideL_002_png__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/SlideL__002.png */ "./assets/sprites/ninja_sprites/SlideL__002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_SlideL_003_png__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/SlideL__003.png */ "./assets/sprites/ninja_sprites/SlideL__003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_SlideL_004_png__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/SlideL__004.png */ "./assets/sprites/ninja_sprites/SlideL__004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_SlideL_005_png__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/SlideL__005.png */ "./assets/sprites/ninja_sprites/SlideL__005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_SlideL_006_png__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/SlideL__006.png */ "./assets/sprites/ninja_sprites/SlideL__006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_SlideL_007_png__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/SlideL__007.png */ "./assets/sprites/ninja_sprites/SlideL__007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_SlideL_008_png__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/SlideL__008.png */ "./assets/sprites/ninja_sprites/SlideL__008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_SlideL_009_png__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/SlideL__009.png */ "./assets/sprites/ninja_sprites/SlideL__009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Throw_000_png__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Throw__000.png */ "./assets/sprites/ninja_sprites/Throw__000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Throw_001_png__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Throw__001.png */ "./assets/sprites/ninja_sprites/Throw__001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Throw_002_png__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Throw__002.png */ "./assets/sprites/ninja_sprites/Throw__002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Throw_003_png__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Throw__003.png */ "./assets/sprites/ninja_sprites/Throw__003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Throw_004_png__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Throw__004.png */ "./assets/sprites/ninja_sprites/Throw__004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Throw_005_png__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Throw__005.png */ "./assets/sprites/ninja_sprites/Throw__005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Throw_006_png__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Throw__006.png */ "./assets/sprites/ninja_sprites/Throw__006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Throw_007_png__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Throw__007.png */ "./assets/sprites/ninja_sprites/Throw__007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Throw_008_png__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Throw__008.png */ "./assets/sprites/ninja_sprites/Throw__008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_Throw_009_png__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/Throw__009.png */ "./assets/sprites/ninja_sprites/Throw__009.png");
/* harmony import */ var _assets_sprites_ninja_sprites_ThrowL_000_png__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/ThrowL__000.png */ "./assets/sprites/ninja_sprites/ThrowL__000.png");
/* harmony import */ var _assets_sprites_ninja_sprites_ThrowL_001_png__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/ThrowL__001.png */ "./assets/sprites/ninja_sprites/ThrowL__001.png");
/* harmony import */ var _assets_sprites_ninja_sprites_ThrowL_002_png__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/ThrowL__002.png */ "./assets/sprites/ninja_sprites/ThrowL__002.png");
/* harmony import */ var _assets_sprites_ninja_sprites_ThrowL_003_png__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/ThrowL__003.png */ "./assets/sprites/ninja_sprites/ThrowL__003.png");
/* harmony import */ var _assets_sprites_ninja_sprites_ThrowL_004_png__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/ThrowL__004.png */ "./assets/sprites/ninja_sprites/ThrowL__004.png");
/* harmony import */ var _assets_sprites_ninja_sprites_ThrowL_005_png__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/ThrowL__005.png */ "./assets/sprites/ninja_sprites/ThrowL__005.png");
/* harmony import */ var _assets_sprites_ninja_sprites_ThrowL_006_png__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/ThrowL__006.png */ "./assets/sprites/ninja_sprites/ThrowL__006.png");
/* harmony import */ var _assets_sprites_ninja_sprites_ThrowL_007_png__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/ThrowL__007.png */ "./assets/sprites/ninja_sprites/ThrowL__007.png");
/* harmony import */ var _assets_sprites_ninja_sprites_ThrowL_008_png__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/ThrowL__008.png */ "./assets/sprites/ninja_sprites/ThrowL__008.png");
/* harmony import */ var _assets_sprites_ninja_sprites_ThrowL_009_png__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! ../../assets/sprites/ninja_sprites/ThrowL__009.png */ "./assets/sprites/ninja_sprites/ThrowL__009.png");
/* harmony import */ var _imageBuilder__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(/*! ./imageBuilder */ "./src/animations/imageBuilder.ts");
/* harmony import */ var _constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(/*! ../constants/animationTypes */ "./src/constants/animationTypes.ts");




















































































































































































































class NinjaAnimations {
    constructor() {
        this.animations = {};
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].IDLE_RIGHT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_Idle_000_png__WEBPACK_IMPORTED_MODULE_0__["default"], _assets_sprites_ninja_sprites_Idle_001_png__WEBPACK_IMPORTED_MODULE_1__["default"], _assets_sprites_ninja_sprites_Idle_002_png__WEBPACK_IMPORTED_MODULE_2__["default"], _assets_sprites_ninja_sprites_Idle_003_png__WEBPACK_IMPORTED_MODULE_3__["default"], _assets_sprites_ninja_sprites_Idle_004_png__WEBPACK_IMPORTED_MODULE_4__["default"], _assets_sprites_ninja_sprites_Idle_005_png__WEBPACK_IMPORTED_MODULE_5__["default"], _assets_sprites_ninja_sprites_Idle_006_png__WEBPACK_IMPORTED_MODULE_6__["default"], _assets_sprites_ninja_sprites_Idle_007_png__WEBPACK_IMPORTED_MODULE_7__["default"], _assets_sprites_ninja_sprites_Idle_008_png__WEBPACK_IMPORTED_MODULE_8__["default"], _assets_sprites_ninja_sprites_Idle_009_png__WEBPACK_IMPORTED_MODULE_9__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].IDLE_LEFT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_IdleL_000_png__WEBPACK_IMPORTED_MODULE_10__["default"], _assets_sprites_ninja_sprites_IdleL_001_png__WEBPACK_IMPORTED_MODULE_11__["default"], _assets_sprites_ninja_sprites_IdleL_002_png__WEBPACK_IMPORTED_MODULE_12__["default"], _assets_sprites_ninja_sprites_IdleL_003_png__WEBPACK_IMPORTED_MODULE_13__["default"], _assets_sprites_ninja_sprites_IdleL_004_png__WEBPACK_IMPORTED_MODULE_14__["default"], _assets_sprites_ninja_sprites_IdleL_005_png__WEBPACK_IMPORTED_MODULE_15__["default"], _assets_sprites_ninja_sprites_IdleL_006_png__WEBPACK_IMPORTED_MODULE_16__["default"], _assets_sprites_ninja_sprites_IdleL_007_png__WEBPACK_IMPORTED_MODULE_17__["default"], _assets_sprites_ninja_sprites_IdleL_008_png__WEBPACK_IMPORTED_MODULE_18__["default"], _assets_sprites_ninja_sprites_IdleL_009_png__WEBPACK_IMPORTED_MODULE_19__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].ATTACK_RIGHT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_Attack_000_png__WEBPACK_IMPORTED_MODULE_20__["default"], _assets_sprites_ninja_sprites_Attack_001_png__WEBPACK_IMPORTED_MODULE_21__["default"], _assets_sprites_ninja_sprites_Attack_002_png__WEBPACK_IMPORTED_MODULE_22__["default"], _assets_sprites_ninja_sprites_Attack_003_png__WEBPACK_IMPORTED_MODULE_23__["default"], _assets_sprites_ninja_sprites_Attack_004_png__WEBPACK_IMPORTED_MODULE_24__["default"], _assets_sprites_ninja_sprites_Attack_005_png__WEBPACK_IMPORTED_MODULE_25__["default"], _assets_sprites_ninja_sprites_Attack_006_png__WEBPACK_IMPORTED_MODULE_26__["default"], _assets_sprites_ninja_sprites_Attack_007_png__WEBPACK_IMPORTED_MODULE_27__["default"], _assets_sprites_ninja_sprites_Attack_008_png__WEBPACK_IMPORTED_MODULE_28__["default"], _assets_sprites_ninja_sprites_Attack_009_png__WEBPACK_IMPORTED_MODULE_29__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].ATTACK_LEFT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_AttackL_000_png__WEBPACK_IMPORTED_MODULE_30__["default"], _assets_sprites_ninja_sprites_AttackL_001_png__WEBPACK_IMPORTED_MODULE_31__["default"], _assets_sprites_ninja_sprites_AttackL_002_png__WEBPACK_IMPORTED_MODULE_32__["default"], _assets_sprites_ninja_sprites_AttackL_003_png__WEBPACK_IMPORTED_MODULE_33__["default"], _assets_sprites_ninja_sprites_AttackL_004_png__WEBPACK_IMPORTED_MODULE_34__["default"], _assets_sprites_ninja_sprites_AttackL_005_png__WEBPACK_IMPORTED_MODULE_35__["default"], _assets_sprites_ninja_sprites_AttackL_006_png__WEBPACK_IMPORTED_MODULE_36__["default"], _assets_sprites_ninja_sprites_AttackL_007_png__WEBPACK_IMPORTED_MODULE_37__["default"], _assets_sprites_ninja_sprites_AttackL_008_png__WEBPACK_IMPORTED_MODULE_38__["default"], _assets_sprites_ninja_sprites_AttackL_009_png__WEBPACK_IMPORTED_MODULE_39__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].RUN_RIGHT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_Run_000_png__WEBPACK_IMPORTED_MODULE_40__["default"], _assets_sprites_ninja_sprites_Run_001_png__WEBPACK_IMPORTED_MODULE_41__["default"], _assets_sprites_ninja_sprites_Run_002_png__WEBPACK_IMPORTED_MODULE_42__["default"], _assets_sprites_ninja_sprites_Run_003_png__WEBPACK_IMPORTED_MODULE_43__["default"], _assets_sprites_ninja_sprites_Run_004_png__WEBPACK_IMPORTED_MODULE_44__["default"], _assets_sprites_ninja_sprites_Run_005_png__WEBPACK_IMPORTED_MODULE_45__["default"], _assets_sprites_ninja_sprites_Run_006_png__WEBPACK_IMPORTED_MODULE_46__["default"], _assets_sprites_ninja_sprites_Run_007_png__WEBPACK_IMPORTED_MODULE_47__["default"], _assets_sprites_ninja_sprites_Run_008_png__WEBPACK_IMPORTED_MODULE_48__["default"], _assets_sprites_ninja_sprites_Run_009_png__WEBPACK_IMPORTED_MODULE_49__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].RUN_LEFT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_RunL_000_png__WEBPACK_IMPORTED_MODULE_50__["default"], _assets_sprites_ninja_sprites_RunL_001_png__WEBPACK_IMPORTED_MODULE_51__["default"], _assets_sprites_ninja_sprites_RunL_002_png__WEBPACK_IMPORTED_MODULE_52__["default"], _assets_sprites_ninja_sprites_RunL_003_png__WEBPACK_IMPORTED_MODULE_53__["default"], _assets_sprites_ninja_sprites_RunL_004_png__WEBPACK_IMPORTED_MODULE_54__["default"], _assets_sprites_ninja_sprites_RunL_005_png__WEBPACK_IMPORTED_MODULE_55__["default"], _assets_sprites_ninja_sprites_RunL_006_png__WEBPACK_IMPORTED_MODULE_56__["default"], _assets_sprites_ninja_sprites_RunL_007_png__WEBPACK_IMPORTED_MODULE_57__["default"], _assets_sprites_ninja_sprites_RunL_008_png__WEBPACK_IMPORTED_MODULE_58__["default"], _assets_sprites_ninja_sprites_RunL_009_png__WEBPACK_IMPORTED_MODULE_59__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].CLIMB] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_Climb_000_png__WEBPACK_IMPORTED_MODULE_60__["default"], _assets_sprites_ninja_sprites_Climb_001_png__WEBPACK_IMPORTED_MODULE_61__["default"], _assets_sprites_ninja_sprites_Climb_002_png__WEBPACK_IMPORTED_MODULE_62__["default"], _assets_sprites_ninja_sprites_Climb_003_png__WEBPACK_IMPORTED_MODULE_63__["default"], _assets_sprites_ninja_sprites_Climb_004_png__WEBPACK_IMPORTED_MODULE_64__["default"], _assets_sprites_ninja_sprites_Climb_005_png__WEBPACK_IMPORTED_MODULE_65__["default"], _assets_sprites_ninja_sprites_Climb_006_png__WEBPACK_IMPORTED_MODULE_66__["default"], _assets_sprites_ninja_sprites_Climb_007_png__WEBPACK_IMPORTED_MODULE_67__["default"], _assets_sprites_ninja_sprites_Climb_008_png__WEBPACK_IMPORTED_MODULE_68__["default"], _assets_sprites_ninja_sprites_Climb_009_png__WEBPACK_IMPORTED_MODULE_69__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].DEAD_RIGHT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_Dead_000_png__WEBPACK_IMPORTED_MODULE_70__["default"], _assets_sprites_ninja_sprites_Dead_001_png__WEBPACK_IMPORTED_MODULE_71__["default"], _assets_sprites_ninja_sprites_Dead_002_png__WEBPACK_IMPORTED_MODULE_72__["default"], _assets_sprites_ninja_sprites_Dead_003_png__WEBPACK_IMPORTED_MODULE_73__["default"], _assets_sprites_ninja_sprites_Dead_004_png__WEBPACK_IMPORTED_MODULE_74__["default"], _assets_sprites_ninja_sprites_Dead_005_png__WEBPACK_IMPORTED_MODULE_75__["default"], _assets_sprites_ninja_sprites_Dead_006_png__WEBPACK_IMPORTED_MODULE_76__["default"], _assets_sprites_ninja_sprites_Dead_007_png__WEBPACK_IMPORTED_MODULE_77__["default"], _assets_sprites_ninja_sprites_Dead_008_png__WEBPACK_IMPORTED_MODULE_78__["default"], _assets_sprites_ninja_sprites_Dead_009_png__WEBPACK_IMPORTED_MODULE_79__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].DEAD_LEFT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_DeadL_000_png__WEBPACK_IMPORTED_MODULE_80__["default"], _assets_sprites_ninja_sprites_DeadL_001_png__WEBPACK_IMPORTED_MODULE_81__["default"], _assets_sprites_ninja_sprites_DeadL_002_png__WEBPACK_IMPORTED_MODULE_82__["default"], _assets_sprites_ninja_sprites_DeadL_003_png__WEBPACK_IMPORTED_MODULE_83__["default"], _assets_sprites_ninja_sprites_DeadL_004_png__WEBPACK_IMPORTED_MODULE_84__["default"], _assets_sprites_ninja_sprites_DeadL_005_png__WEBPACK_IMPORTED_MODULE_85__["default"], _assets_sprites_ninja_sprites_DeadL_006_png__WEBPACK_IMPORTED_MODULE_86__["default"], _assets_sprites_ninja_sprites_DeadL_007_png__WEBPACK_IMPORTED_MODULE_87__["default"], _assets_sprites_ninja_sprites_DeadL_008_png__WEBPACK_IMPORTED_MODULE_88__["default"], _assets_sprites_ninja_sprites_DeadL_009_png__WEBPACK_IMPORTED_MODULE_89__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].GLIDE_RIGHT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_Glide_000_png__WEBPACK_IMPORTED_MODULE_90__["default"], _assets_sprites_ninja_sprites_Glide_001_png__WEBPACK_IMPORTED_MODULE_91__["default"], _assets_sprites_ninja_sprites_Glide_002_png__WEBPACK_IMPORTED_MODULE_92__["default"], _assets_sprites_ninja_sprites_Glide_003_png__WEBPACK_IMPORTED_MODULE_93__["default"], _assets_sprites_ninja_sprites_Glide_004_png__WEBPACK_IMPORTED_MODULE_94__["default"], _assets_sprites_ninja_sprites_Glide_005_png__WEBPACK_IMPORTED_MODULE_95__["default"], _assets_sprites_ninja_sprites_Glide_006_png__WEBPACK_IMPORTED_MODULE_96__["default"], _assets_sprites_ninja_sprites_Glide_007_png__WEBPACK_IMPORTED_MODULE_97__["default"], _assets_sprites_ninja_sprites_Glide_008_png__WEBPACK_IMPORTED_MODULE_98__["default"], _assets_sprites_ninja_sprites_Glide_009_png__WEBPACK_IMPORTED_MODULE_99__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].GLIDE_LEFT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_GlideL_000_png__WEBPACK_IMPORTED_MODULE_100__["default"], _assets_sprites_ninja_sprites_GlideL_001_png__WEBPACK_IMPORTED_MODULE_101__["default"], _assets_sprites_ninja_sprites_GlideL_002_png__WEBPACK_IMPORTED_MODULE_102__["default"], _assets_sprites_ninja_sprites_GlideL_003_png__WEBPACK_IMPORTED_MODULE_103__["default"], _assets_sprites_ninja_sprites_GlideL_004_png__WEBPACK_IMPORTED_MODULE_104__["default"], _assets_sprites_ninja_sprites_GlideL_005_png__WEBPACK_IMPORTED_MODULE_105__["default"], _assets_sprites_ninja_sprites_GlideL_006_png__WEBPACK_IMPORTED_MODULE_106__["default"], _assets_sprites_ninja_sprites_GlideL_007_png__WEBPACK_IMPORTED_MODULE_107__["default"], _assets_sprites_ninja_sprites_GlideL_008_png__WEBPACK_IMPORTED_MODULE_108__["default"], _assets_sprites_ninja_sprites_GlideL_009_png__WEBPACK_IMPORTED_MODULE_109__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].JUMP_RIGHT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_Jump_000_png__WEBPACK_IMPORTED_MODULE_110__["default"], _assets_sprites_ninja_sprites_Jump_001_png__WEBPACK_IMPORTED_MODULE_111__["default"], _assets_sprites_ninja_sprites_Jump_002_png__WEBPACK_IMPORTED_MODULE_112__["default"], _assets_sprites_ninja_sprites_Jump_003_png__WEBPACK_IMPORTED_MODULE_113__["default"], _assets_sprites_ninja_sprites_Jump_004_png__WEBPACK_IMPORTED_MODULE_114__["default"], _assets_sprites_ninja_sprites_Jump_005_png__WEBPACK_IMPORTED_MODULE_115__["default"], _assets_sprites_ninja_sprites_Jump_006_png__WEBPACK_IMPORTED_MODULE_116__["default"], _assets_sprites_ninja_sprites_Jump_007_png__WEBPACK_IMPORTED_MODULE_117__["default"], _assets_sprites_ninja_sprites_Jump_008_png__WEBPACK_IMPORTED_MODULE_118__["default"], _assets_sprites_ninja_sprites_Jump_009_png__WEBPACK_IMPORTED_MODULE_119__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].JUMP_LEFT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_JumpL_000_png__WEBPACK_IMPORTED_MODULE_120__["default"], _assets_sprites_ninja_sprites_JumpL_001_png__WEBPACK_IMPORTED_MODULE_121__["default"], _assets_sprites_ninja_sprites_JumpL_002_png__WEBPACK_IMPORTED_MODULE_122__["default"], _assets_sprites_ninja_sprites_JumpL_003_png__WEBPACK_IMPORTED_MODULE_123__["default"], _assets_sprites_ninja_sprites_JumpL_004_png__WEBPACK_IMPORTED_MODULE_124__["default"], _assets_sprites_ninja_sprites_JumpL_005_png__WEBPACK_IMPORTED_MODULE_125__["default"], _assets_sprites_ninja_sprites_JumpL_006_png__WEBPACK_IMPORTED_MODULE_126__["default"], _assets_sprites_ninja_sprites_JumpL_007_png__WEBPACK_IMPORTED_MODULE_127__["default"], _assets_sprites_ninja_sprites_JumpL_008_png__WEBPACK_IMPORTED_MODULE_128__["default"], _assets_sprites_ninja_sprites_JumpL_009_png__WEBPACK_IMPORTED_MODULE_129__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].JUMP_ATTACK_RIGHT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_Jump_Attack_000_png__WEBPACK_IMPORTED_MODULE_130__["default"], _assets_sprites_ninja_sprites_Jump_Attack_001_png__WEBPACK_IMPORTED_MODULE_131__["default"], _assets_sprites_ninja_sprites_Jump_Attack_002_png__WEBPACK_IMPORTED_MODULE_132__["default"], _assets_sprites_ninja_sprites_Jump_Attack_003_png__WEBPACK_IMPORTED_MODULE_133__["default"], _assets_sprites_ninja_sprites_Jump_Attack_004_png__WEBPACK_IMPORTED_MODULE_134__["default"], _assets_sprites_ninja_sprites_Jump_Attack_005_png__WEBPACK_IMPORTED_MODULE_135__["default"], _assets_sprites_ninja_sprites_Jump_Attack_006_png__WEBPACK_IMPORTED_MODULE_136__["default"], _assets_sprites_ninja_sprites_Jump_Attack_007_png__WEBPACK_IMPORTED_MODULE_137__["default"], _assets_sprites_ninja_sprites_Jump_Attack_008_png__WEBPACK_IMPORTED_MODULE_138__["default"], _assets_sprites_ninja_sprites_Jump_Attack_009_png__WEBPACK_IMPORTED_MODULE_139__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].JUMP_ATTACK_LEFT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_Jump_AttackL_000_png__WEBPACK_IMPORTED_MODULE_140__["default"], _assets_sprites_ninja_sprites_Jump_AttackL_001_png__WEBPACK_IMPORTED_MODULE_141__["default"], _assets_sprites_ninja_sprites_Jump_AttackL_002_png__WEBPACK_IMPORTED_MODULE_142__["default"], _assets_sprites_ninja_sprites_Jump_AttackL_003_png__WEBPACK_IMPORTED_MODULE_143__["default"], _assets_sprites_ninja_sprites_Jump_AttackL_004_png__WEBPACK_IMPORTED_MODULE_144__["default"], _assets_sprites_ninja_sprites_Jump_AttackL_005_png__WEBPACK_IMPORTED_MODULE_145__["default"], _assets_sprites_ninja_sprites_Jump_AttackL_006_png__WEBPACK_IMPORTED_MODULE_146__["default"], _assets_sprites_ninja_sprites_Jump_AttackL_007_png__WEBPACK_IMPORTED_MODULE_147__["default"], _assets_sprites_ninja_sprites_Jump_AttackL_008_png__WEBPACK_IMPORTED_MODULE_148__["default"], _assets_sprites_ninja_sprites_Jump_AttackL_009_png__WEBPACK_IMPORTED_MODULE_149__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].JUMP_THROW_RIGHT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_Jump_Throw_000_png__WEBPACK_IMPORTED_MODULE_150__["default"], _assets_sprites_ninja_sprites_Jump_Throw_001_png__WEBPACK_IMPORTED_MODULE_151__["default"], _assets_sprites_ninja_sprites_Jump_Throw_002_png__WEBPACK_IMPORTED_MODULE_152__["default"], _assets_sprites_ninja_sprites_Jump_Throw_003_png__WEBPACK_IMPORTED_MODULE_153__["default"], _assets_sprites_ninja_sprites_Jump_Throw_004_png__WEBPACK_IMPORTED_MODULE_154__["default"], _assets_sprites_ninja_sprites_Jump_Throw_005_png__WEBPACK_IMPORTED_MODULE_155__["default"], _assets_sprites_ninja_sprites_Jump_Throw_006_png__WEBPACK_IMPORTED_MODULE_156__["default"], _assets_sprites_ninja_sprites_Jump_Throw_007_png__WEBPACK_IMPORTED_MODULE_157__["default"], _assets_sprites_ninja_sprites_Jump_Throw_008_png__WEBPACK_IMPORTED_MODULE_158__["default"], _assets_sprites_ninja_sprites_Jump_Throw_009_png__WEBPACK_IMPORTED_MODULE_159__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].JUMP_THROW_LEFT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_Jump_ThrowL_000_png__WEBPACK_IMPORTED_MODULE_160__["default"], _assets_sprites_ninja_sprites_Jump_ThrowL_001_png__WEBPACK_IMPORTED_MODULE_161__["default"], _assets_sprites_ninja_sprites_Jump_ThrowL_002_png__WEBPACK_IMPORTED_MODULE_162__["default"], _assets_sprites_ninja_sprites_Jump_ThrowL_003_png__WEBPACK_IMPORTED_MODULE_163__["default"], _assets_sprites_ninja_sprites_Jump_ThrowL_004_png__WEBPACK_IMPORTED_MODULE_164__["default"], _assets_sprites_ninja_sprites_Jump_ThrowL_005_png__WEBPACK_IMPORTED_MODULE_165__["default"], _assets_sprites_ninja_sprites_Jump_ThrowL_006_png__WEBPACK_IMPORTED_MODULE_166__["default"], _assets_sprites_ninja_sprites_Jump_ThrowL_007_png__WEBPACK_IMPORTED_MODULE_167__["default"], _assets_sprites_ninja_sprites_Jump_ThrowL_008_png__WEBPACK_IMPORTED_MODULE_168__["default"], _assets_sprites_ninja_sprites_Jump_ThrowL_009_png__WEBPACK_IMPORTED_MODULE_169__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].SLIDE_RIGHT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_Slide_000_png__WEBPACK_IMPORTED_MODULE_170__["default"], _assets_sprites_ninja_sprites_Slide_001_png__WEBPACK_IMPORTED_MODULE_171__["default"], _assets_sprites_ninja_sprites_Slide_002_png__WEBPACK_IMPORTED_MODULE_172__["default"], _assets_sprites_ninja_sprites_Slide_003_png__WEBPACK_IMPORTED_MODULE_173__["default"], _assets_sprites_ninja_sprites_Slide_004_png__WEBPACK_IMPORTED_MODULE_174__["default"], _assets_sprites_ninja_sprites_Slide_005_png__WEBPACK_IMPORTED_MODULE_175__["default"], _assets_sprites_ninja_sprites_Slide_006_png__WEBPACK_IMPORTED_MODULE_176__["default"], _assets_sprites_ninja_sprites_Slide_007_png__WEBPACK_IMPORTED_MODULE_177__["default"], _assets_sprites_ninja_sprites_Slide_008_png__WEBPACK_IMPORTED_MODULE_178__["default"], _assets_sprites_ninja_sprites_Slide_009_png__WEBPACK_IMPORTED_MODULE_179__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].SLIDE_LEFT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_SlideL_000_png__WEBPACK_IMPORTED_MODULE_180__["default"], _assets_sprites_ninja_sprites_SlideL_001_png__WEBPACK_IMPORTED_MODULE_181__["default"], _assets_sprites_ninja_sprites_SlideL_002_png__WEBPACK_IMPORTED_MODULE_182__["default"], _assets_sprites_ninja_sprites_SlideL_003_png__WEBPACK_IMPORTED_MODULE_183__["default"], _assets_sprites_ninja_sprites_SlideL_004_png__WEBPACK_IMPORTED_MODULE_184__["default"], _assets_sprites_ninja_sprites_SlideL_005_png__WEBPACK_IMPORTED_MODULE_185__["default"], _assets_sprites_ninja_sprites_SlideL_006_png__WEBPACK_IMPORTED_MODULE_186__["default"], _assets_sprites_ninja_sprites_SlideL_007_png__WEBPACK_IMPORTED_MODULE_187__["default"], _assets_sprites_ninja_sprites_SlideL_008_png__WEBPACK_IMPORTED_MODULE_188__["default"], _assets_sprites_ninja_sprites_SlideL_009_png__WEBPACK_IMPORTED_MODULE_189__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].THROW_RIGHT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_Throw_000_png__WEBPACK_IMPORTED_MODULE_190__["default"], _assets_sprites_ninja_sprites_Throw_001_png__WEBPACK_IMPORTED_MODULE_191__["default"], _assets_sprites_ninja_sprites_Throw_002_png__WEBPACK_IMPORTED_MODULE_192__["default"], _assets_sprites_ninja_sprites_Throw_003_png__WEBPACK_IMPORTED_MODULE_193__["default"], _assets_sprites_ninja_sprites_Throw_004_png__WEBPACK_IMPORTED_MODULE_194__["default"], _assets_sprites_ninja_sprites_Throw_005_png__WEBPACK_IMPORTED_MODULE_195__["default"], _assets_sprites_ninja_sprites_Throw_006_png__WEBPACK_IMPORTED_MODULE_196__["default"], _assets_sprites_ninja_sprites_Throw_007_png__WEBPACK_IMPORTED_MODULE_197__["default"], _assets_sprites_ninja_sprites_Throw_008_png__WEBPACK_IMPORTED_MODULE_198__["default"], _assets_sprites_ninja_sprites_Throw_009_png__WEBPACK_IMPORTED_MODULE_199__["default"]]);
        this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].THROW_LEFT] = new _imageBuilder__WEBPACK_IMPORTED_MODULE_210__["ImageBuilder"]([_assets_sprites_ninja_sprites_ThrowL_000_png__WEBPACK_IMPORTED_MODULE_200__["default"], _assets_sprites_ninja_sprites_ThrowL_001_png__WEBPACK_IMPORTED_MODULE_201__["default"], _assets_sprites_ninja_sprites_ThrowL_002_png__WEBPACK_IMPORTED_MODULE_202__["default"], _assets_sprites_ninja_sprites_ThrowL_003_png__WEBPACK_IMPORTED_MODULE_203__["default"], _assets_sprites_ninja_sprites_ThrowL_004_png__WEBPACK_IMPORTED_MODULE_204__["default"], _assets_sprites_ninja_sprites_ThrowL_005_png__WEBPACK_IMPORTED_MODULE_205__["default"], _assets_sprites_ninja_sprites_ThrowL_006_png__WEBPACK_IMPORTED_MODULE_206__["default"], _assets_sprites_ninja_sprites_ThrowL_007_png__WEBPACK_IMPORTED_MODULE_207__["default"], _assets_sprites_ninja_sprites_ThrowL_008_png__WEBPACK_IMPORTED_MODULE_208__["default"], _assets_sprites_ninja_sprites_ThrowL_009_png__WEBPACK_IMPORTED_MODULE_209__["default"]]);
    }
    getAnimation(animationState) {
        if (this.animations[animationState]) {
            return this.animations[animationState];
        }
        return this.animations[_constants_animationTypes__WEBPACK_IMPORTED_MODULE_211__["AnimationTypes"].IDLE_RIGHT];
    }
    getAnimationTypes() {
        return Object.keys(this.animations).map(key => {
            return key;
        });
    }
}


/***/ }),

/***/ "./src/constants/animationTypes.ts":
/*!*****************************************!*\
  !*** ./src/constants/animationTypes.ts ***!
  \*****************************************/
/*! exports provided: AnimationTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationTypes", function() { return AnimationTypes; });
class AnimationTypes {
}
AnimationTypes.IDLE_RIGHT = 'IDLE_RIGHT';
AnimationTypes.IDLE_LEFT = 'IDLE_LEFT';
AnimationTypes.ATTACK_RIGHT = 'ATTACK_RIGHT';
AnimationTypes.ATTACK_LEFT = 'ATTACK_LEFT';
AnimationTypes.RUN_RIGHT = 'RUN_RIGHT';
AnimationTypes.RUN_LEFT = 'RUN_LEFT';
AnimationTypes.CLIMB = 'CLIMB';
AnimationTypes.DEAD_RIGHT = 'DEAD_RIGHT';
AnimationTypes.DEAD_LEFT = 'DEAD_LEFT';
AnimationTypes.GLIDE_RIGHT = 'GLIDE_RIGHT';
AnimationTypes.GLIDE_LEFT = 'GLIDE_LEFT';
AnimationTypes.JUMP_RIGHT = 'JUMP_RIGHT';
AnimationTypes.JUMP_LEFT = 'JUMP_LEFT';
AnimationTypes.JUMP_ATTACK_RIGHT = 'JUMP_ATTACK_RIGHT';
AnimationTypes.JUMP_ATTACK_LEFT = 'JUMP_ATTACK_LEFT';
AnimationTypes.JUMP_THROW_RIGHT = 'JUMP_THROW_RIGHT';
AnimationTypes.JUMP_THROW_LEFT = 'JUMP_THROW_LEFT';
AnimationTypes.SLIDE_RIGHT = 'SLIDE_RIGHT';
AnimationTypes.SLIDE_LEFT = 'SLIDE_LEFT';
AnimationTypes.THROW_RIGHT = 'THROW_RIGHT';
AnimationTypes.THROW_LEFT = 'THROW_LEFT';


/***/ }),

/***/ "./src/constants/menuOptions.ts":
/*!**************************************!*\
  !*** ./src/constants/menuOptions.ts ***!
  \**************************************/
/*! exports provided: MenuOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuOptions", function() { return MenuOptions; });
class MenuOptions {
    static getOptionList() {
        return [
            this.GRID,
            this.COORDINATES,
            this.SCREEN_EDGE,
            this.HITBOX,
            this.DETECTION_BOX,
            this.DETECTED_TILES,
            this.COLLISION_TILES,
        ];
    }
}
MenuOptions.GRID = 'Grid';
MenuOptions.COORDINATES = 'Coordinates';
MenuOptions.SCREEN_EDGE = 'Screen Edge';
MenuOptions.HITBOX = 'Hitbox';
MenuOptions.DETECTION_BOX = 'Detection Box';
MenuOptions.DETECTED_TILES = 'Detected Tiles';
MenuOptions.COLLISION_TILES = 'Collision Tiles';


/***/ }),

/***/ "./src/debug/builderMode.ts":
/*!**********************************!*\
  !*** ./src/debug/builderMode.ts ***!
  \**********************************/
/*! exports provided: BuilderMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderMode", function() { return BuilderMode; });
/* harmony import */ var _states_rootState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/rootState */ "./src/states/rootState.ts");
/* harmony import */ var _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilites/renderingUtilities */ "./src/utilites/renderingUtilities.ts");
/* harmony import */ var _objects_stageTile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/stageTile */ "./src/objects/stageTile.ts");
/* harmony import */ var _debugMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debugMode */ "./src/debug/debugMode.ts");




class BuilderMode {
    static handleMouseClick(evt) {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.handleMouseClick) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.clickedPosition = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].toGameCoordinates({ x: evt.clientX, y: evt.clientY });
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.clickedGridCoords = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].toGameCoordsImgRoot(_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.clickedPosition);
            if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.removingTiles) {
                this.deleteTileFromStage();
            }
            else {
                this.addTileToStage();
            }
        }
    }
    static addBuilderButton() {
        const builderBtn = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].nodeBuilder('button', 'Builder', ['button', 'builderBtn']);
        builderBtn.addEventListener('click', () => this.toggleBuilder());
        _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].appendNodeToBody(builderBtn);
    }
    static removeBuilderButton() {
        const btn = document.querySelector('.builderBtn');
        if (btn) {
            btn.remove();
        }
    }
    static activateBuilderButton() {
        const btn = document.querySelector('.builderBtn');
        if (btn) {
            btn.classList.add('active');
        }
    }
    static deactivateBuilderButton() {
        const btn = document.querySelector('.builderBtn');
        if (btn) {
            btn.classList.remove('active');
        }
    }
    static toggleBuilder() {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.builderMode) {
            this.closeBuilderMode();
        }
        else {
            this.openBuilderMode();
        }
    }
    static openBuilderMode() {
        _debugMode__WEBPACK_IMPORTED_MODULE_3__["DebugMode"].resetState();
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.builderMode = true;
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.handleMouseClick = true;
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.builderEngine.start();
        this.activateBuilderButton();
        this.addBuilderMenu();
        this.openTileSelector();
    }
    static closeBuilderMode() {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.builderMode) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.builderMode = false;
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.builderEngine.stop();
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.handleMouseClick = false;
            this.deactivateBuilderButton();
            this.removeBuilderMenu();
            this.removeTileSelector();
            this.deleteTileMode(false);
        }
    }
    static addBuilderMenu() {
        const builderMenu = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].nodeBuilder('content', '<h1 class="title">Builder Menu</h1>', ['builder-mode']);
        this.addPlatformTileOptions(builderMenu);
        _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].appendNodeToBody(builderMenu);
    }
    static removeBuilderMenu() {
        const builderMode = document.querySelector('.builder-mode');
        if (builderMode) {
            builderMode.remove();
        }
    }
    static addPlatformTileOptions(builder) {
        const wrapper = this.addWrapper(builder, 'Platform Tiles');
        const [option1, checkbox1] = this.addCheckbox('Toggle Tile Selector');
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelectorCheckbox = checkbox1;
        this.addTileCheckboxHandling(checkbox1);
        const [option2, checkbox2] = this.addCheckbox('Remove Tiles');
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.removingTilesCheckbox = checkbox2;
        this.addDeleteTileCheckboxHandling(checkbox2);
        const [option3, button] = this.addButton('Clear Stage');
        this.addClearStageClickHandling(button);
        _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].appendChildNodes(wrapper, [option1, option2, option3]);
    }
    static addWrapper(parentNode, category) {
        const wrapper = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].nodeBuilder('div', '', ['wrapper']);
        const title = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].nodeBuilder('h3', category);
        wrapper.appendChild(title);
        parentNode.appendChild(wrapper);
        return wrapper;
    }
    static addCheckbox(name) {
        const label = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].nodeBuilder('label', `${name}`);
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        label.appendChild(checkbox);
        return [label, checkbox];
    }
    static addButton(name) {
        const label = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].nodeBuilder('label', `${name}`);
        const button = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].nodeBuilder('button', `+`);
        label.appendChild(button);
        return [label, button];
    }
    static addTileCheckboxHandling(checkbox) {
        checkbox.addEventListener('change', () => {
            this.toggleTileSelector();
        });
    }
    static addDeleteTileCheckboxHandling(checkbox) {
        checkbox.addEventListener('change', () => {
            if (!_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.removingTiles) {
                this.deleteTileMode(true);
            }
            else {
                this.deleteTileMode(false);
            }
        });
    }
    static addClearStageClickHandling(button) {
        button.addEventListener('click', () => {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].stageState.tiles.forEach((tile) => {
                tile.lookupValue = '00';
            });
        });
    }
    static openTileSelector() {
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelectorOpen = true;
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelectorCheckbox.checked = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelectorOpen;
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelector = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].nodeBuilder('content', '<h1 class="title">Tile Selector</h1>', ['builder--tile-selector']);
        this.addTiles(_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelector);
        _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].appendNodeToBody(_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelector);
    }
    static removeTileSelector() {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelector) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelector.remove();
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelector = null;
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelectorOpen = false;
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelectorCheckbox = null;
        }
    }
    static toggleTileSelector() {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelectorOpen) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelector.classList.add('hidden');
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelectorOpen = false;
        }
        else {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelector.classList.remove('hidden');
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelectorOpen = true;
        }
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelectorCheckbox.checked = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.tileSelectorOpen;
    }
    static addTiles(tileSelector) {
        let imgRowWrapper;
        for (let i = 1; i <= 18; i++) {
            const img = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].tileSetState.imageMap.get(i);
            img.classList.add('builder--tile-image');
            img.addEventListener('click', (evt) => this.selectedTile(evt));
            img.id = `img-${i}`;
            img.alt = `Tile image ${i}`;
            if (i % 3 === 1) {
                imgRowWrapper = document.createElement('div');
                imgRowWrapper.classList.add('tile-selector-img-row');
                tileSelector.appendChild(imgRowWrapper);
            }
            imgRowWrapper.appendChild(img);
        }
        this.setActiveTile(_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].tileSetState.imageMap.get(1));
    }
    static getSelectedTileLookUpValue(tile) {
        const tileId = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.selectedTile.id;
        return tileId.split('-')[1];
    }
    static setActiveTile(tile) {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.selectedTile) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.selectedTile.classList.remove('active');
        }
        tile.classList.add('active');
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.selectedTile = tile;
    }
    static selectedTile(evt) {
        this.setActiveTile(evt.currentTarget);
    }
    static addTileToStage() {
        const col = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.clickedGridCoords.x;
        const row = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.clickedGridCoords.y;
        const lookUpValue = this.getSelectedTileLookUpValue(_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.selectedTile);
        const gridId = `${col}-${row}`;
        const stageTile = new _objects_stageTile__WEBPACK_IMPORTED_MODULE_2__["StageTile"](row, col, lookUpValue);
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].stageState.tiles.set(gridId, stageTile);
    }
    static deleteTileFromStage() {
        const col = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.clickedGridCoords.x;
        const row = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.clickedGridCoords.y;
        const lookUpValue = '00';
        const gridId = `${col}-${row}`;
        const stageTile = new _objects_stageTile__WEBPACK_IMPORTED_MODULE_2__["StageTile"](row, col, lookUpValue);
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].stageState.tiles.set(gridId, stageTile);
    }
    static deleteTileMode(enabled) {
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.removingTiles = enabled;
        const canvas = document.querySelector('#canvas-fg');
        if (enabled) {
            canvas.classList.add('removing-tiles');
        }
        else {
            canvas.classList.remove('removing-tiles');
        }
    }
    static cleanup() {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.builderMode) {
            this.closeBuilderMode();
            this.removeBuilderButton();
        }
    }
}


/***/ }),

/***/ "./src/debug/debugMenu.ts":
/*!********************************!*\
  !*** ./src/debug/debugMenu.ts ***!
  \********************************/
/*! exports provided: DebugMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugMenu", function() { return DebugMenu; });
/* harmony import */ var _constants_menuOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/menuOptions */ "./src/constants/menuOptions.ts");
/* harmony import */ var _states_rootState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../states/rootState */ "./src/states/rootState.ts");
/* harmony import */ var _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilites/renderingUtilities */ "./src/utilites/renderingUtilities.ts");
/* harmony import */ var _debugMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debugMode */ "./src/debug/debugMode.ts");




class DebugMenu {
    static addMenuButton() {
        const menuBtn = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].nodeBuilder('button', 'Debug', ['button', 'menuBtn']);
        menuBtn.addEventListener('click', () => this.toggleMenu());
        _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].appendNodeToBody(menuBtn);
    }
    static removeMenuButton() {
        const menuBtn = document.querySelector('.menuBtn');
        menuBtn.remove();
    }
    static activateMenuButton() {
        const btn = document.querySelector('.menuBtn');
        btn.classList.add('active');
    }
    static deactivateMenuButton() {
        const btn = document.querySelector('.menuBtn');
        btn.classList.remove('active');
    }
    static toggleMenu() {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].debugState.menuOpen) {
            this.closeMenu();
        }
        else {
            this.openMenu();
        }
    }
    static openMenu() {
        _debugMode__WEBPACK_IMPORTED_MODULE_3__["DebugMode"].resetState();
        _states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].debugState.menuOpen = true;
        this.activateMenuButton();
        const menu = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].nodeBuilder('content', '<h1 class="title">Debug Menu</h1>', ['menu']);
        this.addMenuOptions(menu);
        _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].appendNodeToBody(menu);
        this.addSaveButton();
    }
    static closeMenu() {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].debugState.menuOpen) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].debugState.menuOpen = false;
            this.deactivateMenuButton();
            const menu = document.querySelector('.menu');
            menu.remove();
            const saveBtn = document.querySelector('.saveBtn');
            saveBtn.remove();
        }
    }
    static addSaveButton() {
        const saveBtn = document.createElement('button');
        saveBtn.classList.add('button', 'saveBtn');
        saveBtn.innerHTML = 'Save';
        saveBtn.addEventListener('click', () => this.saveMenuOptions());
        const body = document.querySelector('body');
        body.appendChild(saveBtn);
    }
    static saveMenuOptions() {
        const menuOptionsJson = JSON.stringify(_states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].debugState.menuOptions);
        localStorage.setItem('menuOptions', menuOptionsJson);
    }
    static removeSaveButton() {
        const saveBtn = document.querySelector('.saveBtn');
        saveBtn.remove();
    }
    static addMenuOptions(menu) {
        this.addMenuOption(menu, _constants_menuOptions__WEBPACK_IMPORTED_MODULE_0__["MenuOptions"].GRID);
        this.addMenuOption(menu, _constants_menuOptions__WEBPACK_IMPORTED_MODULE_0__["MenuOptions"].COORDINATES);
        this.addMenuOption(menu, _constants_menuOptions__WEBPACK_IMPORTED_MODULE_0__["MenuOptions"].HITBOX);
        this.addMenuOption(menu, _constants_menuOptions__WEBPACK_IMPORTED_MODULE_0__["MenuOptions"].DETECTION_BOX);
        this.addMenuOption(menu, _constants_menuOptions__WEBPACK_IMPORTED_MODULE_0__["MenuOptions"].DETECTED_TILES);
        this.addMenuOption(menu, _constants_menuOptions__WEBPACK_IMPORTED_MODULE_0__["MenuOptions"].COLLISION_TILES);
        this.addMenuOption(menu, _constants_menuOptions__WEBPACK_IMPORTED_MODULE_0__["MenuOptions"].SCREEN_EDGE);
    }
    static addMenuOption(menu, name) {
        const wrapper = this.addWrapper(name);
        const checkBox = this.addEnabledCheckBox(name);
        const colorInput = this.addColorInput(name);
        const lineWidthRange = this.addLineWidthRange(name);
        wrapper.appendChild(checkBox);
        wrapper.appendChild(colorInput);
        if (lineWidthRange) {
            wrapper.appendChild(lineWidthRange);
        }
        menu.appendChild(wrapper);
        return menu;
    }
    static addWrapper(name) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        const title = document.createElement('h3');
        title.innerText = name;
        wrapper.appendChild(title);
        return wrapper;
    }
    static addEnabledCheckBox(name) {
        const label = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].nodeBuilder('label', 'Enabled');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = _states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].debugState.menuOptions[name].enabled;
        checkbox.addEventListener('change', () => {
            _states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].debugState.menuOptions[name].enabled = checkbox.checked;
        });
        label.appendChild(checkbox);
        return label;
    }
    static addColorInput(name) {
        const label = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].nodeBuilder('label', 'Color');
        const input = document.createElement('input');
        input.type = 'text';
        input.value = _states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].debugState.menuOptions[name].color;
        input.addEventListener('keyup', () => {
            _states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].debugState.menuOptions[name].color = input.value;
        });
        label.appendChild(input);
        return label;
    }
    static addLineWidthRange(name) {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].debugState.menuOptions[name].lineWidth) {
            const label = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].nodeBuilder('label', 'Line Width');
            const input = document.createElement('input');
            input.type = 'range';
            input.min = '1';
            input.max = '10';
            input.value = _states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].debugState.menuOptions[name].lineWidth + '';
            input.addEventListener('change', () => {
                _states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].debugState.menuOptions[name].lineWidth = Number(input.value);
                console.log('testing');
            });
            label.appendChild(input);
            return label;
        }
        return null;
    }
    static cleanup() {
        this.removeMenuButton();
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].debugState.menuOpen) {
            this.closeMenu();
        }
    }
}


/***/ }),

/***/ "./src/debug/debugMode.ts":
/*!********************************!*\
  !*** ./src/debug/debugMode.ts ***!
  \********************************/
/*! exports provided: DebugMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugMode", function() { return DebugMode; });
/* harmony import */ var _states_rootState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/rootState */ "./src/states/rootState.ts");
/* harmony import */ var _debugMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debugMenu */ "./src/debug/debugMenu.ts");
/* harmony import */ var _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilites/renderingUtilities */ "./src/utilites/renderingUtilities.ts");
/* harmony import */ var _constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/menuOptions */ "./src/constants/menuOptions.ts");
/* harmony import */ var _builderMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./builderMode */ "./src/debug/builderMode.ts");
/* harmony import */ var _propertiesMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./propertiesMenu */ "./src/debug/propertiesMenu.ts");






class DebugMode {
    static draw() {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.debugMode) {
            if (!_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.hasButtons) {
                _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.hasButtons = true;
                _debugMenu__WEBPACK_IMPORTED_MODULE_1__["DebugMenu"].addMenuButton();
                _propertiesMenu__WEBPACK_IMPORTED_MODULE_5__["PropertiesMenu"].addPropertiesButton();
                _builderMode__WEBPACK_IMPORTED_MODULE_4__["BuilderMode"].addBuilderButton();
            }
            const position = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.position;
            const gameUnitDimensions = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.gameUnitDimensions;
            if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].GRID].enabled) {
                const startingRow = Math.floor(position.y);
                const endingRow = Math.ceil(position.y + gameUnitDimensions.h);
                const startingCol = Math.floor(position.x);
                const endingCol = Math.floor(position.x + gameUnitDimensions.w);
                for (let row = startingRow; row <= endingRow; row++) {
                    for (let col = startingCol; col <= endingCol; col++) {
                        this.drawGrid(row, col);
                        this.drawGridCoords(row, col);
                    }
                }
            }
            if (!_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].builderState.builderMode) {
                this.drawDebugGraphics();
            }
        }
        else if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.hasButtons) {
            this.debugModeCleanUp();
        }
    }
    static drawDebugGraphics() {
        this.drawScreenEdge();
        this.drawDetectedTileOutlines();
        this.drawCollisionDetectionBox();
        this.drawHitbox();
        this.drawCollisionsOutlines();
        this.resetCtx();
    }
    static drawGrid(row, col) {
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.strokeStyle = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].GRID].color;
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.lineWidth = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].GRID].lineWidth;
        const position = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].toScreenCoordinates({ x: col, y: row });
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.strokeRect(position.x, position.y, _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].toPixels(1), _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].toPixels(1));
    }
    static drawGridCoords(row, col) {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].COORDINATES].enabled) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.fillStyle = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].COORDINATES].color;
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.font = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].COORDINATES].font;
            const { x, y } = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].toScreenCoordinates({ x: col, y: row });
            const pixelOffset = 4;
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.fillText(`(${col}, ${row})`, x + pixelOffset, y - pixelOffset);
        }
    }
    static drawScreenEdge() {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].SCREEN_EDGE].enabled) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.strokeStyle = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].SCREEN_EDGE].color;
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.lineWidth = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].SCREEN_EDGE].lineWidth;
            const view = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.screenPixelDimensions;
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.lineWidth = 2;
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.beginPath();
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.rect(0, 0, view.w, view.h);
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.stroke();
        }
    }
    static drawDetectedTileOutlines() {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].DETECTED_TILES].enabled) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.strokeStyle = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].DETECTED_TILES].color;
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.lineWidth = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].DETECTED_TILES].lineWidth;
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].stageState.detectionTiles.forEach((tile) => {
                const dim = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].toPixels(1);
                const pos = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].toScreenCoordinates({ x: tile.col, y: tile.row });
                _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.strokeRect(pos.x, pos.y, dim, dim);
            });
        }
    }
    static drawCollisionDetectionBox() {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].DETECTION_BOX].enabled) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.strokeStyle = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].DETECTION_BOX].color;
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.lineWidth = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].DETECTION_BOX].lineWidth;
            const box = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].ninjaState.collisionDetectionBox;
            const { x, y } = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].toScreenCoordinates(box.position);
            const { w, h } = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].toScreenDimensions(box.dimensions);
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.strokeRect(x, y, w, h);
        }
    }
    static drawHitbox() {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].HITBOX].enabled) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.strokeStyle = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].HITBOX].color;
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.lineWidth = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].HITBOX].lineWidth;
            const box = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].ninjaState.hitbox;
            const { x, y } = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].toScreenCoordinates(box.position);
            const { w, h } = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].toScreenDimensions(box.dimensions);
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.strokeRect(x, y, w, h);
        }
    }
    static drawCollisionsOutlines() {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].COLLISION_TILES].enabled) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.strokeStyle = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].COLLISION_TILES].color;
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.lineWidth = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_3__["MenuOptions"].COLLISION_TILES].lineWidth;
            const dim = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].toPixels(1);
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].stageState.collisionTiles.forEach((tile) => {
                const tilePos = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].toScreenCoordinates({ x: tile.col, y: tile.row });
                _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.strokeRect(tilePos.x, tilePos.y, dim, dim);
            });
        }
    }
    static resetCtx() {
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.strokeStyle = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.defaultColor;
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.lineWidth = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.defaultLineWidth;
    }
    static handleMouseMove(evt) {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.handleMouseMove) {
            const { x, y } = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].toGameCoordinates({ x: evt.clientX, y: evt.clientY });
            // console.log(`(${Math.floor(x)}, ${Math.floor(y)})`);
        }
    }
    // TODO: Move this with the properties
    static addFramesPerSecondOption() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        const fpsLabel = document.createElement('label');
        fpsLabel.innerHTML = 'FPS &nbsp;';
        const fpsInput = document.createElement('input');
        fpsInput.type = 'range';
        fpsInput.max = '60';
        fpsInput.min = '0';
        fpsInput.value = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.framesPerSecond.toString();
        fpsInput.addEventListener('change', () => {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.framesPerSecond = Number(fpsInput.value);
        });
        fpsLabel.appendChild(fpsInput);
        wrapper.appendChild(fpsLabel);
        return wrapper;
    }
    static resetState() {
        _debugMenu__WEBPACK_IMPORTED_MODULE_1__["DebugMenu"].closeMenu();
        _propertiesMenu__WEBPACK_IMPORTED_MODULE_5__["PropertiesMenu"].closePropertyMenu();
        _builderMode__WEBPACK_IMPORTED_MODULE_4__["BuilderMode"].closeBuilderMode();
    }
    static debugModeCleanUp() {
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.hasButtons = false;
        _debugMenu__WEBPACK_IMPORTED_MODULE_1__["DebugMenu"].cleanup();
        _propertiesMenu__WEBPACK_IMPORTED_MODULE_5__["PropertiesMenu"].cleanup();
        _builderMode__WEBPACK_IMPORTED_MODULE_4__["BuilderMode"].cleanup();
    }
}


/***/ }),

/***/ "./src/debug/menuOption.ts":
/*!*********************************!*\
  !*** ./src/debug/menuOption.ts ***!
  \*********************************/
/*! exports provided: MenuOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuOption", function() { return MenuOption; });
class MenuOption {
    constructor(name, color = 'black') {
        this.name = name;
        this.enabled = false;
        this.color = color;
        this.lineWidth = 1;
        this.font = '12px serif';
    }
}


/***/ }),

/***/ "./src/debug/propertiesMenu.ts":
/*!*************************************!*\
  !*** ./src/debug/propertiesMenu.ts ***!
  \*************************************/
/*! exports provided: PropertiesMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesMenu", function() { return PropertiesMenu; });
/* harmony import */ var _states_rootState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/rootState */ "./src/states/rootState.ts");
/* harmony import */ var _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilites/renderingUtilities */ "./src/utilites/renderingUtilities.ts");
/* harmony import */ var _debugMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debugMode */ "./src/debug/debugMode.ts");



class PropertiesMenu {
    static addPropertiesButton() {
        const propertiesBtn = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].nodeBuilder('button', 'Properties', ['button', 'propertiesBtn']);
        propertiesBtn.addEventListener('click', () => this.toggleProperties());
        _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].appendNodeToBody(propertiesBtn);
    }
    static removePropertiesButton() {
        const btn = document.querySelector('.propertiesBtn');
        btn.remove();
    }
    static activatePropertiesButton() {
        const btn = document.querySelector('.propertiesBtn');
        btn.classList.add('active');
    }
    static deactivatePropertiesButton() {
        const btn = document.querySelector('.propertiesBtn');
        btn.classList.remove('active');
    }
    static toggleProperties() {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.propertiesOpen) {
            this.closePropertyMenu();
        }
        else {
            this.openPropertyMenu();
        }
    }
    static openPropertyMenu() {
        _debugMode__WEBPACK_IMPORTED_MODULE_2__["DebugMode"].resetState();
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.propertiesOpen = true;
        this.activatePropertiesButton();
        const menu = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].nodeBuilder('content', '<h1 class="title">Properties Menu</h1>', ['prop-menu']);
        this.addProperties(menu);
        _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].appendNodeToBody(menu);
    }
    static closePropertyMenu() {
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.propertiesOpen) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.propertiesOpen = false;
            this.deactivatePropertiesButton();
            const menu = document.querySelector('.prop-menu');
            menu.remove();
        }
    }
    static addProperties(menu) {
        const input1 = this.addProperty(menu, 'Gravity', _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].ninjaState.gravity);
        input1.addEventListener('input', (evt) => {
            console.log(evt.target.value);
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].ninjaState.gravity = Number(evt.target.value);
        });
        const input2 = this.addProperty(menu, 'Movement Speed', _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].ninjaState.movementSpeed);
        input2.addEventListener('input', (evt) => {
            console.log(evt.target.value);
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].ninjaState.movementSpeed = Number(evt.target.value);
        });
        const input3 = this.addProperty(menu, 'Jump Speed', _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].ninjaState.jumpSpeed);
        input3.addEventListener('input', (evt) => {
            console.log(evt.target.value);
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].ninjaState.jumpSpeed = Number(evt.target.value);
        });
    }
    static addProperty(menu, name, value) {
        const wrapper = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].nodeBuilder('div', '', ['wrapper']);
        const input = this.addInput(name, value);
        wrapper.appendChild(input);
        menu.appendChild(wrapper);
        return input;
    }
    static addInput(name, value) {
        const label = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].nodeBuilder('label', name);
        const input = document.createElement('input');
        input.type = 'number';
        input.step = '0.01';
        input.value = value + '';
        label.appendChild(input);
        return label;
    }
    static cleanup() {
        this.removePropertiesButton();
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.propertiesOpen) {
            this.closePropertyMenu();
        }
    }
}


/***/ }),

/***/ "./src/engines/builderModeEngine.ts":
/*!******************************************!*\
  !*** ./src/engines/builderModeEngine.ts ***!
  \******************************************/
/*! exports provided: BuilderModeEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderModeEngine", function() { return BuilderModeEngine; });
/* harmony import */ var _states_rootState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/rootState */ "./src/states/rootState.ts");
/* harmony import */ var _objects_stage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/stage */ "./src/objects/stage.ts");
/* harmony import */ var _objects_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/background */ "./src/objects/background.ts");
/* harmony import */ var _debug_debugMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../debug/debugMode */ "./src/debug/debugMode.ts");
/* harmony import */ var _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilites/renderingUtilities */ "./src/utilites/renderingUtilities.ts");





class BuilderModeEngine {
    constructor() { }
    start() {
        _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_4__["RenderingUtilities"].pauseGame(true);
        this.running = true;
        this.run();
    }
    run() {
        if (this.running) {
            setTimeout(() => {
                _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_4__["RenderingUtilities"].refreshCanvas();
                _objects_background__WEBPACK_IMPORTED_MODULE_2__["Background"].draw();
                _objects_stage__WEBPACK_IMPORTED_MODULE_1__["Stage"].draw();
                _debug_debugMode__WEBPACK_IMPORTED_MODULE_3__["DebugMode"].draw();
                this.moveStage(_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.keys);
                this.run();
            }, 1000 / _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.defaultFramesPerSecond);
        }
    }
    stop() {
        _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_4__["RenderingUtilities"].pauseGame(false);
        this.running = false;
    }
    moveStage({ up, down, left, right }) {
        if (up) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.position.y += 0.2;
        }
        if (down) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.position.y -= 0.2;
        }
        if (left) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.position.x -= 0.2;
        }
        if (right) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.position.x += 0.2;
        }
    }
}


/***/ }),

/***/ "./src/engines/physicsEngine.ts":
/*!**************************************!*\
  !*** ./src/engines/physicsEngine.ts ***!
  \**************************************/
/*! exports provided: PhysicsEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicsEngine", function() { return PhysicsEngine; });
/* harmony import */ var _states_rootState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/rootState */ "./src/states/rootState.ts");

class PhysicsEngine {
    constructor() {
    }
    run() {
        this.detectCollision();
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.assets.forEach((asset) => {
            asset.updateProperties(_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.keys);
        });
    }
    detectCollision() {
        this.getTilesInDetectionArea();
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].stageState.collisionTiles = [];
        const tilesToCheck = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].stageState.detectionTiles;
        const hitbox = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].ninjaState.hitbox;
        for (const tile of tilesToCheck) {
            if (hitbox.position.x <= tile.col + 1.0 && // TL.x of hitbox < TR.x of tile
                hitbox.position.x + hitbox.dimensions.w >= tile.col && // TR.x of hitbox > TL.x of tile
                hitbox.position.y + 1 >= tile.row && // TL.y of hitbox < BL.y of tile
                hitbox.position.y - hitbox.dimensions.h <= tile.row) { // BL.y of hitbox > TL.y of tile
                _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].stageState.collisionTiles.push(tile);
            }
        }
    }
    getDetectionArea() {
        const box = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].ninjaState.collisionDetectionBox;
        this.detectionArea = {
            topLeft: box.position,
            topRight: {
                x: box.position.x + box.dimensions.w,
                y: box.position.y
            },
            bottomLeft: {
                x: box.position.x,
                y: box.position.y - box.dimensions.h
            },
            bottomRight: {
                x: box.position.x + box.dimensions.w,
                y: box.position.y - box.dimensions.h
            }
        };
    }
    getTilesInDetectionArea() {
        this.getDetectionArea();
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].stageState.detectionTiles = [];
        const topLeftY = Math.floor(this.detectionArea.topLeft.y);
        const bottomLeftY = Math.floor(this.detectionArea.bottomLeft.y);
        const topLeftX = Math.floor(this.detectionArea.topLeft.x);
        const topRightX = Math.floor(this.detectionArea.topRight.x);
        for (let row = bottomLeftY + 1; row <= topLeftY + 1; row++) {
            for (let col = topLeftX; col <= topRightX; col++) {
                if (row < 0 || col < 0) {
                    continue;
                }
                const tile = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].stageState.tiles.get(`${col}-${row}`);
                if (tile && tile.lookupValue !== '00') {
                    _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].stageState.detectionTiles.push(tile);
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/engines/renderingEngine.ts":
/*!****************************************!*\
  !*** ./src/engines/renderingEngine.ts ***!
  \****************************************/
/*! exports provided: RenderingEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderingEngine", function() { return RenderingEngine; });
/* harmony import */ var _states_rootState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/rootState */ "./src/states/rootState.ts");
/* harmony import */ var _objects_stage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/stage */ "./src/objects/stage.ts");
/* harmony import */ var _objects_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/background */ "./src/objects/background.ts");
/* harmony import */ var _debug_debugMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../debug/debugMode */ "./src/debug/debugMode.ts");
/* harmony import */ var _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilites/renderingUtilities */ "./src/utilites/renderingUtilities.ts");





class RenderingEngine {
    constructor() { }
    run() {
        _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_4__["RenderingUtilities"].refreshCanvas();
        _objects_background__WEBPACK_IMPORTED_MODULE_2__["Background"].draw();
        _objects_stage__WEBPACK_IMPORTED_MODULE_1__["Stage"].draw();
        for (const asset of _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.assets) {
            asset.updateAnimation(_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.keys);
        }
        _debug_debugMode__WEBPACK_IMPORTED_MODULE_3__["DebugMode"].draw();
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objects_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects/game */ "./src/objects/game.ts");

const game = new _objects_game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
const { canvas, bgCanvas } = game.getCanvas();
document.body.prepend(bgCanvas, canvas);
game.start();


/***/ }),

/***/ "./src/objects/background.ts":
/*!***********************************!*\
  !*** ./src/objects/background.ts ***!
  \***********************************/
/*! exports provided: Background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony import */ var _states_rootState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/rootState */ "./src/states/rootState.ts");
/* harmony import */ var _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilites/renderingUtilities */ "./src/utilites/renderingUtilities.ts");


class Background {
    static draw() {
        const { width } = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].backgroundState.bgCanvas.canvasElement;
        const scale = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].backgroundState.bgImage.height / _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.gameUnitDimensions.h;
        const { w, h } = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].toScreenDimensions(this.getSize(scale));
        for (let dx = 0; dx < width / w; dx++) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].backgroundState.ctx.drawImage(_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].backgroundState.bgImage, dx * w, 0, w, h);
        }
    }
    static getSize(scale) {
        return {
            w: _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].backgroundState.bgImage.width / scale,
            h: _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].backgroundState.bgImage.height / scale
        };
    }
}


/***/ }),

/***/ "./src/objects/canvas.ts":
/*!*******************************!*\
  !*** ./src/objects/canvas.ts ***!
  \*******************************/
/*! exports provided: CanvasElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasElement", function() { return CanvasElement; });
class CanvasElement {
    constructor(width, height, id) {
        this.canvasElement = document.createElement('canvas');
        this.canvasElement.id = id;
        this.canvasElement.width = width;
        this.canvasElement.height = height;
        this.ctx = this.canvasElement.getContext('2d');
    }
}


/***/ }),

/***/ "./src/objects/game.ts":
/*!*****************************!*\
  !*** ./src/objects/game.ts ***!
  \*****************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _states_rootState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/rootState */ "./src/states/rootState.ts");
/* harmony import */ var _engines_physicsEngine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../engines/physicsEngine */ "./src/engines/physicsEngine.ts");
/* harmony import */ var _engines_renderingEngine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../engines/renderingEngine */ "./src/engines/renderingEngine.ts");
/* harmony import */ var _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilites/renderingUtilities */ "./src/utilites/renderingUtilities.ts");
/* harmony import */ var _debug_debugMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../debug/debugMode */ "./src/debug/debugMode.ts");
/* harmony import */ var _ninja__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ninja */ "./src/objects/ninja.ts");
/* harmony import */ var _debug_builderMode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../debug/builderMode */ "./src/debug/builderMode.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");








class Game {
    constructor() {
        this.state = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState;
        this.state.assets = [new _ninja__WEBPACK_IMPORTED_MODULE_5__["Ninja"]()];
        this.state.renderingEngine = new _engines_renderingEngine__WEBPACK_IMPORTED_MODULE_2__["RenderingEngine"]();
        this.state.physicsEngine = new _engines_physicsEngine__WEBPACK_IMPORTED_MODULE_1__["PhysicsEngine"]();
        _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_3__["RenderingUtilities"].setDimensions();
    }
    parseKey(key, pressed) {
        switch (key) {
            case 'ArrowUp':
            case 'w':
            case 'W':
                if (pressed && !this.state.keys.up || !pressed && this.state.keys.up) {
                    this.state.keys.up = pressed;
                }
                break;
            case 'ArrowDown':
            case 's':
            case 'S':
                if (pressed && !this.state.keys.down || !pressed && this.state.keys.down) {
                    this.state.keys.down = pressed;
                }
                break;
            case 'ArrowLeft':
            case 'a':
            case 'A':
                if (pressed && !this.state.keys.left || !pressed && this.state.keys.left) {
                    this.state.keys.left = pressed;
                }
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
                if (pressed && !this.state.keys.right || !pressed && this.state.keys.right) {
                    this.state.keys.right = pressed;
                }
                break;
            case ' ':
                if (pressed && !this.state.keys.space || !pressed && this.state.keys.space) {
                    this.state.keys.space = pressed;
                }
                break;
            case 'Shift':
                if (pressed && !this.state.keys.shift || !pressed && this.state.keys.shift) {
                    this.state.keys.shift = pressed;
                }
                break;
            case 'F9':
                if (pressed) {
                    _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.debugMode = !_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].debugState.debugMode;
                }
                break;
            case 'Escape':
                if (pressed) {
                    const paused = !_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.paused;
                    _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_3__["RenderingUtilities"].pauseGame(paused);
                }
                break;
        }
    }
    getCanvas() {
        return { canvas: _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.canvasElement, bgCanvas: _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].backgroundState.bgCanvas.canvasElement };
    }
    run() {
        // TODO: Division is costly, better we calculate this only when the fps changes
        const delay = this.state.framesPerSecond > 0 ? 1000 / this.state.framesPerSecond : 0;
        this.state.paused = delay <= 0;
        setTimeout(() => {
            if (!this.state.paused) {
                this.state.renderingEngine.run();
                this.state.physicsEngine.run();
            }
            this.run();
        }, delay);
    }
    start() {
        document.addEventListener('keydown', (evt) => this.parseKey(evt.key, true));
        document.addEventListener('keyup', (evt) => this.parseKey(evt.key, false));
        const canvas = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.canvasElement;
        canvas.addEventListener('mousemove', (evt) => _debug_debugMode__WEBPACK_IMPORTED_MODULE_4__["DebugMode"].handleMouseMove(evt));
        canvas.addEventListener('click', (evt) => _debug_builderMode__WEBPACK_IMPORTED_MODULE_6__["BuilderMode"].handleMouseClick(evt));
        window.addEventListener('resize', (ev => {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.canvasElement.height = innerHeight;
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.canvasElement.width = innerWidth;
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].backgroundState.bgCanvas.canvasElement.height = innerHeight;
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].backgroundState.bgCanvas.canvasElement.width = innerWidth;
            _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_3__["RenderingUtilities"].setDimensions();
            if (this.state.paused) {
                this.state.renderingEngine.run();
            }
        }));
        window.cycleFrames = (n) => _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_3__["RenderingUtilities"].cycleFrames(n);
        window.pauseGame = (pause) => _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_3__["RenderingUtilities"].pauseGame(pause);
        this.run();
    }
}


/***/ }),

/***/ "./src/objects/ninja.ts":
/*!******************************!*\
  !*** ./src/objects/ninja.ts ***!
  \******************************/
/*! exports provided: Ninja */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ninja", function() { return Ninja; });
/* harmony import */ var _constants_animationTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/animationTypes */ "./src/constants/animationTypes.ts");
/* harmony import */ var _states_rootState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../states/rootState */ "./src/states/rootState.ts");
/* harmony import */ var _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilites/renderingUtilities */ "./src/utilites/renderingUtilities.ts");
/* harmony import */ var _utilites_collisionUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilites/collisionUtilities */ "./src/utilites/collisionUtilities.ts");




class Ninja {
    constructor() {
        this.state = _states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].ninjaState;
    }
    updateProperties(keys) {
        this.updatePosition(keys);
    }
    updateAnimation() {
        this.updateSprite();
        this.draw();
    }
    updatePosition({ up, right, left, down }) {
        this.checkIfIdle(right, left);
        const velocity = { dx: 0, dy: this.state.velocity.dy };
        if (up && !this.state.jumping && !this.state.jumpUsed) {
            this.state.jumping = true;
            this.state.currentFrame = -1;
            this.state.currentState = this.state.movingRight ? _constants_animationTypes__WEBPACK_IMPORTED_MODULE_0__["AnimationTypes"].JUMP_RIGHT : _constants_animationTypes__WEBPACK_IMPORTED_MODULE_0__["AnimationTypes"].JUMP_LEFT;
            velocity.dy += this.state.jumpSpeed;
        }
        if (right) {
            this.state.movingRight = true;
            if (!this.state.jumping) {
                this.state.currentState = _constants_animationTypes__WEBPACK_IMPORTED_MODULE_0__["AnimationTypes"].RUN_RIGHT;
            }
            velocity.dx += this.state.movementSpeed;
        }
        if (left) {
            this.state.movingRight = false;
            if (!this.state.jumping) {
                this.state.currentState = _constants_animationTypes__WEBPACK_IMPORTED_MODULE_0__["AnimationTypes"].RUN_LEFT;
            }
            velocity.dx -= this.state.movementSpeed;
        }
        if (velocity.dy > -this.state.terminalVelocity) {
            velocity.dy -= this.state.gravity;
        }
        const updatedVelocity = _utilites_collisionUtilities__WEBPACK_IMPORTED_MODULE_3__["CollisionUtilities"].collideWithTiles(this.state.hitbox, velocity);
        if (!this.state.jumping && updatedVelocity.dy !== 0) {
            this.state.jumping = true;
        }
        else if (updatedVelocity.dy === 0) {
            this.state.jumping = false;
        }
        this.state.velocity = updatedVelocity;
        this.state.position.x += updatedVelocity.dx;
        this.state.position.y += updatedVelocity.dy;
        // To remove repetitive jumping when key is held
        if (up) {
            this.state.jumpUsed = true;
        }
        else {
            this.state.jumpUsed = false;
        }
        // TODO: may want to reconsider how this is being done... This is to center the view on the ninja
        _states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].gameState.position = { x: this.state.position.x - _states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].gameState.gameUnitDimensions.w / 2 + .5, y: this.state.position.y - 5 };
        this.updateHitboxAndCollisionDetectionBoxPositions();
    }
    checkIfIdle(right, left) {
        if (!right && !left && !this.state.jumping) {
            this.state.currentState = this.state.movingRight ? _constants_animationTypes__WEBPACK_IMPORTED_MODULE_0__["AnimationTypes"].IDLE_RIGHT : _constants_animationTypes__WEBPACK_IMPORTED_MODULE_0__["AnimationTypes"].IDLE_LEFT;
        }
    }
    updateHitboxAndCollisionDetectionBoxPositions() {
        this.state.hitbox.position = {
            x: this.state.position.x,
            y: this.state.position.y - this.state.hitboxOffset.h
        };
        this.state.collisionDetectionBox.position = {
            x: this.state.position.x - 2,
            y: this.state.position.y + 2
        };
    }
    updateSprite() {
        this.state.frameCount++;
        this.state.frameCount %= this.state.frameDelay;
        if (this.state.frameCount === 0) {
            if (this.state.jumping) {
                this.state.currentFrame++;
                if (this.state.currentFrame >= this.state.framesPerAnimation) {
                    this.state.currentFrame %= this.state.framesPerAnimation;
                }
            }
            else {
                this.state.currentFrame = (this.state.currentFrame + 1) % this.state.framesPerAnimation;
            }
            this.state.currentImage = this.state.animations.getAnimation(this.state.currentState).getImages()[this.state.currentFrame];
        }
    }
    draw() {
        const { x, y } = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].toScreenCoordinates(_states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].ninjaState.position);
        const { w, h } = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_2__["RenderingUtilities"].toScreenDimensions(this.getSize());
        _states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].gameState.canvas.ctx.drawImage(_states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].ninjaState.currentImage, x, y, w, h);
    }
    getSize() {
        return {
            w: _states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].ninjaState.currentImage.width / _states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].ninjaState.SPRITE_SIZER,
            h: _states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].ninjaState.currentImage.height / _states_rootState__WEBPACK_IMPORTED_MODULE_1__["State"].ninjaState.SPRITE_SIZER
        };
    }
}


/***/ }),

/***/ "./src/objects/stage.ts":
/*!******************************!*\
  !*** ./src/objects/stage.ts ***!
  \******************************/
/*! exports provided: Stage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return Stage; });
/* harmony import */ var _states_rootState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/rootState */ "./src/states/rootState.ts");
/* harmony import */ var _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilites/renderingUtilities */ "./src/utilites/renderingUtilities.ts");


class Stage {
    static draw() {
        const viewableStageGridArea = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].viewableStageGridArea();
        const min = {
            x: Math.floor(viewableStageGridArea.bottomLeft.x),
            y: Math.floor(viewableStageGridArea.bottomLeft.y)
        };
        const max = {
            x: Math.ceil(viewableStageGridArea.topRight.x),
            y: Math.ceil(viewableStageGridArea.topRight.y)
        };
        for (let row = min.y; row <= max.y; row++) {
            for (let col = min.x; col <= max.x; col++) {
                const tile = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].stageState.tiles.get(`${col}-${row}`);
                if (tile && tile.lookupValue !== '00') {
                    const { x, y } = _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].toScreenCoordinates({ x: tile.col, y: tile.row });
                    _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.drawImage(_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].tileSetState.imageMap.get(Number(tile.lookupValue)), x, y, _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].toPixels(1), _utilites_renderingUtilities__WEBPACK_IMPORTED_MODULE_1__["RenderingUtilities"].toPixels(1));
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/objects/stageTile.ts":
/*!**********************************!*\
  !*** ./src/objects/stageTile.ts ***!
  \**********************************/
/*! exports provided: StageTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageTile", function() { return StageTile; });
class StageTile {
    constructor(row, col, lookupValue) {
        this.row = row;
        this.col = col;
        this.lookupValue = lookupValue;
        this.collision = false;
    }
}


/***/ }),

/***/ "./src/stages/stage_1.ts":
/*!*******************************!*\
  !*** ./src/stages/stage_1.ts ***!
  \*******************************/
/*! exports provided: stageOneTileList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stageOneTileList", function() { return stageOneTileList; });
const stageOneTileList = [
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '00', '00', '00', '01', '03', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '01', '02', '13', '14', '06', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '06', '00', '00', '00', '00', '00', '10', '14', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05', '16', '11', '12', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05', '06', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '00', '04', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '16', '17', '02', '02', '02', '02', '13', '14', '05', '05', '05', '16', '17', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '02', '14', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05'],
    ['05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05', '05'],
];


/***/ }),

/***/ "./src/states/backgroundState.ts":
/*!***************************************!*\
  !*** ./src/states/backgroundState.ts ***!
  \***************************************/
/*! exports provided: BackgroundState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundState", function() { return BackgroundState; });
/* harmony import */ var _objects_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/canvas */ "./src/objects/canvas.ts");
/* harmony import */ var _assets_sprites_tileset_1_BG_BG_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/BG/BG.png */ "./assets/sprites/tileset_1/BG/BG.png");


class BackgroundState {
    constructor() {
        this.bgCanvas = new _objects_canvas__WEBPACK_IMPORTED_MODULE_0__["CanvasElement"](innerWidth, innerHeight, 'canvas-bg');
        this.ctx = this.bgCanvas.ctx;
        this.bgImage = new Image();
        this.bgImage.src = _assets_sprites_tileset_1_BG_BG_png__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
}


/***/ }),

/***/ "./src/states/builderState.ts":
/*!************************************!*\
  !*** ./src/states/builderState.ts ***!
  \************************************/
/*! exports provided: BuilderState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderState", function() { return BuilderState; });
/* harmony import */ var _engines_builderModeEngine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engines/builderModeEngine */ "./src/engines/builderModeEngine.ts");

class BuilderState {
    constructor() {
        this.builderMode = false;
        this.builderEngine = new _engines_builderModeEngine__WEBPACK_IMPORTED_MODULE_0__["BuilderModeEngine"]();
        this.tileSelectorOpen = false;
        this.handleMouseClick = false;
        this.removingTiles = false;
    }
}


/***/ }),

/***/ "./src/states/debugState.ts":
/*!**********************************!*\
  !*** ./src/states/debugState.ts ***!
  \**********************************/
/*! exports provided: DebugState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugState", function() { return DebugState; });
/* harmony import */ var _debug_menuOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../debug/menuOption */ "./src/debug/menuOption.ts");
/* harmony import */ var _constants_menuOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/menuOptions */ "./src/constants/menuOptions.ts");


class DebugState {
    constructor() {
        this.debugMode = false;
        this.handleMouseMove = false;
        this.hasButtons = false;
        this.menuOpen = false;
        this.propertiesOpen = false;
        const menuOptionsJson = localStorage.getItem('menuOptions');
        if (menuOptionsJson) {
            this.menuOptions = JSON.parse(menuOptionsJson);
        }
        else {
            this.menuOptions = {};
            _constants_menuOptions__WEBPACK_IMPORTED_MODULE_1__["MenuOptions"].getOptionList().forEach((optionName) => {
                const option = new _debug_menuOption__WEBPACK_IMPORTED_MODULE_0__["MenuOption"](optionName);
                this.menuOptions[optionName] = option;
            });
            this.menuOptions[_constants_menuOptions__WEBPACK_IMPORTED_MODULE_1__["MenuOptions"].COORDINATES].lineWidth = null;
        }
    }
}


/***/ }),

/***/ "./src/states/gameState.ts":
/*!*********************************!*\
  !*** ./src/states/gameState.ts ***!
  \*********************************/
/*! exports provided: GameState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameState", function() { return GameState; });
/* harmony import */ var _objects_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/canvas */ "./src/objects/canvas.ts");

class GameState {
    constructor() {
        this.keys = {
            up: false,
            down: false,
            left: false,
            right: false,
            space: false,
            shift: false
        };
        this.gameUnit = 1;
        this.screenWidth = innerWidth;
        this.screenHeight = innerHeight;
        this.canvas = new _objects_canvas__WEBPACK_IMPORTED_MODULE_0__["CanvasElement"](innerWidth, innerHeight, 'canvas-fg');
        this.position = { x: 0, y: 0 };
        this.defaultFramesPerSecond = 60;
        this.framesPerSecond = this.defaultFramesPerSecond;
        this.paused = false;
        this.defaultColor = 'black';
        this.defaultLineWidth = 1;
    }
}


/***/ }),

/***/ "./src/states/ninjaState.ts":
/*!**********************************!*\
  !*** ./src/states/ninjaState.ts ***!
  \**********************************/
/*! exports provided: NinjaState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NinjaState", function() { return NinjaState; });
/* harmony import */ var _animations_ninjaAnimations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/ninjaAnimations */ "./src/animations/ninjaAnimations.ts");
/* harmony import */ var _constants_animationTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/animationTypes */ "./src/constants/animationTypes.ts");


class NinjaState {
    constructor() {
        this.HEIGHT_IN_UNITS = 2;
        this.animations = new _animations_ninjaAnimations__WEBPACK_IMPORTED_MODULE_0__["NinjaAnimations"]();
        this.attacking = false;
        this.currentFrame = 0;
        this.currentImage = this.animations.getAnimation(this.currentState).getImages()[this.currentFrame];
        this.currentState = _constants_animationTypes__WEBPACK_IMPORTED_MODULE_1__["AnimationTypes"].IDLE_RIGHT;
        this.falling = false;
        this.frameCount = 0;
        this.frameDelay = 6;
        this.framesPerAnimation = 10;
        this.jumping = false;
        this.movingRight = true;
        this.position = { x: 12, y: 6 };
        this.movementSpeed = .25;
        this.SPRITE_SIZER = this.currentImage.height / this.HEIGHT_IN_UNITS;
        this.gravity = .05;
        this.velocity = { dx: 0, dy: 0 };
        this.terminalVelocity = .35;
        this.jumpSpeed = .75;
        this.hitboxOffset = {
            w: .25,
            h: .25
        };
        this.hitbox = {
            position: {
                x: this.position.x,
                y: this.position.y - this.hitboxOffset.h
            },
            dimensions: {
                w: this.currentImage.width / this.SPRITE_SIZER + this.hitboxOffset.w,
                h: this.currentImage.height / this.SPRITE_SIZER - this.hitboxOffset.h
            }
        };
        this.collisionDetectionBox = {
            position: { x: this.position.x - 2, y: this.position.y + 2 },
            dimensions: {
                w: this.currentImage.width / this.SPRITE_SIZER + 4,
                h: this.currentImage.height / this.SPRITE_SIZER + 4
            }
        };
    }
}


/***/ }),

/***/ "./src/states/rootState.ts":
/*!*********************************!*\
  !*** ./src/states/rootState.ts ***!
  \*********************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameState */ "./src/states/gameState.ts");
/* harmony import */ var _debugState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debugState */ "./src/states/debugState.ts");
/* harmony import */ var _ninjaState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ninjaState */ "./src/states/ninjaState.ts");
/* harmony import */ var _stageState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stageState */ "./src/states/stageState.ts");
/* harmony import */ var _backgroundState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backgroundState */ "./src/states/backgroundState.ts");
/* harmony import */ var _tileSetState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tileSetState */ "./src/states/tileSetState.ts");
/* harmony import */ var _builderState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./builderState */ "./src/states/builderState.ts");







/*
 * This state is a global object. The parent of the state should only mutate its state and no other
 */
const State = {
    backgroundState: new _backgroundState__WEBPACK_IMPORTED_MODULE_4__["BackgroundState"](),
    builderState: new _builderState__WEBPACK_IMPORTED_MODULE_6__["BuilderState"](),
    debugState: new _debugState__WEBPACK_IMPORTED_MODULE_1__["DebugState"](),
    gameState: new _gameState__WEBPACK_IMPORTED_MODULE_0__["GameState"](),
    ninjaState: new _ninjaState__WEBPACK_IMPORTED_MODULE_2__["NinjaState"](),
    stageState: new _stageState__WEBPACK_IMPORTED_MODULE_3__["StageState"](),
    tileSetState: new _tileSetState__WEBPACK_IMPORTED_MODULE_5__["TileSetState"]()
};


/***/ }),

/***/ "./src/states/stageState.ts":
/*!**********************************!*\
  !*** ./src/states/stageState.ts ***!
  \**********************************/
/*! exports provided: StageState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageState", function() { return StageState; });
/* harmony import */ var _objects_stageTile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/stageTile */ "./src/objects/stageTile.ts");
/* harmony import */ var _stages_stage_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stages/stage_1 */ "./src/stages/stage_1.ts");


class StageState {
    constructor() {
        this.tiles = new Map();
        for (let row = 0; row < _stages_stage_1__WEBPACK_IMPORTED_MODULE_1__["stageOneTileList"].length; row++) {
            for (let col = 0; col < _stages_stage_1__WEBPACK_IMPORTED_MODULE_1__["stageOneTileList"][row].length; col++) {
                const gridRow = _stages_stage_1__WEBPACK_IMPORTED_MODULE_1__["stageOneTileList"].length - row;
                this.tiles.set(`${col}-${gridRow}`, new _objects_stageTile__WEBPACK_IMPORTED_MODULE_0__["StageTile"](gridRow, col, _stages_stage_1__WEBPACK_IMPORTED_MODULE_1__["stageOneTileList"][row][col]));
            }
        }
    }
}


/***/ }),

/***/ "./src/states/tileSetState.ts":
/*!************************************!*\
  !*** ./src/states/tileSetState.ts ***!
  \************************************/
/*! exports provided: TileSetState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileSetState", function() { return TileSetState; });
/* harmony import */ var _assets_sprites_tileset_1_Tiles_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/Tiles/1.png */ "./assets/sprites/tileset_1/Tiles/1.png");
/* harmony import */ var _assets_sprites_tileset_1_Tiles_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/Tiles/2.png */ "./assets/sprites/tileset_1/Tiles/2.png");
/* harmony import */ var _assets_sprites_tileset_1_Tiles_3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/Tiles/3.png */ "./assets/sprites/tileset_1/Tiles/3.png");
/* harmony import */ var _assets_sprites_tileset_1_Tiles_4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/Tiles/4.png */ "./assets/sprites/tileset_1/Tiles/4.png");
/* harmony import */ var _assets_sprites_tileset_1_Tiles_5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/Tiles/5.png */ "./assets/sprites/tileset_1/Tiles/5.png");
/* harmony import */ var _assets_sprites_tileset_1_Tiles_6_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/Tiles/6.png */ "./assets/sprites/tileset_1/Tiles/6.png");
/* harmony import */ var _assets_sprites_tileset_1_Tiles_7_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/Tiles/7.png */ "./assets/sprites/tileset_1/Tiles/7.png");
/* harmony import */ var _assets_sprites_tileset_1_Tiles_8_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/Tiles/8.png */ "./assets/sprites/tileset_1/Tiles/8.png");
/* harmony import */ var _assets_sprites_tileset_1_Tiles_9_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/Tiles/9.png */ "./assets/sprites/tileset_1/Tiles/9.png");
/* harmony import */ var _assets_sprites_tileset_1_Tiles_10_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/Tiles/10.png */ "./assets/sprites/tileset_1/Tiles/10.png");
/* harmony import */ var _assets_sprites_tileset_1_Tiles_11_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/Tiles/11.png */ "./assets/sprites/tileset_1/Tiles/11.png");
/* harmony import */ var _assets_sprites_tileset_1_Tiles_12_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/Tiles/12.png */ "./assets/sprites/tileset_1/Tiles/12.png");
/* harmony import */ var _assets_sprites_tileset_1_Tiles_13_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/Tiles/13.png */ "./assets/sprites/tileset_1/Tiles/13.png");
/* harmony import */ var _assets_sprites_tileset_1_Tiles_14_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/Tiles/14.png */ "./assets/sprites/tileset_1/Tiles/14.png");
/* harmony import */ var _assets_sprites_tileset_1_Tiles_15_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/Tiles/15.png */ "./assets/sprites/tileset_1/Tiles/15.png");
/* harmony import */ var _assets_sprites_tileset_1_Tiles_16_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/Tiles/16.png */ "./assets/sprites/tileset_1/Tiles/16.png");
/* harmony import */ var _assets_sprites_tileset_1_Tiles_17_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/Tiles/17.png */ "./assets/sprites/tileset_1/Tiles/17.png");
/* harmony import */ var _assets_sprites_tileset_1_Tiles_18_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../assets/sprites/tileset_1/Tiles/18.png */ "./assets/sprites/tileset_1/Tiles/18.png");
/* harmony import */ var _animations_imageBuilder__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../animations/imageBuilder */ "./src/animations/imageBuilder.ts");



















class TileSetState {
    constructor() {
        this.imageMap = new Map();
        this.collisionMap = new Map();
        const imageSrc = [_assets_sprites_tileset_1_Tiles_1_png__WEBPACK_IMPORTED_MODULE_0__["default"], _assets_sprites_tileset_1_Tiles_2_png__WEBPACK_IMPORTED_MODULE_1__["default"], _assets_sprites_tileset_1_Tiles_3_png__WEBPACK_IMPORTED_MODULE_2__["default"], _assets_sprites_tileset_1_Tiles_4_png__WEBPACK_IMPORTED_MODULE_3__["default"], _assets_sprites_tileset_1_Tiles_5_png__WEBPACK_IMPORTED_MODULE_4__["default"], _assets_sprites_tileset_1_Tiles_6_png__WEBPACK_IMPORTED_MODULE_5__["default"], _assets_sprites_tileset_1_Tiles_7_png__WEBPACK_IMPORTED_MODULE_6__["default"], _assets_sprites_tileset_1_Tiles_8_png__WEBPACK_IMPORTED_MODULE_7__["default"], _assets_sprites_tileset_1_Tiles_9_png__WEBPACK_IMPORTED_MODULE_8__["default"], _assets_sprites_tileset_1_Tiles_10_png__WEBPACK_IMPORTED_MODULE_9__["default"], _assets_sprites_tileset_1_Tiles_11_png__WEBPACK_IMPORTED_MODULE_10__["default"], _assets_sprites_tileset_1_Tiles_12_png__WEBPACK_IMPORTED_MODULE_11__["default"], _assets_sprites_tileset_1_Tiles_13_png__WEBPACK_IMPORTED_MODULE_12__["default"], _assets_sprites_tileset_1_Tiles_14_png__WEBPACK_IMPORTED_MODULE_13__["default"], _assets_sprites_tileset_1_Tiles_15_png__WEBPACK_IMPORTED_MODULE_14__["default"], _assets_sprites_tileset_1_Tiles_16_png__WEBPACK_IMPORTED_MODULE_15__["default"], _assets_sprites_tileset_1_Tiles_17_png__WEBPACK_IMPORTED_MODULE_16__["default"], _assets_sprites_tileset_1_Tiles_18_png__WEBPACK_IMPORTED_MODULE_17__["default"]];
        const imgObj = new _animations_imageBuilder__WEBPACK_IMPORTED_MODULE_18__["ImageBuilder"](imageSrc);
        const imageList = imgObj.getImages();
        imageList.forEach((img, index) => {
            this.imageMap.set(index + 1, img);
        });
        this.collisionMap.set(0, { top: true, right: true, bottom: true, left: true });
        this.collisionMap.set(1, { top: true, right: true, bottom: true, left: true });
        this.collisionMap.set(2, { top: true, right: true, bottom: true, left: true });
        this.collisionMap.set(3, { top: true, right: true, bottom: true, left: true });
        this.collisionMap.set(4, { top: true, right: true, bottom: true, left: true });
        this.collisionMap.set(5, { top: true, right: true, bottom: true, left: true });
        this.collisionMap.set(6, { top: true, right: true, bottom: true, left: true });
        this.collisionMap.set(7, { top: true, right: true, bottom: true, left: true });
        this.collisionMap.set(8, { top: true, right: true, bottom: true, left: true });
        this.collisionMap.set(9, { top: true, right: true, bottom: true, left: true });
        this.collisionMap.set(10, { top: true, right: true, bottom: true, left: true });
        this.collisionMap.set(11, { top: true, right: true, bottom: true, left: true });
        this.collisionMap.set(12, { top: true, right: true, bottom: true, left: true });
        this.collisionMap.set(13, { top: true, right: true, bottom: true, left: true });
        this.collisionMap.set(14, { top: true, right: true, bottom: true, left: true });
        this.collisionMap.set(15, { top: true, right: true, bottom: true, left: true });
        this.collisionMap.set(16, { top: true, right: true, bottom: true, left: true });
    }
}


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/utilites/collisionUtilities.ts":
/*!********************************************!*\
  !*** ./src/utilites/collisionUtilities.ts ***!
  \********************************************/
/*! exports provided: CollisionUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionUtilities", function() { return CollisionUtilities; });
/* harmony import */ var _states_rootState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/rootState */ "./src/states/rootState.ts");

class CollisionUtilities {
    /**
     * Given a hitbox and a velocity, return the resulted velocity after colliding with any tiles.
     * @param hitbox hitbox of the moving character or other object
     * @param initialVelocity this contains the vertical and horizontal speed components (dx and dy)
     * @return updated velocity after physics from collided tiles have been applied to the initial velocity
     */
    static collideWithTiles(hitbox, initialVelocity) {
        const velocity = { ...initialVelocity }; // create a copy of the velocity so that we can maintain the original
        const topLeft = { ...hitbox.position };
        const bottomRight = {
            x: hitbox.position.x + hitbox.dimensions.w,
            y: hitbox.position.y - hitbox.dimensions.h
        };
        const tiles = this.getTilesInDetectionArea(_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].ninjaState.collisionDetectionBox);
        let modification;
        for (const tile of tiles) {
            // if moving to the right, check tiles to the right of the hitbox
            if (velocity.dx > 0) {
                // check the alignment of the box to ensure its in the same vertical space
                if (this.hasOverlap(bottomRight.y, topLeft.y, tile.row - 1, tile.row)) {
                    // if the box will be moved beyond the tile boundaries, then update the velocity based off of tile physics
                    if (this.hasOverlap(bottomRight.x, bottomRight.x + velocity.dx, tile.col, tile.col + 1)) {
                        modification = (bottomRight.x + velocity.dx - tile.col);
                        // console.log("wall: " + tile.col.toFixed(2));
                        // console.log("New Position: " + (bottomRight.x + velocity.dx).toFixed(2));
                        // console.log("DX Dif: " + modification.toFixed(2));
                        velocity.dx -= modification;
                    }
                }
            }
            else if (velocity.dx < 0) {
                // check the alignment of the box to ensure its in the same vertical space
                if (this.hasOverlap(bottomRight.y, topLeft.y, tile.row - 1, tile.row)) {
                    // if the box will be moved beyond the tile boundaries, then update the velocity based off of tile physics
                    if (this.hasOverlap(topLeft.x + velocity.dx, topLeft.x, tile.col, tile.col + 1)) {
                        modification = (tile.col + 1) - (topLeft.x + velocity.dx);
                        // console.log("wall: " + (tile.col + 1).toFixed(2));
                        // console.log("New Position: " + (topLeft.x + velocity.dx).toFixed(2));
                        // console.log("DX Dif: " + modification.toFixed(2));
                        velocity.dx += modification;
                    }
                }
            }
            // if moving up, check tiles above the hitbox
            if (velocity.dy > 0) {
                // check the alignment of the box to ensure its in the same horizontal space
                if (this.hasOverlap(topLeft.x, bottomRight.x, tile.col, tile.col + 1)) {
                    // if the box will be moved beyond the tile boundaries, then update the velocity based off of tile physics
                    if (this.hasOverlap(topLeft.y, topLeft.y + velocity.dy, tile.row - 1, tile.row)) {
                        modification = topLeft.y + velocity.dy - (tile.row - 1);
                        // console.log("wall: " + (tile.row - 1).toFixed(2));
                        // console.log("New Position: " + (topLeft.y + velocity.dy).toFixed(2));
                        // console.log("DX Dif: " + modification.toFixed(2));
                        velocity.dy -= modification;
                    }
                }
            }
            else if (velocity.dy < 0) {
                // check the alignment of the box to ensure its in the same horizontal space
                if (this.hasOverlap(topLeft.x, bottomRight.x, tile.col, tile.col + 1)) {
                    // if the box will be moved beyond the tile boundaries, then update the velocity based off of tile physics
                    if (this.hasOverlap(bottomRight.y + velocity.dy, bottomRight.y, tile.row - 1, tile.row)) {
                        modification = (tile.row) - (bottomRight.y + velocity.dy);
                        // console.log("wall: " + tile.row.toFixed(2));
                        // console.log("New Position: " + (bottomRight.y + velocity.dy).toFixed(2));
                        // console.log("DX Dif: " + modification.toFixed(2));
                        velocity.dy += modification;
                        if (Math.abs(velocity.dy) < 0.00001) {
                            velocity.dy = 0;
                        }
                    }
                }
            }
        }
        return velocity;
    }
    /**
     * Check to see if two ranges overlap
     * Requires range a to follow: a1 < a2
     * and range b to follow and b1 < b2
     */
    static hasOverlap(a1, a2, b1, b2) {
        return Math.max(a1, b1) < Math.min(a2, b2);
    }
    /**
     * Returns an array of tiles that are within the given box that are not empty tiles.
     * @param box
     */
    static getTilesInDetectionArea(box) {
        const detectionTiles = [];
        const top = Math.floor(box.position.y);
        const bottom = Math.floor(box.position.y - box.dimensions.h);
        const left = Math.floor(box.position.x);
        const right = Math.floor(box.position.x + box.dimensions.w);
        for (let row = bottom + 1; row <= top + 1; row++) {
            for (let col = left; col <= right; col++) {
                if (row < 0 || col < 0) {
                    continue;
                }
                const tile = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].stageState.tiles.get(`${col}-${row}`);
                if (tile && tile.lookupValue !== '00') {
                    detectionTiles.push(tile);
                }
            }
        }
        return detectionTiles;
    }
}


/***/ }),

/***/ "./src/utilites/renderingUtilities.ts":
/*!********************************************!*\
  !*** ./src/utilites/renderingUtilities.ts ***!
  \********************************************/
/*! exports provided: RenderingUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderingUtilities", function() { return RenderingUtilities; });
/* harmony import */ var _states_rootState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/rootState */ "./src/states/rootState.ts");

/*
 * These utilities are to be used within the rendering engine only
 */
class RenderingUtilities {
    static setDimensions(minGameDimensions = { w: 12, h: 12 }) {
        // when we set the dimensions of the game, determine the pixelsPerUnit conversion for later use
        const dx = innerWidth / minGameDimensions.w;
        const dy = innerHeight / minGameDimensions.h;
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.pixelsPerUnit = Math.min(dx, dy);
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.gameUnitDimensions = {
            w: innerWidth / _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.pixelsPerUnit,
            h: innerHeight / _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.pixelsPerUnit
        };
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.screenPixelDimensions = {
            w: innerWidth,
            h: innerHeight
        };
    }
    static toScreenCoordinates(gameCoords) {
        return {
            x: (gameCoords.x - _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.position.x) * _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.pixelsPerUnit,
            y: ((_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.position.y - gameCoords.y) * _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.pixelsPerUnit) + _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.screenPixelDimensions.h
        };
    }
    /**
     * When passing coordinates from the screen or click events, you should use event.clientX and event.clientY.
     */
    static toGameCoordinates({ x: cltX, y: cltY }) {
        return {
            x: cltX / _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.pixelsPerUnit + _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.position.x,
            y: -cltY / _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.pixelsPerUnit + _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.position.y + _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.gameUnitDimensions.h
        };
    }
    /**
     * Will return the root of the grid position for rendering imgs in a grid space
     * e.g. { x: 3.86, y: 2.13 } => { x: 3, y: 3}
     */
    static toGameCoordsImgRoot({ x, y }) {
        return {
            x: Math.floor(x),
            y: Math.ceil(y)
        };
    }
    static toScreenDimensions(gameDimensions) {
        return {
            w: this.toPixels(gameDimensions.w),
            h: this.toPixels(gameDimensions.h)
        };
    }
    static toGameDimensions(screenDimensions) {
        return {
            w: this.toUnits(screenDimensions.w),
            h: this.toUnits(screenDimensions.h)
        };
    }
    static toPixels(gameLength) {
        return gameLength * _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.pixelsPerUnit;
    }
    static toUnits(pixels) {
        return pixels / _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.pixelsPerUnit;
    }
    static gridAxisOfPosition(position) {
        const { x, y } = position;
        const gridX = Math.floor(x);
        const gridY = Math.floor(y);
        return { x: gridX, y: gridY };
    }
    static pauseGame(pause) {
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.paused = pause;
        if (_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.paused) {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.framesPerSecond = 0;
        }
        else {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.framesPerSecond = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.defaultFramesPerSecond;
        }
    }
    static cycleFrames(n, fps = _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.defaultFramesPerSecond) {
        if (!_states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.paused) {
            console.error('Game must be paused to cycle frames');
            return;
        }
        if (n === 0) {
            return;
        }
        setTimeout(() => {
            _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.renderingEngine.run();
            this.cycleFrames(n - 1);
        }, 1000 / fps);
    }
    static refreshCanvas() {
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].gameState.canvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
        _states_rootState__WEBPACK_IMPORTED_MODULE_0__["State"].backgroundState.bgCanvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
    }
    static nodeBuilder(type, content, classList = []) {
        const node = document.createElement(type);
        node.innerHTML = content;
        node.classList.add(...classList);
        return node;
    }
    static appendNodeToBody(node) {
        const body = document.querySelector('body');
        body.appendChild(node);
    }
    static appendChildNodes(parent, children) {
        for (const child of children) {
            parent.appendChild(child);
        }
        return parent;
    }
    static viewableStageGridArea() {
        const topLeftPixels = { x: 0, y: 0 };
        const topRightPixels = { x: innerWidth, y: 0 };
        const bottomLeftPixels = { x: 0, y: innerHeight };
        const bottomRightPixels = { x: innerWidth, y: innerHeight };
        const topLeftGridUnits = this.toGameCoordinates(topLeftPixels);
        const topRightGridUnits = this.toGameCoordinates(topRightPixels);
        const bottomLeftGridUnits = this.toGameCoordinates(bottomLeftPixels);
        const bottomRightGridUnits = this.toGameCoordinates(bottomRightPixels);
        const viewableGridArea = {
            topLeft: topLeftGridUnits,
            topRight: topRightGridUnits,
            bottomLeft: bottomLeftGridUnits,
            bottomRight: bottomRightGridUnits
        };
        return viewableGridArea;
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL0Nyb3NzaGFpcl9SZWQuY3VyIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQXR0YWNrTF9fMDAwLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0F0dGFja0xfXzAwMS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9BdHRhY2tMX18wMDIucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQXR0YWNrTF9fMDAzLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0F0dGFja0xfXzAwNC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9BdHRhY2tMX18wMDUucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQXR0YWNrTF9fMDA2LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0F0dGFja0xfXzAwNy5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9BdHRhY2tMX18wMDgucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQXR0YWNrTF9fMDA5LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0F0dGFja19fMDAwLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0F0dGFja19fMDAxLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0F0dGFja19fMDAyLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0F0dGFja19fMDAzLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0F0dGFja19fMDA0LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0F0dGFja19fMDA1LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0F0dGFja19fMDA2LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0F0dGFja19fMDA3LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0F0dGFja19fMDA4LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0F0dGFja19fMDA5LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0NsaW1iXzAwMC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9DbGltYl8wMDEucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQ2xpbWJfMDAyLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0NsaW1iXzAwMy5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9DbGltYl8wMDQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQ2xpbWJfMDA1LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0NsaW1iXzAwNi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9DbGltYl8wMDcucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQ2xpbWJfMDA4LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0NsaW1iXzAwOS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9EZWFkTF9fMDAwLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0RlYWRMX18wMDEucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvRGVhZExfXzAwMi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9EZWFkTF9fMDAzLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0RlYWRMX18wMDQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvRGVhZExfXzAwNS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9EZWFkTF9fMDA2LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0RlYWRMX18wMDcucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvRGVhZExfXzAwOC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9EZWFkTF9fMDA5LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0RlYWRfXzAwMC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9EZWFkX18wMDEucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvRGVhZF9fMDAyLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0RlYWRfXzAwMy5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9EZWFkX18wMDQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvRGVhZF9fMDA1LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0RlYWRfXzAwNi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9EZWFkX18wMDcucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvRGVhZF9fMDA4LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0RlYWRfXzAwOS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9HbGlkZUxfMDAwLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlTF8wMDEucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvR2xpZGVMXzAwMi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9HbGlkZUxfMDAzLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlTF8wMDQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvR2xpZGVMXzAwNS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9HbGlkZUxfMDA2LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlTF8wMDcucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvR2xpZGVMXzAwOC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9HbGlkZUxfMDA5LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlXzAwMC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9HbGlkZV8wMDEucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvR2xpZGVfMDAyLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlXzAwMy5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9HbGlkZV8wMDQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvR2xpZGVfMDA1LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlXzAwNi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9HbGlkZV8wMDcucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvR2xpZGVfMDA4LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlXzAwOS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9JZGxlTF9fMDAwLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0lkbGVMX18wMDEucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSWRsZUxfXzAwMi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9JZGxlTF9fMDAzLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0lkbGVMX18wMDQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSWRsZUxfXzAwNS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9JZGxlTF9fMDA2LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0lkbGVMX18wMDcucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSWRsZUxfXzAwOC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9JZGxlTF9fMDA5LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0lkbGVfXzAwMC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9JZGxlX18wMDEucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSWRsZV9fMDAyLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0lkbGVfXzAwMy5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9JZGxlX18wMDQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSWRsZV9fMDA1LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0lkbGVfXzAwNi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9JZGxlX18wMDcucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSWRsZV9fMDA4LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0lkbGVfXzAwOS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wTF9fMDAwLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBMX18wMDEucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcExfXzAwMi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wTF9fMDAzLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBMX18wMDQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcExfXzAwNS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wTF9fMDA2LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBMX18wMDcucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcExfXzAwOC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wTF9fMDA5LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfQXR0YWNrTF9fMDAwLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfQXR0YWNrTF9fMDAxLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfQXR0YWNrTF9fMDAyLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfQXR0YWNrTF9fMDAzLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfQXR0YWNrTF9fMDA0LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfQXR0YWNrTF9fMDA1LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfQXR0YWNrTF9fMDA2LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfQXR0YWNrTF9fMDA3LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfQXR0YWNrTF9fMDA4LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfQXR0YWNrTF9fMDA5LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfQXR0YWNrX18wMDAucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9BdHRhY2tfXzAwMS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX0F0dGFja19fMDAyLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfQXR0YWNrX18wMDMucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9BdHRhY2tfXzAwNC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX0F0dGFja19fMDA1LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfQXR0YWNrX18wMDYucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9BdHRhY2tfXzAwNy5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX0F0dGFja19fMDA4LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfQXR0YWNrX18wMDkucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9UaHJvd0xfXzAwMC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93TF9fMDAxLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfVGhyb3dMX18wMDIucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9UaHJvd0xfXzAwMy5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93TF9fMDA0LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfVGhyb3dMX18wMDUucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9UaHJvd0xfXzAwNi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93TF9fMDA3LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfVGhyb3dMX18wMDgucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9UaHJvd0xfXzAwOS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93X18wMDAucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9UaHJvd19fMDAxLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfVGhyb3dfXzAwMi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93X18wMDMucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9UaHJvd19fMDA0LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfVGhyb3dfXzAwNS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93X18wMDYucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9UaHJvd19fMDA3LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfVGhyb3dfXzAwOC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93X18wMDkucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9fMDAwLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfXzAwMS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX18wMDIucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9fMDAzLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfXzAwNC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX18wMDUucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9fMDA2LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfXzAwNy5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX18wMDgucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9fMDA5LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1J1bkxfXzAwMC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9SdW5MX18wMDEucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvUnVuTF9fMDAyLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1J1bkxfXzAwMy5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9SdW5MX18wMDQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvUnVuTF9fMDA1LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1J1bkxfXzAwNi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9SdW5MX18wMDcucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvUnVuTF9fMDA4LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1J1bkxfXzAwOS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9SdW5fXzAwMC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9SdW5fXzAwMS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9SdW5fXzAwMi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9SdW5fXzAwMy5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9SdW5fXzAwNC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9SdW5fXzAwNS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9SdW5fXzAwNi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9SdW5fXzAwNy5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9SdW5fXzAwOC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9SdW5fXzAwOS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9TbGlkZUxfXzAwMC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9TbGlkZUxfXzAwMS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9TbGlkZUxfXzAwMi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9TbGlkZUxfXzAwMy5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9TbGlkZUxfXzAwNC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9TbGlkZUxfXzAwNS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9TbGlkZUxfXzAwNi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9TbGlkZUxfXzAwNy5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9TbGlkZUxfXzAwOC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9TbGlkZUxfXzAwOS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9TbGlkZV9fMDAwLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1NsaWRlX18wMDEucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvU2xpZGVfXzAwMi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9TbGlkZV9fMDAzLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1NsaWRlX18wMDQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvU2xpZGVfXzAwNS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9TbGlkZV9fMDA2LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1NsaWRlX18wMDcucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvU2xpZGVfXzAwOC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9TbGlkZV9fMDA5LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDAwLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDAxLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDAyLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDAzLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDA0LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDA1LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDA2LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDA3LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDA4LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDA5LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93X18wMDAucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvVGhyb3dfXzAwMS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9UaHJvd19fMDAyLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93X18wMDMucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvVGhyb3dfXzAwNC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9UaHJvd19fMDA1LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93X18wMDYucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvVGhyb3dfXzAwNy5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9UaHJvd19fMDA4LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93X18wMDkucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL3RpbGVzZXRfMS9CRy9CRy5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvdGlsZXNldF8xL1RpbGVzLzEucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL3RpbGVzZXRfMS9UaWxlcy8xMC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvdGlsZXNldF8xL1RpbGVzLzExLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy90aWxlc2V0XzEvVGlsZXMvMTIucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL3RpbGVzZXRfMS9UaWxlcy8xMy5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvdGlsZXNldF8xL1RpbGVzLzE0LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy90aWxlc2V0XzEvVGlsZXMvMTUucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL3RpbGVzZXRfMS9UaWxlcy8xNi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvdGlsZXNldF8xL1RpbGVzLzE3LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy90aWxlc2V0XzEvVGlsZXMvMTgucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL3RpbGVzZXRfMS9UaWxlcy8yLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy90aWxlc2V0XzEvVGlsZXMvMy5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvdGlsZXNldF8xL1RpbGVzLzQucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL3RpbGVzZXRfMS9UaWxlcy81LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy90aWxlc2V0XzEvVGlsZXMvNi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvdGlsZXNldF8xL1RpbGVzLzcucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcHJpdGVzL3RpbGVzZXRfMS9UaWxlcy84LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ByaXRlcy90aWxlc2V0XzEvVGlsZXMvOS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9ucy9pbWFnZUJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbnMvbmluamFBbmltYXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvYW5pbWF0aW9uVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9tZW51T3B0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVidWcvYnVpbGRlck1vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlYnVnL2RlYnVnTWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVidWcvZGVidWdNb2RlLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWJ1Zy9tZW51T3B0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWJ1Zy9wcm9wZXJ0aWVzTWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lcy9idWlsZGVyTW9kZUVuZ2luZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lcy9waHlzaWNzRW5naW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmVzL3JlbmRlcmluZ0VuZ2luZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvYmFja2dyb3VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9jYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9uaW5qYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9zdGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9zdGFnZVRpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YWdlcy9zdGFnZV8xLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvYmFja2dyb3VuZFN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvYnVpbGRlclN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvZGVidWdTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL2dhbWVTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL25pbmphU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcy9yb290U3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcy9zdGFnZVN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvdGlsZVNldFN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGVzL2NvbGxpc2lvblV0aWxpdGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0ZXMvcmVuZGVyaW5nVXRpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQWUsb0ZBQXVCLHlDQUF5QyxFOzs7Ozs7Ozs7Ozs7QUNBL0U7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRVc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LDBFQUFjLENBQUMsaUJBQWlCLENBQUMsR0FBRyxJQUFJLDREQUFZLENBQUMsQ0FBQywyRkFBVyxFQUFFLDJGQUFXLEVBQUUsMkZBQVcsRUFBRSwyRkFBVyxFQUFFLDJGQUFXLEVBQUUsMkZBQVcsRUFBRSwyRkFBVyxFQUFFLDJGQUFXLEVBQUUsMkZBQVcsRUFBRSwyRkFBVyxDQUFDLENBQUMsQ0FBQztRQUN6TSxJQUFJLENBQUMsVUFBVSxDQUFDLDBFQUFjLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLDREQUFZLENBQUMsQ0FBQyw0RkFBWSxFQUFFLDRGQUFZLEVBQUUsNEZBQVksRUFBRSw0RkFBWSxFQUFFLDRGQUFZLEVBQUUsNEZBQVksRUFBRSw0RkFBWSxFQUFFLDRGQUFZLEVBQUUsNEZBQVksRUFBRSw0RkFBWSxDQUFDLENBQUMsQ0FBQztRQUNsTixJQUFJLENBQUMsVUFBVSxDQUFDLDBFQUFjLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxJQUFJLDREQUFZLENBQUMsQ0FBQywwRkFBVSxFQUFFLDBGQUFVLEVBQUUsMEZBQVUsRUFBRSwwRkFBVSxFQUFFLDBGQUFVLEVBQUUsMEZBQVUsRUFBRSwwRkFBVSxFQUFFLDBGQUFVLEVBQUUsMEZBQVUsRUFBRSwwRkFBVSxDQUFDLENBQUMsQ0FBQztRQUM5TCxJQUFJLENBQUMsVUFBVSxDQUFDLDBFQUFjLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSw0REFBWSxDQUFDLENBQUMsMkZBQVcsRUFBRSwyRkFBVyxFQUFFLDJGQUFXLEVBQUUsMkZBQVcsRUFBRSwyRkFBVyxFQUFFLDJGQUFXLEVBQUUsMkZBQVcsRUFBRSwyRkFBVyxFQUFFLDJGQUFXLEVBQUUsMkZBQVcsQ0FBQyxDQUFDLENBQUM7UUFDdk0sSUFBSSxDQUFDLFVBQVUsQ0FBQywwRUFBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksNERBQVksQ0FBQyxDQUFDLHFGQUFNLEVBQUUscUZBQU0sRUFBRSxxRkFBTSxFQUFFLHFGQUFNLEVBQUUscUZBQU0sRUFBRSxxRkFBTSxFQUFFLHFGQUFNLEVB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QUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcGEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVB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LEVBQUUsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxN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QUFDO1NBQzdCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxxQkFBcUI7UUFDeEIsTUFBTSxhQUFhLEdBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM1QyxNQUFNLGNBQWMsR0FBVSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3RELE1BQU0sZ0JBQWdCLEdBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQztRQUN6RCxNQUFNLGlCQUFpQixHQUFVLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUM7UUFFbkUsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0QsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakUsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNyRSxNQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXZFLE1BQU0sZ0JBQWdCLEdBQWE7WUFDL0IsT0FBTyxFQUFFLGdCQUFnQjtZQUN6QixRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFVBQVUsRUFBRSxtQkFBbUI7WUFDL0IsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO1FBQ0YsT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0NBRUoiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMmRkYmI0NmVjODViZGU3ZjQ0OGUyMmZmZTAxY2Y0OTguY3VyXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQwZGI2Nzk1ZGMyNDljMzE4Zjk0NTg2ZTBhNTNmNGViLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyMjQ3NDIyZGRmYjBjMjI3MTE4ZjEwNzJmZTE0NTcyYS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZWYzY2IzZWE1Y2M4ZjM2MWNhMjhkYmJkMTY3ZjY0NzcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFkYWY1OWEzOTZiOTI2OTNjZWJmNzVjOWI0ZjgwYjdjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2Yzg4NTc5OTRlMGU5YzJhMzk5MWExNmJmODgwYzUxNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjIwYjczOTU1OWNhOWM3OGQyZDBhOGM1YWFjMDEyODQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImE3Nzg5ZWJkZTRmM2NlYjk2YzM5YWRlMzEyZDUwMjNhLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyNmI2NDk5Yzg4MmRjNWE4OTIzOTcxNWM4ZTFlMDc2My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGUzNjM4MmU0OWQ0NGQyZjlhNDQ2YWRhNThlNzA1NDQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjY5MjQ5NDczOWE5OGI3YmJhNjc5YTZjNmM2MzBmYzRmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmNzY4ODg4YmI5YjA0ZjJlNjMwY2MwMTRmODUwMGEzMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjllY2ZmZWU5MThiZmI3ODhlNzJjNzA3NDM4MTc2NDUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM3ZDA0ODBjMTBmMDhjY2JmNzM2YTE4ZThjZWY3NTUwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3NWQxNzIzYzQ3MWRlNzhhYmEwOTY2OGJlZWU1NGFkZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWU2MDI5MDFiMTk4Njk5MWI2YmU1ZGUwMzllMmI0ZjkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjcxZGY3MDY3YTliYjRkMWQ1OGFmODY5Yzg5NGIyMWY4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5NjVmZmJmZmFmOTg3YTUyMWM0MGZlZWExMjAzMjI5MS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDY0YmE1YTA2NTZlMTA4ZjViNTBmZDMxZThiMGE0NmQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgxY2VkYjUyNzk4N2YyMmJkZjhmYjE1ZDMxMWM3NGIyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyYTUzMTI3Y2Y5MDFiOTM5N2U4Zjc2MWQ3MTkwNjI5ZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjI0OGMxZDQ1ZTljN2U0N2YzYTRiMmU5NGUwYTIwZTgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjYwZjY5YWVhZGIyMDQyY2JlMDVlZWFmODQ3OTY1NzEyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2OGM2NDMwZGQ5NWU0ZTdlZjg2OWI4Njk4M2M3MzQ2My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDNmZGQxZDk5MmU0ZDZiYTdjYTM4ZDVkN2Q1M2EwYzIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRiMGU1NDQ1NGYxZTcxYmRmMjIxYzBhYjJiZjk5MjIxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzODVhYzJhOWY1YzZmOTEyMTViYjZmYzZlNDhhYjA4Yi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjZjNDk3Y2IxNWJlZjE3MDNjMDk4MDcwMjg3NDgyNTgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdhZGJiYzkyZGU0NjBkNzQ0ZDhlNjQ3NzljODIxOWE4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5MmQzNjA1MjYzZDUyNjk4ZDQ4YTk0YjUyZjdkZWZlMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZThkZjUwZWI3MjcxMDAyYmQ3ODllYWUwMjEwODYzYzAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjg3MjI1MTdhNWNlNTI2NGViYTE2ZDFjYmE4YzMwZmFhLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiMzUyNjhmODE0NmIwNmU3NTFhMTJlZmNjNTU2ZThiMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODI4YmY5MjhjNmJiZmFiNGZiMGViZWE3ZTIwNDY5ZjEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIwOTQ2NGIxZTVkN2UyYzlkNGM4MGU3ZTc3OWYxMzcwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5NWE3YjNjMmRkNzY0N2I1NjMyOTU4MGFlY2M3MzUxZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTUzOGNkNjA2ZDg4MGNiYTUzOTUwZWJlYzY4NTdkYzMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVlOGIwN2I0MWRiMDRmNjZlNjFkNWY2YWI5MDBmOTU2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1ZThiMDdiNDFkYjA0ZjY2ZTYxZDVmNmFiOTAwZjk1Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWU4YjA3YjQxZGIwNGY2NmU2MWQ1ZjZhYjkwMGY5NTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVlOGIwN2I0MWRiMDRmNjZlNjFkNWY2YWI5MDBmOTU2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiNDgzOGU0NzRkNzI3MjdjOGM0OTUxYzM5ZWQxYTRiMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODI5NzUwMjAxMDVjMTlhMTBkNWE3MWIxOTBmYzQ4MzAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZlZDVhMDQ4ZDg1YzA1MGRlYTc4ODYwMzI3MDc0Y2NiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5ZDY5YWRjOWZkOWZhNGUyNmRiYWMyMTViNTM1ZTg3Yy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWVjMTRhNWVmM2E0OGM5ZGM0M2IzMWE4MmUzMTc5MDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjViODMzNzVhZTRiYTNkMjE3ZWIyZDQwOTcyMDc4NTUwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmNTI4MDEwMGQxMzM1MjIxZGZkNGJmNWI4MGFiOGFhMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjUyODAxMDBkMTMzNTIyMWRmZDRiZjViODBhYjhhYTAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY1MjgwMTAwZDEzMzUyMjFkZmQ0YmY1YjgwYWI4YWEwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmNTI4MDEwMGQxMzM1MjIxZGZkNGJmNWI4MGFiOGFhMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGNkODRiYjIwNmI0MDI5NzA1MGJmNDFlMGFiZDFhYjkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFmMmI5YzFjMDU0ZjE3YWE5YjhjOGFjODZiZjkxNjhmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkZjQ0ODlkMmZhYTZlODhlN2FiODc5M2NjNTEwN2I0OS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWEzODM1NzFjNWNkNjVlZTVlMzVhZmVmYzdmNGU4NGEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjcwZTMwMTFiODE0YTY0ZDIwZDc2NWY3YzU5NDkzNjQyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmMzRjOTAyZGY2NTVkYWMyYzJjNzZhZjEwNDk3OTQ2Yi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzZlMmNkYzVmM2RmNDM4Njk4YThiMDA0MzdiOGM2NzAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY4Y2UzY2Y1MjI3OGQxZTExZGEwODE1MzgzZDdmYjFlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzOWUwZjAzYzhmNjg2YTQ3YTRhYmE5NGRlNGFlOGU2YS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGI4MWRhZjU5ZTU0ZGEyNWZhMGU3MmViMThkYTI1NGEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImE0MTdiZDc4NWQwM2Y5MTkxZjkzODM0NzZlZjdjOTJmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhNmQxYzAzMjk5YjcyZTY4MGEwNGE4N2I1NTU1ZWUzMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjRjNjc2ZjUyMzQzMzNhZGI5Zjg0ZjRmZjE3OGM3MTUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQwMjk0YjBjYjIwZjAzMTdjNjViOWJhYjBlYzA1OWVlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjNTNkOGYxM2VhMWQ0M2IyNzk4NDY2ZDliYmRkMWFhYS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2ZiNjdlY2NhYTdkYzQyODEzMzRmZmQ4OTFkNmQwODUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ2YTkxYzUzODMzM2M3ZGQ1M2E0NzJjZTFhMTY1ZDg5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmMWQwMWMwNzY0YWJlMGQ3Y2E2ZjIwNjUyOGQ4ODQyOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDQ3NjM3YTQyOTYxYTBmYWRjZTM4ZTgxY2MxODdhMGQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI1NDE0ODgzNmZiOGZiMDhhZTY3MDA5ZTQwNDg4NDQ3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxZWIzMWJhM2Q4YmM3OWUzMjdlMzlkZGIzMzQyNjA0Ny5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzBhMWMxNGVmZThiNzk0YWQ2ZGMwNTMxZWE4OTJlNzQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIzMGM1N2NjMzM4ZDFmN2VmMzM1YmEwMGIzY2M5YjQ0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyOTJiNzk2MWE1NmU2NGQ4ODY4NTJmMGQ5MjE5Y2U3NS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGRjZjZiOTNiY2EwYjQzOWYyOWEwMmExMjZkODEwMWMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBhZTJmOWFjM2M5NmEyMTI4ZDI3YzFkMjRiOTZmZTEzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4ZGNmNmI5M2JjYTBiNDM5ZjI5YTAyYTEyNmQ4MTAxYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjkyYjc5NjFhNTZlNjRkODg2ODUyZjBkOTIxOWNlNzUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIzMGM1N2NjMzM4ZDFmN2VmMzM1YmEwMGIzY2M5YjQ0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjMGExYzE0ZWZlOGI3OTRhZDZkYzA1MzFlYTg5MmU3NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWY5YzQ3YTAzOWYyOWJkNmZiNmVlYjYzNmY2NjRjMzcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjlmNDlkNTQ3MDk0M2Q5ZmIxOTI2ZTlmYzg3MDcyMzk2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkOGY5MjcxZDA2M2E1NzBiZmY3MWRhZDEzYjYxYTM3Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGQ2ZTI1MWE1Y2RjMzVkMTQ2NWJjY2IyYmI1OGUyZDcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImMwNTBlMzU4MjVjNTJkOWU5ZmU1MzA1NTg4MmJkZjYzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxYTg3OTk1YTU1NzMwNTNlMWI5ODRjZGRiYjYwNWZiZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzA1MGUzNTgyNWM1MmQ5ZTlmZTUzMDU1ODgyYmRmNjMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjhkNmUyNTFhNWNkYzM1ZDE0NjViY2NiMmJiNThlMmQ3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkOGY5MjcxZDA2M2E1NzBiZmY3MWRhZDEzYjYxYTM3Ni5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWY0OWQ1NDcwOTQzZDlmYjE5MjZlOWZjODcwNzIzOTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU3N2NlNjFkZWZkM2MxNTk1MThkYjUyNDNlNzBjNDY1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0MGUyNTc3NDAwZDAxMWZjZWM0ZGYwYjYzYmQyOTc3My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjc5YmEyMjlkMTUxNjUwMzFmNDNlNDJlMjVhOTIyNDAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI3OWJhMjI5ZDE1MTY1MDMxZjQzZTQyZTI1YTkyMjQwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiNzliYTIyOWQxNTE2NTAzMWY0M2U0MmUyNWE5MjI0MC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjc5YmEyMjlkMTUxNjUwMzFmNDNlNDJlMjVhOTIyNDAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZkMjVhNjkyMzEyOTc3YjBkYWRmMjNiZjliZGMwNGY0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4YTg4YWU1OGQ1OGMwYzZhYzVmZmZlYmE5NzA0NjExZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOThmMWMzOTNkODA3ZTZmNGZiMTExODViNzBlNzhlZmQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjk4ZjFjMzkzZDgwN2U2ZjRmYjExMTg1YjcwZTc4ZWZkLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxM2EwNmRkNTZhZTkyMDJhMzMyZDNkY2YyM2M5OWQyMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMGY2OTI0M2QwNjYwM2MwNDg3YTExNDRlZjc0YWM3MjUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgyYzIzZWI1MTJmN2U2NWNkODhiOTA2NGMxOWY1ZGY3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjMWFjZjdhOWVkZmRjYmY1MmZlM2E1ZTUyNTBjYzYwZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmUxZjNmNWNkMjNhODM5Y2JlYmI4OGI3ODkwZWIxOTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjliYmU5OTc5YjM3YjJjOWNhMTliZDVjZWU2MzA5N2U0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlMmZlYTFjNWIxZDZjMWM2NWQ3MDMyOTIzZjZhMmEyZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2Q1M2Q4MDFlMDRmZGUwZDc5YjVhMzE3YWI1NmNmYjYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImE5MThjNGViMmJhNzIzMjRmODdmYmE5NGMyMTJjMDJjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3ODM1YjNmOTdiMTM5OTM5ODUxOWVhN2FmZDJjZjUzYS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzQ4MzdkMjVhYTZiZThjOThjOWY3NTE0MTAyZmQ1MmEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjIzMTk1MmIzOGUxZDcwYjJiYmFjYzFjY2FmOWFmNzUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3MmZhYTQ2ZmMwNDYzOWMyOGIzNjNiMzlkMjI1NGJhMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTdkMTNiM2Q3MWNkMWU4YjI1MTA0NDcxZmU5ZmRhN2MucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRmNjJjODNjNzhjMzMxYjFmNmUzYzdjNzE0MDQ4NjJiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4ZThhZmM3NTk0ODQ5NWI2NDdiZWQyOGEwYmQ5NWY0Ny5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2Y1ODVkMTA3ZTJjZGJkMGQ3NGFlZTViMzVmODNmMzAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImVmMGRiYjRhYjgyMTNiY2ZlNTFkZGRlZmIxY2MwMDIzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5NjBiZTgxNGE2ODI1YTNjN2ViMzg0ZTc3ZTA0ZWEyMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMmVkZWZlZTkzM2I4ZjZjMzY0NmNiY2MxMWQyY2RlMjkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY2ODhmZjBmYjIxMjdhZjI2M2Q0OWJmOTM4MzhmNjNjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiNjM1ODY5ZDgwMzhhOWExZjdkN2YwZjEwYzU3ZWU5YS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2MxZGIyYzc4ZjBiODUwMjNmOWI1Y2M4NzVjMDI1Y2QucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjE3MzQzNTliMDEwYjU3MGI2ZmM1ZjUzM2VmOTkyMzI5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4NWIwM2M4MTdjZDJhZjdiY2YyMzA1MDFkNmJjNmE3My5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYWI4ZWZiOTczNDg1NDZmZDRmOTM0ZTM0MjM2ODg1YzAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjcwZWFiNWY2OWIwY2NhZmM3OWM4M2Q4NWM2MjY4YWMyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5ZDJjYzUyNDk4YjY2YjllYjViY2ZlNGE5MDQyZmQxOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOWU2OWQxMWFlN2QwMDVjNWQ5NzNjNjI5NmY0MjA4MjgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNmNDZmMDIwNWE1ODFmYjg2YzgzM2IzYjYwM2IwM2NiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0Zjc0MTJhZDIzMzQ4ZTdhODM0ZDZlYmU3Y2Y0NGEzZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTNjODA0MjZjYjRlMThjMDlhYzRkOWFkM2Y3NjQwNGUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZkYmYxYTE0YzI5YmU0MDk2ZWJmMzBmY2NiZTc5ODczLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkMGFlYmJjMTczNmIzMjdjNDlhYjBjZGQyMjg3MGM5ZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZjEyYmQzY2U3MzczMzNiYzQzMTc5NjhhNzI2ODdhZjkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQyODNlMDI1ODA5OWE3NDZjYWYzYzdiOWFhYWU5ZjdmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4OGEyZTU3ZDhkOGM2NmU2NTVlMzMxOTdjMDE3YTUyYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMWU5Nzk2YjY3OTMwMjc0ZTllZWJlNTc4OWNhNTJlNzgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM2MjRlYjM4OTc4MjJkZmFlNmE2Nzg3MWE5NGI4YmZhLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2MDcyYjEwNjAzMzgwYmY3NTRlNWVkMDIwNzRkZDY1YS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmFjZjE5ODQ2ZjZkZDNlMzVhZTI5ZmI2NTdhMzYxZTcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjI2OWNiYjUxOWMyZGFmMGM0YjhmYmE4NjczMmJjZjcxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYmQ5MTIzMzUwNTNmNDZhYTEyZDc1NjBjODdlNmUxMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmJkOTEyMzM1MDUzZjQ2YWExMmQ3NTYwYzg3ZTZlMTIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZiZDkxMjMzNTA1M2Y0NmFhMTJkNzU2MGM4N2U2ZTEyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmYmQ5MTIzMzUwNTNmNDZhYTEyZDc1NjBjODdlNmUxMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGI2ODhhNTc2N2QzNjk4NWExOGNjNzAwYzljNTUwNjIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjI0MjE2N2JiZTNlMjAxNWFjODU4MzA0ZGNjYjg1ZmJiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiODAxNjFiYTMwZDI5OGUyZGQyMjA4MDAxZDQ1MWYxZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjgwMTYxYmEzMGQyOThlMmRkMjIwODAwMWQ0NTFmMWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImMxMjI0NzBhNjJiZWU0OWFhMzcxMjJhN2Y5NzM0ODA2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1NGMwOGE3MjM3NDdmYjNmOWFhZWNiYjMzMDk1MTVjNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjQzY2Q2MTM3ODBlNmRjNmI2OTBmN2NjMTRkNmZmZWUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjc0YzE3NzUwZGE4NjRiYmFjNWYxMTk3MTAxYjQ3Zjk2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1NmE2N2U1MjFlNWIwOGFlZTgwYzk3ODEwYWQ5MzZkMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGM1OGE2OTYzNzQ1MWU1MzE5OWE5MGFiNzU2ZWQ5MjIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjE0YjkyMmY4Zjg4NGMzOTY3NDVlNDIwNzAxZjg2NGRmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3MjU4NjcwZTY0MWQ4MzRkY2I4ZTYyNWQ0ZGRhZDBlYy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWM5NDAyNDlhNWZiMWJiMTAxOTg0M2FkMGQyMjZmZGUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ3YjY0ZmM0ZmZlMjhmNjM4MTRlMThhNzk4MTBlMjAxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjNTljZjVkZjM4ZjliMzM1MGU2YTY3YzM4MTQ4YTIyZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTBjOWJiYjU4ZDRhNTMwZDVkZjY2ZTZiODVjY2NiMzcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjU5ZTUxMjFmNGVlYjk5OWM3OGVlZTViY2YwZTA2MGI4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzYWExZGI5NjI0ZTdmMTdhNDBlZmQzYmExMDZlYTAxNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2IzNTBiNDBjZDhlNmI4NTAxZTMyMGI1YjNmZTBjOTQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFkYjVmZTZhZGM4N2IwNmVmN2NjODk3YmM0ZmM5MmQ1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2NGEzZDQzMGVjZDM3ODU4ODc4YmM5NWQ1ZWJkNmQ2ZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTc1M2QzZWI3OGExNWNiNjMxOGM4N2VjMjZmMTViNmIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjcyM2EzMmYyMWEyZDU0NTM3NGRlZDFmODk0MjUxMGI5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0YmZkOGEyZjFmYWE0OGIyMWFkODQwOGQ2NjhlNDVkYi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjAyNjlhMTA5Yzc3OGZlNjRjZDVmZjllZTFlYjQ1NzIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjIxMjUxYjIwYTdlMzIyOWU1ZDExOGRhM2RiOTQwYmU4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwN2NjNjYwMjQ5MzYyNDFhMTYyMzM2YmJmYTJhM2UwMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmUyZDUwMTU3ODA1ZTZmMTU1N2JhYjY3YTk0YzYzZGIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkwYjUzMTBjYzA5M2M3NDAzMjFmZmVmYWY5ZWQzNDhhLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhZWYyZWYyM2FhNDVkMWMwZTgyM2YwYmM1YTVlZjBkNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWRhNzkwYjlkZDE0ZmNjZGJmM2ZmZWJjYzdlZWQ5YmYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQyMTIxNjUzZmI4YjEzOTBlOTExMzVlODNhZmU1YWE3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwM2RjM2ExZGFjZTkwYjJlNWQ5YmZlOTgwY2YxMDE2Ny5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjBiZjNkMDRjMzU2ZmI1OTI0ZGM5NDUxNThlOGI1YTQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU4OTdmZDc5YTRjNDBhZjg1ZGI1ZDEyZGJhYjNmMjUzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3NTNmMzY1Y2U0YzI3MTcwMzY1OWVhZmE3ODE0OWQ5YS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTA4YTc3YmYxMTQ5YzA5YzNiYjBiNDkwZTNhMzU3ZDIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBmNTJhY2EwNzk5MDc5MzMyYzg5ZDY5ZDM5M2Y0OTAwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxYTU0NmEzMmY4YmJlOTkwZmJhZDczYmU1ZTllMDdiNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzllNWZkNjI4NDgyYzIxYTNkOGVjZTVjMjBlZTE0YjcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI0ZjJmYmM3NDQ2ZWI2NGI5NTllODgzNjVhNjFkZmIwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhMjczOTMwNzQ3MzZhNTk3YTVlOTI0Mzg5NjAwZmZhMC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjBhYWI3ZTQzYTIwZTllZDBmZTZmZWQ5Yzc3ZWQzNzIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQwMTIyOTk3YTY3M2U3MDNiODliNjk0M2M3ZDU3YjRjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiZmY2ODYxYzI0YzRiMDc3MjU5NTkxMTY1Yjg4N2QyNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTA2YmIxMWU4MGU2YWNhOGFlOTc4NGU5MDhmYjhmNDgucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImY1Mzc2ZDRkZWRhYjE3ZjQ3OWM1Y2MyNGMwYWJhNDBiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlODRhNWNjNzY3N2ExMjcwZDNjZmYzYzQ1NzYyNzJjOC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGMyODgyZGNmMmMxOWNhMWQ2MDY2ODdhMzA3NDBkZjcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA5Y2JmZTEwYjIzMGFiYTA0ZGFhMDQ5MDIyY2ZhMWUyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwZjA0ZWRmZmYwNmMwYjYwZWFlN2Y1OTczYjE2OWExMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2RiZDFhOTNkNTAxNWVhM2U4YWFjNTE5MjMzOThlNzkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjVhNGYyYjU5MmNlZmYxNTg4MjlmNDVjOGIxNDBiNzJjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0MDdlNGJiZGIzNWFjYjEwZGJhNDlhZGVlMTA3ZmQ2ZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDJjZTMxNzU0OWE1NGM1YWNiMTczZTUzNGY3ZWZlN2MucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQwZTgyZjQyZGYxYjc4YTY0MDE4NzMxZDRmM2Q0ZjI2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwY2QzNmQ5YmFkODIwZGYzNjExZmIxZjQxMWQzNjhhYS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTI3Mzc4ZDMxN2I2YTFmYmE2Zjk1YjU1NWU0ZjBjMjcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ4OTUzZTA5ZjRkYzY5YmI4MTMyNTI5NWFmYmI1ZmEwLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2NDAzOGM0MzIwNjlhNTVjOTk1M2E0ZGQzNGRjZjA2ZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjZhNjUwZTlmMmQ5Y2IyMjhkZGFhNmYzMThkOTAxZDEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFiOGM1ZDUwNDgyOTJlMmE5OGJhZWI2YzRmNDk0MWViLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5MWY3NWM2OTRjNTVmYjc4NTU3NzY1MTJiN2YzNjgzNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTljY2ZjODdiZjVjN2NhODNmNjc2NDc3MmUzMGVhMjQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU1MzE4NWQyMmU2ZmM4ZjgyOWJhYjNmYTIxZTRlYWQxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1ZmVjN2NmNTgxYmMwNGYxODVkYjc4OWVjOWRkNGM0Zi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNzExZDg1NWIwZWFlNmE2NjdhYWI4NWM2ZDMzNTFlZTQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkxNjA1YTU0ZGRlMTM4YTJmMzQ0NTg2ZWM4YWMyM2IzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjZTEzZDU0MDRiNWEwMzNiZjdhODYyYTRiMjI4M2VkMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWFhNDUzMTIzNTJkYjc3MDNjYzg5NTBkY2JjZjliOGMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA5MTY2NGU3MzA4YjQ4NzQzNGZjMzIyZTUyNmEyNDZjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxMDM0NmUzYmM0YTgzYWJjY2ZiMDljOTdjZTQ4MTIxMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmFmM2Y5MDY4ZjFkMTU2N2M3MDBmYWNlMDg2ODkzODAucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjk5ZDFhZGU1OGFmM2I2MzM3ZTJmMTEzOWQ4OTc0ZDk3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4MDVhMmMzODE4M2JlYWY0Y2Q2ZjZiMGVjNGIzOWM5Zi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzIzZGQyY2EyNjVhYTkyNTg5MTYxNTQ4OTVhMWQzNTYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImEwNjk2OGU3MjkzYmRkM2JhNWI1ZTIxOWU5MDg1NWU5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwMjllZDk5MjJiYmE5ZjI5ZTdiZWNiMmRiM2U1MDdiZC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTEzODUwNDgzM2IyMjk0NGQ4MzM1MjRjNjM1MTFhNmEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNlMzdjMzhiMzJiNzBmYjAyYzkxNGUwZjM5ZGZlZmYxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3ZWRjODZiYjUwNzVlOWU3ZWU3MWJiYjQwNzE5NjIwMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZGQ5YWU1ODIxYjdkNWM0MDg3ZjIxNDVmZDk0YWRkMGEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjk0OTg4NDhmZTc3ZjUyYjA5ZTMzZDIxOWY4ZjE0NTA1LnBuZ1wiOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vYXNzZXRzL0Nyb3NzaGFpcl9SZWQuY3VyXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaDEge1xcbiAgICBtYXJnaW46IDAgMCAxNHB4IDA7XFxufVxcblxcbmgzIHtcXG4gICAgbWFyZ2luOiA2cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuY2FudmFzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiA2cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxufVxcblxcbi5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjYsIDE4NCwgMjIxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgb3V0bGluZTogNnB4IHNvbGlkIHllbGxvdztcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYig0NiwgMTYzLCAxOTkpO1xcbn1cXG5cXG4uYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxMSwgNjMsIDc5KTtcXG59XFxuXFxuLnNhdmVCdG4ge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzQsIDIyOCwgOTUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA3OTBweDtcXG4gICAgbGVmdDogNTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5tZW51QnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIGxlZnQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ucHJvcGVydGllc0J0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICBsZWZ0OiAxNzVweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5idWlsZGVyQnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIGxlZnQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjExLCAyMzgsIDI0Nyk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgdG9wOiAxMjVweDtcXG4gICAgbGVmdDogNTBweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4ucHJvcC1tZW51IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIxMSwgMjM4LCAyNDcpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIHRvcDogMTI1cHg7XFxuICAgIGxlZnQ6IDUwcHg7XFxuICAgIHdpZHRoOiAzNTBweDsgXFxufVxcblxcbi5idWlsZGVyLW1vZGUge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjExLCAyMzgsIDI0Nyk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgdG9wOiAxMjVweDtcXG4gICAgbGVmdDogNTBweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbn1cXG5cXG4uYnVpbGRlci0tdGlsZS1zZWxlY3RvciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYig3MSwgNzUsIDcyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJ1aWxkZXItLXRpbGUtaW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIHdpZHRoOiAxMHZoO1xcbiAgICBtYXJnaW46IDF2aDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLnJlbW92aW5nLXRpbGVzOmhvdmVyIHtcXG4gICAgY3Vyc29yOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLCBkZWZhdWx0O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0RBQW1EO0FBQ3ZEOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5oMSB7XFxuICAgIG1hcmdpbjogMCAwIDE0cHggMDtcXG59XFxuXFxuaDMge1xcbiAgICBtYXJnaW46IDZweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIHBhZGRpbmc6IDZweDtcXG59XFxuXFxubGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDZweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYig2NiwgMTg0LCAyMjEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBvdXRsaW5lOiA2cHggc29saWQgeWVsbG93O1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDQ2LCAxNjMsIDE5OSk7XFxufVxcblxcbi5idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDExLCA2MywgNzkpO1xcbn1cXG5cXG4uc2F2ZUJ0biB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzNCwgMjI4LCA5NSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDc5MHB4O1xcbiAgICBsZWZ0OiA1MHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLm1lbnVCdG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTBweDtcXG4gICAgbGVmdDogNTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5wcm9wZXJ0aWVzQnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIGxlZnQ6IDE3NXB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmJ1aWxkZXJCdG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTBweDtcXG4gICAgbGVmdDogMzAwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMTEsIDIzOCwgMjQ3KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICB0b3A6IDEyNXB4O1xcbiAgICBsZWZ0OiA1MHB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5wcm9wLW1lbnUge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjExLCAyMzgsIDI0Nyk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgdG9wOiAxMjVweDtcXG4gICAgbGVmdDogNTBweDtcXG4gICAgd2lkdGg6IDM1MHB4OyBcXG59XFxuXFxuLmJ1aWxkZXItbW9kZSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMTEsIDIzOCwgMjQ3KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICB0b3A6IDEyNXB4O1xcbiAgICBsZWZ0OiA1MHB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxufVxcblxcbi5idWlsZGVyLS10aWxlLXNlbGVjdG9yIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDcxLCA3NSwgNzIpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYnVpbGRlci0tdGlsZS1pbWFnZSB7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgd2lkdGg6IDEwdmg7XFxuICAgIG1hcmdpbjogMXZoO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4ucmVtb3ZpbmctdGlsZXM6aG92ZXIge1xcbiAgICBjdXJzb3I6IHVybCgnLi4vYXNzZXRzL0Nyb3NzaGFpcl9SZWQuY3VyJyksIGRlZmF1bHQ7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGNsYXNzIEltYWdlQnVpbGRlciB7XG4gICAgaW1hZ2VzOiBIVE1MSW1hZ2VFbGVtZW50W107XG5cbiAgICBjb25zdHJ1Y3RvcihpbWFnZXNTb3VyY2VzOiBzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmltYWdlcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGltZyBvZiBpbWFnZXNTb3VyY2VzKSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gaW1nO1xuICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChpbWFnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJbWFnZXMoKTogSFRNTEltYWdlRWxlbWVudFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VzO1xuICAgIH1cbn1cbiIsImltcG9ydCBpZGxlMCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0lkbGVfXzAwMC5wbmcnO1xuaW1wb3J0IGlkbGUxIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSWRsZV9fMDAxLnBuZyc7XG5pbXBvcnQgaWRsZTIgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9JZGxlX18wMDIucG5nJztcbmltcG9ydCBpZGxlMyBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0lkbGVfXzAwMy5wbmcnO1xuaW1wb3J0IGlkbGU0IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSWRsZV9fMDA0LnBuZyc7XG5pbXBvcnQgaWRsZTUgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9JZGxlX18wMDUucG5nJztcbmltcG9ydCBpZGxlNiBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0lkbGVfXzAwNi5wbmcnO1xuaW1wb3J0IGlkbGU3IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSWRsZV9fMDA3LnBuZyc7XG5pbXBvcnQgaWRsZTggZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9JZGxlX18wMDgucG5nJztcbmltcG9ydCBpZGxlOSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0lkbGVfXzAwOS5wbmcnO1xuaW1wb3J0IGlkbGVMMCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0lkbGVMX18wMDAucG5nJztcbmltcG9ydCBpZGxlTDEgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9JZGxlTF9fMDAxLnBuZyc7XG5pbXBvcnQgaWRsZUwyIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSWRsZUxfXzAwMi5wbmcnO1xuaW1wb3J0IGlkbGVMMyBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0lkbGVMX18wMDMucG5nJztcbmltcG9ydCBpZGxlTDQgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9JZGxlTF9fMDA0LnBuZyc7XG5pbXBvcnQgaWRsZUw1IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSWRsZUxfXzAwNS5wbmcnO1xuaW1wb3J0IGlkbGVMNiBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0lkbGVMX18wMDYucG5nJztcbmltcG9ydCBpZGxlTDcgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9JZGxlTF9fMDA3LnBuZyc7XG5pbXBvcnQgaWRsZUw4IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSWRsZUxfXzAwOC5wbmcnO1xuaW1wb3J0IGlkbGVMOSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0lkbGVMX18wMDkucG5nJztcblxuaW1wb3J0IGF0dGFjazAgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9BdHRhY2tfXzAwMC5wbmcnO1xuaW1wb3J0IGF0dGFjazEgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9BdHRhY2tfXzAwMS5wbmcnO1xuaW1wb3J0IGF0dGFjazIgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9BdHRhY2tfXzAwMi5wbmcnO1xuaW1wb3J0IGF0dGFjazMgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9BdHRhY2tfXzAwMy5wbmcnO1xuaW1wb3J0IGF0dGFjazQgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9BdHRhY2tfXzAwNC5wbmcnO1xuaW1wb3J0IGF0dGFjazUgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9BdHRhY2tfXzAwNS5wbmcnO1xuaW1wb3J0IGF0dGFjazYgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9BdHRhY2tfXzAwNi5wbmcnO1xuaW1wb3J0IGF0dGFjazcgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9BdHRhY2tfXzAwNy5wbmcnO1xuaW1wb3J0IGF0dGFjazggZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9BdHRhY2tfXzAwOC5wbmcnO1xuaW1wb3J0IGF0dGFjazkgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9BdHRhY2tfXzAwOS5wbmcnO1xuaW1wb3J0IGF0dGFja0wwIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQXR0YWNrTF9fMDAwLnBuZyc7XG5pbXBvcnQgYXR0YWNrTDEgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9BdHRhY2tMX18wMDEucG5nJztcbmltcG9ydCBhdHRhY2tMMiBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0F0dGFja0xfXzAwMi5wbmcnO1xuaW1wb3J0IGF0dGFja0wzIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQXR0YWNrTF9fMDAzLnBuZyc7XG5pbXBvcnQgYXR0YWNrTDQgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9BdHRhY2tMX18wMDQucG5nJztcbmltcG9ydCBhdHRhY2tMNSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0F0dGFja0xfXzAwNS5wbmcnO1xuaW1wb3J0IGF0dGFja0w2IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQXR0YWNrTF9fMDA2LnBuZyc7XG5pbXBvcnQgYXR0YWNrTDcgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9BdHRhY2tMX18wMDcucG5nJztcbmltcG9ydCBhdHRhY2tMOCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0F0dGFja0xfXzAwOC5wbmcnO1xuaW1wb3J0IGF0dGFja0w5IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQXR0YWNrTF9fMDA5LnBuZyc7XG5cbmltcG9ydCBydW4wIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvUnVuX18wMDAucG5nJztcbmltcG9ydCBydW4xIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvUnVuX18wMDEucG5nJztcbmltcG9ydCBydW4yIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvUnVuX18wMDIucG5nJztcbmltcG9ydCBydW4zIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvUnVuX18wMDMucG5nJztcbmltcG9ydCBydW40IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvUnVuX18wMDQucG5nJztcbmltcG9ydCBydW41IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvUnVuX18wMDUucG5nJztcbmltcG9ydCBydW42IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvUnVuX18wMDYucG5nJztcbmltcG9ydCBydW43IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvUnVuX18wMDcucG5nJztcbmltcG9ydCBydW44IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvUnVuX18wMDgucG5nJztcbmltcG9ydCBydW45IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvUnVuX18wMDkucG5nJztcbmltcG9ydCBydW5MMCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1J1bkxfXzAwMC5wbmcnO1xuaW1wb3J0IHJ1bkwxIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvUnVuTF9fMDAxLnBuZyc7XG5pbXBvcnQgcnVuTDIgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9SdW5MX18wMDIucG5nJztcbmltcG9ydCBydW5MMyBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1J1bkxfXzAwMy5wbmcnO1xuaW1wb3J0IHJ1bkw0IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvUnVuTF9fMDA0LnBuZyc7XG5pbXBvcnQgcnVuTDUgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9SdW5MX18wMDUucG5nJztcbmltcG9ydCBydW5MNiBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1J1bkxfXzAwNi5wbmcnO1xuaW1wb3J0IHJ1bkw3IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvUnVuTF9fMDA3LnBuZyc7XG5pbXBvcnQgcnVuTDggZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9SdW5MX18wMDgucG5nJztcbmltcG9ydCBydW5MOSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1J1bkxfXzAwOS5wbmcnO1xuXG5pbXBvcnQgY2xpbWIwIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQ2xpbWJfMDAwLnBuZyc7XG5pbXBvcnQgY2xpbWIxIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQ2xpbWJfMDAxLnBuZyc7XG5pbXBvcnQgY2xpbWIyIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQ2xpbWJfMDAyLnBuZyc7XG5pbXBvcnQgY2xpbWIzIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQ2xpbWJfMDAzLnBuZyc7XG5pbXBvcnQgY2xpbWI0IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQ2xpbWJfMDA0LnBuZyc7XG5pbXBvcnQgY2xpbWI1IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQ2xpbWJfMDA1LnBuZyc7XG5pbXBvcnQgY2xpbWI2IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQ2xpbWJfMDA2LnBuZyc7XG5pbXBvcnQgY2xpbWI3IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQ2xpbWJfMDA3LnBuZyc7XG5pbXBvcnQgY2xpbWI4IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQ2xpbWJfMDA4LnBuZyc7XG5pbXBvcnQgY2xpbWI5IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvQ2xpbWJfMDA5LnBuZyc7XG5cbmltcG9ydCBkZWFkMCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0RlYWRfXzAwMC5wbmcnO1xuaW1wb3J0IGRlYWQxIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvRGVhZF9fMDAxLnBuZyc7XG5pbXBvcnQgZGVhZDIgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9EZWFkX18wMDIucG5nJztcbmltcG9ydCBkZWFkMyBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0RlYWRfXzAwMy5wbmcnO1xuaW1wb3J0IGRlYWQ0IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvRGVhZF9fMDA0LnBuZyc7XG5pbXBvcnQgZGVhZDUgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9EZWFkX18wMDUucG5nJztcbmltcG9ydCBkZWFkNiBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0RlYWRfXzAwNi5wbmcnO1xuaW1wb3J0IGRlYWQ3IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvRGVhZF9fMDA3LnBuZyc7XG5pbXBvcnQgZGVhZDggZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9EZWFkX18wMDgucG5nJztcbmltcG9ydCBkZWFkOSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0RlYWRfXzAwOS5wbmcnO1xuaW1wb3J0IGRlYWRMMCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0RlYWRMX18wMDAucG5nJztcbmltcG9ydCBkZWFkTDEgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9EZWFkTF9fMDAxLnBuZyc7XG5pbXBvcnQgZGVhZEwyIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvRGVhZExfXzAwMi5wbmcnO1xuaW1wb3J0IGRlYWRMMyBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0RlYWRMX18wMDMucG5nJztcbmltcG9ydCBkZWFkTDQgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9EZWFkTF9fMDA0LnBuZyc7XG5pbXBvcnQgZGVhZEw1IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvRGVhZExfXzAwNS5wbmcnO1xuaW1wb3J0IGRlYWRMNiBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0RlYWRMX18wMDYucG5nJztcbmltcG9ydCBkZWFkTDcgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9EZWFkTF9fMDA3LnBuZyc7XG5pbXBvcnQgZGVhZEw4IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvRGVhZExfXzAwOC5wbmcnO1xuaW1wb3J0IGRlYWRMOSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0RlYWRMX18wMDkucG5nJztcblxuaW1wb3J0IGdsaWRlMCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlXzAwMC5wbmcnO1xuaW1wb3J0IGdsaWRlMSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlXzAwMS5wbmcnO1xuaW1wb3J0IGdsaWRlMiBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlXzAwMi5wbmcnO1xuaW1wb3J0IGdsaWRlMyBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlXzAwMy5wbmcnO1xuaW1wb3J0IGdsaWRlNCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlXzAwNC5wbmcnO1xuaW1wb3J0IGdsaWRlNSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlXzAwNS5wbmcnO1xuaW1wb3J0IGdsaWRlNiBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlXzAwNi5wbmcnO1xuaW1wb3J0IGdsaWRlNyBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlXzAwNy5wbmcnO1xuaW1wb3J0IGdsaWRlOCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlXzAwOC5wbmcnO1xuaW1wb3J0IGdsaWRlOSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlXzAwOS5wbmcnO1xuaW1wb3J0IGdsaWRlTDAgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9HbGlkZUxfMDAwLnBuZyc7XG5pbXBvcnQgZ2xpZGVMMSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlTF8wMDEucG5nJztcbmltcG9ydCBnbGlkZUwyIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvR2xpZGVMXzAwMi5wbmcnO1xuaW1wb3J0IGdsaWRlTDMgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9HbGlkZUxfMDAzLnBuZyc7XG5pbXBvcnQgZ2xpZGVMNCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlTF8wMDQucG5nJztcbmltcG9ydCBnbGlkZUw1IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvR2xpZGVMXzAwNS5wbmcnO1xuaW1wb3J0IGdsaWRlTDYgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9HbGlkZUxfMDA2LnBuZyc7XG5pbXBvcnQgZ2xpZGVMNyBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0dsaWRlTF8wMDcucG5nJztcbmltcG9ydCBnbGlkZUw4IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvR2xpZGVMXzAwOC5wbmcnO1xuaW1wb3J0IGdsaWRlTDkgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9HbGlkZUxfMDA5LnBuZyc7XG5cbmltcG9ydCBqdW1wMCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfXzAwMC5wbmcnO1xuaW1wb3J0IGp1bXAxIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9fMDAxLnBuZyc7XG5pbXBvcnQganVtcDIgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX18wMDIucG5nJztcbmltcG9ydCBqdW1wMyBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfXzAwMy5wbmcnO1xuaW1wb3J0IGp1bXA0IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9fMDA0LnBuZyc7XG5pbXBvcnQganVtcDUgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX18wMDUucG5nJztcbmltcG9ydCBqdW1wNiBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfXzAwNi5wbmcnO1xuaW1wb3J0IGp1bXA3IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9fMDA3LnBuZyc7XG5pbXBvcnQganVtcDggZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX18wMDgucG5nJztcbmltcG9ydCBqdW1wOSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfXzAwOS5wbmcnO1xuaW1wb3J0IGp1bXBMMCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBMX18wMDAucG5nJztcbmltcG9ydCBqdW1wTDEgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wTF9fMDAxLnBuZyc7XG5pbXBvcnQganVtcEwyIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcExfXzAwMi5wbmcnO1xuaW1wb3J0IGp1bXBMMyBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBMX18wMDMucG5nJztcbmltcG9ydCBqdW1wTDQgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wTF9fMDA0LnBuZyc7XG5pbXBvcnQganVtcEw1IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcExfXzAwNS5wbmcnO1xuaW1wb3J0IGp1bXBMNiBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBMX18wMDYucG5nJztcbmltcG9ydCBqdW1wTDcgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wTF9fMDA3LnBuZyc7XG5pbXBvcnQganVtcEw4IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcExfXzAwOC5wbmcnO1xuaW1wb3J0IGp1bXBMOSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBMX18wMDkucG5nJztcblxuaW1wb3J0IGp1bXBBdHRhY2swIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9BdHRhY2tfXzAwMC5wbmcnO1xuaW1wb3J0IGp1bXBBdHRhY2sxIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9BdHRhY2tfXzAwMS5wbmcnO1xuaW1wb3J0IGp1bXBBdHRhY2syIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9BdHRhY2tfXzAwMi5wbmcnO1xuaW1wb3J0IGp1bXBBdHRhY2szIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9BdHRhY2tfXzAwMy5wbmcnO1xuaW1wb3J0IGp1bXBBdHRhY2s0IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9BdHRhY2tfXzAwNC5wbmcnO1xuaW1wb3J0IGp1bXBBdHRhY2s1IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9BdHRhY2tfXzAwNS5wbmcnO1xuaW1wb3J0IGp1bXBBdHRhY2s2IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9BdHRhY2tfXzAwNi5wbmcnO1xuaW1wb3J0IGp1bXBBdHRhY2s3IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9BdHRhY2tfXzAwNy5wbmcnO1xuaW1wb3J0IGp1bXBBdHRhY2s4IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9BdHRhY2tfXzAwOC5wbmcnO1xuaW1wb3J0IGp1bXBBdHRhY2s5IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9BdHRhY2tfXzAwOS5wbmcnO1xuaW1wb3J0IGp1bXBBdHRhY2tMMCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfQXR0YWNrTF9fMDAwLnBuZyc7XG5pbXBvcnQganVtcEF0dGFja0wxIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9BdHRhY2tMX18wMDEucG5nJztcbmltcG9ydCBqdW1wQXR0YWNrTDIgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX0F0dGFja0xfXzAwMi5wbmcnO1xuaW1wb3J0IGp1bXBBdHRhY2tMMyBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfQXR0YWNrTF9fMDAzLnBuZyc7XG5pbXBvcnQganVtcEF0dGFja0w0IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9BdHRhY2tMX18wMDQucG5nJztcbmltcG9ydCBqdW1wQXR0YWNrTDUgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX0F0dGFja0xfXzAwNS5wbmcnO1xuaW1wb3J0IGp1bXBBdHRhY2tMNiBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfQXR0YWNrTF9fMDA2LnBuZyc7XG5pbXBvcnQganVtcEF0dGFja0w3IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9BdHRhY2tMX18wMDcucG5nJztcbmltcG9ydCBqdW1wQXR0YWNrTDggZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX0F0dGFja0xfXzAwOC5wbmcnO1xuaW1wb3J0IGp1bXBBdHRhY2tMOSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfQXR0YWNrTF9fMDA5LnBuZyc7XG5cbmltcG9ydCBqdW1wVGhyb3cwIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9UaHJvd19fMDAwLnBuZyc7XG5pbXBvcnQganVtcFRocm93MSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfVGhyb3dfXzAwMS5wbmcnO1xuaW1wb3J0IGp1bXBUaHJvdzIgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93X18wMDIucG5nJztcbmltcG9ydCBqdW1wVGhyb3czIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9UaHJvd19fMDAzLnBuZyc7XG5pbXBvcnQganVtcFRocm93NCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfVGhyb3dfXzAwNC5wbmcnO1xuaW1wb3J0IGp1bXBUaHJvdzUgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93X18wMDUucG5nJztcbmltcG9ydCBqdW1wVGhyb3c2IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9UaHJvd19fMDA2LnBuZyc7XG5pbXBvcnQganVtcFRocm93NyBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL0p1bXBfVGhyb3dfXzAwNy5wbmcnO1xuaW1wb3J0IGp1bXBUaHJvdzggZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93X18wMDgucG5nJztcbmltcG9ydCBqdW1wVGhyb3c5IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvSnVtcF9UaHJvd19fMDA5LnBuZyc7XG5pbXBvcnQganVtcFRocm93TDAgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93TF9fMDAwLnBuZyc7XG5pbXBvcnQganVtcFRocm93TDEgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93TF9fMDAxLnBuZyc7XG5pbXBvcnQganVtcFRocm93TDIgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93TF9fMDAyLnBuZyc7XG5pbXBvcnQganVtcFRocm93TDMgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93TF9fMDAzLnBuZyc7XG5pbXBvcnQganVtcFRocm93TDQgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93TF9fMDA0LnBuZyc7XG5pbXBvcnQganVtcFRocm93TDUgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93TF9fMDA1LnBuZyc7XG5pbXBvcnQganVtcFRocm93TDYgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93TF9fMDA2LnBuZyc7XG5pbXBvcnQganVtcFRocm93TDcgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93TF9fMDA3LnBuZyc7XG5pbXBvcnQganVtcFRocm93TDggZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93TF9fMDA4LnBuZyc7XG5pbXBvcnQganVtcFRocm93TDkgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9KdW1wX1Rocm93TF9fMDA5LnBuZyc7XG5cbmltcG9ydCBzbGlkZTAgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9TbGlkZV9fMDAwLnBuZyc7XG5pbXBvcnQgc2xpZGUxIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvU2xpZGVfXzAwMS5wbmcnO1xuaW1wb3J0IHNsaWRlMiBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1NsaWRlX18wMDIucG5nJztcbmltcG9ydCBzbGlkZTMgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9TbGlkZV9fMDAzLnBuZyc7XG5pbXBvcnQgc2xpZGU0IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvU2xpZGVfXzAwNC5wbmcnO1xuaW1wb3J0IHNsaWRlNSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1NsaWRlX18wMDUucG5nJztcbmltcG9ydCBzbGlkZTYgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9TbGlkZV9fMDA2LnBuZyc7XG5pbXBvcnQgc2xpZGU3IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvU2xpZGVfXzAwNy5wbmcnO1xuaW1wb3J0IHNsaWRlOCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1NsaWRlX18wMDgucG5nJztcbmltcG9ydCBzbGlkZTkgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9TbGlkZV9fMDA5LnBuZyc7XG5pbXBvcnQgc2xpZGVMMCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1NsaWRlTF9fMDAwLnBuZyc7XG5pbXBvcnQgc2xpZGVMMSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1NsaWRlTF9fMDAxLnBuZyc7XG5pbXBvcnQgc2xpZGVMMiBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1NsaWRlTF9fMDAyLnBuZyc7XG5pbXBvcnQgc2xpZGVMMyBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1NsaWRlTF9fMDAzLnBuZyc7XG5pbXBvcnQgc2xpZGVMNCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1NsaWRlTF9fMDA0LnBuZyc7XG5pbXBvcnQgc2xpZGVMNSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1NsaWRlTF9fMDA1LnBuZyc7XG5pbXBvcnQgc2xpZGVMNiBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1NsaWRlTF9fMDA2LnBuZyc7XG5pbXBvcnQgc2xpZGVMNyBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1NsaWRlTF9fMDA3LnBuZyc7XG5pbXBvcnQgc2xpZGVMOCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1NsaWRlTF9fMDA4LnBuZyc7XG5pbXBvcnQgc2xpZGVMOSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1NsaWRlTF9fMDA5LnBuZyc7XG5cbmltcG9ydCB0aHJvdzAgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9UaHJvd19fMDAwLnBuZyc7XG5pbXBvcnQgdGhyb3cxIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvVGhyb3dfXzAwMS5wbmcnO1xuaW1wb3J0IHRocm93MiBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93X18wMDIucG5nJztcbmltcG9ydCB0aHJvdzMgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9UaHJvd19fMDAzLnBuZyc7XG5pbXBvcnQgdGhyb3c0IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvVGhyb3dfXzAwNC5wbmcnO1xuaW1wb3J0IHRocm93NSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93X18wMDUucG5nJztcbmltcG9ydCB0aHJvdzYgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9UaHJvd19fMDA2LnBuZyc7XG5pbXBvcnQgdGhyb3c3IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL25pbmphX3Nwcml0ZXMvVGhyb3dfXzAwNy5wbmcnO1xuaW1wb3J0IHRocm93OCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93X18wMDgucG5nJztcbmltcG9ydCB0aHJvdzkgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvbmluamFfc3ByaXRlcy9UaHJvd19fMDA5LnBuZyc7XG5pbXBvcnQgdGhyb3dMMCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDAwLnBuZyc7XG5pbXBvcnQgdGhyb3dMMSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDAxLnBuZyc7XG5pbXBvcnQgdGhyb3dMMiBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDAyLnBuZyc7XG5pbXBvcnQgdGhyb3dMMyBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDAzLnBuZyc7XG5pbXBvcnQgdGhyb3dMNCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDA0LnBuZyc7XG5pbXBvcnQgdGhyb3dMNSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDA1LnBuZyc7XG5pbXBvcnQgdGhyb3dMNiBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDA2LnBuZyc7XG5pbXBvcnQgdGhyb3dMNyBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDA3LnBuZyc7XG5pbXBvcnQgdGhyb3dMOCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDA4LnBuZyc7XG5pbXBvcnQgdGhyb3dMOSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy9uaW5qYV9zcHJpdGVzL1Rocm93TF9fMDA5LnBuZyc7XG5cbmltcG9ydCB7IEltYWdlQnVpbGRlciB9IGZyb20gJy4vaW1hZ2VCdWlsZGVyJztcbmltcG9ydCB7IEFuaW1hdGlvblR5cGVzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FuaW1hdGlvblR5cGVzJztcblxuZXhwb3J0IGNsYXNzIE5pbmphQW5pbWF0aW9ucyB7XG4gICAgYW5pbWF0aW9uczogeyBbaW5kZXg6IHN0cmluZ106IEltYWdlQnVpbGRlciB9ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zW0FuaW1hdGlvblR5cGVzLklETEVfUklHSFRdID0gbmV3IEltYWdlQnVpbGRlcihbaWRsZTAsIGlkbGUxLCBpZGxlMiwgaWRsZTMsIGlkbGU0LCBpZGxlNSwgaWRsZTYsIGlkbGU3LCBpZGxlOCwgaWRsZTldKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zW0FuaW1hdGlvblR5cGVzLklETEVfTEVGVF0gPSBuZXcgSW1hZ2VCdWlsZGVyKFtpZGxlTDAsIGlkbGVMMSwgaWRsZUwyLCBpZGxlTDMsIGlkbGVMNCwgaWRsZUw1LCBpZGxlTDYsIGlkbGVMNywgaWRsZUw4LCBpZGxlTDldKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zW0FuaW1hdGlvblR5cGVzLkFUVEFDS19SSUdIVF0gPSBuZXcgSW1hZ2VCdWlsZGVyKFthdHRhY2swLCBhdHRhY2sxLCBhdHRhY2syLCBhdHRhY2szLCBhdHRhY2s0LCBhdHRhY2s1LCBhdHRhY2s2LCBhdHRhY2s3LCBhdHRhY2s4LCBhdHRhY2s5XSk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uc1tBbmltYXRpb25UeXBlcy5BVFRBQ0tfTEVGVF0gPSBuZXcgSW1hZ2VCdWlsZGVyKFthdHRhY2tMMCwgYXR0YWNrTDEsIGF0dGFja0wyLCBhdHRhY2tMMywgYXR0YWNrTDQsIGF0dGFja0w1LCBhdHRhY2tMNiwgYXR0YWNrTDcsIGF0dGFja0w4LCBhdHRhY2tMOV0pO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnNbQW5pbWF0aW9uVHlwZXMuUlVOX1JJR0hUXSA9IG5ldyBJbWFnZUJ1aWxkZXIoW3J1bjAsIHJ1bjEsIHJ1bjIsIHJ1bjMsIHJ1bjQsIHJ1bjUsIHJ1bjYsIHJ1bjcsIHJ1bjgsIHJ1bjldKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zW0FuaW1hdGlvblR5cGVzLlJVTl9MRUZUXSA9IG5ldyBJbWFnZUJ1aWxkZXIoW3J1bkwwLCBydW5MMSwgcnVuTDIsIHJ1bkwzLCBydW5MNCwgcnVuTDUsIHJ1bkw2LCBydW5MNywgcnVuTDgsIHJ1bkw5XSk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uc1tBbmltYXRpb25UeXBlcy5DTElNQl0gPSBuZXcgSW1hZ2VCdWlsZGVyKFtjbGltYjAsIGNsaW1iMSwgY2xpbWIyLCBjbGltYjMsIGNsaW1iNCwgY2xpbWI1LCBjbGltYjYsIGNsaW1iNywgY2xpbWI4LCBjbGltYjldKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zW0FuaW1hdGlvblR5cGVzLkRFQURfUklHSFRdID0gbmV3IEltYWdlQnVpbGRlcihbZGVhZDAsIGRlYWQxLCBkZWFkMiwgZGVhZDMsIGRlYWQ0LCBkZWFkNSwgZGVhZDYsIGRlYWQ3LCBkZWFkOCwgZGVhZDldKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zW0FuaW1hdGlvblR5cGVzLkRFQURfTEVGVF0gPSBuZXcgSW1hZ2VCdWlsZGVyKFtkZWFkTDAsIGRlYWRMMSwgZGVhZEwyLCBkZWFkTDMsIGRlYWRMNCwgZGVhZEw1LCBkZWFkTDYsIGRlYWRMNywgZGVhZEw4LCBkZWFkTDldKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zW0FuaW1hdGlvblR5cGVzLkdMSURFX1JJR0hUXSA9IG5ldyBJbWFnZUJ1aWxkZXIoW2dsaWRlMCwgZ2xpZGUxLCBnbGlkZTIsIGdsaWRlMywgZ2xpZGU0LCBnbGlkZTUsIGdsaWRlNiwgZ2xpZGU3LCBnbGlkZTgsIGdsaWRlOV0pO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnNbQW5pbWF0aW9uVHlwZXMuR0xJREVfTEVGVF0gPSBuZXcgSW1hZ2VCdWlsZGVyKFtnbGlkZUwwLCBnbGlkZUwxLCBnbGlkZUwyLCBnbGlkZUwzLCBnbGlkZUw0LCBnbGlkZUw1LCBnbGlkZUw2LCBnbGlkZUw3LCBnbGlkZUw4LCBnbGlkZUw5XSk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uc1tBbmltYXRpb25UeXBlcy5KVU1QX1JJR0hUXSA9IG5ldyBJbWFnZUJ1aWxkZXIoW2p1bXAwLCBqdW1wMSwganVtcDIsIGp1bXAzLCBqdW1wNCwganVtcDUsIGp1bXA2LCBqdW1wNywganVtcDgsIGp1bXA5XSk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uc1tBbmltYXRpb25UeXBlcy5KVU1QX0xFRlRdID0gbmV3IEltYWdlQnVpbGRlcihbanVtcEwwLCBqdW1wTDEsIGp1bXBMMiwganVtcEwzLCBqdW1wTDQsIGp1bXBMNSwganVtcEw2LCBqdW1wTDcsIGp1bXBMOCwganVtcEw5XSk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uc1tBbmltYXRpb25UeXBlcy5KVU1QX0FUVEFDS19SSUdIVF0gPSBuZXcgSW1hZ2VCdWlsZGVyKFtqdW1wQXR0YWNrMCwganVtcEF0dGFjazEsIGp1bXBBdHRhY2syLCBqdW1wQXR0YWNrMywganVtcEF0dGFjazQsIGp1bXBBdHRhY2s1LCBqdW1wQXR0YWNrNiwganVtcEF0dGFjazcsIGp1bXBBdHRhY2s4LCBqdW1wQXR0YWNrOV0pO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnNbQW5pbWF0aW9uVHlwZXMuSlVNUF9BVFRBQ0tfTEVGVF0gPSBuZXcgSW1hZ2VCdWlsZGVyKFtqdW1wQXR0YWNrTDAsIGp1bXBBdHRhY2tMMSwganVtcEF0dGFja0wyLCBqdW1wQXR0YWNrTDMsIGp1bXBBdHRhY2tMNCwganVtcEF0dGFja0w1LCBqdW1wQXR0YWNrTDYsIGp1bXBBdHRhY2tMNywganVtcEF0dGFja0w4LCBqdW1wQXR0YWNrTDldKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zW0FuaW1hdGlvblR5cGVzLkpVTVBfVEhST1dfUklHSFRdID0gbmV3IEltYWdlQnVpbGRlcihbanVtcFRocm93MCwganVtcFRocm93MSwganVtcFRocm93MiwganVtcFRocm93MywganVtcFRocm93NCwganVtcFRocm93NSwganVtcFRocm93NiwganVtcFRocm93NywganVtcFRocm93OCwganVtcFRocm93OV0pO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnNbQW5pbWF0aW9uVHlwZXMuSlVNUF9USFJPV19MRUZUXSA9IG5ldyBJbWFnZUJ1aWxkZXIoW2p1bXBUaHJvd0wwLCBqdW1wVGhyb3dMMSwganVtcFRocm93TDIsIGp1bXBUaHJvd0wzLCBqdW1wVGhyb3dMNCwganVtcFRocm93TDUsIGp1bXBUaHJvd0w2LCBqdW1wVGhyb3dMNywganVtcFRocm93TDgsIGp1bXBUaHJvd0w5XSk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uc1tBbmltYXRpb25UeXBlcy5TTElERV9SSUdIVF0gPSBuZXcgSW1hZ2VCdWlsZGVyKFtzbGlkZTAsIHNsaWRlMSwgc2xpZGUyLCBzbGlkZTMsIHNsaWRlNCwgc2xpZGU1LCBzbGlkZTYsIHNsaWRlNywgc2xpZGU4LCBzbGlkZTldKTtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zW0FuaW1hdGlvblR5cGVzLlNMSURFX0xFRlRdID0gbmV3IEltYWdlQnVpbGRlcihbc2xpZGVMMCwgc2xpZGVMMSwgc2xpZGVMMiwgc2xpZGVMMywgc2xpZGVMNCwgc2xpZGVMNSwgc2xpZGVMNiwgc2xpZGVMNywgc2xpZGVMOCwgc2xpZGVMOV0pO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnNbQW5pbWF0aW9uVHlwZXMuVEhST1dfUklHSFRdID0gbmV3IEltYWdlQnVpbGRlcihbdGhyb3cwLCB0aHJvdzEsIHRocm93MiwgdGhyb3czLCB0aHJvdzQsIHRocm93NSwgdGhyb3c2LCB0aHJvdzcsIHRocm93OCwgdGhyb3c5XSk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uc1tBbmltYXRpb25UeXBlcy5USFJPV19MRUZUXSA9IG5ldyBJbWFnZUJ1aWxkZXIoW3Rocm93TDAsIHRocm93TDEsIHRocm93TDIsIHRocm93TDMsIHRocm93TDQsIHRocm93TDUsIHRocm93TDYsIHRocm93TDcsIHRocm93TDgsIHRocm93TDldKTtcbiAgICB9XG5cbiAgICBnZXRBbmltYXRpb24oYW5pbWF0aW9uU3RhdGU6IHN0cmluZyk6IEltYWdlQnVpbGRlciB7XG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbnNbYW5pbWF0aW9uU3RhdGVdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbmltYXRpb25zW2FuaW1hdGlvblN0YXRlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hbmltYXRpb25zW0FuaW1hdGlvblR5cGVzLklETEVfUklHSFRdO1xuICAgIH1cblxuICAgIGdldEFuaW1hdGlvblR5cGVzKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYW5pbWF0aW9ucykubWFwKGtleSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQW5pbWF0aW9uVHlwZXMge1xuICAgIHB1YmxpYyBzdGF0aWMgSURMRV9SSUdIVCA9ICdJRExFX1JJR0hUJztcbiAgICBwdWJsaWMgc3RhdGljIElETEVfTEVGVCA9ICdJRExFX0xFRlQnO1xuICAgIHB1YmxpYyBzdGF0aWMgQVRUQUNLX1JJR0hUID0gJ0FUVEFDS19SSUdIVCc7XG4gICAgcHVibGljIHN0YXRpYyBBVFRBQ0tfTEVGVCA9ICdBVFRBQ0tfTEVGVCc7XG4gICAgcHVibGljIHN0YXRpYyBSVU5fUklHSFQgPSAnUlVOX1JJR0hUJztcbiAgICBwdWJsaWMgc3RhdGljIFJVTl9MRUZUID0gJ1JVTl9MRUZUJztcbiAgICBwdWJsaWMgc3RhdGljIENMSU1CID0gJ0NMSU1CJztcbiAgICBwdWJsaWMgc3RhdGljIERFQURfUklHSFQgPSAnREVBRF9SSUdIVCc7XG4gICAgcHVibGljIHN0YXRpYyBERUFEX0xFRlQgPSAnREVBRF9MRUZUJztcbiAgICBwdWJsaWMgc3RhdGljIEdMSURFX1JJR0hUID0gJ0dMSURFX1JJR0hUJztcbiAgICBwdWJsaWMgc3RhdGljIEdMSURFX0xFRlQgPSAnR0xJREVfTEVGVCc7XG4gICAgcHVibGljIHN0YXRpYyBKVU1QX1JJR0hUID0gJ0pVTVBfUklHSFQnO1xuICAgIHB1YmxpYyBzdGF0aWMgSlVNUF9MRUZUID0gJ0pVTVBfTEVGVCc7XG4gICAgcHVibGljIHN0YXRpYyBKVU1QX0FUVEFDS19SSUdIVCA9ICdKVU1QX0FUVEFDS19SSUdIVCc7XG4gICAgcHVibGljIHN0YXRpYyBKVU1QX0FUVEFDS19MRUZUID0gJ0pVTVBfQVRUQUNLX0xFRlQnO1xuICAgIHB1YmxpYyBzdGF0aWMgSlVNUF9USFJPV19SSUdIVCA9ICdKVU1QX1RIUk9XX1JJR0hUJztcbiAgICBwdWJsaWMgc3RhdGljIEpVTVBfVEhST1dfTEVGVCA9ICdKVU1QX1RIUk9XX0xFRlQnO1xuICAgIHB1YmxpYyBzdGF0aWMgU0xJREVfUklHSFQgPSAnU0xJREVfUklHSFQnO1xuICAgIHB1YmxpYyBzdGF0aWMgU0xJREVfTEVGVCA9ICdTTElERV9MRUZUJztcbiAgICBwdWJsaWMgc3RhdGljIFRIUk9XX1JJR0hUID0gJ1RIUk9XX1JJR0hUJztcbiAgICBwdWJsaWMgc3RhdGljIFRIUk9XX0xFRlQgPSAnVEhST1dfTEVGVCc7XG59XG4iLCJleHBvcnQgY2xhc3MgTWVudU9wdGlvbnMge1xuICAgIHB1YmxpYyBzdGF0aWMgR1JJRCA9ICdHcmlkJztcbiAgICBwdWJsaWMgc3RhdGljIENPT1JESU5BVEVTID0gJ0Nvb3JkaW5hdGVzJztcbiAgICBwdWJsaWMgc3RhdGljIFNDUkVFTl9FREdFID0gJ1NjcmVlbiBFZGdlJztcbiAgICBwdWJsaWMgc3RhdGljIEhJVEJPWCA9ICdIaXRib3gnO1xuICAgIHB1YmxpYyBzdGF0aWMgREVURUNUSU9OX0JPWCA9ICdEZXRlY3Rpb24gQm94JztcbiAgICBwdWJsaWMgc3RhdGljIERFVEVDVEVEX1RJTEVTID0gJ0RldGVjdGVkIFRpbGVzJztcbiAgICBwdWJsaWMgc3RhdGljIENPTExJU0lPTl9USUxFUyA9ICdDb2xsaXNpb24gVGlsZXMnO1xuXG4gICAgc3RhdGljIGdldE9wdGlvbkxpc3QoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgdGhpcy5HUklELFxuICAgICAgICAgICAgdGhpcy5DT09SRElOQVRFUyxcbiAgICAgICAgICAgIHRoaXMuU0NSRUVOX0VER0UsXG4gICAgICAgICAgICB0aGlzLkhJVEJPWCxcbiAgICAgICAgICAgIHRoaXMuREVURUNUSU9OX0JPWCxcbiAgICAgICAgICAgIHRoaXMuREVURUNURURfVElMRVMsXG4gICAgICAgICAgICB0aGlzLkNPTExJU0lPTl9USUxFUyxcbiAgICAgICAgXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9yb290U3RhdGUnO1xuaW1wb3J0IHsgUmVuZGVyaW5nVXRpbGl0aWVzIH0gZnJvbSAnLi4vdXRpbGl0ZXMvcmVuZGVyaW5nVXRpbGl0aWVzJztcbmltcG9ydCB7IERlYnVnTWVudSB9IGZyb20gJy4vZGVidWdNZW51JztcbmltcG9ydCB7IFN0YWdlVGlsZSB9IGZyb20gJy4uL29iamVjdHMvc3RhZ2VUaWxlJztcbmltcG9ydCB7IERlYnVnTW9kZSB9IGZyb20gJy4vZGVidWdNb2RlJztcblxuZXhwb3J0IGNsYXNzIEJ1aWxkZXJNb2RlIHtcblxuICAgIHN0YXRpYyBoYW5kbGVNb3VzZUNsaWNrKGV2dDogTW91c2VFdmVudCkge1xuICAgICAgICBpZiAoU3RhdGUuYnVpbGRlclN0YXRlLmhhbmRsZU1vdXNlQ2xpY2spIHtcbiAgICAgICAgICAgIFN0YXRlLmJ1aWxkZXJTdGF0ZS5jbGlja2VkUG9zaXRpb24gPSBSZW5kZXJpbmdVdGlsaXRpZXMudG9HYW1lQ29vcmRpbmF0ZXMoeyB4OiBldnQuY2xpZW50WCwgeTogZXZ0LmNsaWVudFkgfSk7XG4gICAgICAgICAgICBTdGF0ZS5idWlsZGVyU3RhdGUuY2xpY2tlZEdyaWRDb29yZHMgPSBSZW5kZXJpbmdVdGlsaXRpZXMudG9HYW1lQ29vcmRzSW1nUm9vdChTdGF0ZS5idWlsZGVyU3RhdGUuY2xpY2tlZFBvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmIChTdGF0ZS5idWlsZGVyU3RhdGUucmVtb3ZpbmdUaWxlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlVGlsZUZyb21TdGFnZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRpbGVUb1N0YWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkQnVpbGRlckJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnVpbGRlckJ0biA9IFJlbmRlcmluZ1V0aWxpdGllcy5ub2RlQnVpbGRlcignYnV0dG9uJywgJ0J1aWxkZXInLCBbJ2J1dHRvbicsICdidWlsZGVyQnRuJ10pO1xuICAgICAgICBidWlsZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy50b2dnbGVCdWlsZGVyKCkpO1xuICAgICAgICBSZW5kZXJpbmdVdGlsaXRpZXMuYXBwZW5kTm9kZVRvQm9keShidWlsZGVyQnRuKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlQnVpbGRlckJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1aWxkZXJCdG4nKTtcbiAgICAgICAgaWYgKGJ0bikgeyBidG4ucmVtb3ZlKCk7IH1cbiAgICB9XG5cbiAgICBzdGF0aWMgYWN0aXZhdGVCdWlsZGVyQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVpbGRlckJ0bicpO1xuICAgICAgICBpZiAoYnRuKSB7IGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTsgfVxuICAgIH1cblxuICAgIHN0YXRpYyBkZWFjdGl2YXRlQnVpbGRlckJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1aWxkZXJCdG4nKTtcbiAgICAgICAgaWYgKGJ0bikgeyBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7IH1cbiAgICB9XG5cbiAgICBzdGF0aWMgdG9nZ2xlQnVpbGRlcigpIHtcbiAgICAgICAgaWYgKFN0YXRlLmJ1aWxkZXJTdGF0ZS5idWlsZGVyTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUJ1aWxkZXJNb2RlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5CdWlsZGVyTW9kZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIG9wZW5CdWlsZGVyTW9kZSgpIHtcbiAgICAgICAgRGVidWdNb2RlLnJlc2V0U3RhdGUoKTtcbiAgICAgICAgU3RhdGUuYnVpbGRlclN0YXRlLmJ1aWxkZXJNb2RlID0gdHJ1ZTtcbiAgICAgICAgU3RhdGUuYnVpbGRlclN0YXRlLmhhbmRsZU1vdXNlQ2xpY2sgPSB0cnVlO1xuXG4gICAgICAgIFN0YXRlLmJ1aWxkZXJTdGF0ZS5idWlsZGVyRW5naW5lLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVCdWlsZGVyQnV0dG9uKCk7XG4gICAgICAgIHRoaXMuYWRkQnVpbGRlck1lbnUoKTtcbiAgICAgICAgdGhpcy5vcGVuVGlsZVNlbGVjdG9yKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsb3NlQnVpbGRlck1vZGUoKSB7XG4gICAgICAgIGlmIChTdGF0ZS5idWlsZGVyU3RhdGUuYnVpbGRlck1vZGUpIHtcbiAgICAgICAgICAgIFN0YXRlLmJ1aWxkZXJTdGF0ZS5idWlsZGVyTW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgU3RhdGUuYnVpbGRlclN0YXRlLmJ1aWxkZXJFbmdpbmUuc3RvcCgpO1xuICAgICAgICAgICAgU3RhdGUuYnVpbGRlclN0YXRlLmhhbmRsZU1vdXNlQ2xpY2sgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlQnVpbGRlckJ1dHRvbigpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVCdWlsZGVyTWVudSgpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVUaWxlU2VsZWN0b3IoKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlVGlsZU1vZGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZEJ1aWxkZXJNZW51KCkge1xuICAgICAgICBjb25zdCBidWlsZGVyTWVudSA9IFJlbmRlcmluZ1V0aWxpdGllcy5ub2RlQnVpbGRlcignY29udGVudCcsICc8aDEgY2xhc3M9XCJ0aXRsZVwiPkJ1aWxkZXIgTWVudTwvaDE+JywgWydidWlsZGVyLW1vZGUnXSk7XG4gICAgICAgIHRoaXMuYWRkUGxhdGZvcm1UaWxlT3B0aW9ucyhidWlsZGVyTWVudSk7XG4gICAgICAgIFJlbmRlcmluZ1V0aWxpdGllcy5hcHBlbmROb2RlVG9Cb2R5KGJ1aWxkZXJNZW51KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlQnVpbGRlck1lbnUoKSB7XG4gICAgICAgIGNvbnN0IGJ1aWxkZXJNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1aWxkZXItbW9kZScpO1xuICAgICAgICBpZiAoYnVpbGRlck1vZGUpIHsgYnVpbGRlck1vZGUucmVtb3ZlKCk7IH1cbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkUGxhdGZvcm1UaWxlT3B0aW9ucyhidWlsZGVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5hZGRXcmFwcGVyKGJ1aWxkZXIsICdQbGF0Zm9ybSBUaWxlcycpO1xuXG4gICAgICAgIGNvbnN0IFtvcHRpb24xLCBjaGVja2JveDFdID0gdGhpcy5hZGRDaGVja2JveCgnVG9nZ2xlIFRpbGUgU2VsZWN0b3InKTtcbiAgICAgICAgU3RhdGUuYnVpbGRlclN0YXRlLnRpbGVTZWxlY3RvckNoZWNrYm94ID0gY2hlY2tib3gxIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIHRoaXMuYWRkVGlsZUNoZWNrYm94SGFuZGxpbmcoY2hlY2tib3gxKTtcblxuICAgICAgICBjb25zdCBbb3B0aW9uMiwgY2hlY2tib3gyXSA9IHRoaXMuYWRkQ2hlY2tib3goJ1JlbW92ZSBUaWxlcycpO1xuICAgICAgICBTdGF0ZS5idWlsZGVyU3RhdGUucmVtb3ZpbmdUaWxlc0NoZWNrYm94ID0gY2hlY2tib3gyIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIHRoaXMuYWRkRGVsZXRlVGlsZUNoZWNrYm94SGFuZGxpbmcoY2hlY2tib3gyKTtcblxuICAgICAgICBjb25zdCBbb3B0aW9uMywgYnV0dG9uXSA9IHRoaXMuYWRkQnV0dG9uKCdDbGVhciBTdGFnZScpO1xuICAgICAgICB0aGlzLmFkZENsZWFyU3RhZ2VDbGlja0hhbmRsaW5nKGJ1dHRvbik7XG5cbiAgICAgICAgUmVuZGVyaW5nVXRpbGl0aWVzLmFwcGVuZENoaWxkTm9kZXMod3JhcHBlciwgW29wdGlvbjEsIG9wdGlvbjIsIG9wdGlvbjNdKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkV3JhcHBlcihwYXJlbnROb2RlOiBIVE1MRWxlbWVudCwgY2F0ZWdvcnk6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IFJlbmRlcmluZ1V0aWxpdGllcy5ub2RlQnVpbGRlcignZGl2JywgJycsIFsnd3JhcHBlciddKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBSZW5kZXJpbmdVdGlsaXRpZXMubm9kZUJ1aWxkZXIoJ2gzJywgY2F0ZWdvcnkpO1xuXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRDaGVja2JveChuYW1lOiBzdHJpbmcpOiBIVE1MRWxlbWVudFtdIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBSZW5kZXJpbmdVdGlsaXRpZXMubm9kZUJ1aWxkZXIoJ2xhYmVsJywgYCR7bmFtZX1gKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgICAgIHJldHVybiBbbGFiZWwsIGNoZWNrYm94XTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkQnV0dG9uKG5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50W10ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IFJlbmRlcmluZ1V0aWxpdGllcy5ub2RlQnVpbGRlcignbGFiZWwnLCBgJHtuYW1lfWApO1xuICAgICAgICBjb25zdCBidXR0b24gPSBSZW5kZXJpbmdVdGlsaXRpZXMubm9kZUJ1aWxkZXIoJ2J1dHRvbicsIGArYCk7XG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICAgICAgcmV0dXJuIFtsYWJlbCwgYnV0dG9uXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkVGlsZUNoZWNrYm94SGFuZGxpbmcoY2hlY2tib3g6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlVGlsZVNlbGVjdG9yKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGREZWxldGVUaWxlQ2hlY2tib3hIYW5kbGluZyhjaGVja2JveDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFTdGF0ZS5idWlsZGVyU3RhdGUucmVtb3ZpbmdUaWxlcykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlVGlsZU1vZGUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlVGlsZU1vZGUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkQ2xlYXJTdGFnZUNsaWNrSGFuZGxpbmcoYnV0dG9uOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBTdGF0ZS5zdGFnZVN0YXRlLnRpbGVzLmZvckVhY2goKHRpbGU6IFN0YWdlVGlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRpbGUubG9va3VwVmFsdWUgPSAnMDAnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBvcGVuVGlsZVNlbGVjdG9yKCk6IHZvaWQge1xuICAgICAgICBTdGF0ZS5idWlsZGVyU3RhdGUudGlsZVNlbGVjdG9yT3BlbiA9IHRydWU7XG4gICAgICAgIFN0YXRlLmJ1aWxkZXJTdGF0ZS50aWxlU2VsZWN0b3JDaGVja2JveC5jaGVja2VkID0gU3RhdGUuYnVpbGRlclN0YXRlLnRpbGVTZWxlY3Rvck9wZW47XG4gICAgICAgIFN0YXRlLmJ1aWxkZXJTdGF0ZS50aWxlU2VsZWN0b3IgPSBSZW5kZXJpbmdVdGlsaXRpZXMubm9kZUJ1aWxkZXIoJ2NvbnRlbnQnLCAnPGgxIGNsYXNzPVwidGl0bGVcIj5UaWxlIFNlbGVjdG9yPC9oMT4nLCBbJ2J1aWxkZXItLXRpbGUtc2VsZWN0b3InXSk7XG4gICAgICAgIHRoaXMuYWRkVGlsZXMoU3RhdGUuYnVpbGRlclN0YXRlLnRpbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgUmVuZGVyaW5nVXRpbGl0aWVzLmFwcGVuZE5vZGVUb0JvZHkoU3RhdGUuYnVpbGRlclN0YXRlLnRpbGVTZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZVRpbGVTZWxlY3RvcigpIHtcbiAgICAgICAgaWYgKFN0YXRlLmJ1aWxkZXJTdGF0ZS50aWxlU2VsZWN0b3IpIHtcbiAgICAgICAgICAgIFN0YXRlLmJ1aWxkZXJTdGF0ZS50aWxlU2VsZWN0b3IucmVtb3ZlKCk7XG4gICAgICAgICAgICBTdGF0ZS5idWlsZGVyU3RhdGUudGlsZVNlbGVjdG9yID0gbnVsbDtcbiAgICAgICAgICAgIFN0YXRlLmJ1aWxkZXJTdGF0ZS50aWxlU2VsZWN0b3JPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBTdGF0ZS5idWlsZGVyU3RhdGUudGlsZVNlbGVjdG9yQ2hlY2tib3ggPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHRvZ2dsZVRpbGVTZWxlY3RvcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKFN0YXRlLmJ1aWxkZXJTdGF0ZS50aWxlU2VsZWN0b3JPcGVuKSB7XG4gICAgICAgICAgICBTdGF0ZS5idWlsZGVyU3RhdGUudGlsZVNlbGVjdG9yLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgU3RhdGUuYnVpbGRlclN0YXRlLnRpbGVTZWxlY3Rvck9wZW4gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFN0YXRlLmJ1aWxkZXJTdGF0ZS50aWxlU2VsZWN0b3IuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBTdGF0ZS5idWlsZGVyU3RhdGUudGlsZVNlbGVjdG9yT3BlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgU3RhdGUuYnVpbGRlclN0YXRlLnRpbGVTZWxlY3RvckNoZWNrYm94LmNoZWNrZWQgPSBTdGF0ZS5idWlsZGVyU3RhdGUudGlsZVNlbGVjdG9yT3BlbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkVGlsZXModGlsZVNlbGVjdG9yOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBsZXQgaW1nUm93V3JhcHBlcjogSFRNTEVsZW1lbnQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDE4OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IFN0YXRlLnRpbGVTZXRTdGF0ZS5pbWFnZU1hcC5nZXQoaSk7XG4gICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgnYnVpbGRlci0tdGlsZS1pbWFnZScpO1xuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dDogTW91c2VFdmVudCkgPT4gdGhpcy5zZWxlY3RlZFRpbGUoZXZ0KSk7XG4gICAgICAgICAgICBpbWcuaWQgPSBgaW1nLSR7aX1gO1xuICAgICAgICAgICAgaW1nLmFsdCA9IGBUaWxlIGltYWdlICR7aX1gO1xuXG4gICAgICAgICAgICBpZiAoaSAlIDMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpbWdSb3dXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaW1nUm93V3JhcHBlci5jbGFzc0xpc3QuYWRkKCd0aWxlLXNlbGVjdG9yLWltZy1yb3cnKTtcbiAgICAgICAgICAgICAgICB0aWxlU2VsZWN0b3IuYXBwZW5kQ2hpbGQoaW1nUm93V3JhcHBlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWdSb3dXcmFwcGVyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaWxlKFN0YXRlLnRpbGVTZXRTdGF0ZS5pbWFnZU1hcC5nZXQoMSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTZWxlY3RlZFRpbGVMb29rVXBWYWx1ZSh0aWxlOiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHRpbGVJZCA9IFN0YXRlLmJ1aWxkZXJTdGF0ZS5zZWxlY3RlZFRpbGUuaWQ7XG4gICAgICAgIHJldHVybiB0aWxlSWQuc3BsaXQoJy0nKVsxXTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0QWN0aXZlVGlsZSh0aWxlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICBpZiAoU3RhdGUuYnVpbGRlclN0YXRlLnNlbGVjdGVkVGlsZSkge1xuICAgICAgICAgICAgU3RhdGUuYnVpbGRlclN0YXRlLnNlbGVjdGVkVGlsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICB0aWxlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBTdGF0ZS5idWlsZGVyU3RhdGUuc2VsZWN0ZWRUaWxlID0gdGlsZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2VsZWN0ZWRUaWxlKGV2dDogTW91c2VFdmVudCkge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRpbGUoZXZ0LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRUaWxlVG9TdGFnZSgpIHtcbiAgICAgICAgY29uc3QgY29sID0gU3RhdGUuYnVpbGRlclN0YXRlLmNsaWNrZWRHcmlkQ29vcmRzLng7XG4gICAgICAgIGNvbnN0IHJvdyA9IFN0YXRlLmJ1aWxkZXJTdGF0ZS5jbGlja2VkR3JpZENvb3Jkcy55O1xuICAgICAgICBjb25zdCBsb29rVXBWYWx1ZSA9IHRoaXMuZ2V0U2VsZWN0ZWRUaWxlTG9va1VwVmFsdWUoU3RhdGUuYnVpbGRlclN0YXRlLnNlbGVjdGVkVGlsZSk7XG5cbiAgICAgICAgY29uc3QgZ3JpZElkID0gYCR7Y29sfS0ke3Jvd31gO1xuICAgICAgICBjb25zdCBzdGFnZVRpbGUgPSBuZXcgU3RhZ2VUaWxlKHJvdywgY29sLCBsb29rVXBWYWx1ZSk7XG4gICAgICAgIFN0YXRlLnN0YWdlU3RhdGUudGlsZXMuc2V0KGdyaWRJZCwgc3RhZ2VUaWxlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlVGlsZUZyb21TdGFnZSgpIHtcbiAgICAgICAgY29uc3QgY29sID0gU3RhdGUuYnVpbGRlclN0YXRlLmNsaWNrZWRHcmlkQ29vcmRzLng7XG4gICAgICAgIGNvbnN0IHJvdyA9IFN0YXRlLmJ1aWxkZXJTdGF0ZS5jbGlja2VkR3JpZENvb3Jkcy55O1xuICAgICAgICBjb25zdCBsb29rVXBWYWx1ZSA9ICcwMCc7XG5cbiAgICAgICAgY29uc3QgZ3JpZElkID0gYCR7Y29sfS0ke3Jvd31gO1xuICAgICAgICBjb25zdCBzdGFnZVRpbGUgPSBuZXcgU3RhZ2VUaWxlKHJvdywgY29sLCBsb29rVXBWYWx1ZSk7XG4gICAgICAgIFN0YXRlLnN0YWdlU3RhdGUudGlsZXMuc2V0KGdyaWRJZCwgc3RhZ2VUaWxlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlVGlsZU1vZGUoZW5hYmxlZDogYm9vbGVhbikge1xuICAgICAgICBTdGF0ZS5idWlsZGVyU3RhdGUucmVtb3ZpbmdUaWxlcyA9IGVuYWJsZWQ7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMtZmcnKTtcbiAgICAgICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgICAgICAgIGNhbnZhcy5jbGFzc0xpc3QuYWRkKCdyZW1vdmluZy10aWxlcycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92aW5nLXRpbGVzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYW51cCgpIHtcbiAgICAgICAgaWYgKFN0YXRlLmJ1aWxkZXJTdGF0ZS5idWlsZGVyTW9kZSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUJ1aWxkZXJNb2RlKCk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUJ1aWxkZXJCdXR0b24oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IE1lbnVPcHRpb25zIH0gZnJvbSAnLi4vY29uc3RhbnRzL21lbnVPcHRpb25zJztcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL3Jvb3RTdGF0ZSc7XG5pbXBvcnQgeyBSZW5kZXJpbmdVdGlsaXRpZXMgfSBmcm9tICcuLi91dGlsaXRlcy9yZW5kZXJpbmdVdGlsaXRpZXMnO1xuaW1wb3J0IHsgRGVidWdNb2RlIH0gZnJvbSAnLi9kZWJ1Z01vZGUnO1xuXG5leHBvcnQgY2xhc3MgRGVidWdNZW51IHtcblxuICAgIHN0YXRpYyBhZGRNZW51QnV0dG9uKCkge1xuICAgICAgICBjb25zdCBtZW51QnRuID0gUmVuZGVyaW5nVXRpbGl0aWVzLm5vZGVCdWlsZGVyKCdidXR0b24nLCAnRGVidWcnLCBbJ2J1dHRvbicsICdtZW51QnRuJ10pO1xuICAgICAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy50b2dnbGVNZW51KCkpO1xuICAgICAgICBSZW5kZXJpbmdVdGlsaXRpZXMuYXBwZW5kTm9kZVRvQm9keShtZW51QnRuKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlTWVudUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51QnRuJyk7XG4gICAgICAgIG1lbnVCdG4ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFjdGl2YXRlTWVudUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVCdG4nKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWFjdGl2YXRlTWVudUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVCdG4nKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHN0YXRpYyB0b2dnbGVNZW51KCkge1xuICAgICAgICBpZiAoU3RhdGUuZGVidWdTdGF0ZS5tZW51T3Blbikge1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3Blbk1lbnUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBvcGVuTWVudSgpIHtcbiAgICAgICAgRGVidWdNb2RlLnJlc2V0U3RhdGUoKTtcbiAgICAgICAgU3RhdGUuZGVidWdTdGF0ZS5tZW51T3BlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVNZW51QnV0dG9uKCk7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBSZW5kZXJpbmdVdGlsaXRpZXMubm9kZUJ1aWxkZXIoJ2NvbnRlbnQnLCAnPGgxIGNsYXNzPVwidGl0bGVcIj5EZWJ1ZyBNZW51PC9oMT4nLCBbJ21lbnUnXSk7XG4gICAgICAgIHRoaXMuYWRkTWVudU9wdGlvbnMobWVudSk7XG4gICAgICAgIFJlbmRlcmluZ1V0aWxpdGllcy5hcHBlbmROb2RlVG9Cb2R5KG1lbnUpO1xuICAgICAgICB0aGlzLmFkZFNhdmVCdXR0b24oKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xvc2VNZW51KCkge1xuICAgICAgICBpZiAoU3RhdGUuZGVidWdTdGF0ZS5tZW51T3Blbikge1xuICAgICAgICAgICAgU3RhdGUuZGVidWdTdGF0ZS5tZW51T3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlTWVudUJ1dHRvbigpO1xuICAgICAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG4gICAgICAgICAgICBtZW51LnJlbW92ZSgpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZUJ0bicpO1xuICAgICAgICAgICAgc2F2ZUJ0bi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBhZGRTYXZlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNhdmVCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ3NhdmVCdG4nKTtcbiAgICAgICAgc2F2ZUJ0bi5pbm5lckhUTUwgPSAnU2F2ZSc7XG4gICAgICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnNhdmVNZW51T3B0aW9ucygpKTtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzYXZlQnRuKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2F2ZU1lbnVPcHRpb25zKCkge1xuICAgICAgICBjb25zdCBtZW51T3B0aW9uc0pzb24gPSBKU09OLnN0cmluZ2lmeShTdGF0ZS5kZWJ1Z1N0YXRlLm1lbnVPcHRpb25zKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21lbnVPcHRpb25zJywgbWVudU9wdGlvbnNKc29uKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVtb3ZlU2F2ZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlQnRuJyk7XG4gICAgICAgIHNhdmVCdG4ucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZE1lbnVPcHRpb25zKG1lbnU6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkTWVudU9wdGlvbihtZW51LCBNZW51T3B0aW9ucy5HUklEKTtcbiAgICAgICAgdGhpcy5hZGRNZW51T3B0aW9uKG1lbnUsIE1lbnVPcHRpb25zLkNPT1JESU5BVEVTKTtcbiAgICAgICAgdGhpcy5hZGRNZW51T3B0aW9uKG1lbnUsIE1lbnVPcHRpb25zLkhJVEJPWCk7XG4gICAgICAgIHRoaXMuYWRkTWVudU9wdGlvbihtZW51LCBNZW51T3B0aW9ucy5ERVRFQ1RJT05fQk9YKTtcbiAgICAgICAgdGhpcy5hZGRNZW51T3B0aW9uKG1lbnUsIE1lbnVPcHRpb25zLkRFVEVDVEVEX1RJTEVTKTtcbiAgICAgICAgdGhpcy5hZGRNZW51T3B0aW9uKG1lbnUsIE1lbnVPcHRpb25zLkNPTExJU0lPTl9USUxFUyk7XG4gICAgICAgIHRoaXMuYWRkTWVudU9wdGlvbihtZW51LCBNZW51T3B0aW9ucy5TQ1JFRU5fRURHRSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZE1lbnVPcHRpb24obWVudTogSFRNTEVsZW1lbnQsIG5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuYWRkV3JhcHBlcihuYW1lKTtcbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSB0aGlzLmFkZEVuYWJsZWRDaGVja0JveChuYW1lKTtcbiAgICAgICAgY29uc3QgY29sb3JJbnB1dCA9IHRoaXMuYWRkQ29sb3JJbnB1dChuYW1lKTtcbiAgICAgICAgY29uc3QgbGluZVdpZHRoUmFuZ2UgPSB0aGlzLmFkZExpbmVXaWR0aFJhbmdlKG5hbWUpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb2xvcklucHV0KTtcbiAgICAgICAgaWYgKGxpbmVXaWR0aFJhbmdlKSB7IHdyYXBwZXIuYXBwZW5kQ2hpbGQobGluZVdpZHRoUmFuZ2UpOyB9XG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgICAgICAgcmV0dXJuIG1lbnU7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFdyYXBwZXIobmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRFbmFibGVkQ2hlY2tCb3gobmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBsYWJlbCA9IFJlbmRlcmluZ1V0aWxpdGllcy5ub2RlQnVpbGRlcignbGFiZWwnLCAnRW5hYmxlZCcpO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gU3RhdGUuZGVidWdTdGF0ZS5tZW51T3B0aW9uc1tuYW1lXS5lbmFibGVkO1xuXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIFN0YXRlLmRlYnVnU3RhdGUubWVudU9wdGlvbnNbbmFtZV0uZW5hYmxlZCA9IGNoZWNrYm94LmNoZWNrZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZENvbG9ySW5wdXQobmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBsYWJlbCA9IFJlbmRlcmluZ1V0aWxpdGllcy5ub2RlQnVpbGRlcignbGFiZWwnLCAnQ29sb3InKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFN0YXRlLmRlYnVnU3RhdGUubWVudU9wdGlvbnNbbmFtZV0uY29sb3I7XG5cbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgICAgICAgICBTdGF0ZS5kZWJ1Z1N0YXRlLm1lbnVPcHRpb25zW25hbWVdLmNvbG9yID0gaW5wdXQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZExpbmVXaWR0aFJhbmdlKG5hbWU6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgaWYgKFN0YXRlLmRlYnVnU3RhdGUubWVudU9wdGlvbnNbbmFtZV0ubGluZVdpZHRoKSB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IFJlbmRlcmluZ1V0aWxpdGllcy5ub2RlQnVpbGRlcignbGFiZWwnLCAnTGluZSBXaWR0aCcpO1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgaW5wdXQudHlwZSA9ICdyYW5nZSc7XG4gICAgICAgICAgICBpbnB1dC5taW4gPSAnMSc7XG4gICAgICAgICAgICBpbnB1dC5tYXggPSAnMTAnO1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBTdGF0ZS5kZWJ1Z1N0YXRlLm1lbnVPcHRpb25zW25hbWVdLmxpbmVXaWR0aCArICcnO1xuXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgU3RhdGUuZGVidWdTdGF0ZS5tZW51T3B0aW9uc1tuYW1lXS5saW5lV2lkdGggPSBOdW1iZXIoaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0aW5nJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYW51cCgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVNZW51QnV0dG9uKCk7XG4gICAgICAgIGlmIChTdGF0ZS5kZWJ1Z1N0YXRlLm1lbnVPcGVuKSB7IHRoaXMuY2xvc2VNZW51KCk7IH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9yb290U3RhdGUnO1xuaW1wb3J0IHsgRGVidWdNZW51IH0gZnJvbSAnLi9kZWJ1Z01lbnUnO1xuaW1wb3J0IHsgUmVuZGVyaW5nVXRpbGl0aWVzIH0gZnJvbSAnLi4vdXRpbGl0ZXMvcmVuZGVyaW5nVXRpbGl0aWVzJztcbmltcG9ydCB7IFN0YWdlVGlsZSB9IGZyb20gJy4uL29iamVjdHMvc3RhZ2VUaWxlJztcbmltcG9ydCB7IE1lbnVPcHRpb25zIH0gZnJvbSAnLi4vY29uc3RhbnRzL21lbnVPcHRpb25zJztcbmltcG9ydCB7IEJ1aWxkZXJNb2RlIH0gZnJvbSAnLi9idWlsZGVyTW9kZSc7XG5pbXBvcnQgeyBQcm9wZXJ0aWVzTWVudSB9IGZyb20gJy4vcHJvcGVydGllc01lbnUnO1xuXG5leHBvcnQgY2xhc3MgRGVidWdNb2RlIHtcblxuICBzdGF0aWMgZHJhdygpIHtcbiAgICBpZiAoU3RhdGUuZGVidWdTdGF0ZS5kZWJ1Z01vZGUpIHtcbiAgICAgIGlmICghU3RhdGUuZGVidWdTdGF0ZS5oYXNCdXR0b25zKSB7XG4gICAgICAgIFN0YXRlLmRlYnVnU3RhdGUuaGFzQnV0dG9ucyA9IHRydWU7XG4gICAgICAgIERlYnVnTWVudS5hZGRNZW51QnV0dG9uKCk7XG4gICAgICAgIFByb3BlcnRpZXNNZW51LmFkZFByb3BlcnRpZXNCdXR0b24oKTtcbiAgICAgICAgQnVpbGRlck1vZGUuYWRkQnVpbGRlckJ1dHRvbigpO1xuICAgICAgfVxuICAgICAgY29uc3QgcG9zaXRpb24gPSBTdGF0ZS5nYW1lU3RhdGUucG9zaXRpb247XG4gICAgICBjb25zdCBnYW1lVW5pdERpbWVuc2lvbnMgPSBTdGF0ZS5nYW1lU3RhdGUuZ2FtZVVuaXREaW1lbnNpb25zO1xuXG4gICAgICBpZiAoU3RhdGUuZGVidWdTdGF0ZS5tZW51T3B0aW9uc1tNZW51T3B0aW9ucy5HUklEXS5lbmFibGVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nUm93ID0gTWF0aC5mbG9vcihwb3NpdGlvbi55KTtcbiAgICAgICAgY29uc3QgZW5kaW5nUm93ID0gTWF0aC5jZWlsKHBvc2l0aW9uLnkgKyBnYW1lVW5pdERpbWVuc2lvbnMuaCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nQ29sID0gTWF0aC5mbG9vcihwb3NpdGlvbi54KTtcbiAgICAgICAgY29uc3QgZW5kaW5nQ29sID0gTWF0aC5mbG9vcihwb3NpdGlvbi54ICsgZ2FtZVVuaXREaW1lbnNpb25zLncpO1xuXG4gICAgICAgIGZvciAobGV0IHJvdyA9IHN0YXJ0aW5nUm93OyByb3cgPD0gZW5kaW5nUm93OyByb3crKykge1xuICAgICAgICAgIGZvciAobGV0IGNvbCA9IHN0YXJ0aW5nQ29sOyBjb2wgPD0gZW5kaW5nQ29sOyBjb2wrKykge1xuICAgICAgICAgICAgdGhpcy5kcmF3R3JpZChyb3csIGNvbCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdHcmlkQ29vcmRzKHJvdywgY29sKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFTdGF0ZS5idWlsZGVyU3RhdGUuYnVpbGRlck1vZGUpIHtcbiAgICAgICAgdGhpcy5kcmF3RGVidWdHcmFwaGljcygpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmIChTdGF0ZS5kZWJ1Z1N0YXRlLmhhc0J1dHRvbnMpIHtcbiAgICAgIHRoaXMuZGVidWdNb2RlQ2xlYW5VcCgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkcmF3RGVidWdHcmFwaGljcygpIHtcbiAgICB0aGlzLmRyYXdTY3JlZW5FZGdlKCk7XG4gICAgdGhpcy5kcmF3RGV0ZWN0ZWRUaWxlT3V0bGluZXMoKTtcbiAgICB0aGlzLmRyYXdDb2xsaXNpb25EZXRlY3Rpb25Cb3goKTtcbiAgICB0aGlzLmRyYXdIaXRib3goKTtcbiAgICB0aGlzLmRyYXdDb2xsaXNpb25zT3V0bGluZXMoKTtcbiAgICB0aGlzLnJlc2V0Q3R4KCk7XG4gIH1cblxuICBzdGF0aWMgZHJhd0dyaWQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSB7XG4gICAgU3RhdGUuZ2FtZVN0YXRlLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSBTdGF0ZS5kZWJ1Z1N0YXRlLm1lbnVPcHRpb25zW01lbnVPcHRpb25zLkdSSURdLmNvbG9yO1xuICAgIFN0YXRlLmdhbWVTdGF0ZS5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IFN0YXRlLmRlYnVnU3RhdGUubWVudU9wdGlvbnNbTWVudU9wdGlvbnMuR1JJRF0ubGluZVdpZHRoO1xuXG4gICAgY29uc3QgcG9zaXRpb24gPSBSZW5kZXJpbmdVdGlsaXRpZXMudG9TY3JlZW5Db29yZGluYXRlcyh7IHg6IGNvbCwgeTogcm93IH0pO1xuICAgIFN0YXRlLmdhbWVTdGF0ZS5jYW52YXMuY3R4LnN0cm9rZVJlY3QoXG4gICAgICBwb3NpdGlvbi54LFxuICAgICAgcG9zaXRpb24ueSxcbiAgICAgIFJlbmRlcmluZ1V0aWxpdGllcy50b1BpeGVscygxKSxcbiAgICAgIFJlbmRlcmluZ1V0aWxpdGllcy50b1BpeGVscygxKVxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZHJhd0dyaWRDb29yZHMocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKSB7XG4gICAgaWYgKFN0YXRlLmRlYnVnU3RhdGUubWVudU9wdGlvbnNbTWVudU9wdGlvbnMuQ09PUkRJTkFURVNdLmVuYWJsZWQpIHtcbiAgICAgIFN0YXRlLmdhbWVTdGF0ZS5jYW52YXMuY3R4LmZpbGxTdHlsZSA9IFN0YXRlLmRlYnVnU3RhdGUubWVudU9wdGlvbnNbTWVudU9wdGlvbnMuQ09PUkRJTkFURVNdLmNvbG9yO1xuICAgICAgU3RhdGUuZ2FtZVN0YXRlLmNhbnZhcy5jdHguZm9udCA9IFN0YXRlLmRlYnVnU3RhdGUubWVudU9wdGlvbnNbTWVudU9wdGlvbnMuQ09PUkRJTkFURVNdLmZvbnQ7XG5cbiAgICAgIGNvbnN0IHsgeCwgeSB9ID0gUmVuZGVyaW5nVXRpbGl0aWVzLnRvU2NyZWVuQ29vcmRpbmF0ZXMoeyB4OiBjb2wsIHk6IHJvdyB9KTtcbiAgICAgIGNvbnN0IHBpeGVsT2Zmc2V0ID0gNDtcbiAgICAgIFN0YXRlLmdhbWVTdGF0ZS5jYW52YXMuY3R4LmZpbGxUZXh0KGAoJHtjb2x9LCAke3Jvd30pYCwgeCArIHBpeGVsT2Zmc2V0LCB5IC0gcGl4ZWxPZmZzZXQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkcmF3U2NyZWVuRWRnZSgpIHtcbiAgICBpZiAoU3RhdGUuZGVidWdTdGF0ZS5tZW51T3B0aW9uc1tNZW51T3B0aW9ucy5TQ1JFRU5fRURHRV0uZW5hYmxlZCkge1xuICAgICAgU3RhdGUuZ2FtZVN0YXRlLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSBTdGF0ZS5kZWJ1Z1N0YXRlLm1lbnVPcHRpb25zW01lbnVPcHRpb25zLlNDUkVFTl9FREdFXS5jb2xvcjtcbiAgICAgIFN0YXRlLmdhbWVTdGF0ZS5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IFN0YXRlLmRlYnVnU3RhdGUubWVudU9wdGlvbnNbTWVudU9wdGlvbnMuU0NSRUVOX0VER0VdLmxpbmVXaWR0aDtcblxuICAgICAgY29uc3QgdmlldyA9IFN0YXRlLmdhbWVTdGF0ZS5zY3JlZW5QaXhlbERpbWVuc2lvbnM7XG4gICAgICBTdGF0ZS5nYW1lU3RhdGUuY2FudmFzLmN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgU3RhdGUuZ2FtZVN0YXRlLmNhbnZhcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICBTdGF0ZS5nYW1lU3RhdGUuY2FudmFzLmN0eC5yZWN0KDAsIDAsIHZpZXcudywgdmlldy5oKTtcbiAgICAgIFN0YXRlLmdhbWVTdGF0ZS5jYW52YXMuY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBkcmF3RGV0ZWN0ZWRUaWxlT3V0bGluZXMoKSB7XG4gICAgaWYgKFN0YXRlLmRlYnVnU3RhdGUubWVudU9wdGlvbnNbTWVudU9wdGlvbnMuREVURUNURURfVElMRVNdLmVuYWJsZWQpIHtcbiAgICAgIFN0YXRlLmdhbWVTdGF0ZS5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gU3RhdGUuZGVidWdTdGF0ZS5tZW51T3B0aW9uc1tNZW51T3B0aW9ucy5ERVRFQ1RFRF9USUxFU10uY29sb3I7XG4gICAgICBTdGF0ZS5nYW1lU3RhdGUuY2FudmFzLmN0eC5saW5lV2lkdGggPSBTdGF0ZS5kZWJ1Z1N0YXRlLm1lbnVPcHRpb25zW01lbnVPcHRpb25zLkRFVEVDVEVEX1RJTEVTXS5saW5lV2lkdGg7XG5cbiAgICAgIFN0YXRlLnN0YWdlU3RhdGUuZGV0ZWN0aW9uVGlsZXMuZm9yRWFjaCgodGlsZTogU3RhZ2VUaWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpbSA9IFJlbmRlcmluZ1V0aWxpdGllcy50b1BpeGVscygxKTtcbiAgICAgICAgY29uc3QgcG9zID0gUmVuZGVyaW5nVXRpbGl0aWVzLnRvU2NyZWVuQ29vcmRpbmF0ZXMoeyB4OiB0aWxlLmNvbCwgeTogdGlsZS5yb3cgfSk7XG4gICAgICAgIFN0YXRlLmdhbWVTdGF0ZS5jYW52YXMuY3R4LnN0cm9rZVJlY3QocG9zLngsIHBvcy55LCBkaW0sIGRpbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZHJhd0NvbGxpc2lvbkRldGVjdGlvbkJveCgpIHtcbiAgICBpZiAoU3RhdGUuZGVidWdTdGF0ZS5tZW51T3B0aW9uc1tNZW51T3B0aW9ucy5ERVRFQ1RJT05fQk9YXS5lbmFibGVkKSB7XG4gICAgICBTdGF0ZS5nYW1lU3RhdGUuY2FudmFzLmN0eC5zdHJva2VTdHlsZSA9IFN0YXRlLmRlYnVnU3RhdGUubWVudU9wdGlvbnNbTWVudU9wdGlvbnMuREVURUNUSU9OX0JPWF0uY29sb3I7XG4gICAgICBTdGF0ZS5nYW1lU3RhdGUuY2FudmFzLmN0eC5saW5lV2lkdGggPSBTdGF0ZS5kZWJ1Z1N0YXRlLm1lbnVPcHRpb25zW01lbnVPcHRpb25zLkRFVEVDVElPTl9CT1hdLmxpbmVXaWR0aDtcblxuICAgICAgY29uc3QgYm94ID0gU3RhdGUubmluamFTdGF0ZS5jb2xsaXNpb25EZXRlY3Rpb25Cb3g7XG4gICAgICBjb25zdCB7IHgsIHkgfSA9IFJlbmRlcmluZ1V0aWxpdGllcy50b1NjcmVlbkNvb3JkaW5hdGVzKGJveC5wb3NpdGlvbik7XG4gICAgICBjb25zdCB7IHcsIGggfSA9IFJlbmRlcmluZ1V0aWxpdGllcy50b1NjcmVlbkRpbWVuc2lvbnMoYm94LmRpbWVuc2lvbnMpO1xuICAgICAgU3RhdGUuZ2FtZVN0YXRlLmNhbnZhcy5jdHguc3Ryb2tlUmVjdCh4LCB5LCB3LCBoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZHJhd0hpdGJveCgpIHtcbiAgICBpZiAoU3RhdGUuZGVidWdTdGF0ZS5tZW51T3B0aW9uc1tNZW51T3B0aW9ucy5ISVRCT1hdLmVuYWJsZWQpIHtcbiAgICAgIFN0YXRlLmdhbWVTdGF0ZS5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gU3RhdGUuZGVidWdTdGF0ZS5tZW51T3B0aW9uc1tNZW51T3B0aW9ucy5ISVRCT1hdLmNvbG9yO1xuICAgICAgU3RhdGUuZ2FtZVN0YXRlLmNhbnZhcy5jdHgubGluZVdpZHRoID0gU3RhdGUuZGVidWdTdGF0ZS5tZW51T3B0aW9uc1tNZW51T3B0aW9ucy5ISVRCT1hdLmxpbmVXaWR0aDtcblxuICAgICAgY29uc3QgYm94ID0gU3RhdGUubmluamFTdGF0ZS5oaXRib3g7XG4gICAgICBjb25zdCB7IHgsIHkgfSA9IFJlbmRlcmluZ1V0aWxpdGllcy50b1NjcmVlbkNvb3JkaW5hdGVzKGJveC5wb3NpdGlvbik7XG4gICAgICBjb25zdCB7IHcsIGggfSA9IFJlbmRlcmluZ1V0aWxpdGllcy50b1NjcmVlbkRpbWVuc2lvbnMoYm94LmRpbWVuc2lvbnMpO1xuICAgICAgU3RhdGUuZ2FtZVN0YXRlLmNhbnZhcy5jdHguc3Ryb2tlUmVjdCh4LCB5LCB3LCBoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZHJhd0NvbGxpc2lvbnNPdXRsaW5lcygpIHtcbiAgICBpZiAoU3RhdGUuZGVidWdTdGF0ZS5tZW51T3B0aW9uc1tNZW51T3B0aW9ucy5DT0xMSVNJT05fVElMRVNdLmVuYWJsZWQpIHtcbiAgICAgIFN0YXRlLmdhbWVTdGF0ZS5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gU3RhdGUuZGVidWdTdGF0ZS5tZW51T3B0aW9uc1tNZW51T3B0aW9ucy5DT0xMSVNJT05fVElMRVNdLmNvbG9yO1xuICAgICAgU3RhdGUuZ2FtZVN0YXRlLmNhbnZhcy5jdHgubGluZVdpZHRoID0gU3RhdGUuZGVidWdTdGF0ZS5tZW51T3B0aW9uc1tNZW51T3B0aW9ucy5DT0xMSVNJT05fVElMRVNdLmxpbmVXaWR0aDtcblxuICAgICAgY29uc3QgZGltID0gUmVuZGVyaW5nVXRpbGl0aWVzLnRvUGl4ZWxzKDEpO1xuICAgICAgU3RhdGUuc3RhZ2VTdGF0ZS5jb2xsaXNpb25UaWxlcy5mb3JFYWNoKCh0aWxlOiBTdGFnZVRpbGUpID0+IHtcbiAgICAgICAgY29uc3QgdGlsZVBvcyA9IFJlbmRlcmluZ1V0aWxpdGllcy50b1NjcmVlbkNvb3JkaW5hdGVzKHsgeDogdGlsZS5jb2wsIHk6IHRpbGUucm93IH0pO1xuICAgICAgICBTdGF0ZS5nYW1lU3RhdGUuY2FudmFzLmN0eC5zdHJva2VSZWN0KHRpbGVQb3MueCwgdGlsZVBvcy55LCBkaW0sIGRpbSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVzZXRDdHgoKSB7XG4gICAgU3RhdGUuZ2FtZVN0YXRlLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSBTdGF0ZS5nYW1lU3RhdGUuZGVmYXVsdENvbG9yO1xuICAgIFN0YXRlLmdhbWVTdGF0ZS5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IFN0YXRlLmdhbWVTdGF0ZS5kZWZhdWx0TGluZVdpZHRoO1xuICB9XG5cbiAgc3RhdGljIGhhbmRsZU1vdXNlTW92ZShldnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoU3RhdGUuZGVidWdTdGF0ZS5oYW5kbGVNb3VzZU1vdmUpIHtcbiAgICAgIGNvbnN0IHsgeCwgeSB9ID0gUmVuZGVyaW5nVXRpbGl0aWVzLnRvR2FtZUNvb3JkaW5hdGVzKHsgeDogZXZ0LmNsaWVudFgsIHk6IGV2dC5jbGllbnRZIH0pO1xuICAgICAgLy8gY29uc29sZS5sb2coYCgke01hdGguZmxvb3IoeCl9LCAke01hdGguZmxvb3IoeSl9KWApO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRPRE86IE1vdmUgdGhpcyB3aXRoIHRoZSBwcm9wZXJ0aWVzXG4gIHN0YXRpYyBhZGRGcmFtZXNQZXJTZWNvbmRPcHRpb24oKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcblxuICAgIGNvbnN0IGZwc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBmcHNMYWJlbC5pbm5lckhUTUwgPSAnRlBTICZuYnNwOyc7XG5cbiAgICBjb25zdCBmcHNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZnBzSW5wdXQudHlwZSA9ICdyYW5nZSc7XG4gICAgZnBzSW5wdXQubWF4ID0gJzYwJztcbiAgICBmcHNJbnB1dC5taW4gPSAnMCc7XG4gICAgZnBzSW5wdXQudmFsdWUgPSBTdGF0ZS5nYW1lU3RhdGUuZnJhbWVzUGVyU2Vjb25kLnRvU3RyaW5nKCk7XG5cbiAgICBmcHNJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBTdGF0ZS5nYW1lU3RhdGUuZnJhbWVzUGVyU2Vjb25kID0gTnVtYmVyKGZwc0lucHV0LnZhbHVlKTtcbiAgICB9KTtcbiAgICBmcHNMYWJlbC5hcHBlbmRDaGlsZChmcHNJbnB1dCk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChmcHNMYWJlbCk7XG5cbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfVxuXG4gIHN0YXRpYyByZXNldFN0YXRlKCkge1xuICAgIERlYnVnTWVudS5jbG9zZU1lbnUoKTtcbiAgICBQcm9wZXJ0aWVzTWVudS5jbG9zZVByb3BlcnR5TWVudSgpO1xuICAgIEJ1aWxkZXJNb2RlLmNsb3NlQnVpbGRlck1vZGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWJ1Z01vZGVDbGVhblVwKCkge1xuICAgIFN0YXRlLmRlYnVnU3RhdGUuaGFzQnV0dG9ucyA9IGZhbHNlO1xuICAgIERlYnVnTWVudS5jbGVhbnVwKCk7XG4gICAgUHJvcGVydGllc01lbnUuY2xlYW51cCgpO1xuICAgIEJ1aWxkZXJNb2RlLmNsZWFudXAoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIE1lbnVPcHRpb24ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBlbmFibGVkOiBib29sZWFuO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgbGluZVdpZHRoOiBudW1iZXI7XG4gICAgZm9udDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjb2xvciA9ICdibGFjaycpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSAxO1xuICAgICAgICB0aGlzLmZvbnQgPSAnMTJweCBzZXJpZic7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvcm9vdFN0YXRlJztcbmltcG9ydCB7IFJlbmRlcmluZ1V0aWxpdGllcyB9IGZyb20gJy4uL3V0aWxpdGVzL3JlbmRlcmluZ1V0aWxpdGllcyc7XG5pbXBvcnQgeyBEZWJ1Z01vZGUgfSBmcm9tICcuL2RlYnVnTW9kZSc7XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0aWVzTWVudSB7XG5cbiAgc3RhdGljIGFkZFByb3BlcnRpZXNCdXR0b24oKSB7XG4gICAgY29uc3QgcHJvcGVydGllc0J0biA9IFJlbmRlcmluZ1V0aWxpdGllcy5ub2RlQnVpbGRlcignYnV0dG9uJywgJ1Byb3BlcnRpZXMnLCBbJ2J1dHRvbicsICdwcm9wZXJ0aWVzQnRuJ10pO1xuICAgIHByb3BlcnRpZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnRvZ2dsZVByb3BlcnRpZXMoKSk7XG4gICAgUmVuZGVyaW5nVXRpbGl0aWVzLmFwcGVuZE5vZGVUb0JvZHkocHJvcGVydGllc0J0bik7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlUHJvcGVydGllc0J1dHRvbigpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvcGVydGllc0J0bicpO1xuICAgIGJ0bi5yZW1vdmUoKTtcbiAgfVxuXG4gIHN0YXRpYyBhY3RpdmF0ZVByb3BlcnRpZXNCdXR0b24oKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb3BlcnRpZXNCdG4nKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH1cblxuICBzdGF0aWMgZGVhY3RpdmF0ZVByb3BlcnRpZXNCdXR0b24oKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb3BlcnRpZXNCdG4nKTtcbiAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH1cblxuICBzdGF0aWMgdG9nZ2xlUHJvcGVydGllcygpIHtcbiAgICBpZiAoU3RhdGUuZGVidWdTdGF0ZS5wcm9wZXJ0aWVzT3Blbikge1xuICAgICAgdGhpcy5jbG9zZVByb3BlcnR5TWVudSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW5Qcm9wZXJ0eU1lbnUoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgb3BlblByb3BlcnR5TWVudSgpIHtcbiAgICBEZWJ1Z01vZGUucmVzZXRTdGF0ZSgpO1xuICAgIFN0YXRlLmRlYnVnU3RhdGUucHJvcGVydGllc09wZW4gPSB0cnVlO1xuICAgIHRoaXMuYWN0aXZhdGVQcm9wZXJ0aWVzQnV0dG9uKCk7XG4gICAgY29uc3QgbWVudSA9IFJlbmRlcmluZ1V0aWxpdGllcy5ub2RlQnVpbGRlcignY29udGVudCcsICc8aDEgY2xhc3M9XCJ0aXRsZVwiPlByb3BlcnRpZXMgTWVudTwvaDE+JywgWydwcm9wLW1lbnUnXSk7XG4gICAgdGhpcy5hZGRQcm9wZXJ0aWVzKG1lbnUpO1xuICAgIFJlbmRlcmluZ1V0aWxpdGllcy5hcHBlbmROb2RlVG9Cb2R5KG1lbnUpO1xuICB9XG5cbiAgc3RhdGljIGNsb3NlUHJvcGVydHlNZW51KCkge1xuICAgIGlmIChTdGF0ZS5kZWJ1Z1N0YXRlLnByb3BlcnRpZXNPcGVuKSB7XG4gICAgICBTdGF0ZS5kZWJ1Z1N0YXRlLnByb3BlcnRpZXNPcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLmRlYWN0aXZhdGVQcm9wZXJ0aWVzQnV0dG9uKCk7XG4gICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb3AtbWVudScpO1xuICAgICAgbWVudS5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkUHJvcGVydGllcyhtZW51OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGlucHV0MSA9IHRoaXMuYWRkUHJvcGVydHkobWVudSwgJ0dyYXZpdHknLCBTdGF0ZS5uaW5qYVN0YXRlLmdyYXZpdHkpO1xuICAgIGlucHV0MS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKChldnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcbiAgICAgIFN0YXRlLm5pbmphU3RhdGUuZ3Jhdml0eSA9IE51bWJlcigoZXZ0LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbnB1dDIgPSB0aGlzLmFkZFByb3BlcnR5KG1lbnUsICdNb3ZlbWVudCBTcGVlZCcsIFN0YXRlLm5pbmphU3RhdGUubW92ZW1lbnRTcGVlZCk7XG4gICAgaW5wdXQyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2dCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coKGV2dC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xuICAgICAgU3RhdGUubmluamFTdGF0ZS5tb3ZlbWVudFNwZWVkID0gTnVtYmVyKChldnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGlucHV0MyA9IHRoaXMuYWRkUHJvcGVydHkobWVudSwgJ0p1bXAgU3BlZWQnLCBTdGF0ZS5uaW5qYVN0YXRlLmp1bXBTcGVlZCk7XG4gICAgaW5wdXQzLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2dCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coKGV2dC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xuICAgICAgU3RhdGUubmluamFTdGF0ZS5qdW1wU3BlZWQgPSBOdW1iZXIoKGV2dC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFkZFByb3BlcnR5KG1lbnU6IEhUTUxFbGVtZW50LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgd3JhcHBlciA9IFJlbmRlcmluZ1V0aWxpdGllcy5ub2RlQnVpbGRlcignZGl2JywgJycsIFsnd3JhcHBlciddKTtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuYWRkSW5wdXQobmFtZSwgdmFsdWUpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICBzdGF0aWMgYWRkSW5wdXQobmFtZTogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGxhYmVsID0gUmVuZGVyaW5nVXRpbGl0aWVzLm5vZGVCdWlsZGVyKCdsYWJlbCcsIG5hbWUpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gJ251bWJlcic7XG4gICAgaW5wdXQuc3RlcCA9ICcwLjAxJztcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlICsgJyc7XG5cbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBzdGF0aWMgY2xlYW51cCgpIHtcbiAgICB0aGlzLnJlbW92ZVByb3BlcnRpZXNCdXR0b24oKTtcbiAgICBpZiAoU3RhdGUuZGVidWdTdGF0ZS5wcm9wZXJ0aWVzT3BlbikgeyB0aGlzLmNsb3NlUHJvcGVydHlNZW51KCk7IH1cbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9yb290U3RhdGUnO1xuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICcuLi9vYmplY3RzL3N0YWdlJztcbmltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICcuLi9vYmplY3RzL2JhY2tncm91bmQnO1xuaW1wb3J0IHsgRGVidWdNb2RlIH0gZnJvbSAnLi4vZGVidWcvZGVidWdNb2RlJztcbmltcG9ydCB7IFJlbmRlcmluZ1V0aWxpdGllcyB9IGZyb20gJy4uL3V0aWxpdGVzL3JlbmRlcmluZ1V0aWxpdGllcyc7XG5pbXBvcnQgeyBLZXlzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9rZXlzJztcbmltcG9ydCB7IGRyb3BSaWdodFdoaWxlIH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNsYXNzIEJ1aWxkZXJNb2RlRW5naW5lIHtcblxuICBydW5uaW5nOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgc3RhcnQoKSB7XG4gICAgUmVuZGVyaW5nVXRpbGl0aWVzLnBhdXNlR2FtZSh0cnVlKTtcbiAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIHRoaXMucnVuKCk7XG4gIH1cblxuICBydW4oKSB7XG4gICAgaWYgKHRoaXMucnVubmluZykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIFJlbmRlcmluZ1V0aWxpdGllcy5yZWZyZXNoQ2FudmFzKCk7XG5cbiAgICAgICAgQmFja2dyb3VuZC5kcmF3KCk7XG4gICAgICAgIFN0YWdlLmRyYXcoKTtcbiAgICAgICAgRGVidWdNb2RlLmRyYXcoKTtcbiAgICAgICAgdGhpcy5tb3ZlU3RhZ2UoU3RhdGUuZ2FtZVN0YXRlLmtleXMpO1xuXG4gICAgICAgIHRoaXMucnVuKCk7XG4gICAgICB9LCAxMDAwIC8gU3RhdGUuZ2FtZVN0YXRlLmRlZmF1bHRGcmFtZXNQZXJTZWNvbmQpO1xuICAgIH1cbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgUmVuZGVyaW5nVXRpbGl0aWVzLnBhdXNlR2FtZShmYWxzZSk7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gIH1cblxuICBtb3ZlU3RhZ2UoeyB1cCwgZG93biwgbGVmdCwgcmlnaHQgfTogS2V5cykge1xuICAgIGlmICh1cCkge1xuICAgICAgU3RhdGUuZ2FtZVN0YXRlLnBvc2l0aW9uLnkgKz0gMC4yO1xuICAgIH1cbiAgICBpZiAoZG93bikge1xuICAgICAgU3RhdGUuZ2FtZVN0YXRlLnBvc2l0aW9uLnkgLT0gMC4yO1xuICAgIH1cbiAgICBpZiAobGVmdCkge1xuICAgICAgU3RhdGUuZ2FtZVN0YXRlLnBvc2l0aW9uLnggLT0gMC4yO1xuICAgIH1cbiAgICBpZiAocmlnaHQpIHtcbiAgICAgIFN0YXRlLmdhbWVTdGF0ZS5wb3NpdGlvbi54ICs9IDAuMjtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL3Jvb3RTdGF0ZSc7XG5pbXBvcnQgeyBVcGRhdGVPYmplY3QgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VwZGF0ZU9iamVjdCc7XG5pbXBvcnQgeyBHcmlkQXJlYSB9IGZyb20gJy4uL2ludGVyZmFjZXMvZ3JpZEFyZWEnO1xuXG5leHBvcnQgY2xhc3MgUGh5c2ljc0VuZ2luZSB7XG5cbiAgICBkZXRlY3Rpb25BcmVhOiBHcmlkQXJlYTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHJ1bigpIHtcbiAgICAgICAgdGhpcy5kZXRlY3RDb2xsaXNpb24oKTtcbiAgICAgICAgU3RhdGUuZ2FtZVN0YXRlLmFzc2V0cy5mb3JFYWNoKChhc3NldDogVXBkYXRlT2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBhc3NldC51cGRhdGVQcm9wZXJ0aWVzKFN0YXRlLmdhbWVTdGF0ZS5rZXlzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGV0ZWN0Q29sbGlzaW9uKCkge1xuICAgICAgICB0aGlzLmdldFRpbGVzSW5EZXRlY3Rpb25BcmVhKCk7XG4gICAgICAgIFN0YXRlLnN0YWdlU3RhdGUuY29sbGlzaW9uVGlsZXMgPSBbXTtcbiAgICAgICAgY29uc3QgdGlsZXNUb0NoZWNrID0gU3RhdGUuc3RhZ2VTdGF0ZS5kZXRlY3Rpb25UaWxlcztcbiAgICAgICAgY29uc3QgaGl0Ym94ID0gU3RhdGUubmluamFTdGF0ZS5oaXRib3g7XG5cbiAgICAgICAgZm9yIChjb25zdCB0aWxlIG9mIHRpbGVzVG9DaGVjaykge1xuXG4gICAgICAgICAgICBpZiAoaGl0Ym94LnBvc2l0aW9uLnggPD0gdGlsZS5jb2wgKyAxLjAgJiYgICAgICAgICAgICAgICAgICAgICAvLyBUTC54IG9mIGhpdGJveCA8IFRSLnggb2YgdGlsZVxuICAgICAgICAgICAgICAgIGhpdGJveC5wb3NpdGlvbi54ICsgaGl0Ym94LmRpbWVuc2lvbnMudyA+PSB0aWxlLmNvbCAmJiAgIC8vIFRSLnggb2YgaGl0Ym94ID4gVEwueCBvZiB0aWxlXG4gICAgICAgICAgICAgICAgaGl0Ym94LnBvc2l0aW9uLnkgKyAxID49IHRpbGUucm93ICYmICAgICAgICAgICAgICAgICAgICAgLy8gVEwueSBvZiBoaXRib3ggPCBCTC55IG9mIHRpbGVcbiAgICAgICAgICAgICAgICBoaXRib3gucG9zaXRpb24ueSAtIGhpdGJveC5kaW1lbnNpb25zLmggPD0gdGlsZS5yb3cpIHsgICAvLyBCTC55IG9mIGhpdGJveCA+IFRMLnkgb2YgdGlsZVxuICAgICAgICAgICAgICAgIFN0YXRlLnN0YWdlU3RhdGUuY29sbGlzaW9uVGlsZXMucHVzaCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldERldGVjdGlvbkFyZWEoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGJveCA9IFN0YXRlLm5pbmphU3RhdGUuY29sbGlzaW9uRGV0ZWN0aW9uQm94O1xuICAgICAgICB0aGlzLmRldGVjdGlvbkFyZWEgPSB7XG4gICAgICAgICAgICB0b3BMZWZ0OiBib3gucG9zaXRpb24sXG4gICAgICAgICAgICB0b3BSaWdodDoge1xuICAgICAgICAgICAgICAgIHg6IGJveC5wb3NpdGlvbi54ICsgYm94LmRpbWVuc2lvbnMudyxcbiAgICAgICAgICAgICAgICB5OiBib3gucG9zaXRpb24ueVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvdHRvbUxlZnQ6IHtcbiAgICAgICAgICAgICAgICB4OiBib3gucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICB5OiBib3gucG9zaXRpb24ueSAtIGJveC5kaW1lbnNpb25zLmhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib3R0b21SaWdodDoge1xuICAgICAgICAgICAgICAgIHg6IGJveC5wb3NpdGlvbi54ICsgYm94LmRpbWVuc2lvbnMudyxcbiAgICAgICAgICAgICAgICB5OiBib3gucG9zaXRpb24ueSAtIGJveC5kaW1lbnNpb25zLmhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRUaWxlc0luRGV0ZWN0aW9uQXJlYSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nZXREZXRlY3Rpb25BcmVhKCk7XG4gICAgICAgIFN0YXRlLnN0YWdlU3RhdGUuZGV0ZWN0aW9uVGlsZXMgPSBbXTtcblxuICAgICAgICBjb25zdCB0b3BMZWZ0WSA9IE1hdGguZmxvb3IodGhpcy5kZXRlY3Rpb25BcmVhLnRvcExlZnQueSk7XG4gICAgICAgIGNvbnN0IGJvdHRvbUxlZnRZID0gTWF0aC5mbG9vcih0aGlzLmRldGVjdGlvbkFyZWEuYm90dG9tTGVmdC55KTtcbiAgICAgICAgY29uc3QgdG9wTGVmdFggPSBNYXRoLmZsb29yKHRoaXMuZGV0ZWN0aW9uQXJlYS50b3BMZWZ0LngpO1xuICAgICAgICBjb25zdCB0b3BSaWdodFggPSBNYXRoLmZsb29yKHRoaXMuZGV0ZWN0aW9uQXJlYS50b3BSaWdodC54KTtcblxuICAgICAgICBmb3IgKGxldCByb3cgPSBib3R0b21MZWZ0WSArIDE7IHJvdyA8PSB0b3BMZWZ0WSArIDE7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSB0b3BMZWZ0WDsgY29sIDw9IHRvcFJpZ2h0WDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocm93IDwgMCB8fCBjb2wgPCAwKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gU3RhdGUuc3RhZ2VTdGF0ZS50aWxlcy5nZXQoYCR7Y29sfS0ke3Jvd31gKTtcbiAgICAgICAgICAgICAgICBpZiAodGlsZSAmJiB0aWxlLmxvb2t1cFZhbHVlICE9PSAnMDAnKSB7XG4gICAgICAgICAgICAgICAgICAgIFN0YXRlLnN0YWdlU3RhdGUuZGV0ZWN0aW9uVGlsZXMucHVzaCh0aWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9yb290U3RhdGUnO1xuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tICcuLi9vYmplY3RzL3N0YWdlJztcbmltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICcuLi9vYmplY3RzL2JhY2tncm91bmQnO1xuaW1wb3J0IHsgRGVidWdNb2RlIH0gZnJvbSAnLi4vZGVidWcvZGVidWdNb2RlJztcbmltcG9ydCB7IFJlbmRlcmluZ1V0aWxpdGllcyB9IGZyb20gJy4uL3V0aWxpdGVzL3JlbmRlcmluZ1V0aWxpdGllcyc7XG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJpbmdFbmdpbmUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHJ1bigpIHtcbiAgICAgICAgUmVuZGVyaW5nVXRpbGl0aWVzLnJlZnJlc2hDYW52YXMoKTtcblxuICAgICAgICBCYWNrZ3JvdW5kLmRyYXcoKTtcbiAgICAgICAgU3RhZ2UuZHJhdygpO1xuXG4gICAgICAgIGZvciAoY29uc3QgYXNzZXQgb2YgU3RhdGUuZ2FtZVN0YXRlLmFzc2V0cykge1xuICAgICAgICAgICAgYXNzZXQudXBkYXRlQW5pbWF0aW9uKFN0YXRlLmdhbWVTdGF0ZS5rZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIERlYnVnTW9kZS5kcmF3KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vb2JqZWN0cy9nYW1lJztcblxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5jb25zdCB7IGNhbnZhcywgYmdDYW52YXMgfSA9IGdhbWUuZ2V0Q2FudmFzKCk7XG5kb2N1bWVudC5ib2R5LnByZXBlbmQoYmdDYW52YXMsIGNhbnZhcyk7XG5nYW1lLnN0YXJ0KCk7XG4iLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3N0YXRlcy9yb290U3RhdGUnO1xuaW1wb3J0IHsgUmVuZGVyaW5nVXRpbGl0aWVzIH0gZnJvbSAnLi4vdXRpbGl0ZXMvcmVuZGVyaW5nVXRpbGl0aWVzJztcbmltcG9ydCB7IERpbWVuc2lvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2RpbWVuc2lvbnMnO1xuXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZCB7XG4gICAgc3RhdGljIGRyYXcoKSB7XG4gICAgICAgIGNvbnN0IHsgd2lkdGggfSA9IFN0YXRlLmJhY2tncm91bmRTdGF0ZS5iZ0NhbnZhcy5jYW52YXNFbGVtZW50O1xuICAgICAgICBjb25zdCBzY2FsZSA9IFN0YXRlLmJhY2tncm91bmRTdGF0ZS5iZ0ltYWdlLmhlaWdodCAvIFN0YXRlLmdhbWVTdGF0ZS5nYW1lVW5pdERpbWVuc2lvbnMuaDtcbiAgICAgICAgY29uc3QgeyB3LCBoIH0gPSBSZW5kZXJpbmdVdGlsaXRpZXMudG9TY3JlZW5EaW1lbnNpb25zKHRoaXMuZ2V0U2l6ZShzY2FsZSkpO1xuXG4gICAgICAgIGZvciAobGV0IGR4ID0gMDsgZHggPCB3aWR0aCAvIHc7IGR4KyspIHtcbiAgICAgICAgICAgIFN0YXRlLmJhY2tncm91bmRTdGF0ZS5jdHguZHJhd0ltYWdlKFN0YXRlLmJhY2tncm91bmRTdGF0ZS5iZ0ltYWdlLCBkeCAqIHcsIDAsIHcsIGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFNpemUoc2NhbGU6IG51bWJlcik6IERpbWVuc2lvbnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdzogU3RhdGUuYmFja2dyb3VuZFN0YXRlLmJnSW1hZ2Uud2lkdGggLyBzY2FsZSxcbiAgICAgICAgICAgIGg6IFN0YXRlLmJhY2tncm91bmRTdGF0ZS5iZ0ltYWdlLmhlaWdodCAvIHNjYWxlXG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENhbnZhc0VsZW1lbnQge1xuICBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmNhbnZhc0VsZW1lbnQuaWQgPSBpZDtcbiAgICB0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL3Jvb3RTdGF0ZSc7XG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvZ2FtZVN0YXRlJztcbmltcG9ydCB7IFBoeXNpY3NFbmdpbmUgfSBmcm9tICcuLi9lbmdpbmVzL3BoeXNpY3NFbmdpbmUnO1xuaW1wb3J0IHsgUmVuZGVyaW5nRW5naW5lIH0gZnJvbSAnLi4vZW5naW5lcy9yZW5kZXJpbmdFbmdpbmUnO1xuaW1wb3J0IHsgUmVuZGVyaW5nVXRpbGl0aWVzIH0gZnJvbSAnLi4vdXRpbGl0ZXMvcmVuZGVyaW5nVXRpbGl0aWVzJztcbmltcG9ydCB7IERlYnVnTW9kZSB9IGZyb20gJy4uL2RlYnVnL2RlYnVnTW9kZSc7XG5pbXBvcnQgeyBOaW5qYSB9IGZyb20gJy4vbmluamEnO1xuaW1wb3J0IHsgQnVpbGRlck1vZGUgfSBmcm9tICcuLi9kZWJ1Zy9idWlsZGVyTW9kZSc7XG5pbXBvcnQgJy4uL3N0eWxlcy5jc3MnO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG5cbiAgc3RhdGU6IEdhbWVTdGF0ZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0YXRlID0gU3RhdGUuZ2FtZVN0YXRlO1xuICAgIHRoaXMuc3RhdGUuYXNzZXRzID0gW25ldyBOaW5qYSgpXTtcbiAgICB0aGlzLnN0YXRlLnJlbmRlcmluZ0VuZ2luZSA9IG5ldyBSZW5kZXJpbmdFbmdpbmUoKTtcbiAgICB0aGlzLnN0YXRlLnBoeXNpY3NFbmdpbmUgPSBuZXcgUGh5c2ljc0VuZ2luZSgpO1xuICAgIFJlbmRlcmluZ1V0aWxpdGllcy5zZXREaW1lbnNpb25zKCk7XG4gIH1cblxuICBwYXJzZUtleShrZXk6IHN0cmluZywgcHJlc3NlZDogYm9vbGVhbikge1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgIGNhc2UgJ3cnOlxuICAgICAgY2FzZSAnVyc6XG4gICAgICAgIGlmIChwcmVzc2VkICYmICF0aGlzLnN0YXRlLmtleXMudXAgfHwgIXByZXNzZWQgJiYgdGhpcy5zdGF0ZS5rZXlzLnVwKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5rZXlzLnVwID0gcHJlc3NlZDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgIGNhc2UgJ3MnOlxuICAgICAgY2FzZSAnUyc6XG4gICAgICAgIGlmIChwcmVzc2VkICYmICF0aGlzLnN0YXRlLmtleXMuZG93biB8fCAhcHJlc3NlZCAmJiB0aGlzLnN0YXRlLmtleXMuZG93bikge1xuICAgICAgICAgIHRoaXMuc3RhdGUua2V5cy5kb3duID0gcHJlc3NlZDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnQSc6XG4gICAgICAgIGlmIChwcmVzc2VkICYmICF0aGlzLnN0YXRlLmtleXMubGVmdCB8fCAhcHJlc3NlZCAmJiB0aGlzLnN0YXRlLmtleXMubGVmdCkge1xuICAgICAgICAgIHRoaXMuc3RhdGUua2V5cy5sZWZ0ID0gcHJlc3NlZDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICBjYXNlICdkJzpcbiAgICAgIGNhc2UgJ0QnOlxuICAgICAgICBpZiAocHJlc3NlZCAmJiAhdGhpcy5zdGF0ZS5rZXlzLnJpZ2h0IHx8ICFwcmVzc2VkICYmIHRoaXMuc3RhdGUua2V5cy5yaWdodCkge1xuICAgICAgICAgIHRoaXMuc3RhdGUua2V5cy5yaWdodCA9IHByZXNzZWQ7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJyAnOlxuICAgICAgICBpZiAocHJlc3NlZCAmJiAhdGhpcy5zdGF0ZS5rZXlzLnNwYWNlIHx8ICFwcmVzc2VkICYmIHRoaXMuc3RhdGUua2V5cy5zcGFjZSkge1xuICAgICAgICAgIHRoaXMuc3RhdGUua2V5cy5zcGFjZSA9IHByZXNzZWQ7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ1NoaWZ0JzpcbiAgICAgICAgaWYgKHByZXNzZWQgJiYgIXRoaXMuc3RhdGUua2V5cy5zaGlmdCB8fCAhcHJlc3NlZCAmJiB0aGlzLnN0YXRlLmtleXMuc2hpZnQpIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLmtleXMuc2hpZnQgPSBwcmVzc2VkO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdGOSc6XG4gICAgICAgIGlmIChwcmVzc2VkKSB7IFN0YXRlLmRlYnVnU3RhdGUuZGVidWdNb2RlID0gIVN0YXRlLmRlYnVnU3RhdGUuZGVidWdNb2RlOyB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICBpZiAocHJlc3NlZCkge1xuICAgICAgICAgIGNvbnN0IHBhdXNlZCA9ICFTdGF0ZS5nYW1lU3RhdGUucGF1c2VkO1xuICAgICAgICAgIFJlbmRlcmluZ1V0aWxpdGllcy5wYXVzZUdhbWUocGF1c2VkKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBnZXRDYW52YXMoKTogeyBba2V5OiBzdHJpbmddOiBIVE1MQ2FudmFzRWxlbWVudCB9IHtcbiAgICByZXR1cm4geyBjYW52YXM6IFN0YXRlLmdhbWVTdGF0ZS5jYW52YXMuY2FudmFzRWxlbWVudCwgYmdDYW52YXM6IFN0YXRlLmJhY2tncm91bmRTdGF0ZS5iZ0NhbnZhcy5jYW52YXNFbGVtZW50IH07XG4gIH1cblxuICBydW4oKTogdm9pZCB7XG4gICAgLy8gVE9ETzogRGl2aXNpb24gaXMgY29zdGx5LCBiZXR0ZXIgd2UgY2FsY3VsYXRlIHRoaXMgb25seSB3aGVuIHRoZSBmcHMgY2hhbmdlc1xuICAgIGNvbnN0IGRlbGF5ID0gdGhpcy5zdGF0ZS5mcmFtZXNQZXJTZWNvbmQgPiAwID8gMTAwMCAvIHRoaXMuc3RhdGUuZnJhbWVzUGVyU2Vjb25kIDogMDtcbiAgICB0aGlzLnN0YXRlLnBhdXNlZCA9IGRlbGF5IDw9IDA7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUucGF1c2VkKSB7XG4gICAgICAgIHRoaXMuc3RhdGUucmVuZGVyaW5nRW5naW5lLnJ1bigpO1xuICAgICAgICB0aGlzLnN0YXRlLnBoeXNpY3NFbmdpbmUucnVuKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJ1bigpO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxuXG4gIHN0YXJ0KCk6IHZvaWQge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZ0OiBLZXlib2FyZEV2ZW50KSA9PiB0aGlzLnBhcnNlS2V5KGV2dC5rZXksIHRydWUpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldnQ6IEtleWJvYXJkRXZlbnQpID0+IHRoaXMucGFyc2VLZXkoZXZ0LmtleSwgZmFsc2UpKTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IFN0YXRlLmdhbWVTdGF0ZS5jYW52YXMuY2FudmFzRWxlbWVudDtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2dDogTW91c2VFdmVudCkgPT4gRGVidWdNb2RlLmhhbmRsZU1vdXNlTW92ZShldnQpKTtcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0OiBNb3VzZUV2ZW50KSA9PiBCdWlsZGVyTW9kZS5oYW5kbGVNb3VzZUNsaWNrKGV2dCkpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChldiA9PiB7XG4gICAgICBTdGF0ZS5nYW1lU3RhdGUuY2FudmFzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XG4gICAgICBTdGF0ZS5nYW1lU3RhdGUuY2FudmFzLmNhbnZhc0VsZW1lbnQud2lkdGggPSBpbm5lcldpZHRoO1xuICAgICAgU3RhdGUuYmFja2dyb3VuZFN0YXRlLmJnQ2FudmFzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XG4gICAgICBTdGF0ZS5iYWNrZ3JvdW5kU3RhdGUuYmdDYW52YXMuY2FudmFzRWxlbWVudC53aWR0aCA9IGlubmVyV2lkdGg7XG4gICAgICBSZW5kZXJpbmdVdGlsaXRpZXMuc2V0RGltZW5zaW9ucygpO1xuICAgICAgaWYgKHRoaXMuc3RhdGUucGF1c2VkKSB7XG4gICAgICAgIHRoaXMuc3RhdGUucmVuZGVyaW5nRW5naW5lLnJ1bigpO1xuICAgICAgfVxuICAgIH0pKTtcblxuICAgICh3aW5kb3cgYXMgYW55KS5jeWNsZUZyYW1lcyA9IChuOiBudW1iZXIpID0+IFJlbmRlcmluZ1V0aWxpdGllcy5jeWNsZUZyYW1lcyhuKTtcbiAgICAod2luZG93IGFzIGFueSkucGF1c2VHYW1lID0gKHBhdXNlOiBib29sZWFuKSA9PiBSZW5kZXJpbmdVdGlsaXRpZXMucGF1c2VHYW1lKHBhdXNlKTtcblxuICAgIHRoaXMucnVuKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEtleXMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2tleXMnO1xuXG5pbXBvcnQgeyBBbmltYXRpb25UeXBlcyB9IGZyb20gJy4uL2NvbnN0YW50cy9hbmltYXRpb25UeXBlcyc7XG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9kaW1lbnNpb25zJztcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL3Jvb3RTdGF0ZSc7XG5pbXBvcnQgeyBOaW5qYVN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL25pbmphU3RhdGUnO1xuaW1wb3J0IHsgUmVuZGVyaW5nVXRpbGl0aWVzIH0gZnJvbSAnLi4vdXRpbGl0ZXMvcmVuZGVyaW5nVXRpbGl0aWVzJztcbmltcG9ydCB7IFVwZGF0ZU9iamVjdCB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXBkYXRlT2JqZWN0JztcbmltcG9ydCB7IENvbGxpc2lvblV0aWxpdGllcyB9IGZyb20gJy4uL3V0aWxpdGVzL2NvbGxpc2lvblV0aWxpdGllcyc7XG5cbmV4cG9ydCBjbGFzcyBOaW5qYSBpbXBsZW1lbnRzIFVwZGF0ZU9iamVjdCB7XG4gICAgc3RhdGU6IE5pbmphU3RhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLm5pbmphU3RhdGU7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJvcGVydGllcyhrZXlzOiBLZXlzKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oa2V5cyk7XG4gICAgfVxuXG4gICAgdXBkYXRlQW5pbWF0aW9uKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVNwcml0ZSgpO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQb3NpdGlvbih7IHVwLCByaWdodCwgbGVmdCwgZG93biB9OiBLZXlzKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hlY2tJZklkbGUocmlnaHQsIGxlZnQpO1xuXG4gICAgICAgIGNvbnN0IHZlbG9jaXR5ID0geyBkeDogMCwgZHk6IHRoaXMuc3RhdGUudmVsb2NpdHkuZHkgfTtcbiAgICAgICAgaWYgKHVwICYmICF0aGlzLnN0YXRlLmp1bXBpbmcgJiYgIXRoaXMuc3RhdGUuanVtcFVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuanVtcGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZSA9IC0xO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPSB0aGlzLnN0YXRlLm1vdmluZ1JpZ2h0ID8gQW5pbWF0aW9uVHlwZXMuSlVNUF9SSUdIVCA6IEFuaW1hdGlvblR5cGVzLkpVTVBfTEVGVDtcbiAgICAgICAgICAgIHZlbG9jaXR5LmR5ICs9IHRoaXMuc3RhdGUuanVtcFNwZWVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1vdmluZ1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5qdW1waW5nKSB7IHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID0gQW5pbWF0aW9uVHlwZXMuUlVOX1JJR0hUOyB9XG4gICAgICAgICAgICB2ZWxvY2l0eS5keCArPSB0aGlzLnN0YXRlLm1vdmVtZW50U3BlZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGVmdCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tb3ZpbmdSaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmp1bXBpbmcpIHsgdGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPSBBbmltYXRpb25UeXBlcy5SVU5fTEVGVDsgfVxuICAgICAgICAgICAgdmVsb2NpdHkuZHggLT0gdGhpcy5zdGF0ZS5tb3ZlbWVudFNwZWVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZlbG9jaXR5LmR5ID4gLXRoaXMuc3RhdGUudGVybWluYWxWZWxvY2l0eSkge1xuICAgICAgICAgICAgdmVsb2NpdHkuZHkgLT0gdGhpcy5zdGF0ZS5ncmF2aXR5O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXBkYXRlZFZlbG9jaXR5ID0gQ29sbGlzaW9uVXRpbGl0aWVzLmNvbGxpZGVXaXRoVGlsZXModGhpcy5zdGF0ZS5oaXRib3gsIHZlbG9jaXR5KTtcblxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuanVtcGluZyAmJiB1cGRhdGVkVmVsb2NpdHkuZHkgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuanVtcGluZyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodXBkYXRlZFZlbG9jaXR5LmR5ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmp1bXBpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlLnZlbG9jaXR5ID0gdXBkYXRlZFZlbG9jaXR5O1xuXG4gICAgICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueCArPSB1cGRhdGVkVmVsb2NpdHkuZHg7XG4gICAgICAgIHRoaXMuc3RhdGUucG9zaXRpb24ueSArPSB1cGRhdGVkVmVsb2NpdHkuZHk7XG5cbiAgICAgICAgLy8gVG8gcmVtb3ZlIHJlcGV0aXRpdmUganVtcGluZyB3aGVuIGtleSBpcyBoZWxkXG4gICAgICAgIGlmICh1cCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qdW1wVXNlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmp1bXBVc2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBtYXkgd2FudCB0byByZWNvbnNpZGVyIGhvdyB0aGlzIGlzIGJlaW5nIGRvbmUuLi4gVGhpcyBpcyB0byBjZW50ZXIgdGhlIHZpZXcgb24gdGhlIG5pbmphXG4gICAgICAgIFN0YXRlLmdhbWVTdGF0ZS5wb3NpdGlvbiA9IHsgeDogdGhpcy5zdGF0ZS5wb3NpdGlvbi54IC0gU3RhdGUuZ2FtZVN0YXRlLmdhbWVVbml0RGltZW5zaW9ucy53IC8gMiArIC41LCB5OiB0aGlzLnN0YXRlLnBvc2l0aW9uLnkgLSA1IH07XG4gICAgICAgIHRoaXMudXBkYXRlSGl0Ym94QW5kQ29sbGlzaW9uRGV0ZWN0aW9uQm94UG9zaXRpb25zKCk7XG4gICAgfVxuXG4gICAgY2hlY2tJZklkbGUocmlnaHQ6IGJvb2xlYW4sIGxlZnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCFyaWdodCAmJiAhbGVmdCAmJiAhdGhpcy5zdGF0ZS5qdW1waW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9IHRoaXMuc3RhdGUubW92aW5nUmlnaHQgPyBBbmltYXRpb25UeXBlcy5JRExFX1JJR0hUIDogQW5pbWF0aW9uVHlwZXMuSURMRV9MRUZUO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlSGl0Ym94QW5kQ29sbGlzaW9uRGV0ZWN0aW9uQm94UG9zaXRpb25zKCkge1xuICAgICAgICB0aGlzLnN0YXRlLmhpdGJveC5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuc3RhdGUucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IHRoaXMuc3RhdGUucG9zaXRpb24ueSAtIHRoaXMuc3RhdGUuaGl0Ym94T2Zmc2V0LmhcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGF0ZS5jb2xsaXNpb25EZXRlY3Rpb25Cb3gucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiB0aGlzLnN0YXRlLnBvc2l0aW9uLnggLSAyLFxuICAgICAgICAgICAgeTogdGhpcy5zdGF0ZS5wb3NpdGlvbi55ICsgMlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHVwZGF0ZVNwcml0ZSgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5mcmFtZUNvdW50Kys7XG4gICAgICAgIHRoaXMuc3RhdGUuZnJhbWVDb3VudCAlPSB0aGlzLnN0YXRlLmZyYW1lRGVsYXk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZnJhbWVDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuanVtcGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudEZyYW1lKys7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudEZyYW1lID49IHRoaXMuc3RhdGUuZnJhbWVzUGVyQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudEZyYW1lICU9IHRoaXMuc3RhdGUuZnJhbWVzUGVyQW5pbWF0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgPSAodGhpcy5zdGF0ZS5jdXJyZW50RnJhbWUgKyAxKSAlIHRoaXMuc3RhdGUuZnJhbWVzUGVyQW5pbWF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50SW1hZ2UgPSB0aGlzLnN0YXRlLmFuaW1hdGlvbnMuZ2V0QW5pbWF0aW9uKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlKS5nZXRJbWFnZXMoKVt0aGlzLnN0YXRlLmN1cnJlbnRGcmFtZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IFJlbmRlcmluZ1V0aWxpdGllcy50b1NjcmVlbkNvb3JkaW5hdGVzKFN0YXRlLm5pbmphU3RhdGUucG9zaXRpb24pO1xuICAgICAgICBjb25zdCB7IHcsIGggfSA9IFJlbmRlcmluZ1V0aWxpdGllcy50b1NjcmVlbkRpbWVuc2lvbnModGhpcy5nZXRTaXplKCkpO1xuXG4gICAgICAgIFN0YXRlLmdhbWVTdGF0ZS5jYW52YXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIFN0YXRlLm5pbmphU3RhdGUuY3VycmVudEltYWdlLCB4LCB5LCB3LCBoXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0U2l6ZSgpOiBEaW1lbnNpb25zIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHc6IFN0YXRlLm5pbmphU3RhdGUuY3VycmVudEltYWdlLndpZHRoIC8gU3RhdGUubmluamFTdGF0ZS5TUFJJVEVfU0laRVIsXG4gICAgICAgICAgICBoOiBTdGF0ZS5uaW5qYVN0YXRlLmN1cnJlbnRJbWFnZS5oZWlnaHQgLyBTdGF0ZS5uaW5qYVN0YXRlLlNQUklURV9TSVpFUlxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL3Jvb3RTdGF0ZSc7XG5pbXBvcnQgeyBSZW5kZXJpbmdVdGlsaXRpZXMgfSBmcm9tICcuLi91dGlsaXRlcy9yZW5kZXJpbmdVdGlsaXRpZXMnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3BvaW50JztcblxuZXhwb3J0IGNsYXNzIFN0YWdlIHtcblxuICAgIHN0YXRpYyBkcmF3KCkge1xuICAgICAgICBjb25zdCB2aWV3YWJsZVN0YWdlR3JpZEFyZWEgPSBSZW5kZXJpbmdVdGlsaXRpZXMudmlld2FibGVTdGFnZUdyaWRBcmVhKCk7XG4gICAgICAgIGNvbnN0IG1pbjogUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiBNYXRoLmZsb29yKHZpZXdhYmxlU3RhZ2VHcmlkQXJlYS5ib3R0b21MZWZ0LngpLFxuICAgICAgICAgICAgeTogTWF0aC5mbG9vcih2aWV3YWJsZVN0YWdlR3JpZEFyZWEuYm90dG9tTGVmdC55KVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBtYXg6IFBvaW50ID0ge1xuICAgICAgICAgICAgeDogTWF0aC5jZWlsKHZpZXdhYmxlU3RhZ2VHcmlkQXJlYS50b3BSaWdodC54KSxcbiAgICAgICAgICAgIHk6IE1hdGguY2VpbCh2aWV3YWJsZVN0YWdlR3JpZEFyZWEudG9wUmlnaHQueSlcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCByb3cgPSBtaW4ueTsgcm93IDw9IG1heC55OyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gbWluLng7IGNvbCA8PSBtYXgueDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gU3RhdGUuc3RhZ2VTdGF0ZS50aWxlcy5nZXQoYCR7Y29sfS0ke3Jvd31gKTtcbiAgICAgICAgICAgICAgICBpZiAodGlsZSAmJiB0aWxlLmxvb2t1cFZhbHVlICE9PSAnMDAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gUmVuZGVyaW5nVXRpbGl0aWVzLnRvU2NyZWVuQ29vcmRpbmF0ZXMoeyB4OiB0aWxlLmNvbCwgeTogdGlsZS5yb3cgfSk7XG4gICAgICAgICAgICAgICAgICAgIFN0YXRlLmdhbWVTdGF0ZS5jYW52YXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlLnRpbGVTZXRTdGF0ZS5pbWFnZU1hcC5nZXQoTnVtYmVyKHRpbGUubG9va3VwVmFsdWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgICAgICAgICB5LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVuZGVyaW5nVXRpbGl0aWVzLnRvUGl4ZWxzKDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVuZGVyaW5nVXRpbGl0aWVzLnRvUGl4ZWxzKDEpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJleHBvcnQgY2xhc3MgU3RhZ2VUaWxlIHtcbiAgICByb3c6IG51bWJlcjtcbiAgICBjb2w6IG51bWJlcjtcbiAgICBsb29rdXBWYWx1ZTogc3RyaW5nO1xuICAgIGNvbGxpc2lvbjogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgbG9va3VwVmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJvdyA9IHJvdztcbiAgICAgICAgdGhpcy5jb2wgPSBjb2w7XG4gICAgICAgIHRoaXMubG9va3VwVmFsdWUgPSBsb29rdXBWYWx1ZTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb24gPSBmYWxzZTtcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3Qgc3RhZ2VPbmVUaWxlTGlzdCA9IFtcbiAgICBbJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA2JywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzA0JywgJzA1JywgJzA1JywgJzA1J10sXG4gICAgWycwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNicsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwNCcsICcwNScsICcwNScsICcwNSddLFxuICAgIFsnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDYnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDQnLCAnMDUnLCAnMDUnLCAnMDUnXSxcbiAgICBbJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA2JywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzA0JywgJzA1JywgJzA1JywgJzA1J10sXG4gICAgWycwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNicsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwNCcsICcwNScsICcwNScsICcwNSddLFxuICAgIFsnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDYnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDQnLCAnMDUnLCAnMDUnLCAnMDUnXSxcbiAgICBbJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA2JywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzA0JywgJzA1JywgJzA1JywgJzA1J10sXG4gICAgWycwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNicsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwNCcsICcwNScsICcwNScsICcwNSddLFxuICAgIFsnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDYnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDQnLCAnMDUnLCAnMDUnLCAnMDUnXSxcbiAgICBbJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA2JywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAxJywgJzAzJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzA0JywgJzA1JywgJzA1JywgJzA1J10sXG4gICAgWycwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNicsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMScsICcwMicsICcxMycsICcxNCcsICcwNicsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwNCcsICcwNScsICcwNScsICcwNSddLFxuICAgIFsnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDYnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDQnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDYnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDQnLCAnMDUnLCAnMDUnLCAnMDUnXSxcbiAgICBbJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA2JywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzEwJywgJzE0JywgJzA1JywgJzA1JywgJzA1JywgJzA2JywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzA0JywgJzA1JywgJzA1JywgJzA1J10sXG4gICAgWycwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNicsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwNCcsICcwNScsICcwNScsICcwNScsICcxNicsICcxMScsICcxMicsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwMCcsICcwNCcsICcwNScsICcwNScsICcwNSddLFxuICAgIFsnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDYnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDQnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDYnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDAnLCAnMDQnLCAnMDUnLCAnMDUnLCAnMDUnXSxcbiAgICBbJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA2JywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzA0JywgJzA1JywgJzA1JywgJzA1JywgJzA2JywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzAwJywgJzA0JywgJzA1JywgJzA1JywgJzA1J10sXG4gICAgWycwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcxNicsICcxNycsICcwMicsICcwMicsICcwMicsICcwMicsICcxMycsICcxNCcsICcwNScsICcwNScsICcwNScsICcxNicsICcxNycsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcwMicsICcxNCcsICcwNScsICcwNScsICcwNSddLFxuICAgIFsnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnLCAnMDUnXSxcbiAgICBbJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1JywgJzA1J10sXG4gICAgWycwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNScsICcwNSddLFxuXTtcbiIsImltcG9ydCB7IENhbnZhc0VsZW1lbnQgfSBmcm9tICcuLi9vYmplY3RzL2NhbnZhcyc7XG5pbXBvcnQgYmdJbWFnZVNyYyBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy90aWxlc2V0XzEvQkcvQkcucG5nJztcblxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmRTdGF0ZSB7XG4gICAgYmdDYW52YXM6IENhbnZhc0VsZW1lbnQ7XG4gICAgYmdJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJnQ2FudmFzID0gbmV3IENhbnZhc0VsZW1lbnQoaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQsICdjYW52YXMtYmcnKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmJnQ2FudmFzLmN0eDtcbiAgICAgICAgdGhpcy5iZ0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuYmdJbWFnZS5zcmMgPSBiZ0ltYWdlU3JjO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJ1aWxkZXJNb2RlRW5naW5lIH0gZnJvbSAnLi4vZW5naW5lcy9idWlsZGVyTW9kZUVuZ2luZSc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcG9pbnQnO1xuXG5leHBvcnQgY2xhc3MgQnVpbGRlclN0YXRlIHtcblxuICAgIGJ1aWxkZXJNb2RlOiBib29sZWFuO1xuICAgIGJ1aWxkZXJFbmdpbmU6IEJ1aWxkZXJNb2RlRW5naW5lO1xuICAgIHRpbGVTZWxlY3Rvcj86IEhUTUxFbGVtZW50O1xuICAgIHRpbGVTZWxlY3RvckNoZWNrYm94OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHRpbGVTZWxlY3Rvck9wZW46IGJvb2xlYW47XG4gICAgc2VsZWN0ZWRUaWxlOiBIVE1MRWxlbWVudDtcblxuICAgIHJlbW92aW5nVGlsZXM6IGJvb2xlYW47XG4gICAgcmVtb3ZpbmdUaWxlc0NoZWNrYm94OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgaGFuZGxlTW91c2VDbGljazogYm9vbGVhbjtcbiAgICBjbGlja2VkUG9zaXRpb246IFBvaW50O1xuICAgIGNsaWNrZWRHcmlkQ29vcmRzOiBQb2ludDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJ1aWxkZXJNb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnVpbGRlckVuZ2luZSA9IG5ldyBCdWlsZGVyTW9kZUVuZ2luZSgpO1xuICAgICAgICB0aGlzLnRpbGVTZWxlY3Rvck9wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYW5kbGVNb3VzZUNsaWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVtb3ZpbmdUaWxlcyA9IGZhbHNlO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgTWVudU9wdGlvbiB9IGZyb20gJy4uL2RlYnVnL21lbnVPcHRpb24nO1xuaW1wb3J0IHsgTWVudU9wdGlvbnMgfSBmcm9tICcuLi9jb25zdGFudHMvbWVudU9wdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgRGVidWdTdGF0ZSB7XG5cbiAgICBkZWJ1Z01vZGU6IGJvb2xlYW47XG4gICAgaGFuZGxlTW91c2VNb3ZlOiBib29sZWFuO1xuICAgIGhhc0J1dHRvbnM6IGJvb2xlYW47XG4gICAgbWVudU9wZW46IGJvb2xlYW47XG4gICAgbWVudU9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogTWVudU9wdGlvbiB9O1xuICAgIHByb3BlcnRpZXNPcGVuOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGVidWdNb2RlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFuZGxlTW91c2VNb3ZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzQnV0dG9ucyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnVPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvcGVydGllc09wZW4gPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZW51T3B0aW9uc0pzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWVudU9wdGlvbnMnKTtcbiAgICAgICAgaWYgKG1lbnVPcHRpb25zSnNvbikge1xuICAgICAgICAgICAgdGhpcy5tZW51T3B0aW9ucyA9IEpTT04ucGFyc2UobWVudU9wdGlvbnNKc29uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWVudU9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgIE1lbnVPcHRpb25zLmdldE9wdGlvbkxpc3QoKS5mb3JFYWNoKChvcHRpb25OYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBuZXcgTWVudU9wdGlvbihvcHRpb25OYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVPcHRpb25zW29wdGlvbk5hbWVdID0gb3B0aW9uO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm1lbnVPcHRpb25zW01lbnVPcHRpb25zLkNPT1JESU5BVEVTXS5saW5lV2lkdGggPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzRWxlbWVudCB9IGZyb20gJy4uL29iamVjdHMvY2FudmFzJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wb2ludCc7XG5pbXBvcnQgeyBLZXlzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9rZXlzJztcbmltcG9ydCB7IERpbWVuc2lvbnMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2RpbWVuc2lvbnMnO1xuaW1wb3J0IHsgVXBkYXRlT2JqZWN0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy91cGRhdGVPYmplY3QnO1xuaW1wb3J0IHsgUmVuZGVyaW5nRW5naW5lIH0gZnJvbSAnLi4vZW5naW5lcy9yZW5kZXJpbmdFbmdpbmUnO1xuaW1wb3J0IHsgUGh5c2ljc0VuZ2luZSB9IGZyb20gJy4uL2VuZ2luZXMvcGh5c2ljc0VuZ2luZSc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGUge1xuICAgIGNhbnZhczogQ2FudmFzRWxlbWVudDtcbiAgICBhc3NldHM6IFVwZGF0ZU9iamVjdFtdO1xuICAgIHJlbmRlcmluZ0VuZ2luZTogUmVuZGVyaW5nRW5naW5lO1xuICAgIHBoeXNpY3NFbmdpbmU6IFBoeXNpY3NFbmdpbmU7XG4gICAga2V5czogS2V5cztcbiAgICBkZWZhdWx0RnJhbWVzUGVyU2Vjb25kOiBudW1iZXI7XG4gICAgZnJhbWVzUGVyU2Vjb25kOiBudW1iZXI7XG4gICAgZ2FtZVVuaXQ6IG51bWJlcjtcbiAgICBzY3JlZW5IZWlnaHQ6IG51bWJlcjtcbiAgICBzY3JlZW5XaWR0aDogbnVtYmVyO1xuICAgIHBpeGVsc1BlclVuaXQ6IG51bWJlcjtcbiAgICBwb3NpdGlvbjogUG9pbnQ7IC8vIHRoZSBzY3JlZW4gcG9zaXRpb24gaW5kaWNhdGVzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgY2VudGVyIG9mIHRoZSB2aWV3IGluIGdhbWUgY29vcmRzXG4gICAgZ2FtZVVuaXREaW1lbnNpb25zOiBEaW1lbnNpb25zOyAvLyBkIHJlcHJlc2VudHMgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIHZpZXcgaW4gZ2FtZSB1bml0c1xuICAgIHNjcmVlblBpeGVsRGltZW5zaW9uczogRGltZW5zaW9ucztcbiAgICBwYXVzZWQ6IGJvb2xlYW47XG4gICAgZGVmYXVsdENvbG9yOiBzdHJpbmc7XG4gICAgZGVmYXVsdExpbmVXaWR0aDogbnVtYmVyO1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5rZXlzID0ge1xuICAgICAgICAgICAgdXA6IGZhbHNlLFxuICAgICAgICAgICAgZG93bjogZmFsc2UsXG4gICAgICAgICAgICBsZWZ0OiBmYWxzZSxcbiAgICAgICAgICAgIHJpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgIHNwYWNlOiBmYWxzZSxcbiAgICAgICAgICAgIHNoaWZ0OiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdhbWVVbml0ID0gMTtcbiAgICAgICAgdGhpcy5zY3JlZW5XaWR0aCA9IGlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuc2NyZWVuSGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhc0VsZW1lbnQoaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQsICdjYW52YXMtZmcnKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICB0aGlzLmRlZmF1bHRGcmFtZXNQZXJTZWNvbmQgPSA2MDtcbiAgICAgICAgdGhpcy5mcmFtZXNQZXJTZWNvbmQgPSB0aGlzLmRlZmF1bHRGcmFtZXNQZXJTZWNvbmQ7XG4gICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVmYXVsdENvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgdGhpcy5kZWZhdWx0TGluZVdpZHRoID0gMTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBOaW5qYUFuaW1hdGlvbnMgfSBmcm9tICcuLi9hbmltYXRpb25zL25pbmphQW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBBbmltYXRpb25UeXBlcyB9IGZyb20gJy4uL2NvbnN0YW50cy9hbmltYXRpb25UeXBlcyc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi9pbnRlcmZhY2VzL2JveCc7XG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9kaW1lbnNpb25zJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wb2ludCc7XG5pbXBvcnQgeyBWZWxvY2l0eSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdmVsb2NpdHknO1xuXG5leHBvcnQgY2xhc3MgTmluamFTdGF0ZSB7XG4gICAgYW5pbWF0aW9uczogTmluamFBbmltYXRpb25zO1xuICAgIGF0dGFja2luZzogYm9vbGVhbjtcbiAgICBjb2xsaXNpb25EZXRlY3Rpb25Cb3g6IEJveDtcbiAgICBjdXJyZW50RnJhbWU6IG51bWJlcjtcbiAgICBjdXJyZW50SW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgY3VycmVudFN0YXRlOiBzdHJpbmc7XG4gICAgZmFsbGluZzogYm9vbGVhbjtcbiAgICBmcmFtZUNvdW50OiBudW1iZXI7XG4gICAgZnJhbWVEZWxheTogbnVtYmVyO1xuICAgIGZyYW1lc1BlckFuaW1hdGlvbjogbnVtYmVyO1xuICAgIGhpdGJveDogQm94O1xuICAgIGhpdGJveE9mZnNldDogRGltZW5zaW9ucztcbiAgICBqdW1waW5nOiBib29sZWFuO1xuICAgIGp1bXBVc2VkOiBib29sZWFuO1xuICAgIG1vdmluZ1JpZ2h0OiBib29sZWFuO1xuICAgIHBvc2l0aW9uOiBQb2ludDtcbiAgICBtb3ZlbWVudFNwZWVkOiBudW1iZXI7XG4gICAgLy8gVE9ETzogR3Jhdml0eSBzaG91bGQgYmUgaW4gdGhlIGdhbWVTdGF0ZSwgYW5kIGl0IHNob3VsZCBlZmZlY3QgYSBjaGFyYWN0ZXJzIG1hc3NcbiAgICBncmF2aXR5OiBudW1iZXI7XG4gICAgdmVsb2NpdHk6IFZlbG9jaXR5O1xuICAgIHRlcm1pbmFsVmVsb2NpdHk6IG51bWJlcjtcbiAgICBqdW1wU3BlZWQ6IG51bWJlcjtcblxuICAgIHJlYWRvbmx5IEhFSUdIVF9JTl9VTklUUzogbnVtYmVyID0gMjtcbiAgICByZWFkb25seSBTUFJJVEVfU0laRVI6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBuZXcgTmluamFBbmltYXRpb25zKCk7XG4gICAgICAgIHRoaXMuYXR0YWNraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB0aGlzLmFuaW1hdGlvbnMuZ2V0QW5pbWF0aW9uKHRoaXMuY3VycmVudFN0YXRlKS5nZXRJbWFnZXMoKVt0aGlzLmN1cnJlbnRGcmFtZV07XG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gQW5pbWF0aW9uVHlwZXMuSURMRV9SSUdIVDtcbiAgICAgICAgdGhpcy5mYWxsaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnJhbWVDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuZnJhbWVEZWxheSA9IDY7XG4gICAgICAgIHRoaXMuZnJhbWVzUGVyQW5pbWF0aW9uID0gMTA7XG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1vdmluZ1JpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHsgeDogMTIsIHk6IDYgfTtcbiAgICAgICAgdGhpcy5tb3ZlbWVudFNwZWVkID0gLjI1O1xuICAgICAgICB0aGlzLlNQUklURV9TSVpFUiA9IHRoaXMuY3VycmVudEltYWdlLmhlaWdodCAvIHRoaXMuSEVJR0hUX0lOX1VOSVRTO1xuICAgICAgICB0aGlzLmdyYXZpdHkgPSAuMDU7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7IGR4OiAwLCBkeTogMCB9O1xuICAgICAgICB0aGlzLnRlcm1pbmFsVmVsb2NpdHkgPSAuMzU7XG4gICAgICAgIHRoaXMuanVtcFNwZWVkID0gLjc1O1xuXG4gICAgICAgIHRoaXMuaGl0Ym94T2Zmc2V0ID0ge1xuICAgICAgICAgICAgdzogLjI1LFxuICAgICAgICAgICAgaDogLjI1XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGl0Ym94ID0ge1xuICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5oaXRib3hPZmZzZXQuaFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICB3OiB0aGlzLmN1cnJlbnRJbWFnZS53aWR0aCAvIHRoaXMuU1BSSVRFX1NJWkVSICsgdGhpcy5oaXRib3hPZmZzZXQudyxcbiAgICAgICAgICAgICAgICBoOiB0aGlzLmN1cnJlbnRJbWFnZS5oZWlnaHQgLyB0aGlzLlNQUklURV9TSVpFUiAtIHRoaXMuaGl0Ym94T2Zmc2V0LmhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNvbGxpc2lvbkRldGVjdGlvbkJveCA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IHRoaXMucG9zaXRpb24ueCAtIDIsIHk6IHRoaXMucG9zaXRpb24ueSArIDIgfSxcbiAgICAgICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICAgICAgICB3OiB0aGlzLmN1cnJlbnRJbWFnZS53aWR0aCAvIHRoaXMuU1BSSVRFX1NJWkVSICsgNCxcbiAgICAgICAgICAgICAgICBoOiB0aGlzLmN1cnJlbnRJbWFnZS5oZWlnaHQgLyB0aGlzLlNQUklURV9TSVpFUiArIDRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tICcuL2dhbWVTdGF0ZSc7XG5pbXBvcnQgeyBEZWJ1Z1N0YXRlIH0gZnJvbSAnLi9kZWJ1Z1N0YXRlJztcbmltcG9ydCB7IE5pbmphU3RhdGUgfSBmcm9tICcuL25pbmphU3RhdGUnO1xuaW1wb3J0IHsgU3RhZ2VTdGF0ZSB9IGZyb20gJy4vc3RhZ2VTdGF0ZSc7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kU3RhdGUgfSBmcm9tICcuL2JhY2tncm91bmRTdGF0ZSc7XG5pbXBvcnQgeyBUaWxlU2V0U3RhdGUgfSBmcm9tICcuL3RpbGVTZXRTdGF0ZSc7XG5pbXBvcnQgeyBCdWlsZGVyU3RhdGUgfSBmcm9tICcuL2J1aWxkZXJTdGF0ZSc7XG5cbi8qXG4gKiBUaGlzIHN0YXRlIGlzIGEgZ2xvYmFsIG9iamVjdC4gVGhlIHBhcmVudCBvZiB0aGUgc3RhdGUgc2hvdWxkIG9ubHkgbXV0YXRlIGl0cyBzdGF0ZSBhbmQgbm8gb3RoZXJcbiAqL1xuZXhwb3J0IGNvbnN0IFN0YXRlOiBTdGF0ZUludGVyZmFjZSA9IHtcbiAgICBiYWNrZ3JvdW5kU3RhdGU6IG5ldyBCYWNrZ3JvdW5kU3RhdGUoKSxcbiAgICBidWlsZGVyU3RhdGU6IG5ldyBCdWlsZGVyU3RhdGUoKSxcbiAgICBkZWJ1Z1N0YXRlOiBuZXcgRGVidWdTdGF0ZSgpLFxuICAgIGdhbWVTdGF0ZTogbmV3IEdhbWVTdGF0ZSgpLFxuICAgIG5pbmphU3RhdGU6IG5ldyBOaW5qYVN0YXRlKCksXG4gICAgc3RhZ2VTdGF0ZTogbmV3IFN0YWdlU3RhdGUoKSxcbiAgICB0aWxlU2V0U3RhdGU6IG5ldyBUaWxlU2V0U3RhdGUoKVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZUludGVyZmFjZSB7XG4gICAgYmFja2dyb3VuZFN0YXRlOiBCYWNrZ3JvdW5kU3RhdGU7XG4gICAgYnVpbGRlclN0YXRlOiBCdWlsZGVyU3RhdGU7XG4gICAgZGVidWdTdGF0ZTogRGVidWdTdGF0ZTtcbiAgICBnYW1lU3RhdGU6IEdhbWVTdGF0ZTtcbiAgICBuaW5qYVN0YXRlOiBOaW5qYVN0YXRlO1xuICAgIHN0YWdlU3RhdGU6IFN0YWdlU3RhdGU7XG4gICAgdGlsZVNldFN0YXRlOiBUaWxlU2V0U3RhdGU7XG59XG4iLCJpbXBvcnQgeyBTdGFnZVRpbGUgfSBmcm9tICcuLi9vYmplY3RzL3N0YWdlVGlsZSc7XG5pbXBvcnQgeyBzdGFnZU9uZVRpbGVMaXN0IH0gZnJvbSAnLi4vc3RhZ2VzL3N0YWdlXzEnO1xuXG5leHBvcnQgY2xhc3MgU3RhZ2VTdGF0ZSB7XG5cbiAgICB0aWxlczogTWFwPHN0cmluZywgU3RhZ2VUaWxlPjtcbiAgICBkZXRlY3Rpb25UaWxlczogU3RhZ2VUaWxlW107XG4gICAgY29sbGlzaW9uVGlsZXM6IFN0YWdlVGlsZVtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGlsZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHN0YWdlT25lVGlsZUxpc3QubGVuZ3RoOyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgc3RhZ2VPbmVUaWxlTGlzdFtyb3ddLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkUm93ID0gc3RhZ2VPbmVUaWxlTGlzdC5sZW5ndGggLSByb3c7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlcy5zZXQoYCR7Y29sfS0ke2dyaWRSb3d9YCwgbmV3IFN0YWdlVGlsZShncmlkUm93LCBjb2wsIHN0YWdlT25lVGlsZUxpc3Rbcm93XVtjb2xdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgcDEgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvdGlsZXNldF8xL1RpbGVzLzEucG5nJztcbmltcG9ydCBwMiBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy90aWxlc2V0XzEvVGlsZXMvMi5wbmcnO1xuaW1wb3J0IHAzIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL3RpbGVzZXRfMS9UaWxlcy8zLnBuZyc7XG5pbXBvcnQgcDQgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvdGlsZXNldF8xL1RpbGVzLzQucG5nJztcbmltcG9ydCBwNSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy90aWxlc2V0XzEvVGlsZXMvNS5wbmcnO1xuaW1wb3J0IHA2IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL3RpbGVzZXRfMS9UaWxlcy82LnBuZyc7XG5pbXBvcnQgcDcgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvdGlsZXNldF8xL1RpbGVzLzcucG5nJztcbmltcG9ydCBwOCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy90aWxlc2V0XzEvVGlsZXMvOC5wbmcnO1xuaW1wb3J0IHA5IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL3RpbGVzZXRfMS9UaWxlcy85LnBuZyc7XG5pbXBvcnQgcDEwIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL3RpbGVzZXRfMS9UaWxlcy8xMC5wbmcnO1xuaW1wb3J0IHAxMSBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy90aWxlc2V0XzEvVGlsZXMvMTEucG5nJztcbmltcG9ydCBwMTIgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvdGlsZXNldF8xL1RpbGVzLzEyLnBuZyc7XG5pbXBvcnQgcDEzIGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL3RpbGVzZXRfMS9UaWxlcy8xMy5wbmcnO1xuaW1wb3J0IHAxNCBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy90aWxlc2V0XzEvVGlsZXMvMTQucG5nJztcbmltcG9ydCBwMTUgZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvdGlsZXNldF8xL1RpbGVzLzE1LnBuZyc7XG5pbXBvcnQgcDE2IGZyb20gJy4uLy4uL2Fzc2V0cy9zcHJpdGVzL3RpbGVzZXRfMS9UaWxlcy8xNi5wbmcnO1xuaW1wb3J0IHAxNyBmcm9tICcuLi8uLi9hc3NldHMvc3ByaXRlcy90aWxlc2V0XzEvVGlsZXMvMTcucG5nJztcbmltcG9ydCBwMTggZnJvbSAnLi4vLi4vYXNzZXRzL3Nwcml0ZXMvdGlsZXNldF8xL1RpbGVzLzE4LnBuZyc7XG5cbmltcG9ydCB7IEJveFNpZGVzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9ib3hTaWRlcyc7XG5pbXBvcnQgeyBJbWFnZUJ1aWxkZXIgfSBmcm9tICcuLi9hbmltYXRpb25zL2ltYWdlQnVpbGRlcic7XG5cbmV4cG9ydCBjbGFzcyBUaWxlU2V0U3RhdGUge1xuXG4gICAgaW1hZ2VNYXA6IE1hcDxudW1iZXIsIEhUTUxJbWFnZUVsZW1lbnQ+O1xuICAgIGNvbGxpc2lvbk1hcDogTWFwPG51bWJlciwgQm94U2lkZXM+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uTWFwID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIGNvbnN0IGltYWdlU3JjID0gW3AxLCBwMiwgcDMsIHA0LCBwNSwgcDYsIHA3LCBwOCwgcDksIHAxMCwgcDExLCBwMTIsIHAxMywgcDE0LCBwMTUsIHAxNiwgcDE3LCBwMThdO1xuICAgICAgICBjb25zdCBpbWdPYmogPSBuZXcgSW1hZ2VCdWlsZGVyKGltYWdlU3JjKTtcbiAgICAgICAgY29uc3QgaW1hZ2VMaXN0ID0gaW1nT2JqLmdldEltYWdlcygpO1xuXG4gICAgICAgIGltYWdlTGlzdC5mb3JFYWNoKChpbWc6IEhUTUxJbWFnZUVsZW1lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VNYXAuc2V0KGluZGV4ICsgMSwgaW1nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb2xsaXNpb25NYXAuc2V0KDAsIHsgdG9wOiB0cnVlLCByaWdodDogdHJ1ZSwgYm90dG9tOiB0cnVlLCBsZWZ0OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNvbGxpc2lvbk1hcC5zZXQoMSwgeyB0b3A6IHRydWUsIHJpZ2h0OiB0cnVlLCBib3R0b206IHRydWUsIGxlZnQ6IHRydWUgfSk7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uTWFwLnNldCgyLCB7IHRvcDogdHJ1ZSwgcmlnaHQ6IHRydWUsIGJvdHRvbTogdHJ1ZSwgbGVmdDogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25NYXAuc2V0KDMsIHsgdG9wOiB0cnVlLCByaWdodDogdHJ1ZSwgYm90dG9tOiB0cnVlLCBsZWZ0OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNvbGxpc2lvbk1hcC5zZXQoNCwgeyB0b3A6IHRydWUsIHJpZ2h0OiB0cnVlLCBib3R0b206IHRydWUsIGxlZnQ6IHRydWUgfSk7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uTWFwLnNldCg1LCB7IHRvcDogdHJ1ZSwgcmlnaHQ6IHRydWUsIGJvdHRvbTogdHJ1ZSwgbGVmdDogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25NYXAuc2V0KDYsIHsgdG9wOiB0cnVlLCByaWdodDogdHJ1ZSwgYm90dG9tOiB0cnVlLCBsZWZ0OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNvbGxpc2lvbk1hcC5zZXQoNywgeyB0b3A6IHRydWUsIHJpZ2h0OiB0cnVlLCBib3R0b206IHRydWUsIGxlZnQ6IHRydWUgfSk7XG4gICAgICAgIHRoaXMuY29sbGlzaW9uTWFwLnNldCg4LCB7IHRvcDogdHJ1ZSwgcmlnaHQ6IHRydWUsIGJvdHRvbTogdHJ1ZSwgbGVmdDogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5jb2xsaXNpb25NYXAuc2V0KDksIHsgdG9wOiB0cnVlLCByaWdodDogdHJ1ZSwgYm90dG9tOiB0cnVlLCBsZWZ0OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNvbGxpc2lvbk1hcC5zZXQoMTAsIHsgdG9wOiB0cnVlLCByaWdodDogdHJ1ZSwgYm90dG9tOiB0cnVlLCBsZWZ0OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNvbGxpc2lvbk1hcC5zZXQoMTEsIHsgdG9wOiB0cnVlLCByaWdodDogdHJ1ZSwgYm90dG9tOiB0cnVlLCBsZWZ0OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNvbGxpc2lvbk1hcC5zZXQoMTIsIHsgdG9wOiB0cnVlLCByaWdodDogdHJ1ZSwgYm90dG9tOiB0cnVlLCBsZWZ0OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNvbGxpc2lvbk1hcC5zZXQoMTMsIHsgdG9wOiB0cnVlLCByaWdodDogdHJ1ZSwgYm90dG9tOiB0cnVlLCBsZWZ0OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNvbGxpc2lvbk1hcC5zZXQoMTQsIHsgdG9wOiB0cnVlLCByaWdodDogdHJ1ZSwgYm90dG9tOiB0cnVlLCBsZWZ0OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNvbGxpc2lvbk1hcC5zZXQoMTUsIHsgdG9wOiB0cnVlLCByaWdodDogdHJ1ZSwgYm90dG9tOiB0cnVlLCBsZWZ0OiB0cnVlIH0pO1xuICAgICAgICB0aGlzLmNvbGxpc2lvbk1hcC5zZXQoMTYsIHsgdG9wOiB0cnVlLCByaWdodDogdHJ1ZSwgYm90dG9tOiB0cnVlLCBsZWZ0OiB0cnVlIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7UG9pbnR9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3BvaW50XCI7XG5pbXBvcnQge0JveH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvYm94XCI7XG5pbXBvcnQge1N0YXRlfSBmcm9tIFwiLi4vc3RhdGVzL3Jvb3RTdGF0ZVwiO1xuaW1wb3J0IHtWZWxvY2l0eX0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdmVsb2NpdHlcIjtcbmltcG9ydCB7U3RhZ2VUaWxlfSBmcm9tIFwiLi4vb2JqZWN0cy9zdGFnZVRpbGVcIjtcblxuZXhwb3J0IGNsYXNzIENvbGxpc2lvblV0aWxpdGllcyB7XG5cbiAgICAvKipcbiAgICAgKiBHaXZlbiBhIGhpdGJveCBhbmQgYSB2ZWxvY2l0eSwgcmV0dXJuIHRoZSByZXN1bHRlZCB2ZWxvY2l0eSBhZnRlciBjb2xsaWRpbmcgd2l0aCBhbnkgdGlsZXMuXG4gICAgICogQHBhcmFtIGhpdGJveCBoaXRib3ggb2YgdGhlIG1vdmluZyBjaGFyYWN0ZXIgb3Igb3RoZXIgb2JqZWN0XG4gICAgICogQHBhcmFtIGluaXRpYWxWZWxvY2l0eSB0aGlzIGNvbnRhaW5zIHRoZSB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbCBzcGVlZCBjb21wb25lbnRzIChkeCBhbmQgZHkpXG4gICAgICogQHJldHVybiB1cGRhdGVkIHZlbG9jaXR5IGFmdGVyIHBoeXNpY3MgZnJvbSBjb2xsaWRlZCB0aWxlcyBoYXZlIGJlZW4gYXBwbGllZCB0byB0aGUgaW5pdGlhbCB2ZWxvY2l0eVxuICAgICAqL1xuICAgIHN0YXRpYyBjb2xsaWRlV2l0aFRpbGVzKGhpdGJveDogQm94LCBpbml0aWFsVmVsb2NpdHk6IFZlbG9jaXR5KTogVmVsb2NpdHkge1xuICAgICAgICBjb25zdCB2ZWxvY2l0eSA9IHsuLi5pbml0aWFsVmVsb2NpdHl9OyAvLyBjcmVhdGUgYSBjb3B5IG9mIHRoZSB2ZWxvY2l0eSBzbyB0aGF0IHdlIGNhbiBtYWludGFpbiB0aGUgb3JpZ2luYWxcblxuICAgICAgICBjb25zdCB0b3BMZWZ0OiBQb2ludCA9IHsuLi5oaXRib3gucG9zaXRpb259O1xuICAgICAgICBjb25zdCBib3R0b21SaWdodDogUG9pbnQgPSB7XG4gICAgICAgICAgICB4OiBoaXRib3gucG9zaXRpb24ueCArIGhpdGJveC5kaW1lbnNpb25zLncsXG4gICAgICAgICAgICB5OiBoaXRib3gucG9zaXRpb24ueSAtIGhpdGJveC5kaW1lbnNpb25zLmhcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdGlsZXMgPSB0aGlzLmdldFRpbGVzSW5EZXRlY3Rpb25BcmVhKFN0YXRlLm5pbmphU3RhdGUuY29sbGlzaW9uRGV0ZWN0aW9uQm94KTtcbiAgICAgICAgbGV0IG1vZGlmaWNhdGlvbjogbnVtYmVyO1xuXG4gICAgICAgIGZvciAoY29uc3QgdGlsZSBvZiB0aWxlcykge1xuICAgICAgICAgICAgLy8gaWYgbW92aW5nIHRvIHRoZSByaWdodCwgY2hlY2sgdGlsZXMgdG8gdGhlIHJpZ2h0IG9mIHRoZSBoaXRib3hcbiAgICAgICAgICAgIGlmICh2ZWxvY2l0eS5keCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGUgYWxpZ25tZW50IG9mIHRoZSBib3ggdG8gZW5zdXJlIGl0cyBpbiB0aGUgc2FtZSB2ZXJ0aWNhbCBzcGFjZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc092ZXJsYXAoYm90dG9tUmlnaHQueSwgdG9wTGVmdC55LCB0aWxlLnJvdyAtIDEsIHRpbGUucm93KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgYm94IHdpbGwgYmUgbW92ZWQgYmV5b25kIHRoZSB0aWxlIGJvdW5kYXJpZXMsIHRoZW4gdXBkYXRlIHRoZSB2ZWxvY2l0eSBiYXNlZCBvZmYgb2YgdGlsZSBwaHlzaWNzXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc092ZXJsYXAoYm90dG9tUmlnaHQueCwgYm90dG9tUmlnaHQueCArIHZlbG9jaXR5LmR4LCB0aWxlLmNvbCwgdGlsZS5jb2wgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2F0aW9uID0gKGJvdHRvbVJpZ2h0LnggKyB2ZWxvY2l0eS5keCAtIHRpbGUuY29sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2FsbDogXCIgKyB0aWxlLmNvbC50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTmV3IFBvc2l0aW9uOiBcIiArIChib3R0b21SaWdodC54ICsgdmVsb2NpdHkuZHgpLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJEWCBEaWY6IFwiICsgbW9kaWZpY2F0aW9uLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHkuZHggLT0gbW9kaWZpY2F0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh2ZWxvY2l0eS5keCA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGUgYWxpZ25tZW50IG9mIHRoZSBib3ggdG8gZW5zdXJlIGl0cyBpbiB0aGUgc2FtZSB2ZXJ0aWNhbCBzcGFjZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc092ZXJsYXAoYm90dG9tUmlnaHQueSwgdG9wTGVmdC55LCB0aWxlLnJvdyAtIDEsIHRpbGUucm93KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgYm94IHdpbGwgYmUgbW92ZWQgYmV5b25kIHRoZSB0aWxlIGJvdW5kYXJpZXMsIHRoZW4gdXBkYXRlIHRoZSB2ZWxvY2l0eSBiYXNlZCBvZmYgb2YgdGlsZSBwaHlzaWNzXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc092ZXJsYXAodG9wTGVmdC54ICsgdmVsb2NpdHkuZHgsIHRvcExlZnQueCwgdGlsZS5jb2wsIHRpbGUuY29sICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWNhdGlvbiA9ICh0aWxlLmNvbCArIDEpIC0gKHRvcExlZnQueCArIHZlbG9jaXR5LmR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2FsbDogXCIgKyAodGlsZS5jb2wgKyAxKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTmV3IFBvc2l0aW9uOiBcIiArICh0b3BMZWZ0LnggKyB2ZWxvY2l0eS5keCkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRYIERpZjogXCIgKyBtb2RpZmljYXRpb24udG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eS5keCArPSBtb2RpZmljYXRpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIG1vdmluZyB1cCwgY2hlY2sgdGlsZXMgYWJvdmUgdGhlIGhpdGJveFxuICAgICAgICAgICAgaWYgKHZlbG9jaXR5LmR5ID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoZSBhbGlnbm1lbnQgb2YgdGhlIGJveCB0byBlbnN1cmUgaXRzIGluIHRoZSBzYW1lIGhvcml6b250YWwgc3BhY2VcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNPdmVybGFwKHRvcExlZnQueCwgYm90dG9tUmlnaHQueCwgdGlsZS5jb2wsIHRpbGUuY29sICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGJveCB3aWxsIGJlIG1vdmVkIGJleW9uZCB0aGUgdGlsZSBib3VuZGFyaWVzLCB0aGVuIHVwZGF0ZSB0aGUgdmVsb2NpdHkgYmFzZWQgb2ZmIG9mIHRpbGUgcGh5c2ljc1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNPdmVybGFwKHRvcExlZnQueSwgdG9wTGVmdC55ICsgdmVsb2NpdHkuZHksIHRpbGUucm93IC0gMSAsIHRpbGUucm93KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpY2F0aW9uID0gIHRvcExlZnQueSArIHZlbG9jaXR5LmR5IC0gKHRpbGUucm93IC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2FsbDogXCIgKyAodGlsZS5yb3cgLSAxKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTmV3IFBvc2l0aW9uOiBcIiArICh0b3BMZWZ0LnkgKyB2ZWxvY2l0eS5keSkudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRYIERpZjogXCIgKyBtb2RpZmljYXRpb24udG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eS5keSAtPSBtb2RpZmljYXRpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZlbG9jaXR5LmR5IDwgMCkge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoZSBhbGlnbm1lbnQgb2YgdGhlIGJveCB0byBlbnN1cmUgaXRzIGluIHRoZSBzYW1lIGhvcml6b250YWwgc3BhY2VcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNPdmVybGFwKHRvcExlZnQueCwgYm90dG9tUmlnaHQueCwgdGlsZS5jb2wsIHRpbGUuY29sICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGJveCB3aWxsIGJlIG1vdmVkIGJleW9uZCB0aGUgdGlsZSBib3VuZGFyaWVzLCB0aGVuIHVwZGF0ZSB0aGUgdmVsb2NpdHkgYmFzZWQgb2ZmIG9mIHRpbGUgcGh5c2ljc1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNPdmVybGFwKGJvdHRvbVJpZ2h0LnkgKyB2ZWxvY2l0eS5keSwgYm90dG9tUmlnaHQueSwgdGlsZS5yb3cgLSAxICwgdGlsZS5yb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmljYXRpb24gPSAodGlsZS5yb3cpIC0gKGJvdHRvbVJpZ2h0LnkgKyB2ZWxvY2l0eS5keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndhbGw6IFwiICsgdGlsZS5yb3cudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk5ldyBQb3NpdGlvbjogXCIgKyAoYm90dG9tUmlnaHQueSArIHZlbG9jaXR5LmR5KS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRFggRGlmOiBcIiArIG1vZGlmaWNhdGlvbi50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5LmR5ICs9IG1vZGlmaWNhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKE1hdGguYWJzKHZlbG9jaXR5LmR5KSA8IDAuMDAwMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eS5keSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVsb2NpdHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgdG8gc2VlIGlmIHR3byByYW5nZXMgb3ZlcmxhcFxuICAgICAqIFJlcXVpcmVzIHJhbmdlIGEgdG8gZm9sbG93OiBhMSA8IGEyXG4gICAgICogYW5kIHJhbmdlIGIgdG8gZm9sbG93IGFuZCBiMSA8IGIyXG4gICAgICovXG4gICAgc3RhdGljIGhhc092ZXJsYXAoYTE6IG51bWJlciwgYTI6IG51bWJlciwgYjE6IG51bWJlciwgYjI6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoYTEsIGIxKSA8IE1hdGgubWluKGEyLCBiMik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aWxlcyB0aGF0IGFyZSB3aXRoaW4gdGhlIGdpdmVuIGJveCB0aGF0IGFyZSBub3QgZW1wdHkgdGlsZXMuXG4gICAgICogQHBhcmFtIGJveFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRUaWxlc0luRGV0ZWN0aW9uQXJlYShib3g6IEJveCk6IFN0YWdlVGlsZVtdIHtcbiAgICAgICAgY29uc3QgZGV0ZWN0aW9uVGlsZXM6IFN0YWdlVGlsZVtdID0gW107XG5cbiAgICAgICAgY29uc3QgdG9wID0gTWF0aC5mbG9vcihib3gucG9zaXRpb24ueSk7XG4gICAgICAgIGNvbnN0IGJvdHRvbSA9IE1hdGguZmxvb3IoYm94LnBvc2l0aW9uLnkgLSBib3guZGltZW5zaW9ucy5oKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IE1hdGguZmxvb3IoYm94LnBvc2l0aW9uLngpO1xuICAgICAgICBjb25zdCByaWdodCA9IE1hdGguZmxvb3IoYm94LnBvc2l0aW9uLnggKyBib3guZGltZW5zaW9ucy53KTtcblxuICAgICAgICBmb3IgKGxldCByb3cgPSBib3R0b20gKyAxOyByb3cgPD0gdG9wICsgMTsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IGxlZnQ7IGNvbCA8PSByaWdodDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocm93IDwgMCB8fCBjb2wgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gU3RhdGUuc3RhZ2VTdGF0ZS50aWxlcy5nZXQoYCR7Y29sfS0ke3Jvd31gKTtcbiAgICAgICAgICAgICAgICBpZiAodGlsZSAmJiB0aWxlLmxvb2t1cFZhbHVlICE9PSAnMDAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldGVjdGlvblRpbGVzLnB1c2godGlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZXRlY3Rpb25UaWxlcztcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wb2ludCc7XG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9kaW1lbnNpb25zJztcbmltcG9ydCB7IExpbmUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2xpbmUnO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvcm9vdFN0YXRlJztcbmltcG9ydCB7IEdyaWRBcmVhIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9ncmlkQXJlYSc7XG5cbi8qXG4gKiBUaGVzZSB1dGlsaXRpZXMgYXJlIHRvIGJlIHVzZWQgd2l0aGluIHRoZSByZW5kZXJpbmcgZW5naW5lIG9ubHlcbiAqL1xuZXhwb3J0IGNsYXNzIFJlbmRlcmluZ1V0aWxpdGllcyB7XG5cbiAgICBzdGF0aWMgc2V0RGltZW5zaW9ucyhtaW5HYW1lRGltZW5zaW9uczogRGltZW5zaW9ucyA9IHsgdzogMTIsIGg6IDEyIH0pIHtcbiAgICAgICAgLy8gd2hlbiB3ZSBzZXQgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGdhbWUsIGRldGVybWluZSB0aGUgcGl4ZWxzUGVyVW5pdCBjb252ZXJzaW9uIGZvciBsYXRlciB1c2VcbiAgICAgICAgY29uc3QgZHggPSBpbm5lcldpZHRoIC8gbWluR2FtZURpbWVuc2lvbnMudztcbiAgICAgICAgY29uc3QgZHkgPSBpbm5lckhlaWdodCAvIG1pbkdhbWVEaW1lbnNpb25zLmg7XG4gICAgICAgIFN0YXRlLmdhbWVTdGF0ZS5waXhlbHNQZXJVbml0ID0gTWF0aC5taW4oZHgsIGR5KTtcbiAgICAgICAgU3RhdGUuZ2FtZVN0YXRlLmdhbWVVbml0RGltZW5zaW9ucyA9IHtcbiAgICAgICAgICAgIHc6IGlubmVyV2lkdGggLyBTdGF0ZS5nYW1lU3RhdGUucGl4ZWxzUGVyVW5pdCxcbiAgICAgICAgICAgIGg6IGlubmVySGVpZ2h0IC8gU3RhdGUuZ2FtZVN0YXRlLnBpeGVsc1BlclVuaXRcbiAgICAgICAgfTtcbiAgICAgICAgU3RhdGUuZ2FtZVN0YXRlLnNjcmVlblBpeGVsRGltZW5zaW9ucyA9IHtcbiAgICAgICAgICAgIHc6IGlubmVyV2lkdGgsXG4gICAgICAgICAgICBoOiBpbm5lckhlaWdodFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyB0b1NjcmVlbkNvb3JkaW5hdGVzKGdhbWVDb29yZHM6IFBvaW50KTogUG9pbnQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogKGdhbWVDb29yZHMueCAtIFN0YXRlLmdhbWVTdGF0ZS5wb3NpdGlvbi54KSAqIFN0YXRlLmdhbWVTdGF0ZS5waXhlbHNQZXJVbml0LFxuICAgICAgICAgICAgeTogKChTdGF0ZS5nYW1lU3RhdGUucG9zaXRpb24ueSAtIGdhbWVDb29yZHMueSkgKiBTdGF0ZS5nYW1lU3RhdGUucGl4ZWxzUGVyVW5pdCkgKyBTdGF0ZS5nYW1lU3RhdGUuc2NyZWVuUGl4ZWxEaW1lbnNpb25zLmhcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHBhc3NpbmcgY29vcmRpbmF0ZXMgZnJvbSB0aGUgc2NyZWVuIG9yIGNsaWNrIGV2ZW50cywgeW91IHNob3VsZCB1c2UgZXZlbnQuY2xpZW50WCBhbmQgZXZlbnQuY2xpZW50WS5cbiAgICAgKi9cbiAgICBzdGF0aWMgdG9HYW1lQ29vcmRpbmF0ZXMoeyB4OiBjbHRYLCB5OiBjbHRZIH06IFBvaW50KTogUG9pbnQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogY2x0WCAvIFN0YXRlLmdhbWVTdGF0ZS5waXhlbHNQZXJVbml0ICsgU3RhdGUuZ2FtZVN0YXRlLnBvc2l0aW9uLngsXG4gICAgICAgICAgICB5OiAtY2x0WSAvIFN0YXRlLmdhbWVTdGF0ZS5waXhlbHNQZXJVbml0ICsgU3RhdGUuZ2FtZVN0YXRlLnBvc2l0aW9uLnkgKyBTdGF0ZS5nYW1lU3RhdGUuZ2FtZVVuaXREaW1lbnNpb25zLmhcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaWxsIHJldHVybiB0aGUgcm9vdCBvZiB0aGUgZ3JpZCBwb3NpdGlvbiBmb3IgcmVuZGVyaW5nIGltZ3MgaW4gYSBncmlkIHNwYWNlXG4gICAgICogZS5nLiB7IHg6IDMuODYsIHk6IDIuMTMgfSA9PiB7IHg6IDMsIHk6IDN9XG4gICAgICovXG4gICAgc3RhdGljIHRvR2FtZUNvb3Jkc0ltZ1Jvb3QoeyB4LCB5IH06IFBvaW50KTogUG9pbnQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogTWF0aC5mbG9vcih4KSxcbiAgICAgICAgICAgIHk6IE1hdGguY2VpbCh5KVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyB0b1NjcmVlbkRpbWVuc2lvbnMoZ2FtZURpbWVuc2lvbnM6IERpbWVuc2lvbnMpOiBEaW1lbnNpb25zIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHc6IHRoaXMudG9QaXhlbHMoZ2FtZURpbWVuc2lvbnMudyksXG4gICAgICAgICAgICBoOiB0aGlzLnRvUGl4ZWxzKGdhbWVEaW1lbnNpb25zLmgpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIHRvR2FtZURpbWVuc2lvbnMoc2NyZWVuRGltZW5zaW9uczogRGltZW5zaW9ucyk6IERpbWVuc2lvbnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdzogdGhpcy50b1VuaXRzKHNjcmVlbkRpbWVuc2lvbnMudyksXG4gICAgICAgICAgICBoOiB0aGlzLnRvVW5pdHMoc2NyZWVuRGltZW5zaW9ucy5oKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyB0b1BpeGVscyhnYW1lTGVuZ3RoOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gZ2FtZUxlbmd0aCAqIFN0YXRlLmdhbWVTdGF0ZS5waXhlbHNQZXJVbml0O1xuICAgIH1cblxuICAgIHN0YXRpYyB0b1VuaXRzKHBpeGVsczogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHBpeGVscyAvIFN0YXRlLmdhbWVTdGF0ZS5waXhlbHNQZXJVbml0O1xuICAgIH1cblxuICAgIHN0YXRpYyBncmlkQXhpc09mUG9zaXRpb24ocG9zaXRpb246IFBvaW50KTogUG9pbnQge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHBvc2l0aW9uO1xuICAgICAgICBjb25zdCBncmlkWCA9IE1hdGguZmxvb3IoeCk7XG4gICAgICAgIGNvbnN0IGdyaWRZID0gTWF0aC5mbG9vcih5KTtcbiAgICAgICAgcmV0dXJuIHsgeDogZ3JpZFgsIHk6IGdyaWRZIH07XG4gICAgfVxuXG4gICAgc3RhdGljIHBhdXNlR2FtZShwYXVzZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBTdGF0ZS5nYW1lU3RhdGUucGF1c2VkID0gcGF1c2U7XG4gICAgICAgIGlmIChTdGF0ZS5nYW1lU3RhdGUucGF1c2VkKSB7XG4gICAgICAgICAgICBTdGF0ZS5nYW1lU3RhdGUuZnJhbWVzUGVyU2Vjb25kID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFN0YXRlLmdhbWVTdGF0ZS5mcmFtZXNQZXJTZWNvbmQgPSBTdGF0ZS5nYW1lU3RhdGUuZGVmYXVsdEZyYW1lc1BlclNlY29uZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjeWNsZUZyYW1lcyhuOiBudW1iZXIsIGZwcyA9IFN0YXRlLmdhbWVTdGF0ZS5kZWZhdWx0RnJhbWVzUGVyU2Vjb25kKSB7XG4gICAgICAgIGlmICghU3RhdGUuZ2FtZVN0YXRlLnBhdXNlZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignR2FtZSBtdXN0IGJlIHBhdXNlZCB0byBjeWNsZSBmcmFtZXMnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuID09PSAwKSB7IHJldHVybjsgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFN0YXRlLmdhbWVTdGF0ZS5yZW5kZXJpbmdFbmdpbmUucnVuKCk7XG4gICAgICAgICAgICB0aGlzLmN5Y2xlRnJhbWVzKG4gLSAxKTtcbiAgICAgICAgfSwgMTAwMCAvIGZwcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlZnJlc2hDYW52YXMoKTogdm9pZCB7XG4gICAgICAgIFN0YXRlLmdhbWVTdGF0ZS5jYW52YXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBpbm5lcldpZHRoLCBpbm5lckhlaWdodCk7XG4gICAgICAgIFN0YXRlLmJhY2tncm91bmRTdGF0ZS5iZ0NhbnZhcy5jdHguY2xlYXJSZWN0KDAsIDAsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbm9kZUJ1aWxkZXIodHlwZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIGNsYXNzTGlzdDogc3RyaW5nW10gPSBbXSk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgc3RhdGljIGFwcGVuZE5vZGVUb0JvZHkobm9kZTogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXBwZW5kQ2hpbGROb2RlcyhwYXJlbnQ6IEhUTUxFbGVtZW50LCBjaGlsZHJlbjogSFRNTEVsZW1lbnRbXSk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuXG4gICAgc3RhdGljIHZpZXdhYmxlU3RhZ2VHcmlkQXJlYSgpOiBHcmlkQXJlYSB7XG4gICAgICAgIGNvbnN0IHRvcExlZnRQaXhlbHM6IFBvaW50ID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIGNvbnN0IHRvcFJpZ2h0UGl4ZWxzOiBQb2ludCA9IHsgeDogaW5uZXJXaWR0aCwgeTogMCB9O1xuICAgICAgICBjb25zdCBib3R0b21MZWZ0UGl4ZWxzOiBQb2ludCA9IHsgeDogMCwgeTogaW5uZXJIZWlnaHQgfTtcbiAgICAgICAgY29uc3QgYm90dG9tUmlnaHRQaXhlbHM6IFBvaW50ID0geyB4OiBpbm5lcldpZHRoLCB5OiBpbm5lckhlaWdodCB9O1xuXG4gICAgICAgIGNvbnN0IHRvcExlZnRHcmlkVW5pdHMgPSB0aGlzLnRvR2FtZUNvb3JkaW5hdGVzKHRvcExlZnRQaXhlbHMpO1xuICAgICAgICBjb25zdCB0b3BSaWdodEdyaWRVbml0cyA9IHRoaXMudG9HYW1lQ29vcmRpbmF0ZXModG9wUmlnaHRQaXhlbHMpO1xuICAgICAgICBjb25zdCBib3R0b21MZWZ0R3JpZFVuaXRzID0gdGhpcy50b0dhbWVDb29yZGluYXRlcyhib3R0b21MZWZ0UGl4ZWxzKTtcbiAgICAgICAgY29uc3QgYm90dG9tUmlnaHRHcmlkVW5pdHMgPSB0aGlzLnRvR2FtZUNvb3JkaW5hdGVzKGJvdHRvbVJpZ2h0UGl4ZWxzKTtcblxuICAgICAgICBjb25zdCB2aWV3YWJsZUdyaWRBcmVhOiBHcmlkQXJlYSA9IHtcbiAgICAgICAgICAgIHRvcExlZnQ6IHRvcExlZnRHcmlkVW5pdHMsXG4gICAgICAgICAgICB0b3BSaWdodDogdG9wUmlnaHRHcmlkVW5pdHMsXG4gICAgICAgICAgICBib3R0b21MZWZ0OiBib3R0b21MZWZ0R3JpZFVuaXRzLFxuICAgICAgICAgICAgYm90dG9tUmlnaHQ6IGJvdHRvbVJpZ2h0R3JpZFVuaXRzXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB2aWV3YWJsZUdyaWRBcmVhO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==