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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/index.module.css */ \"./styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Tablll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tablll */ \"./pages/Tablll.tsx\");\n/* harmony import */ var _data_conversion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data_conversion */ \"./pages/data_conversion.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n// import Table from './table'\n// import JsonTable from './JsonTable';\n// import { arrayToTable } from './table';\n\n\n\nconst inputData = {\n    name: [\n        \"Anom\",\n        \"Megha\",\n        \"Subham\"\n    ],\n    age: [\n        \"19\",\n        \"19\",\n        \"25\"\n    ],\n    gender: [\n        \"Male\",\n        \"Female\",\n        \"Male\"\n    ]\n};\nconst outputData = (0,_data_conversion__WEBPACK_IMPORTED_MODULE_3__.convertData)(inputData);\nconsole.log(outputData);\nconst Results = ()=>{\n    _s();\n    const [fileData, setFileData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [narrativeInput, setNarrativeInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleFileRead = (e)=>{\n        const content = e.target.result;\n        setFileData(content);\n    };\n    const handleFileChosen = (e)=>{\n        const reader = new FileReader();\n        reader.onloadend = handleFileRead;\n        reader.readAsText(e.target.files[0]);\n    };\n    const handleText = (e)=>{\n        e.preventDefault();\n        setText(e.target.value);\n    };\n    // const handleGenerate = (e: any) => {\n    //     e.preventDefault()\n    //     console.log(text)\n    // }\n    async function handleGenerate(e) {\n        e.preventDefault();\n        try {\n            const response = await fetch(\"/api/data_extractor\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                // body: JSON.stringify(animalInput ),\n                body: JSON.stringify({\n                    narrative: narrativeInput\n                })\n            });\n            const data = await response.json();\n            console.log(data);\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            const tmp = data.result;\n            setResult(data.result);\n            setNarrativeInput(\"\");\n        } catch (error) {\n            alert(error.message);\n        }\n    }\n    async function onSubmit(event) {\n        event.preventDefault();\n        try {\n            const response = await fetch(\"/api/data_extractor\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    narrative: narrativeInput\n                })\n            });\n            const data = await response.json();\n            console.log(data);\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            setResult(data.result);\n            setNarrativeInput(\"\");\n        } catch (error) {\n            alert(error.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                style: {\n                    textDecoration: \"none\"\n                },\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().results_page_header),\n                    children: \"MAKI\"\n                }, void 0, false, {\n                    fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 55\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col d-flex flex-column py-5 mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"input-group mt-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"file\",\n                                        className: \"form-control\",\n                                        id: \"inputGroupFile01\",\n                                        onChange: handleFileChosen\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"input-group mt-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        className: \"form-control shadow-none\",\n                                        placeholder: \"Type in a case note narrative...\",\n                                        rows: 10,\n                                        onChange: (e)=>setNarrativeInput(e.target.value),\n                                        children: narrativeInput\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"align-items-right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-danger text-light float-right mt-3\",\n                                        disabled: !narrativeInput,\n                                        onClick: handleGenerate,\n                                        children: \"Generate\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined),\n                    result && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        initial: {\n                            opacity: 0,\n                            scale: 0\n                        },\n                        animate: {\n                            opacity: 1,\n                            scale: 1\n                        },\n                        transition: {\n                            type: \"spring\",\n                            stiffness: 50\n                        },\n                        className: \"col-8 border-left border-dark py-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                                children: \"Results\"\n                            }, void 0, false, {\n                                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                lineNumber: 132,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tablll__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                data: result\n                            }, void 0, false, {\n                                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Results, \"WiPVYemd2NPbyTYiGPGcrDU/9BE=\");\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qiw4REFBQ0MsK0NBQU1BO2dDQUFDMkMsTUFBTTFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUI7R0FqSE1QO0tBQUFBO0FBbUhOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Jlc3VsdHMudHN4PzU2MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBwZGZqcyBmcm9tICdwZGZqcy1kaXN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9pbmRleC5tb2R1bGUuY3NzJ1xuLy8gaW1wb3J0IFRhYmxlIGZyb20gJy4vdGFibGUnXG4vLyBpbXBvcnQgSnNvblRhYmxlIGZyb20gJy4vSnNvblRhYmxlJztcbi8vIGltcG9ydCB7IGFycmF5VG9UYWJsZSB9IGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IFRhYmxsbCBmcm9tICcuL1RhYmxsbCc7XG5cblxuaW1wb3J0IHsgY29udmVydERhdGEgfSBmcm9tICcuL2RhdGFfY29udmVyc2lvbic7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgaW5wdXREYXRhID0ge1xuICBuYW1lOiBbJ0Fub20nLCAnTWVnaGEnLCAnU3ViaGFtJ10sXG4gIGFnZTogWycxOScsICcxOScsICcyNSddLFxuICBnZW5kZXI6IFsnTWFsZScsICdGZW1hbGUnLCAnTWFsZSddLFxufTtcblxuY29uc3Qgb3V0cHV0RGF0YSA9IGNvbnZlcnREYXRhKGlucHV0RGF0YSk7XG5cbmNvbnNvbGUubG9nKG91dHB1dERhdGEpO1xuXG5cblxuXG5jb25zdCBSZXN1bHRzID0gKCkgPT4ge1xuICBjb25zdCBbZmlsZURhdGEsIHNldEZpbGVEYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtuYXJyYXRpdmVJbnB1dCwgc2V0TmFycmF0aXZlSW5wdXRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlRmlsZVJlYWQgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LnJlc3VsdFxuICAgIHNldEZpbGVEYXRhKGNvbnRlbnQpXG5cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUZpbGVDaG9zZW4gPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSBoYW5kbGVGaWxlUmVhZFxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGUudGFyZ2V0LmZpbGVzWzBdKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlVGV4dCA9IChlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgLy8gY29uc3QgaGFuZGxlR2VuZXJhdGUgPSAoZTogYW55KSA9PiB7XG4gIC8vICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgLy8gICAgIGNvbnNvbGUubG9nKHRleHQpXG4gIC8vIH1cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVHZW5lcmF0ZShlOiBhbnkpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZGF0YV9leHRyYWN0b3InLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gYm9keTogSlNPTi5zdHJpbmdpZnkoYW5pbWFsSW5wdXQgKSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYXJyYXRpdmU6IG5hcnJhdGl2ZUlucHV0IH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIHRocm93IGRhdGEuZXJyb3IgfHwgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG1wID0gZGF0YS5yZXN1bHRcbiAgICAgIHNldFJlc3VsdChkYXRhLnJlc3VsdCk7XG4gICAgICBzZXROYXJyYXRpdmVJbnB1dCgnJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG5cbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2RhdGFfZXh0cmFjdG9yJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFycmF0aXZlOiBuYXJyYXRpdmVJbnB1dCB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICB0aHJvdyBkYXRhLmVycm9yIHx8IG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG5cbiAgICAgIHNldFJlc3VsdChkYXRhLnJlc3VsdCk7XG4gICAgICBzZXROYXJyYXRpdmVJbnB1dCgnJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19IGhyZWY9Jy8nID48aDEgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0c19wYWdlX2hlYWRlcn0+TUFLSTwvaDE+PC9hPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wgZC1mbGV4IGZsZXgtY29sdW1uIHB5LTUgbXQtNCc+XG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAgbXQtNSc+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdmaWxlJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgaWQ9J2lucHV0R3JvdXBGaWxlMDEnIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hvc2VufSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAgbXQtNSc+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCBzaGFkb3ctbm9uZScgcGxhY2Vob2xkZXI9J1R5cGUgaW4gYSBjYXNlIG5vdGUgbmFycmF0aXZlLi4uJyByb3dzPXsxMH0gb25DaGFuZ2U9eyhlKSA9PiBzZXROYXJyYXRpdmVJbnB1dChlLnRhcmdldC52YWx1ZSl9PntuYXJyYXRpdmVJbnB1dH08L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtcmlnaHQnPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYW5nZXIgdGV4dC1saWdodCBmbG9hdC1yaWdodCBtdC0zJyBkaXNhYmxlZD17IW5hcnJhdGl2ZUlucHV0fSBvbkNsaWNrPXtoYW5kbGVHZW5lcmF0ZX0+R2VuZXJhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge3Jlc3VsdFxuICAgICAgICAgICYmXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogJ3NwcmluZycsIHN0aWZmbmVzczogNTAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY29sLTggYm9yZGVyLWxlZnQgYm9yZGVyLWRhcmsgcHktNSdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlJlc3VsdHM8L2gxPlxuICAgICAgICAgICAgPFRhYmxsbCBkYXRhPXtyZXN1bHR9IC8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIlRhYmxsbCIsImNvbnZlcnREYXRhIiwibW90aW9uIiwiaW5wdXREYXRhIiwibmFtZSIsImFnZSIsImdlbmRlciIsIm91dHB1dERhdGEiLCJjb25zb2xlIiwibG9nIiwiUmVzdWx0cyIsImZpbGVEYXRhIiwic2V0RmlsZURhdGEiLCJ0ZXh0Iiwic2V0VGV4dCIsIm5hcnJhdGl2ZUlucHV0Iiwic2V0TmFycmF0aXZlSW5wdXQiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJzaG93Iiwic2V0U2hvdyIsImhhbmRsZUZpbGVSZWFkIiwiZSIsImNvbnRlbnQiLCJ0YXJnZXQiLCJoYW5kbGVGaWxlQ2hvc2VuIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlYWRBc1RleHQiLCJmaWxlcyIsImhhbmRsZVRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiaGFuZGxlR2VuZXJhdGUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFycmF0aXZlIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsIkVycm9yIiwidG1wIiwiYWxlcnQiLCJtZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwiaHJlZiIsImgxIiwicmVzdWx0c19wYWdlX2hlYWRlciIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInJvd3MiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJpbml0aWFsIiwib3BhY2l0eSIsInNjYWxlIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJzdGlmZm5lc3MiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/results.tsx\n"));

/***/ })

});