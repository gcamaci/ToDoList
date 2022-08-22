/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0;\n    padding: 0;\n}\nbody{\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 10vh 80vh 10vh;\n}\n\nheader{\n    grid-column: 1/3;\n}\nfooter{\n    grid-column: 1/3;\n    border: 1px solid black;\n}\n\n.master_Modal_Container{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(56, 228, 237, 0.504);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n#master_Modal{\n    border: 1px solid black;\n    width: 500px;\n    height: 300px;\n    \n    background: yellow;\n    display:grid;\n    grid-template-columns: 1fr 2fr;\n    \n}\n#master_Modal_Nav{\n    border: 1px solid black;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,kCAAkC;AACtC;;AAEA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,2CAA2C;IAC3C,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;AACA;IACI,uBAAuB;IACvB,YAAY;IACZ,aAAa;;IAEb,kBAAkB;IAClB,YAAY;IACZ,8BAA8B;;AAElC;AACA;IACI,uBAAuB;AAC3B","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n}\nbody{\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 10vh 80vh 10vh;\n}\n\nheader{\n    grid-column: 1/3;\n}\nfooter{\n    grid-column: 1/3;\n    border: 1px solid black;\n}\n\n.master_Modal_Container{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(56, 228, 237, 0.504);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n#master_Modal{\n    border: 1px solid black;\n    width: 500px;\n    height: 300px;\n    \n    background: yellow;\n    display:grid;\n    grid-template-columns: 1fr 2fr;\n    \n}\n#master_Modal_Nav{\n    border: 1px solid black;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
const toggleModal = () => {
    if(toggle === false){
        document.body.appendChild((0,_ui__WEBPACK_IMPORTED_MODULE_0__.buildModal)()) 
    }else{
        const modal = document.querySelector('.master_Modal_Container')
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
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/modules/factory.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./src/modules/Modal.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");




const Gym = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.CategoryFactory)('Gym'); 
//const task1 = TaskFactory('deadlife','Just a test','2022-02-02','Gym')
//Gym.pushTask(task1)
const Coding = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.CategoryFactory)('Coding')
let projects = [Gym,Coding]
//let localProjects = JSON.parse(localStorage.getItem("projects"))
let currentProject = Gym


const  displayProjects = () =>{
    const container = document.querySelector('.proj_nav_container')
    container.innerHTML = ''
    _storage__WEBPACK_IMPORTED_MODULE_3__.localProjects.forEach((project)=>{
        let newProject = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.CategoryFactory)(project.name)
        let newNavBtn = (0,_ui__WEBPACK_IMPORTED_MODULE_2__.createNavButton)(newProject.getName())
        newNavBtn.addEventListener('click',toggleProject)
        container.appendChild(newNavBtn)
        
    });
    console.log(_storage__WEBPACK_IMPORTED_MODULE_3__.localProjects)

}
//create Task Dom, display Task Dom, and add event listeners
const displayTasks = () => {
    const taskContainer = document.querySelector('main')
    taskContainer.innerHTML = ''
    currentProject.taskStorage.forEach((task)=>{
        //console.log(task.idCode)
        let taskElement = (0,_ui__WEBPACK_IMPORTED_MODULE_2__.buildTaskElement)(
            task.name,
            task.desc,
            task.date,
            task.idCode
        )
        taskContainer.appendChild(taskElement);
        
    })

    const taskButtons = document.querySelectorAll('.task_Btn')
    taskButtons.forEach((btn) =>{
        btn.addEventListener('click',taskListeners)
    });
}

