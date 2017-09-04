/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interface__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculation__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__output__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__output___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__output__);




Object(__WEBPACK_IMPORTED_MODULE_0__interface__["renderInterface"])();
Object(__WEBPACK_IMPORTED_MODULE_2__output__["output"])(__WEBPACK_IMPORTED_MODULE_1__calculation__["a" /* default */]);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

exports.renderInterface = function() {
    let mapOfSigns = ["+", "-", "&times;", "&divide;"];
    let mapOfClass = ["plus", "minus", "multiple", "divide"];
    let container = document.getElementById("container");
    let firstInput = document.createElement("input");
    let secondInput = document.createElement("input");
    let buttonsBlock = document.createElement("div");
    let form = document.createElement("form");
    let result = document.createElement("div");

    buttonsBlock.classList.add("buttonsBlock");
    result.classList.add("result");
    result.textContent = "= ";
    firstInput.setAttribute("type", "text");
    firstInput.classList.add("firstInput");
    secondInput.setAttribute("type", "text");
    secondInput.classList.add("secondInput");
    form.appendChild(firstInput);
    form.appendChild(secondInput);
    container.appendChild(form);

    for (let i = 0; i < mapOfSigns.length; i++) {
        let button = document.createElement("button");
        button.setAttribute("type", "button");
        button.innerHTML = mapOfSigns[i];
        button.classList.add(mapOfClass[i]);
        buttonsBlock.appendChild(button);
    }
    container.appendChild(buttonsBlock);
    container.appendChild(result);
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function add(a, b) {
    return (a + b).toPrecision(15) * 1; //simple solution to solve a problem whith float point in js
}

function subtract(a, b) {
    return (a - b).toPrecision(15) * 1;
}

function multiple(a, b) {
    return (a * b).toPrecision(15) * 1;
}

function divide(a, b) {
    return (a / b).toPrecision(15) * 1;
}

/* harmony default export */ __webpack_exports__["a"] = ({
    add: add,
    subtract: subtract,
    multiple: multiple,
    divide: divide
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

exports.output = function(obj) {
    let buttonsBlock = document.getElementsByClassName("buttonsBlock")[0];
    buttonsBlock.addEventListener("click", setResult);

    function setResult(event) {

        let sign = event.target.getAttribute("class");
        let first = document.getElementsByClassName("firstInput")[0].value;
        let second = document.getElementsByClassName("secondInput")[0].value;
        let resBlock = document.getElementsByClassName("result")[0];
        let res = "= ";

        if (event.target.tagName !== "BUTTON") {
            return false;
        }

        event.stopPropagation();
        resBlock.textContent = "= ";

        if (first.includes(",") || second.includes(",")) {
            alert("Please use a dot sign instead of comma");
            return;
        } else if (isNaN(first) || isNaN(second) || first === "" || second === "") {
            alert("Entry must be a numbers");
            return;
        } else {
            first = parseFloat(first);
            second = parseFloat(second);
        }

        switch (sign) {
            case "plus":
                res = obj.add(first, second);
                break;
            case "minus":
                res = obj.subtract(first, second);
                break;
            case "multiple":
                res = obj.multiple(first, second);
                break;
            case "divide":
                if (second === 0) {
                    alert("You can't divide by zero");
                    return;
                }
                res = obj.divide(first, second);
                break;
            default:
                res = "";
                break;
        }
        resBlock.textContent += res;
    }
};


/***/ })
/******/ ]);