"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(docs)/layout",{

/***/ "(app-pages-browser)/./components/main-nav.tsx":
/*!*********************************!*\
  !*** ./components/main-nav.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainNav: function() { return /* binding */ MainNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@13.5.7_@babel+core@7.21.4_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@13.5.7_@babel+core@7.21.4_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/.pnpm/next@13.5.7_@babel+core@7.21.4_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@13.5.7_@babel+core@7.21.4_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/site */ \"(app-pages-browser)/./config/site.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/icons */ \"(app-pages-browser)/./components/icons.tsx\");\n/* harmony import */ var _components_mobile_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/mobile-nav */ \"(app-pages-browser)/./components/mobile-nav.tsx\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search */ \"(app-pages-browser)/./components/search.tsx\");\n/* __next_internal_client_entry_do_not_use__ MainNav auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction MainNav(param) {\n    let { items, children } = param;\n    _s();\n    const segment = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSelectedLayoutSegment)();\n    const [showMobileMenu, setShowMobileMenu] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-6 md:gap-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                className: \"hidden items-center space-x-2 md:flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons__WEBPACK_IMPORTED_MODULE_6__.Icons.logo, {}, void 0, false, {\n                        fileName: \"/Users/pierrecaboor/Documents/thisbusterdev/components/main-nav.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"hidden font-bold sm:inline-block\",\n                        children: _config_site__WEBPACK_IMPORTED_MODULE_4__.siteConfig.name\n                    }, void 0, false, {\n                        fileName: \"/Users/pierrecaboor/Documents/thisbusterdev/components/main-nav.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pierrecaboor/Documents/thisbusterdev/components/main-nav.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            (items === null || items === void 0 ? void 0 : items.length) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"hidden gap-6 md:flex\",\n                children: items === null || items === void 0 ? void 0 : items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: item.disabled ? \"#\" : item.href,\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(\"flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm\", item.href.startsWith(\"/\".concat(segment)) ? \"text-foreground\" : \"text-foreground/60\", item.disabled && \"cursor-not-allowed opacity-80\"),\n                        children: [\n                            item.title,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_search__WEBPACK_IMPORTED_MODULE_8__.DocsSearch, {}, void 0, false, {\n                                fileName: \"/Users/pierrecaboor/Documents/thisbusterdev/components/main-nav.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/pierrecaboor/Documents/thisbusterdev/components/main-nav.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/pierrecaboor/Documents/thisbusterdev/components/main-nav.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex items-center space-x-2 md:hidden\",\n                onClick: ()=>setShowMobileMenu(!showMobileMenu),\n                children: [\n                    showMobileMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons__WEBPACK_IMPORTED_MODULE_6__.Icons.close, {}, void 0, false, {\n                        fileName: \"/Users/pierrecaboor/Documents/thisbusterdev/components/main-nav.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 27\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons__WEBPACK_IMPORTED_MODULE_6__.Icons.logo, {}, void 0, false, {\n                        fileName: \"/Users/pierrecaboor/Documents/thisbusterdev/components/main-nav.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 45\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold\",\n                        children: \"Menu\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pierrecaboor/Documents/thisbusterdev/components/main-nav.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pierrecaboor/Documents/thisbusterdev/components/main-nav.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            showMobileMenu && items && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_mobile_nav__WEBPACK_IMPORTED_MODULE_7__.MobileNav, {\n                items: items,\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/pierrecaboor/Documents/thisbusterdev/components/main-nav.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pierrecaboor/Documents/thisbusterdev/components/main-nav.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(MainNav, \"3nZBEoiUcdwpDw/B9Xo3jyQIcIk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSelectedLayoutSegment\n    ];\n});\n_c = MainNav;\nvar _c;\n$RefreshReg$(_c, \"MainNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWFpbi1uYXYudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU4QjtBQUNGO0FBQzhCO0FBR2hCO0FBQ1Y7QUFDVTtBQUNTO0FBQ2Q7QUFPOUIsU0FBU1EsUUFBUSxLQUFpQztRQUFqQyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBZ0IsR0FBakM7O0lBQ3RCLE1BQU1DLFVBQVVULHlFQUF3QkE7SUFDeEMsTUFBTSxDQUFDVSxnQkFBZ0JDLGtCQUFrQixHQUFHYiwyQ0FBYyxDQUFVO0lBRXBFLHFCQUNFLDhEQUFDZTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2Ysa0RBQUlBO2dCQUFDZ0IsTUFBSztnQkFBSUQsV0FBVTs7a0NBQ3ZCLDhEQUFDWCxvREFBS0EsQ0FBQ2EsSUFBSTs7Ozs7a0NBQ1gsOERBQUNDO3dCQUFLSCxXQUFVO2tDQUNiYixvREFBVUEsQ0FBQ2lCLElBQUk7Ozs7Ozs7Ozs7OztZQUduQlgsQ0FBQUEsa0JBQUFBLDRCQUFBQSxNQUFPWSxNQUFNLGtCQUNaLDhEQUFDQztnQkFBSU4sV0FBVTswQkFDWlAsa0JBQUFBLDRCQUFBQSxNQUFPYyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2pCLDhEQUFDeEIsa0RBQUlBO3dCQUVIZ0IsTUFBTU8sS0FBS0UsUUFBUSxHQUFHLE1BQU1GLEtBQUtQLElBQUk7d0JBQ3JDRCxXQUFXWiw4Q0FBRUEsQ0FDWCwrRkFDQW9CLEtBQUtQLElBQUksQ0FBQ1UsVUFBVSxDQUFDLElBQVksT0FBUmhCLFlBQ3JCLG9CQUNBLHNCQUNKYSxLQUFLRSxRQUFRLElBQUk7OzRCQUdsQkYsS0FBS0ksS0FBSzswQ0FDWCw4REFBQ3JCLCtDQUFVQTs7Ozs7O3VCQVhOa0I7Ozs7Ozs7Ozt1QkFnQlQ7MEJBQ0osOERBQUNJO2dCQUNDYixXQUFVO2dCQUNWYyxTQUFTLElBQU1qQixrQkFBa0IsQ0FBQ0Q7O29CQUVqQ0EsK0JBQWlCLDhEQUFDUCxvREFBS0EsQ0FBQzBCLEtBQUs7Ozs7NkNBQU0sOERBQUMxQixvREFBS0EsQ0FBQ2EsSUFBSTs7Ozs7a0NBQy9DLDhEQUFDQzt3QkFBS0gsV0FBVTtrQ0FBWTs7Ozs7Ozs7Ozs7O1lBRTdCSixrQkFBa0JILHVCQUNqQiw4REFBQ0gsNkRBQVNBO2dCQUFDRyxPQUFPQTswQkFBUUM7Ozs7Ozs7Ozs7OztBQUlsQztHQTdDZ0JGOztRQUNFTixxRUFBd0JBOzs7S0FEMUJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWFpbi1uYXYudHN4PzllOWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlU2VsZWN0ZWRMYXlvdXRTZWdtZW50IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiXG5cbmltcG9ydCB7IE1haW5OYXZJdGVtIH0gZnJvbSBcInR5cGVzXCJcbmltcG9ydCB7IHNpdGVDb25maWcgfSBmcm9tIFwiQC9jb25maWcvc2l0ZVwiXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiXG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCJAL2NvbXBvbmVudHMvaWNvbnNcIlxuaW1wb3J0IHsgTW9iaWxlTmF2IH0gZnJvbSBcIkAvY29tcG9uZW50cy9tb2JpbGUtbmF2XCJcbmltcG9ydCB7IERvY3NTZWFyY2ggfSBmcm9tIFwiLi9zZWFyY2hcIlxuXG5pbnRlcmZhY2UgTWFpbk5hdlByb3BzIHtcbiAgaXRlbXM/OiBNYWluTmF2SXRlbVtdXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNYWluTmF2KHsgaXRlbXMsIGNoaWxkcmVuIH06IE1haW5OYXZQcm9wcykge1xuICBjb25zdCBzZWdtZW50ID0gdXNlU2VsZWN0ZWRMYXlvdXRTZWdtZW50KClcbiAgY29uc3QgW3Nob3dNb2JpbGVNZW51LCBzZXRTaG93TW9iaWxlTWVudV0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBtZDpnYXAtMTBcIj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiaGlkZGVuIGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgbWQ6ZmxleFwiPlxuICAgICAgICA8SWNvbnMubG9nbyAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gZm9udC1ib2xkIHNtOmlubGluZS1ibG9ja1wiPlxuICAgICAgICAgIHtzaXRlQ29uZmlnLm5hbWV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvTGluaz5cbiAgICAgIHtpdGVtcz8ubGVuZ3RoID8gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhpZGRlbiBnYXAtNiBtZDpmbGV4XCI+XG4gICAgICAgICAge2l0ZW1zPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBocmVmPXtpdGVtLmRpc2FibGVkID8gXCIjXCIgOiBpdGVtLmhyZWZ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgICAgXCJmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOnRleHQtZm9yZWdyb3VuZC84MCBzbTp0ZXh0LXNtXCIsXG4gICAgICAgICAgICAgICAgaXRlbS5ocmVmLnN0YXJ0c1dpdGgoYC8ke3NlZ21lbnR9YClcbiAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWZvcmVncm91bmRcIlxuICAgICAgICAgICAgICAgICAgOiBcInRleHQtZm9yZWdyb3VuZC82MFwiLFxuICAgICAgICAgICAgICAgIGl0ZW0uZGlzYWJsZWQgJiYgXCJjdXJzb3Itbm90LWFsbG93ZWQgb3BhY2l0eS04MFwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICA8RG9jc1NlYXJjaCAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvbmF2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBtZDpoaWRkZW5cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9iaWxlTWVudSghc2hvd01vYmlsZU1lbnUpfVxuICAgICAgPlxuICAgICAgICB7c2hvd01vYmlsZU1lbnUgPyA8SWNvbnMuY2xvc2UgLz4gOiA8SWNvbnMubG9nbyAvPn1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+TWVudTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge3Nob3dNb2JpbGVNZW51ICYmIGl0ZW1zICYmIChcbiAgICAgICAgPE1vYmlsZU5hdiBpdGVtcz17aXRlbXN9PntjaGlsZHJlbn08L01vYmlsZU5hdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VTZWxlY3RlZExheW91dFNlZ21lbnQiLCJzaXRlQ29uZmlnIiwiY24iLCJJY29ucyIsIk1vYmlsZU5hdiIsIkRvY3NTZWFyY2giLCJNYWluTmF2IiwiaXRlbXMiLCJjaGlsZHJlbiIsInNlZ21lbnQiLCJzaG93TW9iaWxlTWVudSIsInNldFNob3dNb2JpbGVNZW51IiwidXNlU3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwibG9nbyIsInNwYW4iLCJuYW1lIiwibGVuZ3RoIiwibmF2IiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGlzYWJsZWQiLCJzdGFydHNXaXRoIiwidGl0bGUiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/main-nav.tsx\n"));

/***/ })

});