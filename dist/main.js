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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #121212;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n\nheader {\n  grid-column: 1/13;\n  height: 10vh;\n  color: white;\n  position: sticky;\n  top: 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n  align-items: center;\n}\n\nnav {\n  grid-column: 1/2;\n  position: sticky;\n  top: 10vh;\n  height: 80vh;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n.nav-buttons {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n\n.nav_btn {\n  width: 25px;\n  height: 25px;\n  padding: 10px;\n  text-align: center;\n  background-color: transparent;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border: none;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  grid-column: 2/13;\n  gap: 10px;\n  background-color: #242624;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\nmain h2 {\n  background-color: #C0E39E;\n  display: flex;\n  align-items: center;\n  padding: 20px;\n}\n\n.proj_nav_container {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  align-items: center;\n  background-color: #404040;\n}\n\n.proj_nav_container > button {\n  background-color: transparent;\n  border: none;\n  width: 80%;\n  text-align: start;\n  padding: 5px;\n  font-size: 1.3rem;\n}\n\n.master_Modal_Container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(56, 56, 56, 0.863);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#master_Modal {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  border-radius: 25px;\n  width: 600px;\n  background-color: white;\n  --webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n  animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n@-webkit-keyframes slide-bottom {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(200px);\n    transform: translateY(200px);\n  }\n}\n@keyframes slide-bottom {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  100% {\n    -webkit-transform: translateY(200px);\n    transform: translateY(200px);\n  }\n}\n#open_Modal {\n  width: 100px;\n  height: 30px;\n  border-radius: 15px;\n  background-color: transparent;\n  border: 3px solid #C0E39E;\n  color: white;\n  box-shadow: 0 0 3px #C0E39E;\n}\n\n.close-modal {\n  width: 50px;\n  height: 50px;\n  border: none;\n  border-radius: 25px;\n  background-color: red;\n  color: white;\n  box-shadow: 0px 0px 1px 1px black;\n  font-size: 20px;\n  position: absolute;\n}\n\n#task_Modal {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding-top: 10px;\n  padding: 10px;\n  border-radius: 5px;\n  align-items: center;\n}\n\n.task-inpt {\n  height: 25px;\n  border-radius: 5px;\n  border: none;\n  padding: 5px;\n  box-shadow: 1px 1px 3px black;\n  width: 100%;\n}\n\n#task_submit {\n  width: 50px;\n  padding: 5px;\n  border: none;\n  background-color: green;\n  border-radius: 15px;\n  box-shadow: 1px 1px 3px black;\n}\n\n.task_card {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  min-height: 75px;\n  max-height: 100px;\n  color: white;\n  border: 1px solid #404040;\n  border-radius: 15px;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.task-description {\n  flex-grow: 2;\n  height: 75px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.task-btn-container {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n}\n\n.task_Btn {\n  padding: 10px;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  background-color: #242624;\n  background-position: center;\n  background-repeat: no-repeat;\n  border: none;\n}\n\n.task-status-red {\n  background-color: none;\n}\n\n.task-status-green {\n  background-color: none;\n}\n\n.delete-btn {\n  color: red;\n}\n\n.task-description {\n  grid-column: 2/4;\n  text-align: start;\n}\n\n.main-project-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  box-shadow: 0 0 3px rgb(38, 37, 37);\n  background-color: #C0E39E;\n}\n\n#all-tasks {\n  background-color: transparent;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border: none;\n}\n\nfooter {\n  grid-row: 3;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["*{\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n$dark-background:#121212;\n$secondary-bg: #242624;\n$primary-text-color: #ffffff;\n$accent-color: #C0E39E;\n$light-bg: #404040;\n$purp-bg : #6e5b6e;\n\n\n\nbody{\n    background-color: $dark-background;\n    display: grid;\n    grid-template-columns: repeat(12,1fr);\n    \n}\n\nheader{\n    grid-column:  1/13;\n    height: 10vh;\n    color: white;\n    position: sticky;\n    top: 0;\n    display: flex;\n    justify-content: space-between;\n    padding:20px;\n    align-items: center;\n    \n\n    \n}\n\nnav{\n    grid-column: 1/2;\n    position: sticky;\n    top: 10vh;\n    height: 80vh;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    gap:30px;\n\n}\n.nav-buttons{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:50px;\n\n}\n\n.nav_btn{\n    width: 25px;\n    height: 25px;\n    padding: 10px;\n    text-align: center;\n    background-color: transparent;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    border: none;\n    \n}\n\n\nmain{\n    display: flex;\n    flex-direction: column;\n    \n    grid-column: 2/13;\n    gap:10px;\n    background-color: $secondary-bg;\n    background-position: center;\n    background-repeat: no-repeat ;\n    \n\n    \n    \n}\nmain h2{\n    background-color: #C0E39E;\n    \n    display: flex;\n    align-items: center;\n    padding: 20px;\n}\n.proj_nav_container{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    align-items: center;\n    background-color: $light-bg;\n}\n.proj_nav_container>button{\n    background-color: transparent;\n    border: none;\n    width: 80%;\n    text-align: start;\n    padding: 5px;\n    font-size: 1.3rem;\n}\n\n\n.master_Modal_Container{\n    position:absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(56, 56, 56, 0.863);\n    display: flex;\n    flex-direction: column;\n    \n    align-items: center;\n    \n\n}\n\n#master_Modal{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    border-radius: 25px;\n    width: 600px;\n    background-color: white;\n    --webkit-animation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n\tanimation: slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n    \n\n\n}\n@-webkit-keyframes slide-bottom {\n    0% {\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n    }\n    100% {\n      -webkit-transform: translateY(200px);\n              transform: translateY(200px);\n    }\n  }\n  @keyframes slide-bottom {\n    0% {\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n    }\n    100% {\n      -webkit-transform: translateY(200px);\n              transform: translateY(200px);\n    }\n  }\n\n#open_Modal{\n    width: 100px;\n    height: 30px;\n    border-radius: 15px;\n    background-color: transparent;\n    border: 3px solid $accent-color;\n    color: white;\n    box-shadow: 0 0 3px $accent-color;\n    \n    \n}\n.close-modal{\n    width: 50px;\n    height: 50px;\n    border: none;\n    border-radius: 25px;\n    background-color: red;\n    color: white;\n    box-shadow: 0px 0px 1px 1px black;\n    font-size: 20px;\n    \n    position: absolute;\n}\n#task_Modal{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding-top: 10px;\n    \n    padding: 10px;\n    border-radius: 5px;\n    \n    align-items: center;\n    \n    \n\n} \n.task-inpt{\n    height: 25px;\n    border-radius: 5px;\n    border: none;\n    padding: 5px;\n    box-shadow: 1px 1px 3px black;\n    width: 100%;\n}\n#task_submit{\n    width: 50px;\n    padding: 5px;\n    border: none;\n    background-color: green;\n    border-radius: 15px;\n    box-shadow: 1px 1px 3px black;\n}\n.task_card{\n    \n    display: flex;\n    gap: 20px;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px;\n    min-height: 75px;\n    max-height: 100px;\n    color: white;\n    border: 1px solid $light-bg;\n    border-radius: 15px;\n    margin-right: 10px;\n    margin-left: 10px;\n    \n    \n       \n}\n.task-description{\n    flex-grow: 2;\n    height: 75px;\n    overflow: hidden;\n    display: flex;\n    \n    align-items: center;\n    width: 100%;\n    \n}\n.task-btn-container{\n    display: flex;\n    justify-content: flex-end;\n    gap:10px\n}\n.task_Btn{\n    padding: 10px;\n  \n    width: 50px;\n    height: 50px;\n    text-align: center;\n    background-color: $secondary-bg;\n    background-position: center;\n    background-repeat: no-repeat;\n    border: none;\n\n}\n.task-status-red{\n    background-color:none;\n}\n.task-status-green{\n    background-color: none\n}\n.delete-btn{\n    color: red;\n    \n}\n\n.task-description{\n    grid-column: 2/4;\n    text-align: start;\n}\n.main-project-container{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    box-shadow: 0 0 3px rgb(38, 37, 37);\n    \n    background-color: #C0E39E;\n}\n#all-tasks{\n    background-color: transparent;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    border: none;\n}   \n\n\n\n\nfooter{\n    grid-row:3\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _icons_add_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/add.png */ "./src/icons/add.png");
/* harmony import */ var _icons_pencil_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/pencil.png */ "./src/icons/pencil.png");
/* harmony import */ var _icons_favorite_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/favorite.png */ "./src/icons/favorite.png");
/* harmony import */ var _icons_trash_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/trash.png */ "./src/icons/trash.png");
/* harmony import */ var _icons_tasks_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/tasks.svg */ "./src/icons/tasks.svg");
/* harmony import */ var _icons_ticket_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/ticket.svg */ "./src/icons/ticket.svg");
/* harmony import */ var _icons_code_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icons/code.svg */ "./src/icons/code.svg");

