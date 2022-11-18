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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #121212;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n\nheader {\n  grid-column: 1/13;\n  height: 5vh;\n  border-bottom: 1px solid white;\n}\n\nnav {\n  grid-column: 1/2;\n  border-right: 1px solid white;\n  padding: 20px;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.nav-buttons {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n}\n\n.nav_btn {\n  width: 75px;\n  height: 75px;\n  padding: 10px;\n  text-align: center;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  grid-column: 2/13;\n  padding: 10px;\n  background-color: #181818;\n}\n\n.proj_nav_container {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: center;\n}\n\n.proj_nav_container > button {\n  background-color: transparent;\n  border: none;\n  width: 80%;\n  text-align: start;\n  padding: 5px;\n  font-size: 1.3rem;\n}\n\n.master_Modal_Container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(56, 56, 56, 0.863);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#master_Modal {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  height: 10vh;\n  width: 600px;\n  --webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n  animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n@-webkit-keyframes slide-bottom {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(200px);\n    transform: translateY(200px);\n  }\n}\n@keyframes slide-bottom {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(200px);\n    transform: translateY(200px);\n  }\n}\n#open_Modal {\n  width: 100px;\n}\n\n.close-modal {\n  width: 50px;\n  height: 50px;\n  border: none;\n  border-radius: 25px;\n  background-color: red;\n  color: white;\n  box-shadow: 0px 0px 1px 1px black;\n  font-size: 20px;\n  align-self: center;\n}\n\n#task_Modal {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding-top: 10px;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 1px 1px 3px black;\n  align-items: center;\n}\n\n.task-inpt {\n  height: 25px;\n  border-radius: 5px;\n  border: none;\n  padding: 5px;\n  box-shadow: 1px 1px 3px black;\n  width: 100%;\n}\n\n#task_submit {\n  width: 50px;\n  padding: 5px;\n  border: none;\n  background-color: green;\n  border-radius: 15px;\n  box-shadow: 1px 1px 3px black;\n}\n\n.task_card {\n  box-shadow: 0 1px 2px rgb(72, 72, 72);\n  border-radius: 15px;\n  padding: 20px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  align-items: center;\n  color: white;\n  font-size: 1.2rem;\n  gap: 10px;\n}\n\n.task-btn-container {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n\n.task_Btn {\n  padding: 10px;\n  border: 1px solid black;\n  border-radius: 10px;\n  min-height: 40px;\n  text-align: center;\n  box-shadow: 0 0 2px grey;\n}\n\n.task-status-red {\n  background-color: red;\n}\n\n.task-status-green {\n  background-color: green;\n}\n\n.delete-btn {\n  color: red;\n}\n\n.task-description {\n  grid-column: 2/4;\n  text-align: start;\n}\n\n.main-project-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  box-shadow: 0 0 3px rgb(38, 37, 37);\n  padding: 10px;\n  background-color: #C0E39E;\n}\n\nfooter {\n  grid-row: 3;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,WAAA;EACA,sBAAA;AACJ;;AASA;EACI,yBATa;EAUb,aAAA;EACA,sCAAA;AANJ;;AAUA;EACI,iBAAA;EACA,WAAA;EACA,8BAAA;AAPJ;;AAWA;EACI,gBAAA;EACA,6BAAA;EAEA,aAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AATJ;;AAcA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AAXJ;;AAcA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;AAXJ;;AAeA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,iBAAA;EACA,aAAA;EACA,yBAvDW;AA2Cf;;AAeA;EACI,aAAA;EACA,sBAAA;EACA,QAAA;EACA,mBAAA;AAZJ;;AAcA;EACI,6BAAA;EACA,YAAA;EACA,UAAA;EACA,iBAAA;EACA,YAAA;EACA,iBAAA;AAXJ;;AAeA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,yCAAA;EACA,aAAA;EACA,sBAAA;EAEA,mBAAA;AAbJ;;AAkBA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,YAAA;EACA,YAAA;EACA,mFAAA;EACH,sEAAA;AAfD;;AAoBA;EACI;IACE,gCAAA;IACQ,wBAAA;EAjBZ;EAmBE;IACE,oCAAA;IACQ,4BAAA;EAjBZ;AACF;AAmBE;EACE;IACE,gCAAA;IACQ,wBAAA;EAjBZ;EAmBE;IACE,oCAAA;IACQ,4BAAA;EAjBZ;AACF;AAoBA;EACI,YAAA;AAlBJ;;AAsBA;EACI,WAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,qBAAA;EACA,YAAA;EACA,iCAAA;EACA,eAAA;EACA,kBAAA;AAnBJ;;AAqBA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,iBAAA;EAEA,aAAA;EACA,kBAAA;EACA,6BAAA;EACA,mBAAA;AAnBJ;;AAwBA;EACI,YAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,WAAA;AArBJ;;AAuBA;EACI,WAAA;EACA,YAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,6BAAA;AApBJ;;AAsBA;EAEI,qCAAA;EACA,mBAAA;EACA,aAAA;EACA,aAAA;EACA,0CAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;EACA,SAAA;AApBJ;;AAyBA;EACI,aAAA;EACA,yBAAA;EACA,SAAA;AAtBJ;;AAwBA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,wBAAA;AArBJ;;AAwBA;EACI,qBAAA;AArBJ;;AAuBA;EACI,uBAAA;AApBJ;;AAsBA;EACI,UAAA;AAnBJ;;AAuBA;EACI,gBAAA;EACA,iBAAA;AApBJ;;AAsBA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,mCAAA;EACA,aAAA;EACA,yBAAA;AAnBJ;;AAyBA;EACI,WAAA;AAtBJ","sourcesContent":["*{\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n$dark-background:#121212;\n$secondary-bg: #181818;\n$primary-text-color: #ffffff;\n$light-bg: #3d3d3d;\n$purp-bg : #6e5b6e;\n\n\n\nbody{\n    background-color: $dark-background;\n    display: grid;\n    grid-template-columns: repeat(12,1fr);\n    \n}\n\nheader{\n    grid-column:  1/13;\n    height: 5vh;\n    border-bottom: 1px solid white;\n    \n}\n\nnav{\n    grid-column: 1/2;\n    border-right: 1px solid white;\n    \n    padding: 20px;\n    min-height: 90vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    \n    \n    \n}\n.nav-buttons{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n}\n\n.nav_btn{\n    width: 75px;\n    height: 75px;\n    padding: 10px;\n    text-align: center;\n}\n\n\nmain{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    grid-column: 2/13;\n    padding: 10px;\n    background-color: $secondary-bg;\n    \n}\n.proj_nav_container{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    align-items: center;\n}\n.proj_nav_container>button{\n    background-color: transparent;\n    border: none;\n    width: 80%;\n    text-align: start;\n    padding: 5px;\n    font-size: 1.3rem;\n}\n\n\n.master_Modal_Container{\n    position:absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(56, 56, 56, 0.863);\n    display: flex;\n    flex-direction: column;\n    \n    align-items: center;\n    \n\n}\n\n#master_Modal{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    height: 10vh;\n    width: 600px;\n    --webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n\tanimation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n    \n\n\n}\n@-webkit-keyframes slide-bottom {\n    0% {\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n    }\n    100% {\n      -webkit-transform: translateY(200px);\n              transform: translateY(200px);\n    }\n  }\n  @keyframes slide-bottom {\n    0% {\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n    }\n    100% {\n      -webkit-transform: translateY(200px);\n              transform: translateY(200px);\n    }\n  }\n\n#open_Modal{\n    width: 100px;\n    \n    \n}\n.close-modal{\n    width: 50px;\n    height: 50px;\n    border: none;\n    border-radius: 25px;\n    background-color: red;\n    color: white;\n    box-shadow: 0px 0px 1px 1px black;\n    font-size: 20px;\n    align-self: center;\n}\n#task_Modal{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding-top: 10px;\n    \n    padding: 10px;\n    border-radius: 5px;\n    box-shadow: 1px 1px 3px black;\n    align-items: center;\n    \n    \n\n} \n.task-inpt{\n    height: 25px;\n    border-radius: 5px;\n    border: none;\n    padding: 5px;\n    box-shadow: 1px 1px 3px black;\n    width: 100%;\n}\n#task_submit{\n    width: 50px;\n    padding: 5px;\n    border: none;\n    background-color: green;\n    border-radius: 15px;\n    box-shadow: 1px 1px 3px black;\n}\n.task_card{\n    \n    box-shadow: 0 1px 2px rgb(72, 72, 72);\n    border-radius: 15px;\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    align-items: center;\n    color:white;\n    font-size: 1.2rem;\n    gap: 10px;\n    \n       \n}\n\n.task-btn-container{\n    display: flex;\n    justify-content: flex-end;\n    gap:10px\n}\n.task_Btn{\n    padding: 10px;\n    border: 1px solid black;\n    border-radius: 10px;\n    min-height: 40px ;\n    text-align: center;\n    box-shadow: 0 0 2px grey;\n\n}\n.task-status-red{\n    background-color: red;\n}\n.task-status-green{\n    background-color: green;\n}\n.delete-btn{\n    color: red;\n    \n}\n\n.task-description{\n    grid-column: 2/4;\n    text-align: start;\n}\n.main-project-container{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    box-shadow: 0 0 3px rgb(38, 37, 37);\n    padding: 10px;\n    background-color: #C0E39E;\n}\n\n\n\n\nfooter{\n    grid-row:3\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/modules/app.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");



