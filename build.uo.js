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

	var modules = ['jetpack', 'webpack'];

	modules.forEach(function (e) {
	    __webpack_require__(1)("./" + e + '/module.js');
	});

	angular.module('uo', modules);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./jetpack/module.js": 2,
		"./webpack/module.js": 5
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _controller = __webpack_require__(3);

	var _controller2 = _interopRequireDefault(_controller);

	var _service = __webpack_require__(4);

	var _service2 = _interopRequireDefault(_service);

	angular.module('jetpack', []).service('JetpackService', ['$http', _service2['default']]).controller('JetpackCtrl', ['JetpackService', _controller2['default']]);

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = JetpackCtrl;

	function JetpackCtrl(JetpackService) {
	    var self = this;

	    self.controllerName = 'Jetpack';

	    self.changeName = function () {
	        self.controllerName = JetpackService.changeName(self.controllerName);
	    };

	    JetpackService.get().then(function (response) {
	        self.items = response.data;
	    });
	}

	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = JetpackService;

	function JetpackService($http) {
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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _controller = __webpack_require__(6);

	var _controller2 = _interopRequireDefault(_controller);

	var _service = __webpack_require__(7);

	var _service2 = _interopRequireDefault(_service);

	angular.module('webpack', []).service('WebpackService', ['$http', _service2['default']]).controller('WebpackCtrl', ['WebpackService', _controller2['default']]);

/***/ },
/* 6 */
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
/* 7 */
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