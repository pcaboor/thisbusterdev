/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-use-callback-ref@1.0.0_react@18.2.0";
exports.ids = ["vendor-chunks/@radix-ui+react-use-callback-ref@1.0.0_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.0_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.0_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.js ***!
  \********************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var $92muK$react = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@13.5.7_@babel+core@7.21.4_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nfunction $parcel$export(e, n, v, s) {\n  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});\n}\n\n$parcel$export(module.exports, \"useCallbackRef\", () => $28e03942f763e819$export$25bec8c6f54ee79a);\n\n/**\n * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a\n * prop or avoid re-executing effects when passed as a dependency\n */ function $28e03942f763e819$export$25bec8c6f54ee79a(callback) {\n    const callbackRef = $92muK$react.useRef(callback);\n    $92muK$react.useEffect(()=>{\n        callbackRef.current = callback;\n    }); // https://github.com/facebook/react/issues/19240\n    return $92muK$react.useMemo(()=>(...args)=>{\n            var _callbackRef$current;\n            return (_callbackRef$current = callbackRef.current) === null || _callbackRef$current === void 0 ? void 0 : _callbackRef$current.call(callbackRef, ...args);\n        }\n    , []);\n}\n\n\n\n\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXVzZS1jYWxsYmFjay1yZWZAMS4wLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQixtQkFBTyxDQUFDLCtOQUFPOztBQUVsQztBQUNBLCtCQUErQixxREFBcUQ7QUFDcEY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUc7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXhvbm9teS8uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmFkaXgtdWkrcmVhY3QtdXNlLWNhbGxiYWNrLXJlZkAxLjAuMF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC11c2UtY2FsbGJhY2stcmVmL2Rpc3QvaW5kZXguanM/ZTNiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJDkybXVLJHJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5mdW5jdGlvbiAkcGFyY2VsJGV4cG9ydChlLCBuLCB2LCBzKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBuLCB7Z2V0OiB2LCBzZXQ6IHMsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0pO1xufVxuXG4kcGFyY2VsJGV4cG9ydChtb2R1bGUuZXhwb3J0cywgXCJ1c2VDYWxsYmFja1JlZlwiLCAoKSA9PiAkMjhlMDM5NDJmNzYzZTgxOSRleHBvcnQkMjViZWM4YzZmNTRlZTc5YSk7XG5cbi8qKlxuICogQSBjdXN0b20gaG9vayB0aGF0IGNvbnZlcnRzIGEgY2FsbGJhY2sgdG8gYSByZWYgdG8gYXZvaWQgdHJpZ2dlcmluZyByZS1yZW5kZXJzIHdoZW4gcGFzc2VkIGFzIGFcbiAqIHByb3Agb3IgYXZvaWQgcmUtZXhlY3V0aW5nIGVmZmVjdHMgd2hlbiBwYXNzZWQgYXMgYSBkZXBlbmRlbmN5XG4gKi8gZnVuY3Rpb24gJDI4ZTAzOTQyZjc2M2U4MTkkZXhwb3J0JDI1YmVjOGM2ZjU0ZWU3OWEoY2FsbGJhY2spIHtcbiAgICBjb25zdCBjYWxsYmFja1JlZiA9ICQ5Mm11SyRyZWFjdC51c2VSZWYoY2FsbGJhY2spO1xuICAgICQ5Mm11SyRyZWFjdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY2FsbGJhY2tSZWYuY3VycmVudCA9IGNhbGxiYWNrO1xuICAgIH0pOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MjQwXG4gICAgcmV0dXJuICQ5Mm11SyRyZWFjdC51c2VNZW1vKCgpPT4oLi4uYXJncyk9PntcbiAgICAgICAgICAgIHZhciBfY2FsbGJhY2tSZWYkY3VycmVudDtcbiAgICAgICAgICAgIHJldHVybiAoX2NhbGxiYWNrUmVmJGN1cnJlbnQgPSBjYWxsYmFja1JlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfY2FsbGJhY2tSZWYkY3VycmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NhbGxiYWNrUmVmJGN1cnJlbnQuY2FsbChjYWxsYmFja1JlZiwgLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAsIFtdKTtcbn1cblxuXG5cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.0_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.js\n");

/***/ })

};
;