/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-use-controllable-state@1.0.0_react@18.2.0";
exports.ids = ["vendor-chunks/@radix-ui+react-use-controllable-state@1.0.0_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.0_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.js":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.0_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.js ***!
  \********************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ijazI$react = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@13.5.7_@babel+core@7.21.4_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\nvar $ijazI$radixuireactusecallbackref = __webpack_require__(/*! @radix-ui/react-use-callback-ref */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.0_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.js\");\n\nfunction $parcel$export(e, n, v, s) {\n  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});\n}\n\n$parcel$export(module.exports, \"useControllableState\", () => $b84d42d44371bff7$export$6f32135080cb4c3);\n\n\nfunction $b84d42d44371bff7$export$6f32135080cb4c3({ prop: prop , defaultProp: defaultProp , onChange: onChange = ()=>{}  }) {\n    const [uncontrolledProp, setUncontrolledProp] = $b84d42d44371bff7$var$useUncontrolledState({\n        defaultProp: defaultProp,\n        onChange: onChange\n    });\n    const isControlled = prop !== undefined;\n    const value1 = isControlled ? prop : uncontrolledProp;\n    const handleChange = $ijazI$radixuireactusecallbackref.useCallbackRef(onChange);\n    const setValue = $ijazI$react.useCallback((nextValue)=>{\n        if (isControlled) {\n            const setter = nextValue;\n            const value = typeof nextValue === 'function' ? setter(prop) : nextValue;\n            if (value !== prop) handleChange(value);\n        } else setUncontrolledProp(nextValue);\n    }, [\n        isControlled,\n        prop,\n        setUncontrolledProp,\n        handleChange\n    ]);\n    return [\n        value1,\n        setValue\n    ];\n}\nfunction $b84d42d44371bff7$var$useUncontrolledState({ defaultProp: defaultProp , onChange: onChange  }) {\n    const uncontrolledState = $ijazI$react.useState(defaultProp);\n    const [value] = uncontrolledState;\n    const prevValueRef = $ijazI$react.useRef(value);\n    const handleChange = $ijazI$radixuireactusecallbackref.useCallbackRef(onChange);\n    $ijazI$react.useEffect(()=>{\n        if (prevValueRef.current !== value) {\n            handleChange(value);\n            prevValueRef.current = value;\n        }\n    }, [\n        value,\n        prevValueRef,\n        handleChange\n    ]);\n    return uncontrolledState;\n}\n\n\n\n\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXVzZS1jb250cm9sbGFibGUtc3RhdGVAMS4wLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLWNvbnRyb2xsYWJsZS1zdGF0ZS9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQixtQkFBTyxDQUFDLCtOQUFPO0FBQ2xDLHdDQUF3QyxtQkFBTyxDQUFDLG9MQUFrQzs7QUFFbEY7QUFDQSwrQkFBK0IscURBQXFEO0FBQ3BGOztBQUVBOzs7QUFHQSxvREFBb0Qsc0VBQXNFO0FBQzFIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxnREFBZ0Q7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RheG9ub215Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC11c2UtY29udHJvbGxhYmxlLXN0YXRlQDEuMC4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXVzZS1jb250cm9sbGFibGUtc3RhdGUvZGlzdC9pbmRleC5qcz8yYjI5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciAkaWphekkkcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgJGlqYXpJJHJhZGl4dWlyZWFjdHVzZWNhbGxiYWNrcmVmID0gcmVxdWlyZShcIkByYWRpeC11aS9yZWFjdC11c2UtY2FsbGJhY2stcmVmXCIpO1xuXG5mdW5jdGlvbiAkcGFyY2VsJGV4cG9ydChlLCBuLCB2LCBzKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBuLCB7Z2V0OiB2LCBzZXQ6IHMsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0pO1xufVxuXG4kcGFyY2VsJGV4cG9ydChtb2R1bGUuZXhwb3J0cywgXCJ1c2VDb250cm9sbGFibGVTdGF0ZVwiLCAoKSA9PiAkYjg0ZDQyZDQ0MzcxYmZmNyRleHBvcnQkNmYzMjEzNTA4MGNiNGMzKTtcblxuXG5mdW5jdGlvbiAkYjg0ZDQyZDQ0MzcxYmZmNyRleHBvcnQkNmYzMjEzNTA4MGNiNGMzKHsgcHJvcDogcHJvcCAsIGRlZmF1bHRQcm9wOiBkZWZhdWx0UHJvcCAsIG9uQ2hhbmdlOiBvbkNoYW5nZSA9ICgpPT57fSAgfSkge1xuICAgIGNvbnN0IFt1bmNvbnRyb2xsZWRQcm9wLCBzZXRVbmNvbnRyb2xsZWRQcm9wXSA9ICRiODRkNDJkNDQzNzFiZmY3JHZhciR1c2VVbmNvbnRyb2xsZWRTdGF0ZSh7XG4gICAgICAgIGRlZmF1bHRQcm9wOiBkZWZhdWx0UHJvcCxcbiAgICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlXG4gICAgfSk7XG4gICAgY29uc3QgaXNDb250cm9sbGVkID0gcHJvcCAhPT0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IHZhbHVlMSA9IGlzQ29udHJvbGxlZCA/IHByb3AgOiB1bmNvbnRyb2xsZWRQcm9wO1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICRpamF6SSRyYWRpeHVpcmVhY3R1c2VjYWxsYmFja3JlZi51c2VDYWxsYmFja1JlZihvbkNoYW5nZSk7XG4gICAgY29uc3Qgc2V0VmFsdWUgPSAkaWphekkkcmVhY3QudXNlQ2FsbGJhY2soKG5leHRWYWx1ZSk9PntcbiAgICAgICAgaWYgKGlzQ29udHJvbGxlZCkge1xuICAgICAgICAgICAgY29uc3Qgc2V0dGVyID0gbmV4dFZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgbmV4dFZhbHVlID09PSAnZnVuY3Rpb24nID8gc2V0dGVyKHByb3ApIDogbmV4dFZhbHVlO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBwcm9wKSBoYW5kbGVDaGFuZ2UodmFsdWUpO1xuICAgICAgICB9IGVsc2Ugc2V0VW5jb250cm9sbGVkUHJvcChuZXh0VmFsdWUpO1xuICAgIH0sIFtcbiAgICAgICAgaXNDb250cm9sbGVkLFxuICAgICAgICBwcm9wLFxuICAgICAgICBzZXRVbmNvbnRyb2xsZWRQcm9wLFxuICAgICAgICBoYW5kbGVDaGFuZ2VcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICB2YWx1ZTEsXG4gICAgICAgIHNldFZhbHVlXG4gICAgXTtcbn1cbmZ1bmN0aW9uICRiODRkNDJkNDQzNzFiZmY3JHZhciR1c2VVbmNvbnRyb2xsZWRTdGF0ZSh7IGRlZmF1bHRQcm9wOiBkZWZhdWx0UHJvcCAsIG9uQ2hhbmdlOiBvbkNoYW5nZSAgfSkge1xuICAgIGNvbnN0IHVuY29udHJvbGxlZFN0YXRlID0gJGlqYXpJJHJlYWN0LnVzZVN0YXRlKGRlZmF1bHRQcm9wKTtcbiAgICBjb25zdCBbdmFsdWVdID0gdW5jb250cm9sbGVkU3RhdGU7XG4gICAgY29uc3QgcHJldlZhbHVlUmVmID0gJGlqYXpJJHJlYWN0LnVzZVJlZih2YWx1ZSk7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gJGlqYXpJJHJhZGl4dWlyZWFjdHVzZWNhbGxiYWNrcmVmLnVzZUNhbGxiYWNrUmVmKG9uQ2hhbmdlKTtcbiAgICAkaWphekkkcmVhY3QudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmIChwcmV2VmFsdWVSZWYuY3VycmVudCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgICBwcmV2VmFsdWVSZWYuY3VycmVudCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgcHJldlZhbHVlUmVmLFxuICAgICAgICBoYW5kbGVDaGFuZ2VcbiAgICBdKTtcbiAgICByZXR1cm4gdW5jb250cm9sbGVkU3RhdGU7XG59XG5cblxuXG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.0_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.js\n");

/***/ })

};
;