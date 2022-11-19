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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #121212;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n\nheader {\n  grid-column: 1/13;\n  height: 5vh;\n  color: white;\n}\n\nnav {\n  grid-column: 1/2;\n  padding: 20px;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.nav-buttons {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n}\n\n.nav_btn {\n  width: 75px;\n  height: 75px;\n  padding: 10px;\n  text-align: center;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  grid-column: 2/13;\n  padding: 10px;\n  background-color: #181818;\n}\n\nmain h2 {\n  height: 10vh;\n}\n\n.proj_nav_container {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: center;\n}\n\n.proj_nav_container > button {\n  background-color: transparent;\n  border: none;\n  width: 80%;\n  text-align: start;\n  padding: 5px;\n  font-size: 1.3rem;\n}\n\n.master_Modal_Container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(56, 56, 56, 0.863);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#master_Modal {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  height: 10vh;\n  width: 600px;\n  --webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n  animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n@-webkit-keyframes slide-bottom {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(200px);\n    transform: translateY(200px);\n  }\n}\n@keyframes slide-bottom {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(200px);\n    transform: translateY(200px);\n  }\n}\n#open_Modal {\n  width: 100px;\n}\n\n.close-modal {\n  width: 50px;\n  height: 50px;\n  border: none;\n  border-radius: 25px;\n  background-color: red;\n  color: white;\n  box-shadow: 0px 0px 1px 1px black;\n  font-size: 20px;\n  align-self: center;\n}\n\n#task_Modal {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding-top: 10px;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 1px 1px 3px black;\n  align-items: center;\n}\n\n.task-inpt {\n  height: 25px;\n  border-radius: 5px;\n  border: none;\n  padding: 5px;\n  box-shadow: 1px 1px 3px black;\n  width: 100%;\n}\n\n#task_submit {\n  width: 50px;\n  padding: 5px;\n  border: none;\n  background-color: green;\n  border-radius: 15px;\n  box-shadow: 1px 1px 3px black;\n}\n\n.task_card {\n  background-color: #404040;\n}\n\n.task-btn-container {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n\n.task_Btn {\n  padding: 10px;\n  border: 1px solid black;\n  border-radius: 10px;\n  min-height: 40px;\n  text-align: center;\n  box-shadow: 0 0 2px grey;\n}\n\n.task-status-red {\n  background-color: red;\n}\n\n.task-status-green {\n  background-color: green;\n}\n\n.delete-btn {\n  color: red;\n}\n\n.task-description {\n  grid-column: 2/4;\n  text-align: start;\n}\n\n.main-project-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  box-shadow: 0 0 3px rgb(38, 37, 37);\n  padding: 10px;\n  background-color: #C0E39E;\n}\n\nfooter {\n  grid-row: 3;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,WAAA;EACA,sBAAA;AACJ;;AASA;EACI,yBATa;EAUb,aAAA;EACA,sCAAA;AANJ;;AAUA;EACI,iBAAA;EACA,WAAA;EACA,YAAA;AAPJ;;AAWA;EACI,gBAAA;EAGA,aAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AAVJ;;AAeA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AAZJ;;AAeA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;AAZJ;;AAgBA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,iBAAA;EACA,aAAA;EACA,yBAvDW;AA0Cf;;AAgBA;EAEI,YAAA;AAdJ;;AAgBA;EACI,aAAA;EACA,sBAAA;EACA,QAAA;EACA,mBAAA;AAbJ;;AAeA;EACI,6BAAA;EACA,YAAA;EACA,UAAA;EACA,iBAAA;EACA,YAAA;EACA,iBAAA;AAZJ;;AAgBA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,yCAAA;EACA,aAAA;EACA,sBAAA;EAEA,mBAAA;AAdJ;;AAmBA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,YAAA;EACA,YAAA;EACA,mFAAA;EACH,sEAAA;AAhBD;;AAqBA;EACI;IACE,gCAAA;IACQ,wBAAA;EAlBZ;EAoBE;IACE,oCAAA;IACQ,4BAAA;EAlBZ;AACF;AAoBE;EACE;IACE,gCAAA;IACQ,wBAAA;EAlBZ;EAoBE;IACE,oCAAA;IACQ,4BAAA;EAlBZ;AACF;AAqBA;EACI,YAAA;AAnBJ;;AAuBA;EACI,WAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,qBAAA;EACA,YAAA;EACA,iCAAA;EACA,eAAA;EACA,kBAAA;AApBJ;;AAsBA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,iBAAA;EAEA,aAAA;EACA,kBAAA;EACA,6BAAA;EACA,mBAAA;AApBJ;;AAyBA;EACI,YAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,WAAA;AAtBJ;;AAwBA;EACI,WAAA;EACA,YAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,6BAAA;AArBJ;;AAuBA;EAEI,yBA1KO;AAqJX;;AA0BA;EACI,aAAA;EACA,yBAAA;EACA,SAAA;AAvBJ;;AAyBA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,wBAAA;AAtBJ;;AAyBA;EACI,qBAAA;AAtBJ;;AAwBA;EACI,uBAAA;AArBJ;;AAuBA;EACI,UAAA;AApBJ;;AAwBA;EACI,gBAAA;EACA,iBAAA;AArBJ;;AAuBA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,mCAAA;EACA,aAAA;EACA,yBAAA;AApBJ;;AA0BA;EACI,WAAA;AAvBJ","sourcesContent":["*{\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n$dark-background:#121212;\n$secondary-bg: #181818;\n$primary-text-color: #ffffff;\n$light-bg: #404040;\n$purp-bg : #6e5b6e;\n\n\n\nbody{\n    background-color: $dark-background;\n    display: grid;\n    grid-template-columns: repeat(12,1fr);\n    \n}\n\nheader{\n    grid-column:  1/13;\n    height: 5vh;\n    color: white\n    \n}\n\nnav{\n    grid-column: 1/2;\n    \n    \n    padding: 20px;\n    min-height: 90vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    \n    \n    \n}\n.nav-buttons{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 15px;\n}\n\n.nav_btn{\n    width: 75px;\n    height: 75px;\n    padding: 10px;\n    text-align: center;\n}\n\n\nmain{\n    display: flex;\n    flex-direction: column;\n    gap:10px;\n    grid-column: 2/13;\n    padding: 10px;\n    background-color: $secondary-bg;\n    \n}\nmain h2{\n    \n    height: 10vh;\n}\n.proj_nav_container{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    align-items: center;\n}\n.proj_nav_container>button{\n    background-color: transparent;\n    border: none;\n    width: 80%;\n    text-align: start;\n    padding: 5px;\n    font-size: 1.3rem;\n}\n\n\n.master_Modal_Container{\n    position:absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(56, 56, 56, 0.863);\n    display: flex;\n    flex-direction: column;\n    \n    align-items: center;\n    \n\n}\n\n#master_Modal{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    height: 10vh;\n    width: 600px;\n    --webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n\tanimation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n    \n\n\n}\n@-webkit-keyframes slide-bottom {\n    0% {\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n    }\n    100% {\n      -webkit-transform: translateY(200px);\n              transform: translateY(200px);\n    }\n  }\n  @keyframes slide-bottom {\n    0% {\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n    }\n    100% {\n      -webkit-transform: translateY(200px);\n              transform: translateY(200px);\n    }\n  }\n\n#open_Modal{\n    width: 100px;\n    \n    \n}\n.close-modal{\n    width: 50px;\n    height: 50px;\n    border: none;\n    border-radius: 25px;\n    background-color: red;\n    color: white;\n    box-shadow: 0px 0px 1px 1px black;\n    font-size: 20px;\n    align-self: center;\n}\n#task_Modal{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding-top: 10px;\n    \n    padding: 10px;\n    border-radius: 5px;\n    box-shadow: 1px 1px 3px black;\n    align-items: center;\n    \n    \n\n} \n.task-inpt{\n    height: 25px;\n    border-radius: 5px;\n    border: none;\n    padding: 5px;\n    box-shadow: 1px 1px 3px black;\n    width: 100%;\n}\n#task_submit{\n    width: 50px;\n    padding: 5px;\n    border: none;\n    background-color: green;\n    border-radius: 15px;\n    box-shadow: 1px 1px 3px black;\n}\n.task_card{\n    \n    background-color: $light-bg;\n    \n       \n}\n\n.task-btn-container{\n    display: flex;\n    justify-content: flex-end;\n    gap:10px\n}\n.task_Btn{\n    padding: 10px;\n    border: 1px solid black;\n    border-radius: 10px;\n    min-height: 40px ;\n    text-align: center;\n    box-shadow: 0 0 2px grey;\n\n}\n.task-status-red{\n    background-color: red;\n}\n.task-status-green{\n    background-color: green;\n}\n.delete-btn{\n    color: red;\n    \n}\n\n.task-description{\n    grid-column: 2/4;\n    text-align: start;\n}\n.main-project-container{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    box-shadow: 0 0 3px rgb(38, 37, 37);\n    padding: 10px;\n    background-color: #C0E39E;\n}\n\n\n\n\nfooter{\n    grid-row:3\n}"],"sourceRoot":""}]);
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
    
    if(toggle === false){
        console.log(main)
        
        document.body.appendChild((0,_ui__WEBPACK_IMPORTED_MODULE_1__.buildModal)()) 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBZTtBQUNuQixJQUFJLG1EQUFZO0FBQ2hCO0FBQ0E7QUFTQzs7Ozs7Ozs7OztVQ2xTRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDOEI7QUFDWDs7O0FBR3hDLHFEQUFROzs7O0FBSVIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9mYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzEzO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbm5hdiB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm5hdi1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLm5hdl9idG4ge1xcbiAgd2lkdGg6IDc1cHg7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDIvMTM7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcXG59XFxuXFxubWFpbiBoMiB7XFxuICBoZWlnaHQ6IDEwdmg7XFxufVxcblxcbi5wcm9qX25hdl9jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qX25hdl9jb250YWluZXIgPiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogODAlO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLm1hc3Rlcl9Nb2RhbF9Db250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA1NiwgNTYsIDAuODYzKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21hc3Rlcl9Nb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIGhlaWdodDogMTB2aDtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIC0td2Via2l0LWFuaW1hdGlvbjogc2xpZGUtYm90dG9tIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1ib3R0b20gMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWJvdHRvbSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNsaWRlLWJvdHRvbSB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xcbiAgfVxcbn1cXG4jb3Blbl9Nb2RhbCB7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5jbG9zZS1tb2RhbCB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggYmxhY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiN0YXNrX01vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggYmxhY2s7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1pbnB0IHtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN0YXNrX3N1Ym1pdCB7XFxuICB3aWR0aDogNTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGJsYWNrO1xcbn1cXG5cXG4udGFza19jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XFxufVxcblxcbi50YXNrLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrX0J0biB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggZ3JleTtcXG59XFxuXFxuLnRhc2stc3RhdHVzLXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrLXN0YXR1cy1ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmRlbGV0ZS1idG4ge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiKDM4LCAzNywgMzcpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDMEUzOUU7XFxufVxcblxcbmZvb3RlciB7XFxuICBncmlkLXJvdzogMztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBU0E7RUFDSSx5QkFUYTtFQVViLGFBQUE7RUFDQSxzQ0FBQTtBQU5KOztBQVVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVBKOztBQVdBO0VBQ0ksZ0JBQUE7RUFHQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQVZKOztBQWVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBWko7O0FBZUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVpKOztBQWdCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkF2RFc7QUEwQ2Y7O0FBZ0JBO0VBRUksWUFBQTtBQWRKOztBQWdCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQWJKOztBQWVBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBWko7O0FBZ0JBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7QUFkSjs7QUFtQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtRkFBQTtFQUNILHNFQUFBO0FBaEJEOztBQXFCQTtFQUNJO0lBQ0UsZ0NBQUE7SUFDUSx3QkFBQTtFQWxCWjtFQW9CRTtJQUNFLG9DQUFBO0lBQ1EsNEJBQUE7RUFsQlo7QUFDRjtBQW9CRTtFQUNFO0lBQ0UsZ0NBQUE7SUFDUSx3QkFBQTtFQWxCWjtFQW9CRTtJQUNFLG9DQUFBO0lBQ1EsNEJBQUE7RUFsQlo7QUFDRjtBQXFCQTtFQUNJLFlBQUE7QUFuQko7O0FBdUJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXBCSjs7QUFzQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBcEJKOztBQXlCQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FBdEJKOztBQXdCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQXJCSjs7QUF1QkE7RUFFSSx5QkExS087QUFxSlg7O0FBMEJBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQXZCSjs7QUF5QkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQXRCSjs7QUF5QkE7RUFDSSxxQkFBQTtBQXRCSjs7QUF3QkE7RUFDSSx1QkFBQTtBQXJCSjs7QUF1QkE7RUFDSSxVQUFBO0FBcEJKOztBQXdCQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFyQko7O0FBdUJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBcEJKOztBQTBCQTtFQUNJLFdBQUE7QUF2QkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuJGRhcmstYmFja2dyb3VuZDojMTIxMjEyO1xcbiRzZWNvbmRhcnktYmc6ICMxODE4MTg7XFxuJHByaW1hcnktdGV4dC1jb2xvcjogI2ZmZmZmZjtcXG4kbGlnaHQtYmc6ICM0MDQwNDA7XFxuJHB1cnAtYmcgOiAjNmU1YjZlO1xcblxcblxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWJhY2tncm91bmQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLDFmcik7XFxuICAgIFxcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAgMS8xMztcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIGNvbG9yOiB3aGl0ZVxcbiAgICBcXG59XFxuXFxubmF2e1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBcXG4gICAgXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgXFxuICAgIFxcbiAgICBcXG59XFxuLm5hdi1idXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5uYXZfYnRue1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDoxMHB4O1xcbiAgICBncmlkLWNvbHVtbjogMi8xMztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iZztcXG4gICAgXFxufVxcbm1haW4gaDJ7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDEwdmg7XFxufVxcbi5wcm9qX25hdl9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJval9uYXZfY29udGFpbmVyPmJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcblxcbi5tYXN0ZXJfTW9kYWxfQ29udGFpbmVye1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NiwgNTYsIDU2LCAwLjg2Myk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG5cXG59XFxuXFxuI21hc3Rlcl9Nb2RhbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgLS13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1ib3R0b20gMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XFxuXFx0YW5pbWF0aW9uOiBzbGlkZS1ib3R0b20gMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XFxuICAgIFxcblxcblxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtYm90dG9tIHtcXG4gICAgMCUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XFxuICAgIH1cXG4gIH1cXG4gIEBrZXlmcmFtZXMgc2xpZGUtYm90dG9tIHtcXG4gICAgMCUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMHB4KTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XFxuICAgIH1cXG4gIH1cXG5cXG4jb3Blbl9Nb2RhbHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBcXG4gICAgXFxufVxcbi5jbG9zZS1tb2RhbHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuI3Rhc2tfTW9kYWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGJsYWNrO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgXFxuXFxufSBcXG4udGFzay1pbnB0e1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuI3Rhc2tfc3VibWl0e1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCBibGFjaztcXG59XFxuLnRhc2tfY2FyZHtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1iZztcXG4gICAgXFxuICAgICAgIFxcbn1cXG5cXG4udGFzay1idG4tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6MTBweFxcbn1cXG4udGFza19CdG57XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA0MHB4IDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IGdyZXk7XFxuXFxufVxcbi50YXNrLXN0YXR1cy1yZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLnRhc2stc3RhdHVzLWdyZWVue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuLmRlbGV0ZS1idG57XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIFxcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbntcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5tYWluLXByb2plY3QtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiKDM4LCAzNywgMzcpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzBFMzlFO1xcbn1cXG5cXG5cXG5cXG5cXG5mb290ZXJ7XFxuICAgIGdyaWQtcm93OjNcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZWRpdFRhc2sgfSBmcm9tICcuL2FwcCdcbmltcG9ydCB7IGJ1aWxkUHJvamVjdEZvcm0sYnVpbGRUYXNrRm9ybSxidWlsZE1vZGFsIH0gZnJvbSAnLi91aSdcblxubGV0IHRvZ2dsZSA9IGZhbHNlXG5jb25zdCBtYWluICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuY29uc3QgdG9nZ2xlTW9kYWwgPSAoZXZlbnQpID0+IHtcbiAgICBcbiAgICBpZih0b2dnbGUgPT09IGZhbHNlKXtcbiAgICAgICAgY29uc29sZS5sb2cobWFpbilcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnVpbGRNb2RhbCgpKSBcbiAgICB9ZWxzZXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc3Rlcl9Nb2RhbF9Db250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpIFxuICAgIH1cblxuICAgXG4gICAgdG9nZ2xlID0gIXRvZ2dsZVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5Rm9ybXMoZXZlbnQpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbF9Gb3JtcycpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIFxuICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gJ25ld19Qcm9qZWN0Jyl7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFByb2plY3RGb3JtKCkpXG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFRhc2tGb3JtKCkpXG4gICAgfVxuICAgICAgIFxufVxuXG5cblxuXG5leHBvcnR7XG4gICAgdG9nZ2xlTW9kYWwsXG4gICAgZGlzcGxheUZvcm1zXG59IiwiaW1wb3J0IHtDYXRlZ29yeUZhY3RvcnksVGFza0ZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XG5pbXBvcnQgeyB0b2dnbGVNb2RhbCB9IGZyb20gXCIuL01vZGFsXCI7XG5pbXBvcnQge2NyZWF0ZU5hdkJ1dHRvbixnaXZlRG9tSW5wdHMsYnVpbGRUYXNrRWxlbWVudCB9IGZyb20gXCIuL3VpXCI7XG5pbXBvcnQgeyBzdG9yZVByb2plY3QsbG9jYWxQcm9qZWN0cyxzYXZlUHJvamVjdExpc3R9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuXG5cblxubGV0IGN1cnJlbnRQcm9qZWN0ID0gbG9jYWxQcm9qZWN0c1sxXVxuXG5cbmNvbnN0ICBkaXNwbGF5UHJvamVjdHMgPSAoKSA9PntcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJval9uYXZfY29udGFpbmVyJylcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICBsb2NhbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XG4gICAgICAgIGxldCBuZXdOYXZCdG4gPSBjcmVhdGVOYXZCdXR0b24ocHJvamVjdC5uYW1lKTtcbiAgICAgICAgbmV3TmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0b2dnbGVQcm9qZWN0KTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld05hdkJ0bik7XG4gICAgICAgIFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsUHJvamVjdHMpXG4gICAgXG59XG4vL2NyZWF0ZSBUYXNrIERvbSwgZGlzcGxheSBUYXNrIERvbSwgYW5kIGFkZCBldmVudCBsaXN0ZW5lcnNcbi8vZGlzcGxheSBUYXNrcyBhbmQgQWxsIHRhc2tzIHNob3VsZCBiZSBtYWRlIGludG8gb25lIHNpbmdsZSBmdW5jdGlvbixmb3IgYmV0dGVyIHJlLXVzYWJpbGl0eVxuY29uc3QgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QubmFtZSlcbiAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBjYXRlZ29yeS5pbm5lclRleHQgPSBjdXJyZW50UHJvamVjdC5uYW1lO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpXG4gICAgY3VycmVudFByb2plY3QudGFza1N0b3JhZ2UuZm9yRWFjaCgodGFzayk9PntcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0YXNrLmlkQ29kZSlcbiAgICAgICAgbGV0IHRhc2tFbGVtZW50ID0gYnVpbGRUYXNrRWxlbWVudChcbiAgICAgICAgICAgIHRhc2submFtZSxcbiAgICAgICAgICAgIHRhc2suZGVzYyxcbiAgICAgICAgICAgIHRhc2suZGF0ZSxcbiAgICAgICAgICAgIHRhc2suaWRDb2RlLFxuICAgICAgICAgICAgdGFzay5zdGF0dXNcbiAgICAgICAgKVxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgICAgICAgXG4gICAgfSlcbiAgICBcbiAgICBjb25zdCB0YXNrQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrX0J0bicpXG4gICAgdGFza0J1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PntcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0YXNrTGlzdGVuZXJzKVxuICAgIH0pO1xufVxuXG5cblxuXG5cbi8vc2V0cyBwbGFjZWhvbGRlciB2YWx1ZXMgaW4gbW9kYWwgdGFzayBmcm9tLHNldHMgYXR0cmlidXRlIHRvIGVkaXQgaW5zdGVhZCBvZiBjcmVhdGUgaW4gYWRkdGFza3RvcHJvalxuY29uc3QgZWRpdFRhc2sgPSAoZXZlbnQpID0+IHtcbiAgICB0b2dnbGVNb2RhbCgpXG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBnaXZlRG9tSW5wdHMoKVxuICAgIGxldCB0YXNrQXJyYXkgPSBnZXRBbGxUYXNrcygpO1xuICAgIGNvbnN0IHRhc2sgPSB0YXNrQXJyYXkuZmluZCh0YXNrID0+IHRhc2suaWRDb2RlID09IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tJZClcbiAgICAvL2NvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXNrLWNvZGUgPSBcIiR7ZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkfVwiXWApXG5cbiAgICBkb21FbGVtZW50cy50YXNrTmFtZS52YWx1ZT0gdGFzay5uYW1lXG4gICAgZG9tRWxlbWVudHMudGFza0Rlc2MudmFsdWUgPSB0YXNrLmRlc2NcbiAgICBkb21FbGVtZW50cy50YXNrQ2F0ZWdvcnkudmFsdWUgPSB0YXNrLmNhdGVnb3J5XG4gICAgY29uc29sZS5sb2coZG9tRWxlbWVudHMudGFza05hbWUpXG5cblxuICAgIGNvbnNvbGUubG9nKGRvbUVsZW1lbnRzKVxuXG4gICAgY29uc29sZS5sb2cocGFyc2VGbG9hdCh0YXNrLmRhdGUpKVxuICAgIC8vY29uc29sZS5sb2coY2FyZClcbiAgICBjb25zb2xlLmxvZyh0YXNrLmRhdGUpXG5cbiAgICBjb25zdCBzdWJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza19zdWJtaXQnKTtcbiAgICBjb25zb2xlLmxvZyhzdWJCdG4pXG4gICAgc3ViQnRuLmRhdGFzZXQuc2V0RWRpdCA9IHRydWU7XG4gICAgc3ViQnRuLmRhdGFzZXQudGFza051bSA9IHRhc2suaWRDb2RlO1xuXG5cbn1cblxuY29uc3QgZ2V0QWxsVGFza3MgPSAoKSA9PntcbiAgICBsZXQgdGFza0FycmF5ID0gW107XG4gICAgbG9jYWxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PntcbiAgICAgICAgdGFza0FycmF5LnB1c2gocHJvamVjdC50YXNrU3RvcmFnZSlcbiAgICB9KVxuICAgIC8vY29tYmluZXMgYWxsIGFycmF5cyBpbnNpZGUgdGFza0FycmF5IGludG8gb25lIHNpbmdsZSBhcnJheVxuICAgIHRhc2tBcnJheSA9IHRhc2tBcnJheS5mbGF0KDEpO1xuXG4gICAgcmV0dXJuIHRhc2tBcnJheTtcbn1cblxuY29uc3QgYWxsVGFza3MgPSAoZXZlbnQpID0+e1xuICAgIGxldCB0YXNrQXJyYXkgPSBbXTtcbiAgICBsb2NhbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+e1xuICAgICAgICB0YXNrQXJyYXkucHVzaChwcm9qZWN0LnRhc2tTdG9yYWdlKVxuICAgIH0pXG4gICAgLy9jb21iaW5lcyBhbGwgYXJyYXlzIGluc2lkZSB0YXNrQXJyYXkgaW50byBvbmUgc2luZ2xlIGFycmF5XG4gICAgdGFza0FycmF5ID0gdGFza0FycmF5LmZsYXQoMSlcblxuICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJjb21wbGV0ZWQtdGFza3NcIil7XG4gICAgICAgIGNvbnN0IGZpbmlzaGVkVGFza3MgPSBDYXRlZ29yeUZhY3RvcnkoJ0NvbXBsZXRlZCBUYXNrcycpXG4gICAgICAgIHRhc2tBcnJheS5mb3JFYWNoKCh0YXNrKT0+e1xuICAgICAgICAgICAgaWYodGFzay5zdGF0dXM9PT10cnVlKXtcbiAgICAgICAgICAgICAgICBmaW5pc2hlZFRhc2tzLnRhc2tTdG9yYWdlLnB1c2godGFzaylcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjdXJyZW50UHJvamVjdCA9IGZpbmlzaGVkVGFza3NcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QubmFtZSlcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc3QgbmV3UHJvaiA9IENhdGVnb3J5RmFjdG9yeSgnQWxsIFRhc2tzJylcbiAgICAgICAgbmV3UHJvai50YXNrU3RvcmFnZSA9IHRhc2tBcnJheVxuICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9qKVxuICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9qLnRhc2tTdG9yYWdlKTtcblxuICAgICAgICBjdXJyZW50UHJvamVjdCA9IG5ld1Byb2o7XG5cbiAgICB9XG4gICAgZGlzcGxheVRhc2tzKClcbn1cblxuXG5mdW5jdGlvbiB0b2dnbGVQcm9qZWN0KGV2ZW50KXtcbiAgICBjb25zdCBrZXkgPSBldmVudC50YXJnZXQuZGF0YXNldC5wcm9qZWN0O1xuICAgIGxvY2FsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcbiAgICAgICAgaWYocHJvamVjdC5uYW1lID09PSBrZXkpe1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LnRhc2tTdG9yYWdlKVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0Lm5hbWUpXG4gICAgZGlzcGxheVRhc2tzKClcblxufVxuXG5jb25zdCB1cGRhdGVUYXNrID0gKGNvZGUpID0+IHtcbiAgICBjb25zdCB0YXNrQXJyYXkgPSBnZXRBbGxUYXNrcygpO1xuICAgIGNvbnN0IG9sZFRhc2sgPSB0YXNrQXJyYXkuZmluZCh0YXNrID0+IHRhc2suaWRDb2RlID09IGNvZGUpXG4gICAgY29uc3QgRE9NID0gZ2l2ZURvbUlucHRzKClcbiAgICBsb2NhbFByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGlmKHByb2plY3QubmFtZSA9PT0gb2xkVGFzay5jYXRlZ29yeSl7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3QudGFza1N0b3JhZ2UuZmluZEluZGV4KHRvZG89PnRvZG8uaWRDb2RlID09IGNvZGUpXG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tTdG9yYWdlW2luZGV4XS5uYW1lID0gRE9NLnRhc2tOYW1lLnZhbHVlXG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tTdG9yYWdlW2luZGV4XS5kZXNjID0gRE9NLnRhc2tEZXNjLnZhbHVlXG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tTdG9yYWdlW2luZGV4XS5jYXRlZ29yeSA9IERPTS50YXNrQ2F0ZWdvcnkudmFsdWVcbiAgICAgICAgICAgIHByb2plY3QudGFza1N0b3JhZ2VbaW5kZXhdLmRhdGUgPSBET00udGFza0RhdGUudmFsdWVcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRhc2tBcnJheSlcbiAgICBjb25zb2xlLmxvZyhvbGRUYXNrKVxuICAgIFxufVxuXG5cbi8vY3JlYXRlIGEgdGFzayBhbmQgUHVzaCBpdCB0byB0aGUgY29ycmVjdCBwcm9qZWN0IHRhc2sgYXJyYXlcbmNvbnN0IGFkZFRhc2tUb1Byb2ogPSAoZXZlbnQpID0+e1xuICAgIGNvbnN0IERPTSA9IGdpdmVEb21JbnB0cygpXG4gICAgXG4gICAgaWYoZXZlbnQudGFyZ2V0LmRhdGFzZXQuc2V0RWRpdCl7XG4gICAgICAgIHVwZGF0ZVRhc2soZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza051bSlcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coZmFsc2UpXG4gICAgICAgIGxldCBuZXdUYXNrID0gVGFza0ZhY3RvcnkoXG4gICAgICAgICAgICBET00udGFza05hbWUudmFsdWUsXG4gICAgICAgICAgICBET00udGFza0Rlc2MudmFsdWUsXG4gICAgICAgICAgICBET00udGFza0RhdGUudmFsdWUsXG4gICAgICAgICAgICBET00udGFza0NhdGVnb3J5LnZhbHVlXG4gICAgICAgIClcbiAgICBcbiAgICAgICAgbG9jYWxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xuICAgICAgICAgICAgaWYocHJvamVjdC5uYW1lID09PSBuZXdUYXNrLmNhdGVnb3J5KXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tTdG9yYWdlLnB1c2gobmV3VGFzaylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRhc2tTdG9yYWdlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHNhdmVQcm9qZWN0TGlzdCgpXG4gICAgdG9nZ2xlTW9kYWwoKVxuICAgIGRpc3BsYXlUYXNrcygpXG59XG4vL2FkZHMgUHJvamVjdCB0byBwcm9qZWN0cyBhcnJheVxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJval9OYW1lX0lucHQnKTtcbiAgICBsZXQgbmV3UHJvamVjdCA9IENhdGVnb3J5RmFjdG9yeShwcm9qSW5wdXQudmFsdWUpO1xuICAgIHN0b3JlUHJvamVjdChuZXdQcm9qZWN0KVxuICAgIGRpc3BsYXlQcm9qZWN0cygpXG4gICAgdG9nZ2xlTW9kYWwoKVxuICAgIHByb2pJbnB1dC52YWx1ZSA9ICcnXG5cbiAgICBcbn1cblxuZnVuY3Rpb24gdGFza0xpc3RlbmVycyhldmVudCl7XG4gICAgbGV0IHRhc2tjb2RlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkXG4gICAgbGV0IGV2ZW50TmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lXG4gICAgaWYoZXZlbnROYW1lID09PSAnRGVsZXRlJyl7XG4gICAgICAgIHJlbW92ZVRhc2sodGFza2NvZGUpXG4gICAgfWVsc2UgaWYoZXZlbnROYW1lID09PSAnU3RhdHVzJyl7XG4gICAgICAgIHRhc2tTdGF0dXModGFza2NvZGUpO1xuICAgIH1cbn1cblxuY29uc3QgcmVtb3ZlVGFzayA9ICh0YXNrSWQscHJvamVjdCkgPT4ge1xuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tTdG9yYWdlLmZvckVhY2goKHRhc2ssaW5kZXgpPT57XG4gICAgICAgIGlmKHRhc2suaWRDb2RlID09IHRhc2tJZCl7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC50YXNrU3RvcmFnZS5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG5cbiAgICBkaXNwbGF5VGFza3MoKVxuICAgIHNhdmVQcm9qZWN0TGlzdCgpXG59XG5cblxuZnVuY3Rpb24gdGFza1N0YXR1cyhjb2RlKXtcbiAgICBjb25zdCBkb21FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGF0dXMtYnRuJylcbiAgICBsZXQgZG9tRWxlbWVudCA7XG4gICAgZG9tRWxlbWVudHMuZm9yRWFjaCgoYnRuKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhidG4uZGF0YXNldC50YXNrSWQpXG4gICAgICAgIGlmKGJ0bi5kYXRhc2V0LnRhc2tJZCA9PSBjb2RlKXtcbiAgICAgICAgICAgIGRvbUVsZW1lbnQgPSBidG5cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjdXJyZW50UHJvamVjdC50YXNrU3RvcmFnZS5mb3JFYWNoKCh0YXNrKT0+e1xuICAgICAgICBpZih0YXNrLmlkQ29kZSA9PSBjb2RlKXtcbiAgICAgICAgICAgIHRhc2suc3RhdHVzID0gIXRhc2suc3RhdHVzXG4gICAgICAgICAgICBpZih0YXNrLnN0YXR1cyA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLXN0YXR1cy1ncmVlbicpO1xuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1zdGF0dXMtcmVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLXN0YXR1cy1ncmVlbicpO1xuICAgICAgICAgICAgICAgIGRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzay1zdGF0dXMtcmVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2suaWRDb2RlKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGFzay5zdGF0dXMpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHNhdmVQcm9qZWN0TGlzdCgpXG4gICAgLy9kaXNwbGF5VGFza3MoKVxuICAgIFxufVxuXG5leHBvcnQge1xuICAgIGFkZFByb2plY3QsXG4gICAgYWRkVGFza1RvUHJvaixcbiAgICBkaXNwbGF5UHJvamVjdHMsXG4gICAgZGlzcGxheVRhc2tzLFxuICAgIGFsbFRhc2tzLFxuICAgIGVkaXRUYXNrLFxuICAgIHRvZ2dsZVByb2plY3QsXG59IiwiY29uc3QgVGFza0ZhY3RvcnkgPSAobmFtZSxkZXNjLGRhdGUsY2F0ZWdvcnkpID0+IHtcbiAgICBsZXQgc3RhdHVzID0gZmFsc2U7XG4gICAgY29uc3QgaWRDb2RlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMClcblxuICAgIHJldHVybiB7XG4gICAgICAgIGlkQ29kZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkZXNjLFxuICAgICAgICBkYXRlLFxuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgbmFtZVxuICAgIH1cbn1cblxuY29uc3QgQ2F0ZWdvcnlGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgICBsZXQgdGFza1N0b3JhZ2UgPSBbXTtcbiAgICBcbiAgICByZXR1cm4ge3Rhc2tTdG9yYWdlLG5hbWV9XG59XG5leHBvcnR7XG4gICAgVGFza0ZhY3RvcnksXG4gICAgQ2F0ZWdvcnlGYWN0b3J5XG59XG5cbiIsIlxuaW1wb3J0IHsgQ2F0ZWdvcnlGYWN0b3J5LFRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xuXG5jb25zdCBHeW0gPSBDYXRlZ29yeUZhY3RvcnkoJ0d5bScpOyBcblxuY29uc3QgQ29kaW5nID0gQ2F0ZWdvcnlGYWN0b3J5KCdDb2RpbmcnKVxuXG5jb25zdCBXb3JrID0gQ2F0ZWdvcnlGYWN0b3J5KCdXb3JrJylcbmNvbnN0IHRhc2sxID0gVGFza0ZhY3RvcnkoJ0ZpbmlzaCBVSScsXCJGaW5pc2ggU3R5bGluZyBVSVwiLFwiMDkvMTgvMjAyMlwiLFwiQ29kaW5nXCIpO1xuY29uc3QgdGFzazIgPSBUYXNrRmFjdG9yeSgnYWRkIEVkaXQgVGFzayBCdXR0b24nLFwiQWRkIGVkaXQgdGFzayBidXR0b24gdG8gdGFzayBjYXJkc1wiLFwiMDkvMTgvMjAyMlwiLFwiQ29kaW5nXCIpO1xuY29uc3QgdGFzazMgPSBUYXNrRmFjdG9yeSgnSmF2YXNjcmlwdCcsXCJNYWtlIGRyb3AgZG93biBzZWxlY3Rpb24gZm9yIGNhdGVnb3J5IGlucHV0IGluIHRhc2sgY3JlYXRpb24gZm9ybVwiLFwiMDkvMTgvMjAyMlwiLFwiQ29kaW5nXCIpO1xuY29uc3QgdGFzazQgPSBUYXNrRmFjdG9yeSgnSmF2YXNjcmlwdCcsXCJkaXNwbGF5IGZpbmlzaGVkIHRhc2tzIGZ1bmN0aW9uXCIsXCIwOS8xOC8yMDIyXCIsXCJDb2RpbmdcIik7XG5Db2RpbmcudGFza1N0b3JhZ2UucHVzaCh0YXNrMSlcbkNvZGluZy50YXNrU3RvcmFnZS5wdXNoKHRhc2syKVxuQ29kaW5nLnRhc2tTdG9yYWdlLnB1c2godGFzazMpXG5Db2RpbmcudGFza1N0b3JhZ2UucHVzaCh0YXNrNClcbmxldCBwcm9qZWN0cyA9IFtHeW0sQ29kaW5nLFdvcmtdXG5cblxuY29uc3QgaW5pdGlhbFN0b3JhZ2UgPSAoKCkgPT4ge1xuICAgIGlmKGxvY2FsU3RvcmFnZS5sZW5ndGggID09PSAwICl7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIixKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIH1cbiAgICBcbn0pKCk7XG5sZXQgbG9jYWxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG5cbmNvbnN0IHN0b3JlUHJvamVjdCA9IChuZXdQcm9qKSA9PiB7XG4gICAgbG9jYWxQcm9qZWN0cy5wdXNoKG5ld1Byb2opXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShsb2NhbFByb2plY3RzKSlcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpXG59XG5jb25zdCBzYXZlUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShsb2NhbFByb2plY3RzKSlcbn1cbmV4cG9ydHtcbiAgICBzdG9yZVByb2plY3QsXG4gICAgbG9jYWxQcm9qZWN0cyxcbiAgICBzYXZlUHJvamVjdExpc3QsXG4gICAgaW5pdGlhbFN0b3JhZ2Vcbn0iLCJpbXBvcnQge2FkZFByb2plY3QsdG9nZ2xlUHJvamVjdCxhZGRUYXNrVG9Qcm9qLGRpc3BsYXlQcm9qZWN0cyxkaXNwbGF5VGFza3MsYWxsVGFza3MsZWRpdFRhc2t9IGZyb20gXCIuL2FwcFwiO1xuLy9pbXBvcnQgeyBhZGRUYXNrVG9Qcm9qIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IHRvZ2dsZU1vZGFsLGRpc3BsYXlGb3JtcyB9IGZyb20gXCIuL01vZGFsXCI7XG5pbXBvcnQgeyBsb2NhbFByb2plY3RzIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5jb25zdCBidWlsZEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ1RvLURvIEFwcCdcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICByZXR1cm4gaGVhZGVyIFxufVxuXG5jb25zdCBjcmVhdGVOYXZCdXR0b24gPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb2pCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHByb2pCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvai1idG4taG92ZXInKVxuICAgIHByb2pCdXR0b24uaW5uZXJUZXh0ID0gbmFtZVxuICAgIHByb2pCdXR0b24uZGF0YXNldC5wcm9qZWN0ID0gbmFtZVxuICAgIHJldHVybiBwcm9qQnV0dG9uXG59XG5cblxuXG4vL2FkZCBjb2RpbmcgYW5kIHdvcmsgVG9EbyBidXR0b25zIHRvIHRoZSBtYWluIG5hdiBhbmQgbm90IHByb2plY3QgbmF2LiBcblxuY29uc3QgYnVpbGROYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgICBjb25zdCB0YXNrQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b25zJylcblxuICAgIFxuICAgIGNvbnN0IGNvbXBsZXRlVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbXBsZXRlVGFza3MuaW5uZXJUZXh0ID0gJ2ZpbmlzaGVkJ1xuICAgIGNvbXBsZXRlVGFza3MuaWQgPSdjb21wbGV0ZWQtdGFza3MnXG4gICAgY29tcGxldGVUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWxsVGFza3MpO1xuXG4gICAgY29uc3QgYWxsVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFsbFRhc2tCdG4uaW5uZXJUZXh0ID0gXCJBbGwgVGFza3NcIlxuICAgIGFsbFRhc2tCdG4uaWQgPSAnYWxsLXRhc2tzJ1xuICAgIGFsbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFsbFRhc2tzKVxuICAgIC8vdGFza0J1dHRvbkNvbnRhaW5lci5hcHBlbmQoYWxsVGFza0J0bixjb21wbGV0ZVRhc2tzKVxuICAgIGNvbnN0IHByb2plY3RNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0TWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluLXByb2plY3QtY29udGFpbmVyJylcbiAgICAvL3Byb2plY3QgYnV0dG9ucyBjb250YWluXG4gICAgXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ1Byb2plY3RzJ1xuICAgIHByb2plY3RNYWluLmFwcGVuZCh0aXRsZSxwcm9qZWN0Q29udGFpbmVyKVxuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJval9uYXZfY29udGFpbmVyJyk7XG4gICAgXG4gICAgY29uc3QgYWRkTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFkZE1vZGFsLmlubmVyVGV4dCA9ICcrJ1xuICAgIGFkZE1vZGFsLmlkID0gJ29wZW5fTW9kYWwnXG4gICAgYWRkTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRvZ2dsZU1vZGFsKVxuXG4gICAgY29uc3QgY29kZVByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvZGVQcm9qLmlubmVyVGV4dCA9ICdDb2RlJ1xuICAgIGNvZGVQcm9qLmRhdGFzZXQucHJvamVjdCA9ICdDb2RpbmcnXG4gICAgY29kZVByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRvZ2dsZVByb2plY3QpXG5cbiAgICBjb25zdCB3b3JrUHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgd29ya1Byb2ouaW5uZXJUZXh0ID0gJ1dvcmsnXG4gICAgd29ya1Byb2ouZGF0YXNldC5wcm9qZWN0ID0gJ1dvcmsnXG4gICAgd29ya1Byb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRvZ2dsZVByb2plY3QpXG5cbiAgICBjb25zdCBuYXZCdG5zID0gW2FsbFRhc2tCdG4sY29tcGxldGVUYXNrcyxjb2RlUHJvaix3b3JrUHJval1cbiAgICBuYXZCdG5zLmZvckVhY2goKGJ0bik9PntcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ25hdl9idG4nKVxuICAgIH0pXG4gICAgdGFza0J1dHRvbkNvbnRhaW5lci5hcHBlbmQoYWxsVGFza0J0bixjb21wbGV0ZVRhc2tzLGNvZGVQcm9qLHdvcmtQcm9qLGFkZE1vZGFsKVxuICAgIG5hdi5hcHBlbmQodGFza0J1dHRvbkNvbnRhaW5lcixwcm9qZWN0TWFpbilcblxuICAgIHJldHVybiBuYXZcbn1cbi8vTU9EQUxcbmNvbnN0IGJ1aWxkVGFza0Zvcm0gPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtLm5hbWUgPSAndGFzay1mb3JtJ1xuICAgIGZvcm0uaWQgPSAndGFza19Nb2RhbCdcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiQ3JlYXRlIFRhc2tcIlxuXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgIG5hbWVJbnB1dC5uYW1lID0gJ25hbWUnXG4gICAgbmFtZUlucHV0LmlkID0gJ25hbWVfaW5wdXQnXG4gICAgbmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5wdCcpXG4gICAgbmFtZUlucHV0LnBsYWNlaG9sZGVyID0gXCJUaXRsZVwiXG5cbiAgICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywnZGVzYycpXG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdkZXNjX2lucHV0JylcbiAgICBkZXNjSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1pbnB0JylcbiAgICBkZXNjSW5wdXQucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uXCJcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2RhdGVfaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1pbnB0JylcbiAgICBcblxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBsb2NhbFByb2plY3RzLmZvckVhY2goKHByb2opPT57XG4gICAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIG9wdC52YWx1ZSA9IHByb2oubmFtZVxuICAgICAgICBvcHQuaW5uZXJUZXh0ID0gcHJvai5uYW1lXG5cbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChvcHQpXG4gICAgfSk7XG5cbiAgICBcbiAgICBwcm9qZWN0Lm5hbWUgPSAnY2F0ZWdvcnknXG4gICAgcHJvamVjdC5pZCA9ICdwcm9qZWN0X0Fzc2lnbidcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5wdCcpXG4gICAgXG4gICAgXG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Rhc2tfc3VibWl0JylcbiAgICBzdWJtaXQudHlwZSA9ICdzdWJtaXQnXG4gICAgc3VibWl0LmlubmVyVGV4dCA9ICdBZGQnXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhZGRUYXNrVG9Qcm9qKVxuXG4gICAgZm9ybS5hcHBlbmQodGl0bGUsbmFtZUlucHV0LGRlc2NJbnB1dCxkYXRlSW5wdXQscHJvamVjdCxzdWJtaXQpO1xuXG4gICAgcmV0dXJuIGZvcm1cbn1cbmNvbnN0IGJ1aWxkUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RfbW9kYWwnKVxuXG4gICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2pOYW1lLmlkID0gJ3Byb2pfTmFtZV9JbnB0JztcbiAgICBwcm9qTmFtZS5uYW1lID0gJ3Byb2plY3RfTmFtZV9JbnB0JztcbiAgICBcbiAgICBjb25zdCBhZGRQcm9qQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRQcm9qQnRuLmlkID0gJ2FkZF9Qcm9qX0J1dHRvbidcbiAgICBhZGRQcm9qQnRuLmlubmVyVGV4dCA9ICdBZGQnXG4gICAgYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkUHJvamVjdClcblxuICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgcHJvak5hbWUsXG4gICAgICAgIGFkZFByb2pCdG5cbiAgICApXG4gICAgcmV0dXJuIG1vZGFsQ29udGFpbmVyXG59XG5jb25zdCBidWlsZE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFzdGVyX01vZGFsX0NvbnRhaW5lcicpXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5pZCA9ICdtYXN0ZXJfTW9kYWwnXG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5hdi5pZCA9ICdtYXN0ZXJfTW9kYWxfTmF2J1xuIFxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHByb2plY3QuaWQgPSAnbmV3X1Byb2plY3QnXG4gICAgcHJvamVjdC5pbm5lclRleHQgPSAnUHJvamVjdCdcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkaXNwbGF5Rm9ybXMpXG5cbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB0b2RvLmlkID0gJ25ld19UYXNrJztcbiAgICB0b2RvLmlubmVyVGV4dCA9ICdUYXNrJ1xuICAgIHRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRpc3BsYXlGb3JtcylcblxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm1Db250YWluZXIuaWQgPSAnbW9kYWxfRm9ybXMnXG4gICAgY29uc3QgZmlyc3RGb3JtID0gYnVpbGRUYXNrRm9ybSgpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3RGb3JtKVxuXG4gICAgY29uc3QgY2xvc2VPdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNsb3NlT3V0LmlubmVyVGV4dCA9ICdYJ1xuICAgIGNsb3NlT3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0b2dnbGVNb2RhbClcbiAgICBjbG9zZU91dC5jbGFzc0xpc3QuYWRkKCdjbG9zZS1tb2RhbCcpXG5cbiAgICBuYXYuYXBwZW5kKHByb2plY3QsdG9kbylcbiAgICBtb2RhbC5hcHBlbmQobmF2LGZvcm1Db250YWluZXIpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobW9kYWwsY2xvc2VPdXQpXG5cbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lclxuXG59XG5jb25zdCBnaXZlRG9tSW5wdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZV9pbnB1dCcpXG4gICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY19pbnB1dCcpXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZV9pbnB1dCcpXG4gICAgY29uc3QgdGFza0NhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfQXNzaWduJylcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRhc2tOYW1lLFxuICAgICAgICB0YXNrRGVzYyxcbiAgICAgICAgdGFza0RhdGUsXG4gICAgICAgIHRhc2tDYXRlZ29yeVxuICAgIH1cbn1cbmNvbnN0IGJ1aWxkVGFza0VsZW1lbnQgPSAobmFtZSxkZXNjLGRhdGUsY29kZSxzdGF0dXMpID0+IHtcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2tfY2FyZCcpXG4gICAgdGFza0NhcmQuZGF0YXNldC50YXNrQ29kZSA9IGAke2NvZGV9YFxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRpdGxlLmlubmVyVGV4dCA9IG5hbWVcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpXG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkdWVEYXRlLmlubmVyVGV4dCA9IGRhdGVcblxuICAgIFxuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGVkaXQuaW5uZXJUZXh0PSdFZGl0J1xuICAgIGVkaXQuZGF0YXNldC50YXNrSWQgPSBjb2RlXG4gICAgZWRpdC5uYW1lID0gJ0VkaXQnXG4gICAgZWRpdC5pZCA9ICdlZGl0LXRhc2snXG4gICAgZWRpdC5jbGFzc0xpc3QuYWRkKCd0YXNrX0J0bicpXG4gICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlZGl0VGFzaylcbiAgICAgICAgXG4gIFxuICAgIGNvbnN0IHRhc2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2tCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1idG4tY29udGFpbmVyJylcblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGRlbGV0ZVRhc2suaW5uZXJUZXh0ID0gJ0RlbGV0ZSdcbiAgICBkZWxldGVUYXNrLmRhdGFzZXQudGFza0lkID0gY29kZSBcbiAgICBkZWxldGVUYXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2tfQnRuJylcbiAgICBkZWxldGVUYXNrLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKVxuICAgIGRlbGV0ZVRhc2submFtZSA9ICdEZWxldGUnXG4gICAgXG5cbiAgICBjb25zdCBtYXJrQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG1hcmtDb21wbGV0ZS5kYXRhc2V0LnRhc2tJZCA9IGNvZGVcbiAgICBtYXJrQ29tcGxldGUuY2xhc3NMaXN0LmFkZCgndGFza19CdG4nKVxuICAgIG1hcmtDb21wbGV0ZS5uYW1lID0gJ1N0YXR1cydcbiAgICBtYXJrQ29tcGxldGUuaW5uZXJUZXh0ID0gJ1N0YXR1cydcbiAgICBtYXJrQ29tcGxldGUuY2xhc3NMaXN0LmFkZCgnc3RhdHVzLWJ0bicpXG4gICAgXG4gICAgaWYoc3RhdHVzPT09dHJ1ZSl7XG4gICAgICAgIG1hcmtDb21wbGV0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXN0YXR1cy1ncmVlbicpO1xuICAgICAgICBtYXJrQ29tcGxldGUuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1zdGF0dXMtcmVkJylcbiAgICBcbiAgICB9ZWxzZXtcbiAgICAgICAgbWFya0NvbXBsZXRlLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stc3RhdHVzLWdyZWVuJyk7XG4gICAgICAgIG1hcmtDb21wbGV0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXN0YXR1cy1yZWQnKVxuXG4gICAgfVxuXG4gICAgdGFza0J0bkNvbnRhaW5lci5hcHBlbmQoZGVsZXRlVGFzayxtYXJrQ29tcGxldGUsZWRpdClcbiAgICBcblxuICAgIHRhc2tDYXJkLmFwcGVuZChcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICB0YXNrQnRuQ29udGFpbmVyXG5cbiAgICApXG5cbiAgICByZXR1cm4gdGFza0NhcmRcbn1cblxuXG5cblxuY29uc3QgbG9hZHBhZ2UgPSAoKSA9PntcbiAgICBjb25zdCBoZWFkZXIgPSBidWlsZEhlYWRlcigpXG4gICAgY29uc3QgbmF2ID0gYnVpbGROYXYoKVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbiAgICAvL2FkZCBmb290ZXJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChoZWFkZXIsbmF2LG1haW4sZm9vdGVyKVxuICAgIFxuICAgIGRpc3BsYXlQcm9qZWN0cygpXG4gICAgZGlzcGxheVRhc2tzKClcbn07XG4vL1xuZXhwb3J0e1xuICAgIGxvYWRwYWdlLFxuICAgIGNyZWF0ZU5hdkJ1dHRvbixcbiAgICBidWlsZFRhc2tGb3JtLFxuICAgIGJ1aWxkUHJvamVjdEZvcm0sXG4gICAgYnVpbGRNb2RhbCxcbiAgICBnaXZlRG9tSW5wdHMsXG4gICAgYnVpbGRUYXNrRWxlbWVudFxufVxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgeyBpbml0aWFsU3RvcmFnZSB9IGZyb20gJy4vbW9kdWxlcy9zdG9yYWdlJztcbmltcG9ydCB7IGxvYWRwYWdlIH0gZnJvbSAnLi9tb2R1bGVzL3VpJztcblxuXG5sb2FkcGFnZSgpXG5cblxuXG4vL2NvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9