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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/sprites/skeleton.png":
/*!*************************************!*\
  !*** ./assets/sprites/skeleton.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d33d76908c4574264617382e61f5e480.png");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objects_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects/game */ "./src/objects/game.ts");

var game = new _objects_game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
document.body.prepend(game.run());


/***/ }),

/***/ "./src/objects/box.ts":
/*!****************************!*\
  !*** ./src/objects/box.ts ***!
  \****************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
var Box = /** @class */ (function () {
    function Box(ctx, options) {
        this.ctx = ctx;
        this.position = options.position;
        this.color = options.color;
        this.height = options.height;
        this.width = options.width;
        this.options = options;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.acceleration = 0.4;
        this.deceleration = 0.2;
        this.speedLimit = 5;
    }
    Box.prototype.update = function (keys) {
        this.updateSpeed(keys);
        this.updatePosition();
    };
    Box.prototype.updateSpeed = function (_a) {
        var up = _a.up, right = _a.right, down = _a.down, left = _a.left;
        if (up) {
            if (-this.ySpeed < this.speedLimit)
                this.ySpeed -= this.acceleration;
        }
        else {
            if (this.ySpeed < 0) {
                this.ySpeed += this.deceleration;
                if (Math.abs(this.ySpeed) < this.deceleration)
                    this.ySpeed = 0;
            }
        }
        if (right) {
            if (this.xSpeed < this.speedLimit)
                this.xSpeed += this.acceleration;
        }
        else {
            if (this.xSpeed > 0) {
                this.xSpeed -= this.deceleration;
                if (Math.abs(this.xSpeed) < this.deceleration)
                    this.xSpeed = 0;
            }
        }
        if (down) {
            if (this.ySpeed < this.speedLimit)
                this.ySpeed += this.acceleration;
        }
        else {
            if (this.ySpeed > 0) {
                this.ySpeed -= this.deceleration;
                if (Math.abs(this.ySpeed) < this.deceleration)
                    this.ySpeed = 0;
            }
        }
        if (left) {
            if (-this.xSpeed < this.speedLimit)
                this.xSpeed -= this.acceleration;
        }
        else {
            if (this.xSpeed < 0) {
                this.xSpeed += this.deceleration;
                if (Math.abs(this.xSpeed) < this.deceleration)
                    this.xSpeed = 0;
            }
        }
    };
    Box.prototype.updatePosition = function () {
        this.position.x += this.xSpeed;
        this.position.y += this.ySpeed;
    };
    Box.prototype.draw = function () {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
    return Box;
}());



/***/ }),

/***/ "./src/objects/canvas.ts":
/*!*******************************!*\
  !*** ./src/objects/canvas.ts ***!
  \*******************************/
/*! exports provided: CanvasElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasElement", function() { return CanvasElement; });
var CanvasElement = /** @class */ (function () {
    function CanvasElement(width, height) {
        this.canvasElement = document.createElement('canvas');
        this.canvasElement.width = width;
        this.canvasElement.height = height;
        this.ctx = this.canvasElement.getContext("2d");
    }
    return CanvasElement;
}());



/***/ }),

/***/ "./src/objects/character.ts":
/*!**********************************!*\
  !*** ./src/objects/character.ts ***!
  \**********************************/
/*! exports provided: Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
/* harmony import */ var _assets_sprites_skeleton_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/sprites/skeleton.png */ "./assets/sprites/skeleton.png");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// @ts-ignore

