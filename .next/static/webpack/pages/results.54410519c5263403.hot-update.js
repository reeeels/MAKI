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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/index.module.css */ \"./styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Tablll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tablll */ \"./pages/Tablll.tsx\");\n/* harmony import */ var _data_conversion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data_conversion */ \"./pages/data_conversion.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst inputData = {\n    name: [\n        \"Anom\",\n        \"Megha\",\n        \"Subham\"\n    ],\n    age: [\n        \"19\",\n        \"19\",\n        \"25\"\n    ],\n    gender: [\n        \"Male\",\n        \"Female\",\n        \"Male\"\n    ]\n};\nconst outputData = (0,_data_conversion__WEBPACK_IMPORTED_MODULE_4__.convertData)(inputData);\nconsole.log(outputData);\nconst Results = ()=>{\n    _s();\n    const [fileData, setFileData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [narrativeInput, setNarrativeInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const handleFileRead = (e)=>{\n        const content = e.target.result;\n        setFileData(content);\n    };\n    const handleFileChosen = (e)=>{\n        const reader = new FileReader();\n        reader.onloadend = handleFileRead;\n        reader.readAsText(e.target.files[0]);\n    };\n    const handleText = (e)=>{\n        e.preventDefault();\n        setText(e.target.value);\n    };\n    // const handleGenerate = (e: any) => {\n    //     e.preventDefault()\n    //     console.log(text)\n    // }\n    async function handleGenerate(e) {\n        e.preventDefault();\n        try {\n            const response = await fetch(\"/api/data_extractor\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                // body: JSON.stringify(animalInput ),\n                body: JSON.stringify({\n                    narrative: narrativeInput\n                })\n            });\n            const data = await response.json();\n            console.log(data);\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            const tmp = data.result;\n            // const parsed = JSON.parse(tmp);\n            // console.log(typeof parsed)\n            // const converted_data = convertData(parsed)\n            // const stringify = JSON.stringify(converted_data);\n            // const table = arrayToTable(converted_data);\n            // console.log(table)\n            setResult(data.result);\n            setNarrativeInput(\"\");\n        } catch (error) {\n            // Consider implementing your own error handling logic here\n            console.error(error);\n            alert(error.message);\n        }\n    }\n    async function onSubmit(event) {\n        event.preventDefault();\n        try {\n            const response = await fetch(\"/api/data_extractor\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                // body: JSON.stringify(animalInput ),\n                body: JSON.stringify({\n                    narrative: narrativeInput\n                })\n            });\n            const data = await response.json();\n            console.log(data);\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            setResult(data.result);\n            setNarrativeInput(\"\");\n        } catch (error) {\n            // Consider implementing your own error handling logic here\n            console.error(error);\n            alert(error.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"width=device-width, initial-scale=1\"\n                }, void 0, false, {\n                    fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        style: {\n                            textDecoration: \"none\"\n                        },\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().results_page_header),\n                            children: \"MAKI\"\n                        }, void 0, false, {\n                            fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 57\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col d-flex flex-column py-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"input-group mt-12\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"file\",\n                                                className: \"form-control\",\n                                                id: \"inputGroupFile01\",\n                                                onChange: handleFileChosen\n                                            }, void 0, false, {\n                                                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                                lineNumber: 132,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                            lineNumber: 131,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"input-group mt-5\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                className: \"form-control shadow-none\",\n                                                placeholder: \"Type in a case note narrative...\",\n                                                rows: 12,\n                                                onChange: (e)=>setNarrativeInput(e.target.value),\n                                                children: narrativeInput\n                                            }, void 0, false, {\n                                                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                                lineNumber: 135,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                            lineNumber: 134,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"align-items-right\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"btn btn-danger text-light float-right mt-3\",\n                                                disabled: !narrativeInput,\n                                                onClick: handleGenerate,\n                                                children: \"Generate\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                                lineNumber: 138,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                            lineNumber: 137,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                    lineNumber: 130,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 11\n                            }, undefined),\n                            result && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                initial: {\n                                    opacity: 0,\n                                    scale: 2\n                                },\n                                animate: {\n                                    opacity: 1,\n                                    scale: 1\n                                },\n                                transition: {\n                                    duration: .5\n                                },\n                                className: \"col border-left border-dark py-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                                        children: \"Results\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                        lineNumber: 151,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tablll__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        data: result\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                        lineNumber: 152,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                lineNumber: 145,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Results, \"WiPVYemd2NPbyTYiGPGcrDU/9BE=\");\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFLeEhqQix3QkFFQyw4REFBQ2YscURBQVU7Z0NBQ1R3RSxTQUFTO29DQUFFQyxTQUFTO29DQUFHQyxPQUFPO2dDQUFFO2dDQUNoQ0MsU0FBUztvQ0FBRUYsU0FBUztvQ0FBR0MsT0FBTztnQ0FBRTtnQ0FDaENFLFlBQVk7b0NBQUVDLFVBQVU7Z0NBQUc7Z0NBQzNCeEIsV0FBVTs7a0RBRVIsOERBQUNLO3dDQUFHTCxXQUFXeEQsdUVBQVk7a0RBQUU7Ozs7OztrREFDN0IsOERBQUNDLCtDQUFNQTt3Q0FBQzJDLE1BQU0xQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUI7R0FwSU1QO0tBQUFBO0FBc0lOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Jlc3VsdHMudHN4PzU2MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBwZGZqcyBmcm9tICdwZGZqcy1kaXN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9pbmRleC5tb2R1bGUuY3NzJ1xuLy8gaW1wb3J0IFRhYmxlIGZyb20gJy4vdGFibGUnXG5pbXBvcnQgSnNvblRhYmxlIGZyb20gJy4vSnNvblRhYmxlJztcbmltcG9ydCB7IGFycmF5VG9UYWJsZSB9IGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IFRhYmxsbCBmcm9tICcuL1RhYmxsbCc7XG5cblxuaW1wb3J0IHsgY29udmVydERhdGEgfSBmcm9tICcuL2RhdGFfY29udmVyc2lvbic7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgaW5wdXREYXRhID0ge1xuICBuYW1lOiBbJ0Fub20nLCAnTWVnaGEnLCAnU3ViaGFtJ10sXG4gIGFnZTogWycxOScsICcxOScsICcyNSddLFxuICBnZW5kZXI6IFsnTWFsZScsICdGZW1hbGUnLCAnTWFsZSddLFxufTtcblxuY29uc3Qgb3V0cHV0RGF0YSA9IGNvbnZlcnREYXRhKGlucHV0RGF0YSk7XG5cbmNvbnNvbGUubG9nKG91dHB1dERhdGEpO1xuXG5cblxuXG5jb25zdCBSZXN1bHRzID0gKCkgPT4ge1xuICBjb25zdCBbZmlsZURhdGEsIHNldEZpbGVEYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtuYXJyYXRpdmVJbnB1dCwgc2V0TmFycmF0aXZlSW5wdXRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgaGFuZGxlRmlsZVJlYWQgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LnJlc3VsdFxuICAgIHNldEZpbGVEYXRhKGNvbnRlbnQpXG5cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUZpbGVDaG9zZW4gPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSBoYW5kbGVGaWxlUmVhZFxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGUudGFyZ2V0LmZpbGVzWzBdKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlVGV4dCA9IChlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgLy8gY29uc3QgaGFuZGxlR2VuZXJhdGUgPSAoZTogYW55KSA9PiB7XG4gIC8vICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgLy8gICAgIGNvbnNvbGUubG9nKHRleHQpXG4gIC8vIH1cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVHZW5lcmF0ZShlOiBhbnkpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2RhdGFfZXh0cmFjdG9yXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICAvLyBib2R5OiBKU09OLnN0cmluZ2lmeShhbmltYWxJbnB1dCApLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hcnJhdGl2ZTogbmFycmF0aXZlSW5wdXQgfSksXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgdGhyb3cgZGF0YS5lcnJvciB8fCBuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0bXAgPSBkYXRhLnJlc3VsdFxuICAgICAgLy8gY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZSh0bXApO1xuICAgICAgLy8gY29uc29sZS5sb2codHlwZW9mIHBhcnNlZClcbiAgICAgIC8vIGNvbnN0IGNvbnZlcnRlZF9kYXRhID0gY29udmVydERhdGEocGFyc2VkKVxuICAgICAgLy8gY29uc3Qgc3RyaW5naWZ5ID0gSlNPTi5zdHJpbmdpZnkoY29udmVydGVkX2RhdGEpO1xuXG4gICAgICAvLyBjb25zdCB0YWJsZSA9IGFycmF5VG9UYWJsZShjb252ZXJ0ZWRfZGF0YSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0YWJsZSlcblxuXG4gICAgICBzZXRSZXN1bHQoZGF0YS5yZXN1bHQpO1xuICAgICAgc2V0TmFycmF0aXZlSW5wdXQoXCJcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIENvbnNpZGVyIGltcGxlbWVudGluZyB5b3VyIG93biBlcnJvciBoYW5kbGluZyBsb2dpYyBoZXJlXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG5cbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9kYXRhX2V4dHJhY3RvclwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gYm9keTogSlNPTi5zdHJpbmdpZnkoYW5pbWFsSW5wdXQgKSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYXJyYXRpdmU6IG5hcnJhdGl2ZUlucHV0IH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIHRocm93IGRhdGEuZXJyb3IgfHwgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cblxuICAgICAgc2V0UmVzdWx0KGRhdGEucmVzdWx0KTtcbiAgICAgIHNldE5hcnJhdGl2ZUlucHV0KFwiXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBDb25zaWRlciBpbXBsZW1lbnRpbmcgeW91ciBvd24gZXJyb3IgaGFuZGxpbmcgbG9naWMgaGVyZVxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fSBocmVmPVwiL1wiID48aDEgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0c19wYWdlX2hlYWRlcn0+TUFLSTwvaDE+PC9hPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sIGQtZmxleCBmbGV4LWNvbHVtbiBweS01Jz5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG10LTEyXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbnB1dEdyb3VwRmlsZTAxXCIgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaG9zZW59IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG10LTVcIj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIHNoYWRvdy1ub25lXCIgcGxhY2Vob2xkZXI9J1R5cGUgaW4gYSBjYXNlIG5vdGUgbmFycmF0aXZlLi4uJyByb3dzPXsxMn0gb25DaGFuZ2U9eyhlKSA9PiBzZXROYXJyYXRpdmVJbnB1dChlLnRhcmdldC52YWx1ZSl9PntuYXJyYXRpdmVJbnB1dH08L3RleHRhcmVhPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsaWduLWl0ZW1zLXJpZ2h0Jz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYW5nZXIgdGV4dC1saWdodCBmbG9hdC1yaWdodCBtdC0zJyBkaXNhYmxlZD17IW5hcnJhdGl2ZUlucHV0fSBvbkNsaWNrPXtoYW5kbGVHZW5lcmF0ZX0+R2VuZXJhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7cmVzdWx0XG4gICAgICAgICAgICAmJlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMiB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IC41IH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nY29sIGJvcmRlci1sZWZ0IGJvcmRlci1kYXJrIHB5LTUnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5SZXN1bHRzPC9oMT5cbiAgICAgICAgICAgICAgICA8VGFibGxsIGRhdGE9e3Jlc3VsdH0gLz5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHNcblxuXG4vLyBvblN1Ym1pdD17b25TdWJtaXR9XG5cbi8vIDxpbnB1dFxuLy8gdHlwZT1cInRleHRcIlxuLy8gbmFtZT1cIm5hcnJhdGl2ZVwiXG4vLyBwbGFjZWhvbGRlcj1cIkVudGVyIGEgbmFycmF0aXZlXCJcbi8vIHZhbHVlPXtuYXJyYXRpdmVJbnB1dH1cbi8vIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFycmF0aXZlSW5wdXQoZS50YXJnZXQudmFsdWUpfVxuLy8gLz5cbi8vIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHZW5lcmF0ZVwiIC8+Il0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlRhYmxsbCIsImNvbnZlcnREYXRhIiwibW90aW9uIiwiaW5wdXREYXRhIiwibmFtZSIsImFnZSIsImdlbmRlciIsIm91dHB1dERhdGEiLCJjb25zb2xlIiwibG9nIiwiUmVzdWx0cyIsImZpbGVEYXRhIiwic2V0RmlsZURhdGEiLCJ0ZXh0Iiwic2V0VGV4dCIsIm5hcnJhdGl2ZUlucHV0Iiwic2V0TmFycmF0aXZlSW5wdXQiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJzaG93Iiwic2V0U2hvdyIsImhhbmRsZUZpbGVSZWFkIiwiZSIsImNvbnRlbnQiLCJ0YXJnZXQiLCJoYW5kbGVGaWxlQ2hvc2VuIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlYWRBc1RleHQiLCJmaWxlcyIsImhhbmRsZVRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiaGFuZGxlR2VuZXJhdGUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFycmF0aXZlIiwiZGF0YSIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsIkVycm9yIiwidG1wIiwiYWxlcnQiLCJtZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsIm1ldGEiLCJtYWluIiwiY2xhc3NOYW1lIiwiYSIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJocmVmIiwiaDEiLCJyZXN1bHRzX3BhZ2VfaGVhZGVyIiwiZGl2IiwiZm9ybSIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwicm93cyIsImJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsImluaXRpYWwiLCJvcGFjaXR5Iiwic2NhbGUiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/results.tsx\n"));

/***/ })

});