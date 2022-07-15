/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/addTodoList.js":
/*!********************************!*\
  !*** ./modules/addTodoList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./modules/variables.js");
/* harmony import */ var _removeTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeTodo.js */ "./modules/removeTodo.js");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.js */ "./modules/edit.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive.js */ "./modules/interactive.js");





var addTodoList = function addTodoList(value) {
  _variables_js__WEBPACK_IMPORTED_MODULE_0__.todocontainer.innerHTML += " <div class = 'list-item'><input type='checkbox' class='checkbox'><p class='todo-desc'>".concat(value.description, "</p>\n    <i class = 'bi bi-three-dots-vertical'></i><i class ='bi bi-trash'></i></div>\n    ");
  var editIcon = Array.from(document.querySelectorAll('.bi-three-dots-vertical'));
  var deleteIcon = Array.from(document.querySelectorAll('.bi-trash'));
  var checkbox = Array.from(document.querySelectorAll('.checkbox'));
  editIcon.forEach(function (icon) {
    icon.addEventListener('click', function () {
      var currentListItem = icon.closest('.list-item');
      (0,_edit_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentListItem);
    });
  });
  deleteIcon.forEach(function (icon) {
    icon.addEventListener('click', function () {
      var currentListItem = icon.closest('.list-item');
      (0,_removeTodo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(currentListItem);
    });
  });
  checkbox.forEach(function (check) {
    var currentListItem = check.closest('.list-item');
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.checkCompletedTask)(check, currentListItem);
    check.addEventListener('change', function (e) {
      (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.completedTask)(currentListItem, e);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodoList);

/***/ }),

/***/ "./modules/edit.js":
/*!*************************!*\
  !*** ./modules/edit.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./modules/variables.js");


var edit = function edit(currentListItem) {
  currentListItem.querySelector('.bi-three-dots-vertical').style.display = 'none';
  currentListItem.querySelector('.bi-trash').style.display = 'block';
  var paragraphTag = currentListItem.querySelector('p');
  var initial = paragraphTag.textContent;
  paragraphTag.contentEditable = true;
  paragraphTag.focus();
  paragraphTag.addEventListener('keypress', function (eve) {
    currentListItem.querySelector('.bi-three-dots-vertical').style.display = 'block';
    currentListItem.querySelector('.bi-trash').style.display = 'none';

    if (eve.key === 'Enter') {
      paragraphTag.contentEditable = false;
      var elementValue = paragraphTag.textContent;
      _variables_js__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach(function (element) {
        if (element.description === initial) {
          element.description = elementValue;
          localStorage.setItem('tasks', JSON.stringify(_variables_js__WEBPACK_IMPORTED_MODULE_0__.tasks));
        }
      });
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit);

/***/ }),

/***/ "./modules/interactive.js":
/*!********************************!*\
  !*** ./modules/interactive.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkCompletedTask": () => (/* binding */ checkCompletedTask),
/* harmony export */   "completedTask": () => (/* binding */ completedTask)
/* harmony export */ });
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./modules/variables.js");


var completedTask = function completedTask(listItem, e) {
  var paragraph = listItem.querySelector('p');
  paragraph.classList.toggle('cancelList');
  var newTodo = {};
  _variables_js__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach(function (element) {
    if (element.description === paragraph.textContent) {
      newTodo = element;
    }
  });

  if (e.target.checked) {
    newTodo.completed = true;
  } else {
    newTodo.completed = false;
  }

  localStorage.setItem('tasks', JSON.stringify(_variables_js__WEBPACK_IMPORTED_MODULE_0__.tasks));
  console.log(localStorage.getItem('tasks'));
};

var checkCompletedTask = function checkCompletedTask(checkbox, listItem) {
  var paragraph = listItem.querySelector('p');
  var newTodo = {};
  _variables_js__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach(function (element) {
    if (element.description === paragraph.textContent) {
      newTodo = element;
    }
  });

  if (newTodo.completed) {
    checkbox.checked = true;
    paragraph.classList.add('cancelList');
  }
};



/***/ }),

/***/ "./modules/removeTodo.js":
/*!*******************************!*\
  !*** ./modules/removeTodo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./modules/variables.js");


var deleteItem = function deleteItem(currentListItem) {
  var paragraph = currentListItem.querySelector('p');
  var initial = paragraph.textContent;
  _variables_js__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach(function (element) {
    if (element.description === initial) {
      _variables_js__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(_variables_js__WEBPACK_IMPORTED_MODULE_0__.tasks.indexOf(element), 1);
    }
  });
  _variables_js__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach(function (element, ind) {
    element.index = ind + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(_variables_js__WEBPACK_IMPORTED_MODULE_0__.tasks));
  currentListItem.remove();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteItem);

/***/ }),

/***/ "./modules/todoObject.js":
/*!*******************************!*\
  !*** ./modules/todoObject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoObject)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoObject = /*#__PURE__*/_createClass(function TodoObject(description) {
  var completed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var index = arguments.length > 2 ? arguments[2] : undefined;

  _classCallCheck(this, TodoObject);

  this.description = description;
  this.completed = completed;
  this.index = index;
});



/***/ }),

/***/ "./modules/variables.js":
/*!******************************!*\
  !*** ./modules/variables.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tasks": () => (/* binding */ tasks),
