(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2322:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__K2D_de1d0b', '__K2D_Fallback_de1d0b'","fontWeight":500,"fontStyle":"normal"},
	"className": "__className_de1d0b"
};


/***/ }),

/***/ 9544:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "layout_title__PDJsI"
};


/***/ }),

/***/ 5411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"pages\\_app.js","import":"K2D","arguments":[{"subsets":["latin"],"weight":"500"}],"variableName":"k2d"}
var target_path_pages_app_js_import_K2D_arguments_subsets_latin_weight_500_variableName_k2d_ = __webpack_require__(2322);
var target_path_pages_app_js_import_K2D_arguments_subsets_latin_weight_500_variableName_k2d_default = /*#__PURE__*/__webpack_require__.n(target_path_pages_app_js_import_K2D_arguments_subsets_latin_weight_500_variableName_k2d_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/maxim-berg-ENIaPZytqzE-unsplash.jpg
/* harmony default export */ const maxim_berg_ENIaPZytqzE_unsplash = ({"src":"/_next/static/media/maxim-berg-ENIaPZytqzE-unsplash.782b5393.jpg","height":3704,"width":2048,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAKwSl//EABgQAQADAQAAAAAAAAAAAAAAAAEAAwQy/9oACAEBAAE/AM2cKKgTkn//xAAaEQACAgMAAAAAAAAAAAAAAAABAwACBCJC/9oACAECAQE/AGZTgy+3Rn//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQMhIv/aAAgBAwEBPwCN4VI//9k=","blurWidth":4,"blurHeight":8});
;// CONCATENATED MODULE: ./components/Layout.jsx



const Layout = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            style: {
                backgroundImage: `url(${maxim_berg_ENIaPZytqzE_unsplash.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                minHeight: "100vh"
            },
            children: children
        })
    });
};
/* harmony default export */ const components_Layout = (Layout);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/layout.module.css
var layout_module = __webpack_require__(9544);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
;// CONCATENATED MODULE: ./pages/_app.js






function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_Layout, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                    className: `${(layout_module_default()).title} ${(target_path_pages_app_js_import_K2D_arguments_subsets_latin_weight_500_variableName_k2d_default()).className}`,
                    children: [
                        "PRE",
                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                        "PARTY"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664], () => (__webpack_exec__(5411)));
module.exports = __webpack_exports__;

})();