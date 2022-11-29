/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! icons/tasksWhite.svg */ "./src/icons/tasksWhite.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! icons/tasks.svg */ "./src/icons/tasks.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! icons/starWhite.svg */ "./src/icons/starWhite.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! icons/favorite.png */ "./src/icons/favorite.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! icons/codeWhite.svg */ "./src/icons/codeWhite.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! icons/code.svg */ "./src/icons/code.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! icons/ticketWhite.svg */ "./src/icons/ticketWhite.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! icons/ticket.svg */ "./src/icons/ticket.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #1f1f1e;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n\nheader {\n  grid-column: 1/13;\n  height: 10vh;\n  color: white;\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  align-items: center;\n}\n\nnav {\n  grid-column: 1/2;\n  position: sticky;\n  top: 10vh;\n  height: 85vh;\n  width: 200px;\n  padding: 0 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n.nav-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n  height: 200px;\n}\n\n.nav_btn {\n  flex-grow: 1;\n  width: 100%;\n  text-align: center;\n  background-color: transparent;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 30px;\n  border: none;\n  transition: all 0.5s ease-in-out;\n  transform: scale(1);\n}\n\n.nav_btn:hover {\n  box-shadow: 2px 0px 0px 0px rgba(192, 227, 158, 0.75);\n  transform: scale(1.05);\n  background-color: #404040;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  grid-column: 2/13;\n  gap: 10px;\n  background-color: #242624;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n}\n\nmain h2 {\n  font-size: 2rem;\n  color: black;\n  background-color: #C0E39E;\n  display: flex;\n  align-items: center;\n  padding: 20px;\n}\n\n.proj_nav_container {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: center;\n  background-color: #404040;\n}\n\n.proj_nav_container > button {\n  background-color: transparent;\n  border: none;\n  width: 80%;\n  text-align: start;\n  padding: 5px;\n  font-size: 1.3rem;\n}\n\n.master_Modal_Container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(56, 56, 56, 0.863);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#master_Modal {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  background-color: white;\n  --webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n  animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  background-color: #1f1f1e;\n}\n\n#open_Modal {\n  width: 100px;\n  height: 30px;\n  border-radius: 2px;\n  background-color: transparent;\n  border: 3px solid #C0E39E;\n  color: white;\n  box-shadow: 0 0 3px #C0E39E;\n  padding: 5px;\n}\n\n.close-modal {\n  width: 50px;\n  height: 50px;\n  border: none;\n  border-radius: 25px;\n  background-color: red;\n  color: white;\n  box-shadow: 0px 0px 1px 1px black;\n  font-size: 20px;\n}\n\n#master_Modal_Nav {\n  display: flex;\n  justify-content: space-between;\n}\n\n#task_Modal {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border-radius: 5px;\n  align-items: center;\n}\n\n.entry-container {\n  display: flex;\n  gap: 50px;\n}\n\n.text-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.opt-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.task-inpt {\n  width: 300px;\n  background-color: #242624;\n  border: none;\n}\n\n#name_input {\n  height: 30px;\n}\n\n#desc_input {\n  height: 100px;\n}\n\n#date_input {\n  height: 30px;\n  color: rgb(104, 100, 100);\n}\n\n#project_Assign {\n  height: 30px;\n  width: 50px;\n}\n\n#task_submit {\n  width: 50px;\n  padding: 5px;\n  border: none;\n  background-color: green;\n  border-radius: 15px;\n  box-shadow: 1px 1px 3px black;\n}\n\n.task_card {\n  display: grid;\n  grid-template-columns: 1fr 1fr 30px;\n  grid-template-rows: 1fr, 1fr;\n  padding: 10px;\n  color: rgb(255, 255, 255);\n  border: 1px solid #404040;\n  border-radius: 15px;\n  margin-right: 10px;\n  margin-left: 10px;\n  height: 100px;\n  gap: 5px;\n  background-color: #404040;\n  line-height: 1.3em;\n}\n\n.title-container {\n  grid-column: 1/2;\n}\n\n.task-description {\n  grid-row: 2/3;\n  grid-column: 1/3;\n  overflow: hidden;\n}\n\n.task-btn-container {\n  grid-column: 3/4;\n  grid-row: 1/3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.task_Btn {\n  width: 20px;\n  height: 20px;\n  background-color: transparent;\n  background-position: center;\n  background-repeat: no-repeat;\n  border: none;\n}\n\n.task-status-red {\n  background-color: none;\n}\n\n.task-status-green {\n  background-color: none;\n}\n\n.delete-btn {\n  color: 255;\n}\n\n.main-project-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  box-shadow: 0 0 3px rgb(38, 37, 37);\n  background-color: #C0E39E;\n}\n\n#all-tasks {\n  border: none;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n#all-tasks:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n#completed-tasks {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n#completed-tasks:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n#codeBtn {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n\n#codeBtn:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n\n#workBtn {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n\n#workBtn:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n\nfooter {\n  height: 5vh;\n  grid-column: 1/13;\n}\n\n@-webkit-keyframes slide-bottom {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(200px);\n    transform: translateY(200px);\n  }\n}\n@keyframes slide-bottom {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(200px);\n    transform: translateY(200px);\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["*{\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n$dark-background:#1f1f1e;\n$secondary-bg: #242624;\n$primary-text-color: #ffffff;\n$accent-color: #C0E39E;\n$light-bg: #404040;\n$purp-bg : #6e5b6e;\n\n\n\nbody{\n    background-color: $dark-background;\n    display: grid;\n    grid-template-columns: repeat(12,1fr);\n    \n}\n\nheader{\n    grid-column:  1/13;\n    height: 10vh;\n    color: white;\n    position: sticky;\n    top: 0;\n    display: flex;\n    justify-content: space-between;\n    padding:20px;\n    align-items: center;\n    \n    \n\n    \n}\n\nnav{\n    grid-column: 1/2;\n    position: sticky;\n    top: 10vh;\n    height: 85vh;\n    width: 200px;\n    padding:0 10px;\n    display: flex;\n    flex-direction: column;\n    gap:30px;\n\n}\n.nav-buttons{\n    display: flex;\n    flex-direction: column;\n    gap:10px;\n    align-items: center;\n    height: 200px;\n\n}\n\n.nav_btn{\n    flex-grow: 1;\n    width: 100%;\n    \n    \n    text-align: center;\n    background-color: transparent;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 30px;\n    border: none;\n    \n    transition: all 0.5s ease-in-out;\n    transform: scale(1);\n}\n\n.nav_btn:hover{\n    box-shadow: 2px 0px 0px 0px rgba(192,227,158,0.75);\n    transform :scale(1.05);\n    background-color: $light-bg;\n    \n    \n    \n}\n\n\nmain{\n    display: flex;\n    flex-direction: column;\n    \n    grid-column: 2/13;\n    gap:10px;\n    background-color: $secondary-bg;\n    background-position: center;\n    background-repeat: no-repeat ;\n    border-radius: 5px;\n\n    \n    \n}\nmain h2{\n    font-size: 2rem;\n    color: black;\n    background-color: $accent-color;\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    \n\n}\n.proj_nav_container{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    align-items: center;\n    background-color: $light-bg;\n}\n.proj_nav_container>button{\n    background-color: transparent;\n    border: none;\n    width: 80%;\n    text-align: start;\n    padding: 5px;\n    font-size: 1.3rem;\n}\n\n\n.master_Modal_Container{\n    position:absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(56, 56, 56, 0.863);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n\n}\n\n#master_Modal{\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    background-color: white;\n    --webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n\tanimation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n    background-color: $dark-background;\n\n\n}\n\n\n#open_Modal{\n    width: 100px;\n    height: 30px;\n    border-radius: 2px;\n    background-color: transparent;\n    border: 3px solid $accent-color;\n    color: white;\n    box-shadow: 0 0 3px $accent-color;\n    padding: 5px;\n    \n    \n    \n}\n.close-modal{\n    width: 50px;\n    height: 50px;\n    border: none;\n    border-radius: 25px;\n    background-color: red;\n    color: white;\n    box-shadow: 0px 0px 1px 1px black;\n    font-size: 20px;\n    \n    \n}\n#master_Modal_Nav{\n    display:flex;\n    justify-content: space-between;\n}\n\n\n#task_Modal{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border-radius: 5px;\n    \n    align-items: center;\n    \n    \n\n} \n.entry-container{\n    display: flex;\n    gap: 50px;\n    \n    \n}\n.text-form{\n    display: flex;\n    flex-direction: column;\n    gap:20px;\n    \n}\n.opt-form{\n   display: flex;\n   flex-direction: column; \n   gap:20px;\n   \n}\n.task-inpt{\n    width: 300px;\n    background-color: $secondary-bg;\n    border: none;\n    \n\n}\n#name_input{\n    height: 30px;\n}\n#desc_input{\n    height: 100px;\n}\n#date_input{\n    height: 30px;\n    color: rgb(104, 100, 100);\n}\n#project_Assign{\n    height:30px;\n    width: 50px;\n}\n#task_submit{\n    width: 50px;\n    padding: 5px;\n    border: none;\n    background-color: green;\n    border-radius: 15px;\n    box-shadow: 1px 1px 3px black;\n}\n.task_card{\n    display: grid;\n    grid-template-columns: 1fr 1fr 30px;\n    grid-template-rows: 1fr,1fr;\n    padding: 10px;\n    color: rgb(255, 255, 255);\n    border: 1px solid $light-bg;\n    border-radius: 15px;\n    margin-right: 10px;\n    margin-left: 10px;\n    height: 100px;\n    gap: 5px;\n    background-color: #404040;\n    line-height: 1.3em;\n    \n    \n       \n}\n.title-container{\n    grid-column: 1/2;\n}\n.task-description{\n    grid-row:2/3;\n    grid-column: 1/3;\n    overflow:hidden;\n    \n    \n}\n\n.task-btn-container{\n    grid-column: 3/4;\n    grid-row: 1/3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    gap: 10px;\n    \n}\n.task_Btn{\n    width: 20px;\n    height: 20px;\n    background-color: transparent;\n    background-position: center;\n    background-repeat: no-repeat;\n    border: none;\n    \n\n}\n.task-status-red{\n    background-color:none;\n}\n.task-status-green{\n    background-color: none\n}\n.delete-btn{\n    color: red(red);\n    \n}\n\n\n.main-project-container{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    box-shadow: 0 0 3px rgb(38, 37, 37);\n    \n    background-color: #C0E39E;\n}\n#all-tasks{\n    \n    border: none;\n    background-image: url(icons/tasksWhite.svg);\n    \n}  \n#all-tasks:hover{\n    background-image: url(icons/tasks.svg);\n}\n#completed-tasks{\n    background-image: url(icons/starWhite.svg)\n}\n#completed-tasks:hover{\n    background-image: url(icons/favorite.png);\n}\n#codeBtn{\n    background-image: url(icons/codeWhite.svg);\n}\n#codeBtn:hover{\n    background-image: url(icons/code.svg)\n}\n\n#workBtn{\n    background-image: url(icons/ticketWhite.svg);\n}\n#workBtn:hover{\n    background-image: url(icons/ticket.svg);\n}\n\nfooter{\n    height: 5vh;\n    \n    grid-column: 1/13;\n}\n\n\n\n\n@-webkit-keyframes slide-bottom {\n    0% {\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n    }\n    100% {\n      -webkit-transform: translateY(200px);\n              transform: translateY(200px);\n    }\n  }\n  @keyframes slide-bottom {\n    0% {\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n    }\n    100% {\n      -webkit-transform: translateY(200px);\n              transform: translateY(200px);\n    }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Modal.js":
/*!******************************!*\
  !*** ./src/modules/Modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayForms": () => (/* binding */ displayForms),
