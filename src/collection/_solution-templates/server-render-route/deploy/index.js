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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/collection/test-solution/server-render-route/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/collection/test-solution/server-render-route/client/components/About/index.jsx":
/*!********************************************************************************************!*\
  !*** ./src/collection/test-solution/server-render-route/client/components/About/index.jsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst About = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"This is the about page\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\n//# sourceURL=webpack:///./src/collection/test-solution/server-render-route/client/components/About/index.jsx?");

/***/ }),

/***/ "./src/collection/test-solution/server-render-route/client/components/App/index.jsx":
/*!******************************************************************************************!*\
  !*** ./src/collection/test-solution/server-render-route/client/components/App/index.jsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Home */ \"./src/collection/test-solution/server-render-route/client/components/Home/index.jsx\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../About */ \"./src/collection/test-solution/server-render-route/client/components/About/index.jsx\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Contact */ \"./src/collection/test-solution/server-render-route/client/components/Contact/index.jsx\");\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super();\n    this.state = {\n      title: 'Welcome to React SSR!'\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, this.state.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/\"\n    }, \"Home\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/about\"\n    }, \"About\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/contact\"\n    }, \"Contact\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      path: \"/\",\n      exact: true,\n      component: _Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      path: \"/about\",\n      exact: true,\n      component: _About__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      path: \"/contact\",\n      exact: true,\n      component: _Contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    })));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/collection/test-solution/server-render-route/client/components/App/index.jsx?");

/***/ }),

/***/ "./src/collection/test-solution/server-render-route/client/components/Contact/index.jsx":
/*!**********************************************************************************************!*\
  !*** ./src/collection/test-solution/server-render-route/client/components/Contact/index.jsx ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Contact = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"This is the contact page\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\n//# sourceURL=webpack:///./src/collection/test-solution/server-render-route/client/components/Contact/index.jsx?");

/***/ }),

/***/ "./src/collection/test-solution/server-render-route/client/components/Home/index.jsx":
/*!*******************************************************************************************!*\
  !*** ./src/collection/test-solution/server-render-route/client/components/Home/index.jsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Home = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"This is the home page\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/collection/test-solution/server-render-route/client/components/Home/index.jsx?");

/***/ }),

/***/ "./src/collection/test-solution/server-render-route/index.js":
/*!*******************************************************************!*\
  !*** ./src/collection/test-solution/server-render-route/index.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _server_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server/server */ \"./src/collection/test-solution/server-render-route/server/server.js\");\n\n\n\n\n(async function () {\n  const configEnv = '/development.json';\n  const configPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, configEnv);\n  const serverConfig = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(configPath));\n  const PORT = serverConfig.port;\n  const SERVE_DIR = serverConfig.serveDir;\n  const CONTENT_DIR = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, SERVE_DIR);\n  const server = new _server_server__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  await server.start(CONTENT_DIR, PORT);\n  console.log(`Server Running at localhost:${PORT}`);\n})();\n\n//# sourceURL=webpack:///./src/collection/test-solution/server-render-route/index.js?");

/***/ }),

/***/ "./src/collection/test-solution/server-render-route/server/controllers/main.controller.js":
/*!************************************************************************************************!*\
  !*** ./src/collection/test-solution/server-render-route/server/controllers/main.controller.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client/components/App */ \"./src/collection/test-solution/server-render-route/client/components/App/index.jsx\");\n\n\n\n // Handle index actions\n\nconst main = (req, res) => {\n  const context = {};\n  const compiledApp = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    context: context,\n    location: req.url\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_components_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n  res.writeHead(200, {\n    'Content-Type': 'text/html'\n  });\n  res.end(`\n\t\t<!DOCTYPE html>\n\t\t<html>\n\t\t<head>\n\t\t\t<meta charset='utf-8'>\n\t\t\t<title>React SSR</title>\n\t\t</head>\n\t\t\n\t\t<body>\n\t\t\t<div id='root'>${compiledApp}</div>\n\t\t\t<script src='./bundle.js'></script>\n\t\t</body>\n\t\t</html>`);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  main\n});\n\n//# sourceURL=webpack:///./src/collection/test-solution/server-render-route/server/controllers/main.controller.js?");

/***/ }),

/***/ "./src/collection/test-solution/server-render-route/server/express-server.js":
/*!***********************************************************************************!*\
  !*** ./src/collection/test-solution/server-render-route/server/express-server.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ExpressServer; });\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _routes_main_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/main.routes */ \"./src/collection/test-solution/server-render-route/server/routes/main.routes.js\");\n\n\n\n\n\nclass ExpressServer {\n  constructor(contentDir) {\n    var app = express__WEBPACK_IMPORTED_MODULE_3___default()();\n    app.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, 'client')));\n    app.use('/', _routes_main_routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    this._httpServer = http__WEBPACK_IMPORTED_MODULE_0___default.a.createServer(app);\n  }\n\n  start(portNumber) {\n    const listen = util__WEBPACK_IMPORTED_MODULE_2___default.a.promisify(this._httpServer.listen.bind(this._httpServer));\n    return listen(portNumber);\n  }\n\n  stop() {\n    const close = util__WEBPACK_IMPORTED_MODULE_2___default.a.promisify(this._httpServer.close.bind(this._httpServer));\n    return close();\n  }\n\n  getNodeServer() {\n    return this._httpServer;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/collection/test-solution/server-render-route/server/express-server.js?");

/***/ }),

/***/ "./src/collection/test-solution/server-render-route/server/routes/main.routes.js":
/*!***************************************************************************************!*\
  !*** ./src/collection/test-solution/server-render-route/server/routes/main.routes.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_main_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/main.controller */ \"./src/collection/test-solution/server-render-route/server/controllers/main.controller.js\");\n\n // Initialize express router\n\nconst router = new express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/*').get(_controllers_main_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].main); // Export API routes\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/collection/test-solution/server-render-route/server/routes/main.routes.js?");

/***/ }),

/***/ "./src/collection/test-solution/server-render-route/server/server.js":
/*!***************************************************************************!*\
  !*** ./src/collection/test-solution/server-render-route/server/server.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Server; });\n/* harmony import */ var _express_server_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./express-server.js */ \"./src/collection/test-solution/server-render-route/server/express-server.js\");\n\nclass Server {\n  async start(contentDir, portNumber) {\n    if (!portNumber) throw new Error('port number is required');\n    this._httpServer = new _express_server_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](contentDir);\n    await this._httpServer.start(portNumber);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/collection/test-solution/server-render-route/server/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

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