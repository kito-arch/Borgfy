"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "aos"
const external_aos_namespaceObject = require("aos");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/_app.js



// import 'bootstrap/dist/css/bootstrap.min.css';






function MyApp({ Component , pageProps  }) {
    const router = (0,router_.useRouter)();
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    const widthChanger = ()=>{
        let width = screen.width;
        if (width <= 480) {
            document.documentElement.style.setProperty("font-size", "8px");
            return;
        }
        // zoom
        if (router.pathname.includes("/admin")) {
            return;
        }
        if (router.pathname == "/portfolio") {
            // zoom
            let zoom = width / 1920 * 100;
            console.log(zoom);
            console.log(width);
            let scale = zoom + "%";
            document.body.style.zoom = scale; // Chrome, Opera, Safari
        } else {
            let zoom1 = width / 2304 * 100;
            console.log(zoom1);
            console.log(width);
            let scale1 = zoom1 + "%";
            document.body.style.zoom = scale1; // Chrome, Opera, Safari
        }
    };
    (0,external_react_.useEffect)(()=>{
        // AOS
        external_aos_default().init();
        // window.addEventListener('load', ()=>{widthChanger()});
        widthChanger();
        setLoading(false);
    }, [
        router.pathname
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                width: "100%",
                height: "100%",
                position: "fixed",
                top: "0",
                left: "0",
                backgroundColor: "white"
            }
        }) : /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9954));
module.exports = __webpack_exports__;

})();