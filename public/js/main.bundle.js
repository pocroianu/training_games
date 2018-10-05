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
var BattleShipView_1 = __webpack_require__(5);
var AbstractFacade_1 = __webpack_require__(9);
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
var ShipPlaceCommand_1 = __webpack_require__(32);
var PlayerFinishedPlacingTheShipsCommand_1 = __webpack_require__(33);
var StartGamePlayCommand_1 = __webpack_require__(34);
var HideTheShipsCommand_1 = __webpack_require__(36);
var ShipPositionInfoCommand_1 = __webpack_require__(37);
var MediatorNotifications;
(function (MediatorNotifications) {
    MediatorNotifications["ShipsPlacement"] = "Ships_Placement";
    MediatorNotifications["GridShipMarking"] = "GridMarking";
    MediatorNotifications["TextUpdate"] = "TextUpdate";
    MediatorNotifications["SquareClickRequest"] = "SquareClickR";
    MediatorNotifications["ShipPosition"] = "ShipPosition";
    MediatorNotifications["HideTheShips"] = "HideThoseDamnShips";
    MediatorNotifications["PlayerHitAShip"] = "PlayerHitAShip";
    MediatorNotifications["PlayerMissed"] = "PlayerMissed";
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
        _super.prototype.registerCommand.call(this, BattleShipController_1.BattleShipController.ShipPositionInfoCommand, ShipPositionInfoCommand_1.ShipPositionInfoCommand);
        _super.prototype.registerCommand.call(this, BattleShipController_1.BattleShipController.PlayerFinishedPlacingTheShipsCommand, PlayerFinishedPlacingTheShipsCommand_1.PlayerFinishedPlacingTheShipsCommand);
        _super.prototype.registerCommand.call(this, BattleShipController_1.BattleShipController.StartGamePlayCommand, StartGamePlayCommand_1.StartGamePlayCommand);
        _super.prototype.registerCommand.call(this, BattleShipController_1.BattleShipController.HideTheShipCommand, HideTheShipsCommand_1.HideTheShipsCommand);
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
var AbstractController_1 = __webpack_require__(6);
var GridController_1 = __webpack_require__(8);
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
    BattleShipController.prototype.checkIfBothPlayersFinishedPlacingTheShips = function () {
        if (PlayerController_1.PlayerController.getInstance(BattleShipController.PlayerOneControllerName).shipsPlacementFinished() === true &&
            PlayerController_1.PlayerController.getInstance(BattleShipController.PlayerTwoControllerName).shipsPlacementFinished() === true) {
            console.log('Both Players finished placing the ships');
            return true;
        }
        return false;
    };
    BattleShipController.getInstance = function (key) {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new BattleShipController(key);
        return puremvc.Controller.instanceMap[key];
    };
    BattleShipController.GridPlayerOneControllerName = 'G1';
    BattleShipController.GridPlayerTwoControllerName = 'G2';
    BattleShipController.PlayerOneControllerName = 'P1';
    BattleShipController.PlayerTwoControllerName = 'P2';
    BattleShipController.GamePlayControllerName = 'GamePlayController';
    BattleShipController.ShipPositionInfoCommand = 'ShipPositionCommand';
    BattleShipController.PlayerFinishedPlacingTheShipsCommand = 'PlayerFBTS';
    BattleShipController.StartGamePlayCommand = 'StartGamePlay';
    BattleShipController.HideTheShipCommand = 'HideTheShipCommand';
    BattleShipController.HitText = 'Hit';
    BattleShipController.MissText = 'Miss';
    BattleShipController.DefaultStateText = 'Non';
    BattleShipController.ShipOnSquare = 'Shp';
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
__webpack_require__(1);
var AbstractFacade_1 = __webpack_require__(9);
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
    BattleShipView.GamePlayStateText = 'GamePlay State';
    return BattleShipView;
}(AbstractView_1.AbstractView));
exports.BattleShipView = BattleShipView;


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
var AbstractFacade_1 = __webpack_require__(9);
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
var AbstractController_1 = __webpack_require__(6);
var SquareController_1 = __webpack_require__(12);
var BattleShipFacade_1 = __webpack_require__(0);
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
    GridController.prototype.checkIfPlayerHasHitAShip = function (position, player) {
        var facade = BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey);
        if (player == this._player) {
            if (this.GridSquares[position[0]][position[1]].checkIfItIsAHit()) {
                this.GridSquares[position[0]][position[1]].squareHit();
                facade.sendNotification(BattleShipFacade_1.MediatorNotifications.PlayerHitAShip, this._player, undefined, undefined, [position[0], position[1]]);
            }
            else {
                this.GridSquares[position[0]][position[1]].squareMiss();
                facade.sendNotification(BattleShipFacade_1.MediatorNotifications.PlayerMissed, this._player, undefined, undefined, [position[0], position[1]]);
            }
            this.logGridSquares();
        }
    };
    GridController.prototype.updateShipsPosition = function (position, player, shipType) {
        if (player === this._player) {
            var i = position[0], j = position[1], numberOfSquares = position[2];
            switch (shipType) {
                case BattleShipFacade_1.FacadeInformation.ShipHorizontalType:
                    for (var x = j; x < j + numberOfSquares; x++) {
                        this.GridSquares[i][x].shipOnSquare();
                    }
                    break;
                case BattleShipFacade_1.FacadeInformation.ShipVerticalType:
                    for (var x = i; x < i + numberOfSquares; x++) {
                        this.GridSquares[x][j].shipOnSquare();
                    }
                    break;
            }
        }
    };
    GridController.SquareControllerKey = 'SquareControllerGG';
    return GridController;
}(AbstractController_1.AbstractController));
exports.GridController = GridController;


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
var AbstractController_1 = __webpack_require__(6);
var BattleShipFacade_1 = __webpack_require__(0);
var PlayerController = (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController(key) {
        var _this = _super.call(this, key) || this;
        _this._shipsPlaced = 0;
        _this._shipPlacementFinished = false;
        _this._player = key;
        console.log('PlayerController created');
        return _this;
    }
    PlayerController.getInstance = function (key) {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new PlayerController(key);
        return puremvc.Controller.instanceMap[key];
    };
    PlayerController.prototype.updateNumberOfShipsPlaced = function (player) {
        if (player == this._player) {
            if (this._shipsPlaced <= BattleShipFacade_1.FacadeInformation.MaximumNumberOfShipsOnAGrid) {
                this._shipsPlaced++;
            }
            if (this._shipsPlaced === BattleShipFacade_1.FacadeInformation.MaximumNumberOfShipsOnAGrid) {
                this._shipPlacementFinished = true;
            }
        }
    };
    PlayerController.prototype.shipsPlacementFinished = function () {
        if (this._shipPlacementFinished == true) {
            console.log('Player' + this._player + ' finished placing the ships');
        }
        return this._shipPlacementFinished;
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
var AbstractController_1 = __webpack_require__(6);
var BattleShipController_1 = __webpack_require__(3);
var SquareController = (function (_super) {
    __extends(SquareController, _super);
    function SquareController(key) {
        var _this = _super.call(this, key) || this;
        _this.hit = BattleShipController_1.BattleShipController.HitText;
        _this.miss = BattleShipController_1.BattleShipController.MissText;
        _this.squareState = BattleShipController_1.BattleShipController.DefaultStateText;
        _this.containsShip = BattleShipController_1.BattleShipController.ShipOnSquare;
        return _this;
    }
    SquareController.getInstance = function (key) {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new SquareController(key);
        return puremvc.Controller.instanceMap[key];
    };
    SquareController.prototype.printSquareState = function () {
        return this.squareState;
    };
    SquareController.prototype.squareHit = function () {
        this.squareState = this.hit;
    };
    SquareController.prototype.checkIfItIsAHit = function () {
        return this.squareState == this.containsShip;
    };
    SquareController.prototype.squareMiss = function () {
        this.squareState = this.miss;
    };
    SquareController.prototype.shipOnSquare = function () {
        this.squareState = this.containsShip;
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
var AbstractMediator_1 = __webpack_require__(7);
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
var BattleShipController_1 = __webpack_require__(3);
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
    GridView.prototype.fillGridWithBattleShip = function (position, shipInfo, player) {
        var gridDimensions = this.getUIContainer().getBounds();
        var xPosition = position[0];
        var yPosition = position[1];
        var newShipInfo = shipInfo.split(',');
        var squareWidth = BattleShipFacade_1.FacadeInformation.SquareWidth * BattleShipFacade_1.FacadeInformation.GridScale;
        if (player == this._player) {
            if ((xPosition > gridDimensions.x) && (xPosition < gridDimensions.x + gridDimensions.width)) {
                if ((yPosition > gridDimensions.y) && (yPosition < gridDimensions.y + gridDimensions.height)) {
                    for (var i = 0; i < BattleShipFacade_1.FacadeInformation.NumberOfSquaresVertically; i++) {
                        for (var j = 0; j < BattleShipFacade_1.FacadeInformation.NumberOfSquaresHorizontally; j++) {
                            var squareXPosition = this.GridSquares[i][j].getPosition()[0];
                            var squareYPosition = this.GridSquares[i][j].getPosition()[1];
                            if ((xPosition >= squareXPosition && xPosition < squareXPosition + squareWidth) &&
                                (yPosition >= squareYPosition && yPosition < squareYPosition + squareWidth)) {
                                if (newShipInfo[0] == BattleShipFacade_1.FacadeInformation.ShipHorizontalType) {
                                    var numberOfSquares = Math.round(position[2] / BattleShipFacade_1.FacadeInformation.SquareWidth);
                                    if (this.currentNumberOfShips < this.maxShipsOnThisGrid) {
                                        for (var x = j; x < j + numberOfSquares; x++) {
                                            this.GridSquares[i][x].fillSquare();
                                        }
                                        this.notifyGridController(i, j, numberOfSquares, BattleShipFacade_1.FacadeInformation.ShipHorizontalType);
                                        this.currentNumberOfShips++;
                                        this.notifyThatPlayerFinishedPlacingTheShips();
                                    }
                                }
                                else if (newShipInfo[0] == BattleShipFacade_1.FacadeInformation.ShipVerticalType) {
                                    var numberOfSquares = Math.round(position[3] / BattleShipFacade_1.FacadeInformation.SquareWidth);
                                    if (this.currentNumberOfShips < this.maxShipsOnThisGrid) {
                                        for (var x = i; x < i + numberOfSquares; x++) {
                                            this.GridSquares[x][j].fillSquare();
                                        }
                                        this.notifyGridController(i, j, numberOfSquares, BattleShipFacade_1.FacadeInformation.ShipVerticalType);
                                        this.currentNumberOfShips++;
                                        this.notifyThatPlayerFinishedPlacingTheShips();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    GridView.prototype.notifyThatPlayerFinishedPlacingTheShips = function () {
        if (this.currentNumberOfShips === this.maxShipsOnThisGrid) {
            var facade = BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey);
            facade.sendNotification(BattleShipFacade_1.MediatorNotifications.TextUpdate, BattleShipFacade_1.TextErrors.MaximumNumberOfShipReached, this._player);
            facade.sendNotification(BattleShipController_1.BattleShipController.PlayerFinishedPlacingTheShipsCommand, this._player);
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
    GridView.prototype.notifyGridController = function (i, j, numberOfSquares, shipType) {
        var facade = BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey);
        facade.sendNotification(BattleShipFacade_1.MediatorNotifications.ShipPosition, this._player, shipType, undefined, [i, j, numberOfSquares]);
    };
    GridView.prototype.hideTheShips = function () {
        for (var i = 0; i < BattleShipFacade_1.FacadeInformation.NumberOfSquaresHorizontally; i++) {
            for (var j = 0; j < BattleShipFacade_1.FacadeInformation.NumberOfSquaresVertically; j++) {
                this.GridSquares[i][j].hideTheShipPart();
            }
        }
    };
    GridView.prototype.updateTheViewWithAHit = function (squarePosition) {
        var i = squarePosition[0], j = squarePosition[1];
        this.GridSquares[i][j].hit();
    };
    GridView.prototype.updateTheViewWithAMiss = function (squarePosition) {
        var i = squarePosition[0], j = squarePosition[1];
        this.GridSquares[i][j].miss();
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
        _this.missView.setActive(false);
        _this.squareMarking.addChild(_this.hitView.getUIContainer(), _this.missView.getUIContainer());
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
        this.squareGlow.interactive = false;
    };
    SquareView.prototype.hideTheShipPart = function () {
        this.shipSquare.visible = false;
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
var BattleShipView_1 = __webpack_require__(5);
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
    TextView.prototype.showGamePlayStateText = function () {
        this.text.text = BattleShipView_1.BattleShipView.GamePlayStateText;
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
var AbstractCommand_1 = __webpack_require__(4);
var GridController_1 = __webpack_require__(8);
var BattleShipController_1 = __webpack_require__(3);
var BattleShipFacade_1 = __webpack_require__(0);
var SquareClickCommand = (function (_super) {
    __extends(SquareClickCommand, _super);
    function SquareClickCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SquareClickCommand.prototype.execute = function (notification) {
        console.log('SquareClick Handle Request');
        var player = notification.getBody();
        switch (player) {
            case BattleShipFacade_1.FacadeInformation.PlayerOne:
                GridController_1.GridController.getInstance(BattleShipController_1.BattleShipController.GridPlayerOneControllerName).checkIfPlayerHasHitAShip(notification.getArrayOfNumbers(), player);
                break;
            case BattleShipFacade_1.FacadeInformation.PlayerTwo:
                GridController_1.GridController.getInstance(BattleShipController_1.BattleShipController.GridPlayerTwoControllerName).checkIfPlayerHasHitAShip(notification.getArrayOfNumbers(), player);
                break;
        }
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
var AbstractCommand_1 = __webpack_require__(4);
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
var AbstractMediator_1 = __webpack_require__(7);
var BattleShipView_1 = __webpack_require__(5);
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
var AbstractMediator_1 = __webpack_require__(7);
var BattleShipController_1 = __webpack_require__(3);
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
            BattleShipFacade_1.MediatorNotifications.SquareClickRequest,
            BattleShipFacade_1.MediatorNotifications.ShipPosition,
            BattleShipFacade_1.MediatorNotifications.HideTheShips,
            BattleShipFacade_1.MediatorNotifications.PlayerHitAShip,
            BattleShipFacade_1.MediatorNotifications.PlayerMissed];
    };
    GridViewMediator.prototype.handleNotification = function (notification) {
        switch (notification.getName()) {
            case BattleShipFacade_1.MediatorNotifications.GridShipMarking:
                var shipPositionInfo = notification.getArrayOfNumbers();
                var player = notification.getBody();
                if (player == this._player)
                    _super.prototype.getViewComponent.call(this).fillGridWithBattleShip(shipPositionInfo, notification.getType(), player);
                break;
            case BattleShipFacade_1.MediatorNotifications.SquareClickRequest:
                var square = notification.getObjectReference();
                if (_super.prototype.getViewComponent.call(this).hasSquare(square)) {
                    var squareClickCoordinates = notification.getArrayOfNumbers();
                    _super.prototype.sendNotification.call(this, BattleShipFacade_1.CommandNotifications.SquareClickNotification, this._player, undefined, undefined, squareClickCoordinates);
                }
                break;
            case BattleShipFacade_1.MediatorNotifications.ShipPosition:
                var player1 = notification.getBody();
                var shipType = notification.getType();
                _super.prototype.sendNotification.call(this, BattleShipController_1.BattleShipController.ShipPositionInfoCommand, player1, shipType, undefined, notification.getArrayOfNumbers());
                break;
            case BattleShipFacade_1.MediatorNotifications.HideTheShips:
                _super.prototype.getViewComponent.call(this).hideTheShips();
                break;
            case BattleShipFacade_1.MediatorNotifications.PlayerHitAShip:
                var playerL = notification.getBody();
                if (this._player == playerL) {
                    _super.prototype.getViewComponent.call(this).updateTheViewWithAHit(notification.getArrayOfNumbers());
                }
                break;
            case BattleShipFacade_1.MediatorNotifications.PlayerMissed:
                var playerK = notification.getBody();
                if (this._player == playerK) {
                    _super.prototype.getViewComponent.call(this).updateTheViewWithAMiss(notification.getArrayOfNumbers());
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
var AbstractMediator_1 = __webpack_require__(7);
var BattleShipView_1 = __webpack_require__(5);
var TextViewMediator = (function (_super) {
    __extends(TextViewMediator, _super);
    function TextViewMediator(mediatorName, viewComponent) {
        var _this = _super.call(this, mediatorName, viewComponent) || this;
        _this.name = 'TextViewMediator';
        _this.count = [0, 0];
        var containersList = [];
        containersList.push(_super.prototype.getViewComponent.call(_this).getUIContainer());
        BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey)
            .addContainersToView(containersList, BattleShipView_1.BattleShipView.GameInfoContainer);
        console.log('   # ' + _this.name + ' created');
        return _this;
    }
    TextViewMediator.prototype.listNotificationInterests = function () {
        return [BattleShipFacade_1.MediatorNotifications.TextUpdate,
            BattleShipView_1.BattleShipView.GamePlayStateText];
    };
    TextViewMediator.prototype.addTextToTheView = function (text) {
        _super.prototype.getViewComponent.call(this).addText(text);
    };
    TextViewMediator.prototype.handleNotification = function (notification) {
        switch (notification.getName()) {
            case BattleShipFacade_1.MediatorNotifications.TextUpdate:
                var player = notification.getType();
                switch (player) {
                    case BattleShipFacade_1.FacadeInformation.PlayerOne:
                        this.addTextToTheView(notification.getBody() + ' \nfor Player' + player);
                        break;
                    case BattleShipFacade_1.FacadeInformation.PlayerTwo:
                        this.addTextToTheView(notification.getBody() + ' \nfor Player' + player);
                        break;
                }
                break;
            case BattleShipView_1.BattleShipView.GamePlayStateText:
                _super.prototype.getViewComponent.call(this).showGamePlayStateText();
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
var AbstractMediator_1 = __webpack_require__(7);
var BattleShipView_1 = __webpack_require__(5);
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
                var player = notification.getBody();
                var shipPositionInfo = notification.getArrayOfNumbers();
                if (player == this._player) {
                    _super.prototype.sendNotification.call(this, BattleShipFacade_1.CommandNotifications.ShipsPlacement, player, notification.getType(), undefined, shipPositionInfo);
                }
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
var ShipGraphics_1 = __webpack_require__(31);
var SingleShipView = (function (_super) {
    __extends(SingleShipView, _super);
    function SingleShipView(key, xPosition, yPosition, numberOfSquares, player, type) {
        var _this = _super.call(this, key) || this;
        _this.name = key;
        _this.xPosition = xPosition;
        _this.yPosition = yPosition;
        _this.shipGraphics = new ShipGraphics_1.ShipGraphics(player);
        _this.numberOfSquares = numberOfSquares;
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
                .sendNotification(BattleShipFacade_1.MediatorNotifications.ShipsPlacement, this.player, shipType, undefined, [this.getBounds().x, this.getBounds().y, this.width, this.height]);
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
var ShipGraphics = (function (_super) {
    __extends(ShipGraphics, _super);
    function ShipGraphics(player, nativeLines) {
        var _this = _super.call(this, nativeLines) || this;
        _this.player = player;
        return _this;
    }
    return ShipGraphics;
}(PIXI.Graphics));
exports.ShipGraphics = ShipGraphics;


/***/ }),
/* 32 */
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
var AbstractCommand_1 = __webpack_require__(4);
var BattleShipFacade_1 = __webpack_require__(0);
__webpack_require__(1);
var PlayerController_1 = __webpack_require__(10);
var ShipPlaceCommand = (function (_super) {
    __extends(ShipPlaceCommand, _super);
    function ShipPlaceCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShipPlaceCommand.prototype.execute = function (notification) {
        var player = notification.getBody();
        console.log(player);
        PlayerController_1.PlayerController.getInstance('P' + player).updateNumberOfShipsPlaced('P' + player);
        _super.prototype.sendNotification.call(this, BattleShipFacade_1.MediatorNotifications.GridShipMarking, player, notification.getType(), undefined, notification.getArrayOfNumbers());
    };
    return ShipPlaceCommand;
}(AbstractCommand_1.AbstractCommand));
exports.ShipPlaceCommand = ShipPlaceCommand;


/***/ }),
/* 33 */
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
var AbstractCommand_1 = __webpack_require__(4);
var BattleShipController_1 = __webpack_require__(3);
var BattleShipFacade_1 = __webpack_require__(0);
var PlayerFinishedPlacingTheShipsCommand = (function (_super) {
    __extends(PlayerFinishedPlacingTheShipsCommand, _super);
    function PlayerFinishedPlacingTheShipsCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerFinishedPlacingTheShipsCommand.prototype.execute = function (notification) {
        console.log('Finished');
        if (BattleShipController_1.BattleShipController.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey).checkIfBothPlayersFinishedPlacingTheShips()) {
            _super.prototype.sendNotification.call(this, BattleShipController_1.BattleShipController.StartGamePlayCommand);
        }
    };
    return PlayerFinishedPlacingTheShipsCommand;
}(AbstractCommand_1.AbstractCommand));
exports.PlayerFinishedPlacingTheShipsCommand = PlayerFinishedPlacingTheShipsCommand;


/***/ }),
/* 34 */
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
var AbstractCommand_1 = __webpack_require__(4);
var GamePlayController_1 = __webpack_require__(35);
var BattleShipController_1 = __webpack_require__(3);
var StartGamePlayCommand = (function (_super) {
    __extends(StartGamePlayCommand, _super);
    function StartGamePlayCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StartGamePlayCommand.prototype.execute = function (notification) {
        GamePlayController_1.GamePlayController.getInstance(BattleShipController_1.BattleShipController.GamePlayControllerName).startGamePlayState();
    };
    return StartGamePlayCommand;
}(AbstractCommand_1.AbstractCommand));
exports.StartGamePlayCommand = StartGamePlayCommand;


/***/ }),
/* 35 */
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
var AbstractController_1 = __webpack_require__(6);
var BattleShipFacade_1 = __webpack_require__(0);
var BattleShipController_1 = __webpack_require__(3);
var BattleShipView_1 = __webpack_require__(5);
var GamePlayController = (function (_super) {
    __extends(GamePlayController, _super);
    function GamePlayController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GamePlayController.getInstance = function (key) {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new GamePlayController(key);
        return puremvc.Controller.instanceMap[key];
    };
    GamePlayController.prototype.startGamePlayState = function () {
        var facade = BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey);
        facade.sendNotification(BattleShipController_1.BattleShipController.HideTheShipCommand, undefined);
        facade.sendNotification(BattleShipView_1.BattleShipView.GamePlayStateText, undefined);
    };
    return GamePlayController;
}(AbstractController_1.AbstractController));
exports.GamePlayController = GamePlayController;


/***/ }),
/* 36 */
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
var AbstractCommand_1 = __webpack_require__(4);
var BattleShipFacade_1 = __webpack_require__(0);
var HideTheShipsCommand = (function (_super) {
    __extends(HideTheShipsCommand, _super);
    function HideTheShipsCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HideTheShipsCommand.prototype.execute = function (notification) {
        _super.prototype.sendNotification.call(this, BattleShipFacade_1.MediatorNotifications.HideTheShips);
    };
    return HideTheShipsCommand;
}(AbstractCommand_1.AbstractCommand));
exports.HideTheShipsCommand = HideTheShipsCommand;


/***/ }),
/* 37 */
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
var AbstractCommand_1 = __webpack_require__(4);
var GridController_1 = __webpack_require__(8);
var BattleShipFacade_1 = __webpack_require__(0);
var BattleShipController_1 = __webpack_require__(3);
var ShipPositionInfoCommand = (function (_super) {
    __extends(ShipPositionInfoCommand, _super);
    function ShipPositionInfoCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShipPositionInfoCommand.prototype.execute = function (notification) {
        var player = notification.getBody();
        switch (player) {
            case BattleShipFacade_1.FacadeInformation.PlayerOne:
                GridController_1.GridController.getInstance(BattleShipController_1.BattleShipController.GridPlayerOneControllerName)
                    .updateShipsPosition(notification.getArrayOfNumbers(), notification.getBody(), notification.getType());
                break;
            case BattleShipFacade_1.FacadeInformation.PlayerTwo:
                GridController_1.GridController.getInstance(BattleShipController_1.BattleShipController.GridPlayerTwoControllerName)
                    .updateShipsPosition(notification.getArrayOfNumbers(), notification.getBody(), notification.getType());
                break;
        }
    };
    return ShipPositionInfoCommand;
}(AbstractCommand_1.AbstractCommand));
exports.ShipPositionInfoCommand = ShipPositionInfoCommand;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmEwODFlMGZkNzJlMTk2MGMwZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUElYSVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvY29udHJvbGxlci9CYXR0bGVTaGlwQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb21tYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9tYWluVmlldy9CYXR0bGVTaGlwVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE1lZGlhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvY29udHJvbGxlci9HcmlkQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RGYWNhZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9jb250cm9sbGVyL1BsYXllckNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9jb250cm9sbGVyL1NxdWFyZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9CYXR0bGVTaGlwTWVkaWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Tm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9ncmlkL0dyaWRWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9ncmlkL1NxdWFyZVZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L2hpdHMvSGl0Vmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvaGl0cy9NaXNzVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvcnVsZXIvUnVsZXJWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9ydWxlci9SdWxlclNxdWFyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvdGV4dC9UZXh0Vmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvYnV0dG9uL0J1dHRvblZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9jb21tYW5kL1NxdWFyZUNsaWNrQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbW1hbmQvQnV0dG9uUHJlc3NDb21tYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvbWVkaWF0b3IvQnV0dG9uVmlld01lZGlhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvbWVkaWF0b3IvR3JpZFZpZXdNZWRpYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L21lZGlhdG9yL1RleHRWaWV3TWVkaWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9CdW5kbGVTaGlwVmlld01lZGlhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9zaGlwcy9CdW5kbGVTaGlwVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvc2hpcHMvU2luZ2xlU2hpcFZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L3NoaXBzL1NoaXBHcmFwaGljcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbW1hbmQvU2hpcFBsYWNlQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbW1hbmQvUGxheWVyRmluaXNoZWRQbGFjaW5nVGhlU2hpcHNDb21tYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvY29tbWFuZC9TdGFydEdhbWVQbGF5Q29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbnRyb2xsZXIvR2FtZVBsYXlDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvY29tbWFuZC9IaWRlVGhlU2hpcHNDb21tYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvY29tbWFuZC9TaGlwUG9zaXRpb25JbmZvQ29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEy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LFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRyxNQUFNO1lBQ1YsS0FBSyxvQ0FBaUIsQ0FBQyxTQUFTO2dCQUM1QiwrQkFBYyxDQUFDLFdBQVcsQ0FBQywyQ0FBb0IsQ0FBQywyQkFBMkIsQ0FBQztxQkFDdkUsbUJBQW1CLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRyxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBQ0wsOEJBQUM7QUFBRCxDQUFDLENBcEI0QyxpQ0FBZSxHQW9CM0Q7QUFwQlksMERBQXVCIiwiZmlsZSI6Ii4vanMvbWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZhMDgxZTBmZDcyZTE5NjBjMGVlIiwiaW1wb3J0IHtCYXR0bGVTaGlwQ29udHJvbGxlcn0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvQmF0dGxlU2hpcENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtCYXR0bGVTaGlwVmlld30gZnJvbSBcIi4uL3ZpZXcvbWFpblZpZXcvQmF0dGxlU2hpcFZpZXdcIjtcclxuaW1wb3J0IHtBYnN0cmFjdEZhY2FkZX0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdEZhY2FkZVwiO1xyXG5pbXBvcnQgJ3BpeGkuanMnO1xyXG5pbXBvcnQge0dyaWRWaWV3fSBmcm9tIFwiLi4vdmlldy9ncmlkL0dyaWRWaWV3XCI7XHJcbmltcG9ydCB7VGV4dFZpZXd9IGZyb20gXCIuLi92aWV3L3RleHQvVGV4dFZpZXdcIjtcclxuaW1wb3J0IHtCdXR0b25WaWV3fSBmcm9tIFwiLi4vdmlldy9idXR0b24vQnV0dG9uVmlld1wiO1xyXG5pbXBvcnQge1NxdWFyZUNsaWNrQ29tbWFuZH0gZnJvbSBcIi4uL2NvbW1hbmQvU3F1YXJlQ2xpY2tDb21tYW5kXCI7XHJcbmltcG9ydCB7QnV0dG9uUHJlc3NDb21tYW5kfSBmcm9tIFwiLi4vY29tbWFuZC9CdXR0b25QcmVzc0NvbW1hbmRcIjtcclxuaW1wb3J0IHtCdXR0b25WaWV3TWVkaWF0b3J9IGZyb20gXCIuLi9tZWRpYXRvci9CdXR0b25WaWV3TWVkaWF0b3JcIjtcclxuaW1wb3J0IHtHcmlkVmlld01lZGlhdG9yfSBmcm9tIFwiLi4vbWVkaWF0b3IvR3JpZFZpZXdNZWRpYXRvclwiO1xyXG5pbXBvcnQge1RleHRWaWV3TWVkaWF0b3J9IGZyb20gXCIuLi9tZWRpYXRvci9UZXh0Vmlld01lZGlhdG9yXCI7XHJcbmltcG9ydCB7QnVuZGxlU2hpcFZpZXdNZWRpYXRvcn0gZnJvbSBcIi4uL21lZGlhdG9yL0J1bmRsZVNoaXBWaWV3TWVkaWF0b3JcIjtcclxuaW1wb3J0IHtCdW5kbGVTaGlwVmlld30gZnJvbSBcIi4uL3ZpZXcvc2hpcHMvQnVuZGxlU2hpcFZpZXdcIjtcclxuaW1wb3J0IHtTaGlwUGxhY2VDb21tYW5kfSBmcm9tIFwiLi4vY29tbWFuZC9TaGlwUGxhY2VDb21tYW5kXCI7XHJcbmltcG9ydCB7UGxheWVyRmluaXNoZWRQbGFjaW5nVGhlU2hpcHNDb21tYW5kfSBmcm9tIFwiLi4vY29tbWFuZC9QbGF5ZXJGaW5pc2hlZFBsYWNpbmdUaGVTaGlwc0NvbW1hbmRcIjtcclxuaW1wb3J0IHtTdGFydEdhbWVQbGF5Q29tbWFuZH0gZnJvbSBcIi4uL2NvbW1hbmQvU3RhcnRHYW1lUGxheUNvbW1hbmRcIjtcclxuaW1wb3J0IHtIaWRlVGhlU2hpcHNDb21tYW5kfSBmcm9tIFwiLi4vY29tbWFuZC9IaWRlVGhlU2hpcHNDb21tYW5kXCI7XHJcbmltcG9ydCB7U2hpcFBvc2l0aW9uSW5mb0NvbW1hbmR9IGZyb20gXCIuLi9jb21tYW5kL1NoaXBQb3NpdGlvbkluZm9Db21tYW5kXCI7XHJcblxyXG5leHBvcnQgZW51bSBNZWRpYXRvck5vdGlmaWNhdGlvbnMge1xyXG4gICAgU2hpcHNQbGFjZW1lbnQgPSAnU2hpcHNfUGxhY2VtZW50JyxcclxuICAgIEdyaWRTaGlwTWFya2luZyA9ICdHcmlkTWFya2luZycsXHJcbiAgICBUZXh0VXBkYXRlID0gJ1RleHRVcGRhdGUnLFxyXG4gICAgU3F1YXJlQ2xpY2tSZXF1ZXN0ID0gJ1NxdWFyZUNsaWNrUicsXHJcbiAgICBTaGlwUG9zaXRpb24gPSAnU2hpcFBvc2l0aW9uJyxcclxuICAgIEhpZGVUaGVTaGlwcyA9ICdIaWRlVGhvc2VEYW1uU2hpcHMnLFxyXG4gICAgUGxheWVySGl0QVNoaXAgPSAnUGxheWVySGl0QVNoaXAnLFxyXG4gICAgUGxheWVyTWlzc2VkID0gJ1BsYXllck1pc3NlZCcsXHJcbiAgICBUZXN0ID0gJ1Rlc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRleHRFcnJvcnMge1xyXG5cclxuICAgIE1heGltdW1OdW1iZXJPZlNoaXBSZWFjaGVkID0gJ01heCBOdW1iZXIgT2YgU2hpcHMgdG8gUGxhY2UgUmVhY2hlZCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29tbWFuZE5vdGlmaWNhdGlvbnMge1xyXG5cclxuICAgIFNxdWFyZUNsaWNrTm90aWZpY2F0aW9uID0gJ0NMSUNLX0hBTkRMRV9DT01NQU5EJyxcclxuICAgIEJ1dHRvblByZXNzID0gJ0JVVFRPTl9QUkVTU19DT01NQU5EJyxcclxuICAgIFN0YXJ0R2FtZSA9ICdTVEFSVF9HQU1FX0NPTU1BTkQnLFxyXG4gICAgU2hpcHNQbGFjZW1lbnQgPSAnU0hJUFNfUExBQ0VNRU5UX0NPTU1BTkQnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEZhY2FkZUluZm9ybWF0aW9uIHtcclxuXHJcbiAgICBHcmlkMVhQb3NpdGlvbiA9IDEwMCxcclxuICAgIEdyaWQxWVBvc2l0aW9uID0gMTAwLFxyXG4gICAgR3JpZDFCb3JkZXJDb2xvciA9IDB4MDAwMGZmLFxyXG4gICAgR3JpZDJYUG9zaXRpb24gPSAxMDAsXHJcbiAgICBHcmlkMllQb3NpdGlvbiA9IDEwMCxcclxuICAgIEdyaWQyQm9yZGVyQ29sb3IgPSAweGZmMDAwMCxcclxuICAgIEdyaWRTY2FsZSA9IDAuNSxcclxuXHJcbiAgICBHcmlkU3F1YXJlRmlsbENvbG9yID0gMHgwMDAwMDAsXHJcbiAgICBSdWxlclRleHRDb2xvciA9IDB4MDAwMDAwLFxyXG4gICAgSGl0Q29sb3IgPSAweDAwZmYwMCxcclxuICAgIE1pc3NDb2xvciA9IDB4ZmYzMzAwLFxyXG5cclxuICAgIFNxdWFyZUZpbGxDb2xvciA9IDB4MDBmZjAwLFxyXG4gICAgU3F1YXJlV2lkdGggPSA4MCxcclxuICAgIE51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHkgPSAxMixcclxuICAgIE51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSA9IDEyLFxyXG5cclxuICAgIFRleHRWaWV3VGV4dCA9ICdHYW1lIHN0YXR1cyA6IFxcblNoaXBzIHBsYWNlbWVudCcsXHJcbiAgICBUZXh0Vmlld0NvbG9yID0gMHg0MmQxZjQsXHJcbiAgICBGb250U2l6ZSA9IDMwLFxyXG5cclxuICAgIFBsYXllck9uZVNoaXBGaWxsQ29sb3IgPSAweDAwMDBmZixcclxuICAgIFBsYXllck9uZVNoaXBCb3JkZXJDb2xvciA9IDB4ZmZmMDAwLFxyXG4gICAgUGxheWVyVHdvU2hpcEZpbGxDb2xvciA9IDB4ZmEwMDAwLFxyXG4gICAgUGxheWVyVHdvU2hpcEJvcmRlckNvbG9yID0gMHhmZmYwMDAsXHJcbiAgICBQbGF5ZXJPbmVOdW1iZXJPZlNoaXBzID0gNixcclxuICAgIFBsYXllclR3b051bWJlck9mU2hpcHMgPSA2LFxyXG5cclxuICAgIEJ1dHRvblZpZXdYUG9zaXRpb24gPSAxMDAsXHJcbiAgICBCdXR0b25WaWV3WVBvc2l0aW9uID0gMTAwLFxyXG4gICAgQnV0dG9uVmlld1NjYWxlID0gMC45LFxyXG5cclxuXHJcbiAgICBQbGF5ZXJPbmUgPSAnMScsXHJcbiAgICBQbGF5ZXJUd28gPSAnMicsXHJcblxyXG4gICAgQmF0dGxlU2hpcEZhY2FkZUtleSA9ICdCYXR0bGVTaGlwJyxcclxuICAgIFNoaXBWZXJ0aWNhbFR5cGUgPSAnVmVydGljYWwnLFxyXG4gICAgU2hpcEhvcml6b250YWxUeXBlID0gJ0hvcml6b250YWwnLFxyXG4gICAgTWF4aW11bU51bWJlck9mU2hpcHNPbkFHcmlkID0gM1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIG1haW4gRmFjYWRlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJhdHRsZVNoaXBGYWNhZGUgZXh0ZW5kcyBBYnN0cmFjdEZhY2FkZSB7XHJcblxyXG4gICAgcHVibGljIGFwcDogUElYSS5BcHBsaWNhdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgZ3JpZFZpZXc6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIGdyaWRWaWV3TWVkaWF0b3I6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIGJ1dHRvblZpZXc6IHN0cmluZztcclxuICAgIHB1YmxpYyBidXR0b25WaWV3TWVkaWF0b3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBidW5kbGVTaGlwVmlldzogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgYnVuZGxlU2hpcFZpZXdNZWRpYXRvcjogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgdGV4dFZpZXc6IHN0cmluZztcclxuICAgIHB1YmxpYyB0ZXh0Vmlld01lZGlhdG9yOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqVGhlIGNvbnRhaW5lcnMgdGhhdCBjb250YWlucyB0aGUgR2FtZUJvYXJkcyAqL1xyXG4gICAgcHVibGljIEdhbWVCb2FyZENvbnRhaW5lck9uZTogUElYSS5Db250YWluZXI7XHJcbiAgICBwdWJsaWMgR2FtZUJvYXJkQ29udGFpbmVyVHdvOiBQSVhJLkNvbnRhaW5lcjtcclxuICAgIC8qKlRoZSBjb250YWluZXIgd2hpY2ggY29udGFpbnMgdGhlIEdhbWVJbmZvICovXHJcbiAgICBwdWJsaWMgR2FtZUluZm9Db250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgLyoqVGhlIGNvbnRhaW5lciB3aGljaCBjb250YWlucyB0aGUgR2FtZUJ1dHRvbiAqL1xyXG4gICAgcHVibGljIEdhbWVCdXR0b25Db250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgLyoqVGhlIGNvbnRhaW5lciB0aGF0IGhvbGRzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBiYXR0bGVzaGlwcyAqL1xyXG4gICAgcHVibGljIFNoaXBzQ29udGFpbmVyT25lOiBQSVhJLkNvbnRhaW5lcjtcclxuICAgIHB1YmxpYyBTaGlwc0NvbnRhaW5lclR3bzogUElYSS5Db250YWluZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcpOiBCYXR0bGVTaGlwRmFjYWRlIHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuRmFjYWRlLmluc3RhbmNlTWFwW2tleV0pXHJcbiAgICAgICAgICAgIHB1cmVtdmMuRmFjYWRlLmluc3RhbmNlTWFwW2tleV0gPSBuZXcgQmF0dGxlU2hpcEZhY2FkZShrZXkpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5GYWNhZGUuaW5zdGFuY2VNYXBba2V5XSBhcyBCYXR0bGVTaGlwRmFjYWRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6aW5nIHRoZSBGYWNhZGUncyBNb2RlbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZU1vZGVsKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIG5vIG1vZGVsIG5lZWRlZCB5ZXRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemluZyB0aGUgRmFjYWRlJ3MgVmlld1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZVZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZpZXcpXHJcbiAgICAgICAgICAgIHRoaXMudmlldyA9IEJhdHRsZVNoaXBWaWV3LmdldEluc3RhbmNlKHRoaXMubXVsdGl0b25LZXkpO1xyXG5cclxuICAgICAgICAvKipLZXlzIGZvciB0aGUgdmlld3MgYW5kIHRoZSBtZWRpYXRvcnMgKi9cclxuICAgICAgICB0aGlzLmdyaWRWaWV3ID0gWydHcmlkT25lQm9hcmQnLCAnR3JpZFR3b0JvYXJkJ107XHJcbiAgICAgICAgdGhpcy5ncmlkVmlld01lZGlhdG9yID0gWydHcmlkT25lTWVkaWF0b3InLCAnR3JpZFR3b01lZGlhdG9yJ107XHJcbiAgICAgICAgdGhpcy5idXR0b25WaWV3ID0gJ0J1dHRvblZpZXcnO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uVmlld01lZGlhdG9yID0gJ0J1dHRvblZpZXdNZWRpYXRvcic7XHJcbiAgICAgICAgdGhpcy5idW5kbGVTaGlwVmlldyA9IFsnU2hpcFBsYXllck9uZVZpZXcnLCAnU2hpcFBsYXllclR3b1ZpZXcnXTtcclxuICAgICAgICB0aGlzLmJ1bmRsZVNoaXBWaWV3TWVkaWF0b3IgPSBbJ1NoaXBQbGF5ZXJPbmVNZWRpYXRvcicsICdTaGlwUGxheWVyVHdvTWVkaWF0b3InXTtcclxuICAgICAgICB0aGlzLnRleHRWaWV3ID0gJ1RleHRWaWV3JztcclxuICAgICAgICB0aGlzLnRleHRWaWV3TWVkaWF0b3IgPSAnVGV4dFZpZXdNZWRpYXRvcic7XHJcblxyXG5cclxuICAgICAgICAvKipSZWdpc3RlcmluZyBhIEJ1dHRvbk1lZGlhdG9yICovXHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJNZWRpYXRvcihuZXcgQnV0dG9uVmlld01lZGlhdG9yKHRoaXMuYnV0dG9uVmlld01lZGlhdG9yLCBCdXR0b25WaWV3LmdldEluc3RhbmNlKHRoaXMuYnV0dG9uVmlldyxcclxuICAgICAgICAgICAgRmFjYWRlSW5mb3JtYXRpb24uQnV0dG9uVmlld1hQb3NpdGlvbiwgRmFjYWRlSW5mb3JtYXRpb24uQnV0dG9uVmlld1lQb3NpdGlvbiwgRmFjYWRlSW5mb3JtYXRpb24uQnV0dG9uVmlld1NjYWxlKSkpO1xyXG5cclxuICAgICAgICAvKipSZWdpc3RlcmluZyB0aGUgdHdvIEdyaWRWaWV3cyAqL1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyTWVkaWF0b3IobmV3IEdyaWRWaWV3TWVkaWF0b3IodGhpcy5ncmlkVmlld01lZGlhdG9yWzBdLFxyXG4gICAgICAgICAgICBHcmlkVmlldy5nZXRJbnN0YW5jZSh0aGlzLmdyaWRWaWV3WzBdLCBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJPbmUpLCBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJPbmUpKTtcclxuICAgICAgICBzdXBlci5yZWdpc3Rlck1lZGlhdG9yKG5ldyBHcmlkVmlld01lZGlhdG9yKHRoaXMuZ3JpZFZpZXdNZWRpYXRvclsxXSxcclxuICAgICAgICAgICAgR3JpZFZpZXcuZ2V0SW5zdGFuY2UodGhpcy5ncmlkVmlld1sxXSwgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyVHdvKSwgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyVHdvKSk7XHJcblxyXG4gICAgICAgIC8qKlJlZ2lzdGVyaW5nIHRoZSBUZXh0TWVkaWF0b3IgKi9cclxuICAgICAgICBzdXBlci5yZWdpc3Rlck1lZGlhdG9yKG5ldyBUZXh0Vmlld01lZGlhdG9yKHRoaXMudGV4dFZpZXdNZWRpYXRvciwgVGV4dFZpZXcuZ2V0SW5zdGFuY2UodGhpcy50ZXh0VmlldyxcclxuICAgICAgICAgICAgRmFjYWRlSW5mb3JtYXRpb24uVGV4dFZpZXdUZXh0LCBGYWNhZGVJbmZvcm1hdGlvbi5Gb250U2l6ZSwgRmFjYWRlSW5mb3JtYXRpb24uVGV4dFZpZXdDb2xvcikpKTtcclxuXHJcblxyXG4gICAgICAgIC8qKlJlZ2lzdGVyaW5nIHRoZSBTaGlwcyBNZWRpYXRvcnMgKi9cclxuICAgICAgICBzdXBlci5yZWdpc3Rlck1lZGlhdG9yKG5ldyBCdW5kbGVTaGlwVmlld01lZGlhdG9yKHRoaXMuYnVuZGxlU2hpcFZpZXdNZWRpYXRvclswXSxcclxuICAgICAgICAgICAgQnVuZGxlU2hpcFZpZXcuZ2V0SW5zdGFuY2UodGhpcy5idW5kbGVTaGlwVmlld1swXSwgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyT25lLCBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJPbmVOdW1iZXJPZlNoaXBzKSwgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyT25lKSk7XHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJNZWRpYXRvcihuZXcgQnVuZGxlU2hpcFZpZXdNZWRpYXRvcih0aGlzLmJ1bmRsZVNoaXBWaWV3TWVkaWF0b3JbMV0sXHJcbiAgICAgICAgICAgIEJ1bmRsZVNoaXBWaWV3LmdldEluc3RhbmNlKHRoaXMuYnVuZGxlU2hpcFZpZXdbMV0sIEZhY2FkZUluZm9ybWF0aW9uLlBsYXllclR3bywgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyVHdvTnVtYmVyT2ZTaGlwcyksIEZhY2FkZUluZm9ybWF0aW9uLlBsYXllclR3bykpO1xyXG5cclxuXHJcbiAgICAgICAgLy9KdXN0IGZvciBmdW5cclxuICAgICAgICBsZXQgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgdGhpcy5hcHAudGlja2VyLmFkZCgoZGVsdGEpID0+IHtcclxuICAgICAgICAgICAgY291bnQgKz0gMC4xO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRleHQ6IGFueSA9IHN1cGVyLnJldHJpZXZlTWVkaWF0b3IodGhpcy50ZXh0Vmlld01lZGlhdG9yKS5nZXRWaWV3Q29tcG9uZW50KCkuZ2V0VUlDb250YWluZXIoKTtcclxuICAgICAgICAgICAgdGV4dC5zY2FsZS5zZXQoMSArIE1hdGguc2luKGNvdW50KSAqIDAuMDUpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemluZyB0aGUgRmFjYWRlJ3MgQ29udHJvbGxlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZUNvbnRyb2xsZXIoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRyb2xsZXIpXHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlciA9IEJhdHRsZVNoaXBDb250cm9sbGVyLmdldEluc3RhbmNlKHRoaXMubXVsdGl0b25LZXkpO1xyXG5cclxuICAgICAgICAvKipSZWdpc3RlcmluZyB0aGUgY29tbWFuZHMgKi9cclxuICAgICAgICBzdXBlci5yZWdpc3RlckNvbW1hbmQoQ29tbWFuZE5vdGlmaWNhdGlvbnMuU3F1YXJlQ2xpY2tOb3RpZmljYXRpb24sIFNxdWFyZUNsaWNrQ29tbWFuZCk7XHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJDb21tYW5kKENvbW1hbmROb3RpZmljYXRpb25zLkJ1dHRvblByZXNzLCBCdXR0b25QcmVzc0NvbW1hbmQpO1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyQ29tbWFuZChDb21tYW5kTm90aWZpY2F0aW9ucy5TaGlwc1BsYWNlbWVudCwgU2hpcFBsYWNlQ29tbWFuZCk7XHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJDb21tYW5kKEJhdHRsZVNoaXBDb250cm9sbGVyLlNoaXBQb3NpdGlvbkluZm9Db21tYW5kLCBTaGlwUG9zaXRpb25JbmZvQ29tbWFuZCk7XHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJDb21tYW5kKEJhdHRsZVNoaXBDb250cm9sbGVyLlBsYXllckZpbmlzaGVkUGxhY2luZ1RoZVNoaXBzQ29tbWFuZCwgUGxheWVyRmluaXNoZWRQbGFjaW5nVGhlU2hpcHNDb21tYW5kKTtcclxuICAgICAgICBzdXBlci5yZWdpc3RlckNvbW1hbmQoQmF0dGxlU2hpcENvbnRyb2xsZXIuU3RhcnRHYW1lUGxheUNvbW1hbmQsIFN0YXJ0R2FtZVBsYXlDb21tYW5kKTtcclxuICAgICAgICBzdXBlci5yZWdpc3RlckNvbW1hbmQoQmF0dGxlU2hpcENvbnRyb2xsZXIuSGlkZVRoZVNoaXBDb21tYW5kLCBIaWRlVGhlU2hpcHNDb21tYW5kKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgY29udGFpbmVycyB0byB0aGUgdmlldyBzY3JlZW5cclxuICAgICAqIEBwYXJhbSBjb250YWluZXJzTGlzdFxyXG4gICAgICogQHBhcmFtIHR5cGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZENvbnRhaW5lcnNUb1ZpZXcoY29udGFpbmVyc0xpc3Q6IEFycmF5PFBJWEkuQ29udGFpbmVyPiwgdHlwZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBjb250YWluZXJzTGlzdCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gQmF0dGxlU2hpcFZpZXcuUGxheWVyT25lR3JpZENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgLyoqQWRkaW5nIHRvIHRoZSBQbGF5ZXJPbmVHcmlkIENvbnRhaW5lciAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gQmF0dGxlU2hpcFZpZXcuUGxheWVyVHdvR3JpZENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgLyoqQWRkaW5nIHRvIHRoZSBQbGF5ZXJUd29HcmlkIENvbnRhaW5lciAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28uYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gQmF0dGxlU2hpcFZpZXcuR2FtZUluZm9Db250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIC8qKkFkZGluZyB0byB0aGUgR2FtZUluZm8gQ29udGFpbmVyICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IEJhdHRsZVNoaXBWaWV3LkdhbWVCdXR0b25Db250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIC8qKkFkZGluZyB0byB0aGUgR2FtZUJ1dHRvbiBDb250YWluZXIgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBCYXR0bGVTaGlwVmlldy5QbGF5ZXJPbmVTaGlwc0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgLyoqQWRkaW5nIHRvIHRoZSBQbGF5ZXJPbmVTaGlwcyBDb250YWluZXIgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJPbmUuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gQmF0dGxlU2hpcFZpZXcuUGxheWVyVHdvU2hpcHNDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIC8qKkFkZGluZyB0byB0aGUgUGxheWVyVHdvU2hpcHMgQ29udGFpbmVyICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyVHdvLmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6aW5nIHRoZSBGYWNhZGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVGYWNhZGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVsdGl0b25LZXkgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuYXBwID0gbmV3IFBJWEkuQXBwbGljYXRpb24od2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCwge2JhY2tncm91bmRDb2xvcjogMHgwMDAwMDB9KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYXBwLnZpZXcpO1xyXG4gICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lID0gbmV3IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvID0gbmV3IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXI7XHJcbiAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJPbmUgPSBuZXcgUElYSS5Db250YWluZXI7XHJcbiAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lclR3byA9IG5ldyBQSVhJLkNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZSwgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28sXHJcbiAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIsIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lciwgdGhpcy5TaGlwc0NvbnRhaW5lck9uZSwgdGhpcy5TaGlwc0NvbnRhaW5lclR3byk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmNoZWNrU3RhcnRPcmllbnRhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlT3JpZW50YXRpb24oKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVWaWV3KCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplTW9kZWwoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVDb250cm9sbGVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0JhdHRsZVNoaXBGYWNhZGUgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTm90aWZpZXMgdGhpcyBmYWNhZGUncyB2aWV3IG9ic2VydmVycy5cclxuICAgICAqIEBwYXJhbSBtTm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBub3RpZnlPYnNlcnZlcnMobU5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnZpZXcpXHJcbiAgICAgICAgICAgIHRoaXMudmlldy5ub3RpZnlPYnNlcnZlcnMobU5vdGlmaWNhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgQ2hlY2tzIGF0IHRoZSBTdGFydCBvZiB0aGUgZ2FtZSB3aGljaCBvcmllbnRhdGlvbiBpdCBoYXNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjaGVja1N0YXJ0T3JpZW50YXRpb24oKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwLnJlbmRlcmVyLnJlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICBsZXQgd2lkdGg6IG51bWJlciA9IHRoaXMuYXBwLnZpZXcud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodDogbnVtYmVyID0gdGhpcy5hcHAudmlldy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHN3aXRjaCAod2luZG93Lm9yaWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgOTAgOlxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnBvc2l0aW9uLnNldCh3aWR0aCAvIDYsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUuc2NhbGUuc2V0KEZhY2FkZUluZm9ybWF0aW9uLkdyaWRTY2FsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28ucG9zaXRpb24uc2V0KDMgKiB3aWR0aCAvIDYsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28uc2NhbGUuc2V0KEZhY2FkZUluZm9ybWF0aW9uLkdyaWRTY2FsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5wb3NpdGlvbi5zZXQoNSAqIHdpZHRoIC8gNiwgaGVpZ2h0IC8gNCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLnNjYWxlLnNldCgxKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIucG9zaXRpb24uc2V0KDUgKiB3aWR0aCAvIDYsIDMgKiBoZWlnaHQgLyA0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5zY2FsZS5zZXQoMC45KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyT25lLnBvc2l0aW9uLnNldCh3aWR0aCAvIDYsIDMwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJPbmUuc2NhbGUuc2V0KDAuNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lclR3by5wb3NpdGlvbi5zZXQoMyAqIHdpZHRoIC8gNiwgMzApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lclR3by5zY2FsZS5zZXQoMC41KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgMCA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZS5wb3NpdGlvbi5zZXQod2lkdGggLyAyLCBoZWlnaHQgLyA2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnNjYWxlLnNldCgwLjcsIDAuNyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28ucG9zaXRpb24uc2V0KHdpZHRoIC8gMiwgMyAqIGhlaWdodCAvIDYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28uc2NhbGUuc2V0KDAuNywgMC43KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLnBvc2l0aW9uLnNldCh3aWR0aCAvIDQsIDUgKiBoZWlnaHQgLyA2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIuc2NhbGUuc2V0KDEuNik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLnBvc2l0aW9uLnNldCgzICogd2lkdGggLyA0LCA1ICogaGVpZ2h0IC8gNik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIuc2NhbGUuc2V0KDEuNik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZS5wb3NpdGlvbi5zZXQod2lkdGggLyA2LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnNjYWxlLnNldChGYWNhZGVJbmZvcm1hdGlvbi5HcmlkU2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLnBvc2l0aW9uLnNldCgzICogd2lkdGggLyA2LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLnNjYWxlLnNldChGYWNhZGVJbmZvcm1hdGlvbi5HcmlkU2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIucG9zaXRpb24uc2V0KDUgKiB3aWR0aCAvIDYsIGhlaWdodCAvIDQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5zY2FsZS5zZXQoMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLnBvc2l0aW9uLnNldCg1ICogd2lkdGggLyA2LCAzICogaGVpZ2h0IC8gNCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIuc2NhbGUuc2V0KDAuOSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lck9uZS5wb3NpdGlvbi5zZXQod2lkdGggLyA2LCAzMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyT25lLnNjYWxlLnNldCgwLjUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJUd28ucG9zaXRpb24uc2V0KDMgKiB3aWR0aCAvIDYsIDMwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJUd28uc2NhbGUuc2V0KDAuNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFdoZW4gdGhlIHBsYXllciByb3RhdGVzIHRoZSBzY3JlZW5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VPcmllbnRhdGlvbigpOiB2b2lkIHtcclxuXHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5yZW5kZXJlci5yZXNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2lkdGg6IG51bWJlciA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhlaWdodDogbnVtYmVyID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPcmllbnRhdGlvbiA6ICcgKyB3aW5kb3cub3JpZW50YXRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAod2luZG93Lm9yaWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5MCA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZS5wb3NpdGlvbi5zZXQod2lkdGggLyA2LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUuc2NhbGUuc2V0KEZhY2FkZUluZm9ybWF0aW9uLkdyaWRTY2FsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3by5wb3NpdGlvbi5zZXQoMyAqIHdpZHRoIC8gNiwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLnNjYWxlLnNldChGYWNhZGVJbmZvcm1hdGlvbi5HcmlkU2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5wb3NpdGlvbi5zZXQoNSAqIHdpZHRoIC8gNiwgaGVpZ2h0IC8gNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIuc2NhbGUuc2V0KDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLnBvc2l0aW9uLnNldCg1ICogd2lkdGggLyA2LCAzICogaGVpZ2h0IC8gNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5zY2FsZS5zZXQoMC45KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJPbmUucG9zaXRpb24uc2V0KHdpZHRoIC8gNiwgMzApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyT25lLnNjYWxlLnNldCgwLjUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lclR3by5wb3NpdGlvbi5zZXQoMyAqIHdpZHRoIC8gNiwgMzApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyVHdvLnNjYWxlLnNldCgwLjUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnBvc2l0aW9uLnNldCh3aWR0aCAvIDIsIGhlaWdodCAvIDYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZS5zY2FsZS5zZXQoRmFjYWRlSW5mb3JtYXRpb24uR3JpZFNjYWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLnBvc2l0aW9uLnNldCh3aWR0aCAvIDIsIDMgKiBoZWlnaHQgLyA2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28uc2NhbGUuc2V0KEZhY2FkZUluZm9ybWF0aW9uLkdyaWRTY2FsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLnBvc2l0aW9uLnNldCh3aWR0aCAvIDQsIDUgKiBoZWlnaHQgLyA2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5zY2FsZS5zZXQoMS42KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5wb3NpdGlvbi5zZXQoMyAqIHdpZHRoIC8gNCwgNSAqIGhlaWdodCAvIDYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIuc2NhbGUuc2V0KDEuNik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUucG9zaXRpb24uc2V0KHdpZHRoIC8gNiwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnNjYWxlLnNldChGYWNhZGVJbmZvcm1hdGlvbi5HcmlkU2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28ucG9zaXRpb24uc2V0KDMgKiB3aWR0aCAvIDYsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3by5zY2FsZS5zZXQoRmFjYWRlSW5mb3JtYXRpb24uR3JpZFNjYWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIucG9zaXRpb24uc2V0KDUgKiB3aWR0aCAvIDYsIGhlaWdodCAvIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLnNjYWxlLnNldCgxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5wb3NpdGlvbi5zZXQoNSAqIHdpZHRoIC8gNiwgMyAqIGhlaWdodCAvIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIuc2NhbGUuc2V0KDAuOSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyT25lLnBvc2l0aW9uLnNldCh3aWR0aCAvIDYsIDMwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lck9uZS5zY2FsZS5zZXQoMC41KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJUd28ucG9zaXRpb24uc2V0KDMgKiB3aWR0aCAvIDYsIDMwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lclR3by5zY2FsZS5zZXQoMC41KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZS50cyIsIm1vZHVsZS5leHBvcnRzID0gdW5kZWZpbmVkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlBJWElcIn1cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIEV4dGVuZHMgdGhpcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdFZpZXcgZXh0ZW5kcyBwdXJlbXZjLlZpZXcgaW1wbGVtZW50cyBwdXJlbXZjLklWaWV3IHtcclxuICAgIHB1YmxpYyBJRDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIF9jb250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgcHJvdGVjdGVkIF9tdWx0aXRvbktleTogc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIF9hY3RpdmU6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcbiAgICAgICAgdGhpcy5fbXVsdGl0b25LZXkgPSBrZXk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgc2V0IGFjdGl2ZShrZXk6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9hY3RpdmUgPSBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgdmlldy5cclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGNvbnRhaW5lci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVWaWV3KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVJQ29udGFpbmVyKCk6IFBJWEkuQ29udGFpbmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgUElYSSBncmFwaGljcyxzcHJpdGUsY29udGFpbmVyIGV0YyB0byB0aGlzIHZpZXdcclxuICAgICAqIEBwYXJhbSBpdGVtXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRUb0NvbnRhaW5lcihpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFjdGl2ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0QWN0aXZlKGFjdGl2ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5fY29udGFpbmVyLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGl0ZW0udmlzaWJsZSA9IGFjdGl2ZTtcclxuICAgICAgICAgICAgaXRlbS5pbnRlcmFjdGl2ZSA9IGFjdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGEgbWVkaWF0b3IgdG8gdGhpcyB2aWV3LlxyXG4gICAgICogQHBhcmFtIG1lZGlhdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3Rlck1lZGlhdG9yKG1lZGlhdG9yOiBwdXJlbXZjLk1lZGlhdG9yKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJNZWRpYXRvcihtZWRpYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lZGlhdG9yTmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFzTWVkaWF0b3IobWVkaWF0b3JOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuaGFzTWVkaWF0b3IobWVkaWF0b3JOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhY3RpdmF0ZVVwZGF0ZSgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25DbGljayhpZDogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsb2FkZXJcclxuICAgICAqIEBwYXJhbSByZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uQXNzZXRzTG9hZGVkKGxvYWRlciwgcmVzKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsb2FkZXJcclxuICAgICAqIEBwYXJhbSByZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uQ29uZmlnTG9hZGVkKGxvYWRlciwgcmVzKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Vmlldy50cyIsImltcG9ydCB7QWJzdHJhY3RDb250cm9sbGVyfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29udHJvbGxlclwiO1xyXG5pbXBvcnQge0dyaWRDb250cm9sbGVyfSBmcm9tIFwiLi9HcmlkQ29udHJvbGxlclwiO1xyXG5pbXBvcnQge0ZhY2FkZUluZm9ybWF0aW9ufSBmcm9tIFwiLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0IHtQbGF5ZXJDb250cm9sbGVyfSBmcm9tIFwiLi9QbGF5ZXJDb250cm9sbGVyXCI7XHJcblxyXG4vKipcclxuICogVGhlIEJhdHRsZVNoaXAgY29udHJvbGxlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXR0bGVTaGlwQ29udHJvbGxlciBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHcmlkUGxheWVyT25lQ29udHJvbGxlck5hbWU6IHN0cmluZyA9ICdHMSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEdyaWRQbGF5ZXJUd29Db250cm9sbGVyTmFtZTogc3RyaW5nID0gJ0cyJztcclxuICAgIHB1YmxpYyBzdGF0aWMgUGxheWVyT25lQ29udHJvbGxlck5hbWU6IHN0cmluZyA9ICdQMSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFBsYXllclR3b0NvbnRyb2xsZXJOYW1lOiBzdHJpbmcgPSAnUDInO1xyXG4gICAgcHVibGljIHN0YXRpYyBHYW1lUGxheUNvbnRyb2xsZXJOYW1lOiBzdHJpbmcgPSAnR2FtZVBsYXlDb250cm9sbGVyJztcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFNoaXBQb3NpdGlvbkluZm9Db21tYW5kOiBzdHJpbmcgPSAnU2hpcFBvc2l0aW9uQ29tbWFuZCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFBsYXllckZpbmlzaGVkUGxhY2luZ1RoZVNoaXBzQ29tbWFuZDogc3RyaW5nID0gJ1BsYXllckZCVFMnO1xyXG4gICAgcHVibGljIHN0YXRpYyBTdGFydEdhbWVQbGF5Q29tbWFuZDogc3RyaW5nID0gJ1N0YXJ0R2FtZVBsYXknO1xyXG4gICAgcHVibGljIHN0YXRpYyBIaWRlVGhlU2hpcENvbW1hbmQ6IHN0cmluZyA9ICdIaWRlVGhlU2hpcENvbW1hbmQnO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgSGl0VGV4dDogc3RyaW5nID0gJ0hpdCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIE1pc3NUZXh0OiBzdHJpbmcgPSAnTWlzcyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIERlZmF1bHRTdGF0ZVRleHQ6IHN0cmluZyA9ICdOb24nO1xyXG4gICAgcHVibGljIHN0YXRpYyBTaGlwT25TcXVhcmU6IHN0cmluZyA9ICdTaHAnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG5cclxuICAgICAgICBHcmlkQ29udHJvbGxlci5nZXRJbnN0YW5jZShCYXR0bGVTaGlwQ29udHJvbGxlci5HcmlkUGxheWVyT25lQ29udHJvbGxlck5hbWUsXHJcbiAgICAgICAgICAgIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHksIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSwgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyT25lKTtcclxuICAgICAgICBHcmlkQ29udHJvbGxlci5nZXRJbnN0YW5jZShCYXR0bGVTaGlwQ29udHJvbGxlci5HcmlkUGxheWVyVHdvQ29udHJvbGxlck5hbWUsXHJcbiAgICAgICAgICAgIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHksIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSwgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyVHdvKTtcclxuXHJcbiAgICAgICAgUGxheWVyQ29udHJvbGxlci5nZXRJbnN0YW5jZShCYXR0bGVTaGlwQ29udHJvbGxlci5QbGF5ZXJPbmVDb250cm9sbGVyTmFtZSk7XHJcbiAgICAgICAgUGxheWVyQ29udHJvbGxlci5nZXRJbnN0YW5jZShCYXR0bGVTaGlwQ29udHJvbGxlci5QbGF5ZXJUd29Db250cm9sbGVyTmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0JhdHRsZVNoaXBDb250cm9sbGVyIGNyZWF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hlY2tJZkJvdGhQbGF5ZXJzRmluaXNoZWRQbGFjaW5nVGhlU2hpcHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKFBsYXllckNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoQmF0dGxlU2hpcENvbnRyb2xsZXIuUGxheWVyT25lQ29udHJvbGxlck5hbWUpLnNoaXBzUGxhY2VtZW50RmluaXNoZWQoKSA9PT0gdHJ1ZSAmJlxyXG4gICAgICAgICAgICBQbGF5ZXJDb250cm9sbGVyLmdldEluc3RhbmNlKEJhdHRsZVNoaXBDb250cm9sbGVyLlBsYXllclR3b0NvbnRyb2xsZXJOYW1lKS5zaGlwc1BsYWNlbWVudEZpbmlzaGVkKCkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0JvdGggUGxheWVycyBmaW5pc2hlZCBwbGFjaW5nIHRoZSBzaGlwcycpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGtleTogc3RyaW5nKTogQmF0dGxlU2hpcENvbnRyb2xsZXIge1xyXG4gICAgICAgIGlmICghcHVyZW12Yy5Db250cm9sbGVyLmluc3RhbmNlTWFwW2tleV0pXHJcbiAgICAgICAgICAgIHB1cmVtdmMuQ29udHJvbGxlci5pbnN0YW5jZU1hcFtrZXldID0gbmV3IEJhdHRsZVNoaXBDb250cm9sbGVyKGtleSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLkNvbnRyb2xsZXIuaW5zdGFuY2VNYXBba2V5XSBhcyBCYXR0bGVTaGlwQ29udHJvbGxlcjtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvY29udHJvbGxlci9CYXR0bGVTaGlwQ29udHJvbGxlci50cyIsImltcG9ydCAncGl4aS5qcyc7XHJcbmltcG9ydCB7QWJzdHJhY3ROb3RpZmljYXRpb259IGZyb20gXCIuL0Fic3RyYWN0Tm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7QWJzdHJhY3ROb3RpZmllcn0gZnJvbSBcIi4vQWJzdHJhY3ROb3RpZmllclwiO1xyXG5pbXBvcnQge0Fic3RyYWN0RmFjYWRlfSBmcm9tIFwiLi9BYnN0cmFjdEZhY2FkZVwiO1xyXG5cclxuLyoqXHJcbiAqICBFeHRlbmQgdGhpcyBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdENvbW1hbmQgZXh0ZW5kcyBwdXJlbXZjLlNpbXBsZUNvbW1hbmQgaW1wbGVtZW50cyBwdXJlbXZjLklDb21tYW5kLCBBYnN0cmFjdE5vdGlmaWVyIHtcclxuXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJ0NvbW1hbmQnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4ZWN1dGUobm90aWZpY2F0aW9uOiBBYnN0cmFjdE5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmV4ZWN1dGUobm90aWZpY2F0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplTm90aWZpZXIoa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplTm90aWZpZXIoa2V5KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqIEBwYXJhbSBib2R5XHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICogQHBhcmFtIGFycmF5T2ZTdHJpbmdzXHJcbiAgICAgKiBAcGFyYW0gYXJyYXlPZk51bWJlcnNcclxuICAgICAqIEBwYXJhbSBvYmplY3RSZWZlcmVuY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlbmROb3RpZmljYXRpb24obmFtZTogc3RyaW5nLCBib2R5PzogYW55LCB0eXBlPzogc3RyaW5nLCBhcnJheU9mU3RyaW5ncz86IEFycmF5PHN0cmluZz4sIGFycmF5T2ZOdW1iZXJzPzogQXJyYXk8bnVtYmVyPiwgb2JqZWN0UmVmZXJlbmNlPzogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBmYWNhZGU6IGFueSA9IEFic3RyYWN0RmFjYWRlLmdldEluc3RhbmNlKHRoaXMubXVsdGl0b25LZXkpO1xyXG4gICAgICAgIGZhY2FkZS5zZW5kTm90aWZpY2F0aW9uKG5hbWUsIGJvZHksIHR5cGUsIGFycmF5T2ZTdHJpbmdzLCBhcnJheU9mTnVtYmVycywgb2JqZWN0UmVmZXJlbmNlKTtcclxuXHJcbiAgICB9O1xyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdENvbW1hbmQudHMiLCJpbXBvcnQge0JhdHRsZVNoaXBNZWRpYXRvcn0gZnJvbSBcIi4uLy4uL21lZGlhdG9yL0JhdHRsZVNoaXBNZWRpYXRvclwiO1xyXG5pbXBvcnQge0Fic3RyYWN0Vmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFZpZXdcIjtcclxuaW1wb3J0ICdwaXhpLmpzJ1xyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgbWFpbiBCYXR0bGVTaGlwIHZpZXcgY2xhc3NcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXR0bGVTaGlwVmlldyBleHRlbmRzIEFic3RyYWN0VmlldyB7XHJcblxyXG4gICAgLyoqICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBsYXllck9uZUdyaWRDb250YWluZXI6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIFBsYXllclR3b0dyaWRDb250YWluZXI6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgc3RhdGljIEdhbWVJbmZvQ29udGFpbmVyOiBudW1iZXIgPSAzO1xyXG4gICAgcHVibGljIHN0YXRpYyBHYW1lQnV0dG9uQ29udGFpbmVyOiBudW1iZXIgPSA0O1xyXG4gICAgcHVibGljIHN0YXRpYyBQbGF5ZXJPbmVTaGlwc0NvbnRhaW5lcjogbnVtYmVyID0gNTtcclxuICAgIHB1YmxpYyBzdGF0aWMgUGxheWVyVHdvU2hpcHNDb250YWluZXI6IG51bWJlciA9IDY7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHYW1lUGxheVN0YXRlVGV4dDogc3RyaW5nID0gJ0dhbWVQbGF5IFN0YXRlJztcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcbiAgICAgICAgdGhpcy5tdWx0aXRvbktleSA9IGtleTtcclxuXHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJNZWRpYXRvcihuZXcgQmF0dGxlU2hpcE1lZGlhdG9yKGtleSwgdGhpcykpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemluZyB0aGUgQmF0dGxlU2hpcCdzIHZpZXdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVWaWV3KCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXRpYWxpemVWaWV3KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0JhdHRsZVNoaXBWaWV3IGNyZWF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShrZXk6IHN0cmluZyk6IEFic3RyYWN0VmlldyB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gPSBuZXcgQmF0dGxlU2hpcFZpZXcoa2V5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldIGFzIEFic3RyYWN0VmlldztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9tYWluVmlldy9CYXR0bGVTaGlwVmlldy50cyIsIi8qKlxyXG4gKiAgRXh0ZW5kIHRoaXMgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RDb250cm9sbGVyIGV4dGVuZHMgcHVyZW12Yy5Db250cm9sbGVyIGltcGxlbWVudHMgcHVyZW12Yy5JQ29udHJvbGxlciB7XHJcblxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9ICdDb250cm9sbGVyJztcclxuICAgIHByaXZhdGUgbXVsdGl0b25rZXk6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMubXVsdGl0b25rZXkgPSBrZXlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBjb250cm9sbGVyLlxyXG4gICAgICogSXQgaXMgY2FsbGVkIHdoZW4gc3VwZXIgaXMgY2FsbGVkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVDb250cm9sbGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXRpYWxpemVDb250cm9sbGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeGVjdXRlIGEgcmVnaXN0ZXJlZCBjb21tYW5kIGJhc2VkIG9uIHRoZSByZWNlaXZlZCBub3RpZmljYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlQ29tbWFuZChub3RpZmljYXRpb246IHB1cmVtdmMuSU5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmV4ZWN1dGVDb21tYW5kKG5vdGlmaWNhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNvbW1hbmQgdG8gdGhpcyBjb250cm9sbGVyLlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvbk5hbWVcclxuICAgICAqIEBwYXJhbSBjb21tYW5kQ2xhc3NSZWZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyQ29tbWFuZChub3RpZmljYXRpb25OYW1lOiBzdHJpbmcsIGNvbW1hbmRDbGFzc1JlZjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5yZWdpc3RlckNvbW1hbmQobm90aWZpY2F0aW9uTmFtZSwgY29tbWFuZENsYXNzUmVmKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFZlcmlmaWVzIGlmIHRoaXMgY29udHJvbGxlciBoYXMgcmVnaXN0ZXJlZCBhIGNvbW1hbmQuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uTmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFzQ29tbWFuZChub3RpZmljYXRpb25OYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuaGFzQ29tbWFuZChub3RpZmljYXRpb25OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhIGNvbW1hbmQgZnJvbSB0aGlzIGNvbnRyb2xsZXIuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uTmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlQ29tbWFuZChub3RpZmljYXRpb25OYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5yZW1vdmVDb21tYW5kKG5vdGlmaWNhdGlvbk5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0dGVyIGZvciB0aGUgbXVsdGl0b25LZXkuXHJcbiAgICAgKi9cclxuICAgIGdldCBtdWx0aXRvbktleSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm11bHRpdG9ua2V5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0dGVyIGZvciB0aGUgbXVsdGl0b25LZXkuXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHNldCBtdWx0aXRvbktleShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubXVsdGl0b25rZXkgPSBrZXk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb250cm9sbGVyLnRzIiwiLyoqXHJcbiAqIEV4dGVuZHMgdGhpcy5cclxuICovXHJcbmltcG9ydCB7QWJzdHJhY3ROb3RpZmllcn0gZnJvbSBcIi4vQWJzdHJhY3ROb3RpZmllclwiO1xyXG5pbXBvcnQge0Fic3RyYWN0RmFjYWRlfSBmcm9tIFwiLi9BYnN0cmFjdEZhY2FkZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0TWVkaWF0b3IgZXh0ZW5kcyBwdXJlbXZjLk1lZGlhdG9yIGltcGxlbWVudHMgcHVyZW12Yy5JTWVkaWF0b3IsIEFic3RyYWN0Tm90aWZpZXIge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZWRpYXRvck5hbWVcclxuICAgICAqIEBwYXJhbSB2aWV3Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lZGlhdG9yTmFtZTogc3RyaW5nLCB2aWV3Q29tcG9uZW50OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihtZWRpYXRvck5hbWUsIHZpZXdDb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFZpZXdDb21wb25lbnQoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0Vmlld0NvbXBvbmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldE1lZGlhdG9yTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5nZXRNZWRpYXRvck5hbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmlld0NvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0Vmlld0NvbXBvbmVudCh2aWV3Q29tcG9uZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5zZXRWaWV3Q29tcG9uZW50KHZpZXdDb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmhhbmRsZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uUmVnaXN0ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIub25SZWdpc3RlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uUmVtb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLm9uUmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZU5vdGlmaWVyKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZU5vdGlmaWVyKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqIEBwYXJhbSBib2R5XHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICogQHBhcmFtIGFycmF5T2ZTdHJpbmdzXHJcbiAgICAgKiBAcGFyYW0gYXJyYXlPZk51bWJlcnNcclxuICAgICAqIEBwYXJhbSBvYmplY3RSZWZlcmVuY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlbmROb3RpZmljYXRpb24obmFtZTogc3RyaW5nLCBib2R5PzogYW55LCB0eXBlPzogc3RyaW5nLCBhcnJheU9mU3RyaW5ncz86IEFycmF5PHN0cmluZz4sIGFycmF5T2ZOdW1iZXJzPzogQXJyYXk8bnVtYmVyPiwgb2JqZWN0UmVmZXJlbmNlPzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGZhY2FkZTogYW55ID0gQWJzdHJhY3RGYWNhZGUuZ2V0SW5zdGFuY2UodGhpcy5tdWx0aXRvbktleSk7XHJcbiAgICAgICAgZmFjYWRlLnNlbmROb3RpZmljYXRpb24obmFtZSwgYm9keSwgdHlwZSwgYXJyYXlPZlN0cmluZ3MsIGFycmF5T2ZOdW1iZXJzLCBvYmplY3RSZWZlcmVuY2UpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0TWVkaWF0b3IudHMiLCJpbXBvcnQge0Fic3RyYWN0Q29udHJvbGxlcn0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtTcXVhcmVDb250cm9sbGVyfSBmcm9tIFwiLi9TcXVhcmVDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7QmF0dGxlU2hpcEZhY2FkZSwgRmFjYWRlSW5mb3JtYXRpb24sIE1lZGlhdG9yTm90aWZpY2F0aW9uc30gZnJvbSBcIi4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcbmltcG9ydCB7QmF0dGxlU2hpcENvbnRyb2xsZXJ9IGZyb20gXCIuL0JhdHRsZVNoaXBDb250cm9sbGVyXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnRyb2xzIHRoZSBncmlkJ3MgZnVuY3Rpb25hbGl0eS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ29udHJvbGxlciBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBTcXVhcmVDb250cm9sbGVyS2V5ID0gJ1NxdWFyZUNvbnRyb2xsZXJHRyc7XHJcbiAgICBwdWJsaWMgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseTogbnVtYmVyO1xyXG4gICAgcHVibGljIEdyaWRTcXVhcmVzOiBTcXVhcmVDb250cm9sbGVyW11bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcGxheWVyOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHlcclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHlcclxuICAgICAqIEBwYXJhbSBwbGF5ZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk/OiBudW1iZXIsIG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseT86IG51bWJlciwgcGxheWVyPzogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHkgPSBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5ID0gbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVHcmlkU3F1YXJlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHlcclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5XHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShrZXk6IHN0cmluZywgbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseT86IG51bWJlciwgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5PzogbnVtYmVyLCBwbGF5ZXI/OiBzdHJpbmcpOiBHcmlkQ29udHJvbGxlciB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLkNvbnRyb2xsZXIuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5Db250cm9sbGVyLmluc3RhbmNlTWFwW2tleV0gPSBuZXcgR3JpZENvbnRyb2xsZXIoa2V5LCBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHksIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHksIHBsYXllcik7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLkNvbnRyb2xsZXIuaW5zdGFuY2VNYXBba2V5XSBhcyBHcmlkQ29udHJvbGxlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIEdyaWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNyZWF0ZUdyaWRTcXVhcmVzKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLkdyaWRTcXVhcmVzW2ldID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm51bWJlck9mU3F1YXJlc0hvcml6b250YWxseTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdyaWRTcXVhcmVzW2ldW2pdID0gU3F1YXJlQ29udHJvbGxlci5nZXRJbnN0YW5jZShHcmlkQ29udHJvbGxlci5TcXVhcmVDb250cm9sbGVyS2V5ICsgJycgKyBpICsgaiArIHRoaXMubXVsdGl0b25LZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFByaW50IHRoZSBncmlkIG9uIHRoZSBzY3JlZW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2dHcmlkU3F1YXJlcygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwcmludEFycmF5OiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm51bWJlck9mU3F1YXJlc0hvcml6b250YWxseTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBwcmludEFycmF5LnB1c2godGhpcy5HcmlkU3F1YXJlc1tpXVtqXS5wcmludFNxdWFyZVN0YXRlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByaW50QXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIGdyaWQgd2l0aCB0aGUgaGl0cyBvciB0aGUgbWlzc2VzLlxyXG4gICAgICogQHBhcmFtIHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjaGVja0lmUGxheWVySGFzSGl0QVNoaXAocG9zaXRpb246IEFycmF5PG51bWJlcj4sIHBsYXllcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGZhY2FkZTogQmF0dGxlU2hpcEZhY2FkZSA9IEJhdHRsZVNoaXBGYWNhZGUuZ2V0SW5zdGFuY2UoRmFjYWRlSW5mb3JtYXRpb24uQmF0dGxlU2hpcEZhY2FkZUtleSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVXBkYXRlcyB0aGUgZWxlbWVudCBpbiB0aGUgMiBkaW1lbnNpb25hbCBhcnJheSB3aXRoIGEgaGl0IG9yIGEgbWlzcy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBpZiAocGxheWVyID09IHRoaXMuX3BsYXllcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5HcmlkU3F1YXJlc1twb3NpdGlvblswXV1bcG9zaXRpb25bMV1dLmNoZWNrSWZJdElzQUhpdCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdyaWRTcXVhcmVzW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0uc3F1YXJlSGl0KCk7XHJcbiAgICAgICAgICAgICAgICBmYWNhZGUuc2VuZE5vdGlmaWNhdGlvbihNZWRpYXRvck5vdGlmaWNhdGlvbnMuUGxheWVySGl0QVNoaXAsIHRoaXMuX3BsYXllcixcclxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCwgW3Bvc2l0aW9uWzBdLCBwb3NpdGlvblsxXV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HcmlkU3F1YXJlc1twb3NpdGlvblswXV1bcG9zaXRpb25bMV1dLnNxdWFyZU1pc3MoKTtcclxuICAgICAgICAgICAgICAgIGZhY2FkZS5zZW5kTm90aWZpY2F0aW9uKE1lZGlhdG9yTm90aWZpY2F0aW9ucy5QbGF5ZXJNaXNzZWQsIHRoaXMuX3BsYXllcixcclxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCwgW3Bvc2l0aW9uWzBdLCBwb3NpdGlvblsxXV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubG9nR3JpZFNxdWFyZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKiBAcGFyYW0gc2hpcFR5cGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZVNoaXBzUG9zaXRpb24ocG9zaXRpb246IEFycmF5PG51bWJlcj4sIHBsYXllcjogc3RyaW5nLCBzaGlwVHlwZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHBsYXllciA9PT0gdGhpcy5fcGxheWVyKSB7XHJcbiAgICAgICAgICAgIGxldCBpOiBudW1iZXIgPSBwb3NpdGlvblswXSwgajogbnVtYmVyID0gcG9zaXRpb25bMV0sIG51bWJlck9mU3F1YXJlczogbnVtYmVyID0gcG9zaXRpb25bMl07XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc2hpcFR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgRmFjYWRlSW5mb3JtYXRpb24uU2hpcEhvcml6b250YWxUeXBlOlxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHg6IG51bWJlciA9IGo7IHggPCBqICsgbnVtYmVyT2ZTcXVhcmVzOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HcmlkU3F1YXJlc1tpXVt4XS5zaGlwT25TcXVhcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEZhY2FkZUluZm9ybWF0aW9uLlNoaXBWZXJ0aWNhbFR5cGU6XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeDogbnVtYmVyID0gaTsgeCA8IGkgKyBudW1iZXJPZlNxdWFyZXM7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdyaWRTcXVhcmVzW3hdW2pdLnNoaXBPblNxdWFyZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbnRyb2xsZXIvR3JpZENvbnRyb2xsZXIudHMiLCJpbXBvcnQge0Fic3RyYWN0Tm90aWZpY2F0aW9ufSBmcm9tIFwiLi9BYnN0cmFjdE5vdGlmaWNhdGlvblwiO1xyXG5cclxuLyoqXHJcbiAqIEV4dGVuZCB0aGlzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0RmFjYWRlIGV4dGVuZHMgcHVyZW12Yy5GYWNhZGUgaW1wbGVtZW50cyBwdXJlbXZjLklGYWNhZGUge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMubXVsdGl0b25LZXkgPSBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3RpZmllcyB0aGUgZmFjYWRlJ3MgdmlldyBvYnNlcnZlcnMuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBub3RpZnlPYnNlcnZlcnMobm90aWZpY2F0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudmlldylcclxuICAgICAgICAgICAgdGhpcy52aWV3Lm5vdGlmeU9ic2VydmVycyhub3RpZmljYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VuZHMgYSBub3RpZmljYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICogQHBhcmFtIGJvZHlcclxuICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gYXJyYXlPZlN0cmluZ3NcclxuICAgICAqIEBwYXJhbSBhcnJheU9mTnVtYmVyc1xyXG4gICAgICogQHBhcmFtIG9iamVjdFJlZmVyZW5jZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VuZE5vdGlmaWNhdGlvbihuYW1lOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgdHlwZT86IHN0cmluZywgYXJyYXlPZlN0cmluZ3M/OiBBcnJheTxzdHJpbmc+LCBhcnJheU9mTnVtYmVycz86IEFycmF5PG51bWJlcj4sIG9iamVjdFJlZmVyZW5jZT86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm90aWZ5T2JzZXJ2ZXJzKG5ldyBBYnN0cmFjdE5vdGlmaWNhdGlvbihuYW1lLCBib2R5LCB0eXBlLCBhcnJheU9mU3RyaW5ncywgYXJyYXlPZk51bWJlcnMsIG9iamVjdFJlZmVyZW5jZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25OYW1lXHJcbiAgICAgKiBAcGFyYW0gY29tbWFuZENsYXNzUmVmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3RlckNvbW1hbmQobm90aWZpY2F0aW9uTmFtZTogc3RyaW5nLCBjb21tYW5kQ2xhc3NSZWY6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJDb21tYW5kKG5vdGlmaWNhdGlvbk5hbWUsIGNvbW1hbmRDbGFzc1JlZik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHByb3h5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3RlclByb3h5KHByb3h5OiBwdXJlbXZjLklQcm94eSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyUHJveHkocHJveHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwcm94eU5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJldHJpZXZlUHJveHkocHJveHlOYW1lOiBzdHJpbmcpOiBwdXJlbXZjLklQcm94eSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnJldHJpZXZlUHJveHkocHJveHlOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVkaWF0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyTWVkaWF0b3IobWVkaWF0b3I6IHB1cmVtdmMuSU1lZGlhdG9yKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJNZWRpYXRvcihtZWRpYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lZGlhdG9yTmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmV0cmlldmVNZWRpYXRvcihtZWRpYXRvck5hbWU6IHN0cmluZyk6IHB1cmVtdmMuSU1lZGlhdG9yIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIucmV0cmlldmVNZWRpYXRvcihtZWRpYXRvck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZWRpYXRvck5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhhc01lZGlhdG9yKG1lZGlhdG9yTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmhhc01lZGlhdG9yKG1lZGlhdG9yTmFtZSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RGYWNhZGUudHMiLCJpbXBvcnQge0Fic3RyYWN0Q29udHJvbGxlcn0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtGYWNhZGVJbmZvcm1hdGlvbn0gZnJvbSBcIi4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcblxyXG4vKipcclxuICogVGhlIFBsYXllciBjb250cm9sbGVyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuICAgIHByaXZhdGUgX3NoaXBzUGxhY2VkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcGxheWVyOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9zaGlwUGxhY2VtZW50RmluaXNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIgPSBrZXk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BsYXllckNvbnRyb2xsZXIgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGtleTogc3RyaW5nKTogUGxheWVyQ29udHJvbGxlciB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLkNvbnRyb2xsZXIuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5Db250cm9sbGVyLmluc3RhbmNlTWFwW2tleV0gPSBuZXcgUGxheWVyQ29udHJvbGxlcihrZXkpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5Db250cm9sbGVyLmluc3RhbmNlTWFwW2tleV0gYXMgUGxheWVyQ29udHJvbGxlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIG51bWJlciBvZiBzaGlwcyBwbGFjZWQgZm9yIGEgUGxheWVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlTnVtYmVyT2ZTaGlwc1BsYWNlZChwbGF5ZXI6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChwbGF5ZXIgPT0gdGhpcy5fcGxheWVyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaGlwc1BsYWNlZCA8PSBGYWNhZGVJbmZvcm1hdGlvbi5NYXhpbXVtTnVtYmVyT2ZTaGlwc09uQUdyaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NoaXBzUGxhY2VkKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NoaXBzUGxhY2VkID09PSBGYWNhZGVJbmZvcm1hdGlvbi5NYXhpbXVtTnVtYmVyT2ZTaGlwc09uQUdyaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NoaXBQbGFjZW1lbnRGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hpcHNQbGFjZW1lbnRGaW5pc2hlZCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5fc2hpcFBsYWNlbWVudEZpbmlzaGVkID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BsYXllcicgKyB0aGlzLl9wbGF5ZXIgKyAnIGZpbmlzaGVkIHBsYWNpbmcgdGhlIHNoaXBzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaGlwUGxhY2VtZW50RmluaXNoZWQ7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbnRyb2xsZXIvUGxheWVyQ29udHJvbGxlci50cyIsImltcG9ydCB7QmF0dGxlU2hpcEZhY2FkZSwgRmFjYWRlSW5mb3JtYXRpb259IGZyb20gJy4vcHJvamVjdC9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZSdcclxuXHJcbm5ldyBjbGFzcyBNYWluXHJcbntcclxuICAgIHB1YmxpYyBteUZhY2FkZTogQmF0dGxlU2hpcEZhY2FkZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5teUZhY2FkZSA9IEJhdHRsZVNoaXBGYWNhZGUuZ2V0SW5zdGFuY2UoRmFjYWRlSW5mb3JtYXRpb24uQmF0dGxlU2hpcEZhY2FkZUtleSk7XHJcbiAgICB9O1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L2luZGV4LnRzIiwiaW1wb3J0IHtBYnN0cmFjdENvbnRyb2xsZXJ9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7QmF0dGxlU2hpcENvbnRyb2xsZXJ9IGZyb20gXCIuL0JhdHRsZVNoaXBDb250cm9sbGVyXCI7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTcXVhcmVDb250cm9sbGVyIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sbGVyIHtcclxuXHJcbiAgICBwdWJsaWMgaGl0OiBzdHJpbmcgPSBCYXR0bGVTaGlwQ29udHJvbGxlci5IaXRUZXh0O1xyXG4gICAgcHVibGljIG1pc3M6IHN0cmluZyA9IEJhdHRsZVNoaXBDb250cm9sbGVyLk1pc3NUZXh0O1xyXG4gICAgcHVibGljIHNxdWFyZVN0YXRlOiBzdHJpbmcgPSBCYXR0bGVTaGlwQ29udHJvbGxlci5EZWZhdWx0U3RhdGVUZXh0O1xyXG4gICAgcHVibGljIGNvbnRhaW5zU2hpcDogc3RyaW5nID0gQmF0dGxlU2hpcENvbnRyb2xsZXIuU2hpcE9uU3F1YXJlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGtleTogc3RyaW5nKTogU3F1YXJlQ29udHJvbGxlciB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLkNvbnRyb2xsZXIuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5Db250cm9sbGVyLmluc3RhbmNlTWFwW2tleV0gPSBuZXcgU3F1YXJlQ29udHJvbGxlcihrZXkpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5Db250cm9sbGVyLmluc3RhbmNlTWFwW2tleV0gYXMgU3F1YXJlQ29udHJvbGxlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByaW50IGlmIGl0J3MgYSBoaXQgb3IgYSBtaXNzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcHJpbnRTcXVhcmVTdGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNxdWFyZVN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNxdWFyZUhpdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNxdWFyZVN0YXRlID0gdGhpcy5oaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2hlY2tJZkl0SXNBSGl0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNxdWFyZVN0YXRlID09IHRoaXMuY29udGFpbnNTaGlwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNxdWFyZU1pc3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVTdGF0ZSA9IHRoaXMubWlzcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIGEgc2hpcCdzIHBhcnQgaXMgb24gdGhpcyBzcXVhcmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaGlwT25TcXVhcmUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVTdGF0ZSA9IHRoaXMuY29udGFpbnNTaGlwO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9jb250cm9sbGVyL1NxdWFyZUNvbnRyb2xsZXIudHMiLCJpbXBvcnQgJ3BpeGkuanMnXHJcbmltcG9ydCB7QWJzdHJhY3RNZWRpYXRvcn0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE1lZGlhdG9yXCI7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXR0bGVTaGlwTWVkaWF0b3IgZXh0ZW5kcyBBYnN0cmFjdE1lZGlhdG9yIHtcclxuICAgIHB1YmxpYyBuYW1lOiBTdHJpbmcgPSAnQmF0dGxlU2hpcE1lZGlhdG9yJztcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lZGlhdG9yTmFtZVxyXG4gICAgICogQHBhcmFtIHZpZXdDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVkaWF0b3JOYW1lPzogc3RyaW5nLCB2aWV3Q29tcG9uZW50PzogYW55KSB7XHJcbiAgICAgICAgc3VwZXIobWVkaWF0b3JOYW1lLCB2aWV3Q29tcG9uZW50KTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCcgICAjICcgKyB0aGlzLm5hbWUgKyAnIGNyZWF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBub3RpZmljYXRpb24gdGhhdCB0aGUgQmF0dGxlU2hpcE1lZGlhdG9yIGlzIGludGVyZXN0ZWQgaW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCk6IHN0cmluZyBbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFRoaXMgaXMgd2hlcmUgdGhlIG5vdGlmaWNhdGlvbnMgYXJlIGhhbmRsZWQuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBwdXJlbXZjLk5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGxldCBuYW1lOiBTdHJpbmcgPSBub3RpZmljYXRpb24ubmFtZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvbWVkaWF0b3IvQmF0dGxlU2hpcE1lZGlhdG9yLnRzIiwiLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3ROb3RpZmljYXRpb24gZXh0ZW5kcyBwdXJlbXZjLk5vdGlmaWNhdGlvbiB7XHJcblxyXG4gICAgcHVibGljIG9iamVjdFJlZmVyZW5jZTogYW55O1xyXG4gICAgcHVibGljIGFycmF5T2ZTdHJpbmdzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBwdWJsaWMgYXJyYXlPZk51bWJlcnM6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICogQHBhcmFtIGJvZHlcclxuICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gYXJyYXlPZlN0cmluZ3NcclxuICAgICAqIEBwYXJhbSBhcnJheU9mTnVtYmVyc1xyXG4gICAgICogQHBhcmFtIG9iamVjdFJlZmVyZW5jZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgdHlwZT86IHN0cmluZywgYXJyYXlPZlN0cmluZ3M/OiBBcnJheTxzdHJpbmc+LCBhcnJheU9mTnVtYmVycz86IEFycmF5PG51bWJlcj4sIG9iamVjdFJlZmVyZW5jZT86IGFueSkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGJvZHksIHR5cGUpO1xyXG4gICAgICAgIHRoaXMub2JqZWN0UmVmZXJlbmNlID0gb2JqZWN0UmVmZXJlbmNlO1xyXG4gICAgICAgIHRoaXMuYXJyYXlPZlN0cmluZ3MgPSBhcnJheU9mU3RyaW5ncztcclxuICAgICAgICB0aGlzLmFycmF5T2ZOdW1iZXJzID0gYXJyYXlPZk51bWJlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5nZXROYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGJvZHlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEJvZHkoYm9keTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuc2V0Qm9keShib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRCb2R5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldEJvZHkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VHlwZSh0eXBlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5zZXRUeXBlKHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0VHlwZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYSByZWZlcmVuY2Ugb2Ygc29tZXRoaW5nIHdlIG5lZWQgaW4gdGhlIGZ1dHVyZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldE9iamVjdFJlZmVyZW5jZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdFJlZmVyZW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0UmVmZXJlbmNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRPYmplY3RSZWZlcmVuY2Uob2JqZWN0UmVmZXJlbmNlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9iamVjdFJlZmVyZW5jZSA9IG9iamVjdFJlZmVyZW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRBcnJheU9mU3RyaW5ncygpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheU9mU3RyaW5ncztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRBcnJheU9mTnVtYmVycygpOiBBcnJheTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheU9mTnVtYmVycztcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Tm90aWZpY2F0aW9uLnRzIiwiaW1wb3J0IHtBYnN0cmFjdFZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3XCI7XHJcbmltcG9ydCB7U3F1YXJlVmlld30gZnJvbSBcIi4vU3F1YXJlVmlld1wiO1xyXG5pbXBvcnQge0JhdHRsZVNoaXBGYWNhZGUsIEZhY2FkZUluZm9ybWF0aW9uLCBNZWRpYXRvck5vdGlmaWNhdGlvbnMsIFRleHRFcnJvcnN9IGZyb20gJy4uLy4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlJ1xyXG5pbXBvcnQge1J1bGVyVmlld30gZnJvbSBcIi4uL3J1bGVyL1J1bGVyVmlld1wiO1xyXG5pbXBvcnQgJ3BpeGkuanMnXHJcbmltcG9ydCB7QmF0dGxlU2hpcENvbnRyb2xsZXJ9IGZyb20gXCIuLi8uLi9jb250cm9sbGVyL0JhdHRsZVNoaXBDb250cm9sbGVyXCI7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyB0aGUgZ3JpZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdyaWRWaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcclxuICAgIHByaXZhdGUgR3JpZFNxdWFyZXM6IFNxdWFyZVZpZXdbXVtdO1xyXG4gICAgcHVibGljIFJ1bGVyTmFtZTogc3RyaW5nID0gJ1J1bGVyRm9yVGhlR3JpZCc7XHJcbiAgICBwdWJsaWMgbmFtZSA9ICdHcmlkVmlldyc7XHJcbiAgICBwcml2YXRlIG1heFNoaXBzT25UaGlzR3JpZDogbnVtYmVyID0gRmFjYWRlSW5mb3JtYXRpb24uTWF4aW11bU51bWJlck9mU2hpcHNPbkFHcmlkO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TnVtYmVyT2ZTaGlwczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3BsYXllcjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBwbGF5ZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHBsYXllcjogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUuY29uY2F0KHBsYXllcik7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fcGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyT25lOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCb2FyZChGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMVhQb3NpdGlvbiwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZDFZUG9zaXRpb24sIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHksIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZDFCb3JkZXJDb2xvciwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZFNxdWFyZUZpbGxDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJ1bGVyKEZhY2FkZUluZm9ybWF0aW9uLkdyaWQxWFBvc2l0aW9uLCBGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMVlQb3NpdGlvbiwgRmFjYWRlSW5mb3JtYXRpb24uTnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseSxcclxuICAgICAgICAgICAgICAgICAgICBGYWNhZGVJbmZvcm1hdGlvbi5OdW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHksIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZVdpZHRoLCBGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMUJvcmRlckNvbG9yLCBGYWNhZGVJbmZvcm1hdGlvbi5SdWxlclRleHRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyVHdvOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCb2FyZChGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMlhQb3NpdGlvbiwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZDJZUG9zaXRpb24sIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHksIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZDJCb3JkZXJDb2xvciwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZFNxdWFyZUZpbGxDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJ1bGVyKEZhY2FkZUluZm9ybWF0aW9uLkdyaWQyWFBvc2l0aW9uLCBGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMllQb3NpdGlvbiwgRmFjYWRlSW5mb3JtYXRpb24uTnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseSxcclxuICAgICAgICAgICAgICAgICAgICBGYWNhZGVJbmZvcm1hdGlvbi5OdW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHksIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZVdpZHRoLCBGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMkJvcmRlckNvbG9yLCBGYWNhZGVJbmZvcm1hdGlvbi5SdWxlclRleHRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnICAgIyAnICsgdGhpcy5uYW1lICsgJyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgSW5pdGlhbGl6aW5nIHRoZSBHcmlkJ3Mgdmlld1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZVZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZVZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhbiBpbnN0YW5jZSBvZiB0aGUgR3JpZCdzIHZpZXdcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBwbGF5ZXJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGtleTogc3RyaW5nLCBwbGF5ZXI/OiBzdHJpbmcpOiBHcmlkVmlldyB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gPSBuZXcgR3JpZFZpZXcoa2V5LCBwbGF5ZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gYXMgR3JpZFZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoaXMgZ3JpZCdzIGNvbnRhaW5lci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVJQ29udGFpbmVyKCk6IFBJWEkuQ29udGFpbmVyIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIucGl2b3QueCA9IHRoaXMuX2NvbnRhaW5lci53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnBpdm90LnkgPSB0aGlzLl9jb250YWluZXIuaGVpZ2h0IC8gMjtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0VUlDb250YWluZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzaGlwSW5mb1xyXG4gICAgICogQHBhcmFtIHBsYXllclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZmlsbEdyaWRXaXRoQmF0dGxlU2hpcChwb3NpdGlvbjogQXJyYXk8bnVtYmVyPiwgc2hpcEluZm86IHN0cmluZywgcGxheWVyOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGdyaWREaW1lbnNpb25zOiBQSVhJLlJlY3RhbmdsZSA9IHRoaXMuZ2V0VUlDb250YWluZXIoKS5nZXRCb3VuZHMoKTtcclxuICAgICAgICBsZXQgeFBvc2l0aW9uOiBudW1iZXIgPSBwb3NpdGlvblswXTtcclxuICAgICAgICBsZXQgeVBvc2l0aW9uOiBudW1iZXIgPSBwb3NpdGlvblsxXTtcclxuICAgICAgICBsZXQgbmV3U2hpcEluZm86IGFueSA9IHNoaXBJbmZvLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgbGV0IHNxdWFyZVdpZHRoOiBudW1iZXIgPSBGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVXaWR0aCAqIEZhY2FkZUluZm9ybWF0aW9uLkdyaWRTY2FsZTtcclxuXHJcbiAgICAgICAgaWYgKHBsYXllciA9PSB0aGlzLl9wbGF5ZXIpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICgoeFBvc2l0aW9uID4gZ3JpZERpbWVuc2lvbnMueCkgJiYgKHhQb3NpdGlvbiA8IGdyaWREaW1lbnNpb25zLnggKyBncmlkRGltZW5zaW9ucy53aWR0aCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICgoeVBvc2l0aW9uID4gZ3JpZERpbWVuc2lvbnMueSkgJiYgKHlQb3NpdGlvbiA8IGdyaWREaW1lbnNpb25zLnkgKyBncmlkRGltZW5zaW9ucy5oZWlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgRmFjYWRlSW5mb3JtYXRpb24uTnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcXVhcmVYUG9zaXRpb246IG51bWJlciA9IHRoaXMuR3JpZFNxdWFyZXNbaV1bal0uZ2V0UG9zaXRpb24oKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcXVhcmVZUG9zaXRpb246IG51bWJlciA9IHRoaXMuR3JpZFNxdWFyZXNbaV1bal0uZ2V0UG9zaXRpb24oKVsxXTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh4UG9zaXRpb24gPj0gc3F1YXJlWFBvc2l0aW9uICYmIHhQb3NpdGlvbiA8IHNxdWFyZVhQb3NpdGlvbiArIHNxdWFyZVdpZHRoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh5UG9zaXRpb24gPj0gc3F1YXJlWVBvc2l0aW9uICYmIHlQb3NpdGlvbiA8IHNxdWFyZVlQb3NpdGlvbiArIHNxdWFyZVdpZHRoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3U2hpcEluZm9bMF0gPT0gRmFjYWRlSW5mb3JtYXRpb24uU2hpcEhvcml6b250YWxUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBudW1iZXJPZlNxdWFyZXM6IG51bWJlciA9IE1hdGgucm91bmQocG9zaXRpb25bMl0gLyBGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVXaWR0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TnVtYmVyT2ZTaGlwcyA8IHRoaXMubWF4U2hpcHNPblRoaXNHcmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4OiBudW1iZXIgPSBqOyB4IDwgaiArIG51bWJlck9mU3F1YXJlczsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HcmlkU3F1YXJlc1tpXVt4XS5maWxsU3F1YXJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeUdyaWRDb250cm9sbGVyKGksIGosIG51bWJlck9mU3F1YXJlcywgRmFjYWRlSW5mb3JtYXRpb24uU2hpcEhvcml6b250YWxUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE51bWJlck9mU2hpcHMrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5VGhhdFBsYXllckZpbmlzaGVkUGxhY2luZ1RoZVNoaXBzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV3U2hpcEluZm9bMF0gPT0gRmFjYWRlSW5mb3JtYXRpb24uU2hpcFZlcnRpY2FsVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbnVtYmVyT2ZTcXVhcmVzOiBudW1iZXIgPSBNYXRoLnJvdW5kKHBvc2l0aW9uWzNdIC8gRmFjYWRlSW5mb3JtYXRpb24uU3F1YXJlV2lkdGgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE51bWJlck9mU2hpcHMgPCB0aGlzLm1heFNoaXBzT25UaGlzR3JpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeDogbnVtYmVyID0gaTsgeCA8IGkgKyBudW1iZXJPZlNxdWFyZXM7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR3JpZFNxdWFyZXNbeF1bal0uZmlsbFNxdWFyZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlHcmlkQ29udHJvbGxlcihpLCBqLCBudW1iZXJPZlNxdWFyZXMsIEZhY2FkZUluZm9ybWF0aW9uLlNoaXBWZXJ0aWNhbFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TnVtYmVyT2ZTaGlwcysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlUaGF0UGxheWVyRmluaXNoZWRQbGFjaW5nVGhlU2hpcHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbm90aWZ5VGhhdFBsYXllckZpbmlzaGVkUGxhY2luZ1RoZVNoaXBzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnROdW1iZXJPZlNoaXBzID09PSB0aGlzLm1heFNoaXBzT25UaGlzR3JpZCkge1xyXG4gICAgICAgICAgICBsZXQgZmFjYWRlID0gQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KTtcclxuICAgICAgICAgICAgZmFjYWRlLnNlbmROb3RpZmljYXRpb24oTWVkaWF0b3JOb3RpZmljYXRpb25zLlRleHRVcGRhdGUsIFRleHRFcnJvcnMuTWF4aW11bU51bWJlck9mU2hpcFJlYWNoZWQsIHRoaXMuX3BsYXllcik7XHJcbiAgICAgICAgICAgIGZhY2FkZS5zZW5kTm90aWZpY2F0aW9uKEJhdHRsZVNoaXBDb250cm9sbGVyLlBsYXllckZpbmlzaGVkUGxhY2luZ1RoZVNoaXBzQ29tbWFuZCwgdGhpcy5fcGxheWVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGdyaWRYUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBncmlkWVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlV2lkdGhcclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5XHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5XHJcbiAgICAgKiBAcGFyYW0gZ3JpZEJvcmRlckNvbG9yXHJcbiAgICAgKiBAcGFyYW0gZ3JpZFNxdWFyZUZpbGxDb2xvclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZUJvYXJkKGdyaWRYUG9zaXRpb246IG51bWJlciwgZ3JpZFlQb3NpdGlvbjogbnVtYmVyLCBzcXVhcmVXaWR0aDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OiBudW1iZXIsIG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseTogbnVtYmVyLCBncmlkQm9yZGVyQ29sb3I6IG51bWJlciwgZ3JpZFNxdWFyZUZpbGxDb2xvcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5ld1hQb3NpdGlvbjogbnVtYmVyLFxyXG4gICAgICAgICAgICBuZXdZUG9zaXRpb246IG51bWJlciA9IGdyaWRZUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHNxdWFyZTogU3F1YXJlVmlldywga2V5OiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLkdyaWRTcXVhcmVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLkdyaWRTcXVhcmVzW2ldID0gW107XHJcbiAgICAgICAgICAgIG5ld1hQb3NpdGlvbiA9IGdyaWRYUG9zaXRpb247XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGtleSsrO1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlID0gU3F1YXJlVmlldy5nZXRJbnN0YW5jZSgnU3F1YXJlJyArIGtleSArIE1hdGgucmFuZG9tKCksIG5ld1hQb3NpdGlvbiArIGogKiBzcXVhcmVXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBuZXdZUG9zaXRpb24sIHNxdWFyZVdpZHRoLCBncmlkQm9yZGVyQ29sb3IsIGdyaWRTcXVhcmVGaWxsQ29sb3IsIGosIGkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HcmlkU3F1YXJlc1tpXVtqXSA9IHNxdWFyZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3WVBvc2l0aW9uICs9IHNxdWFyZVdpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk7IGkrKylcclxuICAgICAgICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseTsgaisrKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyLmFkZENoaWxkKHRoaXMuR3JpZFNxdWFyZXNbaV1bal0uZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgR3JpZFNxdWFyZXMgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB4UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB5UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5XHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5XHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlV2lkdGhcclxuICAgICAqIEBwYXJhbSBncmlkQm9yZGVyQ29sb3JcclxuICAgICAqIEBwYXJhbSBydWxlclRleHRDb2xvclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJ1bGVyKHhQb3NpdGlvbjogbnVtYmVyLCB5UG9zaXRpb246IG51bWJlciwgbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk6IG51bWJlciwgc3F1YXJlV2lkdGg6IG51bWJlciwgZ3JpZEJvcmRlckNvbG9yOiBudW1iZXIsIHJ1bGVyVGV4dENvbG9yOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcnVsZXJWaWV3OiBSdWxlclZpZXcgPSBSdWxlclZpZXcuZ2V0SW5zdGFuY2UodGhpcy5SdWxlck5hbWUgKyAnJyArIE1hdGgucmFuZG9tKCksIHhQb3NpdGlvbiwgeVBvc2l0aW9uLCBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5LFxyXG4gICAgICAgICAgICBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHksIHNxdWFyZVdpZHRoLCBncmlkQm9yZGVyQ29sb3IsIHJ1bGVyVGV4dENvbG9yKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmFkZENoaWxkKHJ1bGVyVmlldy5nZXRVSUNvbnRhaW5lcigpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlYXJjaCBmb3IgYSBTcXVhcmUgaW4gdGhpcyBHcmlkLlxyXG4gICAgICogQHBhcmFtIHNxdWFyZVZpZXdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhhc1NxdWFyZShzcXVhcmVWaWV3OiBTcXVhcmVWaWV3KTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgRmFjYWRlSW5mb3JtYXRpb24uTnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkdyaWRTcXVhcmVzW2ldW2pdID09PSBzcXVhcmVWaWV3KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaVxyXG4gICAgICogQHBhcmFtIGpcclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNcclxuICAgICAqIEBwYXJhbSBzaGlwVHlwZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG5vdGlmeUdyaWRDb250cm9sbGVyKGk6IG51bWJlciwgajogbnVtYmVyLCBudW1iZXJPZlNxdWFyZXM6IG51bWJlciwgc2hpcFR5cGU6IEZhY2FkZUluZm9ybWF0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGZhY2FkZTogYW55ID0gQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KTtcclxuICAgICAgICBmYWNhZGUuc2VuZE5vdGlmaWNhdGlvbihNZWRpYXRvck5vdGlmaWNhdGlvbnMuU2hpcFBvc2l0aW9uLCB0aGlzLl9wbGF5ZXIsIHNoaXBUeXBlLCB1bmRlZmluZWQsIFtpLCBqLCBudW1iZXJPZlNxdWFyZXNdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaWRlVGhlU2hpcHMoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRmFjYWRlSW5mb3JtYXRpb24uTnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBGYWNhZGVJbmZvcm1hdGlvbi5OdW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR3JpZFNxdWFyZXNbaV1bal0uaGlkZVRoZVNoaXBQYXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBhIHBsYXllciBtaXNzZWQsdGhlIGNvbnRyb2xsZXIgbm90aWZpZXMgdGhlIFZpZXcgdG8gc2hvdyB0aGUgbWlzcyBvbiB0aGUgZ3JpZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZVRoZVZpZXdXaXRoQUhpdChzcXVhcmVQb3NpdGlvbjogQXJyYXk8bnVtYmVyPik6IHZvaWQge1xyXG4gICAgICAgIGxldCBpOiBudW1iZXIgPSBzcXVhcmVQb3NpdGlvblswXSwgajogbnVtYmVyID0gc3F1YXJlUG9zaXRpb25bMV07XHJcbiAgICAgICAgdGhpcy5HcmlkU3F1YXJlc1tpXVtqXS5oaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIGEgcGxheWVyIGhpdHMsdGhlIGNvbnRyb2xsZXIgbm90aWZpZXMgdGhlIFZpZXcgdG8gc2hvdyB0aGUgbWlzcyBvbiB0aGUgZ3JpZC5cclxuICAgICAqIEBwYXJhbSBzcXVhcmVQb3NpdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlVGhlVmlld1dpdGhBTWlzcyhzcXVhcmVQb3NpdGlvbjogQXJyYXk8bnVtYmVyPik6IHZvaWQge1xyXG4gICAgICAgIGxldCBpOiBudW1iZXIgPSBzcXVhcmVQb3NpdGlvblswXSwgajogbnVtYmVyID0gc3F1YXJlUG9zaXRpb25bMV07XHJcbiAgICAgICAgdGhpcy5HcmlkU3F1YXJlc1tpXVtqXS5taXNzKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvZ3JpZC9HcmlkVmlldy50cyIsImltcG9ydCB7SGl0Vmlld30gZnJvbSBcIi4uL2hpdHMvSGl0Vmlld1wiO1xyXG5pbXBvcnQge01pc3NWaWV3fSBmcm9tIFwiLi4vaGl0cy9NaXNzVmlld1wiO1xyXG5pbXBvcnQge0JhdHRsZVNoaXBGYWNhZGUsIEZhY2FkZUluZm9ybWF0aW9uLCBNZWRpYXRvck5vdGlmaWNhdGlvbnN9IGZyb20gXCIuLi8uLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5pbXBvcnQge0Fic3RyYWN0Vmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFZpZXdcIjtcclxuXHJcbi8qKlxyXG4gKiBTbWFsbCByZWN0YW5nbGUgY2xhc3NcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTcXVhcmVWaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcclxuXHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGhvcml6b250YWxJbmRleDogbnVtYmVyO1xyXG4gICAgcHVibGljIHZlcnRpY2FsSW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBib3JkZXJDb2xvcjogbnVtYmVyO1xyXG4gICAgcHVibGljIGZpbGxDb2xvcjogbnVtYmVyO1xyXG5cclxuICAgIC8qKkNvbnRhaW5zIHRoZSBzcXVhcmUncyBib3JkZXIgKi9cclxuICAgIHB1YmxpYyBzcXVhcmVHcmFwaGljczogUElYSS5HcmFwaGljcztcclxuXHJcbiAgICAvKipDb250YWlucyB0aGUgbWFya2luZyB3aGljaCB3aWxsIGJlIGVpdGhlciBhIGhpdCBlaXRoZXIgYSBtaXNzICovXHJcbiAgICBwdWJsaWMgc3F1YXJlTWFya2luZzogUElYSS5HcmFwaGljcztcclxuXHJcbiAgICAvKipXaWxsIGNhbGwgYSBmdW5jdGlvbiB3aXRoaW4gdGhlIGdyaWQgY2xhc3MgKi9cclxuICAgIHB1YmxpYyBvbkNsaWNrSGFuZGxlcjogRnVuY3Rpb247XHJcblxyXG4gICAgcHVibGljIHNxdWFyZUV2ZW50OiBzdHJpbmcgPSAncG9pbnRlcnRhcCc7XHJcblxyXG4gICAgLyoqVGhlIEhpdFZpZXcgYW5kIHRoZSBNaXNzVmlldyAqL1xyXG4gICAgcHJpdmF0ZSBoaXRWaWV3OiBIaXRWaWV3O1xyXG4gICAgcHJpdmF0ZSBtaXNzVmlldzogTWlzc1ZpZXc7XHJcblxyXG4gICAgLyoqU3F1YXJlJ3MgZ2xvdyAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzcXVhcmVHbG93OiBQSVhJLkdyYXBoaWNzO1xyXG5cclxuICAgIC8qKlNoaXAncyBTcXVhcmUgZmlsbCBvYmplY3QgKi9cclxuICAgIHB1YmxpYyBzaGlwU3F1YXJlOiBQSVhJLkdyYXBoaWNzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBzcXVhcmVYUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVZUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVXaWR0aFxyXG4gICAgICogQHBhcmFtIGJvcmRlckNvbG9yXHJcbiAgICAgKiBAcGFyYW0gZmlsbENvbG9yXHJcbiAgICAgKiBAcGFyYW0gaG9yaXpvbnRhbEluZGV4XHJcbiAgICAgKiBAcGFyYW0gdmVydGljYWxJbmRleFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgc3F1YXJlWFBvc2l0aW9uOiBudW1iZXIsIHNxdWFyZVlQb3NpdGlvbjogbnVtYmVyLCBzcXVhcmVXaWR0aDogbnVtYmVyLCBib3JkZXJDb2xvcjogbnVtYmVyLCBmaWxsQ29sb3I6IG51bWJlciwgaG9yaXpvbnRhbEluZGV4PzogbnVtYmVyLCB2ZXJ0aWNhbEluZGV4PzogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgICAgICB0aGlzLnggPSBzcXVhcmVYUG9zaXRpb247XHJcbiAgICAgICAgdGhpcy55ID0gc3F1YXJlWVBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBzcXVhcmVXaWR0aDtcclxuICAgICAgICB0aGlzLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgdGhpcy5maWxsQ29sb3IgPSBmaWxsQ29sb3I7XHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsSW5kZXggPSBob3Jpem9udGFsSW5kZXg7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEluZGV4ID0gdmVydGljYWxJbmRleDtcclxuXHJcbiAgICAgICAgdGhpcy5zcXVhcmVHcmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVNYXJraW5nID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdsb3cgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMuc2hpcFNxdWFyZSA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3F1YXJlR3JhcGhpY3MubGluZVN0eWxlKDcsIHRoaXMuYm9yZGVyQ29sb3IsIDEpO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR3JhcGhpY3MuYmVnaW5GaWxsKHRoaXMuZmlsbENvbG9yKTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdyYXBoaWNzLmRyYXdSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLndpZHRoKTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdyYXBoaWNzLmVuZEZpbGwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zcXVhcmVHbG93LmxpbmVTdHlsZSgxLCAweGZmMDAwMCwgMC4yKTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdsb3cuYmVnaW5GaWxsKDB4ZmYwMTAwLCAwLjIpO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR2xvdy5kcmF3UmVjdCh0aGlzLnggKyA1LCB0aGlzLnkgKyA1LCB0aGlzLndpZHRoIC0gNSwgdGhpcy53aWR0aCAtIDUpO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR2xvdy5lbmRGaWxsKCk7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHbG93LnZpc2libGUgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuaGl0VmlldyA9IEhpdFZpZXcuZ2V0SW5zdGFuY2UoTWF0aC5yYW5kb20oKSArICcnLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCk7XHJcbiAgICAgICAgdGhpcy5oaXRWaWV3LnNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5taXNzVmlldyA9IE1pc3NWaWV3LmdldEluc3RhbmNlKE1hdGgucmFuZG9tKCkgKyAnJywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgpO1xyXG4gICAgICAgIHRoaXMubWlzc1ZpZXcuc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNxdWFyZU1hcmtpbmcuYWRkQ2hpbGQodGhpcy5oaXRWaWV3LmdldFVJQ29udGFpbmVyKCksdGhpcy5taXNzVmlldy5nZXRVSUNvbnRhaW5lcigpKTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdyYXBoaWNzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdyYXBoaWNzLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnNoaXBTcXVhcmUubGluZVN0eWxlKDAsIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZUZpbGxDb2xvcik7XHJcbiAgICAgICAgdGhpcy5zaGlwU3F1YXJlLmJlZ2luRmlsbChGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVGaWxsQ29sb3IsIDAuNik7XHJcbiAgICAgICAgdGhpcy5zaGlwU3F1YXJlLmRyYXdSZWN0KHRoaXMueCArIDUsIHRoaXMueSArIDUsIHRoaXMud2lkdGggLSA1LCB0aGlzLndpZHRoIC0gNSk7XHJcbiAgICAgICAgdGhpcy5zaGlwU3F1YXJlLmVuZEZpbGwoKTtcclxuICAgICAgICB0aGlzLnNoaXBTcXVhcmUudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFRvQ29udGFpbmVyKHRoaXMuc3F1YXJlR3JhcGhpY3MpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9Db250YWluZXIodGhpcy5zcXVhcmVNYXJraW5nKTtcclxuICAgICAgICB0aGlzLmFkZFRvQ29udGFpbmVyKHRoaXMuc3F1YXJlR2xvdyk7XHJcbiAgICAgICAgdGhpcy5hZGRUb0NvbnRhaW5lcih0aGlzLnNoaXBTcXVhcmUpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRpYWxpemVTcXVhcmVJbnRlcmFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaW5pdGlhbGl6aW5nIHRoZSBTcXVhcmUncyB2aWV3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplVmlldygpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgc3F1YXJlIHZpZXdcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBzcXVhcmVYUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVZUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVXaWR0aFxyXG4gICAgICogQHBhcmFtIGJvcmRlckNvbG9yXHJcbiAgICAgKiBAcGFyYW0gZmlsbENvbG9yXHJcbiAgICAgKiBAcGFyYW0gaG9yaXpvbnRhbEluZGV4XHJcbiAgICAgKiBAcGFyYW0gdmVydGljYWxJbmRleFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIHNxdWFyZVhQb3NpdGlvbj86IG51bWJlciwgc3F1YXJlWVBvc2l0aW9uPzogbnVtYmVyLCBzcXVhcmVXaWR0aD86IG51bWJlciwgYm9yZGVyQ29sb3I/OiBudW1iZXIsIGZpbGxDb2xvcj86IG51bWJlciwgaG9yaXpvbnRhbEluZGV4PzogbnVtYmVyLCB2ZXJ0aWNhbEluZGV4PzogbnVtYmVyKTogU3F1YXJlVmlldyB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gPSBuZXcgU3F1YXJlVmlldyhrZXksIHNxdWFyZVhQb3NpdGlvbiwgc3F1YXJlWVBvc2l0aW9uLCBzcXVhcmVXaWR0aCwgYm9yZGVyQ29sb3IsIGZpbGxDb2xvciwgaG9yaXpvbnRhbEluZGV4LCB2ZXJ0aWNhbEluZGV4KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldIGFzIFNxdWFyZVZpZXc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplU3F1YXJlSW50ZXJhY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHcmFwaGljc1xyXG4gICAgICAgICAgICAub24odGhpcy5zcXVhcmVFdmVudCwgdGhpcy5oYW5kbGVNb3VzZURvd24sIHRoaXMpXHJcbiAgICAgICAgICAgIC5vbigncG9pbnRlcm92ZXInLCB0aGlzLmhhbmRsZU1vdXNlT3ZlcilcclxuICAgICAgICAgICAgLm9uKCdwb2ludGVyb3V0JywgdGhpcy5oYW5kbGVNb3VzZU91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIGZvciB0aGlzIHNxdWFyZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5zcXVhcmVHcmFwaGljcy5nZXRCb3VuZHMoKS54LCB0aGlzLnNxdWFyZUdyYXBoaWNzLmdldEJvdW5kcygpLnldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVNb3VzZU92ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHbG93LnZpc2libGUgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlTW91c2VPdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHbG93LnZpc2libGUgPSBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgSGFuZGxlcyB0aGUgY2xpY2tlZCBkb3duIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlTW91c2VEb3duKCk6IHZvaWQge1xyXG4gICAgICAgIEJhdHRsZVNoaXBGYWNhZGUuZ2V0SW5zdGFuY2UoRmFjYWRlSW5mb3JtYXRpb24uQmF0dGxlU2hpcEZhY2FkZUtleSlcclxuICAgICAgICAgICAgLnNlbmROb3RpZmljYXRpb24oTWVkaWF0b3JOb3RpZmljYXRpb25zLlNxdWFyZUNsaWNrUmVxdWVzdCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgW3RoaXMudmVydGljYWxJbmRleCwgdGhpcy5ob3Jpem9udGFsSW5kZXhdLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3dzIGFuIFggb24gdGhlIHNxdWFyZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGhpdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhpdFZpZXcuc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZUludGVyYWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93cyBhIG1pc3Mgb24gdGhlIHNxdWFyZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG1pc3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5taXNzVmlldy5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlSW50ZXJhY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbGwgYSBzcXVhcmUgd2l0aCBhIHBhcnQgb2YgYSBCYXR0bGVTaGlwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBmaWxsU3F1YXJlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2hpcFNxdWFyZS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpc2FibGVJbnRlcmFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzYWJsZSB0aGUgU3F1YXJlJ3MgaW50ZXJhY3Rpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpc2FibGVJbnRlcmFjdGlvbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNxdWFyZUdsb3cuaW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLnNxdWFyZU1hcmtpbmcuaW50ZXJhY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZVRoZVNoaXBQYXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2hpcFNxdWFyZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvZ3JpZC9TcXVhcmVWaWV3LnRzIiwiaW1wb3J0IHtBYnN0cmFjdFZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3XCI7XHJcbmltcG9ydCB7RmFjYWRlSW5mb3JtYXRpb259IGZyb20gXCIuLi8uLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5cclxuLyoqXHJcbiAqICBUaGUgWCBpbnNpZGUgYSBzcXVhcmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSGl0VmlldyBleHRlbmRzIEFic3RyYWN0VmlldyB7XHJcblxyXG4gICAgcHVibGljIGdyYXBoaWNzIDogUElYSS5HcmFwaGljcztcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlWFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlWVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlV2lkdGhcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OnN0cmluZywgc3F1YXJlWFBvc2l0aW9uOiBudW1iZXIsIHNxdWFyZVlQb3NpdGlvbjogbnVtYmVyLCBzcXVhcmVXaWR0aDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3M9bmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSgxMCxGYWNhZGVJbmZvcm1hdGlvbi5IaXRDb2xvcik7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKHNxdWFyZVhQb3NpdGlvbiArIHNxdWFyZVdpZHRoLzMsIHNxdWFyZVlQb3NpdGlvbiArIHNxdWFyZVdpZHRoIC0gc3F1YXJlV2lkdGgvMyk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8oc3F1YXJlWFBvc2l0aW9uICsgc3F1YXJlV2lkdGggLSBzcXVhcmVXaWR0aC8zLCBzcXVhcmVZUG9zaXRpb24gKyBzcXVhcmVXaWR0aC8zKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oc3F1YXJlWFBvc2l0aW9uICsgc3F1YXJlV2lkdGgvMywgc3F1YXJlWVBvc2l0aW9uICsgc3F1YXJlV2lkdGgvMyk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8oc3F1YXJlWFBvc2l0aW9uICsgc3F1YXJlV2lkdGggLSBzcXVhcmVXaWR0aC8zLCBzcXVhcmVZUG9zaXRpb24gKyBzcXVhcmVXaWR0aCAtIHNxdWFyZVdpZHRoLzMpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9Db250YWluZXIodGhpcy5ncmFwaGljcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3NcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBzcXVhcmVYUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVZUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVXaWR0aFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIHNxdWFyZVhQb3NpdGlvbj86IG51bWJlciwgc3F1YXJlWVBvc2l0aW9uPzogbnVtYmVyLCBzcXVhcmVXaWR0aD86IG51bWJlcik6IEhpdFZpZXcge1xyXG4gICAgICAgIGlmICghcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0pXHJcbiAgICAgICAgICAgIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldID0gbmV3IEhpdFZpZXcoa2V5LCBzcXVhcmVYUG9zaXRpb24sIHNxdWFyZVlQb3NpdGlvbiwgc3F1YXJlV2lkdGgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gYXMgSGl0VmlldztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9oaXRzL0hpdFZpZXcudHMiLCJpbXBvcnQge0Fic3RyYWN0Vmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFZpZXdcIjtcclxuaW1wb3J0IHtGYWNhZGVJbmZvcm1hdGlvbn0gZnJvbSBcIi4uLy4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBjcmVhdGVzIHRoZSBtaXNzIGluc2lkZSBhIEdyaWQncyBzcXVhcmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWlzc1ZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xyXG5cclxuICAgIHB1YmxpYyBncmFwaGljczogUElYSS5HcmFwaGljcztcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlWFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlWVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlV2lkdGhcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHNxdWFyZVhQb3NpdGlvbjogbnVtYmVyLCBzcXVhcmVZUG9zaXRpb246IG51bWJlciwgc3F1YXJlV2lkdGg6IG51bWJlcikge1xyXG5cclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVN0eWxlKDgsIEZhY2FkZUluZm9ybWF0aW9uLk1pc3NDb2xvcik7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5kcmF3Q2lyY2xlKHNxdWFyZVhQb3NpdGlvbiArIHNxdWFyZVdpZHRoIC8gMiwgc3F1YXJlWVBvc2l0aW9uICsgc3F1YXJlV2lkdGggLyAyLCBzcXVhcmVXaWR0aCAvIDMuOSk7XHJcbiAgICAgICAgdGhpcy5hZGRUb0NvbnRhaW5lcih0aGlzLmdyYXBoaWNzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3NcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBzcXVhcmVYUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVZUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVXaWR0aFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIHNxdWFyZVhQb3NpdGlvbj86IG51bWJlciwgc3F1YXJlWVBvc2l0aW9uPzogbnVtYmVyLCBzcXVhcmVXaWR0aD86IG51bWJlcik6IE1pc3NWaWV3IHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBNaXNzVmlldyhrZXksIHNxdWFyZVhQb3NpdGlvbiwgc3F1YXJlWVBvc2l0aW9uLCBzcXVhcmVXaWR0aCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSBhcyBNaXNzVmlldztcclxuICAgIH1cclxuXHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L2hpdHMvTWlzc1ZpZXcudHMiLCJpbXBvcnQge1J1bGVyU3F1YXJlfSBmcm9tIFwiLi9SdWxlclNxdWFyZVwiO1xyXG5pbXBvcnQge0Fic3RyYWN0Vmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFZpZXdcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGNyZWF0ZXMgdGhlIGhvcml6b250YWwgYW5kIHZlcnRpY2FsIHJ1bGVyIGFyb3VuZCB0aGUgZ3JpZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJ1bGVyVmlldyBleHRlbmRzIEFic3RyYWN0VmlldyB7XHJcblxyXG4gICAgcHVibGljIG5hbWU6c3RyaW5nPSdSdWxlcic7XHJcblxyXG4gICAgcHVibGljIHhQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIHlQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzcXVhcmVXaWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGJvcmRlckNvbG9yOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGV4dENvbG9yOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBSdWxlclR5cGU6IEFycmF5PHN0cmluZz4gPSBbJ05VTUJFUicsXHJcbiAgICAgICAgJ0xFVFRFUiddO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSB4UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB5UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5XHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5XHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlV2lkdGhcclxuICAgICAqIEBwYXJhbSBib3JkZXJDb2xvclxyXG4gICAgICogQHBhcmFtIHRleHRDb2xvclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgeFBvc2l0aW9uOiBudW1iZXIsIHlQb3NpdGlvbjogbnVtYmVyLCBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk6IG51bWJlciwgc3F1YXJlV2lkdGg6IG51bWJlciwgYm9yZGVyQ29sb3I6IG51bWJlciwgdGV4dENvbG9yOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgICAgICB0aGlzLnhQb3NpdGlvbiA9IHhQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnlQb3NpdGlvbiA9IHlQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLm51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHkgPSBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5O1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5ID0gbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5O1xyXG4gICAgICAgIHRoaXMuc3F1YXJlV2lkdGggPSBzcXVhcmVXaWR0aDtcclxuICAgICAgICB0aGlzLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSB0ZXh0Q29sb3I7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlUnVsZXJWZXJ0aWNhbGx5KCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSdWxlckhvcml6b250YWxseSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6aW5nIHRoZSBSdWxlcidzIHZpZXdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVWaWV3KCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXRpYWxpemVWaWV3KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgUnVsZXJWaWV3IGNyZWF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0geFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0geVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseVxyXG4gICAgICogQHBhcmFtIG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseVxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKiBAcGFyYW0gYm9yZGVyQ29sb3JcclxuICAgICAqIEBwYXJhbSB0ZXh0Q29sb3JcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGtleTogc3RyaW5nLCB4UG9zaXRpb24/OiBudW1iZXIsIHlQb3NpdGlvbj86IG51bWJlciwgbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseT86IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk/OiBudW1iZXIsIHNxdWFyZVdpZHRoPzogbnVtYmVyLCBib3JkZXJDb2xvcj86IG51bWJlciwgdGV4dENvbG9yPzogbnVtYmVyKTogUnVsZXJWaWV3IHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBSdWxlclZpZXcoa2V5LCB4UG9zaXRpb24sIHlQb3NpdGlvbiwgbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseSwgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5LFxyXG4gICAgICAgICAgICAgICAgc3F1YXJlV2lkdGgsIGJvcmRlckNvbG9yLCB0ZXh0Q29sb3IpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gYXMgUnVsZXJWaWV3O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgaG9yaXpvbnRhbCBydWxlciB3aGljaCBjb250YWlucyBudW1iZXJzIGFuZCBiZWdpbnMgd2l0aCAwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlUnVsZXJIb3Jpem9udGFsbHkoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJ1bGVyU3F1YXJlOiBSdWxlclNxdWFyZSA9IFJ1bGVyU3F1YXJlLmdldEluc3RhbmNlKDcwMCAqIE1hdGgucmFuZG9tKCkgKyBpICsgJycsIHRoaXMueFBvc2l0aW9uICsgaSAqIHRoaXMuc3F1YXJlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnlQb3NpdGlvbiArIHRoaXMubnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseSAqIHRoaXMuc3F1YXJlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNxdWFyZVdpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLnRleHRDb2xvciwgdGhpcy5SdWxlclR5cGVbMF0sIGkgKyAxKTtcclxuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyLmFkZENoaWxkKHJ1bGVyU3F1YXJlLmdldFVJQ29udGFpbmVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIHZlcnRpY2FsIHJ1bGVyIHdoaWNoIGNvbnRhaW5zIGxldHRlcnMgYW5kIGJlZ2lucyB3aXRoIEFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVSdWxlclZlcnRpY2FsbHkoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcnVsZXJTcXVhcmU6IFJ1bGVyU3F1YXJlID0gUnVsZXJTcXVhcmUuZ2V0SW5zdGFuY2UoMzAwICogTWF0aC5yYW5kb20oKSArIGkgKyAnJywgdGhpcy54UG9zaXRpb24gLSB0aGlzLnNxdWFyZVdpZHRoLCB0aGlzLnlQb3NpdGlvbiArIGkgKiB0aGlzLnNxdWFyZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcXVhcmVXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy50ZXh0Q29sb3IsIHRoaXMuUnVsZXJUeXBlWzFdLCA2NSArIGkpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQocnVsZXJTcXVhcmUuZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L3J1bGVyL1J1bGVyVmlldy50cyIsImltcG9ydCB7QWJzdHJhY3RWaWV3fSBmcm9tIFwiLi4vLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Vmlld1wiO1xyXG5cclxuLyoqXHJcbiAqIEhhcyB0aGUgcmVzcG9uc2liaWxpdHkgdG8gY3JlYXRlIGEgc2luZ2xlIHNxdWFyZSBhbmQgaW5zaWRlIGl0IHRvIHB1dCB0aGUgY29yZXNwb25kaW5nIGxldHRlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJ1bGVyU3F1YXJlIGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKiBAcGFyYW0gYm9yZGVyQ29sb3JcclxuICAgICAqIEBwYXJhbSB0ZXh0Q29sb3JcclxuICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gYXNjaWlDb2RlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCB4UG9zaXRpb246IG51bWJlciwgeVBvc2l0aW9uOiBudW1iZXIsIHNxdWFyZVdpZHRoOiBudW1iZXIsIGJvcmRlckNvbG9yOiBudW1iZXIsIHRleHRDb2xvcjogbnVtYmVyLCB0eXBlOiBzdHJpbmcsIGFzY2lpQ29kZTogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcblxyXG4gICAgICAgIGxldCBncmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDgsIGJvcmRlckNvbG9yKTtcclxuICAgICAgICBncmFwaGljcy5iZWdpbkZpbGwoMHhmZmZmZmYpO1xyXG4gICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0KHhQb3NpdGlvbiwgeVBvc2l0aW9uLCBzcXVhcmVXaWR0aCwgc3F1YXJlV2lkdGgpO1xyXG4gICAgICAgIGdyYXBoaWNzLmVuZEZpbGwoKTtcclxuXHJcbiAgICAgICAgbGV0IHRleHQ7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdMRVRURVInKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBuZXcgUElYSS5UZXh0KFN0cmluZy5mcm9tQ2hhckNvZGUoYXNjaWlDb2RlKSwge2ZpbGw6IHRleHRDb2xvcn0pO1xyXG4gICAgICAgICAgICB0ZXh0LmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICAgICAgdGV4dC5wb3NpdGlvbi5zZXQoeFBvc2l0aW9uICsgc3F1YXJlV2lkdGggLyAyLCB5UG9zaXRpb24gKyBzcXVhcmVXaWR0aCAvIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnTlVNQkVSJykge1xyXG4gICAgICAgICAgICB0ZXh0ID0gbmV3IFBJWEkuVGV4dChhc2NpaUNvZGUudG9TdHJpbmcoKSwge2ZpbGw6IHRleHRDb2xvcn0pO1xyXG4gICAgICAgICAgICB0ZXh0LmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICAgICAgdGV4dC5wb3NpdGlvbi5zZXQoeFBvc2l0aW9uICsgc3F1YXJlV2lkdGggLyAyLCB5UG9zaXRpb24gKyBzcXVhcmVXaWR0aCAvIDIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmFkZENoaWxkKGdyYXBoaWNzLCB0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHRlciBmb3IgYW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzc1xyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKiBAcGFyYW0gYm9yZGVyQ29sb3JcclxuICAgICAqIEBwYXJhbSB0ZXh0Q29sb3JcclxuICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gYXNjaWlDb2RlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShrZXk6IHN0cmluZywgeFBvc2l0aW9uPzogbnVtYmVyLCB5UG9zaXRpb24/OiBudW1iZXIsIHNxdWFyZVdpZHRoPzogbnVtYmVyLCBib3JkZXJDb2xvcj86IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I/OiBudW1iZXIsIHR5cGU/OiBzdHJpbmcsIGFzY2lpQ29kZT86IG51bWJlcik6IFJ1bGVyU3F1YXJlIHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBSdWxlclNxdWFyZShrZXksIHhQb3NpdGlvbiwgeVBvc2l0aW9uLCBzcXVhcmVXaWR0aCwgYm9yZGVyQ29sb3IsIHRleHRDb2xvciwgdHlwZSwgYXNjaWlDb2RlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldIGFzIFJ1bGVyU3F1YXJlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L3J1bGVyL1J1bGVyU3F1YXJlLnRzIiwiaW1wb3J0IHtBYnN0cmFjdFZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3XCI7XHJcbmltcG9ydCB7QmF0dGxlU2hpcFZpZXd9IGZyb20gXCIuLi9tYWluVmlldy9CYXR0bGVTaGlwVmlld1wiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgaGFzIHRoZSByZXNwb25zaWJpbGl0eSB0byBzaG93IHRleHQgbm90aWZpY2F0aW9ucyBvbiB0aGUgc2NyZWVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVGV4dFZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xyXG5cclxuICAgIC8qKkhlcmUgd2Ugc2F2ZSB0aGUgdGV4dCBzdHJpbmcgKi9cclxuICAgIHByaXZhdGUgdGV4dDogUElYSS5UZXh0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHRleHRcclxuICAgICAqIEBwYXJhbSBmb250U2l6ZVxyXG4gICAgICogQHBhcmFtIGNvbG9yXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIGZvbnRTaXplOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG5cclxuICAgICAgICB0aGlzLnRleHQgPSBuZXcgUElYSS5UZXh0KHRleHQsIHtmb250U2l6ZTogZm9udFNpemUsIGZpbGw6IGNvbG9yfSk7XHJcbiAgICAgICAgdGhpcy50ZXh0LmFuY2hvci5zZXQoMC41LCAwLjUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemluZyB0aGUgVGV4dCdzIHZpZXdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVWaWV3KCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXRpYWxpemVWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHRleHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFRleHQodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0LnRleHQgKz0gJ1xcbicgKyB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dHYW1lUGxheVN0YXRlVGV4dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRleHQudGV4dCA9IEJhdHRsZVNoaXBWaWV3LkdhbWVQbGF5U3RhdGVUZXh0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gdGV4dFxyXG4gICAgICogQHBhcmFtIGZvbnRTaXplXHJcbiAgICAgKiBAcGFyYW0gY29sb3JcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGtleTogc3RyaW5nLCB0ZXh0Pzogc3RyaW5nLCBmb250U2l6ZT86IG51bWJlciwgY29sb3I/OiBudW1iZXIpOiBUZXh0VmlldyB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gPSBuZXcgVGV4dFZpZXcoa2V5LCB0ZXh0LCBmb250U2l6ZSwgY29sb3IpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gYXMgVGV4dFZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VUlDb250YWluZXIoKTogUElYSS5Db250YWluZXIge1xyXG4gICAgICAgIC8qdGhpcy5fY29udGFpbmVyLnBpdm90LnggPSB0aGlzLl9jb250YWluZXIud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5waXZvdC55ID0gdGhpcy5fY29udGFpbmVyLmhlaWdodCAvIDI7Ki9cclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L3RleHQvVGV4dFZpZXcudHMiLCJpbXBvcnQge0Fic3RyYWN0Vmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFZpZXdcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGJ1dHRvbiBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25WaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcclxuXHJcbiAgICAvKipUaGUgcG9zaXRpb25zIGFuZCB0aGUgc2NhbGUgb2YgdGhlIGJ1dHRvbiAqL1xyXG4gICAgcHVibGljIHhQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIHlQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIHNjYWxlOiBudW1iZXI7XHJcblxyXG4gICAgLyoqVGhlIHNwcml0ZSB0aGF0IGNvbnRhaW5zIHRoZSBidXR0b24ncyBwbmcgaW1hZ2UgKi9cclxuICAgIHB1YmxpYyBzcHJpdGU6IFBJWEkuU3ByaXRlO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0geFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0geVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc2NhbGVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHhQb3NpdGlvbjogbnVtYmVyLCB5UG9zaXRpb246IG51bWJlciwgc2NhbGU6IG51bWJlcikge1xyXG5cclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMueFBvc2l0aW9uID0geFBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMueVBvc2l0aW9uID0geVBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBQSVhJLlNwcml0ZS5mcm9tSW1hZ2UoJ2ltYWdlcy9OZXh0UGhhc2VCdXR0b24ucG5nJyk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc2NhbGUuc2V0KHRoaXMuc2NhbGUpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnNwcml0ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUJ1dHRvbkludGVyYWN0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIHN1cGVyLnJlZ2lzdGVyTWVkaWF0b3IobmV3IEJ1dHRvblZpZXdNZWRpYXRvcihrZXksIHRoaXMpKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgQnV0dG9uVmlldyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNjYWxlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShrZXk6IHN0cmluZywgeFBvc2l0aW9uPzogbnVtYmVyLCB5UG9zaXRpb24/OiBudW1iZXIsIHNjYWxlPzogbnVtYmVyKTogcHVyZW12Yy5WaWV3IHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBCdXR0b25WaWV3KGtleSwgeFBvc2l0aW9uLCB5UG9zaXRpb24sIHNjYWxlKTtcclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gYXMgcHVyZW12Yy5WaWV3O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6aW5nIHRoZSBCdXR0b24ncyB2aWV3LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZVZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZVZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhpcyBidXR0b24ncyBjb250YWluZXIgd2hpY2ggd2lsbCBjb250YWluIHRoZSBidXR0b24ncyB0ZXh0dXJlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VUlDb250YWluZXIoKTogUElYSS5Db250YWluZXIge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5waXZvdC54ID0gdGhpcy5fY29udGFpbmVyLndpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIucGl2b3QueSA9IHRoaXMuX2NvbnRhaW5lci5oZWlnaHQgLyAyO1xyXG4gICAgICAgIHJldHVybiBzdXBlci5nZXRVSUNvbnRhaW5lcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ha2VzIHRoZSBidXR0b24gaW50ZXJhY3RpdmUgd2l0aCB0aGUgcGxheWVyLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVCdXR0b25JbnRlcmFjdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZS5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuYnV0dG9uTW9kZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc3ByaXRlLm9uKCdwb2ludGVydGFwJywgdGhpcy5oYW5kbGVNb3VzZURvd24pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L2J1dHRvbi9CdXR0b25WaWV3LnRzIiwiaW1wb3J0IHtBYnN0cmFjdENvbW1hbmR9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb21tYW5kXCI7XHJcbmltcG9ydCB7R3JpZENvbnRyb2xsZXJ9IGZyb20gXCIuLi9jb250cm9sbGVyL0dyaWRDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7QmF0dGxlU2hpcENvbnRyb2xsZXJ9IGZyb20gXCIuLi9jb250cm9sbGVyL0JhdHRsZVNoaXBDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7RmFjYWRlSW5mb3JtYXRpb259IGZyb20gXCIuLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5cclxuLyoqXHJcbiAqIENvbW1hbmQgdXNlZCB3aGVuIGEgZ3JpZCdzIHNxdWFyZSBpcyBjbGlja2VkIGJ5IGEgcGxheWVyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNxdWFyZUNsaWNrQ29tbWFuZCBleHRlbmRzIEFic3RyYWN0Q29tbWFuZCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeGVjdXRlIHRoaXMgY29tbWFuZFxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhlY3V0ZShub3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU3F1YXJlQ2xpY2sgSGFuZGxlIFJlcXVlc3QnKTtcclxuICAgICAgICBsZXQgcGxheWVyOiBzdHJpbmcgPSBub3RpZmljYXRpb24uZ2V0Qm9keSgpO1xyXG4gICAgICAgIHN3aXRjaCAocGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyT25lOlxyXG4gICAgICAgICAgICAgICAgR3JpZENvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoQmF0dGxlU2hpcENvbnRyb2xsZXIuR3JpZFBsYXllck9uZUNvbnRyb2xsZXJOYW1lKS5jaGVja0lmUGxheWVySGFzSGl0QVNoaXAobm90aWZpY2F0aW9uLmdldEFycmF5T2ZOdW1iZXJzKCksIHBsYXllcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJUd286XHJcbiAgICAgICAgICAgICAgICBHcmlkQ29udHJvbGxlci5nZXRJbnN0YW5jZShCYXR0bGVTaGlwQ29udHJvbGxlci5HcmlkUGxheWVyVHdvQ29udHJvbGxlck5hbWUpLmNoZWNrSWZQbGF5ZXJIYXNIaXRBU2hpcChub3RpZmljYXRpb24uZ2V0QXJyYXlPZk51bWJlcnMoKSwgcGxheWVyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvY29tbWFuZC9TcXVhcmVDbGlja0NvbW1hbmQudHMiLCJpbXBvcnQge0Fic3RyYWN0Q29tbWFuZH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdENvbW1hbmRcIjtcclxuaW1wb3J0ICdwaXhpLmpzJ1xyXG5cclxuLyoqXHJcbiAqIENvbW1hbmQgY2FsbGVkIHdoZW4gYSBidXR0b24gaXMgcHJlc3NlZCBvbiB0aGUgc2NyZWVuIGJ5IGEgcGxheWVyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJ1dHRvblByZXNzQ29tbWFuZCBleHRlbmRzIEFic3RyYWN0Q29tbWFuZCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeGVjdXRlIHRoaXMgY29tbWFuZFxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhlY3V0ZShub3RpZmljYXRpb246IHB1cmVtdmMuTm90aWZpY2F0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0J1dHRvblByZXNzIEhhbmRsZSBSZXF1ZXN0Jyk7XHJcblxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9jb21tYW5kL0J1dHRvblByZXNzQ29tbWFuZC50cyIsImltcG9ydCB7QmF0dGxlU2hpcEZhY2FkZSwgRmFjYWRlSW5mb3JtYXRpb259IGZyb20gXCIuLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5pbXBvcnQgJ3BpeGkuanMnXHJcbmltcG9ydCB7QWJzdHJhY3RNZWRpYXRvcn0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE1lZGlhdG9yXCI7XHJcbmltcG9ydCB7QnV0dG9uVmlld30gZnJvbSBcIi4uL3ZpZXcvYnV0dG9uL0J1dHRvblZpZXdcIjtcclxuaW1wb3J0IHtCYXR0bGVTaGlwVmlld30gZnJvbSBcIi4uL3ZpZXcvbWFpblZpZXcvQmF0dGxlU2hpcFZpZXdcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgYnV0dG9uJ3MgbWVkaWF0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQnV0dG9uVmlld01lZGlhdG9yIGV4dGVuZHMgQWJzdHJhY3RNZWRpYXRvciB7XHJcbiAgICBwdWJsaWMgbmFtZTogU3RyaW5nID0gJ0J1dHRvblZpZXdNZWRpYXRvcic7XHJcbiAgICBwdWJsaWMgYnV0dG9uVmlld05hbWUgPSAnQnV0dG9uVmlldyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHZpZXdDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHZpZXdDb21wb25lbnQ6IHB1cmVtdmMuVmlldyA9IG51bGwpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCB2aWV3Q29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lcnNMaXN0OiBBcnJheTxQSVhJLkNvbnRhaW5lcj4gPSBbXTtcclxuICAgICAgICBjb250YWluZXJzTGlzdC5wdXNoKHN1cGVyLmdldFZpZXdDb21wb25lbnQoKS5nZXRVSUNvbnRhaW5lcigpKTtcclxuICAgICAgICBCYXR0bGVTaGlwRmFjYWRlLmdldEluc3RhbmNlKEZhY2FkZUluZm9ybWF0aW9uLkJhdHRsZVNoaXBGYWNhZGVLZXkpLmFkZENvbnRhaW5lcnNUb1ZpZXcoY29udGFpbmVyc0xpc3QsIEJhdHRsZVNoaXBWaWV3LkdhbWVCdXR0b25Db250YWluZXIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnICAgIyAnICsgdGhpcy5uYW1lICsgJyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbm90aWZpY2F0aW9uIHRoYXQgdGhlIEJhdHRsZVNoaXBNZWRpYXRvciBpcyBpbnRlcmVzdGVkIGluLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFRoaXMgaXMgd2hlcmUgdGhlIG5vdGlmaWNhdGlvbnMgYXJlIGhhbmRsZWQuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBwdXJlbXZjLk5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGxldCBuYW1lOiBTdHJpbmcgPSBub3RpZmljYXRpb24ubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvblJlZ2lzdGVyKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvbWVkaWF0b3IvQnV0dG9uVmlld01lZGlhdG9yLnRzIiwiaW1wb3J0ICdwaXhpLmpzJ1xyXG5pbXBvcnQge1xyXG4gICAgQmF0dGxlU2hpcEZhY2FkZSxcclxuICAgIENvbW1hbmROb3RpZmljYXRpb25zLFxyXG4gICAgRmFjYWRlSW5mb3JtYXRpb24sXHJcbiAgICBNZWRpYXRvck5vdGlmaWNhdGlvbnNcclxufSBmcm9tIFwiLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0IHtBYnN0cmFjdE1lZGlhdG9yfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0TWVkaWF0b3JcIjtcclxuaW1wb3J0IHtBYnN0cmFjdE5vdGlmaWNhdGlvbn0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQge0JhdHRsZVNoaXBDb250cm9sbGVyfSBmcm9tIFwiLi4vY29udHJvbGxlci9CYXR0bGVTaGlwQ29udHJvbGxlclwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBncmlkJ3MgbWVkaWF0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JpZFZpZXdNZWRpYXRvciBleHRlbmRzIEFic3RyYWN0TWVkaWF0b3Ige1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3BsYXllcjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZWRpYXRvck5hbWVcclxuICAgICAqIEBwYXJhbSB2aWV3Q29tcG9uZW50XHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lZGlhdG9yTmFtZTogc3RyaW5nLCB2aWV3Q29tcG9uZW50OiBhbnksIHBsYXllcjogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobWVkaWF0b3JOYW1lLCB2aWV3Q29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4gICAgICAgIGxldCBjb250YWluZXJzTGlzdDogQXJyYXk8UElYSS5Db250YWluZXI+ID0gW107XHJcbiAgICAgICAgY29udGFpbmVyc0xpc3QucHVzaChzdXBlci5nZXRWaWV3Q29tcG9uZW50KCkuZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICAgICAgQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KS5hZGRDb250YWluZXJzVG9WaWV3KGNvbnRhaW5lcnNMaXN0LCArcGxheWVyIC0gMSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCcgICAjICcgKyBzdXBlci5nZXRNZWRpYXRvck5hbWUoKSArICcgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5vdGlmaWNhdGlvbiB0aGF0IHRoZSBHcmlkVmlld01lZGlhdG9yIGlzIGludGVyZXN0ZWQgaW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gW01lZGlhdG9yTm90aWZpY2F0aW9ucy5HcmlkU2hpcE1hcmtpbmcsXHJcbiAgICAgICAgICAgIE1lZGlhdG9yTm90aWZpY2F0aW9ucy5UZXN0LFxyXG4gICAgICAgICAgICBNZWRpYXRvck5vdGlmaWNhdGlvbnMuU3F1YXJlQ2xpY2tSZXF1ZXN0LFxyXG4gICAgICAgICAgICBNZWRpYXRvck5vdGlmaWNhdGlvbnMuU2hpcFBvc2l0aW9uLFxyXG4gICAgICAgICAgICBNZWRpYXRvck5vdGlmaWNhdGlvbnMuSGlkZVRoZVNoaXBzLFxyXG4gICAgICAgICAgICBNZWRpYXRvck5vdGlmaWNhdGlvbnMuUGxheWVySGl0QVNoaXAsXHJcbiAgICAgICAgICAgIE1lZGlhdG9yTm90aWZpY2F0aW9ucy5QbGF5ZXJNaXNzZWRdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFRoaXMgaXMgd2hlcmUgdGhlIG5vdGlmaWNhdGlvbnMgYXJlIGhhbmRsZWQuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBBYnN0cmFjdE5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAobm90aWZpY2F0aW9uLmdldE5hbWUoKSkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBNZWRpYXRvck5vdGlmaWNhdGlvbnMuR3JpZFNoaXBNYXJraW5nIDpcclxuICAgICAgICAgICAgICAgIGxldCBzaGlwUG9zaXRpb25JbmZvOiBBcnJheTxudW1iZXI+ID0gbm90aWZpY2F0aW9uLmdldEFycmF5T2ZOdW1iZXJzKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyOiBzdHJpbmcgPSBub3RpZmljYXRpb24uZ2V0Qm9keSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllciA9PSB0aGlzLl9wbGF5ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIuZ2V0Vmlld0NvbXBvbmVudCgpLmZpbGxHcmlkV2l0aEJhdHRsZVNoaXAoc2hpcFBvc2l0aW9uSW5mbywgbm90aWZpY2F0aW9uLmdldFR5cGUoKSwgcGxheWVyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBNZWRpYXRvck5vdGlmaWNhdGlvbnMuU3F1YXJlQ2xpY2tSZXF1ZXN0OlxyXG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IG5vdGlmaWNhdGlvbi5nZXRPYmplY3RSZWZlcmVuY2UoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdXBlci5nZXRWaWV3Q29tcG9uZW50KCkuaGFzU3F1YXJlKHNxdWFyZSkpIHsgIC8vaWYgdGhlIEdyaWQgaGFzIHRoaXMgc3F1YXJlXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNxdWFyZUNsaWNrQ29vcmRpbmF0ZXM6IEFycmF5PG51bWJlcj4gPSBub3RpZmljYXRpb24uZ2V0QXJyYXlPZk51bWJlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICBzdXBlci5zZW5kTm90aWZpY2F0aW9uKENvbW1hbmROb3RpZmljYXRpb25zLlNxdWFyZUNsaWNrTm90aWZpY2F0aW9uLCB0aGlzLl9wbGF5ZXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBzcXVhcmVDbGlja0Nvb3JkaW5hdGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE1lZGlhdG9yTm90aWZpY2F0aW9ucy5TaGlwUG9zaXRpb246XHJcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyMTogc3RyaW5nID0gbm90aWZpY2F0aW9uLmdldEJvZHkoKTtcclxuICAgICAgICAgICAgICAgIGxldCBzaGlwVHlwZTogc3RyaW5nID0gbm90aWZpY2F0aW9uLmdldFR5cGUoKTtcclxuICAgICAgICAgICAgICAgIHN1cGVyLnNlbmROb3RpZmljYXRpb24oQmF0dGxlU2hpcENvbnRyb2xsZXIuU2hpcFBvc2l0aW9uSW5mb0NvbW1hbmQsIHBsYXllcjEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcFR5cGUsIHVuZGVmaW5lZCwgbm90aWZpY2F0aW9uLmdldEFycmF5T2ZOdW1iZXJzKCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1lZGlhdG9yTm90aWZpY2F0aW9ucy5IaWRlVGhlU2hpcHM6XHJcbiAgICAgICAgICAgICAgICBzdXBlci5nZXRWaWV3Q29tcG9uZW50KCkuaGlkZVRoZVNoaXBzKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBNZWRpYXRvck5vdGlmaWNhdGlvbnMuUGxheWVySGl0QVNoaXA6XHJcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyTDogc3RyaW5nID0gbm90aWZpY2F0aW9uLmdldEJvZHkoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wbGF5ZXIgPT0gcGxheWVyTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1cGVyLmdldFZpZXdDb21wb25lbnQoKS51cGRhdGVUaGVWaWV3V2l0aEFIaXQobm90aWZpY2F0aW9uLmdldEFycmF5T2ZOdW1iZXJzKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTWVkaWF0b3JOb3RpZmljYXRpb25zLlBsYXllck1pc3NlZDpcclxuICAgICAgICAgICAgICAgIGxldCBwbGF5ZXJLOnN0cmluZz1ub3RpZmljYXRpb24uZ2V0Qm9keSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BsYXllciA9PSBwbGF5ZXJLKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIuZ2V0Vmlld0NvbXBvbmVudCgpLnVwZGF0ZVRoZVZpZXdXaXRoQU1pc3Mobm90aWZpY2F0aW9uLmdldEFycmF5T2ZOdW1iZXJzKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1lZGlhdG9yTm90aWZpY2F0aW9ucy5UZXN0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobm90aWZpY2F0aW9uLmdldEFycmF5T2ZTdHJpbmdzKCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9HcmlkVmlld01lZGlhdG9yLnRzIiwiaW1wb3J0ICdwaXhpLmpzJ1xyXG5pbXBvcnQge0JhdHRsZVNoaXBGYWNhZGUsIEZhY2FkZUluZm9ybWF0aW9uLCBNZWRpYXRvck5vdGlmaWNhdGlvbnN9IGZyb20gXCIuLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5pbXBvcnQge0Fic3RyYWN0TWVkaWF0b3J9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RNZWRpYXRvclwiO1xyXG5pbXBvcnQge0JhdHRsZVNoaXBWaWV3fSBmcm9tIFwiLi4vdmlldy9tYWluVmlldy9CYXR0bGVTaGlwVmlld1wiO1xyXG5cclxuLyoqXHJcbiAqICBUZXh0Vmlld01lZGlhdG9yXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVGV4dFZpZXdNZWRpYXRvciBleHRlbmRzIEFic3RyYWN0TWVkaWF0b3Ige1xyXG4gICAgcHVibGljIG5hbWU6IFN0cmluZyA9ICdUZXh0Vmlld01lZGlhdG9yJztcclxuICAgIHB1YmxpYyBjb3VudDogbnVtYmVyW10gPSBbMCwgMF07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lZGlhdG9yTmFtZVxyXG4gICAgICogQHBhcmFtIHZpZXdDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVkaWF0b3JOYW1lOiBzdHJpbmcsIHZpZXdDb21wb25lbnQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKG1lZGlhdG9yTmFtZSwgdmlld0NvbXBvbmVudCk7XHJcblxyXG5cclxuICAgICAgICBsZXQgY29udGFpbmVyc0xpc3Q6IEFycmF5PFBJWEkuQ29udGFpbmVyPiA9IFtdO1xyXG4gICAgICAgIGNvbnRhaW5lcnNMaXN0LnB1c2goc3VwZXIuZ2V0Vmlld0NvbXBvbmVudCgpLmdldFVJQ29udGFpbmVyKCkpO1xyXG4gICAgICAgIEJhdHRsZVNoaXBGYWNhZGUuZ2V0SW5zdGFuY2UoRmFjYWRlSW5mb3JtYXRpb24uQmF0dGxlU2hpcEZhY2FkZUtleSlcclxuICAgICAgICAgICAgLmFkZENvbnRhaW5lcnNUb1ZpZXcoY29udGFpbmVyc0xpc3QsIEJhdHRsZVNoaXBWaWV3LkdhbWVJbmZvQ29udGFpbmVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnICAgIyAnICsgdGhpcy5uYW1lICsgJyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5vdGlmaWNhdGlvbiB0aGF0IHRoZSBCYXR0bGVTaGlwTWVkaWF0b3IgaXMgaW50ZXJlc3RlZCBpbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbTWVkaWF0b3JOb3RpZmljYXRpb25zLlRleHRVcGRhdGUsXHJcbiAgICAgICAgICAgIEJhdHRsZVNoaXBWaWV3LkdhbWVQbGF5U3RhdGVUZXh0XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdGV4dFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkVGV4dFRvVGhlVmlldyh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlci5nZXRWaWV3Q29tcG9uZW50KCkuYWRkVGV4dCh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBUaGlzIGlzIHdoZXJlIHRoZSBub3RpZmljYXRpb25zIGFyZSBoYW5kbGVkLlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFuZGxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogcHVyZW12Yy5Ob3RpZmljYXRpb24pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgc3dpdGNoIChub3RpZmljYXRpb24uZ2V0TmFtZSgpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTWVkaWF0b3JOb3RpZmljYXRpb25zLlRleHRVcGRhdGU6XHJcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyOiBzdHJpbmcgPSBub3RpZmljYXRpb24uZ2V0VHlwZSgpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChwbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2FkZUluZm9ybWF0aW9uLlBsYXllck9uZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUZXh0VG9UaGVWaWV3KG5vdGlmaWNhdGlvbi5nZXRCb2R5KCkgKyAnIFxcbmZvciBQbGF5ZXInICsgcGxheWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyVHdvOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRleHRUb1RoZVZpZXcobm90aWZpY2F0aW9uLmdldEJvZHkoKSArICcgXFxuZm9yIFBsYXllcicgKyBwbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEJhdHRsZVNoaXBWaWV3LkdhbWVQbGF5U3RhdGVUZXh0OlxyXG4gICAgICAgICAgICAgICAgc3VwZXIuZ2V0Vmlld0NvbXBvbmVudCgpLnNob3dHYW1lUGxheVN0YXRlVGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L21lZGlhdG9yL1RleHRWaWV3TWVkaWF0b3IudHMiLCJpbXBvcnQgJ3BpeGkuanMnXHJcbmltcG9ydCB7XHJcbiAgICBCYXR0bGVTaGlwRmFjYWRlLFxyXG4gICAgQ29tbWFuZE5vdGlmaWNhdGlvbnMsXHJcbiAgICBGYWNhZGVJbmZvcm1hdGlvbixcclxuICAgIE1lZGlhdG9yTm90aWZpY2F0aW9uc1xyXG59IGZyb20gXCIuLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5pbXBvcnQge0Fic3RyYWN0TWVkaWF0b3J9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RNZWRpYXRvclwiO1xyXG5pbXBvcnQge0JhdHRsZVNoaXBWaWV3fSBmcm9tIFwiLi4vdmlldy9tYWluVmlldy9CYXR0bGVTaGlwVmlld1wiO1xyXG5pbXBvcnQge0Fic3RyYWN0Tm90aWZpY2F0aW9ufSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Tm90aWZpY2F0aW9uXCI7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCdW5kbGVTaGlwVmlld01lZGlhdG9yIGV4dGVuZHMgQWJzdHJhY3RNZWRpYXRvciB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcGxheWVyOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lZGlhdG9yTmFtZVxyXG4gICAgICogQHBhcmFtIHZpZXdDb21wb25lbnRcclxuICAgICAqIEBwYXJhbSBwbGF5ZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVkaWF0b3JOYW1lPzogc3RyaW5nLCB2aWV3Q29tcG9uZW50PzogYW55LCBwbGF5ZXI/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihtZWRpYXRvck5hbWUsIHZpZXdDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lcnNMaXN0OiBBcnJheTxQSVhJLkNvbnRhaW5lcj4gPSBbXTtcclxuICAgICAgICBjb250YWluZXJzTGlzdC5wdXNoKHN1cGVyLmdldFZpZXdDb21wb25lbnQoKS5nZXRVSUNvbnRhaW5lcigpKTtcclxuXHJcbiAgICAgICAgaWYgKHBsYXllciA9PSBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJPbmUpIHtcclxuICAgICAgICAgICAgQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KS5hZGRDb250YWluZXJzVG9WaWV3KGNvbnRhaW5lcnNMaXN0LCBCYXR0bGVTaGlwVmlldy5QbGF5ZXJPbmVTaGlwc0NvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBsYXllciA9PSBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJUd28pIHtcclxuICAgICAgICAgICAgQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KS5hZGRDb250YWluZXJzVG9WaWV3KGNvbnRhaW5lcnNMaXN0LCBCYXR0bGVTaGlwVmlldy5QbGF5ZXJUd29TaGlwc0NvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnICAgIyAnICsgc3VwZXIuZ2V0TWVkaWF0b3JOYW1lKCkgKyAnIGNyZWF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBub3RpZmljYXRpb24gdGhhdCB0aGUgQmF0dGxlU2hpcE1lZGlhdG9yIGlzIGludGVyZXN0ZWQgaW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gW01lZGlhdG9yTm90aWZpY2F0aW9ucy5TaGlwc1BsYWNlbWVudCxcclxuICAgICAgICAgICAgTWVkaWF0b3JOb3RpZmljYXRpb25zLlRlc3RdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFRoaXMgaXMgd2hlcmUgdGhlIG5vdGlmaWNhdGlvbnMgYXJlIGhhbmRsZWQuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBBYnN0cmFjdE5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG5cclxuICAgICAgICBzd2l0Y2ggKG5vdGlmaWNhdGlvbi5nZXROYW1lKCkpIHtcclxuICAgICAgICAgICAgY2FzZSBNZWRpYXRvck5vdGlmaWNhdGlvbnMuU2hpcHNQbGFjZW1lbnQ6XHJcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyOiBzdHJpbmcgPSBub3RpZmljYXRpb24uZ2V0Qm9keSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNoaXBQb3NpdGlvbkluZm86IEFycmF5PG51bWJlcj4gPSBub3RpZmljYXRpb24uZ2V0QXJyYXlPZk51bWJlcnMoKTtcclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgPT0gdGhpcy5fcGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIuc2VuZE5vdGlmaWNhdGlvbihDb21tYW5kTm90aWZpY2F0aW9ucy5TaGlwc1BsYWNlbWVudCwgcGxheWVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uZ2V0VHlwZSgpLCB1bmRlZmluZWQsIHNoaXBQb3NpdGlvbkluZm8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9CdW5kbGVTaGlwVmlld01lZGlhdG9yLnRzIiwiaW1wb3J0IHtBYnN0cmFjdFZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3XCI7XHJcbmltcG9ydCB7U2luZ2xlU2hpcFZpZXd9IGZyb20gXCIuL1NpbmdsZVNoaXBWaWV3XCI7XHJcbmltcG9ydCB7RmFjYWRlSW5mb3JtYXRpb259IGZyb20gXCIuLi8uLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3Mgd2lsbCBjb250YWluIGFsbCB0aGUgc2hpcHMgZm9yIG9uZSBwbGF5ZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQnVuZGxlU2hpcFZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xyXG5cclxuICAgIHB1YmxpYyBidW5kbGVTaGlwVmlld05hbWUgPSAnQnVuZGxlU2hpcFZpZXcnO1xyXG4gICAgcHVibGljIHNoaXBWaWV3ID0gWydTMDAnLCAnUzAxJywgJ1MwMicsICdTMTAnLCAnUzExJywgJ1MxMiddO1xyXG4gICAgcHVibGljIHNoaXBzQXJyYXk6IEFycmF5PFNpbmdsZVNoaXBWaWV3PiA9IFtdO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTaGlwc1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgcGxheWVyOiBzdHJpbmcsIG51bWJlck9mU2hpcHM6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcbiAgICAgICAgLyoqQWRkcyB0aGUgaG9yaXpvbnRhbCBzaGlwcyB0byB0aGUgYnVuZGxlICovXHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG51bWJlck9mU2hpcHMgLyAyOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGhvcml6b250YWxTaGlwOiBTaW5nbGVTaGlwVmlldyA9IFNpbmdsZVNoaXBWaWV3LmdldEluc3RhbmNlKHRoaXMuc2hpcFZpZXdbaV0gKyBwbGF5ZXIsIDE1MCwgaSAqIDEwMCxcclxuICAgICAgICAgICAgICAgIG51bWJlck9mU2hpcHMgLSBpIC0gMSwgcGxheWVyLCBGYWNhZGVJbmZvcm1hdGlvbi5TaGlwSG9yaXpvbnRhbFR5cGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNoaXBzQXJyYXkucHVzaChob3Jpem9udGFsU2hpcCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG9Db250YWluZXIoaG9yaXpvbnRhbFNoaXAuZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipBZGRzIHRoZSB2ZXJ0aWNhbCBzaGlwcyB0byB0aGUgYnVuZGxlICovXHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gbnVtYmVyT2ZTaGlwcyAvIDI7IGkgPCBudW1iZXJPZlNoaXBzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHZlcnRpY2FsU2hpcDogU2luZ2xlU2hpcFZpZXcgPSBTaW5nbGVTaGlwVmlldy5nZXRJbnN0YW5jZSh0aGlzLnNoaXBWaWV3W2ldICsgcGxheWVyLCAtNTAwICsgaSAqIDEwMCwgLTIwLFxyXG4gICAgICAgICAgICAgICAgaSwgcGxheWVyLCBGYWNhZGVJbmZvcm1hdGlvbi5TaGlwVmVydGljYWxUeXBlKTtcclxuICAgICAgICAgICAgdGhpcy5zaGlwc0FycmF5LnB1c2godmVydGljYWxTaGlwKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb0NvbnRhaW5lcih2ZXJ0aWNhbFNoaXAuZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCcgICAjJyArIHRoaXMuYnVuZGxlU2hpcFZpZXdOYW1lICsgcGxheWVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTaGlwc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIHBsYXllcj86IHN0cmluZywgbnVtYmVyT2ZTaGlwcz86IG51bWJlcik6IEJ1bmRsZVNoaXBWaWV3IHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBCdW5kbGVTaGlwVmlldyhrZXksIHBsYXllciwgbnVtYmVyT2ZTaGlwcyk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSBhcyBCdW5kbGVTaGlwVmlldztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplVmlldygpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplVmlldygpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L3NoaXBzL0J1bmRsZVNoaXBWaWV3LnRzIiwiaW1wb3J0IHtCYXR0bGVTaGlwRmFjYWRlLCBGYWNhZGVJbmZvcm1hdGlvbiwgTWVkaWF0b3JOb3RpZmljYXRpb25zfSBmcm9tIFwiLi4vLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0IHtBYnN0cmFjdFZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3XCI7XHJcbmltcG9ydCAncGl4aS5qcyc7XHJcbmltcG9ydCB7U2hpcEdyYXBoaWNzfSBmcm9tIFwiLi9TaGlwR3JhcGhpY3NcIjtcclxuXHJcblxyXG4vKipcclxuICogIENsYXNzIHRoYXQgcmVwcmVzZW50cyBhIHNpbmdsZSBTaGlwLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNpbmdsZVNoaXBWaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcclxuXHJcbiAgICBwdWJsaWMgeFBvc2l0aW9uOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeVBvc2l0aW9uOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc2hpcEdyYXBoaWNzOiBQSVhJLkdyYXBoaWNzO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBudW1iZXJPZlNxdWFyZXM6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSB4UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB5UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNcclxuICAgICAqIEBwYXJhbSBwbGF5ZXJcclxuICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCB4UG9zaXRpb246IG51bWJlciwgeVBvc2l0aW9uOiBudW1iZXIsIG51bWJlck9mU3F1YXJlczogbnVtYmVyLCBwbGF5ZXI6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBrZXk7XHJcbiAgICAgICAgdGhpcy54UG9zaXRpb24gPSB4UG9zaXRpb247XHJcbiAgICAgICAgdGhpcy55UG9zaXRpb24gPSB5UG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3MgPSBuZXcgU2hpcEdyYXBoaWNzKHBsYXllcik7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlNxdWFyZXMgPSBudW1iZXJPZlNxdWFyZXM7XHJcblxyXG4gICAgICAgIGlmIChwbGF5ZXIgPT09IEZhY2FkZUluZm9ybWF0aW9uLlBsYXllck9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNoaXBHcmFwaGljcy5saW5lU3R5bGUoNiwgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyT25lU2hpcEJvcmRlckNvbG9yKTtcclxuICAgICAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3MuYmVnaW5GaWxsKEZhY2FkZUluZm9ybWF0aW9uLlBsYXllck9uZVNoaXBGaWxsQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwbGF5ZXIgPT09IEZhY2FkZUluZm9ybWF0aW9uLlBsYXllclR3bykge1xyXG4gICAgICAgICAgICB0aGlzLnNoaXBHcmFwaGljcy5saW5lU3R5bGUoNiwgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyVHdvU2hpcEJvcmRlckNvbG9yKTtcclxuICAgICAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3MuYmVnaW5GaWxsKEZhY2FkZUluZm9ybWF0aW9uLlBsYXllclR3b1NoaXBGaWxsQ29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEZhY2FkZUluZm9ybWF0aW9uLlNoaXBIb3Jpem9udGFsVHlwZTpcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm51bWJlck9mU3F1YXJlczsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpcEdyYXBoaWNzLmRyYXdSZWN0KHRoaXMueFBvc2l0aW9uICsgaSAqIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZVdpZHRoLCB0aGlzLnlQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgRmFjYWRlSW5mb3JtYXRpb24uU3F1YXJlV2lkdGggLSAzLCBGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVXaWR0aCAtIDMsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZhY2FkZUluZm9ybWF0aW9uLlNoaXBWZXJ0aWNhbFR5cGU6XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5udW1iZXJPZlNxdWFyZXM7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBHcmFwaGljcy5kcmF3UmVjdCh0aGlzLnhQb3NpdGlvbiwgdGhpcy55UG9zaXRpb24gKyBpICogRmFjYWRlSW5mb3JtYXRpb24uU3F1YXJlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZVdpZHRoIC0gMywgRmFjYWRlSW5mb3JtYXRpb24uU3F1YXJlV2lkdGggLSAzLCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3MuZW5kRmlsbCgpO1xyXG4gICAgICAgIHRoaXMuc2hpcEdyYXBoaWNzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNoaXBHcmFwaGljcy5idXR0b25Nb2RlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3NcclxuICAgICAgICAgICAgLm9uKCdwb2ludGVyZG93bicsIG9uRHJhZ1N0YXJ0KVxyXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJ1cCcsIG9uRHJhZ0VuZClcclxuICAgICAgICAgICAgLm9uKCdwb2ludGVydXBvdXRzaWRlJywgb25EcmFnRW5kKVxyXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJtb3ZlJywgb25EcmFnTW92ZSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdoZW4gdGhlIHBsYXllciBzdGFydHMgdG8gZHJhZyB0aGUgc2hpcC5cclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBvbkRyYWdTdGFydChldmVudCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBldmVudC5kYXRhO1xyXG5cclxuICAgICAgICAgICAgLy9zdG9yZSB0aGlzIHZhcmlhYmxlIGZvciBjb252ZW5pZW5jZVxyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLnBhcmVudCk7XHJcblxyXG4gICAgICAgICAgICAvL1ByaW50IHRoZSBwb3NpdGlvblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIFNldCB0aGUgcGl2b3QgcG9pbnQgdG8gdGhlIG5ldyBwb3NpdGlvblxyXG4gICAgICAgICAgICB0aGlzLnBpdm90LnNldChwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgbmV3IHBvc2l0aW9uIG9mIHRoZSBzcHJpdGUgdG8gdGhlIHBvc2l0aW9uIG9idGFpbmVkIHRocm91Z2hcclxuICAgICAgICAgICAgLy8gdGhlIGdsb2JhbCBkYXRhLiBUaGlzIGVuc3VyZXMgdGhlIHBvc2l0aW9uIGxpbmVzIHVwIHdpdGggdGhlIGxvY2F0aW9uIG9mXHJcbiAgICAgICAgICAgIC8vIHRoZSBtb3VzZSBvbiB0aGUgc2NyZWVuLiBJJ20gbm90IGNlcnRhaW4gd2h5LCBidXQgdGhpcyBpcyBuZWNlc3NhcnkuXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHRoaXMuZGF0YS54LCB0aGlzLmRhdGEueSk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlZG93biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogV2hlbiB0aGUgcGxheWVyIGlzIGRyYWdnaW5nIHRoZSBzaGlwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uRHJhZ01vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFscGhhID0gMC41O1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gdGhpcy5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5wYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gbmV3UG9zaXRpb24ueDtcclxuICAgICAgICAgICAgICAgIHRoaXMueSA9IG5ld1Bvc2l0aW9uLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdoZW4gdGhlIHBsYXllciBzdG9wcyBkcmFnZ2luZyB0aGUgc2hpcC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBvbkRyYWdFbmQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgICAgICAvL1Nob3cgdGhlIGVuZCBwb3NpdGlvblxyXG5cclxuICAgICAgICAgICAgbGV0IHNoaXBUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpZHRoID4gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHNoaXBUeXBlID0gRmFjYWRlSW5mb3JtYXRpb24uU2hpcEhvcml6b250YWxUeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMud2lkdGggPD0gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHNoaXBUeXBlID0gRmFjYWRlSW5mb3JtYXRpb24uU2hpcFZlcnRpY2FsVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB0aGlzLmRhdGEuZ2V0TG9jYWxQb3NpdGlvbih0aGlzLnBhcmVudC5wYXJlbnQucGFyZW50KTtcclxuXHJcbiAgICAgICAgICAgIEJhdHRsZVNoaXBGYWNhZGUuZ2V0SW5zdGFuY2UoRmFjYWRlSW5mb3JtYXRpb24uQmF0dGxlU2hpcEZhY2FkZUtleSlcclxuICAgICAgICAgICAgICAgIC5zZW5kTm90aWZpY2F0aW9uKE1lZGlhdG9yTm90aWZpY2F0aW9ucy5TaGlwc1BsYWNlbWVudCwgdGhpcy5wbGF5ZXIsIHNoaXBUeXBlLCB1bmRlZmluZWQsIFt0aGlzLmdldEJvdW5kcygpLngsIHRoaXMuZ2V0Qm91bmRzKCkueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRdKTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFscGhhID0gMTtcclxuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gc2V0IHRoZSBpbnRlcmFjdGlvbiBkYXRhIHRvIG51bGxcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnICAgIyBTaW5nbGVTaGlwVmlldyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgdGhlIFNoaXAncyB2aWV3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplVmlldygpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplVmlldygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0geFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0geVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzXHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIHhQb3NpdGlvbj86IG51bWJlciwgeVBvc2l0aW9uPzogbnVtYmVyLCBudW1iZXJPZlNxdWFyZXM/OiBudW1iZXIsIHBsYXllcj86IHN0cmluZywgdHlwZT86IHN0cmluZyk6IFNpbmdsZVNoaXBWaWV3IHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBTaW5nbGVTaGlwVmlldyhrZXksIHhQb3NpdGlvbiwgeVBvc2l0aW9uLCBudW1iZXJPZlNxdWFyZXMsIHBsYXllciwgdHlwZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSBhcyBTaW5nbGVTaGlwVmlldztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHRlciBmb3IgdGhlIFNpbmdsZVNoaXBWaWV3J3MgQ29udGFpbmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRVSUNvbnRhaW5lcigpOiBQSVhJLkNvbnRhaW5lciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcEdyYXBoaWNzO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9zaGlwcy9TaW5nbGVTaGlwVmlldy50cyIsIi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNoaXBHcmFwaGljcyBleHRlbmRzIFBJWEkuR3JhcGhpY3Mge1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXI6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKiBAcGFyYW0gbmF0aXZlTGluZXNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyOiBzdHJpbmcsIG5hdGl2ZUxpbmVzPzogYm9vbGVhbikge1xyXG4gICAgICAgIHN1cGVyKG5hdGl2ZUxpbmVzKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9zaGlwcy9TaGlwR3JhcGhpY3MudHMiLCJpbXBvcnQge0Fic3RyYWN0Q29tbWFuZH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdENvbW1hbmRcIjtcclxuaW1wb3J0IHtNZWRpYXRvck5vdGlmaWNhdGlvbnN9IGZyb20gXCIuLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5pbXBvcnQgJ3BpeGkuanMnXHJcbmltcG9ydCB7UGxheWVyQ29udHJvbGxlcn0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvUGxheWVyQ29udHJvbGxlclwiO1xyXG5pbXBvcnQge0Fic3RyYWN0Tm90aWZpY2F0aW9ufSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Tm90aWZpY2F0aW9uXCI7XHJcblxyXG4vKipcclxuICogQ29tbWFuZCBjYWxsZWQgd2hlbiBhIHNoaXAgaXMgcGxhY2VkIG9uIHRoZSBzY3JlZW4gYnkgYSBwbGF5ZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTaGlwUGxhY2VDb21tYW5kIGV4dGVuZHMgQWJzdHJhY3RDb21tYW5kIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKG5vdGlmaWNhdGlvbjogQWJzdHJhY3ROb3RpZmljYXRpb24pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IHBsYXllciA9IG5vdGlmaWNhdGlvbi5nZXRCb2R5KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyKTtcclxuICAgICAgICBQbGF5ZXJDb250cm9sbGVyLmdldEluc3RhbmNlKCdQJyArIHBsYXllcikudXBkYXRlTnVtYmVyT2ZTaGlwc1BsYWNlZCgnUCcgKyBwbGF5ZXIpO1xyXG4gICAgICAgIHN1cGVyLnNlbmROb3RpZmljYXRpb24oTWVkaWF0b3JOb3RpZmljYXRpb25zLkdyaWRTaGlwTWFya2luZywgcGxheWVyLCBub3RpZmljYXRpb24uZ2V0VHlwZSgpLCB1bmRlZmluZWQsIG5vdGlmaWNhdGlvbi5nZXRBcnJheU9mTnVtYmVycygpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvY29tbWFuZC9TaGlwUGxhY2VDb21tYW5kLnRzIiwiaW1wb3J0IHtBYnN0cmFjdENvbW1hbmR9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb21tYW5kXCI7XHJcbmltcG9ydCB7QWJzdHJhY3ROb3RpZmljYXRpb259IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3ROb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IHtCYXR0bGVTaGlwQ29udHJvbGxlcn0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvQmF0dGxlU2hpcENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtGYWNhZGVJbmZvcm1hdGlvbn0gZnJvbSBcIi4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJGaW5pc2hlZFBsYWNpbmdUaGVTaGlwc0NvbW1hbmQgZXh0ZW5kcyBBYnN0cmFjdENvbW1hbmQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4ZWN1dGUobm90aWZpY2F0aW9uOiBBYnN0cmFjdE5vdGlmaWNhdGlvbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGaW5pc2hlZCcpO1xyXG4gICAgICAgIGlmIChCYXR0bGVTaGlwQ29udHJvbGxlci5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KS5jaGVja0lmQm90aFBsYXllcnNGaW5pc2hlZFBsYWNpbmdUaGVTaGlwcygpKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnNlbmROb3RpZmljYXRpb24oQmF0dGxlU2hpcENvbnRyb2xsZXIuU3RhcnRHYW1lUGxheUNvbW1hbmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9jb21tYW5kL1BsYXllckZpbmlzaGVkUGxhY2luZ1RoZVNoaXBzQ29tbWFuZC50cyIsImltcG9ydCB7QWJzdHJhY3RDb21tYW5kfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29tbWFuZFwiO1xyXG5pbXBvcnQge0Fic3RyYWN0Tm90aWZpY2F0aW9ufSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Tm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7R2FtZVBsYXlDb250cm9sbGVyfSBmcm9tIFwiLi4vY29udHJvbGxlci9HYW1lUGxheUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtCYXR0bGVTaGlwQ29udHJvbGxlcn0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvQmF0dGxlU2hpcENvbnRyb2xsZXJcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0YXJ0R2FtZVBsYXlDb21tYW5kIGV4dGVuZHMgQWJzdHJhY3RDb21tYW5kIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKG5vdGlmaWNhdGlvbjogQWJzdHJhY3ROb3RpZmljYXRpb24pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgR2FtZVBsYXlDb250cm9sbGVyLmdldEluc3RhbmNlKEJhdHRsZVNoaXBDb250cm9sbGVyLkdhbWVQbGF5Q29udHJvbGxlck5hbWUpLnN0YXJ0R2FtZVBsYXlTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbW1hbmQvU3RhcnRHYW1lUGxheUNvbW1hbmQudHMiLCJpbXBvcnQge0Fic3RyYWN0Q29udHJvbGxlcn0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtCYXR0bGVTaGlwRmFjYWRlLCBGYWNhZGVJbmZvcm1hdGlvbn0gZnJvbSBcIi4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcbmltcG9ydCB7QmF0dGxlU2hpcENvbnRyb2xsZXJ9IGZyb20gXCIuL0JhdHRsZVNoaXBDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7QmF0dGxlU2hpcFZpZXd9IGZyb20gXCIuLi92aWV3L21haW5WaWV3L0JhdHRsZVNoaXBWaWV3XCI7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHYW1lUGxheUNvbnRyb2xsZXIgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGtleTogc3RyaW5nKTogR2FtZVBsYXlDb250cm9sbGVyIHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuQ29udHJvbGxlci5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLkNvbnRyb2xsZXIuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBHYW1lUGxheUNvbnRyb2xsZXIoa2V5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuQ29udHJvbGxlci5pbnN0YW5jZU1hcFtrZXldIGFzIEdhbWVQbGF5Q29udHJvbGxlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGFydEdhbWVQbGF5U3RhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGZhY2FkZTogYW55ID0gQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KTtcclxuICAgICAgICBmYWNhZGUuc2VuZE5vdGlmaWNhdGlvbihCYXR0bGVTaGlwQ29udHJvbGxlci5IaWRlVGhlU2hpcENvbW1hbmQsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgZmFjYWRlLnNlbmROb3RpZmljYXRpb24oQmF0dGxlU2hpcFZpZXcuR2FtZVBsYXlTdGF0ZVRleHQsIHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbnRyb2xsZXIvR2FtZVBsYXlDb250cm9sbGVyLnRzIiwiaW1wb3J0IHtBYnN0cmFjdENvbW1hbmR9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb21tYW5kXCI7XHJcbmltcG9ydCB7QWJzdHJhY3ROb3RpZmljYXRpb259IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3ROb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IHtNZWRpYXRvck5vdGlmaWNhdGlvbnN9IGZyb20gXCIuLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5cclxuLyoqXHJcbiAqICBBZnRlciBib3RoIHBsYXllcnMgZmluaXNoZWQgcGxhY2luZyB0aGUgc2hpcHMsdGhlIHNoaXBzIHdpbGwgYmUgaGlkZGVuLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEhpZGVUaGVTaGlwc0NvbW1hbmQgZXh0ZW5kcyBBYnN0cmFjdENvbW1hbmQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4ZWN1dGUobm90aWZpY2F0aW9uOiBBYnN0cmFjdE5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnNlbmROb3RpZmljYXRpb24oTWVkaWF0b3JOb3RpZmljYXRpb25zLkhpZGVUaGVTaGlwcyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbW1hbmQvSGlkZVRoZVNoaXBzQ29tbWFuZC50cyIsImltcG9ydCB7QWJzdHJhY3RDb21tYW5kfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29tbWFuZFwiO1xyXG5pbXBvcnQge0Fic3RyYWN0Tm90aWZpY2F0aW9ufSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Tm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7R3JpZENvbnRyb2xsZXJ9IGZyb20gXCIuLi9jb250cm9sbGVyL0dyaWRDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7RmFjYWRlSW5mb3JtYXRpb259IGZyb20gXCIuLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5pbXBvcnQge0JhdHRsZVNoaXBDb250cm9sbGVyfSBmcm9tIFwiLi4vY29udHJvbGxlci9CYXR0bGVTaGlwQ29udHJvbGxlclwiO1xyXG5cclxuLyoqXHJcbiAqIFNlbmRzIHRoZSBleGFjdHMgU2hpcCdzIGluZGV4IHRvIHRoZSBHcmlkQ29udHJvbGxlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNoaXBQb3NpdGlvbkluZm9Db21tYW5kIGV4dGVuZHMgQWJzdHJhY3RDb21tYW5kIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKG5vdGlmaWNhdGlvbjogQWJzdHJhY3ROb3RpZmljYXRpb24pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IHBsYXllcjogc3RyaW5nID0gbm90aWZpY2F0aW9uLmdldEJvZHkoKTtcclxuICAgICAgICBzd2l0Y2ggKHBsYXllcikge1xyXG4gICAgICAgICAgICBjYXNlIEZhY2FkZUluZm9ybWF0aW9uLlBsYXllck9uZTpcclxuICAgICAgICAgICAgICAgIEdyaWRDb250cm9sbGVyLmdldEluc3RhbmNlKEJhdHRsZVNoaXBDb250cm9sbGVyLkdyaWRQbGF5ZXJPbmVDb250cm9sbGVyTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAudXBkYXRlU2hpcHNQb3NpdGlvbihub3RpZmljYXRpb24uZ2V0QXJyYXlPZk51bWJlcnMoKSwgbm90aWZpY2F0aW9uLmdldEJvZHkoKSwgbm90aWZpY2F0aW9uLmdldFR5cGUoKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJUd286XHJcbiAgICAgICAgICAgICAgICBHcmlkQ29udHJvbGxlci5nZXRJbnN0YW5jZShCYXR0bGVTaGlwQ29udHJvbGxlci5HcmlkUGxheWVyVHdvQ29udHJvbGxlck5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZVNoaXBzUG9zaXRpb24obm90aWZpY2F0aW9uLmdldEFycmF5T2ZOdW1iZXJzKCksIG5vdGlmaWNhdGlvbi5nZXRCb2R5KCksIG5vdGlmaWNhdGlvbi5nZXRUeXBlKCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9jb21tYW5kL1NoaXBQb3NpdGlvbkluZm9Db21tYW5kLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==