"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-resolve-all@1.0.0";
exports.ids = ["vendor-chunks/micromark-util-resolve-all@1.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/micromark-util-resolve-all@1.0.0/node_modules/micromark-util-resolve-all/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/micromark-util-resolve-all@1.0.0/node_modules/micromark-util-resolve-all/index.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveAll: () => (/* binding */ resolveAll)\n/* harmony export */ });\n/**\n * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext\n * @typedef {import('micromark-util-types').Event} Event\n * @typedef {import('micromark-util-types').Resolver} Resolver\n */ /**\n * Call all `resolveAll`s.\n *\n * @param {{resolveAll?: Resolver}[]} constructs\n * @param {Event[]} events\n * @param {TokenizeContext} context\n * @returns {Event[]}\n */ function resolveAll(constructs, events, context) {\n    /** @type {Resolver[]} */ const called = [];\n    let index = -1;\n    while(++index < constructs.length){\n        const resolve = constructs[index].resolveAll;\n        if (resolve && !called.includes(resolve)) {\n            events = resolve(events, context);\n            called.push(resolve);\n        }\n    }\n    return events;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbWljcm9tYXJrLXV0aWwtcmVzb2x2ZS1hbGxAMS4wLjAvbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLXJlc29sdmUtYWxsL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztDQUlDLEdBRUQ7Ozs7Ozs7Q0FPQyxHQUNNLFNBQVNBLFdBQVdDLFVBQVUsRUFBRUMsTUFBTSxFQUFFQyxPQUFPO0lBQ3BELHVCQUF1QixHQUN2QixNQUFNQyxTQUFTLEVBQUU7SUFDakIsSUFBSUMsUUFBUSxDQUFDO0lBRWIsTUFBTyxFQUFFQSxRQUFRSixXQUFXSyxNQUFNLENBQUU7UUFDbEMsTUFBTUMsVUFBVU4sVUFBVSxDQUFDSSxNQUFNLENBQUNMLFVBQVU7UUFFNUMsSUFBSU8sV0FBVyxDQUFDSCxPQUFPSSxRQUFRLENBQUNELFVBQVU7WUFDeENMLFNBQVNLLFFBQVFMLFFBQVFDO1lBQ3pCQyxPQUFPSyxJQUFJLENBQUNGO1FBQ2Q7SUFDRjtJQUVBLE9BQU9MO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXhvbm9teS8uL25vZGVfbW9kdWxlcy8ucG5wbS9taWNyb21hcmstdXRpbC1yZXNvbHZlLWFsbEAxLjAuMC9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtcmVzb2x2ZS1hbGwvaW5kZXguanM/MWYwOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVDb250ZXh0fSBUb2tlbml6ZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRXZlbnR9IEV2ZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlJlc29sdmVyfSBSZXNvbHZlclxuICovXG5cbi8qKlxuICogQ2FsbCBhbGwgYHJlc29sdmVBbGxgcy5cbiAqXG4gKiBAcGFyYW0ge3tyZXNvbHZlQWxsPzogUmVzb2x2ZXJ9W119IGNvbnN0cnVjdHNcbiAqIEBwYXJhbSB7RXZlbnRbXX0gZXZlbnRzXG4gKiBAcGFyYW0ge1Rva2VuaXplQ29udGV4dH0gY29udGV4dFxuICogQHJldHVybnMge0V2ZW50W119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQWxsKGNvbnN0cnVjdHMsIGV2ZW50cywgY29udGV4dCkge1xuICAvKiogQHR5cGUge1Jlc29sdmVyW119ICovXG4gIGNvbnN0IGNhbGxlZCA9IFtdXG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBjb25zdHJ1Y3RzLmxlbmd0aCkge1xuICAgIGNvbnN0IHJlc29sdmUgPSBjb25zdHJ1Y3RzW2luZGV4XS5yZXNvbHZlQWxsXG5cbiAgICBpZiAocmVzb2x2ZSAmJiAhY2FsbGVkLmluY2x1ZGVzKHJlc29sdmUpKSB7XG4gICAgICBldmVudHMgPSByZXNvbHZlKGV2ZW50cywgY29udGV4dClcbiAgICAgIGNhbGxlZC5wdXNoKHJlc29sdmUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV2ZW50c1xufVxuIl0sIm5hbWVzIjpbInJlc29sdmVBbGwiLCJjb25zdHJ1Y3RzIiwiZXZlbnRzIiwiY29udGV4dCIsImNhbGxlZCIsImluZGV4IiwibGVuZ3RoIiwicmVzb2x2ZSIsImluY2x1ZGVzIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/micromark-util-resolve-all@1.0.0/node_modules/micromark-util-resolve-all/index.js\n");

/***/ })

};
;