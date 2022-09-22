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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: rgb(240, 65, 65);\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n\nheader {\n  grid-column: 1/3;\n  height: 5vh;\n  color: white;\n}\n\nnav {\n  grid-column: 1/4;\n  background-color: whitesmoke;\n  padding: 20px;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  grid-column: 4/13;\n  background-color: white;\n  padding: 10px;\n}\n\n.proj_nav_container {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: center;\n}\n\n.proj_nav_container > button {\n  background-color: transparent;\n  border: none;\n  width: 80%;\n  text-align: start;\n  padding: 5px;\n  font-size: 1.3rem;\n}\n\n.proj-btn-hover:hover {\n  background-color: rgb(241, 159, 159);\n  color: white;\n}\n\n.master_Modal_Container {\n  grid-column: 10/13;\n  grid-row: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  padding: 20px;\n  background-color: whitesmoke;\n}\n\n#master_Modal {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n#open_Modal {\n  width: 100px;\n}\n\n.close-modal {\n  width: 50px;\n  height: 50px;\n  border: none;\n  border-radius: 25px;\n  background-color: red;\n  color: white;\n  box-shadow: 0px 0px 1px 1px black;\n  font-size: 20px;\n  align-self: center;\n}\n\n#task_Modal {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding-top: 10px;\n  background-color: #ec7a7a;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 1px 1px 3px black;\n  align-items: center;\n}\n\n.task-inpt {\n  height: 25px;\n  border-radius: 5px;\n  border: none;\n  padding: 5px;\n  box-shadow: 1px 1px 3px black;\n  width: 100%;\n}\n\n#task_submit {\n  width: 50px;\n  padding: 5px;\n  border: none;\n  background-color: green;\n  border-radius: 15px;\n  box-shadow: 1px 1px 3px black;\n}\n\n.task_card {\n  background-color: #ec7a7a;\n  box-shadow: 0 1px 2px rgb(72, 72, 72);\n  border-radius: 15px;\n  padding: 20px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  align-items: center;\n  color: black;\n  font-size: 1.2rem;\n  gap: 10px;\n}\n\n.task-btn-container {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n\n.task_Btn {\n  padding: 10px;\n  border: 1px solid black;\n  border-radius: 10px;\n  min-height: 40px;\n  text-align: center;\n  box-shadow: 0 0 2px grey;\n}\n\n.task-status-red {\n  background-color: red;\n}\n\n.task-status-green {\n  background-color: green;\n}\n\n.delete-btn {\n  color: red;\n}\n\n.task-description {\n  grid-column: 2/4;\n  text-align: start;\n}\n\n.main-project-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  box-shadow: 0 0 3px rgb(38, 37, 37);\n  padding: 10px;\n  background-color: #ec7a7a;\n}\n\nfooter {\n  grid-row: 3;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,WAAA;EACA,sBAAA;AACJ;;AASA;EACI,kCAAA;EACA,aAAA;EACA,sCAAA;AANJ;;AASA;EACI,gBAAA;EACA,WAAA;EACA,YAAA;AANJ;;AASA;EACI,gBAAA;EACA,4BAAA;EACA,aAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AANJ;;AAaA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,iBAAA;EACA,uBAAA;EACA,aAAA;AAVJ;;AAaA;EACI,aAAA;EACA,sBAAA;EACA,QAAA;EACA,mBAAA;AAVJ;;AAYA;EACI,6BAAA;EACA,YAAA;EACA,UAAA;EACA,iBAAA;EACA,YAAA;EACA,iBAAA;AATJ;;AAWA;EACI,oCAAA;EACA,YAAA;AARJ;;AAUA;EACI,kBAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,YAAA;EACA,aAAA;EACA,4BAAA;AAPJ;;AAWA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;AARJ;;AAcA;EACI,YAAA;AAXJ;;AAeA;EACI,WAAA;EACA,YAAA;EACA,YAAA;EACA,mBAAA;EACA,qBAAA;EACA,YAAA;EACA,iCAAA;EACA,eAAA;EACA,kBAAA;AAZJ;;AAcA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,iBAAA;EACA,yBAAA;EACA,aAAA;EACA,kBAAA;EACA,6BAAA;EACA,mBAAA;AAXJ;;AAgBA;EACI,YAAA;EACA,kBAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,WAAA;AAbJ;;AAeA;EACI,WAAA;EACA,YAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,6BAAA;AAZJ;;AAcA;EACI,yBAAA;EACA,qCAAA;EACA,mBAAA;EACA,aAAA;EACA,aAAA;EACA,0CAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;EACA,SAAA;AAXJ;;AAgBA;EACI,aAAA;EACA,yBAAA;EACA,SAAA;AAbJ;;AAeA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,wBAAA;AAZJ;;AAeA;EACI,qBAAA;AAZJ;;AAcA;EACI,uBAAA;AAXJ;;AAaA;EACI,UAAA;AAVJ;;AAcA;EACI,gBAAA;EACA,iBAAA;AAXJ;;AAaA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;EACA,mCAAA;EACA,aAAA;EACA,yBAAA;AAVJ;;AAgBA;EACI,WAAA;AAbJ","sourcesContent":["*{\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n$dark-background:rgb(230, 234, 248);\n$secondary-bg: rgb(186, 180, 180);\n$primary-text-color: #ffffff;\n$light-bg: #3d3d3d;\n$purp-bg : #6e5b6e;\n\n\n\nbody{\n    background-color: rgb(240, 65, 65);\n    display: grid;\n    grid-template-columns: repeat(12,1fr);\n}\n\nheader{\n    grid-column:  1/3;\n    height: 5vh;\n    color: white;\n}\n\nnav{\n    grid-column: 1/4;\n    background-color: whitesmoke ;\n    padding: 20px;\n    min-height: 90vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    \n    \n    \n}\n\n\nmain{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    grid-column: 4/13;\n    background-color: white;\n    padding: 10px;\n    \n}\n.proj_nav_container{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    align-items: center;\n}\n.proj_nav_container>button{\n    background-color: transparent;\n    border: none;\n    width: 80%;\n    text-align: start;\n    padding: 5px;\n    font-size: 1.3rem;\n}\n.proj-btn-hover:hover{\n    background-color: rgb(241, 159, 159);\n    color: white;\n}\n.master_Modal_Container{\n    grid-column: 10/13;\n    grid-row: 2;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n    padding: 20px;\n    background-color: whitesmoke;\n    \n    \n}\n#master_Modal{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    \n\n\n}\n\n#open_Modal{\n    width: 100px;\n    \n    \n}\n.close-modal{\n    width: 50px;\n    height: 50px;\n    border: none;\n    border-radius: 25px;\n    background-color: red;\n    color: white;\n    box-shadow: 0px 0px 1px 1px black;\n    font-size: 20px;\n    align-self: center;\n}\n#task_Modal{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding-top: 10px;\n    background-color: #ec7a7a;\n    padding: 10px;\n    border-radius: 5px;\n    box-shadow: 1px 1px 3px black;\n    align-items: center;\n    \n    \n\n} \n.task-inpt{\n    height: 25px;\n    border-radius: 5px;\n    border: none;\n    padding: 5px;\n    box-shadow: 1px 1px 3px black;\n    width: 100%;\n}\n#task_submit{\n    width: 50px;\n    padding: 5px;\n    border: none;\n    background-color: green;\n    border-radius: 15px;\n    box-shadow: 1px 1px 3px black;\n}\n.task_card{\n    background-color: #ec7a7a;\n    box-shadow: 0 1px 2px rgb(72, 72, 72);\n    border-radius: 15px;\n    padding: 20px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    align-items: center;\n    color: black;\n    font-size: 1.2rem;\n    gap: 10px;\n    \n       \n}\n\n.task-btn-container{\n    display: flex;\n    justify-content: flex-end;\n    gap:10px\n}\n.task_Btn{\n    padding: 10px;\n    border: 1px solid black;\n    border-radius: 10px;\n    min-height: 40px ;\n    text-align: center;\n    box-shadow: 0 0 2px grey;\n\n}\n.task-status-red{\n    background-color: red;\n}\n.task-status-green{\n    background-color: green;\n}\n.delete-btn{\n    color: red;\n    \n}\n\n.task-description{\n    grid-column: 2/4;\n    text-align: start;\n}\n.main-project-container{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    box-shadow: 0 0 3px rgb(38, 37, 37);\n    padding: 10px;\n    background-color: #ec7a7a;\n}\n\n\n\n\nfooter{\n    grid-row:3\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");