let toggle = false
const main  = document.querySelector('main')
const toggleModal = (event) => {
    const main  = document.querySelector('main')
    if(toggle === false){
        console.log(main)
        main.style.gridColumn = "4/10"
        main.style.gridRow = "2"
        document.body.appendChild((0,_ui__WEBPACK_IMPORTED_MODULE_1__.buildModal)()) 
    }else{
        main.style.gridColumn = "4/13"
        const modal = document.querySelector('.master_Modal_Container');
        
        document.body.removeChild(modal) 
    }

   
    toggle = !toggle
}

function displayForms(event){
    const container = document.getElementById('modal_Forms');
    container.innerHTML = ''
    
    if(event.target.id === 'new_Project'){
        container.appendChild((0,_ui__WEBPACK_IMPORTED_MODULE_1__.buildProjectForm)())
    }else{
        container.appendChild((0,_ui__WEBPACK_IMPORTED_MODULE_1__.buildTaskForm)())
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

//import { addTaskToProj } from "./tasks";



const buildHeader = () => {
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.innerText = 'To-Do App'

    header.appendChild(title)
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
    completeTasks.innerText = 'finished'
    completeTasks.id ='completed-tasks'
    completeTasks.addEventListener('click',_app__WEBPACK_IMPORTED_MODULE_0__.allTasks);

    const allTaskBtn = document.createElement('button');
    allTaskBtn.innerText = "All Tasks"
    allTaskBtn.id = 'all-tasks'
    allTaskBtn.addEventListener('click',_app__WEBPACK_IMPORTED_MODULE_0__.allTasks)
    //taskButtonContainer.append(allTaskBtn,completeTasks)
    const projectMain = document.createElement('div')
    projectMain.classList.add('main-project-container')
    //project buttons contain
    
    const projectContainer = document.createElement('div')
    const title = document.createElement('h3')
    title.innerText = 'Projects'
    projectMain.append(title,projectContainer)
    projectContainer.classList.add('proj_nav_container');
    
    const addModal = document.createElement('button')
    addModal.innerText = '+'
    addModal.id = 'open_Modal'
    addModal.addEventListener('click',_Modal__WEBPACK_IMPORTED_MODULE_1__.toggleModal)

    const codeProj = document.createElement('button')
    codeProj.innerText = 'Code'
    codeProj.dataset.project = 'Coding'
    codeProj.addEventListener('click',_app__WEBPACK_IMPORTED_MODULE_0__.toggleProject)

    const workProj = document.createElement('button')
    workProj.innerText = 'Work'
    workProj.dataset.project = 'Work'
    workProj.addEventListener('click',_app__WEBPACK_IMPORTED_MODULE_0__.toggleProject)

    const navBtns = [allTaskBtn,completeTasks,codeProj,workProj]
    navBtns.forEach((btn)=>{
        btn.classList.add('nav_btn')
    })
    taskButtonContainer.append(allTaskBtn,completeTasks,codeProj,workProj,addModal)
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

    const descInput = document.createElement('input');
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

    form.append(title,nameInput,descInput,dateInput,project,submit);

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

    nav.append(project,todo)
    modal.append(nav,formContainer)
    mainContainer.append(modal,closeOut)

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
    title.innerText = name

    const description = document.createElement('div')
    description.innerText = desc
    description.classList.add('task-description')

    const dueDate = document.createElement('div')
    dueDate.innerText = date

    
    const edit = document.createElement('button')
    edit.innerText='Edit'
    edit.dataset.taskId = code
    edit.name = 'Edit'
    edit.id = 'edit-task'
    edit.classList.add('task_Btn')
    edit.addEventListener("click",_app__WEBPACK_IMPORTED_MODULE_0__.editTask)
        
  
    const taskBtnContainer = document.createElement('div')
    taskBtnContainer.classList.add('task-btn-container')

    const deleteTask = document.createElement('button')
    deleteTask.innerText = 'Delete'
    deleteTask.dataset.taskId = code 
    deleteTask.classList.add('task_Btn')
    deleteTask.classList.add('delete-btn')
    deleteTask.name = 'Delete'
    

    const markComplete = document.createElement('button')
    markComplete.dataset.taskId = code
    markComplete.classList.add('task_Btn')
    markComplete.name = 'Status'
    markComplete.innerText = 'Status'
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
        dueDate,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDBDQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBZTtBQUNuQixJQUFJLG1EQUFZO0FBQ2hCO0FBQ0E7QUFTQzs7Ozs7Ozs7OztVQ2hTRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDOEI7QUFDWDs7O0FBR3hDLHFEQUFROzs7O0FBSVIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9mYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzEzO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbm5hdiB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWluLWhlaWdodDogOTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ubmF2X2J0biB7XFxuICB3aWR0aDogNzVweDtcXG4gIGhlaWdodDogNzVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBncmlkLWNvbHVtbjogMi8xMztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xcbn1cXG5cXG4ucHJval9uYXZfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJval9uYXZfY29udGFpbmVyID4gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5tYXN0ZXJfTW9kYWxfQ29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NiwgNTYsIDU2LCAwLjg2Myk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNtYXN0ZXJfTW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICB3aWR0aDogNjAwcHg7XFxuICAtLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWJvdHRvbSAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcXG4gIGFuaW1hdGlvbjogc2xpZGUtYm90dG9tIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1ib3R0b20ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzbGlkZS1ib3R0b20ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcXG4gIH1cXG59XFxuI29wZW5fTW9kYWwge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uY2xvc2UtbW9kYWwge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IGJsYWNrO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jdGFza19Nb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGJsYWNrO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2staW5wdCB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jdGFza19zdWJtaXQge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCBibGFjaztcXG59XFxuXFxuLnRhc2tfY2FyZCB7XFxuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiKDcyLCA3MiwgNzIpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGFzay1idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGFza19CdG4ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDAgMnB4IGdyZXk7XFxufVxcblxcbi50YXNrLXN0YXR1cy1yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udGFzay1zdGF0dXMtZ3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5kZWxldGUtYnRuIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtY29sdW1uOiAyLzQ7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLm1haW4tcHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYigzOCwgMzcsIDM3KTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzBFMzlFO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZ3JpZC1yb3c6IDM7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUNKOztBQVNBO0VBQ0kseUJBVGE7RUFVYixhQUFBO0VBQ0Esc0NBQUE7QUFOSjs7QUFVQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBUEo7O0FBV0E7RUFDSSxnQkFBQTtFQUNBLDZCQUFBO0VBRUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFUSjs7QUFjQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQVhKOztBQWNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFYSjs7QUFlQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkF2RFc7QUEyQ2Y7O0FBZUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUFaSjs7QUFjQTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVhKOztBQWVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7QUFiSjs7QUFrQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtRkFBQTtFQUNILHNFQUFBO0FBZkQ7O0FBb0JBO0VBQ0k7SUFDRSxnQ0FBQTtJQUNRLHdCQUFBO0VBakJaO0VBbUJFO0lBQ0Usb0NBQUE7SUFDUSw0QkFBQTtFQWpCWjtBQUNGO0FBbUJFO0VBQ0U7SUFDRSxnQ0FBQTtJQUNRLHdCQUFBO0VBakJaO0VBbUJFO0lBQ0Usb0NBQUE7SUFDUSw0QkFBQTtFQWpCWjtBQUNGO0FBb0JBO0VBQ0ksWUFBQTtBQWxCSjs7QUFzQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBbkJKOztBQXFCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFuQko7O0FBd0JBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFyQko7O0FBdUJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBcEJKOztBQXNCQTtFQUVJLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBcEJKOztBQXlCQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUF0Qko7O0FBd0JBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUFyQko7O0FBd0JBO0VBQ0kscUJBQUE7QUFyQko7O0FBdUJBO0VBQ0ksdUJBQUE7QUFwQko7O0FBc0JBO0VBQ0ksVUFBQTtBQW5CSjs7QUF1QkE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBcEJKOztBQXNCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQW5CSjs7QUF5QkE7RUFDSSxXQUFBO0FBdEJKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiRkYXJrLWJhY2tncm91bmQ6IzEyMTIxMjtcXG4kc2Vjb25kYXJ5LWJnOiAjMTgxODE4O1xcbiRwcmltYXJ5LXRleHQtY29sb3I6ICNmZmZmZmY7XFxuJGxpZ2h0LWJnOiAjM2QzZDNkO1xcbiRwdXJwLWJnIDogIzZlNWI2ZTtcXG5cXG5cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1iYWNrZ3JvdW5kO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwxZnIpO1xcbiAgICBcXG59XFxuXFxuaGVhZGVye1xcbiAgICBncmlkLWNvbHVtbjogIDEvMTM7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICAgIFxcbn1cXG5cXG5uYXZ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWluLWhlaWdodDogOTB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbn1cXG4ubmF2LWJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLm5hdl9idG57XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMi8xMztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iZztcXG4gICAgXFxufVxcbi5wcm9qX25hdl9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJval9uYXZfY29udGFpbmVyPmJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcblxcbi5tYXN0ZXJfTW9kYWxfQ29udGFpbmVye1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NiwgNTYsIDU2LCAwLjg2Myk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG5cXG59XFxuXFxuI21hc3Rlcl9Nb2RhbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgLS13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1ib3R0b20gMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XFxuXFx0YW5pbWF0aW9uOiBzbGlkZS1ib3R0b20gMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XFxuICAgIFxcblxcblxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtYm90dG9tIHtcXG4gICAgMCUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XFxuICAgIH1cXG4gIH1cXG4gIEBrZXlmcmFtZXMgc2xpZGUtYm90dG9tIHtcXG4gICAgMCUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XFxuICAgIH1cXG4gIH1cXG5cXG4jb3Blbl9Nb2RhbHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBcXG4gICAgXFxufVxcbi5jbG9zZS1tb2RhbHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuI3Rhc2tfTW9kYWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGJsYWNrO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgXFxuXFxufSBcXG4udGFzay1pbnB0e1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuI3Rhc2tfc3VibWl0e1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCBibGFjaztcXG59XFxuLnRhc2tfY2FyZHtcXG4gICAgXFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2IoNzIsIDcyLCA3Mik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIFxcbiAgICAgICBcXG59XFxuXFxuLnRhc2stYnRuLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOjEwcHhcXG59XFxuLnRhc2tfQnRue1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWluLWhlaWdodDogNDBweCA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCBncmV5O1xcblxcbn1cXG4udGFzay1zdGF0dXMtcmVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi50YXNrLXN0YXR1cy1ncmVlbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcbi5kZWxldGUtYnRue1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb257XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubWFpbi1wcm9qZWN0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYigzOCwgMzcsIDM3KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MwRTM5RTtcXG59XFxuXFxuXFxuXFxuXFxuZm9vdGVye1xcbiAgICBncmlkLXJvdzozXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGVkaXRUYXNrIH0gZnJvbSAnLi9hcHAnXG5pbXBvcnQgeyBidWlsZFByb2plY3RGb3JtLGJ1aWxkVGFza0Zvcm0sYnVpbGRNb2RhbCB9IGZyb20gJy4vdWknXG5cbmxldCB0b2dnbGUgPSBmYWxzZVxuY29uc3QgbWFpbiAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbmNvbnN0IHRvZ2dsZU1vZGFsID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbWFpbiAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBpZih0b2dnbGUgPT09IGZhbHNlKXtcbiAgICAgICAgY29uc29sZS5sb2cobWFpbilcbiAgICAgICAgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCI0LzEwXCJcbiAgICAgICAgbWFpbi5zdHlsZS5ncmlkUm93ID0gXCIyXCJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChidWlsZE1vZGFsKCkpIFxuICAgIH1lbHNle1xuICAgICAgICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjQvMTNcIlxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXN0ZXJfTW9kYWxfQ29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsKSBcbiAgICB9XG5cbiAgIFxuICAgIHRvZ2dsZSA9ICF0b2dnbGVcbn1cblxuZnVuY3Rpb24gZGlzcGxheUZvcm1zKGV2ZW50KXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxfRm9ybXMnKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICBcbiAgICBpZihldmVudC50YXJnZXQuaWQgPT09ICduZXdfUHJvamVjdCcpe1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRQcm9qZWN0Rm9ybSgpKVxuICAgIH1lbHNle1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRUYXNrRm9ybSgpKVxuICAgIH1cbiAgICAgICBcbn1cblxuXG5cblxuZXhwb3J0e1xuICAgIHRvZ2dsZU1vZGFsLFxuICAgIGRpc3BsYXlGb3Jtc1xufSIsImltcG9ydCB7Q2F0ZWdvcnlGYWN0b3J5LFRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xuaW1wb3J0IHsgdG9nZ2xlTW9kYWwgfSBmcm9tIFwiLi9Nb2RhbFwiO1xuaW1wb3J0IHtjcmVhdGVOYXZCdXR0b24sZ2l2ZURvbUlucHRzLGJ1aWxkVGFza0VsZW1lbnQgfSBmcm9tIFwiLi91aVwiO1xuaW1wb3J0IHsgc3RvcmVQcm9qZWN0LGxvY2FsUHJvamVjdHMsc2F2ZVByb2plY3RMaXN0fSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cblxuXG5cbmxldCBjdXJyZW50UHJvamVjdCA9IGxvY2FsUHJvamVjdHNbMV1cblxuXG5jb25zdCAgZGlzcGxheVByb2plY3RzID0gKCkgPT57XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2pfbmF2X2NvbnRhaW5lcicpXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgbG9jYWxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xuICAgICAgICBsZXQgbmV3TmF2QnRuID0gY3JlYXRlTmF2QnV0dG9uKHByb2plY3QubmFtZSk7XG4gICAgICAgIG5ld05hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdG9nZ2xlUHJvamVjdCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdOYXZCdG4pO1xuICAgICAgICBcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFByb2plY3RzKVxuICAgIFxufVxuLy9jcmVhdGUgVGFzayBEb20sIGRpc3BsYXkgVGFzayBEb20sIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXJzXG4vL2Rpc3BsYXkgVGFza3MgYW5kIEFsbCB0YXNrcyBzaG91bGQgYmUgbWFkZSBpbnRvIG9uZSBzaW5nbGUgZnVuY3Rpb24sZm9yIGJldHRlciByZS11c2FiaWxpdHlcbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0Lm5hbWUpXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgY2F0ZWdvcnkuaW5uZXJUZXh0ID0gY3VycmVudFByb2plY3QubmFtZTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5KVxuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tTdG9yYWdlLmZvckVhY2goKHRhc2spPT57XG4gICAgICAgIC8vY29uc29sZS5sb2codGFzay5pZENvZGUpXG4gICAgICAgIGxldCB0YXNrRWxlbWVudCA9IGJ1aWxkVGFza0VsZW1lbnQoXG4gICAgICAgICAgICB0YXNrLm5hbWUsXG4gICAgICAgICAgICB0YXNrLmRlc2MsXG4gICAgICAgICAgICB0YXNrLmRhdGUsXG4gICAgICAgICAgICB0YXNrLmlkQ29kZSxcbiAgICAgICAgICAgIHRhc2suc3RhdHVzXG4gICAgICAgIClcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gICAgICAgIFxuICAgIH0pXG4gICAgXG4gICAgY29uc3QgdGFza0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza19CdG4nKVxuICAgIHRhc2tCdXR0b25zLmZvckVhY2goKGJ0bikgPT57XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdGFza0xpc3RlbmVycylcbiAgICB9KTtcbn1cblxuXG5cblxuXG4vL3NldHMgcGxhY2Vob2xkZXIgdmFsdWVzIGluIG1vZGFsIHRhc2sgZnJvbSxzZXRzIGF0dHJpYnV0ZSB0byBlZGl0IGluc3RlYWQgb2YgY3JlYXRlIGluIGFkZHRhc2t0b3Byb2pcbmNvbnN0IGVkaXRUYXNrID0gKGV2ZW50KSA9PiB7XG4gICAgdG9nZ2xlTW9kYWwoKVxuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZ2l2ZURvbUlucHRzKClcbiAgICBsZXQgdGFza0FycmF5ID0gZ2V0QWxsVGFza3MoKTtcbiAgICBjb25zdCB0YXNrID0gdGFza0FycmF5LmZpbmQodGFzayA9PiB0YXNrLmlkQ29kZSA9PSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrSWQpXG4gICAgLy9jb25zdCBjYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzay1jb2RlID0gXCIke2V2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tJZH1cIl1gKVxuXG4gICAgZG9tRWxlbWVudHMudGFza05hbWUudmFsdWU9IHRhc2submFtZVxuICAgIGRvbUVsZW1lbnRzLnRhc2tEZXNjLnZhbHVlID0gdGFzay5kZXNjXG4gICAgZG9tRWxlbWVudHMudGFza0NhdGVnb3J5LnZhbHVlID0gdGFzay5jYXRlZ29yeVxuICAgIGNvbnNvbGUubG9nKGRvbUVsZW1lbnRzLnRhc2tOYW1lKVxuXG5cbiAgICBjb25zb2xlLmxvZyhkb21FbGVtZW50cylcblxuICAgIGNvbnNvbGUubG9nKHBhcnNlRmxvYXQodGFzay5kYXRlKSlcbiAgICAvL2NvbnNvbGUubG9nKGNhcmQpXG4gICAgY29uc29sZS5sb2codGFzay5kYXRlKVxuXG4gICAgY29uc3Qgc3ViQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tfc3VibWl0Jyk7XG4gICAgY29uc29sZS5sb2coc3ViQnRuKVxuICAgIHN1YkJ0bi5kYXRhc2V0LnNldEVkaXQgPSB0cnVlO1xuICAgIHN1YkJ0bi5kYXRhc2V0LnRhc2tOdW0gPSB0YXNrLmlkQ29kZTtcblxuXG59XG5cbmNvbnN0IGdldEFsbFRhc2tzID0gKCkgPT57XG4gICAgbGV0IHRhc2tBcnJheSA9IFtdO1xuICAgIGxvY2FsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT57XG4gICAgICAgIHRhc2tBcnJheS5wdXNoKHByb2plY3QudGFza1N0b3JhZ2UpXG4gICAgfSlcbiAgICAvL2NvbWJpbmVzIGFsbCBhcnJheXMgaW5zaWRlIHRhc2tBcnJheSBpbnRvIG9uZSBzaW5nbGUgYXJyYXlcbiAgICB0YXNrQXJyYXkgPSB0YXNrQXJyYXkuZmxhdCgxKTtcblxuICAgIHJldHVybiB0YXNrQXJyYXk7XG59XG5cbmNvbnN0IGFsbFRhc2tzID0gKGV2ZW50KSA9PntcbiAgICBsZXQgdGFza0FycmF5ID0gW107XG4gICAgbG9jYWxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PntcbiAgICAgICAgdGFza0FycmF5LnB1c2gocHJvamVjdC50YXNrU3RvcmFnZSlcbiAgICB9KVxuICAgIC8vY29tYmluZXMgYWxsIGFycmF5cyBpbnNpZGUgdGFza0FycmF5IGludG8gb25lIHNpbmdsZSBhcnJheVxuICAgIHRhc2tBcnJheSA9IHRhc2tBcnJheS5mbGF0KDEpXG5cbiAgICBpZihldmVudC50YXJnZXQuaWQgPT09IFwiY29tcGxldGVkLXRhc2tzXCIpe1xuICAgICAgICBjb25zdCBmaW5pc2hlZFRhc2tzID0gQ2F0ZWdvcnlGYWN0b3J5KCdDb21wbGV0ZWQgVGFza3MnKVxuICAgICAgICB0YXNrQXJyYXkuZm9yRWFjaCgodGFzayk9PntcbiAgICAgICAgICAgIGlmKHRhc2suc3RhdHVzPT09dHJ1ZSl7XG4gICAgICAgICAgICAgICAgZmluaXNoZWRUYXNrcy50YXNrU3RvcmFnZS5wdXNoKHRhc2spXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBmaW5pc2hlZFRhc2tzXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0Lm5hbWUpXG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnN0IG5ld1Byb2ogPSBDYXRlZ29yeUZhY3RvcnkoJ0FsbCBUYXNrcycpXG4gICAgICAgIG5ld1Byb2oudGFza1N0b3JhZ2UgPSB0YXNrQXJyYXlcbiAgICAgICAgY29uc29sZS5sb2cobmV3UHJvailcbiAgICAgICAgY29uc29sZS5sb2cobmV3UHJvai50YXNrU3RvcmFnZSk7XG5cbiAgICAgICAgY3VycmVudFByb2plY3QgPSBuZXdQcm9qO1xuXG4gICAgfVxuICAgIGRpc3BsYXlUYXNrcygpXG59XG5cblxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdChldmVudCl7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQucHJvamVjdDtcbiAgICBsb2NhbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XG4gICAgICAgIGlmKHByb2plY3QubmFtZSA9PT0ga2V5KXtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdFxuICAgICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC50YXNrU3RvcmFnZSlcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC5uYW1lKVxuICAgIGRpc3BsYXlUYXNrcygpXG5cbn1cblxuY29uc3QgdXBkYXRlVGFzayA9IChjb2RlKSA9PiB7XG4gICAgY29uc3QgdGFza0FycmF5ID0gZ2V0QWxsVGFza3MoKTtcbiAgICBjb25zdCBvbGRUYXNrID0gdGFza0FycmF5LmZpbmQodGFzayA9PiB0YXNrLmlkQ29kZSA9PSBjb2RlKVxuICAgIGNvbnN0IERPTSA9IGdpdmVEb21JbnB0cygpXG4gICAgbG9jYWxQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBpZihwcm9qZWN0Lm5hbWUgPT09IG9sZFRhc2suY2F0ZWdvcnkpe1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0LnRhc2tTdG9yYWdlLmZpbmRJbmRleCh0b2RvPT50b2RvLmlkQ29kZSA9PSBjb2RlKVxuICAgICAgICAgICAgcHJvamVjdC50YXNrU3RvcmFnZVtpbmRleF0ubmFtZSA9IERPTS50YXNrTmFtZS52YWx1ZVxuICAgICAgICAgICAgcHJvamVjdC50YXNrU3RvcmFnZVtpbmRleF0uZGVzYyA9IERPTS50YXNrRGVzYy52YWx1ZVxuICAgICAgICAgICAgcHJvamVjdC50YXNrU3RvcmFnZVtpbmRleF0uY2F0ZWdvcnkgPSBET00udGFza0NhdGVnb3J5LnZhbHVlXG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tTdG9yYWdlW2luZGV4XS5kYXRlID0gRE9NLnRhc2tEYXRlLnZhbHVlXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpXG4gICAgY29uc29sZS5sb2cob2xkVGFzaylcbiAgICBcbn1cblxuXG4vL2NyZWF0ZSBhIHRhc2sgYW5kIFB1c2ggaXQgdG8gdGhlIGNvcnJlY3QgcHJvamVjdCB0YXNrIGFycmF5XG5jb25zdCBhZGRUYXNrVG9Qcm9qID0gKGV2ZW50KSA9PntcbiAgICBjb25zdCBET00gPSBnaXZlRG9tSW5wdHMoKVxuICAgIFxuICAgIGlmKGV2ZW50LnRhcmdldC5kYXRhc2V0LnNldEVkaXQpe1xuICAgICAgICB1cGRhdGVUYXNrKGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tOdW0pXG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKGZhbHNlKVxuICAgICAgICBsZXQgbmV3VGFzayA9IFRhc2tGYWN0b3J5KFxuICAgICAgICAgICAgRE9NLnRhc2tOYW1lLnZhbHVlLFxuICAgICAgICAgICAgRE9NLnRhc2tEZXNjLnZhbHVlLFxuICAgICAgICAgICAgRE9NLnRhc2tEYXRlLnZhbHVlLFxuICAgICAgICAgICAgRE9NLnRhc2tDYXRlZ29yeS52YWx1ZVxuICAgICAgICApXG4gICAgXG4gICAgICAgIGxvY2FsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcbiAgICAgICAgICAgIGlmKHByb2plY3QubmFtZSA9PT0gbmV3VGFzay5jYXRlZ29yeSl7XG4gICAgICAgICAgICAgICAgcHJvamVjdC50YXNrU3RvcmFnZS5wdXNoKG5ld1Rhc2spXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC50YXNrU3RvcmFnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBzYXZlUHJvamVjdExpc3QoKVxuICAgIHRvZ2dsZU1vZGFsKClcbiAgICBkaXNwbGF5VGFza3MoKVxufVxuLy9hZGRzIFByb2plY3QgdG8gcHJvamVjdHMgYXJyYXlcbmNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvaklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2pfTmFtZV9JbnB0Jyk7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBDYXRlZ29yeUZhY3RvcnkocHJvaklucHV0LnZhbHVlKTtcbiAgICBzdG9yZVByb2plY3QobmV3UHJvamVjdClcbiAgICBkaXNwbGF5UHJvamVjdHMoKVxuICAgIHRvZ2dsZU1vZGFsKClcbiAgICBwcm9qSW5wdXQudmFsdWUgPSAnJ1xuXG4gICAgXG59XG5cbmZ1bmN0aW9uIHRhc2tMaXN0ZW5lcnMoZXZlbnQpe1xuICAgIGxldCB0YXNrY29kZSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tJZFxuICAgIGxldCBldmVudE5hbWUgPSBldmVudC50YXJnZXQubmFtZVxuICAgIGlmKGV2ZW50TmFtZSA9PT0gJ0RlbGV0ZScpe1xuICAgICAgICByZW1vdmVUYXNrKHRhc2tjb2RlKVxuICAgIH1lbHNlIGlmKGV2ZW50TmFtZSA9PT0gJ1N0YXR1cycpe1xuICAgICAgICB0YXNrU3RhdHVzKHRhc2tjb2RlKTtcbiAgICB9XG59XG5cbmNvbnN0IHJlbW92ZVRhc2sgPSAodGFza0lkLHByb2plY3QpID0+IHtcbiAgICBjdXJyZW50UHJvamVjdC50YXNrU3RvcmFnZS5mb3JFYWNoKCh0YXNrLGluZGV4KT0+e1xuICAgICAgICBpZih0YXNrLmlkQ29kZSA9PSB0YXNrSWQpe1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QudGFza1N0b3JhZ2Uuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICB9XG4gICAgfSlcblxuXG4gICAgZGlzcGxheVRhc2tzKClcbiAgICBzYXZlUHJvamVjdExpc3QoKVxufVxuXG5cbmZ1bmN0aW9uIHRhc2tTdGF0dXMoY29kZSl7XG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhdHVzLWJ0bicpXG4gICAgbGV0IGRvbUVsZW1lbnQgO1xuICAgIGRvbUVsZW1lbnRzLmZvckVhY2goKGJ0bik9PntcbiAgICAgICAgY29uc29sZS5sb2coYnRuLmRhdGFzZXQudGFza0lkKVxuICAgICAgICBpZihidG4uZGF0YXNldC50YXNrSWQgPT0gY29kZSl7XG4gICAgICAgICAgICBkb21FbGVtZW50ID0gYnRuXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY3VycmVudFByb2plY3QudGFza1N0b3JhZ2UuZm9yRWFjaCgodGFzayk9PntcbiAgICAgICAgaWYodGFzay5pZENvZGUgPT0gY29kZSl7XG4gICAgICAgICAgICB0YXNrLnN0YXR1cyA9ICF0YXNrLnN0YXR1c1xuICAgICAgICAgICAgaWYodGFzay5zdGF0dXMgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzay1zdGF0dXMtZ3JlZW4nKTtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stc3RhdHVzLXJlZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1zdGF0dXMtZ3JlZW4nKTtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdHVzLXJlZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrLmlkQ29kZSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2suc3RhdHVzKVxuICAgICAgICB9XG4gICAgfSlcbiAgICBzYXZlUHJvamVjdExpc3QoKVxuICAgIC8vZGlzcGxheVRhc2tzKClcbiAgICBcbn1cblxuZXhwb3J0IHtcbiAgICBhZGRQcm9qZWN0LFxuICAgIGFkZFRhc2tUb1Byb2osXG4gICAgZGlzcGxheVByb2plY3RzLFxuICAgIGRpc3BsYXlUYXNrcyxcbiAgICBhbGxUYXNrcyxcbiAgICBlZGl0VGFzayxcbiAgICB0b2dnbGVQcm9qZWN0LFxufSIsImNvbnN0IFRhc2tGYWN0b3J5ID0gKG5hbWUsZGVzYyxkYXRlLGNhdGVnb3J5KSA9PiB7XG4gICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xuICAgIGNvbnN0IGlkQ29kZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpZENvZGUsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZGVzYyxcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgIG5hbWVcbiAgICB9XG59XG5cbmNvbnN0IENhdGVnb3J5RmFjdG9yeSA9IChuYW1lKSA9PiB7XG4gICAgbGV0IHRhc2tTdG9yYWdlID0gW107XG4gICAgXG4gICAgcmV0dXJuIHt0YXNrU3RvcmFnZSxuYW1lfVxufVxuZXhwb3J0e1xuICAgIFRhc2tGYWN0b3J5LFxuICAgIENhdGVnb3J5RmFjdG9yeVxufVxuXG4iLCJcbmltcG9ydCB7IENhdGVnb3J5RmFjdG9yeSxUYXNrRmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnlcIjtcblxuY29uc3QgR3ltID0gQ2F0ZWdvcnlGYWN0b3J5KCdHeW0nKTsgXG5cbmNvbnN0IENvZGluZyA9IENhdGVnb3J5RmFjdG9yeSgnQ29kaW5nJylcblxuY29uc3QgV29yayA9IENhdGVnb3J5RmFjdG9yeSgnV29yaycpXG5jb25zdCB0YXNrMSA9IFRhc2tGYWN0b3J5KCdGaW5pc2ggVUknLFwiRmluaXNoIFN0eWxpbmcgVUlcIixcIjA5LzE4LzIwMjJcIixcIkNvZGluZ1wiKTtcbmNvbnN0IHRhc2syID0gVGFza0ZhY3RvcnkoJ2FkZCBFZGl0IFRhc2sgQnV0dG9uJyxcIkFkZCBlZGl0IHRhc2sgYnV0dG9uIHRvIHRhc2sgY2FyZHNcIixcIjA5LzE4LzIwMjJcIixcIkNvZGluZ1wiKTtcbmNvbnN0IHRhc2szID0gVGFza0ZhY3RvcnkoJ0phdmFzY3JpcHQnLFwiTWFrZSBkcm9wIGRvd24gc2VsZWN0aW9uIGZvciBjYXRlZ29yeSBpbnB1dCBpbiB0YXNrIGNyZWF0aW9uIGZvcm1cIixcIjA5LzE4LzIwMjJcIixcIkNvZGluZ1wiKTtcbmNvbnN0IHRhc2s0ID0gVGFza0ZhY3RvcnkoJ0phdmFzY3JpcHQnLFwiZGlzcGxheSBmaW5pc2hlZCB0YXNrcyBmdW5jdGlvblwiLFwiMDkvMTgvMjAyMlwiLFwiQ29kaW5nXCIpO1xuQ29kaW5nLnRhc2tTdG9yYWdlLnB1c2godGFzazEpXG5Db2RpbmcudGFza1N0b3JhZ2UucHVzaCh0YXNrMilcbkNvZGluZy50YXNrU3RvcmFnZS5wdXNoKHRhc2szKVxuQ29kaW5nLnRhc2tTdG9yYWdlLnB1c2godGFzazQpXG5sZXQgcHJvamVjdHMgPSBbR3ltLENvZGluZyxXb3JrXVxuXG5cbmNvbnN0IGluaXRpYWxTdG9yYWdlID0gKCgpID0+IHtcbiAgICBpZihsb2NhbFN0b3JhZ2UubGVuZ3RoICA9PT0gMCApe1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICB9XG4gICAgXG59KSgpO1xubGV0IGxvY2FsUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuXG5jb25zdCBzdG9yZVByb2plY3QgPSAobmV3UHJvaikgPT4ge1xuICAgIGxvY2FsUHJvamVjdHMucHVzaChuZXdQcm9qKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobG9jYWxQcm9qZWN0cykpXG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKVxufVxuY29uc3Qgc2F2ZVByb2plY3RMaXN0ID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobG9jYWxQcm9qZWN0cykpXG59XG5leHBvcnR7XG4gICAgc3RvcmVQcm9qZWN0LFxuICAgIGxvY2FsUHJvamVjdHMsXG4gICAgc2F2ZVByb2plY3RMaXN0LFxuICAgIGluaXRpYWxTdG9yYWdlXG59IiwiaW1wb3J0IHthZGRQcm9qZWN0LHRvZ2dsZVByb2plY3QsYWRkVGFza1RvUHJvaixkaXNwbGF5UHJvamVjdHMsZGlzcGxheVRhc2tzLGFsbFRhc2tzLGVkaXRUYXNrfSBmcm9tIFwiLi9hcHBcIjtcbi8vaW1wb3J0IHsgYWRkVGFza1RvUHJvaiB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyB0b2dnbGVNb2RhbCxkaXNwbGF5Rm9ybXMgfSBmcm9tIFwiLi9Nb2RhbFwiO1xuaW1wb3J0IHsgbG9jYWxQcm9qZWN0cyB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgYnVpbGRIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdUby1EbyBBcHAnXG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgcmV0dXJuIGhlYWRlciBcbn1cblxuY29uc3QgY3JlYXRlTmF2QnV0dG9uID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBwcm9qQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBwcm9qQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2otYnRuLWhvdmVyJylcbiAgICBwcm9qQnV0dG9uLmlubmVyVGV4dCA9IG5hbWVcbiAgICBwcm9qQnV0dG9uLmRhdGFzZXQucHJvamVjdCA9IG5hbWVcbiAgICByZXR1cm4gcHJvakJ1dHRvblxufVxuXG5cblxuLy9hZGQgY29kaW5nIGFuZCB3b3JrIFRvRG8gYnV0dG9ucyB0byB0aGUgbWFpbiBuYXYgYW5kIG5vdCBwcm9qZWN0IG5hdi4gXG5cbmNvbnN0IGJ1aWxkTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgY29uc3QgdGFza0J1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFza0J1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9ucycpXG4gICAgY29uc3QgY29tcGxldGVUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29tcGxldGVUYXNrcy5pbm5lclRleHQgPSAnZmluaXNoZWQnXG4gICAgY29tcGxldGVUYXNrcy5pZCA9J2NvbXBsZXRlZC10YXNrcydcbiAgICBjb21wbGV0ZVRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhbGxUYXNrcyk7XG5cbiAgICBjb25zdCBhbGxUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWxsVGFza0J0bi5pbm5lclRleHQgPSBcIkFsbCBUYXNrc1wiXG4gICAgYWxsVGFza0J0bi5pZCA9ICdhbGwtdGFza3MnXG4gICAgYWxsVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWxsVGFza3MpXG4gICAgLy90YXNrQnV0dG9uQ29udGFpbmVyLmFwcGVuZChhbGxUYXNrQnRuLGNvbXBsZXRlVGFza3MpXG4gICAgY29uc3QgcHJvamVjdE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RNYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tcHJvamVjdC1jb250YWluZXInKVxuICAgIC8vcHJvamVjdCBidXR0b25zIGNvbnRhaW5cbiAgICBcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnUHJvamVjdHMnXG4gICAgcHJvamVjdE1haW4uYXBwZW5kKHRpdGxlLHByb2plY3RDb250YWluZXIpXG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qX25hdl9jb250YWluZXInKTtcbiAgICBcbiAgICBjb25zdCBhZGRNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkTW9kYWwuaW5uZXJUZXh0ID0gJysnXG4gICAgYWRkTW9kYWwuaWQgPSAnb3Blbl9Nb2RhbCdcbiAgICBhZGRNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdG9nZ2xlTW9kYWwpXG5cbiAgICBjb25zdCBjb2RlUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29kZVByb2ouaW5uZXJUZXh0ID0gJ0NvZGUnXG4gICAgY29kZVByb2ouZGF0YXNldC5wcm9qZWN0ID0gJ0NvZGluZydcbiAgICBjb2RlUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdG9nZ2xlUHJvamVjdClcblxuICAgIGNvbnN0IHdvcmtQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB3b3JrUHJvai5pbm5lclRleHQgPSAnV29yaydcbiAgICB3b3JrUHJvai5kYXRhc2V0LnByb2plY3QgPSAnV29yaydcbiAgICB3b3JrUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdG9nZ2xlUHJvamVjdClcblxuICAgIGNvbnN0IG5hdkJ0bnMgPSBbYWxsVGFza0J0bixjb21wbGV0ZVRhc2tzLGNvZGVQcm9qLHdvcmtQcm9qXVxuICAgIG5hdkJ0bnMuZm9yRWFjaCgoYnRuKT0+e1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnbmF2X2J0bicpXG4gICAgfSlcbiAgICB0YXNrQnV0dG9uQ29udGFpbmVyLmFwcGVuZChhbGxUYXNrQnRuLGNvbXBsZXRlVGFza3MsY29kZVByb2osd29ya1Byb2osYWRkTW9kYWwpXG4gICAgbmF2LmFwcGVuZCh0YXNrQnV0dG9uQ29udGFpbmVyLHByb2plY3RNYWluKVxuXG4gICAgcmV0dXJuIG5hdlxufVxuLy9NT0RBTFxuY29uc3QgYnVpbGRUYXNrRm9ybSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm0ubmFtZSA9ICd0YXNrLWZvcm0nXG4gICAgZm9ybS5pZCA9ICd0YXNrX01vZGFsJ1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJDcmVhdGUgVGFza1wiXG5cbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnXG4gICAgbmFtZUlucHV0Lm5hbWUgPSAnbmFtZSdcbiAgICBuYW1lSW5wdXQuaWQgPSAnbmFtZV9pbnB1dCdcbiAgICBuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1pbnB0JylcbiAgICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCJcblxuICAgIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKVxuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdkZXNjJylcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2Rlc2NfaW5wdXQnKVxuICAgIGRlc2NJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWlucHQnKVxuICAgIGRlc2NJbnB1dC5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb25cIlxuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGF0ZScpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnZGF0ZV9pbnB1dCcpO1xuICAgIGRhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWlucHQnKVxuICAgIFxuXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGxvY2FsUHJvamVjdHMuZm9yRWFjaCgocHJvaik9PntcbiAgICAgICAgY29uc3Qgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgb3B0LnZhbHVlID0gcHJvai5uYW1lXG4gICAgICAgIG9wdC5pbm5lclRleHQgPSBwcm9qLm5hbWVcblxuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKG9wdClcbiAgICB9KTtcblxuICAgIFxuICAgIHByb2plY3QubmFtZSA9ICdjYXRlZ29yeSdcbiAgICBwcm9qZWN0LmlkID0gJ3Byb2plY3RfQXNzaWduJ1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgndGFzay1pbnB0JylcbiAgICBcbiAgICBcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywndGFza19zdWJtaXQnKVxuICAgIHN1Ym1pdC50eXBlID0gJ3N1Ym1pdCdcbiAgICBzdWJtaXQuaW5uZXJUZXh0ID0gJ0FkZCdcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFkZFRhc2tUb1Byb2opXG5cbiAgICBmb3JtLmFwcGVuZCh0aXRsZSxuYW1lSW5wdXQsZGVzY0lucHV0LGRhdGVJbnB1dCxwcm9qZWN0LHN1Ym1pdCk7XG5cbiAgICByZXR1cm4gZm9ybVxufVxuY29uc3QgYnVpbGRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdF9tb2RhbCcpXG5cbiAgICBjb25zdCBwcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvak5hbWUuaWQgPSAncHJval9OYW1lX0lucHQnO1xuICAgIHByb2pOYW1lLm5hbWUgPSAncHJvamVjdF9OYW1lX0lucHQnO1xuICAgIFxuICAgIGNvbnN0IGFkZFByb2pCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFkZFByb2pCdG4uaWQgPSAnYWRkX1Byb2pfQnV0dG9uJ1xuICAgIGFkZFByb2pCdG4uaW5uZXJUZXh0ID0gJ0FkZCdcbiAgICBhZGRQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhZGRQcm9qZWN0KVxuXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kKFxuICAgICAgICBwcm9qTmFtZSxcbiAgICAgICAgYWRkUHJvakJ0blxuICAgIClcbiAgICByZXR1cm4gbW9kYWxDb250YWluZXJcbn1cbmNvbnN0IGJ1aWxkTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYXN0ZXJfTW9kYWxfQ29udGFpbmVyJylcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmlkID0gJ21hc3Rlcl9Nb2RhbCdcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmF2LmlkID0gJ21hc3Rlcl9Nb2RhbF9OYXYnXG4gXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcHJvamVjdC5pZCA9ICduZXdfUHJvamVjdCdcbiAgICBwcm9qZWN0LmlubmVyVGV4dCA9ICdQcm9qZWN0J1xuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRpc3BsYXlGb3JtcylcblxuICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHRvZG8uaWQgPSAnbmV3X1Rhc2snO1xuICAgIHRvZG8uaW5uZXJUZXh0ID0gJ1Rhc2snXG4gICAgdG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZGlzcGxheUZvcm1zKVxuXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybUNvbnRhaW5lci5pZCA9ICdtb2RhbF9Gb3JtcydcbiAgICBjb25zdCBmaXJzdEZvcm0gPSBidWlsZFRhc2tGb3JtKCk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdEZvcm0pXG5cbiAgICBjb25zdCBjbG9zZU91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY2xvc2VPdXQuaW5uZXJUZXh0ID0gJ1gnXG4gICAgY2xvc2VPdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRvZ2dsZU1vZGFsKVxuICAgIGNsb3NlT3V0LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLW1vZGFsJylcblxuICAgIG5hdi5hcHBlbmQocHJvamVjdCx0b2RvKVxuICAgIG1vZGFsLmFwcGVuZChuYXYsZm9ybUNvbnRhaW5lcilcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChtb2RhbCxjbG9zZU91dClcblxuICAgIHJldHVybiBtYWluQ29udGFpbmVyXG5cbn1cbmNvbnN0IGdpdmVEb21JbnB0cyA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lX2lucHV0JylcbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjX2lucHV0JylcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlX2lucHV0JylcbiAgICBjb25zdCB0YXNrQ2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF9Bc3NpZ24nKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFza05hbWUsXG4gICAgICAgIHRhc2tEZXNjLFxuICAgICAgICB0YXNrRGF0ZSxcbiAgICAgICAgdGFza0NhdGVnb3J5XG4gICAgfVxufVxuY29uc3QgYnVpbGRUYXNrRWxlbWVudCA9IChuYW1lLGRlc2MsZGF0ZSxjb2RlLHN0YXR1cykgPT4ge1xuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZCgndGFza19jYXJkJylcbiAgICB0YXNrQ2FyZC5kYXRhc2V0LnRhc2tDb2RlID0gYCR7Y29kZX1gXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gbmFtZVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2NyaXB0aW9uJylcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gZGF0ZVxuXG4gICAgXG4gICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZWRpdC5pbm5lclRleHQ9J0VkaXQnXG4gICAgZWRpdC5kYXRhc2V0LnRhc2tJZCA9IGNvZGVcbiAgICBlZGl0Lm5hbWUgPSAnRWRpdCdcbiAgICBlZGl0LmlkID0gJ2VkaXQtdGFzaydcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tfQnRuJylcbiAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGVkaXRUYXNrKVxuICAgICAgICBcbiAgXG4gICAgY29uc3QgdGFza0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFza0J0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ0bi1jb250YWluZXInKVxuXG4gICAgY29uc3QgZGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZGVsZXRlVGFzay5pbm5lclRleHQgPSAnRGVsZXRlJ1xuICAgIGRlbGV0ZVRhc2suZGF0YXNldC50YXNrSWQgPSBjb2RlIFxuICAgIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZCgndGFza19CdG4nKVxuICAgIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpXG4gICAgZGVsZXRlVGFzay5uYW1lID0gJ0RlbGV0ZSdcbiAgICBcblxuICAgIGNvbnN0IG1hcmtDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgbWFya0NvbXBsZXRlLmRhdGFzZXQudGFza0lkID0gY29kZVxuICAgIG1hcmtDb21wbGV0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrX0J0bicpXG4gICAgbWFya0NvbXBsZXRlLm5hbWUgPSAnU3RhdHVzJ1xuICAgIG1hcmtDb21wbGV0ZS5pbm5lclRleHQgPSAnU3RhdHVzJ1xuICAgIG1hcmtDb21wbGV0ZS5jbGFzc0xpc3QuYWRkKCdzdGF0dXMtYnRuJylcbiAgICBcbiAgICBpZihzdGF0dXM9PT10cnVlKXtcbiAgICAgICAgbWFya0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdHVzLWdyZWVuJyk7XG4gICAgICAgIG1hcmtDb21wbGV0ZS5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLXN0YXR1cy1yZWQnKVxuICAgIFxuICAgIH1lbHNle1xuICAgICAgICBtYXJrQ29tcGxldGUuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1zdGF0dXMtZ3JlZW4nKTtcbiAgICAgICAgbWFya0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdHVzLXJlZCcpXG5cbiAgICB9XG5cbiAgICB0YXNrQnRuQ29udGFpbmVyLmFwcGVuZChkZWxldGVUYXNrLG1hcmtDb21wbGV0ZSxlZGl0KVxuICAgIFxuXG4gICAgdGFza0NhcmQuYXBwZW5kKFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHRhc2tCdG5Db250YWluZXJcblxuICAgIClcblxuICAgIHJldHVybiB0YXNrQ2FyZFxufVxuXG5cblxuXG5jb25zdCBsb2FkcGFnZSA9ICgpID0+e1xuICAgIGNvbnN0IGhlYWRlciA9IGJ1aWxkSGVhZGVyKClcbiAgICBjb25zdCBuYXYgPSBidWlsZE5hdigpXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgIC8vYWRkIGZvb3RlclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlcixuYXYsbWFpbixmb290ZXIpXG4gICAgXG4gICAgZGlzcGxheVByb2plY3RzKClcbiAgICBkaXNwbGF5VGFza3MoKVxufTtcbi8vXG5leHBvcnR7XG4gICAgbG9hZHBhZ2UsXG4gICAgY3JlYXRlTmF2QnV0dG9uLFxuICAgIGJ1aWxkVGFza0Zvcm0sXG4gICAgYnVpbGRQcm9qZWN0Rm9ybSxcbiAgICBidWlsZE1vZGFsLFxuICAgIGdpdmVEb21JbnB0cyxcbiAgICBidWlsZFRhc2tFbGVtZW50XG59XG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCB7IGluaXRpYWxTdG9yYWdlIH0gZnJvbSAnLi9tb2R1bGVzL3N0b3JhZ2UnO1xuaW1wb3J0IHsgbG9hZHBhZ2UgfSBmcm9tICcuL21vZHVsZXMvdWknO1xuXG5cbmxvYWRwYWdlKClcblxuXG5cbi8vY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=