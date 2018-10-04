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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BattleShipController_1 = __webpack_require__(3);
var BattleShipView_1 = __webpack_require__(6);
var AbstractFacade_1 = __webpack_require__(7);
__webpack_require__(1);
var GridView_1 = __webpack_require__(15);
var TextView_1 = __webpack_require__(21);
var ButtonView_1 = __webpack_require__(22);
var SquareClickCommand_1 = __webpack_require__(23);
var ButtonPressCommand_1 = __webpack_require__(24);
var ButtonViewMediator_1 = __webpack_require__(25);
var GridViewMediator_1 = __webpack_require__(26);
var TextViewMediator_1 = __webpack_require__(27);
var BundleShipViewMediator_1 = __webpack_require__(28);
var BundleShipView_1 = __webpack_require__(29);
var ShipPlaceCommand_1 = __webpack_require__(31);
var MediatorNotifications;
(function (MediatorNotifications) {
    MediatorNotifications["ShipsPlacement"] = "Ships_Placement";
    MediatorNotifications["GridShipMarking"] = "GridMarking";
    MediatorNotifications["TextUpdate"] = "TextUpdate";
    MediatorNotifications["SquareClickRequest"] = "SquareClickR";
    MediatorNotifications["Test"] = "Test";
})(MediatorNotifications = exports.MediatorNotifications || (exports.MediatorNotifications = {}));
var TextErrors;
(function (TextErrors) {
    TextErrors["MaximumNumberOfShipReached"] = "Max Number Of Ships to Place Reached";
})(TextErrors = exports.TextErrors || (exports.TextErrors = {}));
var CommandNotifications;
(function (CommandNotifications) {
    CommandNotifications["SquareClickNotification"] = "CLICK_HANDLE_COMMAND";
    CommandNotifications["ButtonPress"] = "BUTTON_PRESS_COMMAND";
    CommandNotifications["StartGame"] = "START_GAME_COMMAND";
    CommandNotifications["ShipsPlacement"] = "SHIPS_PLACEMENT_COMMAND";
})(CommandNotifications = exports.CommandNotifications || (exports.CommandNotifications = {}));
var FacadeInformation;
(function (FacadeInformation) {
    FacadeInformation[FacadeInformation["Grid1XPosition"] = 100] = "Grid1XPosition";
    FacadeInformation[FacadeInformation["Grid1YPosition"] = 100] = "Grid1YPosition";
    FacadeInformation[FacadeInformation["Grid1BorderColor"] = 255] = "Grid1BorderColor";
    FacadeInformation[FacadeInformation["Grid2XPosition"] = 100] = "Grid2XPosition";
    FacadeInformation[FacadeInformation["Grid2YPosition"] = 100] = "Grid2YPosition";
    FacadeInformation[FacadeInformation["Grid2BorderColor"] = 16711680] = "Grid2BorderColor";
    FacadeInformation[FacadeInformation["GridScale"] = 0.5] = "GridScale";
    FacadeInformation[FacadeInformation["GridSquareFillColor"] = 0] = "GridSquareFillColor";
    FacadeInformation[FacadeInformation["RulerTextColor"] = 0] = "RulerTextColor";
    FacadeInformation[FacadeInformation["HitColor"] = 65280] = "HitColor";
    FacadeInformation[FacadeInformation["MissColor"] = 16724736] = "MissColor";
    FacadeInformation[FacadeInformation["SquareFillColor"] = 65280] = "SquareFillColor";
    FacadeInformation[FacadeInformation["SquareWidth"] = 80] = "SquareWidth";
    FacadeInformation[FacadeInformation["NumberOfSquaresVertically"] = 12] = "NumberOfSquaresVertically";
    FacadeInformation[FacadeInformation["NumberOfSquaresHorizontally"] = 12] = "NumberOfSquaresHorizontally";
    FacadeInformation["TextViewText"] = "Game status : \nShips placement";
    FacadeInformation[FacadeInformation["TextViewColor"] = 4379124] = "TextViewColor";
    FacadeInformation[FacadeInformation["FontSize"] = 30] = "FontSize";
    FacadeInformation[FacadeInformation["PlayerOneShipFillColor"] = 255] = "PlayerOneShipFillColor";
    FacadeInformation[FacadeInformation["PlayerOneShipBorderColor"] = 16773120] = "PlayerOneShipBorderColor";
    FacadeInformation[FacadeInformation["PlayerTwoShipFillColor"] = 16384000] = "PlayerTwoShipFillColor";
    FacadeInformation[FacadeInformation["PlayerTwoShipBorderColor"] = 16773120] = "PlayerTwoShipBorderColor";
    FacadeInformation[FacadeInformation["PlayerOneNumberOfShips"] = 6] = "PlayerOneNumberOfShips";
    FacadeInformation[FacadeInformation["PlayerTwoNumberOfShips"] = 6] = "PlayerTwoNumberOfShips";
    FacadeInformation[FacadeInformation["ButtonViewXPosition"] = 100] = "ButtonViewXPosition";
    FacadeInformation[FacadeInformation["ButtonViewYPosition"] = 100] = "ButtonViewYPosition";
    FacadeInformation[FacadeInformation["ButtonViewScale"] = 0.9] = "ButtonViewScale";
    FacadeInformation["PlayerOne"] = "1";
    FacadeInformation["PlayerTwo"] = "2";
    FacadeInformation["BattleShipFacadeKey"] = "BattleShip";
    FacadeInformation["ShipVerticalType"] = "Vertical";
    FacadeInformation["ShipHorizontalType"] = "Horizontal";
    FacadeInformation[FacadeInformation["MaximumNumberOfShipsOnAGrid"] = 3] = "MaximumNumberOfShipsOnAGrid";
})(FacadeInformation = exports.FacadeInformation || (exports.FacadeInformation = {}));
var BattleShipFacade = (function (_super) {
    __extends(BattleShipFacade, _super);
    function BattleShipFacade(key) {
        return _super.call(this, key) || this;
    }
    BattleShipFacade.getInstance = function (key) {
        if (!puremvc.Facade.instanceMap[key])
            puremvc.Facade.instanceMap[key] = new BattleShipFacade(key);
        return puremvc.Facade.instanceMap[key];
    };
    BattleShipFacade.prototype.initializeModel = function () {
    };
    BattleShipFacade.prototype.initializeView = function () {
        var _this = this;
        if (!this.view)
            this.view = BattleShipView_1.BattleShipView.getInstance(this.multitonKey);
        this.gridView = ['GridOneBoard', 'GridTwoBoard'];
        this.gridViewMediator = ['GridOneMediator', 'GridTwoMediator'];
        this.buttonView = 'ButtonView';
        this.buttonViewMediator = 'ButtonViewMediator';
        this.bundleShipView = ['ShipPlayerOneView', 'ShipPlayerTwoView'];
        this.bundleShipViewMediator = ['ShipPlayerOneMediator', 'ShipPlayerTwoMediator'];
        this.textView = 'TextView';
        this.textViewMediator = 'TextViewMediator';
        _super.prototype.registerMediator.call(this, new ButtonViewMediator_1.ButtonViewMediator(this.buttonViewMediator, ButtonView_1.ButtonView.getInstance(this.buttonView, FacadeInformation.ButtonViewXPosition, FacadeInformation.ButtonViewYPosition, FacadeInformation.ButtonViewScale)));
        _super.prototype.registerMediator.call(this, new GridViewMediator_1.GridViewMediator(this.gridViewMediator[0], GridView_1.GridView.getInstance(this.gridView[0], FacadeInformation.PlayerOne), FacadeInformation.PlayerOne));
        _super.prototype.registerMediator.call(this, new GridViewMediator_1.GridViewMediator(this.gridViewMediator[1], GridView_1.GridView.getInstance(this.gridView[1], FacadeInformation.PlayerTwo), FacadeInformation.PlayerTwo));
        _super.prototype.registerMediator.call(this, new TextViewMediator_1.TextViewMediator(this.textViewMediator, TextView_1.TextView.getInstance(this.textView, FacadeInformation.TextViewText, FacadeInformation.FontSize, FacadeInformation.TextViewColor)));
        _super.prototype.registerMediator.call(this, new BundleShipViewMediator_1.BundleShipViewMediator(this.bundleShipViewMediator[0], BundleShipView_1.BundleShipView.getInstance(this.bundleShipView[0], FacadeInformation.PlayerOne, FacadeInformation.PlayerOneNumberOfShips), FacadeInformation.PlayerOne));
        _super.prototype.registerMediator.call(this, new BundleShipViewMediator_1.BundleShipViewMediator(this.bundleShipViewMediator[1], BundleShipView_1.BundleShipView.getInstance(this.bundleShipView[1], FacadeInformation.PlayerTwo, FacadeInformation.PlayerTwoNumberOfShips), FacadeInformation.PlayerTwo));
        var count = 0;
        this.app.ticker.add(function (delta) {
            count += 0.1;
            var text = _super.prototype.retrieveMediator.call(_this, _this.textViewMediator).getViewComponent().getUIContainer();
            text.scale.set(1 + Math.sin(count) * 0.05);
        });
    };
    BattleShipFacade.prototype.initializeController = function () {
        if (!this.controller)
            this.controller = BattleShipController_1.BattleShipController.getInstance(this.multitonKey);
        _super.prototype.registerCommand.call(this, CommandNotifications.SquareClickNotification, SquareClickCommand_1.SquareClickCommand);
        _super.prototype.registerCommand.call(this, CommandNotifications.ButtonPress, ButtonPressCommand_1.ButtonPressCommand);
        _super.prototype.registerCommand.call(this, CommandNotifications.ShipsPlacement, ShipPlaceCommand_1.ShipPlaceCommand);
    };
    BattleShipFacade.prototype.addContainersToView = function (containersList, type) {
        for (var _i = 0, containersList_1 = containersList; _i < containersList_1.length; _i++) {
            var item = containersList_1[_i];
            if (type === BattleShipView_1.BattleShipView.PlayerOneGridContainer) {
                this.GameBoardContainerOne.addChild(item);
            }
            else if (type === BattleShipView_1.BattleShipView.PlayerTwoGridContainer) {
                this.GameBoardContainerTwo.addChild(item);
            }
            else if (type === BattleShipView_1.BattleShipView.GameInfoContainer) {
                this.GameInfoContainer.addChild(item);
            }
            else if (type === BattleShipView_1.BattleShipView.GameButtonContainer) {
                this.GameButtonContainer.addChild(item);
            }
            else if (type === BattleShipView_1.BattleShipView.PlayerOneShipsContainer) {
                this.ShipsContainerOne.addChild(item);
            }
            else if (type === BattleShipView_1.BattleShipView.PlayerTwoShipsContainer) {
                this.ShipsContainerTwo.addChild(item);
            }
        }
    };
    BattleShipFacade.prototype.initializeFacade = function () {
        if (this.multitonKey == undefined)
            return;
        this.app = new PIXI.Application(window.innerWidth, window.innerHeight, { backgroundColor: 0x000000 });
        document.body.appendChild(this.app.view);
        this.GameBoardContainerOne = new PIXI.Container;
        this.GameBoardContainerTwo = new PIXI.Container;
        this.GameInfoContainer = new PIXI.Container;
        this.GameButtonContainer = new PIXI.Container;
        this.ShipsContainerOne = new PIXI.Container;
        this.ShipsContainerTwo = new PIXI.Container;
        this.app.stage.addChild(this.GameBoardContainerOne, this.GameBoardContainerTwo, this.GameInfoContainer, this.GameButtonContainer, this.ShipsContainerOne, this.ShipsContainerTwo);
        this.checkStartOrientation();
        this.changeOrientation();
        this.initializeView();
        this.initializeModel();
        this.initializeController();
        console.log('BattleShipFacade created');
    };
    BattleShipFacade.prototype.notifyObservers = function (mNotification) {
        if (this.view)
            this.view.notifyObservers(mNotification);
    };
    BattleShipFacade.prototype.checkStartOrientation = function () {
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
        var width = this.app.view.width;
        var height = this.app.view.height;
        switch (window.orientation) {
            case 90:
                this.GameBoardContainerOne.position.set(width / 6, height / 2);
                this.GameBoardContainerOne.scale.set(FacadeInformation.GridScale);
                this.GameBoardContainerTwo.position.set(3 * width / 6, height / 2);
                this.GameBoardContainerTwo.scale.set(FacadeInformation.GridScale);
                this.GameInfoContainer.position.set(5 * width / 6, height / 4);
                this.GameInfoContainer.scale.set(1);
                this.GameButtonContainer.position.set(5 * width / 6, 3 * height / 4);
                this.GameButtonContainer.scale.set(0.9);
                this.ShipsContainerOne.position.set(width / 6, 30);
                this.ShipsContainerOne.scale.set(0.5);
                this.ShipsContainerTwo.position.set(3 * width / 6, 30);
                this.ShipsContainerTwo.scale.set(0.5);
                break;
            case 0:
                this.GameBoardContainerOne.position.set(width / 2, height / 6);
                this.GameBoardContainerOne.scale.set(0.7, 0.7);
                this.GameBoardContainerTwo.position.set(width / 2, 3 * height / 6);
                this.GameBoardContainerTwo.scale.set(0.7, 0.7);
                this.GameInfoContainer.position.set(width / 4, 5 * height / 6);
                this.GameInfoContainer.scale.set(1.6);
                this.GameButtonContainer.position.set(3 * width / 4, 5 * height / 6);
                this.GameButtonContainer.scale.set(1.6);
                break;
            default:
                this.GameBoardContainerOne.position.set(width / 6, height / 2);
                this.GameBoardContainerOne.scale.set(FacadeInformation.GridScale);
                this.GameBoardContainerTwo.position.set(3 * width / 6, height / 2);
                this.GameBoardContainerTwo.scale.set(FacadeInformation.GridScale);
                this.GameInfoContainer.position.set(5 * width / 6, height / 4);
                this.GameInfoContainer.scale.set(1);
                this.GameButtonContainer.position.set(5 * width / 6, 3 * height / 4);
                this.GameButtonContainer.scale.set(0.9);
                this.ShipsContainerOne.position.set(width / 6, 30);
                this.ShipsContainerOne.scale.set(0.5);
                this.ShipsContainerTwo.position.set(3 * width / 6, 30);
                this.ShipsContainerTwo.scale.set(0.5);
                break;
        }
    };
    BattleShipFacade.prototype.changeOrientation = function () {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.app.renderer.resize(window.innerWidth, window.innerHeight);
            var width = window.innerWidth;
            var height = window.innerHeight;
            console.log('Orientation : ' + window.orientation);
            switch (window.orientation) {
                case 90:
                    _this.GameBoardContainerOne.position.set(width / 6, height / 2);
                    _this.GameBoardContainerOne.scale.set(FacadeInformation.GridScale);
                    _this.GameBoardContainerTwo.position.set(3 * width / 6, height / 2);
                    _this.GameBoardContainerTwo.scale.set(FacadeInformation.GridScale);
                    _this.GameInfoContainer.position.set(5 * width / 6, height / 4);
                    _this.GameInfoContainer.scale.set(1);
                    _this.GameButtonContainer.position.set(5 * width / 6, 3 * height / 4);
                    _this.GameButtonContainer.scale.set(0.9);
                    _this.ShipsContainerOne.position.set(width / 6, 30);
                    _this.ShipsContainerOne.scale.set(0.5);
                    _this.ShipsContainerTwo.position.set(3 * width / 6, 30);
                    _this.ShipsContainerTwo.scale.set(0.5);
                    break;
                case 0:
                    _this.GameBoardContainerOne.position.set(width / 2, height / 6);
                    _this.GameBoardContainerOne.scale.set(FacadeInformation.GridScale);
                    _this.GameBoardContainerTwo.position.set(width / 2, 3 * height / 6);
                    _this.GameBoardContainerTwo.scale.set(FacadeInformation.GridScale);
                    _this.GameInfoContainer.position.set(width / 4, 5 * height / 6);
                    _this.GameInfoContainer.scale.set(1.6);
                    _this.GameButtonContainer.position.set(3 * width / 4, 5 * height / 6);
                    _this.GameButtonContainer.scale.set(1.6);
                    break;
                default:
                    _this.GameBoardContainerOne.position.set(width / 6, height / 2);
                    _this.GameBoardContainerOne.scale.set(FacadeInformation.GridScale);
                    _this.GameBoardContainerTwo.position.set(3 * width / 6, height / 2);
                    _this.GameBoardContainerTwo.scale.set(FacadeInformation.GridScale);
                    _this.GameInfoContainer.position.set(5 * width / 6, height / 4);
                    _this.GameInfoContainer.scale.set(1);
                    _this.GameButtonContainer.position.set(5 * width / 6, 3 * height / 4);
                    _this.GameButtonContainer.scale.set(0.9);
                    _this.ShipsContainerOne.position.set(width / 6, 30);
                    _this.ShipsContainerOne.scale.set(0.5);
                    _this.ShipsContainerTwo.position.set(3 * width / 6, 30);
                    _this.ShipsContainerTwo.scale.set(0.5);
            }
        });
    };
    return BattleShipFacade;
}(AbstractFacade_1.AbstractFacade));
exports.BattleShipFacade = BattleShipFacade;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractView = (function (_super) {
    __extends(AbstractView, _super);
    function AbstractView(key) {
        var _this = _super.call(this, key) || this;
        _this._multitonKey = key;
        return _this;
    }
    Object.defineProperty(AbstractView.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (key) {
            this._active = key;
        },
        enumerable: true,
        configurable: true
    });
    AbstractView.prototype.initializeView = function () {
        this._container = new PIXI.Container();
    };
    AbstractView.prototype.getUIContainer = function () {
        return this._container;
    };
    AbstractView.prototype.addToContainer = function (item) {
        this._container.addChild(item);
    };
    AbstractView.prototype.setActive = function (active) {
        for (var _i = 0, _a = this._container.children; _i < _a.length; _i++) {
            var item = _a[_i];
            item.visible = active;
            item.interactive = active;
        }
        this._active = active;
    };
    AbstractView.prototype.registerMediator = function (mediator) {
        _super.prototype.registerMediator.call(this, mediator);
    };
    AbstractView.prototype.hasMediator = function (mediatorName) {
        return _super.prototype.hasMediator.call(this, mediatorName);
    };
    AbstractView.prototype.activateUpdate = function () {
    };
    AbstractView.prototype.onClick = function (id) {
    };
    AbstractView.prototype.onAssetsLoaded = function (loader, res) {
    };
    AbstractView.prototype.onConfigLoaded = function (loader, res) {
    };
    return AbstractView;
}(puremvc.View));
exports.AbstractView = AbstractView;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractController_1 = __webpack_require__(5);
var GridController_1 = __webpack_require__(9);
var BattleShipFacade_1 = __webpack_require__(0);
var PlayerController_1 = __webpack_require__(10);
var BattleShipController = (function (_super) {
    __extends(BattleShipController, _super);
    function BattleShipController(key) {
        var _this = _super.call(this, key) || this;
        GridController_1.GridController.getInstance(BattleShipController.GridPlayerOneControllerName, BattleShipFacade_1.FacadeInformation.NumberOfSquaresVertically, BattleShipFacade_1.FacadeInformation.NumberOfSquaresHorizontally, BattleShipFacade_1.FacadeInformation.PlayerOne);
        GridController_1.GridController.getInstance(BattleShipController.GridPlayerTwoControllerName, BattleShipFacade_1.FacadeInformation.NumberOfSquaresVertically, BattleShipFacade_1.FacadeInformation.NumberOfSquaresHorizontally, BattleShipFacade_1.FacadeInformation.PlayerTwo);
        PlayerController_1.PlayerController.getInstance(BattleShipController.PlayerOneControllerName);
        PlayerController_1.PlayerController.getInstance(BattleShipController.PlayerTwoControllerName);
        console.log('BattleShipController created');
        return _this;
    }
    BattleShipController.getInstance = function (key) {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new BattleShipController(key);
        return puremvc.Controller.instanceMap[key];
    };
    BattleShipController.GridPlayerOneControllerName = 'G1';
    BattleShipController.GridPlayerTwoControllerName = 'G2';
    BattleShipController.PlayerOneControllerName = 'P1';
    BattleShipController.PlayerTwoControllerName = 'P2';
    BattleShipController.PlayerOneFinishedPlacingTheShips = 'Player1FBTS';
    BattleShipController.PlayerTwoFinishedPlacingTheShips = 'Player2FBTS';
    BattleShipController.HitText = 'Hit';
    BattleShipController.MissText = 'Miss';
    BattleShipController.StateText = 'Non';
    return BattleShipController;
}(AbstractController_1.AbstractController));
exports.BattleShipController = BattleShipController;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractFacade_1 = __webpack_require__(7);
var AbstractMediator = (function (_super) {
    __extends(AbstractMediator, _super);
    function AbstractMediator(mediatorName, viewComponent) {
        return _super.call(this, mediatorName, viewComponent) || this;
    }
    AbstractMediator.prototype.getViewComponent = function () {
        return _super.prototype.getViewComponent.call(this);
    };
    AbstractMediator.prototype.getMediatorName = function () {
        return _super.prototype.getMediatorName.call(this);
    };
    AbstractMediator.prototype.setViewComponent = function (viewComponent) {
        _super.prototype.setViewComponent.call(this, viewComponent);
    };
    AbstractMediator.prototype.listNotificationInterests = function () {
        return [];
    };
    AbstractMediator.prototype.handleNotification = function (notification) {
        return _super.prototype.handleNotification.call(this, notification);
    };
    AbstractMediator.prototype.onRegister = function () {
        _super.prototype.onRegister.call(this);
    };
    AbstractMediator.prototype.onRemove = function () {
        _super.prototype.onRemove.call(this);
    };
    AbstractMediator.prototype.initializeNotifier = function (key) {
        _super.prototype.initializeNotifier.call(this, key);
    };
    AbstractMediator.prototype.sendNotification = function (name, body, type, arrayOfStrings, arrayOfNumbers, objectReference) {
        var facade = AbstractFacade_1.AbstractFacade.getInstance(this.multitonKey);
        facade.sendNotification(name, body, type, arrayOfStrings, arrayOfNumbers, objectReference);
    };
    return AbstractMediator;
}(puremvc.Mediator));
exports.AbstractMediator = AbstractMediator;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractController = (function (_super) {
    __extends(AbstractController, _super);
    function AbstractController(key) {
        var _this = _super.call(this, key) || this;
        _this.name = 'Controller';
        _this.multitonkey = key;
        return _this;
    }
    AbstractController.prototype.initializeController = function () {
        _super.prototype.initializeController.call(this);
    };
    AbstractController.prototype.executeCommand = function (notification) {
        _super.prototype.executeCommand.call(this, notification);
    };
    AbstractController.prototype.registerCommand = function (notificationName, commandClassRef) {
        _super.prototype.registerCommand.call(this, notificationName, commandClassRef);
    };
    AbstractController.prototype.hasCommand = function (notificationName) {
        return _super.prototype.hasCommand.call(this, notificationName);
    };
    AbstractController.prototype.removeCommand = function (notificationName) {
        _super.prototype.removeCommand.call(this, notificationName);
    };
    Object.defineProperty(AbstractController.prototype, "multitonKey", {
        get: function () {
            return this.multitonkey;
        },
        set: function (key) {
            this.multitonkey = key;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractController;
}(puremvc.Controller));
exports.AbstractController = AbstractController;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BattleShipMediator_1 = __webpack_require__(13);
var AbstractView_1 = __webpack_require__(2);
__webpack_require__(1);
var BattleShipView = (function (_super) {
    __extends(BattleShipView, _super);
    function BattleShipView(key) {
        var _this = _super.call(this, key) || this;
        _this.multitonKey = key;
        _super.prototype.registerMediator.call(_this, new BattleShipMediator_1.BattleShipMediator(key, _this));
        return _this;
    }
    BattleShipView.prototype.initializeView = function () {
        _super.prototype.initializeView.call(this);
        console.log('BattleShipView created');
    };
    BattleShipView.getInstance = function (key) {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new BattleShipView(key);
        return puremvc.View.instanceMap[key];
    };
    BattleShipView.PlayerOneGridContainer = 0;
    BattleShipView.PlayerTwoGridContainer = 1;
    BattleShipView.GameInfoContainer = 3;
    BattleShipView.GameButtonContainer = 4;
    BattleShipView.PlayerOneShipsContainer = 5;
    BattleShipView.PlayerTwoShipsContainer = 6;
    return BattleShipView;
}(AbstractView_1.AbstractView));
exports.BattleShipView = BattleShipView;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractNotification_1 = __webpack_require__(14);
var AbstractFacade = (function (_super) {
    __extends(AbstractFacade, _super);
    function AbstractFacade(key) {
        var _this = _super.call(this, key) || this;
        _this.multitonKey = key;
        return _this;
    }
    AbstractFacade.prototype.notifyObservers = function (notification) {
        if (this.view)
            this.view.notifyObservers(notification);
    };
    AbstractFacade.prototype.sendNotification = function (name, body, type, arrayOfStrings, arrayOfNumbers, objectReference) {
        this.notifyObservers(new AbstractNotification_1.AbstractNotification(name, body, type, arrayOfStrings, arrayOfNumbers, objectReference));
    };
    AbstractFacade.prototype.registerCommand = function (notificationName, commandClassRef) {
        _super.prototype.registerCommand.call(this, notificationName, commandClassRef);
    };
    AbstractFacade.prototype.registerProxy = function (proxy) {
        _super.prototype.registerProxy.call(this, proxy);
    };
    AbstractFacade.prototype.retrieveProxy = function (proxyName) {
        return _super.prototype.retrieveProxy.call(this, proxyName);
    };
    AbstractFacade.prototype.registerMediator = function (mediator) {
        _super.prototype.registerMediator.call(this, mediator);
    };
    AbstractFacade.prototype.retrieveMediator = function (mediatorName) {
        return _super.prototype.retrieveMediator.call(this, mediatorName);
    };
    AbstractFacade.prototype.hasMediator = function (mediatorName) {
        return _super.prototype.hasMediator.call(this, mediatorName);
    };
    return AbstractFacade;
}(puremvc.Facade));
exports.AbstractFacade = AbstractFacade;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
var AbstractFacade_1 = __webpack_require__(7);
var AbstractCommand = (function (_super) {
    __extends(AbstractCommand, _super);
    function AbstractCommand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Command';
        return _this;
    }
    AbstractCommand.prototype.execute = function (notification) {
        _super.prototype.execute.call(this, notification);
    };
    AbstractCommand.prototype.initializeNotifier = function (key) {
        _super.prototype.initializeNotifier.call(this, key);
    };
    AbstractCommand.prototype.sendNotification = function (name, body, type, arrayOfStrings, arrayOfNumbers, objectReference) {
        var facade = AbstractFacade_1.AbstractFacade.getInstance(this.multitonKey);
        facade.sendNotification(name, body, type, arrayOfStrings, arrayOfNumbers, objectReference);
    };
    ;
    return AbstractCommand;
}(puremvc.SimpleCommand));
exports.AbstractCommand = AbstractCommand;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractController_1 = __webpack_require__(5);
var SquareController_1 = __webpack_require__(12);
var GridController = (function (_super) {
    __extends(GridController, _super);
    function GridController(key, numberOfSquaresVertically, numberOfSquaresHorizontally, player) {
        var _this = _super.call(this, key) || this;
        _this.GridSquares = [];
        _this.numberOfSquaresHorizontally = numberOfSquaresHorizontally;
        _this.numberOfSquaresVertically = numberOfSquaresVertically;
        _this._player = player;
        _this.createGridSquares();
        return _this;
    }
    GridController.getInstance = function (key, numberOfSquaresVertically, numberOfSquaresHorizontally, player) {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new GridController(key, numberOfSquaresHorizontally, numberOfSquaresVertically, player);
        return puremvc.Controller.instanceMap[key];
    };
    GridController.prototype.createGridSquares = function () {
        for (var i = 0; i < this.numberOfSquaresVertically; i++) {
            this.GridSquares[i] = [];
            for (var j = 0; j < this.numberOfSquaresHorizontally; j++) {
                this.GridSquares[i][j] = SquareController_1.SquareController.getInstance(GridController.SquareControllerKey + '' + i + j + this.multitonKey);
            }
        }
    };
    GridController.prototype.logGridSquares = function () {
        for (var i = 0; i < this.numberOfSquaresVertically; i++) {
            var printArray = [];
            for (var j = 0; j < this.numberOfSquaresHorizontally; j++) {
                printArray.push(this.GridSquares[i][j].printSquareState());
            }
            console.log(printArray);
        }
    };
    GridController.prototype.updatePosition = function (position, player) {
        console.log('asdads' + player);
        if (player == this._player) {
            this.GridSquares[position[0]][position[1]].squareHit();
            this.logGridSquares();
        }
    };
    GridController.SquareControllerKey = 'SquareControllerGG';
    return GridController;
}(AbstractController_1.AbstractController));
exports.GridController = GridController;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractController_1 = __webpack_require__(5);
var BattleShipFacade_1 = __webpack_require__(0);
var BattleShipController_1 = __webpack_require__(3);
var PlayerController = (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController(key) {
        var _this = _super.call(this, key) || this;
        _this._shipsPlaced = 0;
        _this._player = key;
        console.log('PlayerController created');
        return _this;
    }
    PlayerController.getInstance = function (key) {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new PlayerController(key);
        return puremvc.Controller.instanceMap[key];
    };
    PlayerController.prototype.updateNumberOfShipsPlaced = function () {
        if (this._shipsPlaced <= BattleShipFacade_1.FacadeInformation.MaximumNumberOfShipsOnAGrid) {
            this._shipsPlaced++;
            console.log('Ships placed in PlayerController' + this._shipsPlaced);
        }
    };
    PlayerController.prototype.shipsPlacementFinished = function () {
        var facade = BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey);
        facade.sendNotification(BattleShipController_1.BattleShipController.PlayerOneFinishedPlacingTheShips, '');
    };
    return PlayerController;
}(AbstractController_1.AbstractController));
exports.PlayerController = PlayerController;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BattleShipFacade_1 = __webpack_require__(0);
new (function () {
    function Main() {
        this.myFacade = BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey);
    }
    ;
    return Main;
}());


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractController_1 = __webpack_require__(5);
var BattleShipController_1 = __webpack_require__(3);
var SquareController = (function (_super) {
    __extends(SquareController, _super);
    function SquareController(key) {
        var _this = _super.call(this, key) || this;
        _this.hit = BattleShipController_1.BattleShipController.HitText;
        _this.miss = BattleShipController_1.BattleShipController.MissText;
        _this.squareState = BattleShipController_1.BattleShipController.StateText;
        return _this;
    }
    SquareController.prototype.printSquareState = function () {
        return this.squareState;
    };
    SquareController.prototype.squareHit = function () {
        this.squareState = this.hit;
    };
    SquareController.prototype.squareMiss = function () {
        this.squareState = this.miss;
    };
    SquareController.getInstance = function (key) {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new SquareController(key);
        return puremvc.Controller.instanceMap[key];
    };
    return SquareController;
}(AbstractController_1.AbstractController));
exports.SquareController = SquareController;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
var AbstractMediator_1 = __webpack_require__(4);
var BattleShipMediator = (function (_super) {
    __extends(BattleShipMediator, _super);
    function BattleShipMediator(mediatorName, viewComponent) {
        var _this = _super.call(this, mediatorName, viewComponent) || this;
        _this.name = 'BattleShipMediator';
        console.log('   # ' + _this.name + ' created');
        return _this;
    }
    BattleShipMediator.prototype.listNotificationInterests = function () {
        return [];
    };
    BattleShipMediator.prototype.handleNotification = function (notification) {
        var name = notification.name;
    };
    return BattleShipMediator;
}(AbstractMediator_1.AbstractMediator));
exports.BattleShipMediator = BattleShipMediator;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractNotification = (function (_super) {
    __extends(AbstractNotification, _super);
    function AbstractNotification(name, body, type, arrayOfStrings, arrayOfNumbers, objectReference) {
        var _this = _super.call(this, name, body, type) || this;
        _this.arrayOfStrings = [];
        _this.arrayOfNumbers = [];
        _this.objectReference = objectReference;
        _this.arrayOfStrings = arrayOfStrings;
        _this.arrayOfNumbers = arrayOfNumbers;
        return _this;
    }
    AbstractNotification.prototype.getName = function () {
        return _super.prototype.getName.call(this);
    };
    AbstractNotification.prototype.setBody = function (body) {
        _super.prototype.setBody.call(this, body);
    };
    AbstractNotification.prototype.getBody = function () {
        return _super.prototype.getBody.call(this);
    };
    AbstractNotification.prototype.setType = function (type) {
        _super.prototype.setType.call(this, type);
    };
    AbstractNotification.prototype.getType = function () {
        return _super.prototype.getType.call(this);
    };
    AbstractNotification.prototype.toString = function () {
        return _super.prototype.toString.call(this);
    };
    AbstractNotification.prototype.getObjectReference = function () {
        return this.objectReference;
    };
    AbstractNotification.prototype.setObjectReference = function (objectReference) {
        this.objectReference = objectReference;
    };
    AbstractNotification.prototype.getArrayOfStrings = function () {
        return this.arrayOfStrings;
    };
    AbstractNotification.prototype.getArrayOfNumbers = function () {
        return this.arrayOfNumbers;
    };
    return AbstractNotification;
}(puremvc.Notification));
exports.AbstractNotification = AbstractNotification;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractView_1 = __webpack_require__(2);
var SquareView_1 = __webpack_require__(16);
var BattleShipFacade_1 = __webpack_require__(0);
var RulerView_1 = __webpack_require__(19);
__webpack_require__(1);
var GridView = (function (_super) {
    __extends(GridView, _super);
    function GridView(key, player) {
        var _this = _super.call(this, key) || this;
        _this.RulerName = 'RulerForTheGrid';
        _this.name = 'GridView';
        _this.maxShipsOnThisGrid = BattleShipFacade_1.FacadeInformation.MaximumNumberOfShipsOnAGrid;
        _this.currentNumberOfShips = 0;
        _this.name = _this.name.concat(player);
        _this._player = player;
        switch (_this._player) {
            case BattleShipFacade_1.FacadeInformation.PlayerOne:
                _this.createBoard(BattleShipFacade_1.FacadeInformation.Grid1XPosition, BattleShipFacade_1.FacadeInformation.Grid1YPosition, BattleShipFacade_1.FacadeInformation.SquareWidth, BattleShipFacade_1.FacadeInformation.NumberOfSquaresVertically, BattleShipFacade_1.FacadeInformation.NumberOfSquaresHorizontally, BattleShipFacade_1.FacadeInformation.Grid1BorderColor, BattleShipFacade_1.FacadeInformation.GridSquareFillColor);
                _this.createRuler(BattleShipFacade_1.FacadeInformation.Grid1XPosition, BattleShipFacade_1.FacadeInformation.Grid1YPosition, BattleShipFacade_1.FacadeInformation.NumberOfSquaresVertically, BattleShipFacade_1.FacadeInformation.NumberOfSquaresHorizontally, BattleShipFacade_1.FacadeInformation.SquareWidth, BattleShipFacade_1.FacadeInformation.Grid1BorderColor, BattleShipFacade_1.FacadeInformation.RulerTextColor);
                break;
            case BattleShipFacade_1.FacadeInformation.PlayerTwo:
                _this.createBoard(BattleShipFacade_1.FacadeInformation.Grid2XPosition, BattleShipFacade_1.FacadeInformation.Grid2YPosition, BattleShipFacade_1.FacadeInformation.SquareWidth, BattleShipFacade_1.FacadeInformation.NumberOfSquaresVertically, BattleShipFacade_1.FacadeInformation.NumberOfSquaresHorizontally, BattleShipFacade_1.FacadeInformation.Grid2BorderColor, BattleShipFacade_1.FacadeInformation.GridSquareFillColor);
                _this.createRuler(BattleShipFacade_1.FacadeInformation.Grid2XPosition, BattleShipFacade_1.FacadeInformation.Grid2YPosition, BattleShipFacade_1.FacadeInformation.NumberOfSquaresVertically, BattleShipFacade_1.FacadeInformation.NumberOfSquaresHorizontally, BattleShipFacade_1.FacadeInformation.SquareWidth, BattleShipFacade_1.FacadeInformation.Grid2BorderColor, BattleShipFacade_1.FacadeInformation.RulerTextColor);
                break;
        }
        console.log('   # ' + _this.name + ' created');
        return _this;
    }
    GridView.prototype.initializeView = function () {
        _super.prototype.initializeView.call(this);
    };
    GridView.getInstance = function (key, player) {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new GridView(key, player);
        return puremvc.View.instanceMap[key];
    };
    GridView.prototype.getUIContainer = function () {
        this._container.pivot.x = this._container.width / 2;
        this._container.pivot.y = this._container.height / 2;
        return _super.prototype.getUIContainer.call(this);
    };
    GridView.prototype.fillGridWithBattleShip = function (position, shipInfo) {
        var gridDimensions = this.getUIContainer().getBounds();
        var xPosition = position[0];
        var yPosition = position[1];
        var newShipInfo = shipInfo.split(',');
        console.log(shipInfo);
        console.log('Coordinates received ' + [xPosition, yPosition]);
        var squareWidth = BattleShipFacade_1.FacadeInformation.SquareWidth * BattleShipFacade_1.FacadeInformation.GridScale;
        if ((xPosition > gridDimensions.x) && (xPosition < gridDimensions.x + gridDimensions.width)) {
            if ((yPosition > gridDimensions.y) && (yPosition < gridDimensions.y + gridDimensions.height)) {
                for (var i = 0; i < BattleShipFacade_1.FacadeInformation.NumberOfSquaresVertically; i++) {
                    for (var j = 0; j < BattleShipFacade_1.FacadeInformation.NumberOfSquaresHorizontally; j++) {
                        var squareXPosition = this.GridSquares[i][j].getPosition()[0];
                        var squareYPosition = this.GridSquares[i][j].getPosition()[1];
                        var facade = BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey);
                        if ((xPosition >= squareXPosition && xPosition < squareXPosition + squareWidth) &&
                            (yPosition >= squareYPosition && yPosition < squareYPosition + squareWidth)) {
                            if (newShipInfo[0] == BattleShipFacade_1.FacadeInformation.ShipHorizontalType) {
                                var numberOfSquares = Math.round(position[2] / BattleShipFacade_1.FacadeInformation.SquareWidth);
                                for (var x = j; x < j + numberOfSquares; x++) {
                                    if (this.currentNumberOfShips <= this.maxShipsOnThisGrid + 1) {
                                        this.GridSquares[i][x].fillSquare();
                                    }
                                    else {
                                        facade.sendNotification(BattleShipFacade_1.MediatorNotifications.TextUpdate, BattleShipFacade_1.TextErrors.MaximumNumberOfShipReached, this._player);
                                    }
                                }
                                this.currentNumberOfShips++;
                            }
                            else if (newShipInfo[0] == BattleShipFacade_1.FacadeInformation.ShipVerticalType) {
                                var numberOfSquares = Math.round(position[3] / BattleShipFacade_1.FacadeInformation.SquareWidth);
                                for (var x = i; x < i + numberOfSquares; x++) {
                                    if (this.currentNumberOfShips <= this.maxShipsOnThisGrid + 1) {
                                        this.GridSquares[x][j].fillSquare();
                                    }
                                    else {
                                        facade.sendNotification(BattleShipFacade_1.MediatorNotifications.TextUpdate, BattleShipFacade_1.TextErrors.MaximumNumberOfShipReached, this._player);
                                    }
                                }
                                this.currentNumberOfShips++;
                            }
                            console.log('GridSquare coordinates : ' + [squareXPosition, squareYPosition] +
                                '\n Index : ' + [i, j]);
                        }
                    }
                }
            }
        }
    };
    GridView.prototype.createBoard = function (gridXPosition, gridYPosition, squareWidth, numberOfSquaresVertically, numberOfSquaresHorizontally, gridBorderColor, gridSquareFillColor) {
        var newXPosition, newYPosition = gridYPosition, square, key = 0;
        this.GridSquares = [];
        for (var i = 0; i < numberOfSquaresVertically; i++) {
            this.GridSquares[i] = [];
            newXPosition = gridXPosition;
            for (var j = 0; j < numberOfSquaresHorizontally; j++) {
                key++;
                square = SquareView_1.SquareView.getInstance('Square' + key + Math.random(), newXPosition + j * squareWidth, newYPosition, squareWidth, gridBorderColor, gridSquareFillColor, j, i);
                this.GridSquares[i][j] = square;
            }
            newYPosition += squareWidth;
        }
        for (var i = 0; i < numberOfSquaresVertically; i++)
            for (var j = 0; j < numberOfSquaresHorizontally; j++)
                this._container.addChild(this.GridSquares[i][j].getUIContainer());
        console.log('   # GridSquares created');
    };
    GridView.prototype.createRuler = function (xPosition, yPosition, numberOfSquaresVertically, numberOfSquaresHorizontally, squareWidth, gridBorderColor, rulerTextColor) {
        var rulerView = RulerView_1.RulerView.getInstance(this.RulerName + '' + Math.random(), xPosition, yPosition, numberOfSquaresVertically, numberOfSquaresHorizontally, squareWidth, gridBorderColor, rulerTextColor);
        this._container.addChild(rulerView.getUIContainer());
    };
    GridView.prototype.hasSquare = function (squareView) {
        for (var i = 0; i < BattleShipFacade_1.FacadeInformation.NumberOfSquaresVertically; i++) {
            for (var j = 0; j < BattleShipFacade_1.FacadeInformation.NumberOfSquaresHorizontally; j++) {
                if (this.GridSquares[i][j] === squareView)
                    return true;
            }
        }
        return false;
    };
    return GridView;
}(AbstractView_1.AbstractView));
exports.GridView = GridView;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var HitView_1 = __webpack_require__(17);
var MissView_1 = __webpack_require__(18);
var BattleShipFacade_1 = __webpack_require__(0);
var AbstractView_1 = __webpack_require__(2);
var SquareView = (function (_super) {
    __extends(SquareView, _super);
    function SquareView(key, squareXPosition, squareYPosition, squareWidth, borderColor, fillColor, horizontalIndex, verticalIndex) {
        var _this = _super.call(this, key) || this;
        _this.squareEvent = 'pointertap';
        _this.handleMouseOver = function () {
            _this.squareGlow.visible = true;
        };
        _this.handleMouseOut = function () {
            _this.squareGlow.visible = false;
        };
        _this.x = squareXPosition;
        _this.y = squareYPosition;
        _this.width = squareWidth;
        _this.borderColor = borderColor;
        _this.fillColor = fillColor;
        _this.horizontalIndex = horizontalIndex;
        _this.verticalIndex = verticalIndex;
        _this.squareGraphics = new PIXI.Graphics();
        _this.squareMarking = new PIXI.Graphics();
        _this.squareGlow = new PIXI.Graphics();
        _this.shipSquare = new PIXI.Graphics();
        _this.squareGraphics.lineStyle(7, _this.borderColor, 1);
        _this.squareGraphics.beginFill(_this.fillColor);
        _this.squareGraphics.drawRect(_this.x, _this.y, _this.width, _this.width);
        _this.squareGraphics.endFill();
        _this.squareGlow.lineStyle(1, 0xff0000, 0.2);
        _this.squareGlow.beginFill(0xff0100, 0.2);
        _this.squareGlow.drawRect(_this.x + 5, _this.y + 5, _this.width - 5, _this.width - 5);
        _this.squareGlow.endFill();
        _this.squareGlow.visible = false;
        _this.hitView = HitView_1.HitView.getInstance(Math.random() + '', _this.x, _this.y, _this.width);
        _this.hitView.setActive(false);
        _this.missView = MissView_1.MissView.getInstance(Math.random() + '', _this.x, _this.y, _this.width);
        _this.missView.setActive(true);
        _this.squareMarking.addChild(_this.hitView.getUIContainer());
        _this.squareGraphics.interactive = true;
        _this.squareGraphics.buttonMode = true;
        _this.shipSquare.lineStyle(0, BattleShipFacade_1.FacadeInformation.SquareFillColor);
        _this.shipSquare.beginFill(BattleShipFacade_1.FacadeInformation.SquareFillColor, 0.6);
        _this.shipSquare.drawRect(_this.x + 5, _this.y + 5, _this.width - 5, _this.width - 5);
        _this.shipSquare.endFill();
        _this.shipSquare.visible = false;
        _this.addToContainer(_this.squareGraphics);
        _this.addToContainer(_this.squareMarking);
        _this.addToContainer(_this.squareGlow);
        _this.addToContainer(_this.shipSquare);
        _this.initializeSquareInteraction();
        return _this;
    }
    SquareView.prototype.initializeView = function () {
        _super.prototype.initializeView.call(this);
    };
    SquareView.getInstance = function (key, squareXPosition, squareYPosition, squareWidth, borderColor, fillColor, horizontalIndex, verticalIndex) {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new SquareView(key, squareXPosition, squareYPosition, squareWidth, borderColor, fillColor, horizontalIndex, verticalIndex);
        return puremvc.View.instanceMap[key];
    };
    SquareView.prototype.initializeSquareInteraction = function () {
        this.squareGraphics
            .on(this.squareEvent, this.handleMouseDown, this)
            .on('pointerover', this.handleMouseOver)
            .on('pointerout', this.handleMouseOut);
    };
    SquareView.prototype.getPosition = function () {
        return [this.squareGraphics.getBounds().x, this.squareGraphics.getBounds().y];
    };
    SquareView.prototype.handleMouseDown = function () {
        this.hit();
        BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey)
            .sendNotification(BattleShipFacade_1.MediatorNotifications.SquareClickRequest, undefined, undefined, undefined, [this.verticalIndex, this.horizontalIndex], this);
    };
    SquareView.prototype.hit = function () {
        this.hitView.setActive(true);
        this.disableInteraction();
    };
    SquareView.prototype.miss = function () {
        this.missView.setActive(true);
        this.disableInteraction();
    };
    SquareView.prototype.fillSquare = function () {
        this.shipSquare.visible = true;
        this.disableInteraction();
    };
    SquareView.prototype.disableInteraction = function () {
        this.squareGraphics.interactive = false;
        this.squareGlow.interactive = false;
        this.squareMarking.interactive = false;
    };
    return SquareView;
}(AbstractView_1.AbstractView));
exports.SquareView = SquareView;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractView_1 = __webpack_require__(2);
var BattleShipFacade_1 = __webpack_require__(0);
var HitView = (function (_super) {
    __extends(HitView, _super);
    function HitView(key, squareXPosition, squareYPosition, squareWidth) {
        var _this = _super.call(this, key) || this;
        _this.graphics = new PIXI.Graphics();
        _this.graphics.lineStyle(10, BattleShipFacade_1.FacadeInformation.HitColor);
        _this.graphics.moveTo(squareXPosition + squareWidth / 3, squareYPosition + squareWidth - squareWidth / 3);
        _this.graphics.lineTo(squareXPosition + squareWidth - squareWidth / 3, squareYPosition + squareWidth / 3);
        _this.graphics.moveTo(squareXPosition + squareWidth / 3, squareYPosition + squareWidth / 3);
        _this.graphics.lineTo(squareXPosition + squareWidth - squareWidth / 3, squareYPosition + squareWidth - squareWidth / 3);
        _this.addToContainer(_this.graphics);
        return _this;
    }
    HitView.getInstance = function (key, squareXPosition, squareYPosition, squareWidth) {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new HitView(key, squareXPosition, squareYPosition, squareWidth);
        return puremvc.View.instanceMap[key];
    };
    return HitView;
}(AbstractView_1.AbstractView));
exports.HitView = HitView;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractView_1 = __webpack_require__(2);
var BattleShipFacade_1 = __webpack_require__(0);
var MissView = (function (_super) {
    __extends(MissView, _super);
    function MissView(key, squareXPosition, squareYPosition, squareWidth) {
        var _this = _super.call(this, key) || this;
        _this.graphics = new PIXI.Graphics();
        _this.graphics.lineStyle(8, BattleShipFacade_1.FacadeInformation.MissColor);
        _this.graphics.drawCircle(squareXPosition + squareWidth / 2, squareYPosition + squareWidth / 2, squareWidth / 3.9);
        _this.addToContainer(_this.graphics);
        return _this;
    }
    MissView.getInstance = function (key, squareXPosition, squareYPosition, squareWidth) {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new MissView(key, squareXPosition, squareYPosition, squareWidth);
        return puremvc.View.instanceMap[key];
    };
    return MissView;
}(AbstractView_1.AbstractView));
exports.MissView = MissView;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RulerSquare_1 = __webpack_require__(20);
var AbstractView_1 = __webpack_require__(2);
var RulerView = (function (_super) {
    __extends(RulerView, _super);
    function RulerView(key, xPosition, yPosition, numberOfSquaresVertically, numberOfSquaresHorizontally, squareWidth, borderColor, textColor) {
        var _this = _super.call(this, key) || this;
        _this.name = 'Ruler';
        _this.RulerType = ['NUMBER',
            'LETTER'];
        _this.xPosition = xPosition;
        _this.yPosition = yPosition;
        _this.numberOfSquaresVertically = numberOfSquaresVertically;
        _this.numberOfSquaresHorizontally = numberOfSquaresHorizontally;
        _this.squareWidth = squareWidth;
        _this.borderColor = borderColor;
        _this.textColor = textColor;
        _this.createRulerVertically();
        _this.createRulerHorizontally();
        return _this;
    }
    RulerView.prototype.initializeView = function () {
        _super.prototype.initializeView.call(this);
        console.log('   # RulerView created');
    };
    RulerView.getInstance = function (key, xPosition, yPosition, numberOfSquaresVertically, numberOfSquaresHorizontally, squareWidth, borderColor, textColor) {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new RulerView(key, xPosition, yPosition, numberOfSquaresVertically, numberOfSquaresHorizontally, squareWidth, borderColor, textColor);
        return puremvc.View.instanceMap[key];
    };
    RulerView.prototype.createRulerHorizontally = function () {
        for (var i = 0; i < this.numberOfSquaresHorizontally; i++) {
            var rulerSquare = RulerSquare_1.RulerSquare.getInstance(700 * Math.random() + i + '', this.xPosition + i * this.squareWidth, this.yPosition + this.numberOfSquaresVertically * this.squareWidth, this.squareWidth, this.borderColor, this.textColor, this.RulerType[0], i + 1);
            this._container.addChild(rulerSquare.getUIContainer());
        }
    };
    RulerView.prototype.createRulerVertically = function () {
        for (var i = 0; i < this.numberOfSquaresVertically; i++) {
            var rulerSquare = RulerSquare_1.RulerSquare.getInstance(300 * Math.random() + i + '', this.xPosition - this.squareWidth, this.yPosition + i * this.squareWidth, this.squareWidth, this.borderColor, this.textColor, this.RulerType[1], 65 + i);
            this._container.addChild(rulerSquare.getUIContainer());
        }
    };
    return RulerView;
}(AbstractView_1.AbstractView));
exports.RulerView = RulerView;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractView_1 = __webpack_require__(2);
var RulerSquare = (function (_super) {
    __extends(RulerSquare, _super);
    function RulerSquare(key, xPosition, yPosition, squareWidth, borderColor, textColor, type, asciiCode) {
        var _this = _super.call(this, key) || this;
        _this._container = new PIXI.Container();
        var graphics = new PIXI.Graphics();
        graphics.lineStyle(8, borderColor);
        graphics.beginFill(0xffffff);
        graphics.drawRect(xPosition, yPosition, squareWidth, squareWidth);
        graphics.endFill();
        var text;
        if (type === 'LETTER') {
            text = new PIXI.Text(String.fromCharCode(asciiCode), { fill: textColor });
            text.anchor.set(0.5);
            text.position.set(xPosition + squareWidth / 2, yPosition + squareWidth / 2);
        }
        else if (type === 'NUMBER') {
            text = new PIXI.Text(asciiCode.toString(), { fill: textColor });
            text.anchor.set(0.5);
            text.position.set(xPosition + squareWidth / 2, yPosition + squareWidth / 2);
        }
        _this._container.addChild(graphics, text);
        return _this;
    }
    RulerSquare.getInstance = function (key, xPosition, yPosition, squareWidth, borderColor, textColor, type, asciiCode) {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new RulerSquare(key, xPosition, yPosition, squareWidth, borderColor, textColor, type, asciiCode);
        return puremvc.View.instanceMap[key];
    };
    return RulerSquare;
}(AbstractView_1.AbstractView));
exports.RulerSquare = RulerSquare;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractView_1 = __webpack_require__(2);
var TextView = (function (_super) {
    __extends(TextView, _super);
    function TextView(key, text, fontSize, color) {
        var _this = _super.call(this, key) || this;
        _this.text = new PIXI.Text(text, { fontSize: fontSize, fill: color });
        _this.text.anchor.set(0.5, 0.5);
        return _this;
    }
    TextView.prototype.initializeView = function () {
        _super.prototype.initializeView.call(this);
    };
    TextView.prototype.addText = function (text) {
        this.text.text += '\n' + text;
    };
    TextView.getInstance = function (key, text, fontSize, color) {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new TextView(key, text, fontSize, color);
        return puremvc.View.instanceMap[key];
    };
    TextView.prototype.getUIContainer = function () {
        return this.text;
    };
    return TextView;
}(AbstractView_1.AbstractView));
exports.TextView = TextView;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractView_1 = __webpack_require__(2);
var ButtonView = (function (_super) {
    __extends(ButtonView, _super);
    function ButtonView(key, xPosition, yPosition, scale) {
        var _this = _super.call(this, key) || this;
        _this.xPosition = xPosition;
        _this.yPosition = yPosition;
        _this.scale = scale;
        _this.sprite = PIXI.Sprite.fromImage('images/NextPhaseButton.png');
        _this.sprite.scale.set(_this.scale);
        _this._container.addChild(_this.sprite);
        _this.initializeButtonInteraction();
        console.log('   # ButtonView created');
        return _this;
    }
    ButtonView.getInstance = function (key, xPosition, yPosition, scale) {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new ButtonView(key, xPosition, yPosition, scale);
        return puremvc.View.instanceMap[key];
    };
    ButtonView.prototype.initializeView = function () {
        _super.prototype.initializeView.call(this);
    };
    ButtonView.prototype.getUIContainer = function () {
        this._container.pivot.x = this._container.width / 2;
        this._container.pivot.y = this._container.height / 2;
        return _super.prototype.getUIContainer.call(this);
    };
    ButtonView.prototype.initializeButtonInteraction = function () {
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
    };
    return ButtonView;
}(AbstractView_1.AbstractView));
exports.ButtonView = ButtonView;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCommand_1 = __webpack_require__(8);
var GridController_1 = __webpack_require__(9);
var BattleShipController_1 = __webpack_require__(3);
var SquareClickCommand = (function (_super) {
    __extends(SquareClickCommand, _super);
    function SquareClickCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SquareClickCommand.prototype.execute = function (notification) {
        console.log('SquareClick Handle Request');
        var player = notification.getBody();
        console.log(player);
        GridController_1.GridController.getInstance(BattleShipController_1.BattleShipController.GridPlayerOneControllerName).updatePosition(notification.getArrayOfNumbers(), player);
    };
    return SquareClickCommand;
}(AbstractCommand_1.AbstractCommand));
exports.SquareClickCommand = SquareClickCommand;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCommand_1 = __webpack_require__(8);
__webpack_require__(1);
var ButtonPressCommand = (function (_super) {
    __extends(ButtonPressCommand, _super);
    function ButtonPressCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonPressCommand.prototype.execute = function (notification) {
        console.log('ButtonPress Handle Request');
    };
    return ButtonPressCommand;
}(AbstractCommand_1.AbstractCommand));
exports.ButtonPressCommand = ButtonPressCommand;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BattleShipFacade_1 = __webpack_require__(0);
__webpack_require__(1);
var AbstractMediator_1 = __webpack_require__(4);
var BattleShipView_1 = __webpack_require__(6);
var ButtonViewMediator = (function (_super) {
    __extends(ButtonViewMediator, _super);
    function ButtonViewMediator(key, viewComponent) {
        if (viewComponent === void 0) { viewComponent = null; }
        var _this = _super.call(this, name, viewComponent) || this;
        _this.name = 'ButtonViewMediator';
        _this.buttonViewName = 'ButtonView';
        var containersList = [];
        containersList.push(_super.prototype.getViewComponent.call(_this).getUIContainer());
        BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, BattleShipView_1.BattleShipView.GameButtonContainer);
        console.log('   # ' + _this.name + ' created');
        return _this;
    }
    ButtonViewMediator.prototype.listNotificationInterests = function () {
        return [];
    };
    ButtonViewMediator.prototype.handleNotification = function (notification) {
        var name = notification.name;
    };
    ButtonViewMediator.prototype.onRegister = function () {
    };
    return ButtonViewMediator;
}(AbstractMediator_1.AbstractMediator));
exports.ButtonViewMediator = ButtonViewMediator;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
var BattleShipFacade_1 = __webpack_require__(0);
var AbstractMediator_1 = __webpack_require__(4);
var GridViewMediator = (function (_super) {
    __extends(GridViewMediator, _super);
    function GridViewMediator(mediatorName, viewComponent, player) {
        var _this = _super.call(this, mediatorName, viewComponent) || this;
        _this._player = player;
        var containersList = [];
        containersList.push(_super.prototype.getViewComponent.call(_this).getUIContainer());
        BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, +player - 1);
        console.log('   # ' + _super.prototype.getMediatorName.call(_this) + ' created');
        return _this;
    }
    GridViewMediator.prototype.listNotificationInterests = function () {
        return [BattleShipFacade_1.MediatorNotifications.GridShipMarking,
            BattleShipFacade_1.MediatorNotifications.Test,
            BattleShipFacade_1.MediatorNotifications.SquareClickRequest];
    };
    GridViewMediator.prototype.handleNotification = function (notification) {
        switch (notification.getName()) {
            case BattleShipFacade_1.MediatorNotifications.GridShipMarking:
                var shipPositionInfo = notification.getArrayOfNumbers();
                _super.prototype.getViewComponent.call(this).fillGridWithBattleShip(shipPositionInfo, notification.getType());
                break;
            case BattleShipFacade_1.MediatorNotifications.SquareClickRequest:
                var square = notification.getObjectReference();
                if (_super.prototype.getViewComponent.call(this).hasSquare(square)) {
                    var squareClickCoordinates = notification.getArrayOfNumbers();
                    _super.prototype.sendNotification.call(this, BattleShipFacade_1.CommandNotifications.SquareClickNotification, this._player, undefined, undefined, squareClickCoordinates);
                }
                break;
            case BattleShipFacade_1.MediatorNotifications.Test:
                console.log(notification.getArrayOfStrings());
                break;
        }
    };
    return GridViewMediator;
}(AbstractMediator_1.AbstractMediator));
exports.GridViewMediator = GridViewMediator;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
var BattleShipFacade_1 = __webpack_require__(0);
var AbstractMediator_1 = __webpack_require__(4);
var BattleShipView_1 = __webpack_require__(6);
var TextViewMediator = (function (_super) {
    __extends(TextViewMediator, _super);
    function TextViewMediator(mediatorName, viewComponent) {
        var _this = _super.call(this, mediatorName, viewComponent) || this;
        _this.name = 'TextViewMediator';
        _this.count = [0, 0];
        var containersList = [];
        containersList.push(_super.prototype.getViewComponent.call(_this).getUIContainer());
        BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, BattleShipView_1.BattleShipView.GameInfoContainer);
        console.log('   # ' + _this.name + ' created');
        return _this;
    }
    TextViewMediator.prototype.listNotificationInterests = function () {
        return [BattleShipFacade_1.MediatorNotifications.TextUpdate];
    };
    TextViewMediator.prototype.addTextToTheView = function (text) {
        _super.prototype.getViewComponent.call(this).addText(text);
    };
    TextViewMediator.prototype.handleNotification = function (notification) {
        switch (notification.getName()) {
            case BattleShipFacade_1.MediatorNotifications.TextUpdate:
                var gridNumber = +notification.getType();
                switch (gridNumber) {
                    case BattleShipFacade_1.FacadeInformation.PlayerOne:
                        if (this.count[0] <= 0) {
                            this.addTextToTheView(notification.getBody() + ' \nfor Player' + gridNumber);
                            this.count[0]++;
                        }
                        break;
                    case BattleShipFacade_1.FacadeInformation.PlayerTwo:
                        if (this.count[1] <= 0) {
                            this.addTextToTheView(notification.getBody() + ' \nfor Player' + gridNumber);
                            this.count[1]++;
                        }
                        break;
                }
                break;
        }
    };
    return TextViewMediator;
}(AbstractMediator_1.AbstractMediator));
exports.TextViewMediator = TextViewMediator;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
var BattleShipFacade_1 = __webpack_require__(0);
var AbstractMediator_1 = __webpack_require__(4);
var BattleShipView_1 = __webpack_require__(6);
var BundleShipViewMediator = (function (_super) {
    __extends(BundleShipViewMediator, _super);
    function BundleShipViewMediator(mediatorName, viewComponent, player) {
        var _this = _super.call(this, mediatorName, viewComponent) || this;
        _this._player = player;
        var containersList = [];
        containersList.push(_super.prototype.getViewComponent.call(_this).getUIContainer());
        if (player == BattleShipFacade_1.FacadeInformation.PlayerOne) {
            BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, BattleShipView_1.BattleShipView.PlayerOneShipsContainer);
        }
        else if (player == BattleShipFacade_1.FacadeInformation.PlayerTwo) {
            BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, BattleShipView_1.BattleShipView.PlayerTwoShipsContainer);
        }
        console.log('   # ' + _super.prototype.getMediatorName.call(_this) + ' created');
        return _this;
    }
    BundleShipViewMediator.prototype.listNotificationInterests = function () {
        return [BattleShipFacade_1.MediatorNotifications.ShipsPlacement,
            BattleShipFacade_1.MediatorNotifications.Test];
    };
    BundleShipViewMediator.prototype.handleNotification = function (notification) {
        switch (notification.getName()) {
            case BattleShipFacade_1.MediatorNotifications.ShipsPlacement:
                var shipPositionInfo = notification.getArrayOfNumbers();
                _super.prototype.sendNotification.call(this, BattleShipFacade_1.CommandNotifications.ShipsPlacement, undefined, notification.getType(), undefined, shipPositionInfo);
                break;
        }
    };
    return BundleShipViewMediator;
}(AbstractMediator_1.AbstractMediator));
exports.BundleShipViewMediator = BundleShipViewMediator;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractView_1 = __webpack_require__(2);
var SingleShipView_1 = __webpack_require__(30);
var BattleShipFacade_1 = __webpack_require__(0);
var BundleShipView = (function (_super) {
    __extends(BundleShipView, _super);
    function BundleShipView(key, player, numberOfShips) {
        var _this = _super.call(this, key) || this;
        _this.bundleShipViewName = 'BundleShipView';
        _this.shipView = ['S00', 'S01', 'S02', 'S10', 'S11', 'S12'];
        _this.shipsArray = [];
        for (var i = 0; i < numberOfShips / 2; i++) {
            var horizontalShip = SingleShipView_1.SingleShipView.getInstance(_this.shipView[i] + player, 150, i * 100, numberOfShips - i - 1, player, BattleShipFacade_1.FacadeInformation.ShipHorizontalType);
            _this.shipsArray.push(horizontalShip);
            _this.addToContainer(horizontalShip.getUIContainer());
        }
        for (var i = numberOfShips / 2; i < numberOfShips; i++) {
            var verticalShip = SingleShipView_1.SingleShipView.getInstance(_this.shipView[i] + player, -500 + i * 100, -20, i, player, BattleShipFacade_1.FacadeInformation.ShipVerticalType);
            _this.shipsArray.push(verticalShip);
            _this.addToContainer(verticalShip.getUIContainer());
        }
        console.log('   #' + _this.bundleShipViewName + player);
        return _this;
    }
    BundleShipView.getInstance = function (key, player, numberOfShips) {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new BundleShipView(key, player, numberOfShips);
        return puremvc.View.instanceMap[key];
    };
    BundleShipView.prototype.initializeView = function () {
        _super.prototype.initializeView.call(this);
    };
    return BundleShipView;
}(AbstractView_1.AbstractView));
exports.BundleShipView = BundleShipView;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BattleShipFacade_1 = __webpack_require__(0);
var AbstractView_1 = __webpack_require__(2);
__webpack_require__(1);
var SingleShipView = (function (_super) {
    __extends(SingleShipView, _super);
    function SingleShipView(key, xPosition, yPosition, numberOfSquares, player, type) {
        var _this = _super.call(this, key) || this;
        _this.name = key;
        _this.xPosition = xPosition;
        _this.yPosition = yPosition;
        _this.shipGraphics = new PIXI.Graphics();
        _this.numberOfSquares = numberOfSquares;
        _this.player = player;
        if (player === BattleShipFacade_1.FacadeInformation.PlayerOne) {
            _this.shipGraphics.lineStyle(6, BattleShipFacade_1.FacadeInformation.PlayerOneShipBorderColor);
            _this.shipGraphics.beginFill(BattleShipFacade_1.FacadeInformation.PlayerOneShipFillColor);
        }
        else if (player === BattleShipFacade_1.FacadeInformation.PlayerTwo) {
            _this.shipGraphics.lineStyle(6, BattleShipFacade_1.FacadeInformation.PlayerTwoShipBorderColor);
            _this.shipGraphics.beginFill(BattleShipFacade_1.FacadeInformation.PlayerTwoShipFillColor);
        }
        switch (type) {
            case BattleShipFacade_1.FacadeInformation.ShipHorizontalType:
                for (var i = 0; i < _this.numberOfSquares; i++) {
                    _this.shipGraphics.drawRect(_this.xPosition + i * BattleShipFacade_1.FacadeInformation.SquareWidth, _this.yPosition, BattleShipFacade_1.FacadeInformation.SquareWidth - 3, BattleShipFacade_1.FacadeInformation.SquareWidth - 3);
                }
                break;
            case BattleShipFacade_1.FacadeInformation.ShipVerticalType:
                for (var i = 0; i < _this.numberOfSquares; i++) {
                    _this.shipGraphics.drawRect(_this.xPosition, _this.yPosition + i * BattleShipFacade_1.FacadeInformation.SquareWidth, BattleShipFacade_1.FacadeInformation.SquareWidth - 3, BattleShipFacade_1.FacadeInformation.SquareWidth - 3);
                }
                break;
        }
        _this.shipGraphics.endFill();
        _this.shipGraphics.interactive = true;
        _this.shipGraphics.buttonMode = true;
        _this.shipGraphics
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);
        function onDragStart(event) {
            this.data = event.data;
            var position = this.data.getLocalPosition(this.parent);
            this.pivot.set(position.x, position.y);
            this.position.set(this.data.x, this.data.y);
            this.dragging = true;
            this.mousedown = false;
        }
        function onDragMove() {
            if (this.dragging) {
                this.alpha = 0.5;
                var newPosition = this.data.getLocalPosition(this.parent);
                this.x = newPosition.x;
                this.y = newPosition.y;
            }
        }
        function onDragEnd() {
            var shipType;
            if (this.width > this.height) {
                shipType = BattleShipFacade_1.FacadeInformation.ShipHorizontalType;
            }
            else if (this.width <= this.height) {
                shipType = BattleShipFacade_1.FacadeInformation.ShipVerticalType;
            }
            var newPosition = this.data.getLocalPosition(this.parent.parent.parent);
            BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey)
                .sendNotification(BattleShipFacade_1.MediatorNotifications.ShipsPlacement, undefined, shipType, undefined, [this.getBounds().x, this.getBounds().y, this.width, this.height]);
            this.alpha = 1;
            this.dragging = false;
            this.data = null;
            this.destroy();
        }
        console.log('   # SingleShipView created');
        return _this;
    }
    SingleShipView.prototype.initializeView = function () {
        _super.prototype.initializeView.call(this);
    };
    SingleShipView.getInstance = function (key, xPosition, yPosition, numberOfSquares, player, type) {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new SingleShipView(key, xPosition, yPosition, numberOfSquares, player, type);
        return puremvc.View.instanceMap[key];
    };
    SingleShipView.prototype.getName = function () {
        return this.name;
    };
    SingleShipView.prototype.getUIContainer = function () {
        return this.shipGraphics;
    };
    return SingleShipView;
}(AbstractView_1.AbstractView));
exports.SingleShipView = SingleShipView;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCommand_1 = __webpack_require__(8);
var BattleShipFacade_1 = __webpack_require__(0);
__webpack_require__(1);
var PlayerController_1 = __webpack_require__(10);
var BattleShipController_1 = __webpack_require__(3);
var ShipPlaceCommand = (function (_super) {
    __extends(ShipPlaceCommand, _super);
    function ShipPlaceCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShipPlaceCommand.prototype.execute = function (notification) {
        PlayerController_1.PlayerController.getInstance(BattleShipController_1.BattleShipController.PlayerOneControllerName).updateNumberOfShipsPlaced();
        _super.prototype.sendNotification.call(this, BattleShipFacade_1.MediatorNotifications.GridShipMarking, undefined, notification.getType(), undefined, notification.getArrayOfNumbers());
    };
    return ShipPlaceCommand;
}(AbstractCommand_1.AbstractCommand));
exports.ShipPlaceCommand = ShipPlaceCommand;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDNlOWI0NWE2NDIyMmViYTY1MWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUElYSVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvY29udHJvbGxlci9CYXR0bGVTaGlwQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RNZWRpYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9tYWluVmlldy9CYXR0bGVTaGlwVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RGYWNhZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbnRyb2xsZXIvR3JpZENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9jb250cm9sbGVyL1BsYXllckNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9jb250cm9sbGVyL1NxdWFyZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9CYXR0bGVTaGlwTWVkaWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Tm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9ncmlkL0dyaWRWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9ncmlkL1NxdWFyZVZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L2hpdHMvSGl0Vmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvaGl0cy9NaXNzVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvcnVsZXIvUnVsZXJWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9ydWxlci9SdWxlclNxdWFyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvdGV4dC9UZXh0Vmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvYnV0dG9uL0J1dHRvblZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9jb21tYW5kL1NxdWFyZUNsaWNrQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbW1hbmQvQnV0dG9uUHJlc3NDb21tYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvbWVkaWF0b3IvQnV0dG9uVmlld01lZGlhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvbWVkaWF0b3IvR3JpZFZpZXdNZWRpYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L21lZGlhdG9yL1RleHRWaWV3TWVkaWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9CdW5kbGVTaGlwVmlld01lZGlhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9zaGlwcy9CdW5kbGVTaGlwVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvc2hpcHMvU2luZ2xlU2hpcFZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9jb21tYW5kL1NoaXBQbGFjZUNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQSxvREFBd0U7QUFDeEUsOENBQStEO0FBQy9ELDhDQUFvRTtBQUNwRSx1QkFBaUI7QUFDakIseUNBQStDO0FBQy9DLHlDQUErQztBQUMvQywyQ0FBcUQ7QUFDckQsbURBQWlFO0FBQ2pFLG1EQUFpRTtBQUNqRSxtREFBa0U7QUFDbEUsaURBQThEO0FBQzlELGlEQUE4RDtBQUM5RCx1REFBMEU7QUFDMUUsK0NBQTREO0FBQzVELGlEQUE2RDtBQUU3RCxJQUFZLHFCQU1YO0FBTkQsV0FBWSxxQkFBcUI7SUFDN0IsMkRBQWtDO0lBQ2xDLHdEQUErQjtJQUMvQixrREFBeUI7SUFDekIsNERBQW1DO0lBQ25DLHNDQUFhO0FBQ2pC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QUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsS0FBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsS0FBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFFbkMsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pDLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdEMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV0QyxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RCxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFOUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QyxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSSxDQUFDLEtBQUssR0FB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aUIsRUFBRSxDQUFDLENBQUM7SUFFbEosQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxDQVpxQyxpQ0FBZSxHQVlwRDtBQVpZLDRDQUFnQiIsImZpbGUiOiIuL2pzL21haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwM2U5YjQ1YTY0MjIyZWJhNjUxZCIsImltcG9ydCB7QmF0dGxlU2hpcENvbnRyb2xsZXJ9IGZyb20gXCIuLi9jb250cm9sbGVyL0JhdHRsZVNoaXBDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7QmF0dGxlU2hpcFZpZXd9IGZyb20gXCIuLi92aWV3L21haW5WaWV3L0JhdHRsZVNoaXBWaWV3XCI7XHJcbmltcG9ydCB7QWJzdHJhY3RGYWNhZGV9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RGYWNhZGVcIjtcclxuaW1wb3J0ICdwaXhpLmpzJztcclxuaW1wb3J0IHtHcmlkVmlld30gZnJvbSBcIi4uL3ZpZXcvZ3JpZC9HcmlkVmlld1wiO1xyXG5pbXBvcnQge1RleHRWaWV3fSBmcm9tIFwiLi4vdmlldy90ZXh0L1RleHRWaWV3XCI7XHJcbmltcG9ydCB7QnV0dG9uVmlld30gZnJvbSBcIi4uL3ZpZXcvYnV0dG9uL0J1dHRvblZpZXdcIjtcclxuaW1wb3J0IHtTcXVhcmVDbGlja0NvbW1hbmR9IGZyb20gXCIuLi9jb21tYW5kL1NxdWFyZUNsaWNrQ29tbWFuZFwiO1xyXG5pbXBvcnQge0J1dHRvblByZXNzQ29tbWFuZH0gZnJvbSBcIi4uL2NvbW1hbmQvQnV0dG9uUHJlc3NDb21tYW5kXCI7XHJcbmltcG9ydCB7QnV0dG9uVmlld01lZGlhdG9yfSBmcm9tIFwiLi4vbWVkaWF0b3IvQnV0dG9uVmlld01lZGlhdG9yXCI7XHJcbmltcG9ydCB7R3JpZFZpZXdNZWRpYXRvcn0gZnJvbSBcIi4uL21lZGlhdG9yL0dyaWRWaWV3TWVkaWF0b3JcIjtcclxuaW1wb3J0IHtUZXh0Vmlld01lZGlhdG9yfSBmcm9tIFwiLi4vbWVkaWF0b3IvVGV4dFZpZXdNZWRpYXRvclwiO1xyXG5pbXBvcnQge0J1bmRsZVNoaXBWaWV3TWVkaWF0b3J9IGZyb20gXCIuLi9tZWRpYXRvci9CdW5kbGVTaGlwVmlld01lZGlhdG9yXCI7XHJcbmltcG9ydCB7QnVuZGxlU2hpcFZpZXd9IGZyb20gXCIuLi92aWV3L3NoaXBzL0J1bmRsZVNoaXBWaWV3XCI7XHJcbmltcG9ydCB7U2hpcFBsYWNlQ29tbWFuZH0gZnJvbSBcIi4uL2NvbW1hbmQvU2hpcFBsYWNlQ29tbWFuZFwiO1xyXG5cclxuZXhwb3J0IGVudW0gTWVkaWF0b3JOb3RpZmljYXRpb25zIHtcclxuICAgIFNoaXBzUGxhY2VtZW50ID0gJ1NoaXBzX1BsYWNlbWVudCcsXHJcbiAgICBHcmlkU2hpcE1hcmtpbmcgPSAnR3JpZE1hcmtpbmcnLFxyXG4gICAgVGV4dFVwZGF0ZSA9ICdUZXh0VXBkYXRlJyxcclxuICAgIFNxdWFyZUNsaWNrUmVxdWVzdCA9ICdTcXVhcmVDbGlja1InLFxyXG4gICAgVGVzdCA9ICdUZXN0J1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBUZXh0RXJyb3JzIHtcclxuXHJcbiAgICBNYXhpbXVtTnVtYmVyT2ZTaGlwUmVhY2hlZCA9ICdNYXggTnVtYmVyIE9mIFNoaXBzIHRvIFBsYWNlIFJlYWNoZWQnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENvbW1hbmROb3RpZmljYXRpb25zIHtcclxuXHJcbiAgICBTcXVhcmVDbGlja05vdGlmaWNhdGlvbiA9ICdDTElDS19IQU5ETEVfQ09NTUFORCcsXHJcbiAgICBCdXR0b25QcmVzcyA9ICdCVVRUT05fUFJFU1NfQ09NTUFORCcsXHJcbiAgICBTdGFydEdhbWUgPSAnU1RBUlRfR0FNRV9DT01NQU5EJyxcclxuICAgIFNoaXBzUGxhY2VtZW50ID0gJ1NISVBTX1BMQUNFTUVOVF9DT01NQU5EJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBGYWNhZGVJbmZvcm1hdGlvbiB7XHJcblxyXG4gICAgR3JpZDFYUG9zaXRpb24gPSAxMDAsXHJcbiAgICBHcmlkMVlQb3NpdGlvbiA9IDEwMCxcclxuICAgIEdyaWQxQm9yZGVyQ29sb3IgPSAweDAwMDBmZixcclxuICAgIEdyaWQyWFBvc2l0aW9uID0gMTAwLFxyXG4gICAgR3JpZDJZUG9zaXRpb24gPSAxMDAsXHJcbiAgICBHcmlkMkJvcmRlckNvbG9yID0gMHhmZjAwMDAsXHJcbiAgICBHcmlkU2NhbGUgPSAwLjUsXHJcblxyXG4gICAgR3JpZFNxdWFyZUZpbGxDb2xvciA9IDB4MDAwMDAwLFxyXG4gICAgUnVsZXJUZXh0Q29sb3IgPSAweDAwMDAwMCxcclxuICAgIEhpdENvbG9yID0gMHgwMGZmMDAsXHJcbiAgICBNaXNzQ29sb3IgPSAweGZmMzMwMCxcclxuXHJcbiAgICBTcXVhcmVGaWxsQ29sb3IgPSAweDAwZmYwMCxcclxuICAgIFNxdWFyZVdpZHRoID0gODAsXHJcbiAgICBOdW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5ID0gMTIsXHJcbiAgICBOdW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHkgPSAxMixcclxuXHJcbiAgICBUZXh0Vmlld1RleHQgPSAnR2FtZSBzdGF0dXMgOiBcXG5TaGlwcyBwbGFjZW1lbnQnLFxyXG4gICAgVGV4dFZpZXdDb2xvciA9IDB4NDJkMWY0LFxyXG4gICAgRm9udFNpemUgPSAzMCxcclxuXHJcbiAgICBQbGF5ZXJPbmVTaGlwRmlsbENvbG9yID0gMHgwMDAwZmYsXHJcbiAgICBQbGF5ZXJPbmVTaGlwQm9yZGVyQ29sb3IgPSAweGZmZjAwMCxcclxuICAgIFBsYXllclR3b1NoaXBGaWxsQ29sb3IgPSAweGZhMDAwMCxcclxuICAgIFBsYXllclR3b1NoaXBCb3JkZXJDb2xvciA9IDB4ZmZmMDAwLFxyXG4gICAgUGxheWVyT25lTnVtYmVyT2ZTaGlwcyA9IDYsXHJcbiAgICBQbGF5ZXJUd29OdW1iZXJPZlNoaXBzID0gNixcclxuXHJcbiAgICBCdXR0b25WaWV3WFBvc2l0aW9uID0gMTAwLFxyXG4gICAgQnV0dG9uVmlld1lQb3NpdGlvbiA9IDEwMCxcclxuICAgIEJ1dHRvblZpZXdTY2FsZSA9IDAuOSxcclxuXHJcblxyXG4gICAgUGxheWVyT25lID0gJzEnLFxyXG4gICAgUGxheWVyVHdvID0gJzInLFxyXG5cclxuICAgIEJhdHRsZVNoaXBGYWNhZGVLZXkgPSAnQmF0dGxlU2hpcCcsXHJcbiAgICBTaGlwVmVydGljYWxUeXBlID0gJ1ZlcnRpY2FsJyxcclxuICAgIFNoaXBIb3Jpem9udGFsVHlwZSA9ICdIb3Jpem9udGFsJyxcclxuICAgIE1heGltdW1OdW1iZXJPZlNoaXBzT25BR3JpZCA9IDNcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBtYWluIEZhY2FkZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXR0bGVTaGlwRmFjYWRlIGV4dGVuZHMgQWJzdHJhY3RGYWNhZGUge1xyXG5cclxuICAgIHB1YmxpYyBhcHA6IFBJWEkuQXBwbGljYXRpb247XHJcblxyXG4gICAgcHVibGljIGdyaWRWaWV3OiBzdHJpbmdbXTtcclxuICAgIHB1YmxpYyBncmlkVmlld01lZGlhdG9yOiBzdHJpbmdbXTtcclxuICAgIHB1YmxpYyBidXR0b25WaWV3OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYnV0dG9uVmlld01lZGlhdG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYnVuZGxlU2hpcFZpZXc6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIGJ1bmRsZVNoaXBWaWV3TWVkaWF0b3I6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIHRleHRWaWV3OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdGV4dFZpZXdNZWRpYXRvcjogc3RyaW5nO1xyXG5cclxuICAgIC8vVE9ETyAtIEFkZCBtb3JlIGNvbnRhaW5lcnMgaWYgbmVlZGVkXHJcbiAgICAvKipUaGUgY29udGFpbmVycyB0aGF0IGNvbnRhaW5zIHRoZSBHYW1lQm9hcmRzICovXHJcbiAgICBwdWJsaWMgR2FtZUJvYXJkQ29udGFpbmVyT25lOiBQSVhJLkNvbnRhaW5lcjtcclxuICAgIHB1YmxpYyBHYW1lQm9hcmRDb250YWluZXJUd286IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgLyoqVGhlIGNvbnRhaW5lciB3aGljaCBjb250YWlucyB0aGUgR2FtZUluZm8gKi9cclxuICAgIHB1YmxpYyBHYW1lSW5mb0NvbnRhaW5lcjogUElYSS5Db250YWluZXI7XHJcbiAgICAvKipUaGUgY29udGFpbmVyIHdoaWNoIGNvbnRhaW5zIHRoZSBHYW1lQnV0dG9uICovXHJcbiAgICBwdWJsaWMgR2FtZUJ1dHRvbkNvbnRhaW5lcjogUElYSS5Db250YWluZXI7XHJcbiAgICAvKipUaGUgY29udGFpbmVyIHRoYXQgaG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGJhdHRsZXNoaXBzICovXHJcbiAgICBwdWJsaWMgU2hpcHNDb250YWluZXJPbmU6IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgcHVibGljIFNoaXBzQ29udGFpbmVyVHdvOiBQSVhJLkNvbnRhaW5lcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShrZXk6IHN0cmluZyk6IEJhdHRsZVNoaXBGYWNhZGUge1xyXG4gICAgICAgIGlmICghcHVyZW12Yy5GYWNhZGUuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5GYWNhZGUuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBCYXR0bGVTaGlwRmFjYWRlKGtleSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLkZhY2FkZS5pbnN0YW5jZU1hcFtrZXldIGFzIEJhdHRsZVNoaXBGYWNhZGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgdGhlIEZhY2FkZSdzIE1vZGVsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplTW9kZWwoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gbm8gbW9kZWwgbmVlZGVkIHlldFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6aW5nIHRoZSBGYWNhZGUncyBWaWV3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplVmlldygpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMudmlldylcclxuICAgICAgICAgICAgdGhpcy52aWV3ID0gQmF0dGxlU2hpcFZpZXcuZ2V0SW5zdGFuY2UodGhpcy5tdWx0aXRvbktleSk7XHJcblxyXG4gICAgICAgIC8qKktleXMgZm9yIHRoZSB2aWV3cyBhbmQgdGhlIG1lZGlhdG9ycyAqL1xyXG4gICAgICAgIHRoaXMuZ3JpZFZpZXcgPSBbJ0dyaWRPbmVCb2FyZCcsICdHcmlkVHdvQm9hcmQnXTtcclxuICAgICAgICB0aGlzLmdyaWRWaWV3TWVkaWF0b3IgPSBbJ0dyaWRPbmVNZWRpYXRvcicsICdHcmlkVHdvTWVkaWF0b3InXTtcclxuICAgICAgICB0aGlzLmJ1dHRvblZpZXcgPSAnQnV0dG9uVmlldyc7XHJcbiAgICAgICAgdGhpcy5idXR0b25WaWV3TWVkaWF0b3IgPSAnQnV0dG9uVmlld01lZGlhdG9yJztcclxuICAgICAgICB0aGlzLmJ1bmRsZVNoaXBWaWV3ID0gWydTaGlwUGxheWVyT25lVmlldycsICdTaGlwUGxheWVyVHdvVmlldyddO1xyXG4gICAgICAgIHRoaXMuYnVuZGxlU2hpcFZpZXdNZWRpYXRvciA9IFsnU2hpcFBsYXllck9uZU1lZGlhdG9yJywgJ1NoaXBQbGF5ZXJUd29NZWRpYXRvciddO1xyXG4gICAgICAgIHRoaXMudGV4dFZpZXcgPSAnVGV4dFZpZXcnO1xyXG4gICAgICAgIHRoaXMudGV4dFZpZXdNZWRpYXRvciA9ICdUZXh0Vmlld01lZGlhdG9yJztcclxuXHJcblxyXG4gICAgICAgIC8qKlJlZ2lzdGVyaW5nIGEgQnV0dG9uTWVkaWF0b3IgKi9cclxuICAgICAgICBzdXBlci5yZWdpc3Rlck1lZGlhdG9yKG5ldyBCdXR0b25WaWV3TWVkaWF0b3IodGhpcy5idXR0b25WaWV3TWVkaWF0b3IsIEJ1dHRvblZpZXcuZ2V0SW5zdGFuY2UodGhpcy5idXR0b25WaWV3LFxyXG4gICAgICAgICAgICBGYWNhZGVJbmZvcm1hdGlvbi5CdXR0b25WaWV3WFBvc2l0aW9uLCBGYWNhZGVJbmZvcm1hdGlvbi5CdXR0b25WaWV3WVBvc2l0aW9uLCBGYWNhZGVJbmZvcm1hdGlvbi5CdXR0b25WaWV3U2NhbGUpKSk7XHJcblxyXG4gICAgICAgIC8qKlJlZ2lzdGVyaW5nIHRoZSB0d28gR3JpZFZpZXdzICovXHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJNZWRpYXRvcihuZXcgR3JpZFZpZXdNZWRpYXRvcih0aGlzLmdyaWRWaWV3TWVkaWF0b3JbMF0sXHJcbiAgICAgICAgICAgIEdyaWRWaWV3LmdldEluc3RhbmNlKHRoaXMuZ3JpZFZpZXdbMF0sIEZhY2FkZUluZm9ybWF0aW9uLlBsYXllck9uZSksIEZhY2FkZUluZm9ybWF0aW9uLlBsYXllck9uZSkpO1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyTWVkaWF0b3IobmV3IEdyaWRWaWV3TWVkaWF0b3IodGhpcy5ncmlkVmlld01lZGlhdG9yWzFdLFxyXG4gICAgICAgICAgICBHcmlkVmlldy5nZXRJbnN0YW5jZSh0aGlzLmdyaWRWaWV3WzFdLCBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJUd28pLCBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJUd28pKTtcclxuXHJcbiAgICAgICAgLyoqUmVnaXN0ZXJpbmcgdGhlIFRleHRNZWRpYXRvciAqL1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyTWVkaWF0b3IobmV3IFRleHRWaWV3TWVkaWF0b3IodGhpcy50ZXh0Vmlld01lZGlhdG9yLCBUZXh0Vmlldy5nZXRJbnN0YW5jZSh0aGlzLnRleHRWaWV3LFxyXG4gICAgICAgICAgICBGYWNhZGVJbmZvcm1hdGlvbi5UZXh0Vmlld1RleHQsIEZhY2FkZUluZm9ybWF0aW9uLkZvbnRTaXplLCBGYWNhZGVJbmZvcm1hdGlvbi5UZXh0Vmlld0NvbG9yKSkpO1xyXG5cclxuXHJcbiAgICAgICAgLyoqUmVnaXN0ZXJpbmcgdGhlIFNoaXBzIE1lZGlhdG9ycyAqL1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyTWVkaWF0b3IobmV3IEJ1bmRsZVNoaXBWaWV3TWVkaWF0b3IodGhpcy5idW5kbGVTaGlwVmlld01lZGlhdG9yWzBdLFxyXG4gICAgICAgICAgICBCdW5kbGVTaGlwVmlldy5nZXRJbnN0YW5jZSh0aGlzLmJ1bmRsZVNoaXBWaWV3WzBdLCBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJPbmUsIEZhY2FkZUluZm9ybWF0aW9uLlBsYXllck9uZU51bWJlck9mU2hpcHMpLCBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJPbmUpKTtcclxuICAgICAgICBzdXBlci5yZWdpc3Rlck1lZGlhdG9yKG5ldyBCdW5kbGVTaGlwVmlld01lZGlhdG9yKHRoaXMuYnVuZGxlU2hpcFZpZXdNZWRpYXRvclsxXSxcclxuICAgICAgICAgICAgQnVuZGxlU2hpcFZpZXcuZ2V0SW5zdGFuY2UodGhpcy5idW5kbGVTaGlwVmlld1sxXSwgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyVHdvLCBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJUd29OdW1iZXJPZlNoaXBzKSwgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyVHdvKSk7XHJcblxyXG4gICAgICAgIGxldCBjb3VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5hcHAudGlja2VyLmFkZCgoZGVsdGEpID0+IHtcclxuICAgICAgICAgICAgY291bnQgKz0gMC4xO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRleHQ6IGFueSA9IHN1cGVyLnJldHJpZXZlTWVkaWF0b3IodGhpcy50ZXh0Vmlld01lZGlhdG9yKS5nZXRWaWV3Q29tcG9uZW50KCkuZ2V0VUlDb250YWluZXIoKTtcclxuICAgICAgICAgICAgdGV4dC5zY2FsZS5zZXQoMSArIE1hdGguc2luKGNvdW50KSAqIDAuMDUpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemluZyB0aGUgRmFjYWRlJ3MgQ29udHJvbGxlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZUNvbnRyb2xsZXIoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRyb2xsZXIpXHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlciA9IEJhdHRsZVNoaXBDb250cm9sbGVyLmdldEluc3RhbmNlKHRoaXMubXVsdGl0b25LZXkpO1xyXG5cclxuICAgICAgICBzdXBlci5yZWdpc3RlckNvbW1hbmQoQ29tbWFuZE5vdGlmaWNhdGlvbnMuU3F1YXJlQ2xpY2tOb3RpZmljYXRpb24sIFNxdWFyZUNsaWNrQ29tbWFuZCk7XHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJDb21tYW5kKENvbW1hbmROb3RpZmljYXRpb25zLkJ1dHRvblByZXNzLCBCdXR0b25QcmVzc0NvbW1hbmQpO1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyQ29tbWFuZChDb21tYW5kTm90aWZpY2F0aW9ucy5TaGlwc1BsYWNlbWVudCwgU2hpcFBsYWNlQ29tbWFuZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGNvbnRhaW5lcnMgdG8gdGhlIHZpZXcgc2NyZWVuXHJcbiAgICAgKiBAcGFyYW0gY29udGFpbmVyc0xpc3RcclxuICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRDb250YWluZXJzVG9WaWV3KGNvbnRhaW5lcnNMaXN0OiBBcnJheTxQSVhJLkNvbnRhaW5lcj4sIHR5cGU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgY29udGFpbmVyc0xpc3QpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IEJhdHRsZVNoaXBWaWV3LlBsYXllck9uZUdyaWRDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIC8qKkFkZGluZyB0byB0aGUgUGxheWVyT25lR3JpZCBDb250YWluZXIgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IEJhdHRsZVNoaXBWaWV3LlBsYXllclR3b0dyaWRDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIC8qKkFkZGluZyB0byB0aGUgUGxheWVyVHdvR3JpZCBDb250YWluZXIgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IEJhdHRsZVNoaXBWaWV3LkdhbWVJbmZvQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvKipBZGRpbmcgdG8gdGhlIEdhbWVJbmZvIENvbnRhaW5lciAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBCYXR0bGVTaGlwVmlldy5HYW1lQnV0dG9uQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvKipBZGRpbmcgdG8gdGhlIEdhbWVCdXR0b24gQ29udGFpbmVyICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gQmF0dGxlU2hpcFZpZXcuUGxheWVyT25lU2hpcHNDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIC8qKkFkZGluZyB0byB0aGUgUGxheWVyT25lU2hpcHMgQ29udGFpbmVyICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyT25lLmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IEJhdHRsZVNoaXBWaWV3LlBsYXllclR3b1NoaXBzQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvKipBZGRpbmcgdG8gdGhlIFBsYXllclR3b1NoaXBzIENvbnRhaW5lciAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lclR3by5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemluZyB0aGUgRmFjYWRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplRmFjYWRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm11bHRpdG9uS2V5ID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmFwcCA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQsIHtiYWNrZ3JvdW5kQ29sb3I6IDB4MDAwMDAwfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmFwcC52aWV3KTtcclxuICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZSA9IG5ldyBQSVhJLkNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3byA9IG5ldyBQSVhJLkNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyT25lID0gbmV3IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJUd28gPSBuZXcgUElYSS5Db250YWluZXI7XHJcbiAgICAgICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUsIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLFxyXG4gICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLCB0aGlzLkdhbWVCdXR0b25Db250YWluZXIsIHRoaXMuU2hpcHNDb250YWluZXJPbmUsIHRoaXMuU2hpcHNDb250YWluZXJUd28pO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jaGVja1N0YXJ0T3JpZW50YXRpb24oKTtcclxuICAgICAgICB0aGlzLmNoYW5nZU9yaWVudGF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplVmlldygpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZU1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ29udHJvbGxlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCYXR0bGVTaGlwRmFjYWRlIGNyZWF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vdGlmaWVzIHRoaXMgZmFjYWRlJ3MgdmlldyBvYnNlcnZlcnMuXHJcbiAgICAgKiBAcGFyYW0gbU5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbm90aWZ5T2JzZXJ2ZXJzKG1Ob3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3KVxyXG4gICAgICAgICAgICB0aGlzLnZpZXcubm90aWZ5T2JzZXJ2ZXJzKG1Ob3RpZmljYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIENoZWNrcyBhdCB0aGUgU3RhcnQgb2YgdGhlIGdhbWUgd2hpY2ggb3JpZW50YXRpb24gaXQgaGFzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tTdGFydE9yaWVudGF0aW9uKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmFwcC5yZW5kZXJlci5yZXNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgbGV0IHdpZHRoOiBudW1iZXIgPSB0aGlzLmFwcC52aWV3LndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQ6IG51bWJlciA9IHRoaXMuYXBwLnZpZXcuaGVpZ2h0O1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHdpbmRvdy5vcmllbnRhdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIDkwIDpcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZS5wb3NpdGlvbi5zZXQod2lkdGggLyA2LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnNjYWxlLnNldChGYWNhZGVJbmZvcm1hdGlvbi5HcmlkU2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLnBvc2l0aW9uLnNldCgzICogd2lkdGggLyA2LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLnNjYWxlLnNldChGYWNhZGVJbmZvcm1hdGlvbi5HcmlkU2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIucG9zaXRpb24uc2V0KDUgKiB3aWR0aCAvIDYsIGhlaWdodCAvIDQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5zY2FsZS5zZXQoMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLnBvc2l0aW9uLnNldCg1ICogd2lkdGggLyA2LCAzICogaGVpZ2h0IC8gNCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIuc2NhbGUuc2V0KDAuOSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lck9uZS5wb3NpdGlvbi5zZXQod2lkdGggLyA2LCAzMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyT25lLnNjYWxlLnNldCgwLjUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJUd28ucG9zaXRpb24uc2V0KDMgKiB3aWR0aCAvIDYsIDMwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJUd28uc2NhbGUuc2V0KDAuNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDAgOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUucG9zaXRpb24uc2V0KHdpZHRoIC8gMiwgaGVpZ2h0IC8gNik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZS5zY2FsZS5zZXQoMC43LCAwLjcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLnBvc2l0aW9uLnNldCh3aWR0aCAvIDIsIDMgKiBoZWlnaHQgLyA2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLnNjYWxlLnNldCgwLjcsIDAuNyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5wb3NpdGlvbi5zZXQod2lkdGggLyA0LCA1ICogaGVpZ2h0IC8gNik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLnNjYWxlLnNldCgxLjYpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5wb3NpdGlvbi5zZXQoMyAqIHdpZHRoIC8gNCwgNSAqIGhlaWdodCAvIDYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLnNjYWxlLnNldCgxLjYpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUucG9zaXRpb24uc2V0KHdpZHRoIC8gNiwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZS5zY2FsZS5zZXQoRmFjYWRlSW5mb3JtYXRpb24uR3JpZFNjYWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3by5wb3NpdGlvbi5zZXQoMyAqIHdpZHRoIC8gNiwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3by5zY2FsZS5zZXQoRmFjYWRlSW5mb3JtYXRpb24uR3JpZFNjYWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLnBvc2l0aW9uLnNldCg1ICogd2lkdGggLyA2LCBoZWlnaHQgLyA0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIuc2NhbGUuc2V0KDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5wb3NpdGlvbi5zZXQoNSAqIHdpZHRoIC8gNiwgMyAqIGhlaWdodCAvIDQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLnNjYWxlLnNldCgwLjkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJPbmUucG9zaXRpb24uc2V0KHdpZHRoIC8gNiwgMzApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lck9uZS5zY2FsZS5zZXQoMC41KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyVHdvLnBvc2l0aW9uLnNldCgzICogd2lkdGggLyA2LCAzMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyVHdvLnNjYWxlLnNldCgwLjUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBXaGVuIHRoZSBwbGF5ZXIgcm90YXRlcyB0aGUgc2NyZWVuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hhbmdlT3JpZW50YXRpb24oKTogdm9pZCB7XHJcblxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAucmVuZGVyZXIucmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpZHRoOiBudW1iZXIgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICAgICAgICAgIGxldCBoZWlnaHQ6IG51bWJlciA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnT3JpZW50YXRpb24gOiAnICsgd2luZG93Lm9yaWVudGF0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHdpbmRvdy5vcmllbnRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTAgOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUucG9zaXRpb24uc2V0KHdpZHRoIC8gNiwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnNjYWxlLnNldChGYWNhZGVJbmZvcm1hdGlvbi5HcmlkU2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28ucG9zaXRpb24uc2V0KDMgKiB3aWR0aCAvIDYsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3by5zY2FsZS5zZXQoRmFjYWRlSW5mb3JtYXRpb24uR3JpZFNjYWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIucG9zaXRpb24uc2V0KDUgKiB3aWR0aCAvIDYsIGhlaWdodCAvIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLnNjYWxlLnNldCgxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5wb3NpdGlvbi5zZXQoNSAqIHdpZHRoIC8gNiwgMyAqIGhlaWdodCAvIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIuc2NhbGUuc2V0KDAuOSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyT25lLnBvc2l0aW9uLnNldCh3aWR0aCAvIDYsIDMwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lck9uZS5zY2FsZS5zZXQoMC41KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJUd28ucG9zaXRpb24uc2V0KDMgKiB3aWR0aCAvIDYsIDMwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lclR3by5zY2FsZS5zZXQoMC41KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZS5wb3NpdGlvbi5zZXQod2lkdGggLyAyLCBoZWlnaHQgLyA2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUuc2NhbGUuc2V0KEZhY2FkZUluZm9ybWF0aW9uLkdyaWRTY2FsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3by5wb3NpdGlvbi5zZXQod2lkdGggLyAyLCAzICogaGVpZ2h0IC8gNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLnNjYWxlLnNldChGYWNhZGVJbmZvcm1hdGlvbi5HcmlkU2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5wb3NpdGlvbi5zZXQod2lkdGggLyA0LCA1ICogaGVpZ2h0IC8gNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIuc2NhbGUuc2V0KDEuNik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIucG9zaXRpb24uc2V0KDMgKiB3aWR0aCAvIDQsIDUgKiBoZWlnaHQgLyA2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLnNjYWxlLnNldCgxLjYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnBvc2l0aW9uLnNldCh3aWR0aCAvIDYsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZS5zY2FsZS5zZXQoRmFjYWRlSW5mb3JtYXRpb24uR3JpZFNjYWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLnBvc2l0aW9uLnNldCgzICogd2lkdGggLyA2LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28uc2NhbGUuc2V0KEZhY2FkZUluZm9ybWF0aW9uLkdyaWRTY2FsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLnBvc2l0aW9uLnNldCg1ICogd2lkdGggLyA2LCBoZWlnaHQgLyA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5zY2FsZS5zZXQoMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIucG9zaXRpb24uc2V0KDUgKiB3aWR0aCAvIDYsIDMgKiBoZWlnaHQgLyA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLnNjYWxlLnNldCgwLjkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lck9uZS5wb3NpdGlvbi5zZXQod2lkdGggLyA2LCAzMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJPbmUuc2NhbGUuc2V0KDAuNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyVHdvLnBvc2l0aW9uLnNldCgzICogd2lkdGggLyA2LCAzMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJUd28uc2NhbGUuc2V0KDAuNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHVuZGVmaW5lZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJQSVhJXCJ9XG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBFeHRlbmRzIHRoaXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RWaWV3IGV4dGVuZHMgcHVyZW12Yy5WaWV3IGltcGxlbWVudHMgcHVyZW12Yy5JVmlldyB7XHJcbiAgICBwdWJsaWMgSUQ6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBfY29udGFpbmVyOiBQSVhJLkNvbnRhaW5lcjtcclxuICAgIHByb3RlY3RlZCBfbXVsdGl0b25LZXk6IHN0cmluZztcclxuICAgIHByb3RlY3RlZCBfYWN0aXZlOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMuX211bHRpdG9uS2V5ID0ga2V5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHNldCBhY3RpdmUoa2V5OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlID0ga2V5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIHZpZXcuXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBjb250YWluZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplVmlldygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRVSUNvbnRhaW5lcigpOiBQSVhJLkNvbnRhaW5lciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIFBJWEkgZ3JhcGhpY3Msc3ByaXRlLGNvbnRhaW5lciBldGMgdG8gdGhpcyB2aWV3XHJcbiAgICAgKiBAcGFyYW0gaXRlbVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkVG9Db250YWluZXIoaXRlbTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhY3RpdmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEFjdGl2ZShhY3RpdmU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuX2NvbnRhaW5lci5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpdGVtLnZpc2libGUgPSBhY3RpdmU7XHJcbiAgICAgICAgICAgIGl0ZW0uaW50ZXJhY3RpdmUgPSBhY3RpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIG1lZGlhdG9yIHRvIHRoaXMgdmlldy5cclxuICAgICAqIEBwYXJhbSBtZWRpYXRvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJNZWRpYXRvcihtZWRpYXRvcjogcHVyZW12Yy5NZWRpYXRvcik6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyTWVkaWF0b3IobWVkaWF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZWRpYXRvck5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhhc01lZGlhdG9yKG1lZGlhdG9yTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmhhc01lZGlhdG9yKG1lZGlhdG9yTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWN0aXZhdGVVcGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy90b2RvOiBvdmVycmlkZSB3aGVyZSBuZWVkZWRcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkNsaWNrKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvL3RvZG86IG92ZXJyaWRlIHdoZXJlIG5lZWRlZFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsb2FkZXJcclxuICAgICAqIEBwYXJhbSByZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uQXNzZXRzTG9hZGVkKGxvYWRlciwgcmVzKTogdm9pZCB7XHJcbiAgICAgICAgLy90b2RvOiBvdmVycmlkZSB3aGVyZSBuZWVkZWRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbG9hZGVyXHJcbiAgICAgKiBAcGFyYW0gcmVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkNvbmZpZ0xvYWRlZChsb2FkZXIsIHJlcyk6IHZvaWQge1xyXG4gICAgICAgIC8vdG9kbzogb3ZlcnJpZGUgd2hlcmUgbmVlZGVkXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3LnRzIiwiaW1wb3J0IHtBYnN0cmFjdENvbnRyb2xsZXJ9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7R3JpZENvbnRyb2xsZXJ9IGZyb20gXCIuL0dyaWRDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7RmFjYWRlSW5mb3JtYXRpb259IGZyb20gXCIuLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5pbXBvcnQge1BsYXllckNvbnRyb2xsZXJ9IGZyb20gXCIuL1BsYXllckNvbnRyb2xsZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgQmF0dGxlU2hpcCBjb250cm9sbGVyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJhdHRsZVNoaXBDb250cm9sbGVyIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sbGVyIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdyaWRQbGF5ZXJPbmVDb250cm9sbGVyTmFtZTogc3RyaW5nID0gJ0cxJztcclxuICAgIHB1YmxpYyBzdGF0aWMgR3JpZFBsYXllclR3b0NvbnRyb2xsZXJOYW1lOiBzdHJpbmcgPSAnRzInO1xyXG4gICAgcHVibGljIHN0YXRpYyBQbGF5ZXJPbmVDb250cm9sbGVyTmFtZTogc3RyaW5nID0gJ1AxJztcclxuICAgIHB1YmxpYyBzdGF0aWMgUGxheWVyVHdvQ29udHJvbGxlck5hbWU6IHN0cmluZyA9ICdQMic7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBQbGF5ZXJPbmVGaW5pc2hlZFBsYWNpbmdUaGVTaGlwczogc3RyaW5nID0gJ1BsYXllcjFGQlRTJztcclxuICAgIHB1YmxpYyBzdGF0aWMgUGxheWVyVHdvRmluaXNoZWRQbGFjaW5nVGhlU2hpcHM6IHN0cmluZyA9ICdQbGF5ZXIyRkJUUyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEhpdFRleHQ6IHN0cmluZyA9ICdIaXQnO1xyXG4gICAgcHVibGljIHN0YXRpYyBNaXNzVGV4dDogc3RyaW5nID0gJ01pc3MnO1xyXG4gICAgcHVibGljIHN0YXRpYyBTdGF0ZVRleHQ6IHN0cmluZyA9ICdOb24nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG5cclxuICAgICAgICBHcmlkQ29udHJvbGxlci5nZXRJbnN0YW5jZShCYXR0bGVTaGlwQ29udHJvbGxlci5HcmlkUGxheWVyT25lQ29udHJvbGxlck5hbWUsXHJcbiAgICAgICAgICAgIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHksIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSwgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyT25lKTtcclxuICAgICAgICBHcmlkQ29udHJvbGxlci5nZXRJbnN0YW5jZShCYXR0bGVTaGlwQ29udHJvbGxlci5HcmlkUGxheWVyVHdvQ29udHJvbGxlck5hbWUsXHJcbiAgICAgICAgICAgIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHksIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSwgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyVHdvKTtcclxuXHJcbiAgICAgICAgUGxheWVyQ29udHJvbGxlci5nZXRJbnN0YW5jZShCYXR0bGVTaGlwQ29udHJvbGxlci5QbGF5ZXJPbmVDb250cm9sbGVyTmFtZSk7XHJcbiAgICAgICAgUGxheWVyQ29udHJvbGxlci5nZXRJbnN0YW5jZShCYXR0bGVTaGlwQ29udHJvbGxlci5QbGF5ZXJUd29Db250cm9sbGVyTmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0JhdHRsZVNoaXBDb250cm9sbGVyIGNyZWF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShrZXk6IHN0cmluZyk6IEJhdHRsZVNoaXBDb250cm9sbGVyIHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuQ29udHJvbGxlci5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLkNvbnRyb2xsZXIuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBCYXR0bGVTaGlwQ29udHJvbGxlcihrZXkpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5Db250cm9sbGVyLmluc3RhbmNlTWFwW2tleV0gYXMgQmF0dGxlU2hpcENvbnRyb2xsZXI7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbnRyb2xsZXIvQmF0dGxlU2hpcENvbnRyb2xsZXIudHMiLCIvKipcclxuICogRXh0ZW5kcyB0aGlzLlxyXG4gKi9cclxuaW1wb3J0IHtBYnN0cmFjdE5vdGlmaWVyfSBmcm9tIFwiLi9BYnN0cmFjdE5vdGlmaWVyXCI7XHJcbmltcG9ydCB7QWJzdHJhY3RGYWNhZGV9IGZyb20gXCIuL0Fic3RyYWN0RmFjYWRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RNZWRpYXRvciBleHRlbmRzIHB1cmVtdmMuTWVkaWF0b3IgaW1wbGVtZW50cyBwdXJlbXZjLklNZWRpYXRvciwgQWJzdHJhY3ROb3RpZmllciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lZGlhdG9yTmFtZVxyXG4gICAgICogQHBhcmFtIHZpZXdDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVkaWF0b3JOYW1lOiBzdHJpbmcsIHZpZXdDb21wb25lbnQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKG1lZGlhdG9yTmFtZSwgdmlld0NvbXBvbmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Vmlld0NvbXBvbmVudCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5nZXRWaWV3Q29tcG9uZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0TWVkaWF0b3JOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldE1lZGlhdG9yTmFtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2aWV3Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRWaWV3Q29tcG9uZW50KHZpZXdDb21wb25lbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnNldFZpZXdDb21wb25lbnQodmlld0NvbXBvbmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGhhbmRsZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuaGFuZGxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25SZWdpc3RlcigpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5vblJlZ2lzdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25SZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIub25SZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplTm90aWZpZXIoa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplTm90aWZpZXIoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICogQHBhcmFtIGJvZHlcclxuICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gYXJyYXlPZlN0cmluZ3NcclxuICAgICAqIEBwYXJhbSBhcnJheU9mTnVtYmVyc1xyXG4gICAgICogQHBhcmFtIG9iamVjdFJlZmVyZW5jZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VuZE5vdGlmaWNhdGlvbihuYW1lOiBzdHJpbmcsIGJvZHk/OiBhbnksIHR5cGU/OiBzdHJpbmcsIGFycmF5T2ZTdHJpbmdzPzogQXJyYXk8c3RyaW5nPiwgYXJyYXlPZk51bWJlcnM/OiBBcnJheTxudW1iZXI+LCBvYmplY3RSZWZlcmVuY2U/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZmFjYWRlOiBhbnkgPSBBYnN0cmFjdEZhY2FkZS5nZXRJbnN0YW5jZSh0aGlzLm11bHRpdG9uS2V5KTtcclxuICAgICAgICBmYWNhZGUuc2VuZE5vdGlmaWNhdGlvbihuYW1lLCBib2R5LCB0eXBlLCBhcnJheU9mU3RyaW5ncywgYXJyYXlPZk51bWJlcnMsIG9iamVjdFJlZmVyZW5jZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RNZWRpYXRvci50cyIsIi8qKlxyXG4gKiAgRXh0ZW5kIHRoaXMgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RDb250cm9sbGVyIGV4dGVuZHMgcHVyZW12Yy5Db250cm9sbGVyIGltcGxlbWVudHMgcHVyZW12Yy5JQ29udHJvbGxlciB7XHJcblxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9ICdDb250cm9sbGVyJztcclxuICAgIHByaXZhdGUgbXVsdGl0b25rZXk6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMubXVsdGl0b25rZXkgPSBrZXlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBjb250cm9sbGVyLlxyXG4gICAgICogSXQgaXMgY2FsbGVkIHdoZW4gc3VwZXIgaXMgY2FsbGVkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVDb250cm9sbGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXRpYWxpemVDb250cm9sbGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeGVjdXRlIGEgcmVnaXN0ZXJlZCBjb21tYW5kIGJhc2VkIG9uIHRoZSByZWNlaXZlZCBub3RpZmljYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlQ29tbWFuZChub3RpZmljYXRpb246IHB1cmVtdmMuSU5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmV4ZWN1dGVDb21tYW5kKG5vdGlmaWNhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNvbW1hbmQgdG8gdGhpcyBjb250cm9sbGVyLlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvbk5hbWVcclxuICAgICAqIEBwYXJhbSBjb21tYW5kQ2xhc3NSZWZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyQ29tbWFuZChub3RpZmljYXRpb25OYW1lOiBzdHJpbmcsIGNvbW1hbmRDbGFzc1JlZjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5yZWdpc3RlckNvbW1hbmQobm90aWZpY2F0aW9uTmFtZSwgY29tbWFuZENsYXNzUmVmKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFZlcmlmaWVzIGlmIHRoaXMgY29udHJvbGxlciBoYXMgcmVnaXN0ZXJlZCBhIGNvbW1hbmQuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uTmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFzQ29tbWFuZChub3RpZmljYXRpb25OYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuaGFzQ29tbWFuZChub3RpZmljYXRpb25OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhIGNvbW1hbmQgZnJvbSB0aGlzIGNvbnRyb2xsZXIuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uTmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlQ29tbWFuZChub3RpZmljYXRpb25OYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5yZW1vdmVDb21tYW5kKG5vdGlmaWNhdGlvbk5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0dGVyIGZvciB0aGUgbXVsdGl0b25LZXkuXHJcbiAgICAgKi9cclxuICAgIGdldCBtdWx0aXRvbktleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm11bHRpdG9ua2V5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0dGVyIGZvciB0aGUgbXVsdGl0b25LZXkuXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHNldCBtdWx0aXRvbktleShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubXVsdGl0b25rZXkgPSBrZXk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb250cm9sbGVyLnRzIiwiaW1wb3J0IHtCYXR0bGVTaGlwTWVkaWF0b3J9IGZyb20gXCIuLi8uLi9tZWRpYXRvci9CYXR0bGVTaGlwTWVkaWF0b3JcIjtcclxuaW1wb3J0IHtBYnN0cmFjdFZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3XCI7XHJcbmltcG9ydCAncGl4aS5qcydcclxuXHJcblxyXG4vKipcclxuICogVGhlIG1haW4gQmF0dGxlU2hpcCB2aWV3IGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmF0dGxlU2hpcFZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xyXG5cclxuICAgIC8qKiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBQbGF5ZXJPbmVHcmlkQ29udGFpbmVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBQbGF5ZXJUd29HcmlkQ29udGFpbmVyOiBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIHN0YXRpYyBHYW1lSW5mb0NvbnRhaW5lcjogbnVtYmVyID0gMztcclxuICAgIHB1YmxpYyBzdGF0aWMgR2FtZUJ1dHRvbkNvbnRhaW5lcjogbnVtYmVyID0gNDtcclxuICAgIHB1YmxpYyBzdGF0aWMgUGxheWVyT25lU2hpcHNDb250YWluZXI6IG51bWJlciA9IDU7XHJcbiAgICBwdWJsaWMgc3RhdGljIFBsYXllclR3b1NoaXBzQ29udGFpbmVyOiBudW1iZXIgPSA2O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMubXVsdGl0b25LZXkgPSBrZXk7XHJcblxyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyTWVkaWF0b3IobmV3IEJhdHRsZVNoaXBNZWRpYXRvcihrZXksIHRoaXMpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgdGhlIEJhdHRsZVNoaXAncyB2aWV3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplVmlldygpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplVmlldygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCYXR0bGVTaGlwVmlldyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcpOiBBYnN0cmFjdFZpZXcge1xyXG4gICAgICAgIGlmICghcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0pXHJcbiAgICAgICAgICAgIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldID0gbmV3IEJhdHRsZVNoaXBWaWV3KGtleSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSBhcyBBYnN0cmFjdFZpZXc7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvbWFpblZpZXcvQmF0dGxlU2hpcFZpZXcudHMiLCJpbXBvcnQge0Fic3RyYWN0Tm90aWZpY2F0aW9ufSBmcm9tIFwiLi9BYnN0cmFjdE5vdGlmaWNhdGlvblwiO1xyXG5cclxuLyoqXHJcbiAqIEV4dGVuZCB0aGlzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0RmFjYWRlIGV4dGVuZHMgcHVyZW12Yy5GYWNhZGUgaW1wbGVtZW50cyBwdXJlbXZjLklGYWNhZGUge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMubXVsdGl0b25LZXkgPSBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3RpZmllcyB0aGUgZmFjYWRlJ3MgdmlldyBvYnNlcnZlcnMuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBub3RpZnlPYnNlcnZlcnMobm90aWZpY2F0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudmlldylcclxuICAgICAgICAgICAgdGhpcy52aWV3Lm5vdGlmeU9ic2VydmVycyhub3RpZmljYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VuZHMgYSBub3RpZmljYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICogQHBhcmFtIGJvZHlcclxuICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gYXJyYXlPZlN0cmluZ3NcclxuICAgICAqIEBwYXJhbSBhcnJheU9mTnVtYmVyc1xyXG4gICAgICogQHBhcmFtIG9iamVjdFJlZmVyZW5jZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VuZE5vdGlmaWNhdGlvbihuYW1lOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgdHlwZT86IHN0cmluZywgYXJyYXlPZlN0cmluZ3M/OiBBcnJheTxzdHJpbmc+LCBhcnJheU9mTnVtYmVycz86IEFycmF5PG51bWJlcj4sIG9iamVjdFJlZmVyZW5jZT86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKG5ldyBBYnN0cmFjdE5vdGlmaWNhdGlvbihuYW1lLCBib2R5LCB0eXBlLCBhcnJheU9mU3RyaW5ncywgYXJyYXlPZk51bWJlcnMsIG9iamVjdFJlZmVyZW5jZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25OYW1lXHJcbiAgICAgKiBAcGFyYW0gY29tbWFuZENsYXNzUmVmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3RlckNvbW1hbmQobm90aWZpY2F0aW9uTmFtZTogc3RyaW5nLCBjb21tYW5kQ2xhc3NSZWY6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJDb21tYW5kKG5vdGlmaWNhdGlvbk5hbWUsIGNvbW1hbmRDbGFzc1JlZik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHByb3h5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3RlclByb3h5KHByb3h5OiBwdXJlbXZjLklQcm94eSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyUHJveHkocHJveHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwcm94eU5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJldHJpZXZlUHJveHkocHJveHlOYW1lOiBzdHJpbmcpOiBwdXJlbXZjLklQcm94eSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnJldHJpZXZlUHJveHkocHJveHlOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVkaWF0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyTWVkaWF0b3IobWVkaWF0b3I6IHB1cmVtdmMuSU1lZGlhdG9yKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJNZWRpYXRvcihtZWRpYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lZGlhdG9yTmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmV0cmlldmVNZWRpYXRvcihtZWRpYXRvck5hbWU6IHN0cmluZyk6IHB1cmVtdmMuSU1lZGlhdG9yIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIucmV0cmlldmVNZWRpYXRvcihtZWRpYXRvck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZWRpYXRvck5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhhc01lZGlhdG9yKG1lZGlhdG9yTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmhhc01lZGlhdG9yKG1lZGlhdG9yTmFtZSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RGYWNhZGUudHMiLCJpbXBvcnQgJ3BpeGkuanMnO1xyXG5pbXBvcnQge0Fic3RyYWN0Tm90aWZpY2F0aW9ufSBmcm9tIFwiLi9BYnN0cmFjdE5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQge0Fic3RyYWN0Tm90aWZpZXJ9IGZyb20gXCIuL0Fic3RyYWN0Tm90aWZpZXJcIjtcclxuaW1wb3J0IHtBYnN0cmFjdEZhY2FkZX0gZnJvbSBcIi4vQWJzdHJhY3RGYWNhZGVcIjtcclxuXHJcbi8qKlxyXG4gKiAgRXh0ZW5kIHRoaXMgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RDb21tYW5kIGV4dGVuZHMgcHVyZW12Yy5TaW1wbGVDb21tYW5kIGltcGxlbWVudHMgcHVyZW12Yy5JQ29tbWFuZCwgQWJzdHJhY3ROb3RpZmllciB7XHJcblxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9ICdDb21tYW5kJztcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKG5vdGlmaWNhdGlvbjogQWJzdHJhY3ROb3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5leGVjdXRlKG5vdGlmaWNhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZU5vdGlmaWVyKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZU5vdGlmaWVyKGtleSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gYm9keVxyXG4gICAgICogQHBhcmFtIHR5cGVcclxuICAgICAqIEBwYXJhbSBhcnJheU9mU3RyaW5nc1xyXG4gICAgICogQHBhcmFtIGFycmF5T2ZOdW1iZXJzXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0UmVmZXJlbmNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZW5kTm90aWZpY2F0aW9uKG5hbWU6IHN0cmluZywgYm9keT86IGFueSwgdHlwZT86IHN0cmluZywgYXJyYXlPZlN0cmluZ3M/OiBBcnJheTxzdHJpbmc+LCBhcnJheU9mTnVtYmVycz86IEFycmF5PG51bWJlcj4sIG9iamVjdFJlZmVyZW5jZT86IGFueSk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgZmFjYWRlOiBhbnkgPSBBYnN0cmFjdEZhY2FkZS5nZXRJbnN0YW5jZSh0aGlzLm11bHRpdG9uS2V5KTtcclxuICAgICAgICBmYWNhZGUuc2VuZE5vdGlmaWNhdGlvbihuYW1lLCBib2R5LCB0eXBlLCBhcnJheU9mU3RyaW5ncywgYXJyYXlPZk51bWJlcnMsIG9iamVjdFJlZmVyZW5jZSk7XHJcblxyXG4gICAgfTtcclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb21tYW5kLnRzIiwiaW1wb3J0IHtBYnN0cmFjdENvbnRyb2xsZXJ9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7U3F1YXJlQ29udHJvbGxlcn0gZnJvbSBcIi4vU3F1YXJlQ29udHJvbGxlclwiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDb250cm9scyB0aGUgZ3JpZCdzIGZ1bmN0aW9uYWxpdHkuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JpZENvbnRyb2xsZXIgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuICAgIHB1YmxpYyBHcmlkU3F1YXJlczogU3F1YXJlQ29udHJvbGxlcltdW10gPSBbXTtcclxuICAgIHB1YmxpYyBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNxdWFyZUNvbnRyb2xsZXJLZXkgPSAnU3F1YXJlQ29udHJvbGxlckdHJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3BsYXllcjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5XHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5XHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5PzogbnVtYmVyLCBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk/OiBudW1iZXIsIHBsYXllcj86IHN0cmluZykge1xyXG5cclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5ID0gbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5O1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseSA9IG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlR3JpZFNxdWFyZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5XHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseVxyXG4gICAgICogQHBhcmFtIHBsYXllclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk/OiBudW1iZXIsIG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseT86IG51bWJlciwgcGxheWVyPzogc3RyaW5nKTogR3JpZENvbnRyb2xsZXIge1xyXG4gICAgICAgIGlmICghcHVyZW12Yy5Db250cm9sbGVyLmluc3RhbmNlTWFwW2tleV0pXHJcbiAgICAgICAgICAgIHB1cmVtdmMuQ29udHJvbGxlci5pbnN0YW5jZU1hcFtrZXldID0gbmV3IEdyaWRDb250cm9sbGVyKGtleSwgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5LCBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5LCBwbGF5ZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5Db250cm9sbGVyLmluc3RhbmNlTWFwW2tleV0gYXMgR3JpZENvbnRyb2xsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBHcmlkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVHcmlkU3F1YXJlcygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5udW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5HcmlkU3F1YXJlc1tpXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5udW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HcmlkU3F1YXJlc1tpXVtqXSA9IFNxdWFyZUNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoR3JpZENvbnRyb2xsZXIuU3F1YXJlQ29udHJvbGxlcktleSArICcnICsgaSArIGogKyB0aGlzLm11bHRpdG9uS2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBwcmludCB0aGUgZ3JpZCBvbiB0aGUgc2NyZWVuLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9nR3JpZFNxdWFyZXMoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcHJpbnRBcnJheTogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5udW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk7IGorKykge1xyXG4gICAgICAgICAgICAgICAgcHJpbnRBcnJheS5wdXNoKHRoaXMuR3JpZFNxdWFyZXNbaV1bal0ucHJpbnRTcXVhcmVTdGF0ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcmludEFycmF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBncmlkIHdpdGggdGhlIGhpdHMgb3IgdGhlIG1pc3Nlcy5cclxuICAgICAqIEBwYXJhbSBwb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHBsYXllclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlUG9zaXRpb24ocG9zaXRpb246IEFycmF5PG51bWJlcj4sIHBsYXllcjogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQgaW4gdGhlIDIgZGltZW5zaW9uYWwgYXJyYXkgd2l0aCBhIGhpdC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zb2xlLmxvZygnYXNkYWRzJytwbGF5ZXIpO1xyXG4gICAgICAgIGlmIChwbGF5ZXIgPT0gdGhpcy5fcGxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuR3JpZFNxdWFyZXNbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXS5zcXVhcmVIaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2dHcmlkU3F1YXJlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbnRyb2xsZXIvR3JpZENvbnRyb2xsZXIudHMiLCJpbXBvcnQge0Fic3RyYWN0Q29udHJvbGxlcn0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtCYXR0bGVTaGlwRmFjYWRlLCBGYWNhZGVJbmZvcm1hdGlvbn0gZnJvbSBcIi4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcbmltcG9ydCB7QmF0dGxlU2hpcENvbnRyb2xsZXJ9IGZyb20gXCIuL0JhdHRsZVNoaXBDb250cm9sbGVyXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQbGF5ZXIgY29udHJvbGxlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sbGVyIHtcclxuXHJcbiAgICBwcml2YXRlIF9zaGlwc1BsYWNlZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3BsYXllcjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllciA9IGtleTtcclxuICAgICAgICBjb25zb2xlLmxvZygnUGxheWVyQ29udHJvbGxlciBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcpOiBQbGF5ZXJDb250cm9sbGVyIHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuQ29udHJvbGxlci5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLkNvbnRyb2xsZXIuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBQbGF5ZXJDb250cm9sbGVyKGtleSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLkNvbnRyb2xsZXIuaW5zdGFuY2VNYXBba2V5XSBhcyBQbGF5ZXJDb250cm9sbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgbnVtYmVyIG9mIHNoaXBzIHBsYWNlZCBmb3IgYSBQbGF5ZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVOdW1iZXJPZlNoaXBzUGxhY2VkKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9zaGlwc1BsYWNlZCA8PSBGYWNhZGVJbmZvcm1hdGlvbi5NYXhpbXVtTnVtYmVyT2ZTaGlwc09uQUdyaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2hpcHNQbGFjZWQrKztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NoaXBzIHBsYWNlZCBpbiBQbGF5ZXJDb250cm9sbGVyJyArIHRoaXMuX3NoaXBzUGxhY2VkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNoaXBzUGxhY2VtZW50RmluaXNoZWQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGZhY2FkZTogQmF0dGxlU2hpcEZhY2FkZSA9IEJhdHRsZVNoaXBGYWNhZGUuZ2V0SW5zdGFuY2UoRmFjYWRlSW5mb3JtYXRpb24uQmF0dGxlU2hpcEZhY2FkZUtleSk7XHJcbiAgICAgICAgZmFjYWRlLnNlbmROb3RpZmljYXRpb24oQmF0dGxlU2hpcENvbnRyb2xsZXIuUGxheWVyT25lRmluaXNoZWRQbGFjaW5nVGhlU2hpcHMsICcnKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvY29udHJvbGxlci9QbGF5ZXJDb250cm9sbGVyLnRzIiwiaW1wb3J0IHtCYXR0bGVTaGlwRmFjYWRlLCBGYWNhZGVJbmZvcm1hdGlvbn0gZnJvbSAnLi9wcm9qZWN0L2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlJ1xyXG5cclxubmV3IGNsYXNzIE1haW5cclxue1xyXG4gICAgcHVibGljIG15RmFjYWRlOiBCYXR0bGVTaGlwRmFjYWRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm15RmFjYWRlID0gQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KTtcclxuICAgIH07XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvaW5kZXgudHMiLCJpbXBvcnQge0Fic3RyYWN0Q29udHJvbGxlcn0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtCYXR0bGVTaGlwQ29udHJvbGxlcn0gZnJvbSBcIi4vQmF0dGxlU2hpcENvbnRyb2xsZXJcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNxdWFyZUNvbnRyb2xsZXIgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuICAgIHB1YmxpYyBoaXQ6IHN0cmluZyA9IEJhdHRsZVNoaXBDb250cm9sbGVyLkhpdFRleHQ7XHJcbiAgICBwdWJsaWMgbWlzczogc3RyaW5nID0gQmF0dGxlU2hpcENvbnRyb2xsZXIuTWlzc1RleHQ7XHJcbiAgICBwdWJsaWMgc3F1YXJlU3RhdGU6IHN0cmluZyA9IEJhdHRsZVNoaXBDb250cm9sbGVyLlN0YXRlVGV4dDtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByaW50IGlmIGl0J3MgYSBoaXQgb3IgYSBtaXNzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcHJpbnRTcXVhcmVTdGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNxdWFyZVN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNxdWFyZUhpdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNxdWFyZVN0YXRlID0gdGhpcy5oaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3F1YXJlTWlzcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNxdWFyZVN0YXRlID0gdGhpcy5taXNzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGtleTogc3RyaW5nKTogU3F1YXJlQ29udHJvbGxlciB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLkNvbnRyb2xsZXIuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5Db250cm9sbGVyLmluc3RhbmNlTWFwW2tleV0gPSBuZXcgU3F1YXJlQ29udHJvbGxlcihrZXkpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5Db250cm9sbGVyLmluc3RhbmNlTWFwW2tleV0gYXMgU3F1YXJlQ29udHJvbGxlcjtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvY29udHJvbGxlci9TcXVhcmVDb250cm9sbGVyLnRzIiwiaW1wb3J0ICdwaXhpLmpzJ1xyXG5pbXBvcnQge0Fic3RyYWN0TWVkaWF0b3J9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RNZWRpYXRvclwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmF0dGxlU2hpcE1lZGlhdG9yIGV4dGVuZHMgQWJzdHJhY3RNZWRpYXRvciB7XHJcbiAgICBwdWJsaWMgbmFtZTogU3RyaW5nID0gJ0JhdHRsZVNoaXBNZWRpYXRvcic7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZWRpYXRvck5hbWVcclxuICAgICAqIEBwYXJhbSB2aWV3Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lZGlhdG9yTmFtZT86IHN0cmluZywgdmlld0NvbXBvbmVudD86IGFueSkge1xyXG4gICAgICAgIHN1cGVyKG1lZGlhdG9yTmFtZSwgdmlld0NvbXBvbmVudCk7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnICAgIyAnICsgdGhpcy5uYW1lICsgJyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbm90aWZpY2F0aW9uIHRoYXQgdGhlIEJhdHRsZVNoaXBNZWRpYXRvciBpcyBpbnRlcmVzdGVkIGluLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmcgW10ge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBUaGlzIGlzIHdoZXJlIHRoZSBub3RpZmljYXRpb25zIGFyZSBoYW5kbGVkLlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFuZGxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogcHVyZW12Yy5Ob3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICBsZXQgbmFtZTogU3RyaW5nID0gbm90aWZpY2F0aW9uLm5hbWU7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L21lZGlhdG9yL0JhdHRsZVNoaXBNZWRpYXRvci50cyIsIi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0Tm90aWZpY2F0aW9uIGV4dGVuZHMgcHVyZW12Yy5Ob3RpZmljYXRpb24ge1xyXG5cclxuICAgIHB1YmxpYyBvYmplY3RSZWZlcmVuY2U6IGFueTtcclxuICAgIHB1YmxpYyBhcnJheU9mU3RyaW5nczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgcHVibGljIGFycmF5T2ZOdW1iZXJzOiBBcnJheTxudW1iZXI+ID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqIEBwYXJhbSBib2R5XHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICogQHBhcmFtIGFycmF5T2ZTdHJpbmdzXHJcbiAgICAgKiBAcGFyYW0gYXJyYXlPZk51bWJlcnNcclxuICAgICAqIEBwYXJhbSBvYmplY3RSZWZlcmVuY2VcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBib2R5OiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcsIGFycmF5T2ZTdHJpbmdzPzogQXJyYXk8c3RyaW5nPiwgYXJyYXlPZk51bWJlcnM/OiBBcnJheTxudW1iZXI+LCBvYmplY3RSZWZlcmVuY2U/OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBib2R5LCB0eXBlKTtcclxuICAgICAgICB0aGlzLm9iamVjdFJlZmVyZW5jZSA9IG9iamVjdFJlZmVyZW5jZTtcclxuICAgICAgICB0aGlzLmFycmF5T2ZTdHJpbmdzID0gYXJyYXlPZlN0cmluZ3M7XHJcbiAgICAgICAgdGhpcy5hcnJheU9mTnVtYmVycyA9IGFycmF5T2ZOdW1iZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0TmFtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBib2R5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRCb2R5KGJvZHk6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnNldEJvZHkoYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Qm9keSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5nZXRCb2R5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHR5cGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFR5cGUodHlwZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuc2V0VHlwZSh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldFR5cGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBzdXBlci50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGEgcmVmZXJlbmNlIG9mIHNvbWV0aGluZyB3ZSBuZWVkIGluIHRoZSBmdXR1cmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRPYmplY3RSZWZlcmVuY2UoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYmplY3RSZWZlcmVuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG9iamVjdFJlZmVyZW5jZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0T2JqZWN0UmVmZXJlbmNlKG9iamVjdFJlZmVyZW5jZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RSZWZlcmVuY2UgPSBvYmplY3RSZWZlcmVuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QXJyYXlPZlN0cmluZ3MoKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlPZlN0cmluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QXJyYXlPZk51bWJlcnMoKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlPZk51bWJlcnM7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE5vdGlmaWNhdGlvbi50cyIsImltcG9ydCB7QWJzdHJhY3RWaWV3fSBmcm9tIFwiLi4vLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Vmlld1wiO1xyXG5pbXBvcnQge1NxdWFyZVZpZXd9IGZyb20gXCIuL1NxdWFyZVZpZXdcIjtcclxuaW1wb3J0IHtCYXR0bGVTaGlwRmFjYWRlLCBGYWNhZGVJbmZvcm1hdGlvbiwgTWVkaWF0b3JOb3RpZmljYXRpb25zLCBUZXh0RXJyb3JzfSBmcm9tICcuLi8uLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZSdcclxuaW1wb3J0IHtSdWxlclZpZXd9IGZyb20gXCIuLi9ydWxlci9SdWxlclZpZXdcIjtcclxuaW1wb3J0ICdwaXhpLmpzJ1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgdGhlIGdyaWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHcmlkVmlldyBleHRlbmRzIEFic3RyYWN0VmlldyB7XHJcbiAgICBwcml2YXRlIEdyaWRTcXVhcmVzOiBTcXVhcmVWaWV3W11bXTtcclxuICAgIHB1YmxpYyBSdWxlck5hbWU6IHN0cmluZyA9ICdSdWxlckZvclRoZUdyaWQnO1xyXG4gICAgcHVibGljIG5hbWUgPSAnR3JpZFZpZXcnO1xyXG4gICAgcHJpdmF0ZSBtYXhTaGlwc09uVGhpc0dyaWQ6IG51bWJlciA9IEZhY2FkZUluZm9ybWF0aW9uLk1heGltdW1OdW1iZXJPZlNoaXBzT25BR3JpZDtcclxuICAgIHByaXZhdGUgY3VycmVudE51bWJlck9mU2hpcHM6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9wbGF5ZXI6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCBwbGF5ZXI6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lLmNvbmNhdChwbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllciA9IHBsYXllcjtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuX3BsYXllcikge1xyXG4gICAgICAgICAgICBjYXNlIEZhY2FkZUluZm9ybWF0aW9uLlBsYXllck9uZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQm9hcmQoRmFjYWRlSW5mb3JtYXRpb24uR3JpZDFYUG9zaXRpb24sIEZhY2FkZUluZm9ybWF0aW9uLkdyaWQxWVBvc2l0aW9uLCBGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBGYWNhZGVJbmZvcm1hdGlvbi5OdW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5LCBGYWNhZGVJbmZvcm1hdGlvbi5OdW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHksIEZhY2FkZUluZm9ybWF0aW9uLkdyaWQxQm9yZGVyQ29sb3IsIEZhY2FkZUluZm9ybWF0aW9uLkdyaWRTcXVhcmVGaWxsQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVSdWxlcihGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMVhQb3NpdGlvbiwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZDFZUG9zaXRpb24sIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHksXHJcbiAgICAgICAgICAgICAgICAgICAgRmFjYWRlSW5mb3JtYXRpb24uTnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5LCBGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVXaWR0aCwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZDFCb3JkZXJDb2xvciwgRmFjYWRlSW5mb3JtYXRpb24uUnVsZXJUZXh0Q29sb3IpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEZhY2FkZUluZm9ybWF0aW9uLlBsYXllclR3bzpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQm9hcmQoRmFjYWRlSW5mb3JtYXRpb24uR3JpZDJYUG9zaXRpb24sIEZhY2FkZUluZm9ybWF0aW9uLkdyaWQyWVBvc2l0aW9uLCBGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBGYWNhZGVJbmZvcm1hdGlvbi5OdW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5LCBGYWNhZGVJbmZvcm1hdGlvbi5OdW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHksIEZhY2FkZUluZm9ybWF0aW9uLkdyaWQyQm9yZGVyQ29sb3IsIEZhY2FkZUluZm9ybWF0aW9uLkdyaWRTcXVhcmVGaWxsQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVSdWxlcihGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMlhQb3NpdGlvbiwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZDJZUG9zaXRpb24sIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHksXHJcbiAgICAgICAgICAgICAgICAgICAgRmFjYWRlSW5mb3JtYXRpb24uTnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5LCBGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVXaWR0aCwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZDJCb3JkZXJDb2xvciwgRmFjYWRlSW5mb3JtYXRpb24uUnVsZXJUZXh0Q29sb3IpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgJyArIHRoaXMubmFtZSArICcgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIEluaXRpYWxpemluZyB0aGUgR3JpZCdzIHZpZXdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVWaWV3KCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXRpYWxpemVWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYW4gaW5zdGFuY2Ugb2YgdGhlIEdyaWQncyB2aWV3XHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShrZXk6IHN0cmluZywgcGxheWVyPzogc3RyaW5nKTogR3JpZFZpZXcge1xyXG4gICAgICAgIGlmICghcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0pXHJcbiAgICAgICAgICAgIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldID0gbmV3IEdyaWRWaWV3KGtleSwgcGxheWVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldIGFzIEdyaWRWaWV3O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGlzIGdyaWQncyBjb250YWluZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRVSUNvbnRhaW5lcigpOiBQSVhJLkNvbnRhaW5lciB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnBpdm90LnggPSB0aGlzLl9jb250YWluZXIud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5waXZvdC55ID0gdGhpcy5fY29udGFpbmVyLmhlaWdodCAvIDI7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldFVJQ29udGFpbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc2hpcEluZm9cclxuICAgICAqL1xyXG4gICAgcHVibGljIGZpbGxHcmlkV2l0aEJhdHRsZVNoaXAocG9zaXRpb246IEFycmF5PG51bWJlcj4sIHNoaXBJbmZvOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGdyaWREaW1lbnNpb25zOiBQSVhJLlJlY3RhbmdsZSA9IHRoaXMuZ2V0VUlDb250YWluZXIoKS5nZXRCb3VuZHMoKTtcclxuICAgICAgICBsZXQgeFBvc2l0aW9uOiBudW1iZXIgPSBwb3NpdGlvblswXTtcclxuICAgICAgICBsZXQgeVBvc2l0aW9uOiBudW1iZXIgPSBwb3NpdGlvblsxXTtcclxuICAgICAgICBsZXQgbmV3U2hpcEluZm86IGFueSA9IHNoaXBJbmZvLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2hpcEluZm8pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQ29vcmRpbmF0ZXMgcmVjZWl2ZWQgJyArIFt4UG9zaXRpb24sIHlQb3NpdGlvbl0pO1xyXG4gICAgICAgIGxldCBzcXVhcmVXaWR0aDogbnVtYmVyID0gRmFjYWRlSW5mb3JtYXRpb24uU3F1YXJlV2lkdGggKiBGYWNhZGVJbmZvcm1hdGlvbi5HcmlkU2NhbGU7XHJcblxyXG4gICAgICAgIC8vIGlmIChuZXdTaGlwSW5mb1sxXSA9PSB0aGlzLl9wbGF5ZXIpIHtcclxuXHJcbiAgICAgICAgaWYgKCh4UG9zaXRpb24gPiBncmlkRGltZW5zaW9ucy54KSAmJiAoeFBvc2l0aW9uIDwgZ3JpZERpbWVuc2lvbnMueCArIGdyaWREaW1lbnNpb25zLndpZHRoKSkge1xyXG4gICAgICAgICAgICBpZiAoKHlQb3NpdGlvbiA+IGdyaWREaW1lbnNpb25zLnkpICYmICh5UG9zaXRpb24gPCBncmlkRGltZW5zaW9ucy55ICsgZ3JpZERpbWVuc2lvbnMuaGVpZ2h0KSkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdTaGlwIGlzIGluIEdyaWRWaWV3JyArIHRoaXMuX2dyaWROdW1iZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBGYWNhZGVJbmZvcm1hdGlvbi5OdW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgRmFjYWRlSW5mb3JtYXRpb24uTnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNxdWFyZVhQb3NpdGlvbjogbnVtYmVyID0gdGhpcy5HcmlkU3F1YXJlc1tpXVtqXS5nZXRQb3NpdGlvbigpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3F1YXJlWVBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLkdyaWRTcXVhcmVzW2ldW2pdLmdldFBvc2l0aW9uKClbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmYWNhZGUgPSBCYXR0bGVTaGlwRmFjYWRlLmdldEluc3RhbmNlKEZhY2FkZUluZm9ybWF0aW9uLkJhdHRsZVNoaXBGYWNhZGVLZXkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh4UG9zaXRpb24gPj0gc3F1YXJlWFBvc2l0aW9uICYmIHhQb3NpdGlvbiA8IHNxdWFyZVhQb3NpdGlvbiArIHNxdWFyZVdpZHRoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHlQb3NpdGlvbiA+PSBzcXVhcmVZUG9zaXRpb24gJiYgeVBvc2l0aW9uIDwgc3F1YXJlWVBvc2l0aW9uICsgc3F1YXJlV2lkdGgpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1NoaXBJbmZvWzBdID09IEZhY2FkZUluZm9ybWF0aW9uLlNoaXBIb3Jpem9udGFsVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBudW1iZXJPZlNxdWFyZXM6IG51bWJlciA9IE1hdGgucm91bmQocG9zaXRpb25bMl0gLyBGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVXaWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeDogbnVtYmVyID0gajsgeCA8IGogKyBudW1iZXJPZlNxdWFyZXM7IHgrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE51bWJlck9mU2hpcHMgPD0gdGhpcy5tYXhTaGlwc09uVGhpc0dyaWQgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdyaWRTcXVhcmVzW2ldW3hdLmZpbGxTcXVhcmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWNhZGUuc2VuZE5vdGlmaWNhdGlvbihNZWRpYXRvck5vdGlmaWNhdGlvbnMuVGV4dFVwZGF0ZSwgVGV4dEVycm9ycy5NYXhpbXVtTnVtYmVyT2ZTaGlwUmVhY2hlZCwgdGhpcy5fcGxheWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROdW1iZXJPZlNoaXBzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXdTaGlwSW5mb1swXSA9PSBGYWNhZGVJbmZvcm1hdGlvbi5TaGlwVmVydGljYWxUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG51bWJlck9mU3F1YXJlczogbnVtYmVyID0gTWF0aC5yb3VuZChwb3NpdGlvblszXSAvIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZVdpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4OiBudW1iZXIgPSBpOyB4IDwgaSArIG51bWJlck9mU3F1YXJlczsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROdW1iZXJPZlNoaXBzIDw9IHRoaXMubWF4U2hpcHNPblRoaXNHcmlkICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HcmlkU3F1YXJlc1t4XVtqXS5maWxsU3F1YXJlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjYWRlLnNlbmROb3RpZmljYXRpb24oTWVkaWF0b3JOb3RpZmljYXRpb25zLlRleHRVcGRhdGUsIFRleHRFcnJvcnMuTWF4aW11bU51bWJlck9mU2hpcFJlYWNoZWQsIHRoaXMuX3BsYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TnVtYmVyT2ZTaGlwcysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dyaWRTcXVhcmUgY29vcmRpbmF0ZXMgOiAnICsgW3NxdWFyZVhQb3NpdGlvbiwgc3F1YXJlWVBvc2l0aW9uXSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1xcbiBJbmRleCA6ICcgKyBbaSwgal0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGdyaWRYUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBncmlkWVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlV2lkdGhcclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5XHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5XHJcbiAgICAgKiBAcGFyYW0gZ3JpZEJvcmRlckNvbG9yXHJcbiAgICAgKiBAcGFyYW0gZ3JpZFNxdWFyZUZpbGxDb2xvclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZUJvYXJkKGdyaWRYUG9zaXRpb246IG51bWJlciwgZ3JpZFlQb3NpdGlvbjogbnVtYmVyLCBzcXVhcmVXaWR0aDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OiBudW1iZXIsIG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseTogbnVtYmVyLCBncmlkQm9yZGVyQ29sb3I6IG51bWJlciwgZ3JpZFNxdWFyZUZpbGxDb2xvcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5ld1hQb3NpdGlvbjogbnVtYmVyLFxyXG4gICAgICAgICAgICBuZXdZUG9zaXRpb246IG51bWJlciA9IGdyaWRZUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHNxdWFyZTogU3F1YXJlVmlldywga2V5OiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLkdyaWRTcXVhcmVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLkdyaWRTcXVhcmVzW2ldID0gW107XHJcbiAgICAgICAgICAgIG5ld1hQb3NpdGlvbiA9IGdyaWRYUG9zaXRpb247XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGtleSsrO1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlID0gU3F1YXJlVmlldy5nZXRJbnN0YW5jZSgnU3F1YXJlJyArIGtleSArIE1hdGgucmFuZG9tKCksIG5ld1hQb3NpdGlvbiArIGogKiBzcXVhcmVXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBuZXdZUG9zaXRpb24sIHNxdWFyZVdpZHRoLCBncmlkQm9yZGVyQ29sb3IsIGdyaWRTcXVhcmVGaWxsQ29sb3IsIGosIGkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HcmlkU3F1YXJlc1tpXVtqXSA9IHNxdWFyZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3WVBvc2l0aW9uICs9IHNxdWFyZVdpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk7IGkrKylcclxuICAgICAgICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseTsgaisrKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyLmFkZENoaWxkKHRoaXMuR3JpZFNxdWFyZXNbaV1bal0uZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgR3JpZFNxdWFyZXMgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB4UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB5UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5XHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5XHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlV2lkdGhcclxuICAgICAqIEBwYXJhbSBncmlkQm9yZGVyQ29sb3JcclxuICAgICAqIEBwYXJhbSBydWxlclRleHRDb2xvclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJ1bGVyKHhQb3NpdGlvbjogbnVtYmVyLCB5UG9zaXRpb246IG51bWJlciwgbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk6IG51bWJlciwgc3F1YXJlV2lkdGg6IG51bWJlciwgZ3JpZEJvcmRlckNvbG9yOiBudW1iZXIsIHJ1bGVyVGV4dENvbG9yOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcnVsZXJWaWV3OiBSdWxlclZpZXcgPSBSdWxlclZpZXcuZ2V0SW5zdGFuY2UodGhpcy5SdWxlck5hbWUgKyAnJyArIE1hdGgucmFuZG9tKCksIHhQb3NpdGlvbiwgeVBvc2l0aW9uLCBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5LFxyXG4gICAgICAgICAgICBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHksIHNxdWFyZVdpZHRoLCBncmlkQm9yZGVyQ29sb3IsIHJ1bGVyVGV4dENvbG9yKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmFkZENoaWxkKHJ1bGVyVmlldy5nZXRVSUNvbnRhaW5lcigpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlYXJjaCBmb3IgYSBTcXVhcmUgaW4gdGhpcyBHcmlkLlxyXG4gICAgICogQHBhcmFtIHNxdWFyZVZpZXdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhhc1NxdWFyZShzcXVhcmVWaWV3OiBTcXVhcmVWaWV3KTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgRmFjYWRlSW5mb3JtYXRpb24uTnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkdyaWRTcXVhcmVzW2ldW2pdID09PSBzcXVhcmVWaWV3KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9ncmlkL0dyaWRWaWV3LnRzIiwiaW1wb3J0IHtIaXRWaWV3fSBmcm9tIFwiLi4vaGl0cy9IaXRWaWV3XCI7XHJcbmltcG9ydCB7TWlzc1ZpZXd9IGZyb20gXCIuLi9oaXRzL01pc3NWaWV3XCI7XHJcbmltcG9ydCB7QmF0dGxlU2hpcEZhY2FkZSwgRmFjYWRlSW5mb3JtYXRpb24sIE1lZGlhdG9yTm90aWZpY2F0aW9uc30gZnJvbSBcIi4uLy4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcbmltcG9ydCB7QWJzdHJhY3RWaWV3fSBmcm9tIFwiLi4vLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Vmlld1wiO1xyXG5cclxuLyoqXHJcbiAqIFNtYWxsIHJlY3RhbmdsZSBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNxdWFyZVZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xyXG5cclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbEluZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdmVydGljYWxJbmRleDogbnVtYmVyO1xyXG4gICAgcHVibGljIGJvcmRlckNvbG9yOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZmlsbENvbG9yOiBudW1iZXI7XHJcblxyXG4gICAgLyoqQ29udGFpbnMgdGhlIHNxdWFyZSdzIGJvcmRlciAqL1xyXG4gICAgcHVibGljIHNxdWFyZUdyYXBoaWNzOiBQSVhJLkdyYXBoaWNzO1xyXG5cclxuICAgIC8qKkNvbnRhaW5zIHRoZSBtYXJraW5nIHdoaWNoIHdpbGwgYmUgZWl0aGVyIGEgaGl0IGVpdGhlciBhIG1pc3MgKi9cclxuICAgIHB1YmxpYyBzcXVhcmVNYXJraW5nOiBQSVhJLkdyYXBoaWNzO1xyXG5cclxuICAgIC8qKldpbGwgY2FsbCBhIGZ1bmN0aW9uIHdpdGhpbiB0aGUgZ3JpZCBjbGFzcyAqL1xyXG4gICAgcHVibGljIG9uQ2xpY2tIYW5kbGVyOiBGdW5jdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgc3F1YXJlRXZlbnQ6IHN0cmluZyA9ICdwb2ludGVydGFwJztcclxuXHJcbiAgICAvKipUaGUgSGl0VmlldyBhbmQgdGhlIE1pc3NWaWV3ICovXHJcbiAgICBwcml2YXRlIGhpdFZpZXc6IEhpdFZpZXc7XHJcbiAgICBwcml2YXRlIG1pc3NWaWV3OiBNaXNzVmlldztcclxuXHJcbiAgICAvKipTcXVhcmUncyBnbG93ICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNxdWFyZUdsb3c6IFBJWEkuR3JhcGhpY3M7XHJcblxyXG4gICAgLyoqU2hpcCdzIFNxdWFyZSBmaWxsIG9iamVjdCAqL1xyXG4gICAgcHVibGljIHNoaXBTcXVhcmU6IFBJWEkuR3JhcGhpY3M7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHNxdWFyZVhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKiBAcGFyYW0gYm9yZGVyQ29sb3JcclxuICAgICAqIEBwYXJhbSBmaWxsQ29sb3JcclxuICAgICAqIEBwYXJhbSBob3Jpem9udGFsSW5kZXhcclxuICAgICAqIEBwYXJhbSB2ZXJ0aWNhbEluZGV4XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCBzcXVhcmVYUG9zaXRpb246IG51bWJlciwgc3F1YXJlWVBvc2l0aW9uOiBudW1iZXIsIHNxdWFyZVdpZHRoOiBudW1iZXIsIGJvcmRlckNvbG9yOiBudW1iZXIsIGZpbGxDb2xvcjogbnVtYmVyLCBob3Jpem9udGFsSW5kZXg/OiBudW1iZXIsIHZlcnRpY2FsSW5kZXg/OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMueCA9IHNxdWFyZVhQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnkgPSBzcXVhcmVZUG9zaXRpb247XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHNxdWFyZVdpZHRoO1xyXG4gICAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvcjtcclxuICAgICAgICB0aGlzLmZpbGxDb2xvciA9IGZpbGxDb2xvcjtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxJbmRleCA9IGhvcml6b250YWxJbmRleDtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsSW5kZXggPSB2ZXJ0aWNhbEluZGV4O1xyXG5cclxuICAgICAgICB0aGlzLnNxdWFyZUdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLnNxdWFyZU1hcmtpbmcgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR2xvdyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICAgICAgdGhpcy5zaGlwU3F1YXJlID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zcXVhcmVHcmFwaGljcy5saW5lU3R5bGUoNywgdGhpcy5ib3JkZXJDb2xvciwgMSk7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHcmFwaGljcy5iZWdpbkZpbGwodGhpcy5maWxsQ29sb3IpO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR3JhcGhpY3MuZHJhd1JlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMud2lkdGgpO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR3JhcGhpY3MuZW5kRmlsbCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNxdWFyZUdsb3cubGluZVN0eWxlKDEsIDB4ZmYwMDAwLCAwLjIpO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR2xvdy5iZWdpbkZpbGwoMHhmZjAxMDAsIDAuMik7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHbG93LmRyYXdSZWN0KHRoaXMueCArIDUsIHRoaXMueSArIDUsIHRoaXMud2lkdGggLSA1LCB0aGlzLndpZHRoIC0gNSk7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHbG93LmVuZEZpbGwoKTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdsb3cudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5oaXRWaWV3ID0gSGl0Vmlldy5nZXRJbnN0YW5jZShNYXRoLnJhbmRvbSgpICsgJycsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoKTtcclxuICAgICAgICB0aGlzLmhpdFZpZXcuc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1pc3NWaWV3ID0gTWlzc1ZpZXcuZ2V0SW5zdGFuY2UoTWF0aC5yYW5kb20oKSArICcnLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCk7XHJcbiAgICAgICAgdGhpcy5taXNzVmlldy5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVNYXJraW5nLmFkZENoaWxkKHRoaXMuaGl0Vmlldy5nZXRVSUNvbnRhaW5lcigpKTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdyYXBoaWNzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdyYXBoaWNzLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnNoaXBTcXVhcmUubGluZVN0eWxlKDAsIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZUZpbGxDb2xvcik7XHJcbiAgICAgICAgdGhpcy5zaGlwU3F1YXJlLmJlZ2luRmlsbChGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVGaWxsQ29sb3IsIDAuNik7XHJcbiAgICAgICAgdGhpcy5zaGlwU3F1YXJlLmRyYXdSZWN0KHRoaXMueCArIDUsIHRoaXMueSArIDUsIHRoaXMud2lkdGggLSA1LCB0aGlzLndpZHRoIC0gNSk7XHJcbiAgICAgICAgdGhpcy5zaGlwU3F1YXJlLmVuZEZpbGwoKTtcclxuICAgICAgICB0aGlzLnNoaXBTcXVhcmUudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFRvQ29udGFpbmVyKHRoaXMuc3F1YXJlR3JhcGhpY3MpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9Db250YWluZXIodGhpcy5zcXVhcmVNYXJraW5nKTtcclxuICAgICAgICB0aGlzLmFkZFRvQ29udGFpbmVyKHRoaXMuc3F1YXJlR2xvdyk7XHJcbiAgICAgICAgdGhpcy5hZGRUb0NvbnRhaW5lcih0aGlzLnNoaXBTcXVhcmUpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRpYWxpemVTcXVhcmVJbnRlcmFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaW5pdGlhbGl6aW5nIHRoZSBTcXVhcmUncyB2aWV3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplVmlldygpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgc3F1YXJlIHZpZXdcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBzcXVhcmVYUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVZUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVXaWR0aFxyXG4gICAgICogQHBhcmFtIGJvcmRlckNvbG9yXHJcbiAgICAgKiBAcGFyYW0gZmlsbENvbG9yXHJcbiAgICAgKiBAcGFyYW0gaG9yaXpvbnRhbEluZGV4XHJcbiAgICAgKiBAcGFyYW0gdmVydGljYWxJbmRleFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIHNxdWFyZVhQb3NpdGlvbj86IG51bWJlciwgc3F1YXJlWVBvc2l0aW9uPzogbnVtYmVyLCBzcXVhcmVXaWR0aD86IG51bWJlciwgYm9yZGVyQ29sb3I/OiBudW1iZXIsIGZpbGxDb2xvcj86IG51bWJlciwgaG9yaXpvbnRhbEluZGV4PzogbnVtYmVyLCB2ZXJ0aWNhbEluZGV4PzogbnVtYmVyKTogU3F1YXJlVmlldyB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gPSBuZXcgU3F1YXJlVmlldyhrZXksIHNxdWFyZVhQb3NpdGlvbiwgc3F1YXJlWVBvc2l0aW9uLCBzcXVhcmVXaWR0aCwgYm9yZGVyQ29sb3IsIGZpbGxDb2xvciwgaG9yaXpvbnRhbEluZGV4LCB2ZXJ0aWNhbEluZGV4KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldIGFzIFNxdWFyZVZpZXc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplU3F1YXJlSW50ZXJhY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHcmFwaGljc1xyXG4gICAgICAgICAgICAub24odGhpcy5zcXVhcmVFdmVudCwgdGhpcy5oYW5kbGVNb3VzZURvd24sIHRoaXMpXHJcbiAgICAgICAgICAgIC5vbigncG9pbnRlcm92ZXInLCB0aGlzLmhhbmRsZU1vdXNlT3ZlcilcclxuICAgICAgICAgICAgLm9uKCdwb2ludGVyb3V0JywgdGhpcy5oYW5kbGVNb3VzZU91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIGZvciB0aGlzIHNxdWFyZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5zcXVhcmVHcmFwaGljcy5nZXRCb3VuZHMoKS54LCB0aGlzLnNxdWFyZUdyYXBoaWNzLmdldEJvdW5kcygpLnldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVNb3VzZU92ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHbG93LnZpc2libGUgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlTW91c2VPdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHbG93LnZpc2libGUgPSBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgSGFuZGxlcyB0aGUgY2xpY2tlZCBkb3duIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlTW91c2VEb3duKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGl0KCk7XHJcbiAgICAgICAgQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KVxyXG4gICAgICAgICAgICAuc2VuZE5vdGlmaWNhdGlvbihNZWRpYXRvck5vdGlmaWNhdGlvbnMuU3F1YXJlQ2xpY2tSZXF1ZXN0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBbdGhpcy52ZXJ0aWNhbEluZGV4LCB0aGlzLmhvcml6b250YWxJbmRleF0sdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93cyBhbiBYIG9uIHRoZSBzcXVhcmUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGl0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGl0Vmlldy5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlSW50ZXJhY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3dzIGEgbWlzcyBvbiB0aGUgc3F1YXJlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1pc3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5taXNzVmlldy5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlSW50ZXJhY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbGwgYSBzcXVhcmUgd2l0aCBhIHBhcnQgb2YgYSBCYXR0bGVTaGlwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBmaWxsU3F1YXJlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2hpcFNxdWFyZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpc2FibGVJbnRlcmFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzYWJsZSB0aGUgU3F1YXJlJ3MgaW50ZXJhY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc2FibGVJbnRlcmFjdGlvbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNxdWFyZUdyYXBoaWNzLmludGVyYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHbG93LmludGVyYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVNYXJraW5nLmludGVyYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvZ3JpZC9TcXVhcmVWaWV3LnRzIiwiaW1wb3J0IHtBYnN0cmFjdFZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3XCI7XHJcbmltcG9ydCB7RmFjYWRlSW5mb3JtYXRpb259IGZyb20gXCIuLi8uLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5cclxuLyoqXHJcbiAqICBUaGUgWCBpbnNpZGUgYSBzcXVhcmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSGl0VmlldyBleHRlbmRzIEFic3RyYWN0VmlldyB7XHJcblxyXG4gICAgcHVibGljIGdyYXBoaWNzIDogUElYSS5HcmFwaGljcztcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlWFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlWVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlV2lkdGhcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OnN0cmluZywgc3F1YXJlWFBvc2l0aW9uOiBudW1iZXIsIHNxdWFyZVlQb3NpdGlvbjogbnVtYmVyLCBzcXVhcmVXaWR0aDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3M9bmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSgxMCxGYWNhZGVJbmZvcm1hdGlvbi5IaXRDb2xvcik7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKHNxdWFyZVhQb3NpdGlvbiArIHNxdWFyZVdpZHRoLzMsIHNxdWFyZVlQb3NpdGlvbiArIHNxdWFyZVdpZHRoIC0gc3F1YXJlV2lkdGgvMyk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8oc3F1YXJlWFBvc2l0aW9uICsgc3F1YXJlV2lkdGggLSBzcXVhcmVXaWR0aC8zLCBzcXVhcmVZUG9zaXRpb24gKyBzcXVhcmVXaWR0aC8zKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oc3F1YXJlWFBvc2l0aW9uICsgc3F1YXJlV2lkdGgvMywgc3F1YXJlWVBvc2l0aW9uICsgc3F1YXJlV2lkdGgvMyk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8oc3F1YXJlWFBvc2l0aW9uICsgc3F1YXJlV2lkdGggLSBzcXVhcmVXaWR0aC8zLCBzcXVhcmVZUG9zaXRpb24gKyBzcXVhcmVXaWR0aCAtIHNxdWFyZVdpZHRoLzMpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9Db250YWluZXIodGhpcy5ncmFwaGljcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3NcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBzcXVhcmVYUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVZUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVXaWR0aFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIHNxdWFyZVhQb3NpdGlvbj86IG51bWJlciwgc3F1YXJlWVBvc2l0aW9uPzogbnVtYmVyLCBzcXVhcmVXaWR0aD86IG51bWJlcik6IEhpdFZpZXcge1xyXG4gICAgICAgIGlmICghcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0pXHJcbiAgICAgICAgICAgIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldID0gbmV3IEhpdFZpZXcoa2V5LCBzcXVhcmVYUG9zaXRpb24sIHNxdWFyZVlQb3NpdGlvbiwgc3F1YXJlV2lkdGgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gYXMgSGl0VmlldztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9oaXRzL0hpdFZpZXcudHMiLCJpbXBvcnQge0Fic3RyYWN0Vmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFZpZXdcIjtcclxuaW1wb3J0IHtGYWNhZGVJbmZvcm1hdGlvbn0gZnJvbSBcIi4uLy4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBjcmVhdGVzIHRoZSBtaXNzIGluc2lkZSBhIEdyaWQncyBzcXVhcmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWlzc1ZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xyXG5cclxuICAgIHB1YmxpYyBncmFwaGljczogUElYSS5HcmFwaGljcztcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlWFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlWVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlV2lkdGhcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHNxdWFyZVhQb3NpdGlvbjogbnVtYmVyLCBzcXVhcmVZUG9zaXRpb246IG51bWJlciwgc3F1YXJlV2lkdGg6IG51bWJlcikge1xyXG5cclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVN0eWxlKDgsIEZhY2FkZUluZm9ybWF0aW9uLk1pc3NDb2xvcik7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5kcmF3Q2lyY2xlKHNxdWFyZVhQb3NpdGlvbiArIHNxdWFyZVdpZHRoIC8gMiwgc3F1YXJlWVBvc2l0aW9uICsgc3F1YXJlV2lkdGggLyAyLCBzcXVhcmVXaWR0aCAvIDMuOSk7XHJcbiAgICAgICAgdGhpcy5hZGRUb0NvbnRhaW5lcih0aGlzLmdyYXBoaWNzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3NcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBzcXVhcmVYUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVZUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVXaWR0aFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIHNxdWFyZVhQb3NpdGlvbj86IG51bWJlciwgc3F1YXJlWVBvc2l0aW9uPzogbnVtYmVyLCBzcXVhcmVXaWR0aD86IG51bWJlcik6IE1pc3NWaWV3IHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBNaXNzVmlldyhrZXksIHNxdWFyZVhQb3NpdGlvbiwgc3F1YXJlWVBvc2l0aW9uLCBzcXVhcmVXaWR0aCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSBhcyBNaXNzVmlldztcclxuICAgIH1cclxuXHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L2hpdHMvTWlzc1ZpZXcudHMiLCJpbXBvcnQge1J1bGVyU3F1YXJlfSBmcm9tIFwiLi9SdWxlclNxdWFyZVwiO1xyXG5pbXBvcnQge0Fic3RyYWN0Vmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFZpZXdcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGNyZWF0ZXMgdGhlIGhvcml6b250YWwgYW5kIHZlcnRpY2FsIHJ1bGVyIGFyb3VuZCB0aGUgZ3JpZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJ1bGVyVmlldyBleHRlbmRzIEFic3RyYWN0VmlldyB7XHJcblxyXG4gICAgcHVibGljIG5hbWU6c3RyaW5nPSdSdWxlcic7XHJcblxyXG4gICAgcHVibGljIHhQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIHlQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzcXVhcmVXaWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGJvcmRlckNvbG9yOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGV4dENvbG9yOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBSdWxlclR5cGU6IEFycmF5PHN0cmluZz4gPSBbJ05VTUJFUicsXHJcbiAgICAgICAgJ0xFVFRFUiddO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSB4UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB5UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5XHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5XHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlV2lkdGhcclxuICAgICAqIEBwYXJhbSBib3JkZXJDb2xvclxyXG4gICAgICogQHBhcmFtIHRleHRDb2xvclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgeFBvc2l0aW9uOiBudW1iZXIsIHlQb3NpdGlvbjogbnVtYmVyLCBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk6IG51bWJlciwgc3F1YXJlV2lkdGg6IG51bWJlciwgYm9yZGVyQ29sb3I6IG51bWJlciwgdGV4dENvbG9yOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgICAgICB0aGlzLnhQb3NpdGlvbiA9IHhQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnlQb3NpdGlvbiA9IHlQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLm51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHkgPSBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5O1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5ID0gbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5O1xyXG4gICAgICAgIHRoaXMuc3F1YXJlV2lkdGggPSBzcXVhcmVXaWR0aDtcclxuICAgICAgICB0aGlzLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSB0ZXh0Q29sb3I7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlUnVsZXJWZXJ0aWNhbGx5KCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSdWxlckhvcml6b250YWxseSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6aW5nIHRoZSBSdWxlcidzIHZpZXdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVWaWV3KCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXRpYWxpemVWaWV3KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgUnVsZXJWaWV3IGNyZWF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0geFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0geVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseVxyXG4gICAgICogQHBhcmFtIG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseVxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKiBAcGFyYW0gYm9yZGVyQ29sb3JcclxuICAgICAqIEBwYXJhbSB0ZXh0Q29sb3JcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGtleTogc3RyaW5nLCB4UG9zaXRpb24/OiBudW1iZXIsIHlQb3NpdGlvbj86IG51bWJlciwgbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseT86IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk/OiBudW1iZXIsIHNxdWFyZVdpZHRoPzogbnVtYmVyLCBib3JkZXJDb2xvcj86IG51bWJlciwgdGV4dENvbG9yPzogbnVtYmVyKTogUnVsZXJWaWV3IHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBSdWxlclZpZXcoa2V5LCB4UG9zaXRpb24sIHlQb3NpdGlvbiwgbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseSwgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5LFxyXG4gICAgICAgICAgICAgICAgc3F1YXJlV2lkdGgsIGJvcmRlckNvbG9yLCB0ZXh0Q29sb3IpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gYXMgUnVsZXJWaWV3O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgaG9yaXpvbnRhbCBydWxlciB3aGljaCBjb250YWlucyBudW1iZXJzIGFuZCBiZWdpbnMgd2l0aCAwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlUnVsZXJIb3Jpem9udGFsbHkoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJ1bGVyU3F1YXJlOiBSdWxlclNxdWFyZSA9IFJ1bGVyU3F1YXJlLmdldEluc3RhbmNlKDcwMCAqIE1hdGgucmFuZG9tKCkgKyBpICsgJycsIHRoaXMueFBvc2l0aW9uICsgaSAqIHRoaXMuc3F1YXJlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnlQb3NpdGlvbiArIHRoaXMubnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseSAqIHRoaXMuc3F1YXJlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNxdWFyZVdpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLnRleHRDb2xvciwgdGhpcy5SdWxlclR5cGVbMF0sIGkgKyAxKTtcclxuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyLmFkZENoaWxkKHJ1bGVyU3F1YXJlLmdldFVJQ29udGFpbmVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIHZlcnRpY2FsIHJ1bGVyIHdoaWNoIGNvbnRhaW5zIGxldHRlcnMgYW5kIGJlZ2lucyB3aXRoIEFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVSdWxlclZlcnRpY2FsbHkoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcnVsZXJTcXVhcmU6IFJ1bGVyU3F1YXJlID0gUnVsZXJTcXVhcmUuZ2V0SW5zdGFuY2UoMzAwICogTWF0aC5yYW5kb20oKSArIGkgKyAnJywgdGhpcy54UG9zaXRpb24gLSB0aGlzLnNxdWFyZVdpZHRoLCB0aGlzLnlQb3NpdGlvbiArIGkgKiB0aGlzLnNxdWFyZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcXVhcmVXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy50ZXh0Q29sb3IsIHRoaXMuUnVsZXJUeXBlWzFdLCA2NSArIGkpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQocnVsZXJTcXVhcmUuZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L3J1bGVyL1J1bGVyVmlldy50cyIsImltcG9ydCB7QWJzdHJhY3RWaWV3fSBmcm9tIFwiLi4vLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Vmlld1wiO1xyXG5cclxuLyoqXHJcbiAqIEhhcyB0aGUgcmVzcG9uc2liaWxpdHkgdG8gY3JlYXRlIGEgc2luZ2xlIHNxdWFyZSBhbmQgaW5zaWRlIGl0IHRvIHB1dCB0aGUgY29yZXNwb25kaW5nIGxldHRlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJ1bGVyU3F1YXJlIGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKiBAcGFyYW0gYm9yZGVyQ29sb3JcclxuICAgICAqIEBwYXJhbSB0ZXh0Q29sb3JcclxuICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gYXNjaWlDb2RlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCB4UG9zaXRpb246IG51bWJlciwgeVBvc2l0aW9uOiBudW1iZXIsIHNxdWFyZVdpZHRoOiBudW1iZXIsIGJvcmRlckNvbG9yOiBudW1iZXIsIHRleHRDb2xvcjogbnVtYmVyLCB0eXBlOiBzdHJpbmcsIGFzY2lpQ29kZTogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcblxyXG4gICAgICAgIGxldCBncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDgsIGJvcmRlckNvbG9yKTtcclxuICAgICAgICBncmFwaGljcy5iZWdpbkZpbGwoMHhmZmZmZmYpO1xyXG4gICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0KHhQb3NpdGlvbiwgeVBvc2l0aW9uLCBzcXVhcmVXaWR0aCwgc3F1YXJlV2lkdGgpO1xyXG4gICAgICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcclxuXHJcbiAgICAgICAgbGV0IHRleHQ7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdMRVRURVInKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBuZXcgUElYSS5UZXh0KFN0cmluZy5mcm9tQ2hhckNvZGUoYXNjaWlDb2RlKSwge2ZpbGw6IHRleHRDb2xvcn0pO1xyXG4gICAgICAgICAgICB0ZXh0LmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICAgICAgdGV4dC5wb3NpdGlvbi5zZXQoeFBvc2l0aW9uICsgc3F1YXJlV2lkdGggLyAyLCB5UG9zaXRpb24gKyBzcXVhcmVXaWR0aCAvIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnTlVNQkVSJykge1xyXG4gICAgICAgICAgICB0ZXh0ID0gbmV3IFBJWEkuVGV4dChhc2NpaUNvZGUudG9TdHJpbmcoKSwge2ZpbGw6IHRleHRDb2xvcn0pO1xyXG4gICAgICAgICAgICB0ZXh0LmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICAgICAgdGV4dC5wb3NpdGlvbi5zZXQoeFBvc2l0aW9uICsgc3F1YXJlV2lkdGggLyAyLCB5UG9zaXRpb24gKyBzcXVhcmVXaWR0aCAvIDIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmFkZENoaWxkKGdyYXBoaWNzLCB0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHRlciBmb3IgYW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzc1xyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKiBAcGFyYW0gYm9yZGVyQ29sb3JcclxuICAgICAqIEBwYXJhbSB0ZXh0Q29sb3JcclxuICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gYXNjaWlDb2RlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShrZXk6IHN0cmluZywgeFBvc2l0aW9uPzogbnVtYmVyLCB5UG9zaXRpb24/OiBudW1iZXIsIHNxdWFyZVdpZHRoPzogbnVtYmVyLCBib3JkZXJDb2xvcj86IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I/OiBudW1iZXIsIHR5cGU/OiBzdHJpbmcsIGFzY2lpQ29kZT86IG51bWJlcik6IFJ1bGVyU3F1YXJlIHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBSdWxlclNxdWFyZShrZXksIHhQb3NpdGlvbiwgeVBvc2l0aW9uLCBzcXVhcmVXaWR0aCwgYm9yZGVyQ29sb3IsIHRleHRDb2xvciwgdHlwZSwgYXNjaWlDb2RlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldIGFzIFJ1bGVyU3F1YXJlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L3J1bGVyL1J1bGVyU3F1YXJlLnRzIiwiaW1wb3J0IHtBYnN0cmFjdFZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3XCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBoYXMgdGhlIHJlc3BvbnNpYmlsaXR5IHRvIHNob3cgdGV4dCBub3RpZmljYXRpb25zIG9uIHRoZSBzY3JlZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXh0VmlldyBleHRlbmRzIEFic3RyYWN0VmlldyB7XHJcblxyXG4gICAgLyoqSGVyZSB3ZSBzYXZlIHRoZSB0ZXh0IHN0cmluZyAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZXh0OiBQSVhJLlRleHQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gdGV4dFxyXG4gICAgICogQHBhcmFtIGZvbnRTaXplXHJcbiAgICAgKiBAcGFyYW0gY29sb3JcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHRleHQ6IHN0cmluZywgZm9udFNpemU6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcblxyXG4gICAgICAgIHRoaXMudGV4dCA9IG5ldyBQSVhJLlRleHQodGV4dCwge2ZvbnRTaXplOiBmb250U2l6ZSwgZmlsbDogY29sb3J9KTtcclxuICAgICAgICB0aGlzLnRleHQuYW5jaG9yLnNldCgwLjUsIDAuNSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6aW5nIHRoZSBUZXh0J3Mgdmlld1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZVZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZVZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdGV4dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkVGV4dCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRleHQudGV4dCArPSAnXFxuJyArIHRleHQ7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gdGV4dFxyXG4gICAgICogQHBhcmFtIGZvbnRTaXplXHJcbiAgICAgKiBAcGFyYW0gY29sb3JcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGtleTogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCBmb250U2l6ZT86IG51bWJlciwgY29sb3I/OiBudW1iZXIpOiBUZXh0VmlldyB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gPSBuZXcgVGV4dFZpZXcoa2V5LCB0ZXh0LCBmb250U2l6ZSwgY29sb3IpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gYXMgVGV4dFZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VUlDb250YWluZXIoKTogUElYSS5Db250YWluZXIge1xyXG4gICAgICAgIC8qdGhpcy5fY29udGFpbmVyLnBpdm90LnggPSB0aGlzLl9jb250YWluZXIud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5waXZvdC55ID0gdGhpcy5fY29udGFpbmVyLmhlaWdodCAvIDI7Ki9cclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L3RleHQvVGV4dFZpZXcudHMiLCJpbXBvcnQge0Fic3RyYWN0Vmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFZpZXdcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGJ1dHRvbiBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25WaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcclxuXHJcbiAgICAvKipUaGUgcG9zaXRpb25zIGFuZCB0aGUgc2NhbGUgb2YgdGhlIGJ1dHRvbiAqL1xyXG4gICAgcHVibGljIHhQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIHlQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIHNjYWxlOiBudW1iZXI7XHJcblxyXG4gICAgLyoqVGhlIHNwcml0ZSB0aGF0IGNvbnRhaW5zIHRoZSBidXR0b24ncyBwbmcgaW1hZ2UgKi9cclxuICAgIHB1YmxpYyBzcHJpdGU6IFBJWEkuU3ByaXRlO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0geFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0geVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc2NhbGVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHhQb3NpdGlvbjogbnVtYmVyLCB5UG9zaXRpb246IG51bWJlciwgc2NhbGU6IG51bWJlcikge1xyXG5cclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMueFBvc2l0aW9uID0geFBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMueVBvc2l0aW9uID0geVBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBQSVhJLlNwcml0ZS5mcm9tSW1hZ2UoJ2ltYWdlcy9OZXh0UGhhc2VCdXR0b24ucG5nJyk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc2NhbGUuc2V0KHRoaXMuc2NhbGUpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnNwcml0ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUJ1dHRvbkludGVyYWN0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIHN1cGVyLnJlZ2lzdGVyTWVkaWF0b3IobmV3IEJ1dHRvblZpZXdNZWRpYXRvcihrZXksIHRoaXMpKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgQnV0dG9uVmlldyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNjYWxlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShrZXk6IHN0cmluZywgeFBvc2l0aW9uPzogbnVtYmVyLCB5UG9zaXRpb24/OiBudW1iZXIsIHNjYWxlPzogbnVtYmVyKTogcHVyZW12Yy5WaWV3IHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBCdXR0b25WaWV3KGtleSwgeFBvc2l0aW9uLCB5UG9zaXRpb24sIHNjYWxlKTtcclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gYXMgcHVyZW12Yy5WaWV3O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6aW5nIHRoZSBCdXR0b24ncyB2aWV3LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZVZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZVZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhpcyBidXR0b24ncyBjb250YWluZXIgd2hpY2ggd2lsbCBjb250YWluIHRoZSBidXR0b24ncyB0ZXh0dXJlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VUlDb250YWluZXIoKTogUElYSS5Db250YWluZXIge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5waXZvdC54ID0gdGhpcy5fY29udGFpbmVyLndpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIucGl2b3QueSA9IHRoaXMuX2NvbnRhaW5lci5oZWlnaHQgLyAyO1xyXG4gICAgICAgIHJldHVybiBzdXBlci5nZXRVSUNvbnRhaW5lcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ha2VzIHRoZSBidXR0b24gaW50ZXJhY3RpdmUgd2l0aCB0aGUgcGxheWVyLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVCdXR0b25JbnRlcmFjdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZS5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuYnV0dG9uTW9kZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc3ByaXRlLm9uKCdwb2ludGVydGFwJywgdGhpcy5oYW5kbGVNb3VzZURvd24pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L2J1dHRvbi9CdXR0b25WaWV3LnRzIiwiaW1wb3J0IHtBYnN0cmFjdENvbW1hbmR9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb21tYW5kXCI7XHJcbmltcG9ydCB7R3JpZENvbnRyb2xsZXJ9IGZyb20gXCIuLi9jb250cm9sbGVyL0dyaWRDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7QmF0dGxlU2hpcENvbnRyb2xsZXJ9IGZyb20gXCIuLi9jb250cm9sbGVyL0JhdHRsZVNoaXBDb250cm9sbGVyXCI7XHJcblxyXG4vKipcclxuICogQ29tbWFuZCB1c2VkIHdoZW4gYSBncmlkJ3Mgc3F1YXJlIGlzIGNsaWNrZWQgYnkgYSBwbGF5ZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3F1YXJlQ2xpY2tDb21tYW5kIGV4dGVuZHMgQWJzdHJhY3RDb21tYW5kIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGUgdGhpcyBjb21tYW5kXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKG5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTcXVhcmVDbGljayBIYW5kbGUgUmVxdWVzdCcpO1xyXG4gICAgICAgIGxldCBwbGF5ZXI6IHN0cmluZyA9IG5vdGlmaWNhdGlvbi5nZXRCb2R5KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyKTtcclxuICAgICAgICBHcmlkQ29udHJvbGxlci5nZXRJbnN0YW5jZShCYXR0bGVTaGlwQ29udHJvbGxlci5HcmlkUGxheWVyT25lQ29udHJvbGxlck5hbWUpLnVwZGF0ZVBvc2l0aW9uKG5vdGlmaWNhdGlvbi5nZXRBcnJheU9mTnVtYmVycygpLCBwbGF5ZXIpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9jb21tYW5kL1NxdWFyZUNsaWNrQ29tbWFuZC50cyIsImltcG9ydCB7QWJzdHJhY3RDb21tYW5kfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29tbWFuZFwiO1xyXG5pbXBvcnQgJ3BpeGkuanMnXHJcblxyXG4vKipcclxuICogQ29tbWFuZCBjYWxsZWQgd2hlbiBhIGJ1dHRvbiBpcyBwcmVzc2VkIG9uIHRoZSBzY3JlZW4gYnkgYSBwbGF5ZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQnV0dG9uUHJlc3NDb21tYW5kIGV4dGVuZHMgQWJzdHJhY3RDb21tYW5kIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGUgdGhpcyBjb21tYW5kXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKG5vdGlmaWNhdGlvbjogcHVyZW12Yy5Ob3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQnV0dG9uUHJlc3MgSGFuZGxlIFJlcXVlc3QnKTtcclxuXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbW1hbmQvQnV0dG9uUHJlc3NDb21tYW5kLnRzIiwiaW1wb3J0IHtCYXR0bGVTaGlwRmFjYWRlLCBGYWNhZGVJbmZvcm1hdGlvbn0gZnJvbSBcIi4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcbmltcG9ydCAncGl4aS5qcydcclxuaW1wb3J0IHtBYnN0cmFjdE1lZGlhdG9yfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0TWVkaWF0b3JcIjtcclxuaW1wb3J0IHtCdXR0b25WaWV3fSBmcm9tIFwiLi4vdmlldy9idXR0b24vQnV0dG9uVmlld1wiO1xyXG5pbXBvcnQge0JhdHRsZVNoaXBWaWV3fSBmcm9tIFwiLi4vdmlldy9tYWluVmlldy9CYXR0bGVTaGlwVmlld1wiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBidXR0b24ncyBtZWRpYXRvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25WaWV3TWVkaWF0b3IgZXh0ZW5kcyBBYnN0cmFjdE1lZGlhdG9yIHtcclxuICAgIHB1YmxpYyBuYW1lOiBTdHJpbmcgPSAnQnV0dG9uVmlld01lZGlhdG9yJztcclxuICAgIHB1YmxpYyBidXR0b25WaWV3TmFtZSA9ICdCdXR0b25WaWV3JztcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gdmlld0NvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgdmlld0NvbXBvbmVudDogcHVyZW12Yy5WaWV3ID0gbnVsbCkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIHZpZXdDb21wb25lbnQpO1xyXG5cclxuICAgICAgICBsZXQgY29udGFpbmVyc0xpc3Q6IEFycmF5PFBJWEkuQ29udGFpbmVyPiA9IFtdO1xyXG4gICAgICAgIGNvbnRhaW5lcnNMaXN0LnB1c2goc3VwZXIuZ2V0Vmlld0NvbXBvbmVudCgpLmdldFVJQ29udGFpbmVyKCkpO1xyXG4gICAgICAgIEJhdHRsZVNoaXBGYWNhZGUuZ2V0SW5zdGFuY2UoRmFjYWRlSW5mb3JtYXRpb24uQmF0dGxlU2hpcEZhY2FkZUtleSkuYWRkQ29udGFpbmVyc1RvVmlldyhjb250YWluZXJzTGlzdCwgQmF0dGxlU2hpcFZpZXcuR2FtZUJ1dHRvbkNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCcgICAjICcgKyB0aGlzLm5hbWUgKyAnIGNyZWF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBub3RpZmljYXRpb24gdGhhdCB0aGUgQmF0dGxlU2hpcE1lZGlhdG9yIGlzIGludGVyZXN0ZWQgaW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgVGhpcyBpcyB3aGVyZSB0aGUgbm90aWZpY2F0aW9ucyBhcmUgaGFuZGxlZC5cclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGhhbmRsZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IHB1cmVtdmMuTm90aWZpY2F0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5hbWU6IFN0cmluZyA9IG5vdGlmaWNhdGlvbi5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uUmVnaXN0ZXIoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9CdXR0b25WaWV3TWVkaWF0b3IudHMiLCJpbXBvcnQgJ3BpeGkuanMnXHJcbmltcG9ydCB7XHJcbiAgICBCYXR0bGVTaGlwRmFjYWRlLFxyXG4gICAgQ29tbWFuZE5vdGlmaWNhdGlvbnMsXHJcbiAgICBGYWNhZGVJbmZvcm1hdGlvbixcclxuICAgIE1lZGlhdG9yTm90aWZpY2F0aW9uc1xyXG59IGZyb20gXCIuLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5pbXBvcnQge0Fic3RyYWN0TWVkaWF0b3J9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RNZWRpYXRvclwiO1xyXG5pbXBvcnQge0Fic3RyYWN0Tm90aWZpY2F0aW9ufSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Tm90aWZpY2F0aW9uXCI7XHJcblxyXG4vKipcclxuICogVGhlIGdyaWQncyBtZWRpYXRvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBHcmlkVmlld01lZGlhdG9yIGV4dGVuZHMgQWJzdHJhY3RNZWRpYXRvciB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcGxheWVyOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lZGlhdG9yTmFtZVxyXG4gICAgICogQHBhcmFtIHZpZXdDb21wb25lbnRcclxuICAgICAqIEBwYXJhbSBwbGF5ZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVkaWF0b3JOYW1lOiBzdHJpbmcsIHZpZXdDb21wb25lbnQ6IGFueSwgcGxheWVyOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihtZWRpYXRvck5hbWUsIHZpZXdDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lcnNMaXN0OiBBcnJheTxQSVhJLkNvbnRhaW5lcj4gPSBbXTtcclxuICAgICAgICBjb250YWluZXJzTGlzdC5wdXNoKHN1cGVyLmdldFZpZXdDb21wb25lbnQoKS5nZXRVSUNvbnRhaW5lcigpKTtcclxuICAgICAgICBCYXR0bGVTaGlwRmFjYWRlLmdldEluc3RhbmNlKEZhY2FkZUluZm9ybWF0aW9uLkJhdHRsZVNoaXBGYWNhZGVLZXkpLmFkZENvbnRhaW5lcnNUb1ZpZXcoY29udGFpbmVyc0xpc3QsICtwbGF5ZXIgLSAxKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgJyArIHN1cGVyLmdldE1lZGlhdG9yTmFtZSgpICsgJyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbm90aWZpY2F0aW9uIHRoYXQgdGhlIEdyaWRWaWV3TWVkaWF0b3IgaXMgaW50ZXJlc3RlZCBpbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbTWVkaWF0b3JOb3RpZmljYXRpb25zLkdyaWRTaGlwTWFya2luZyxcclxuICAgICAgICAgICAgTWVkaWF0b3JOb3RpZmljYXRpb25zLlRlc3QsXHJcbiAgICAgICAgICAgIE1lZGlhdG9yTm90aWZpY2F0aW9ucy5TcXVhcmVDbGlja1JlcXVlc3RdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFRoaXMgaXMgd2hlcmUgdGhlIG5vdGlmaWNhdGlvbnMgYXJlIGhhbmRsZWQuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBBYnN0cmFjdE5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAobm90aWZpY2F0aW9uLmdldE5hbWUoKSkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBNZWRpYXRvck5vdGlmaWNhdGlvbnMuR3JpZFNoaXBNYXJraW5nIDpcclxuICAgICAgICAgICAgICAgIGxldCBzaGlwUG9zaXRpb25JbmZvOiBBcnJheTxudW1iZXI+ID0gbm90aWZpY2F0aW9uLmdldEFycmF5T2ZOdW1iZXJzKCk7XHJcbiAgICAgICAgICAgICAgICBzdXBlci5nZXRWaWV3Q29tcG9uZW50KCkuZmlsbEdyaWRXaXRoQmF0dGxlU2hpcChzaGlwUG9zaXRpb25JbmZvLCBub3RpZmljYXRpb24uZ2V0VHlwZSgpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBNZWRpYXRvck5vdGlmaWNhdGlvbnMuU3F1YXJlQ2xpY2tSZXF1ZXN0OlxyXG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IG5vdGlmaWNhdGlvbi5nZXRPYmplY3RSZWZlcmVuY2UoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdXBlci5nZXRWaWV3Q29tcG9uZW50KCkuaGFzU3F1YXJlKHNxdWFyZSkpIHsgIC8vaWYgdGhlIEdyaWQgaGFzIHRoaXMgc3F1YXJlXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNxdWFyZUNsaWNrQ29vcmRpbmF0ZXM6IEFycmF5PG51bWJlcj4gPSBub3RpZmljYXRpb24uZ2V0QXJyYXlPZk51bWJlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICBzdXBlci5zZW5kTm90aWZpY2F0aW9uKENvbW1hbmROb3RpZmljYXRpb25zLlNxdWFyZUNsaWNrTm90aWZpY2F0aW9uLCB0aGlzLl9wbGF5ZXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBzcXVhcmVDbGlja0Nvb3JkaW5hdGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNhc2UgTWVkaWF0b3JOb3RpZmljYXRpb25zLlRlc3Q6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhub3RpZmljYXRpb24uZ2V0QXJyYXlPZlN0cmluZ3MoKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L21lZGlhdG9yL0dyaWRWaWV3TWVkaWF0b3IudHMiLCJpbXBvcnQgJ3BpeGkuanMnXHJcbmltcG9ydCB7QmF0dGxlU2hpcEZhY2FkZSwgRmFjYWRlSW5mb3JtYXRpb24sIE1lZGlhdG9yTm90aWZpY2F0aW9uc30gZnJvbSBcIi4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcbmltcG9ydCB7QWJzdHJhY3RNZWRpYXRvcn0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE1lZGlhdG9yXCI7XHJcbmltcG9ydCB7QmF0dGxlU2hpcFZpZXd9IGZyb20gXCIuLi92aWV3L21haW5WaWV3L0JhdHRsZVNoaXBWaWV3XCI7XHJcblxyXG4vKipcclxuICogIFRleHRWaWV3TWVkaWF0b3JcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXh0Vmlld01lZGlhdG9yIGV4dGVuZHMgQWJzdHJhY3RNZWRpYXRvciB7XHJcbiAgICBwdWJsaWMgbmFtZTogU3RyaW5nID0gJ1RleHRWaWV3TWVkaWF0b3InO1xyXG4gICAgcHVibGljIGNvdW50OiBudW1iZXJbXSA9IFswLCAwXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVkaWF0b3JOYW1lXHJcbiAgICAgKiBAcGFyYW0gdmlld0NvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZWRpYXRvck5hbWU6IHN0cmluZywgdmlld0NvbXBvbmVudDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIobWVkaWF0b3JOYW1lLCB2aWV3Q29tcG9uZW50KTtcclxuXHJcblxyXG4gICAgICAgIGxldCBjb250YWluZXJzTGlzdDogQXJyYXk8UElYSS5Db250YWluZXI+ID0gW107XHJcbiAgICAgICAgY29udGFpbmVyc0xpc3QucHVzaChzdXBlci5nZXRWaWV3Q29tcG9uZW50KCkuZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICAgICAgQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KS5hZGRDb250YWluZXJzVG9WaWV3KGNvbnRhaW5lcnNMaXN0LCBCYXR0bGVTaGlwVmlldy5HYW1lSW5mb0NvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgJyArIHRoaXMubmFtZSArICcgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBub3RpZmljYXRpb24gdGhhdCB0aGUgQmF0dGxlU2hpcE1lZGlhdG9yIGlzIGludGVyZXN0ZWQgaW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gW01lZGlhdG9yTm90aWZpY2F0aW9ucy5UZXh0VXBkYXRlXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdGV4dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkVGV4dFRvVGhlVmlldyh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlci5nZXRWaWV3Q29tcG9uZW50KCkuYWRkVGV4dCh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBUaGlzIGlzIHdoZXJlIHRoZSBub3RpZmljYXRpb25zIGFyZSBoYW5kbGVkLlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFuZGxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogcHVyZW12Yy5Ob3RpZmljYXRpb24pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgc3dpdGNoIChub3RpZmljYXRpb24uZ2V0TmFtZSgpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTWVkaWF0b3JOb3RpZmljYXRpb25zLlRleHRVcGRhdGU6XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JpZE51bWJlcjogbnVtYmVyID0gK25vdGlmaWNhdGlvbi5nZXRUeXBlKCk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGdyaWROdW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2FkZUluZm9ybWF0aW9uLlBsYXllck9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRbMF0gPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUZXh0VG9UaGVWaWV3KG5vdGlmaWNhdGlvbi5nZXRCb2R5KCkgKyAnIFxcbmZvciBQbGF5ZXInICsgZ3JpZE51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50WzBdKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyVHdvOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3VudFsxXSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRleHRUb1RoZVZpZXcobm90aWZpY2F0aW9uLmdldEJvZHkoKSArICcgXFxuZm9yIFBsYXllcicgKyBncmlkTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRbMV0rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9UZXh0Vmlld01lZGlhdG9yLnRzIiwiaW1wb3J0ICdwaXhpLmpzJ1xyXG5pbXBvcnQge1xyXG4gICAgQmF0dGxlU2hpcEZhY2FkZSxcclxuICAgIENvbW1hbmROb3RpZmljYXRpb25zLFxyXG4gICAgRmFjYWRlSW5mb3JtYXRpb24sXHJcbiAgICBNZWRpYXRvck5vdGlmaWNhdGlvbnNcclxufSBmcm9tIFwiLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0IHtBYnN0cmFjdE1lZGlhdG9yfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0TWVkaWF0b3JcIjtcclxuaW1wb3J0IHtCYXR0bGVTaGlwVmlld30gZnJvbSBcIi4uL3ZpZXcvbWFpblZpZXcvQmF0dGxlU2hpcFZpZXdcIjtcclxuaW1wb3J0IHtBYnN0cmFjdE5vdGlmaWNhdGlvbn0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE5vdGlmaWNhdGlvblwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQnVuZGxlU2hpcFZpZXdNZWRpYXRvciBleHRlbmRzIEFic3RyYWN0TWVkaWF0b3Ige1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3BsYXllcjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZWRpYXRvck5hbWVcclxuICAgICAqIEBwYXJhbSB2aWV3Q29tcG9uZW50XHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lZGlhdG9yTmFtZT86IHN0cmluZywgdmlld0NvbXBvbmVudD86IGFueSwgcGxheWVyPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobWVkaWF0b3JOYW1lLCB2aWV3Q29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4gICAgICAgIGxldCBjb250YWluZXJzTGlzdDogQXJyYXk8UElYSS5Db250YWluZXI+ID0gW107XHJcbiAgICAgICAgY29udGFpbmVyc0xpc3QucHVzaChzdXBlci5nZXRWaWV3Q29tcG9uZW50KCkuZ2V0VUlDb250YWluZXIoKSk7XHJcblxyXG4gICAgICAgIGlmIChwbGF5ZXIgPT0gRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyT25lKSB7XHJcbiAgICAgICAgICAgIEJhdHRsZVNoaXBGYWNhZGUuZ2V0SW5zdGFuY2UoRmFjYWRlSW5mb3JtYXRpb24uQmF0dGxlU2hpcEZhY2FkZUtleSkuYWRkQ29udGFpbmVyc1RvVmlldyhjb250YWluZXJzTGlzdCwgQmF0dGxlU2hpcFZpZXcuUGxheWVyT25lU2hpcHNDb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwbGF5ZXIgPT0gRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyVHdvKSB7XHJcbiAgICAgICAgICAgIEJhdHRsZVNoaXBGYWNhZGUuZ2V0SW5zdGFuY2UoRmFjYWRlSW5mb3JtYXRpb24uQmF0dGxlU2hpcEZhY2FkZUtleSkuYWRkQ29udGFpbmVyc1RvVmlldyhjb250YWluZXJzTGlzdCwgQmF0dGxlU2hpcFZpZXcuUGxheWVyVHdvU2hpcHNDb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgJyArIHN1cGVyLmdldE1lZGlhdG9yTmFtZSgpICsgJyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbm90aWZpY2F0aW9uIHRoYXQgdGhlIEJhdHRsZVNoaXBNZWRpYXRvciBpcyBpbnRlcmVzdGVkIGluLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtNZWRpYXRvck5vdGlmaWNhdGlvbnMuU2hpcHNQbGFjZW1lbnQsXHJcbiAgICAgICAgICAgIE1lZGlhdG9yTm90aWZpY2F0aW9ucy5UZXN0XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBUaGlzIGlzIHdoZXJlIHRoZSBub3RpZmljYXRpb25zIGFyZSBoYW5kbGVkLlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFuZGxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogQWJzdHJhY3ROb3RpZmljYXRpb24pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgc3dpdGNoIChub3RpZmljYXRpb24uZ2V0TmFtZSgpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTWVkaWF0b3JOb3RpZmljYXRpb25zLlNoaXBzUGxhY2VtZW50OlxyXG4gICAgICAgICAgICAgICAgbGV0IHNoaXBQb3NpdGlvbkluZm86IEFycmF5PG51bWJlcj4gPSBub3RpZmljYXRpb24uZ2V0QXJyYXlPZk51bWJlcnMoKTtcclxuICAgICAgICAgICAgICAgIHN1cGVyLnNlbmROb3RpZmljYXRpb24oQ29tbWFuZE5vdGlmaWNhdGlvbnMuU2hpcHNQbGFjZW1lbnQsIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uZ2V0VHlwZSgpLCB1bmRlZmluZWQsIHNoaXBQb3NpdGlvbkluZm8pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9CdW5kbGVTaGlwVmlld01lZGlhdG9yLnRzIiwiaW1wb3J0IHtBYnN0cmFjdFZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3XCI7XHJcbmltcG9ydCB7U2luZ2xlU2hpcFZpZXd9IGZyb20gXCIuL1NpbmdsZVNoaXBWaWV3XCI7XHJcbmltcG9ydCB7RmFjYWRlSW5mb3JtYXRpb259IGZyb20gXCIuLi8uLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3Mgd2lsbCBjb250YWluIGFsbCB0aGUgc2hpcHMgZm9yIG9uZSBwbGF5ZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQnVuZGxlU2hpcFZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xyXG5cclxuICAgIHB1YmxpYyBidW5kbGVTaGlwVmlld05hbWUgPSAnQnVuZGxlU2hpcFZpZXcnO1xyXG4gICAgcHVibGljIHNoaXBWaWV3ID0gWydTMDAnLCAnUzAxJywgJ1MwMicsICdTMTAnLCAnUzExJywgJ1MxMiddO1xyXG4gICAgcHVibGljIHNoaXBzQXJyYXk6IEFycmF5PFNpbmdsZVNoaXBWaWV3PiA9IFtdO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTaGlwc1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgcGxheWVyOiBzdHJpbmcsIG51bWJlck9mU2hpcHM6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcbiAgICAgICAgLyoqQWRkcyB0aGUgaG9yaXpvbnRhbCBzaGlwcyB0byB0aGUgYnVuZGxlICovXHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG51bWJlck9mU2hpcHMgLyAyOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGhvcml6b250YWxTaGlwOiBTaW5nbGVTaGlwVmlldyA9IFNpbmdsZVNoaXBWaWV3LmdldEluc3RhbmNlKHRoaXMuc2hpcFZpZXdbaV0gKyBwbGF5ZXIsIDE1MCwgaSAqIDEwMCxcclxuICAgICAgICAgICAgICAgIG51bWJlck9mU2hpcHMgLSBpIC0gMSwgcGxheWVyLCBGYWNhZGVJbmZvcm1hdGlvbi5TaGlwSG9yaXpvbnRhbFR5cGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNoaXBzQXJyYXkucHVzaChob3Jpem9udGFsU2hpcCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG9Db250YWluZXIoaG9yaXpvbnRhbFNoaXAuZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipBZGRzIHRoZSB2ZXJ0aWNhbCBzaGlwcyB0byB0aGUgYnVuZGxlICovXHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gbnVtYmVyT2ZTaGlwcyAvIDI7IGkgPCBudW1iZXJPZlNoaXBzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHZlcnRpY2FsU2hpcDogU2luZ2xlU2hpcFZpZXcgPSBTaW5nbGVTaGlwVmlldy5nZXRJbnN0YW5jZSh0aGlzLnNoaXBWaWV3W2ldICsgcGxheWVyLCAtNTAwICsgaSAqIDEwMCwgLTIwLFxyXG4gICAgICAgICAgICAgICAgaSwgcGxheWVyLCBGYWNhZGVJbmZvcm1hdGlvbi5TaGlwVmVydGljYWxUeXBlKTtcclxuICAgICAgICAgICAgdGhpcy5zaGlwc0FycmF5LnB1c2godmVydGljYWxTaGlwKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb0NvbnRhaW5lcih2ZXJ0aWNhbFNoaXAuZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCcgICAjJyArIHRoaXMuYnVuZGxlU2hpcFZpZXdOYW1lICsgcGxheWVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTaGlwc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIHBsYXllcj86IHN0cmluZywgbnVtYmVyT2ZTaGlwcz86IG51bWJlcik6IEJ1bmRsZVNoaXBWaWV3IHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBCdW5kbGVTaGlwVmlldyhrZXksIHBsYXllciwgbnVtYmVyT2ZTaGlwcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSBhcyBCdW5kbGVTaGlwVmlldztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplVmlldygpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplVmlldygpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L3NoaXBzL0J1bmRsZVNoaXBWaWV3LnRzIiwiaW1wb3J0IHtCYXR0bGVTaGlwRmFjYWRlLCBGYWNhZGVJbmZvcm1hdGlvbiwgTWVkaWF0b3JOb3RpZmljYXRpb25zfSBmcm9tIFwiLi4vLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0IHtBYnN0cmFjdFZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3XCI7XHJcbmltcG9ydCAncGl4aS5qcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqICBDbGFzcyB0aGF0IHJlcHJlc2VudHMgYSBzaW5nbGUgU2hpcC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVTaGlwVmlldyBleHRlbmRzIEFic3RyYWN0VmlldyB7XHJcblxyXG4gICAgcHVibGljIHhQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIHlQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIHNoaXBHcmFwaGljczogUElYSS5HcmFwaGljcztcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbnVtYmVyT2ZTcXVhcmVzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgcGxheWVyOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0geFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0geVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzXHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgeFBvc2l0aW9uOiBudW1iZXIsIHlQb3NpdGlvbjogbnVtYmVyLCBudW1iZXJPZlNxdWFyZXM6IG51bWJlciwgcGxheWVyOiBzdHJpbmcsIHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0ga2V5O1xyXG4gICAgICAgIHRoaXMueFBvc2l0aW9uID0geFBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMueVBvc2l0aW9uID0geVBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuc2hpcEdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLm51bWJlck9mU3F1YXJlcyA9IG51bWJlck9mU3F1YXJlcztcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICAgICAgaWYgKHBsYXllciA9PT0gRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyT25lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcEdyYXBoaWNzLmxpbmVTdHlsZSg2LCBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJPbmVTaGlwQm9yZGVyQ29sb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNoaXBHcmFwaGljcy5iZWdpbkZpbGwoRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyT25lU2hpcEZpbGxDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBsYXllciA9PT0gRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyVHdvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcEdyYXBoaWNzLmxpbmVTdHlsZSg2LCBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJUd29TaGlwQm9yZGVyQ29sb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNoaXBHcmFwaGljcy5iZWdpbkZpbGwoRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyVHdvU2hpcEZpbGxDb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRmFjYWRlSW5mb3JtYXRpb24uU2hpcEhvcml6b250YWxUeXBlOlxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZTcXVhcmVzOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3MuZHJhd1JlY3QodGhpcy54UG9zaXRpb24gKyBpICogRmFjYWRlSW5mb3JtYXRpb24uU3F1YXJlV2lkdGgsIHRoaXMueVBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVXaWR0aCAtIDMsIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZVdpZHRoIC0gMywpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRmFjYWRlSW5mb3JtYXRpb24uU2hpcFZlcnRpY2FsVHlwZTpcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm51bWJlck9mU3F1YXJlczsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcEdyYXBoaWNzLmRyYXdSZWN0KHRoaXMueFBvc2l0aW9uLCB0aGlzLnlQb3NpdGlvbiArIGkgKiBGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgRmFjYWRlSW5mb3JtYXRpb24uU3F1YXJlV2lkdGggLSAzLCBGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVXaWR0aCAtIDMsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNoaXBHcmFwaGljcy5lbmRGaWxsKCk7XHJcbiAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3MuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hpcEdyYXBoaWNzLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnNoaXBHcmFwaGljc1xyXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJkb3duJywgb25EcmFnU3RhcnQpXHJcbiAgICAgICAgICAgIC5vbigncG9pbnRlcnVwJywgb25EcmFnRW5kKVxyXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJ1cG91dHNpZGUnLCBvbkRyYWdFbmQpXHJcbiAgICAgICAgICAgIC5vbigncG9pbnRlcm1vdmUnLCBvbkRyYWdNb3ZlKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogV2hlbiB0aGUgcGxheWVyIHN0YXJ0cyB0byBkcmFnIHRoZSBzaGlwLlxyXG4gICAgICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uRHJhZ1N0YXJ0KGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGV2ZW50LmRhdGE7XHJcblxyXG4gICAgICAgICAgICAvL3N0b3JlIHRoaXMgdmFyaWFibGUgZm9yIGNvbnZlbmllbmNlXHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMucGFyZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vUHJpbnQgdGhlIHBvc2l0aW9uXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gU2V0IHRoZSBwaXZvdCBwb2ludCB0byB0aGUgbmV3IHBvc2l0aW9uXHJcbiAgICAgICAgICAgIHRoaXMucGl2b3Quc2V0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBuZXcgcG9zaXRpb24gb2YgdGhlIHNwcml0ZSB0byB0aGUgcG9zaXRpb24gb2J0YWluZWQgdGhyb3VnaFxyXG4gICAgICAgICAgICAvLyB0aGUgZ2xvYmFsIGRhdGEuIFRoaXMgZW5zdXJlcyB0aGUgcG9zaXRpb24gbGluZXMgdXAgd2l0aCB0aGUgbG9jYXRpb24gb2ZcclxuICAgICAgICAgICAgLy8gdGhlIG1vdXNlIG9uIHRoZSBzY3JlZW4uIEknbSBub3QgY2VydGFpbiB3aHksIGJ1dCB0aGlzIGlzIG5lY2Vzc2FyeS5cclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQodGhpcy5kYXRhLngsIHRoaXMuZGF0YS55KTtcclxuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2Vkb3duID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXaGVuIHRoZSBwbGF5ZXIgaXMgZHJhZ2dpbmcgdGhlIHNoaXAuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gb25EcmFnTW92ZSgpOiB2b2lkIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxwaGEgPSAwLjU7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB0aGlzLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLnBhcmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBuZXdQb3NpdGlvbi54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gbmV3UG9zaXRpb24ueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogV2hlbiB0aGUgcGxheWVyIHN0b3BzIGRyYWdnaW5nIHRoZSBzaGlwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uRHJhZ0VuZCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgICAgIC8vU2hvdyB0aGUgZW5kIHBvc2l0aW9uXHJcblxyXG4gICAgICAgICAgICBsZXQgc2hpcFR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgaWYgKHRoaXMud2lkdGggPiB0aGlzLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgc2hpcFR5cGUgPSBGYWNhZGVJbmZvcm1hdGlvbi5TaGlwSG9yaXpvbnRhbFR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy53aWR0aCA8PSB0aGlzLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgc2hpcFR5cGUgPSBGYWNhZGVJbmZvcm1hdGlvbi5TaGlwVmVydGljYWxUeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMucGFyZW50LnBhcmVudC5wYXJlbnQpO1xyXG5cclxuICAgICAgICAgICAgQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KVxyXG4gICAgICAgICAgICAgICAgLnNlbmROb3RpZmljYXRpb24oTWVkaWF0b3JOb3RpZmljYXRpb25zLlNoaXBzUGxhY2VtZW50LCB1bmRlZmluZWQsIHNoaXBUeXBlLCB1bmRlZmluZWQsIFt0aGlzLmdldEJvdW5kcygpLngsIHRoaXMuZ2V0Qm91bmRzKCkueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRdKTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFscGhhID0gMTtcclxuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gc2V0IHRoZSBpbnRlcmFjdGlvbiBkYXRhIHRvIG51bGxcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnICAgIyBTaW5nbGVTaGlwVmlldyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgdGhlIFNoaXAncyB2aWV3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplVmlldygpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplVmlldygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0geFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0geVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzXHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIHhQb3NpdGlvbj86IG51bWJlciwgeVBvc2l0aW9uPzogbnVtYmVyLCBudW1iZXJPZlNxdWFyZXM/OiBudW1iZXIsIHBsYXllcj86IHN0cmluZywgdHlwZT86IHN0cmluZyk6IFNpbmdsZVNoaXBWaWV3IHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBTaW5nbGVTaGlwVmlldyhrZXksIHhQb3NpdGlvbiwgeVBvc2l0aW9uLCBudW1iZXJPZlNxdWFyZXMsIHBsYXllciwgdHlwZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSBhcyBTaW5nbGVTaGlwVmlldztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHRlciBmb3IgdGhlIFNpbmdsZVNoaXBWaWV3J3MgQ29udGFpbmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRVSUNvbnRhaW5lcigpOiBQSVhJLkNvbnRhaW5lciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcEdyYXBoaWNzO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9zaGlwcy9TaW5nbGVTaGlwVmlldy50cyIsImltcG9ydCB7QWJzdHJhY3RDb21tYW5kfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29tbWFuZFwiO1xyXG5pbXBvcnQge01lZGlhdG9yTm90aWZpY2F0aW9uc30gZnJvbSBcIi4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcbmltcG9ydCAncGl4aS5qcydcclxuaW1wb3J0IHtQbGF5ZXJDb250cm9sbGVyfSBmcm9tIFwiLi4vY29udHJvbGxlci9QbGF5ZXJDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7QmF0dGxlU2hpcENvbnRyb2xsZXJ9IGZyb20gXCIuLi9jb250cm9sbGVyL0JhdHRsZVNoaXBDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7QWJzdHJhY3ROb3RpZmljYXRpb259IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3ROb3RpZmljYXRpb25cIjtcclxuXHJcbi8qKlxyXG4gKiBDb21tYW5kIGNhbGxlZCB3aGVuIGEgc2hpcCBpcyBwbGFjZWQgb24gdGhlIHNjcmVlbiBieSBhIHBsYXllclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNoaXBQbGFjZUNvbW1hbmQgZXh0ZW5kcyBBYnN0cmFjdENvbW1hbmQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4ZWN1dGUobm90aWZpY2F0aW9uOiBBYnN0cmFjdE5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG5cclxuICAgICAgICBQbGF5ZXJDb250cm9sbGVyLmdldEluc3RhbmNlKEJhdHRsZVNoaXBDb250cm9sbGVyLlBsYXllck9uZUNvbnRyb2xsZXJOYW1lKS51cGRhdGVOdW1iZXJPZlNoaXBzUGxhY2VkKCk7XHJcbiAgICAgICAgc3VwZXIuc2VuZE5vdGlmaWNhdGlvbihNZWRpYXRvck5vdGlmaWNhdGlvbnMuR3JpZFNoaXBNYXJraW5nLCB1bmRlZmluZWQsIG5vdGlmaWNhdGlvbi5nZXRUeXBlKCksIHVuZGVmaW5lZCwgbm90aWZpY2F0aW9uLmdldEFycmF5T2ZOdW1iZXJzKCkpO1xyXG5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvY29tbWFuZC9TaGlwUGxhY2VDb21tYW5kLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==