"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_layouts_footer_Footer_js"],{

/***/ "./src/layouts/footer/Footer.js":
/*!**************************************!*\
  !*** ./src/layouts/footer/Footer.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-carbon/chevron-down */ \"./node_modules/@iconify/icons-carbon/chevron-down.js\");\n/* harmony import */ var _iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-carbon/chevron-right */ \"./node_modules/@iconify/icons-carbon/chevron-right.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks */ \"./src/hooks/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ \"./src/components/index.js\");\n/* harmony import */ var _nav_NavConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nav/NavConfig */ \"./src/layouts/nav/NavConfig.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n// icons\n\n\n// @mui\n\n\n\n// hooks\n\n// components\n\n//\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n// ----------------------------------------------------------------------\nvar LinkStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.styled)(function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Link, _objectSpread({\n        target: \"_blank\",\n        rel: \"noopener\"\n    }, props), void 0, false, {\n        fileName: \"/Users/stasko/Desktop/frontend/src/layouts/footer/Footer.js\",\n        lineNumber: 31,\n        columnNumber: 37\n    }, _this);\n})(function(param) {\n    var theme = param.theme;\n    return _objectSpread({}, theme.typography.body3, {\n        marginTop: theme.spacing(1),\n        color: theme.palette.text.secondary,\n        \"&:hover\": {\n            color: theme.palette.text.primary\n        }\n    });\n});\n_c = LinkStyle;\n// ----------------------------------------------------------------------\nfunction Footer() {\n    _s();\n    var isDesktop = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.useResponsive)(\"up\", \"md\");\n    var lists = _nav_NavConfig__WEBPACK_IMPORTED_MODULE_6__.PageLinks.filter(function(list) {\n        return list.subheader !== \"Coming Soon\";\n    });\n    var renderLists = isDesktop ? lists : lists.sort(function(listA, listB) {\n        return Number(listA.order) - Number(listB.order);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Divider, {}, void 0, false, {\n            fileName: \"/Users/stasko/Desktop/frontend/src/layouts/footer/Footer.js\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Footer, \"Pe3wt9x9DJbiiwKjM51jwD1WT98=\", false, function() {\n    return [\n        _hooks__WEBPACK_IMPORTED_MODULE_4__.useResponsive\n    ];\n});\n_c1 = Footer;\n// ----------------------------------------------------------------------\nListDesktop.propTypes = {\n    list: prop_types__WEBPACK_IMPORTED_MODULE_9___default().shape({\n        items: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().array),\n        subheader: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string)\n    })\n};\nfunction ListDesktop(param) {\n    var list = param.list;\n    var _this1 = this;\n    var subheader = list.subheader, items = list.items;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n        alignItems: \"flex-start\",\n        sx: {\n            pb: {\n                md: 1\n            }\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                variant: \"h6\",\n                children: subheader\n            }, void 0, false, {\n                fileName: \"/Users/stasko/Desktop/frontend/src/layouts/footer/Footer.js\",\n                lineNumber: 168,\n                columnNumber: 7\n            }, this),\n            items === null || items === void 0 ? void 0 : items.map(function(link) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkStyle, {\n                    href: link.path,\n                    children: link.title\n                }, link.title, false, {\n                    fileName: \"/Users/stasko/Desktop/frontend/src/layouts/footer/Footer.js\",\n                    lineNumber: 170,\n                    columnNumber: 9\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stasko/Desktop/frontend/src/layouts/footer/Footer.js\",\n        lineNumber: 167,\n        columnNumber: 5\n    }, this);\n}\n_c2 = ListDesktop;\n// ----------------------------------------------------------------------\nListMobile.propTypes = {\n    list: prop_types__WEBPACK_IMPORTED_MODULE_9___default().shape({\n        items: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().array),\n        subheader: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string)\n    })\n};\nfunction ListMobile(param) {\n    var list = param.list;\n    var _this2 = this;\n    _s1();\n    var subheader = list.subheader, items = list.items;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), expand = ref[0], setExpand = ref[1];\n    var onExpand = function() {\n        setExpand(!expand);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Stack, {\n        spacing: 1.5,\n        alignItems: \"flex-start\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                variant: \"h6\",\n                onClick: onExpand,\n                sx: {\n                    cursor: \"pointer\",\n                    display: \"flex\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    subheader,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.Iconify, {\n                        icon: expand ? _iconify_icons_carbon_chevron_down__WEBPACK_IMPORTED_MODULE_2__[\"default\"] : _iconify_icons_carbon_chevron_right__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        sx: {\n                            width: 20,\n                            height: 20,\n                            ml: 0.5\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/stasko/Desktop/frontend/src/layouts/footer/Footer.js\",\n                        lineNumber: 204,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stasko/Desktop/frontend/src/layouts/footer/Footer.js\",\n                lineNumber: 198,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Collapse, {\n                in: expand,\n                sx: {\n                    width: 1\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                    sx: {\n                        display: \"grid\",\n                        rowGap: 1,\n                        columnGap: 3,\n                        gridTemplateColumns: {\n                            xs: \"repeat(1, 1fr)\",\n                            sm: \"repeat(2, 1fr)\"\n                        }\n                    },\n                    children: items === null || items === void 0 ? void 0 : items.map(function(link) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkStyle, {\n                            href: link.path,\n                            children: link.title\n                        }, link.title, false, {\n                            fileName: \"/Users/stasko/Desktop/frontend/src/layouts/footer/Footer.js\",\n                            lineNumber: 223,\n                            columnNumber: 13\n                        }, _this2);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/stasko/Desktop/frontend/src/layouts/footer/Footer.js\",\n                    lineNumber: 211,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/stasko/Desktop/frontend/src/layouts/footer/Footer.js\",\n                lineNumber: 210,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stasko/Desktop/frontend/src/layouts/footer/Footer.js\",\n        lineNumber: 197,\n        columnNumber: 5\n    }, this);\n}\n_s1(ListMobile, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c3 = ListMobile;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"LinkStyle\");\n$RefreshReg$(_c1, \"Footer\");\n$RefreshReg$(_c2, \"ListDesktop\");\n$RefreshReg$(_c3, \"ListMobile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs0QkFDdEM7Ozs7OztvQkFDUzswQkFFYiw4REFBQy9ELG1EQUFRO2dCQUFDZ0UsRUFBRSxFQUFFVixNQUFNO2dCQUFFVixFQUFFLEVBQUU7b0JBQUVpQixLQUFLLEVBQUUsQ0FBQztpQkFBRTswQkFDcEMsNEVBQUNuRSw4Q0FBRztvQkFDRmtELEVBQUUsRUFBRTt3QkFDRmUsT0FBTyxFQUFFLE1BQU07d0JBQ2ZNLE1BQU0sRUFBRSxDQUFDO3dCQUNUQyxTQUFTLEVBQUUsQ0FBQzt3QkFDWkMsbUJBQW1CLEVBQUU7NEJBQ25CQyxFQUFFLEVBQUUsZ0JBQWdCOzRCQUNwQkMsRUFBRSxFQUFFLGdCQUFnQjt5QkFDckI7cUJBQ0Y7OEJBRUE3QixLQUFLLGFBQUxBLEtBQUssV0FBSyxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLEtBQUssQ0FBRVEsR0FBRyxDQUFDLFNBQUNDLElBQUk7NkNBQ2YsOERBQUN0QyxTQUFTOzRCQUFrQnVDLElBQUksRUFBRUQsSUFBSSxDQUFDRSxJQUFJO3NDQUN4Q0YsSUFBSSxDQUFDRyxLQUFLOzJCQURHSCxJQUFJLENBQUNHLEtBQUs7Ozs7a0NBRWQ7cUJBQ2IsQ0FBQzs7Ozs7d0JBQ0U7Ozs7O29CQUNHOzs7Ozs7WUFDTCxDQUNSO0NBQ0g7SUE1Q1FDLFVBQVU7QUFBVkEsTUFBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0cy9mb290ZXIvRm9vdGVyLmpzPzRjMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLy8gaWNvbnNcbmltcG9ydCBjaGV2cm9uRG93biBmcm9tICdAaWNvbmlmeS9pY29ucy1jYXJib24vY2hldnJvbi1kb3duJztcbmltcG9ydCBjaGV2cm9uUmlnaHQgZnJvbSAnQGljb25pZnkvaWNvbnMtY2FyYm9uL2NoZXZyb24tcmlnaHQnO1xuLy8gQG11aVxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IE1hc29ucnkgZnJvbSAnQG11aS9sYWIvTWFzb25yeSc7XG5pbXBvcnQge1xuICBCb3gsXG4gIEdyaWQsXG4gIExpbmssXG4gIFN0YWNrLFxuICBCdXR0b24sXG4gIERpdmlkZXIsXG4gIENvbGxhcHNlLFxuICBDb250YWluZXIsXG4gIFR5cG9ncmFwaHksXG4gIEZpbGxlZElucHV0LFxuICBJbnB1dEFkb3JubWVudCxcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG4vLyBob29rc1xuaW1wb3J0IHsgdXNlUmVzcG9uc2l2ZSB9IGZyb20gJy4uLy4uL2hvb2tzJztcbi8vIGNvbXBvbmVudHNcbmltcG9ydCB7IExvZ28sIEljb25pZnksIFNvY2lhbHNCdXR0b24sIEFwcFN0b3JlQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG4vL1xuaW1wb3J0IHsgUGFnZUxpbmtzIH0gZnJvbSAnLi4vbmF2L05hdkNvbmZpZyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgTGlua1N0eWxlID0gc3R5bGVkKChwcm9wcykgPT4gPExpbmsgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIiB7Li4ucHJvcHN9IC8+KShcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICAuLi50aGVtZS50eXBvZ3JhcGh5LmJvZHkzLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICB9LFxuICB9KVxuKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIGNvbnN0IGlzRGVza3RvcCA9IHVzZVJlc3BvbnNpdmUoJ3VwJywgJ21kJyk7XG5cbiAgY29uc3QgbGlzdHMgPSBQYWdlTGlua3MuZmlsdGVyKChsaXN0KSA9PiBsaXN0LnN1YmhlYWRlciAhPT0gJ0NvbWluZyBTb29uJyk7XG5cbiAgY29uc3QgcmVuZGVyTGlzdHMgPSBpc0Rlc2t0b3BcbiAgICA/IGxpc3RzXG4gICAgOiBsaXN0cy5zb3J0KChsaXN0QSwgbGlzdEIpID0+IE51bWJlcihsaXN0QS5vcmRlcikgLSBOdW1iZXIobGlzdEIub3JkZXIpKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgey8qIDxDb250YWluZXIgc3g9e3sgcHk6IHsgeHM6IDgsIG1kOiAxMCB9IH19PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30ganVzdGlmeUNvbnRlbnQ9e3sgbWQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9e3sgeHM6IDMsIG1kOiA1IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIiBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5M1wiIHN4PXt7IGNvbG9yOiAndGV4dC5zZWNvbmRhcnknIH19PlxuICAgICAgICAgICAgICAgICAgVGhlIHN0YXJ0aW5nIHBvaW50IGZvciB5b3VyIG5leHQgcHJvamVjdCBiYXNlZCBvbiBlYXN5LXRvLWN1c3RvbWl6ZSBNYXRlcmlhbC1VSSDCqVxuICAgICAgICAgICAgICAgICAgaGVscHMgeW91IGJ1aWxkIGFwcHMgZmFzdGVyIGFuZCBiZXR0ZXIuXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5Tb2NpYWw8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFNvY2lhbHNCdXR0b24gLz5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICA8U3RhY2sgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5Eb2N1bWVudGF0aW9uPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxMaW5rU3R5bGUgaHJlZj1cIiNcIj5Eb2N1bWVudGF0aW9uPC9MaW5rU3R5bGU+XG4gICAgICAgICAgICAgICAgPExpbmtTdHlsZSBocmVmPVwiI1wiPkNoYW5nZWxvZzwvTGlua1N0eWxlPlxuICAgICAgICAgICAgICAgIDxMaW5rU3R5bGUgaHJlZj1cIiNcIj5Db250cmlidXRpbmc8L0xpbmtTdHlsZT5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+TGV04oCZcyBzdGF5IGluIHRvdWNoPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBzeD17eyBjb2xvcjogJ3RleHQuc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgVWJzY3JpYmUgdG8gb3VyIG5ld3NsZXR0ZXIgdG8gcmVjZWl2ZSBsYXRlc3QgYXJ0aWNsZXMgdG8geW91ciBpbmJveCB3ZWVrbHkuXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8RmlsbGVkSW5wdXRcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ9e1xuICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzaXplPVwic21hbGxcIiBzeD17eyBweTogJzlweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJzY3JpYmVcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHByOiAwLjUsXG4gICAgICAgICAgICAgICAgICAgICcmIC5NdWlGaWxsZWRJbnB1dC1pbnB1dCc6IHsgcHk6ICcxNHB4JyB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5BcHBzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxBcHBTdG9yZUJ1dHRvbiAvPlxuICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAge2lzRGVza3RvcCA/IChcbiAgICAgICAgICAgICAgPE1hc29ucnkgY29sdW1ucz17M30gc3BhY2luZz17M30+XG4gICAgICAgICAgICAgICAge3JlbmRlckxpc3RzLm1hcCgobGlzdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPExpc3REZXNrdG9wIGtleT17bGlzdC5zdWJoZWFkZXJ9IGxpc3Q9e2xpc3R9IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvTWFzb25yeT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9PlxuICAgICAgICAgICAgICAgIHtyZW5kZXJMaXN0cy5tYXAoKGxpc3QpID0+IChcbiAgICAgICAgICAgICAgICAgIDxMaXN0TW9iaWxlIGtleT17bGlzdC5zdWJoZWFkZXJ9IGxpc3Q9e2xpc3R9IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIGRpcmVjdGlvbj17eyB4czogJ2NvbHVtbicsIG1kOiAncm93JyB9fVxuICAgICAgICAgIHNwYWNpbmc9ezIuNX1cbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgIHN4PXt7IHB5OiAzLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTNcIiBzeD17eyBjb2xvcjogJ3RleHQuc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICAgIMKpIDIwMjEuIEFsbCByaWdodHMgcmVzZXJ2ZWRcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHNwYWNpbmc9ezN9IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8TGluayB2YXJpYW50PVwiYm9keTNcIiBzeD17eyBjb2xvcjogJ3RleHQuc2Vjb25kYXJ5JyB9fT5cbiAgICAgICAgICAgICAgSGVscCBDZW50ZXJcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIHZhcmlhbnQ9XCJib2R5M1wiIHN4PXt7IGNvbG9yOiAndGV4dC5zZWNvbmRhcnknIH19PlxuICAgICAgICAgICAgICBUZXJtcyBvZiBTZXJ2aWNlXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvQ29udGFpbmVyPiAqL31cbiAgICA8Lz5cbiAgKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5MaXN0RGVza3RvcC5wcm9wVHlwZXMgPSB7XG4gIGxpc3Q6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzdWJoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0pLFxufTtcblxuZnVuY3Rpb24gTGlzdERlc2t0b3AoeyBsaXN0IH0pIHtcbiAgY29uc3QgeyBzdWJoZWFkZXIsIGl0ZW1zIH0gPSBsaXN0O1xuXG4gIHJldHVybiAoXG4gICAgPFN0YWNrIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgc3g9e3sgcGI6IHsgbWQ6IDEgfSB9fT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntzdWJoZWFkZXJ9PC9UeXBvZ3JhcGh5PlxuICAgICAge2l0ZW1zPy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgPExpbmtTdHlsZSBrZXk9e2xpbmsudGl0bGV9IGhyZWY9e2xpbmsucGF0aH0+XG4gICAgICAgICAge2xpbmsudGl0bGV9XG4gICAgICAgIDwvTGlua1N0eWxlPlxuICAgICAgKSl9XG4gICAgPC9TdGFjaz5cbiAgKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5MaXN0TW9iaWxlLnByb3BUeXBlcyA9IHtcbiAgbGlzdDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHN1YmhlYWRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSksXG59O1xuXG5mdW5jdGlvbiBMaXN0TW9iaWxlKHsgbGlzdCB9KSB7XG4gIGNvbnN0IHsgc3ViaGVhZGVyLCBpdGVtcyB9ID0gbGlzdDtcblxuICBjb25zdCBbZXhwYW5kLCBzZXRFeHBhbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uRXhwYW5kID0gKCkgPT4ge1xuICAgIHNldEV4cGFuZCghZXhwYW5kKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTdGFjayBzcGFjaW5nPXsxLjV9IGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XG4gICAgICA8VHlwb2dyYXBoeVxuICAgICAgICB2YXJpYW50PVwiaDZcIlxuICAgICAgICBvbkNsaWNrPXtvbkV4cGFuZH1cbiAgICAgICAgc3g9e3sgY3Vyc29yOiAncG9pbnRlcicsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX1cbiAgICAgID5cbiAgICAgICAge3N1YmhlYWRlcn1cbiAgICAgICAgPEljb25pZnlcbiAgICAgICAgICBpY29uPXtleHBhbmQgPyBjaGV2cm9uRG93biA6IGNoZXZyb25SaWdodH1cbiAgICAgICAgICBzeD17eyB3aWR0aDogMjAsIGhlaWdodDogMjAsIG1sOiAwLjUgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgPENvbGxhcHNlIGluPXtleHBhbmR9IHN4PXt7IHdpZHRoOiAxIH19PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAgIHJvd0dhcDogMSxcbiAgICAgICAgICAgIGNvbHVtbkdhcDogMyxcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHtcbiAgICAgICAgICAgICAgeHM6ICdyZXBlYXQoMSwgMWZyKScsXG4gICAgICAgICAgICAgIHNtOiAncmVwZWF0KDIsIDFmciknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2l0ZW1zPy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgIDxMaW5rU3R5bGUga2V5PXtsaW5rLnRpdGxlfSBocmVmPXtsaW5rLnBhdGh9PlxuICAgICAgICAgICAgICB7bGluay50aXRsZX1cbiAgICAgICAgICAgIDwvTGlua1N0eWxlPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29sbGFwc2U+XG4gICAgPC9TdGFjaz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJ1c2VTdGF0ZSIsImNoZXZyb25Eb3duIiwiY2hldnJvblJpZ2h0Iiwic3R5bGVkIiwiTWFzb25yeSIsIkJveCIsIkdyaWQiLCJMaW5rIiwiU3RhY2siLCJCdXR0b24iLCJEaXZpZGVyIiwiQ29sbGFwc2UiLCJDb250YWluZXIiLCJUeXBvZ3JhcGh5IiwiRmlsbGVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsInVzZVJlc3BvbnNpdmUiLCJMb2dvIiwiSWNvbmlmeSIsIlNvY2lhbHNCdXR0b24iLCJBcHBTdG9yZUJ1dHRvbiIsIlBhZ2VMaW5rcyIsIkxpbmtTdHlsZSIsInByb3BzIiwidGFyZ2V0IiwicmVsIiwidGhlbWUiLCJ0eXBvZ3JhcGh5IiwiYm9keTMiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiY29sb3IiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsInByaW1hcnkiLCJGb290ZXIiLCJpc0Rlc2t0b3AiLCJsaXN0cyIsImZpbHRlciIsImxpc3QiLCJzdWJoZWFkZXIiLCJyZW5kZXJMaXN0cyIsInNvcnQiLCJsaXN0QSIsImxpc3RCIiwiTnVtYmVyIiwib3JkZXIiLCJMaXN0RGVza3RvcCIsInByb3BUeXBlcyIsInNoYXBlIiwiaXRlbXMiLCJhcnJheSIsInN0cmluZyIsImFsaWduSXRlbXMiLCJzeCIsInBiIiwibWQiLCJ2YXJpYW50IiwibWFwIiwibGluayIsImhyZWYiLCJwYXRoIiwidGl0bGUiLCJMaXN0TW9iaWxlIiwiZXhwYW5kIiwic2V0RXhwYW5kIiwib25FeHBhbmQiLCJvbkNsaWNrIiwiY3Vyc29yIiwiZGlzcGxheSIsImljb24iLCJ3aWR0aCIsImhlaWdodCIsIm1sIiwiaW4iLCJyb3dHYXAiLCJjb2x1bW5HYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwieHMiLCJzbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layouts/footer/Footer.js\n");

/***/ })

}]);