/* harmony export */   "toggleModal": () => (/* binding */ toggleModal)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");
//import { editTask } from './app'


let toggle = false
const main  = document.querySelector('main')
const toggleModal = (event) => {
    
    if(toggle === false){
        console.log(main)
        
        document.body.appendChild((0,_ui__WEBPACK_IMPORTED_MODULE_0__.buildModal)()) 
    }else{
        
        const modal = document.querySelector('.master_Modal_Container');
        
        document.body.removeChild(modal) 
    }

   
    toggle = !toggle
}

function displayForms(event){
    const container = document.getElementById('modal_Forms');
    container.innerHTML = ''
    
    if(event.target.id === 'new_Project'){
        container.appendChild((0,_ui__WEBPACK_IMPORTED_MODULE_0__.buildProjectForm)())
    }else{
        container.appendChild((0,_ui__WEBPACK_IMPORTED_MODULE_0__.buildTaskForm)())
    }
       
}






/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTaskToProj": () => (/* binding */ addTaskToProj),
/* harmony export */   "allTasks": () => (/* binding */ allTasks),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "toggleProject": () => (/* binding */ toggleProject)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/modules/factory.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./src/modules/Modal.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _icons_telescope_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/telescope.png */ "./src/icons/telescope.png");









let currentProject = _storage__WEBPACK_IMPORTED_MODULE_3__.localProjects[1]


const  displayProjects = () =>{
    const container = document.querySelector('.proj_nav_container')
    container.innerHTML = ''
    _storage__WEBPACK_IMPORTED_MODULE_3__.localProjects.forEach((project)=>{
        let newNavBtn = (0,_ui__WEBPACK_IMPORTED_MODULE_2__.createNavButton)(project.name);
        newNavBtn.addEventListener('click',toggleProject);
        container.appendChild(newNavBtn);
        
    });
    console.log(_storage__WEBPACK_IMPORTED_MODULE_3__.localProjects)
    
}
//create Task Dom, display Task Dom, and add event listeners
//display Tasks and All tasks should be made into one single function,for better re-usability
const displayTasks = () => {
    const taskContainer = document.querySelector('main')
    taskContainer.innerHTML = ''
    console.log(currentProject.name)
    const category = document.createElement('h2')
    category.innerText = currentProject.name;
    taskContainer.appendChild(category)
    currentProject.taskStorage.forEach((task)=>{
        //console.log(task.idCode)
        let taskElement = (0,_ui__WEBPACK_IMPORTED_MODULE_2__.buildTaskElement)(
            task.name,
            task.desc,
            task.date,
            task.idCode,
            task.status
        )
        taskContainer.appendChild(taskElement);
        
    })
    
    if(currentProject.taskStorage.length === 0){
        category.innerText = 'Not all who wander are lost'
        taskContainer.style.backgroundImage = `url(${_icons_telescope_png__WEBPACK_IMPORTED_MODULE_4__})`;
        
    
    
    }
    const taskButtons = document.querySelectorAll('.task_Btn')
    taskButtons.forEach((btn) =>{
        btn.addEventListener('click',taskListeners)
    });
}





//sets placeholder values in modal task from,sets attribute to edit instead of create in addtasktoproj
const editTask = (event) => {
    ;(0,_Modal__WEBPACK_IMPORTED_MODULE_1__.toggleModal)()
    const domElements = (0,_ui__WEBPACK_IMPORTED_MODULE_2__.giveDomInpts)()
    let taskArray = getAllTasks();
    const task = taskArray.find(task => task.idCode == event.target.dataset.taskId)
    //const card = document.querySelector(`[data-task-code = "${event.target.dataset.taskId}"]`)

    domElements.taskName.value= task.name
    domElements.taskDesc.value = task.desc
    domElements.taskCategory.value = task.category
    console.log(domElements.taskName)


    console.log(domElements)

    console.log(parseFloat(task.date))
    //console.log(card)
    console.log(task.date)

    const subBtn = document.getElementById('task_submit');
    console.log(subBtn)
    subBtn.dataset.setEdit = true;
    subBtn.dataset.taskNum = task.idCode;


}

const getAllTasks = () =>{
    let taskArray = [];
    _storage__WEBPACK_IMPORTED_MODULE_3__.localProjects.forEach((project) =>{
        taskArray.push(project.taskStorage)
    })
    //combines all arrays inside taskArray into one single array
    taskArray = taskArray.flat(1);

    return taskArray;
}

const allTasks = (event) =>{
    let taskArray = [];
    _storage__WEBPACK_IMPORTED_MODULE_3__.localProjects.forEach((project) =>{
        taskArray.push(project.taskStorage)
    })
    //combines all arrays inside taskArray into one single array
    taskArray = taskArray.flat(1)

    if(event.target.id === "completed-tasks"){
        const finishedTasks = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.CategoryFactory)('Completed Tasks')
        taskArray.forEach((task)=>{
            if(task.status===true){
                finishedTasks.taskStorage.push(task)

            }
        })
        currentProject = finishedTasks
        console.log(currentProject.name)
    }else{
        const newProj = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.CategoryFactory)('All Tasks')
        newProj.taskStorage = taskArray
        console.log(newProj)
        console.log(newProj.taskStorage);

        currentProject = newProj;

    }
    displayTasks()
}


function toggleProject(event){
    const key = event.target.dataset.project;
    _storage__WEBPACK_IMPORTED_MODULE_3__.localProjects.forEach((project)=>{
        if(project.name === key){
            currentProject = project
        }
    })
    console.log(currentProject.taskStorage)
    console.log(currentProject.name)
    displayTasks()

}

const updateTask = (code) => {
    const taskArray = getAllTasks();
    const oldTask = taskArray.find(task => task.idCode == code)
    const DOM = (0,_ui__WEBPACK_IMPORTED_MODULE_2__.giveDomInpts)()
    _storage__WEBPACK_IMPORTED_MODULE_3__.localProjects.forEach(project => {
        if(project.name === oldTask.category){
            const index = project.taskStorage.findIndex(todo=>todo.idCode == code)
            project.taskStorage[index].name = DOM.taskName.value
            project.taskStorage[index].desc = DOM.taskDesc.value
            project.taskStorage[index].category = DOM.taskCategory.value
            project.taskStorage[index].date = DOM.taskDate.value
        }
    });
    console.log(taskArray)
    console.log(oldTask)
    
}


//create a task and Push it to the correct project task array
const addTaskToProj = (event) =>{
    const DOM = (0,_ui__WEBPACK_IMPORTED_MODULE_2__.giveDomInpts)()
    
    if(event.target.dataset.setEdit){
        updateTask(event.target.dataset.taskNum)
    }else{
        console.log(false)
        let newTask = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.TaskFactory)(
            DOM.taskName.value,
            DOM.taskDesc.value,
            DOM.taskDate.value,
            DOM.taskCategory.value
        )
    
        _storage__WEBPACK_IMPORTED_MODULE_3__.localProjects.forEach((project)=>{
            if(project.name === newTask.category){
                project.taskStorage.push(newTask)
                console.log(project.taskStorage)
            }
        });

    }

    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveProjectList)()
    ;(0,_Modal__WEBPACK_IMPORTED_MODULE_1__.toggleModal)()
    displayTasks()
}
//adds Project to projects array
const addProject = () => {
    const projInput = document.getElementById('proj_Name_Inpt');
    let newProject = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.CategoryFactory)(projInput.value);
    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.storeProject)(newProject)
    displayProjects()
    ;(0,_Modal__WEBPACK_IMPORTED_MODULE_1__.toggleModal)()
    projInput.value = ''

    
}

function taskListeners(event){
    let taskcode = event.target.dataset.taskId
    let eventName = event.target.name
    if(eventName === 'Delete'){
        removeTask(taskcode)
    }else if(eventName === 'Status'){
        taskStatus(taskcode);
    }
}

const removeTask = (taskId,project) => {
    currentProject.taskStorage.forEach((task,index)=>{
        if(task.idCode == taskId){
            currentProject.taskStorage.splice(index,1);
        }
    })


    displayTasks()
    ;(0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveProjectList)()
}


function taskStatus(code){
    const domElements = document.querySelectorAll('.status-btn')
    let domElement ;
    domElements.forEach((btn)=>{
        console.log(btn.dataset.taskId)
        if(btn.dataset.taskId == code){
            domElement = btn
        }
    })

    currentProject.taskStorage.forEach((task)=>{
        if(task.idCode == code){
            task.status = !task.status
            if(task.status === true){
                domElement.classList.add('task-status-green');
                domElement.classList.remove('task-status-red')
            }
            else{
                domElement.classList.remove('task-status-green');
                domElement.classList.add('task-status-red')
            }
            console.log(task.idCode)
            console.log(task.status)
        }
    })
    ;(0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveProjectList)()
    //displayTasks()
    
}



/***/ }),

/***/ "./src/modules/factory.js":
/*!********************************!*\
  !*** ./src/modules/factory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryFactory": () => (/* binding */ CategoryFactory),
/* harmony export */   "TaskFactory": () => (/* binding */ TaskFactory)
/* harmony export */ });
const TaskFactory = (name,desc,date,category) => {
    let status = false;
    const idCode = Math.floor(Math.random() * 1000)

    return {
        idCode,
        status,
        desc,
        date,
        category,
        name
    }
}

const CategoryFactory = (name) => {
    let taskStorage = [];
    
    return {taskStorage,name}
}




