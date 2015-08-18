/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _controller = __webpack_require__(1);

	var _controller2 = _interopRequireDefault(_controller);

	var _service = __webpack_require__(2);

	var _service2 = _interopRequireDefault(_service);

	angular.module('uo', []).service('WebpackService', ['$http', _service2['default']]).controller('WebpackCtrl', ['WebpackService', _controller2['default']]);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = WebpackCtrl;

	function WebpackCtrl(WebpackService) {
	    var self = this;

	    self.controllerName = 'Webpack';

	    self.changeName = function () {
	        self.controllerName = WebpackService.changeName(self.controllerName);
	    };

	    WebpackService.get().then(function (response) {
	        self.items = response.data;
	    });
	}

	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = WebpackService;

	function WebpackService($http) {
	    function changeName(name) {
	        return name === 'Jetpack' ? 'Webpack' : 'Jetpack';
	    }

	    function get() {
	        return $http.get('http://beta.json-generator.com/api/json/get/OH7O3dy').then(function (data) {
	            return data;
	        });
	    }

	    return {
	        changeName: changeName,
	        get: get
	    };
	}

	module.exports = exports['default'];

/***/ }
/******/ ]);