"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-combine-extensions@1.0.0";
exports.ids = ["vendor-chunks/micromark-util-combine-extensions@1.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/micromark-util-combine-extensions@1.0.0/node_modules/micromark-util-combine-extensions/index.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/micromark-util-combine-extensions@1.0.0/node_modules/micromark-util-combine-extensions/index.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   combineExtensions: () => (/* binding */ combineExtensions),\n/* harmony export */   combineHtmlExtensions: () => (/* binding */ combineHtmlExtensions)\n/* harmony export */ });\n/* harmony import */ var micromark_util_chunked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-chunked */ \"(rsc)/./node_modules/.pnpm/micromark-util-chunked@1.0.0/node_modules/micromark-util-chunked/dev/index.js\");\n/**\n * @typedef {import('micromark-util-types').NormalizedExtension} NormalizedExtension\n * @typedef {import('micromark-util-types').Extension} Extension\n * @typedef {import('micromark-util-types').Construct} Construct\n * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension\n */ \nconst hasOwnProperty = {}.hasOwnProperty;\n/**\n * Combine several syntax extensions into one.\n *\n * @param {Extension[]} extensions List of syntax extensions.\n * @returns {NormalizedExtension} A single combined extension.\n */ function combineExtensions(extensions) {\n    /** @type {NormalizedExtension} */ const all = {};\n    let index = -1;\n    while(++index < extensions.length){\n        syntaxExtension(all, extensions[index]);\n    }\n    return all;\n}\n/**\n * Merge `extension` into `all`.\n *\n * @param {NormalizedExtension} all Extension to merge into.\n * @param {Extension} extension Extension to merge.\n * @returns {void}\n */ function syntaxExtension(all, extension) {\n    /** @type {string} */ let hook;\n    for(hook in extension){\n        const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;\n        const left = maybe || (all[hook] = {});\n        const right = extension[hook];\n        /** @type {string} */ let code;\n        for(code in right){\n            if (!hasOwnProperty.call(left, code)) left[code] = [];\n            const value = right[code];\n            constructs(// @ts-expect-error Looks like a list.\n            left[code], Array.isArray(value) ? value : value ? [\n                value\n            ] : []);\n        }\n    }\n}\n/**\n * Merge `list` into `existing` (both lists of constructs).\n * Mutates `existing`.\n *\n * @param {unknown[]} existing\n * @param {unknown[]} list\n * @returns {void}\n */ function constructs(existing, list) {\n    let index = -1;\n    /** @type {unknown[]} */ const before = [];\n    while(++index < list.length){\n        // @ts-expect-error Looks like an object.\n        ;\n        (list[index].add === \"after\" ? existing : before).push(list[index]);\n    }\n    (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_0__.splice)(existing, 0, 0, before);\n}\n/**\n * Combine several HTML extensions into one.\n *\n * @param {HtmlExtension[]} htmlExtensions List of HTML extensions.\n * @returns {HtmlExtension} A single combined extension.\n */ function combineHtmlExtensions(htmlExtensions) {\n    /** @type {HtmlExtension} */ const handlers = {};\n    let index = -1;\n    while(++index < htmlExtensions.length){\n        htmlExtension(handlers, htmlExtensions[index]);\n    }\n    return handlers;\n}\n/**\n * Merge `extension` into `all`.\n *\n * @param {HtmlExtension} all Extension to merge into.\n * @param {HtmlExtension} extension Extension to merge.\n * @returns {void}\n */ function htmlExtension(all, extension) {\n    /** @type {string} */ let hook;\n    for(hook in extension){\n        const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;\n        const left = maybe || (all[hook] = {});\n        const right = extension[hook];\n        /** @type {string} */ let type;\n        if (right) {\n            for(type in right){\n                left[type] = right[type];\n            }\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbWljcm9tYXJrLXV0aWwtY29tYmluZS1leHRlbnNpb25zQDEuMC4wL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1jb21iaW5lLWV4dGVuc2lvbnMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7O0NBS0MsR0FFNEM7QUFFN0MsTUFBTUMsaUJBQWlCLENBQUMsRUFBRUEsY0FBYztBQUV4Qzs7Ozs7Q0FLQyxHQUNNLFNBQVNDLGtCQUFrQkMsVUFBVTtJQUMxQyxnQ0FBZ0MsR0FDaEMsTUFBTUMsTUFBTSxDQUFDO0lBQ2IsSUFBSUMsUUFBUSxDQUFDO0lBRWIsTUFBTyxFQUFFQSxRQUFRRixXQUFXRyxNQUFNLENBQUU7UUFDbENDLGdCQUFnQkgsS0FBS0QsVUFBVSxDQUFDRSxNQUFNO0lBQ3hDO0lBRUEsT0FBT0Q7QUFDVDtBQUVBOzs7Ozs7Q0FNQyxHQUNELFNBQVNHLGdCQUFnQkgsR0FBRyxFQUFFSSxTQUFTO0lBQ3JDLG1CQUFtQixHQUNuQixJQUFJQztJQUVKLElBQUtBLFFBQVFELFVBQVc7UUFDdEIsTUFBTUUsUUFBUVQsZUFBZVUsSUFBSSxDQUFDUCxLQUFLSyxRQUFRTCxHQUFHLENBQUNLLEtBQUssR0FBR0c7UUFDM0QsTUFBTUMsT0FBT0gsU0FBVU4sQ0FBQUEsR0FBRyxDQUFDSyxLQUFLLEdBQUcsQ0FBQztRQUNwQyxNQUFNSyxRQUFRTixTQUFTLENBQUNDLEtBQUs7UUFDN0IsbUJBQW1CLEdBQ25CLElBQUlNO1FBRUosSUFBS0EsUUFBUUQsTUFBTztZQUNsQixJQUFJLENBQUNiLGVBQWVVLElBQUksQ0FBQ0UsTUFBTUUsT0FBT0YsSUFBSSxDQUFDRSxLQUFLLEdBQUcsRUFBRTtZQUNyRCxNQUFNQyxRQUFRRixLQUFLLENBQUNDLEtBQUs7WUFDekJFLFdBQ0Usc0NBQXNDO1lBQ3RDSixJQUFJLENBQUNFLEtBQUssRUFDVkcsTUFBTUMsT0FBTyxDQUFDSCxTQUFTQSxRQUFRQSxRQUFRO2dCQUFDQTthQUFNLEdBQUcsRUFBRTtRQUV2RDtJQUNGO0FBQ0Y7QUFFQTs7Ozs7OztDQU9DLEdBQ0QsU0FBU0MsV0FBV0csUUFBUSxFQUFFQyxJQUFJO0lBQ2hDLElBQUloQixRQUFRLENBQUM7SUFDYixzQkFBc0IsR0FDdEIsTUFBTWlCLFNBQVMsRUFBRTtJQUVqQixNQUFPLEVBQUVqQixRQUFRZ0IsS0FBS2YsTUFBTSxDQUFFO1FBQzVCLHlDQUF5Qzs7UUFDdkNlLENBQUFBLElBQUksQ0FBQ2hCLE1BQU0sQ0FBQ2tCLEdBQUcsS0FBSyxVQUFVSCxXQUFXRSxNQUFLLEVBQUdFLElBQUksQ0FBQ0gsSUFBSSxDQUFDaEIsTUFBTTtJQUNyRTtJQUVBTCw4REFBTUEsQ0FBQ29CLFVBQVUsR0FBRyxHQUFHRTtBQUN6QjtBQUVBOzs7OztDQUtDLEdBQ00sU0FBU0csc0JBQXNCQyxjQUFjO0lBQ2xELDBCQUEwQixHQUMxQixNQUFNQyxXQUFXLENBQUM7SUFDbEIsSUFBSXRCLFFBQVEsQ0FBQztJQUViLE1BQU8sRUFBRUEsUUFBUXFCLGVBQWVwQixNQUFNLENBQUU7UUFDdENzQixjQUFjRCxVQUFVRCxjQUFjLENBQUNyQixNQUFNO0lBQy9DO0lBRUEsT0FBT3NCO0FBQ1Q7QUFFQTs7Ozs7O0NBTUMsR0FDRCxTQUFTQyxjQUFjeEIsR0FBRyxFQUFFSSxTQUFTO0lBQ25DLG1CQUFtQixHQUNuQixJQUFJQztJQUVKLElBQUtBLFFBQVFELFVBQVc7UUFDdEIsTUFBTUUsUUFBUVQsZUFBZVUsSUFBSSxDQUFDUCxLQUFLSyxRQUFRTCxHQUFHLENBQUNLLEtBQUssR0FBR0c7UUFDM0QsTUFBTUMsT0FBT0gsU0FBVU4sQ0FBQUEsR0FBRyxDQUFDSyxLQUFLLEdBQUcsQ0FBQztRQUNwQyxNQUFNSyxRQUFRTixTQUFTLENBQUNDLEtBQUs7UUFDN0IsbUJBQW1CLEdBQ25CLElBQUlvQjtRQUVKLElBQUlmLE9BQU87WUFDVCxJQUFLZSxRQUFRZixNQUFPO2dCQUNsQkQsSUFBSSxDQUFDZ0IsS0FBSyxHQUFHZixLQUFLLENBQUNlLEtBQUs7WUFDMUI7UUFDRjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXhvbm9teS8uL25vZGVfbW9kdWxlcy8ucG5wbS9taWNyb21hcmstdXRpbC1jb21iaW5lLWV4dGVuc2lvbnNAMS4wLjAvbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLWNvbWJpbmUtZXh0ZW5zaW9ucy9pbmRleC5qcz80ZDgwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ob3JtYWxpemVkRXh0ZW5zaW9ufSBOb3JtYWxpemVkRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkV4dGVuc2lvbn0gRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkNvbnN0cnVjdH0gQ29uc3RydWN0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkh0bWxFeHRlbnNpb259IEh0bWxFeHRlbnNpb25cbiAqL1xuXG5pbXBvcnQge3NwbGljZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2h1bmtlZCdcblxuY29uc3QgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vKipcbiAqIENvbWJpbmUgc2V2ZXJhbCBzeW50YXggZXh0ZW5zaW9ucyBpbnRvIG9uZS5cbiAqXG4gKiBAcGFyYW0ge0V4dGVuc2lvbltdfSBleHRlbnNpb25zIExpc3Qgb2Ygc3ludGF4IGV4dGVuc2lvbnMuXG4gKiBAcmV0dXJucyB7Tm9ybWFsaXplZEV4dGVuc2lvbn0gQSBzaW5nbGUgY29tYmluZWQgZXh0ZW5zaW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUV4dGVuc2lvbnMoZXh0ZW5zaW9ucykge1xuICAvKiogQHR5cGUge05vcm1hbGl6ZWRFeHRlbnNpb259ICovXG4gIGNvbnN0IGFsbCA9IHt9XG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBleHRlbnNpb25zLmxlbmd0aCkge1xuICAgIHN5bnRheEV4dGVuc2lvbihhbGwsIGV4dGVuc2lvbnNbaW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIGFsbFxufVxuXG4vKipcbiAqIE1lcmdlIGBleHRlbnNpb25gIGludG8gYGFsbGAuXG4gKlxuICogQHBhcmFtIHtOb3JtYWxpemVkRXh0ZW5zaW9ufSBhbGwgRXh0ZW5zaW9uIHRvIG1lcmdlIGludG8uXG4gKiBAcGFyYW0ge0V4dGVuc2lvbn0gZXh0ZW5zaW9uIEV4dGVuc2lvbiB0byBtZXJnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBzeW50YXhFeHRlbnNpb24oYWxsLCBleHRlbnNpb24pIHtcbiAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gIGxldCBob29rXG5cbiAgZm9yIChob29rIGluIGV4dGVuc2lvbikge1xuICAgIGNvbnN0IG1heWJlID0gaGFzT3duUHJvcGVydHkuY2FsbChhbGwsIGhvb2spID8gYWxsW2hvb2tdIDogdW5kZWZpbmVkXG4gICAgY29uc3QgbGVmdCA9IG1heWJlIHx8IChhbGxbaG9va10gPSB7fSlcbiAgICBjb25zdCByaWdodCA9IGV4dGVuc2lvbltob29rXVxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIGxldCBjb2RlXG5cbiAgICBmb3IgKGNvZGUgaW4gcmlnaHQpIHtcbiAgICAgIGlmICghaGFzT3duUHJvcGVydHkuY2FsbChsZWZ0LCBjb2RlKSkgbGVmdFtjb2RlXSA9IFtdXG4gICAgICBjb25zdCB2YWx1ZSA9IHJpZ2h0W2NvZGVdXG4gICAgICBjb25zdHJ1Y3RzKFxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIExvb2tzIGxpa2UgYSBsaXN0LlxuICAgICAgICBsZWZ0W2NvZGVdLFxuICAgICAgICBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogdmFsdWUgPyBbdmFsdWVdIDogW11cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNZXJnZSBgbGlzdGAgaW50byBgZXhpc3RpbmdgIChib3RoIGxpc3RzIG9mIGNvbnN0cnVjdHMpLlxuICogTXV0YXRlcyBgZXhpc3RpbmdgLlxuICpcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBleGlzdGluZ1xuICogQHBhcmFtIHt1bmtub3duW119IGxpc3RcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBjb25zdHJ1Y3RzKGV4aXN0aW5nLCBsaXN0KSB7XG4gIGxldCBpbmRleCA9IC0xXG4gIC8qKiBAdHlwZSB7dW5rbm93bltdfSAqL1xuICBjb25zdCBiZWZvcmUgPSBbXVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGlzdC5sZW5ndGgpIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIExvb2tzIGxpa2UgYW4gb2JqZWN0LlxuICAgIDsobGlzdFtpbmRleF0uYWRkID09PSAnYWZ0ZXInID8gZXhpc3RpbmcgOiBiZWZvcmUpLnB1c2gobGlzdFtpbmRleF0pXG4gIH1cblxuICBzcGxpY2UoZXhpc3RpbmcsIDAsIDAsIGJlZm9yZSlcbn1cblxuLyoqXG4gKiBDb21iaW5lIHNldmVyYWwgSFRNTCBleHRlbnNpb25zIGludG8gb25lLlxuICpcbiAqIEBwYXJhbSB7SHRtbEV4dGVuc2lvbltdfSBodG1sRXh0ZW5zaW9ucyBMaXN0IG9mIEhUTUwgZXh0ZW5zaW9ucy5cbiAqIEByZXR1cm5zIHtIdG1sRXh0ZW5zaW9ufSBBIHNpbmdsZSBjb21iaW5lZCBleHRlbnNpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lSHRtbEV4dGVuc2lvbnMoaHRtbEV4dGVuc2lvbnMpIHtcbiAgLyoqIEB0eXBlIHtIdG1sRXh0ZW5zaW9ufSAqL1xuICBjb25zdCBoYW5kbGVycyA9IHt9XG4gIGxldCBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBodG1sRXh0ZW5zaW9ucy5sZW5ndGgpIHtcbiAgICBodG1sRXh0ZW5zaW9uKGhhbmRsZXJzLCBodG1sRXh0ZW5zaW9uc1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gaGFuZGxlcnNcbn1cblxuLyoqXG4gKiBNZXJnZSBgZXh0ZW5zaW9uYCBpbnRvIGBhbGxgLlxuICpcbiAqIEBwYXJhbSB7SHRtbEV4dGVuc2lvbn0gYWxsIEV4dGVuc2lvbiB0byBtZXJnZSBpbnRvLlxuICogQHBhcmFtIHtIdG1sRXh0ZW5zaW9ufSBleHRlbnNpb24gRXh0ZW5zaW9uIHRvIG1lcmdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGh0bWxFeHRlbnNpb24oYWxsLCBleHRlbnNpb24pIHtcbiAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gIGxldCBob29rXG5cbiAgZm9yIChob29rIGluIGV4dGVuc2lvbikge1xuICAgIGNvbnN0IG1heWJlID0gaGFzT3duUHJvcGVydHkuY2FsbChhbGwsIGhvb2spID8gYWxsW2hvb2tdIDogdW5kZWZpbmVkXG4gICAgY29uc3QgbGVmdCA9IG1heWJlIHx8IChhbGxbaG9va10gPSB7fSlcbiAgICBjb25zdCByaWdodCA9IGV4dGVuc2lvbltob29rXVxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIGxldCB0eXBlXG5cbiAgICBpZiAocmlnaHQpIHtcbiAgICAgIGZvciAodHlwZSBpbiByaWdodCkge1xuICAgICAgICBsZWZ0W3R5cGVdID0gcmlnaHRbdHlwZV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJzcGxpY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbWJpbmVFeHRlbnNpb25zIiwiZXh0ZW5zaW9ucyIsImFsbCIsImluZGV4IiwibGVuZ3RoIiwic3ludGF4RXh0ZW5zaW9uIiwiZXh0ZW5zaW9uIiwiaG9vayIsIm1heWJlIiwiY2FsbCIsInVuZGVmaW5lZCIsImxlZnQiLCJyaWdodCIsImNvZGUiLCJ2YWx1ZSIsImNvbnN0cnVjdHMiLCJBcnJheSIsImlzQXJyYXkiLCJleGlzdGluZyIsImxpc3QiLCJiZWZvcmUiLCJhZGQiLCJwdXNoIiwiY29tYmluZUh0bWxFeHRlbnNpb25zIiwiaHRtbEV4dGVuc2lvbnMiLCJoYW5kbGVycyIsImh0bWxFeHRlbnNpb24iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/micromark-util-combine-extensions@1.0.0/node_modules/micromark-util-combine-extensions/index.js\n");

/***/ })

};
;