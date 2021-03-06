/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header__ = __webpack_require__(1);\n/* harmony reexport (binding) */ __webpack_require__.d(exports, \"a\", function() { return __WEBPACK_IMPORTED_MODULE_0__header__[\"a\"]; });\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2hlYWRlci9pbmRleC5qcz9iNzhjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL2hlYWRlcic7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvaGVhZGVyL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("var Header = function Header() {\n  this.setupStickyHeader()\n  this.setupNavHandler()\n};\n\nHeader.prototype.setupStickyHeader = function setupStickyHeader () {\n  var $header = $('.header')\n  var headerHeight = $header.outerHeight()\n\n  $(window).on('scroll', function () {\n    var isSticky = window.scrollY > headerHeight\n\n    if (isSticky) {\n      $header.addClass('header--stick')\n    }\n    else {\n      $header.removeClass('header--stick')\n    }\n  })\n};\n\nHeader.prototype.setupNavHandler = function setupNavHandler () {\n  $('.header-nav a, .footer-nav a, .header-logo-link, .contact-link, my-expertise-link').on('click', function (e) {\n    var $this = $(e.currentTarget)\n    var sel = $this.attr('href')\n    var offset = (sel === '#') ? 0 : $(sel).offset().top\n\n    $this.parent().siblings().removeClass('active');\n    $this.parent().addClass('active');\n\n    if ($this.attr('class') === 'header-logo-link') {\n      $('.header nav li').removeClass('active');\n      $('.header nav li a[href=\"#\"]').parent().addClass('active');\n    }\n\n    if ($this.hasClass('contact-link')) {\n      $('.header nav li').removeClass('active');\n      $('.header nav li a[href=\"#contact\"]').parent().addClass('active');\n    }\n\n    if($this.parents().hasClass('footer-nav')) {\n    } else {\n      $('html, body').stop().animate({\n        scrollTop: offset\n      }, 800);\n    }\n  })\n};\n\n/* harmony default export */ exports[\"a\"] = Header;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2hlYWRlci9oZWFkZXIuanM/OTc1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBIZWFkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNldHVwU3RpY2t5SGVhZGVyKClcbiAgICB0aGlzLnNldHVwTmF2SGFuZGxlcigpXG4gIH1cblxuICBzZXR1cFN0aWNreUhlYWRlcigpIHtcbiAgICBsZXQgJGhlYWRlciA9ICQoJy5oZWFkZXInKVxuICAgIGxldCBoZWFkZXJIZWlnaHQgPSAkaGVhZGVyLm91dGVySGVpZ2h0KClcblxuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgbGV0IGlzU3RpY2t5ID0gd2luZG93LnNjcm9sbFkgPiBoZWFkZXJIZWlnaHRcblxuICAgICAgaWYgKGlzU3RpY2t5KSB7XG4gICAgICAgICRoZWFkZXIuYWRkQ2xhc3MoJ2hlYWRlci0tc3RpY2snKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICRoZWFkZXIucmVtb3ZlQ2xhc3MoJ2hlYWRlci0tc3RpY2snKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzZXR1cE5hdkhhbmRsZXIoKSB7XG4gICAgJCgnLmhlYWRlci1uYXYgYSwgLmZvb3Rlci1uYXYgYSwgLmhlYWRlci1sb2dvLWxpbmssIC5jb250YWN0LWxpbmssIG15LWV4cGVydGlzZS1saW5rJykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGxldCAkdGhpcyA9ICQoZS5jdXJyZW50VGFyZ2V0KVxuICAgICAgbGV0IHNlbCA9ICR0aGlzLmF0dHIoJ2hyZWYnKVxuICAgICAgbGV0IG9mZnNldCA9IChzZWwgPT09ICcjJykgPyAwIDogJChzZWwpLm9mZnNldCgpLnRvcFxuXG4gICAgICAkdGhpcy5wYXJlbnQoKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICR0aGlzLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgaWYgKCR0aGlzLmF0dHIoJ2NsYXNzJykgPT09ICdoZWFkZXItbG9nby1saW5rJykge1xuICAgICAgICAkKCcuaGVhZGVyIG5hdiBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLmhlYWRlciBuYXYgbGkgYVtocmVmPVwiI1wiXScpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdjb250YWN0LWxpbmsnKSkge1xuICAgICAgICAkKCcuaGVhZGVyIG5hdiBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLmhlYWRlciBuYXYgbGkgYVtocmVmPVwiI2NvbnRhY3RcIl0nKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIGlmKCR0aGlzLnBhcmVudHMoKS5oYXNDbGFzcygnZm9vdGVyLW5hdicpKSB7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogb2Zmc2V0XG4gICAgICAgIH0sIDgwMCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2hlYWRlci9oZWFkZXIuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header__ = __webpack_require__(0);\n\n\nnew __WEBPACK_IMPORTED_MODULE_0__header__[\"a\" /* default */]()\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5cbm5ldyBIZWFkZXIoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);