exports.id = 989;
exports.ids = [989];
exports.modules = {

/***/ 3497:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "footer_container__LsEE4",
	"innerContainer": "footer_innerContainer__BZKJt"
};


/***/ }),

/***/ 858:
/***/ ((module) => {

// Exports
module.exports = {
	"width": "footerBottom_width__7gxnm",
	"container": "footerBottom_container__Wbh2z",
	"startBetween": "footerBottom_startBetween__Nbibr",
	"column": "footerBottom_column__mJnhy",
	"heading": "footerBottom_heading__BUZgb",
	"text": "footerBottom_text__I3JfN",
	"ll": "footerBottom_ll__QbdWu",
	"countries": "footerBottom_countries__1IrYB"
};


/***/ }),

/***/ 5767:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "footerTag_container__p_RTf",
	"copy": "footerTag_copy__wxtRR"
};


/***/ }),

/***/ 1755:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "footerTop_container__1TJ5m",
	"desc": "footerTop_desc__c9eK2",
	"startBetween": "footerTop_startBetween__CDidY",
	"haveContainer": "footerTop_haveContainer__M6jGL",
	"have": "footerTop_have__yPGV2",
	"chipContainer": "footerTop_chipContainer__kBDcH",
	"lets": "footerTop_lets__Y0_Ev",
	"handContainer": "footerTop_handContainer__XrBP_",
	"ff": "footerTop_ff__8XJFn",
	"fle": "footerTop_fle__QpeaD"
};


/***/ }),

/***/ 5077:
/***/ ((module) => {

// Exports
module.exports = {
	"logoCon": "logo_logoCon___iI_O"
};


/***/ }),

/***/ 290:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "navbar_container__whdC7",
	"innerContainer": "navbar_innerContainer__oNvO5",
	"leftContainer": "navbar_leftContainer__F4ETV",
	"leftRightContainer": "navbar_leftRightContainer__UXSXN",
	"center": "navbar_center__8cGli",
	"between": "navbar_between__0qjOd",
	"navLabelContainer": "navbar_navLabelContainer__yjv1c",
	"navLabels": "navbar_navLabels__a2BIr",
	"chip": "navbar_chip__KPGMA",
	"chipLabel": "navbar_chipLabel__W3fKf",
	"dropdownContainer": "navbar_dropdownContainer__g1ygC",
	"dropContainer": "navbar_dropContainer__QYzkm",
	"line": "navbar_line__HCG8h",
	"one": "navbar_one__a46yB",
	"two": "navbar_two__7WeB5",
	"three": "navbar_three__WPtC8",
	"four": "navbar_four__3FiGS",
	"five": "navbar_five__SQbcX",
	"mobMenuContainer": "navbar_mobMenuContainer__NeHKG",
	"cross": "navbar_cross__o7Yzk",
	"fle": "navbar_fle__WNKIm"
};


/***/ }),

/***/ 4064:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "paddingLayout_container__qhfa2"
};


/***/ }),

/***/ 8043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PaddingLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _paddingLayout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4064);
/* harmony import */ var _paddingLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_paddingLayout_module_css__WEBPACK_IMPORTED_MODULE_1__);


function PaddingLayout(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            zIndex: props.zIndex ?? "unset",
            backgroundColor: props.backgroundColor ?? "black"
        },
        className: `${(_paddingLayout_module_css__WEBPACK_IMPORTED_MODULE_1___default().container)}`,
        children: props.children
    });
}


/***/ }),

/***/ 9439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ StandardLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/logo/logo.module.css
var logo_module = __webpack_require__(5077);
var logo_module_default = /*#__PURE__*/__webpack_require__.n(logo_module);
;// CONCATENATED MODULE: ./components/logo/logo.js




function Logo(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "landing2",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (logo_module_default()).logoCon,
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                priority: true,
                style: {
                    cursor: "pointer"
                },
                src: props.logo ?? (props.double ? "/../public/logo_white.png" : "/../public/logo_white.png"),
                width: !props.logo ? "159px" : "170px",
                height: !props.logo ? "70px" : "90px"
            })
        })
    });
}

// EXTERNAL MODULE: ./components/navbar/navbar.module.css
var navbar_module = __webpack_require__(290);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
;// CONCATENATED MODULE: ./components/navbar/navbar.js








