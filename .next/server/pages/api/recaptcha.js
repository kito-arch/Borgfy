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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const resp = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${\"6Le_AZAjAAAAAPhcz7ZJxtx2X4C8gafTBFfkzol5\"}&response=${req.body.token}`, {\n        method: \"POST\"\n    });\n    console.log(\"6Le_AZAjAAAAAPhcz7ZJxtx2X4C8gafTBFfkzol5\");\n    // console.log(resp)\n    const data = await resp.json();\n    // console.log(data)\n    res.send(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVjYXB0Y2hhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFZSxlQUFlQSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFDO0lBQzNDLE1BQU1DLElBQUksR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyx1REFBdUQsRUFBRUMsMENBQThCLENBQUMsVUFBVSxFQUFFSixHQUFHLENBQUNPLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUFDQyxNQUFNLEVBQUUsTUFBTTtLQUFDLENBQUM7SUFDaktDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCwwQ0FBOEIsQ0FBQztJQUMzQyxvQkFBb0I7SUFDcEIsTUFBTVEsSUFBSSxHQUFHLE1BQU1WLElBQUksQ0FBQ1csSUFBSSxFQUFFO0lBQzlCLG9CQUFvQjtJQUNwQlosR0FBRyxDQUFDYSxJQUFJLENBQUNGLElBQUksQ0FBQztBQUNsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9yZ2Z5Ly4vcGFnZXMvYXBpL3JlY2FwdGNoYS5qcz80ODFlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKXtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS9zaXRldmVyaWZ5P3NlY3JldD0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFQ1JFVH0mcmVzcG9uc2U9JHtyZXEuYm9keS50b2tlbn1gLCB7bWV0aG9kOiAnUE9TVCd9KTtcbiAgICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRUNSRVQpXG4gICAgLy8gY29uc29sZS5sb2cocmVzcClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcC5qc29uKCk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICByZXMuc2VuZChkYXRhKVxufSJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVzcCIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NFQ1JFVCIsImJvZHkiLCJ0b2tlbiIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwianNvbiIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/recaptcha.js\n");

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