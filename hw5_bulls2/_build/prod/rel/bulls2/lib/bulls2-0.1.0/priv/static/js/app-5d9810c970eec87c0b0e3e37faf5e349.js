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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/app.scss":
/*!**********************!*\
  !*** ./css/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nError: Missing binding /home/hw5/hw5_bulls2/assets/node_modules/node-sass/vendor/linux-x64-64/binding.node\\nNode Sass could not find a binding for your current environment: Linux 64-bit with Node.js 10.x\\n\\nFound bindings for the following environments:\\n  - Windows 64-bit with Node.js 14.x\\n\\nThis usually happens because your environment has changed since running `npm install`.\\nRun `npm rebuild node-sass` to download the binding for your current environment.\\n    at module.exports (/home/hw5/hw5_bulls2/assets/node_modules/node-sass/lib/binding.js:15:13)\\n    at Object.<anonymous> (/home/hw5/hw5_bulls2/assets/node_modules/node-sass/lib/index.js:14:35)\\n    at Module._compile (/home/hw5/hw5_bulls2/assets/node_modules/v8-compile-cache/v8-compile-cache.js:192:30)\\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)\\n    at Module.load (internal/modules/cjs/loader.js:653:32)\\n    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)\\n    at Function.Module._load (internal/modules/cjs/loader.js:585:3)\\n    at Module.require (internal/modules/cjs/loader.js:692:17)\\n    at require (/home/hw5/hw5_bulls2/assets/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)\\n    at getDefaultSassImplementation (/home/hw5/hw5_bulls2/assets/node_modules/sass-loader/dist/getDefaultSassImplementation.js:24:10)\\n    at getSassImplementation (/home/hw5/hw5_bulls2/assets/node_modules/sass-loader/dist/getSassImplementation.js:19:72)\\n    at Object.loader (/home/hw5/hw5_bulls2/assets/node_modules/sass-loader/dist/index.js:40:61)\\n    at runLoaders (/home/hw5/hw5_bulls2/assets/node_modules/webpack/lib/NormalModule.js:316:20)\\n    at /home/hw5/hw5_bulls2/assets/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /home/hw5/hw5_bulls2/assets/node_modules/loader-runner/lib/LoaderRunner.js:233:18\\n    at runSyncOrAsync (/home/hw5/hw5_bulls2/assets/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (/home/hw5/hw5_bulls2/assets/node_modules/loader-runner/lib/LoaderRunner.js:232:2)\\n    at /home/hw5/hw5_bulls2/assets/node_modules/loader-runner/lib/LoaderRunner.js:205:4\\n    at process.nextTick (/home/hw5/hw5_bulls2/assets/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:85:15)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jc3MvYXBwLnNjc3MuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./css/app.scss\n");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.scss */ \"./css/app.scss\");\n/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'phoenix_html'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n // webpack automatically bundles all modules in your\n// entry points. Those entry points can be configured\n// in \"webpack.config.js\".\n//\n// Import deps with the dep name or local files with a relative path, for example:\n//\n//     import {Socket} from \"phoenix\"\n//     import socket from \"./socket\"\n//\n\n\nvar lives = 8;\nvar cows = 0;\nvar bulls = 0;\nvar code = [];\nvar guess; // Check funciton runs when check button is clicked\n\ndocument.addEventListener('onload', loaded());\n\nfunction loaded() {\n  var button = document.querySelector('#check');\n  console.log(button.innerText);\n  button.onclick = check;\n}\n\nfunction check() {\n  console.log(\"click\");\n  bulls = 0;\n  cows = 0;\n\n  if (lives <= 0) {\n    if (bulls == 4) {\n      document.querySelector('#gameOver').innerText = \"You Win!\";\n    }\n\n    if (lives == 0 && bulls != 4) {\n      document.querySelector('#gameOver').innerText = \"You Lose!\";\n    }\n\n    return;\n  }\n\n  if (code.length == 0) {\n    code = getCode();\n  } // Get input entered by user\n\n\n  guess = document.querySelector('#guess').value; // Check if input has length of 4\n\n  if (guess.length != 4) {\n    alert(\"Input length must be 4 but was \" + guess.length);\n  } else {\n    var inArr = [guess.charAt(0), guess.charAt(1), guess.charAt(2), guess.charAt(3)]; // Throws error if there are duplicates in the user's input\n\n    if (noDupes(inArr).length < 4) {\n      console.log(\"w/o dupes length: \" + noDupes(inArr).length);\n      alert(\"Input must contain 4 unique digits from 0-9\");\n    }\n\n    updateCounts();\n    updateGuesses();\n  }\n} // Create unique four digit code\n\n\nfunction getCode() {\n  while (code.length < 4) {\n    var num = Math.floor(Math.random() * 10);\n    code.push(num);\n    code = noDupes(code);\n  } // Log code array to the console\n\n\n  for (var i = 0; i < code.length; i++) {\n    console.log(code[i]);\n  }\n\n  return code;\n} //Returns a copy of the input with any duplicates removed\n\n\nfunction noDupes(arr) {\n  var i,\n      len = arr.length,\n      out = [],\n      obj = {};\n\n  for (i = 0; i < len; i++) {\n    obj[arr[i]] = 0;\n  }\n\n  for (i in obj) {\n    out.push(i);\n  }\n\n  return out;\n} // Updates the counts for lives, cows, and bulls\n\n\nfunction updateCounts() {\n  for (var i = 0; i < 4; i++) {\n    if (code[i] == guess[i]) {\n      bulls++;\n    }\n\n    if (code.includes(guess[i])) {\n      cows++;\n    }\n\n    document.querySelector('#cows').innerText = cows;\n    document.querySelector('#bulls').innerText = bulls;\n  }\n\n  if (bulls == 4) {\n    document.querySelector('#gameOver').innerText = \"You Win!\";\n  }\n\n  lives--;\n  document.querySelector('#lives').innerText = lives;\n}\n\nfunction updateGuesses() {\n  var lives = document.querySelector('#lives').innerText;\n  var livesInt = Number.parseInt(lives);\n  document.querySelector('#lives').innerText = 8 - livesInt;\n  \"Guess \" + (8 - lives) + \": \" + guess + \" Cows: \" + cows + \" Bulls: \" + bulls;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/NzQ3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9jc3MvYXBwLnNjc3NcIjtcbiBcbi8vIHdlYnBhY2sgYXV0b21hdGljYWxseSBidW5kbGVzIGFsbCBtb2R1bGVzIGluIHlvdXJcbi8vIGVudHJ5IHBvaW50cy4gVGhvc2UgZW50cnkgcG9pbnRzIGNhbiBiZSBjb25maWd1cmVkXG4vLyBpbiBcIndlYnBhY2suY29uZmlnLmpzXCIuXG4vL1xuLy8gSW1wb3J0IGRlcHMgd2l0aCB0aGUgZGVwIG5hbWUgb3IgbG9jYWwgZmlsZXMgd2l0aCBhIHJlbGF0aXZlIHBhdGgsIGZvciBleGFtcGxlOlxuLy9cbi8vICAgICBpbXBvcnQge1NvY2tldH0gZnJvbSBcInBob2VuaXhcIlxuLy8gICAgIGltcG9ydCBzb2NrZXQgZnJvbSBcIi4vc29ja2V0XCJcbi8vXG5pbXBvcnQgXCJwaG9lbml4X2h0bWxcIjtcbiBcbnZhciBsaXZlcyA9IDg7XG52YXIgY293cyA9IDA7XG52YXIgYnVsbHMgPSAwO1xudmFyIGNvZGUgPSBbXTtcbnZhciBndWVzcztcbiBcbi8vIENoZWNrIGZ1bmNpdG9uIHJ1bnMgd2hlbiBjaGVjayBidXR0b24gaXMgY2xpY2tlZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb25sb2FkJywgbG9hZGVkKCkpXG5cbmZ1bmN0aW9uIGxvYWRlZCgpIHtcbiAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrJyk7XG4gICAgY29uc29sZS5sb2coYnV0dG9uLmlubmVyVGV4dCk7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSBjaGVjaztcblxufVxuICAgXG5mdW5jdGlvbiBjaGVjaygpIHtcbiAgY29uc29sZS5sb2coXCJjbGlja1wiKTtcbiAgYnVsbHMgPSAwO1xuICBjb3dzID0gMDtcbiBcbiAgaWYgKGxpdmVzIDw9IDApIHtcbiAgICBpZiAoYnVsbHMgPT0gNCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZU92ZXInKS5pbm5lclRleHQgPSBcIllvdSBXaW4hXCI7XG4gICAgfVxuIFxuICAgIGlmIChsaXZlcyA9PSAwICYmIGJ1bGxzICE9IDQpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVPdmVyJykuaW5uZXJUZXh0ID0gXCJZb3UgTG9zZSFcIjtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gXG4gIGlmIChjb2RlLmxlbmd0aCA9PSAwKSB7XG4gICAgY29kZSA9IGdldENvZGUoKTtcbiAgfVxuIFxuICAvLyBHZXQgaW5wdXQgZW50ZXJlZCBieSB1c2VyXG4gIGd1ZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2d1ZXNzJykudmFsdWU7XG4gXG4gIC8vIENoZWNrIGlmIGlucHV0IGhhcyBsZW5ndGggb2YgNFxuICBpZiAoZ3Vlc3MubGVuZ3RoICE9IDQpIHtcbiAgICBhbGVydChcIklucHV0IGxlbmd0aCBtdXN0IGJlIDQgYnV0IHdhcyBcIiArIGd1ZXNzLmxlbmd0aCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGluQXJyID0gW1xuICAgICAgZ3Vlc3MuY2hhckF0KDApLFxuICAgICAgZ3Vlc3MuY2hhckF0KDEpLFxuICAgICAgZ3Vlc3MuY2hhckF0KDIpLFxuICAgICAgZ3Vlc3MuY2hhckF0KDMpLFxuICAgIF07XG4gXG4gICAgLy8gVGhyb3dzIGVycm9yIGlmIHRoZXJlIGFyZSBkdXBsaWNhdGVzIGluIHRoZSB1c2VyJ3MgaW5wdXRcbiAgICBpZiAobm9EdXBlcyhpbkFycikubGVuZ3RoIDwgNCkge1xuICAgICAgY29uc29sZS5sb2coXCJ3L28gZHVwZXMgbGVuZ3RoOiBcIiArIG5vRHVwZXMoaW5BcnIpLmxlbmd0aCk7XG4gICAgICBhbGVydChcIklucHV0IG11c3QgY29udGFpbiA0IHVuaXF1ZSBkaWdpdHMgZnJvbSAwLTlcIik7XG4gICAgfVxuIFxuICAgIHVwZGF0ZUNvdW50cygpO1xuICAgIHVwZGF0ZUd1ZXNzZXMoKTtcbiAgfVxufVxuIFxuLy8gQ3JlYXRlIHVuaXF1ZSBmb3VyIGRpZ2l0IGNvZGVcbmZ1bmN0aW9uIGdldENvZGUoKSB7XG4gICAgd2hpbGUgKGNvZGUubGVuZ3RoIDwgNCkge1xuICAgICAgdmFyIG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGNvZGUucHVzaChudW0pO1xuICAgICAgY29kZSA9IG5vRHVwZXMoY29kZSk7XG4gICAgfVxuICBcbiAgICAvLyBMb2cgY29kZSBhcnJheSB0byB0aGUgY29uc29sZVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29kZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc29sZS5sb2coY29kZVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBjb2RlO1xufVxuIFxuLy9SZXR1cm5zIGEgY29weSBvZiB0aGUgaW5wdXQgd2l0aCBhbnkgZHVwbGljYXRlcyByZW1vdmVkXG5mdW5jdGlvbiBub0R1cGVzKGFycikge1xuICB2YXIgaSxcbiAgICBsZW4gPSBhcnIubGVuZ3RoLFxuICAgIG91dCA9IFtdLFxuICAgIG9iaiA9IHt9O1xuIFxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBvYmpbYXJyW2ldXSA9IDA7XG4gIH1cbiAgZm9yIChpIGluIG9iaikge1xuICAgIG91dC5wdXNoKGkpO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG4gXG4vLyBVcGRhdGVzIHRoZSBjb3VudHMgZm9yIGxpdmVzLCBjb3dzLCBhbmQgYnVsbHNcbmZ1bmN0aW9uIHVwZGF0ZUNvdW50cygpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICBpZiAoY29kZVtpXSA9PSBndWVzc1tpXSkge1xuICAgICAgYnVsbHMrKztcbiAgICB9XG4gICAgaWYgKGNvZGUuaW5jbHVkZXMoZ3Vlc3NbaV0pKSB7XG4gICAgICBjb3dzKys7XG4gICAgfVxuIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3dzJykuaW5uZXJUZXh0ID0gY293cztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnVsbHMnKS5pbm5lclRleHQgPSBidWxscztcbiAgfVxuIFxuICBpZiAoYnVsbHMgPT0gNCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lT3ZlcicpLmlubmVyVGV4dCA9IFwiWW91IFdpbiFcIjtcbiAgfVxuIFxuICBsaXZlcy0tO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGl2ZXMnKS5pbm5lclRleHQgPSBsaXZlcztcbn1cbiBcbmZ1bmN0aW9uIHVwZGF0ZUd1ZXNzZXMoKSB7XG4gICAgdmFyIGxpdmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpdmVzJykuaW5uZXJUZXh0O1xuICAgIHZhciBsaXZlc0ludCA9IE51bWJlci5wYXJzZUludChsaXZlcyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpdmVzJykuaW5uZXJUZXh0ID0gOCAtIGxpdmVzSW50O1xuICAgIFwiR3Vlc3MgXCIgK1xuICAgICg4IC0gbGl2ZXMpICtcbiAgICBcIjogXCIgK1xuICAgIGd1ZXNzICtcbiAgICBcIiBDb3dzOiBcIiArXG4gICAgY293cyArXG4gICAgXCIgQnVsbHM6IFwiICtcbiAgICBidWxscztcbn1cbiBcblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/app.js\n");

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./js/app.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./js/app.js */"./js/app.js");


/***/ })

/******/ });