let toggle = false
const main  = document.querySelector('main')
const toggleModal = () => {
    const main  = document.querySelector('main')
    if(toggle === false){
        console.log(main)
        main.style.gridColumn = "4/10"
        main.style.gridRow = "2"
        document.body.appendChild((0,_ui__WEBPACK_IMPORTED_MODULE_0__.buildModal)()) 
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
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks)
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
        let newNavBtn = (0,_ui__WEBPACK_IMPORTED_MODULE_2__.createNavButton)(project.name)
        newNavBtn.addEventListener('click',toggleProject)
        container.appendChild(newNavBtn)
        
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
//create a task and Push it to the correct project task array
const addTaskToProj = () =>{
    const DOM = (0,_ui__WEBPACK_IMPORTED_MODULE_2__.giveDomInpts)()
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
/* harmony export */   "localProjects": () => (/* binding */ localProjects),
/* harmony export */   "saveProjectList": () => (/* binding */ saveProjectList),
/* harmony export */   "storeProject": () => (/* binding */ storeProject)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/modules/factory.js");



const Gym = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.CategoryFactory)('Gym'); 

const Coding = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.CategoryFactory)('Coding')

const task1 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.TaskFactory)('Finish UI',"Finish Styling UI","09/18/2022","Coding");
const task2 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.TaskFactory)('add Edit Task Button',"Add edit task button to task cards","09/18/2022","Coding");
const task3 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.TaskFactory)('Javascript',"Make drop down selection for category input in task creation form","09/18/2022","Coding");
const task4 = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.TaskFactory)('Javascript',"display finished tasks function","09/18/2022","Coding");
Coding.taskStorage.push(task1)
Coding.taskStorage.push(task2)
Coding.taskStorage.push(task3)
Coding.taskStorage.push(task4)
let projects = [Gym,Coding]


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
const buildNav = () => {
    const nav = document.createElement('nav')
    const taskButtonContainer = document.createElement('div')

    const completeTasks = document.createElement('button')
    completeTasks.innerText = 'finished'
    completeTasks.id ='completed-tasks'
    completeTasks.addEventListener('click',_app__WEBPACK_IMPORTED_MODULE_0__.allTasks)

    const allTaskBtn = document.createElement('button');
    allTaskBtn.innerText = "All Tasks"
    allTaskBtn.id = 'all-tasks'
    allTaskBtn.addEventListener('click',_app__WEBPACK_IMPORTED_MODULE_0__.allTasks)
    taskButtonContainer.append(allTaskBtn,completeTasks)
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
   
    nav.append(taskButtonContainer,projectMain,addModal)

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
    edit.addEventListener("click",(event)=>{
        ;(0,_Modal__WEBPACK_IMPORTED_MODULE_1__.toggleModal)()
        const domElements = giveDomInpts()

        if(event.target.id ==='edit-task'){
            const cards = document.querySelectorAll('.task_card')
            console.log(cards);
            cards.forEach((card)=>{
                if(card.dataset.taskCode == event.target.dataset.taskId){
                    console.log(card)
                    card.innerHTML = ''
                }
            })

        }
    })


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
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");




(0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.loadpage)()



//console.log(localStorage)


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBZTtBQUNuQixJQUFJLG1EQUFZO0FBQ2hCO0FBQ0E7QUFTQzs7Ozs7Ozs7OztVQzNSRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNtQjs7O0FBR3hDLHFEQUFROzs7O0FBSVIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9mYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgNjUsIDY1KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxubmF2IHtcXG4gIGdyaWQtY29sdW1uOiAxLzQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGdyaWQtY29sdW1uOiA0LzEzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ucHJval9uYXZfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJval9uYXZfY29udGFpbmVyID4gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5wcm9qLWJ0bi1ob3Zlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAxNTksIDE1OSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYXN0ZXJfTW9kYWxfQ29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAxMC8xMztcXG4gIGdyaWQtcm93OiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuI21hc3Rlcl9Nb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuI29wZW5fTW9kYWwge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uY2xvc2UtbW9kYWwge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4IGJsYWNrO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jdGFza19Nb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjN2E3YTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCBibGFjaztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWlucHQge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3Rhc2tfc3VibWl0IHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggYmxhY2s7XFxufVxcblxcbi50YXNrX2NhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjN2E3YTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2IoNzIsIDcyLCA3Mik7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrX0J0biB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggZ3JleTtcXG59XFxuXFxuLnRhc2stc3RhdHVzLXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrLXN0YXR1cy1ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmRlbGV0ZS1idG4ge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4ubWFpbi1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiKDM4LCAzNywgMzcpO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzdhN2E7XFxufVxcblxcbmZvb3RlciB7XFxuICBncmlkLXJvdzogMztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBU0E7RUFDSSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtBQU5KOztBQVNBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU5KOztBQVNBO0VBQ0ksZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBTko7O0FBYUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFWSjs7QUFhQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQVZKOztBQVlBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBVEo7O0FBV0E7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7QUFSSjs7QUFVQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQVBKOztBQVdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQVJKOztBQWNBO0VBQ0ksWUFBQTtBQVhKOztBQWVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVpKOztBQWNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBWEo7O0FBZ0JBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFiSjs7QUFlQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQVpKOztBQWNBO0VBQ0kseUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQVhKOztBQWdCQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUFiSjs7QUFlQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBWko7O0FBZUE7RUFDSSxxQkFBQTtBQVpKOztBQWNBO0VBQ0ksdUJBQUE7QUFYSjs7QUFhQTtFQUNJLFVBQUE7QUFWSjs7QUFjQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFYSjs7QUFhQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQVZKOztBQWdCQTtFQUNJLFdBQUE7QUFiSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4kZGFyay1iYWNrZ3JvdW5kOnJnYigyMzAsIDIzNCwgMjQ4KTtcXG4kc2Vjb25kYXJ5LWJnOiByZ2IoMTg2LCAxODAsIDE4MCk7XFxuJHByaW1hcnktdGV4dC1jb2xvcjogI2ZmZmZmZjtcXG4kbGlnaHQtYmc6ICMzZDNkM2Q7XFxuJHB1cnAtYmcgOiAjNmU1YjZlO1xcblxcblxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDY1LCA2NSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLDFmcik7XFxufVxcblxcbmhlYWRlcntcXG4gICAgZ3JpZC1jb2x1bW46ICAxLzM7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbm5hdntcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZSA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgXFxuICAgIFxcbiAgICBcXG59XFxuXFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBncmlkLWNvbHVtbjogNC8xMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIFxcbn1cXG4ucHJval9uYXZfY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2pfbmF2X2NvbnRhaW5lcj5idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4ucHJvai1idG4taG92ZXI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDE1OSwgMTU5KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubWFzdGVyX01vZGFsX0NvbnRhaW5lcntcXG4gICAgZ3JpZC1jb2x1bW46IDEwLzEzO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIFxcbiAgICBcXG59XFxuI21hc3Rlcl9Nb2RhbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBcXG5cXG5cXG59XFxuXFxuI29wZW5fTW9kYWx7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgXFxuICAgIFxcbn1cXG4uY2xvc2UtbW9kYWx7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDFweCBibGFjaztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbiN0YXNrX01vZGFse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM3YTdhO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGJsYWNrO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgXFxuXFxufSBcXG4udGFzay1pbnB0e1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuI3Rhc2tfc3VibWl0e1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCBibGFjaztcXG59XFxuLnRhc2tfY2FyZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjN2E3YTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYig3MiwgNzIsIDcyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIFxcbiAgICAgICBcXG59XFxuXFxuLnRhc2stYnRuLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOjEwcHhcXG59XFxuLnRhc2tfQnRue1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWluLWhlaWdodDogNDBweCA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCBncmV5O1xcblxcbn1cXG4udGFzay1zdGF0dXMtcmVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi50YXNrLXN0YXR1cy1ncmVlbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcbi5kZWxldGUtYnRue1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb257XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubWFpbi1wcm9qZWN0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYigzOCwgMzcsIDM3KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjN2E3YTtcXG59XFxuXFxuXFxuXFxuXFxuZm9vdGVye1xcbiAgICBncmlkLXJvdzozXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGJ1aWxkUHJvamVjdEZvcm0sYnVpbGRUYXNrRm9ybSxidWlsZE1vZGFsIH0gZnJvbSAnLi91aSdcblxubGV0IHRvZ2dsZSA9IGZhbHNlXG5jb25zdCBtYWluICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBpZih0b2dnbGUgPT09IGZhbHNlKXtcbiAgICAgICAgY29uc29sZS5sb2cobWFpbilcbiAgICAgICAgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCI0LzEwXCJcbiAgICAgICAgbWFpbi5zdHlsZS5ncmlkUm93ID0gXCIyXCJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChidWlsZE1vZGFsKCkpIFxuICAgIH1lbHNle1xuICAgICAgICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjQvMTNcIlxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXN0ZXJfTW9kYWxfQ29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsKSBcbiAgICB9XG4gICAgdG9nZ2xlID0gIXRvZ2dsZVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5Rm9ybXMoZXZlbnQpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbF9Gb3JtcycpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIFxuICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gJ25ld19Qcm9qZWN0Jyl7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFByb2plY3RGb3JtKCkpXG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFRhc2tGb3JtKCkpXG4gICAgfVxuICAgICAgIFxufVxuXG5cblxuXG5leHBvcnR7XG4gICAgdG9nZ2xlTW9kYWwsXG4gICAgZGlzcGxheUZvcm1zXG59IiwiaW1wb3J0IHtDYXRlZ29yeUZhY3RvcnksVGFza0ZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XG5pbXBvcnQgeyB0b2dnbGVNb2RhbCB9IGZyb20gXCIuL01vZGFsXCI7XG5pbXBvcnQge2NyZWF0ZU5hdkJ1dHRvbixnaXZlRG9tSW5wdHMsYnVpbGRUYXNrRWxlbWVudCB9IGZyb20gXCIuL3VpXCI7XG5pbXBvcnQgeyBzdG9yZVByb2plY3QsbG9jYWxQcm9qZWN0cyxzYXZlUHJvamVjdExpc3R9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuXG5cblxubGV0IGN1cnJlbnRQcm9qZWN0ID0gbG9jYWxQcm9qZWN0c1sxXVxuXG5cbmNvbnN0ICBkaXNwbGF5UHJvamVjdHMgPSAoKSA9PntcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJval9uYXZfY29udGFpbmVyJylcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICBsb2NhbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XG4gICAgICAgIGxldCBuZXdOYXZCdG4gPSBjcmVhdGVOYXZCdXR0b24ocHJvamVjdC5uYW1lKVxuICAgICAgICBuZXdOYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRvZ2dsZVByb2plY3QpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdOYXZCdG4pXG4gICAgICAgIFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsUHJvamVjdHMpXG4gICAgXG59XG4vL2NyZWF0ZSBUYXNrIERvbSwgZGlzcGxheSBUYXNrIERvbSwgYW5kIGFkZCBldmVudCBsaXN0ZW5lcnNcbi8vZGlzcGxheSBUYXNrcyBhbmQgQWxsIHRhc2tzIHNob3VsZCBiZSBtYWRlIGludG8gb25lIHNpbmdsZSBmdW5jdGlvbixmb3IgYmV0dGVyIHJlLXVzYWJpbGl0eVxuY29uc3QgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QubmFtZSlcbiAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBjYXRlZ29yeS5pbm5lclRleHQgPSBjdXJyZW50UHJvamVjdC5uYW1lO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpXG4gICAgY3VycmVudFByb2plY3QudGFza1N0b3JhZ2UuZm9yRWFjaCgodGFzayk9PntcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0YXNrLmlkQ29kZSlcbiAgICAgICAgbGV0IHRhc2tFbGVtZW50ID0gYnVpbGRUYXNrRWxlbWVudChcbiAgICAgICAgICAgIHRhc2submFtZSxcbiAgICAgICAgICAgIHRhc2suZGVzYyxcbiAgICAgICAgICAgIHRhc2suZGF0ZSxcbiAgICAgICAgICAgIHRhc2suaWRDb2RlLFxuICAgICAgICAgICAgdGFzay5zdGF0dXNcbiAgICAgICAgKVxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgICAgICAgXG4gICAgfSlcbiAgICBcbiAgICBjb25zdCB0YXNrQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrX0J0bicpXG4gICAgdGFza0J1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PntcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0YXNrTGlzdGVuZXJzKVxuICAgIH0pO1xufVxuXG5cbmNvbnN0IGFsbFRhc2tzID0gKGV2ZW50KSA9PntcbiAgICBsZXQgdGFza0FycmF5ID0gW107XG4gICAgbG9jYWxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PntcbiAgICAgICAgdGFza0FycmF5LnB1c2gocHJvamVjdC50YXNrU3RvcmFnZSlcbiAgICB9KVxuICAgIC8vY29tYmluZXMgYWxsIGFycmF5cyBpbnNpZGUgdGFza0FycmF5IGludG8gb25lIHNpbmdsZSBhcnJheVxuICAgIHRhc2tBcnJheSA9IHRhc2tBcnJheS5mbGF0KDEpXG5cbiAgICBpZihldmVudC50YXJnZXQuaWQgPT09IFwiY29tcGxldGVkLXRhc2tzXCIpe1xuICAgICAgICBjb25zdCBmaW5pc2hlZFRhc2tzID0gQ2F0ZWdvcnlGYWN0b3J5KCdDb21wbGV0ZWQgVGFza3MnKVxuICAgICAgICB0YXNrQXJyYXkuZm9yRWFjaCgodGFzayk9PntcbiAgICAgICAgICAgIGlmKHRhc2suc3RhdHVzPT09dHJ1ZSl7XG4gICAgICAgICAgICAgICAgZmluaXNoZWRUYXNrcy50YXNrU3RvcmFnZS5wdXNoKHRhc2spXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBmaW5pc2hlZFRhc2tzXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0Lm5hbWUpXG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnN0IG5ld1Byb2ogPSBDYXRlZ29yeUZhY3RvcnkoJ0FsbCBUYXNrcycpXG4gICAgICAgIG5ld1Byb2oudGFza1N0b3JhZ2UgPSB0YXNrQXJyYXlcbiAgICAgICAgY29uc29sZS5sb2cobmV3UHJvailcbiAgICAgICAgY29uc29sZS5sb2cobmV3UHJvai50YXNrU3RvcmFnZSk7XG5cbiAgICAgICAgY3VycmVudFByb2plY3QgPSBuZXdQcm9qO1xuXG4gICAgfVxuICAgIGRpc3BsYXlUYXNrcygpXG59XG5cblxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdChldmVudCl7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQucHJvamVjdDtcbiAgICBsb2NhbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XG4gICAgICAgIGlmKHByb2plY3QubmFtZSA9PT0ga2V5KXtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdFxuICAgICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC50YXNrU3RvcmFnZSlcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC5uYW1lKVxuICAgIGRpc3BsYXlUYXNrcygpXG5cbn1cbi8vY3JlYXRlIGEgdGFzayBhbmQgUHVzaCBpdCB0byB0aGUgY29ycmVjdCBwcm9qZWN0IHRhc2sgYXJyYXlcbmNvbnN0IGFkZFRhc2tUb1Byb2ogPSAoKSA9PntcbiAgICBjb25zdCBET00gPSBnaXZlRG9tSW5wdHMoKVxuICAgIGxldCBuZXdUYXNrID0gVGFza0ZhY3RvcnkoXG4gICAgICAgIERPTS50YXNrTmFtZS52YWx1ZSxcbiAgICAgICAgRE9NLnRhc2tEZXNjLnZhbHVlLFxuICAgICAgICBET00udGFza0RhdGUudmFsdWUsXG4gICAgICAgIERPTS50YXNrQ2F0ZWdvcnkudmFsdWVcbiAgICApXG4gICAgbG9jYWxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xuICAgICAgICBpZihwcm9qZWN0Lm5hbWUgPT09IG5ld1Rhc2suY2F0ZWdvcnkpe1xuICAgICAgICAgICAgcHJvamVjdC50YXNrU3RvcmFnZS5wdXNoKG5ld1Rhc2spXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRhc2tTdG9yYWdlKVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgc2F2ZVByb2plY3RMaXN0KClcbiAgICB0b2dnbGVNb2RhbCgpXG4gICAgZGlzcGxheVRhc2tzKClcbn1cbi8vYWRkcyBQcm9qZWN0IHRvIHByb2plY3RzIGFycmF5XG5jb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2pJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qX05hbWVfSW5wdCcpO1xuICAgIGxldCBuZXdQcm9qZWN0ID0gQ2F0ZWdvcnlGYWN0b3J5KHByb2pJbnB1dC52YWx1ZSk7XG4gICAgc3RvcmVQcm9qZWN0KG5ld1Byb2plY3QpXG4gICAgZGlzcGxheVByb2plY3RzKClcbiAgICB0b2dnbGVNb2RhbCgpXG4gICAgcHJvaklucHV0LnZhbHVlID0gJydcblxuICAgIFxufVxuXG5mdW5jdGlvbiB0YXNrTGlzdGVuZXJzKGV2ZW50KXtcbiAgICBsZXQgdGFza2NvZGUgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrSWRcbiAgICBsZXQgZXZlbnROYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWVcbiAgICBpZihldmVudE5hbWUgPT09ICdEZWxldGUnKXtcbiAgICAgICAgcmVtb3ZlVGFzayh0YXNrY29kZSlcbiAgICB9ZWxzZSBpZihldmVudE5hbWUgPT09ICdTdGF0dXMnKXtcbiAgICAgICAgdGFza1N0YXR1cyh0YXNrY29kZSk7XG4gICAgfVxufVxuXG5jb25zdCByZW1vdmVUYXNrID0gKHRhc2tJZCxwcm9qZWN0KSA9PiB7XG4gICAgY3VycmVudFByb2plY3QudGFza1N0b3JhZ2UuZm9yRWFjaCgodGFzayxpbmRleCk9PntcbiAgICAgICAgaWYodGFzay5pZENvZGUgPT0gdGFza0lkKXtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tTdG9yYWdlLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgfVxuICAgIH0pXG5cblxuICAgIGRpc3BsYXlUYXNrcygpXG4gICAgc2F2ZVByb2plY3RMaXN0KClcbn1cblxuXG5mdW5jdGlvbiB0YXNrU3RhdHVzKGNvZGUpe1xuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXR1cy1idG4nKVxuICAgIGxldCBkb21FbGVtZW50IDtcbiAgICBkb21FbGVtZW50cy5mb3JFYWNoKChidG4pPT57XG4gICAgICAgIGNvbnNvbGUubG9nKGJ0bi5kYXRhc2V0LnRhc2tJZClcbiAgICAgICAgaWYoYnRuLmRhdGFzZXQudGFza0lkID09IGNvZGUpe1xuICAgICAgICAgICAgZG9tRWxlbWVudCA9IGJ0blxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tTdG9yYWdlLmZvckVhY2goKHRhc2spPT57XG4gICAgICAgIGlmKHRhc2suaWRDb2RlID09IGNvZGUpe1xuICAgICAgICAgICAgdGFzay5zdGF0dXMgPSAhdGFzay5zdGF0dXNcbiAgICAgICAgICAgIGlmKHRhc2suc3RhdHVzID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdHVzLWdyZWVuJyk7XG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLXN0YXR1cy1yZWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stc3RhdHVzLWdyZWVuJyk7XG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLXN0YXR1cy1yZWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2codGFzay5pZENvZGUpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrLnN0YXR1cylcbiAgICAgICAgfVxuICAgIH0pXG4gICAgc2F2ZVByb2plY3RMaXN0KClcbiAgICAvL2Rpc3BsYXlUYXNrcygpXG4gICAgXG59XG5cblxuXG5leHBvcnQge1xuICAgIGFkZFByb2plY3QsXG4gICAgYWRkVGFza1RvUHJvaixcbiAgICBkaXNwbGF5UHJvamVjdHMsXG4gICAgZGlzcGxheVRhc2tzLFxuICAgIGFsbFRhc2tzXG59IiwiY29uc3QgVGFza0ZhY3RvcnkgPSAobmFtZSxkZXNjLGRhdGUsY2F0ZWdvcnkpID0+IHtcbiAgICBsZXQgc3RhdHVzID0gZmFsc2U7XG4gICAgY29uc3QgaWRDb2RlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMClcblxuICAgIHJldHVybiB7XG4gICAgICAgIGlkQ29kZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkZXNjLFxuICAgICAgICBkYXRlLFxuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgbmFtZVxuICAgIH1cbn1cblxuY29uc3QgQ2F0ZWdvcnlGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgICBsZXQgdGFza1N0b3JhZ2UgPSBbXTtcbiAgICBcbiAgICByZXR1cm4ge3Rhc2tTdG9yYWdlLG5hbWV9XG59XG5leHBvcnR7XG4gICAgVGFza0ZhY3RvcnksXG4gICAgQ2F0ZWdvcnlGYWN0b3J5XG59XG5cbiIsIlxuaW1wb3J0IHsgQ2F0ZWdvcnlGYWN0b3J5LFRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeVwiO1xuXG5jb25zdCBHeW0gPSBDYXRlZ29yeUZhY3RvcnkoJ0d5bScpOyBcblxuY29uc3QgQ29kaW5nID0gQ2F0ZWdvcnlGYWN0b3J5KCdDb2RpbmcnKVxuXG5jb25zdCB0YXNrMSA9IFRhc2tGYWN0b3J5KCdGaW5pc2ggVUknLFwiRmluaXNoIFN0eWxpbmcgVUlcIixcIjA5LzE4LzIwMjJcIixcIkNvZGluZ1wiKTtcbmNvbnN0IHRhc2syID0gVGFza0ZhY3RvcnkoJ2FkZCBFZGl0IFRhc2sgQnV0dG9uJyxcIkFkZCBlZGl0IHRhc2sgYnV0dG9uIHRvIHRhc2sgY2FyZHNcIixcIjA5LzE4LzIwMjJcIixcIkNvZGluZ1wiKTtcbmNvbnN0IHRhc2szID0gVGFza0ZhY3RvcnkoJ0phdmFzY3JpcHQnLFwiTWFrZSBkcm9wIGRvd24gc2VsZWN0aW9uIGZvciBjYXRlZ29yeSBpbnB1dCBpbiB0YXNrIGNyZWF0aW9uIGZvcm1cIixcIjA5LzE4LzIwMjJcIixcIkNvZGluZ1wiKTtcbmNvbnN0IHRhc2s0ID0gVGFza0ZhY3RvcnkoJ0phdmFzY3JpcHQnLFwiZGlzcGxheSBmaW5pc2hlZCB0YXNrcyBmdW5jdGlvblwiLFwiMDkvMTgvMjAyMlwiLFwiQ29kaW5nXCIpO1xuQ29kaW5nLnRhc2tTdG9yYWdlLnB1c2godGFzazEpXG5Db2RpbmcudGFza1N0b3JhZ2UucHVzaCh0YXNrMilcbkNvZGluZy50YXNrU3RvcmFnZS5wdXNoKHRhc2szKVxuQ29kaW5nLnRhc2tTdG9yYWdlLnB1c2godGFzazQpXG5sZXQgcHJvamVjdHMgPSBbR3ltLENvZGluZ11cblxuXG5jb25zdCBpbml0aWFsU3RvcmFnZSA9ICgoKSA9PiB7XG4gICAgaWYobG9jYWxTdG9yYWdlLmxlbmd0aCAgPT09IDAgKXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgfVxuICAgIFxufSkoKTtcbmxldCBsb2NhbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcblxuY29uc3Qgc3RvcmVQcm9qZWN0ID0gKG5ld1Byb2opID0+IHtcbiAgICBsb2NhbFByb2plY3RzLnB1c2gobmV3UHJvailcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsUHJvamVjdHMpKVxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSlcbn1cbmNvbnN0IHNhdmVQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsUHJvamVjdHMpKVxufVxuZXhwb3J0e1xuICAgIHN0b3JlUHJvamVjdCxcbiAgICBsb2NhbFByb2plY3RzLFxuICAgIHNhdmVQcm9qZWN0TGlzdFxufSIsImltcG9ydCB7YWRkUHJvamVjdCxhZGRUYXNrVG9Qcm9qLGRpc3BsYXlQcm9qZWN0cyxkaXNwbGF5VGFza3MsYWxsVGFza3N9IGZyb20gXCIuL2FwcFwiO1xuLy9pbXBvcnQgeyBhZGRUYXNrVG9Qcm9qIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IHRvZ2dsZU1vZGFsLGRpc3BsYXlGb3JtcyB9IGZyb20gXCIuL01vZGFsXCI7XG5pbXBvcnQgeyBsb2NhbFByb2plY3RzIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5jb25zdCBidWlsZEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ1RvLURvIEFwcCdcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICByZXR1cm4gaGVhZGVyIFxufVxuXG5jb25zdCBjcmVhdGVOYXZCdXR0b24gPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb2pCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHByb2pCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvai1idG4taG92ZXInKVxuICAgIHByb2pCdXR0b24uaW5uZXJUZXh0ID0gbmFtZVxuICAgIHByb2pCdXR0b24uZGF0YXNldC5wcm9qZWN0ID0gbmFtZVxuICAgIHJldHVybiBwcm9qQnV0dG9uXG59XG5jb25zdCBidWlsZE5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgIGNvbnN0IHRhc2tCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgY29tcGxldGVUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29tcGxldGVUYXNrcy5pbm5lclRleHQgPSAnZmluaXNoZWQnXG4gICAgY29tcGxldGVUYXNrcy5pZCA9J2NvbXBsZXRlZC10YXNrcydcbiAgICBjb21wbGV0ZVRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhbGxUYXNrcylcblxuICAgIGNvbnN0IGFsbFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhbGxUYXNrQnRuLmlubmVyVGV4dCA9IFwiQWxsIFRhc2tzXCJcbiAgICBhbGxUYXNrQnRuLmlkID0gJ2FsbC10YXNrcydcbiAgICBhbGxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhbGxUYXNrcylcbiAgICB0YXNrQnV0dG9uQ29udGFpbmVyLmFwcGVuZChhbGxUYXNrQnRuLGNvbXBsZXRlVGFza3MpXG4gICAgY29uc3QgcHJvamVjdE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RNYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tcHJvamVjdC1jb250YWluZXInKVxuICAgIC8vcHJvamVjdCBidXR0b25zIGNvbnRhaW5cbiAgICBcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnUHJvamVjdHMnXG4gICAgcHJvamVjdE1haW4uYXBwZW5kKHRpdGxlLHByb2plY3RDb250YWluZXIpXG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qX25hdl9jb250YWluZXInKTtcbiAgICBcbiAgICBjb25zdCBhZGRNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkTW9kYWwuaW5uZXJUZXh0ID0gJysnXG4gICAgYWRkTW9kYWwuaWQgPSAnb3Blbl9Nb2RhbCdcbiAgICBhZGRNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdG9nZ2xlTW9kYWwpXG4gICBcbiAgICBuYXYuYXBwZW5kKHRhc2tCdXR0b25Db250YWluZXIscHJvamVjdE1haW4sYWRkTW9kYWwpXG5cbiAgICByZXR1cm4gbmF2XG59XG4vL01PREFMXG5jb25zdCBidWlsZFRhc2tGb3JtID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZm9ybS5uYW1lID0gJ3Rhc2stZm9ybSdcbiAgICBmb3JtLmlkID0gJ3Rhc2tfTW9kYWwnXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIkNyZWF0ZSBUYXNrXCJcblxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCdcbiAgICBuYW1lSW5wdXQubmFtZSA9ICduYW1lJ1xuICAgIG5hbWVJbnB1dC5pZCA9ICduYW1lX2lucHV0J1xuICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWlucHQnKVxuICAgIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGl0bGVcIlxuXG4gICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpXG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2Rlc2MnKVxuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnZGVzY19pbnB1dCcpXG4gICAgZGVzY0lucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5wdCcpXG4gICAgZGVzY0lucHV0LnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiXG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdkYXRlX2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5wdCcpXG4gICAgXG5cbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgbG9jYWxQcm9qZWN0cy5mb3JFYWNoKChwcm9qKT0+e1xuICAgICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICBvcHQudmFsdWUgPSBwcm9qLm5hbWVcbiAgICAgICAgb3B0LmlubmVyVGV4dCA9IHByb2oubmFtZVxuXG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQob3B0KVxuICAgIH0pO1xuXG4gICAgXG4gICAgcHJvamVjdC5uYW1lID0gJ2NhdGVnb3J5J1xuICAgIHByb2plY3QuaWQgPSAncHJvamVjdF9Bc3NpZ24nXG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWlucHQnKVxuICAgIFxuICAgIFxuXG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCd0YXNrX3N1Ym1pdCcpXG4gICAgc3VibWl0LnR5cGUgPSAnc3VibWl0J1xuICAgIHN1Ym1pdC5pbm5lclRleHQgPSAnQWRkJ1xuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkVGFza1RvUHJvailcblxuICAgIGZvcm0uYXBwZW5kKHRpdGxlLG5hbWVJbnB1dCxkZXNjSW5wdXQsZGF0ZUlucHV0LHByb2plY3Qsc3VibWl0KTtcblxuICAgIHJldHVybiBmb3JtXG59XG5jb25zdCBidWlsZFByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0X21vZGFsJylcblxuICAgIGNvbnN0IHByb2pOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qTmFtZS5pZCA9ICdwcm9qX05hbWVfSW5wdCc7XG4gICAgcHJvak5hbWUubmFtZSA9ICdwcm9qZWN0X05hbWVfSW5wdCc7XG4gICAgXG4gICAgY29uc3QgYWRkUHJvakJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkUHJvakJ0bi5pZCA9ICdhZGRfUHJval9CdXR0b24nXG4gICAgYWRkUHJvakJ0bi5pbm5lclRleHQgPSAnQWRkJ1xuICAgIGFkZFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFkZFByb2plY3QpXG5cbiAgICBtb2RhbENvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgIHByb2pOYW1lLFxuICAgICAgICBhZGRQcm9qQnRuXG4gICAgKVxuICAgIHJldHVybiBtb2RhbENvbnRhaW5lclxufVxuY29uc3QgYnVpbGRNb2RhbCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21hc3Rlcl9Nb2RhbF9Db250YWluZXInKVxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWwuaWQgPSAnbWFzdGVyX01vZGFsJ1xuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBuYXYuaWQgPSAnbWFzdGVyX01vZGFsX05hdidcbiBcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBwcm9qZWN0LmlkID0gJ25ld19Qcm9qZWN0J1xuICAgIHByb2plY3QuaW5uZXJUZXh0ID0gJ1Byb2plY3QnXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZGlzcGxheUZvcm1zKVxuXG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgdG9kby5pZCA9ICduZXdfVGFzayc7XG4gICAgdG9kby5pbm5lclRleHQgPSAnVGFzaydcbiAgICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkaXNwbGF5Rm9ybXMpXG5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtQ29udGFpbmVyLmlkID0gJ21vZGFsX0Zvcm1zJ1xuICAgIGNvbnN0IGZpcnN0Rm9ybSA9IGJ1aWxkVGFza0Zvcm0oKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0Rm9ybSlcblxuICAgIGNvbnN0IGNsb3NlT3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjbG9zZU91dC5pbm5lclRleHQgPSAnWCdcbiAgICBjbG9zZU91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdG9nZ2xlTW9kYWwpXG4gICAgY2xvc2VPdXQuY2xhc3NMaXN0LmFkZCgnY2xvc2UtbW9kYWwnKVxuXG4gICAgbmF2LmFwcGVuZChwcm9qZWN0LHRvZG8pXG4gICAgbW9kYWwuYXBwZW5kKG5hdixmb3JtQ29udGFpbmVyKVxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKG1vZGFsLGNsb3NlT3V0KVxuXG4gICAgcmV0dXJuIG1haW5Db250YWluZXJcblxufVxuY29uc3QgZ2l2ZURvbUlucHRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVfaW5wdXQnKVxuICAgIGNvbnN0IHRhc2tEZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NfaW5wdXQnKVxuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGVfaW5wdXQnKVxuICAgIGNvbnN0IHRhc2tDYXRlZ29yeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0X0Fzc2lnbicpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrTmFtZSxcbiAgICAgICAgdGFza0Rlc2MsXG4gICAgICAgIHRhc2tEYXRlLFxuICAgICAgICB0YXNrQ2F0ZWdvcnlcbiAgICB9XG59XG5jb25zdCBidWlsZFRhc2tFbGVtZW50ID0gKG5hbWUsZGVzYyxkYXRlLGNvZGUsc3RhdHVzKSA9PiB7XG4gICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrX2NhcmQnKVxuICAgIHRhc2tDYXJkLmRhdGFzZXQudGFza0NvZGUgPSBgJHtjb2RlfWBcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aXRsZS5pbm5lclRleHQgPSBuYW1lXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzY1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzY3JpcHRpb24nKVxuXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZHVlRGF0ZS5pbm5lclRleHQgPSBkYXRlXG5cbiAgICBcbiAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBlZGl0LmlubmVyVGV4dD0nRWRpdCdcbiAgICBlZGl0LmRhdGFzZXQudGFza0lkID0gY29kZVxuICAgIGVkaXQubmFtZSA9ICdFZGl0J1xuICAgIGVkaXQuaWQgPSAnZWRpdC10YXNrJ1xuICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgndGFza19CdG4nKVxuICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGV2ZW50KT0+e1xuICAgICAgICB0b2dnbGVNb2RhbCgpXG4gICAgICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZ2l2ZURvbUlucHRzKClcblxuICAgICAgICBpZihldmVudC50YXJnZXQuaWQgPT09J2VkaXQtdGFzaycpe1xuICAgICAgICAgICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza19jYXJkJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcmRzKTtcbiAgICAgICAgICAgIGNhcmRzLmZvckVhY2goKGNhcmQpPT57XG4gICAgICAgICAgICAgICAgaWYoY2FyZC5kYXRhc2V0LnRhc2tDb2RlID09IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tJZCl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcmQpXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cbiAgICB9KVxuXG5cbiAgICBjb25zdCB0YXNrQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnRuLWNvbnRhaW5lcicpXG5cbiAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBkZWxldGVUYXNrLmlubmVyVGV4dCA9ICdEZWxldGUnXG4gICAgZGVsZXRlVGFzay5kYXRhc2V0LnRhc2tJZCA9IGNvZGUgXG4gICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrX0J0bicpXG4gICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJylcbiAgICBkZWxldGVUYXNrLm5hbWUgPSAnRGVsZXRlJ1xuICAgIFxuXG4gICAgY29uc3QgbWFya0NvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBtYXJrQ29tcGxldGUuZGF0YXNldC50YXNrSWQgPSBjb2RlXG4gICAgbWFya0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tfQnRuJylcbiAgICBtYXJrQ29tcGxldGUubmFtZSA9ICdTdGF0dXMnXG4gICAgbWFya0NvbXBsZXRlLmlubmVyVGV4dCA9ICdTdGF0dXMnXG4gICAgbWFya0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3N0YXR1cy1idG4nKVxuICAgIFxuICAgIGlmKHN0YXR1cz09PXRydWUpe1xuICAgICAgICBtYXJrQ29tcGxldGUuY2xhc3NMaXN0LmFkZCgndGFzay1zdGF0dXMtZ3JlZW4nKTtcbiAgICAgICAgbWFya0NvbXBsZXRlLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stc3RhdHVzLXJlZCcpXG4gICAgXG4gICAgfWVsc2V7XG4gICAgICAgIG1hcmtDb21wbGV0ZS5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLXN0YXR1cy1ncmVlbicpO1xuICAgICAgICBtYXJrQ29tcGxldGUuY2xhc3NMaXN0LmFkZCgndGFzay1zdGF0dXMtcmVkJylcblxuICAgIH1cblxuICAgIHRhc2tCdG5Db250YWluZXIuYXBwZW5kKGRlbGV0ZVRhc2ssbWFya0NvbXBsZXRlLGVkaXQpXG4gICAgXG5cbiAgICB0YXNrQ2FyZC5hcHBlbmQoXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgdGFza0J0bkNvbnRhaW5lclxuXG4gICAgKVxuXG4gICAgcmV0dXJuIHRhc2tDYXJkXG59XG5cblxuXG5cbmNvbnN0IGxvYWRwYWdlID0gKCkgPT57XG4gICAgY29uc3QgaGVhZGVyID0gYnVpbGRIZWFkZXIoKVxuICAgIGNvbnN0IG5hdiA9IGJ1aWxkTmF2KClcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG4gICAgLy9hZGQgZm9vdGVyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyLG5hdixtYWluLGZvb3RlcilcbiAgICBcbiAgICBkaXNwbGF5UHJvamVjdHMoKVxuICAgIGRpc3BsYXlUYXNrcygpXG59O1xuLy9cbmV4cG9ydHtcbiAgICBsb2FkcGFnZSxcbiAgICBjcmVhdGVOYXZCdXR0b24sXG4gICAgYnVpbGRUYXNrRm9ybSxcbiAgICBidWlsZFByb2plY3RGb3JtLFxuICAgIGJ1aWxkTW9kYWwsXG4gICAgZ2l2ZURvbUlucHRzLFxuICAgIGJ1aWxkVGFza0VsZW1lbnRcbn1cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IHsgbG9hZHBhZ2UgfSBmcm9tICcuL21vZHVsZXMvdWknO1xuXG5cbmxvYWRwYWdlKClcblxuXG5cbi8vY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=