//import { addTaskToProj } from "./tasks";











const buildHeader = () => {
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.innerText = 'To-Do App'

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
    completeTasks.style.backgroundImage = `url(${_icons_favorite_png__WEBPACK_IMPORTED_MODULE_5__})`
    completeTasks.id ='completed-tasks'
    completeTasks.addEventListener('click',_app__WEBPACK_IMPORTED_MODULE_0__.allTasks);
    

    const allTaskBtn = document.createElement('button');
    allTaskBtn.style.backgroundImage = `url(${_icons_tasks_svg__WEBPACK_IMPORTED_MODULE_7__})`
    allTaskBtn.id = 'all-tasks'
    allTaskBtn.addEventListener('click',_app__WEBPACK_IMPORTED_MODULE_0__.allTasks)
    
    const codeProj = document.createElement('button')
    codeProj.style.backgroundImage = `url(${_icons_code_svg__WEBPACK_IMPORTED_MODULE_9__})`
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
    workProj.style.backgroundImage = `url(${_icons_ticket_svg__WEBPACK_IMPORTED_MODULE_8__})`
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
    
    edit.dataset.taskId = code
    edit.name = 'Edit'
    edit.id = 'edit-task'
    edit.style.backgroundImage = `url(${_icons_pencil_png__WEBPACK_IMPORTED_MODULE_4__})`
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
    markComplete.style.backgroundImage = `url(${_icons_favorite_png__WEBPACK_IMPORTED_MODULE_5__})`
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






/***/ }),

/***/ "./src/icons/add.png":
/*!***************************!*\
  !*** ./src/icons/add.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bdf5ad1f055d1f64d348.png";

/***/ }),