var Character = /** @class */ (function () {
    function Character(ctx) {
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = _assets_sprites_skeleton_png__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.position = { x: 300, y: 300 };
        this.sheetWidth = 576;
        this.sheetHeight = 256;
        this.columns = 9;
        this.rows = 4;
        this.width = this.sheetWidth / this.columns;
        this.height = this.sheetHeight / this.rows;
        this.srcX = 0;
        this.srcY = 2 * this.height;
        this.imagesLoaded = false;
    }
    Character.prototype.update = function (keys) {
        this.updatePosition(keys);
    };
    Character.prototype.updatePosition = function (_a) {
        var up = _a.up, right = _a.right, down = _a.down, left = _a.left;
    };
    Character.prototype.draw = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.imagesLoaded) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadImages([this.img])];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        // this.ctx.drawImage(this.img, this.srcX, this.srcY, this.sheetWidth, this.sheetHeight, this.position.x, this.position.y, this.width, this.height);
                        this.ctx.drawImage(this.img, 0, 0);
                        return [2 /*return*/];
                }
            });
        });
    };
    Character.prototype.loadImages = function (images) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var _loop_1 = function (img) {
                            img.onload = function () { return resolve(img); };
                            img.onerror = reject;
                        };
                        for (var _i = 0, images_1 = images; _i < images_1.length; _i++) {
                            var img = images_1[_i];
                            _loop_1(img);
                        }
                    })];
            });
        });
    };
    return Character;
}());



/***/ }),

/***/ "./src/objects/game.ts":
/*!*****************************!*\
  !*** ./src/objects/game.ts ***!
  \*****************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _states_gameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states/gameState */ "./src/states/gameState.ts");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "./src/objects/canvas.ts");
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./box */ "./src/objects/box.ts");
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character */ "./src/objects/character.ts");




var Game = /** @class */ (function () {
    function Game() {
        this.state = new _states_gameState__WEBPACK_IMPORTED_MODULE_0__["GameState"](innerWidth, innerHeight);
        this.state.canvas = new _canvas__WEBPACK_IMPORTED_MODULE_1__["CanvasElement"](innerWidth, innerHeight);
        var boxOptions = {
            color: 'blue',
            height: 30,
            width: 30,
            position: { x: 100, y: 100 }
        };
        this.state.box = new _box__WEBPACK_IMPORTED_MODULE_2__["Box"](this.state.canvas.ctx, boxOptions);
        this.state.character = new _character__WEBPACK_IMPORTED_MODULE_3__["Character"](this.state.canvas.ctx);
    }
    // Updating the data, nothing with drawing/rendering
    Game.prototype.update = function () {
        this.state.box.update(this.state.keys);
    };
    Game.prototype.draw = function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this.refreshCanvas();
            _this.update();
            // this.state.box.draw();
            _this.state.character.draw();
            _this.draw();
        });
    };
    Game.prototype.refreshCanvas = function () {
        this.state.canvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
    };
    // EntryPoint
    Game.prototype.run = function () {
        var _this = this;
        document.addEventListener("keydown", function (evt) { return _this.state.parseKey(evt.key, true); });
        document.addEventListener("keyup", function (evt) { return _this.state.parseKey(evt.key, false); });
        this.draw();
        return this.state.canvas.canvasElement;
    };
    return Game;
}());



/***/ }),

/***/ "./src/states/gameState.ts":
/*!*********************************!*\
  !*** ./src/states/gameState.ts ***!
  \*********************************/
