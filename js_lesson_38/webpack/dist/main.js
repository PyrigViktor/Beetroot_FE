/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scss/styles.scss */ \"./scss/styles.scss\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/app */ \"./js/app.js\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_1__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz80MWY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQHNjc3Mvc3R5bGVzLnNjc3MnXG5pbXBvcnQgJ0Bqcy9hcHAnO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (() => {

eval("/*\r\nРеалізуй клас, що описує коло. У класі повинні бути такі компоненти:\r\n\r\n    поле, що зберігає радіус кола;\r\nget-властивість, яке повертає радіус кола;\r\nset-властивість, що встановлює радіус кола;\r\nget-властивість, яке повертає діаметр кола;\r\nметод, що обчислює площу кола;\r\nметод, що обчислює довжину кола.\r\n    Продемонструй роботу властивостей і методів.\r\n*/\n\nclass Circle {\n  radius;\n  constructor(radius) {\n    this.radius = radius;\n  }\n  get radius() {\n    return this.radius;\n  }\n  set radius(newRadius) {\n    if (newRadius >= 0) {\n      this.radius = newRadius;\n    } else {\n      console.log(\"Circle radius <0, pls enter correct radius\");\n    }\n  }\n  get diameter() {\n    return this.radius * 2;\n  }\n  calculateArea() {\n    return Math.PI * Math.pow(this.radius, 2);\n  }\n  calculateCircleLength() {\n    return 2 * Math.PI * this.radius;\n  }\n}\nconst myCircle = new Circle(5);\nconsole.log(`Circle Radius: ${myCircle.radius}`);\nconsole.log(`Circle Diameter: ${myCircle.diameter}`);\nconsole.log(`Circle Area: ${myCircle.calculateArea()}`);\nconsole.log(`Circle Length: ${myCircle.calculateCircleLength()}`);\nmyCircle.radius = 10;\nconsole.log(`Circle Radius: ${myCircle.radius}`);\nconsole.log(`Circle Diameter: ${myCircle.diameter}`);\nconsole.log(`Circle Area: ${myCircle.calculateArea()}`);\nconsole.log(`Circle Length: ${myCircle.calculateCircleLength()}`);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hcHAuanMiLCJuYW1lcyI6WyJDaXJjbGUiLCJyYWRpdXMiLCJjb25zdHJ1Y3RvciIsIm5ld1JhZGl1cyIsImNvbnNvbGUiLCJsb2ciLCJkaWFtZXRlciIsImNhbGN1bGF0ZUFyZWEiLCJNYXRoIiwiUEkiLCJwb3ciLCJjYWxjdWxhdGVDaXJjbGVMZW5ndGgiLCJteUNpcmNsZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvYXBwLmpzPzc0NzMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxu0KDQtdCw0LvRltC30YPQuSDQutC70LDRgSwg0YnQviDQvtC/0LjRgdGD0ZQg0LrQvtC70L4uINCjINC60LvQsNGB0ZYg0L/QvtCy0LjQvdC90ZYg0LHRg9GC0Lgg0YLQsNC60ZYg0LrQvtC80L/QvtC90LXQvdGC0Lg6XHJcblxyXG4gICAg0L/QvtC70LUsINGJ0L4g0LfQsdC10YDRltCz0LDRlCDRgNCw0LTRltGD0YEg0LrQvtC70LA7XHJcbmdldC3QstC70LDRgdGC0LjQstGW0YHRgtGMLCDRj9C60LUg0L/QvtCy0LXRgNGC0LDRlCDRgNCw0LTRltGD0YEg0LrQvtC70LA7XHJcbnNldC3QstC70LDRgdGC0LjQstGW0YHRgtGMLCDRidC+INCy0YHRgtCw0L3QvtCy0LvRjtGUINGA0LDQtNGW0YPRgSDQutC+0LvQsDtcclxuZ2V0LdCy0LvQsNGB0YLQuNCy0ZbRgdGC0YwsINGP0LrQtSDQv9C+0LLQtdGA0YLQsNGUINC00ZbQsNC80LXRgtGAINC60L7Qu9CwO1xyXG7QvNC10YLQvtC0LCDRidC+INC+0LHRh9C40YHQu9GO0ZQg0L/Qu9C+0YnRgyDQutC+0LvQsDtcclxu0LzQtdGC0L7QtCwg0YnQviDQvtCx0YfQuNGB0LvRjtGUINC00L7QstC20LjQvdGDINC60L7Qu9CwLlxyXG4gICAg0J/RgNC+0LTQtdC80L7QvdGB0YLRgNGD0Lkg0YDQvtCx0L7RgtGDINCy0LvQsNGB0YLQuNCy0L7RgdGC0LXQuSDRliDQvNC10YLQvtC00ZbQsi5cclxuKi9cclxuXHJcblxyXG5jbGFzcyBDaXJjbGUge1xyXG4gICAgcmFkaXVzO1xyXG4gICAgY29uc3RydWN0b3IocmFkaXVzKSB7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldCByYWRpdXMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5yYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHJhZGl1cyAobmV3UmFkaXVzKSB7XHJcbiAgICAgICAgaWYgKG5ld1JhZGl1cyA+PTApIHtcclxuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSBuZXdSYWRpdXM7XHJcblxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaXJjbGUgcmFkaXVzIDwwLCBwbHMgZW50ZXIgY29ycmVjdCByYWRpdXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICAgICBnZXQgZGlhbWV0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmFkaXVzICogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhbGN1bGF0ZUFyZWEoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguUEkgKiBNYXRoLnBvdyh0aGlzLnJhZGl1cywgMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYWxjdWxhdGVDaXJjbGVMZW5ndGggKCkge1xyXG4gICAgICAgIHJldHVybiAyICogTWF0aC5QSSAqIHRoaXMucmFkaXVzO1xyXG59XHJcbn1cclxuXHJcbmNvbnN0IG15Q2lyY2xlID0gbmV3IENpcmNsZSg1KVxyXG5cclxuY29uc29sZS5sb2coYENpcmNsZSBSYWRpdXM6ICR7bXlDaXJjbGUucmFkaXVzfWApO1xyXG5jb25zb2xlLmxvZyhgQ2lyY2xlIERpYW1ldGVyOiAke215Q2lyY2xlLmRpYW1ldGVyfWApO1xyXG5jb25zb2xlLmxvZyhgQ2lyY2xlIEFyZWE6ICR7bXlDaXJjbGUuY2FsY3VsYXRlQXJlYSgpfWApO1xyXG5jb25zb2xlLmxvZyhgQ2lyY2xlIExlbmd0aDogJHtteUNpcmNsZS5jYWxjdWxhdGVDaXJjbGVMZW5ndGgoKX1gKTtcclxuXHJcbm15Q2lyY2xlLnJhZGl1cyA9IDEwO1xyXG5jb25zb2xlLmxvZyhgQ2lyY2xlIFJhZGl1czogJHtteUNpcmNsZS5yYWRpdXN9YCk7XHJcbmNvbnNvbGUubG9nKGBDaXJjbGUgRGlhbWV0ZXI6ICR7bXlDaXJjbGUuZGlhbWV0ZXJ9YCk7XHJcbmNvbnNvbGUubG9nKGBDaXJjbGUgQXJlYTogJHtteUNpcmNsZS5jYWxjdWxhdGVBcmVhKCl9YCk7XHJcbmNvbnNvbGUubG9nKGBDaXJjbGUgTGVuZ3RoOiAke215Q2lyY2xlLmNhbGN1bGF0ZUNpcmNsZUxlbmd0aCgpfWApOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxNQUFNLENBQUM7RUFDVEMsTUFBTTtFQUNOQyxXQUFXQSxDQUFDRCxNQUFNLEVBQUU7SUFDaEIsSUFBSSxDQUFDQSxNQUFNLEdBQUdBLE1BQU07RUFDeEI7RUFHQSxJQUFJQSxNQUFNQSxDQUFBLEVBQUU7SUFDUixPQUFPLElBQUksQ0FBQ0EsTUFBTTtFQUN0QjtFQUVBLElBQUlBLE1BQU1BLENBQUVFLFNBQVMsRUFBRTtJQUNuQixJQUFJQSxTQUFTLElBQUcsQ0FBQyxFQUFFO01BQ2YsSUFBSSxDQUFDRixNQUFNLEdBQUdFLFNBQVM7SUFFM0IsQ0FBQyxNQUFLO01BQ0ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRDQUE0QyxDQUFDO0lBQzdEO0VBQ0o7RUFFSSxJQUFJQyxRQUFRQSxDQUFBLEVBQUc7SUFDZixPQUFPLElBQUksQ0FBQ0wsTUFBTSxHQUFHLENBQUM7RUFDdEI7RUFFQU0sYUFBYUEsQ0FBQSxFQUFHO0lBQ2hCLE9BQU9DLElBQUksQ0FBQ0MsRUFBRSxHQUFHRCxJQUFJLENBQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUNULE1BQU0sRUFBRSxDQUFDLENBQUM7RUFDekM7RUFFQVUscUJBQXFCQSxDQUFBLEVBQUk7SUFDekIsT0FBTyxDQUFDLEdBQUdILElBQUksQ0FBQ0MsRUFBRSxHQUFHLElBQUksQ0FBQ1IsTUFBTTtFQUN4QztBQUNBO0FBRUEsTUFBTVcsUUFBUSxHQUFHLElBQUlaLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFFOUJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLGtCQUFpQk8sUUFBUSxDQUFDWCxNQUFPLEVBQUMsQ0FBQztBQUNoREcsT0FBTyxDQUFDQyxHQUFHLENBQUUsb0JBQW1CTyxRQUFRLENBQUNOLFFBQVMsRUFBQyxDQUFDO0FBQ3BERixPQUFPLENBQUNDLEdBQUcsQ0FBRSxnQkFBZU8sUUFBUSxDQUFDTCxhQUFhLENBQUMsQ0FBRSxFQUFDLENBQUM7QUFDdkRILE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLGtCQUFpQk8sUUFBUSxDQUFDRCxxQkFBcUIsQ0FBQyxDQUFFLEVBQUMsQ0FBQztBQUVqRUMsUUFBUSxDQUFDWCxNQUFNLEdBQUcsRUFBRTtBQUNwQkcsT0FBTyxDQUFDQyxHQUFHLENBQUUsa0JBQWlCTyxRQUFRLENBQUNYLE1BQU8sRUFBQyxDQUFDO0FBQ2hERyxPQUFPLENBQUNDLEdBQUcsQ0FBRSxvQkFBbUJPLFFBQVEsQ0FBQ04sUUFBUyxFQUFDLENBQUM7QUFDcERGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLGdCQUFlTyxRQUFRLENBQUNMLGFBQWEsQ0FBQyxDQUFFLEVBQUMsQ0FBQztBQUN2REgsT0FBTyxDQUFDQyxHQUFHLENBQUUsa0JBQWlCTyxRQUFRLENBQUNELHFCQUFxQixDQUFDLENBQUUsRUFBQyxDQUFDIn0=\n//# sourceURL=webpack-internal:///./js/app.js\n");

/***/ }),

/***/ "./scss/styles.scss":
/*!**************************!*\
  !*** ./scss/styles.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3NzL3N0eWxlcy5zY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Njc3Mvc3R5bGVzLnNjc3M/MzI5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./scss/styles.scss\n");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;