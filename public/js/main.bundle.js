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
var BattleShipController_1 = __webpack_require__(4);
var BattleShipView_1 = __webpack_require__(5);
var AbstractFacade_1 = __webpack_require__(10);
__webpack_require__(1);
var GridView_1 = __webpack_require__(14);
var TextView_1 = __webpack_require__(20);
var ButtonView_1 = __webpack_require__(21);
var SquareClickCommand_1 = __webpack_require__(22);
var ButtonPressCommand_1 = __webpack_require__(23);
var ButtonViewMediator_1 = __webpack_require__(24);
var GridViewMediator_1 = __webpack_require__(25);
var TextViewMediator_1 = __webpack_require__(26);
var BundleShipViewMediator_1 = __webpack_require__(27);
var BundleShipView_1 = __webpack_require__(28);
var ShipPlaceCommand_1 = __webpack_require__(30);
var MediatorNotifications;
(function (MediatorNotifications) {
    MediatorNotifications["ShipsPlacement"] = "Ships_Placement";
    MediatorNotifications["GridShipMarking"] = "GridMarking";
    MediatorNotifications["TextUpdate"] = "TextUpdate";
    MediatorNotifications["Test"] = "Test";
})(MediatorNotifications = exports.MediatorNotifications || (exports.MediatorNotifications = {}));
var TextErrors;
(function (TextErrors) {
    TextErrors["MaximumNumberOfShipReached"] = "Max Number Of Ships to Place Reached";
})(TextErrors = exports.TextErrors || (exports.TextErrors = {}));
var CommandNotifications;
(function (CommandNotifications) {
    CommandNotifications["ClickHandle"] = "CLICK_HANDLE_COMMAND";
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
        _super.prototype.registerCommand.call(this, CommandNotifications.ClickHandle, SquareClickCommand_1.SquareClickCommand);
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
    AbstractMediator.prototype.sendNotification = function (name, body, type) {
        _super.prototype.sendNotification.call(this, name, body, type);
    };
    return AbstractMediator;
}(puremvc.Mediator));
exports.AbstractMediator = AbstractMediator;


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
var AbstractController_1 = __webpack_require__(6);
var GridController_1 = __webpack_require__(8);
var BattleShipFacade_1 = __webpack_require__(0);
var PlayerController_1 = __webpack_require__(9);
var BattleShipController = (function (_super) {
    __extends(BattleShipController, _super);
    function BattleShipController(key) {
        var _this = _super.call(this, key) || this;
        GridController_1.GridController.getInstance(BattleShipController.GridPlayerOneControllerName, BattleShipFacade_1.FacadeInformation.NumberOfSquaresVertically, BattleShipFacade_1.FacadeInformation.NumberOfSquaresHorizontally);
        GridController_1.GridController.getInstance(BattleShipController.GridPlayerTwoControllerName, BattleShipFacade_1.FacadeInformation.NumberOfSquaresVertically, BattleShipFacade_1.FacadeInformation.NumberOfSquaresHorizontally);
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
    return BattleShipController;
}(AbstractController_1.AbstractController));
exports.BattleShipController = BattleShipController;


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
var BattleShipMediator_1 = __webpack_require__(12);
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
__webpack_require__(1);
var AbstractFacade_1 = __webpack_require__(10);
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
    AbstractCommand.prototype.sendNotification = function (name, body, type, arrayOfStrings, objectReference) {
        var facade = AbstractFacade_1.AbstractFacade.getInstance(this.multitonKey);
        facade.sendNotification(name, body, type, arrayOfStrings, objectReference);
    };
    ;
    return AbstractCommand;
}(puremvc.SimpleCommand));
exports.AbstractCommand = AbstractCommand;


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
var GridController = (function (_super) {
    __extends(GridController, _super);
    function GridController(key, numberOfSquaresVertically, numberOfSquaresHorizontally) {
        var _this = _super.call(this, key) || this;
        _this.GridSquares = [];
        _this.numberOfSquaresHorizontally = numberOfSquaresHorizontally;
        _this.numberOfSquaresVertically = numberOfSquaresVertically;
        _this.createGridSquares();
        return _this;
    }
    GridController.getInstance = function (key, numberOfSquaresVertically, numberOfSquaresHorizontally) {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new GridController(key, numberOfSquaresHorizontally, numberOfSquaresVertically);
        return puremvc.Controller.instanceMap[key];
    };
    GridController.prototype.createGridSquares = function () {
        for (var i = 0; i < this.numberOfSquaresVertically; i++) {
            this.GridSquares[i] = [];
            for (var j = 0; j < this.numberOfSquaresHorizontally; j++) {
                this.GridSquares[i][j] = -1;
            }
        }
    };
    GridController.prototype.logGridSquares = function () {
        for (var i = 0; i < this.numberOfSquaresVertically; i++) {
            console.log(this.GridSquares[i]);
        }
    };
    GridController.prototype.updatePosition = function (position) {
        var newArray = [];
        var newIndex = position.split(',');
        for (var _i = 0, newIndex_1 = newIndex; _i < newIndex_1.length; _i++) {
            var i = newIndex_1[_i];
            newArray.push(+i);
        }
        this.GridSquares[newArray[0]][newArray[1]] = 5;
        this.logGridSquares();
    };
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
var AbstractController_1 = __webpack_require__(6);
var BattleShipFacade_1 = __webpack_require__(0);
var BattleShipController_1 = __webpack_require__(4);
var PlayerController = (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController(key) {
        var _this = _super.call(this, key) || this;
        _this._shipsPlaced = 0;
        _this._player = key;
        console.log('PlayerController created');
        return _this;
    }
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
    PlayerController.getInstance = function (key) {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new PlayerController(key);
        return puremvc.Controller.instanceMap[key];
    };
    return PlayerController;
}(AbstractController_1.AbstractController));
exports.PlayerController = PlayerController;


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
var AbstractNotification_1 = __webpack_require__(13);
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
    AbstractFacade.prototype.sendNotification = function (name, body, type, arrayOfStrings, objectReference) {
        this.notifyObservers(new AbstractNotification_1.AbstractNotification(name, body, type, arrayOfStrings, objectReference));
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
__webpack_require__(1);
var AbstractMediator_1 = __webpack_require__(3);
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
var AbstractNotification = (function (_super) {
    __extends(AbstractNotification, _super);
    function AbstractNotification(name, body, type, arrayOfStrings, objectReference) {
        var _this = _super.call(this, name, body, type) || this;
        _this.arrayOfStrings = [];
        _this.objectReference = objectReference;
        _this.arrayOfStrings = arrayOfStrings;
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
    return AbstractNotification;
}(puremvc.Notification));
exports.AbstractNotification = AbstractNotification;


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
var AbstractView_1 = __webpack_require__(2);
var SquareView_1 = __webpack_require__(15);
var BattleShipFacade_1 = __webpack_require__(0);
var RulerView_1 = __webpack_require__(18);
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
    return GridView;
}(AbstractView_1.AbstractView));
exports.GridView = GridView;


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
var HitView_1 = __webpack_require__(16);
var MissView_1 = __webpack_require__(17);
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
        BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey).sendNotification(BattleShipFacade_1.CommandNotifications.ClickHandle, [this.verticalIndex, this.horizontalIndex].toString(), '', ['Mama']);
    };
    SquareView.prototype.hit = function () {
        this.hitView.setActive(true);
    };
    SquareView.prototype.miss = function () {
        this.missView.setActive(true);
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
var RulerSquare_1 = __webpack_require__(19);
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
var AbstractCommand_1 = __webpack_require__(7);
var BattleShipFacade_1 = __webpack_require__(0);
__webpack_require__(1);
var GridController_1 = __webpack_require__(8);
var BattleShipController_1 = __webpack_require__(4);
var SquareClickCommand = (function (_super) {
    __extends(SquareClickCommand, _super);
    function SquareClickCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SquareClickCommand.prototype.execute = function (notification) {
        switch (notification.getName()) {
            case BattleShipFacade_1.CommandNotifications.ClickHandle:
                console.log('SquareClick Handle Request');
                _super.prototype.sendNotification.call(this, BattleShipFacade_1.MediatorNotifications.Test, '', '', ['WOWWWW']);
                GridController_1.GridController.getInstance(BattleShipController_1.BattleShipController.GridPlayerOneControllerName).updatePosition(notification.getBody());
                break;
        }
    };
    return SquareClickCommand;
}(AbstractCommand_1.AbstractCommand));
exports.SquareClickCommand = SquareClickCommand;


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
var AbstractCommand_1 = __webpack_require__(7);
var BattleShipFacade_1 = __webpack_require__(0);
__webpack_require__(1);
var ButtonPressCommand = (function (_super) {
    __extends(ButtonPressCommand, _super);
    function ButtonPressCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonPressCommand.prototype.execute = function (notification) {
        switch (notification.getName()) {
            case BattleShipFacade_1.CommandNotifications.ButtonPress:
                console.log('ButtonPress Handle Request');
                break;
        }
    };
    return ButtonPressCommand;
}(AbstractCommand_1.AbstractCommand));
exports.ButtonPressCommand = ButtonPressCommand;


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
var BattleShipFacade_1 = __webpack_require__(0);
__webpack_require__(1);
var AbstractMediator_1 = __webpack_require__(3);
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
__webpack_require__(1);
var BattleShipFacade_1 = __webpack_require__(0);
var AbstractMediator_1 = __webpack_require__(3);
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
            BattleShipFacade_1.MediatorNotifications.Test];
    };
    GridViewMediator.prototype.handleNotification = function (notification) {
        switch (notification.getName()) {
            case BattleShipFacade_1.MediatorNotifications.GridShipMarking:
                var array = notification.getBody().split(',', 4);
                var newArray = [];
                for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                    var i = array_1[_i];
                    var j = +i;
                    newArray.push(j);
                }
                _super.prototype.getViewComponent.call(this).fillGridWithBattleShip(newArray, notification.getType());
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
var AbstractMediator_1 = __webpack_require__(3);
var BattleShipView_1 = __webpack_require__(5);
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
var AbstractMediator_1 = __webpack_require__(3);
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
                _super.prototype.sendNotification.call(this, BattleShipFacade_1.CommandNotifications.ShipsPlacement, notification.getBody(), notification.getType());
                break;
        }
    };
    return BundleShipViewMediator;
}(AbstractMediator_1.AbstractMediator));
exports.BundleShipViewMediator = BundleShipViewMediator;


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
var AbstractView_1 = __webpack_require__(2);
var SingleShipView_1 = __webpack_require__(29);
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
            else if (this.width < this.height) {
                shipType = BattleShipFacade_1.FacadeInformation.ShipVerticalType;
            }
            var newPosition = this.data.getLocalPosition(this.parent.parent.parent);
            var body = [this.getBounds().x, this.getBounds().y, this.width, this.height];
            var notificationType = shipType;
            var bodyStr = body.toString();
            BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey)
                .sendNotification(BattleShipFacade_1.MediatorNotifications.ShipsPlacement, bodyStr, notificationType);
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
var AbstractCommand_1 = __webpack_require__(7);
var BattleShipFacade_1 = __webpack_require__(0);
__webpack_require__(1);
var PlayerController_1 = __webpack_require__(9);
var BattleShipController_1 = __webpack_require__(4);
var ShipPlaceCommand = (function (_super) {
    __extends(ShipPlaceCommand, _super);
    function ShipPlaceCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShipPlaceCommand.prototype.execute = function (notification) {
        switch (notification.getName()) {
            case BattleShipFacade_1.CommandNotifications.ShipsPlacement:
                PlayerController_1.PlayerController.getInstance(BattleShipController_1.BattleShipController.PlayerOneControllerName).updateNumberOfShipsPlaced();
                _super.prototype.sendNotification.call(this, BattleShipFacade_1.MediatorNotifications.GridShipMarking, notification.getBody(), notification.getType());
                break;
        }
    };
    return ShipPlaceCommand;
}(AbstractCommand_1.AbstractCommand));
exports.ShipPlaceCommand = ShipPlaceCommand;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTJiYjM3ZjcwYTA1Y2U3NTYzYzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUElYSVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE1lZGlhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvY29udHJvbGxlci9CYXR0bGVTaGlwQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvbWFpblZpZXcvQmF0dGxlU2hpcFZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb21tYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvY29udHJvbGxlci9HcmlkQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbnRyb2xsZXIvUGxheWVyQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RGYWNhZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9CYXR0bGVTaGlwTWVkaWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Tm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9ncmlkL0dyaWRWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9ncmlkL1NxdWFyZVZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L2hpdHMvSGl0Vmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvaGl0cy9NaXNzVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvcnVsZXIvUnVsZXJWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9ydWxlci9SdWxlclNxdWFyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvdGV4dC9UZXh0Vmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvYnV0dG9uL0J1dHRvblZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9jb21tYW5kL1NxdWFyZUNsaWNrQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbW1hbmQvQnV0dG9uUHJlc3NDb21tYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvbWVkaWF0b3IvQnV0dG9uVmlld01lZGlhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvbWVkaWF0b3IvR3JpZFZpZXdNZWRpYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L21lZGlhdG9yL1RleHRWaWV3TWVkaWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9CdW5kbGVTaGlwVmlld01lZGlhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9zaGlwcy9CdW5kbGVTaGlwVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvc2hpcHMvU2luZ2xlU2hpcFZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9jb21tYW5kL1NoaXBQbGFjZUNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQSxvREFBd0U7QUFDeEUsOENBQStEO0FBQy9ELCtDQUFvRTtBQUNwRSx1QkFBaUI7QUFDakIseUNBQStDO0FBQy9DLHlDQUErQztBQUMvQywyQ0FBcUQ7QUFDckQsbURBQWlFO0FBQ2pFLG1EQUFpRTtBQUNqRSxtREFBa0U7QUFDbEUsaURBQThEO0FBQzlELGlEQUE4RDtBQUM5RCx1REFBMEU7QUFDMUUsK0NBQTREO0FBQzVELGlEQUE2RDtBQUU3RCxJQUFZLHFCQUtYO0FBTEQsV0FBWSxxQkFBcUI7SUFDN0IsMkRBQWtDO0lBQ2xDLHdEQUErQjtJQUMvQixrREFBeUI7SUFDekIsc0NBQWE7QUFDakIsQ0FBQyxFQUxXLHFCQUFxQixHQUFyQiw2QkFBcUIsS0FBckIsNkJBQXFCLFFBS2hDO0FBRUQsSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFV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RUFBRSxDQUFDLENBQUM7Z0JBQzlHLE1BQU07U0FDYjtJQUNMLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQ0FoQnFDLGlDQUFlLEdBZ0JwRDtBQWhCWSw0Q0FBZ0IiLCJmaWxlIjoiLi9qcy9tYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTJiYjM3ZjcwYTA1Y2U3NTYzYzkiLCJpbXBvcnQge0JhdHRsZVNoaXBDb250cm9sbGVyfSBmcm9tIFwiLi4vY29udHJvbGxlci9CYXR0bGVTaGlwQ29udHJvbGxlclwiO1xyXG5pbXBvcnQge0JhdHRsZVNoaXBWaWV3fSBmcm9tIFwiLi4vdmlldy9tYWluVmlldy9CYXR0bGVTaGlwVmlld1wiO1xyXG5pbXBvcnQge0Fic3RyYWN0RmFjYWRlfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0RmFjYWRlXCI7XHJcbmltcG9ydCAncGl4aS5qcyc7XHJcbmltcG9ydCB7R3JpZFZpZXd9IGZyb20gXCIuLi92aWV3L2dyaWQvR3JpZFZpZXdcIjtcclxuaW1wb3J0IHtUZXh0Vmlld30gZnJvbSBcIi4uL3ZpZXcvdGV4dC9UZXh0Vmlld1wiO1xyXG5pbXBvcnQge0J1dHRvblZpZXd9IGZyb20gXCIuLi92aWV3L2J1dHRvbi9CdXR0b25WaWV3XCI7XHJcbmltcG9ydCB7U3F1YXJlQ2xpY2tDb21tYW5kfSBmcm9tIFwiLi4vY29tbWFuZC9TcXVhcmVDbGlja0NvbW1hbmRcIjtcclxuaW1wb3J0IHtCdXR0b25QcmVzc0NvbW1hbmR9IGZyb20gXCIuLi9jb21tYW5kL0J1dHRvblByZXNzQ29tbWFuZFwiO1xyXG5pbXBvcnQge0J1dHRvblZpZXdNZWRpYXRvcn0gZnJvbSBcIi4uL21lZGlhdG9yL0J1dHRvblZpZXdNZWRpYXRvclwiO1xyXG5pbXBvcnQge0dyaWRWaWV3TWVkaWF0b3J9IGZyb20gXCIuLi9tZWRpYXRvci9HcmlkVmlld01lZGlhdG9yXCI7XHJcbmltcG9ydCB7VGV4dFZpZXdNZWRpYXRvcn0gZnJvbSBcIi4uL21lZGlhdG9yL1RleHRWaWV3TWVkaWF0b3JcIjtcclxuaW1wb3J0IHtCdW5kbGVTaGlwVmlld01lZGlhdG9yfSBmcm9tIFwiLi4vbWVkaWF0b3IvQnVuZGxlU2hpcFZpZXdNZWRpYXRvclwiO1xyXG5pbXBvcnQge0J1bmRsZVNoaXBWaWV3fSBmcm9tIFwiLi4vdmlldy9zaGlwcy9CdW5kbGVTaGlwVmlld1wiO1xyXG5pbXBvcnQge1NoaXBQbGFjZUNvbW1hbmR9IGZyb20gXCIuLi9jb21tYW5kL1NoaXBQbGFjZUNvbW1hbmRcIjtcclxuXHJcbmV4cG9ydCBlbnVtIE1lZGlhdG9yTm90aWZpY2F0aW9ucyB7XHJcbiAgICBTaGlwc1BsYWNlbWVudCA9ICdTaGlwc19QbGFjZW1lbnQnLFxyXG4gICAgR3JpZFNoaXBNYXJraW5nID0gJ0dyaWRNYXJraW5nJyxcclxuICAgIFRleHRVcGRhdGUgPSAnVGV4dFVwZGF0ZScsXHJcbiAgICBUZXN0ID0gJ1Rlc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRleHRFcnJvcnMge1xyXG5cclxuICAgIE1heGltdW1OdW1iZXJPZlNoaXBSZWFjaGVkID0gJ01heCBOdW1iZXIgT2YgU2hpcHMgdG8gUGxhY2UgUmVhY2hlZCdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29tbWFuZE5vdGlmaWNhdGlvbnMge1xyXG5cclxuICAgIENsaWNrSGFuZGxlID0gJ0NMSUNLX0hBTkRMRV9DT01NQU5EJyxcclxuICAgIEJ1dHRvblByZXNzID0gJ0JVVFRPTl9QUkVTU19DT01NQU5EJyxcclxuICAgIFN0YXJ0R2FtZSA9ICdTVEFSVF9HQU1FX0NPTU1BTkQnLFxyXG4gICAgU2hpcHNQbGFjZW1lbnQgPSAnU0hJUFNfUExBQ0VNRU5UX0NPTU1BTkQnXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEZhY2FkZUluZm9ybWF0aW9uIHtcclxuXHJcbiAgICBHcmlkMVhQb3NpdGlvbiA9IDEwMCxcclxuICAgIEdyaWQxWVBvc2l0aW9uID0gMTAwLFxyXG4gICAgR3JpZDFCb3JkZXJDb2xvciA9IDB4MDAwMGZmLFxyXG4gICAgR3JpZDJYUG9zaXRpb24gPSAxMDAsXHJcbiAgICBHcmlkMllQb3NpdGlvbiA9IDEwMCxcclxuICAgIEdyaWQyQm9yZGVyQ29sb3IgPSAweGZmMDAwMCxcclxuICAgIEdyaWRTY2FsZSA9IDAuNSxcclxuXHJcbiAgICBHcmlkU3F1YXJlRmlsbENvbG9yID0gMHgwMDAwMDAsXHJcbiAgICBSdWxlclRleHRDb2xvciA9IDB4MDAwMDAwLFxyXG4gICAgSGl0Q29sb3IgPSAweDAwZmYwMCxcclxuICAgIE1pc3NDb2xvciA9IDB4ZmYzMzAwLFxyXG5cclxuICAgIFNxdWFyZUZpbGxDb2xvciA9IDB4MDBmZjAwLFxyXG4gICAgU3F1YXJlV2lkdGggPSA4MCxcclxuICAgIE51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHkgPSAxMixcclxuICAgIE51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSA9IDEyLFxyXG5cclxuICAgIFRleHRWaWV3VGV4dCA9ICdHYW1lIHN0YXR1cyA6IFxcblNoaXBzIHBsYWNlbWVudCcsXHJcbiAgICBUZXh0Vmlld0NvbG9yID0gMHg0MmQxZjQsXHJcbiAgICBGb250U2l6ZSA9IDMwLFxyXG5cclxuICAgIFBsYXllck9uZVNoaXBGaWxsQ29sb3IgPSAweDAwMDBmZixcclxuICAgIFBsYXllck9uZVNoaXBCb3JkZXJDb2xvciA9IDB4ZmZmMDAwLFxyXG4gICAgUGxheWVyVHdvU2hpcEZpbGxDb2xvciA9IDB4ZmEwMDAwLFxyXG4gICAgUGxheWVyVHdvU2hpcEJvcmRlckNvbG9yID0gMHhmZmYwMDAsXHJcbiAgICBQbGF5ZXJPbmVOdW1iZXJPZlNoaXBzID0gNixcclxuICAgIFBsYXllclR3b051bWJlck9mU2hpcHMgPSA2LFxyXG5cclxuICAgIEJ1dHRvblZpZXdYUG9zaXRpb24gPSAxMDAsXHJcbiAgICBCdXR0b25WaWV3WVBvc2l0aW9uID0gMTAwLFxyXG4gICAgQnV0dG9uVmlld1NjYWxlID0gMC45LFxyXG5cclxuXHJcbiAgICBQbGF5ZXJPbmUgPSAnMScsXHJcbiAgICBQbGF5ZXJUd28gPSAnMicsXHJcblxyXG4gICAgQmF0dGxlU2hpcEZhY2FkZUtleSA9ICdCYXR0bGVTaGlwJyxcclxuICAgIFNoaXBWZXJ0aWNhbFR5cGUgPSAnVmVydGljYWwnLFxyXG4gICAgU2hpcEhvcml6b250YWxUeXBlID0gJ0hvcml6b250YWwnLFxyXG4gICAgTWF4aW11bU51bWJlck9mU2hpcHNPbkFHcmlkID0gM1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIG1haW4gRmFjYWRlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJhdHRsZVNoaXBGYWNhZGUgZXh0ZW5kcyBBYnN0cmFjdEZhY2FkZSB7XHJcblxyXG4gICAgcHVibGljIGFwcDogUElYSS5BcHBsaWNhdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgZ3JpZFZpZXc6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIGdyaWRWaWV3TWVkaWF0b3I6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIGJ1dHRvblZpZXc6IHN0cmluZztcclxuICAgIHB1YmxpYyBidXR0b25WaWV3TWVkaWF0b3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBidW5kbGVTaGlwVmlldzogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgYnVuZGxlU2hpcFZpZXdNZWRpYXRvcjogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgdGV4dFZpZXc6IHN0cmluZztcclxuICAgIHB1YmxpYyB0ZXh0Vmlld01lZGlhdG9yOiBzdHJpbmc7XHJcblxyXG4gICAgLy9UT0RPIC0gQWRkIG1vcmUgY29udGFpbmVycyBpZiBuZWVkZWRcclxuICAgIC8qKlRoZSBjb250YWluZXJzIHRoYXQgY29udGFpbnMgdGhlIEdhbWVCb2FyZHMgKi9cclxuICAgIHB1YmxpYyBHYW1lQm9hcmRDb250YWluZXJPbmU6IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgcHVibGljIEdhbWVCb2FyZENvbnRhaW5lclR3bzogUElYSS5Db250YWluZXI7XHJcbiAgICAvKipUaGUgY29udGFpbmVyIHdoaWNoIGNvbnRhaW5zIHRoZSBHYW1lSW5mbyAqL1xyXG4gICAgcHVibGljIEdhbWVJbmZvQ29udGFpbmVyOiBQSVhJLkNvbnRhaW5lcjtcclxuICAgIC8qKlRoZSBjb250YWluZXIgd2hpY2ggY29udGFpbnMgdGhlIEdhbWVCdXR0b24gKi9cclxuICAgIHB1YmxpYyBHYW1lQnV0dG9uQ29udGFpbmVyOiBQSVhJLkNvbnRhaW5lcjtcclxuICAgIC8qKlRoZSBjb250YWluZXIgdGhhdCBob2xkcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYmF0dGxlc2hpcHMgKi9cclxuICAgIHB1YmxpYyBTaGlwc0NvbnRhaW5lck9uZTogUElYSS5Db250YWluZXI7XHJcbiAgICBwdWJsaWMgU2hpcHNDb250YWluZXJUd286IFBJWEkuQ29udGFpbmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGtleTogc3RyaW5nKTogQmF0dGxlU2hpcEZhY2FkZSB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLkZhY2FkZS5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLkZhY2FkZS5pbnN0YW5jZU1hcFtrZXldID0gbmV3IEJhdHRsZVNoaXBGYWNhZGUoa2V5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuRmFjYWRlLmluc3RhbmNlTWFwW2tleV0gYXMgQmF0dGxlU2hpcEZhY2FkZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemluZyB0aGUgRmFjYWRlJ3MgTW9kZWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVNb2RlbCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBubyBtb2RlbCBuZWVkZWQgeWV0XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgdGhlIEZhY2FkZSdzIFZpZXdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVWaWV3KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy52aWV3KVxyXG4gICAgICAgICAgICB0aGlzLnZpZXcgPSBCYXR0bGVTaGlwVmlldy5nZXRJbnN0YW5jZSh0aGlzLm11bHRpdG9uS2V5KTtcclxuXHJcbiAgICAgICAgLyoqS2V5cyBmb3IgdGhlIHZpZXdzIGFuZCB0aGUgbWVkaWF0b3JzICovXHJcbiAgICAgICAgdGhpcy5ncmlkVmlldyA9IFsnR3JpZE9uZUJvYXJkJywgJ0dyaWRUd29Cb2FyZCddO1xyXG4gICAgICAgIHRoaXMuZ3JpZFZpZXdNZWRpYXRvciA9IFsnR3JpZE9uZU1lZGlhdG9yJywgJ0dyaWRUd29NZWRpYXRvciddO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uVmlldyA9ICdCdXR0b25WaWV3JztcclxuICAgICAgICB0aGlzLmJ1dHRvblZpZXdNZWRpYXRvciA9ICdCdXR0b25WaWV3TWVkaWF0b3InO1xyXG4gICAgICAgIHRoaXMuYnVuZGxlU2hpcFZpZXcgPSBbJ1NoaXBQbGF5ZXJPbmVWaWV3JywgJ1NoaXBQbGF5ZXJUd29WaWV3J107XHJcbiAgICAgICAgdGhpcy5idW5kbGVTaGlwVmlld01lZGlhdG9yID0gWydTaGlwUGxheWVyT25lTWVkaWF0b3InLCAnU2hpcFBsYXllclR3b01lZGlhdG9yJ107XHJcbiAgICAgICAgdGhpcy50ZXh0VmlldyA9ICdUZXh0Vmlldyc7XHJcbiAgICAgICAgdGhpcy50ZXh0Vmlld01lZGlhdG9yID0gJ1RleHRWaWV3TWVkaWF0b3InO1xyXG5cclxuXHJcbiAgICAgICAgLyoqUmVnaXN0ZXJpbmcgYSBCdXR0b25NZWRpYXRvciAqL1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyTWVkaWF0b3IobmV3IEJ1dHRvblZpZXdNZWRpYXRvcih0aGlzLmJ1dHRvblZpZXdNZWRpYXRvciwgQnV0dG9uVmlldy5nZXRJbnN0YW5jZSh0aGlzLmJ1dHRvblZpZXcsXHJcbiAgICAgICAgICAgIEZhY2FkZUluZm9ybWF0aW9uLkJ1dHRvblZpZXdYUG9zaXRpb24sIEZhY2FkZUluZm9ybWF0aW9uLkJ1dHRvblZpZXdZUG9zaXRpb24sIEZhY2FkZUluZm9ybWF0aW9uLkJ1dHRvblZpZXdTY2FsZSkpKTtcclxuXHJcbiAgICAgICAgLyoqUmVnaXN0ZXJpbmcgdGhlIHR3byBHcmlkVmlld3MgKi9cclxuICAgICAgICBzdXBlci5yZWdpc3Rlck1lZGlhdG9yKG5ldyBHcmlkVmlld01lZGlhdG9yKHRoaXMuZ3JpZFZpZXdNZWRpYXRvclswXSxcclxuICAgICAgICAgICAgR3JpZFZpZXcuZ2V0SW5zdGFuY2UodGhpcy5ncmlkVmlld1swXSwgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyT25lKSwgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyT25lKSk7XHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJNZWRpYXRvcihuZXcgR3JpZFZpZXdNZWRpYXRvcih0aGlzLmdyaWRWaWV3TWVkaWF0b3JbMV0sXHJcbiAgICAgICAgICAgIEdyaWRWaWV3LmdldEluc3RhbmNlKHRoaXMuZ3JpZFZpZXdbMV0sIEZhY2FkZUluZm9ybWF0aW9uLlBsYXllclR3byksIEZhY2FkZUluZm9ybWF0aW9uLlBsYXllclR3bykpO1xyXG5cclxuICAgICAgICAvKipSZWdpc3RlcmluZyB0aGUgVGV4dE1lZGlhdG9yICovXHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJNZWRpYXRvcihuZXcgVGV4dFZpZXdNZWRpYXRvcih0aGlzLnRleHRWaWV3TWVkaWF0b3IsIFRleHRWaWV3LmdldEluc3RhbmNlKHRoaXMudGV4dFZpZXcsXHJcbiAgICAgICAgICAgIEZhY2FkZUluZm9ybWF0aW9uLlRleHRWaWV3VGV4dCwgRmFjYWRlSW5mb3JtYXRpb24uRm9udFNpemUsIEZhY2FkZUluZm9ybWF0aW9uLlRleHRWaWV3Q29sb3IpKSk7XHJcblxyXG5cclxuICAgICAgICAvKipSZWdpc3RlcmluZyB0aGUgU2hpcHMgTWVkaWF0b3JzICovXHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJNZWRpYXRvcihuZXcgQnVuZGxlU2hpcFZpZXdNZWRpYXRvcih0aGlzLmJ1bmRsZVNoaXBWaWV3TWVkaWF0b3JbMF0sXHJcbiAgICAgICAgICAgIEJ1bmRsZVNoaXBWaWV3LmdldEluc3RhbmNlKHRoaXMuYnVuZGxlU2hpcFZpZXdbMF0sIEZhY2FkZUluZm9ybWF0aW9uLlBsYXllck9uZSwgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyT25lTnVtYmVyT2ZTaGlwcyksIEZhY2FkZUluZm9ybWF0aW9uLlBsYXllck9uZSkpO1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyTWVkaWF0b3IobmV3IEJ1bmRsZVNoaXBWaWV3TWVkaWF0b3IodGhpcy5idW5kbGVTaGlwVmlld01lZGlhdG9yWzFdLFxyXG4gICAgICAgICAgICBCdW5kbGVTaGlwVmlldy5nZXRJbnN0YW5jZSh0aGlzLmJ1bmRsZVNoaXBWaWV3WzFdLCBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJUd28sIEZhY2FkZUluZm9ybWF0aW9uLlBsYXllclR3b051bWJlck9mU2hpcHMpLCBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJUd28pKTtcclxuXHJcbiAgICAgICAgbGV0IGNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN1cGVyLmhhc01lZGlhdG9yKHRoaXMudGV4dFZpZXdNZWRpYXRvcikpO1xyXG4gICAgICAgIHRoaXMuYXBwLnRpY2tlci5hZGQoKGRlbHRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvdW50ICs9IDAuMTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0ZXh0OiBhbnkgPSBzdXBlci5yZXRyaWV2ZU1lZGlhdG9yKHRoaXMudGV4dFZpZXdNZWRpYXRvcikuZ2V0Vmlld0NvbXBvbmVudCgpLmdldFVJQ29udGFpbmVyKCk7XHJcbiAgICAgICAgICAgIHRleHQuc2NhbGUuc2V0KDEgKyBNYXRoLnNpbihjb3VudCkgKiAwLjA1KTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgdGhlIEZhY2FkZSdzIENvbnRyb2xsZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVDb250cm9sbGVyKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jb250cm9sbGVyKVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBCYXR0bGVTaGlwQ29udHJvbGxlci5nZXRJbnN0YW5jZSh0aGlzLm11bHRpdG9uS2V5KTtcclxuXHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJDb21tYW5kKENvbW1hbmROb3RpZmljYXRpb25zLkNsaWNrSGFuZGxlLCBTcXVhcmVDbGlja0NvbW1hbmQpO1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyQ29tbWFuZChDb21tYW5kTm90aWZpY2F0aW9ucy5CdXR0b25QcmVzcywgQnV0dG9uUHJlc3NDb21tYW5kKTtcclxuICAgICAgICBzdXBlci5yZWdpc3RlckNvbW1hbmQoQ29tbWFuZE5vdGlmaWNhdGlvbnMuU2hpcHNQbGFjZW1lbnQsIFNoaXBQbGFjZUNvbW1hbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBjb250YWluZXJzIHRvIHRoZSB2aWV3IHNjcmVlblxyXG4gICAgICogQHBhcmFtIGNvbnRhaW5lcnNMaXN0XHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkQ29udGFpbmVyc1RvVmlldyhjb250YWluZXJzTGlzdDogQXJyYXk8UElYSS5Db250YWluZXI+LCB0eXBlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGNvbnRhaW5lcnNMaXN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBCYXR0bGVTaGlwVmlldy5QbGF5ZXJPbmVHcmlkQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvKipBZGRpbmcgdG8gdGhlIFBsYXllck9uZUdyaWQgQ29udGFpbmVyICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZS5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBCYXR0bGVTaGlwVmlldy5QbGF5ZXJUd29HcmlkQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvKipBZGRpbmcgdG8gdGhlIFBsYXllclR3b0dyaWQgQ29udGFpbmVyICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3by5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBCYXR0bGVTaGlwVmlldy5HYW1lSW5mb0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgLyoqQWRkaW5nIHRvIHRoZSBHYW1lSW5mbyBDb250YWluZXIgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gQmF0dGxlU2hpcFZpZXcuR2FtZUJ1dHRvbkNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgLyoqQWRkaW5nIHRvIHRoZSBHYW1lQnV0dG9uIENvbnRhaW5lciAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IEJhdHRsZVNoaXBWaWV3LlBsYXllck9uZVNoaXBzQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvKipBZGRpbmcgdG8gdGhlIFBsYXllck9uZVNoaXBzIENvbnRhaW5lciAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lck9uZS5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBCYXR0bGVTaGlwVmlldy5QbGF5ZXJUd29TaGlwc0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgLyoqQWRkaW5nIHRvIHRoZSBQbGF5ZXJUd29TaGlwcyBDb250YWluZXIgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJUd28uYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgdGhlIEZhY2FkZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZUZhY2FkZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tdWx0aXRvbktleSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5hcHAgPSBuZXcgUElYSS5BcHBsaWNhdGlvbih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0LCB7YmFja2dyb3VuZENvbG9yOiAweDAwMDAwMH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5hcHAudmlldyk7XHJcbiAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUgPSBuZXcgUElYSS5Db250YWluZXI7XHJcbiAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28gPSBuZXcgUElYSS5Db250YWluZXI7XHJcbiAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXI7XHJcbiAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lck9uZSA9IG5ldyBQSVhJLkNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyVHdvID0gbmV3IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLCB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3byxcclxuICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lciwgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLCB0aGlzLlNoaXBzQ29udGFpbmVyT25lLCB0aGlzLlNoaXBzQ29udGFpbmVyVHdvKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tTdGFydE9yaWVudGF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VPcmllbnRhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVZpZXcoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbnRyb2xsZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQmF0dGxlU2hpcEZhY2FkZSBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3RpZmllcyB0aGlzIGZhY2FkZSdzIHZpZXcgb2JzZXJ2ZXJzLlxyXG4gICAgICogQHBhcmFtIG1Ob3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5vdGlmeU9ic2VydmVycyhtTm90aWZpY2F0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudmlldylcclxuICAgICAgICAgICAgdGhpcy52aWV3Lm5vdGlmeU9ic2VydmVycyhtTm90aWZpY2F0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBDaGVja3MgYXQgdGhlIFN0YXJ0IG9mIHRoZSBnYW1lIHdoaWNoIG9yaWVudGF0aW9uIGl0IGhhc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrU3RhcnRPcmllbnRhdGlvbigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5hcHAucmVuZGVyZXIucmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgIGxldCB3aWR0aDogbnVtYmVyID0gdGhpcy5hcHAudmlldy53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0OiBudW1iZXIgPSB0aGlzLmFwcC52aWV3LmhlaWdodDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh3aW5kb3cub3JpZW50YXRpb24pIHtcclxuICAgICAgICAgICAgY2FzZSA5MCA6XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUucG9zaXRpb24uc2V0KHdpZHRoIC8gNiwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZS5zY2FsZS5zZXQoRmFjYWRlSW5mb3JtYXRpb24uR3JpZFNjYWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3by5wb3NpdGlvbi5zZXQoMyAqIHdpZHRoIC8gNiwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3by5zY2FsZS5zZXQoRmFjYWRlSW5mb3JtYXRpb24uR3JpZFNjYWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLnBvc2l0aW9uLnNldCg1ICogd2lkdGggLyA2LCBoZWlnaHQgLyA0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIuc2NhbGUuc2V0KDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5wb3NpdGlvbi5zZXQoNSAqIHdpZHRoIC8gNiwgMyAqIGhlaWdodCAvIDQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLnNjYWxlLnNldCgwLjkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJPbmUucG9zaXRpb24uc2V0KHdpZHRoIC8gNiwgMzApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lck9uZS5zY2FsZS5zZXQoMC41KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyVHdvLnBvc2l0aW9uLnNldCgzICogd2lkdGggLyA2LCAzMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyVHdvLnNjYWxlLnNldCgwLjUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAwIDpcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnBvc2l0aW9uLnNldCh3aWR0aCAvIDIsIGhlaWdodCAvIDYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUuc2NhbGUuc2V0KDAuNywgMC43KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3by5wb3NpdGlvbi5zZXQod2lkdGggLyAyLCAzICogaGVpZ2h0IC8gNik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3by5zY2FsZS5zZXQoMC43LCAwLjcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIucG9zaXRpb24uc2V0KHdpZHRoIC8gNCwgNSAqIGhlaWdodCAvIDYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5zY2FsZS5zZXQoMS42KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIucG9zaXRpb24uc2V0KDMgKiB3aWR0aCAvIDQsIDUgKiBoZWlnaHQgLyA2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5zY2FsZS5zZXQoMS42KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnBvc2l0aW9uLnNldCh3aWR0aCAvIDYsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUuc2NhbGUuc2V0KEZhY2FkZUluZm9ybWF0aW9uLkdyaWRTY2FsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28ucG9zaXRpb24uc2V0KDMgKiB3aWR0aCAvIDYsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28uc2NhbGUuc2V0KEZhY2FkZUluZm9ybWF0aW9uLkdyaWRTY2FsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5wb3NpdGlvbi5zZXQoNSAqIHdpZHRoIC8gNiwgaGVpZ2h0IC8gNCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLnNjYWxlLnNldCgxKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIucG9zaXRpb24uc2V0KDUgKiB3aWR0aCAvIDYsIDMgKiBoZWlnaHQgLyA0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5zY2FsZS5zZXQoMC45KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyT25lLnBvc2l0aW9uLnNldCh3aWR0aCAvIDYsIDMwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJPbmUuc2NhbGUuc2V0KDAuNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lclR3by5wb3NpdGlvbi5zZXQoMyAqIHdpZHRoIC8gNiwgMzApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lclR3by5zY2FsZS5zZXQoMC41KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgV2hlbiB0aGUgcGxheWVyIHJvdGF0ZXMgdGhlIHNjcmVlblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoYW5nZU9yaWVudGF0aW9uKCk6IHZvaWQge1xyXG5cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwLnJlbmRlcmVyLnJlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGxldCB3aWR0aDogbnVtYmVyID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0OiBudW1iZXIgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ09yaWVudGF0aW9uIDogJyArIHdpbmRvdy5vcmllbnRhdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh3aW5kb3cub3JpZW50YXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDkwIDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnBvc2l0aW9uLnNldCh3aWR0aCAvIDYsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZS5zY2FsZS5zZXQoRmFjYWRlSW5mb3JtYXRpb24uR3JpZFNjYWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLnBvc2l0aW9uLnNldCgzICogd2lkdGggLyA2LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28uc2NhbGUuc2V0KEZhY2FkZUluZm9ybWF0aW9uLkdyaWRTY2FsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLnBvc2l0aW9uLnNldCg1ICogd2lkdGggLyA2LCBoZWlnaHQgLyA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5zY2FsZS5zZXQoMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIucG9zaXRpb24uc2V0KDUgKiB3aWR0aCAvIDYsIDMgKiBoZWlnaHQgLyA0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLnNjYWxlLnNldCgwLjkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lck9uZS5wb3NpdGlvbi5zZXQod2lkdGggLyA2LCAzMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJPbmUuc2NhbGUuc2V0KDAuNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyVHdvLnBvc2l0aW9uLnNldCgzICogd2lkdGggLyA2LCAzMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJUd28uc2NhbGUuc2V0KDAuNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUucG9zaXRpb24uc2V0KHdpZHRoIC8gMiwgaGVpZ2h0IC8gNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnNjYWxlLnNldChGYWNhZGVJbmZvcm1hdGlvbi5HcmlkU2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28ucG9zaXRpb24uc2V0KHdpZHRoIC8gMiwgMyAqIGhlaWdodCAvIDYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3by5zY2FsZS5zZXQoRmFjYWRlSW5mb3JtYXRpb24uR3JpZFNjYWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIucG9zaXRpb24uc2V0KHdpZHRoIC8gNCwgNSAqIGhlaWdodCAvIDYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLnNjYWxlLnNldCgxLjYpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLnBvc2l0aW9uLnNldCgzICogd2lkdGggLyA0LCA1ICogaGVpZ2h0IC8gNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5zY2FsZS5zZXQoMS42KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZS5wb3NpdGlvbi5zZXQod2lkdGggLyA2LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUuc2NhbGUuc2V0KEZhY2FkZUluZm9ybWF0aW9uLkdyaWRTY2FsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3by5wb3NpdGlvbi5zZXQoMyAqIHdpZHRoIC8gNiwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLnNjYWxlLnNldChGYWNhZGVJbmZvcm1hdGlvbi5HcmlkU2NhbGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5wb3NpdGlvbi5zZXQoNSAqIHdpZHRoIC8gNiwgaGVpZ2h0IC8gNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIuc2NhbGUuc2V0KDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLnBvc2l0aW9uLnNldCg1ICogd2lkdGggLyA2LCAzICogaGVpZ2h0IC8gNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5zY2FsZS5zZXQoMC45KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJPbmUucG9zaXRpb24uc2V0KHdpZHRoIC8gNiwgMzApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyT25lLnNjYWxlLnNldCgwLjUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lclR3by5wb3NpdGlvbi5zZXQoMyAqIHdpZHRoIC8gNiwgMzApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyVHdvLnNjYWxlLnNldCgwLjUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSB1bmRlZmluZWQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUElYSVwifVxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogRXh0ZW5kcyB0aGlzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0VmlldyBleHRlbmRzIHB1cmVtdmMuVmlldyBpbXBsZW1lbnRzIHB1cmVtdmMuSVZpZXcge1xyXG4gICAgcHVibGljIElEOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgX2NvbnRhaW5lcjogUElYSS5Db250YWluZXI7XHJcbiAgICBwcm90ZWN0ZWQgX211bHRpdG9uS2V5OiBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgX2FjdGl2ZTogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgICAgICB0aGlzLl9tdWx0aXRvbktleSA9IGtleTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBzZXQgYWN0aXZlKGtleTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IGtleTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSB2aWV3LlxyXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgY29udGFpbmVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZVZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VUlDb250YWluZXIoKTogUElYSS5Db250YWluZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBQSVhJIGdyYXBoaWNzLHNwcml0ZSxjb250YWluZXIgZXRjIHRvIHRoaXMgdmlld1xyXG4gICAgICogQHBhcmFtIGl0ZW1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFRvQ29udGFpbmVyKGl0ZW06IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYWN0aXZlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRBY3RpdmUoYWN0aXZlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLl9jb250YWluZXIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gYWN0aXZlO1xyXG4gICAgICAgICAgICBpdGVtLmludGVyYWN0aXZlID0gYWN0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBtZWRpYXRvciB0byB0aGlzIHZpZXcuXHJcbiAgICAgKiBAcGFyYW0gbWVkaWF0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyTWVkaWF0b3IobWVkaWF0b3I6IHB1cmVtdmMuTWVkaWF0b3IpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5yZWdpc3Rlck1lZGlhdG9yKG1lZGlhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVkaWF0b3JOYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYXNNZWRpYXRvcihtZWRpYXRvck5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5oYXNNZWRpYXRvcihtZWRpYXRvck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFjdGl2YXRlVXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vdG9kbzogb3ZlcnJpZGUgd2hlcmUgbmVlZGVkXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25DbGljayhpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgLy90b2RvOiBvdmVycmlkZSB3aGVyZSBuZWVkZWRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbG9hZGVyXHJcbiAgICAgKiBAcGFyYW0gcmVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkFzc2V0c0xvYWRlZChsb2FkZXIsIHJlcyk6IHZvaWQge1xyXG4gICAgICAgIC8vdG9kbzogb3ZlcnJpZGUgd2hlcmUgbmVlZGVkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGxvYWRlclxyXG4gICAgICogQHBhcmFtIHJlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25Db25maWdMb2FkZWQobG9hZGVyLCByZXMpOiB2b2lkIHtcclxuICAgICAgICAvL3RvZG86IG92ZXJyaWRlIHdoZXJlIG5lZWRlZFxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Vmlldy50cyIsIi8qKlxyXG4gKiBFeHRlbmRzIHRoaXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RNZWRpYXRvciBleHRlbmRzIHB1cmVtdmMuTWVkaWF0b3IgaW1wbGVtZW50cyBwdXJlbXZjLklNZWRpYXRvciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lZGlhdG9yTmFtZVxyXG4gICAgICogQHBhcmFtIHZpZXdDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVkaWF0b3JOYW1lOiBzdHJpbmcsIHZpZXdDb21wb25lbnQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKG1lZGlhdG9yTmFtZSwgdmlld0NvbXBvbmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Vmlld0NvbXBvbmVudCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5nZXRWaWV3Q29tcG9uZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0TWVkaWF0b3JOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldE1lZGlhdG9yTmFtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB2aWV3Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRWaWV3Q29tcG9uZW50KHZpZXdDb21wb25lbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnNldFZpZXdDb21wb25lbnQodmlld0NvbXBvbmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGhhbmRsZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuaGFuZGxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25SZWdpc3RlcigpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5vblJlZ2lzdGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25SZW1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIub25SZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplTm90aWZpZXIoa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplTm90aWZpZXIoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICogQHBhcmFtIGJvZHlcclxuICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZW5kTm90aWZpY2F0aW9uKG5hbWU6IHN0cmluZywgYm9keT86IGFueSwgdHlwZT86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnNlbmROb3RpZmljYXRpb24obmFtZSwgYm9keSwgdHlwZSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RNZWRpYXRvci50cyIsImltcG9ydCB7QWJzdHJhY3RDb250cm9sbGVyfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29udHJvbGxlclwiO1xyXG5pbXBvcnQge0dyaWRDb250cm9sbGVyfSBmcm9tIFwiLi9HcmlkQ29udHJvbGxlclwiO1xyXG5pbXBvcnQge0ZhY2FkZUluZm9ybWF0aW9ufSBmcm9tIFwiLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0IHtQbGF5ZXJDb250cm9sbGVyfSBmcm9tIFwiLi9QbGF5ZXJDb250cm9sbGVyXCI7XHJcblxyXG4vKipcclxuICogVGhlIEJhdHRsZVNoaXAgY29udHJvbGxlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXR0bGVTaGlwQ29udHJvbGxlciBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHcmlkUGxheWVyT25lQ29udHJvbGxlck5hbWU6IHN0cmluZyA9ICdHMSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEdyaWRQbGF5ZXJUd29Db250cm9sbGVyTmFtZTogc3RyaW5nID0gJ0cyJztcclxuICAgIHB1YmxpYyBzdGF0aWMgUGxheWVyT25lQ29udHJvbGxlck5hbWU6IHN0cmluZyA9ICdQMSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFBsYXllclR3b0NvbnRyb2xsZXJOYW1lOiBzdHJpbmcgPSAnUDInO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgUGxheWVyT25lRmluaXNoZWRQbGFjaW5nVGhlU2hpcHMgPSAnUGxheWVyMUZCVFMnO1xyXG4gICAgcHVibGljIHN0YXRpYyBQbGF5ZXJUd29GaW5pc2hlZFBsYWNpbmdUaGVTaGlwcyA9ICdQbGF5ZXIyRkJUUyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcblxyXG4gICAgICAgIEdyaWRDb250cm9sbGVyLmdldEluc3RhbmNlKEJhdHRsZVNoaXBDb250cm9sbGVyLkdyaWRQbGF5ZXJPbmVDb250cm9sbGVyTmFtZSwgRmFjYWRlSW5mb3JtYXRpb24uTnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseSwgRmFjYWRlSW5mb3JtYXRpb24uTnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5KTtcclxuICAgICAgICBHcmlkQ29udHJvbGxlci5nZXRJbnN0YW5jZShCYXR0bGVTaGlwQ29udHJvbGxlci5HcmlkUGxheWVyVHdvQ29udHJvbGxlck5hbWUsIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHksIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSk7XHJcblxyXG4gICAgICAgIFBsYXllckNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoQmF0dGxlU2hpcENvbnRyb2xsZXIuUGxheWVyT25lQ29udHJvbGxlck5hbWUpO1xyXG4gICAgICAgIFBsYXllckNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoQmF0dGxlU2hpcENvbnRyb2xsZXIuUGxheWVyVHdvQ29udHJvbGxlck5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCYXR0bGVTaGlwQ29udHJvbGxlciBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcpOiBCYXR0bGVTaGlwQ29udHJvbGxlciB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLkNvbnRyb2xsZXIuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5Db250cm9sbGVyLmluc3RhbmNlTWFwW2tleV0gPSBuZXcgQmF0dGxlU2hpcENvbnRyb2xsZXIoa2V5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuQ29udHJvbGxlci5pbnN0YW5jZU1hcFtrZXldIGFzIEJhdHRsZVNoaXBDb250cm9sbGVyO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9jb250cm9sbGVyL0JhdHRsZVNoaXBDb250cm9sbGVyLnRzIiwiaW1wb3J0IHtCYXR0bGVTaGlwTWVkaWF0b3J9IGZyb20gXCIuLi8uLi9tZWRpYXRvci9CYXR0bGVTaGlwTWVkaWF0b3JcIjtcclxuaW1wb3J0IHtBYnN0cmFjdFZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3XCI7XHJcbmltcG9ydCAncGl4aS5qcydcclxuXHJcblxyXG4vKipcclxuICogVGhlIG1haW4gQmF0dGxlU2hpcCB2aWV3IGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmF0dGxlU2hpcFZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xyXG5cclxuICAgIC8qKiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBQbGF5ZXJPbmVHcmlkQ29udGFpbmVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBQbGF5ZXJUd29HcmlkQ29udGFpbmVyOiBudW1iZXIgPSAxO1xyXG4gICAgcHVibGljIHN0YXRpYyBHYW1lSW5mb0NvbnRhaW5lcjogbnVtYmVyID0gMztcclxuICAgIHB1YmxpYyBzdGF0aWMgR2FtZUJ1dHRvbkNvbnRhaW5lcjogbnVtYmVyID0gNDtcclxuICAgIHB1YmxpYyBzdGF0aWMgUGxheWVyT25lU2hpcHNDb250YWluZXI6IG51bWJlciA9IDU7XHJcbiAgICBwdWJsaWMgc3RhdGljIFBsYXllclR3b1NoaXBzQ29udGFpbmVyOiBudW1iZXIgPSA2O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMubXVsdGl0b25LZXkgPSBrZXk7XHJcblxyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyTWVkaWF0b3IobmV3IEJhdHRsZVNoaXBNZWRpYXRvcihrZXksIHRoaXMpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgdGhlIEJhdHRsZVNoaXAncyB2aWV3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplVmlldygpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplVmlldygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCYXR0bGVTaGlwVmlldyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcpOiBBYnN0cmFjdFZpZXcge1xyXG4gICAgICAgIGlmICghcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0pXHJcbiAgICAgICAgICAgIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldID0gbmV3IEJhdHRsZVNoaXBWaWV3KGtleSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSBhcyBBYnN0cmFjdFZpZXc7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvbWFpblZpZXcvQmF0dGxlU2hpcFZpZXcudHMiLCIvKipcclxuICogIEV4dGVuZCB0aGlzIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0Q29udHJvbGxlciBleHRlbmRzIHB1cmVtdmMuQ29udHJvbGxlciBpbXBsZW1lbnRzIHB1cmVtdmMuSUNvbnRyb2xsZXIge1xyXG5cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSAnQ29udHJvbGxlcic7XHJcbiAgICBwcml2YXRlIG11bHRpdG9ua2V5OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgICAgICB0aGlzLm11bHRpdG9ua2V5ID0ga2V5XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgY29udHJvbGxlci5cclxuICAgICAqIEl0IGlzIGNhbGxlZCB3aGVuIHN1cGVyIGlzIGNhbGxlZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplQ29udHJvbGxlcigpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplQ29udHJvbGxlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0ZSBhIHJlZ2lzdGVyZWQgY29tbWFuZCBiYXNlZCBvbiB0aGUgcmVjZWl2ZWQgbm90aWZpY2F0aW9uLlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhlY3V0ZUNvbW1hbmQobm90aWZpY2F0aW9uOiBwdXJlbXZjLklOb3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5leGVjdXRlQ29tbWFuZChub3RpZmljYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBjb21tYW5kIHRvIHRoaXMgY29udHJvbGxlci5cclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25OYW1lXHJcbiAgICAgKiBAcGFyYW0gY29tbWFuZENsYXNzUmVmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3RlckNvbW1hbmQobm90aWZpY2F0aW9uTmFtZTogc3RyaW5nLCBjb21tYW5kQ2xhc3NSZWY6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJDb21tYW5kKG5vdGlmaWNhdGlvbk5hbWUsIGNvbW1hbmRDbGFzc1JlZik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWZXJpZmllcyBpZiB0aGlzIGNvbnRyb2xsZXIgaGFzIHJlZ2lzdGVyZWQgYSBjb21tYW5kLlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvbk5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhhc0NvbW1hbmQobm90aWZpY2F0aW9uTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmhhc0NvbW1hbmQobm90aWZpY2F0aW9uTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgYSBjb21tYW5kIGZyb20gdGhpcyBjb250cm9sbGVyLlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvbk5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZUNvbW1hbmQobm90aWZpY2F0aW9uTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVtb3ZlQ29tbWFuZChub3RpZmljYXRpb25OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHRlciBmb3IgdGhlIG11bHRpdG9uS2V5LlxyXG4gICAgICovXHJcbiAgICBnZXQgbXVsdGl0b25LZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXRvbmtleTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHRlciBmb3IgdGhlIG11bHRpdG9uS2V5LlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBzZXQgbXVsdGl0b25LZXkoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm11bHRpdG9ua2V5ID0ga2V5O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29udHJvbGxlci50cyIsImltcG9ydCAncGl4aS5qcyc7XHJcbmltcG9ydCB7QWJzdHJhY3ROb3RpZmljYXRpb259IGZyb20gXCIuL0Fic3RyYWN0Tm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7QWJzdHJhY3ROb3RpZmllcn0gZnJvbSBcIi4vQWJzdHJhY3ROb3RpZmllclwiO1xyXG5pbXBvcnQge0Fic3RyYWN0RmFjYWRlfSBmcm9tIFwiLi9BYnN0cmFjdEZhY2FkZVwiO1xyXG5pbXBvcnQgTm90aWZpZXIgPSBwdXJlbXZjLk5vdGlmaWVyO1xyXG5cclxuLyoqXHJcbiAqICBFeHRlbmQgdGhpcyBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdENvbW1hbmQgZXh0ZW5kcyBwdXJlbXZjLlNpbXBsZUNvbW1hbmQgaW1wbGVtZW50cyBwdXJlbXZjLklDb21tYW5kLCBBYnN0cmFjdE5vdGlmaWVyIHtcclxuXHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJ0NvbW1hbmQnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4ZWN1dGUobm90aWZpY2F0aW9uOiBBYnN0cmFjdE5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmV4ZWN1dGUobm90aWZpY2F0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplTm90aWZpZXIoa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplTm90aWZpZXIoa2V5KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqIEBwYXJhbSBib2R5XHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICogQHBhcmFtIGFycmF5T2ZTdHJpbmdzXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0UmVmZXJlbmNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZW5kTm90aWZpY2F0aW9uKG5hbWU6IHN0cmluZywgYm9keT86IGFueSwgdHlwZT86IHN0cmluZywgYXJyYXlPZlN0cmluZ3M/OiBBcnJheTxzdHJpbmc+LCBvYmplY3RSZWZlcmVuY2U/OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGZhY2FkZTogYW55ID0gQWJzdHJhY3RGYWNhZGUuZ2V0SW5zdGFuY2UodGhpcy5tdWx0aXRvbktleSk7XHJcbiAgICAgICAgZmFjYWRlLnNlbmROb3RpZmljYXRpb24obmFtZSwgYm9keSwgdHlwZSwgYXJyYXlPZlN0cmluZ3MsIG9iamVjdFJlZmVyZW5jZSk7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29tbWFuZC50cyIsImltcG9ydCB7QWJzdHJhY3RDb250cm9sbGVyfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29udHJvbGxlclwiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDb250cm9scyB0aGUgZ3JpZCdzIGZ1bmN0aW9uYWxpdHkuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JpZENvbnRyb2xsZXIgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuICAgIHB1YmxpYyBHcmlkU3F1YXJlczogbnVtYmVyW11bXSA9IFtdO1xyXG4gICAgcHVibGljIG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseTogbnVtYmVyO1xyXG4gICAgcHVibGljIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseVxyXG4gICAgICogQHBhcmFtIG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseT86IG51bWJlciwgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5PzogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHkgPSBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5ID0gbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUdyaWRTcXVhcmVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseVxyXG4gICAgICogQHBhcmFtIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHlcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGtleTogc3RyaW5nLCBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5PzogbnVtYmVyLCBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk/OiBudW1iZXIpOiBHcmlkQ29udHJvbGxlciB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLkNvbnRyb2xsZXIuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5Db250cm9sbGVyLmluc3RhbmNlTWFwW2tleV0gPSBuZXcgR3JpZENvbnRyb2xsZXIoa2V5LCBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHksIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHkpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5Db250cm9sbGVyLmluc3RhbmNlTWFwW2tleV0gYXMgR3JpZENvbnRyb2xsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBHcmlkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVHcmlkU3F1YXJlcygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5udW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5HcmlkU3F1YXJlc1tpXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5udW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HcmlkU3F1YXJlc1tpXVtqXSA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIHByaW50IHRoZSBncmlkIG9uIHRoZSBzY3JlZW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2dHcmlkU3F1YXJlcygpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5udW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5HcmlkU3F1YXJlc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgZ3JpZCB3aXRoIHRoZSBoaXRzIG9yIHRoZSBtaXNzZXMuXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IG5ld0FycmF5OiBBcnJheTxudW1iZXI+ID0gW107XHJcbiAgICAgICAgbGV0IG5ld0luZGV4ID0gcG9zaXRpb24uc3BsaXQoJywnKTtcclxuICAgICAgICBmb3IgKGxldCBpIG9mIG5ld0luZGV4KSB7XHJcbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2goK2kpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVXBkYXRlcyB0aGUgZWxlbWVudCBpbiB0aGUgMiBkaW1lbnNpb25hbCBhcnJheSB3aXRoIGEgaGl0LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuR3JpZFNxdWFyZXNbbmV3QXJyYXlbMF1dW25ld0FycmF5WzFdXSA9IDU7XHJcbiAgICAgICAgdGhpcy5sb2dHcmlkU3F1YXJlcygpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvY29udHJvbGxlci9HcmlkQ29udHJvbGxlci50cyIsImltcG9ydCB7QWJzdHJhY3RDb250cm9sbGVyfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29udHJvbGxlclwiO1xyXG5pbXBvcnQge0JhdHRsZVNoaXBGYWNhZGUsIEZhY2FkZUluZm9ybWF0aW9ufSBmcm9tIFwiLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0IHtCYXR0bGVTaGlwQ29udHJvbGxlcn0gZnJvbSBcIi4vQmF0dGxlU2hpcENvbnRyb2xsZXJcIjtcclxuXHJcblxyXG4vKipcclxuICogVGhlIFBsYXllciBjb250cm9sbGVyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuICAgIHByaXZhdGUgX3NoaXBzUGxhY2VkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfcGxheWVyOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyID0ga2V5O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQbGF5ZXJDb250cm9sbGVyIGNyZWF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIG51bWJlciBvZiBzaGlwcyBwbGFjZWQgZm9yIGEgUGxheWVyLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlTnVtYmVyT2ZTaGlwc1BsYWNlZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fc2hpcHNQbGFjZWQgPD0gRmFjYWRlSW5mb3JtYXRpb24uTWF4aW11bU51bWJlck9mU2hpcHNPbkFHcmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoaXBzUGxhY2VkKys7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaGlwcyBwbGFjZWQgaW4gUGxheWVyQ29udHJvbGxlcicgKyB0aGlzLl9zaGlwc1BsYWNlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaGlwc1BsYWNlbWVudEZpbmlzaGVkKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBmYWNhZGU6IEJhdHRsZVNoaXBGYWNhZGUgPSBCYXR0bGVTaGlwRmFjYWRlLmdldEluc3RhbmNlKEZhY2FkZUluZm9ybWF0aW9uLkJhdHRsZVNoaXBGYWNhZGVLZXkpO1xyXG4gICAgICAgIGZhY2FkZS5zZW5kTm90aWZpY2F0aW9uKEJhdHRsZVNoaXBDb250cm9sbGVyLlBsYXllck9uZUZpbmlzaGVkUGxhY2luZ1RoZVNoaXBzLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcpOiBQbGF5ZXJDb250cm9sbGVyIHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuQ29udHJvbGxlci5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLkNvbnRyb2xsZXIuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBQbGF5ZXJDb250cm9sbGVyKGtleSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLkNvbnRyb2xsZXIuaW5zdGFuY2VNYXBba2V5XSBhcyBQbGF5ZXJDb250cm9sbGVyO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9jb250cm9sbGVyL1BsYXllckNvbnRyb2xsZXIudHMiLCJcclxuaW1wb3J0IHtBYnN0cmFjdE5vdGlmaWNhdGlvbn0gZnJvbSBcIi4vQWJzdHJhY3ROb3RpZmljYXRpb25cIjtcclxuLyoqXHJcbiAqIEV4dGVuZCB0aGlzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0RmFjYWRlIGV4dGVuZHMgcHVyZW12Yy5GYWNhZGUgaW1wbGVtZW50cyBwdXJlbXZjLklGYWNhZGUge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMubXVsdGl0b25LZXkgPSBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOb3RpZmllcyB0aGUgZmFjYWRlJ3MgdmlldyBvYnNlcnZlcnMuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBub3RpZnlPYnNlcnZlcnMobm90aWZpY2F0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudmlldylcclxuICAgICAgICAgICAgdGhpcy52aWV3Lm5vdGlmeU9ic2VydmVycyhub3RpZmljYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VuZHMgYSBub3RpZmljYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICogQHBhcmFtIGJvZHlcclxuICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gYXJyYXlPZlN0cmluZ3NcclxuICAgICAqIEBwYXJhbSBvYmplY3RSZWZlcmVuY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlbmROb3RpZmljYXRpb24obmFtZTogc3RyaW5nLCBib2R5OiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcsYXJyYXlPZlN0cmluZ3M/OiBBcnJheTxzdHJpbmc+LCBvYmplY3RSZWZlcmVuY2U/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyhuZXcgQWJzdHJhY3ROb3RpZmljYXRpb24obmFtZSwgYm9keSwgdHlwZSxhcnJheU9mU3RyaW5ncyxvYmplY3RSZWZlcmVuY2UpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uTmFtZVxyXG4gICAgICogQHBhcmFtIGNvbW1hbmRDbGFzc1JlZlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJDb21tYW5kKG5vdGlmaWNhdGlvbk5hbWU6IHN0cmluZywgY29tbWFuZENsYXNzUmVmOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyQ29tbWFuZChub3RpZmljYXRpb25OYW1lLCBjb21tYW5kQ2xhc3NSZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwcm94eVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJQcm94eShwcm94eTogcHVyZW12Yy5JUHJveHkpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5yZWdpc3RlclByb3h5KHByb3h5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcHJveHlOYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZXRyaWV2ZVByb3h5KHByb3h5TmFtZTogc3RyaW5nKTogcHVyZW12Yy5JUHJveHkge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5yZXRyaWV2ZVByb3h5KHByb3h5TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lZGlhdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3Rlck1lZGlhdG9yKG1lZGlhdG9yOiBwdXJlbXZjLklNZWRpYXRvcik6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyTWVkaWF0b3IobWVkaWF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZWRpYXRvck5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJldHJpZXZlTWVkaWF0b3IobWVkaWF0b3JOYW1lOiBzdHJpbmcpOiBwdXJlbXZjLklNZWRpYXRvciB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnJldHJpZXZlTWVkaWF0b3IobWVkaWF0b3JOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVkaWF0b3JOYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYXNNZWRpYXRvcihtZWRpYXRvck5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5oYXNNZWRpYXRvcihtZWRpYXRvck5hbWUpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0RmFjYWRlLnRzIiwiaW1wb3J0IHtCYXR0bGVTaGlwRmFjYWRlLCBGYWNhZGVJbmZvcm1hdGlvbn0gZnJvbSAnLi9wcm9qZWN0L2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlJ1xyXG5cclxubmV3IGNsYXNzIE1haW5cclxue1xyXG4gICAgcHVibGljIG15RmFjYWRlOiBCYXR0bGVTaGlwRmFjYWRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm15RmFjYWRlID0gQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KTtcclxuICAgIH07XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvaW5kZXgudHMiLCJpbXBvcnQgJ3BpeGkuanMnXHJcbmltcG9ydCB7QWJzdHJhY3RNZWRpYXRvcn0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE1lZGlhdG9yXCI7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXR0bGVTaGlwTWVkaWF0b3IgZXh0ZW5kcyBBYnN0cmFjdE1lZGlhdG9yIHtcclxuICAgIHB1YmxpYyBuYW1lOiBTdHJpbmcgPSAnQmF0dGxlU2hpcE1lZGlhdG9yJztcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lZGlhdG9yTmFtZVxyXG4gICAgICogQHBhcmFtIHZpZXdDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVkaWF0b3JOYW1lPzogc3RyaW5nLCB2aWV3Q29tcG9uZW50PzogYW55KSB7XHJcbiAgICAgICAgc3VwZXIobWVkaWF0b3JOYW1lLCB2aWV3Q29tcG9uZW50KTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCcgICAjICcgKyB0aGlzLm5hbWUgKyAnIGNyZWF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBub3RpZmljYXRpb24gdGhhdCB0aGUgQmF0dGxlU2hpcE1lZGlhdG9yIGlzIGludGVyZXN0ZWQgaW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCk6IHN0cmluZyBbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFRoaXMgaXMgd2hlcmUgdGhlIG5vdGlmaWNhdGlvbnMgYXJlIGhhbmRsZWQuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBwdXJlbXZjLk5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGxldCBuYW1lOiBTdHJpbmcgPSBub3RpZmljYXRpb24ubmFtZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvbWVkaWF0b3IvQmF0dGxlU2hpcE1lZGlhdG9yLnRzIiwiLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3ROb3RpZmljYXRpb24gZXh0ZW5kcyBwdXJlbXZjLk5vdGlmaWNhdGlvbiB7XHJcblxyXG4gICAgcHVibGljIG9iamVjdFJlZmVyZW5jZTogYW55O1xyXG4gICAgcHVibGljIGFycmF5T2ZTdHJpbmdzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqIEBwYXJhbSBib2R5XHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICogQHBhcmFtIGFycmF5T2ZTdHJpbmdzXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0UmVmZXJlbmNlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgYm9keTogc3RyaW5nLCB0eXBlPzogc3RyaW5nLCBhcnJheU9mU3RyaW5ncz86IEFycmF5PHN0cmluZz4sIG9iamVjdFJlZmVyZW5jZT86IGFueSkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsYm9keSx0eXBlKTtcclxuICAgICAgICB0aGlzLm9iamVjdFJlZmVyZW5jZSA9IG9iamVjdFJlZmVyZW5jZTtcclxuICAgICAgICB0aGlzLmFycmF5T2ZTdHJpbmdzID0gYXJyYXlPZlN0cmluZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5nZXROYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGJvZHlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEJvZHkoYm9keTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuc2V0Qm9keShib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRCb2R5KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldEJvZHkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0VHlwZSh0eXBlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5zZXRUeXBlKHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0VHlwZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYSByZWZlcmVuY2Ugb2Ygc29tZXRoaW5nIHdlIG5lZWQgaW4gdGhlIGZ1dHVyZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldE9iamVjdFJlZmVyZW5jZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdFJlZmVyZW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gb2JqZWN0UmVmZXJlbmNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRPYmplY3RSZWZlcmVuY2Uob2JqZWN0UmVmZXJlbmNlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9iamVjdFJlZmVyZW5jZSA9IG9iamVjdFJlZmVyZW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRBcnJheU9mU3RyaW5ncygpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJheU9mU3RyaW5ncztcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Tm90aWZpY2F0aW9uLnRzIiwiaW1wb3J0IHtBYnN0cmFjdFZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3XCI7XHJcbmltcG9ydCB7U3F1YXJlVmlld30gZnJvbSBcIi4vU3F1YXJlVmlld1wiO1xyXG5pbXBvcnQge0JhdHRsZVNoaXBGYWNhZGUsIEZhY2FkZUluZm9ybWF0aW9uLCBNZWRpYXRvck5vdGlmaWNhdGlvbnMsIFRleHRFcnJvcnN9IGZyb20gJy4uLy4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlJ1xyXG5pbXBvcnQge1J1bGVyVmlld30gZnJvbSBcIi4uL3J1bGVyL1J1bGVyVmlld1wiO1xyXG5pbXBvcnQgJ3BpeGkuanMnXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyB0aGUgZ3JpZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdyaWRWaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcclxuICAgIHByaXZhdGUgR3JpZFNxdWFyZXM6IFNxdWFyZVZpZXdbXVtdO1xyXG4gICAgcHVibGljIFJ1bGVyTmFtZTogc3RyaW5nID0gJ1J1bGVyRm9yVGhlR3JpZCc7XHJcbiAgICBwdWJsaWMgbmFtZSA9ICdHcmlkVmlldyc7XHJcbiAgICBwcml2YXRlIG1heFNoaXBzT25UaGlzR3JpZDogbnVtYmVyID0gRmFjYWRlSW5mb3JtYXRpb24uTWF4aW11bU51bWJlck9mU2hpcHNPbkFHcmlkO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TnVtYmVyT2ZTaGlwczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3BsYXllcjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBwbGF5ZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHBsYXllcjogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUuY29uY2F0KHBsYXllcik7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fcGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyT25lOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCb2FyZChGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMVhQb3NpdGlvbiwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZDFZUG9zaXRpb24sIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHksIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZDFCb3JkZXJDb2xvciwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZFNxdWFyZUZpbGxDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJ1bGVyKEZhY2FkZUluZm9ybWF0aW9uLkdyaWQxWFBvc2l0aW9uLCBGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMVlQb3NpdGlvbiwgRmFjYWRlSW5mb3JtYXRpb24uTnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseSxcclxuICAgICAgICAgICAgICAgICAgICBGYWNhZGVJbmZvcm1hdGlvbi5OdW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHksIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZVdpZHRoLCBGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMUJvcmRlckNvbG9yLCBGYWNhZGVJbmZvcm1hdGlvbi5SdWxlclRleHRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRmFjYWRlSW5mb3JtYXRpb24uUGxheWVyVHdvOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCb2FyZChGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMlhQb3NpdGlvbiwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZDJZUG9zaXRpb24sIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHksIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZDJCb3JkZXJDb2xvciwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZFNxdWFyZUZpbGxDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJ1bGVyKEZhY2FkZUluZm9ybWF0aW9uLkdyaWQyWFBvc2l0aW9uLCBGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMllQb3NpdGlvbiwgRmFjYWRlSW5mb3JtYXRpb24uTnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseSxcclxuICAgICAgICAgICAgICAgICAgICBGYWNhZGVJbmZvcm1hdGlvbi5OdW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHksIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZVdpZHRoLCBGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMkJvcmRlckNvbG9yLCBGYWNhZGVJbmZvcm1hdGlvbi5SdWxlclRleHRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnICAgIyAnICsgdGhpcy5uYW1lICsgJyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgSW5pdGlhbGl6aW5nIHRoZSBHcmlkJ3Mgdmlld1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZVZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZVZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhbiBpbnN0YW5jZSBvZiB0aGUgR3JpZCdzIHZpZXdcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBwbGF5ZXJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGtleTogc3RyaW5nLCBwbGF5ZXI/OiBzdHJpbmcpOiBHcmlkVmlldyB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gPSBuZXcgR3JpZFZpZXcoa2V5LCBwbGF5ZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gYXMgR3JpZFZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoaXMgZ3JpZCdzIGNvbnRhaW5lci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVJQ29udGFpbmVyKCk6IFBJWEkuQ29udGFpbmVyIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIucGl2b3QueCA9IHRoaXMuX2NvbnRhaW5lci53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnBpdm90LnkgPSB0aGlzLl9jb250YWluZXIuaGVpZ2h0IC8gMjtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0VUlDb250YWluZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzaGlwSW5mb1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZmlsbEdyaWRXaXRoQmF0dGxlU2hpcChwb3NpdGlvbjogQXJyYXk8bnVtYmVyPiwgc2hpcEluZm86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGxldCBncmlkRGltZW5zaW9uczogUElYSS5SZWN0YW5nbGUgPSB0aGlzLmdldFVJQ29udGFpbmVyKCkuZ2V0Qm91bmRzKCk7XHJcbiAgICAgICAgbGV0IHhQb3NpdGlvbjogbnVtYmVyID0gcG9zaXRpb25bMF07XHJcbiAgICAgICAgbGV0IHlQb3NpdGlvbjogbnVtYmVyID0gcG9zaXRpb25bMV07XHJcbiAgICAgICAgbGV0IG5ld1NoaXBJbmZvOiBhbnkgPSBzaGlwSW5mby5zcGxpdCgnLCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNoaXBJbmZvKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvb3JkaW5hdGVzIHJlY2VpdmVkICcgKyBbeFBvc2l0aW9uLCB5UG9zaXRpb25dKTtcclxuICAgICAgICBsZXQgc3F1YXJlV2lkdGg6IG51bWJlciA9IEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZVdpZHRoICogRmFjYWRlSW5mb3JtYXRpb24uR3JpZFNjYWxlO1xyXG5cclxuICAgICAgICAvLyBpZiAobmV3U2hpcEluZm9bMV0gPT0gdGhpcy5fcGxheWVyKSB7XHJcblxyXG4gICAgICAgIGlmICgoeFBvc2l0aW9uID4gZ3JpZERpbWVuc2lvbnMueCkgJiYgKHhQb3NpdGlvbiA8IGdyaWREaW1lbnNpb25zLnggKyBncmlkRGltZW5zaW9ucy53aWR0aCkpIHtcclxuICAgICAgICAgICAgaWYgKCh5UG9zaXRpb24gPiBncmlkRGltZW5zaW9ucy55KSAmJiAoeVBvc2l0aW9uIDwgZ3JpZERpbWVuc2lvbnMueSArIGdyaWREaW1lbnNpb25zLmhlaWdodCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU2hpcCBpcyBpbiBHcmlkVmlldycgKyB0aGlzLl9ncmlkTnVtYmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgRmFjYWRlSW5mb3JtYXRpb24uTnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc0hvcml6b250YWxseTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcXVhcmVYUG9zaXRpb246IG51bWJlciA9IHRoaXMuR3JpZFNxdWFyZXNbaV1bal0uZ2V0UG9zaXRpb24oKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNxdWFyZVlQb3NpdGlvbjogbnVtYmVyID0gdGhpcy5HcmlkU3F1YXJlc1tpXVtqXS5nZXRQb3NpdGlvbigpWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmFjYWRlID0gQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoeFBvc2l0aW9uID49IHNxdWFyZVhQb3NpdGlvbiAmJiB4UG9zaXRpb24gPCBzcXVhcmVYUG9zaXRpb24gKyBzcXVhcmVXaWR0aCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh5UG9zaXRpb24gPj0gc3F1YXJlWVBvc2l0aW9uICYmIHlQb3NpdGlvbiA8IHNxdWFyZVlQb3NpdGlvbiArIHNxdWFyZVdpZHRoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdTaGlwSW5mb1swXSA9PSBGYWNhZGVJbmZvcm1hdGlvbi5TaGlwSG9yaXpvbnRhbFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbnVtYmVyT2ZTcXVhcmVzOiBudW1iZXIgPSBNYXRoLnJvdW5kKHBvc2l0aW9uWzJdIC8gRmFjYWRlSW5mb3JtYXRpb24uU3F1YXJlV2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHg6IG51bWJlciA9IGo7IHggPCBqICsgbnVtYmVyT2ZTcXVhcmVzOyB4KyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnROdW1iZXJPZlNoaXBzIDw9IHRoaXMubWF4U2hpcHNPblRoaXNHcmlkICsgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HcmlkU3F1YXJlc1tpXVt4XS5maWxsU3F1YXJlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFjYWRlLnNlbmROb3RpZmljYXRpb24oTWVkaWF0b3JOb3RpZmljYXRpb25zLlRleHRVcGRhdGUsIFRleHRFcnJvcnMuTWF4aW11bU51bWJlck9mU2hpcFJlYWNoZWQsIHRoaXMuX3BsYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TnVtYmVyT2ZTaGlwcysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV3U2hpcEluZm9bMF0gPT0gRmFjYWRlSW5mb3JtYXRpb24uU2hpcFZlcnRpY2FsVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBudW1iZXJPZlNxdWFyZXM6IG51bWJlciA9IE1hdGgucm91bmQocG9zaXRpb25bM10gLyBGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVXaWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeDogbnVtYmVyID0gaTsgeCA8IGkgKyBudW1iZXJPZlNxdWFyZXM7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TnVtYmVyT2ZTaGlwcyA8PSB0aGlzLm1heFNoaXBzT25UaGlzR3JpZCArIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR3JpZFNxdWFyZXNbeF1bal0uZmlsbFNxdWFyZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhY2FkZS5zZW5kTm90aWZpY2F0aW9uKE1lZGlhdG9yTm90aWZpY2F0aW9ucy5UZXh0VXBkYXRlLCBUZXh0RXJyb3JzLk1heGltdW1OdW1iZXJPZlNoaXBSZWFjaGVkLCB0aGlzLl9wbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE51bWJlck9mU2hpcHMrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHcmlkU3F1YXJlIGNvb3JkaW5hdGVzIDogJyArIFtzcXVhcmVYUG9zaXRpb24sIHNxdWFyZVlQb3NpdGlvbl0gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcXG4gSW5kZXggOiAnICsgW2ksIGpdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBncmlkWFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gZ3JpZFlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseVxyXG4gICAgICogQHBhcmFtIG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseVxyXG4gICAgICogQHBhcmFtIGdyaWRCb3JkZXJDb2xvclxyXG4gICAgICogQHBhcmFtIGdyaWRTcXVhcmVGaWxsQ29sb3JcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVCb2FyZChncmlkWFBvc2l0aW9uOiBudW1iZXIsIGdyaWRZUG9zaXRpb246IG51bWJlciwgc3F1YXJlV2lkdGg6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseTogbnVtYmVyLCBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk6IG51bWJlciwgZ3JpZEJvcmRlckNvbG9yOiBudW1iZXIsIGdyaWRTcXVhcmVGaWxsQ29sb3I6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBuZXdYUG9zaXRpb246IG51bWJlcixcclxuICAgICAgICAgICAgbmV3WVBvc2l0aW9uOiBudW1iZXIgPSBncmlkWVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBzcXVhcmU6IFNxdWFyZVZpZXcsIGtleTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5HcmlkU3F1YXJlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5HcmlkU3F1YXJlc1tpXSA9IFtdO1xyXG4gICAgICAgICAgICBuZXdYUG9zaXRpb24gPSBncmlkWFBvc2l0aW9uO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkrKztcclxuICAgICAgICAgICAgICAgIHNxdWFyZSA9IFNxdWFyZVZpZXcuZ2V0SW5zdGFuY2UoJ1NxdWFyZScgKyBrZXkgKyBNYXRoLnJhbmRvbSgpLCBuZXdYUG9zaXRpb24gKyBqICogc3F1YXJlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3WVBvc2l0aW9uLCBzcXVhcmVXaWR0aCwgZ3JpZEJvcmRlckNvbG9yLCBncmlkU3F1YXJlRmlsbENvbG9yLCBqLCBpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR3JpZFNxdWFyZXNbaV1bal0gPSBzcXVhcmU7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1lQb3NpdGlvbiArPSBzcXVhcmVXaWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OyBpKyspXHJcbiAgICAgICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk7IGorKylcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZCh0aGlzLkdyaWRTcXVhcmVzW2ldW2pdLmdldFVJQ29udGFpbmVyKCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcgICAjIEdyaWRTcXVhcmVzIGNyZWF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0geFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0geVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseVxyXG4gICAgICogQHBhcmFtIG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseVxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKiBAcGFyYW0gZ3JpZEJvcmRlckNvbG9yXHJcbiAgICAgKiBAcGFyYW0gcnVsZXJUZXh0Q29sb3JcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVSdWxlcih4UG9zaXRpb246IG51bWJlciwgeVBvc2l0aW9uOiBudW1iZXIsIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OiBudW1iZXIsIHNxdWFyZVdpZHRoOiBudW1iZXIsIGdyaWRCb3JkZXJDb2xvcjogbnVtYmVyLCBydWxlclRleHRDb2xvcjogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJ1bGVyVmlldzogUnVsZXJWaWV3ID0gUnVsZXJWaWV3LmdldEluc3RhbmNlKHRoaXMuUnVsZXJOYW1lICsgJycgKyBNYXRoLnJhbmRvbSgpLCB4UG9zaXRpb24sIHlQb3NpdGlvbiwgbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseSxcclxuICAgICAgICAgICAgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5LCBzcXVhcmVXaWR0aCwgZ3JpZEJvcmRlckNvbG9yLCBydWxlclRleHRDb2xvcik7XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZChydWxlclZpZXcuZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvZ3JpZC9HcmlkVmlldy50cyIsImltcG9ydCB7SGl0Vmlld30gZnJvbSBcIi4uL2hpdHMvSGl0Vmlld1wiO1xyXG5pbXBvcnQge01pc3NWaWV3fSBmcm9tIFwiLi4vaGl0cy9NaXNzVmlld1wiO1xyXG5pbXBvcnQge0JhdHRsZVNoaXBGYWNhZGUsIENvbW1hbmROb3RpZmljYXRpb25zLCBGYWNhZGVJbmZvcm1hdGlvbn0gZnJvbSBcIi4uLy4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcbmltcG9ydCB7QWJzdHJhY3RWaWV3fSBmcm9tIFwiLi4vLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Vmlld1wiO1xyXG5cclxuLyoqXHJcbiAqIFNtYWxsIHJlY3RhbmdsZSBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNxdWFyZVZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xyXG5cclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbEluZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdmVydGljYWxJbmRleDogbnVtYmVyO1xyXG4gICAgcHVibGljIGJvcmRlckNvbG9yOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZmlsbENvbG9yOiBudW1iZXI7XHJcblxyXG4gICAgLyoqQ29udGFpbnMgdGhlIHNxdWFyZSdzIGJvcmRlciAqL1xyXG4gICAgcHVibGljIHNxdWFyZUdyYXBoaWNzOiBQSVhJLkdyYXBoaWNzO1xyXG5cclxuICAgIC8qKkNvbnRhaW5zIHRoZSBtYXJraW5nIHdoaWNoIHdpbGwgYmUgZWl0aGVyIGEgaGl0IGVpdGhlciBhIG1pc3MgKi9cclxuICAgIHB1YmxpYyBzcXVhcmVNYXJraW5nOiBQSVhJLkdyYXBoaWNzO1xyXG5cclxuICAgIC8qKldpbGwgY2FsbCBhIGZ1bmN0aW9uIHdpdGhpbiB0aGUgZ3JpZCBjbGFzcyAqL1xyXG4gICAgcHVibGljIG9uQ2xpY2tIYW5kbGVyOiBGdW5jdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgc3F1YXJlRXZlbnQ6IHN0cmluZyA9ICdwb2ludGVydGFwJztcclxuXHJcbiAgICAvKipUaGUgSGl0VmlldyBhbmQgdGhlIE1pc3NWaWV3ICovXHJcbiAgICBwcml2YXRlIGhpdFZpZXc6IEhpdFZpZXc7XHJcbiAgICBwcml2YXRlIG1pc3NWaWV3OiBNaXNzVmlldztcclxuXHJcbiAgICAvKipTcXVhcmUncyBnbG93ICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNxdWFyZUdsb3c6IFBJWEkuR3JhcGhpY3M7XHJcblxyXG4gICAgLyoqU2hpcCdzIFNxdWFyZSBmaWxsIG9iamVjdCAqL1xyXG4gICAgcHVibGljIHNoaXBTcXVhcmU6IFBJWEkuR3JhcGhpY3M7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHNxdWFyZVhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKiBAcGFyYW0gYm9yZGVyQ29sb3JcclxuICAgICAqIEBwYXJhbSBmaWxsQ29sb3JcclxuICAgICAqIEBwYXJhbSBob3Jpem9udGFsSW5kZXhcclxuICAgICAqIEBwYXJhbSB2ZXJ0aWNhbEluZGV4XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCBzcXVhcmVYUG9zaXRpb246IG51bWJlciwgc3F1YXJlWVBvc2l0aW9uOiBudW1iZXIsIHNxdWFyZVdpZHRoOiBudW1iZXIsIGJvcmRlckNvbG9yOiBudW1iZXIsIGZpbGxDb2xvcjogbnVtYmVyLCBob3Jpem9udGFsSW5kZXg/OiBudW1iZXIsIHZlcnRpY2FsSW5kZXg/OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMueCA9IHNxdWFyZVhQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnkgPSBzcXVhcmVZUG9zaXRpb247XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHNxdWFyZVdpZHRoO1xyXG4gICAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvcjtcclxuICAgICAgICB0aGlzLmZpbGxDb2xvciA9IGZpbGxDb2xvcjtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxJbmRleCA9IGhvcml6b250YWxJbmRleDtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsSW5kZXggPSB2ZXJ0aWNhbEluZGV4O1xyXG5cclxuICAgICAgICB0aGlzLnNxdWFyZUdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLnNxdWFyZU1hcmtpbmcgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR2xvdyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICAgICAgdGhpcy5zaGlwU3F1YXJlID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zcXVhcmVHcmFwaGljcy5saW5lU3R5bGUoNywgdGhpcy5ib3JkZXJDb2xvciwgMSk7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHcmFwaGljcy5iZWdpbkZpbGwodGhpcy5maWxsQ29sb3IpO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR3JhcGhpY3MuZHJhd1JlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMud2lkdGgpO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR3JhcGhpY3MuZW5kRmlsbCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNxdWFyZUdsb3cubGluZVN0eWxlKDEsIDB4ZmYwMDAwLCAwLjIpO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR2xvdy5iZWdpbkZpbGwoMHhmZjAxMDAsIDAuMik7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHbG93LmRyYXdSZWN0KHRoaXMueCArIDUsIHRoaXMueSArIDUsIHRoaXMud2lkdGggLSA1LCB0aGlzLndpZHRoIC0gNSk7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHbG93LmVuZEZpbGwoKTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdsb3cudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5oaXRWaWV3ID0gSGl0Vmlldy5nZXRJbnN0YW5jZShNYXRoLnJhbmRvbSgpICsgJycsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoKTtcclxuICAgICAgICB0aGlzLmhpdFZpZXcuc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1pc3NWaWV3ID0gTWlzc1ZpZXcuZ2V0SW5zdGFuY2UoTWF0aC5yYW5kb20oKSArICcnLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCk7XHJcbiAgICAgICAgdGhpcy5taXNzVmlldy5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVNYXJraW5nLmFkZENoaWxkKHRoaXMuaGl0Vmlldy5nZXRVSUNvbnRhaW5lcigpKTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdyYXBoaWNzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdyYXBoaWNzLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnNoaXBTcXVhcmUubGluZVN0eWxlKDAsIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZUZpbGxDb2xvcik7XHJcbiAgICAgICAgdGhpcy5zaGlwU3F1YXJlLmJlZ2luRmlsbChGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVGaWxsQ29sb3IsIDAuNik7XHJcbiAgICAgICAgdGhpcy5zaGlwU3F1YXJlLmRyYXdSZWN0KHRoaXMueCArIDUsIHRoaXMueSArIDUsIHRoaXMud2lkdGggLSA1LCB0aGlzLndpZHRoIC0gNSk7XHJcbiAgICAgICAgdGhpcy5zaGlwU3F1YXJlLmVuZEZpbGwoKTtcclxuICAgICAgICB0aGlzLnNoaXBTcXVhcmUudmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFRvQ29udGFpbmVyKHRoaXMuc3F1YXJlR3JhcGhpY3MpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9Db250YWluZXIodGhpcy5zcXVhcmVNYXJraW5nKTtcclxuICAgICAgICB0aGlzLmFkZFRvQ29udGFpbmVyKHRoaXMuc3F1YXJlR2xvdyk7XHJcbiAgICAgICAgdGhpcy5hZGRUb0NvbnRhaW5lcih0aGlzLnNoaXBTcXVhcmUpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRpYWxpemVTcXVhcmVJbnRlcmFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaW5pdGlhbGl6aW5nIHRoZSBTcXVhcmUncyB2aWV3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplVmlldygpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgc3F1YXJlIHZpZXdcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBzcXVhcmVYUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVZUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVXaWR0aFxyXG4gICAgICogQHBhcmFtIGJvcmRlckNvbG9yXHJcbiAgICAgKiBAcGFyYW0gZmlsbENvbG9yXHJcbiAgICAgKiBAcGFyYW0gaG9yaXpvbnRhbEluZGV4XHJcbiAgICAgKiBAcGFyYW0gdmVydGljYWxJbmRleFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIHNxdWFyZVhQb3NpdGlvbj86IG51bWJlciwgc3F1YXJlWVBvc2l0aW9uPzogbnVtYmVyLCBzcXVhcmVXaWR0aD86IG51bWJlciwgYm9yZGVyQ29sb3I/OiBudW1iZXIsIGZpbGxDb2xvcj86IG51bWJlciwgaG9yaXpvbnRhbEluZGV4PzogbnVtYmVyLCB2ZXJ0aWNhbEluZGV4PzogbnVtYmVyKTogU3F1YXJlVmlldyB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gPSBuZXcgU3F1YXJlVmlldyhrZXksIHNxdWFyZVhQb3NpdGlvbiwgc3F1YXJlWVBvc2l0aW9uLCBzcXVhcmVXaWR0aCwgYm9yZGVyQ29sb3IsIGZpbGxDb2xvciwgaG9yaXpvbnRhbEluZGV4LCB2ZXJ0aWNhbEluZGV4KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldIGFzIFNxdWFyZVZpZXc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplU3F1YXJlSW50ZXJhY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHcmFwaGljc1xyXG4gICAgICAgICAgICAub24odGhpcy5zcXVhcmVFdmVudCwgdGhpcy5oYW5kbGVNb3VzZURvd24sIHRoaXMpXHJcbiAgICAgICAgICAgIC5vbigncG9pbnRlcm92ZXInLCB0aGlzLmhhbmRsZU1vdXNlT3ZlcilcclxuICAgICAgICAgICAgLm9uKCdwb2ludGVyb3V0JywgdGhpcy5oYW5kbGVNb3VzZU91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIGZvciB0aGlzIHNxdWFyZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5zcXVhcmVHcmFwaGljcy5nZXRCb3VuZHMoKS54LCB0aGlzLnNxdWFyZUdyYXBoaWNzLmdldEJvdW5kcygpLnldO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVNb3VzZU92ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHbG93LnZpc2libGUgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlTW91c2VPdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHbG93LnZpc2libGUgPSBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgSGFuZGxlcyB0aGUgY2xpY2tlZCBkb3duIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlTW91c2VEb3duKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGl0KCk7XHJcbiAgICAgICAgQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KS5zZW5kTm90aWZpY2F0aW9uKENvbW1hbmROb3RpZmljYXRpb25zLkNsaWNrSGFuZGxlLCBbdGhpcy52ZXJ0aWNhbEluZGV4LCB0aGlzLmhvcml6b250YWxJbmRleF0udG9TdHJpbmcoKSwgJycsIFsnTWFtYSddKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3dzIGFuIFggb24gdGhlIHNxdWFyZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oaXRWaWV3LnNldEFjdGl2ZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3dzIGEgbWlzcyBvbiB0aGUgc3F1YXJlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1pc3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5taXNzVmlldy5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaWxsIGEgc3F1YXJlIHdpdGggYSBwYXJ0IG9mIGEgQmF0dGxlU2hpcFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZmlsbFNxdWFyZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNoaXBTcXVhcmUudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlSW50ZXJhY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc2FibGUgdGhlIFNxdWFyZSdzIGludGVyYWN0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNhYmxlSW50ZXJhY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHcmFwaGljcy5pbnRlcmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR2xvdy5pbnRlcmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlTWFya2luZy5pbnRlcmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L2dyaWQvU3F1YXJlVmlldy50cyIsImltcG9ydCB7QWJzdHJhY3RWaWV3fSBmcm9tIFwiLi4vLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Vmlld1wiO1xyXG5pbXBvcnQge0ZhY2FkZUluZm9ybWF0aW9ufSBmcm9tIFwiLi4vLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuXHJcbi8qKlxyXG4gKiAgVGhlIFggaW5zaWRlIGEgc3F1YXJlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEhpdFZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xyXG5cclxuICAgIHB1YmxpYyBncmFwaGljcyA6IFBJWEkuR3JhcGhpY3M7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHNxdWFyZVhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTpzdHJpbmcsIHNxdWFyZVhQb3NpdGlvbjogbnVtYmVyLCBzcXVhcmVZUG9zaXRpb246IG51bWJlciwgc3F1YXJlV2lkdGg6IG51bWJlcikge1xyXG5cclxuICAgICAgICBzdXBlcihrZXkpO1xyXG5cclxuICAgICAgICB0aGlzLmdyYXBoaWNzPW5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lU3R5bGUoMTAsRmFjYWRlSW5mb3JtYXRpb24uSGl0Q29sb3IpO1xyXG5cclxuICAgICAgICB0aGlzLmdyYXBoaWNzLm1vdmVUbyhzcXVhcmVYUG9zaXRpb24gKyBzcXVhcmVXaWR0aC8zLCBzcXVhcmVZUG9zaXRpb24gKyBzcXVhcmVXaWR0aCAtIHNxdWFyZVdpZHRoLzMpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHNxdWFyZVhQb3NpdGlvbiArIHNxdWFyZVdpZHRoIC0gc3F1YXJlV2lkdGgvMywgc3F1YXJlWVBvc2l0aW9uICsgc3F1YXJlV2lkdGgvMyk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKHNxdWFyZVhQb3NpdGlvbiArIHNxdWFyZVdpZHRoLzMsIHNxdWFyZVlQb3NpdGlvbiArIHNxdWFyZVdpZHRoLzMpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHNxdWFyZVhQb3NpdGlvbiArIHNxdWFyZVdpZHRoIC0gc3F1YXJlV2lkdGgvMywgc3F1YXJlWVBvc2l0aW9uICsgc3F1YXJlV2lkdGggLSBzcXVhcmVXaWR0aC8zKTtcclxuICAgICAgICB0aGlzLmFkZFRvQ29udGFpbmVyKHRoaXMuZ3JhcGhpY3MpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlWFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlWVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlV2lkdGhcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGtleTogc3RyaW5nLCBzcXVhcmVYUG9zaXRpb24/OiBudW1iZXIsIHNxdWFyZVlQb3NpdGlvbj86IG51bWJlciwgc3F1YXJlV2lkdGg/OiBudW1iZXIpOiBIaXRWaWV3IHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBIaXRWaWV3KGtleSwgc3F1YXJlWFBvc2l0aW9uLCBzcXVhcmVZUG9zaXRpb24sIHNxdWFyZVdpZHRoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldIGFzIEhpdFZpZXc7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvaGl0cy9IaXRWaWV3LnRzIiwiaW1wb3J0IHtBYnN0cmFjdFZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3XCI7XHJcbmltcG9ydCB7RmFjYWRlSW5mb3JtYXRpb259IGZyb20gXCIuLi8uLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgY3JlYXRlcyB0aGUgbWlzcyBpbnNpZGUgYSBHcmlkJ3Mgc3F1YXJlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1pc3NWaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcclxuXHJcbiAgICBwdWJsaWMgZ3JhcGhpY3M6IFBJWEkuR3JhcGhpY3M7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHNxdWFyZVhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCBzcXVhcmVYUG9zaXRpb246IG51bWJlciwgc3F1YXJlWVBvc2l0aW9uOiBudW1iZXIsIHNxdWFyZVdpZHRoOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSg4LCBGYWNhZGVJbmZvcm1hdGlvbi5NaXNzQ29sb3IpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuZHJhd0NpcmNsZShzcXVhcmVYUG9zaXRpb24gKyBzcXVhcmVXaWR0aCAvIDIsIHNxdWFyZVlQb3NpdGlvbiArIHNxdWFyZVdpZHRoIC8gMiwgc3F1YXJlV2lkdGggLyAzLjkpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9Db250YWluZXIodGhpcy5ncmFwaGljcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlWFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlWVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlV2lkdGhcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGtleTogc3RyaW5nLCBzcXVhcmVYUG9zaXRpb24/OiBudW1iZXIsIHNxdWFyZVlQb3NpdGlvbj86IG51bWJlciwgc3F1YXJlV2lkdGg/OiBudW1iZXIpOiBNaXNzVmlldyB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gPSBuZXcgTWlzc1ZpZXcoa2V5LCBzcXVhcmVYUG9zaXRpb24sIHNxdWFyZVlQb3NpdGlvbiwgc3F1YXJlV2lkdGgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gYXMgTWlzc1ZpZXc7XHJcbiAgICB9XHJcblxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9oaXRzL01pc3NWaWV3LnRzIiwiaW1wb3J0IHtSdWxlclNxdWFyZX0gZnJvbSBcIi4vUnVsZXJTcXVhcmVcIjtcclxuaW1wb3J0IHtBYnN0cmFjdFZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3XCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBjcmVhdGVzIHRoZSBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBydWxlciBhcm91bmQgdGhlIGdyaWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBSdWxlclZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xyXG5cclxuICAgIHB1YmxpYyBuYW1lOnN0cmluZz0nUnVsZXInO1xyXG5cclxuICAgIHB1YmxpYyB4UG9zaXRpb246IG51bWJlcjtcclxuICAgIHB1YmxpYyB5UG9zaXRpb246IG51bWJlcjtcclxuICAgIHB1YmxpYyBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc3F1YXJlV2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBib3JkZXJDb2xvcjogbnVtYmVyO1xyXG4gICAgcHVibGljIHRleHRDb2xvcjogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgUnVsZXJUeXBlOiBBcnJheTxzdHJpbmc+ID0gWydOVU1CRVInLFxyXG4gICAgICAgICdMRVRURVInXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0geFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0geVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseVxyXG4gICAgICogQHBhcmFtIG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseVxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKiBAcGFyYW0gYm9yZGVyQ29sb3JcclxuICAgICAqIEBwYXJhbSB0ZXh0Q29sb3JcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHhQb3NpdGlvbjogbnVtYmVyLCB5UG9zaXRpb246IG51bWJlciwgbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OiBudW1iZXIsIHNxdWFyZVdpZHRoOiBudW1iZXIsIGJvcmRlckNvbG9yOiBudW1iZXIsIHRleHRDb2xvcjogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcbiAgICAgICAgdGhpcy54UG9zaXRpb24gPSB4UG9zaXRpb247XHJcbiAgICAgICAgdGhpcy55UG9zaXRpb24gPSB5UG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5ID0gbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseTtcclxuICAgICAgICB0aGlzLm51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSA9IG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseTtcclxuICAgICAgICB0aGlzLnNxdWFyZVdpZHRoID0gc3F1YXJlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yO1xyXG4gICAgICAgIHRoaXMudGV4dENvbG9yID0gdGV4dENvbG9yO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZVJ1bGVyVmVydGljYWxseSgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUnVsZXJIb3Jpem9udGFsbHkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemluZyB0aGUgUnVsZXIncyB2aWV3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplVmlldygpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplVmlldygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcgICAjIFJ1bGVyVmlldyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHlcclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHlcclxuICAgICAqIEBwYXJhbSBzcXVhcmVXaWR0aFxyXG4gICAgICogQHBhcmFtIGJvcmRlckNvbG9yXHJcbiAgICAgKiBAcGFyYW0gdGV4dENvbG9yXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShrZXk6IHN0cmluZywgeFBvc2l0aW9uPzogbnVtYmVyLCB5UG9zaXRpb24/OiBudW1iZXIsIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk/OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5PzogbnVtYmVyLCBzcXVhcmVXaWR0aD86IG51bWJlciwgYm9yZGVyQ29sb3I/OiBudW1iZXIsIHRleHRDb2xvcj86IG51bWJlcik6IFJ1bGVyVmlldyB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gPSBuZXcgUnVsZXJWaWV3KGtleSwgeFBvc2l0aW9uLCB5UG9zaXRpb24sIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHksIG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSxcclxuICAgICAgICAgICAgICAgIHNxdWFyZVdpZHRoLCBib3JkZXJDb2xvciwgdGV4dENvbG9yKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldIGFzIFJ1bGVyVmlldztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIGhvcml6b250YWwgcnVsZXIgd2hpY2ggY29udGFpbnMgbnVtYmVycyBhbmQgYmVnaW5zIHdpdGggMFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJ1bGVySG9yaXpvbnRhbGx5KCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm51bWJlck9mU3F1YXJlc0hvcml6b250YWxseTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBydWxlclNxdWFyZTogUnVsZXJTcXVhcmUgPSBSdWxlclNxdWFyZS5nZXRJbnN0YW5jZSg3MDAgKiBNYXRoLnJhbmRvbSgpICsgaSArICcnLCB0aGlzLnhQb3NpdGlvbiArIGkgKiB0aGlzLnNxdWFyZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgdGhpcy55UG9zaXRpb24gKyB0aGlzLm51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHkgKiB0aGlzLnNxdWFyZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcXVhcmVXaWR0aCwgdGhpcy5ib3JkZXJDb2xvciwgdGhpcy50ZXh0Q29sb3IsIHRoaXMuUnVsZXJUeXBlWzBdLCBpICsgMSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZChydWxlclNxdWFyZS5nZXRVSUNvbnRhaW5lcigpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSB2ZXJ0aWNhbCBydWxlciB3aGljaCBjb250YWlucyBsZXR0ZXJzIGFuZCBiZWdpbnMgd2l0aCBBXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlUnVsZXJWZXJ0aWNhbGx5KCk6IHZvaWQge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5udW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJ1bGVyU3F1YXJlOiBSdWxlclNxdWFyZSA9IFJ1bGVyU3F1YXJlLmdldEluc3RhbmNlKDMwMCAqIE1hdGgucmFuZG9tKCkgKyBpICsgJycsIHRoaXMueFBvc2l0aW9uIC0gdGhpcy5zcXVhcmVXaWR0aCwgdGhpcy55UG9zaXRpb24gKyBpICogdGhpcy5zcXVhcmVXaWR0aCxcclxuICAgICAgICAgICAgICAgIHRoaXMuc3F1YXJlV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMudGV4dENvbG9yLCB0aGlzLlJ1bGVyVHlwZVsxXSwgNjUgKyBpKTtcclxuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyLmFkZENoaWxkKHJ1bGVyU3F1YXJlLmdldFVJQ29udGFpbmVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9ydWxlci9SdWxlclZpZXcudHMiLCJpbXBvcnQge0Fic3RyYWN0Vmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFZpZXdcIjtcclxuXHJcbi8qKlxyXG4gKiBIYXMgdGhlIHJlc3BvbnNpYmlsaXR5IHRvIGNyZWF0ZSBhIHNpbmdsZSBzcXVhcmUgYW5kIGluc2lkZSBpdCB0byBwdXQgdGhlIGNvcmVzcG9uZGluZyBsZXR0ZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBSdWxlclNxdWFyZSBleHRlbmRzIEFic3RyYWN0VmlldyB7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSB4UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB5UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVXaWR0aFxyXG4gICAgICogQHBhcmFtIGJvcmRlckNvbG9yXHJcbiAgICAgKiBAcGFyYW0gdGV4dENvbG9yXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICogQHBhcmFtIGFzY2lpQ29kZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgeFBvc2l0aW9uOiBudW1iZXIsIHlQb3NpdGlvbjogbnVtYmVyLCBzcXVhcmVXaWR0aDogbnVtYmVyLCBib3JkZXJDb2xvcjogbnVtYmVyLCB0ZXh0Q29sb3I6IG51bWJlciwgdHlwZTogc3RyaW5nLCBhc2NpaUNvZGU6IG51bWJlcikge1xyXG5cclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG5cclxuICAgICAgICBsZXQgZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSg4LCBib3JkZXJDb2xvcik7XHJcbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5GaWxsKDB4ZmZmZmZmKTtcclxuICAgICAgICBncmFwaGljcy5kcmF3UmVjdCh4UG9zaXRpb24sIHlQb3NpdGlvbiwgc3F1YXJlV2lkdGgsIHNxdWFyZVdpZHRoKTtcclxuICAgICAgICBncmFwaGljcy5lbmRGaWxsKCk7XHJcblxyXG4gICAgICAgIGxldCB0ZXh0O1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnTEVUVEVSJykge1xyXG4gICAgICAgICAgICB0ZXh0ID0gbmV3IFBJWEkuVGV4dChTdHJpbmcuZnJvbUNoYXJDb2RlKGFzY2lpQ29kZSksIHtmaWxsOiB0ZXh0Q29sb3J9KTtcclxuICAgICAgICAgICAgdGV4dC5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgICAgIHRleHQucG9zaXRpb24uc2V0KHhQb3NpdGlvbiArIHNxdWFyZVdpZHRoIC8gMiwgeVBvc2l0aW9uICsgc3F1YXJlV2lkdGggLyAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ05VTUJFUicpIHtcclxuICAgICAgICAgICAgdGV4dCA9IG5ldyBQSVhJLlRleHQoYXNjaWlDb2RlLnRvU3RyaW5nKCksIHtmaWxsOiB0ZXh0Q29sb3J9KTtcclxuICAgICAgICAgICAgdGV4dC5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgICAgIHRleHQucG9zaXRpb24uc2V0KHhQb3NpdGlvbiArIHNxdWFyZVdpZHRoIC8gMiwgeVBvc2l0aW9uICsgc3F1YXJlV2lkdGggLyAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZChncmFwaGljcywgdGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgZm9yIGFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3NcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSB4UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB5UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVXaWR0aFxyXG4gICAgICogQHBhcmFtIGJvcmRlckNvbG9yXHJcbiAgICAgKiBAcGFyYW0gdGV4dENvbG9yXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICogQHBhcmFtIGFzY2lpQ29kZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIHhQb3NpdGlvbj86IG51bWJlciwgeVBvc2l0aW9uPzogbnVtYmVyLCBzcXVhcmVXaWR0aD86IG51bWJlciwgYm9yZGVyQ29sb3I/OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPzogbnVtYmVyLCB0eXBlPzogc3RyaW5nLCBhc2NpaUNvZGU/OiBudW1iZXIpOiBSdWxlclNxdWFyZSB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gPSBuZXcgUnVsZXJTcXVhcmUoa2V5LCB4UG9zaXRpb24sIHlQb3NpdGlvbiwgc3F1YXJlV2lkdGgsIGJvcmRlckNvbG9yLCB0ZXh0Q29sb3IsIHR5cGUsIGFzY2lpQ29kZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSBhcyBSdWxlclNxdWFyZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9ydWxlci9SdWxlclNxdWFyZS50cyIsImltcG9ydCB7QWJzdHJhY3RWaWV3fSBmcm9tIFwiLi4vLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Vmlld1wiO1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHRoYXQgaGFzIHRoZSByZXNwb25zaWJpbGl0eSB0byBzaG93IHRleHQgbm90aWZpY2F0aW9ucyBvbiB0aGUgc2NyZWVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVGV4dFZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xyXG5cclxuICAgIC8qKkhlcmUgd2Ugc2F2ZSB0aGUgdGV4dCBzdHJpbmcgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dDogUElYSS5UZXh0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHRleHRcclxuICAgICAqIEBwYXJhbSBmb250U2l6ZVxyXG4gICAgICogQHBhcmFtIGNvbG9yXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIGZvbnRTaXplOiBudW1iZXIsIGNvbG9yOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG5cclxuICAgICAgICB0aGlzLnRleHQgPSBuZXcgUElYSS5UZXh0KHRleHQsIHtmb250U2l6ZTogZm9udFNpemUsIGZpbGw6IGNvbG9yfSk7XHJcbiAgICAgICAgdGhpcy50ZXh0LmFuY2hvci5zZXQoMC41LCAwLjUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemluZyB0aGUgVGV4dCdzIHZpZXdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVWaWV3KCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXRpYWxpemVWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHRleHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFRleHQodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0LnRleHQgKz0gJ1xcbicgKyB0ZXh0O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHRleHRcclxuICAgICAqIEBwYXJhbSBmb250U2l6ZVxyXG4gICAgICogQHBhcmFtIGNvbG9yXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShrZXk6IHN0cmluZywgdGV4dD86IHN0cmluZywgZm9udFNpemU/OiBudW1iZXIsIGNvbG9yPzogbnVtYmVyKTogVGV4dFZpZXcge1xyXG4gICAgICAgIGlmICghcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0pXHJcbiAgICAgICAgICAgIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldID0gbmV3IFRleHRWaWV3KGtleSwgdGV4dCwgZm9udFNpemUsIGNvbG9yKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldIGFzIFRleHRWaWV3O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVJQ29udGFpbmVyKCk6IFBJWEkuQ29udGFpbmVyIHtcclxuICAgICAgICAvKnRoaXMuX2NvbnRhaW5lci5waXZvdC54ID0gdGhpcy5fY29udGFpbmVyLndpZHRoIC8gMjtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIucGl2b3QueSA9IHRoaXMuX2NvbnRhaW5lci5oZWlnaHQgLyAyOyovXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy90ZXh0L1RleHRWaWV3LnRzIiwiaW1wb3J0IHtBYnN0cmFjdFZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3XCI7XHJcblxyXG4vKipcclxuICogQSBidXR0b24gY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQnV0dG9uVmlldyBleHRlbmRzIEFic3RyYWN0VmlldyB7XHJcblxyXG4gICAgLyoqVGhlIHBvc2l0aW9ucyBhbmQgdGhlIHNjYWxlIG9mIHRoZSBidXR0b24gKi9cclxuICAgIHB1YmxpYyB4UG9zaXRpb246IG51bWJlcjtcclxuICAgIHB1YmxpYyB5UG9zaXRpb246IG51bWJlcjtcclxuICAgIHB1YmxpYyBzY2FsZTogbnVtYmVyO1xyXG5cclxuICAgIC8qKlRoZSBzcHJpdGUgdGhhdCBjb250YWlucyB0aGUgYnV0dG9uJ3MgcG5nIGltYWdlICovXHJcbiAgICBwdWJsaWMgc3ByaXRlOiBQSVhJLlNwcml0ZTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNjYWxlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCB4UG9zaXRpb246IG51bWJlciwgeVBvc2l0aW9uOiBudW1iZXIsIHNjYWxlOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgICAgICB0aGlzLnhQb3NpdGlvbiA9IHhQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnlQb3NpdGlvbiA9IHlQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gUElYSS5TcHJpdGUuZnJvbUltYWdlKCdpbWFnZXMvTmV4dFBoYXNlQnV0dG9uLnBuZycpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNjYWxlLnNldCh0aGlzLnNjYWxlKTtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQodGhpcy5zcHJpdGUpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRpYWxpemVCdXR0b25JbnRlcmFjdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBzdXBlci5yZWdpc3Rlck1lZGlhdG9yKG5ldyBCdXR0b25WaWV3TWVkaWF0b3Ioa2V5LCB0aGlzKSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCcgICAjIEJ1dHRvblZpZXcgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSB4UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB5UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzY2FsZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIHhQb3NpdGlvbj86IG51bWJlciwgeVBvc2l0aW9uPzogbnVtYmVyLCBzY2FsZT86IG51bWJlcik6IHB1cmVtdmMuVmlldyB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gPSBuZXcgQnV0dG9uVmlldyhrZXksIHhQb3NpdGlvbiwgeVBvc2l0aW9uLCBzY2FsZSk7XHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldIGFzIHB1cmVtdmMuVmlldztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemluZyB0aGUgQnV0dG9uJ3Mgdmlldy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVWaWV3KCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXRpYWxpemVWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoaXMgYnV0dG9uJ3MgY29udGFpbmVyIHdoaWNoIHdpbGwgY29udGFpbiB0aGUgYnV0dG9uJ3MgdGV4dHVyZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVJQ29udGFpbmVyKCk6IFBJWEkuQ29udGFpbmVyIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIucGl2b3QueCA9IHRoaXMuX2NvbnRhaW5lci53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnBpdm90LnkgPSB0aGlzLl9jb250YWluZXIuaGVpZ2h0IC8gMjtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0VUlDb250YWluZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlcyB0aGUgYnV0dG9uIGludGVyYWN0aXZlIHdpdGggdGhlIHBsYXllci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplQnV0dG9uSW50ZXJhY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNwcml0ZS5vbigncG9pbnRlcnRhcCcsIHRoaXMuaGFuZGxlTW91c2VEb3duKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9idXR0b24vQnV0dG9uVmlldy50cyIsImltcG9ydCB7QWJzdHJhY3RDb21tYW5kfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29tbWFuZFwiO1xyXG5pbXBvcnQge0NvbW1hbmROb3RpZmljYXRpb25zLCBGYWNhZGVJbmZvcm1hdGlvbiwgTWVkaWF0b3JOb3RpZmljYXRpb25zfSBmcm9tIFwiLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0ICdwaXhpLmpzJ1xyXG5pbXBvcnQge0dyaWRDb250cm9sbGVyfSBmcm9tIFwiLi4vY29udHJvbGxlci9HcmlkQ29udHJvbGxlclwiO1xyXG5pbXBvcnQge0JhdHRsZVNoaXBDb250cm9sbGVyfSBmcm9tIFwiLi4vY29udHJvbGxlci9CYXR0bGVTaGlwQ29udHJvbGxlclwiO1xyXG5pbXBvcnQge1BsYXllckNvbnRyb2xsZXJ9IGZyb20gXCIuLi9jb250cm9sbGVyL1BsYXllckNvbnRyb2xsZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBDb21tYW5kIHVzZWQgd2hlbiBhIGdyaWQncyBzcXVhcmUgaXMgY2xpY2tlZCBieSBhIHBsYXllci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTcXVhcmVDbGlja0NvbW1hbmQgZXh0ZW5kcyBBYnN0cmFjdENvbW1hbmQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0ZSB0aGlzIGNvbW1hbmRcclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4ZWN1dGUobm90aWZpY2F0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChub3RpZmljYXRpb24uZ2V0TmFtZSgpKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENvbW1hbmROb3RpZmljYXRpb25zLkNsaWNrSGFuZGxlOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NxdWFyZUNsaWNrIEhhbmRsZSBSZXF1ZXN0Jyk7XHJcbiAgICAgICAgICAgICAgICBzdXBlci5zZW5kTm90aWZpY2F0aW9uKE1lZGlhdG9yTm90aWZpY2F0aW9ucy5UZXN0LCAnJywgJycsIFsnV09XV1dXJ10pO1xyXG4gICAgICAgICAgICAgICAgR3JpZENvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoQmF0dGxlU2hpcENvbnRyb2xsZXIuR3JpZFBsYXllck9uZUNvbnRyb2xsZXJOYW1lKS51cGRhdGVQb3NpdGlvbihub3RpZmljYXRpb24uZ2V0Qm9keSgpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbW1hbmQvU3F1YXJlQ2xpY2tDb21tYW5kLnRzIiwiaW1wb3J0IHtBYnN0cmFjdENvbW1hbmR9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb21tYW5kXCI7XHJcbmltcG9ydCB7Q29tbWFuZE5vdGlmaWNhdGlvbnN9IGZyb20gXCIuLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5pbXBvcnQgJ3BpeGkuanMnXHJcblxyXG4vKipcclxuICogQ29tbWFuZCBjYWxsZWQgd2hlbiBhIGJ1dHRvbiBpcyBwcmVzc2VkIG9uIHRoZSBzY3JlZW4gYnkgYSBwbGF5ZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQnV0dG9uUHJlc3NDb21tYW5kIGV4dGVuZHMgQWJzdHJhY3RDb21tYW5kIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGUgdGhpcyBjb21tYW5kXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKG5vdGlmaWNhdGlvbjogcHVyZW12Yy5Ob3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKG5vdGlmaWNhdGlvbi5nZXROYW1lKCkpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ29tbWFuZE5vdGlmaWNhdGlvbnMuQnV0dG9uUHJlc3M6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQnV0dG9uUHJlc3MgSGFuZGxlIFJlcXVlc3QnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvY29tbWFuZC9CdXR0b25QcmVzc0NvbW1hbmQudHMiLCJpbXBvcnQge0JhdHRsZVNoaXBGYWNhZGUsIEZhY2FkZUluZm9ybWF0aW9ufSBmcm9tIFwiLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0ICdwaXhpLmpzJ1xyXG5pbXBvcnQge0Fic3RyYWN0TWVkaWF0b3J9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RNZWRpYXRvclwiO1xyXG5pbXBvcnQge0J1dHRvblZpZXd9IGZyb20gXCIuLi92aWV3L2J1dHRvbi9CdXR0b25WaWV3XCI7XHJcbmltcG9ydCB7QmF0dGxlU2hpcFZpZXd9IGZyb20gXCIuLi92aWV3L21haW5WaWV3L0JhdHRsZVNoaXBWaWV3XCI7XHJcblxyXG4vKipcclxuICogVGhlIGJ1dHRvbidzIG1lZGlhdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJ1dHRvblZpZXdNZWRpYXRvciBleHRlbmRzIEFic3RyYWN0TWVkaWF0b3Ige1xyXG4gICAgcHVibGljIG5hbWU6IFN0cmluZyA9ICdCdXR0b25WaWV3TWVkaWF0b3InO1xyXG4gICAgcHVibGljIGJ1dHRvblZpZXdOYW1lID0gJ0J1dHRvblZpZXcnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSB2aWV3Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCB2aWV3Q29tcG9uZW50OiBwdXJlbXZjLlZpZXcgPSBudWxsKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgdmlld0NvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIGxldCBjb250YWluZXJzTGlzdDogQXJyYXk8UElYSS5Db250YWluZXI+ID0gW107XHJcbiAgICAgICAgY29udGFpbmVyc0xpc3QucHVzaChzdXBlci5nZXRWaWV3Q29tcG9uZW50KCkuZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICAgICAgQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KS5hZGRDb250YWluZXJzVG9WaWV3KGNvbnRhaW5lcnNMaXN0LCBCYXR0bGVTaGlwVmlldy5HYW1lQnV0dG9uQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgJyArIHRoaXMubmFtZSArICcgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5vdGlmaWNhdGlvbiB0aGF0IHRoZSBCYXR0bGVTaGlwTWVkaWF0b3IgaXMgaW50ZXJlc3RlZCBpbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBUaGlzIGlzIHdoZXJlIHRoZSBub3RpZmljYXRpb25zIGFyZSBoYW5kbGVkLlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFuZGxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogcHVyZW12Yy5Ob3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICBsZXQgbmFtZTogU3RyaW5nID0gbm90aWZpY2F0aW9uLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25SZWdpc3RlcigpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L21lZGlhdG9yL0J1dHRvblZpZXdNZWRpYXRvci50cyIsImltcG9ydCAncGl4aS5qcydcclxuaW1wb3J0IHtCYXR0bGVTaGlwRmFjYWRlLCBGYWNhZGVJbmZvcm1hdGlvbiwgTWVkaWF0b3JOb3RpZmljYXRpb25zfSBmcm9tIFwiLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0IHtBYnN0cmFjdE1lZGlhdG9yfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0TWVkaWF0b3JcIjtcclxuaW1wb3J0IHtBYnN0cmFjdE5vdGlmaWNhdGlvbn0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE5vdGlmaWNhdGlvblwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBncmlkJ3MgbWVkaWF0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JpZFZpZXdNZWRpYXRvciBleHRlbmRzIEFic3RyYWN0TWVkaWF0b3Ige1xyXG5cclxuICAgIHByaXZhdGUgX3BsYXllcjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZWRpYXRvck5hbWVcclxuICAgICAqIEBwYXJhbSB2aWV3Q29tcG9uZW50XHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lZGlhdG9yTmFtZTogc3RyaW5nLCB2aWV3Q29tcG9uZW50OiBhbnksIHBsYXllcjogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobWVkaWF0b3JOYW1lLCB2aWV3Q29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIgPSBwbGF5ZXI7XHJcblxyXG4gICAgICAgIGxldCBjb250YWluZXJzTGlzdDogQXJyYXk8UElYSS5Db250YWluZXI+ID0gW107XHJcbiAgICAgICAgY29udGFpbmVyc0xpc3QucHVzaChzdXBlci5nZXRWaWV3Q29tcG9uZW50KCkuZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICAgICAgQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KS5hZGRDb250YWluZXJzVG9WaWV3KGNvbnRhaW5lcnNMaXN0LCArcGxheWVyIC0gMSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCcgICAjICcgKyBzdXBlci5nZXRNZWRpYXRvck5hbWUoKSArICcgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5vdGlmaWNhdGlvbiB0aGF0IHRoZSBHcmlkVmlld01lZGlhdG9yIGlzIGludGVyZXN0ZWQgaW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gW01lZGlhdG9yTm90aWZpY2F0aW9ucy5HcmlkU2hpcE1hcmtpbmcsXHJcbiAgICAgICAgICAgIE1lZGlhdG9yTm90aWZpY2F0aW9ucy5UZXN0XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBUaGlzIGlzIHdoZXJlIHRoZSBub3RpZmljYXRpb25zIGFyZSBoYW5kbGVkLlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFuZGxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogQWJzdHJhY3ROb3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKG5vdGlmaWNhdGlvbi5nZXROYW1lKCkpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTWVkaWF0b3JOb3RpZmljYXRpb25zLkdyaWRTaGlwTWFya2luZyA6XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnR3JpZE1hcmtpbmdOb3RpZmljYXRpb24gcmVjZWl2ZWQnKTtcclxuICAgICAgICAgICAgICAgIGxldCBhcnJheTogYW55ID0gbm90aWZpY2F0aW9uLmdldEJvZHkoKS5zcGxpdCgnLCcsIDQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0FycmF5OiBBcnJheTxudW1iZXI+ID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBvZiBhcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBqID0gK2k7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChqKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN1cGVyLmdldFZpZXdDb21wb25lbnQoKS5maWxsR3JpZFdpdGhCYXR0bGVTaGlwKG5ld0FycmF5LCBub3RpZmljYXRpb24uZ2V0VHlwZSgpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIE1lZGlhdG9yTm90aWZpY2F0aW9ucy5UZXN0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobm90aWZpY2F0aW9uLmdldEFycmF5T2ZTdHJpbmdzKCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9HcmlkVmlld01lZGlhdG9yLnRzIiwiaW1wb3J0ICdwaXhpLmpzJ1xyXG5pbXBvcnQge0JhdHRsZVNoaXBGYWNhZGUsIEZhY2FkZUluZm9ybWF0aW9uLCBNZWRpYXRvck5vdGlmaWNhdGlvbnN9IGZyb20gXCIuLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5pbXBvcnQge0Fic3RyYWN0TWVkaWF0b3J9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RNZWRpYXRvclwiO1xyXG5pbXBvcnQge0JhdHRsZVNoaXBWaWV3fSBmcm9tIFwiLi4vdmlldy9tYWluVmlldy9CYXR0bGVTaGlwVmlld1wiO1xyXG5cclxuLyoqXHJcbiAqICBUZXh0Vmlld01lZGlhdG9yXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVGV4dFZpZXdNZWRpYXRvciBleHRlbmRzIEFic3RyYWN0TWVkaWF0b3Ige1xyXG4gICAgcHVibGljIG5hbWU6IFN0cmluZyA9ICdUZXh0Vmlld01lZGlhdG9yJztcclxuICAgIHB1YmxpYyBjb3VudDogbnVtYmVyW10gPSBbMCwgMF07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lZGlhdG9yTmFtZVxyXG4gICAgICogQHBhcmFtIHZpZXdDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVkaWF0b3JOYW1lOiBzdHJpbmcsIHZpZXdDb21wb25lbnQ6IGFueSkge1xyXG4gICAgICAgIHN1cGVyKG1lZGlhdG9yTmFtZSwgdmlld0NvbXBvbmVudCk7XHJcblxyXG5cclxuICAgICAgICBsZXQgY29udGFpbmVyc0xpc3Q6IEFycmF5PFBJWEkuQ29udGFpbmVyPiA9IFtdO1xyXG4gICAgICAgIGNvbnRhaW5lcnNMaXN0LnB1c2goc3VwZXIuZ2V0Vmlld0NvbXBvbmVudCgpLmdldFVJQ29udGFpbmVyKCkpO1xyXG4gICAgICAgIEJhdHRsZVNoaXBGYWNhZGUuZ2V0SW5zdGFuY2UoRmFjYWRlSW5mb3JtYXRpb24uQmF0dGxlU2hpcEZhY2FkZUtleSkuYWRkQ29udGFpbmVyc1RvVmlldyhjb250YWluZXJzTGlzdCwgQmF0dGxlU2hpcFZpZXcuR2FtZUluZm9Db250YWluZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcgICAjICcgKyB0aGlzLm5hbWUgKyAnIGNyZWF0ZWQnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbm90aWZpY2F0aW9uIHRoYXQgdGhlIEJhdHRsZVNoaXBNZWRpYXRvciBpcyBpbnRlcmVzdGVkIGluLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtNZWRpYXRvck5vdGlmaWNhdGlvbnMuVGV4dFVwZGF0ZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHRleHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFRleHRUb1RoZVZpZXcodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIuZ2V0Vmlld0NvbXBvbmVudCgpLmFkZFRleHQodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgVGhpcyBpcyB3aGVyZSB0aGUgbm90aWZpY2F0aW9ucyBhcmUgaGFuZGxlZC5cclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGhhbmRsZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IHB1cmVtdmMuTm90aWZpY2F0aW9uKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHN3aXRjaCAobm90aWZpY2F0aW9uLmdldE5hbWUoKSkge1xyXG4gICAgICAgICAgICBjYXNlIE1lZGlhdG9yTm90aWZpY2F0aW9ucy5UZXh0VXBkYXRlOlxyXG4gICAgICAgICAgICAgICAgbGV0IGdyaWROdW1iZXI6IG51bWJlciA9ICtub3RpZmljYXRpb24uZ2V0VHlwZSgpO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChncmlkTnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJPbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvdW50WzBdIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkVGV4dFRvVGhlVmlldyhub3RpZmljYXRpb24uZ2V0Qm9keSgpICsgJyBcXG5mb3IgUGxheWVyJyArIGdyaWROdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudFswXSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEZhY2FkZUluZm9ybWF0aW9uLlBsYXllclR3bzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRbMV0gPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUZXh0VG9UaGVWaWV3KG5vdGlmaWNhdGlvbi5nZXRCb2R5KCkgKyAnIFxcbmZvciBQbGF5ZXInICsgZ3JpZE51bWJlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50WzFdKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvbWVkaWF0b3IvVGV4dFZpZXdNZWRpYXRvci50cyIsImltcG9ydCAncGl4aS5qcydcclxuaW1wb3J0IHtcclxuICAgIEJhdHRsZVNoaXBGYWNhZGUsXHJcbiAgICBDb21tYW5kTm90aWZpY2F0aW9ucyxcclxuICAgIEZhY2FkZUluZm9ybWF0aW9uLFxyXG4gICAgTWVkaWF0b3JOb3RpZmljYXRpb25zXHJcbn0gZnJvbSBcIi4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcbmltcG9ydCB7QWJzdHJhY3RNZWRpYXRvcn0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE1lZGlhdG9yXCI7XHJcbmltcG9ydCB7QmF0dGxlU2hpcFZpZXd9IGZyb20gXCIuLi92aWV3L21haW5WaWV3L0JhdHRsZVNoaXBWaWV3XCI7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCdW5kbGVTaGlwVmlld01lZGlhdG9yIGV4dGVuZHMgQWJzdHJhY3RNZWRpYXRvciB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcGxheWVyOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lZGlhdG9yTmFtZVxyXG4gICAgICogQHBhcmFtIHZpZXdDb21wb25lbnRcclxuICAgICAqIEBwYXJhbSBwbGF5ZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVkaWF0b3JOYW1lPzogc3RyaW5nLCB2aWV3Q29tcG9uZW50PzogYW55LCBwbGF5ZXI/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihtZWRpYXRvck5hbWUsIHZpZXdDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lcnNMaXN0OiBBcnJheTxQSVhJLkNvbnRhaW5lcj4gPSBbXTtcclxuICAgICAgICBjb250YWluZXJzTGlzdC5wdXNoKHN1cGVyLmdldFZpZXdDb21wb25lbnQoKS5nZXRVSUNvbnRhaW5lcigpKTtcclxuXHJcbiAgICAgICAgaWYgKHBsYXllciA9PSBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJPbmUpIHtcclxuICAgICAgICAgICAgQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KS5hZGRDb250YWluZXJzVG9WaWV3KGNvbnRhaW5lcnNMaXN0LCBCYXR0bGVTaGlwVmlldy5QbGF5ZXJPbmVTaGlwc0NvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBsYXllciA9PSBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJUd28pIHtcclxuICAgICAgICAgICAgQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KS5hZGRDb250YWluZXJzVG9WaWV3KGNvbnRhaW5lcnNMaXN0LCBCYXR0bGVTaGlwVmlldy5QbGF5ZXJUd29TaGlwc0NvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnICAgIyAnICsgc3VwZXIuZ2V0TWVkaWF0b3JOYW1lKCkgKyAnIGNyZWF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBub3RpZmljYXRpb24gdGhhdCB0aGUgQmF0dGxlU2hpcE1lZGlhdG9yIGlzIGludGVyZXN0ZWQgaW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gW01lZGlhdG9yTm90aWZpY2F0aW9ucy5TaGlwc1BsYWNlbWVudCxcclxuICAgICAgICAgICAgTWVkaWF0b3JOb3RpZmljYXRpb25zLlRlc3RdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFRoaXMgaXMgd2hlcmUgdGhlIG5vdGlmaWNhdGlvbnMgYXJlIGhhbmRsZWQuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBwdXJlbXZjLklOb3RpZmljYXRpb24pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgc3dpdGNoIChub3RpZmljYXRpb24uZ2V0TmFtZSgpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTWVkaWF0b3JOb3RpZmljYXRpb25zLlNoaXBzUGxhY2VtZW50OlxyXG4gICAgICAgICAgICAgICAgc3VwZXIuc2VuZE5vdGlmaWNhdGlvbihDb21tYW5kTm90aWZpY2F0aW9ucy5TaGlwc1BsYWNlbWVudCwgbm90aWZpY2F0aW9uLmdldEJvZHkoKSwgbm90aWZpY2F0aW9uLmdldFR5cGUoKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L21lZGlhdG9yL0J1bmRsZVNoaXBWaWV3TWVkaWF0b3IudHMiLCJpbXBvcnQge0Fic3RyYWN0Vmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFZpZXdcIjtcclxuaW1wb3J0IHtTaW5nbGVTaGlwVmlld30gZnJvbSBcIi4vU2luZ2xlU2hpcFZpZXdcIjtcclxuaW1wb3J0IHtGYWNhZGVJbmZvcm1hdGlvbn0gZnJvbSBcIi4uLy4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyB3aWxsIGNvbnRhaW4gYWxsIHRoZSBzaGlwcyBmb3Igb25lIHBsYXllci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCdW5kbGVTaGlwVmlldyBleHRlbmRzIEFic3RyYWN0VmlldyB7XHJcblxyXG4gICAgcHVibGljIGJ1bmRsZVNoaXBWaWV3TmFtZSA9ICdCdW5kbGVTaGlwVmlldyc7XHJcbiAgICBwdWJsaWMgc2hpcFZpZXcgPSBbJ1MwMCcsICdTMDEnLCAnUzAyJywgJ1MxMCcsICdTMTEnLCAnUzEyJ107XHJcbiAgICBwdWJsaWMgc2hpcHNBcnJheTogQXJyYXk8U2luZ2xlU2hpcFZpZXc+ID0gW107XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29uc3RydWN0b3JcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBwbGF5ZXJcclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNoaXBzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCBwbGF5ZXI6IHN0cmluZywgbnVtYmVyT2ZTaGlwczogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgICAgICAvKipBZGRzIHRoZSBob3Jpem9udGFsIHNoaXBzIHRvIHRoZSBidW5kbGUgKi9cclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbnVtYmVyT2ZTaGlwcyAvIDI7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaG9yaXpvbnRhbFNoaXA6IFNpbmdsZVNoaXBWaWV3ID0gU2luZ2xlU2hpcFZpZXcuZ2V0SW5zdGFuY2UodGhpcy5zaGlwVmlld1tpXSArIHBsYXllciwgMTUwLCBpICogMTAwLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZTaGlwcyAtIGkgLSAxLCBwbGF5ZXIsIEZhY2FkZUluZm9ybWF0aW9uLlNoaXBIb3Jpem9udGFsVHlwZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcHNBcnJheS5wdXNoKGhvcml6b250YWxTaGlwKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb0NvbnRhaW5lcihob3Jpem9udGFsU2hpcC5nZXRVSUNvbnRhaW5lcigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKkFkZHMgdGhlIHZlcnRpY2FsIHNoaXBzIHRvIHRoZSBidW5kbGUgKi9cclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBudW1iZXJPZlNoaXBzIC8gMjsgaSA8IG51bWJlck9mU2hpcHM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdmVydGljYWxTaGlwOiBTaW5nbGVTaGlwVmlldyA9IFNpbmdsZVNoaXBWaWV3LmdldEluc3RhbmNlKHRoaXMuc2hpcFZpZXdbaV0gKyBwbGF5ZXIsIC01MDAgKyBpICogMTAwLCAtMjAsXHJcbiAgICAgICAgICAgICAgICBpLCBwbGF5ZXIsIEZhY2FkZUluZm9ybWF0aW9uLlNoaXBWZXJ0aWNhbFR5cGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNoaXBzQXJyYXkucHVzaCh2ZXJ0aWNhbFNoaXApO1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRvQ29udGFpbmVyKHZlcnRpY2FsU2hpcC5nZXRVSUNvbnRhaW5lcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMnICsgdGhpcy5idW5kbGVTaGlwVmlld05hbWUgKyBwbGF5ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBwbGF5ZXJcclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNoaXBzXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShrZXk6IHN0cmluZywgcGxheWVyPzogc3RyaW5nLCBudW1iZXJPZlNoaXBzPzogbnVtYmVyKTogQnVuZGxlU2hpcFZpZXcge1xyXG4gICAgICAgIGlmICghcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0pXHJcbiAgICAgICAgICAgIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldID0gbmV3IEJ1bmRsZVNoaXBWaWV3KGtleSwgcGxheWVyLCBudW1iZXJPZlNoaXBzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldIGFzIEJ1bmRsZVNoaXBWaWV3O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVWaWV3KCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXRpYWxpemVWaWV3KCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvc2hpcHMvQnVuZGxlU2hpcFZpZXcudHMiLCJpbXBvcnQge0JhdHRsZVNoaXBGYWNhZGUsIEZhY2FkZUluZm9ybWF0aW9uLCBNZWRpYXRvck5vdGlmaWNhdGlvbnN9IGZyb20gXCIuLi8uLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5pbXBvcnQge0Fic3RyYWN0Vmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFZpZXdcIjtcclxuaW1wb3J0ICdwaXhpLmpzJztcclxuXHJcblxyXG4vKipcclxuICogIENsYXNzIHRoYXQgcmVwcmVzZW50cyBhIHNpbmdsZSBTaGlwLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNpbmdsZVNoaXBWaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcclxuXHJcbiAgICBwdWJsaWMgeFBvc2l0aW9uOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeVBvc2l0aW9uOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc2hpcEdyYXBoaWNzOiBQSVhJLkdyYXBoaWNzO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBudW1iZXJPZlNxdWFyZXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBwbGF5ZXI6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSB4UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB5UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNcclxuICAgICAqIEBwYXJhbSBwbGF5ZXJcclxuICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCB4UG9zaXRpb246IG51bWJlciwgeVBvc2l0aW9uOiBudW1iZXIsIG51bWJlck9mU3F1YXJlczogbnVtYmVyLCBwbGF5ZXI6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBrZXk7XHJcbiAgICAgICAgdGhpcy54UG9zaXRpb24gPSB4UG9zaXRpb247XHJcbiAgICAgICAgdGhpcy55UG9zaXRpb24gPSB5UG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZTcXVhcmVzID0gbnVtYmVyT2ZTcXVhcmVzO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cclxuICAgICAgICBpZiAocGxheWVyID09PSBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJPbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3MubGluZVN0eWxlKDYsIEZhY2FkZUluZm9ybWF0aW9uLlBsYXllck9uZVNoaXBCb3JkZXJDb2xvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcEdyYXBoaWNzLmJlZ2luRmlsbChGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJPbmVTaGlwRmlsbENvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGxheWVyID09PSBGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJUd28pIHtcclxuICAgICAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3MubGluZVN0eWxlKDYsIEZhY2FkZUluZm9ybWF0aW9uLlBsYXllclR3b1NoaXBCb3JkZXJDb2xvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcEdyYXBoaWNzLmJlZ2luRmlsbChGYWNhZGVJbmZvcm1hdGlvbi5QbGF5ZXJUd29TaGlwRmlsbENvbG9yKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBGYWNhZGVJbmZvcm1hdGlvbi5TaGlwSG9yaXpvbnRhbFR5cGU6XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5udW1iZXJPZlNxdWFyZXM7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBHcmFwaGljcy5kcmF3UmVjdCh0aGlzLnhQb3NpdGlvbiArIGkgKiBGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVXaWR0aCwgdGhpcy55UG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZVdpZHRoIC0gMywgRmFjYWRlSW5mb3JtYXRpb24uU3F1YXJlV2lkdGggLSAzLCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGYWNhZGVJbmZvcm1hdGlvbi5TaGlwVmVydGljYWxUeXBlOlxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZTcXVhcmVzOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3MuZHJhd1JlY3QodGhpcy54UG9zaXRpb24sIHRoaXMueVBvc2l0aW9uICsgaSAqIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVXaWR0aCAtIDMsIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZVdpZHRoIC0gMywpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hpcEdyYXBoaWNzLmVuZEZpbGwoKTtcclxuICAgICAgICB0aGlzLnNoaXBHcmFwaGljcy5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3MuYnV0dG9uTW9kZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2hpcEdyYXBoaWNzXHJcbiAgICAgICAgICAgIC5vbigncG9pbnRlcmRvd24nLCBvbkRyYWdTdGFydClcclxuICAgICAgICAgICAgLm9uKCdwb2ludGVydXAnLCBvbkRyYWdFbmQpXHJcbiAgICAgICAgICAgIC5vbigncG9pbnRlcnVwb3V0c2lkZScsIG9uRHJhZ0VuZClcclxuICAgICAgICAgICAgLm9uKCdwb2ludGVybW92ZScsIG9uRHJhZ01vdmUpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXaGVuIHRoZSBwbGF5ZXIgc3RhcnRzIHRvIGRyYWcgdGhlIHNoaXAuXHJcbiAgICAgICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gb25EcmFnU3RhcnQoZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gZXZlbnQuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIC8vc3RvcmUgdGhpcyB2YXJpYWJsZSBmb3IgY29udmVuaWVuY2VcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5wYXJlbnQpO1xyXG5cclxuICAgICAgICAgICAgLy9QcmludCB0aGUgcG9zaXRpb25cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgdGhlIHBpdm90IHBvaW50IHRvIHRoZSBuZXcgcG9zaXRpb25cclxuICAgICAgICAgICAgdGhpcy5waXZvdC5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIG5ldyBwb3NpdGlvbiBvZiB0aGUgc3ByaXRlIHRvIHRoZSBwb3NpdGlvbiBvYnRhaW5lZCB0aHJvdWdoXHJcbiAgICAgICAgICAgIC8vIHRoZSBnbG9iYWwgZGF0YS4gVGhpcyBlbnN1cmVzIHRoZSBwb3NpdGlvbiBsaW5lcyB1cCB3aXRoIHRoZSBsb2NhdGlvbiBvZlxyXG4gICAgICAgICAgICAvLyB0aGUgbW91c2Ugb24gdGhlIHNjcmVlbi4gSSdtIG5vdCBjZXJ0YWluIHdoeSwgYnV0IHRoaXMgaXMgbmVjZXNzYXJ5LlxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh0aGlzLmRhdGEueCwgdGhpcy5kYXRhLnkpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZWRvd24gPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdoZW4gdGhlIHBsYXllciBpcyBkcmFnZ2luZyB0aGUgc2hpcC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBvbkRyYWdNb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnZ2luZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbHBoYSA9IDAuNTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHRoaXMuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMucGFyZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IG5ld1Bvc2l0aW9uLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBuZXdQb3NpdGlvbi55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXaGVuIHRoZSBwbGF5ZXIgc3RvcHMgZHJhZ2dpbmcgdGhlIHNoaXAuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gb25EcmFnRW5kKCk6IHZvaWQge1xyXG5cclxuICAgICAgICAgICAgLy9TaG93IHRoZSBlbmQgcG9zaXRpb25cclxuXHJcbiAgICAgICAgICAgIGxldCBzaGlwVHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBpZiAodGhpcy53aWR0aCA+IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBzaGlwVHlwZSA9IEZhY2FkZUluZm9ybWF0aW9uLlNoaXBIb3Jpem9udGFsVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLndpZHRoIDwgdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHNoaXBUeXBlID0gRmFjYWRlSW5mb3JtYXRpb24uU2hpcFZlcnRpY2FsVHlwZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gdGhpcy5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5wYXJlbnQucGFyZW50LnBhcmVudCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYm9keTogbnVtYmVyW10gPSBbdGhpcy5nZXRCb3VuZHMoKS54LCB0aGlzLmdldEJvdW5kcygpLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XTtcclxuICAgICAgICAgICAgbGV0IG5vdGlmaWNhdGlvblR5cGU6IHN0cmluZyA9IHNoaXBUeXBlO1xyXG4gICAgICAgICAgICBsZXQgYm9keVN0cjogc3RyaW5nID0gYm9keS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgICAgQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KVxyXG4gICAgICAgICAgICAgICAgLnNlbmROb3RpZmljYXRpb24oTWVkaWF0b3JOb3RpZmljYXRpb25zLlNoaXBzUGxhY2VtZW50LCBib2R5U3RyLCBub3RpZmljYXRpb25UeXBlKTtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFscGhhID0gMTtcclxuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIHNldCB0aGUgaW50ZXJhY3Rpb24gZGF0YSB0byBudWxsXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgU2luZ2xlU2hpcFZpZXcgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6aW5nIHRoZSBTaGlwJ3Mgdmlld1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZVZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZVZpZXcoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIG51bWJlck9mU3F1YXJlc1xyXG4gICAgICogQHBhcmFtIHBsYXllclxyXG4gICAgICogQHBhcmFtIHR5cGVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGtleTogc3RyaW5nLCB4UG9zaXRpb24/OiBudW1iZXIsIHlQb3NpdGlvbj86IG51bWJlciwgbnVtYmVyT2ZTcXVhcmVzPzogbnVtYmVyLCBwbGF5ZXI/OiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcpOiBTaW5nbGVTaGlwVmlldyB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gPSBuZXcgU2luZ2xlU2hpcFZpZXcoa2V5LCB4UG9zaXRpb24sIHlQb3NpdGlvbiwgbnVtYmVyT2ZTcXVhcmVzLCBwbGF5ZXIsIHR5cGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gYXMgU2luZ2xlU2hpcFZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgZm9yIHRoZSBTaW5nbGVTaGlwVmlldydzIENvbnRhaW5lclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VUlDb250YWluZXIoKTogUElYSS5Db250YWluZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBHcmFwaGljcztcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvc2hpcHMvU2luZ2xlU2hpcFZpZXcudHMiLCJpbXBvcnQge0Fic3RyYWN0Q29tbWFuZH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdENvbW1hbmRcIjtcclxuaW1wb3J0IHtDb21tYW5kTm90aWZpY2F0aW9ucywgTWVkaWF0b3JOb3RpZmljYXRpb25zfSBmcm9tIFwiLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0ICdwaXhpLmpzJ1xyXG5pbXBvcnQge1BsYXllckNvbnRyb2xsZXJ9IGZyb20gXCIuLi9jb250cm9sbGVyL1BsYXllckNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtCYXR0bGVTaGlwQ29udHJvbGxlcn0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvQmF0dGxlU2hpcENvbnRyb2xsZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBDb21tYW5kIGNhbGxlZCB3aGVuIGEgc2hpcCBpcyBwbGFjZWQgb24gdGhlIHNjcmVlbiBieSBhIHBsYXllclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNoaXBQbGFjZUNvbW1hbmQgZXh0ZW5kcyBBYnN0cmFjdENvbW1hbmQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0ZSB0aGlzIGNvbW1hbmRcclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4ZWN1dGUobm90aWZpY2F0aW9uOiBwdXJlbXZjLklOb3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICBzd2l0Y2ggKG5vdGlmaWNhdGlvbi5nZXROYW1lKCkpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQ29tbWFuZE5vdGlmaWNhdGlvbnMuU2hpcHNQbGFjZW1lbnQ6XHJcblxyXG4gICAgICAgICAgICAgICAgUGxheWVyQ29udHJvbGxlci5nZXRJbnN0YW5jZShCYXR0bGVTaGlwQ29udHJvbGxlci5QbGF5ZXJPbmVDb250cm9sbGVyTmFtZSkudXBkYXRlTnVtYmVyT2ZTaGlwc1BsYWNlZCgpO1xyXG4gICAgICAgICAgICAgICAgc3VwZXIuc2VuZE5vdGlmaWNhdGlvbihNZWRpYXRvck5vdGlmaWNhdGlvbnMuR3JpZFNoaXBNYXJraW5nLCBub3RpZmljYXRpb24uZ2V0Qm9keSgpLCBub3RpZmljYXRpb24uZ2V0VHlwZSgpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvY29tbWFuZC9TaGlwUGxhY2VDb21tYW5kLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==