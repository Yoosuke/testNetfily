webpackHotUpdate("static/development/pages/landing.js",{

/***/ "./pages-sections/LandingPage-Sections/Map.js":
/*!****************************************************!*\
  !*** ./pages-sections/LandingPage-Sections/Map.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_landingPageSections_workStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js */ "./assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js");
var _jsxFileName = "/Users/thewaggle/Documents/GitHub/testNetfily/pages-sections/LandingPage-Sections/Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // @material-ui/core components

 // @material-ui/icons
// core components






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_nextjs_material_kit_pages_landingPageSections_workStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function WorkSection() {
  var classes = useStyles();
  return __jsx("div", {
    className: classes.section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cs: 12,
    sm: 12,
    md: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h2", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "\u30A2\u30AF\u30BB\u30B9\u30FB\u5730\u56F3"), __jsx("h4", {
    className: classes.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51797.79033277257!2d139.55238876173885!3d35.766485682960415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ef972cf893b9%3A0x32a80aa8ab7a3f7a!2sLuna%20Ballet%20Studio!5e0!3m2!1sja!2sjp!4v1577456974752!5m2!1sja!2sjp",
    width: "600",
    height: "450",
    frameborder: "0",
    style: "border:0;",
    allowfullscreen: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./pages/landing.js":
/*!**************************!*\
  !*** ./pages/landing.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LandingPage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Parallax/Parallax.js */ "./components/Parallax/Parallax.js");
/* harmony import */ var assets_jss_nextjs_material_kit_pages_landingPage_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/jss/nextjs-material-kit/pages/landingPage.js */ "./assets/jss/nextjs-material-kit/pages/landingPage.js");
/* harmony import */ var pages_sections_LandingPage_Sections_ProductSection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pages-sections/LandingPage-Sections/ProductSection.js */ "./pages-sections/LandingPage-Sections/ProductSection.js");
/* harmony import */ var pages_sections_LandingPage_Sections_TeamSection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! pages-sections/LandingPage-Sections/TeamSection.js */ "./pages-sections/LandingPage-Sections/TeamSection.js");
/* harmony import */ var pages_sections_LandingPage_Sections_WorkSection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pages-sections/LandingPage-Sections/WorkSection.js */ "./pages-sections/LandingPage-Sections/WorkSection.js");
/* harmony import */ var pages_sections_LandingPage_Sections_Money_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pages-sections/LandingPage-Sections/Money.js */ "./pages-sections/LandingPage-Sections/Money.js");
/* harmony import */ var pages_sections_LandingPage_Sections_Map_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! pages-sections/LandingPage-Sections/Map.js */ "./pages-sections/LandingPage-Sections/Map.js");

var _jsxFileName = "/Users/thewaggle/Documents/GitHub/testNetfily/pages/landing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons
// core components








 // Sections for this page






var dashboardRoutes = [];
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_kit_pages_landingPage_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
function LandingPage(props) {
  var classes = useStyles();

  var rest = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props);

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    color: "transparent",
    routes: dashboardRoutes,
    brand: "NextJS Material Kit",
    rightLinks: __jsx(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }),
    fixed: true,
    changeColorOnScroll: {
      height: 400,
      color: "white"
    }
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx(components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    filter: true,
    responsive: true,
    image: __webpack_require__(/*! assets/img/landing-bg.jpg */ "./assets/img/landing-bg.jpg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("h1", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "\u30EB\u30CA\u30D0\u30EC\u30A8\u30B9\u30BF\u30B8\u30AA"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\u3057\u306A\u3084\u304B\u306A\u4F53\u3001\u8F1D\u304F\u7B11\u9854\u3001\u7F8E\u3057\u3044\u5FC3\u3092\u80B2\u3066\u3066\u307F\u307E\u305B\u3093\u304B\u2026", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), "\uFF13\u6B73\u304B\u3089\u5927\u4EBA\u307E\u3067\u3001\u5E74\u9F62\u306B\u5408\u308F\u305B\u3066\u30AF\u30E9\u30B9\u5206\u3051\u3001 \u3072\u3068\u308A\u3072\u3068\u308A\u306E\u500B\u6027\u30FB\u5B9F\u529B\u306B\u5408\u308F\u305B\u305F\u30EC\u30C3\u30B9\u30F3\u3092\u884C\u3063\u3066\u3044\u307E\u3059\u3002 \u30B9\u30BF\u30B8\u30AA\u3067[\u51FA\u4F1A\u3044]\u3000\u3001\u7686\u3055\u3093\u3068[\u5B66\u3073]\u3001\u5FC3\u3082\u4F53\u3082[\u821E\u3046]\u3053\u3068\u3092\u4F53\u9A13\u3057\u3066\u307F\u307E\u305B\u3093\u304B\u2026\u3002              "), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "danger",
    size: "lg",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-play",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), "Watch video"))))), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.main, classes.mainRaised),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: classes.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(pages_sections_LandingPage_Sections_ProductSection_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(pages_sections_LandingPage_Sections_TeamSection_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(pages_sections_LandingPage_Sections_WorkSection_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(pages_sections_LandingPage_Sections_Money_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx(pages_sections_LandingPage_Sections_Map_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }))), __jsx(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=landing.js.64a1b95e59670417a4de.hot-update.js.map