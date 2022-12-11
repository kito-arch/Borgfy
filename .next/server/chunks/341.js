exports.id = 341;
exports.ids = [341];
exports.modules = {

/***/ 3542:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "case_container__lhIyh",
	"innerContainer": "case_innerContainer__WZEbX",
	"heading": "case_heading__YzLD7",
	"subheading": "case_subheading__w6qdm",
	"stretchBetween": "case_stretchBetween__HNgsp",
	"hover": "case_hover__BtOLn",
	"box": "case_box__YB0CC",
	"boxHeading": "case_boxHeading__V_Z94",
	"boxSubheading": "case_boxSubheading__BA6MI",
	"read": "case_read__c86VK",
	"mobile": "case_mobile__bSb4E",
	"sure": "case_sure__oPvvf",
	"gray": "case_gray__fpgOx"
};


/***/ }),

/***/ 4513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ scroll)
/* harmony export */ });
const scroll = 1.2;


/***/ }),

/***/ 8341:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DynamicCasePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _case_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3542);
/* harmony import */ var _case_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_case_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layouts_paddingLayout_paddingLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8043);
/* harmony import */ var _layouts_standardLayout_standardLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9439);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _conts_vars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9648);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_5__]);
axios__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function DynamicCasePage(props) {
    const { 0: useCases , 1: setUseCases  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("https://admin.borgfy.com/cases").then((res)=>{
            setUseCases(res.data);
        }).catch((err)=>{
            alert("Error Occured While Fetching Use Cases");
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_standardLayout_standardLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${(_case_module_css__WEBPACK_IMPORTED_MODULE_7___default().container)}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_paddingLayout_paddingLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                backgroundColor: "white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            position: "absolute",
                            bottom: "250px",
                            right: "0rem"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            priority: true,
                            src: "/../public/case2_hifi.png",
                            width: "300px",
                            height: "300px"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_case_module_css__WEBPACK_IMPORTED_MODULE_7___default().innerContainer)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    position: "absolute",
                                    top: "400px",
                                    left: "-4rem"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    priority: true,
                                    src: "/../public/digital_left_triangle.png",
                                    width: "219.47px",
                                    height: "221.19px"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    position: "absolute",
                                    top: 23,
                                    right: "0rem"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    priority: true,
                                    src: "/../public/digital_right_triangle.png",
                                    width: "219.47px",
                                    height: "221.19px"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                "data-aos-offset": -300 * _conts_vars__WEBPACK_IMPORTED_MODULE_8__/* .scroll */ .A,
                                "data-aos": "fade-up",
                                "data-aos-duration": "3000",
                                className: `${(_case_module_css__WEBPACK_IMPORTED_MODULE_7___default().heading)}`,
                                children: "Check In Depth - How we solved it"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                "data-aos-offset": -300 * _conts_vars__WEBPACK_IMPORTED_MODULE_8__/* .scroll */ .A,
                                "data-aos": "fade-up",
                                "data-aos-duration": "3000",
                                className: `${(_case_module_css__WEBPACK_IMPORTED_MODULE_7___default().subheading)}`,
                                children: "Case Studies"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_case_module_css__WEBPACK_IMPORTED_MODULE_7___default().stretchBetween)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            position: "absolute",
                                            top: "200px",
                                            left: "-24rem"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            priority: true,
                                            src: "/../public/case2_ellipse1.png",
                                            width: "600px",
                                            height: "3000px"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            position: "absolute",
                                            top: "800px",
                                            right: "-348px"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            priority: true,
                                            src: "/../public/case2_ellipse2.png",
                                            width: "600px",
                                            height: "600px"
                                        })
                                    }),
                                    useCases.map((uc)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            "data-aos-offset": -300 * _conts_vars__WEBPACK_IMPORTED_MODULE_8__/* .scroll */ .A,
                                            "data-aos": "fade-right",
                                            "data-aos-duration": "3000",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            priority: true,
                                                            src: "/../public/case2_ellipse.png",
                                                            width: "31px",
                                                            height: "31px"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: `${(_case_module_css__WEBPACK_IMPORTED_MODULE_7___default().mobile)}`,
                                                            children: uc?.type
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        width: "730px"
                                                    },
                                                    className: `${(_case_module_css__WEBPACK_IMPORTED_MODULE_7___default().stretchBetween)}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: `${(_case_module_css__WEBPACK_IMPORTED_MODULE_7___default().sure)}`,
                                                            children: uc?.app_name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: `${(_case_module_css__WEBPACK_IMPORTED_MODULE_7___default().gray)}`,
                                                            children: uc?.type2
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `${(_case_module_css__WEBPACK_IMPORTED_MODULE_7___default().hover)}`,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: `${(_case_module_css__WEBPACK_IMPORTED_MODULE_7___default().box)}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                priority: true,
                                                                src: "/../public/case2_box_back.png",
                                                                layout: "fill"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: `${(_case_module_css__WEBPACK_IMPORTED_MODULE_7___default().boxHeading)}`,
                                                                children: uc?.title
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: `${(_case_module_css__WEBPACK_IMPORTED_MODULE_7___default().boxSubheading)}`,
                                                                children: uc?.description
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                style: {
                                                                    width: "fit-content",
                                                                    margin: "auto"
                                                                },
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                    priority: true,
                                                                    src: `https://admin.borgfy.com/uploads/${uc?.image}`,
                                                                    width: "668px",
                                                                    height: "525px"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    href: `dynamic-case/${uc.link}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: {
                                                            cursor: "pointer"
                                                        },
                                                        className: `${(_case_module_css__WEBPACK_IMPORTED_MODULE_7___default().read)}`,
                                                        children: "Read More"
                                                    })
                                                })
                                            ]
                                        });
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;