function Navbar(props) {
    const router = (0,router_.useRouter)();
    const { 0: zoom , 1: setZoom  } = (0,external_react_.useState)("100%");
    const { 0: mobMenu , 1: setMobMenu  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (router.pathname == "/portfolio") {
            setZoom("85%");
        } else {
            setZoom("100%");
        }
    }, [
        [
            router.pathname
        ]
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    zoom: zoom
                },
                className: `${(navbar_module_default()).container} ${(navbar_module_default()).center}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `${(navbar_module_default()).innerContainer} ${(navbar_module_default()).between}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `${(navbar_module_default()).leftContainer} ${(navbar_module_default()).between}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hide_in_mobile",
                                    style: {
                                        marginTop: "10px"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                                        double: props.double,
                                        logo: props.logo
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${(navbar_module_default()).fle} show_in_mobile`,
                                    style: {
                                        marginTop: "10px",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                marginRight: "15px"
                                            },
                                            onClick: ()=>{
                                                setMobMenu(true);
                                            },
                                            className: "show_in_mobile",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: "/../public/ham_icon.png",
                                                width: "20px",
                                                height: "20px"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                                            double: props.double,
                                            logo: props.logo
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${(navbar_module_default()).leftRightContainer} ${(navbar_module_default()).between} hide_in_mobile`,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `${(navbar_module_default()).navLabelContainer} ${(navbar_module_default()).between}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: `${(navbar_module_default()).navLabels}`,
                                                    children: "Who We Are"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    style: {
                                                        marginTop: "-5px"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        priority: true,
                                                        src: props.double ? "/../public/arrowDown.png" : "/../public/arrowDown.png",
                                                        width: "6px",
                                                        height: "4px"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `${(navbar_module_default()).dropdownContainer} ${(navbar_module_default()).two}`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "about",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: `${(navbar_module_default()).dropContainer}`,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: `${(navbar_module_default()).navLabels}`,
                                                                        children: "About Us"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "center"
                                                                        },
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: `${(navbar_module_default()).line}`
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "contact",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: `${(navbar_module_default()).dropContainer}`,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: `${(navbar_module_default()).navLabels}`,
                                                                        children: "Contact Us"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "center"
                                                                        },
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: `${(navbar_module_default()).line}`
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "blogs",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `${(navbar_module_default()).navLabelContainer} ${(navbar_module_default()).between}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: `${(navbar_module_default()).navLabels}`,
                                                        children: "Blog"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        style: {
                                                            marginTop: "-5px"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            priority: true,
                                                            src: props.double ? "/../public/arrowDown.png" : "/../public/arrowDown.png",
                                                            width: "6px",
                                                            height: "4px"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "portfolio",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `${(navbar_module_default()).navLabelContainer} ${(navbar_module_default()).between}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: `${(navbar_module_default()).navLabels}`,
                                                        children: "Our Work"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        style: {
                                                            marginTop: "-5px"
                                                        },
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            priority: true,
                                                            src: props.double ? "/../public/arrowDown.png" : "/../public/arrowDown.png",
                                                            width: "6px",
                                                            height: "4px"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `${(navbar_module_default()).navLabelContainer} ${(navbar_module_default()).between}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: `${(navbar_module_default()).navLabels}`,
                                                    children: "Expertise"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    style: {
                                                        marginTop: "-5px"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        priority: true,
                                                        src: props.double ? "/../public/arrowDown.png" : "/../public/arrowDown.png",
                                                        width: "6px",
                                                        height: "4px"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `${(navbar_module_default()).dropdownContainer} ${(navbar_module_default()).four}`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "ai",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: `${(navbar_module_default()).dropContainer}`,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: `${(navbar_module_default()).navLabels}`,
                                                                        children: "AI"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "center"
                                                                        },
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: `${(navbar_module_default()).line}`
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "ui",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: `${(navbar_module_default()).dropContainer}`,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: `${(navbar_module_default()).navLabels}`,
                                                                        children: "UI/UX"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "center"
                                                                        },
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: `${(navbar_module_default()).line}`
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "landing",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: `${(navbar_module_default()).dropContainer}`,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: `${(navbar_module_default()).navLabels}`,
                                                                        children: "App Development"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "center"
                                                                        },
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: `${(navbar_module_default()).line}`
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "fullstack",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: `${(navbar_module_default()).dropContainer}`,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: `${(navbar_module_default()).navLabels}`,
                                                                        children: "Full Stack Development"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "center"
                                                                        },
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: `${(navbar_module_default()).line}`
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `${(navbar_module_default()).navLabelContainer} ${(navbar_module_default()).between}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: `${(navbar_module_default()).navLabels}`,
                                                    children: "Resources"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    style: {
                                                        marginTop: "-5px"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        priority: true,
                                                        src: props.double ? "/../public/arrowDown.png" : "/../public/arrowDown.png",
                                                        width: "6px",
                                                        height: "4px"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: `${(navbar_module_default()).dropdownContainer} ${(navbar_module_default()).two}`,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "case2",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: `${(navbar_module_default()).dropContainer}`,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: `${(navbar_module_default()).navLabels}`,
                                                                        children: "Cases Studies"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "center"
                                                                        },
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: `${(navbar_module_default()).line}`
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "blogs",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: `${(navbar_module_default()).dropContainer}`,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: `${(navbar_module_default()).navLabels}`,
                                                                        children: "Blogs"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "center"
                                                                        },
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: `${(navbar_module_default()).line}`
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hide_in_mobile",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "contact",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${(navbar_module_default()).chip}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `${(navbar_module_default()).chipLabel}`,
                                    children: "Have an idea?"
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    left: mobMenu ? "0vw" : "-100vw"
                },
                className: (navbar_module_default()).mobMenuContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>{
                            setMobMenu(false);
                        },
                        className: (navbar_module_default()).cross,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${(navbar_module_default()).navLabels}`,
                            children: "X"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "portfolio",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `${(navbar_module_default()).dropContainer}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: `${(navbar_module_default()).navLabels}`,
                                        children: "Our Work"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "ai",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${(navbar_module_default()).dropContainer}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: `${(navbar_module_default()).navLabels}`,
                                            children: "AI"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "center"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `${(navbar_module_default()).line}`
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "ui",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${(navbar_module_default()).dropContainer}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: `${(navbar_module_default()).navLabels}`,
                                            children: "UI/UX"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "center"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `${(navbar_module_default()).line}`
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "landing",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${(navbar_module_default()).dropContainer}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: `${(navbar_module_default()).navLabels}`,
                                            children: "App Development"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "center"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `${(navbar_module_default()).line}`
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "fullstack",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${(navbar_module_default()).dropContainer}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: `${(navbar_module_default()).navLabels}`,
                                            children: "Full Stack Development"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "center"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `${(navbar_module_default()).line}`
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "case2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${(navbar_module_default()).dropContainer}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: `${(navbar_module_default()).navLabels}`,
                                            children: "Cases Studies"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "center"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `${(navbar_module_default()).line}`
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "blogs",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${(navbar_module_default()).dropContainer}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: `${(navbar_module_default()).navLabels}`,
                                            children: "Blogs"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "center"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `${(navbar_module_default()).line}`
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "about",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${(navbar_module_default()).dropContainer}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: `${(navbar_module_default()).navLabels}`,
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "center"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `${(navbar_module_default()).line}`
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "contact",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `${(navbar_module_default()).dropContainer}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: `${(navbar_module_default()).navLabels}`,
                                            children: "Contact Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "center"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: `${(navbar_module_default()).line}`
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/footer/footer.module.css
var footer_module = __webpack_require__(3497);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
// EXTERNAL MODULE: ./components/footer/footerBottom/footerBottom.module.css
var footerBottom_module = __webpack_require__(858);
var footerBottom_module_default = /*#__PURE__*/__webpack_require__.n(footerBottom_module);
;// CONCATENATED MODULE: ./components/footer/footerBottom/footerBottom.js




function FooterBottom(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${(footerBottom_module_default()).width}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${(footerBottom_module_default()).container} ${(footerBottom_module_default()).startBetween}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "landing2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (footerBottom_module_default()).ll,
                        style: {
                            position: "absolute",
                            top: "160px",
                            left: "30px",
                            cursor: "pointer",
                            zIndex: "100"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            priority: true,
                            src: props.double ? "/../public/logo_white.png" : "/../public/logo_white.png",
                            width: "170px",
                            height: "90px"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `${(footerBottom_module_default()).column}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${(footerBottom_module_default()).heading}`,
                            children: "Countries"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (footerBottom_module_default()).countries,
                            style: {
                                marginBottom: "20px",
                                display: "inline-block",
                                marginRight: "10px",
                                paddingBottom: "10px"
                            },
                            children: "India "
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                            className: "show_in_mobile"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            priority: true,
                            src: props.double ? "/../public/india.png" : "/../public/india.png",
                            width: "20px",
                            height: "16px"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (footerBottom_module_default()).countries,
                            style: {
                                marginBottom: "20px",
                                display: "inline-block",
                                marginRight: "10px",
                                paddingBottom: "10px"
                            },
                            children: "USA "
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                            className: "show_in_mobile"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            priority: true,
                            src: props.double ? "/../public/usa.png" : "/../public/usa.png",
                            width: "20px",
                            height: "16px"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (footerBottom_module_default()).countries,
                            style: {
                                marginBottom: "20px",
                                display: "inline-block",
                                marginRight: "10px",
                                paddingBottom: "10px"
                            },
                            children: "Saudi Arabia "
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {
                            className: "show_in_mobile"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            priority: true,
                            src: props.double ? "/../public/sau.png" : "/../public/sau.png",
                            width: "20px",
                            height: "16px"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `${(footerBottom_module_default()).column}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${(footerBottom_module_default()).heading}`,
                            children: "Expertise"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "ai",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                style: {
                                    cursor: "pointer"
                                },
                                className: `${(footerBottom_module_default()).text}`,
                                children: "AI"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "ui",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                style: {
                                    cursor: "pointer"
                                },
                                className: `${(footerBottom_module_default()).text}`,
                                children: "UI/UX"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "landing",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                style: {
                                    cursor: "pointer"
                                },
                                className: `${(footerBottom_module_default()).text}`,
                                children: "App Development"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "fullstack",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                style: {
                                    cursor: "pointer"
                                },
                                className: `${(footerBottom_module_default()).text}`,
                                children: "Full Stack Development"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `${(footerBottom_module_default()).column}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${(footerBottom_module_default()).heading}`,
                            children: "Technologies"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${(footerBottom_module_default()).text}`,
                            children: "React Framework"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${(footerBottom_module_default()).text}`,
                            children: "Angular"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${(footerBottom_module_default()).text}`,
                            children: "Node JS"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${(footerBottom_module_default()).text}`,
                            children: "Java"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${(footerBottom_module_default()).text}`,
                            children: "Python"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${(footerBottom_module_default()).text}`,
                            children: "Altium PCB Design"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `${(footerBottom_module_default()).column}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${(footerBottom_module_default()).heading}`,
                            children: "Industries"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${(footerBottom_module_default()).text}`,
                            children: "Healthtech"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${(footerBottom_module_default()).text}`,
                            children: "Media & Entertainment"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${(footerBottom_module_default()).text}`,
                            children: "Real Estate"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${(footerBottom_module_default()).text}`,
                            children: "Internet"
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./components/footer/footerTag/footerTag.module.css
var footerTag_module = __webpack_require__(5767);
var footerTag_module_default = /*#__PURE__*/__webpack_require__.n(footerTag_module);
;// CONCATENATED MODULE: ./components/footer/footerTag/footerTag.js


function FooterTag(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${(footerTag_module_default()).container}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            className: `${(footerTag_module_default()).copy}`,
            children: "Copyright Borgfy 2023"
        })
    });
}

// EXTERNAL MODULE: ./components/footer/footerTop/footerTop.module.css
var footerTop_module = __webpack_require__(1755);
var footerTop_module_default = /*#__PURE__*/__webpack_require__.n(footerTop_module);
;// CONCATENATED MODULE: ./components/footer/footerTop/footerTop.js





function FooterTop(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(footerTop_module_default()).container} ${(footerTop_module_default()).startBetween}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (footerTop_module_default()).handContainer,
                style: {
                    position: "absolute",
                    top: "-100px",
                    right: "-12rem"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    priority: true,
                    src: props.double ? "/../public/hand.png" : "/../public/hand.png",
                    width: "190px",
                    height: "228px"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hide_in_mobile",
                style: {
                    position: "absolute",
                    top: "300px",
                    left: "-12rem"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    priority: true,
                    src: props.double ? "/../public/footer_line.png" : "/../public/footer_line.png",
                    width: "2500px",
                    height: "122.68px"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "https://www.facebook.com/borgfy",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hide_in_mobile",
                    style: {
                        position: "absolute",
                        top: "288px",
                        left: "-13px",
                        cursor: "pointer"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        priority: true,
                        src: "/../public/footer_facebook.png",
                        width: "103px",
                        height: "103px"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "https://www.instagram.com/borgfy/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hide_in_mobile",
                    style: {
                        position: "absolute",
                        top: "296px",
                        left: "411px",
                        cursor: "pointer"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        priority: true,
                        src: "/../public/footer_insta.png",
                        width: "132px",
                        height: "121px"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hide_in_mobile",
                    style: {
                        position: "absolute",
                        top: "230px",
                        left: "900px",
                        cursor: "pointer"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        priority: true,
                        src: "/../public/footer_pin.png",
                        width: "128.20000000000002px",
                        height: "128.20000000000002px"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "https://www.linkedin.com/company/borgfy",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hide_in_mobile",
                    style: {
                        position: "absolute",
                        top: "315px",
                        left: "1343px",
                        cursor: "pointer"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        priority: true,
                        src: "/../public/footer_linked.png",
                        width: "103px",
                        height: "103px"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "https://twitter.com/borgfy",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hide_in_mobile",
                    style: {
                        position: "absolute",
                        top: "262px",
                        right: "0px",
                        cursor: "pointer"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        priority: true,
                        src: "/../public/footer_twiiter.png",
                        width: "132px",
                        height: "132px"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: `${(footerTop_module_default()).desc}`,
                children: [
                    "“Be the viewer or be the changer it`s your choice”",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "Don`t be just  a daydreamer let`s do it and build something great"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hide_in_mobile",
                children: !props.contact && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: `${(footerTop_module_default()).have}`,
                            children: "Have an Idea ?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "contact",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `${(footerTop_module_default()).chipContainer}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: `${(footerTop_module_default()).lets}`,
                                        children: "Lets Connect"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        priority: true,
                                        src: props.double ? "/../public/arrowRight.png" : "/../public/arrowRight.png",
                                        width: "10px",
                                        height: "20px"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "10px",
                    marginBottom: "10px"
                },
                className: ` ${(footerTop_module_default()).fle} show_in_mobile`,
                children: !props.contact && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            style: {
                                marginBottom: "0px",
                                marginRight: "10px"
                            },
                            className: `${(footerTop_module_default()).have}`,
                            children: "Have an Idea ?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "contact",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `${(footerTop_module_default()).chipContainer}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: `${(footerTop_module_default()).lets}`,
                                        children: "Lets Connect"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        priority: true,
                                        src: props.double ? "/../public/arrowRight.png" : "/../public/arrowRight.png",
                                        width: "10px",
                                        height: "20px"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `show_in_mobile ${(footerTop_module_default()).ff}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            marginRight: "10px",
                            marginTop: "30px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            priority: true,
                            src: "/../public/footer_facebook.png",
                            width: "40px",
                            height: "40px"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            marginRight: "10px",
                            marginTop: "30px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            priority: true,
                            src: "/../public/footer_insta.png",
                            width: "40px",
                            height: "40px"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            marginRight: "10px",
                            marginTop: "30px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            priority: true,
                            src: "/../public/footer_pin.png",
                            width: "40px",
                            height: "40px"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            marginRight: "10px",
                            marginTop: "30px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            priority: true,
                            src: "/../public/footer_linked.png",
                            width: "40px",
                            height: "40px"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            marginRight: "10px",
                            marginTop: "30px"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            priority: true,
                            src: "/../public/footer_twiiter.png",
                            width: "40px",
                            height: "40px"
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/footer/footer.js








function Footer(props) {
    const router = (0,router_.useRouter)();
    const { 0: zoom , 1: setZoom  } = (0,external_react_.useState)("100%");
    (0,external_react_.useEffect)(()=>{
        if (router.pathname == "/portfolio") {
            setZoom("85%");
        } else {
            setZoom("100%");
        }
    }, [
        [
            router.pathname
        ]
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            zoom: zoom
        },
        className: `${(footer_module_default()).container}`,
        children: [
            props.contact && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    position: "absolute",
                    top: "0",
                    left: "0"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    priority: true,
                    src: props.double ? "/../public/contact_footer.png" : "/../public/contact_footer.png",
                    width: "2304px",
                    height: "388px"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `${(footer_module_default()).innerContainer}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(FooterTop, {
                        contact: props.contact,
                        double: props.double
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(FooterBottom, {
                        double: props.double
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./layouts/standardLayout/standardLayout.js





function StandardLayout(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {
                double: props.double,
                logo: props.logo
            }),
            props.children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                contact: props.contact,
                double: props.double,
                backgroundColor: props.backgroundColor ?? "white"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FooterTag, {})
        ]
    });
}


/***/ })

};
;