/*! exports provided: GameState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameState", function() { return GameState; });
var GameState = /** @class */ (function () {
    function GameState(width, height) {
        this.keys = {
            up: false,
            down: false,
            left: false,
            right: false,
            space: false,
            shift: false
        };
        this.screenWidth = width;
        this.screenHeight = height;
        this.playerPosition = {
            x: width / 2,
            y: height / 2
        };
        console.log('gameState');
    }
    GameState.prototype.parseKey = function (key, pressed) {
        switch (key) {
            case "ArrowUp":
            case "w":
                if (pressed && !this.keys.up || !pressed && this.keys.up) {
                    this.keys.up = pressed;
                }
                break;
            case "ArrowDown":
            case "s":
                if (pressed && !this.keys.down || !pressed && this.keys.down) {
                    this.keys.down = pressed;
                }
                break;
            case "ArrowLeft":
            case "a":
                if (pressed && !this.keys.left || !pressed && this.keys.left) {
                    this.keys.left = pressed;
                }
                break;
            case "ArrowRight":
            case "d":
                if (pressed && !this.keys.right || !pressed && this.keys.right) {
                    this.keys.right = pressed;
                }
                break;
            case " ":
                if (pressed && !this.keys.space || !pressed && this.keys.space) {
                    this.keys.space = pressed;
                }
                break;
            case "Shift":
                if (pressed && !this.keys.shift || !pressed && this.keys.shift) {
                    this.keys.shift = pressed;
                }
                break;
        }
    };
    return GameState;
}());



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Nwcml0ZXMvc2tlbGV0b24ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9ib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvY2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL2NoYXJhY3Rlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvZ2FtZVN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZSxvRkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFBO0FBQXNDO0FBRXRDLElBQU0sSUFBSSxHQUFHLElBQUksa0RBQUksRUFBRSxDQUFDO0FBQ3hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDQ2xDO0FBQUE7QUFBQTtJQWdCSSxhQUFZLEdBQTZCLEVBQUUsT0FBbUI7UUFDMUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELG9CQUFNLEdBQU4sVUFBTyxJQUFVO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHlCQUFXLEdBQVgsVUFBWSxFQUErQjtZQUE3QixFQUFFLFVBQUUsS0FBSyxhQUFFLElBQUksWUFBRSxJQUFJO1FBQy9CLElBQUksRUFBRSxFQUFFO1lBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3hFO2FBQU07WUFDSCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2pDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVk7b0JBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDbEU7U0FDSjtRQUVELElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVO2dCQUFFLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN2RTthQUFNO1lBQ0gsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNqQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZO29CQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ2xFO1NBQ0o7UUFFRCxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVTtnQkFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDdkU7YUFBTTtZQUNILElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDakMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWTtvQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUNsRTtTQUNKO1FBRUQsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVTtnQkFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDeEU7YUFBTTtZQUNILElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDakMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWTtvQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUNsRTtTQUNKO0lBQ0wsQ0FBQztJQUVELDRCQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDbkMsQ0FBQztJQUVELGtCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN2RkQ7QUFBQTtBQUFBO0lBSUUsdUJBQVksS0FBYSxFQUFFLE1BQWM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDbkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JELGFBQWE7QUFDeUM7QUFFdEQ7SUFjSSxtQkFBWSxHQUE2QjtRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxvRUFBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLElBQVU7UUFDYixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxrQ0FBYyxHQUFkLFVBQWUsRUFBK0I7WUFBN0IsRUFBRSxVQUFFLEtBQUssYUFBRSxJQUFJLFlBQUUsSUFBSTtJQUV0QyxDQUFDO0lBRUssd0JBQUksR0FBVjs7Ozs7NkJBQ1EsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFsQix3QkFBa0I7d0JBQUUscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7d0JBQWpDLFNBQWlDLENBQUM7Ozt3QkFDMUQsb0pBQW9KO3dCQUNwSixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7S0FDdEM7SUFFSyw4QkFBVSxHQUFoQixVQUFpQixNQUEwQjs7O2dCQUN2QyxzQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dEQUNwQixHQUFHOzRCQUNWLEdBQUcsQ0FBQyxNQUFNLEdBQUcsY0FBTSxjQUFPLENBQUMsR0FBRyxDQUFDLEVBQVosQ0FBWSxDQUFDOzRCQUNoQyxHQUFHLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7d0JBRnpCLEtBQWtCLFVBQU0sRUFBTixpQkFBTSxFQUFOLG9CQUFNLEVBQU4sSUFBTTs0QkFBbkIsSUFBTSxHQUFHO29DQUFILEdBQUc7eUJBR2I7b0JBQ0wsQ0FBQyxDQUFDLEVBQUM7OztLQUNOO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3pERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0Q7QUFDUjtBQUVaO0FBR1k7QUFFeEM7SUFHRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSwyREFBUyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLHFEQUFhLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRS9ELElBQU0sVUFBVSxHQUFlO1lBQzdCLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLEVBQUU7WUFDVixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtTQUM3QjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksd0NBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxvREFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxvREFBb0Q7SUFDcEQscUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxtQkFBSSxHQUFKO1FBQUEsaUJBU0M7UUFSQyxxQkFBcUIsQ0FBQztZQUNwQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QseUJBQXlCO1lBQ3pCLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRTVCLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDRCQUFhLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsYUFBYTtJQUNiLGtCQUFHLEdBQUg7UUFBQSxpQkFNQztRQUxDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFrQixJQUFLLFlBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQWxDLENBQWtDLENBQUM7UUFDaEcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEdBQWtCLElBQUssWUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQztRQUUvRixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN6QyxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDaEREO0FBQUE7QUFBQTtJQVdJLG1CQUFZLEtBQWEsRUFBRSxNQUFjO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDUixFQUFFLEVBQUUsS0FBSztZQUNULElBQUksRUFBRSxLQUFLO1lBQ1gsSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSxLQUFLO1lBQ1osS0FBSyxFQUFFLEtBQUs7U0FDZjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUc7WUFDbEIsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDO1lBQ1osQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNEJBQVEsR0FBUixVQUFTLEdBQVcsRUFBRSxPQUFnQjtRQUNsQyxRQUFRLEdBQUcsRUFBRTtZQUNULEtBQUssU0FBUyxDQUFDO1lBQ2YsS0FBSyxHQUFHO2dCQUNKLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7b0JBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztpQkFDMUI7Z0JBQ0QsTUFBTTtZQUVWLEtBQUssV0FBVyxDQUFDO1lBQ2pCLEtBQUssR0FBRztnQkFDSixJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7aUJBQzVCO2dCQUNELE1BQU07WUFFVixLQUFLLFdBQVcsQ0FBQztZQUNqQixLQUFLLEdBQUc7Z0JBQ0osSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO2lCQUM1QjtnQkFDRCxNQUFNO1lBRVYsS0FBSyxZQUFZLENBQUM7WUFDbEIsS0FBSyxHQUFHO2dCQUNKLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztpQkFDN0I7Z0JBQ0QsTUFBTTtZQUVWLEtBQUssR0FBRztnQkFDSixJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7aUJBQzdCO2dCQUNELE1BQU07WUFFVixLQUFLLE9BQU87Z0JBQ1IsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO2lCQUM3QjtnQkFDRCxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQzM2Q3NjkwOGM0NTc0MjY0NjE3MzgyZTYxZjVlNDgwLnBuZ1wiOyIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL29iamVjdHMvZ2FtZSc7XG5cbmNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuZG9jdW1lbnQuYm9keS5wcmVwZW5kKGdhbWUucnVuKCkpO1xuIiwiaW1wb3J0IHsgQm94T3B0aW9ucyB9IGZyb20gJy4uL2ludGVyZmFjZXMvYm94T3B0aW9ucyc7XG5pbXBvcnQgeyBLZXlzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9rZXlzJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wb2ludCc7XG5cbmV4cG9ydCBjbGFzcyBCb3gge1xuICAgIC8vIEltbXV0YWJsZVxuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgb3B0aW9uczogQm94T3B0aW9ucztcbiAgICB3aWR0aDogbnVtYmVyO1xuXG4gICAgLy8gTXV0YWJsZVxuICAgIGFjY2VsZXJhdGlvbjogbnVtYmVyO1xuICAgIGRlY2VsZXJhdGlvbjogbnVtYmVyO1xuICAgIHBvc2l0aW9uOiBQb2ludDtcbiAgICBzcGVlZExpbWl0OiBudW1iZXI7XG4gICAgeFNwZWVkOiBudW1iZXI7XG4gICAgeVNwZWVkOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgb3B0aW9uczogQm94T3B0aW9ucykge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG9wdGlvbnMucG9zaXRpb247XG4gICAgICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgICAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICAgICAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgICB0aGlzLnhTcGVlZCA9IDA7XG4gICAgICAgIHRoaXMueVNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gPSAwLjQ7XG4gICAgICAgIHRoaXMuZGVjZWxlcmF0aW9uID0gMC4yO1xuICAgICAgICB0aGlzLnNwZWVkTGltaXQgPSA1O1xuICAgIH1cblxuICAgIHVwZGF0ZShrZXlzOiBLZXlzKTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlU3BlZWQoa2V5cyk7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTcGVlZCh7IHVwLCByaWdodCwgZG93biwgbGVmdCB9OiBLZXlzKTogdm9pZCB7XG4gICAgICAgIGlmICh1cCkge1xuICAgICAgICAgICAgaWYgKC10aGlzLnlTcGVlZCA8IHRoaXMuc3BlZWRMaW1pdCkgdGhpcy55U3BlZWQgLT0gdGhpcy5hY2NlbGVyYXRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy55U3BlZWQgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55U3BlZWQgKz0gdGhpcy5kZWNlbGVyYXRpb247XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueVNwZWVkKSA8IHRoaXMuZGVjZWxlcmF0aW9uKSB0aGlzLnlTcGVlZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmlnaHQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnhTcGVlZCA8IHRoaXMuc3BlZWRMaW1pdCkgdGhpcy54U3BlZWQgKz0gdGhpcy5hY2NlbGVyYXRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy54U3BlZWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54U3BlZWQgLT0gdGhpcy5kZWNlbGVyYXRpb247XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMueFNwZWVkKSA8IHRoaXMuZGVjZWxlcmF0aW9uKSB0aGlzLnhTcGVlZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG93bikge1xuICAgICAgICAgICAgaWYgKHRoaXMueVNwZWVkIDwgdGhpcy5zcGVlZExpbWl0KSB0aGlzLnlTcGVlZCArPSB0aGlzLmFjY2VsZXJhdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnlTcGVlZCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnlTcGVlZCAtPSB0aGlzLmRlY2VsZXJhdGlvbjtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy55U3BlZWQpIDwgdGhpcy5kZWNlbGVyYXRpb24pIHRoaXMueVNwZWVkID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZWZ0KSB7XG4gICAgICAgICAgICBpZiAoLXRoaXMueFNwZWVkIDwgdGhpcy5zcGVlZExpbWl0KSB0aGlzLnhTcGVlZCAtPSB0aGlzLmFjY2VsZXJhdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnhTcGVlZCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnhTcGVlZCArPSB0aGlzLmRlY2VsZXJhdGlvbjtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy54U3BlZWQpIDwgdGhpcy5kZWNlbGVyYXRpb24pIHRoaXMueFNwZWVkID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy54U3BlZWQ7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnlTcGVlZDtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgQ2FudmFzRWxlbWVudCB7XG4gIGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xuICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIHRoaXMuY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY2FudmFzRWxlbWVudC53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBLZXlzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMva2V5c1wiO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9wb2ludFwiO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IGltYWdlIGZyb20gXCIuLi8uLi9hc3NldHMvc3ByaXRlcy9za2VsZXRvbi5wbmdcIjtcblxuZXhwb3J0IGNsYXNzIENoYXJhY3RlciB7XG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgaW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIHBvc2l0aW9uOiBQb2ludDtcbiAgICBjb2x1bW5zOiBudW1iZXI7XG4gICAgcm93czogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgc2hlZXRXaWR0aDogbnVtYmVyO1xuICAgIHNoZWV0SGVpZ2h0OiBudW1iZXI7XG4gICAgc3JjWDogbnVtYmVyO1xuICAgIHNyY1k6IG51bWJlcjtcbiAgICBpbWFnZXNMb2FkZWQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gaW1hZ2U7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7IHg6IDMwMCwgeTogMzAwIH07XG4gICAgICAgIHRoaXMuc2hlZXRXaWR0aCA9IDU3NjtcbiAgICAgICAgdGhpcy5zaGVldEhlaWdodCA9IDI1NjtcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gOTtcbiAgICAgICAgdGhpcy5yb3dzID0gNDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuc2hlZXRXaWR0aCAvIHRoaXMuY29sdW1ucztcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLnNoZWV0SGVpZ2h0IC8gdGhpcy5yb3dzO1xuICAgICAgICB0aGlzLnNyY1ggPSAwO1xuICAgICAgICB0aGlzLnNyY1kgPSAyICogdGhpcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuaW1hZ2VzTG9hZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdXBkYXRlKGtleXM6IEtleXMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbihrZXlzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQb3NpdGlvbih7IHVwLCByaWdodCwgZG93biwgbGVmdCB9OiBLZXlzKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBhc3luYyBkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMuaW1hZ2VzTG9hZGVkKSBhd2FpdCB0aGlzLmxvYWRJbWFnZXMoW3RoaXMuaW1nXSk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy5zcmNYLCB0aGlzLnNyY1ksIHRoaXMuc2hlZXRXaWR0aCwgdGhpcy5zaGVldEhlaWdodCwgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1nLCAwLCAwKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkSW1hZ2VzKGltYWdlczogSFRNTEltYWdlRWxlbWVudFtdKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGltZyBvZiBpbWFnZXMpIHtcbiAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4gcmVzb2x2ZShpbWcpO1xuICAgICAgICAgICAgICAgIGltZy5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlcy9nYW1lU3RhdGVcIjtcbmltcG9ydCB7IENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi9jYW52YXNcIlxuXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi9ib3hcIjtcbmltcG9ydCB7IEJveE9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9ib3hPcHRpb25zXCI7XG5cbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gXCIuL2NoYXJhY3RlclwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gIHByaXZhdGUgc3RhdGU6IEdhbWVTdGF0ZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0YXRlID0gbmV3IEdhbWVTdGF0ZShpbm5lcldpZHRoLCBpbm5lckhlaWdodCk7XG4gICAgdGhpcy5zdGF0ZS5jYW52YXMgPSBuZXcgQ2FudmFzRWxlbWVudChpbm5lcldpZHRoLCBpbm5lckhlaWdodCk7XG5cbiAgICBjb25zdCBib3hPcHRpb25zOiBCb3hPcHRpb25zID0ge1xuICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgIGhlaWdodDogMzAsXG4gICAgICB3aWR0aDogMzAsXG4gICAgICBwb3NpdGlvbjogeyB4OiAxMDAsIHk6IDEwMCB9XG4gICAgfVxuICAgIHRoaXMuc3RhdGUuYm94ID0gbmV3IEJveCh0aGlzLnN0YXRlLmNhbnZhcy5jdHgsIGJveE9wdGlvbnMpO1xuXG4gICAgdGhpcy5zdGF0ZS5jaGFyYWN0ZXIgPSBuZXcgQ2hhcmFjdGVyKHRoaXMuc3RhdGUuY2FudmFzLmN0eCk7XG4gIH1cblxuICAvLyBVcGRhdGluZyB0aGUgZGF0YSwgbm90aGluZyB3aXRoIGRyYXdpbmcvcmVuZGVyaW5nXG4gIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlLmJveC51cGRhdGUodGhpcy5zdGF0ZS5rZXlzKTtcbiAgfVxuXG4gIGRyYXcoKTogdm9pZCB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaENhbnZhcygpO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgIC8vIHRoaXMuc3RhdGUuYm94LmRyYXcoKTtcbiAgICAgIHRoaXMuc3RhdGUuY2hhcmFjdGVyLmRyYXcoKTtcblxuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hDYW52YXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZS5jYW52YXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBpbm5lcldpZHRoLCBpbm5lckhlaWdodCk7XG4gIH1cblxuICAvLyBFbnRyeVBvaW50XG4gIHJ1bigpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2dDogS2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5zdGF0ZS5wYXJzZUtleShldnQua2V5LCB0cnVlKSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGV2dDogS2V5Ym9hcmRFdmVudCkgPT4gdGhpcy5zdGF0ZS5wYXJzZUtleShldnQua2V5LCBmYWxzZSkpXG5cbiAgICB0aGlzLmRyYXcoKTtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5jYW52YXMuY2FudmFzRWxlbWVudDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2FudmFzRWxlbWVudCB9IGZyb20gJy4uL29iamVjdHMvY2FudmFzJztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wb2ludCc7XG5pbXBvcnQgeyBLZXlzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9rZXlzJztcbmltcG9ydCB7IEJveCB9IGZyb20gJy4uL29iamVjdHMvYm94JztcbmltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gJy4uL29iamVjdHMvY2hhcmFjdGVyJztcblxuZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZSB7XG4gICAgYm94OiBCb3g7XG4gICAgY2FudmFzOiBDYW52YXNFbGVtZW50O1xuICAgIGNoYXJhY3RlcjogQ2hhcmFjdGVyO1xuICAgIGdhbWVQYXVzZWQ6IGJvb2xlYW47XG4gICAgZ2FtZVJ1bm5pbmc6IGJvb2xlYW47XG4gICAga2V5czogS2V5cztcbiAgICBwbGF5ZXJQb3NpdGlvbjogUG9pbnQ7XG4gICAgc2NyZWVuSGVpZ2h0OiBudW1iZXI7XG4gICAgc2NyZWVuV2lkdGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMua2V5cyA9IHtcbiAgICAgICAgICAgIHVwOiBmYWxzZSxcbiAgICAgICAgICAgIGRvd246IGZhbHNlLFxuICAgICAgICAgICAgbGVmdDogZmFsc2UsXG4gICAgICAgICAgICByaWdodDogZmFsc2UsXG4gICAgICAgICAgICBzcGFjZTogZmFsc2UsXG4gICAgICAgICAgICBzaGlmdDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcmVlbldpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuc2NyZWVuSGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLnBsYXllclBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogd2lkdGggLyAyLFxuICAgICAgICAgICAgeTogaGVpZ2h0IC8gMlxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdnYW1lU3RhdGUnKTtcbiAgICB9XG5cbiAgICBwYXJzZUtleShrZXk6IHN0cmluZywgcHJlc3NlZDogYm9vbGVhbikge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgIGNhc2UgXCJ3XCI6XG4gICAgICAgICAgICAgICAgaWYgKHByZXNzZWQgJiYgIXRoaXMua2V5cy51cCB8fCAhcHJlc3NlZCAmJiB0aGlzLmtleXMudXApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlzLnVwID0gcHJlc3NlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgICAgICAgaWYgKHByZXNzZWQgJiYgIXRoaXMua2V5cy5kb3duIHx8ICFwcmVzc2VkICYmIHRoaXMua2V5cy5kb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5cy5kb3duID0gcHJlc3NlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgICAgICAgaWYgKHByZXNzZWQgJiYgIXRoaXMua2V5cy5sZWZ0IHx8ICFwcmVzc2VkICYmIHRoaXMua2V5cy5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5cy5sZWZ0ID0gcHJlc3NlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgICAgIGlmIChwcmVzc2VkICYmICF0aGlzLmtleXMucmlnaHQgfHwgIXByZXNzZWQgJiYgdGhpcy5rZXlzLnJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5cy5yaWdodCA9IHByZXNzZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiIFwiOlxuICAgICAgICAgICAgICAgIGlmIChwcmVzc2VkICYmICF0aGlzLmtleXMuc3BhY2UgfHwgIXByZXNzZWQgJiYgdGhpcy5rZXlzLnNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5cy5zcGFjZSA9IHByZXNzZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiU2hpZnRcIjpcbiAgICAgICAgICAgICAgICBpZiAocHJlc3NlZCAmJiAhdGhpcy5rZXlzLnNoaWZ0IHx8ICFwcmVzc2VkICYmIHRoaXMua2V5cy5zaGlmdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleXMuc2hpZnQgPSBwcmVzc2VkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9