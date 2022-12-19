"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/recaptcha";
exports.ids = ["pages/api/recaptcha"];
exports.modules = {

/***/ "(api)/./pages/api/recaptcha.js":
/*!********************************!*\
  !*** ./pages/api/recaptcha.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const resp = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${\"6Le_AZAjAAAAAPhcz7ZJxtx2X4C8gafTBFfkzol5\"}&response=${req.body.token}`, {\n        method: \"POST\"\n    });\n    // console.log(process.env.NEXT_PUBLIC_SECRET)\n    // console.log(resp)\n    const data = await resp.json();\n    // console.log(data)\n    res.send(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVjYXB0Y2hhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFZSxlQUFlQSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFDO0lBQzNDLE1BQU1DLElBQUksR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyx1REFBdUQsRUFBRUMsMENBQThCLENBQUMsVUFBVSxFQUFFSixHQUFHLENBQUNPLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUFDQyxNQUFNLEVBQUUsTUFBTTtLQUFDLENBQUM7SUFDakssOENBQThDO0lBQzlDLG9CQUFvQjtJQUNwQixNQUFNQyxJQUFJLEdBQUcsTUFBTVIsSUFBSSxDQUFDUyxJQUFJLEVBQUU7SUFDOUIsb0JBQW9CO0lBQ3BCVixHQUFHLENBQUNXLElBQUksQ0FBQ0YsSUFBSSxDQUFDO0FBQ2xCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3JnZnkvLi9wYWdlcy9hcGkvcmVjYXB0Y2hhLmpzPzQ4MWUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpe1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpL3NpdGV2ZXJpZnk/c2VjcmV0PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VDUkVUfSZyZXNwb25zZT0ke3JlcS5ib2R5LnRva2VufWAsIHttZXRob2Q6ICdQT1NUJ30pO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFQ1JFVClcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNwKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwLmpzb24oKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgIHJlcy5zZW5kKGRhdGEpXG59Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZXNwIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0VDUkVUIiwiYm9keSIsInRva2VuIiwibWV0aG9kIiwiZGF0YSIsImpzb24iLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/recaptcha.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/recaptcha.js"));
module.exports = __webpack_exports__;

})();