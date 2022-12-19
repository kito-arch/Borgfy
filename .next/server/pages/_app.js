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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/bundle */ \"./node_modules/swiper/swiper-bundle.min.css\");\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_bundle__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n// import 'bootstrap/dist/css/bootstrap.min.css';\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const widthChanger = ()=>{\n        let width = screen.width;\n        if (width <= 480) {\n            document.documentElement.style.setProperty(\"font-size\", \"8px\");\n            return;\n        }\n        // zoom\n        if (router.pathname.includes(\"/admin\")) {\n            return;\n        }\n        if (router.pathname == \"/portfolio\") {\n            // zoom\n            let zoom = width / 1920 * 100;\n            console.log(zoom);\n            console.log(width);\n            let scale = zoom + \"%\";\n            document.body.style.zoom = scale; // Chrome, Opera, Safari\n        } else {\n            let zoom1 = width / 2304 * 100;\n            console.log(zoom1);\n            console.log(width);\n            let scale1 = zoom1 + \"%\";\n            document.body.style.zoom = scale1; // Chrome, Opera, Safari\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // AOS\n        aos__WEBPACK_IMPORTED_MODULE_3___default().init();\n        // window.addEventListener('load', ()=>{widthChanger()});\n        widthChanger();\n        setLoading(false);\n    }, [\n        router.pathname\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                width: \"100%\",\n                height: \"100%\",\n                position: \"fixed\",\n                top: \"0\",\n                left: \"0\",\n                backgroundColor: \"white\"\n            }\n        }, void 0, false, {\n            fileName: \"/home/husnain/MyThings/Data/up1/borgfy/pages/_app.js\",\n            lineNumber: 60,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/husnain/MyThings/Data/up1/borgfy/pages/_app.js\",\n            lineNumber: 64,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/husnain/MyThings/Data/up1/borgfy/pages/_app.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMkM7QUFDYjtBQUM5QixpREFBaUQ7QUFDM0I7QUFDSTtBQUNjO0FBQ3BCO0FBQ087QUFDRDtBQUcxQixTQUFTSyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUV2QyxNQUFNQyxNQUFNLEdBQUdMLHNEQUFTLEVBQUU7SUFFMUIsTUFBTSxLQUFDTSxPQUFPLE1BQUVDLFVBQVUsTUFBSVQsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFFNUMsTUFBTVUsWUFBWSxHQUFHLElBQUk7UUFDdkIsSUFBSUMsS0FBSyxHQUFHQyxNQUFNLENBQUNELEtBQUs7UUFDeEIsSUFBR0EsS0FBSyxJQUFJLEdBQUcsRUFBQztZQUNkRSxRQUFRLENBQUNDLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQy9ELE9BQU87UUFDVCxDQUFDO1FBQ0QsT0FBTztRQUVQLElBQUdULE1BQU0sQ0FBQ1UsUUFBUSxDQUFDQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUM7WUFDcEMsT0FBTztRQUNULENBQUM7UUFFRCxJQUFHWCxNQUFNLENBQUNVLFFBQVEsSUFBSSxZQUFZLEVBQUM7WUFDakMsT0FBTztZQUNQLElBQUlFLElBQUksR0FBRyxLQUFNLEdBQUcsSUFBSSxHQUFJLEdBQUc7WUFDL0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7WUFDakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixLQUFLLENBQUM7WUFDbEIsSUFBSVcsS0FBSyxHQUFHSCxJQUFJLEdBQUcsR0FBRztZQUN0Qk4sUUFBUSxDQUFDVSxJQUFJLENBQUNSLEtBQUssQ0FBQ0ksSUFBSSxHQUFJRyxLQUFLLENBQUMsQ0FBSSx3QkFBd0I7UUFDaEUsT0FDSTtZQUNGLElBQUlILEtBQUksR0FBRyxLQUFNLEdBQUcsSUFBSSxHQUFJLEdBQUc7WUFDL0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFJLENBQUM7WUFDakJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixLQUFLLENBQUM7WUFDbEIsSUFBSVcsTUFBSyxHQUFHSCxLQUFJLEdBQUcsR0FBRztZQUN0Qk4sUUFBUSxDQUFDVSxJQUFJLENBQUNSLEtBQUssQ0FBQ0ksSUFBSSxHQUFJRyxNQUFLLENBQUMsQ0FBSSx3QkFBd0I7UUFDaEUsQ0FBQztJQUNILENBQUM7SUFHRHZCLGdEQUFTLENBQUMsSUFBSTtRQUNaLE1BQU07UUFDTkUsK0NBQVEsRUFBRTtRQUNWLHlEQUF5RDtRQUN6RFMsWUFBWSxFQUFFO1FBQ2RELFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFFbkIsQ0FBQyxFQUFFO1FBQUNGLE1BQU0sQ0FBQ1UsUUFBUTtLQUFDLENBQUM7SUFFckIscUJBQ0UsOERBQUNkLHVEQUFjO2tCQUNaSyxPQUFPLGlCQUNOLDhEQUFDa0IsS0FBRztZQUFDWCxLQUFLLEVBQUk7Z0JBQUNKLEtBQUssRUFBRSxNQUFNO2dCQUFFZ0IsTUFBTSxFQUFFLE1BQU07Z0JBQUVDLFFBQVEsRUFBRSxPQUFPO2dCQUFFQyxHQUFHLEVBQUUsR0FBRztnQkFBRUMsSUFBSSxFQUFFLEdBQUc7Z0JBQUVDLGVBQWUsRUFBRSxPQUFPO2FBQUM7Ozs7O2dCQUV6RyxpQkFFTiw4REFBQzFCLFNBQVM7WUFBRSxHQUFHQyxTQUFTOzs7OztnQkFBSTs7Ozs7WUFFZixDQUNsQjtBQUdILENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvcmdmeS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCAnYW9zL2Rpc3QvYW9zLmNzcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL2J1bmRsZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgY29uc3Qgd2lkdGhDaGFuZ2VyID0gKCk9PntcbiAgICBsZXQgd2lkdGggPSBzY3JlZW4ud2lkdGhcbiAgICBpZih3aWR0aCA8PSA0ODApe1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCdmb250LXNpemUnLCAnOHB4Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHpvb21cblxuICAgIGlmKHJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyhcIi9hZG1pblwiKSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYocm91dGVyLnBhdGhuYW1lID09IFwiL3BvcnRmb2xpb1wiKXtcbiAgICAgIC8vIHpvb21cbiAgICAgIGxldCB6b29tID0gKHdpZHRoIC8gMTkyMCkgKiAxMDBcbiAgICAgIGNvbnNvbGUubG9nKHpvb20pXG4gICAgICBjb25zb2xlLmxvZyh3aWR0aClcbiAgICAgIGxldCBzY2FsZSA9IHpvb20gKyBcIiVcIlxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS56b29tID0gIHNjYWxlOyAgICAvLyBDaHJvbWUsIE9wZXJhLCBTYWZhcmlcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGxldCB6b29tID0gKHdpZHRoIC8gMjMwNCkgKiAxMDBcbiAgICAgIGNvbnNvbGUubG9nKHpvb20pXG4gICAgICBjb25zb2xlLmxvZyh3aWR0aClcbiAgICAgIGxldCBzY2FsZSA9IHpvb20gKyBcIiVcIlxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS56b29tID0gIHNjYWxlOyAgICAvLyBDaHJvbWUsIE9wZXJhLCBTYWZhcmlcbiAgICB9XG4gIH1cbiAgXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgLy8gQU9TXG4gICAgQU9TLmluaXQoKVxuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9Pnt3aWR0aENoYW5nZXIoKX0pO1xuICAgIHdpZHRoQ2hhbmdlcigpXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICBcbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7bG9hZGluZyA/IFxuICAgICAgICA8ZGl2IHN0eWxlID0ge3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgcG9zaXRpb246ICdmaXhlZCcsIHRvcDogJzAnLCBsZWZ0OiAnMCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJ319PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgOlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICB9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxuXG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQU9TIiwidXNlUm91dGVyIiwiUmVhY3QiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwid2lkdGhDaGFuZ2VyIiwid2lkdGgiLCJzY3JlZW4iLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwiem9vbSIsImNvbnNvbGUiLCJsb2ciLCJzY2FsZSIsImJvZHkiLCJpbml0IiwiRnJhZ21lbnQiLCJkaXYiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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