/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialStorage": () => (/* binding */ initialStorage),
/* harmony export */   "localProjects": () => (/* binding */ localProjects),
/* harmony export */   "saveProjectList": () => (/* binding */ saveProjectList),
/* harmony export */   "storeProject": () => (/* binding */ storeProject)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/modules/factory.js");



const Gym = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.CategoryFactory)('Gym'); 

const Coding = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.CategoryFactory)('Coding')

const Work = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.CategoryFactory)('Work')
const task1 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.TaskFactory)('Finish UI',"Finish Styling UI","09/18/2022","Coding");
const task2 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.TaskFactory)('add Edit Task Button',"Add edit task button to task cards","09/18/2022","Coding");
const task3 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.TaskFactory)('Javascript',"Make drop down selection for category input in task creation form","09/18/2022","Coding");
const task4 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.TaskFactory)('Javascript',"display finished tasks function","09/18/2022","Coding");
Coding.taskStorage.push(task1)
Coding.taskStorage.push(task2)
Coding.taskStorage.push(task3)
Coding.taskStorage.push(task4)
let projects = [Gym,Coding,Work]


const initialStorage = (() => {
    if(localStorage.length  === 0 ){
        localStorage.setItem("projects",JSON.stringify(projects));
    }
    
})();
let localProjects = JSON.parse(localStorage.getItem("projects"));

const storeProject = (newProj) => {
    localProjects.push(newProj)
    localStorage.setItem("projects", JSON.stringify(localProjects))
    console.log(localStorage)
}
const saveProjectList = () => {
    localStorage.setItem("projects", JSON.stringify(localProjects))
}


/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildModal": () => (/* binding */ buildModal),
/* harmony export */   "buildProjectForm": () => (/* binding */ buildProjectForm),
/* harmony export */   "buildTaskElement": () => (/* binding */ buildTaskElement),
/* harmony export */   "buildTaskForm": () => (/* binding */ buildTaskForm),
/* harmony export */   "createNavButton": () => (/* binding */ createNavButton),
/* harmony export */   "giveDomInpts": () => (/* binding */ giveDomInpts),
/* harmony export */   "loadpage": () => (/* binding */ loadpage)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/modules/app.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./src/modules/Modal.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _icons_pencil_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/pencil.png */ "./src/icons/pencil.png");
/* harmony import */ var _icons_favorite_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/favorite.png */ "./src/icons/favorite.png");
/* harmony import */ var _icons_starWhite_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/starWhite.svg */ "./src/icons/starWhite.svg");
/* harmony import */ var _icons_trash_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/trash.png */ "./src/icons/trash.png");
/* harmony import */ var _icons_ticketWhite_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/ticketWhite.svg */ "./src/icons/ticketWhite.svg");
/* harmony import */ var _icons_codeWhite_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/codeWhite.svg */ "./src/icons/codeWhite.svg");

//import { addTaskToProj } from "./tasks";











const buildHeader = () => {
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.innerText = 'To-Do App';
    const addModal = document.createElement('button')
    addModal.innerText = 'New Task'
    addModal.id = 'open_Modal'
    addModal.addEventListener('click',_Modal__WEBPACK_IMPORTED_MODULE_1__.toggleModal)
    header.append(title,addModal)
    return header 
}

const createNavButton = (name) => {
    const projButton = document.createElement('button')
    projButton.classList.add('proj-btn-hover')
    projButton.innerText = name
    projButton.dataset.project = name
    
    return projButton
}



//add coding and work ToDo buttons to the main nav and not project nav. 

const buildNav = () => {
    const nav = document.createElement('nav')
    const taskButtonContainer = document.createElement('div')
    taskButtonContainer.classList.add('nav-buttons')

   
    const completeTasks = document.createElement('button')
    completeTasks.id ='completed-tasks'
    completeTasks.addEventListener('click',_app__WEBPACK_IMPORTED_MODULE_0__.allTasks);
    

    const allTaskBtn = document.createElement('button');
    
    allTaskBtn.id = 'all-tasks'
    allTaskBtn.addEventListener('click',_app__WEBPACK_IMPORTED_MODULE_0__.allTasks)
    
    const codeProj = document.createElement('button')
    codeProj.id = 'codeBtn'
    codeProj.dataset.project = 'Coding'
    codeProj.addEventListener('click',_app__WEBPACK_IMPORTED_MODULE_0__.toggleProject)

    const projectMain = document.createElement('div')
    projectMain.classList.add('main-project-container')
    
    
    const projectContainer = document.createElement('div')
    const title = document.createElement('h3')
    title.innerText = 'Projects'
    projectMain.append(title,projectContainer)
    projectContainer.classList.add('proj_nav_container');
  
    const workProj = document.createElement('button')
    workProj.id = 'workBtn'
    workProj.dataset.project = 'Work'
    workProj.addEventListener('click',_app__WEBPACK_IMPORTED_MODULE_0__.toggleProject)



    const navBtns = [allTaskBtn,codeProj,completeTasks,workProj]
    navBtns.forEach((btn)=>{
        btn.classList.add('nav_btn')
    })
    taskButtonContainer.append(allTaskBtn,completeTasks,codeProj,workProj)
    nav.append(taskButtonContainer,projectMain)

    return nav
}
//MODAL
const buildTaskForm = (event) => {
    const form = document.createElement('div')
    form.name = 'task-form'
    form.id = 'task_Modal'

    const title = document.createElement('h3')
    title.innerText = "Create Task"

    const nameInput = document.createElement('input');
    nameInput.type = 'text'
    nameInput.name = 'name'
    nameInput.id = 'name_input'
    nameInput.classList.add('task-inpt')
    nameInput.placeholder = "Title"

    const descInput = document.createElement('textarea');
    descInput.setAttribute('type','text')
    descInput.setAttribute('name','desc')
    descInput.setAttribute('id','desc_input')
    descInput.classList.add('task-inpt')
    descInput.placeholder = "Description"

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type','date');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('id','date_input');
    dateInput.classList.add('task-inpt')
    

    const project = document.createElement('select');
    _storage__WEBPACK_IMPORTED_MODULE_2__.localProjects.forEach((proj)=>{
        const opt = document.createElement('option')
        opt.value = proj.name
        opt.innerText = proj.name

        project.appendChild(opt)
    });

    
    project.name = 'category'
    project.id = 'project_Assign'
    project.classList.add('task-inpt')
    

    const submit = document.createElement('button');
    submit.setAttribute('id','task_submit')
    submit.type = 'submit'
    submit.innerText = 'Add'
    submit.addEventListener('click',_app__WEBPACK_IMPORTED_MODULE_0__.addTaskToProj)


    const textForm = document.createElement('div')
    textForm.classList.add('text-form')
    textForm.append(nameInput,descInput)

    const optForm = document.createElement('div')
    optForm.classList.add('opt-form')
    optForm.append(dateInput,project)
    const entry = document.createElement('div')
    entry.classList.add('entry-container')
    entry.append(textForm,optForm)
    form.append(title,entry,submit);

    return form
}
const buildProjectForm = () => {
    const modalContainer = document.createElement('div')
    modalContainer.classList.add('project_modal')

    const projName = document.createElement('input');
    projName.id = 'proj_Name_Inpt';
    projName.name = 'project_Name_Inpt';
    
    const addProjBtn = document.createElement('button')
    addProjBtn.id = 'add_Proj_Button'
    addProjBtn.innerText = 'Add'
    addProjBtn.addEventListener('click',_app__WEBPACK_IMPORTED_MODULE_0__.addProject)

    modalContainer.append(
        projName,
        addProjBtn
    )
    return modalContainer
}
const buildModal = () => {
    const mainContainer = document.createElement('div')
    mainContainer.classList.add('master_Modal_Container')
    const modal = document.createElement('div');
    modal.id = 'master_Modal'

    const nav = document.createElement('div')
    nav.id = 'master_Modal_Nav'
    
    const modalBtns = document.createElement('div')
    const project = document.createElement('button')
    project.id = 'new_Project'
    project.innerText = 'Project'
    project.addEventListener('click',_Modal__WEBPACK_IMPORTED_MODULE_1__.displayForms)

    const todo = document.createElement('button')
    todo.id = 'new_Task';
    todo.innerText = 'Task'
    todo.addEventListener('click',_Modal__WEBPACK_IMPORTED_MODULE_1__.displayForms)

    const formContainer = document.createElement('div')
    formContainer.id = 'modal_Forms'
    const firstForm = buildTaskForm();
    formContainer.appendChild(firstForm)

    const closeOut = document.createElement('button')
    closeOut.innerText = 'X'
    closeOut.addEventListener('click',_Modal__WEBPACK_IMPORTED_MODULE_1__.toggleModal)
    closeOut.classList.add('close-modal')
    modalBtns.append(project,todo)
    nav.append(modalBtns,closeOut)
    modal.append(nav,formContainer)
    mainContainer.append(modal)

    return mainContainer

}
const giveDomInpts = () => {
    const taskName = document.getElementById('name_input')
    const taskDesc = document.getElementById('desc_input')
    const taskDate = document.getElementById('date_input')
    const taskCategory = document.getElementById('project_Assign')

    return {
        taskName,
        taskDesc,
        taskDate,
        taskCategory
    }
}
const buildTaskElement = (name,desc,date,code,status) => {
    const taskCard = document.createElement('div');
    taskCard.classList.add('task_card')
    taskCard.dataset.taskCode = `${code}`

    const title = document.createElement('div')
    title.classList.add('title-container')
    const titleTag = document.createElement('h3')
    titleTag.innerText = name
    title.appendChild(titleTag)
    

    const description = document.createElement('div')
    const descriptionTag = document.createElement('p')
    descriptionTag.innerText = desc
    description.classList.add('task-description')
    description.appendChild(descriptionTag)

    //const dueDate = document.createElement('div')
    const dateTag = document.createElement('p')
    dateTag.innerText = date
    title.appendChild(dateTag)

    
    const edit = document.createElement('button')
    
    edit.dataset.taskId = code
    edit.name = 'Edit'
    edit.id = 'edit-task'
    edit.style.backgroundImage = `url(${_icons_pencil_png__WEBPACK_IMPORTED_MODULE_3__})`
    edit.classList.add('task_Btn')
    edit.addEventListener("click",_app__WEBPACK_IMPORTED_MODULE_0__.editTask)
        
  
    const taskBtnContainer = document.createElement('div')
    taskBtnContainer.classList.add('task-btn-container')

    const deleteTask = document.createElement('button')
    deleteTask.style.backgroundImage = `url(${_icons_trash_png__WEBPACK_IMPORTED_MODULE_6__})`
    deleteTask.dataset.taskId = code 
    deleteTask.classList.add('task_Btn')
    deleteTask.classList.add('delete-btn')
    deleteTask.name = 'Delete'
    

    const markComplete = document.createElement('button')
    markComplete.dataset.taskId = code
    markComplete.classList.add('task_Btn')
    markComplete.name = 'Status'
    markComplete.style.backgroundImage = `url(${_icons_favorite_png__WEBPACK_IMPORTED_MODULE_4__})`
    markComplete.classList.add('status-btn')
    
    if(status===true){
        markComplete.classList.add('task-status-green');
        markComplete.classList.remove('task-status-red')
    
    }else{
        markComplete.classList.remove('task-status-green');
        markComplete.classList.add('task-status-red')

    }

    taskBtnContainer.append(deleteTask,markComplete,edit)
    

    taskCard.append(
        title,
        description,
        taskBtnContainer

    )

    return taskCard
}




