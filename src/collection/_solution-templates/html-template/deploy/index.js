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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/collection/test-solution/html-template/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/collection/test-solution/html-template/index.js":
/*!*************************************************************!*\
  !*** ./src/collection/test-solution/html-template/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(async function () {\n  var path = __webpack_require__(/*! path */ \"path\");\n\n  const Server = __webpack_require__(/*! ./server/server.js */ \"./src/collection/test-solution/html-template/server/server.js\");\n\n  const PORT = 3000;\n  const SERVE_DIR = 'client';\n  const CONTENT_DIR = path.join(__dirname, SERVE_DIR);\n  const server = new Server();\n  await server.start(CONTENT_DIR, PORT);\n  console.log(`Server Running at localhost:${PORT}`);\n})();\n\n//# sourceURL=webpack:///./src/collection/test-solution/html-template/index.js?");

/***/ }),

/***/ "./src/collection/test-solution/html-template/server/http-server.js":
/*!**************************************************************************!*\
  !*** ./src/collection/test-solution/html-template/server/http-server.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function () {\n  var finalhandler = __webpack_require__(/*! finalhandler */ \"finalhandler\");\n\n  var http = __webpack_require__(/*! http */ \"http\");\n\n  var serveStatic = __webpack_require__(/*! serve-static */ \"serve-static\");\n\n  var util = __webpack_require__(/*! util */ \"util\");\n\n  module.exports = class HttpServer {\n    constructor(contentDir) {\n      var serve = serveStatic(contentDir, {\n        'index': ['index.html', 'index.htm']\n      });\n      this._httpServer = http.createServer(function onRequest(req, res) {\n        serve(req, res, finalhandler(req, res));\n      });\n    }\n\n    start(portNumber) {\n      const listen = util.promisify(this._httpServer.listen.bind(this._httpServer));\n      return listen(portNumber);\n    }\n\n    stop() {\n      const close = util.promisify(this._httpServer.close.bind(this._httpServer));\n      return close();\n    }\n\n    getNodeServer() {\n      return this._httpServer;\n    }\n\n  };\n})();\n\n//# sourceURL=webpack:///./src/collection/test-solution/html-template/server/http-server.js?");

/***/ }),

/***/ "./src/collection/test-solution/html-template/server/server.js":
/*!*********************************************************************!*\
  !*** ./src/collection/test-solution/html-template/server/server.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function () {\n  const HttpServer = __webpack_require__(/*! ./http-server.js */ \"./src/collection/test-solution/html-template/server/http-server.js\");\n\n  module.exports = class Server {\n    async start(contentDir, portNumber) {\n      if (!portNumber) throw new Error('port number is required');\n      this._httpServer = new HttpServer(contentDir);\n      await this._httpServer.start(portNumber);\n    }\n\n  };\n})();\n\n//# sourceURL=webpack:///./src/collection/test-solution/html-template/server/server.js?");

/***/ }),

/***/ "finalhandler":
/*!*******************************!*\
  !*** external "finalhandler" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"finalhandler\");\n\n//# sourceURL=webpack:///external_%22finalhandler%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "serve-static":
/*!*******************************!*\
  !*** external "serve-static" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serve-static\");\n\n//# sourceURL=webpack:///external_%22serve-static%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ })

/******/ });