"use strict";
(() => {
var exports = {};
exports.id = 147;
exports.ids = [147];
exports.modules = {

/***/ 155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    const resp = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${"6Le_AZAjAAAAAPhcz7ZJxtx2X4C8gafTBFfkzol5"}&response=${req.body.token}`, {
        method: "POST"
    });
    console.log("6Le_AZAjAAAAAPhcz7ZJxtx2X4C8gafTBFfkzol5");
    // console.log(resp)
    const data = await resp.json();
    // console.log(data)
    res.send(data);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(155));
module.exports = __webpack_exports__;

})();