function toggleProject(event){
    const key = event.target.dataset.project;
    _storage__WEBPACK_IMPORTED_MODULE_3__.localProjects.forEach((project)=>{
        if(project.name === key){
            currentProject = project
        }
    })
    console.log(currentProject.taskStorage)
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
    projects.push(newProject)
    //storeProject(newProject)
    ;(0,_storage__WEBPACK_IMPORTED_MODULE_3__.storeProject)(newProject)
    displayProjects()
    ;(0,_Modal__WEBPACK_IMPORTED_MODULE_1__.toggleModal)()
    projInput.value = ''

    console.log(projects)
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

const removeTask = (taskId) => {
    currentProject.taskStorage.forEach((task,index)=>{
        if(task.idCode == taskId){
            currentProject.taskStorage.splice(index,1);
        }
    })
    displayTasks()
    ;(0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveProjectList)()
}


function taskStatus(code){
    currentProject.taskStorage.forEach((task)=>{
        if(task.idCode == code){
            task.toggleStatus()
            console.log(task.getStatus())
            console.log(task.idCode)
            console.log(task.getName())
        }
    })  
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

    const pushTask = (task) => {
        taskStorage.push(task);
    }

    const getName = () => name;

    /*
    const removeTask = (taskId) => {
        taskStorage.forEach((task,index)=>{
            if(task.idCode == taskId){
                taskStorage.splice(index,1);
            }
        })
    }
    */
    
    return {taskStorage,getName,pushTask,name}
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/modules/app.js");



const initialStorage = () => {
    if(localStorage.length  === 0 ){
        localStorage.setItem("projects",JSON.stringify(_app__WEBPACK_IMPORTED_MODULE_0__.projects));
    }
    
}

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

//import { addTaskToProj } from "./tasks";


const loadpage = () =>{
    const header = document.createElement('header')
    const nav = buildNav()
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    document.body.append(header,nav,main,footer)
    ;(0,_app__WEBPACK_IMPORTED_MODULE_0__.displayProjects)()
    ;(0,_app__WEBPACK_IMPORTED_MODULE_0__.displayTasks)()
};

const createNavButton = (name) => {
    const projButton = document.createElement('button')
    projButton.innerText = name
    projButton.dataset.project = name
    return projButton
}
const buildNav = () => {
    const nav = document.createElement('nav')
    const title = document.createElement('h3')
    title.innerText = 'Projects'
    
    const projectContainer = document.createElement('div')
    projectContainer.classList.add('proj_nav_container');

    const addModal = document.createElement('button')
    addModal.innerText = '+'
    addModal.id = 'open_Modal'
    addModal.addEventListener('click',_Modal__WEBPACK_IMPORTED_MODULE_1__.toggleModal)
    nav.append(title,projectContainer,addModal)
    
    
    return nav
}
//MODAL
const buildTaskForm = () => {
    const form = document.createElement('div')
    form.name = 'task-form'
    form.id = 'task_Modal'

    const nameInput = document.createElement('input');
    nameInput.type = 'text'
    nameInput.name = 'name'
    nameInput.id = 'name_input'

    const descInput = document.createElement('input');
    descInput.setAttribute('type','text')
    descInput.setAttribute('name','desc')
    descInput.setAttribute('id','desc_input')

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type','date');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('id','date_input');

    const project = document.createElement('input')
    project.type = 'text'
    project.name = 'category'
    project.id = 'project_Assign'

    const submit = document.createElement('button');
    submit.setAttribute('id','task_submit')
    submit.type = 'submit'
    submit.innerText = 'Add'
    submit.addEventListener('click',_app__WEBPACK_IMPORTED_MODULE_0__.addTaskToProj)

    form.append(nameInput,descInput,dateInput,project,submit);

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

    const closeOut = document.createElement('button')
    closeOut.innerText = 'X'
    closeOut.addEventListener('click',_Modal__WEBPACK_IMPORTED_MODULE_1__.toggleModal)

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
const buildTaskElement = (name,desc,date,code) => {
    const taskCard = document.createElement('div');
    taskCard.id = ''

    const title = document.createElement('div')
    title.innerText = name

    const description = document.createElement('div')
    description.innerText = desc

    const dueDate = document.createElement('div')
    dueDate.innerText = date


    const edit = document.createElement('button')
    edit.innerText='Edit'
    edit.dataset.taskId = code
    edit.name = 'Edit'
    edit.classList.add('task_Btn')

    const deleteTask = document.createElement('button')
    deleteTask.innerText = 'Delete'
    deleteTask.dataset.taskId = code 
    deleteTask.classList.add('task_Btn')
    deleteTask.name = 'Delete'
    

    const markComplete = document.createElement('button')
    markComplete.dataset.taskId = code
    markComplete.classList.add('task_Btn')
    markComplete.name = 'Status'
    markComplete.innerText = 'Status'
    

    taskCard.append(
        title,
        description,
        dueDate,
        edit,
        deleteTask,
        markComplete

    )

    return taskCard
}

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/storage */ "./src/modules/storage.js");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");





(0,_modules_storage__WEBPACK_IMPORTED_MODULE_1__.initialStorage)()
;(0,_modules_ui__WEBPACK_IMPORTED_MODULE_2__.loadpage)()



//console.log(localStorage)


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBOztBQUVBO0FBU0M7Ozs7Ozs7Ozs7VUNqTUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzJCO0FBQ1I7OztBQUd4QyxnRUFBYztBQUNkLHNEQUFROzs7O0FBSVIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL01vZGFsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvYXBwLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy91aS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggODB2aCAxMHZoO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcbmZvb3RlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5tYXN0ZXJfTW9kYWxfQ29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDIyOCwgMjM3LCAwLjUwNCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG4jbWFzdGVyX01vZGFse1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBcXG4gICAgYmFja2dyb3VuZDogeWVsbG93O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgXFxufVxcbiNtYXN0ZXJfTW9kYWxfTmF2e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhOztJQUViLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osOEJBQThCOztBQUVsQztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuYm9keXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggODB2aCAxMHZoO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcbmZvb3RlcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5tYXN0ZXJfTW9kYWxfQ29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDIyOCwgMjM3LCAwLjUwNCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG4jbWFzdGVyX01vZGFse1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBcXG4gICAgYmFja2dyb3VuZDogeWVsbG93O1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgXFxufVxcbiNtYXN0ZXJfTW9kYWxfTmF2e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBidWlsZFByb2plY3RGb3JtLGJ1aWxkVGFza0Zvcm0sYnVpbGRNb2RhbCB9IGZyb20gJy4vdWknXG5cbmxldCB0b2dnbGUgPSBmYWxzZVxuY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG4gICAgaWYodG9nZ2xlID09PSBmYWxzZSl7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnVpbGRNb2RhbCgpKSBcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFzdGVyX01vZGFsX0NvbnRhaW5lcicpXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWwpIFxuICAgIH1cbiAgICB0b2dnbGUgPSAhdG9nZ2xlXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlGb3JtcyhldmVudCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsX0Zvcm1zJyk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgXG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkID09PSAnbmV3X1Byb2plY3QnKXtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkUHJvamVjdEZvcm0oKSlcbiAgICB9ZWxzZXtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkVGFza0Zvcm0oKSlcbiAgICB9XG4gICAgICAgXG59XG5cblxuXG5cbmV4cG9ydHtcbiAgICB0b2dnbGVNb2RhbCxcbiAgICBkaXNwbGF5Rm9ybXNcbn0iLCJpbXBvcnQge0NhdGVnb3J5RmFjdG9yeSxUYXNrRmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnlcIjtcbmltcG9ydCB7IHRvZ2dsZU1vZGFsIH0gZnJvbSBcIi4vTW9kYWxcIjtcbmltcG9ydCB7Y3JlYXRlTmF2QnV0dG9uLGdpdmVEb21JbnB0cyxidWlsZFRhc2tFbGVtZW50IH0gZnJvbSBcIi4vdWlcIjtcbmltcG9ydCB7IHN0b3JlUHJvamVjdCxsb2NhbFByb2plY3RzLHNhdmVQcm9qZWN0TGlzdH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuY29uc3QgR3ltID0gQ2F0ZWdvcnlGYWN0b3J5KCdHeW0nKTsgXG4vL2NvbnN0IHRhc2sxID0gVGFza0ZhY3RvcnkoJ2RlYWRsaWZlJywnSnVzdCBhIHRlc3QnLCcyMDIyLTAyLTAyJywnR3ltJylcbi8vR3ltLnB1c2hUYXNrKHRhc2sxKVxuY29uc3QgQ29kaW5nID0gQ2F0ZWdvcnlGYWN0b3J5KCdDb2RpbmcnKVxubGV0IHByb2plY3RzID0gW0d5bSxDb2RpbmddXG4vL2xldCBsb2NhbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxubGV0IGN1cnJlbnRQcm9qZWN0ID0gR3ltXG5cblxuY29uc3QgIGRpc3BsYXlQcm9qZWN0cyA9ICgpID0+e1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qX25hdl9jb250YWluZXInKVxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIGxvY2FsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBDYXRlZ29yeUZhY3RvcnkocHJvamVjdC5uYW1lKVxuICAgICAgICBsZXQgbmV3TmF2QnRuID0gY3JlYXRlTmF2QnV0dG9uKG5ld1Byb2plY3QuZ2V0TmFtZSgpKVxuICAgICAgICBuZXdOYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRvZ2dsZVByb2plY3QpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdOYXZCdG4pXG4gICAgICAgIFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsUHJvamVjdHMpXG5cbn1cbi8vY3JlYXRlIFRhc2sgRG9tLCBkaXNwbGF5IFRhc2sgRG9tLCBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyc1xuY29uc3QgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG4gICAgY3VycmVudFByb2plY3QudGFza1N0b3JhZ2UuZm9yRWFjaCgodGFzayk9PntcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0YXNrLmlkQ29kZSlcbiAgICAgICAgbGV0IHRhc2tFbGVtZW50ID0gYnVpbGRUYXNrRWxlbWVudChcbiAgICAgICAgICAgIHRhc2submFtZSxcbiAgICAgICAgICAgIHRhc2suZGVzYyxcbiAgICAgICAgICAgIHRhc2suZGF0ZSxcbiAgICAgICAgICAgIHRhc2suaWRDb2RlXG4gICAgICAgIClcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gICAgICAgIFxuICAgIH0pXG5cbiAgICBjb25zdCB0YXNrQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrX0J0bicpXG4gICAgdGFza0J1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PntcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0YXNrTGlzdGVuZXJzKVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVQcm9qZWN0KGV2ZW50KXtcbiAgICBjb25zdCBrZXkgPSBldmVudC50YXJnZXQuZGF0YXNldC5wcm9qZWN0O1xuICAgIGxvY2FsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcbiAgICAgICAgaWYocHJvamVjdC5uYW1lID09PSBrZXkpe1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0LnRhc2tTdG9yYWdlKVxuICAgIGRpc3BsYXlUYXNrcygpXG5cbn1cbi8vY3JlYXRlIGEgdGFzayBhbmQgUHVzaCBpdCB0byB0aGUgY29ycmVjdCBwcm9qZWN0IHRhc2sgYXJyYXlcbmNvbnN0IGFkZFRhc2tUb1Byb2ogPSAoKSA9PntcbiAgICBjb25zdCBET00gPSBnaXZlRG9tSW5wdHMoKVxuICAgIGxldCBuZXdUYXNrID0gVGFza0ZhY3RvcnkoXG4gICAgICAgIERPTS50YXNrTmFtZS52YWx1ZSxcbiAgICAgICAgRE9NLnRhc2tEZXNjLnZhbHVlLFxuICAgICAgICBET00udGFza0RhdGUudmFsdWUsXG4gICAgICAgIERPTS50YXNrQ2F0ZWdvcnkudmFsdWVcbiAgICApXG4gICAgbG9jYWxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xuICAgICAgICBpZihwcm9qZWN0Lm5hbWUgPT09IG5ld1Rhc2suY2F0ZWdvcnkpe1xuICAgICAgICAgICAgcHJvamVjdC50YXNrU3RvcmFnZS5wdXNoKG5ld1Rhc2spXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0LnRhc2tTdG9yYWdlKVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgc2F2ZVByb2plY3RMaXN0KClcbiAgICB0b2dnbGVNb2RhbCgpXG4gICAgZGlzcGxheVRhc2tzKClcbn1cbi8vYWRkcyBQcm9qZWN0IHRvIHByb2plY3RzIGFycmF5XG5jb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2pJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qX05hbWVfSW5wdCcpO1xuICAgIGxldCBuZXdQcm9qZWN0ID0gQ2F0ZWdvcnlGYWN0b3J5KHByb2pJbnB1dC52YWx1ZSk7XG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxuICAgIC8vc3RvcmVQcm9qZWN0KG5ld1Byb2plY3QpXG4gICAgc3RvcmVQcm9qZWN0KG5ld1Byb2plY3QpXG4gICAgZGlzcGxheVByb2plY3RzKClcbiAgICB0b2dnbGVNb2RhbCgpXG4gICAgcHJvaklucHV0LnZhbHVlID0gJydcblxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxufVxuXG5mdW5jdGlvbiB0YXNrTGlzdGVuZXJzKGV2ZW50KXtcbiAgICBsZXQgdGFza2NvZGUgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrSWRcbiAgICBsZXQgZXZlbnROYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWVcbiAgICBpZihldmVudE5hbWUgPT09ICdEZWxldGUnKXtcbiAgICAgICAgcmVtb3ZlVGFzayh0YXNrY29kZSlcbiAgICB9ZWxzZSBpZihldmVudE5hbWUgPT09ICdTdGF0dXMnKXtcbiAgICAgICAgdGFza1N0YXR1cyh0YXNrY29kZSk7XG4gICAgfVxufVxuXG5jb25zdCByZW1vdmVUYXNrID0gKHRhc2tJZCkgPT4ge1xuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tTdG9yYWdlLmZvckVhY2goKHRhc2ssaW5kZXgpPT57XG4gICAgICAgIGlmKHRhc2suaWRDb2RlID09IHRhc2tJZCl7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC50YXNrU3RvcmFnZS5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGRpc3BsYXlUYXNrcygpXG4gICAgc2F2ZVByb2plY3RMaXN0KClcbn1cblxuXG5mdW5jdGlvbiB0YXNrU3RhdHVzKGNvZGUpe1xuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tTdG9yYWdlLmZvckVhY2goKHRhc2spPT57XG4gICAgICAgIGlmKHRhc2suaWRDb2RlID09IGNvZGUpe1xuICAgICAgICAgICAgdGFzay50b2dnbGVTdGF0dXMoKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGFzay5nZXRTdGF0dXMoKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2suaWRDb2RlKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGFzay5nZXROYW1lKCkpXG4gICAgICAgIH1cbiAgICB9KSAgXG59XG5cblxuXG5leHBvcnQge1xuICAgIGFkZFByb2plY3QsXG4gICAgYWRkVGFza1RvUHJvaixcbiAgICBkaXNwbGF5UHJvamVjdHMsXG4gICAgZGlzcGxheVRhc2tzLFxuICAgIHByb2plY3RzXG59IiwiY29uc3QgVGFza0ZhY3RvcnkgPSAobmFtZSxkZXNjLGRhdGUsY2F0ZWdvcnkpID0+IHtcbiAgICBsZXQgc3RhdHVzID0gZmFsc2U7XG4gICAgY29uc3QgaWRDb2RlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMClcblxuICAgIHJldHVybiB7XG4gICAgICAgIGlkQ29kZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkZXNjLFxuICAgICAgICBkYXRlLFxuICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgbmFtZVxuICAgIH1cbn1cblxuY29uc3QgQ2F0ZWdvcnlGYWN0b3J5ID0gKG5hbWUpID0+IHtcbiAgICBsZXQgdGFza1N0b3JhZ2UgPSBbXTtcblxuICAgIGNvbnN0IHB1c2hUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgdGFza1N0b3JhZ2UucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcblxuICAgIC8qXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9ICh0YXNrSWQpID0+IHtcbiAgICAgICAgdGFza1N0b3JhZ2UuZm9yRWFjaCgodGFzayxpbmRleCk9PntcbiAgICAgICAgICAgIGlmKHRhc2suaWRDb2RlID09IHRhc2tJZCl7XG4gICAgICAgICAgICAgICAgdGFza1N0b3JhZ2Uuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICAqL1xuICAgIFxuICAgIHJldHVybiB7dGFza1N0b3JhZ2UsZ2V0TmFtZSxwdXNoVGFzayxuYW1lfVxufVxuXG5cblxuXG5leHBvcnR7XG4gICAgVGFza0ZhY3RvcnksXG4gICAgQ2F0ZWdvcnlGYWN0b3J5XG59XG5cbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vYXBwXCI7XG5cblxuY29uc3QgaW5pdGlhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgaWYobG9jYWxTdG9yYWdlLmxlbmd0aCAgPT09IDAgKXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgfVxuICAgIFxufVxuXG5sZXQgbG9jYWxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG5cbmNvbnN0IHN0b3JlUHJvamVjdCA9IChuZXdQcm9qKSA9PiB7XG4gICAgbG9jYWxQcm9qZWN0cy5wdXNoKG5ld1Byb2opXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShsb2NhbFByb2plY3RzKSlcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpXG59XG5jb25zdCBzYXZlUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShsb2NhbFByb2plY3RzKSlcbn1cbmV4cG9ydHtcbiAgICBzdG9yZVByb2plY3QsXG4gICAgaW5pdGlhbFN0b3JhZ2UsXG4gICAgbG9jYWxQcm9qZWN0cyxcbiAgICBzYXZlUHJvamVjdExpc3Rcbn0iLCJpbXBvcnQge2FkZFByb2plY3QsYWRkVGFza1RvUHJvaixkaXNwbGF5UHJvamVjdHMsZGlzcGxheVRhc2tzfSBmcm9tIFwiLi9hcHBcIjtcbi8vaW1wb3J0IHsgYWRkVGFza1RvUHJvaiB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyB0b2dnbGVNb2RhbCxkaXNwbGF5Rm9ybXMgfSBmcm9tIFwiLi9Nb2RhbFwiO1xuXG5jb25zdCBsb2FkcGFnZSA9ICgpID0+e1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgY29uc3QgbmF2ID0gYnVpbGROYXYoKVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVhZGVyLG5hdixtYWluLGZvb3RlcilcbiAgICBkaXNwbGF5UHJvamVjdHMoKVxuICAgIGRpc3BsYXlUYXNrcygpXG59O1xuXG5jb25zdCBjcmVhdGVOYXZCdXR0b24gPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb2pCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHByb2pCdXR0b24uaW5uZXJUZXh0ID0gbmFtZVxuICAgIHByb2pCdXR0b24uZGF0YXNldC5wcm9qZWN0ID0gbmFtZVxuICAgIHJldHVybiBwcm9qQnV0dG9uXG59XG5jb25zdCBidWlsZE5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdQcm9qZWN0cydcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2pfbmF2X2NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYWRkTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFkZE1vZGFsLmlubmVyVGV4dCA9ICcrJ1xuICAgIGFkZE1vZGFsLmlkID0gJ29wZW5fTW9kYWwnXG4gICAgYWRkTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRvZ2dsZU1vZGFsKVxuICAgIG5hdi5hcHBlbmQodGl0bGUscHJvamVjdENvbnRhaW5lcixhZGRNb2RhbClcbiAgICBcbiAgICBcbiAgICByZXR1cm4gbmF2XG59XG4vL01PREFMXG5jb25zdCBidWlsZFRhc2tGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZvcm0ubmFtZSA9ICd0YXNrLWZvcm0nXG4gICAgZm9ybS5pZCA9ICd0YXNrX01vZGFsJ1xuXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgIG5hbWVJbnB1dC5uYW1lID0gJ25hbWUnXG4gICAgbmFtZUlucHV0LmlkID0gJ25hbWVfaW5wdXQnXG5cbiAgICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0JylcbiAgICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywnZGVzYycpXG4gICAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdkZXNjX2lucHV0JylcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2RhdGVfaW5wdXQnKTtcblxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcHJvamVjdC50eXBlID0gJ3RleHQnXG4gICAgcHJvamVjdC5uYW1lID0gJ2NhdGVnb3J5J1xuICAgIHByb2plY3QuaWQgPSAncHJvamVjdF9Bc3NpZ24nXG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Rhc2tfc3VibWl0JylcbiAgICBzdWJtaXQudHlwZSA9ICdzdWJtaXQnXG4gICAgc3VibWl0LmlubmVyVGV4dCA9ICdBZGQnXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxhZGRUYXNrVG9Qcm9qKVxuXG4gICAgZm9ybS5hcHBlbmQobmFtZUlucHV0LGRlc2NJbnB1dCxkYXRlSW5wdXQscHJvamVjdCxzdWJtaXQpO1xuXG4gICAgcmV0dXJuIGZvcm1cbn1cbmNvbnN0IGJ1aWxkUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RfbW9kYWwnKVxuXG4gICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2pOYW1lLmlkID0gJ3Byb2pfTmFtZV9JbnB0JztcbiAgICBwcm9qTmFtZS5uYW1lID0gJ3Byb2plY3RfTmFtZV9JbnB0JztcbiAgICBcbiAgICBjb25zdCBhZGRQcm9qQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRQcm9qQnRuLmlkID0gJ2FkZF9Qcm9qX0J1dHRvbidcbiAgICBhZGRQcm9qQnRuLmlubmVyVGV4dCA9ICdBZGQnXG4gICAgYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYWRkUHJvamVjdClcblxuICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgcHJvak5hbWUsXG4gICAgICAgIGFkZFByb2pCdG5cbiAgICApXG4gICAgcmV0dXJuIG1vZGFsQ29udGFpbmVyXG59XG5jb25zdCBidWlsZE1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFzdGVyX01vZGFsX0NvbnRhaW5lcicpXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5pZCA9ICdtYXN0ZXJfTW9kYWwnXG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG5hdi5pZCA9ICdtYXN0ZXJfTW9kYWxfTmF2J1xuIFxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHByb2plY3QuaWQgPSAnbmV3X1Byb2plY3QnXG4gICAgcHJvamVjdC5pbm5lclRleHQgPSAnUHJvamVjdCdcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkaXNwbGF5Rm9ybXMpXG5cbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB0b2RvLmlkID0gJ25ld19UYXNrJztcbiAgICB0b2RvLmlubmVyVGV4dCA9ICdUYXNrJ1xuICAgIHRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGRpc3BsYXlGb3JtcylcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmb3JtQ29udGFpbmVyLmlkID0gJ21vZGFsX0Zvcm1zJ1xuXG4gICAgY29uc3QgY2xvc2VPdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNsb3NlT3V0LmlubmVyVGV4dCA9ICdYJ1xuICAgIGNsb3NlT3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0b2dnbGVNb2RhbClcblxuICAgIG5hdi5hcHBlbmQocHJvamVjdCx0b2RvKVxuICAgIG1vZGFsLmFwcGVuZChuYXYsZm9ybUNvbnRhaW5lcilcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChtb2RhbCxjbG9zZU91dClcblxuICAgIHJldHVybiBtYWluQ29udGFpbmVyXG5cbn1cbmNvbnN0IGdpdmVEb21JbnB0cyA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lX2lucHV0JylcbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjX2lucHV0JylcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlX2lucHV0JylcbiAgICBjb25zdCB0YXNrQ2F0ZWdvcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF9Bc3NpZ24nKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFza05hbWUsXG4gICAgICAgIHRhc2tEZXNjLFxuICAgICAgICB0YXNrRGF0ZSxcbiAgICAgICAgdGFza0NhdGVnb3J5XG4gICAgfVxufVxuY29uc3QgYnVpbGRUYXNrRWxlbWVudCA9IChuYW1lLGRlc2MsZGF0ZSxjb2RlKSA9PiB7XG4gICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ2FyZC5pZCA9ICcnXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gbmFtZVxuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gZGF0ZVxuXG5cbiAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBlZGl0LmlubmVyVGV4dD0nRWRpdCdcbiAgICBlZGl0LmRhdGFzZXQudGFza0lkID0gY29kZVxuICAgIGVkaXQubmFtZSA9ICdFZGl0J1xuICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgndGFza19CdG4nKVxuXG4gICAgY29uc3QgZGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZGVsZXRlVGFzay5pbm5lclRleHQgPSAnRGVsZXRlJ1xuICAgIGRlbGV0ZVRhc2suZGF0YXNldC50YXNrSWQgPSBjb2RlIFxuICAgIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZCgndGFza19CdG4nKVxuICAgIGRlbGV0ZVRhc2submFtZSA9ICdEZWxldGUnXG4gICAgXG5cbiAgICBjb25zdCBtYXJrQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG1hcmtDb21wbGV0ZS5kYXRhc2V0LnRhc2tJZCA9IGNvZGVcbiAgICBtYXJrQ29tcGxldGUuY2xhc3NMaXN0LmFkZCgndGFza19CdG4nKVxuICAgIG1hcmtDb21wbGV0ZS5uYW1lID0gJ1N0YXR1cydcbiAgICBtYXJrQ29tcGxldGUuaW5uZXJUZXh0ID0gJ1N0YXR1cydcbiAgICBcblxuICAgIHRhc2tDYXJkLmFwcGVuZChcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBlZGl0LFxuICAgICAgICBkZWxldGVUYXNrLFxuICAgICAgICBtYXJrQ29tcGxldGVcblxuICAgIClcblxuICAgIHJldHVybiB0YXNrQ2FyZFxufVxuXG4vL1xuZXhwb3J0e1xuICAgIGxvYWRwYWdlLFxuICAgIGNyZWF0ZU5hdkJ1dHRvbixcbiAgICBidWlsZFRhc2tGb3JtLFxuICAgIGJ1aWxkUHJvamVjdEZvcm0sXG4gICAgYnVpbGRNb2RhbCxcbiAgICBnaXZlRG9tSW5wdHMsXG4gICAgYnVpbGRUYXNrRWxlbWVudFxufVxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2luaXRpYWxTdG9yYWdlfSBmcm9tICcuL21vZHVsZXMvc3RvcmFnZSdcbmltcG9ydCB7IGxvYWRwYWdlIH0gZnJvbSAnLi9tb2R1bGVzL3VpJztcblxuXG5pbml0aWFsU3RvcmFnZSgpXG5sb2FkcGFnZSgpXG5cblxuXG4vL2NvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9