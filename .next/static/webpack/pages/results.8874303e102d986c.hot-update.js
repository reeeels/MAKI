"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/results",{

/***/ "./pages/results.tsx":
/*!***************************!*\
  !*** ./pages/results.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/index.module.css */ \"./styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Tablll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tablll */ \"./pages/Tablll.tsx\");\n/* harmony import */ var _data_conversion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data_conversion */ \"./pages/data_conversion.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n// import Table from './table'\n// import JsonTable from './JsonTable';\n// import { arrayToTable } from './table';\n\n\n\nconst inputData = {\n    name: [\n        \"Anom\",\n        \"Megha\",\n        \"Subham\"\n    ],\n    age: [\n        \"19\",\n        \"19\",\n        \"25\"\n    ],\n    gender: [\n        \"Male\",\n        \"Female\",\n        \"Male\"\n    ]\n};\nconst outputData = (0,_data_conversion__WEBPACK_IMPORTED_MODULE_3__.convertData)(inputData);\nconsole.log(outputData);\nconst Results = ()=>{\n    _s();\n    const [fileData, setFileData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [narrativeInput, setNarrativeInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleFileRead = (e)=>{\n        const content = e.target.result;\n        setFileData(content);\n    };\n    const handleFileChosen = (e)=>{\n        const reader = new FileReader();\n        reader.onloadend = handleFileRead;\n        reader.readAsText(e.target.files[0]);\n    };\n    const handleText = (e)=>{\n        e.preventDefault();\n        setText(e.target.value);\n    };\n    // const handleGenerate = (e: any) => {\n    //     e.preventDefault()\n    //     console.log(text)\n    // }\n    async function handleGenerate(e) {\n        e.preventDefault();\n        try {\n            const response = await fetch(\"/api/data_extractor\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                // body: JSON.stringify(animalInput ),\n                body: JSON.stringify({\n                    narrative: narrativeInput\n                })\n            });\n            const data = await response.json();\n            console.log(data);\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            const tmp = data.result;\n            // const parsed = JSON.parse(tmp);\n            // console.log(typeof parsed)\n            // const converted_data = convertData(parsed)\n            // const stringify = JSON.stringify(converted_data);\n            // const table = arrayToTable(converted_data);\n            // console.log(table)\n            setResult(data.result);\n            setNarrativeInput(\"\");\n        } catch (error) {\n            // Consider implementing your own error handling logic here\n            console.error(error);\n            alert(error.message);\n        }\n    }\n    async function onSubmit(event) {\n        event.preventDefault();\n        try {\n            const response = await fetch(\"/api/data_extractor\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                // body: JSON.stringify(animalInput ),\n                body: JSON.stringify({\n                    narrative: narrativeInput\n                })\n            });\n            const data = await response.json();\n            console.log(data);\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            setResult(data.result);\n            setNarrativeInput(\"\");\n        } catch (error) {\n            // Consider implementing your own error handling logic here\n            console.error(error);\n            alert(error.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"container bg-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                style: {\n                    textDecoration: \"none\"\n                },\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().results_page_header),\n                    children: \"MAKI\"\n                }, void 0, false, {\n                    fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 55\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col d-flex flex-column py-5 mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"input-group mt-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"file\",\n                                        className: \"form-control\",\n                                        id: \"inputGroupFile01\",\n                                        onChange: handleFileChosen\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                    lineNumber: 126,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"input-group mt-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        className: \"form-control shadow-none\",\n                                        placeholder: \"Type in a case note narrative...\",\n                                        rows: 10,\n                                        onChange: (e)=>setNarrativeInput(e.target.value),\n                                        children: narrativeInput\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"align-items-right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-danger text-light float-right mt-3\",\n                                        disabled: !narrativeInput,\n                                        onClick: handleGenerate,\n                                        children: \"Generate\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                        lineNumber: 133,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined),\n                    result && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        initial: {\n                            opacity: 0,\n                            scale: 0\n                        },\n                        animate: {\n                            opacity: 1,\n                            scale: 1\n                        },\n                        // transition={{ duration: .5 }}\n                        // animate={{ x: 100 }}\n                        transition: {\n                            type: \"spring\",\n                            stiffness: 50\n                        },\n                        className: \"col-8 border-left border-dark py-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                                children: \"Results\"\n                            }, void 0, false, {\n                                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                lineNumber: 148,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tablll__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                data: result\n                            }, void 0, false, {\n                                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                lineNumber: 149,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Results, \"l1KvcXyWQE/SOdvXy7YCS7UbQBI=\");\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdDLE9BQU87d0JBQUU7d0JBQ2hDQyxTQUFTOzRCQUFFRixTQUFTOzRCQUFHQyxPQUFPO3dCQUFFO3dCQUNoQyxnQ0FBZ0M7d0JBQ2hDLHVCQUF1Qjt3QkFDdkJFLFlBQVk7NEJBQUViLE1BQU07NEJBQVVjLFdBQVc7d0JBQUc7d0JBQzVDeEIsV0FBVTs7MENBRVYsOERBQUNLO2dDQUFHTCxXQUFXdkQsdUVBQVk7MENBQUU7Ozs7OzswQ0FDN0IsOERBQUNDLCtDQUFNQTtnQ0FBQzJDLE1BQU0xQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFCO0dBaklNUDtLQUFBQTtBQW1JTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXN1bHRzLnRzeD81NjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcGRmanMgZnJvbSAncGRmanMtZGlzdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvaW5kZXgubW9kdWxlLmNzcydcbi8vIGltcG9ydCBUYWJsZSBmcm9tICcuL3RhYmxlJ1xuLy8gaW1wb3J0IEpzb25UYWJsZSBmcm9tICcuL0pzb25UYWJsZSc7XG4vLyBpbXBvcnQgeyBhcnJheVRvVGFibGUgfSBmcm9tICcuL3RhYmxlJztcbmltcG9ydCBUYWJsbGwgZnJvbSAnLi9UYWJsbGwnO1xuXG5cbmltcG9ydCB7IGNvbnZlcnREYXRhIH0gZnJvbSAnLi9kYXRhX2NvbnZlcnNpb24nO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmNvbnN0IGlucHV0RGF0YSA9IHtcbiAgbmFtZTogWydBbm9tJywgJ01lZ2hhJywgJ1N1YmhhbSddLFxuICBhZ2U6IFsnMTknLCAnMTknLCAnMjUnXSxcbiAgZ2VuZGVyOiBbJ01hbGUnLCAnRmVtYWxlJywgJ01hbGUnXSxcbn07XG5cbmNvbnN0IG91dHB1dERhdGEgPSBjb252ZXJ0RGF0YShpbnB1dERhdGEpO1xuXG5jb25zb2xlLmxvZyhvdXRwdXREYXRhKTtcblxuXG5cblxuY29uc3QgUmVzdWx0cyA9ICgpID0+IHtcbiAgY29uc3QgW2ZpbGVEYXRhLCBzZXRGaWxlRGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbbmFycmF0aXZlSW5wdXQsIHNldE5hcnJhdGl2ZUlucHV0XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBoYW5kbGVGaWxlUmVhZCA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZS50YXJnZXQucmVzdWx0XG4gICAgc2V0RmlsZURhdGEoY29udGVudClcblxuICB9XG5cbiAgY29uc3QgaGFuZGxlRmlsZUNob3NlbiA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9IGhhbmRsZUZpbGVSZWFkXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZS50YXJnZXQuZmlsZXNbMF0pXG4gIH1cblxuICBjb25zdCBoYW5kbGVUZXh0ID0gKGU6IGFueSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpXG4gIH1cblxuICAvLyBjb25zdCBoYW5kbGVHZW5lcmF0ZSA9IChlOiBhbnkpID0+IHtcbiAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKVxuICAvLyAgICAgY29uc29sZS5sb2codGV4dClcbiAgLy8gfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUdlbmVyYXRlKGU6IGFueSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZGF0YV9leHRyYWN0b3JcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGJvZHk6IEpTT04uc3RyaW5naWZ5KGFuaW1hbElucHV0ICksXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFycmF0aXZlOiBuYXJyYXRpdmVJbnB1dCB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICB0aHJvdyBkYXRhLmVycm9yIHx8IG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRtcCA9IGRhdGEucmVzdWx0XG4gICAgICAvLyBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHRtcCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgcGFyc2VkKVxuICAgICAgLy8gY29uc3QgY29udmVydGVkX2RhdGEgPSBjb252ZXJ0RGF0YShwYXJzZWQpXG4gICAgICAvLyBjb25zdCBzdHJpbmdpZnkgPSBKU09OLnN0cmluZ2lmeShjb252ZXJ0ZWRfZGF0YSk7XG5cbiAgICAgIC8vIGNvbnN0IHRhYmxlID0gYXJyYXlUb1RhYmxlKGNvbnZlcnRlZF9kYXRhKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRhYmxlKVxuXG5cbiAgICAgIHNldFJlc3VsdChkYXRhLnJlc3VsdCk7XG4gICAgICBzZXROYXJyYXRpdmVJbnB1dChcIlwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gQ29uc2lkZXIgaW1wbGVtZW50aW5nIHlvdXIgb3duIGVycm9yIGhhbmRsaW5nIGxvZ2ljIGhlcmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cblxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2RhdGFfZXh0cmFjdG9yXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICAvLyBib2R5OiBKU09OLnN0cmluZ2lmeShhbmltYWxJbnB1dCApLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hcnJhdGl2ZTogbmFycmF0aXZlSW5wdXQgfSksXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgdGhyb3cgZGF0YS5lcnJvciB8fCBuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuXG4gICAgICBzZXRSZXN1bHQoZGF0YS5yZXN1bHQpO1xuICAgICAgc2V0TmFycmF0aXZlSW5wdXQoXCJcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIENvbnNpZGVyIGltcGxlbWVudGluZyB5b3VyIG93biBlcnJvciBoYW5kbGluZyBsb2dpYyBoZXJlXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPSdjb250YWluZXIgYmctbGlnaHQnPlxuICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fSBocmVmPVwiL1wiID48aDEgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0c19wYWdlX2hlYWRlcn0+TUFLSTwvaDE+PC9hPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wgZC1mbGV4IGZsZXgtY29sdW1uIHB5LTUgbXQtNCc+XG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG10LTVcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbnB1dEdyb3VwRmlsZTAxXCIgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaG9zZW59IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbXQtNVwiPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHNoYWRvdy1ub25lXCIgcGxhY2Vob2xkZXI9J1R5cGUgaW4gYSBjYXNlIG5vdGUgbmFycmF0aXZlLi4uJyByb3dzPXsxMH0gb25DaGFuZ2U9eyhlKSA9PiBzZXROYXJyYXRpdmVJbnB1dChlLnRhcmdldC52YWx1ZSl9PntuYXJyYXRpdmVJbnB1dH08L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtcmlnaHQnPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYW5nZXIgdGV4dC1saWdodCBmbG9hdC1yaWdodCBtdC0zJyBkaXNhYmxlZD17IW5hcnJhdGl2ZUlucHV0fSBvbkNsaWNrPXtoYW5kbGVHZW5lcmF0ZX0+R2VuZXJhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge3Jlc3VsdFxuICAgICAgICAgICYmXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cbiAgICAgICAgICAgIC8vIHRyYW5zaXRpb249e3sgZHVyYXRpb246IC41IH19XG4gICAgICAgICAgICAvLyBhbmltYXRlPXt7IHg6IDEwMCB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiBcInNwcmluZ1wiLCBzdGlmZm5lc3M6IDUwIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9J2NvbC04IGJvcmRlci1sZWZ0IGJvcmRlci1kYXJrIHB5LTUnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5SZXN1bHRzPC9oMT5cbiAgICAgICAgICAgIDxUYWJsbGwgZGF0YT17cmVzdWx0fSAvPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHNcblxuXG4vLyBvblN1Ym1pdD17b25TdWJtaXR9XG5cbi8vIDxpbnB1dFxuLy8gdHlwZT1cInRleHRcIlxuLy8gbmFtZT1cIm5hcnJhdGl2ZVwiXG4vLyBwbGFjZWhvbGRlcj1cIkVudGVyIGEgbmFycmF0aXZlXCJcbi8vIHZhbHVlPXtuYXJyYXRpdmVJbnB1dH1cbi8vIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFycmF0aXZlSW5wdXQoZS50YXJnZXQudmFsdWUpfVxuLy8gLz5cbi8vIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHZW5lcmF0ZVwiIC8+Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiVGFibGxsIiwiY29udmVydERhdGEiLCJtb3Rpb24iLCJpbnB1dERhdGEiLCJuYW1lIiwiYWdlIiwiZ2VuZGVyIiwib3V0cHV0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJSZXN1bHRzIiwiZmlsZURhdGEiLCJzZXRGaWxlRGF0YSIsInRleHQiLCJzZXRUZXh0IiwibmFycmF0aXZlSW5wdXQiLCJzZXROYXJyYXRpdmVJbnB1dCIsInJlc3VsdCIsInNldFJlc3VsdCIsInNob3ciLCJzZXRTaG93IiwiaGFuZGxlRmlsZVJlYWQiLCJlIiwiY29udGVudCIsInRhcmdldCIsImhhbmRsZUZpbGVDaG9zZW4iLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwicmVhZEFzVGV4dCIsImZpbGVzIiwiaGFuZGxlVGV4dCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJoYW5kbGVHZW5lcmF0ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYXJyYXRpdmUiLCJkYXRhIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwiRXJyb3IiLCJ0bXAiLCJhbGVydCIsIm1lc3NhZ2UiLCJvblN1Ym1pdCIsImV2ZW50IiwibWFpbiIsImNsYXNzTmFtZSIsImEiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwiaHJlZiIsImgxIiwicmVzdWx0c19wYWdlX2hlYWRlciIsImRpdiIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInJvd3MiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJpbml0aWFsIiwib3BhY2l0eSIsInNjYWxlIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJzdGlmZm5lc3MiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/results.tsx\n"));

/***/ })

});