/***/ "./src/icons/code.svg":
/*!****************************!*\
  !*** ./src/icons/code.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a6566609559b1861cd1.svg";

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

/***/ "./src/icons/tasks.svg":
/*!*****************************!*\
  !*** ./src/icons/tasks.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb051fa869892864a54b.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsWUFBWSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcs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QTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzhCO0FBQ1g7OztBQUd4QyxxREFBUTs7OztBQUlSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL01vZGFsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvYXBwLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy91aS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzEzO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubmF2IHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAxMHZoO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ubmF2LWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ubmF2X2J0biB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ3JpZC1jb2x1bW46IDIvMTM7XFxuICBnYXA6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNjI0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxubWFpbiBoMiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzBFMzlFO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ucHJval9uYXZfY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNDA0MDtcXG59XFxuXFxuLnByb2pfbmF2X2NvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiA4MCU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubWFzdGVyX01vZGFsX0NvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDU2LCA1NiwgMC44NjMpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWFzdGVyX01vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLS13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1ib3R0b20gMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XFxuICBhbmltYXRpb246IHNsaWRlLWJvdHRvbSAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtYm90dG9tIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2xpZGUtYm90dG9tIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XFxuICB9XFxufVxcbiNvcGVuX01vZGFsIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNDMEUzOUU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDAgM3B4ICNDMEUzOUU7XFxufVxcblxcbi5jbG9zZS1tb2RhbCB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggYmxhY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiN0YXNrX01vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2staW5wdCB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jdGFza19zdWJtaXQge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCBibGFjaztcXG59XFxuXFxuLnRhc2tfY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtaW4taGVpZ2h0OiA3NXB4O1xcbiAgbWF4LWhlaWdodDogMTAwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDA0MDQwO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiB7XFxuICBmbGV4LWdyb3c6IDI7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnRhc2tfQnRuIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI2MjQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udGFzay1zdGF0dXMtcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxufVxcblxcbi50YXNrLXN0YXR1cy1ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiB7XFxuICBncmlkLWNvbHVtbjogMi80O1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5tYWluLXByb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCByZ2IoMzgsIDM3LCAzNyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzBFMzlFO1xcbn1cXG5cXG4jYWxsLXRhc2tzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmZvb3RlciB7XFxuICBncmlkLXJvdzogMztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBVUE7RUFDSSx5QkFWYTtFQVdiLGFBQUE7RUFDQSxzQ0FBQTtBQVBKOztBQVdBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVJKOztBQWNBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNB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QUE7QUE5Qko7O0FBZ0NBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBN0JKOztBQW1DQTtFQUNJLFdBQUE7QUFoQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuJGRhcmstYmFja2dyb3VuZDojMTIxMjEyO1xcbiRzZWNvbmRhcnktYmc6ICMyNDI2MjQ7XFxuJHByaW1hcnktdGV4dC1jb2xvcjogI2ZmZmZmZjtcXG4kYWNjZW50LWNvbG9yOiAjQzBFMzlFO1xcbiRsaWdodC1iZzogIzQwNDA0MDtcXG4kcHVycC1iZyA6ICM2ZTViNmU7XFxuXFxuXFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYmFja2dyb3VuZDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsMWZyKTtcXG4gICAgXFxufVxcblxcbmhlYWRlcntcXG4gICAgZ3JpZC1jb2x1bW46ICAxLzEzO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6MjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuXFxuICAgIFxcbn1cXG5cXG5uYXZ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMTB2aDtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MzBweDtcXG5cXG59XFxuLm5hdi1idXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6NTBweDtcXG5cXG59XFxuXFxuLm5hdl9idG57XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBcXG59XFxuXFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgIGdyaWQtY29sdW1uOiAyLzEzO1xcbiAgICBnYXA6MTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iZztcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0IDtcXG4gICAgXFxuXFxuICAgIFxcbiAgICBcXG59XFxubWFpbiBoMntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MwRTM5RTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5wcm9qX25hdl9jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmc7XFxufVxcbi5wcm9qX25hdl9jb250YWluZXI+YnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuXFxuLm1hc3Rlcl9Nb2RhbF9Db250YWluZXJ7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA1NiwgNTYsIDAuODYzKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcblxcbn1cXG5cXG4jbWFzdGVyX01vZGFse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC0td2Via2l0LWFuaW1hdGlvbjogc2xpZGUtYm90dG9tIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xcblxcdGFuaW1hdGlvbjogc2xpZGUtYm90dG9tIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xcbiAgICBcXG5cXG5cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWJvdHRvbSB7XFxuICAgIDAlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xcbiAgICB9XFxuICB9XFxuICBAa2V5ZnJhbWVzIHNsaWRlLWJvdHRvbSB7XFxuICAgIDAlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDBweCk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwcHgpO1xcbiAgICB9XFxuICB9XFxuXFxuI29wZW5fTW9kYWx7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgJGFjY2VudC1jb2xvcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4ICRhY2NlbnQtY29sb3I7XFxuICAgIFxcbiAgICBcXG59XFxuLmNsb3NlLW1vZGFse1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuI3Rhc2tfTW9kYWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgXFxuXFxufSBcXG4udGFzay1pbnB0e1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuI3Rhc2tfc3VibWl0e1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCBibGFjaztcXG59XFxuLnRhc2tfY2FyZHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA3NXB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHQtYmc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIFxcbiAgICBcXG4gICAgICAgXFxufVxcbi50YXNrLWRlc2NyaXB0aW9ue1xcbiAgICBmbGV4LWdyb3c6IDI7XFxuICAgIGhlaWdodDogNzVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG59XFxuLnRhc2stYnRuLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgZ2FwOjEwcHhcXG59XFxuLnRhc2tfQnRue1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgXFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1iZztcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxufVxcbi50YXNrLXN0YXR1cy1yZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bm9uZTtcXG59XFxuLnRhc2stc3RhdHVzLWdyZWVue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lXFxufVxcbi5kZWxldGUtYnRue1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb257XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG4ubWFpbi1wcm9qZWN0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYigzOCwgMzcsIDM3KTtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMEUzOUU7XFxufVxcbiNhbGwtdGFza3N7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59ICAgXFxuXFxuXFxuXFxuXFxuZm9vdGVye1xcbiAgICBncmlkLXJvdzozXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vaW1wb3J0IHsgZWRpdFRhc2sgfSBmcm9tICcuL2FwcCdcbmltcG9ydCB7IGJ1aWxkUHJvamVjdEZvcm0sYnVpbGRUYXNrRm9ybSxidWlsZE1vZGFsIH0gZnJvbSAnLi91aSdcblxubGV0IHRvZ2dsZSA9IGZhbHNlXG5jb25zdCBtYWluICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuY29uc3QgdG9nZ2xlTW9kYWwgPSAoZXZlbnQpID0+IHtcbiAgICBcbiAgICBpZih0b2dnbGUgPT09IGZhbHNlKXtcbiAgICAgICAgY29uc29sZS5sb2cobWFpbilcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnVpbGRNb2RhbCgpKSBcbiAgICB9ZWxzZXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc3Rlcl9Nb2RhbF9Db250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpIFxuICAgIH1cblxuICAgXG4gICAgdG9nZ2xlID0gIXRvZ2dsZVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5Rm9ybXMoZXZlbnQpe1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbF9Gb3JtcycpO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIFxuICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gJ25ld19Qcm9qZWN0Jyl7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFByb2plY3RGb3JtKCkpXG4gICAgfWVsc2V7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFRhc2tGb3JtKCkpXG4gICAgfVxuICAgICAgIFxufVxuXG5cblxuXG5leHBvcnR7XG4gICAgdG9nZ2xlTW9kYWwsXG4gICAgZGlzcGxheUZvcm1zXG59IiwiaW1wb3J0IHtDYXRlZ29yeUZhY3RvcnksVGFza0ZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XG5pbXBvcnQgeyB0b2dnbGVNb2RhbCB9IGZyb20gXCIuL01vZGFsXCI7XG5pbXBvcnQge2NyZWF0ZU5hdkJ1dHRvbixnaXZlRG9tSW5wdHMsYnVpbGRUYXNrRWxlbWVudCB9IGZyb20gXCIuL3VpXCI7XG5pbXBvcnQgeyBzdG9yZVByb2plY3QsbG9jYWxQcm9qZWN0cyxzYXZlUHJvamVjdExpc3R9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB0ZWxlc2NvcGUgZnJvbSBcIi4uL2ljb25zL3RlbGVzY29wZS5wbmdcIlxuXG5cblxuXG5sZXQgY3VycmVudFByb2plY3QgPSBsb2NhbFByb2plY3RzWzFdXG5cblxuY29uc3QgIGRpc3BsYXlQcm9qZWN0cyA9ICgpID0+e1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qX25hdl9jb250YWluZXInKVxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIGxvY2FsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcbiAgICAgICAgbGV0IG5ld05hdkJ0biA9IGNyZWF0ZU5hdkJ1dHRvbihwcm9qZWN0Lm5hbWUpO1xuICAgICAgICBuZXdOYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRvZ2dsZVByb2plY3QpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3TmF2QnRuKTtcbiAgICAgICAgXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cobG9jYWxQcm9qZWN0cylcbiAgICBcbn1cbi8vY3JlYXRlIFRhc2sgRG9tLCBkaXNwbGF5IFRhc2sgRG9tLCBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyc1xuLy9kaXNwbGF5IFRhc2tzIGFuZCBBbGwgdGFza3Mgc2hvdWxkIGJlIG1hZGUgaW50byBvbmUgc2luZ2xlIGZ1bmN0aW9uLGZvciBiZXR0ZXIgcmUtdXNhYmlsaXR5XG5jb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gJydcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC5uYW1lKVxuICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGNhdGVnb3J5LmlubmVyVGV4dCA9IGN1cnJlbnRQcm9qZWN0Lm5hbWU7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeSlcbiAgICBjdXJyZW50UHJvamVjdC50YXNrU3RvcmFnZS5mb3JFYWNoKCh0YXNrKT0+e1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRhc2suaWRDb2RlKVxuICAgICAgICBsZXQgdGFza0VsZW1lbnQgPSBidWlsZFRhc2tFbGVtZW50KFxuICAgICAgICAgICAgdGFzay5uYW1lLFxuICAgICAgICAgICAgdGFzay5kZXNjLFxuICAgICAgICAgICAgdGFzay5kYXRlLFxuICAgICAgICAgICAgdGFzay5pZENvZGUsXG4gICAgICAgICAgICB0YXNrLnN0YXR1c1xuICAgICAgICApXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICAgICAgICBcbiAgICB9KVxuICAgIFxuICAgIGlmKGN1cnJlbnRQcm9qZWN0LnRhc2tTdG9yYWdlLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIGNhdGVnb3J5LmlubmVyVGV4dCA9ICdOb3QgYWxsIHdobyB3YW5kZXIgYXJlIGxvc3QnXG4gICAgICAgIHRhc2tDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RlbGVzY29wZX0pYDtcbiAgICAgICAgXG4gICAgXG4gICAgXG4gICAgfVxuICAgIGNvbnN0IHRhc2tCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tfQnRuJylcbiAgICB0YXNrQnV0dG9ucy5mb3JFYWNoKChidG4pID0+e1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRhc2tMaXN0ZW5lcnMpXG4gICAgfSk7XG59XG5cblxuXG5cblxuLy9zZXRzIHBsYWNlaG9sZGVyIHZhbHVlcyBpbiBtb2RhbCB0YXNrIGZyb20sc2V0cyBhdHRyaWJ1dGUgdG8gZWRpdCBpbnN0ZWFkIG9mIGNyZWF0ZSBpbiBhZGR0YXNrdG9wcm9qXG5jb25zdCBlZGl0VGFzayA9IChldmVudCkgPT4ge1xuICAgIHRvZ2dsZU1vZGFsKClcbiAgICBjb25zdCBkb21FbGVtZW50cyA9IGdpdmVEb21JbnB0cygpXG4gICAgbGV0IHRhc2tBcnJheSA9IGdldEFsbFRhc2tzKCk7XG4gICAgY29uc3QgdGFzayA9IHRhc2tBcnJheS5maW5kKHRhc2sgPT4gdGFzay5pZENvZGUgPT0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkKVxuICAgIC8vY29uc3QgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2stY29kZSA9IFwiJHtldmVudC50YXJnZXQuZGF0YXNldC50YXNrSWR9XCJdYClcblxuICAgIGRvbUVsZW1lbnRzLnRhc2tOYW1lLnZhbHVlPSB0YXNrLm5hbWVcbiAgICBkb21FbGVtZW50cy50YXNrRGVzYy52YWx1ZSA9IHRhc2suZGVzY1xuICAgIGRvbUVsZW1lbnRzLnRhc2tDYXRlZ29yeS52YWx1ZSA9IHRhc2suY2F0ZWdvcnlcbiAgICBjb25zb2xlLmxvZyhkb21FbGVtZW50cy50YXNrTmFtZSlcblxuXG4gICAgY29uc29sZS5sb2coZG9tRWxlbWVudHMpXG5cbiAgICBjb25zb2xlLmxvZyhwYXJzZUZsb2F0KHRhc2suZGF0ZSkpXG4gICAgLy9jb25zb2xlLmxvZyhjYXJkKVxuICAgIGNvbnNvbGUubG9nKHRhc2suZGF0ZSlcblxuICAgIGNvbnN0IHN1YkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrX3N1Ym1pdCcpO1xuICAgIGNvbnNvbGUubG9nKHN1YkJ0bilcbiAgICBzdWJCdG4uZGF0YXNldC5zZXRFZGl0ID0gdHJ1ZTtcbiAgICBzdWJCdG4uZGF0YXNldC50YXNrTnVtID0gdGFzay5pZENvZGU7XG5cblxufVxuXG5jb25zdCBnZXRBbGxUYXNrcyA9ICgpID0+e1xuICAgIGxldCB0YXNrQXJyYXkgPSBbXTtcbiAgICBsb2NhbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+e1xuICAgICAgICB0YXNrQXJyYXkucHVzaChwcm9qZWN0LnRhc2tTdG9yYWdlKVxuICAgIH0pXG4gICAgLy9jb21iaW5lcyBhbGwgYXJyYXlzIGluc2lkZSB0YXNrQXJyYXkgaW50byBvbmUgc2luZ2xlIGFycmF5XG4gICAgdGFza0FycmF5ID0gdGFza0FycmF5LmZsYXQoMSk7XG5cbiAgICByZXR1cm4gdGFza0FycmF5O1xufVxuXG5jb25zdCBhbGxUYXNrcyA9IChldmVudCkgPT57XG4gICAgbGV0IHRhc2tBcnJheSA9IFtdO1xuICAgIGxvY2FsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT57XG4gICAgICAgIHRhc2tBcnJheS5wdXNoKHByb2plY3QudGFza1N0b3JhZ2UpXG4gICAgfSlcbiAgICAvL2NvbWJpbmVzIGFsbCBhcnJheXMgaW5zaWRlIHRhc2tBcnJheSBpbnRvIG9uZSBzaW5nbGUgYXJyYXlcbiAgICB0YXNrQXJyYXkgPSB0YXNrQXJyYXkuZmxhdCgxKVxuXG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkID09PSBcImNvbXBsZXRlZC10YXNrc1wiKXtcbiAgICAgICAgY29uc3QgZmluaXNoZWRUYXNrcyA9IENhdGVnb3J5RmFjdG9yeSgnQ29tcGxldGVkIFRhc2tzJylcbiAgICAgICAgdGFza0FycmF5LmZvckVhY2goKHRhc2spPT57XG4gICAgICAgICAgICBpZih0YXNrLnN0YXR1cz09PXRydWUpe1xuICAgICAgICAgICAgICAgIGZpbmlzaGVkVGFza3MudGFza1N0b3JhZ2UucHVzaCh0YXNrKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gZmluaXNoZWRUYXNrc1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdC5uYW1lKVxuICAgIH1lbHNle1xuICAgICAgICBjb25zdCBuZXdQcm9qID0gQ2F0ZWdvcnlGYWN0b3J5KCdBbGwgVGFza3MnKVxuICAgICAgICBuZXdQcm9qLnRhc2tTdG9yYWdlID0gdGFza0FycmF5XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Byb2opXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Byb2oudGFza1N0b3JhZ2UpO1xuXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gbmV3UHJvajtcblxuICAgIH1cbiAgICBkaXNwbGF5VGFza3MoKVxufVxuXG5cbmZ1bmN0aW9uIHRvZ2dsZVByb2plY3QoZXZlbnQpe1xuICAgIGNvbnN0IGtleSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnByb2plY3Q7XG4gICAgbG9jYWxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xuICAgICAgICBpZihwcm9qZWN0Lm5hbWUgPT09IGtleSl7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QudGFza1N0b3JhZ2UpXG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QubmFtZSlcbiAgICBkaXNwbGF5VGFza3MoKVxuXG59XG5cbmNvbnN0IHVwZGF0ZVRhc2sgPSAoY29kZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tBcnJheSA9IGdldEFsbFRhc2tzKCk7XG4gICAgY29uc3Qgb2xkVGFzayA9IHRhc2tBcnJheS5maW5kKHRhc2sgPT4gdGFzay5pZENvZGUgPT0gY29kZSlcbiAgICBjb25zdCBET00gPSBnaXZlRG9tSW5wdHMoKVxuICAgIGxvY2FsUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgaWYocHJvamVjdC5uYW1lID09PSBvbGRUYXNrLmNhdGVnb3J5KXtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdC50YXNrU3RvcmFnZS5maW5kSW5kZXgodG9kbz0+dG9kby5pZENvZGUgPT0gY29kZSlcbiAgICAgICAgICAgIHByb2plY3QudGFza1N0b3JhZ2VbaW5kZXhdLm5hbWUgPSBET00udGFza05hbWUudmFsdWVcbiAgICAgICAgICAgIHByb2plY3QudGFza1N0b3JhZ2VbaW5kZXhdLmRlc2MgPSBET00udGFza0Rlc2MudmFsdWVcbiAgICAgICAgICAgIHByb2plY3QudGFza1N0b3JhZ2VbaW5kZXhdLmNhdGVnb3J5ID0gRE9NLnRhc2tDYXRlZ29yeS52YWx1ZVxuICAgICAgICAgICAgcHJvamVjdC50YXNrU3RvcmFnZVtpbmRleF0uZGF0ZSA9IERPTS50YXNrRGF0ZS52YWx1ZVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2codGFza0FycmF5KVxuICAgIGNvbnNvbGUubG9nKG9sZFRhc2spXG4gICAgXG59XG5cblxuLy9jcmVhdGUgYSB0YXNrIGFuZCBQdXNoIGl0IHRvIHRoZSBjb3JyZWN0IHByb2plY3QgdGFzayBhcnJheVxuY29uc3QgYWRkVGFza1RvUHJvaiA9IChldmVudCkgPT57XG4gICAgY29uc3QgRE9NID0gZ2l2ZURvbUlucHRzKClcbiAgICBcbiAgICBpZihldmVudC50YXJnZXQuZGF0YXNldC5zZXRFZGl0KXtcbiAgICAgICAgdXBkYXRlVGFzayhldmVudC50YXJnZXQuZGF0YXNldC50YXNrTnVtKVxuICAgIH1lbHNle1xuICAgICAgICBjb25zb2xlLmxvZyhmYWxzZSlcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBUYXNrRmFjdG9yeShcbiAgICAgICAgICAgIERPTS50YXNrTmFtZS52YWx1ZSxcbiAgICAgICAgICAgIERPTS50YXNrRGVzYy52YWx1ZSxcbiAgICAgICAgICAgIERPTS50YXNrRGF0ZS52YWx1ZSxcbiAgICAgICAgICAgIERPTS50YXNrQ2F0ZWdvcnkudmFsdWVcbiAgICAgICAgKVxuICAgIFxuICAgICAgICBsb2NhbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XG4gICAgICAgICAgICBpZihwcm9qZWN0Lm5hbWUgPT09IG5ld1Rhc2suY2F0ZWdvcnkpe1xuICAgICAgICAgICAgICAgIHByb2plY3QudGFza1N0b3JhZ2UucHVzaChuZXdUYXNrKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QudGFza1N0b3JhZ2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgc2F2ZVByb2plY3RMaXN0KClcbiAgICB0b2dnbGVNb2RhbCgpXG4gICAgZGlzcGxheVRhc2tzKClcbn1cbi8vYWRkcyBQcm9qZWN0IHRvIHByb2plY3RzIGFycmF5XG5jb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2pJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qX05hbWVfSW5wdCcpO1xuICAgIGxldCBuZXdQcm9qZWN0ID0gQ2F0ZWdvcnlGYWN0b3J5KHByb2pJbnB1dC52YWx1ZSk7XG4gICAgc3RvcmVQcm9qZWN0KG5ld1Byb2plY3QpXG4gICAgZGlzcGxheVByb2plY3RzKClcbiAgICB0b2dnbGVNb2RhbCgpXG4gICAgcHJvaklucHV0LnZhbHVlID0gJydcblxuICAgIFxufVxuXG5mdW5jdGlvbiB0YXNrTGlzdGVuZXJzKGV2ZW50KXtcbiAgICBsZXQgdGFza2NvZGUgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrSWRcbiAgICBsZXQgZXZlbnROYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWVcbiAgICBpZihldmVudE5hbWUgPT09ICdEZWxldGUnKXtcbiAgICAgICAgcmVtb3ZlVGFzayh0YXNrY29kZSlcbiAgICB9ZWxzZSBpZihldmVudE5hbWUgPT09ICdTdGF0dXMnKXtcbiAgICAgICAgdGFza1N0YXR1cyh0YXNrY29kZSk7XG4gICAgfVxufVxuXG5jb25zdCByZW1vdmVUYXNrID0gKHRhc2tJZCxwcm9qZWN0KSA9PiB7XG4gICAgY3VycmVudFByb2plY3QudGFza1N0b3JhZ2UuZm9yRWFjaCgodGFzayxpbmRleCk9PntcbiAgICAgICAgaWYodGFzay5pZENvZGUgPT0gdGFza0lkKXtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tTdG9yYWdlLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgfVxuICAgIH0pXG5cblxuICAgIGRpc3BsYXlUYXNrcygpXG4gICAgc2F2ZVByb2plY3RMaXN0KClcbn1cblxuXG5mdW5jdGlvbiB0YXNrU3RhdHVzKGNvZGUpe1xuICAgIGNvbnN0IGRvbUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXR1cy1idG4nKVxuICAgIGxldCBkb21FbGVtZW50IDtcbiAgICBkb21FbGVtZW50cy5mb3JFYWNoKChidG4pPT57XG4gICAgICAgIGNvbnNvbGUubG9nKGJ0bi5kYXRhc2V0LnRhc2tJZClcbiAgICAgICAgaWYoYnRuLmRhdGFzZXQudGFza0lkID09IGNvZGUpe1xuICAgICAgICAgICAgZG9tRWxlbWVudCA9IGJ0blxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tTdG9yYWdlLmZvckVhY2goKHRhc2spPT57XG4gICAgICAgIGlmKHRhc2suaWRDb2RlID09IGNvZGUpe1xuICAgICAgICAgICAgdGFzay5zdGF0dXMgPSAhdGFzay5zdGF0dXNcbiAgICAgICAgICAgIGlmKHRhc2suc3RhdHVzID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdHVzLWdyZWVuJyk7XG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLXN0YXR1cy1yZWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBkb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stc3RhdHVzLWdyZWVuJyk7XG4gICAgICAgICAgICAgICAgZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLXN0YXR1cy1yZWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2codGFzay5pZENvZGUpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrLnN0YXR1cylcbiAgICAgICAgfVxuICAgIH0pXG4gICAgc2F2ZVByb2plY3RMaXN0KClcbiAgICAvL2Rpc3BsYXlUYXNrcygpXG4gICAgXG59XG5cbmV4cG9ydCB7XG4gICAgYWRkUHJvamVjdCxcbiAgICBhZGRUYXNrVG9Qcm9qLFxuICAgIGRpc3BsYXlQcm9qZWN0cyxcbiAgICBkaXNwbGF5VGFza3MsXG4gICAgYWxsVGFza3MsXG4gICAgZWRpdFRhc2ssXG4gICAgdG9nZ2xlUHJvamVjdCxcbn0iLCJjb25zdCBUYXNrRmFjdG9yeSA9IChuYW1lLGRlc2MsZGF0ZSxjYXRlZ29yeSkgPT4ge1xuICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcbiAgICBjb25zdCBpZENvZGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWRDb2RlLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRlc2MsXG4gICAgICAgIGRhdGUsXG4gICAgICAgIGNhdGVnb3J5LFxuICAgICAgICBuYW1lXG4gICAgfVxufVxuXG5jb25zdCBDYXRlZ29yeUZhY3RvcnkgPSAobmFtZSkgPT4ge1xuICAgIGxldCB0YXNrU3RvcmFnZSA9IFtdO1xuICAgIFxuICAgIHJldHVybiB7dGFza1N0b3JhZ2UsbmFtZX1cbn1cbmV4cG9ydHtcbiAgICBUYXNrRmFjdG9yeSxcbiAgICBDYXRlZ29yeUZhY3Rvcnlcbn1cblxuIiwiXG5pbXBvcnQgeyBDYXRlZ29yeUZhY3RvcnksVGFza0ZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XG5cbmNvbnN0IEd5bSA9IENhdGVnb3J5RmFjdG9yeSgnR3ltJyk7IFxuXG5jb25zdCBDb2RpbmcgPSBDYXRlZ29yeUZhY3RvcnkoJ0NvZGluZycpXG5cbmNvbnN0IFdvcmsgPSBDYXRlZ29yeUZhY3RvcnkoJ1dvcmsnKVxuY29uc3QgdGFzazEgPSBUYXNrRmFjdG9yeSgnRmluaXNoIFVJJyxcIkZpbmlzaCBTdHlsaW5nIFVJXCIsXCIwOS8xOC8yMDIyXCIsXCJDb2RpbmdcIik7XG5jb25zdCB0YXNrMiA9IFRhc2tGYWN0b3J5KCdhZGQgRWRpdCBUYXNrIEJ1dHRvbicsXCJBZGQgZWRpdCB0YXNrIGJ1dHRvbiB0byB0YXNrIGNhcmRzXCIsXCIwOS8xOC8yMDIyXCIsXCJDb2RpbmdcIik7XG5jb25zdCB0YXNrMyA9IFRhc2tGYWN0b3J5KCdKYXZhc2NyaXB0JyxcIk1ha2UgZHJvcCBkb3duIHNlbGVjdGlvbiBmb3IgY2F0ZWdvcnkgaW5wdXQgaW4gdGFzayBjcmVhdGlvbiBmb3JtXCIsXCIwOS8xOC8yMDIyXCIsXCJDb2RpbmdcIik7XG5jb25zdCB0YXNrNCA9IFRhc2tGYWN0b3J5KCdKYXZhc2NyaXB0JyxcImRpc3BsYXkgZmluaXNoZWQgdGFza3MgZnVuY3Rpb25cIixcIjA5LzE4LzIwMjJcIixcIkNvZGluZ1wiKTtcbkNvZGluZy50YXNrU3RvcmFnZS5wdXNoKHRhc2sxKVxuQ29kaW5nLnRhc2tTdG9yYWdlLnB1c2godGFzazIpXG5Db2RpbmcudGFza1N0b3JhZ2UucHVzaCh0YXNrMylcbkNvZGluZy50YXNrU3RvcmFnZS5wdXNoKHRhc2s0KVxubGV0IHByb2plY3RzID0gW0d5bSxDb2RpbmcsV29ya11cblxuXG5jb25zdCBpbml0aWFsU3RvcmFnZSA9ICgoKSA9PiB7XG4gICAgaWYobG9jYWxTdG9yYWdlLmxlbmd0aCAgPT09IDAgKXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgfVxuICAgIFxufSkoKTtcbmxldCBsb2NhbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcblxuY29uc3Qgc3RvcmVQcm9qZWN0ID0gKG5ld1Byb2opID0+IHtcbiAgICBsb2NhbFByb2plY3RzLnB1c2gobmV3UHJvailcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsUHJvamVjdHMpKVxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSlcbn1cbmNvbnN0IHNhdmVQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsUHJvamVjdHMpKVxufVxuZXhwb3J0e1xuICAgIHN0b3JlUHJvamVjdCxcbiAgICBsb2NhbFByb2plY3RzLFxuICAgIHNhdmVQcm9qZWN0TGlzdCxcbiAgICBpbml0aWFsU3RvcmFnZVxufSIsImltcG9ydCB7YWRkUHJvamVjdCx0b2dnbGVQcm9qZWN0LGFkZFRhc2tUb1Byb2osZGlzcGxheVByb2plY3RzLGRpc3BsYXlUYXNrcyxhbGxUYXNrcyxlZGl0VGFza30gZnJvbSBcIi4vYXBwXCI7XG4vL2ltcG9ydCB7IGFkZFRhc2tUb1Byb2ogfSBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHsgdG9nZ2xlTW9kYWwsZGlzcGxheUZvcm1zIH0gZnJvbSBcIi4vTW9kYWxcIjtcbmltcG9ydCB7IGxvY2FsUHJvamVjdHMgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgYWRkIGZyb20gJy4uL2ljb25zL2FkZC5wbmcnXG5pbXBvcnQgcGVuY2lsIGZyb20gJy4uL2ljb25zL3BlbmNpbC5wbmcnXG5pbXBvcnQgZmF2b3JpdGUgZnJvbSAnLi4vaWNvbnMvZmF2b3JpdGUucG5nJ1xuaW1wb3J0IHRyYXNoIGZyb20gJy4uL2ljb25zL3RyYXNoLnBuZydcbmltcG9ydCB0YXNrcyBmcm9tICcuLi9pY29ucy90YXNrcy5zdmcnXG5pbXBvcnQgdGlja2V0IGZyb20gJy4uL2ljb25zL3RpY2tldC5zdmcnXG5cbmltcG9ydCBjb2RlIGZyb20gJy4uL2ljb25zL2NvZGUuc3ZnJ1xuXG5jb25zdCBidWlsZEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ1RvLURvIEFwcCdcblxuICAgIGNvbnN0IGFkZE1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRNb2RhbC5pbm5lclRleHQgPSAnTmV3IFRhc2snXG4gICAgYWRkTW9kYWwuaWQgPSAnb3Blbl9Nb2RhbCdcbiAgICBhZGRNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdG9nZ2xlTW9kYWwpXG4gICAgaGVhZGVyLmFwcGVuZCh0aXRsZSxhZGRNb2RhbClcbiAgICByZXR1cm4gaGVhZGVyIFxufVxuXG5jb25zdCBjcmVhdGVOYXZCdXR0b24gPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb2pCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHByb2pCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvai1idG4taG92ZXInKVxuICAgIHByb2pCdXR0b24uaW5uZXJUZXh0ID0gbmFtZVxuICAgIHByb2pCdXR0b24uZGF0YXNldC5wcm9qZWN0ID0gbmFtZVxuICAgIHJldHVybiBwcm9qQnV0dG9uXG59XG5cblxuXG4vL2FkZCBjb2RpbmcgYW5kIHdvcmsgVG9EbyBidXR0b25zIHRvIHRoZSBtYWluIG5hdiBhbmQgbm90IHByb2plY3QgbmF2LiBcblxuY29uc3QgYnVpbGROYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgICBjb25zdCB0YXNrQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b25zJylcblxuICAgXG4gICAgY29uc3QgY29tcGxldGVUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29tcGxldGVUYXNrcy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZmF2b3JpdGV9KWBcbiAgICBjb21wbGV0ZVRhc2tzLmlkID0nY29tcGxldGVkLXRhc2tzJ1xuICAgIGNvbXBsZXRlVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFsbFRhc2tzKTtcbiAgICBcblxuICAgIGNvbnN0IGFsbFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhbGxUYXNrQnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0YXNrc30pYFxuICAgIGFsbFRhc2tCdG4uaWQgPSAnYWxsLXRhc2tzJ1xuICAgIGFsbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFsbFRhc2tzKVxuICAgIFxuICAgIGNvbnN0IGNvZGVQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb2RlUHJvai5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7Y29kZX0pYFxuICAgIGNvZGVQcm9qLmRhdGFzZXQucHJvamVjdCA9ICdDb2RpbmcnXG4gICAgY29kZVByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRvZ2dsZVByb2plY3QpXG5cbiAgICBjb25zdCBwcm9qZWN0TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvamVjdE1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbi1wcm9qZWN0LWNvbnRhaW5lcicpXG4gICAgXG4gICAgXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ1Byb2plY3RzJ1xuICAgIHByb2plY3RNYWluLmFwcGVuZCh0aXRsZSxwcm9qZWN0Q29udGFpbmVyKVxuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJval9uYXZfY29udGFpbmVyJyk7XG4gIFxuICAgIGNvbnN0IHdvcmtQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB3b3JrUHJvai5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGlja2V0fSlgXG4gICAgd29ya1Byb2ouZGF0YXNldC5wcm9qZWN0ID0gJ1dvcmsnXG4gICAgd29ya1Byb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRvZ2dsZVByb2plY3QpXG5cbiAgICBjb25zdCBuYXZCdG5zID0gW2FsbFRhc2tCdG4sY29kZVByb2osY29tcGxldGVUYXNrcyx3b3JrUHJval1cbiAgICBuYXZCdG5zLmZvckVhY2goKGJ0bik9PntcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ25hdl9idG4nKVxuICAgIH0pXG4gICAgdGFza0J1dHRvbkNvbnRhaW5lci5hcHBlbmQoYWxsVGFza0J0bixjb21wbGV0ZVRhc2tzLGNvZGVQcm9qLHdvcmtQcm9qKVxuICAgIG5hdi5hcHBlbmQodGFza0J1dHRvbkNvbnRhaW5lcixwcm9qZWN0TWFpbilcblxuICAgIHJldHVybiBuYXZcbn1cbi8vTU9EQUxcbmNvbnN0IGJ1aWxkVGFza0Zvcm0gPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtLm5hbWUgPSAndGFzay1mb3JtJ1xuICAgIGZvcm0uaWQgPSAndGFza19Nb2RhbCdcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiQ3JlYXRlIFRhc2tcIlxuXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgIG5hbWVJbnB1dC5uYW1lID0gJ25hbWUnXG4gICAgbmFtZUlucHV0LmlkID0gJ25hbWVfaW5wdXQnXG4gICAgbmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5wdCcpXG4gICAgbmFtZUlucHV0LnBsYWNlaG9sZGVyID0gXCJUaXRsZVwiXG5cbiAgICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywnZGVzYycpXG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdkZXNjX2lucHV0JylcbiAgICBkZXNjSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1pbnB0JylcbiAgICBkZXNjSW5wdXQucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uXCJcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2RhdGVfaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1pbnB0JylcbiAgICBcblxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBsb2NhbFByb2plY3RzLmZvckVhY2goKHByb2opPT57XG4gICAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIG9wdC52YWx1ZSA9IHByb2oubmFtZVxuICAgICAgICBvcHQuaW5uZXJUZXh0ID0gcHJvai5uYW1lXG5cbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChvcHQpXG4gICAgfSk7XG5cbiAgICBcbiAgICBwcm9qZWN0Lm5hbWUgPSAnY2F0ZWdvcnknXG4gICAgcHJvamVjdC5pZCA9ICdwcm9qZWN0X0Fzc2lnbidcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5wdCcpXG4gICAgXG4gICAgXG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Rhc2tfc3VibWl0JylcbiAgICBzdWJtaXQudHlwZSA9ICdzdWJtaXQnXG4gICAgc3VibWl0LmlubmVyVGV4dCA9ICdBZGQnXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhZGRUYXNrVG9Qcm9qKVxuXG4gICAgZm9ybS5hcHBlbmQodGl0bGUsbmFtZUlucHV0LGRlc2NJbnB1dCxkYXRlSW5wdXQscHJvamVjdCxzdWJtaXQpO1xuXG4gICAgcmV0dXJuIGZvcm1cbn1cbmNvbnN0IGJ1aWxkUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RfbW9kYWwnKVxuXG4gICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2pOYW1lLmlkID0gJ3Byb2pfTmFtZV9JbnB0JztcbiAgICBwcm9qTmFtZS5uYW1lID0gJ3Byb2plY3RfTmFtZV9JbnB0JztcbiAgICBcbiAgICBjb25zdCBhZGRQcm9qQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRQcm9qQnRuLmlkID0gJ2FkZF9Qcm9qX0J1dHRvbidcbiAgICBhZGRQcm9qQnRuLmlubmVyVGV4dCA9ICdBZGQnXG4gICAgYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkUHJvamVjdClcblxuICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgcHJvak5hbWUsXG4gICAgICAgIGFkZFByb2pCdG5cbiAgICApXG4gICAgcmV0dXJuIG1vZGFsQ29udGFpbmVyXG59XG5jb25zdCBidWlsZE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFzdGVyX01vZGFsX0NvbnRhaW5lcicpXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5pZCA9ICdtYXN0ZXJfTW9kYWwnXG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5hdi5pZCA9ICdtYXN0ZXJfTW9kYWxfTmF2J1xuIFxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHByb2plY3QuaWQgPSAnbmV3X1Byb2plY3QnXG4gICAgcHJvamVjdC5pbm5lclRleHQgPSAnUHJvamVjdCdcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkaXNwbGF5Rm9ybXMpXG5cbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB0b2RvLmlkID0gJ25ld19UYXNrJztcbiAgICB0b2RvLmlubmVyVGV4dCA9ICdUYXNrJ1xuICAgIHRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRpc3BsYXlGb3JtcylcblxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm1Db250YWluZXIuaWQgPSAnbW9kYWxfRm9ybXMnXG4gICAgY29uc3QgZmlyc3RGb3JtID0gYnVpbGRUYXNrRm9ybSgpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3RGb3JtKVxuXG4gICAgY29uc3QgY2xvc2VPdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNsb3NlT3V0LmlubmVyVGV4dCA9ICdYJ1xuICAgIGNsb3NlT3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0b2dnbGVNb2RhbClcbiAgICBjbG9zZU91dC5jbGFzc0xpc3QuYWRkKCdjbG9zZS1tb2RhbCcpXG5cbiAgICBuYXYuYXBwZW5kKHByb2plY3QsdG9kbylcbiAgICBtb2RhbC5hcHBlbmQobmF2LGZvcm1Db250YWluZXIpXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobW9kYWwsY2xvc2VPdXQpXG5cbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lclxuXG59XG5jb25zdCBnaXZlRG9tSW5wdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZV9pbnB1dCcpXG4gICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY19pbnB1dCcpXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZV9pbnB1dCcpXG4gICAgY29uc3QgdGFza0NhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfQXNzaWduJylcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRhc2tOYW1lLFxuICAgICAgICB0YXNrRGVzYyxcbiAgICAgICAgdGFza0RhdGUsXG4gICAgICAgIHRhc2tDYXRlZ29yeVxuICAgIH1cbn1cbmNvbnN0IGJ1aWxkVGFza0VsZW1lbnQgPSAobmFtZSxkZXNjLGRhdGUsY29kZSxzdGF0dXMpID0+IHtcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2tfY2FyZCcpXG4gICAgdGFza0NhcmQuZGF0YXNldC50YXNrQ29kZSA9IGAke2NvZGV9YFxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRpdGxlLmlubmVyVGV4dCA9IG5hbWVcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpXG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkdWVEYXRlLmlubmVyVGV4dCA9IGRhdGVcblxuICAgIFxuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIFxuICAgIGVkaXQuZGF0YXNldC50YXNrSWQgPSBjb2RlXG4gICAgZWRpdC5uYW1lID0gJ0VkaXQnXG4gICAgZWRpdC5pZCA9ICdlZGl0LXRhc2snXG4gICAgZWRpdC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cGVuY2lsfSlgXG4gICAgZWRpdC5jbGFzc0xpc3QuYWRkKCd0YXNrX0J0bicpXG4gICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixlZGl0VGFzaylcbiAgICAgICAgXG4gIFxuICAgIGNvbnN0IHRhc2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2tCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1idG4tY29udGFpbmVyJylcblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGRlbGV0ZVRhc2suc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RyYXNofSlgXG4gICAgZGVsZXRlVGFzay5kYXRhc2V0LnRhc2tJZCA9IGNvZGUgXG4gICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrX0J0bicpXG4gICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJylcbiAgICBkZWxldGVUYXNrLm5hbWUgPSAnRGVsZXRlJ1xuICAgIFxuXG4gICAgY29uc3QgbWFya0NvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBtYXJrQ29tcGxldGUuZGF0YXNldC50YXNrSWQgPSBjb2RlXG4gICAgbWFya0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tfQnRuJylcbiAgICBtYXJrQ29tcGxldGUubmFtZSA9ICdTdGF0dXMnXG4gICAgbWFya0NvbXBsZXRlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtmYXZvcml0ZX0pYFxuICAgIG1hcmtDb21wbGV0ZS5jbGFzc0xpc3QuYWRkKCdzdGF0dXMtYnRuJylcbiAgICBcbiAgICBpZihzdGF0dXM9PT10cnVlKXtcbiAgICAgICAgbWFya0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdHVzLWdyZWVuJyk7XG4gICAgICAgIG1hcmtDb21wbGV0ZS5jbGFzc0xpc3QucmVtb3ZlKCd0YXNrLXN0YXR1cy1yZWQnKVxuICAgIFxuICAgIH1lbHNle1xuICAgICAgICBtYXJrQ29tcGxldGUuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1zdGF0dXMtZ3JlZW4nKTtcbiAgICAgICAgbWFya0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdHVzLXJlZCcpXG5cbiAgICB9XG5cbiAgICB0YXNrQnRuQ29udGFpbmVyLmFwcGVuZChkZWxldGVUYXNrLG1hcmtDb21wbGV0ZSxlZGl0KVxuICAgIFxuXG4gICAgdGFza0NhcmQuYXBwZW5kKFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHRhc2tCdG5Db250YWluZXJcblxuICAgIClcblxuICAgIHJldHVybiB0YXNrQ2FyZFxufVxuXG5cblxuXG5jb25zdCBsb2FkcGFnZSA9ICgpID0+e1xuICAgIGNvbnN0IGhlYWRlciA9IGJ1aWxkSGVhZGVyKClcbiAgICBjb25zdCBuYXYgPSBidWlsZE5hdigpXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgIC8vYWRkIGZvb3RlclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlcixuYXYsbWFpbixmb290ZXIpXG4gICAgXG4gICAgZGlzcGxheVByb2plY3RzKClcbiAgICBkaXNwbGF5VGFza3MoKVxufTtcbi8vXG5leHBvcnR7XG4gICAgbG9hZHBhZ2UsXG4gICAgY3JlYXRlTmF2QnV0dG9uLFxuICAgIGJ1aWxkVGFza0Zvcm0sXG4gICAgYnVpbGRQcm9qZWN0Rm9ybSxcbiAgICBidWlsZE1vZGFsLFxuICAgIGdpdmVEb21JbnB0cyxcbiAgICBidWlsZFRhc2tFbGVtZW50XG59XG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgeyBpbml0aWFsU3RvcmFnZSB9IGZyb20gJy4vbW9kdWxlcy9zdG9yYWdlJztcbmltcG9ydCB7IGxvYWRwYWdlIH0gZnJvbSAnLi9tb2R1bGVzL3VpJztcblxuXG5sb2FkcGFnZSgpXG5cblxuXG4vL2NvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9