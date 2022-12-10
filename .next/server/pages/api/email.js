"use strict";
(() => {
var exports = {};
exports.id = 881;
exports.ids = [881];
exports.modules = {

/***/ 869:
/***/ ((module) => {

module.exports = import("emailjs");;

/***/ }),

/***/ 3385:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var emailjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(869);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([emailjs__WEBPACK_IMPORTED_MODULE_0__]);
emailjs__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function handler(req, res) {
    const email = req.body.email;
    // console.log(process.env)
    const client = new emailjs__WEBPACK_IMPORTED_MODULE_0__.SMTPClient({
        user: "user",
        password: "pass",
        host: "smtp.server.com",
        ssl: true
    });
    try {
        client.send({
            text: `Just for testing purpose`,
            from: "husnainbusiness315@gmail.com",
            to: email,
            subject: "testing emailjs"
        });
    } catch (e) {
        res.status(400).end(JSON.stringify({
            message: "Error"
        }));
        return;
    }
    res.status(200).end(JSON.stringify({
        message: "Send Mail"
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3385));
module.exports = __webpack_exports__;

})();