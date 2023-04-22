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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/index.module.css */ \"./styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table */ \"./pages/table.tsx\");\n/* harmony import */ var _mui_icons_material_LocalPrintshopOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/LocalPrintshopOutlined */ \"./node_modules/@mui/icons-material/LocalPrintshopOutlined.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfjs-dist */ \"./node_modules/pdfjs-dist/build/pdf.js\");\n/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var pizzip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pizzip */ \"./node_modules/pizzip/js/index.js\");\n/* harmony import */ var pizzip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pizzip__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var docxtemplater__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! docxtemplater */ \"./node_modules/docxtemplater/js/docxtemplater.js\");\n/* harmony import */ var docxtemplater__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(docxtemplater__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_speech_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-speech-kit */ \"./node_modules/react-speech-kit/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Results = ()=>{\n    _s();\n    const [fileData, setFileData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [narrativeInput, setNarrativeInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // const [value, setValue] = useState('');\n    const { listen , stop  } = (0,react_speech_kit__WEBPACK_IMPORTED_MODULE_6__.useSpeechRecognition)({\n        onResult: (result)=>{\n            setNarrativeInput(result);\n        }\n    });\n    const handleFileRead = (e)=>{\n        const content = e.target.result;\n        setNarrativeInput(content);\n    };\n    const handleFileChosen = async (e)=>{\n        const file = e.target.files[0];\n        const fileType = file.type;\n        if (!file) {\n            alert(\"Please select a file\");\n            return;\n        } else if (fileType === \"application/pdf\") {\n            const text = convertPdfToText(file);\n            setNarrativeInput(text);\n        } else if (fileType === \"application/vnd.openxmlformats-officedocument.wordprocessingml.document\") {\n            const reader = new FileReader();\n            reader.onload = (e)=>{\n                const content = e.target.result;\n                var doc = new (docxtemplater__WEBPACK_IMPORTED_MODULE_5___default())(new (pizzip__WEBPACK_IMPORTED_MODULE_4___default())(content), {\n                    delimiters: {\n                        start: \"12op1j2po1j2poj1po\",\n                        end: \"op21j4po21jp4oj1op24j\"\n                    }\n                });\n                var text = doc.getFullText();\n                setNarrativeInput(text);\n            };\n            reader.readAsBinaryString(file);\n        } else {\n            const reader = new FileReader();\n            reader.onload = (event)=>{\n                const text = event.target.result;\n                setNarrativeInput(text);\n            };\n            reader.readAsText(file);\n        }\n    };\n    const convertPdfToText = (file)=>{\n        const reader = new FileReader();\n        reader.onload = async (event)=>{\n            const data = event.target.result;\n            const arrayBuffer = data;\n            const pdf = await pdfjs_dist__WEBPACK_IMPORTED_MODULE_3___default().getDocument({\n                data: arrayBuffer\n            }).promise;\n            let text = \"\";\n            for(let i = 1; i <= pdf.numPages; i++){\n                const page = await pdf.getPage(i);\n                const content = await page.getTextContent();\n                text += content.items.map((item)=>item[\"str\"]).join(\"\");\n            }\n        };\n        reader.readAsArrayBuffer(file);\n    };\n    async function handleGenerate(e) {\n        e.preventDefault();\n        try {\n            const response = await fetch(\"/api/data_extractor\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    narrative: narrativeInput\n                })\n            });\n            const data = await response.json();\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            const tmp = data.result;\n            setResult(data.result);\n        } catch (error) {\n            alert(error.message);\n        }\n    }\n    const printPage = ()=>{\n        window.print();\n    };\n    async function onSubmit(event) {\n        event.preventDefault();\n        try {\n            const response = await fetch(\"/api/data_extractor\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    narrative: narrativeInput\n                })\n            });\n            const data = await response.json();\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            setResult(data.result);\n        } catch (error) {\n            alert(error.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                style: {\n                    textDecoration: \"none\"\n                },\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().results_page_header),\n                    children: \"MAKI\"\n                }, void 0, false, {\n                    fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                    lineNumber: 136,\n                    columnNumber: 55\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col d-flex flex-column py-5 mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"input-group mt-5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"file\",\n                                            accept: \".txt,.docx\",\n                                            className: \"form-control\",\n                                            id: \"inputGroupFile01\",\n                                            onChange: handleFileChosen\n                                        }, void 0, false, {\n                                            fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                            lineNumber: 141,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onMouseEnter: listen,\n                                            onMouseLeave: stop,\n                                            children: \"\\uD83C\\uDFA4\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                            lineNumber: 142,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                    lineNumber: 140,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"input-group mt-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        className: \"form-control shadow-none\",\n                                        placeholder: \"Type in a case note narrative...\",\n                                        rows: 10,\n                                        onChange: (e)=>setNarrativeInput(e.target.value),\n                                        value: narrativeInput\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                        lineNumber: 147,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                    lineNumber: 146,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"align-items-right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"btn btn-danger text-light float-right mt-3\",\n                                        disabled: !narrativeInput && !fileData,\n                                        onClick: handleGenerate,\n                                        children: \"Generate\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                        lineNumber: 150,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                    lineNumber: 149,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                            lineNumber: 139,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                        lineNumber: 138,\n                        columnNumber: 9\n                    }, undefined),\n                    result && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                        initial: {\n                            opacity: 0,\n                            scale: 0\n                        },\n                        animate: {\n                            opacity: 1,\n                            scale: 1\n                        },\n                        transition: {\n                            type: \"spring\",\n                            stiffness: 50\n                        },\n                        className: \"col-lg-8 border-left border-dark py-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex flex-row justify-content-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                        children: \"Results\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                        lineNumber: 163,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn btn-outline-secondary\",\n                                            onClick: printPage,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_LocalPrintshopOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                fontSize: \"medium\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                                lineNumber: 164,\n                                                columnNumber: 87\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                            lineNumber: 164,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                        lineNumber: 164,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                lineNumber: 162,\n                                columnNumber: 12\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                data: result\n                            }, void 0, false, {\n                                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                                lineNumber: 166,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                        lineNumber: 157,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/temiloluwaige/Code/nextJS/MAKI/MAKI/pages/results.tsx\",\n        lineNumber: 135,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Results, \"6QjV6QWJHegj95BcUual/Y3TRJI=\", false, function() {\n    return [\n        react_speech_kit__WEBPACK_IMPORTED_MODULE_6__.useSpeechRecognition\n    ];\n});\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDRFQUFDdEUsa0ZBQTBCQTtnREFBQ3dHLFVBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBRS9HLDhEQUFDekcsOENBQUtBO2dDQUFDd0MsTUFBTTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekI7R0FoS01MOztRQUtxQkQsa0VBQW9CQTs7O0tBTHpDQztBQWtLTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXN1bHRzLnRzeD81NjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL2luZGV4Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IFRhYmxlIGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IExvY2FsUHJpbnRzaG9wT3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9jYWxQcmludHNob3BPdXRsaW5lZCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBwZGZqc0xpYiBmcm9tICdwZGZqcy1kaXN0JztcbmltcG9ydCBQaXpaaXAgZnJvbSAncGl6emlwJztcbmltcG9ydCBEb2N4dGVtcGxhdGVyIGZyb20gJ2RvY3h0ZW1wbGF0ZXInO1xuaW1wb3J0IHsgdXNlU3BlZWNoUmVjb2duaXRpb24gfSBmcm9tICdyZWFjdC1zcGVlY2gta2l0JztcblxuXG5jb25zdCBSZXN1bHRzID0gKCkgPT4ge1xuICBjb25zdCBbZmlsZURhdGEsIHNldEZpbGVEYXRhXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW25hcnJhdGl2ZUlucHV0LCBzZXROYXJyYXRpdmVJbnB1dF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCk7XG4gIC8vIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCB7IGxpc3Rlbiwgc3RvcCB9ID0gdXNlU3BlZWNoUmVjb2duaXRpb24oe1xuXG4gICAgb25SZXN1bHQ6IChyZXN1bHQpID0+IHtcbiAgICAgIHNldE5hcnJhdGl2ZUlucHV0KHJlc3VsdClcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlRmlsZVJlYWQgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LnJlc3VsdFxuICAgIHNldE5hcnJhdGl2ZUlucHV0KGNvbnRlbnQpXG4gIH1cblxuICBjb25zdCBoYW5kbGVGaWxlQ2hvc2VuID0gYXN5bmMgKGU6IGFueSkgPT4ge1xuXG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGNvbnN0IGZpbGVUeXBlID0gZmlsZS50eXBlO1xuXG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICBhbGVydCgnUGxlYXNlIHNlbGVjdCBhIGZpbGUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGZpbGVUeXBlID09PSAnYXBwbGljYXRpb24vcGRmJykge1xuXG4gICAgICBjb25zdCB0ZXh0ID0gY29udmVydFBkZlRvVGV4dChmaWxlKVxuICAgICAgc2V0TmFycmF0aXZlSW5wdXQodGV4dClcblxuICAgIH0gZWxzZSBpZiAoZmlsZVR5cGUgPT09ICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCcpIHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgdmFyIGRvYyA9IG5ldyBEb2N4dGVtcGxhdGVyKG5ldyBQaXpaaXAoY29udGVudCksIHsgZGVsaW1pdGVyczogeyBzdGFydDogJzEyb3AxajJwbzFqMnBvajFwbycsIGVuZDogJ29wMjFqNHBvMjFqcDRvajFvcDI0aicgfSB9KTtcbiAgICAgICAgdmFyIHRleHQgPSBkb2MuZ2V0RnVsbFRleHQoKTtcbiAgICAgICAgc2V0TmFycmF0aXZlSW5wdXQodGV4dCk7XG5cbiAgICAgIH07XG4gICAgICByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKGZpbGUpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dCA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgIHNldE5hcnJhdGl2ZUlucHV0KHRleHQpO1xuICAgICAgfTtcblxuICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgfVxuXG4gIH1cblxuICBjb25zdCBjb252ZXJ0UGRmVG9UZXh0ID0gKGZpbGUpID0+IHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5vbmxvYWQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBkYXRhO1xuICAgICAgY29uc3QgcGRmID0gYXdhaXQgcGRmanNMaWIuZ2V0RG9jdW1lbnQoeyBkYXRhOiBhcnJheUJ1ZmZlciB9KS5wcm9taXNlO1xuICAgICAgbGV0IHRleHQgPSAnJztcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBkZi5udW1QYWdlczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBwZGYuZ2V0UGFnZShpKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHBhZ2UuZ2V0VGV4dENvbnRlbnQoKTtcbiAgICAgICAgdGV4dCArPSBjb250ZW50Lml0ZW1zLm1hcCgoaXRlbSkgPT4gaXRlbVsnc3RyJ10pLmpvaW4oJycpO1xuICAgICAgfVxuICAgIH07XG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICB9O1xuXG5cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVHZW5lcmF0ZShlOiBhbnkpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZGF0YV9leHRyYWN0b3InLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYXJyYXRpdmU6IG5hcnJhdGl2ZUlucHV0IH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgdGhyb3cgZGF0YS5lcnJvciB8fCBuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0bXAgPSBkYXRhLnJlc3VsdFxuICAgICAgc2V0UmVzdWx0KGRhdGEucmVzdWx0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcHJpbnRQYWdlID0gKCkgPT4ge1xuICAgIHdpbmRvdy5wcmludCgpO1xuICB9XG5cblxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZGF0YV9leHRyYWN0b3InLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYXJyYXRpdmU6IG5hcnJhdGl2ZUlucHV0IH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgdGhyb3cgZGF0YS5lcnJvciB8fCBuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuXG4gICAgICBzZXRSZXN1bHQoZGF0YS5yZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fSBocmVmPScvJyA+PGgxIGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdHNfcGFnZV9oZWFkZXJ9Pk1BS0k8L2gxPjwvYT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sIGQtZmxleCBmbGV4LWNvbHVtbiBweS01IG10LTQnPlxuICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWdyb3VwIG10LTUnPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nZmlsZScgYWNjZXB0PScudHh0LC5kb2N4JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgaWQ9J2lucHV0R3JvdXBGaWxlMDEnIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hvc2VufSAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uTW91c2VFbnRlcj17bGlzdGVufSBvbk1vdXNlTGVhdmU9e3N0b3B9PlxuICAgICAgICAgICAgICAgIPCfjqRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cCBtdC01Jz5cbiAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIHNoYWRvdy1ub25lJyBwbGFjZWhvbGRlcj0nVHlwZSBpbiBhIGNhc2Ugbm90ZSBuYXJyYXRpdmUuLi4nIHJvd3M9ezEwfSBvbkNoYW5nZT17KGUpID0+IHNldE5hcnJhdGl2ZUlucHV0KGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e25hcnJhdGl2ZUlucHV0fT48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxpZ24taXRlbXMtcmlnaHQnPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYW5nZXIgdGV4dC1saWdodCBmbG9hdC1yaWdodCBtdC0zJyBkaXNhYmxlZD17IW5hcnJhdGl2ZUlucHV0ICYmICFmaWxlRGF0YX0gb25DbGljaz17aGFuZGxlR2VuZXJhdGV9PkdlbmVyYXRlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtyZXN1bHRcbiAgICAgICAgICAmJlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IHR5cGU6ICdzcHJpbmcnLCBzdGlmZm5lc3M6IDUwIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9J2NvbC1sZy04IGJvcmRlci1sZWZ0IGJvcmRlci1kYXJrIHB5LTUnXG4gICAgICAgICAgPjxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4nPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlJlc3VsdHM8L2gxPlxuICAgICAgICAgICAgICA8c3Bhbj48YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeScgb25DbGljaz17cHJpbnRQYWdlfT48TG9jYWxQcmludHNob3BPdXRsaW5lZEljb24gZm9udFNpemU9J21lZGl1bScgLz48L2J1dHRvbj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxUYWJsZSBkYXRhPXtyZXN1bHR9IC8+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0czsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJUYWJsZSIsIkxvY2FsUHJpbnRzaG9wT3V0bGluZWRJY29uIiwibW90aW9uIiwicGRmanNMaWIiLCJQaXpaaXAiLCJEb2N4dGVtcGxhdGVyIiwidXNlU3BlZWNoUmVjb2duaXRpb24iLCJSZXN1bHRzIiwiZmlsZURhdGEiLCJzZXRGaWxlRGF0YSIsIm5hcnJhdGl2ZUlucHV0Iiwic2V0TmFycmF0aXZlSW5wdXQiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJsaXN0ZW4iLCJzdG9wIiwib25SZXN1bHQiLCJoYW5kbGVGaWxlUmVhZCIsImUiLCJjb250ZW50IiwidGFyZ2V0IiwiaGFuZGxlRmlsZUNob3NlbiIsImZpbGUiLCJmaWxlcyIsImZpbGVUeXBlIiwidHlwZSIsImFsZXJ0IiwidGV4dCIsImNvbnZlcnRQZGZUb1RleHQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZG9jIiwiZGVsaW1pdGVycyIsInN0YXJ0IiwiZW5kIiwiZ2V0RnVsbFRleHQiLCJyZWFkQXNCaW5hcnlTdHJpbmciLCJldmVudCIsInJlYWRBc1RleHQiLCJkYXRhIiwiYXJyYXlCdWZmZXIiLCJwZGYiLCJnZXREb2N1bWVudCIsInByb21pc2UiLCJpIiwibnVtUGFnZXMiLCJwYWdlIiwiZ2V0UGFnZSIsImdldFRleHRDb250ZW50IiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiam9pbiIsInJlYWRBc0FycmF5QnVmZmVyIiwiaGFuZGxlR2VuZXJhdGUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYXJyYXRpdmUiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJFcnJvciIsInRtcCIsIm1lc3NhZ2UiLCJwcmludFBhZ2UiLCJ3aW5kb3ciLCJwcmludCIsIm9uU3VibWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJocmVmIiwiaDEiLCJyZXN1bHRzX3BhZ2VfaGVhZGVyIiwiZm9ybSIsImlucHV0IiwiYWNjZXB0IiwiaWQiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJyb3dzIiwidmFsdWUiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJpbml0aWFsIiwib3BhY2l0eSIsInNjYWxlIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJzdGlmZm5lc3MiLCJ0aXRsZSIsInNwYW4iLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/results.tsx\n"));

/***/ })

});