/* harmony export */   "todocontainer": () => (/* binding */ todocontainer)
/* harmony export */ });
var todocontainer = document.getElementById('list');
var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n\nbody {\n  background-color: rgb(116, 114, 112);\n}\n\n.heading {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\nform {\n  width: 50%;\n}\n\n.container {\n  margin: 20px;\n  border: 2px solid white;\n}\n\n.list {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  font-size: 20px;\n}\n\n.list-item {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 20px 0;\n  box-shadow: 0 10px 20px 0 #888;\n}\n\nh1 {\n  font-size: 40px;\n}\n\ninput[type=text] {\n  padding: 10px;\n  width: 90%;\n}\n\ninput[type=checkbox] {\n  padding: 10px;\n  width: 5%;\n  height: 18px;\n}\n\nbutton {\n  padding: 10px;\n  width: 50%;\n  font-size: 15px;\n  margin-top: 10px;\n  font-weight: 400;\n}\n\n@media screen and (max-width: 767px) {\n  form,\n.list,\n.list-item {\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,4DAAA;EACA,UAAA;EACA,SAAA;EACA,qBAAA;AACF;;AAEA;EACE,oCAAA;AACF;;AAEA;EACE,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AACF;;AAEA;EACE,UAAA;AACF;;AAEA;EACE,YAAA;EACA,uBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,UAAA;EACA,eAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,WAAA;EACA,eAAA;EACA,8BAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,aAAA;EACA,UAAA;AACF;;AAEA;EACE,aAAA;EACA,SAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;EACA,UAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AACF;;AAEA;EACE;;;IAGE,WAAA;EACF;AACF","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style-type: none;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(116, 114, 112);\r\n}\r\n\r\n.heading {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\nform {\r\n  width: 50%;\r\n}\r\n\r\n.container {\r\n  margin: 20px;\r\n  border: 2px solid white;\r\n}\r\n\r\n.list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n  font-size: 20px;\r\n}\r\n\r\n.list-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  padding: 20px 0;\r\n  box-shadow: 0 10px 20px 0 #888;\r\n}\r\n\r\nh1 {\r\n  font-size: 40px;\r\n}\r\n\r\ninput[type=text] {\r\n  padding: 10px;\r\n  width: 90%;\r\n}\r\n\r\ninput[type=checkbox] {\r\n  padding: 10px;\r\n  width: 5%;\r\n  height: 18px;\r\n}\r\n\r\nbutton {\r\n  padding: 10px;\r\n  width: 50%;\r\n  font-size: 15px;\r\n  margin-top: 10px;\r\n  font-weight: 400;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n  form,\r\n  .list,\r\n  .list-item {\r\n    width: 100%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _modules_addTodoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/addTodoList.js */ "./modules/addTodoList.js");
/* harmony import */ var _modules_todoObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/todoObject.js */ "./modules/todoObject.js");
/* harmony import */ var _modules_variables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/variables.js */ "./modules/variables.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");




var textInput = document.querySelector('input');
var enterIcon = document.querySelector('.input');
var clearButton = document.querySelector('.clearButton');
textInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && textInput.value) {
    e.preventDefault();
    var newTodo = new _modules_todoObject_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    newTodo.description = textInput.value;
    newTodo.index = _modules_variables_js__WEBPACK_IMPORTED_MODULE_2__.tasks.length + 1;
    (0,_modules_addTodoList_js__WEBPACK_IMPORTED_MODULE_0__["default"])(newTodo);
    _modules_variables_js__WEBPACK_IMPORTED_MODULE_2__.tasks.push(newTodo);
    localStorage.setItem('tasks', JSON.stringify(_modules_variables_js__WEBPACK_IMPORTED_MODULE_2__.tasks));
    textInput.value = null;
  }
});
enterIcon.addEventListener('click', function () {
  if (textInput.value) {
    var newTodo = new _modules_todoObject_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    newTodo.description = textInput.value;
    newTodo.index = _modules_variables_js__WEBPACK_IMPORTED_MODULE_2__.tasks.length + 1;
    (0,_modules_addTodoList_js__WEBPACK_IMPORTED_MODULE_0__["default"])(newTodo);
    _modules_variables_js__WEBPACK_IMPORTED_MODULE_2__.tasks.push(newTodo);
    localStorage.setItem('tasks', JSON.stringify(_modules_variables_js__WEBPACK_IMPORTED_MODULE_2__.tasks));
    textInput.value = null;
  }
});
_modules_variables_js__WEBPACK_IMPORTED_MODULE_2__.tasks.forEach(function (element) {
  (0,_modules_addTodoList_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
});
clearButton.addEventListener('click', function () {
  _modules_variables_js__WEBPACK_IMPORTED_MODULE_2__.todocontainer.innerHTML = '';
  var newtasks = _modules_variables_js__WEBPACK_IMPORTED_MODULE_2__.tasks.filter(function (task) {
    return task.completed === true;
  });
  newtasks.forEach(function (element) {
    _modules_variables_js__WEBPACK_IMPORTED_MODULE_2__.tasks.splice(_modules_variables_js__WEBPACK_IMPORTED_MODULE_2__.tasks.indexOf(element), 1);
  });
  localStorage.setItem('tasks', JSON.stringify(_modules_variables_js__WEBPACK_IMPORTED_MODULE_2__.tasks));
  _modules_variables_js__WEBPACK_IMPORTED_MODULE_2__.tasks.forEach(function (element) {
    (0,_modules_addTodoList_js__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=bundleb5ef94ba6ca851167df7.js.map