const loadpage = () =>{
    const header = buildHeader()
    const nav = buildNav()
    const main = document.createElement('main');
    const footer = document.createElement('footer')
    //add footer
    document.body.append(header,nav,main,footer)
    
    ;(0,_app__WEBPACK_IMPORTED_MODULE_0__.displayProjects)()
    ;(0,_app__WEBPACK_IMPORTED_MODULE_0__.displayTasks)()
};
//






/***/ }),

/***/ "./src/icons/code.svg":
/*!****************************!*\
  !*** ./src/icons/code.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a6566609559b1861cd1.svg";

/***/ }),

/***/ "./src/icons/codeWhite.svg":
/*!*********************************!*\
  !*** ./src/icons/codeWhite.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d057340ec35ee77ff8c.svg";

/***/ }),

/***/ "./src/icons/favorite.png":
/*!********************************!*\
  !*** ./src/icons/favorite.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "631739438a959bbeb0db.png";

/***/ }),

/***/ "./src/icons/pencil.png":
/*!******************************!*\
  !*** ./src/icons/pencil.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6bac37008afe3eea3e41.png";

/***/ }),

/***/ "./src/icons/starWhite.svg":
/*!*********************************!*\
  !*** ./src/icons/starWhite.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c55e2e4d9116740814d0.svg";

/***/ }),

/***/ "./src/icons/tasks.svg":
/*!*****************************!*\
  !*** ./src/icons/tasks.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb051fa869892864a54b.svg";

/***/ }),

/***/ "./src/icons/tasksWhite.svg":
/*!**********************************!*\
  !*** ./src/icons/tasksWhite.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12e31e662ac4e1103751.svg";

/***/ }),

/***/ "./src/icons/telescope.png":
/*!*********************************!*\
  !*** ./src/icons/telescope.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "674d1ff01141f9fee56e.png";

/***/ }),

/***/ "./src/icons/ticket.svg":
/*!******************************!*\
  !*** ./src/icons/ticket.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c580132dbe14c09edff.svg";

/***/ }),

/***/ "./src/icons/ticketWhite.svg":
/*!***********************************!*\
  !*** ./src/icons/ticketWhite.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7d1889fc19e1ac9d9c74.svg";

/***/ }),

/***/ "./src/icons/trash.png":
/*!*****************************!*\
  !*** ./src/icons/trash.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29f6cdd5cd00010da911.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/storage */ "./src/modules/storage.js");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");





(0,_modules_ui__WEBPACK_IMPORTED_MODULE_2__.loadpage)()



