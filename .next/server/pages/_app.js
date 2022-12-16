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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/bundle */ \"./node_modules/swiper/swiper-bundle.min.css\");\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_bundle__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n// import 'bootstrap/dist/css/bootstrap.min.css';\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const widthChanger = ()=>{\n        let width = screen.width;\n        if (width <= 480) {\n            document.documentElement.style.setProperty(\"font-size\", \"8px\");\n            return;\n        }\n        // zoom\n        if (router.pathname.includes(\"/admin\")) {\n            return;\n        }\n        if (router.pathname == \"/portfolio\") {\n            // zoom\n            let zoom = width / 1920 * 100;\n            console.log(zoom);\n            console.log(width);\n            let scale = zoom + \"%\";\n            document.body.style.zoom = scale; // Chrome, Opera, Safari\n        } else {\n            let zoom1 = width / 2304 * 100;\n            console.log(zoom1);\n            console.log(width);\n            let scale1 = zoom1 + \"%\";\n            document.body.style.zoom = scale1; // Chrome, Opera, Safari\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // AOS\n        aos__WEBPACK_IMPORTED_MODULE_3___default().init();\n        // window.addEventListener('load', ()=>{widthChanger()});\n        widthChanger();\n    }, [\n        router.pathname\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/home/husnain/MyThings/Data/up1/borgfy/pages/_app.js\",\n        lineNumber: 54,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFDSDtBQUM5QixpREFBaUQ7QUFDM0I7QUFDSTtBQUNjO0FBQ3BCO0FBQ087QUFHM0IsU0FBU0csS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFFdkMsTUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBRTFCLE1BQU1LLFlBQVksR0FBRyxJQUFJO1FBQ3ZCLElBQUlDLEtBQUssR0FBR0MsTUFBTSxDQUFDRCxLQUFLO1FBQ3hCLElBQUdBLEtBQUssSUFBSSxHQUFHLEVBQUM7WUFDZEUsUUFBUSxDQUFDQyxlQUFlLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMvRCxPQUFPO1FBQ1QsQ0FBQztRQUNELE9BQU87UUFFUCxJQUFHUCxNQUFNLENBQUNRLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFDO1lBQ3BDLE9BQU87UUFDVCxDQUFDO1FBRUQsSUFBR1QsTUFBTSxDQUFDUSxRQUFRLElBQUksWUFBWSxFQUFDO1lBQ2pDLE9BQU87WUFDUCxJQUFJRSxJQUFJLEdBQUcsS0FBTSxHQUFHLElBQUksR0FBSSxHQUFHO1lBQy9CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO1lBQ2pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1YsS0FBSyxDQUFDO1lBQ2xCLElBQUlXLEtBQUssR0FBR0gsSUFBSSxHQUFHLEdBQUc7WUFDdEJOLFFBQVEsQ0FBQ1UsSUFBSSxDQUFDUixLQUFLLENBQUNJLElBQUksR0FBSUcsS0FBSyxDQUFDLENBQUksd0JBQXdCO1FBQ2hFLE9BQ0k7WUFDRixJQUFJSCxLQUFJLEdBQUcsS0FBTSxHQUFHLElBQUksR0FBSSxHQUFHO1lBQy9CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSSxDQUFDO1lBQ2pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1YsS0FBSyxDQUFDO1lBQ2xCLElBQUlXLE1BQUssR0FBR0gsS0FBSSxHQUFHLEdBQUc7WUFDdEJOLFFBQVEsQ0FBQ1UsSUFBSSxDQUFDUixLQUFLLENBQUNJLElBQUksR0FBSUcsTUFBSyxDQUFDLENBQUksd0JBQXdCO1FBQ2hFLENBQUM7SUFDSCxDQUFDO0lBR0RuQixnREFBUyxDQUFDLElBQUk7UUFDWixNQUFNO1FBQ05DLCtDQUFRLEVBQUU7UUFDVix5REFBeUQ7UUFDekRNLFlBQVksRUFBRTtJQUdoQixDQUFDLEVBQUU7UUFBQ0QsTUFBTSxDQUFDUSxRQUFRO0tBQUMsQ0FBQztJQUVyQixxQkFBTyw4REFBQ1YsU0FBUztRQUFFLEdBQUdDLFNBQVM7Ozs7O1lBQUk7QUFDckMsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9yZ2Z5Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgQU9TIGZyb20gJ2Fvcyc7XG5pbXBvcnQgJ2Fvcy9kaXN0L2Fvcy5jc3MnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9idW5kbGVcIjtcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IHdpZHRoQ2hhbmdlciA9ICgpPT57XG4gICAgbGV0IHdpZHRoID0gc2NyZWVuLndpZHRoXG4gICAgaWYod2lkdGggPD0gNDgwKXtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnZm9udC1zaXplJywgJzhweCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB6b29tXG5cbiAgICBpZihyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoXCIvYWRtaW5cIikpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmKHJvdXRlci5wYXRobmFtZSA9PSBcIi9wb3J0Zm9saW9cIil7XG4gICAgICAvLyB6b29tXG4gICAgICBsZXQgem9vbSA9ICh3aWR0aCAvIDE5MjApICogMTAwXG4gICAgICBjb25zb2xlLmxvZyh6b29tKVxuICAgICAgY29uc29sZS5sb2cod2lkdGgpXG4gICAgICBsZXQgc2NhbGUgPSB6b29tICsgXCIlXCJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuem9vbSA9ICBzY2FsZTsgICAgLy8gQ2hyb21lLCBPcGVyYSwgU2FmYXJpXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBsZXQgem9vbSA9ICh3aWR0aCAvIDIzMDQpICogMTAwXG4gICAgICBjb25zb2xlLmxvZyh6b29tKVxuICAgICAgY29uc29sZS5sb2cod2lkdGgpXG4gICAgICBsZXQgc2NhbGUgPSB6b29tICsgXCIlXCJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuem9vbSA9ICBzY2FsZTsgICAgLy8gQ2hyb21lLCBPcGVyYSwgU2FmYXJpXG4gICAgfVxuICB9XG4gIFxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIC8vIEFPU1xuICAgIEFPUy5pbml0KClcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57d2lkdGhDaGFuZ2VyKCl9KTtcbiAgICB3aWR0aENoYW5nZXIoKVxuXG4gICAgXG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKVxuXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiQU9TIiwidXNlUm91dGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJ3aWR0aENoYW5nZXIiLCJ3aWR0aCIsInNjcmVlbiIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJ6b29tIiwiY29uc29sZSIsImxvZyIsInNjYWxlIiwiYm9keSIsImluaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper-bundle.min.css":
/*!***************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.min.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper.min.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/swiper.min.css ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();