//console.log(localStorage)


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLFFBQVEsTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FB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QUlSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9Nb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL2FwcC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiaWNvbnMvdGFza3NXaGl0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJpY29ucy90YXNrcy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJpY29ucy9zdGFyV2hpdGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiaWNvbnMvZmF2b3JpdGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiaWNvbnMvY29kZVdoaXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcImljb25zL2NvZGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiaWNvbnMvdGlja2V0V2hpdGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiaWNvbnMvdGlja2V0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjFlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvMTM7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5uYXYge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDEwdmg7XFxuICBoZWlnaHQ6IDg1dmg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzBweDtcXG59XFxuXFxuLm5hdi1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMjAwcHg7XFxufVxcblxcbi5uYXZfYnRuIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAzMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ubmF2X2J0bjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAycHggMHB4IDBweCAwcHggcmdiYSgxOTIsIDIyNywgMTU4LCAwLjc1KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA0MDQwO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ3JpZC1jb2x1bW46IDIvMTM7XFxuICBnYXA6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNjI0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxubWFpbiBoMiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzBFMzlFO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ucHJval9uYXZfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MDtcXG59XFxuXFxuLnByb2pfbmF2X2NvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiA4MCU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubWFzdGVyX01vZGFsX0NvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDU2LCA1NiwgMC44NjMpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWFzdGVyX01vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLS13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1ib3R0b20gMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XFxuICBhbmltYXRpb246IHNsaWRlLWJvdHRvbSAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWYxZTtcXG59XFxuXFxuI29wZW5fTW9kYWwge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjQzBFMzlFO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCAjQzBFMzlFO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uY2xvc2UtbW9kYWwge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IGJsYWNrO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jbWFzdGVyX01vZGFsX05hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jdGFza19Nb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lbnRyeS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNTBweDtcXG59XFxuXFxuLnRleHQtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLm9wdC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4udGFzay1pbnB0IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI2MjQ7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNuYW1lX2lucHV0IHtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuI2Rlc2NfaW5wdXQge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI2RhdGVfaW5wdXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgY29sb3I6IHJnYigxMDQsIDEwMCwgMTAwKTtcXG59XFxuXFxuI3Byb2plY3RfQXNzaWduIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4jdGFza19zdWJtaXQge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCBibGFjaztcXG59XFxuXFxuLnRhc2tfY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDMwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciwgMWZyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDA0MDQwO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGdhcDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjNlbTtcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiB7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50YXNrLWJ0bi1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gIGdyaWQtcm93OiAxLzM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrX0J0biB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRhc2stc3RhdHVzLXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbn1cXG5cXG4udGFzay1zdGF0dXMtZ3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG59XFxuXFxuLmRlbGV0ZS1idG4ge1xcbiAgY29sb3I6IDI1NTtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYigzOCwgMzcsIDM3KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDMEUzOUU7XFxufVxcblxcbiNhbGwtdGFza3Mge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuI2FsbC10YXNrczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4jY29tcGxldGVkLXRhc2tzIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbiNjb21wbGV0ZWQtdGFza3M6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuXFxuI2NvZGVCdG4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXG59XFxuXFxuI2NvZGVCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG59XFxuXFxuI3dvcmtCdG4ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKTtcXG59XFxuXFxuI3dvcmtCdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyArIFwiKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGhlaWdodDogNXZoO1xcbiAgZ3JpZC1jb2x1bW46IDEvMTM7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1ib3R0b20ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzbGlkZS1ib3R0b20ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFD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QSxrQkFBQTtBQWpDSjs7QUFzQ0E7RUFDSSxnQkFBQTtBQW5DSjs7QUFxQ0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWxDSjs7QUF1Q0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQXBDSjs7QUF1Q0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUFwQ0o7O0FBd0NBO0VBQ0ksc0JBQUE7QUFyQ0o7O0FBdUNBO0VBQ0ksc0JBQUE7QUFwQ0o7O0FBc0NBO0VBQ0ksVUFBQTtBQW5DSjs7QUF3Q0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7RUFFQSx5QkFBQTtBQXRDSjs7QUF3Q0E7RUFFSSxZQUFBO0VBQ0EseURBQUE7QUF0Q0o7O0FBeUNBO0VBQ0kseURBQUE7QUF0Q0o7O0FBd0NBO0VBQ0kseURBQUE7QUFyQ0o7O0FBdUNBO0VBQ0kseURBQUE7QUFwQ0o7O0FBc0NBO0VBQ0kseURBQUE7QUFuQ0o7O0FBcUNBO0VBQ0kseURBQUE7QUFsQ0o7O0FBcUNBO0VBQ0kseURBQUE7QUFsQ0o7O0FBb0NBO0VBQ0kseURBQUE7QUFqQ0o7O0FBb0NBO0VBQ0ksV0FBQTtFQUVBLGlCQUFBO0FBbENKOztBQXdDQTtFQUNJO0lBQ0UsZ0NBQUE7SUFDUSx3QkFBQTtFQXJDWjtFQXVDRTtJQUNFLG9DQUFBO0lBQ1EsNEJBQUE7RUFyQ1o7QUFDRjtBQXVDRTtFQUNFO0lBQ0UsZ0NBQUE7SUFDUSx3QkFBQTtFQXJDWjtFQXVDRTtJQUNFLG9DQUFBO0lBQ1EsNEJBQUE7RUFyQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4kZGFyay1iYWNrZ3JvdW5kOiMxZjFmMWU7XFxuJHNlY29uZGFyeS1iZzogIzI0MjYyNDtcXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjZmZmZmZmO1xcbiRhY2NlbnQtY29sb3I6ICNDMEUzOUU7XFxuJGxpZ2h0LWJnOiAjNDA0MDQwO1xcbiRwdXJwLWJnIDogIzZlNWI2ZTtcXG5cXG5cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1iYWNrZ3JvdW5kO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwxZnIpO1xcbiAgICBcXG59XFxuXFxuaGVhZGVye1xcbiAgICBncmlkLWNvbHVtbjogIDEvMTM7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzoyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgXFxuXFxuICAgIFxcbn1cXG5cXG5uYXZ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMTB2aDtcXG4gICAgaGVpZ2h0OiA4NXZoO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHBhZGRpbmc6MCAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MzBweDtcXG5cXG59XFxuLm5hdi1idXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG5cXG59XFxuXFxuLm5hdl9idG57XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbiAgICBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4ubmF2X2J0bjpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogMnB4IDBweCAwcHggMHB4IHJnYmEoMTkyLDIyNywxNTgsMC43NSk7XFxuICAgIHRyYW5zZm9ybSA6c2NhbGUoMS4wNSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1iZztcXG4gICAgXFxuICAgIFxcbiAgICBcXG59XFxuXFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgIGdyaWQtY29sdW1uOiAyLzEzO1xcbiAgICBnYXA6MTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iZztcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0IDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICBcXG4gICAgXFxufVxcbm1haW4gaDJ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBcXG5cXG59XFxuLnByb2pfbmF2X2NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1iZztcXG59XFxuLnByb2pfbmF2X2NvbnRhaW5lcj5idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG5cXG4ubWFzdGVyX01vZGFsX0NvbnRhaW5lcntcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDU2LCA1NiwgMC44NjMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG5cXG59XFxuXFxuI21hc3Rlcl9Nb2RhbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC0td2Via2l0LWFuaW1hdGlvbjogc2xpZGUtYm90dG9tIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xcblxcdGFuaW1hdGlvbjogc2xpZGUtYm90dG9tIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1iYWNrZ3JvdW5kO1xcblxcblxcbn1cXG5cXG5cXG4jb3Blbl9Nb2RhbHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICRhY2NlbnQtY29sb3I7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAkYWNjZW50LWNvbG9yO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIFxcbiAgICBcXG4gICAgXFxufVxcbi5jbG9zZS1tb2RhbHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIFxcbiAgICBcXG59XFxuI21hc3Rlcl9Nb2RhbF9OYXZ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5cXG4jdGFza19Nb2RhbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgXFxuXFxufSBcXG4uZW50cnktY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIFxcbiAgICBcXG59XFxuLnRleHQtZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjIwcHg7XFxuICAgIFxcbn1cXG4ub3B0LWZvcm17XFxuICAgZGlzcGxheTogZmxleDtcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcXG4gICBnYXA6MjBweDtcXG4gICBcXG59XFxuLnRhc2staW5wdHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJnO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIFxcblxcbn1cXG4jbmFtZV9pbnB1dHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4jZGVzY19pbnB1dHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuI2RhdGVfaW5wdXR7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgY29sb3I6IHJnYigxMDQsIDEwMCwgMTAwKTtcXG59XFxuI3Byb2plY3RfQXNzaWdue1xcbiAgICBoZWlnaHQ6MzBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcbiN0YXNrX3N1Ym1pdHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggYmxhY2s7XFxufVxcbi50YXNrX2NhcmR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciwxZnI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodC1iZztcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcXG4gICAgXFxuICAgIFxcbiAgICAgICBcXG59XFxuLnRpdGxlLWNvbnRhaW5lcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuLnRhc2stZGVzY3JpcHRpb257XFxuICAgIGdyaWQtcm93OjIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xcbiAgICBcXG4gICAgXFxufVxcblxcbi50YXNrLWJ0bi1jb250YWluZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBcXG59XFxuLnRhc2tfQnRue1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIFxcblxcbn1cXG4udGFzay1zdGF0dXMtcmVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOm5vbmU7XFxufVxcbi50YXNrLXN0YXR1cy1ncmVlbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZVxcbn1cXG4uZGVsZXRlLWJ0bntcXG4gICAgY29sb3I6IHJlZChyZWQpO1xcbiAgICBcXG59XFxuXFxuXFxuLm1haW4tcHJvamVjdC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2IoMzgsIDM3LCAzNyk7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzBFMzlFO1xcbn1cXG4jYWxsLXRhc2tze1xcbiAgICBcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaWNvbnMvdGFza3NXaGl0ZS5zdmcpO1xcbiAgICBcXG59ICBcXG4jYWxsLXRhc2tzOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaWNvbnMvdGFza3Muc3ZnKTtcXG59XFxuI2NvbXBsZXRlZC10YXNrc3tcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGljb25zL3N0YXJXaGl0ZS5zdmcpXFxufVxcbiNjb21wbGV0ZWQtdGFza3M6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpY29ucy9mYXZvcml0ZS5wbmcpO1xcbn1cXG4jY29kZUJ0bntcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGljb25zL2NvZGVXaGl0ZS5zdmcpO1xcbn1cXG4jY29kZUJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGljb25zL2NvZGUuc3ZnKVxcbn1cXG5cXG4jd29ya0J0bntcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGljb25zL3RpY2tldFdoaXRlLnN2Zyk7XFxufVxcbiN3b3JrQnRuOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaWNvbnMvdGlja2V0LnN2Zyk7XFxufVxcblxcbmZvb3RlcntcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIFxcbiAgICBncmlkLWNvbHVtbjogMS8xMztcXG59XFxuXFxuXFxuXFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWJvdHRvbSB7XFxuICAgIDAlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xcbiAgICB9XFxuICB9XFxuICBAa2V5ZnJhbWVzIHNsaWRlLWJvdHRvbSB7XFxuICAgIDAlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xcbiAgICB9XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL2ltcG9ydCB7IGVkaXRUYXNrIH0gZnJvbSAnLi9hcHAnXG5pbXBvcnQgeyBidWlsZFByb2plY3RGb3JtLGJ1aWxkVGFza0Zvcm0sYnVpbGRNb2RhbCB9IGZyb20gJy4vdWknXG5cbmxldCB0b2dnbGUgPSBmYWxzZVxuY29uc3QgbWFpbiAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbmNvbnN0IHRvZ2dsZU1vZGFsID0gKGV2ZW50KSA9PiB7XG4gICAgXG4gICAgaWYodG9nZ2xlID09PSBmYWxzZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKG1haW4pXG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJ1aWxkTW9kYWwoKSkgXG4gICAgfWVsc2V7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXN0ZXJfTW9kYWxfQ29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsKSBcbiAgICB9XG5cbiAgIFxuICAgIHRvZ2dsZSA9ICF0b2dnbGVcbn1cblxuZnVuY3Rpb24gZGlzcGxheUZvcm1zKGV2ZW50KXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxfRm9ybXMnKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICBcbiAgICBpZihldmVudC50YXJnZXQuaWQgPT09ICduZXdfUHJvamVjdCcpe1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRQcm9qZWN0Rm9ybSgpKVxuICAgIH1lbHNle1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRUYXNrRm9ybSgpKVxuICAgIH1cbiAgICAgICBcbn1cblxuXG5cblxuZXhwb3J0e1xuICAgIHRvZ2dsZU1vZGFsLFxuICAgIGRpc3BsYXlGb3Jtc1xufSIsImltcG9ydCB7Q2F0ZWdvcnlGYWN0b3J5LFRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xuaW1wb3J0IHsgdG9nZ2xlTW9kYWwgfSBmcm9tIFwiLi9Nb2RhbFwiO1xuaW1wb3J0IHtjcmVhdGVOYXZCdXR0b24sZ2l2ZURvbUlucHRzLGJ1aWxkVGFza0VsZW1lbnQgfSBmcm9tIFwiLi91aVwiO1xuaW1wb3J0IHsgc3RvcmVQcm9qZWN0LGxvY2FsUHJvamVjdHMsc2F2ZVByb2plY3RMaXN0fSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgdGVsZXNjb3BlIGZyb20gXCIuLi9pY29ucy90ZWxlc2NvcGUucG5nXCJcblxuXG5cblxubGV0IGN1cnJlbnRQcm9qZWN0ID0gbG9jYWxQcm9qZWN0c1sxXVxuXG5cbmNvbnN0ICBkaXNwbGF5UHJvamVjdHMgPSAoKSA9PntcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJval9uYXZfY29udGFpbmVyJylcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICBsb2NhbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XG4gICAgICAgIGxldCBuZXdOYXZCdG4gPSBjcmVhdGVOYXZCdXR0b24ocHJvamVjdC5uYW1lKTtcbiAgICAgICAgbmV3TmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0b2dnbGVQcm9qZWN0KTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld05hdkJ0bik7XG4gICAgICAgIFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsUHJvamVjdHMpXG4gICAgXG59XG4vL2NyZWF0ZSBUYXNrIERvbSwgZGlzcGxheSBUYXNrIERvbSwgYW5kIGFkZCBldmVudCBsaXN0ZW5lcnNcbi8vZGlzcGxheSBUYXNrcyBhbmQgQWxsIHRhc2tzIHNob3VsZCBiZSBtYWRlIGludG8gb25lIHNpbmdsZSBmdW5jdGlvbixmb3IgYmV0dGVyIHJlLXVzYWJpbGl0eVxuY29uc3QgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QubmFtZSlcbiAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBjYXRlZ29yeS5pbm5lclRleHQgPSBjdXJyZW50UHJvamVjdC5uYW1lO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpXG4gICAgY3VycmVudFByb2plY3QudGFza1N0b3JhZ2UuZm9yRWFjaCgodGFzayk9PntcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0YXNrLmlkQ29kZSlcbiAgICAgICAgbGV0IHRhc2tFbGVtZW50ID0gYnVpbGRUYXNrRWxlbWVudChcbiAgICAgICAgICAgIHRhc2submFtZSxcbiAgICAgICAgICAgIHRhc2suZGVzYyxcbiAgICAgICAgICAgIHRhc2suZGF0ZSxcbiAgICAgICAgICAgIHRhc2suaWRDb2RlLFxuICAgICAgICAgICAgdGFzay5zdGF0dXNcbiAgICAgICAgKVxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgICAgICAgXG4gICAgfSlcbiAgICBcbiAgICBpZihjdXJyZW50UHJvamVjdC50YXNrU3RvcmFnZS5sZW5ndGggPT09IDApe1xuICAgICAgICBjYXRlZ29yeS5pbm5lclRleHQgPSAnTm90IGFsbCB3aG8gd2FuZGVyIGFyZSBsb3N0J1xuICAgICAgICB0YXNrQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0ZWxlc2NvcGV9KWA7XG4gICAgICAgIFxuICAgIFxuICAgIFxuICAgIH1cbiAgICBjb25zdCB0YXNrQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrX0J0bicpXG4gICAgdGFza0J1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PntcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0YXNrTGlzdGVuZXJzKVxuICAgIH0pO1xufVxuXG5cblxuXG5cbi8vc2V0cyBwbGFjZWhvbGRlciB2YWx1ZXMgaW4gbW9kYWwgdGFzayBmcm9tLHNldHMgYXR0cmlidXRlIHRvIGVkaXQgaW5zdGVhZCBvZiBjcmVhdGUgaW4gYWRkdGFza3RvcHJvalxuY29uc3QgZWRpdFRhc2sgPSAoZXZlbnQpID0+IHtcbiAgICB0b2dnbGVNb2RhbCgpXG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBnaXZlRG9tSW5wdHMoKVxuICAgIGxldCB0YXNrQXJyYXkgPSBnZXRBbGxUYXNrcygpO1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrQXJyYXkuZmluZCh0YXNrID0+IHRhc2suaWRDb2RlID09IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tJZClcbiAgICAvL2NvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWNvZGUgPSBcIiR7ZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkfVwiXWApXG5cbiAgICBkb21FbGVtZW50cy50YXNrTmFtZS52YWx1ZT0gdGFzay5uYW1lXG4gICAgZG9tRWxlbWVudHMudGFza0Rlc2MudmFsdWUgPSB0YXNrLmRlc2NcbiAgICBkb21FbGVtZW50cy50YXNrQ2F0ZWdvcnkudmFsdWUgPSB0YXNrLmNhdGVnb3J5XG4gICAgY29uc29sZS5sb2coZG9tRWxlbWVudHMudGFza05hbWUpXG5cblxuICAgIGNvbnNvbGUubG9nKGRvbUVsZW1lbnRzKVxuXG4gICAgY29uc29sZS5sb2cocGFyc2VGbG9hdCh0YXNrLmRhdGUpKVxuICAgIC8vY29uc29sZS5sb2coY2FyZClcbiAgICBjb25zb2xlLmxvZyh0YXNrLmRhdGUpXG5cbiAgICBjb25zdCBzdWJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza19zdWJtaXQnKTtcbiAgICBjb25zb2xlLmxvZyhzdWJCdG4pXG4gICAgc3ViQnRuLmRhdGFzZXQuc2V0RWRpdCA9IHRydWU7XG4gICAgc3ViQnRuLmRhdGFzZXQudGFza051bSA9IHRhc2suaWRDb2RlO1xuXG5cbn1cblxuY29uc3QgZ2V0QWxsVGFza3MgPSAoKSA9PntcbiAgICBsZXQgdGFza0FycmF5ID0gW107XG4gICAgbG9jYWxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PntcbiAgICAgICAgdGFza0FycmF5LnB1c2gocHJvamVjdC50YXNrU3RvcmFnZSlcbiAgICB9KVxuICAgIC8vY29tYmluZXMgYWxsIGFycmF5cyBpbnNpZGUgdGFza0FycmF5IGludG8gb25lIHNpbmdsZSBhcnJheVxuICAgIHRhc2tBcnJheSA9IHRhc2tBcnJheS5mbGF0KDEpO1xuXG4gICAgcmV0dXJuIHRhc2tBcnJheTtcbn1cblxuY29uc3QgYWxsVGFza3MgPSAoZXZlbnQpID0+e1xuICAgIGxldCB0YXNrQXJyYXkgPSBbXTtcbiAgICBsb2NhbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+e1xuICAgICAgICB0YXNrQXJyYXkucHVzaChwcm9qZWN0LnRhc2tTdG9yYWdlKVxuICAgIH0pXG4gICAgLy9jb21iaW5lcyBhbGwgYXJyYXlzIGluc2lkZSB0YXNrQXJyYXkgaW50byBvbmUgc2luZ2xlIGFycmF5XG4gICAgdGFza0FycmF5ID0gdGFza0FycmF5LmZsYXQoMSlcblxuICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJjb21wbGV0ZWQtdGFza3NcIil7XG4gICAgICAgIGNvbnN0IGZpbmlzaGVkVGFza3MgPSBDYXRlZ29yeUZhY3RvcnkoJ0NvbXBsZXRlZCBUYXNrcycpXG4gICAgICAgIHRhc2tBcnJheS5mb3JFYWNoKCh0YXNrKT0+e1xuICAgICAgICAgICAgaWYodGFzay5zdGF0dXM9PT10cnVlKXtcbiAgICAgICAgICAgICAgICBmaW5pc2hlZFRhc2tzLnRhc2tTdG9yYWdlLnB1c2godGFzaylcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjdXJyZW50UHJvamVjdCA9IGZpbmlzaGVkVGFza3NcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QubmFtZSlcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc3QgbmV3UHJvaiA9IENhdGVnb3J5RmFjdG9yeSgnQWxsIFRhc2tzJylcbiAgICAgICAgbmV3UHJvai50YXNrU3RvcmFnZSA9IHRhc2tBcnJheVxuICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9qKVxuICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9qLnRhc2tTdG9yYWdlKTtcblxuICAgICAgICBjdXJyZW50UHJvamVjdCA9IG5ld1Byb2o7XG5cbiAgICB9XG4gICAgZGlzcGxheVRhc2tzKClcbn1cblxuXG5mdW5jdGlvbiB0b2dnbGVQcm9qZWN0KGV2ZW50KXtcbiAgICBjb25zdCBrZXkgPSBldmVudC50YXJnZXQuZGF0YXNldC5wcm9qZWN0O1xuICAgIGxvY2FsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcbiAgICAgICAgaWYocHJvamVjdC5uYW1lID09PSBrZXkpe1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LnRhc2tTdG9yYWdlKVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0Lm5hbWUpXG4gICAgZGlzcGxheVRhc2tzKClcblxufVxuXG5jb25zdCB1cGRhdGVUYXNrID0gKGNvZGUpID0+IHtcbiAgICBjb25zdCB0YXNrQXJyYXkgPSBnZXRBbGxUYXNrcygpO1xuICAgIGNvbnN0IG9sZFRhc2sgPSB0YXNrQXJyYXkuZmluZCh0YXNrID0+IHRhc2suaWRDb2RlID09IGNvZGUpXG4gICAgY29uc3QgRE9NID0gZ2l2ZURvbUlucHRzKClcbiAgICBsb2NhbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGlmKHByb2plY3QubmFtZSA9PT0gb2xkVGFzay5jYXRlZ29yeSl7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3QudGFza1N0b3JhZ2UuZmluZEluZGV4KHRvZG89PnRvZG8uaWRDb2RlID09IGNvZGUpXG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tTdG9yYWdlW2luZGV4XS5uYW1lID0gRE9NLnRhc2tOYW1lLnZhbHVlXG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tTdG9yYWdlW2luZGV4XS5kZXNjID0gRE9NLnRhc2tEZXNjLnZhbHVlXG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tTdG9yYWdlW2luZGV4XS5jYXRlZ29yeSA9IERPTS50YXNrQ2F0ZWdvcnkudmFsdWVcbiAgICAgICAgICAgIHByb2plY3QudGFza1N0b3JhZ2VbaW5kZXhdLmRhdGUgPSBET00udGFza0RhdGUudmFsdWVcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRhc2tBcnJheSlcbiAgICBjb25zb2xlLmxvZyhvbGRUYXNrKVxuICAgIFxufVxuXG5cbi8vY3JlYXRlIGEgdGFzayBhbmQgUHVzaCBpdCB0byB0aGUgY29ycmVjdCBwcm9qZWN0IHRhc2sgYXJyYXlcbmNvbnN0IGFkZFRhc2tUb1Byb2ogPSAoZXZlbnQpID0+e1xuICAgIGNvbnN0IERPTSA9IGdpdmVEb21JbnB0cygpXG4gICAgXG4gICAgaWYoZXZlbnQudGFyZ2V0LmRhdGFzZXQuc2V0RWRpdCl7XG4gICAgICAgIHVwZGF0ZVRhc2soZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza051bSlcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coZmFsc2UpXG4gICAgICAgIGxldCBuZXdUYXNrID0gVGFza0ZhY3RvcnkoXG4gICAgICAgICAgICBET00udGFza05hbWUudmFsdWUsXG4gICAgICAgICAgICBET00udGFza0Rlc2MudmFsdWUsXG4gICAgICAgICAgICBET00udGFza0RhdGUudmFsdWUsXG4gICAgICAgICAgICBET00udGFza0NhdGVnb3J5LnZhbHVlXG4gICAgICAgIClcbiAgICBcbiAgICAgICAgbG9jYWxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xuICAgICAgICAgICAgaWYocHJvamVjdC5uYW1lID09PSBuZXdUYXNrLmNhdGVnb3J5KXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tTdG9yYWdlLnB1c2gobmV3VGFzaylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRhc2tTdG9yYWdlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHNhdmVQcm9qZWN0TGlzdCgpXG4gICAgdG9nZ2xlTW9kYWwoKVxuICAgIGRpc3BsYXlUYXNrcygpXG59XG4vL2FkZHMgUHJvamVjdCB0byBwcm9qZWN0cyBhcnJheVxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJval9OYW1lX0lucHQnKTtcbiAgICBsZXQgbmV3UHJvamVjdCA9IENhdGVnb3J5RmFjdG9yeShwcm9qSW5wdXQudmFsdWUpO1xuICAgIHN0b3JlUHJvamVjdChuZXdQcm9qZWN0KVxuICAgIGRpc3BsYXlQcm9qZWN0cygpXG4gICAgdG9nZ2xlTW9kYWwoKVxuICAgIHByb2pJbnB1dC52YWx1ZSA9ICcnXG5cbiAgICBcbn1cblxuZnVuY3Rpb24gdGFza0xpc3RlbmVycyhldmVudCl7XG4gICAgbGV0IHRhc2tjb2RlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkXG4gICAgbGV0IGV2ZW50TmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lXG4gICAgaWYoZXZlbnROYW1lID09PSAnRGVsZXRlJyl7XG4gICAgICAgIHJlbW92ZVRhc2sodGFza2NvZGUpXG4gICAgfWVsc2UgaWYoZXZlbnROYW1lID09PSAnU3RhdHVzJyl7XG4gICAgICAgIHRhc2tTdGF0dXModGFza2NvZGUpO1xuICAgIH1cbn1cblxuY29uc3QgcmVtb3ZlVGFzayA9ICh0YXNrSWQscHJvamVjdCkgPT4ge1xuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tTdG9yYWdlLmZvckVhY2goKHRhc2ssaW5kZXgpPT57XG4gICAgICAgIGlmKHRhc2suaWRDb2RlID09IHRhc2tJZCl7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC50YXNrU3RvcmFnZS5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG5cbiAgICBkaXNwbGF5VGFza3MoKVxuICAgIHNhdmVQcm9qZWN0TGlzdCgpXG59XG5cblxuZnVuY3Rpb24gdGFza1N0YXR1cyhjb2RlKXtcbiAgICBjb25zdCBkb21FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGF0dXMtYnRuJylcbiAgICBsZXQgZG9tRWxlbWVudCA7XG4gICAgZG9tRWxlbWVudHMuZm9yRWFjaCgoYnRuKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhidG4uZGF0YXNldC50YXNrSWQpXG4gICAgICAgIGlmKGJ0bi5kYXRhc2V0LnRhc2tJZCA9PSBjb2RlKXtcbiAgICAgICAgICAgIGRvbUVsZW1lbnQgPSBidG5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjdXJyZW50UHJvamVjdC50YXNrU3RvcmFnZS5mb3JFYWNoKCh0YXNrKT0+e1xuICAgICAgICBpZih0YXNrLmlkQ29kZSA9PSBjb2RlKXtcbiAgICAgICAgICAgIHRhc2suc3RhdHVzID0gIXRhc2suc3RhdHVzXG4gICAgICAgICAgICBpZih0YXNrLnN0YXR1cyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLXN0YXR1cy1ncmVlbicpO1xuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1zdGF0dXMtcmVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLXN0YXR1cy1ncmVlbicpO1xuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzay1zdGF0dXMtcmVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2suaWRDb2RlKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGFzay5zdGF0dXMpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHNhdmVQcm9qZWN0TGlzdCgpXG4gICAgLy9kaXNwbGF5VGFza3MoKVxuICAgIFxufVxuXG5leHBvcnQge1xuICAgIGFkZFByb2plY3QsXG4gICAgYWRkVGFza1RvUHJvaixcbiAgICBkaXNwbGF5UHJvamVjdHMsXG4gICAgZGlzcGxheVRhc2tzLFxuICAgIGFsbFRhc2tzLFxuICAgIGVkaXRUYXNrLFxuICAgIHRvZ2dsZVByb2plY3QsXG59IiwiY29uc3QgVGFza0ZhY3RvcnkgPSAobmFtZSxkZXNjLGRhdGUsY2F0ZWdvcnkpID0+IHtcbiAgICBsZXQgc3RhdHVzID0gZmFsc2U7XG4gICAgY29uc3QgaWRDb2RlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMClcblxuICAgIHJldHVybiB7XG4gICAgICAgIGlkQ29kZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkZXNjLFxuICAgICAgICBkYXRlLFxuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgbmFtZVxuICAgIH1cbn1cblxuY29uc3QgQ2F0ZWdvcnlGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgICBsZXQgdGFza1N0b3JhZ2UgPSBbXTtcbiAgICBcbiAgICByZXR1cm4ge3Rhc2tTdG9yYWdlLG5hbWV9XG59XG5leHBvcnR7XG4gICAgVGFza0ZhY3RvcnksXG4gICAgQ2F0ZWdvcnlGYWN0b3J5XG59XG5cbiIsIlxuaW1wb3J0IHsgQ2F0ZWdvcnlGYWN0b3J5LFRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xuXG5jb25zdCBHeW0gPSBDYXRlZ29yeUZhY3RvcnkoJ0d5bScpOyBcblxuY29uc3QgQ29kaW5nID0gQ2F0ZWdvcnlGYWN0b3J5KCdDb2RpbmcnKVxuXG5jb25zdCBXb3JrID0gQ2F0ZWdvcnlGYWN0b3J5KCdXb3JrJylcbmNvbnN0IHRhc2sxID0gVGFza0ZhY3RvcnkoJ0ZpbmlzaCBVSScsXCJGaW5pc2ggU3R5bGluZyBVSVwiLFwiMDkvMTgvMjAyMlwiLFwiQ29kaW5nXCIpO1xuY29uc3QgdGFzazIgPSBUYXNrRmFjdG9yeSgnYWRkIEVkaXQgVGFzayBCdXR0b24nLFwiQWRkIGVkaXQgdGFzayBidXR0b24gdG8gdGFzayBjYXJkc1wiLFwiMDkvMTgvMjAyMlwiLFwiQ29kaW5nXCIpO1xuY29uc3QgdGFzazMgPSBUYXNrRmFjdG9yeSgnSmF2YXNjcmlwdCcsXCJNYWtlIGRyb3AgZG93biBzZWxlY3Rpb24gZm9yIGNhdGVnb3J5IGlucHV0IGluIHRhc2sgY3JlYXRpb24gZm9ybVwiLFwiMDkvMTgvMjAyMlwiLFwiQ29kaW5nXCIpO1xuY29uc3QgdGFzazQgPSBUYXNrRmFjdG9yeSgnSmF2YXNjcmlwdCcsXCJkaXNwbGF5IGZpbmlzaGVkIHRhc2tzIGZ1bmN0aW9uXCIsXCIwOS8xOC8yMDIyXCIsXCJDb2RpbmdcIik7XG5Db2RpbmcudGFza1N0b3JhZ2UucHVzaCh0YXNrMSlcbkNvZGluZy50YXNrU3RvcmFnZS5wdXNoKHRhc2syKVxuQ29kaW5nLnRhc2tTdG9yYWdlLnB1c2godGFzazMpXG5Db2RpbmcudGFza1N0b3JhZ2UucHVzaCh0YXNrNClcbmxldCBwcm9qZWN0cyA9IFtHeW0sQ29kaW5nLFdvcmtdXG5cblxuY29uc3QgaW5pdGlhbFN0b3JhZ2UgPSAoKCkgPT4ge1xuICAgIGlmKGxvY2FsU3RvcmFnZS5sZW5ndGggID09PSAwICl7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIixKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH1cbiAgICBcbn0pKCk7XG5sZXQgbG9jYWxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG5cbmNvbnN0IHN0b3JlUHJvamVjdCA9IChuZXdQcm9qKSA9PiB7XG4gICAgbG9jYWxQcm9qZWN0cy5wdXNoKG5ld1Byb2opXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShsb2NhbFByb2plY3RzKSlcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpXG59XG5jb25zdCBzYXZlUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShsb2NhbFByb2plY3RzKSlcbn1cbmV4cG9ydHtcbiAgICBzdG9yZVByb2plY3QsXG4gICAgbG9jYWxQcm9qZWN0cyxcbiAgICBzYXZlUHJvamVjdExpc3QsXG4gICAgaW5pdGlhbFN0b3JhZ2Vcbn0iLCJpbXBvcnQge2FkZFByb2plY3QsdG9nZ2xlUHJvamVjdCxhZGRUYXNrVG9Qcm9qLGRpc3BsYXlQcm9qZWN0cyxkaXNwbGF5VGFza3MsYWxsVGFza3MsZWRpdFRhc2t9IGZyb20gXCIuL2FwcFwiO1xuLy9pbXBvcnQgeyBhZGRUYXNrVG9Qcm9qIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IHRvZ2dsZU1vZGFsLGRpc3BsYXlGb3JtcyB9IGZyb20gXCIuL01vZGFsXCI7XG5pbXBvcnQgeyBsb2NhbFByb2plY3RzIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5pbXBvcnQgcGVuY2lsIGZyb20gJy4uL2ljb25zL3BlbmNpbC5wbmcnXG5pbXBvcnQgZmF2b3JpdGUgZnJvbSAnLi4vaWNvbnMvZmF2b3JpdGUucG5nJ1xuaW1wb3J0IHN0YXIgZnJvbSAnLi4vaWNvbnMvc3RhcldoaXRlLnN2ZydcbmltcG9ydCB0cmFzaCBmcm9tICcuLi9pY29ucy90cmFzaC5wbmcnXG5cbmltcG9ydCB0aWNrZXQgZnJvbSAnLi4vaWNvbnMvdGlja2V0V2hpdGUuc3ZnJ1xuaW1wb3J0IGNvZGUgZnJvbSAnLi4vaWNvbnMvY29kZVdoaXRlLnN2ZydcblxuY29uc3QgYnVpbGRIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdUby1EbyBBcHAnO1xuICAgIGNvbnN0IGFkZE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRNb2RhbC5pbm5lclRleHQgPSAnTmV3IFRhc2snXG4gICAgYWRkTW9kYWwuaWQgPSAnb3Blbl9Nb2RhbCdcbiAgICBhZGRNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdG9nZ2xlTW9kYWwpXG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZSxhZGRNb2RhbClcbiAgICByZXR1cm4gaGVhZGVyIFxufVxuXG5jb25zdCBjcmVhdGVOYXZCdXR0b24gPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb2pCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHByb2pCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvai1idG4taG92ZXInKVxuICAgIHByb2pCdXR0b24uaW5uZXJUZXh0ID0gbmFtZVxuICAgIHByb2pCdXR0b24uZGF0YXNldC5wcm9qZWN0ID0gbmFtZVxuICAgIFxuICAgIHJldHVybiBwcm9qQnV0dG9uXG59XG5cblxuXG4vL2FkZCBjb2RpbmcgYW5kIHdvcmsgVG9EbyBidXR0b25zIHRvIHRoZSBtYWluIG5hdiBhbmQgbm90IHByb2plY3QgbmF2LiBcblxuY29uc3QgYnVpbGROYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgICBjb25zdCB0YXNrQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b25zJylcblxuICAgXG4gICAgY29uc3QgY29tcGxldGVUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29tcGxldGVUYXNrcy5pZCA9J2NvbXBsZXRlZC10YXNrcydcbiAgICBjb21wbGV0ZVRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhbGxUYXNrcyk7XG4gICAgXG5cbiAgICBjb25zdCBhbGxUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgXG4gICAgYWxsVGFza0J0bi5pZCA9ICdhbGwtdGFza3MnXG4gICAgYWxsVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWxsVGFza3MpXG4gICAgXG4gICAgY29uc3QgY29kZVByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvZGVQcm9qLmlkID0gJ2NvZGVCdG4nXG4gICAgY29kZVByb2ouZGF0YXNldC5wcm9qZWN0ID0gJ0NvZGluZydcbiAgICBjb2RlUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdG9nZ2xlUHJvamVjdClcblxuICAgIGNvbnN0IHByb2plY3RNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0TWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluLXByb2plY3QtY29udGFpbmVyJylcbiAgICBcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnUHJvamVjdHMnXG4gICAgcHJvamVjdE1haW4uYXBwZW5kKHRpdGxlLHByb2plY3RDb250YWluZXIpXG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qX25hdl9jb250YWluZXInKTtcbiAgXG4gICAgY29uc3Qgd29ya1Byb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHdvcmtQcm9qLmlkID0gJ3dvcmtCdG4nXG4gICAgd29ya1Byb2ouZGF0YXNldC5wcm9qZWN0ID0gJ1dvcmsnXG4gICAgd29ya1Byb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRvZ2dsZVByb2plY3QpXG5cblxuXG4gICAgY29uc3QgbmF2QnRucyA9IFthbGxUYXNrQnRuLGNvZGVQcm9qLGNvbXBsZXRlVGFza3Msd29ya1Byb2pdXG4gICAgbmF2QnRucy5mb3JFYWNoKChidG4pPT57XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCduYXZfYnRuJylcbiAgICB9KVxuICAgIHRhc2tCdXR0b25Db250YWluZXIuYXBwZW5kKGFsbFRhc2tCdG4sY29tcGxldGVUYXNrcyxjb2RlUHJvaix3b3JrUHJvailcbiAgICBuYXYuYXBwZW5kKHRhc2tCdXR0b25Db250YWluZXIscHJvamVjdE1haW4pXG5cbiAgICByZXR1cm4gbmF2XG59XG4vL01PREFMXG5jb25zdCBidWlsZFRhc2tGb3JtID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybS5uYW1lID0gJ3Rhc2stZm9ybSdcbiAgICBmb3JtLmlkID0gJ3Rhc2tfTW9kYWwnXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIkNyZWF0ZSBUYXNrXCJcblxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCdcbiAgICBuYW1lSW5wdXQubmFtZSA9ICduYW1lJ1xuICAgIG5hbWVJbnB1dC5pZCA9ICduYW1lX2lucHV0J1xuICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWlucHQnKVxuICAgIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGl0bGVcIlxuXG4gICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2Rlc2MnKVxuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnZGVzY19pbnB1dCcpXG4gICAgZGVzY0lucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5wdCcpXG4gICAgZGVzY0lucHV0LnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiXG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdkYXRlX2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5wdCcpXG4gICAgXG5cbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgbG9jYWxQcm9qZWN0cy5mb3JFYWNoKChwcm9qKT0+e1xuICAgICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICBvcHQudmFsdWUgPSBwcm9qLm5hbWVcbiAgICAgICAgb3B0LmlubmVyVGV4dCA9IHByb2oubmFtZVxuXG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQob3B0KVxuICAgIH0pO1xuXG4gICAgXG4gICAgcHJvamVjdC5uYW1lID0gJ2NhdGVnb3J5J1xuICAgIHByb2plY3QuaWQgPSAncHJvamVjdF9Bc3NpZ24nXG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWlucHQnKVxuICAgIFxuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCd0YXNrX3N1Ym1pdCcpXG4gICAgc3VibWl0LnR5cGUgPSAnc3VibWl0J1xuICAgIHN1Ym1pdC5pbm5lclRleHQgPSAnQWRkJ1xuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkVGFza1RvUHJvailcblxuXG4gICAgY29uc3QgdGV4dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRleHRGb3JtLmNsYXNzTGlzdC5hZGQoJ3RleHQtZm9ybScpXG4gICAgdGV4dEZvcm0uYXBwZW5kKG5hbWVJbnB1dCxkZXNjSW5wdXQpXG5cbiAgICBjb25zdCBvcHRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBvcHRGb3JtLmNsYXNzTGlzdC5hZGQoJ29wdC1mb3JtJylcbiAgICBvcHRGb3JtLmFwcGVuZChkYXRlSW5wdXQscHJvamVjdClcbiAgICBjb25zdCBlbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZW50cnkuY2xhc3NMaXN0LmFkZCgnZW50cnktY29udGFpbmVyJylcbiAgICBlbnRyeS5hcHBlbmQodGV4dEZvcm0sb3B0Rm9ybSlcbiAgICBmb3JtLmFwcGVuZCh0aXRsZSxlbnRyeSxzdWJtaXQpO1xuXG4gICAgcmV0dXJuIGZvcm1cbn1cbmNvbnN0IGJ1aWxkUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RfbW9kYWwnKVxuXG4gICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2pOYW1lLmlkID0gJ3Byb2pfTmFtZV9JbnB0JztcbiAgICBwcm9qTmFtZS5uYW1lID0gJ3Byb2plY3RfTmFtZV9JbnB0JztcbiAgICBcbiAgICBjb25zdCBhZGRQcm9qQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRQcm9qQnRuLmlkID0gJ2FkZF9Qcm9qX0J1dHRvbidcbiAgICBhZGRQcm9qQnRuLmlubmVyVGV4dCA9ICdBZGQnXG4gICAgYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkUHJvamVjdClcblxuICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgcHJvak5hbWUsXG4gICAgICAgIGFkZFByb2pCdG5cbiAgICApXG4gICAgcmV0dXJuIG1vZGFsQ29udGFpbmVyXG59XG5jb25zdCBidWlsZE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFzdGVyX01vZGFsX0NvbnRhaW5lcicpXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5pZCA9ICdtYXN0ZXJfTW9kYWwnXG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5hdi5pZCA9ICdtYXN0ZXJfTW9kYWxfTmF2J1xuICAgIFxuICAgIGNvbnN0IG1vZGFsQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcHJvamVjdC5pZCA9ICduZXdfUHJvamVjdCdcbiAgICBwcm9qZWN0LmlubmVyVGV4dCA9ICdQcm9qZWN0J1xuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRpc3BsYXlGb3JtcylcblxuICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRvZG8uaWQgPSAnbmV3X1Rhc2snO1xuICAgIHRvZG8uaW5uZXJUZXh0ID0gJ1Rhc2snXG4gICAgdG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZGlzcGxheUZvcm1zKVxuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybUNvbnRhaW5lci5pZCA9ICdtb2RhbF9Gb3JtcydcbiAgICBjb25zdCBmaXJzdEZvcm0gPSBidWlsZFRhc2tGb3JtKCk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdEZvcm0pXG5cbiAgICBjb25zdCBjbG9zZU91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY2xvc2VPdXQuaW5uZXJUZXh0ID0gJ1gnXG4gICAgY2xvc2VPdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRvZ2dsZU1vZGFsKVxuICAgIGNsb3NlT3V0LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLW1vZGFsJylcbiAgICBtb2RhbEJ0bnMuYXBwZW5kKHByb2plY3QsdG9kbylcbiAgICBuYXYuYXBwZW5kKG1vZGFsQnRucyxjbG9zZU91dClcbiAgICBtb2RhbC5hcHBlbmQobmF2LGZvcm1Db250YWluZXIpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobW9kYWwpXG5cbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lclxuXG59XG5jb25zdCBnaXZlRG9tSW5wdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZV9pbnB1dCcpXG4gICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY19pbnB1dCcpXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZV9pbnB1dCcpXG4gICAgY29uc3QgdGFza0NhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfQXNzaWduJylcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRhc2tOYW1lLFxuICAgICAgICB0YXNrRGVzYyxcbiAgICAgICAgdGFza0RhdGUsXG4gICAgICAgIHRhc2tDYXRlZ29yeVxuICAgIH1cbn1cbmNvbnN0IGJ1aWxkVGFza0VsZW1lbnQgPSAobmFtZSxkZXNjLGRhdGUsY29kZSxzdGF0dXMpID0+IHtcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2tfY2FyZCcpXG4gICAgdGFza0NhcmQuZGF0YXNldC50YXNrQ29kZSA9IGAke2NvZGV9YFxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWNvbnRhaW5lcicpXG4gICAgY29uc3QgdGl0bGVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgdGl0bGVUYWcuaW5uZXJUZXh0ID0gbmFtZVxuICAgIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlVGFnKVxuICAgIFxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGVzY3JpcHRpb25UYWcuaW5uZXJUZXh0ID0gZGVzY1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzY3JpcHRpb24nKVxuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGFnKVxuXG4gICAgLy9jb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBkYXRlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZGF0ZVRhZy5pbm5lclRleHQgPSBkYXRlXG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQoZGF0ZVRhZylcblxuICAgIFxuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIFxuICAgIGVkaXQuZGF0YXNldC50YXNrSWQgPSBjb2RlXG4gICAgZWRpdC5uYW1lID0gJ0VkaXQnXG4gICAgZWRpdC5pZCA9ICdlZGl0LXRhc2snXG4gICAgZWRpdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cGVuY2lsfSlgXG4gICAgZWRpdC5jbGFzc0xpc3QuYWRkKCd0YXNrX0J0bicpXG4gICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlZGl0VGFzaylcbiAgICAgICAgXG4gIFxuICAgIGNvbnN0IHRhc2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2tCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1idG4tY29udGFpbmVyJylcblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGRlbGV0ZVRhc2suc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RyYXNofSlgXG4gICAgZGVsZXRlVGFzay5kYXRhc2V0LnRhc2tJZCA9IGNvZGUgXG4gICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrX0J0bicpXG4gICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJylcbiAgICBkZWxldGVUYXNrLm5hbWUgPSAnRGVsZXRlJ1xuICAgIFxuXG4gICAgY29uc3QgbWFya0NvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBtYXJrQ29tcGxldGUuZGF0YXNldC50YXNrSWQgPSBjb2RlXG4gICAgbWFya0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tfQnRuJylcbiAgICBtYXJrQ29tcGxldGUubmFtZSA9ICdTdGF0dXMnXG4gICAgbWFya0NvbXBsZXRlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtmYXZvcml0ZX0pYFxuICAgIG1hcmtDb21wbGV0ZS5jbGFzc0xpc3QuYWRkKCdzdGF0dXMtYnRuJylcbiAgICBcbiAgICBpZihzdGF0dXM9PT10cnVlKXtcbiAgICAgICAgbWFya0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdHVzLWdyZWVuJyk7XG4gICAgICAgIG1hcmtDb21wbGV0ZS5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLXN0YXR1cy1yZWQnKVxuICAgIFxuICAgIH1lbHNle1xuICAgICAgICBtYXJrQ29tcGxldGUuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1zdGF0dXMtZ3JlZW4nKTtcbiAgICAgICAgbWFya0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdHVzLXJlZCcpXG5cbiAgICB9XG5cbiAgICB0YXNrQnRuQ29udGFpbmVyLmFwcGVuZChkZWxldGVUYXNrLG1hcmtDb21wbGV0ZSxlZGl0KVxuICAgIFxuXG4gICAgdGFza0NhcmQuYXBwZW5kKFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIHRhc2tCdG5Db250YWluZXJcblxuICAgIClcblxuICAgIHJldHVybiB0YXNrQ2FyZFxufVxuXG5cblxuXG5jb25zdCBsb2FkcGFnZSA9ICgpID0+e1xuICAgIGNvbnN0IGhlYWRlciA9IGJ1aWxkSGVhZGVyKClcbiAgICBjb25zdCBuYXYgPSBidWlsZE5hdigpXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgIC8vYWRkIGZvb3RlclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlcixuYXYsbWFpbixmb290ZXIpXG4gICAgXG4gICAgZGlzcGxheVByb2plY3RzKClcbiAgICBkaXNwbGF5VGFza3MoKVxufTtcbi8vXG5leHBvcnR7XG4gICAgbG9hZHBhZ2UsXG4gICAgY3JlYXRlTmF2QnV0dG9uLFxuICAgIGJ1aWxkVGFza0Zvcm0sXG4gICAgYnVpbGRQcm9qZWN0Rm9ybSxcbiAgICBidWlsZE1vZGFsLFxuICAgIGdpdmVEb21JbnB0cyxcbiAgICBidWlsZFRhc2tFbGVtZW50XG59XG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgeyBpbml0aWFsU3RvcmFnZSB9IGZyb20gJy4vbW9kdWxlcy9zdG9yYWdlJztcbmltcG9ydCB7IGxvYWRwYWdlIH0gZnJvbSAnLi9tb2R1bGVzL3VpJztcblxuXG5sb2FkcGFnZSgpXG5cblxuXG4vL2NvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9