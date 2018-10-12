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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameSettings = (function () {
    function GameSettings() {
    }
    GameSettings.Grid1XPosition = 100;
    GameSettings.Grid1YPosition = 100;
    GameSettings.Grid1BorderColor = 0x0000ff;
    GameSettings.Grid2XPosition = 100;
    GameSettings.Grid2YPosition = 100;
    GameSettings.Grid2BorderColor = 0xff0000;
    GameSettings.GridScale = 0.5;
    GameSettings.GridSquareFillColor = 0x000000;
    GameSettings.RulerTextColor = 0x000000;
    GameSettings.HitColor = 0x00ff00;
    GameSettings.MissColor = 0xff3300;
    GameSettings.SquareFillColor = 0x7a827b;
    GameSettings.SquareWidth = 75;
    GameSettings.NumberOfSquaresVertically = 12;
    GameSettings.NumberOfSquaresHorizontally = 12;
    GameSettings.TextViewText = 'Game status : \nShips placement';
    GameSettings.TextViewColor = 0x42d1f4;
    GameSettings.FontSize = 38;
    GameSettings.PlayerOneShipFillColor = 0x0000f0;
    GameSettings.PlayerOneShipBorderColor = 0xfff000;
    GameSettings.PlayerTwoShipFillColor = 0xfa0000;
    GameSettings.PlayerTwoShipBorderColor = 0xfff000;
    GameSettings.PlayerOneNumberOfShips = 6;
    GameSettings.PlayerTwoNumberOfShips = 6;
    GameSettings.PlayerOne = '1';
    GameSettings.PlayerTwo = '2';
    GameSettings.BattleShipFacadeKey = 'BattleShip';
    GameSettings.ShipVerticalType = 'Vertical';
    GameSettings.ShipHorizontalType = 'Horizontal';
    GameSettings.MaximumNumberOfShipsOnAGrid = 3;
    return GameSettings;
}());
exports.GameSettings = GameSettings;


/***/ }),
/* 1 */
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
var ControllerManager_1 = __webpack_require__(10);
var ViewManager_1 = __webpack_require__(7);
var AbstractFacade_1 = __webpack_require__(9);
__webpack_require__(2);
var GridView_1 = __webpack_require__(17);
var TextView_1 = __webpack_require__(23);
var SquareClickHandleCommand_1 = __webpack_require__(24);
var GridViewMediator_1 = __webpack_require__(25);
var TextViewMediator_1 = __webpack_require__(26);
var PlayerShipsViewMediator_1 = __webpack_require__(27);
var PlayerShipsView_1 = __webpack_require__(28);
var ShipPlaceCommand_1 = __webpack_require__(31);
var CheckIfPlayerFinishedPlacingTheShipsCommand_1 = __webpack_require__(32);
var StartGamePlayCommand_1 = __webpack_require__(33);
var HideTheShipsCommand_1 = __webpack_require__(34);
var UpdateShipPositionCommand_1 = __webpack_require__(35);
var ModelManager_1 = __webpack_require__(36);
var CommandInformation_1 = __webpack_require__(6);
var StartUpCommand_1 = __webpack_require__(38);
var CreateGridCommand_1 = __webpack_require__(39);
var LogGridSquaresCommand_1 = __webpack_require__(42);
var GridProxy_1 = __webpack_require__(43);
var PlayerProxy_1 = __webpack_require__(44);
var Player_1 = __webpack_require__(45);
var MediatorInformation_1 = __webpack_require__(3);
var GameSettings_1 = __webpack_require__(0);
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
        if (!this.model)
            this.model = ModelManager_1.ModelManager.getInstance(this.multitonKey);
        this.registerProxy(new GridProxy_1.GridProxy(BattleShipFacade.GridProxy));
        this.registerProxy(new PlayerProxy_1.PlayerProxy(BattleShipFacade.PlayerProxy));
        this.retrieveProxy(BattleShipFacade.PlayerProxy)
            .setData([new Player_1.Player(GameSettings_1.GameSettings.PlayerOne), new Player_1.Player(GameSettings_1.GameSettings.PlayerTwo)]);
    };
    BattleShipFacade.prototype.initializeView = function () {
        var _this = this;
        if (!this.view)
            this.view = ViewManager_1.ViewManager.getInstance(this.multitonKey);
        this.registerMediator(new GridViewMediator_1.GridViewMediator(MediatorInformation_1.MediatorInformation.GridViewMediator[0], new GridView_1.GridView(GameSettings_1.GameSettings.PlayerOne), GameSettings_1.GameSettings.PlayerOne));
        this.registerMediator(new GridViewMediator_1.GridViewMediator(MediatorInformation_1.MediatorInformation.GridViewMediator[1], new GridView_1.GridView(GameSettings_1.GameSettings.PlayerTwo), GameSettings_1.GameSettings.PlayerTwo));
        this.registerMediator(new TextViewMediator_1.TextViewMediator(MediatorInformation_1.MediatorInformation.TextViewMediator, new TextView_1.TextView(GameSettings_1.GameSettings.TextViewText, GameSettings_1.GameSettings.FontSize, GameSettings_1.GameSettings.TextViewColor)));
        this.registerMediator(new PlayerShipsViewMediator_1.PlayerShipsViewMediator(MediatorInformation_1.MediatorInformation.PlayerShipViewMediator[0], new PlayerShipsView_1.PlayerShipsView(GameSettings_1.GameSettings.PlayerOne, GameSettings_1.GameSettings.PlayerOneNumberOfShips), GameSettings_1.GameSettings.PlayerOne));
        this.registerMediator(new PlayerShipsViewMediator_1.PlayerShipsViewMediator(MediatorInformation_1.MediatorInformation.PlayerShipViewMediator[1], new PlayerShipsView_1.PlayerShipsView(GameSettings_1.GameSettings.PlayerTwo, GameSettings_1.GameSettings.PlayerTwoNumberOfShips), GameSettings_1.GameSettings.PlayerTwo));
        var count = 0;
        this.app.ticker.add(function () {
            count += 0.1;
            var text = _super.prototype.retrieveMediator.call(_this, MediatorInformation_1.MediatorInformation.TextViewMediator).getViewComponent().getText();
            text.scale.set(1 + Math.sin(count) * 0.05);
        });
    };
    BattleShipFacade.prototype.initializeController = function () {
        if (!this.controller)
            this.controller = ControllerManager_1.ControllerManager.getInstance(this.multitonKey);
        this.registerCommand(CommandInformation_1.CommandInformation.ShipPositionInfoCommand, UpdateShipPositionCommand_1.UpdateShipPositionCommand);
        this.registerCommand(CommandInformation_1.CommandInformation.PlayerFinishedPlacingTheShipsCommand, CheckIfPlayerFinishedPlacingTheShipsCommand_1.CheckIfPlayerFinishedPlacingTheShipsCommand);
        this.registerCommand(CommandInformation_1.CommandInformation.StartGamePlayCommand, StartGamePlayCommand_1.StartGamePlayCommand);
        this.registerCommand(CommandInformation_1.CommandInformation.HideTheShipCommand, HideTheShipsCommand_1.HideTheShipsCommand);
        this.registerCommand(CommandInformation_1.CommandInformation.ShipsPlacement, ShipPlaceCommand_1.ShipPlaceCommand);
        this.registerCommand(CommandInformation_1.CommandInformation.StartGameCommand, StartUpCommand_1.StartUpCommand);
        this.registerCommand(CommandInformation_1.CommandInformation.CreateGridCommand, CreateGridCommand_1.CreateGridCommand);
        this.registerCommand(CommandInformation_1.CommandInformation.SquareClickHandleCommand, SquareClickHandleCommand_1.SquareClickHandleCommand);
        this.registerCommand(CommandInformation_1.CommandInformation.LogGridSquares, LogGridSquaresCommand_1.LogGridSquaresCommand);
    };
    BattleShipFacade.prototype.initializeFacade = function () {
        if (this.multitonKey == undefined)
            return;
        this.createPixiApplication();
        this.checkStartOrientation();
        this.changeOrientation();
        this.initializeModel();
        this.initializeController();
        this.initializeView();
        this.sendNotification(CommandInformation_1.CommandInformation.StartGameCommand, undefined);
        console.log('BattleShipFacade created');
    };
    BattleShipFacade.prototype.addContainersToView = function (containersList, type) {
        for (var _i = 0, containersList_1 = containersList; _i < containersList_1.length; _i++) {
            var item = containersList_1[_i];
            if (type === ViewManager_1.ViewManager.PlayerOneGridContainer) {
                this.GameBoardContainerOne.addChild(item);
            }
            else if (type === ViewManager_1.ViewManager.PlayerTwoGridContainer) {
                this.GameBoardContainerTwo.addChild(item);
            }
            else if (type === ViewManager_1.ViewManager.GameInfoContainer) {
                this.GameInfoContainer.addChild(item);
            }
            else if (type === ViewManager_1.ViewManager.GameButtonContainer) {
                this.GameButtonContainer.addChild(item);
            }
            else if (type === ViewManager_1.ViewManager.PlayerOneShipsContainer) {
                this.ShipsContainerOne.addChild(item);
            }
            else if (type === ViewManager_1.ViewManager.PlayerTwoShipsContainer) {
                this.ShipsContainerTwo.addChild(item);
            }
        }
    };
    BattleShipFacade.prototype.createPixiApplication = function () {
        this.app = new PIXI.Application(window.innerWidth, window.innerHeight, { backgroundColor: 0x000000 });
        document.body.appendChild(this.app.view);
        this.GameBoardContainerOne = new PIXI.Container;
        this.GameBoardContainerTwo = new PIXI.Container;
        this.GameInfoContainer = new PIXI.Container;
        this.GameButtonContainer = new PIXI.Container;
        this.ShipsContainerOne = new PIXI.Container;
        this.ShipsContainerTwo = new PIXI.Container;
        this.app.stage.addChild(this.GameBoardContainerOne, this.GameBoardContainerTwo, this.GameInfoContainer, this.GameButtonContainer, this.ShipsContainerOne, this.ShipsContainerTwo);
    };
    BattleShipFacade.prototype.notifyObservers = function (mNotification) {
        if (this.view)
            this.view.notifyObservers(mNotification);
    };
    BattleShipFacade.prototype.checkStartOrientation = function () {
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
        var width = this.app.view.width;
        var height = this.app.view.height;
        this.checkOrientation(width, height);
    };
    BattleShipFacade.prototype.changeOrientation = function () {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.app.renderer.resize(window.innerWidth, window.innerHeight);
            var width = window.innerWidth;
            var height = window.innerHeight;
            console.log('Orientation : ' + window.orientation);
            _this.checkOrientation(width, height);
        });
    };
    BattleShipFacade.prototype.checkOrientation = function (width, height) {
        switch (window.orientation) {
            case 90:
                this.GameBoardContainerOne.position.set(width / 6, height / 2);
                this.GameBoardContainerOne.scale.set(GameSettings_1.GameSettings.GridScale);
                this.GameBoardContainerTwo.position.set(3 * width / 6, height / 2);
                this.GameBoardContainerTwo.scale.set(GameSettings_1.GameSettings.GridScale);
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
                this.GameBoardContainerOne.scale.set(GameSettings_1.GameSettings.GridScale);
                this.GameBoardContainerTwo.position.set(3 * width / 6, height / 2);
                this.GameBoardContainerTwo.scale.set(GameSettings_1.GameSettings.GridScale);
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
    BattleShipFacade.PlayerProxy = 'PlayerProxy';
    BattleShipFacade.GridProxy = 'GridPRoxy1';
    return BattleShipFacade;
}(AbstractFacade_1.AbstractFacade));
exports.BattleShipFacade = BattleShipFacade;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MediatorInformation = (function () {
    function MediatorInformation() {
    }
    MediatorInformation.GridViewMediator = ['GridOneMediator', 'GridTwoMediator'];
    MediatorInformation.ButtonViewMediator = 'ButtonViewMediator';
    MediatorInformation.PlayerShipViewMediator = ['ShipPlayerOneMediator', 'ShipPlayerTwoMediator'];
    MediatorInformation.TextViewMediator = 'TextViewMediator';
    MediatorInformation.ShipsPlacement = 'Ships_Placement';
    MediatorInformation.GridShipMarking = 'GridMarking';
    MediatorInformation.TextUpdate = 'TextUpdate';
    MediatorInformation.SquareClickRequest = 'SquareClickR';
    MediatorInformation.ShipPositionInfo = 'ShipPosition';
    MediatorInformation.HideTheShips = 'HideThoseDamnShips';
    MediatorInformation.PlayerHitAShip = 'PlayerHitAShip';
    MediatorInformation.PlayerMissed = 'PlayerMissed';
    MediatorInformation.MaximumNumberOfShipReached = 'Max Number Of Ships to Place Reached';
    return MediatorInformation;
}());
exports.MediatorInformation = MediatorInformation;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AbstractSimpleView = (function () {
    function AbstractSimpleView() {
        this.initializeView();
    }
    AbstractSimpleView.prototype.initializeView = function () {
        this._container = new PIXI.Container();
    };
    AbstractSimpleView.prototype.setActive = function (active) {
        for (var _i = 0, _a = this._container.children; _i < _a.length; _i++) {
            var item = _a[_i];
            item.visible = active;
            item.interactive = active;
        }
        this._active = active;
    };
    AbstractSimpleView.prototype.getUIContainer = function () {
        return this._container;
    };
    AbstractSimpleView.prototype.addToContainer = function (item) {
        this._container.addChild(item);
    };
    return AbstractSimpleView;
}());
exports.AbstractSimpleView = AbstractSimpleView;


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
__webpack_require__(2);
var AbstractFacade_1 = __webpack_require__(9);
var AbstractCommand = (function (_super) {
    __extends(AbstractCommand, _super);
    function AbstractCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractCommand.prototype.execute = function (notification) {
        _super.prototype.execute.call(this, notification);
    };
    AbstractCommand.prototype.initializeNotifier = function (key) {
        _super.prototype.initializeNotifier.call(this, key);
    };
    AbstractCommand.prototype.sendNotification = function (name, body, type) {
        var facade = AbstractFacade_1.AbstractFacade.getInstance(this.multitonKey);
        facade.sendNotification(name, body, type);
    };
    ;
    return AbstractCommand;
}(puremvc.SimpleCommand));
exports.AbstractCommand = AbstractCommand;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CommandInformation = (function () {
    function CommandInformation() {
    }
    CommandInformation.StartGameCommand = 'StartGameCommand';
    CommandInformation.CreateGridCommand = 'CreateGrid';
    CommandInformation.LogGridSquares = 'LogGridSquares';
    CommandInformation.SquareClickHandleCommand = 'SquareClickHandleCommandPP';
    CommandInformation.ShipsPlacement = 'SHIPS_PLACEMENT_COMMAND';
    CommandInformation.ShipPositionInfoCommand = 'ShipPositionCommand';
    CommandInformation.PlayerFinishedPlacingTheShipsCommand = 'PlayerFBTS';
    CommandInformation.StartGamePlayCommand = 'StartGamePlay';
    CommandInformation.HideTheShipCommand = 'HideTheShipCommand';
    return CommandInformation;
}());
exports.CommandInformation = CommandInformation;


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
var ViewManagerMediator_1 = __webpack_require__(14);
__webpack_require__(2);
var AbstractViewManager_1 = __webpack_require__(16);
var ViewManager = (function (_super) {
    __extends(ViewManager, _super);
    function ViewManager(key) {
        var _this = _super.call(this, key) || this;
        _this.multitonKey = key;
        _super.prototype.registerMediator.call(_this, new ViewManagerMediator_1.ViewManagerMediator(key, _this));
        return _this;
    }
    ViewManager.getInstance = function (key) {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new ViewManager(key);
        return puremvc.View.instanceMap[key];
    };
    ViewManager.prototype.initializeView = function () {
        _super.prototype.initializeView.call(this);
        console.log('ViewManager created');
    };
    ViewManager.PlayerOneGridContainer = 0;
    ViewManager.PlayerTwoGridContainer = 1;
    ViewManager.GameInfoContainer = 3;
    ViewManager.GameButtonContainer = 4;
    ViewManager.PlayerOneShipsContainer = 5;
    ViewManager.PlayerTwoShipsContainer = 6;
    ViewManager.GamePlayStateText = 'GamePlay State';
    return ViewManager;
}(AbstractViewManager_1.AbstractViewManager));
exports.ViewManager = ViewManager;


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
    AbstractMediator.prototype.sendNotification = function (name, body, type) {
        var facade = AbstractFacade_1.AbstractFacade.getInstance(this.multitonKey);
        facade.sendNotification(name, body, type);
    };
    return AbstractMediator;
}(puremvc.Mediator));
exports.AbstractMediator = AbstractMediator;


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
var AbstractNotification_1 = __webpack_require__(15);
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
    AbstractFacade.prototype.sendNotification = function (name, body, type) {
        this.notifyObservers(new AbstractNotification_1.AbstractNotification(name, body, type));
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
var AbstractController_1 = __webpack_require__(13);
var ControllerManager = (function (_super) {
    __extends(ControllerManager, _super);
    function ControllerManager(key) {
        var _this = _super.call(this, key) || this;
        console.log('ControllerManager created');
        return _this;
    }
    ControllerManager.getInstance = function (key) {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new ControllerManager(key);
        return puremvc.Controller.instanceMap[key];
    };
    ControllerManager.HitText = 'Hit';
    ControllerManager.MissText = 'Miss';
    ControllerManager.DefaultStateText = 'Non';
    ControllerManager.ShipOnSquare = 'Shp';
    return ControllerManager;
}(AbstractController_1.AbstractController));
exports.ControllerManager = ControllerManager;


/***/ }),
/* 11 */
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
var AbstractProxy = (function (_super) {
    __extends(AbstractProxy, _super);
    function AbstractProxy(proxyName, data) {
        return _super.call(this, proxyName, data) || this;
    }
    AbstractProxy.prototype.getProxyName = function () {
        return _super.prototype.getProxyName.call(this);
    };
    AbstractProxy.prototype.setData = function (data) {
        _super.prototype.setData.call(this, data);
    };
    AbstractProxy.prototype.getData = function () {
        _super.prototype.getData.call(this);
    };
    AbstractProxy.prototype.onRegister = function () {
        _super.prototype.onRegister.call(this);
    };
    AbstractProxy.prototype.onRemove = function () {
    };
    return AbstractProxy;
}(puremvc.Proxy));
exports.AbstractProxy = AbstractProxy;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BattleShipFacade_1 = __webpack_require__(1);
var GameSettings_1 = __webpack_require__(0);
new (function () {
    function Main() {
        this.myFacade = BattleShipFacade_1.BattleShipFacade.getInstance(GameSettings_1.GameSettings.BattleShipFacadeKey);
    }
    ;
    return Main;
}());


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
var AbstractController = (function (_super) {
    __extends(AbstractController, _super);
    function AbstractController(key) {
        var _this = _super.call(this, key) || this;
        _this.name = 'Controller';
        _this.multitonkey = key;
        return _this;
    }
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
    return AbstractController;
}(puremvc.Controller));
exports.AbstractController = AbstractController;


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
__webpack_require__(2);
var AbstractMediator_1 = __webpack_require__(8);
var ViewManagerMediator = (function (_super) {
    __extends(ViewManagerMediator, _super);
    function ViewManagerMediator(mediatorName, viewComponent) {
        var _this = _super.call(this, mediatorName, viewComponent) || this;
        console.log('   # ' + _this.getMediatorName() + ' created');
        return _this;
    }
    ViewManagerMediator.prototype.listNotificationInterests = function () {
        return [];
    };
    return ViewManagerMediator;
}(AbstractMediator_1.AbstractMediator));
exports.ViewManagerMediator = ViewManagerMediator;


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
var AbstractNotification = (function (_super) {
    __extends(AbstractNotification, _super);
    function AbstractNotification(name, body, type) {
        return _super.call(this, name, body, type) || this;
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
    return AbstractNotification;
}(puremvc.Notification));
exports.AbstractNotification = AbstractNotification;


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
var AbstractViewManager = (function (_super) {
    __extends(AbstractViewManager, _super);
    function AbstractViewManager(key) {
        var _this = _super.call(this, key) || this;
        _this._multitonKey = key;
        return _this;
    }
    AbstractViewManager.prototype.registerMediator = function (mediator) {
        _super.prototype.registerMediator.call(this, mediator);
    };
    AbstractViewManager.prototype.hasMediator = function (mediatorName) {
        return _super.prototype.hasMediator.call(this, mediatorName);
    };
    return AbstractViewManager;
}(puremvc.View));
exports.AbstractViewManager = AbstractViewManager;


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
var AbstractSimpleView_1 = __webpack_require__(4);
var SquareView_1 = __webpack_require__(18);
var BattleShipFacade_1 = __webpack_require__(1);
var RulerView_1 = __webpack_require__(21);
__webpack_require__(2);
var CommandInformation_1 = __webpack_require__(6);
var MediatorInformation_1 = __webpack_require__(3);
var GameSettings_1 = __webpack_require__(0);
var GridView = (function (_super) {
    __extends(GridView, _super);
    function GridView(player) {
        var _this = _super.call(this) || this;
        _this.name = 'GridView';
        _this.maxShipsOnThisGrid = GameSettings_1.GameSettings.MaximumNumberOfShipsOnAGrid;
        _this.currentNumberOfShips = 0;
        _this.name = _this.name.concat(player);
        _this._player = player;
        _this.checkPlayer();
        console.log('   # ' + _this.name + ' created');
        return _this;
    }
    GridView.prototype.fillGridWithBattleShip = function (position, shipInfo, player) {
        var gridDimensions = this.getUIContainer().getBounds();
        var xPosition = position[0];
        var yPosition = position[1];
        var newShipInfo = shipInfo.split(',');
        var squareWidth = GameSettings_1.GameSettings.SquareWidth * GameSettings_1.GameSettings.GridScale;
        if (player == this._player) {
            if ((xPosition > gridDimensions.x) && (xPosition < gridDimensions.x + gridDimensions.width)) {
                if ((yPosition > gridDimensions.y) && (yPosition < gridDimensions.y + gridDimensions.height)) {
                    for (var i = 0; i < GameSettings_1.GameSettings.NumberOfSquaresVertically; i++) {
                        for (var j = 0; j < GameSettings_1.GameSettings.NumberOfSquaresHorizontally; j++) {
                            var squareXPosition = this.GridSquares[i][j].getPosition()[0];
                            var squareYPosition = this.GridSquares[i][j].getPosition()[1];
                            if ((xPosition >= squareXPosition && xPosition < squareXPosition + squareWidth) &&
                                (yPosition >= squareYPosition && yPosition < squareYPosition + squareWidth)) {
                                if (newShipInfo[0] == GameSettings_1.GameSettings.ShipHorizontalType) {
                                    var numberOfSquares = Math.round(position[2] / GameSettings_1.GameSettings.SquareWidth);
                                    if (this.currentNumberOfShips < this.maxShipsOnThisGrid) {
                                        for (var x = j; x < j + numberOfSquares; x++) {
                                            this.GridSquares[i][x].fillSquare();
                                        }
                                        this.notifyTheGridController(i, j, numberOfSquares, GameSettings_1.GameSettings.ShipHorizontalType);
                                        this.currentNumberOfShips++;
                                        this.notifyThatPlayerFinishedPlacingTheShips();
                                    }
                                }
                                else if (newShipInfo[0] == GameSettings_1.GameSettings.ShipVerticalType) {
                                    var numberOfSquares = Math.round(position[3] / GameSettings_1.GameSettings.SquareWidth);
                                    if (this.currentNumberOfShips < this.maxShipsOnThisGrid) {
                                        for (var x = i; x < i + numberOfSquares; x++) {
                                            this.GridSquares[x][j].fillSquare();
                                        }
                                        this.notifyTheGridController(i, j, numberOfSquares, GameSettings_1.GameSettings.ShipVerticalType);
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
    GridView.prototype.getUIContainer = function () {
        this._container.pivot.x = this._container.width / 2;
        this._container.pivot.y = this._container.height / 2;
        return _super.prototype.getUIContainer.call(this);
    };
    GridView.prototype.hideTheShips = function () {
        for (var i = 0; i < GameSettings_1.GameSettings.NumberOfSquaresHorizontally; i++) {
            for (var j = 0; j < GameSettings_1.GameSettings.NumberOfSquaresVertically; j++) {
                this.GridSquares[i][j].hideTheShipPart();
            }
        }
    };
    GridView.prototype.hasSquare = function (squareView) {
        for (var i = 0; i < GameSettings_1.GameSettings.NumberOfSquaresVertically; i++) {
            for (var j = 0; j < GameSettings_1.GameSettings.NumberOfSquaresHorizontally; j++) {
                if (this.GridSquares[i][j] === squareView)
                    return true;
            }
        }
        return false;
    };
    GridView.prototype.createBoard = function (gridXPosition, gridYPosition, squareWidth, numberOfSquaresVertically, numberOfSquaresHorizontally, gridBorderColor, gridSquareFillColor) {
        var newXPosition, newYPosition = gridYPosition, square, key = 0;
        this.GridSquares = [];
        for (var i = 0; i < numberOfSquaresVertically; i++) {
            this.GridSquares[i] = [];
            newXPosition = gridXPosition;
            for (var j = 0; j < numberOfSquaresHorizontally; j++) {
                key++;
                square = new SquareView_1.SquareView(newXPosition + j * squareWidth, newYPosition, squareWidth, gridBorderColor, gridSquareFillColor, j, i);
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
        var rulerView = new RulerView_1.RulerView(xPosition, yPosition, numberOfSquaresVertically, numberOfSquaresHorizontally, squareWidth, gridBorderColor, rulerTextColor);
        this._container.addChild(rulerView.getUIContainer());
    };
    GridView.prototype.checkPlayer = function () {
        switch (this._player) {
            case GameSettings_1.GameSettings.PlayerOne:
                this.createBoard(GameSettings_1.GameSettings.Grid1XPosition, GameSettings_1.GameSettings.Grid1YPosition, GameSettings_1.GameSettings.SquareWidth, GameSettings_1.GameSettings.NumberOfSquaresVertically, GameSettings_1.GameSettings.NumberOfSquaresHorizontally, GameSettings_1.GameSettings.Grid1BorderColor, GameSettings_1.GameSettings.GridSquareFillColor);
                this.createRuler(GameSettings_1.GameSettings.Grid1XPosition, GameSettings_1.GameSettings.Grid1YPosition, GameSettings_1.GameSettings.NumberOfSquaresVertically, GameSettings_1.GameSettings.NumberOfSquaresHorizontally, GameSettings_1.GameSettings.SquareWidth, GameSettings_1.GameSettings.Grid1BorderColor, GameSettings_1.GameSettings.RulerTextColor);
                break;
            case GameSettings_1.GameSettings.PlayerTwo:
                this.createBoard(GameSettings_1.GameSettings.Grid2XPosition, GameSettings_1.GameSettings.Grid2YPosition, GameSettings_1.GameSettings.SquareWidth, GameSettings_1.GameSettings.NumberOfSquaresVertically, GameSettings_1.GameSettings.NumberOfSquaresHorizontally, GameSettings_1.GameSettings.Grid2BorderColor, GameSettings_1.GameSettings.GridSquareFillColor);
                this.createRuler(GameSettings_1.GameSettings.Grid2XPosition, GameSettings_1.GameSettings.Grid2YPosition, GameSettings_1.GameSettings.NumberOfSquaresVertically, GameSettings_1.GameSettings.NumberOfSquaresHorizontally, GameSettings_1.GameSettings.SquareWidth, GameSettings_1.GameSettings.Grid2BorderColor, GameSettings_1.GameSettings.RulerTextColor);
                break;
        }
    };
    GridView.prototype.notifyThatPlayerFinishedPlacingTheShips = function () {
        if (this.currentNumberOfShips === this.maxShipsOnThisGrid) {
            var facade = BattleShipFacade_1.BattleShipFacade.getInstance(GameSettings_1.GameSettings.BattleShipFacadeKey);
            facade.sendNotification(MediatorInformation_1.MediatorInformation.TextUpdate, MediatorInformation_1.MediatorInformation.MaximumNumberOfShipReached, this._player);
            facade.sendNotification(CommandInformation_1.CommandInformation.PlayerFinishedPlacingTheShipsCommand, this._player);
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
    GridView.prototype.notifyTheGridController = function (i, j, numberOfSquares, shipType) {
        var facade = BattleShipFacade_1.BattleShipFacade.getInstance(GameSettings_1.GameSettings.BattleShipFacadeKey);
        facade.sendNotification(MediatorInformation_1.MediatorInformation.ShipPositionInfo, [[i, j, numberOfSquares], this._player], shipType);
    };
    return GridView;
}(AbstractSimpleView_1.AbstractSimpleView));
exports.GridView = GridView;


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
var HitView_1 = __webpack_require__(19);
var MissView_1 = __webpack_require__(20);
var BattleShipFacade_1 = __webpack_require__(1);
var AbstractSimpleView_1 = __webpack_require__(4);
var MediatorInformation_1 = __webpack_require__(3);
var GameSettings_1 = __webpack_require__(0);
var SquareView = (function (_super) {
    __extends(SquareView, _super);
    function SquareView(squareXPosition, squareYPosition, squareWidth, borderColor, fillColor, horizontalIndex, verticalIndex) {
        var _this = _super.call(this) || this;
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
        _this.createSquareGraphics();
        _this.createSquareGlow();
        _this.createHitMissGraphics();
        _this.createShipGraphics();
        _this.addToContainer(_this.squareGraphics);
        _this.addToContainer(_this.squareMarking);
        _this.addToContainer(_this.squareGlow);
        _this.addToContainer(_this.shipSquare);
        _this.initializeSquareInteraction();
        return _this;
    }
    SquareView.prototype.createSquareGraphics = function () {
        this.squareGraphics = new PIXI.Graphics();
        this.squareMarking = new PIXI.Graphics();
        this.squareGlow = new PIXI.Graphics();
        this.shipSquare = new PIXI.Graphics();
        this.squareGraphics.lineStyle(7, this.borderColor, 1);
        this.squareGraphics.beginFill(this.fillColor);
        this.squareGraphics.drawRect(this.x, this.y, this.width, this.width);
        this.squareGraphics.endFill();
    };
    SquareView.prototype.createHitMissGraphics = function () {
        this.hitView = new HitView_1.HitView(this.x, this.y, this.width);
        this.hitView.setActive(false);
        this.missView = new MissView_1.MissView(this.x, this.y, this.width);
        this.missView.setActive(false);
        this.squareMarking.addChild(this.hitView.getUIContainer(), this.missView.getUIContainer());
        this.squareGraphics.interactive = true;
        this.squareGraphics.buttonMode = true;
    };
    SquareView.prototype.createSquareGlow = function () {
        this.squareGlow.lineStyle(1, 0xff0000, 0.2);
        this.squareGlow.beginFill(0xff0100, 0.2);
        this.squareGlow.drawRect(this.x + 5, this.y + 5, this.width - 5, this.width - 5);
        this.squareGlow.endFill();
        this.squareGlow.visible = false;
    };
    SquareView.prototype.createShipGraphics = function () {
        this.shipSquare.lineStyle(0, GameSettings_1.GameSettings.SquareFillColor);
        this.shipSquare.beginFill(GameSettings_1.GameSettings.SquareFillColor, 0.6);
        this.shipSquare.drawRect(this.x + 5, this.y + 5, this.width - 5, this.width - 5);
        this.shipSquare.endFill();
        this.shipSquare.visible = false;
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
        BattleShipFacade_1.BattleShipFacade.getInstance(GameSettings_1.GameSettings.BattleShipFacadeKey)
            .sendNotification(MediatorInformation_1.MediatorInformation.SquareClickRequest, [[this.verticalIndex, this.horizontalIndex], this], undefined);
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
    };
    SquareView.prototype.disableInteraction = function () {
        this.squareGraphics.interactive = false;
        this.squareGlow.destroy();
        this.squareMarking.interactive = false;
    };
    SquareView.prototype.hideTheShipPart = function () {
        this.shipSquare.visible = false;
    };
    return SquareView;
}(AbstractSimpleView_1.AbstractSimpleView));
exports.SquareView = SquareView;


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
var AbstractSimpleView_1 = __webpack_require__(4);
var GameSettings_1 = __webpack_require__(0);
var HitView = (function (_super) {
    __extends(HitView, _super);
    function HitView(squareXPosition, squareYPosition, squareWidth) {
        var _this = _super.call(this) || this;
        _this.graphics = new PIXI.Graphics();
        _this.graphics.lineStyle(10, GameSettings_1.GameSettings.HitColor);
        _this.graphics.moveTo(squareXPosition + squareWidth / 3, squareYPosition + squareWidth - squareWidth / 3);
        _this.graphics.lineTo(squareXPosition + squareWidth - squareWidth / 3, squareYPosition + squareWidth / 3);
        _this.graphics.moveTo(squareXPosition + squareWidth / 3, squareYPosition + squareWidth / 3);
        _this.graphics.lineTo(squareXPosition + squareWidth - squareWidth / 3, squareYPosition + squareWidth - squareWidth / 3);
        _this.addToContainer(_this.graphics);
        return _this;
    }
    return HitView;
}(AbstractSimpleView_1.AbstractSimpleView));
exports.HitView = HitView;


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
var AbstractSimpleView_1 = __webpack_require__(4);
var GameSettings_1 = __webpack_require__(0);
var MissView = (function (_super) {
    __extends(MissView, _super);
    function MissView(squareXPosition, squareYPosition, squareWidth) {
        var _this = _super.call(this) || this;
        _this.graphics = new PIXI.Graphics();
        _this.graphics.lineStyle(8, GameSettings_1.GameSettings.MissColor);
        _this.graphics.drawCircle(squareXPosition + squareWidth / 2, squareYPosition + squareWidth / 2, squareWidth / 3.9);
        _this.addToContainer(_this.graphics);
        return _this;
    }
    return MissView;
}(AbstractSimpleView_1.AbstractSimpleView));
exports.MissView = MissView;


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
var RulerSquare_1 = __webpack_require__(22);
var AbstractSimpleView_1 = __webpack_require__(4);
var RulerView = (function (_super) {
    __extends(RulerView, _super);
    function RulerView(xPosition, yPosition, numberOfSquaresVertically, numberOfSquaresHorizontally, squareWidth, borderColor, textColor) {
        var _this = _super.call(this) || this;
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
    RulerView.prototype.createRulerHorizontally = function () {
        for (var i = 0; i < this.numberOfSquaresHorizontally; i++) {
            var rulerSquare = new RulerSquare_1.RulerSquare(this.xPosition + i * this.squareWidth, this.yPosition + this.numberOfSquaresVertically * this.squareWidth, this.squareWidth, this.borderColor, this.textColor, this.RulerType[0], i + 1);
            this._container.addChild(rulerSquare.getUIContainer());
        }
    };
    RulerView.prototype.createRulerVertically = function () {
        for (var i = 0; i < this.numberOfSquaresVertically; i++) {
            var rulerSquare = new RulerSquare_1.RulerSquare(this.xPosition - this.squareWidth, this.yPosition + i * this.squareWidth, this.squareWidth, this.borderColor, this.textColor, this.RulerType[1], 65 + i);
            this._container.addChild(rulerSquare.getUIContainer());
        }
    };
    return RulerView;
}(AbstractSimpleView_1.AbstractSimpleView));
exports.RulerView = RulerView;


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
var AbstractSimpleView_1 = __webpack_require__(4);
var RulerSquare = (function (_super) {
    __extends(RulerSquare, _super);
    function RulerSquare(xPosition, yPosition, squareWidth, borderColor, textColor, type, asciiCode) {
        var _this = _super.call(this) || this;
        _this.createRulerSquare(borderColor, xPosition, yPosition, squareWidth, type, asciiCode, textColor);
        return _this;
    }
    RulerSquare.prototype.createRulerSquare = function (borderColor, xPosition, yPosition, squareWidth, type, asciiCode, textColor) {
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
        this._container.addChild(graphics, text);
    };
    return RulerSquare;
}(AbstractSimpleView_1.AbstractSimpleView));
exports.RulerSquare = RulerSquare;


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
var AbstractSimpleView_1 = __webpack_require__(4);
var ViewManager_1 = __webpack_require__(7);
var TextView = (function (_super) {
    __extends(TextView, _super);
    function TextView(text, fontSize, color) {
        var _this = _super.call(this) || this;
        _this.text = new PIXI.Text(text, { fontSize: fontSize, fill: color });
        _this.text.anchor.set(0.5, 0.5);
        return _this;
    }
    TextView.prototype.addText = function (text) {
        this.text.text += '\n' + text;
    };
    TextView.prototype.showGamePlayStateText = function () {
        this.text.text = ViewManager_1.ViewManager.GamePlayStateText;
    };
    TextView.prototype.getText = function () {
        return this.text;
    };
    return TextView;
}(AbstractSimpleView_1.AbstractSimpleView));
exports.TextView = TextView;


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
var AbstractCommand_1 = __webpack_require__(5);
var BattleShipFacade_1 = __webpack_require__(1);
var CommandInformation_1 = __webpack_require__(6);
var MediatorInformation_1 = __webpack_require__(3);
var GameSettings_1 = __webpack_require__(0);
var SquareClickHandleCommand = (function (_super) {
    __extends(SquareClickHandleCommand, _super);
    function SquareClickHandleCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SquareClickHandleCommand.prototype.execute = function (notification) {
        console.log('SquareClick Handle Request');
        var facade = BattleShipFacade_1.BattleShipFacade.getInstance(GameSettings_1.GameSettings.BattleShipFacadeKey);
        var gridProxy = facade.retrieveProxy(BattleShipFacade_1.BattleShipFacade.GridProxy);
        var player = notification.getType();
        var squareClickCoordinates = notification.getBody();
        var grid = gridProxy.getGrid(player);
        this.checkIfPlayerHitAShip(grid, squareClickCoordinates, player);
        this.sendNotification(CommandInformation_1.CommandInformation.LogGridSquares, undefined, player);
    };
    SquareClickHandleCommand.prototype.checkIfPlayerHitAShip = function (grid, squareClickCoordinates, player) {
        var x = squareClickCoordinates[0], y = squareClickCoordinates[1];
        var gridSquares = grid.getGridSquares();
        if (gridSquares[x][y].checkIfItIsAHit()) {
            gridSquares[x][y].squareHit();
            this.sendNotification(MediatorInformation_1.MediatorInformation.PlayerHitAShip, squareClickCoordinates, player);
        }
        else {
            gridSquares[x][y].squareMiss();
            this.sendNotification(MediatorInformation_1.MediatorInformation.PlayerMissed, squareClickCoordinates, player);
        }
    };
    return SquareClickHandleCommand;
}(AbstractCommand_1.AbstractCommand));
exports.SquareClickHandleCommand = SquareClickHandleCommand;


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
__webpack_require__(2);
var BattleShipFacade_1 = __webpack_require__(1);
var AbstractMediator_1 = __webpack_require__(8);
var CommandInformation_1 = __webpack_require__(6);
var MediatorInformation_1 = __webpack_require__(3);
var GameSettings_1 = __webpack_require__(0);
var GridViewMediator = (function (_super) {
    __extends(GridViewMediator, _super);
    function GridViewMediator(mediatorName, viewComponent, player) {
        var _this = _super.call(this, mediatorName, viewComponent) || this;
        _this._player = player;
        var containersList = [];
        containersList.push(_super.prototype.getViewComponent.call(_this).getUIContainer());
        BattleShipFacade_1.BattleShipFacade.getInstance(GameSettings_1.GameSettings.BattleShipFacadeKey).addContainersToView(containersList, +player - 1);
        console.log('   # ' + _super.prototype.getMediatorName.call(_this) + ' created');
        return _this;
    }
    GridViewMediator.prototype.listNotificationInterests = function () {
        return [MediatorInformation_1.MediatorInformation.GridShipMarking,
            MediatorInformation_1.MediatorInformation.SquareClickRequest,
            MediatorInformation_1.MediatorInformation.ShipPositionInfo,
            MediatorInformation_1.MediatorInformation.HideTheShips,
            MediatorInformation_1.MediatorInformation.PlayerHitAShip,
            MediatorInformation_1.MediatorInformation.PlayerMissed];
    };
    GridViewMediator.prototype.handleNotification = function (notification) {
        switch (notification.getName()) {
            case MediatorInformation_1.MediatorInformation.GridShipMarking:
                var shipPositionInfo = notification.getBody()[0];
                console.log(shipPositionInfo);
                var player = notification.getBody()[1];
                var shipType = notification.getType();
                if (player == this._player)
                    this.getViewComponent().fillGridWithBattleShip(shipPositionInfo, shipType, player);
                break;
            case MediatorInformation_1.MediatorInformation.SquareClickRequest:
                var square = notification.getBody()[1];
                if (this.getViewComponent().hasSquare(square)) {
                    var squareClickCoordinates = notification.getBody()[0];
                    this.sendNotification(CommandInformation_1.CommandInformation.SquareClickHandleCommand, squareClickCoordinates, this._player);
                }
                break;
            case MediatorInformation_1.MediatorInformation.ShipPositionInfo:
                var player1 = notification.getBody()[1];
                var shipType1 = notification.getType();
                var shipPositionInfo1 = notification.getBody()[0];
                this.sendNotification(CommandInformation_1.CommandInformation.ShipPositionInfoCommand, notification.getBody(), shipType1);
                break;
            case MediatorInformation_1.MediatorInformation.HideTheShips:
                this.getViewComponent().hideTheShips();
                break;
            case MediatorInformation_1.MediatorInformation.PlayerHitAShip:
                var playerL = notification.getType();
                var hitCoordinates = notification.getBody();
                if (this._player == playerL) {
                    this.getViewComponent().updateTheViewWithAHit(hitCoordinates);
                }
                break;
            case MediatorInformation_1.MediatorInformation.PlayerMissed:
                var playerK = notification.getType();
                var missCoordinates = notification.getBody();
                if (this._player == playerK) {
                    this.getViewComponent().updateTheViewWithAMiss(missCoordinates);
                }
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
__webpack_require__(2);
var BattleShipFacade_1 = __webpack_require__(1);
var AbstractMediator_1 = __webpack_require__(8);
var ViewManager_1 = __webpack_require__(7);
var MediatorInformation_1 = __webpack_require__(3);
var GameSettings_1 = __webpack_require__(0);
var TextViewMediator = (function (_super) {
    __extends(TextViewMediator, _super);
    function TextViewMediator(mediatorName, viewComponent) {
        var _this = _super.call(this, mediatorName, viewComponent) || this;
        _this.name = 'TextViewMediator';
        var containersList = [];
        containersList.push(_super.prototype.getViewComponent.call(_this).getText());
        BattleShipFacade_1.BattleShipFacade.getInstance(GameSettings_1.GameSettings.BattleShipFacadeKey)
            .addContainersToView(containersList, ViewManager_1.ViewManager.GameInfoContainer);
        console.log('   # ' + _this.name + ' created');
        return _this;
    }
    TextViewMediator.prototype.listNotificationInterests = function () {
        return [MediatorInformation_1.MediatorInformation.TextUpdate,
            ViewManager_1.ViewManager.GamePlayStateText];
    };
    TextViewMediator.prototype.addTextToTheView = function (text) {
        this.getViewComponent().addText(text);
    };
    TextViewMediator.prototype.handleNotification = function (notification) {
        switch (notification.getName()) {
            case MediatorInformation_1.MediatorInformation.TextUpdate:
                var player = notification.getType();
                switch (player) {
                    case GameSettings_1.GameSettings.PlayerOne:
                        this.addTextToTheView(notification.getBody() + ' \nfor Player' + player);
                        break;
                    case GameSettings_1.GameSettings.PlayerTwo:
                        this.addTextToTheView(notification.getBody() + ' \nfor Player' + player);
                        break;
                }
                break;
            case ViewManager_1.ViewManager.GamePlayStateText:
                this.getViewComponent().showGamePlayStateText();
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
__webpack_require__(2);
var BattleShipFacade_1 = __webpack_require__(1);
var AbstractMediator_1 = __webpack_require__(8);
var ViewManager_1 = __webpack_require__(7);
var CommandInformation_1 = __webpack_require__(6);
var MediatorInformation_1 = __webpack_require__(3);
var GameSettings_1 = __webpack_require__(0);
var PlayerShipsViewMediator = (function (_super) {
    __extends(PlayerShipsViewMediator, _super);
    function PlayerShipsViewMediator(mediatorName, viewComponent, player) {
        var _this = _super.call(this, mediatorName, viewComponent) || this;
        _this._player = player;
        _this.addView(player);
        console.log('   # ' + _super.prototype.getMediatorName.call(_this) + ' created');
        return _this;
    }
    PlayerShipsViewMediator.prototype.listNotificationInterests = function () {
        return [MediatorInformation_1.MediatorInformation.ShipsPlacement,
        ];
    };
    PlayerShipsViewMediator.prototype.handleNotification = function (notification) {
        switch (notification.getName()) {
            case MediatorInformation_1.MediatorInformation.ShipsPlacement:
                var player = notification.getBody()[4];
                var shipType = notification.getType();
                if (player == this._player) {
                    this.sendNotification(CommandInformation_1.CommandInformation.ShipsPlacement, [notification.getBody(), player], shipType);
                }
                break;
        }
    };
    PlayerShipsViewMediator.prototype.addView = function (player) {
        var containersList = [];
        containersList.push(_super.prototype.getViewComponent.call(this).getUIContainer());
        if (player == GameSettings_1.GameSettings.PlayerOne) {
            BattleShipFacade_1.BattleShipFacade.getInstance(GameSettings_1.GameSettings.BattleShipFacadeKey).addContainersToView(containersList, ViewManager_1.ViewManager.PlayerOneShipsContainer);
        }
        else if (player == GameSettings_1.GameSettings.PlayerTwo) {
            BattleShipFacade_1.BattleShipFacade.getInstance(GameSettings_1.GameSettings.BattleShipFacadeKey).addContainersToView(containersList, ViewManager_1.ViewManager.PlayerTwoShipsContainer);
        }
    };
    return PlayerShipsViewMediator;
}(AbstractMediator_1.AbstractMediator));
exports.PlayerShipsViewMediator = PlayerShipsViewMediator;


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
var AbstractSimpleView_1 = __webpack_require__(4);
var SingleShipView_1 = __webpack_require__(29);
var GameSettings_1 = __webpack_require__(0);
var PlayerShipsView = (function (_super) {
    __extends(PlayerShipsView, _super);
    function PlayerShipsView(player, numberOfShips) {
        var _this = _super.call(this) || this;
        _this.bundleShipViewName = 'PlayerShipsView';
        _this.shipsArray = [];
        _this.addHorizontalShips(numberOfShips, player);
        _this.addVerticalShips(numberOfShips, player);
        console.log('   #' + _this.bundleShipViewName + player);
        return _this;
    }
    PlayerShipsView.prototype.addHorizontalShips = function (numberOfShips, player) {
        for (var i = 0; i < numberOfShips / 2; i++) {
            var horizontalShip = new SingleShipView_1.SingleShipView(150, i * 100, numberOfShips - i - 1, player, GameSettings_1.GameSettings.ShipHorizontalType);
            this.shipsArray.push(horizontalShip);
            this.addToContainer(horizontalShip.getUIContainer());
        }
    };
    PlayerShipsView.prototype.addVerticalShips = function (numberOfShips, player) {
        for (var i = numberOfShips / 2; i < numberOfShips; i++) {
            var verticalShip = new SingleShipView_1.SingleShipView(-500 + i * 100, -20, i, player, GameSettings_1.GameSettings.ShipVerticalType);
            this.shipsArray.push(verticalShip);
            this.addToContainer(verticalShip.getUIContainer());
        }
    };
    return PlayerShipsView;
}(AbstractSimpleView_1.AbstractSimpleView));
exports.PlayerShipsView = PlayerShipsView;


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
var BattleShipFacade_1 = __webpack_require__(1);
var AbstractSimpleView_1 = __webpack_require__(4);
__webpack_require__(2);
var ShipGraphics_1 = __webpack_require__(30);
var MediatorInformation_1 = __webpack_require__(3);
var GameSettings_1 = __webpack_require__(0);
var SingleShipView = (function (_super) {
    __extends(SingleShipView, _super);
    function SingleShipView(xPosition, yPosition, numberOfSquares, player, type) {
        var _this = _super.call(this) || this;
        _this.xPosition = xPosition;
        _this.yPosition = yPosition;
        _this.shipGraphics = new ShipGraphics_1.ShipGraphics(player);
        _this.numberOfSquares = numberOfSquares;
        _this.verifyPlayer(player);
        _this.verifyShipType(type);
        _this.shipGraphics.endFill();
        _this.shipGraphics.interactive = true;
        _this.shipGraphics.buttonMode = true;
        _this.makeTheShipInteractive();
        console.log('   # SingleShipView created');
        return _this;
    }
    SingleShipView.prototype.getUIContainer = function () {
        return this.shipGraphics;
    };
    SingleShipView.prototype.verifyShipType = function (type) {
        switch (type) {
            case GameSettings_1.GameSettings.ShipHorizontalType:
                for (var i = 0; i < this.numberOfSquares; i++) {
                    this.shipGraphics.drawRect(this.xPosition + i * GameSettings_1.GameSettings.SquareWidth, this.yPosition, GameSettings_1.GameSettings.SquareWidth - 3, GameSettings_1.GameSettings.SquareWidth - 3);
                }
                break;
            case GameSettings_1.GameSettings.ShipVerticalType:
                for (var i = 0; i < this.numberOfSquares; i++) {
                    this.shipGraphics.drawRect(this.xPosition, this.yPosition + i * GameSettings_1.GameSettings.SquareWidth, GameSettings_1.GameSettings.SquareWidth - 3, GameSettings_1.GameSettings.SquareWidth - 3);
                }
                break;
        }
    };
    SingleShipView.prototype.verifyPlayer = function (player) {
        if (player === GameSettings_1.GameSettings.PlayerOne) {
            this.shipGraphics.lineStyle(6, GameSettings_1.GameSettings.PlayerOneShipBorderColor);
            this.shipGraphics.beginFill(GameSettings_1.GameSettings.PlayerOneShipFillColor);
        }
        else if (player === GameSettings_1.GameSettings.PlayerTwo) {
            this.shipGraphics.lineStyle(6, GameSettings_1.GameSettings.PlayerTwoShipBorderColor);
            this.shipGraphics.beginFill(GameSettings_1.GameSettings.PlayerTwoShipFillColor);
        }
    };
    SingleShipView.prototype.makeTheShipInteractive = function () {
        this.shipGraphics
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);
        function onDragStart(event) {
            var position;
            this.data = event.data;
            position = this.data.getLocalPosition(this.parent);
            this.pivot.set(position.x, position.y);
            this.position.set(this.data.x, this.data.y);
            this.dragging = true;
            this.mousedown = false;
        }
        function onDragEnd() {
            var shipType;
            if (this.width > this.height) {
                shipType = GameSettings_1.GameSettings.ShipHorizontalType;
            }
            else if (this.width <= this.height) {
                shipType = GameSettings_1.GameSettings.ShipVerticalType;
            }
            BattleShipFacade_1.BattleShipFacade.getInstance(GameSettings_1.GameSettings.BattleShipFacadeKey)
                .sendNotification(MediatorInformation_1.MediatorInformation.ShipsPlacement, [this.getBounds().x, this.getBounds().y, this.width, this.height, this.player], shipType);
            this.alpha = 1;
            this.dragging = false;
            this.data = null;
            this.destroy();
        }
        function onDragMove() {
            var newPosition;
            if (this.dragging) {
                this.alpha = 0.5;
                newPosition = this.data.getLocalPosition(this.parent);
                this.x = newPosition.x;
                this.y = newPosition.y;
            }
        }
    };
    return SingleShipView;
}(AbstractSimpleView_1.AbstractSimpleView));
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
var AbstractCommand_1 = __webpack_require__(5);
var BattleShipFacade_1 = __webpack_require__(1);
__webpack_require__(2);
var MediatorInformation_1 = __webpack_require__(3);
var GameSettings_1 = __webpack_require__(0);
var ShipPlaceCommand = (function (_super) {
    __extends(ShipPlaceCommand, _super);
    function ShipPlaceCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShipPlaceCommand.prototype.execute = function (notification) {
        var player = notification.getBody()[1];
        var facade = BattleShipFacade_1.BattleShipFacade.getInstance(GameSettings_1.GameSettings.BattleShipFacadeKey);
        var playerProxy = facade.retrieveProxy(BattleShipFacade_1.BattleShipFacade.PlayerProxy);
        var playerC = playerProxy.getPlayer(player);
        playerC.updateNumberOfShipsPlaced();
        this.sendNotification(MediatorInformation_1.MediatorInformation.GridShipMarking, notification.getBody(), notification.getType());
    };
    return ShipPlaceCommand;
}(AbstractCommand_1.AbstractCommand));
exports.ShipPlaceCommand = ShipPlaceCommand;


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
var AbstractCommand_1 = __webpack_require__(5);
var BattleShipFacade_1 = __webpack_require__(1);
var CommandInformation_1 = __webpack_require__(6);
var GameSettings_1 = __webpack_require__(0);
var CheckIfPlayerFinishedPlacingTheShipsCommand = (function (_super) {
    __extends(CheckIfPlayerFinishedPlacingTheShipsCommand, _super);
    function CheckIfPlayerFinishedPlacingTheShipsCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckIfPlayerFinishedPlacingTheShipsCommand.checkIfBothPlayersFinishedPlacingTheShips = function () {
        var facade = BattleShipFacade_1.BattleShipFacade.getInstance(GameSettings_1.GameSettings.BattleShipFacadeKey);
        var playerProxy = facade.retrieveProxy(BattleShipFacade_1.BattleShipFacade.PlayerProxy);
        if (playerProxy.getPlayer(GameSettings_1.GameSettings.PlayerOne).shipsPlacementFinished() === true
            && playerProxy.getPlayer(GameSettings_1.GameSettings.PlayerTwo).shipsPlacementFinished() === true) {
            console.log('Both Players finished placing the ships');
            return true;
        }
        return false;
    };
    CheckIfPlayerFinishedPlacingTheShipsCommand.prototype.execute = function (notification) {
        if (CheckIfPlayerFinishedPlacingTheShipsCommand.checkIfBothPlayersFinishedPlacingTheShips()) {
            console.log('Finished');
            this.sendNotification(CommandInformation_1.CommandInformation.StartGamePlayCommand);
        }
    };
    return CheckIfPlayerFinishedPlacingTheShipsCommand;
}(AbstractCommand_1.AbstractCommand));
exports.CheckIfPlayerFinishedPlacingTheShipsCommand = CheckIfPlayerFinishedPlacingTheShipsCommand;


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
var AbstractCommand_1 = __webpack_require__(5);
var ViewManager_1 = __webpack_require__(7);
var CommandInformation_1 = __webpack_require__(6);
var StartGamePlayCommand = (function (_super) {
    __extends(StartGamePlayCommand, _super);
    function StartGamePlayCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StartGamePlayCommand.prototype.execute = function (notification) {
        this.sendNotification(CommandInformation_1.CommandInformation.HideTheShipCommand, undefined);
        this.sendNotification(ViewManager_1.ViewManager.GamePlayStateText, undefined);
    };
    return StartGamePlayCommand;
}(AbstractCommand_1.AbstractCommand));
exports.StartGamePlayCommand = StartGamePlayCommand;


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
var AbstractCommand_1 = __webpack_require__(5);
var MediatorInformation_1 = __webpack_require__(3);
var HideTheShipsCommand = (function (_super) {
    __extends(HideTheShipsCommand, _super);
    function HideTheShipsCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HideTheShipsCommand.prototype.execute = function (notification) {
        this.sendNotification(MediatorInformation_1.MediatorInformation.HideTheShips);
    };
    return HideTheShipsCommand;
}(AbstractCommand_1.AbstractCommand));
exports.HideTheShipsCommand = HideTheShipsCommand;


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
var AbstractCommand_1 = __webpack_require__(5);
var BattleShipFacade_1 = __webpack_require__(1);
var GameSettings_1 = __webpack_require__(0);
var UpdateShipPositionCommand = (function (_super) {
    __extends(UpdateShipPositionCommand, _super);
    function UpdateShipPositionCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateShipPositionCommand.checkShipType = function (shipPosition, shipType, grid) {
        var i = shipPosition[0], j = shipPosition[1], numberOfSquares = shipPosition[2];
        var gridSquares = grid.getGridSquares();
        switch (shipType) {
            case GameSettings_1.GameSettings.ShipHorizontalType:
                for (var x = j; x < j + numberOfSquares; x++) {
                    gridSquares[i][x].shipOnSquare();
                }
                break;
            case GameSettings_1.GameSettings.ShipVerticalType:
                for (var x = i; x < i + numberOfSquares; x++) {
                    gridSquares[x][j].shipOnSquare();
                }
                break;
        }
    };
    UpdateShipPositionCommand.prototype.execute = function (notification) {
        var facade = BattleShipFacade_1.BattleShipFacade.getInstance(GameSettings_1.GameSettings.BattleShipFacadeKey);
        var player = notification.getBody()[1];
        var shipType = notification.getType();
        var shipPosition = notification.getBody()[0];
        var grid = facade.retrieveProxy(BattleShipFacade_1.BattleShipFacade.GridProxy).getGrid(player);
        UpdateShipPositionCommand.checkShipType(shipPosition, shipType, grid);
    };
    return UpdateShipPositionCommand;
}(AbstractCommand_1.AbstractCommand));
exports.UpdateShipPositionCommand = UpdateShipPositionCommand;


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
var AbstractModel_1 = __webpack_require__(37);
var ModelManager = (function (_super) {
    __extends(ModelManager, _super);
    function ModelManager(key) {
        var _this = _super.call(this, key) || this;
        console.log(' ModelManager created');
        return _this;
    }
    ModelManager.getInstance = function (key) {
        if (!puremvc.Model.instanceMap[key])
            puremvc.Model.instanceMap[key] = new ModelManager(key);
        return puremvc.Model.instanceMap[key];
    };
    return ModelManager;
}(AbstractModel_1.AbstractModel));
exports.ModelManager = ModelManager;


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
var AbstractModel = (function (_super) {
    __extends(AbstractModel, _super);
    function AbstractModel(key) {
        return _super.call(this, key) || this;
    }
    AbstractModel.removeModel = function (key) {
        _super.removeModel.call(this, key);
    };
    AbstractModel.prototype.initializeModel = function () {
    };
    AbstractModel.prototype.registerProxy = function (proxy) {
        _super.prototype.registerProxy.call(this, proxy);
    };
    AbstractModel.prototype.removeProxy = function (proxyName) {
        return _super.prototype.removeProxy.call(this, proxyName);
    };
    AbstractModel.prototype.retrieveProxy = function (proxyName) {
        return _super.prototype.retrieveProxy.call(this, proxyName);
    };
    AbstractModel.prototype.hasProxy = function (proxyName) {
        return _super.prototype.hasProxy.call(this, proxyName);
    };
    return AbstractModel;
}(puremvc.Model));
exports.AbstractModel = AbstractModel;


/***/ }),
/* 38 */
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
var AbstractCommand_1 = __webpack_require__(5);
var CommandInformation_1 = __webpack_require__(6);
var StartUpCommand = (function (_super) {
    __extends(StartUpCommand, _super);
    function StartUpCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StartUpCommand.prototype.execute = function (notification) {
        this.sendNotification(CommandInformation_1.CommandInformation.CreateGridCommand);
    };
    return StartUpCommand;
}(AbstractCommand_1.AbstractCommand));
exports.StartUpCommand = StartUpCommand;


/***/ }),
/* 39 */
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
var AbstractCommand_1 = __webpack_require__(5);
var BattleShipFacade_1 = __webpack_require__(1);
var Square_1 = __webpack_require__(40);
var Grid_1 = __webpack_require__(41);
var GameSettings_1 = __webpack_require__(0);
var CreateGridCommand = (function (_super) {
    __extends(CreateGridCommand, _super);
    function CreateGridCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateGridCommand.createTheGrid = function () {
        var gridSquares = [];
        for (var i = 0; i < GameSettings_1.GameSettings.NumberOfSquaresHorizontally; i++) {
            gridSquares[i] = [];
            for (var j = 0; j < GameSettings_1.GameSettings.NumberOfSquaresVertically; j++) {
                gridSquares[i][j] = new Square_1.Square();
            }
        }
        return new Grid_1.Grid(gridSquares);
    };
    CreateGridCommand.prototype.execute = function (notification) {
        var facade = BattleShipFacade_1.BattleShipFacade.getInstance(GameSettings_1.GameSettings.BattleShipFacadeKey);
        var grid = CreateGridCommand.createTheGrid();
        facade.retrieveProxy(BattleShipFacade_1.BattleShipFacade.GridProxy).setData([grid, grid]);
    };
    return CreateGridCommand;
}(AbstractCommand_1.AbstractCommand));
exports.CreateGridCommand = CreateGridCommand;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerManager_1 = __webpack_require__(10);
var Square = (function () {
    function Square() {
        this.hit = ControllerManager_1.ControllerManager.HitText;
        this.miss = ControllerManager_1.ControllerManager.MissText;
        this.squareState = ControllerManager_1.ControllerManager.DefaultStateText;
        this.containsShip = ControllerManager_1.ControllerManager.ShipOnSquare;
    }
    Square.prototype.printSquareState = function () {
        return this.squareState;
    };
    Square.prototype.squareHit = function () {
        this.squareState = this.hit;
    };
    Square.prototype.checkIfItIsAHit = function () {
        return this.squareState == this.containsShip;
    };
    Square.prototype.squareMiss = function () {
        this.squareState = this.miss;
    };
    Square.prototype.shipOnSquare = function () {
        this.squareState = this.containsShip;
    };
    return Square;
}());
exports.Square = Square;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Grid = (function () {
    function Grid(gridSquares) {
        this.setGridSquares(gridSquares);
    }
    Grid.prototype.setGridSquares = function (gridSquares) {
        this.gridSquares = gridSquares;
    };
    Grid.prototype.getGridSquares = function () {
        return this.gridSquares;
    };
    return Grid;
}());
exports.Grid = Grid;


/***/ }),
/* 42 */
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
var AbstractCommand_1 = __webpack_require__(5);
var BattleShipFacade_1 = __webpack_require__(1);
var GameSettings_1 = __webpack_require__(0);
var LogGridSquaresCommand = (function (_super) {
    __extends(LogGridSquaresCommand, _super);
    function LogGridSquaresCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LogGridSquaresCommand.log = function (grid) {
        for (var i = 0; i < GameSettings_1.GameSettings.NumberOfSquaresHorizontally; i++) {
            var printArray = [];
            for (var j = 0; j < GameSettings_1.GameSettings.NumberOfSquaresVertically; j++) {
                printArray.push(grid.getGridSquares()[i][j].printSquareState());
            }
            console.log(printArray);
        }
    };
    LogGridSquaresCommand.prototype.execute = function (notification) {
        var facade = BattleShipFacade_1.BattleShipFacade.getInstance(GameSettings_1.GameSettings.BattleShipFacadeKey);
        var player = notification.getType();
        var grid = facade.retrieveProxy(BattleShipFacade_1.BattleShipFacade.GridProxy).getGrid(player);
        LogGridSquaresCommand.log(grid);
    };
    return LogGridSquaresCommand;
}(AbstractCommand_1.AbstractCommand));
exports.LogGridSquaresCommand = LogGridSquaresCommand;


/***/ }),
/* 43 */
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
var AbstractProxy_1 = __webpack_require__(11);
var GameSettings_1 = __webpack_require__(0);
var GridProxy = (function (_super) {
    __extends(GridProxy, _super);
    function GridProxy(proxyName, data) {
        return _super.call(this, proxyName, data) || this;
    }
    GridProxy.prototype.setData = function (grids) {
        this.grids = grids;
    };
    GridProxy.prototype.getGrid = function (player) {
        if (player == GameSettings_1.GameSettings.PlayerOne) {
            return this.grids[0];
        }
        else if (player == GameSettings_1.GameSettings.PlayerTwo) {
            return this.grids[1];
        }
    };
    return GridProxy;
}(AbstractProxy_1.AbstractProxy));
exports.GridProxy = GridProxy;


/***/ }),
/* 44 */
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
var AbstractProxy_1 = __webpack_require__(11);
var GameSettings_1 = __webpack_require__(0);
var PlayerProxy = (function (_super) {
    __extends(PlayerProxy, _super);
    function PlayerProxy(proxyName, data) {
        var _this = _super.call(this, proxyName, data) || this;
        _this.players = [];
        return _this;
    }
    PlayerProxy.prototype.setData = function (players) {
        this.players = players;
    };
    PlayerProxy.prototype.getPlayer = function (player) {
        if (player == GameSettings_1.GameSettings.PlayerOne) {
            return this.players[0];
        }
        else if (player == GameSettings_1.GameSettings.PlayerTwo) {
            return this.players[1];
        }
    };
    return PlayerProxy;
}(AbstractProxy_1.AbstractProxy));
exports.PlayerProxy = PlayerProxy;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameSettings_1 = __webpack_require__(0);
var Player = (function () {
    function Player(player) {
        this._shipsPlaced = 0;
        this._shipsPlacementCompleted = false;
        this._player = player;
    }
    Player.prototype.updateNumberOfShipsPlaced = function () {
        if (this._shipsPlaced <= GameSettings_1.GameSettings.MaximumNumberOfShipsOnAGrid) {
            this._shipsPlaced++;
        }
        if (this._shipsPlaced === GameSettings_1.GameSettings.MaximumNumberOfShipsOnAGrid) {
            this._shipsPlacementCompleted = true;
        }
    };
    Player.prototype.shipsPlacementFinished = function () {
        if (this._shipsPlacementCompleted == true) {
            console.log('Player' + this._player + ' finished placing the ships');
        }
        return this._shipsPlacementCompleted;
    };
    return Player;
}());
exports.Player = Player;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmUwYTc2YmM4YjhiNTA4MWMzYjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9zdGF0aWNJbmZvcm1hdGlvbi9HYW1lU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUElYSVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3N0YXRpY0luZm9ybWF0aW9uL01lZGlhdG9ySW5mb3JtYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0U2ltcGxlVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb21tYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvc3RhdGljSW5mb3JtYXRpb24vQ29tbWFuZEluZm9ybWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9tYWluVmlldy9WaWV3TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RNZWRpYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RGYWNhZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9jb250cm9sbGVyL0NvbnRyb2xsZXJNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9WaWV3TWFuYWdlck1lZGlhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE5vdGlmaWNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvZ3JpZC9HcmlkVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvZ3JpZC9TcXVhcmVWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9oaXRzL0hpdFZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L2hpdHMvTWlzc1ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L3J1bGVyL1J1bGVyVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvcnVsZXIvUnVsZXJTcXVhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L3RleHQvVGV4dFZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9jb21tYW5kL1NxdWFyZUNsaWNrSGFuZGxlQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L21lZGlhdG9yL0dyaWRWaWV3TWVkaWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9UZXh0Vmlld01lZGlhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvbWVkaWF0b3IvUGxheWVyU2hpcHNWaWV3TWVkaWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L3NoaXBzL1BsYXllclNoaXBzVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvc2hpcHMvU2luZ2xlU2hpcFZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L3NoaXBzL1NoaXBHcmFwaGljcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbW1hbmQvU2hpcFBsYWNlQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbW1hbmQvQ2hlY2tJZlBsYXllckZpbmlzaGVkUGxhY2luZ1RoZVNoaXBzQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbW1hbmQvU3RhcnRHYW1lUGxheUNvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9jb21tYW5kL0hpZGVUaGVTaGlwc0NvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9jb21tYW5kL1VwZGF0ZVNoaXBQb3NpdGlvbkNvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9tb2RlbC9Nb2RlbE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0TW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9jb21tYW5kL1N0YXJ0VXBDb21tYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvY29tbWFuZC9DcmVhdGVHcmlkQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3Byb3h5L1NxdWFyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3Byb3h5L0dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9jb21tYW5kL0xvZ0dyaWRTcXVhcmVzQ29tbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3Byb3h5L0dyaWRQcm94eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3Byb3h5L1BsYXllclByb3h5LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvcHJveHkvUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQTtJQUFBO0lBZ0NBLENBQUM7SUE5QjBCLDJCQUFjLEdBQUcsR0FBRyxDQUFDO0lBQ3JCLDJCQUFjLEdBQUcsR0FBRyxDQUFDO0lBQ3JCLDZCQUFnQixHQUFHLFFBQVEsQ0FBQztJQUM1QiwyQkFBYyxHQUFHLEdBQUcsQ0FBQztJQUNyQiwyQkFBYyxHQUFHLEdBQUcsQ0FBQztJQUNyQiw2QkFBZ0IsR0FBRyxRQUFRLENBQUM7SUFDNUIsc0JBQVMsR0FBRyxHQUFHLENBQUM7SUFDaEIsZ0NBQW1CLEdBQUcsUUFBUSxDQUFDO0lBQy9CLDJCQUFjLEdBQUcsUUFBUSxDQUFDO0lBQzFCLHFCQUFRLEdBQUcsUUFBUSxDQUFDO0lBQ3BCLHNCQUFTLEdBQUcsUUFB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QyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUI7YUFDSSxJQUFJLE1BQU0sSUFBSSwyQkFBWSxDQUFDLFNBQVMsRUFBRTtZQUN2QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLENBakNnQyw2QkFBYSxHQWlDN0M7QUFqQ1ksa0NBQVc7Ozs7Ozs7Ozs7QUNKeEIsNENBQStEO0FBRS9EO0lBVUksZ0JBQVksTUFBYztRQVBsQixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6Qiw2QkFBd0IsR0FBWSxLQUFLLENBQUM7UUFPOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUtNLDBDQUF5QixHQUFoQztRQUVJLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSwyQkFBWSxDQUFDLDJCQUEyQixFQUFFO1lBQy9ELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksSUFBSSxDQUFDLFlBQVksS0FBSywyQkFBWSxDQUFDLDJCQUEyQixFQUFFO1lBQ2hFLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUM7U0FDeEM7SUFDTCxDQUFDO0lBS00sdUNBQXNCLEdBQTdCO1FBQ0ksSUFBSSxJQUFJLENBQUMsd0JBQXdCLElBQUksSUFBSSxFQUFFO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsNkJBQTZCLENBQUMsQ0FBQztTQUN4RTtRQUNELE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3pDLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQztBQXBDWSx3QkFBTSIsImZpbGUiOiIuL2pzL21haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZTBhNzZiYzhiOGI1MDgxYzNiOCIsImV4cG9ydCBjbGFzcyBHYW1lU2V0dGluZ3Mge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR3JpZDFYUG9zaXRpb24gPSAxMDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdyaWQxWVBvc2l0aW9uID0gMTAwO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHcmlkMUJvcmRlckNvbG9yID0gMHgwMDAwZmY7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdyaWQyWFBvc2l0aW9uID0gMTAwO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHcmlkMllQb3NpdGlvbiA9IDEwMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR3JpZDJCb3JkZXJDb2xvciA9IDB4ZmYwMDAwO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHcmlkU2NhbGUgPSAwLjU7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEdyaWRTcXVhcmVGaWxsQ29sb3IgPSAweDAwMDAwMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUnVsZXJUZXh0Q29sb3IgPSAweDAwMDAwMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSGl0Q29sb3IgPSAweDAwZmYwMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTWlzc0NvbG9yID0gMHhmZjMzMDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNxdWFyZUZpbGxDb2xvciA9IDB4N2E4MjdiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTcXVhcmVXaWR0aCA9IDc1O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBOdW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5ID0gMTI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSA9IDEyO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUZXh0Vmlld1RleHQgPSAnR2FtZSBzdGF0dXMgOiBcXG5TaGlwcyBwbGFjZW1lbnQnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUZXh0Vmlld0NvbG9yID0gMHg0MmQxZjQ7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEZvbnRTaXplID0gMzg7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBsYXllck9uZVNoaXBGaWxsQ29sb3IgPSAweDAwMDBmMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUGxheWVyT25lU2hpcEJvcmRlckNvbG9yID0gMHhmZmYwMDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBsYXllclR3b1NoaXBGaWxsQ29sb3IgPSAweGZhMDAwMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUGxheWVyVHdvU2hpcEJvcmRlckNvbG9yID0gMHhmZmYwMDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBsYXllck9uZU51bWJlck9mU2hpcHMgPSA2O1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQbGF5ZXJUd29OdW1iZXJPZlNoaXBzID0gNjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUGxheWVyT25lID0gJzEnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQbGF5ZXJUd28gPSAnMic7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJhdHRsZVNoaXBGYWNhZGVLZXkgPSAnQmF0dGxlU2hpcCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNoaXBWZXJ0aWNhbFR5cGUgPSAnVmVydGljYWwnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTaGlwSG9yaXpvbnRhbFR5cGUgPSAnSG9yaXpvbnRhbCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1heGltdW1OdW1iZXJPZlNoaXBzT25BR3JpZCA9IDM7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9zdGF0aWNJbmZvcm1hdGlvbi9HYW1lU2V0dGluZ3MudHMiLCJpbXBvcnQge0NvbnRyb2xsZXJNYW5hZ2VyfSBmcm9tIFwiLi4vY29udHJvbGxlci9Db250cm9sbGVyTWFuYWdlclwiO1xyXG5pbXBvcnQge1ZpZXdNYW5hZ2VyfSBmcm9tIFwiLi4vdmlldy9tYWluVmlldy9WaWV3TWFuYWdlclwiO1xyXG5pbXBvcnQge0Fic3RyYWN0RmFjYWRlfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0RmFjYWRlXCI7XHJcbmltcG9ydCAncGl4aS5qcyc7XHJcbmltcG9ydCB7R3JpZFZpZXd9IGZyb20gXCIuLi92aWV3L2dyaWQvR3JpZFZpZXdcIjtcclxuaW1wb3J0IHtUZXh0Vmlld30gZnJvbSBcIi4uL3ZpZXcvdGV4dC9UZXh0Vmlld1wiO1xyXG5pbXBvcnQge1NxdWFyZUNsaWNrSGFuZGxlQ29tbWFuZH0gZnJvbSBcIi4uL2NvbW1hbmQvU3F1YXJlQ2xpY2tIYW5kbGVDb21tYW5kXCI7XHJcbmltcG9ydCB7R3JpZFZpZXdNZWRpYXRvcn0gZnJvbSBcIi4uL21lZGlhdG9yL0dyaWRWaWV3TWVkaWF0b3JcIjtcclxuaW1wb3J0IHtUZXh0Vmlld01lZGlhdG9yfSBmcm9tIFwiLi4vbWVkaWF0b3IvVGV4dFZpZXdNZWRpYXRvclwiO1xyXG5pbXBvcnQge1BsYXllclNoaXBzVmlld01lZGlhdG9yfSBmcm9tIFwiLi4vbWVkaWF0b3IvUGxheWVyU2hpcHNWaWV3TWVkaWF0b3JcIjtcclxuaW1wb3J0IHtQbGF5ZXJTaGlwc1ZpZXd9IGZyb20gXCIuLi92aWV3L3NoaXBzL1BsYXllclNoaXBzVmlld1wiO1xyXG5pbXBvcnQge1NoaXBQbGFjZUNvbW1hbmR9IGZyb20gXCIuLi9jb21tYW5kL1NoaXBQbGFjZUNvbW1hbmRcIjtcclxuaW1wb3J0IHtDaGVja0lmUGxheWVyRmluaXNoZWRQbGFjaW5nVGhlU2hpcHNDb21tYW5kfSBmcm9tIFwiLi4vY29tbWFuZC9DaGVja0lmUGxheWVyRmluaXNoZWRQbGFjaW5nVGhlU2hpcHNDb21tYW5kXCI7XHJcbmltcG9ydCB7U3RhcnRHYW1lUGxheUNvbW1hbmR9IGZyb20gXCIuLi9jb21tYW5kL1N0YXJ0R2FtZVBsYXlDb21tYW5kXCI7XHJcbmltcG9ydCB7SGlkZVRoZVNoaXBzQ29tbWFuZH0gZnJvbSBcIi4uL2NvbW1hbmQvSGlkZVRoZVNoaXBzQ29tbWFuZFwiO1xyXG5pbXBvcnQge1VwZGF0ZVNoaXBQb3NpdGlvbkNvbW1hbmR9IGZyb20gXCIuLi9jb21tYW5kL1VwZGF0ZVNoaXBQb3NpdGlvbkNvbW1hbmRcIjtcclxuaW1wb3J0IHtNb2RlbE1hbmFnZXJ9IGZyb20gXCIuLi9tb2RlbC9Nb2RlbE1hbmFnZXJcIjtcclxuaW1wb3J0IHtDb21tYW5kSW5mb3JtYXRpb259IGZyb20gXCIuLi9zdGF0aWNJbmZvcm1hdGlvbi9Db21tYW5kSW5mb3JtYXRpb25cIjtcclxuaW1wb3J0IHtTdGFydFVwQ29tbWFuZH0gZnJvbSBcIi4uL2NvbW1hbmQvU3RhcnRVcENvbW1hbmRcIjtcclxuaW1wb3J0IHtDcmVhdGVHcmlkQ29tbWFuZH0gZnJvbSBcIi4uL2NvbW1hbmQvQ3JlYXRlR3JpZENvbW1hbmRcIjtcclxuaW1wb3J0IHtMb2dHcmlkU3F1YXJlc0NvbW1hbmR9IGZyb20gXCIuLi9jb21tYW5kL0xvZ0dyaWRTcXVhcmVzQ29tbWFuZFwiO1xyXG5pbXBvcnQge0dyaWRQcm94eX0gZnJvbSBcIi4uL3Byb3h5L0dyaWRQcm94eVwiO1xyXG5pbXBvcnQge1BsYXllclByb3h5fSBmcm9tIFwiLi4vcHJveHkvUGxheWVyUHJveHlcIjtcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi9wcm94eS9QbGF5ZXJcIjtcclxuaW1wb3J0IHtNZWRpYXRvckluZm9ybWF0aW9ufSBmcm9tIFwiLi4vc3RhdGljSW5mb3JtYXRpb24vTWVkaWF0b3JJbmZvcm1hdGlvblwiO1xyXG5pbXBvcnQge0dhbWVTZXR0aW5nc30gZnJvbSBcIi4uL3N0YXRpY0luZm9ybWF0aW9uL0dhbWVTZXR0aW5nc1wiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBtYWluIEZhY2FkZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXR0bGVTaGlwRmFjYWRlIGV4dGVuZHMgQWJzdHJhY3RGYWNhZGUge1xyXG5cclxuICAgIHB1YmxpYyBhcHA6IFBJWEkuQXBwbGljYXRpb247XHJcblxyXG4gICAgLyoqVGhlIGNvbnRhaW5lcnMgdGhhdCBjb250YWlucyB0aGUgR2FtZUJvYXJkcyAqL1xyXG4gICAgcHVibGljIEdhbWVCb2FyZENvbnRhaW5lck9uZTogUElYSS5Db250YWluZXI7XHJcbiAgICBwdWJsaWMgR2FtZUJvYXJkQ29udGFpbmVyVHdvOiBQSVhJLkNvbnRhaW5lcjtcclxuICAgIC8qKlRoZSBjb250YWluZXIgd2hpY2ggY29udGFpbnMgdGhlIEdhbWVJbmZvICovXHJcbiAgICBwdWJsaWMgR2FtZUluZm9Db250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgLyoqVGhlIGNvbnRhaW5lciB3aGljaCBjb250YWlucyB0aGUgR2FtZUJ1dHRvbiAqL1xyXG4gICAgcHVibGljIEdhbWVCdXR0b25Db250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgLyoqVGhlIGNvbnRhaW5lciB0aGF0IGhvbGRzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBiYXR0bGVzaGlwcyAqL1xyXG4gICAgcHVibGljIFNoaXBzQ29udGFpbmVyT25lOiBQSVhJLkNvbnRhaW5lcjtcclxuICAgIHB1YmxpYyBTaGlwc0NvbnRhaW5lclR3bzogUElYSS5Db250YWluZXI7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgUGxheWVyUHJveHk6IHN0cmluZyA9ICdQbGF5ZXJQcm94eSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEdyaWRQcm94eTogc3RyaW5nID0gJ0dyaWRQUm94eTEnO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShrZXk6IHN0cmluZyk6IEJhdHRsZVNoaXBGYWNhZGUge1xyXG4gICAgICAgIGlmICghcHVyZW12Yy5GYWNhZGUuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5GYWNhZGUuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBCYXR0bGVTaGlwRmFjYWRlKGtleSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLkZhY2FkZS5pbnN0YW5jZU1hcFtrZXldIGFzIEJhdHRsZVNoaXBGYWNhZGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgdGhlIEZhY2FkZSdzIE1vZGVsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplTW9kZWwoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1vZGVsKVxyXG4gICAgICAgICAgICB0aGlzLm1vZGVsID0gTW9kZWxNYW5hZ2VyLmdldEluc3RhbmNlKHRoaXMubXVsdGl0b25LZXkpO1xyXG5cclxuICAgICAgICAvKipSZWdpc3RlcmluZyB0aGUgcHJveGllcyAqL1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJQcm94eShuZXcgR3JpZFByb3h5KEJhdHRsZVNoaXBGYWNhZGUuR3JpZFByb3h5KSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlclByb3h5KG5ldyBQbGF5ZXJQcm94eShCYXR0bGVTaGlwRmFjYWRlLlBsYXllclByb3h5KSk7XHJcbiAgICAgICAgdGhpcy5yZXRyaWV2ZVByb3h5KEJhdHRsZVNoaXBGYWNhZGUuUGxheWVyUHJveHkpXHJcbiAgICAgICAgICAgIC5zZXREYXRhKFtuZXcgUGxheWVyKEdhbWVTZXR0aW5ncy5QbGF5ZXJPbmUpLCBuZXcgUGxheWVyKEdhbWVTZXR0aW5ncy5QbGF5ZXJUd28pXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgdGhlIEZhY2FkZSdzIFZpZXdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVWaWV3KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy52aWV3KVxyXG4gICAgICAgICAgICB0aGlzLnZpZXcgPSBWaWV3TWFuYWdlci5nZXRJbnN0YW5jZSh0aGlzLm11bHRpdG9uS2V5KTtcclxuXHJcbiAgICAgICAgLyoqUmVnaXN0ZXJpbmcgdGhlIHR3byBHcmlkVmlld3MgKi9cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyTWVkaWF0b3IobmV3IEdyaWRWaWV3TWVkaWF0b3IoTWVkaWF0b3JJbmZvcm1hdGlvbi5HcmlkVmlld01lZGlhdG9yWzBdLFxyXG4gICAgICAgICAgICBuZXcgR3JpZFZpZXcoR2FtZVNldHRpbmdzLlBsYXllck9uZSksIEdhbWVTZXR0aW5ncy5QbGF5ZXJPbmUpKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyTWVkaWF0b3IobmV3IEdyaWRWaWV3TWVkaWF0b3IoTWVkaWF0b3JJbmZvcm1hdGlvbi5HcmlkVmlld01lZGlhdG9yWzFdLFxyXG4gICAgICAgICAgICBuZXcgR3JpZFZpZXcoR2FtZVNldHRpbmdzLlBsYXllclR3byksIEdhbWVTZXR0aW5ncy5QbGF5ZXJUd28pKTtcclxuICAgICAgICAvKipSZWdpc3RlcmluZyB0aGUgVGV4dE1lZGlhdG9yICovXHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlck1lZGlhdG9yKG5ldyBUZXh0Vmlld01lZGlhdG9yKE1lZGlhdG9ySW5mb3JtYXRpb24uVGV4dFZpZXdNZWRpYXRvciwgbmV3IFRleHRWaWV3KEdhbWVTZXR0aW5ncy5UZXh0Vmlld1RleHQsXHJcbiAgICAgICAgICAgIEdhbWVTZXR0aW5ncy5Gb250U2l6ZSwgR2FtZVNldHRpbmdzLlRleHRWaWV3Q29sb3IpKSk7XHJcbiAgICAgICAgLyoqUmVnaXN0ZXJpbmcgdGhlIFNoaXBzIE1lZGlhdG9ycyAqL1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJNZWRpYXRvcihuZXcgUGxheWVyU2hpcHNWaWV3TWVkaWF0b3IoTWVkaWF0b3JJbmZvcm1hdGlvbi5QbGF5ZXJTaGlwVmlld01lZGlhdG9yWzBdLFxyXG4gICAgICAgICAgICBuZXcgUGxheWVyU2hpcHNWaWV3KEdhbWVTZXR0aW5ncy5QbGF5ZXJPbmUsIEdhbWVTZXR0aW5ncy5QbGF5ZXJPbmVOdW1iZXJPZlNoaXBzKSwgR2FtZVNldHRpbmdzLlBsYXllck9uZSkpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJNZWRpYXRvcihuZXcgUGxheWVyU2hpcHNWaWV3TWVkaWF0b3IoTWVkaWF0b3JJbmZvcm1hdGlvbi5QbGF5ZXJTaGlwVmlld01lZGlhdG9yWzFdLFxyXG4gICAgICAgICAgICBuZXcgUGxheWVyU2hpcHNWaWV3KEdhbWVTZXR0aW5ncy5QbGF5ZXJUd28sIEdhbWVTZXR0aW5ncy5QbGF5ZXJUd29OdW1iZXJPZlNoaXBzKSwgR2FtZVNldHRpbmdzLlBsYXllclR3bykpO1xyXG5cclxuICAgICAgICBsZXQgY291bnQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgdGhpcy5hcHAudGlja2VyLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvdW50ICs9IDAuMTtcclxuICAgICAgICAgICAgbGV0IHRleHQ6IGFueSA9IHN1cGVyLnJldHJpZXZlTWVkaWF0b3IoTWVkaWF0b3JJbmZvcm1hdGlvbi5UZXh0Vmlld01lZGlhdG9yKS5nZXRWaWV3Q29tcG9uZW50KCkuZ2V0VGV4dCgpO1xyXG4gICAgICAgICAgICB0ZXh0LnNjYWxlLnNldCgxICsgTWF0aC5zaW4oY291bnQpICogMC4wNSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6aW5nIHRoZSBGYWNhZGUncyBDb250cm9sbGVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplQ29udHJvbGxlcigpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuY29udHJvbGxlcilcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyID0gQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UodGhpcy5tdWx0aXRvbktleSk7XHJcblxyXG4gICAgICAgIC8qKlJlZ2lzdGVyaW5nIHRoZSBjb21tYW5kcyAqL1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDb21tYW5kKENvbW1hbmRJbmZvcm1hdGlvbi5TaGlwUG9zaXRpb25JbmZvQ29tbWFuZCwgVXBkYXRlU2hpcFBvc2l0aW9uQ29tbWFuZCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbW1hbmQoQ29tbWFuZEluZm9ybWF0aW9uLlBsYXllckZpbmlzaGVkUGxhY2luZ1RoZVNoaXBzQ29tbWFuZCwgQ2hlY2tJZlBsYXllckZpbmlzaGVkUGxhY2luZ1RoZVNoaXBzQ29tbWFuZCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbW1hbmQoQ29tbWFuZEluZm9ybWF0aW9uLlN0YXJ0R2FtZVBsYXlDb21tYW5kLCBTdGFydEdhbWVQbGF5Q29tbWFuZCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbW1hbmQoQ29tbWFuZEluZm9ybWF0aW9uLkhpZGVUaGVTaGlwQ29tbWFuZCwgSGlkZVRoZVNoaXBzQ29tbWFuZCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDb21tYW5kKENvbW1hbmRJbmZvcm1hdGlvbi5TaGlwc1BsYWNlbWVudCwgU2hpcFBsYWNlQ29tbWFuZCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbW1hbmQoQ29tbWFuZEluZm9ybWF0aW9uLlN0YXJ0R2FtZUNvbW1hbmQsIFN0YXJ0VXBDb21tYW5kKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29tbWFuZChDb21tYW5kSW5mb3JtYXRpb24uQ3JlYXRlR3JpZENvbW1hbmQsIENyZWF0ZUdyaWRDb21tYW5kKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29tbWFuZChDb21tYW5kSW5mb3JtYXRpb24uU3F1YXJlQ2xpY2tIYW5kbGVDb21tYW5kLCBTcXVhcmVDbGlja0hhbmRsZUNvbW1hbmQpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJDb21tYW5kKENvbW1hbmRJbmZvcm1hdGlvbi5Mb2dHcmlkU3F1YXJlcywgTG9nR3JpZFNxdWFyZXNDb21tYW5kKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemluZyB0aGUgRmFjYWRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplRmFjYWRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm11bHRpdG9uS2V5ID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUGl4aUFwcGxpY2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja1N0YXJ0T3JpZW50YXRpb24oKTtcclxuICAgICAgICB0aGlzLmNoYW5nZU9yaWVudGF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplTW9kZWwoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVDb250cm9sbGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplVmlldygpO1xyXG4gICAgICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbihDb21tYW5kSW5mb3JtYXRpb24uU3RhcnRHYW1lQ29tbWFuZCwgdW5kZWZpbmVkKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQmF0dGxlU2hpcEZhY2FkZSBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGNvbnRhaW5lcnMgdG8gdGhlIHZpZXcgc2NyZWVuXHJcbiAgICAgKiBAcGFyYW0gY29udGFpbmVyc0xpc3RcclxuICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRDb250YWluZXJzVG9WaWV3KGNvbnRhaW5lcnNMaXN0OiBBcnJheTxQSVhJLkNvbnRhaW5lcj4sIHR5cGU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgY29udGFpbmVyc0xpc3QpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFZpZXdNYW5hZ2VyLlBsYXllck9uZUdyaWRDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIC8qKkFkZGluZyB0byB0aGUgUGxheWVyT25lR3JpZCBDb250YWluZXIgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFZpZXdNYW5hZ2VyLlBsYXllclR3b0dyaWRDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIC8qKkFkZGluZyB0byB0aGUgUGxheWVyVHdvR3JpZCBDb250YWluZXIgKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFZpZXdNYW5hZ2VyLkdhbWVJbmZvQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvKipBZGRpbmcgdG8gdGhlIEdhbWVJbmZvIENvbnRhaW5lciAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBWaWV3TWFuYWdlci5HYW1lQnV0dG9uQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvKipBZGRpbmcgdG8gdGhlIEdhbWVCdXR0b24gQ29udGFpbmVyICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gVmlld01hbmFnZXIuUGxheWVyT25lU2hpcHNDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIC8qKkFkZGluZyB0byB0aGUgUGxheWVyT25lU2hpcHMgQ29udGFpbmVyICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyT25lLmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFZpZXdNYW5hZ2VyLlBsYXllclR3b1NoaXBzQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAvKipBZGRpbmcgdG8gdGhlIFBsYXllclR3b1NoaXBzIENvbnRhaW5lciAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lclR3by5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIFBJWEkgQXBwbGljYXRpb24uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlUGl4aUFwcGxpY2F0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYXBwID0gbmV3IFBJWEkuQXBwbGljYXRpb24od2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCwge2JhY2tncm91bmRDb2xvcjogMHgwMDAwMDB9KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYXBwLnZpZXcpO1xyXG4gICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lID0gbmV3IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvID0gbmV3IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXI7XHJcbiAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJPbmUgPSBuZXcgUElYSS5Db250YWluZXI7XHJcbiAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lclR3byA9IG5ldyBQSVhJLkNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZSwgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28sXHJcbiAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIsIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lciwgdGhpcy5TaGlwc0NvbnRhaW5lck9uZSwgdGhpcy5TaGlwc0NvbnRhaW5lclR3byk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTm90aWZpZXMgdGhpcyBmYWNhZGUncyB2aWV3IG9ic2VydmVycy5cclxuICAgICAqIEBwYXJhbSBtTm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBub3RpZnlPYnNlcnZlcnMobU5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnZpZXcpXHJcbiAgICAgICAgICAgIHRoaXMudmlldy5ub3RpZnlPYnNlcnZlcnMobU5vdGlmaWNhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgQ2hlY2tzIGF0IHRoZSBTdGFydCBvZiB0aGUgZ2FtZSB3aGljaCBvcmllbnRhdGlvbiBpdCBoYXNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjaGVja1N0YXJ0T3JpZW50YXRpb24oKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwLnJlbmRlcmVyLnJlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICBsZXQgd2lkdGg6IG51bWJlciA9IHRoaXMuYXBwLnZpZXcud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodDogbnVtYmVyID0gdGhpcy5hcHAudmlldy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jaGVja09yaWVudGF0aW9uKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFdoZW4gdGhlIHBsYXllciByb3RhdGVzIHRoZSBzY3JlZW5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VPcmllbnRhdGlvbigpOiB2b2lkIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAucmVuZGVyZXIucmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpZHRoOiBudW1iZXIgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICAgICAgICAgIGxldCBoZWlnaHQ6IG51bWJlciA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnT3JpZW50YXRpb24gOiAnICsgd2luZG93Lm9yaWVudGF0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja09yaWVudGF0aW9uKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEkga25vdywuLi4uLGhhcmRjb2RlZC5cclxuICAgICAqIEkgd2lsbCBmaXggdGhpcyBsYXRlci5cclxuICAgICAqIEBwYXJhbSB3aWR0aFxyXG4gICAgICogQHBhcmFtIGhlaWdodFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrT3JpZW50YXRpb24od2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBzd2l0Y2ggKHdpbmRvdy5vcmllbnRhdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIDkwIDpcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnBvc2l0aW9uLnNldCh3aWR0aCAvIDYsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUuc2NhbGUuc2V0KEdhbWVTZXR0aW5ncy5HcmlkU2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28ucG9zaXRpb24uc2V0KDMgKiB3aWR0aCAvIDYsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28uc2NhbGUuc2V0KEdhbWVTZXR0aW5ncy5HcmlkU2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5wb3NpdGlvbi5zZXQoNSAqIHdpZHRoIC8gNiwgaGVpZ2h0IC8gNCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLnNjYWxlLnNldCgxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5wb3NpdGlvbi5zZXQoNSAqIHdpZHRoIC8gNiwgMyAqIGhlaWdodCAvIDQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLnNjYWxlLnNldCgwLjkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lck9uZS5wb3NpdGlvbi5zZXQod2lkdGggLyA2LCAzMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyT25lLnNjYWxlLnNldCgwLjUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lclR3by5wb3NpdGlvbi5zZXQoMyAqIHdpZHRoIC8gNiwgMzApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lclR3by5zY2FsZS5zZXQoMC41KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDAgOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUucG9zaXRpb24uc2V0KHdpZHRoIC8gMiwgaGVpZ2h0IC8gNik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZS5zY2FsZS5zZXQoMC43LCAwLjcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28ucG9zaXRpb24uc2V0KHdpZHRoIC8gMiwgMyAqIGhlaWdodCAvIDYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28uc2NhbGUuc2V0KDAuNywgMC43KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIucG9zaXRpb24uc2V0KHdpZHRoIC8gNCwgNSAqIGhlaWdodCAvIDYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5zY2FsZS5zZXQoMS42KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5wb3NpdGlvbi5zZXQoMyAqIHdpZHRoIC8gNCwgNSAqIGhlaWdodCAvIDYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLnNjYWxlLnNldCgxLjYpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZS5wb3NpdGlvbi5zZXQod2lkdGggLyA2LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnNjYWxlLnNldChHYW1lU2V0dGluZ3MuR3JpZFNjYWxlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLnBvc2l0aW9uLnNldCgzICogd2lkdGggLyA2LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLnNjYWxlLnNldChHYW1lU2V0dGluZ3MuR3JpZFNjYWxlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIucG9zaXRpb24uc2V0KDUgKiB3aWR0aCAvIDYsIGhlaWdodCAvIDQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5zY2FsZS5zZXQoMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIucG9zaXRpb24uc2V0KDUgKiB3aWR0aCAvIDYsIDMgKiBoZWlnaHQgLyA0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5zY2FsZS5zZXQoMC45KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJPbmUucG9zaXRpb24uc2V0KHdpZHRoIC8gNiwgMzApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lck9uZS5zY2FsZS5zZXQoMC41KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJUd28ucG9zaXRpb24uc2V0KDMgKiB3aWR0aCAvIDYsIDMwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXJUd28uc2NhbGUuc2V0KDAuNSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSB1bmRlZmluZWQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUElYSVwifVxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgTWVkaWF0b3JJbmZvcm1hdGlvbiB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHcmlkVmlld01lZGlhdG9yID0gWydHcmlkT25lTWVkaWF0b3InLCAnR3JpZFR3b01lZGlhdG9yJ107XHJcbiAgICBwdWJsaWMgc3RhdGljIEJ1dHRvblZpZXdNZWRpYXRvciA9ICdCdXR0b25WaWV3TWVkaWF0b3InO1xyXG4gICAgcHVibGljIHN0YXRpYyBQbGF5ZXJTaGlwVmlld01lZGlhdG9yID0gWydTaGlwUGxheWVyT25lTWVkaWF0b3InLCAnU2hpcFBsYXllclR3b01lZGlhdG9yJ107XHJcbiAgICBwdWJsaWMgc3RhdGljIFRleHRWaWV3TWVkaWF0b3IgPSAnVGV4dFZpZXdNZWRpYXRvcic7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTaGlwc1BsYWNlbWVudCA9ICdTaGlwc19QbGFjZW1lbnQnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHcmlkU2hpcE1hcmtpbmcgPSAnR3JpZE1hcmtpbmcnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUZXh0VXBkYXRlID0gJ1RleHRVcGRhdGUnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTcXVhcmVDbGlja1JlcXVlc3QgPSAnU3F1YXJlQ2xpY2tSJztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU2hpcFBvc2l0aW9uSW5mbyA9ICdTaGlwUG9zaXRpb24nO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBIaWRlVGhlU2hpcHMgPSAnSGlkZVRob3NlRGFtblNoaXBzJztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUGxheWVySGl0QVNoaXAgPSAnUGxheWVySGl0QVNoaXAnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQbGF5ZXJNaXNzZWQgPSAnUGxheWVyTWlzc2VkJztcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTWF4aW11bU51bWJlck9mU2hpcFJlYWNoZWQgPSAnTWF4IE51bWJlciBPZiBTaGlwcyB0byBQbGFjZSBSZWFjaGVkJ1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9zdGF0aWNJbmZvcm1hdGlvbi9NZWRpYXRvckluZm9ybWF0aW9uLnRzIiwiLyoqXHJcbiAqIFRoZSBzaW1wbGUgYWJzdHJhY3QgdmlldyBjbGFzcy5UaGlzIHdpbGwgYmUgdXNlZCBmb3IgYWxsIHRoZSBvdGhlciBjbGFzc2VzIGV4Y2VwdCB0aGUgbWFuYWdlciBvbmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RTaW1wbGVWaWV3IHtcclxuICAgIHByb3RlY3RlZCBfYWN0aXZlOiBib29sZWFuO1xyXG4gICAgcHJvdGVjdGVkIF9jb250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIHZpZXcuXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBjb250YWluZXIuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplVmlldygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhpcyB2aWV3IHRvIGJlIHZpc2libGUuXHJcbiAgICAgKiBAcGFyYW0gYWN0aXZlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRBY3RpdmUoYWN0aXZlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLl9jb250YWluZXIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gYWN0aXZlO1xyXG4gICAgICAgICAgICBpdGVtLmludGVyYWN0aXZlID0gYWN0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVJQ29udGFpbmVyKCk6IFBJWEkuQ29udGFpbmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgUElYSSBncmFwaGljcyxzcHJpdGUsY29udGFpbmVyIGV0YyB0byB0aGlzIHZpZXdcclxuICAgICAqIEBwYXJhbSBpdGVtXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRUb0NvbnRhaW5lcihpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RTaW1wbGVWaWV3LnRzIiwiaW1wb3J0ICdwaXhpLmpzJztcclxuaW1wb3J0IHtBYnN0cmFjdE5vdGlmaWNhdGlvbn0gZnJvbSBcIi4vQWJzdHJhY3ROb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IHtBYnN0cmFjdE5vdGlmaWVyfSBmcm9tIFwiLi9BYnN0cmFjdE5vdGlmaWVyXCI7XHJcbmltcG9ydCB7QWJzdHJhY3RGYWNhZGV9IGZyb20gXCIuL0Fic3RyYWN0RmFjYWRlXCI7XHJcblxyXG4vKipcclxuICogIEV4dGVuZCB0aGlzIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0Q29tbWFuZCBleHRlbmRzIHB1cmVtdmMuU2ltcGxlQ29tbWFuZCBpbXBsZW1lbnRzIHB1cmVtdmMuSUNvbW1hbmQsIEFic3RyYWN0Tm90aWZpZXIge1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKG5vdGlmaWNhdGlvbjogQWJzdHJhY3ROb3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5leGVjdXRlKG5vdGlmaWNhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZU5vdGlmaWVyKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZU5vdGlmaWVyKGtleSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gYm9keVxyXG4gICAgICogQHBhcmFtIHR5cGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlbmROb3RpZmljYXRpb24obmFtZTogc3RyaW5nLCBib2R5PzogYW55LCB0eXBlPzogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBmYWNhZGU6IGFueSA9IEFic3RyYWN0RmFjYWRlLmdldEluc3RhbmNlKHRoaXMubXVsdGl0b25LZXkpO1xyXG4gICAgICAgIGZhY2FkZS5zZW5kTm90aWZpY2F0aW9uKG5hbWUsIGJvZHksIHR5cGUpO1xyXG4gICAgfTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdENvbW1hbmQudHMiLCJleHBvcnQgY2xhc3MgQ29tbWFuZEluZm9ybWF0aW9uIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFN0YXJ0R2FtZUNvbW1hbmQgPSAnU3RhcnRHYW1lQ29tbWFuZCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENyZWF0ZUdyaWRDb21tYW5kID0gJ0NyZWF0ZUdyaWQnO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBMb2dHcmlkU3F1YXJlcyA9ICdMb2dHcmlkU3F1YXJlcyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNxdWFyZUNsaWNrSGFuZGxlQ29tbWFuZCA9ICdTcXVhcmVDbGlja0hhbmRsZUNvbW1hbmRQUCc7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNoaXBzUGxhY2VtZW50OiBzdHJpbmcgPSAnU0hJUFNfUExBQ0VNRU5UX0NPTU1BTkQnO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU2hpcFBvc2l0aW9uSW5mb0NvbW1hbmQ6IHN0cmluZyA9ICdTaGlwUG9zaXRpb25Db21tYW5kJztcclxuICAgIHB1YmxpYyBzdGF0aWMgUGxheWVyRmluaXNoZWRQbGFjaW5nVGhlU2hpcHNDb21tYW5kOiBzdHJpbmcgPSAnUGxheWVyRkJUUyc7XHJcbiAgICBwdWJsaWMgc3RhdGljIFN0YXJ0R2FtZVBsYXlDb21tYW5kOiBzdHJpbmcgPSAnU3RhcnRHYW1lUGxheSc7XHJcbiAgICBwdWJsaWMgc3RhdGljIEhpZGVUaGVTaGlwQ29tbWFuZDogc3RyaW5nID0gJ0hpZGVUaGVTaGlwQ29tbWFuZCc7XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9zdGF0aWNJbmZvcm1hdGlvbi9Db21tYW5kSW5mb3JtYXRpb24udHMiLCJpbXBvcnQge1ZpZXdNYW5hZ2VyTWVkaWF0b3J9IGZyb20gXCIuLi8uLi9tZWRpYXRvci9WaWV3TWFuYWdlck1lZGlhdG9yXCI7XHJcbmltcG9ydCAncGl4aS5qcydcclxuaW1wb3J0IHtBYnN0cmFjdFZpZXdNYW5hZ2VyfSBmcm9tIFwiLi4vLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Vmlld01hbmFnZXJcIjtcclxuXHJcblxyXG4vKipcclxuICogVGhlIG1haW4gdmlldyBtYW5hZ2VyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZpZXdNYW5hZ2VyIGV4dGVuZHMgQWJzdHJhY3RWaWV3TWFuYWdlciB7XHJcblxyXG4gICAgLyoqICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFBsYXllck9uZUdyaWRDb250YWluZXI6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIFBsYXllclR3b0dyaWRDb250YWluZXI6IG51bWJlciA9IDE7XHJcbiAgICBwdWJsaWMgc3RhdGljIEdhbWVJbmZvQ29udGFpbmVyOiBudW1iZXIgPSAzO1xyXG4gICAgcHVibGljIHN0YXRpYyBHYW1lQnV0dG9uQ29udGFpbmVyOiBudW1iZXIgPSA0O1xyXG4gICAgcHVibGljIHN0YXRpYyBQbGF5ZXJPbmVTaGlwc0NvbnRhaW5lcjogbnVtYmVyID0gNTtcclxuICAgIHB1YmxpYyBzdGF0aWMgUGxheWVyVHdvU2hpcHNDb250YWluZXI6IG51bWJlciA9IDY7XHJcbiAgICBwdWJsaWMgc3RhdGljIEdhbWVQbGF5U3RhdGVUZXh0OiBzdHJpbmcgPSAnR2FtZVBsYXkgU3RhdGUnO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgICAgICB0aGlzLm11bHRpdG9uS2V5ID0ga2V5O1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyTWVkaWF0b3IobmV3IFZpZXdNYW5hZ2VyTWVkaWF0b3Ioa2V5LCB0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcpOiBWaWV3TWFuYWdlciB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gPSBuZXcgVmlld01hbmFnZXIoa2V5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldIGFzIFZpZXdNYW5hZ2VyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6aW5nIHRoZSBCYXR0bGVTaGlwJ3Mgdmlld1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZVZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZVZpZXcoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnVmlld01hbmFnZXIgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L21haW5WaWV3L1ZpZXdNYW5hZ2VyLnRzIiwiLyoqXHJcbiAqIEV4dGVuZHMgdGhpcy5cclxuICovXHJcbmltcG9ydCB7QWJzdHJhY3ROb3RpZmllcn0gZnJvbSBcIi4vQWJzdHJhY3ROb3RpZmllclwiO1xyXG5pbXBvcnQge0Fic3RyYWN0RmFjYWRlfSBmcm9tIFwiLi9BYnN0cmFjdEZhY2FkZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0TWVkaWF0b3IgZXh0ZW5kcyBwdXJlbXZjLk1lZGlhdG9yIGltcGxlbWVudHMgcHVyZW12Yy5JTWVkaWF0b3IsIEFic3RyYWN0Tm90aWZpZXIge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZWRpYXRvck5hbWVcclxuICAgICAqIEBwYXJhbSB2aWV3Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lZGlhdG9yTmFtZTogc3RyaW5nLCB2aWV3Q29tcG9uZW50OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihtZWRpYXRvck5hbWUsIHZpZXdDb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFZpZXdDb21wb25lbnQoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0Vmlld0NvbXBvbmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldE1lZGlhdG9yTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5nZXRNZWRpYXRvck5hbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdmlld0NvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0Vmlld0NvbXBvbmVudCh2aWV3Q29tcG9uZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5zZXRWaWV3Q29tcG9uZW50KHZpZXdDb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmhhbmRsZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uUmVnaXN0ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIub25SZWdpc3RlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uUmVtb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLm9uUmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZU5vdGlmaWVyKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZU5vdGlmaWVyKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqIEBwYXJhbSBib2R5XHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VuZE5vdGlmaWNhdGlvbihuYW1lOiBzdHJpbmcsIGJvZHk/OiBhbnksIHR5cGU/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZmFjYWRlOiBhbnkgPSBBYnN0cmFjdEZhY2FkZS5nZXRJbnN0YW5jZSh0aGlzLm11bHRpdG9uS2V5KTtcclxuICAgICAgICBmYWNhZGUuc2VuZE5vdGlmaWNhdGlvbihuYW1lLCBib2R5LCB0eXBlKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE1lZGlhdG9yLnRzIiwiaW1wb3J0IHtBYnN0cmFjdE5vdGlmaWNhdGlvbn0gZnJvbSBcIi4vQWJzdHJhY3ROb3RpZmljYXRpb25cIjtcclxuXHJcbi8qKlxyXG4gKiBFeHRlbmQgdGhpcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdEZhY2FkZSBleHRlbmRzIHB1cmVtdmMuRmFjYWRlIGltcGxlbWVudHMgcHVyZW12Yy5JRmFjYWRlIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgICAgICB0aGlzLm11bHRpdG9uS2V5ID0ga2V5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vdGlmaWVzIHRoZSBmYWNhZGUncyB2aWV3IG9ic2VydmVycy5cclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5vdGlmeU9ic2VydmVycyhub3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3KVxyXG4gICAgICAgICAgICB0aGlzLnZpZXcubm90aWZ5T2JzZXJ2ZXJzKG5vdGlmaWNhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kcyBhIG5vdGlmaWNhdGlvbi5cclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gYm9keVxyXG4gICAgICogQHBhcmFtIHR5cGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlbmROb3RpZmljYXRpb24obmFtZTogc3RyaW5nLCBib2R5OiBhbnksIHR5cGU/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm5vdGlmeU9ic2VydmVycyhuZXcgQWJzdHJhY3ROb3RpZmljYXRpb24obmFtZSwgYm9keSwgdHlwZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25OYW1lXHJcbiAgICAgKiBAcGFyYW0gY29tbWFuZENsYXNzUmVmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3RlckNvbW1hbmQobm90aWZpY2F0aW9uTmFtZTogc3RyaW5nLCBjb21tYW5kQ2xhc3NSZWY6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJDb21tYW5kKG5vdGlmaWNhdGlvbk5hbWUsIGNvbW1hbmRDbGFzc1JlZik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHByb3h5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3RlclByb3h5KHByb3h5OiBwdXJlbXZjLklQcm94eSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyUHJveHkocHJveHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwcm94eU5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJldHJpZXZlUHJveHkocHJveHlOYW1lOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5yZXRyaWV2ZVByb3h5KHByb3h5TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lZGlhdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3Rlck1lZGlhdG9yKG1lZGlhdG9yOiBwdXJlbXZjLklNZWRpYXRvcik6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyTWVkaWF0b3IobWVkaWF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZWRpYXRvck5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJldHJpZXZlTWVkaWF0b3IobWVkaWF0b3JOYW1lOiBzdHJpbmcpOiBwdXJlbXZjLklNZWRpYXRvciB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnJldHJpZXZlTWVkaWF0b3IobWVkaWF0b3JOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVkaWF0b3JOYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYXNNZWRpYXRvcihtZWRpYXRvck5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5oYXNNZWRpYXRvcihtZWRpYXRvck5hbWUpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0RmFjYWRlLnRzIiwiaW1wb3J0IHtBYnN0cmFjdENvbnRyb2xsZXJ9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb250cm9sbGVyXCI7XHJcblxyXG4vKipcclxuICogVGhlIEJhdHRsZVNoaXAgY29udHJvbGxlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyTWFuYWdlciBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBIaXRUZXh0OiBzdHJpbmcgPSAnSGl0JztcclxuICAgIHB1YmxpYyBzdGF0aWMgTWlzc1RleHQ6IHN0cmluZyA9ICdNaXNzJztcclxuICAgIHB1YmxpYyBzdGF0aWMgRGVmYXVsdFN0YXRlVGV4dDogc3RyaW5nID0gJ05vbic7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNoaXBPblNxdWFyZTogc3RyaW5nID0gJ1NocCc7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb250cm9sbGVyTWFuYWdlciBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcpOiBDb250cm9sbGVyTWFuYWdlciB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLkNvbnRyb2xsZXIuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5Db250cm9sbGVyLmluc3RhbmNlTWFwW2tleV0gPSBuZXcgQ29udHJvbGxlck1hbmFnZXIoa2V5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuQ29udHJvbGxlci5pbnN0YW5jZU1hcFtrZXldIGFzIENvbnRyb2xsZXJNYW5hZ2VyO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9jb250cm9sbGVyL0NvbnRyb2xsZXJNYW5hZ2VyLnRzIiwiLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RQcm94eSBleHRlbmRzIHB1cmVtdmMuUHJveHkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwcm94eU5hbWVcclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHByb3h5TmFtZT86IHN0cmluZywgZGF0YT86IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3h5TmFtZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UHJveHlOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldFByb3h5TmFtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXREYXRhKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnNldERhdGEoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0RGF0YSgpOiBhbnkge1xyXG4gICAgICAgIHN1cGVyLmdldERhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvblJlZ2lzdGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLm9uUmVnaXN0ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvblJlbW92ZSgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RQcm94eS50cyIsImltcG9ydCB7QmF0dGxlU2hpcEZhY2FkZX0gZnJvbSAnLi9wcm9qZWN0L2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlJ1xyXG5pbXBvcnQge0dhbWVTZXR0aW5nc30gZnJvbSBcIi4vcHJvamVjdC9zdGF0aWNJbmZvcm1hdGlvbi9HYW1lU2V0dGluZ3NcIjtcclxuXHJcbm5ldyBjbGFzcyBNYWluXHJcbntcclxuICAgIHB1YmxpYyBteUZhY2FkZTogQmF0dGxlU2hpcEZhY2FkZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5teUZhY2FkZSA9IEJhdHRsZVNoaXBGYWNhZGUuZ2V0SW5zdGFuY2UoR2FtZVNldHRpbmdzLkJhdHRsZVNoaXBGYWNhZGVLZXkpO1xyXG4gICAgfTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9pbmRleC50cyIsIi8qKlxyXG4gKiAgRXh0ZW5kIHRoaXMgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RDb250cm9sbGVyIGV4dGVuZHMgcHVyZW12Yy5Db250cm9sbGVyIGltcGxlbWVudHMgcHVyZW12Yy5JQ29udHJvbGxlciB7XHJcblxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9ICdDb250cm9sbGVyJztcclxuICAgIHByaXZhdGUgbXVsdGl0b25rZXk6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgICAgICB0aGlzLm11bHRpdG9ua2V5ID0ga2V5XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeGVjdXRlIGEgcmVnaXN0ZXJlZCBjb21tYW5kIGJhc2VkIG9uIHRoZSByZWNlaXZlZCBub3RpZmljYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlQ29tbWFuZChub3RpZmljYXRpb246IHB1cmVtdmMuSU5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmV4ZWN1dGVDb21tYW5kKG5vdGlmaWNhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIGNvbW1hbmQgdG8gdGhpcyBjb250cm9sbGVyLlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvbk5hbWVcclxuICAgICAqIEBwYXJhbSBjb21tYW5kQ2xhc3NSZWZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyQ29tbWFuZChub3RpZmljYXRpb25OYW1lOiBzdHJpbmcsIGNvbW1hbmRDbGFzc1JlZjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5yZWdpc3RlckNvbW1hbmQobm90aWZpY2F0aW9uTmFtZSwgY29tbWFuZENsYXNzUmVmKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFZlcmlmaWVzIGlmIHRoaXMgY29udHJvbGxlciBoYXMgcmVnaXN0ZXJlZCBhIGNvbW1hbmQuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uTmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFzQ29tbWFuZChub3RpZmljYXRpb25OYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuaGFzQ29tbWFuZChub3RpZmljYXRpb25OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhIGNvbW1hbmQgZnJvbSB0aGlzIGNvbnRyb2xsZXIuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uTmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlQ29tbWFuZChub3RpZmljYXRpb25OYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5yZW1vdmVDb21tYW5kKG5vdGlmaWNhdGlvbk5hbWUpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29udHJvbGxlci50cyIsImltcG9ydCAncGl4aS5qcydcclxuaW1wb3J0IHtBYnN0cmFjdE1lZGlhdG9yfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0TWVkaWF0b3JcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZpZXdNYW5hZ2VyTWVkaWF0b3IgZXh0ZW5kcyBBYnN0cmFjdE1lZGlhdG9yIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVkaWF0b3JOYW1lXHJcbiAgICAgKiBAcGFyYW0gdmlld0NvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZWRpYXRvck5hbWU/OiBzdHJpbmcsIHZpZXdDb21wb25lbnQ/OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihtZWRpYXRvck5hbWUsIHZpZXdDb21wb25lbnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcgICAjICcgKyB0aGlzLmdldE1lZGlhdG9yTmFtZSgpICsgJyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbm90aWZpY2F0aW9uIHRoYXQgdGhlIFZpZXdNYW5hZ2VyTWVkaWF0b3IgaXMgaW50ZXJlc3RlZCBpbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKTogc3RyaW5nIFtdIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9WaWV3TWFuYWdlck1lZGlhdG9yLnRzIiwiLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3ROb3RpZmljYXRpb24gZXh0ZW5kcyBwdXJlbXZjLk5vdGlmaWNhdGlvbiB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqIEBwYXJhbSBib2R5XHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgdHlwZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGJvZHksIHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0TmFtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBib2R5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRCb2R5KGJvZHk6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnNldEJvZHkoYm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Qm9keSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5nZXRCb2R5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHR5cGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldFR5cGUodHlwZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuc2V0VHlwZSh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldFR5cGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBzdXBlci50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Tm90aWZpY2F0aW9uLnRzIiwiLyoqXHJcbiAqIFRoZSBhYnN0cmFjdCBtYWluIHZpZXcgbWFuYWdlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdFZpZXdNYW5hZ2VyIGV4dGVuZHMgcHVyZW12Yy5WaWV3IGltcGxlbWVudHMgcHVyZW12Yy5JVmlldyB7XHJcbiAgICBwcm90ZWN0ZWQgX211bHRpdG9uS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcbiAgICAgICAgdGhpcy5fbXVsdGl0b25LZXkgPSBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhIG1lZGlhdG9yIHRvIHRoaXMgdmlldy5cclxuICAgICAqIEBwYXJhbSBtZWRpYXRvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVnaXN0ZXJNZWRpYXRvcihtZWRpYXRvcjogcHVyZW12Yy5NZWRpYXRvcik6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyTWVkaWF0b3IobWVkaWF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZWRpYXRvck5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhhc01lZGlhdG9yKG1lZGlhdG9yTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmhhc01lZGlhdG9yKG1lZGlhdG9yTmFtZSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3TWFuYWdlci50cyIsImltcG9ydCB7QWJzdHJhY3RTaW1wbGVWaWV3fSBmcm9tIFwiLi4vLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0U2ltcGxlVmlld1wiO1xyXG5pbXBvcnQge1NxdWFyZVZpZXd9IGZyb20gXCIuL1NxdWFyZVZpZXdcIjtcclxuaW1wb3J0IHtCYXR0bGVTaGlwRmFjYWRlfSBmcm9tICcuLi8uLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZSdcclxuaW1wb3J0IHtSdWxlclZpZXd9IGZyb20gXCIuLi9ydWxlci9SdWxlclZpZXdcIjtcclxuaW1wb3J0ICdwaXhpLmpzJ1xyXG5pbXBvcnQge0NvbW1hbmRJbmZvcm1hdGlvbn0gZnJvbSBcIi4uLy4uL3N0YXRpY0luZm9ybWF0aW9uL0NvbW1hbmRJbmZvcm1hdGlvblwiO1xyXG5pbXBvcnQge01lZGlhdG9ySW5mb3JtYXRpb259IGZyb20gXCIuLi8uLi9zdGF0aWNJbmZvcm1hdGlvbi9NZWRpYXRvckluZm9ybWF0aW9uXCI7XHJcbmltcG9ydCB7R2FtZVNldHRpbmdzfSBmcm9tIFwiLi4vLi4vc3RhdGljSW5mb3JtYXRpb24vR2FtZVNldHRpbmdzXCI7XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyB0aGUgZ3JpZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBHcmlkVmlldyBleHRlbmRzIEFic3RyYWN0U2ltcGxlVmlldyB7XHJcbiAgICBwcml2YXRlIEdyaWRTcXVhcmVzOiBTcXVhcmVWaWV3W11bXTtcclxuICAgIHB1YmxpYyBuYW1lID0gJ0dyaWRWaWV3JztcclxuICAgIHByaXZhdGUgbWF4U2hpcHNPblRoaXNHcmlkOiBudW1iZXIgPSBHYW1lU2V0dGluZ3MuTWF4aW11bU51bWJlck9mU2hpcHNPbkFHcmlkO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50TnVtYmVyT2ZTaGlwczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3BsYXllcjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwbGF5ZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZS5jb25jYXQocGxheWVyKTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5jaGVja1BsYXllcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcgICAjICcgKyB0aGlzLm5hbWUgKyAnIGNyZWF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzaGlwSW5mb1xyXG4gICAgICogQHBhcmFtIHBsYXllclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZmlsbEdyaWRXaXRoQmF0dGxlU2hpcChwb3NpdGlvbjogQXJyYXk8bnVtYmVyPiwgc2hpcEluZm86IHN0cmluZywgcGxheWVyOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGdyaWREaW1lbnNpb25zOiBQSVhJLlJlY3RhbmdsZSA9IHRoaXMuZ2V0VUlDb250YWluZXIoKS5nZXRCb3VuZHMoKTtcclxuICAgICAgICBsZXQgeFBvc2l0aW9uOiBudW1iZXIgPSBwb3NpdGlvblswXTtcclxuICAgICAgICBsZXQgeVBvc2l0aW9uOiBudW1iZXIgPSBwb3NpdGlvblsxXTtcclxuICAgICAgICBsZXQgbmV3U2hpcEluZm86IGFueSA9IHNoaXBJbmZvLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgbGV0IHNxdWFyZVdpZHRoOiBudW1iZXIgPSBHYW1lU2V0dGluZ3MuU3F1YXJlV2lkdGggKiBHYW1lU2V0dGluZ3MuR3JpZFNjYWxlO1xyXG5cclxuICAgICAgICBpZiAocGxheWVyID09IHRoaXMuX3BsYXllcikge1xyXG5cclxuICAgICAgICAgICAgaWYgKCh4UG9zaXRpb24gPiBncmlkRGltZW5zaW9ucy54KSAmJiAoeFBvc2l0aW9uIDwgZ3JpZERpbWVuc2lvbnMueCArIGdyaWREaW1lbnNpb25zLndpZHRoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCh5UG9zaXRpb24gPiBncmlkRGltZW5zaW9ucy55KSAmJiAoeVBvc2l0aW9uIDwgZ3JpZERpbWVuc2lvbnMueSArIGdyaWREaW1lbnNpb25zLmhlaWdodCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgR2FtZVNldHRpbmdzLk51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgR2FtZVNldHRpbmdzLk51bWJlck9mU3F1YXJlc0hvcml6b250YWxseTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3F1YXJlWFBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLkdyaWRTcXVhcmVzW2ldW2pdLmdldFBvc2l0aW9uKClbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3F1YXJlWVBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLkdyaWRTcXVhcmVzW2ldW2pdLmdldFBvc2l0aW9uKClbMV07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoeFBvc2l0aW9uID49IHNxdWFyZVhQb3NpdGlvbiAmJiB4UG9zaXRpb24gPCBzcXVhcmVYUG9zaXRpb24gKyBzcXVhcmVXaWR0aCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoeVBvc2l0aW9uID49IHNxdWFyZVlQb3NpdGlvbiAmJiB5UG9zaXRpb24gPCBzcXVhcmVZUG9zaXRpb24gKyBzcXVhcmVXaWR0aCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1NoaXBJbmZvWzBdID09IEdhbWVTZXR0aW5ncy5TaGlwSG9yaXpvbnRhbFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG51bWJlck9mU3F1YXJlczogbnVtYmVyID0gTWF0aC5yb3VuZChwb3NpdGlvblsyXSAvIEdhbWVTZXR0aW5ncy5TcXVhcmVXaWR0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TnVtYmVyT2ZTaGlwcyA8IHRoaXMubWF4U2hpcHNPblRoaXNHcmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4OiBudW1iZXIgPSBqOyB4IDwgaiArIG51bWJlck9mU3F1YXJlczsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HcmlkU3F1YXJlc1tpXVt4XS5maWxsU3F1YXJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVRoZUdyaWRDb250cm9sbGVyKGksIGosIG51bWJlck9mU3F1YXJlcywgR2FtZVNldHRpbmdzLlNoaXBIb3Jpem9udGFsVHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROdW1iZXJPZlNoaXBzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVRoYXRQbGF5ZXJGaW5pc2hlZFBsYWNpbmdUaGVTaGlwcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5ld1NoaXBJbmZvWzBdID09IEdhbWVTZXR0aW5ncy5TaGlwVmVydGljYWxUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBudW1iZXJPZlNxdWFyZXM6IG51bWJlciA9IE1hdGgucm91bmQocG9zaXRpb25bM10gLyBHYW1lU2V0dGluZ3MuU3F1YXJlV2lkdGgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudE51bWJlck9mU2hpcHMgPCB0aGlzLm1heFNoaXBzT25UaGlzR3JpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeDogbnVtYmVyID0gaTsgeCA8IGkgKyBudW1iZXJPZlNxdWFyZXM7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR3JpZFNxdWFyZXNbeF1bal0uZmlsbFNxdWFyZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlUaGVHcmlkQ29udHJvbGxlcihpLCBqLCBudW1iZXJPZlNxdWFyZXMsIEdhbWVTZXR0aW5ncy5TaGlwVmVydGljYWxUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE51bWJlck9mU2hpcHMrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5VGhhdFBsYXllckZpbmlzaGVkUGxhY2luZ1RoZVNoaXBzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoaXMgZ3JpZCdzIGNvbnRhaW5lci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVJQ29udGFpbmVyKCk6IFBJWEkuQ29udGFpbmVyIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIucGl2b3QueCA9IHRoaXMuX2NvbnRhaW5lci53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnBpdm90LnkgPSB0aGlzLl9jb250YWluZXIuaGVpZ2h0IC8gMjtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0VUlDb250YWluZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgaXMgdXNlZCB0byBoaWRlIHRoZSBzaGlwcyB0aGF0IGNhbiBiZSBkcmFnZ2VkIGFuZCBkcm9wcGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGlkZVRoZVNoaXBzKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWVTZXR0aW5ncy5OdW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVTZXR0aW5ncy5OdW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR3JpZFNxdWFyZXNbaV1bal0uaGlkZVRoZVNoaXBQYXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWFyY2ggZm9yIGEgU3F1YXJlIGluIHRoaXMgR3JpZC5cclxuICAgICAqIEBwYXJhbSBzcXVhcmVWaWV3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYXNTcXVhcmUoc3F1YXJlVmlldzogU3F1YXJlVmlldyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBHYW1lU2V0dGluZ3MuTnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBHYW1lU2V0dGluZ3MuTnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkdyaWRTcXVhcmVzW2ldW2pdID09PSBzcXVhcmVWaWV3KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZ3JpZFhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIGdyaWRZUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVXaWR0aFxyXG4gICAgICogQHBhcmFtIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHlcclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHlcclxuICAgICAqIEBwYXJhbSBncmlkQm9yZGVyQ29sb3JcclxuICAgICAqIEBwYXJhbSBncmlkU3F1YXJlRmlsbENvbG9yXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlQm9hcmQoZ3JpZFhQb3NpdGlvbjogbnVtYmVyLCBncmlkWVBvc2l0aW9uOiBudW1iZXIsIHNxdWFyZVdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk6IG51bWJlciwgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OiBudW1iZXIsIGdyaWRCb3JkZXJDb2xvcjogbnVtYmVyLCBncmlkU3F1YXJlRmlsbENvbG9yOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbmV3WFBvc2l0aW9uOiBudW1iZXIsXHJcbiAgICAgICAgICAgIG5ld1lQb3NpdGlvbjogbnVtYmVyID0gZ3JpZFlQb3NpdGlvbixcclxuICAgICAgICAgICAgc3F1YXJlOiBTcXVhcmVWaWV3LCBrZXk6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuR3JpZFNxdWFyZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuR3JpZFNxdWFyZXNbaV0gPSBbXTtcclxuICAgICAgICAgICAgbmV3WFBvc2l0aW9uID0gZ3JpZFhQb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk7IGorKykge1xyXG4gICAgICAgICAgICAgICAga2V5Kys7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUgPSBuZXcgU3F1YXJlVmlldyhuZXdYUG9zaXRpb24gKyBqICogc3F1YXJlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3WVBvc2l0aW9uLCBzcXVhcmVXaWR0aCwgZ3JpZEJvcmRlckNvbG9yLCBncmlkU3F1YXJlRmlsbENvbG9yLCBqLCBpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR3JpZFNxdWFyZXNbaV1bal0gPSBzcXVhcmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV3WVBvc2l0aW9uICs9IHNxdWFyZVdpZHRoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk7IGkrKylcclxuICAgICAgICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseTsgaisrKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyLmFkZENoaWxkKHRoaXMuR3JpZFNxdWFyZXNbaV1bal0uZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgR3JpZFNxdWFyZXMgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB4UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB5UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5XHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5XHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlV2lkdGhcclxuICAgICAqIEBwYXJhbSBncmlkQm9yZGVyQ29sb3JcclxuICAgICAqIEBwYXJhbSBydWxlclRleHRDb2xvclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJ1bGVyKHhQb3NpdGlvbjogbnVtYmVyLCB5UG9zaXRpb246IG51bWJlciwgbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk6IG51bWJlciwgc3F1YXJlV2lkdGg6IG51bWJlciwgZ3JpZEJvcmRlckNvbG9yOiBudW1iZXIsIHJ1bGVyVGV4dENvbG9yOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcnVsZXJWaWV3OiBSdWxlclZpZXcgPSBuZXcgUnVsZXJWaWV3KHhQb3NpdGlvbiwgeVBvc2l0aW9uLCBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5LFxyXG4gICAgICAgICAgICBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHksIHNxdWFyZVdpZHRoLCBncmlkQm9yZGVyQ29sb3IsIHJ1bGVyVGV4dENvbG9yKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmFkZENoaWxkKHJ1bGVyVmlldy5nZXRVSUNvbnRhaW5lcigpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tQbGF5ZXIoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9wbGF5ZXIpIHtcclxuICAgICAgICAgICAgY2FzZSBHYW1lU2V0dGluZ3MuUGxheWVyT25lOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCb2FyZChHYW1lU2V0dGluZ3MuR3JpZDFYUG9zaXRpb24sIEdhbWVTZXR0aW5ncy5HcmlkMVlQb3NpdGlvbiwgR2FtZVNldHRpbmdzLlNxdWFyZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVTZXR0aW5ncy5OdW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5LCBHYW1lU2V0dGluZ3MuTnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5LCBHYW1lU2V0dGluZ3MuR3JpZDFCb3JkZXJDb2xvciwgR2FtZVNldHRpbmdzLkdyaWRTcXVhcmVGaWxsQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVSdWxlcihHYW1lU2V0dGluZ3MuR3JpZDFYUG9zaXRpb24sIEdhbWVTZXR0aW5ncy5HcmlkMVlQb3NpdGlvbiwgR2FtZVNldHRpbmdzLk51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHksXHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZVNldHRpbmdzLk51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSwgR2FtZVNldHRpbmdzLlNxdWFyZVdpZHRoLCBHYW1lU2V0dGluZ3MuR3JpZDFCb3JkZXJDb2xvciwgR2FtZVNldHRpbmdzLlJ1bGVyVGV4dENvbG9yKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBHYW1lU2V0dGluZ3MuUGxheWVyVHdvOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCb2FyZChHYW1lU2V0dGluZ3MuR3JpZDJYUG9zaXRpb24sIEdhbWVTZXR0aW5ncy5HcmlkMllQb3NpdGlvbiwgR2FtZVNldHRpbmdzLlNxdWFyZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVTZXR0aW5ncy5OdW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5LCBHYW1lU2V0dGluZ3MuTnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5LCBHYW1lU2V0dGluZ3MuR3JpZDJCb3JkZXJDb2xvciwgR2FtZVNldHRpbmdzLkdyaWRTcXVhcmVGaWxsQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVSdWxlcihHYW1lU2V0dGluZ3MuR3JpZDJYUG9zaXRpb24sIEdhbWVTZXR0aW5ncy5HcmlkMllQb3NpdGlvbiwgR2FtZVNldHRpbmdzLk51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHksXHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZVNldHRpbmdzLk51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSwgR2FtZVNldHRpbmdzLlNxdWFyZVdpZHRoLCBHYW1lU2V0dGluZ3MuR3JpZDJCb3JkZXJDb2xvciwgR2FtZVNldHRpbmdzLlJ1bGVyVGV4dENvbG9yKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbm90aWZ5VGhhdFBsYXllckZpbmlzaGVkUGxhY2luZ1RoZVNoaXBzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnROdW1iZXJPZlNoaXBzID09PSB0aGlzLm1heFNoaXBzT25UaGlzR3JpZCkge1xyXG4gICAgICAgICAgICBsZXQgZmFjYWRlID0gQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShHYW1lU2V0dGluZ3MuQmF0dGxlU2hpcEZhY2FkZUtleSk7XHJcbiAgICAgICAgICAgIGZhY2FkZS5zZW5kTm90aWZpY2F0aW9uKE1lZGlhdG9ySW5mb3JtYXRpb24uVGV4dFVwZGF0ZSwgTWVkaWF0b3JJbmZvcm1hdGlvbi5NYXhpbXVtTnVtYmVyT2ZTaGlwUmVhY2hlZCwgdGhpcy5fcGxheWVyKTtcclxuICAgICAgICAgICAgZmFjYWRlLnNlbmROb3RpZmljYXRpb24oQ29tbWFuZEluZm9ybWF0aW9uLlBsYXllckZpbmlzaGVkUGxhY2luZ1RoZVNoaXBzQ29tbWFuZCwgdGhpcy5fcGxheWVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBhIHBsYXllciBtaXNzZWQsdGhlIGNvbnRyb2xsZXIgbm90aWZpZXMgdGhlIFZpZXcgdG8gc2hvdyB0aGUgbWlzcyBvbiB0aGUgZ3JpZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZVRoZVZpZXdXaXRoQUhpdChzcXVhcmVQb3NpdGlvbjogQXJyYXk8bnVtYmVyPik6IHZvaWQge1xyXG4gICAgICAgIGxldCBpOiBudW1iZXIgPSBzcXVhcmVQb3NpdGlvblswXSwgajogbnVtYmVyID0gc3F1YXJlUG9zaXRpb25bMV07XHJcbiAgICAgICAgdGhpcy5HcmlkU3F1YXJlc1tpXVtqXS5oaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIGEgcGxheWVyIGhpdHMsdGhlIGNvbnRyb2xsZXIgbm90aWZpZXMgdGhlIFZpZXcgdG8gc2hvdyB0aGUgbWlzcyBvbiB0aGUgZ3JpZC5cclxuICAgICAqIEBwYXJhbSBzcXVhcmVQb3NpdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlVGhlVmlld1dpdGhBTWlzcyhzcXVhcmVQb3NpdGlvbjogQXJyYXk8bnVtYmVyPik6IHZvaWQge1xyXG4gICAgICAgIGxldCBpOiBudW1iZXIgPSBzcXVhcmVQb3NpdGlvblswXSwgajogbnVtYmVyID0gc3F1YXJlUG9zaXRpb25bMV07XHJcbiAgICAgICAgdGhpcy5HcmlkU3F1YXJlc1tpXVtqXS5taXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlcclxuICAgICAqIEBwYXJhbSBqXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzXHJcbiAgICAgKiBAcGFyYW0gc2hpcFR5cGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBub3RpZnlUaGVHcmlkQ29udHJvbGxlcihpOiBudW1iZXIsIGo6IG51bWJlciwgbnVtYmVyT2ZTcXVhcmVzOiBudW1iZXIsIHNoaXBUeXBlOiBHYW1lU2V0dGluZ3MpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZmFjYWRlOiBhbnkgPSBCYXR0bGVTaGlwRmFjYWRlLmdldEluc3RhbmNlKEdhbWVTZXR0aW5ncy5CYXR0bGVTaGlwRmFjYWRlS2V5KTtcclxuICAgICAgICBmYWNhZGUuc2VuZE5vdGlmaWNhdGlvbihNZWRpYXRvckluZm9ybWF0aW9uLlNoaXBQb3NpdGlvbkluZm8sIFtbaSwgaiwgbnVtYmVyT2ZTcXVhcmVzXSwgdGhpcy5fcGxheWVyXSwgc2hpcFR5cGUpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L2dyaWQvR3JpZFZpZXcudHMiLCJpbXBvcnQge0hpdFZpZXd9IGZyb20gXCIuLi9oaXRzL0hpdFZpZXdcIjtcclxuaW1wb3J0IHtNaXNzVmlld30gZnJvbSBcIi4uL2hpdHMvTWlzc1ZpZXdcIjtcclxuaW1wb3J0IHtCYXR0bGVTaGlwRmFjYWRlfSBmcm9tIFwiLi4vLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0IHtBYnN0cmFjdFNpbXBsZVZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RTaW1wbGVWaWV3XCI7XHJcbmltcG9ydCB7TWVkaWF0b3JJbmZvcm1hdGlvbn0gZnJvbSBcIi4uLy4uL3N0YXRpY0luZm9ybWF0aW9uL01lZGlhdG9ySW5mb3JtYXRpb25cIjtcclxuaW1wb3J0IHtHYW1lU2V0dGluZ3N9IGZyb20gXCIuLi8uLi9zdGF0aWNJbmZvcm1hdGlvbi9HYW1lU2V0dGluZ3NcIjtcclxuXHJcbi8qKlxyXG4gKiBTbWFsbCByZWN0YW5nbGUgY2xhc3NcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTcXVhcmVWaWV3IGV4dGVuZHMgQWJzdHJhY3RTaW1wbGVWaWV3IHtcclxuXHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGhvcml6b250YWxJbmRleDogbnVtYmVyO1xyXG4gICAgcHVibGljIHZlcnRpY2FsSW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBib3JkZXJDb2xvcjogbnVtYmVyO1xyXG4gICAgcHVibGljIGZpbGxDb2xvcjogbnVtYmVyO1xyXG5cclxuICAgIC8qKkNvbnRhaW5zIHRoZSBzcXVhcmUncyBib3JkZXIgKi9cclxuICAgIHB1YmxpYyBzcXVhcmVHcmFwaGljczogUElYSS5HcmFwaGljcztcclxuXHJcbiAgICAvKipDb250YWlucyB0aGUgbWFya2luZyB3aGljaCB3aWxsIGJlIGVpdGhlciBhIGhpdCBlaXRoZXIgYSBtaXNzICovXHJcbiAgICBwdWJsaWMgc3F1YXJlTWFya2luZzogUElYSS5HcmFwaGljcztcclxuICAgIHB1YmxpYyBzcXVhcmVFdmVudDogc3RyaW5nID0gJ3BvaW50ZXJ0YXAnO1xyXG5cclxuICAgIC8qKlRoZSBIaXRWaWV3IGFuZCB0aGUgTWlzc1ZpZXcgKi9cclxuICAgIHByaXZhdGUgaGl0VmlldzogSGl0VmlldztcclxuICAgIHByaXZhdGUgbWlzc1ZpZXc6IE1pc3NWaWV3O1xyXG5cclxuICAgIC8qKlNxdWFyZSdzIGdsb3cgKi9cclxuICAgIHByaXZhdGUgc3F1YXJlR2xvdzogUElYSS5HcmFwaGljcztcclxuXHJcbiAgICAvKipTaGlwJ3MgU3F1YXJlIGZpbGwgb2JqZWN0ICovXHJcbiAgICBwdWJsaWMgc2hpcFNxdWFyZTogUElYSS5HcmFwaGljcztcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlWFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlWVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlV2lkdGhcclxuICAgICAqIEBwYXJhbSBib3JkZXJDb2xvclxyXG4gICAgICogQHBhcmFtIGZpbGxDb2xvclxyXG4gICAgICogQHBhcmFtIGhvcml6b250YWxJbmRleFxyXG4gICAgICogQHBhcmFtIHZlcnRpY2FsSW5kZXhcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioc3F1YXJlWFBvc2l0aW9uOiBudW1iZXIsIHNxdWFyZVlQb3NpdGlvbjogbnVtYmVyLCBzcXVhcmVXaWR0aDogbnVtYmVyLCBib3JkZXJDb2xvcjogbnVtYmVyLCBmaWxsQ29sb3I6IG51bWJlciwgaG9yaXpvbnRhbEluZGV4PzogbnVtYmVyLCB2ZXJ0aWNhbEluZGV4PzogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnggPSBzcXVhcmVYUG9zaXRpb247XHJcbiAgICAgICAgdGhpcy55ID0gc3F1YXJlWVBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBzcXVhcmVXaWR0aDtcclxuICAgICAgICB0aGlzLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgdGhpcy5maWxsQ29sb3IgPSBmaWxsQ29sb3I7XHJcbiAgICAgICAgdGhpcy5ob3Jpem9udGFsSW5kZXggPSBob3Jpem9udGFsSW5kZXg7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEluZGV4ID0gdmVydGljYWxJbmRleDtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVTcXVhcmVHcmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU3F1YXJlR2xvdygpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlSGl0TWlzc0dyYXBoaWNzKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVTaGlwR3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLmFkZFRvQ29udGFpbmVyKHRoaXMuc3F1YXJlR3JhcGhpY3MpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9Db250YWluZXIodGhpcy5zcXVhcmVNYXJraW5nKTtcclxuICAgICAgICB0aGlzLmFkZFRvQ29udGFpbmVyKHRoaXMuc3F1YXJlR2xvdyk7XHJcbiAgICAgICAgdGhpcy5hZGRUb0NvbnRhaW5lcih0aGlzLnNoaXBTcXVhcmUpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVNxdWFyZUludGVyYWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGNvbnRhaW5zIHRoZSBzcXVhcmUncyBib3JkZXIuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlU3F1YXJlR3JhcGhpY3MoKSB7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHcmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVNYXJraW5nID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdsb3cgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMuc2hpcFNxdWFyZSA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3F1YXJlR3JhcGhpY3MubGluZVN0eWxlKDcsIHRoaXMuYm9yZGVyQ29sb3IsIDEpO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR3JhcGhpY3MuYmVnaW5GaWxsKHRoaXMuZmlsbENvbG9yKTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdyYXBoaWNzLmRyYXdSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLndpZHRoKTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdyYXBoaWNzLmVuZEZpbGwoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGNvbnRhaW5zIHRoZSBYIChoaXQpIG9yIHRoZSBPIChtaXNzKS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVIaXRNaXNzR3JhcGhpY3MoKSB7XHJcbiAgICAgICAgdGhpcy5oaXRWaWV3ID0gbmV3IEhpdFZpZXcodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgpO1xyXG4gICAgICAgIHRoaXMuaGl0Vmlldy5zZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubWlzc1ZpZXcgPSBuZXcgTWlzc1ZpZXcodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgpO1xyXG4gICAgICAgIHRoaXMubWlzc1ZpZXcuc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNxdWFyZU1hcmtpbmcuYWRkQ2hpbGQodGhpcy5oaXRWaWV3LmdldFVJQ29udGFpbmVyKCksIHRoaXMubWlzc1ZpZXcuZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHcmFwaGljcy5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHcmFwaGljcy5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgY29udGFpbnMgdGhlIGdsb3cgdGhhdCBpcyBzaG93biB3aGVuIGEgcGxheWVyIG1vdXNlLW92ZXJzIG92ZXIgdGhpcyBzcXVhcmUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlU3F1YXJlR2xvdygpIHtcclxuICAgICAgICB0aGlzLnNxdWFyZUdsb3cubGluZVN0eWxlKDEsIDB4ZmYwMDAwLCAwLjIpO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR2xvdy5iZWdpbkZpbGwoMHhmZjAxMDAsIDAuMik7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHbG93LmRyYXdSZWN0KHRoaXMueCArIDUsIHRoaXMueSArIDUsIHRoaXMud2lkdGggLSA1LCB0aGlzLndpZHRoIC0gNSk7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHbG93LmVuZEZpbGwoKTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdsb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBjb250YWlucyBhIHBhcnQgb2YgdGhlIHNoaXAuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlU2hpcEdyYXBoaWNzKCkge1xyXG4gICAgICAgIHRoaXMuc2hpcFNxdWFyZS5saW5lU3R5bGUoMCwgR2FtZVNldHRpbmdzLlNxdWFyZUZpbGxDb2xvcik7XHJcbiAgICAgICAgdGhpcy5zaGlwU3F1YXJlLmJlZ2luRmlsbChHYW1lU2V0dGluZ3MuU3F1YXJlRmlsbENvbG9yLCAwLjYpO1xyXG4gICAgICAgIHRoaXMuc2hpcFNxdWFyZS5kcmF3UmVjdCh0aGlzLnggKyA1LCB0aGlzLnkgKyA1LCB0aGlzLndpZHRoIC0gNSwgdGhpcy53aWR0aCAtIDUpO1xyXG4gICAgICAgIHRoaXMuc2hpcFNxdWFyZS5lbmRGaWxsKCk7XHJcbiAgICAgICAgdGhpcy5zaGlwU3F1YXJlLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVNxdWFyZUludGVyYWN0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR3JhcGhpY3NcclxuICAgICAgICAgICAgLm9uKHRoaXMuc3F1YXJlRXZlbnQsIHRoaXMuaGFuZGxlTW91c2VEb3duLCB0aGlzKVxyXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJvdmVyJywgdGhpcy5oYW5kbGVNb3VzZU92ZXIpXHJcbiAgICAgICAgICAgIC5vbigncG9pbnRlcm91dCcsIHRoaXMuaGFuZGxlTW91c2VPdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgeCBhbmQgeSBjb29yZGluYXRlcyBmb3IgdGhpcyBzcXVhcmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRQb3NpdGlvbigpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMuc3F1YXJlR3JhcGhpY3MuZ2V0Qm91bmRzKCkueCwgdGhpcy5zcXVhcmVHcmFwaGljcy5nZXRCb3VuZHMoKS55XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlTW91c2VPdmVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR2xvdy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZU1vdXNlT3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR2xvdy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogIEhhbmRsZXMgdGhlIGNsaWNrZWQgZG93biBldmVudFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZU1vdXNlRG93bigpOiB2b2lkIHtcclxuICAgICAgICBCYXR0bGVTaGlwRmFjYWRlLmdldEluc3RhbmNlKEdhbWVTZXR0aW5ncy5CYXR0bGVTaGlwRmFjYWRlS2V5KVxyXG4gICAgICAgICAgICAuc2VuZE5vdGlmaWNhdGlvbihNZWRpYXRvckluZm9ybWF0aW9uLlNxdWFyZUNsaWNrUmVxdWVzdCwgW1t0aGlzLnZlcnRpY2FsSW5kZXgsIHRoaXMuaG9yaXpvbnRhbEluZGV4XSwgdGhpc10sIHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93cyBhbiBYIG9uIHRoZSBzcXVhcmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oaXRWaWV3LnNldEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICB0aGlzLmRpc2FibGVJbnRlcmFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvd3MgYSBtaXNzIG9uIHRoZSBzcXVhcmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtaXNzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWlzc1ZpZXcuc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZUludGVyYWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaWxsIGEgc3F1YXJlIHdpdGggYSBwYXJ0IG9mIGEgQmF0dGxlU2hpcFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZmlsbFNxdWFyZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNoaXBTcXVhcmUudmlzaWJsZSA9IHRydWU7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc2FibGUgdGhlIFNxdWFyZSdzIGludGVyYWN0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkaXNhYmxlSW50ZXJhY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHcmFwaGljcy5pbnRlcmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR2xvdy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVNYXJraW5nLmludGVyYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGlkZXMgdGhlIHNoaXBzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGlkZVRoZVNoaXBQYXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2hpcFNxdWFyZS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvZ3JpZC9TcXVhcmVWaWV3LnRzIiwiaW1wb3J0IHtBYnN0cmFjdFNpbXBsZVZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RTaW1wbGVWaWV3XCI7XHJcbmltcG9ydCB7R2FtZVNldHRpbmdzfSBmcm9tIFwiLi4vLi4vc3RhdGljSW5mb3JtYXRpb24vR2FtZVNldHRpbmdzXCI7XHJcblxyXG4vKipcclxuICogIFRoZSBYIGluc2lkZSBhIHNxdWFyZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBIaXRWaWV3IGV4dGVuZHMgQWJzdHJhY3RTaW1wbGVWaWV3IHtcclxuXHJcbiAgICBwdWJsaWMgZ3JhcGhpY3M6IFBJWEkuR3JhcGhpY3M7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHNxdWFyZVhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHNxdWFyZVhQb3NpdGlvbjogbnVtYmVyLCBzcXVhcmVZUG9zaXRpb246IG51bWJlciwgc3F1YXJlV2lkdGg6IG51bWJlcikge1xyXG5cclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVN0eWxlKDEwLCBHYW1lU2V0dGluZ3MuSGl0Q29sb3IpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKHNxdWFyZVhQb3NpdGlvbiArIHNxdWFyZVdpZHRoIC8gMywgc3F1YXJlWVBvc2l0aW9uICsgc3F1YXJlV2lkdGggLSBzcXVhcmVXaWR0aCAvIDMpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVRvKHNxdWFyZVhQb3NpdGlvbiArIHNxdWFyZVdpZHRoIC0gc3F1YXJlV2lkdGggLyAzLCBzcXVhcmVZUG9zaXRpb24gKyBzcXVhcmVXaWR0aCAvIDMpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKHNxdWFyZVhQb3NpdGlvbiArIHNxdWFyZVdpZHRoIC8gMywgc3F1YXJlWVBvc2l0aW9uICsgc3F1YXJlV2lkdGggLyAzKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVUbyhzcXVhcmVYUG9zaXRpb24gKyBzcXVhcmVXaWR0aCAtIHNxdWFyZVdpZHRoIC8gMywgc3F1YXJlWVBvc2l0aW9uICsgc3F1YXJlV2lkdGggLSBzcXVhcmVXaWR0aCAvIDMpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9Db250YWluZXIodGhpcy5ncmFwaGljcyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvaGl0cy9IaXRWaWV3LnRzIiwiaW1wb3J0IHtBYnN0cmFjdFNpbXBsZVZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RTaW1wbGVWaWV3XCI7XHJcbmltcG9ydCB7R2FtZVNldHRpbmdzfSBmcm9tIFwiLi4vLi4vc3RhdGljSW5mb3JtYXRpb24vR2FtZVNldHRpbmdzXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBjcmVhdGVzIHRoZSBtaXNzIGluc2lkZSBhIEdyaWQncyBzcXVhcmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWlzc1ZpZXcgZXh0ZW5kcyBBYnN0cmFjdFNpbXBsZVZpZXcge1xyXG5cclxuICAgIHB1YmxpYyBncmFwaGljczogUElYSS5HcmFwaGljcztcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlWFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlWVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlV2lkdGhcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioc3F1YXJlWFBvc2l0aW9uOiBudW1iZXIsIHNxdWFyZVlQb3NpdGlvbjogbnVtYmVyLCBzcXVhcmVXaWR0aDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSg4LCBHYW1lU2V0dGluZ3MuTWlzc0NvbG9yKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmRyYXdDaXJjbGUoc3F1YXJlWFBvc2l0aW9uICsgc3F1YXJlV2lkdGggLyAyLCBzcXVhcmVZUG9zaXRpb24gKyBzcXVhcmVXaWR0aCAvIDIsIHNxdWFyZVdpZHRoIC8gMy45KTtcclxuICAgICAgICB0aGlzLmFkZFRvQ29udGFpbmVyKHRoaXMuZ3JhcGhpY3MpO1xyXG5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9oaXRzL01pc3NWaWV3LnRzIiwiaW1wb3J0IHtSdWxlclNxdWFyZX0gZnJvbSBcIi4vUnVsZXJTcXVhcmVcIjtcclxuaW1wb3J0IHtBYnN0cmFjdFNpbXBsZVZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RTaW1wbGVWaWV3XCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBjcmVhdGVzIHRoZSBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBydWxlciBhcm91bmQgdGhlIGdyaWRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBSdWxlclZpZXcgZXh0ZW5kcyBBYnN0cmFjdFNpbXBsZVZpZXcge1xyXG5cclxuICAgIHB1YmxpYyB4UG9zaXRpb246IG51bWJlcjtcclxuICAgIHB1YmxpYyB5UG9zaXRpb246IG51bWJlcjtcclxuICAgIHB1YmxpYyBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc3F1YXJlV2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBib3JkZXJDb2xvcjogbnVtYmVyO1xyXG4gICAgcHVibGljIHRleHRDb2xvcjogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgUnVsZXJUeXBlOiBBcnJheTxzdHJpbmc+ID0gWydOVU1CRVInLFxyXG4gICAgICAgICdMRVRURVInXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0geFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0geVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseVxyXG4gICAgICogQHBhcmFtIG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseVxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKiBAcGFyYW0gYm9yZGVyQ29sb3JcclxuICAgICAqIEBwYXJhbSB0ZXh0Q29sb3JcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoeFBvc2l0aW9uOiBudW1iZXIsIHlQb3NpdGlvbjogbnVtYmVyLCBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk6IG51bWJlciwgc3F1YXJlV2lkdGg6IG51bWJlciwgYm9yZGVyQ29sb3I6IG51bWJlciwgdGV4dENvbG9yOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMueFBvc2l0aW9uID0geFBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMueVBvc2l0aW9uID0geVBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseSA9IG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHkgPSBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVXaWR0aCA9IHNxdWFyZVdpZHRoO1xyXG4gICAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvcjtcclxuICAgICAgICB0aGlzLnRleHRDb2xvciA9IHRleHRDb2xvcjtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJ1bGVyVmVydGljYWxseSgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUnVsZXJIb3Jpem9udGFsbHkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIGhvcml6b250YWwgcnVsZXIgd2hpY2ggY29udGFpbnMgbnVtYmVycyBhbmQgYmVnaW5zIHdpdGggMFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJ1bGVySG9yaXpvbnRhbGx5KCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm51bWJlck9mU3F1YXJlc0hvcml6b250YWxseTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBydWxlclNxdWFyZTogUnVsZXJTcXVhcmUgPSBuZXcgUnVsZXJTcXVhcmUodGhpcy54UG9zaXRpb24gKyBpICogdGhpcy5zcXVhcmVXaWR0aCxcclxuICAgICAgICAgICAgICAgIHRoaXMueVBvc2l0aW9uICsgdGhpcy5udW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5ICogdGhpcy5zcXVhcmVXaWR0aCxcclxuICAgICAgICAgICAgICAgIHRoaXMuc3F1YXJlV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMudGV4dENvbG9yLCB0aGlzLlJ1bGVyVHlwZVswXSwgaSArIDEpO1xyXG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIuYWRkQ2hpbGQocnVsZXJTcXVhcmUuZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgdmVydGljYWwgcnVsZXIgd2hpY2ggY29udGFpbnMgbGV0dGVycyBhbmQgYmVnaW5zIHdpdGggQVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJ1bGVyVmVydGljYWxseSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBydWxlclNxdWFyZTogUnVsZXJTcXVhcmUgPSBuZXcgUnVsZXJTcXVhcmUodGhpcy54UG9zaXRpb24gLSB0aGlzLnNxdWFyZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgdGhpcy55UG9zaXRpb24gKyBpICogdGhpcy5zcXVhcmVXaWR0aCxcclxuICAgICAgICAgICAgICAgIHRoaXMuc3F1YXJlV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMudGV4dENvbG9yLCB0aGlzLlJ1bGVyVHlwZVsxXSwgNjUgKyBpKTtcclxuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyLmFkZENoaWxkKHJ1bGVyU3F1YXJlLmdldFVJQ29udGFpbmVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9ydWxlci9SdWxlclZpZXcudHMiLCJpbXBvcnQge0Fic3RyYWN0U2ltcGxlVmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFNpbXBsZVZpZXdcIjtcclxuXHJcbi8qKlxyXG4gKiBIYXMgdGhlIHJlc3BvbnNpYmlsaXR5IHRvIGNyZWF0ZSBhIHNpbmdsZSBzcXVhcmUgYW5kIGluc2lkZSBpdCB0byBwdXQgdGhlIGNvcmVzcG9uZGluZyBsZXR0ZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBSdWxlclNxdWFyZSBleHRlbmRzIEFic3RyYWN0U2ltcGxlVmlldyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKiBAcGFyYW0gYm9yZGVyQ29sb3JcclxuICAgICAqIEBwYXJhbSB0ZXh0Q29sb3JcclxuICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gYXNjaWlDb2RlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHhQb3NpdGlvbjogbnVtYmVyLCB5UG9zaXRpb246IG51bWJlciwgc3F1YXJlV2lkdGg6IG51bWJlciwgYm9yZGVyQ29sb3I6IG51bWJlciwgdGV4dENvbG9yOiBudW1iZXIsIHR5cGU6IHN0cmluZywgYXNjaWlDb2RlOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUnVsZXJTcXVhcmUoYm9yZGVyQ29sb3IsIHhQb3NpdGlvbiwgeVBvc2l0aW9uLCBzcXVhcmVXaWR0aCwgdHlwZSwgYXNjaWlDb2RlLCB0ZXh0Q29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBib3JkZXJDb2xvclxyXG4gICAgICogQHBhcmFtIHhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICogQHBhcmFtIGFzY2lpQ29kZVxyXG4gICAgICogQHBhcmFtIHRleHRDb2xvclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJ1bGVyU3F1YXJlKGJvcmRlckNvbG9yOiBudW1iZXIsIHhQb3NpdGlvbjogbnVtYmVyLCB5UG9zaXRpb246IG51bWJlciwgc3F1YXJlV2lkdGg6IG51bWJlciwgdHlwZTogc3RyaW5nLCBhc2NpaUNvZGU6IG51bWJlciwgdGV4dENvbG9yOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSg4LCBib3JkZXJDb2xvcik7XHJcbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5GaWxsKDB4ZmZmZmZmKTtcclxuICAgICAgICBncmFwaGljcy5kcmF3UmVjdCh4UG9zaXRpb24sIHlQb3NpdGlvbiwgc3F1YXJlV2lkdGgsIHNxdWFyZVdpZHRoKTtcclxuICAgICAgICBncmFwaGljcy5lbmRGaWxsKCk7XHJcblxyXG4gICAgICAgIGxldCB0ZXh0O1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnTEVUVEVSJykge1xyXG4gICAgICAgICAgICB0ZXh0ID0gbmV3IFBJWEkuVGV4dChTdHJpbmcuZnJvbUNoYXJDb2RlKGFzY2lpQ29kZSksIHtmaWxsOiB0ZXh0Q29sb3J9KTtcclxuICAgICAgICAgICAgdGV4dC5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgICAgIHRleHQucG9zaXRpb24uc2V0KHhQb3NpdGlvbiArIHNxdWFyZVdpZHRoIC8gMiwgeVBvc2l0aW9uICsgc3F1YXJlV2lkdGggLyAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ05VTUJFUicpIHtcclxuICAgICAgICAgICAgdGV4dCA9IG5ldyBQSVhJLlRleHQoYXNjaWlDb2RlLnRvU3RyaW5nKCksIHtmaWxsOiB0ZXh0Q29sb3J9KTtcclxuICAgICAgICAgICAgdGV4dC5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgICAgIHRleHQucG9zaXRpb24uc2V0KHhQb3NpdGlvbiArIHNxdWFyZVdpZHRoIC8gMiwgeVBvc2l0aW9uICsgc3F1YXJlV2lkdGggLyAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZChncmFwaGljcywgdGV4dCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvcnVsZXIvUnVsZXJTcXVhcmUudHMiLCJpbXBvcnQge0Fic3RyYWN0U2ltcGxlVmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFNpbXBsZVZpZXdcIjtcclxuaW1wb3J0IHtWaWV3TWFuYWdlcn0gZnJvbSBcIi4uL21haW5WaWV3L1ZpZXdNYW5hZ2VyXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBoYXMgdGhlIHJlc3BvbnNpYmlsaXR5IHRvIHNob3cgdGV4dCBub3RpZmljYXRpb25zIG9uIHRoZSBzY3JlZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXh0VmlldyBleHRlbmRzIEFic3RyYWN0U2ltcGxlVmlldyB7XHJcblxyXG4gICAgLyoqSGVyZSB3ZSBzYXZlIHRoZSB0ZXh0IHN0cmluZyAqL1xyXG4gICAgcHJpdmF0ZSB0ZXh0OiBQSVhJLlRleHQ7XHJcblxyXG4gICAgLyoqXHJcblxyXG4gICAgICogQHBhcmFtIHRleHRcclxuICAgICAqIEBwYXJhbSBmb250U2l6ZVxyXG4gICAgICogQHBhcmFtIGNvbG9yXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZywgZm9udFNpemU6IG51bWJlciwgY29sb3I6IG51bWJlcikge1xyXG5cclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IG5ldyBQSVhJLlRleHQodGV4dCwge2ZvbnRTaXplOiBmb250U2l6ZSwgZmlsbDogY29sb3J9KTtcclxuICAgICAgICB0aGlzLnRleHQuYW5jaG9yLnNldCgwLjUsIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHRleHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFRleHQodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0LnRleHQgKz0gJ1xcbicgKyB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dHYW1lUGxheVN0YXRlVGV4dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRleHQudGV4dCA9IFZpZXdNYW5hZ2VyLkdhbWVQbGF5U3RhdGVUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFRleHQoKTogUElYSS5UZXh0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L3RleHQvVGV4dFZpZXcudHMiLCJpbXBvcnQge0Fic3RyYWN0Q29tbWFuZH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdENvbW1hbmRcIjtcclxuaW1wb3J0IHtCYXR0bGVTaGlwRmFjYWRlfSBmcm9tIFwiLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0IHtDb21tYW5kSW5mb3JtYXRpb259IGZyb20gXCIuLi9zdGF0aWNJbmZvcm1hdGlvbi9Db21tYW5kSW5mb3JtYXRpb25cIjtcclxuaW1wb3J0IHtTcXVhcmV9IGZyb20gXCIuLi9wcm94eS9TcXVhcmVcIjtcclxuaW1wb3J0IHtHcmlkfSBmcm9tIFwiLi4vcHJveHkvR3JpZFwiO1xyXG5pbXBvcnQge01lZGlhdG9ySW5mb3JtYXRpb259IGZyb20gXCIuLi9zdGF0aWNJbmZvcm1hdGlvbi9NZWRpYXRvckluZm9ybWF0aW9uXCI7XHJcbmltcG9ydCB7R2FtZVNldHRpbmdzfSBmcm9tIFwiLi4vc3RhdGljSW5mb3JtYXRpb24vR2FtZVNldHRpbmdzXCI7XHJcblxyXG4vKipcclxuICogQ29tbWFuZCB1c2VkIHdoZW4gYSBncmlkJ3Mgc3F1YXJlIGlzIGNsaWNrZWQgYnkgYSBwbGF5ZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3F1YXJlQ2xpY2tIYW5kbGVDb21tYW5kIGV4dGVuZHMgQWJzdHJhY3RDb21tYW5kIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4ZWN1dGUgdGhpcyBjb21tYW5kXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKG5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTcXVhcmVDbGljayBIYW5kbGUgUmVxdWVzdCcpO1xyXG5cclxuICAgICAgICBsZXQgZmFjYWRlOiBCYXR0bGVTaGlwRmFjYWRlID0gQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShHYW1lU2V0dGluZ3MuQmF0dGxlU2hpcEZhY2FkZUtleSk7XHJcbiAgICAgICAgbGV0IGdyaWRQcm94eTogYW55ID0gZmFjYWRlLnJldHJpZXZlUHJveHkoQmF0dGxlU2hpcEZhY2FkZS5HcmlkUHJveHkpO1xyXG4gICAgICAgIGxldCBwbGF5ZXI6IHN0cmluZyA9IG5vdGlmaWNhdGlvbi5nZXRUeXBlKCk7XHJcbiAgICAgICAgbGV0IHNxdWFyZUNsaWNrQ29vcmRpbmF0ZXM6IGFueSA9IG5vdGlmaWNhdGlvbi5nZXRCb2R5KCk7XHJcbiAgICAgICAgbGV0IGdyaWQ6IGFueSA9IGdyaWRQcm94eS5nZXRHcmlkKHBsYXllcik7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tJZlBsYXllckhpdEFTaGlwKGdyaWQsIHNxdWFyZUNsaWNrQ29vcmRpbmF0ZXMsIHBsYXllcik7XHJcbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKENvbW1hbmRJbmZvcm1hdGlvbi5Mb2dHcmlkU3F1YXJlcywgdW5kZWZpbmVkLCBwbGF5ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyB0aGUgZ3JpZCB3aXRoIHRoZSBoaXRzIG9yIHRoZSBtaXNzZXMuXHJcbiAgICAgKiBAcGFyYW0gZ3JpZFxyXG4gICAgICogQHBhcmFtIHNxdWFyZUNsaWNrQ29vcmRpbmF0ZXNcclxuICAgICAqIEBwYXJhbSBwbGF5ZXJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjaGVja0lmUGxheWVySGl0QVNoaXAoZ3JpZDogR3JpZCwgc3F1YXJlQ2xpY2tDb29yZGluYXRlczogYW55LCBwbGF5ZXI6IHN0cmluZykge1xyXG4gICAgICAgIGxldCB4OiBudW1iZXIgPSBzcXVhcmVDbGlja0Nvb3JkaW5hdGVzWzBdLCB5OiBudW1iZXIgPSBzcXVhcmVDbGlja0Nvb3JkaW5hdGVzWzFdO1xyXG4gICAgICAgIGxldCBncmlkU3F1YXJlczogU3F1YXJlW11bXSA9IGdyaWQuZ2V0R3JpZFNxdWFyZXMoKTtcclxuICAgICAgICBpZiAoZ3JpZFNxdWFyZXNbeF1beV0uY2hlY2tJZkl0SXNBSGl0KCkpIHtcclxuICAgICAgICAgICAgZ3JpZFNxdWFyZXNbeF1beV0uc3F1YXJlSGl0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbihNZWRpYXRvckluZm9ybWF0aW9uLlBsYXllckhpdEFTaGlwLCBzcXVhcmVDbGlja0Nvb3JkaW5hdGVzLCBwbGF5ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZ3JpZFNxdWFyZXNbeF1beV0uc3F1YXJlTWlzcygpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbmROb3RpZmljYXRpb24oTWVkaWF0b3JJbmZvcm1hdGlvbi5QbGF5ZXJNaXNzZWQsIHNxdWFyZUNsaWNrQ29vcmRpbmF0ZXMsIHBsYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9jb21tYW5kL1NxdWFyZUNsaWNrSGFuZGxlQ29tbWFuZC50cyIsImltcG9ydCAncGl4aS5qcydcclxuaW1wb3J0IHtCYXR0bGVTaGlwRmFjYWRlfSBmcm9tIFwiLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0IHtBYnN0cmFjdE1lZGlhdG9yfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0TWVkaWF0b3JcIjtcclxuaW1wb3J0IHtBYnN0cmFjdE5vdGlmaWNhdGlvbn0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQge0NvbW1hbmRJbmZvcm1hdGlvbn0gZnJvbSBcIi4uL3N0YXRpY0luZm9ybWF0aW9uL0NvbW1hbmRJbmZvcm1hdGlvblwiO1xyXG5pbXBvcnQge01lZGlhdG9ySW5mb3JtYXRpb259IGZyb20gXCIuLi9zdGF0aWNJbmZvcm1hdGlvbi9NZWRpYXRvckluZm9ybWF0aW9uXCI7XHJcbmltcG9ydCB7R2FtZVNldHRpbmdzfSBmcm9tIFwiLi4vc3RhdGljSW5mb3JtYXRpb24vR2FtZVNldHRpbmdzXCI7XHJcblxyXG4vKipcclxuICogVGhlIGdyaWQncyBtZWRpYXRvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBHcmlkVmlld01lZGlhdG9yIGV4dGVuZHMgQWJzdHJhY3RNZWRpYXRvciB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcGxheWVyOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG1lZGlhdG9yTmFtZVxyXG4gICAgICogQHBhcmFtIHZpZXdDb21wb25lbnRcclxuICAgICAqIEBwYXJhbSBwbGF5ZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobWVkaWF0b3JOYW1lOiBzdHJpbmcsIHZpZXdDb21wb25lbnQ6IGFueSwgcGxheWVyOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihtZWRpYXRvck5hbWUsIHZpZXdDb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuX3BsYXllciA9IHBsYXllcjtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lcnNMaXN0OiBBcnJheTxQSVhJLkNvbnRhaW5lcj4gPSBbXTtcclxuICAgICAgICBjb250YWluZXJzTGlzdC5wdXNoKHN1cGVyLmdldFZpZXdDb21wb25lbnQoKS5nZXRVSUNvbnRhaW5lcigpKTtcclxuICAgICAgICBCYXR0bGVTaGlwRmFjYWRlLmdldEluc3RhbmNlKEdhbWVTZXR0aW5ncy5CYXR0bGVTaGlwRmFjYWRlS2V5KS5hZGRDb250YWluZXJzVG9WaWV3KGNvbnRhaW5lcnNMaXN0LCArcGxheWVyIC0gMSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCcgICAjICcgKyBzdXBlci5nZXRNZWRpYXRvck5hbWUoKSArICcgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5vdGlmaWNhdGlvbiB0aGF0IHRoZSBHcmlkVmlld01lZGlhdG9yIGlzIGludGVyZXN0ZWQgaW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gW01lZGlhdG9ySW5mb3JtYXRpb24uR3JpZFNoaXBNYXJraW5nLFxyXG4gICAgICAgICAgICBNZWRpYXRvckluZm9ybWF0aW9uLlNxdWFyZUNsaWNrUmVxdWVzdCxcclxuICAgICAgICAgICAgTWVkaWF0b3JJbmZvcm1hdGlvbi5TaGlwUG9zaXRpb25JbmZvLFxyXG4gICAgICAgICAgICBNZWRpYXRvckluZm9ybWF0aW9uLkhpZGVUaGVTaGlwcyxcclxuICAgICAgICAgICAgTWVkaWF0b3JJbmZvcm1hdGlvbi5QbGF5ZXJIaXRBU2hpcCxcclxuICAgICAgICAgICAgTWVkaWF0b3JJbmZvcm1hdGlvbi5QbGF5ZXJNaXNzZWRdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFRoaXMgaXMgd2hlcmUgdGhlIG5vdGlmaWNhdGlvbnMgYXJlIGhhbmRsZWQuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBBYnN0cmFjdE5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaCAobm90aWZpY2F0aW9uLmdldE5hbWUoKSkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBNZWRpYXRvckluZm9ybWF0aW9uLkdyaWRTaGlwTWFya2luZyA6XHJcbiAgICAgICAgICAgICAgICBsZXQgc2hpcFBvc2l0aW9uSW5mbzogQXJyYXk8bnVtYmVyPiA9IG5vdGlmaWNhdGlvbi5nZXRCb2R5KClbMF07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwUG9zaXRpb25JbmZvKTtcclxuICAgICAgICAgICAgICAgIGxldCBwbGF5ZXI6IHN0cmluZyA9IG5vdGlmaWNhdGlvbi5nZXRCb2R5KClbMV07XHJcbiAgICAgICAgICAgICAgICBsZXQgc2hpcFR5cGU6IHN0cmluZyA9IG5vdGlmaWNhdGlvbi5nZXRUeXBlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyID09IHRoaXMuX3BsYXllcilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFZpZXdDb21wb25lbnQoKS5maWxsR3JpZFdpdGhCYXR0bGVTaGlwKHNoaXBQb3NpdGlvbkluZm8sIHNoaXBUeXBlLCBwbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1lZGlhdG9ySW5mb3JtYXRpb24uU3F1YXJlQ2xpY2tSZXF1ZXN0OlxyXG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IG5vdGlmaWNhdGlvbi5nZXRCb2R5KClbMV07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRWaWV3Q29tcG9uZW50KCkuaGFzU3F1YXJlKHNxdWFyZSkpIHsgIC8vaWYgdGhlIEdyaWQgaGFzIHRoaXMgc3F1YXJlLlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcXVhcmVDbGlja0Nvb3JkaW5hdGVzID0gbm90aWZpY2F0aW9uLmdldEJvZHkoKVswXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmROb3RpZmljYXRpb24oQ29tbWFuZEluZm9ybWF0aW9uLlNxdWFyZUNsaWNrSGFuZGxlQ29tbWFuZCwgc3F1YXJlQ2xpY2tDb29yZGluYXRlcywgdGhpcy5fcGxheWVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBNZWRpYXRvckluZm9ybWF0aW9uLlNoaXBQb3NpdGlvbkluZm86XHJcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyMTogc3RyaW5nID0gbm90aWZpY2F0aW9uLmdldEJvZHkoKVsxXTtcclxuICAgICAgICAgICAgICAgIGxldCBzaGlwVHlwZTE6IHN0cmluZyA9IG5vdGlmaWNhdGlvbi5nZXRUeXBlKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2hpcFBvc2l0aW9uSW5mbzEgPSBub3RpZmljYXRpb24uZ2V0Qm9keSgpWzBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKENvbW1hbmRJbmZvcm1hdGlvbi5TaGlwUG9zaXRpb25JbmZvQ29tbWFuZCwgbm90aWZpY2F0aW9uLmdldEJvZHkoKSwgc2hpcFR5cGUxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBNZWRpYXRvckluZm9ybWF0aW9uLkhpZGVUaGVTaGlwczpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Vmlld0NvbXBvbmVudCgpLmhpZGVUaGVTaGlwcygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIE1lZGlhdG9ySW5mb3JtYXRpb24uUGxheWVySGl0QVNoaXA6XHJcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyTDogc3RyaW5nID0gbm90aWZpY2F0aW9uLmdldFR5cGUoKTtcclxuICAgICAgICAgICAgICAgIGxldCBoaXRDb29yZGluYXRlcyA9IG5vdGlmaWNhdGlvbi5nZXRCb2R5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BsYXllciA9PSBwbGF5ZXJMKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRWaWV3Q29tcG9uZW50KCkudXBkYXRlVGhlVmlld1dpdGhBSGl0KGhpdENvb3JkaW5hdGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBNZWRpYXRvckluZm9ybWF0aW9uLlBsYXllck1pc3NlZDpcclxuICAgICAgICAgICAgICAgIGxldCBwbGF5ZXJLOiBzdHJpbmcgPSBub3RpZmljYXRpb24uZ2V0VHlwZSgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1pc3NDb29yZGluYXRlcyA9IG5vdGlmaWNhdGlvbi5nZXRCb2R5KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGxheWVyID09IHBsYXllckspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFZpZXdDb21wb25lbnQoKS51cGRhdGVUaGVWaWV3V2l0aEFNaXNzKG1pc3NDb29yZGluYXRlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L21lZGlhdG9yL0dyaWRWaWV3TWVkaWF0b3IudHMiLCJpbXBvcnQgJ3BpeGkuanMnXHJcbmltcG9ydCB7QmF0dGxlU2hpcEZhY2FkZX0gZnJvbSBcIi4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcbmltcG9ydCB7QWJzdHJhY3RNZWRpYXRvcn0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE1lZGlhdG9yXCI7XHJcbmltcG9ydCB7Vmlld01hbmFnZXJ9IGZyb20gXCIuLi92aWV3L21haW5WaWV3L1ZpZXdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7TWVkaWF0b3JJbmZvcm1hdGlvbn0gZnJvbSBcIi4uL3N0YXRpY0luZm9ybWF0aW9uL01lZGlhdG9ySW5mb3JtYXRpb25cIjtcclxuaW1wb3J0IHtHYW1lU2V0dGluZ3N9IGZyb20gXCIuLi9zdGF0aWNJbmZvcm1hdGlvbi9HYW1lU2V0dGluZ3NcIjtcclxuXHJcbi8qKlxyXG4gKiAgVGV4dFZpZXdNZWRpYXRvclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRleHRWaWV3TWVkaWF0b3IgZXh0ZW5kcyBBYnN0cmFjdE1lZGlhdG9yIHtcclxuICAgIHB1YmxpYyBuYW1lOiBTdHJpbmcgPSAnVGV4dFZpZXdNZWRpYXRvcic7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVkaWF0b3JOYW1lXHJcbiAgICAgKiBAcGFyYW0gdmlld0NvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZWRpYXRvck5hbWU6IHN0cmluZywgdmlld0NvbXBvbmVudDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIobWVkaWF0b3JOYW1lLCB2aWV3Q29tcG9uZW50KTtcclxuXHJcblxyXG4gICAgICAgIGxldCBjb250YWluZXJzTGlzdDogQXJyYXk8UElYSS5Db250YWluZXI+ID0gW107XHJcbiAgICAgICAgY29udGFpbmVyc0xpc3QucHVzaChzdXBlci5nZXRWaWV3Q29tcG9uZW50KCkuZ2V0VGV4dCgpKTtcclxuICAgICAgICBCYXR0bGVTaGlwRmFjYWRlLmdldEluc3RhbmNlKEdhbWVTZXR0aW5ncy5CYXR0bGVTaGlwRmFjYWRlS2V5KVxyXG4gICAgICAgICAgICAuYWRkQ29udGFpbmVyc1RvVmlldyhjb250YWluZXJzTGlzdCwgVmlld01hbmFnZXIuR2FtZUluZm9Db250YWluZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcgICAjICcgKyB0aGlzLm5hbWUgKyAnIGNyZWF0ZWQnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbm90aWZpY2F0aW9uIHRoYXQgdGhlIFZpZXdNYW5hZ2VyTWVkaWF0b3IgaXMgaW50ZXJlc3RlZCBpbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbTWVkaWF0b3JJbmZvcm1hdGlvbi5UZXh0VXBkYXRlLFxyXG4gICAgICAgICAgICBWaWV3TWFuYWdlci5HYW1lUGxheVN0YXRlVGV4dF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHRleHRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFRleHRUb1RoZVZpZXcodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5nZXRWaWV3Q29tcG9uZW50KCkuYWRkVGV4dCh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBUaGlzIGlzIHdoZXJlIHRoZSBub3RpZmljYXRpb25zIGFyZSBoYW5kbGVkLlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFuZGxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogcHVyZW12Yy5Ob3RpZmljYXRpb24pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgc3dpdGNoIChub3RpZmljYXRpb24uZ2V0TmFtZSgpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTWVkaWF0b3JJbmZvcm1hdGlvbi5UZXh0VXBkYXRlOlxyXG4gICAgICAgICAgICAgICAgbGV0IHBsYXllcjogc3RyaW5nID0gbm90aWZpY2F0aW9uLmdldFR5cGUoKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBHYW1lU2V0dGluZ3MuUGxheWVyT25lOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRleHRUb1RoZVZpZXcobm90aWZpY2F0aW9uLmdldEJvZHkoKSArICcgXFxuZm9yIFBsYXllcicgKyBwbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBHYW1lU2V0dGluZ3MuUGxheWVyVHdvOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFRleHRUb1RoZVZpZXcobm90aWZpY2F0aW9uLmdldEJvZHkoKSArICcgXFxuZm9yIFBsYXllcicgKyBwbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFZpZXdNYW5hZ2VyLkdhbWVQbGF5U3RhdGVUZXh0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRWaWV3Q29tcG9uZW50KCkuc2hvd0dhbWVQbGF5U3RhdGVUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvbWVkaWF0b3IvVGV4dFZpZXdNZWRpYXRvci50cyIsImltcG9ydCAncGl4aS5qcydcclxuaW1wb3J0IHtCYXR0bGVTaGlwRmFjYWRlfSBmcm9tIFwiLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0IHtBYnN0cmFjdE1lZGlhdG9yfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0TWVkaWF0b3JcIjtcclxuaW1wb3J0IHtWaWV3TWFuYWdlcn0gZnJvbSBcIi4uL3ZpZXcvbWFpblZpZXcvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IHtBYnN0cmFjdE5vdGlmaWNhdGlvbn0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQge0NvbW1hbmRJbmZvcm1hdGlvbn0gZnJvbSBcIi4uL3N0YXRpY0luZm9ybWF0aW9uL0NvbW1hbmRJbmZvcm1hdGlvblwiO1xyXG5pbXBvcnQge01lZGlhdG9ySW5mb3JtYXRpb259IGZyb20gXCIuLi9zdGF0aWNJbmZvcm1hdGlvbi9NZWRpYXRvckluZm9ybWF0aW9uXCI7XHJcbmltcG9ydCB7R2FtZVNldHRpbmdzfSBmcm9tIFwiLi4vc3RhdGljSW5mb3JtYXRpb24vR2FtZVNldHRpbmdzXCI7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJTaGlwc1ZpZXdNZWRpYXRvciBleHRlbmRzIEFic3RyYWN0TWVkaWF0b3Ige1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3BsYXllcjogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZWRpYXRvck5hbWVcclxuICAgICAqIEBwYXJhbSB2aWV3Q29tcG9uZW50XHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lZGlhdG9yTmFtZT86IHN0cmluZywgdmlld0NvbXBvbmVudD86IGFueSwgcGxheWVyPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobWVkaWF0b3JOYW1lLCB2aWV3Q29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5hZGRWaWV3KHBsYXllcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgJyArIHN1cGVyLmdldE1lZGlhdG9yTmFtZSgpICsgJyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbm90aWZpY2F0aW9uIHRoYXQgdGhlIFZpZXdNYW5hZ2VyTWVkaWF0b3IgaXMgaW50ZXJlc3RlZCBpbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbTWVkaWF0b3JJbmZvcm1hdGlvbi5TaGlwc1BsYWNlbWVudCxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFRoaXMgaXMgd2hlcmUgdGhlIG5vdGlmaWNhdGlvbnMgYXJlIGhhbmRsZWQuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBBYnN0cmFjdE5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG5cclxuICAgICAgICBzd2l0Y2ggKG5vdGlmaWNhdGlvbi5nZXROYW1lKCkpIHtcclxuICAgICAgICAgICAgY2FzZSBNZWRpYXRvckluZm9ybWF0aW9uLlNoaXBzUGxhY2VtZW50OlxyXG4gICAgICAgICAgICAgICAgbGV0IHBsYXllcjogYW55ID0gbm90aWZpY2F0aW9uLmdldEJvZHkoKVs0XTtcclxuICAgICAgICAgICAgICAgIGxldCBzaGlwVHlwZTogc3RyaW5nID0gbm90aWZpY2F0aW9uLmdldFR5cGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyID09IHRoaXMuX3BsYXllcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbihDb21tYW5kSW5mb3JtYXRpb24uU2hpcHNQbGFjZW1lbnQsIFtub3RpZmljYXRpb24uZ2V0Qm9keSgpLCBwbGF5ZXJdLCBzaGlwVHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBsYXllclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFkZFZpZXcocGxheWVyOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgY29udGFpbmVyc0xpc3Q6IEFycmF5PFBJWEkuQ29udGFpbmVyPiA9IFtdO1xyXG4gICAgICAgIGNvbnRhaW5lcnNMaXN0LnB1c2goc3VwZXIuZ2V0Vmlld0NvbXBvbmVudCgpLmdldFVJQ29udGFpbmVyKCkpO1xyXG4gICAgICAgIGlmIChwbGF5ZXIgPT0gR2FtZVNldHRpbmdzLlBsYXllck9uZSkge1xyXG4gICAgICAgICAgICBCYXR0bGVTaGlwRmFjYWRlLmdldEluc3RhbmNlKEdhbWVTZXR0aW5ncy5CYXR0bGVTaGlwRmFjYWRlS2V5KS5hZGRDb250YWluZXJzVG9WaWV3KGNvbnRhaW5lcnNMaXN0LCBWaWV3TWFuYWdlci5QbGF5ZXJPbmVTaGlwc0NvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBsYXllciA9PSBHYW1lU2V0dGluZ3MuUGxheWVyVHdvKSB7XHJcbiAgICAgICAgICAgIEJhdHRsZVNoaXBGYWNhZGUuZ2V0SW5zdGFuY2UoR2FtZVNldHRpbmdzLkJhdHRsZVNoaXBGYWNhZGVLZXkpLmFkZENvbnRhaW5lcnNUb1ZpZXcoY29udGFpbmVyc0xpc3QsIFZpZXdNYW5hZ2VyLlBsYXllclR3b1NoaXBzQ29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L21lZGlhdG9yL1BsYXllclNoaXBzVmlld01lZGlhdG9yLnRzIiwiaW1wb3J0IHtBYnN0cmFjdFNpbXBsZVZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RTaW1wbGVWaWV3XCI7XHJcbmltcG9ydCB7U2luZ2xlU2hpcFZpZXd9IGZyb20gXCIuL1NpbmdsZVNoaXBWaWV3XCI7XHJcbmltcG9ydCB7R2FtZVNldHRpbmdzfSBmcm9tIFwiLi4vLi4vc3RhdGljSW5mb3JtYXRpb24vR2FtZVNldHRpbmdzXCI7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyB3aWxsIGNvbnRhaW4gYWxsIHRoZSBzaGlwcyBmb3Igb25lIHBsYXllci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJTaGlwc1ZpZXcgZXh0ZW5kcyBBYnN0cmFjdFNpbXBsZVZpZXcge1xyXG5cclxuICAgIHB1YmxpYyBidW5kbGVTaGlwVmlld05hbWUgPSAnUGxheWVyU2hpcHNWaWV3JztcclxuICAgIHB1YmxpYyBzaGlwc0FycmF5OiBBcnJheTxTaW5nbGVTaGlwVmlldz4gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yXHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTaGlwc1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXI6IHN0cmluZywgbnVtYmVyT2ZTaGlwczogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmFkZEhvcml6b250YWxTaGlwcyhudW1iZXJPZlNoaXBzLCBwbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuYWRkVmVydGljYWxTaGlwcyhudW1iZXJPZlNoaXBzLCBwbGF5ZXIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnICAgIycgKyB0aGlzLmJ1bmRsZVNoaXBWaWV3TmFtZSArIHBsYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqQWRkcyB0aGUgaG9yaXpvbnRhbCBzaGlwcyovXHJcbiAgICBwcml2YXRlIGFkZEhvcml6b250YWxTaGlwcyhudW1iZXJPZlNoaXBzOiBudW1iZXIsIHBsYXllcjogc3RyaW5nKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG51bWJlck9mU2hpcHMgLyAyOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGhvcml6b250YWxTaGlwOiBTaW5nbGVTaGlwVmlldyA9IG5ldyBTaW5nbGVTaGlwVmlldygxNTAsIGkgKiAxMDAsXHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZlNoaXBzIC0gaSAtIDEsIHBsYXllciwgR2FtZVNldHRpbmdzLlNoaXBIb3Jpem9udGFsVHlwZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcHNBcnJheS5wdXNoKGhvcml6b250YWxTaGlwKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRUb0NvbnRhaW5lcihob3Jpem9udGFsU2hpcC5nZXRVSUNvbnRhaW5lcigpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqQWRkcyB0aGUgdmVydGljYWwgc2hpcHMqL1xyXG4gICAgcHJpdmF0ZSBhZGRWZXJ0aWNhbFNoaXBzKG51bWJlck9mU2hpcHM6IG51bWJlciwgcGxheWVyOiBzdHJpbmcpIHtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBudW1iZXJPZlNoaXBzIC8gMjsgaSA8IG51bWJlck9mU2hpcHM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdmVydGljYWxTaGlwOiBTaW5nbGVTaGlwVmlldyA9IG5ldyBTaW5nbGVTaGlwVmlldygtNTAwICsgaSAqIDEwMCwgLTIwLFxyXG4gICAgICAgICAgICAgICAgaSwgcGxheWVyLCBHYW1lU2V0dGluZ3MuU2hpcFZlcnRpY2FsVHlwZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpcHNBcnJheS5wdXNoKHZlcnRpY2FsU2hpcCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVG9Db250YWluZXIodmVydGljYWxTaGlwLmdldFVJQ29udGFpbmVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9zaGlwcy9QbGF5ZXJTaGlwc1ZpZXcudHMiLCJpbXBvcnQge0JhdHRsZVNoaXBGYWNhZGV9IGZyb20gXCIuLi8uLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5pbXBvcnQge0Fic3RyYWN0U2ltcGxlVmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFNpbXBsZVZpZXdcIjtcclxuaW1wb3J0ICdwaXhpLmpzJztcclxuaW1wb3J0IHtTaGlwR3JhcGhpY3N9IGZyb20gXCIuL1NoaXBHcmFwaGljc1wiO1xyXG5pbXBvcnQge01lZGlhdG9ySW5mb3JtYXRpb259IGZyb20gXCIuLi8uLi9zdGF0aWNJbmZvcm1hdGlvbi9NZWRpYXRvckluZm9ybWF0aW9uXCI7XHJcbmltcG9ydCB7R2FtZVNldHRpbmdzfSBmcm9tIFwiLi4vLi4vc3RhdGljSW5mb3JtYXRpb24vR2FtZVNldHRpbmdzXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqICBDbGFzcyB0aGF0IHJlcHJlc2VudHMgYSBzaW5nbGUgU2hpcC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVTaGlwVmlldyBleHRlbmRzIEFic3RyYWN0U2ltcGxlVmlldyB7XHJcblxyXG4gICAgcHVibGljIHhQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIHlQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIHNoaXBHcmFwaGljczogUElYSS5HcmFwaGljcztcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbnVtYmVyT2ZTcXVhcmVzOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0geFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0geVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzXHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih4UG9zaXRpb246IG51bWJlciwgeVBvc2l0aW9uOiBudW1iZXIsIG51bWJlck9mU3F1YXJlczogbnVtYmVyLCBwbGF5ZXI6IHN0cmluZywgdHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnhQb3NpdGlvbiA9IHhQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnlQb3NpdGlvbiA9IHlQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnNoaXBHcmFwaGljcyA9IG5ldyBTaGlwR3JhcGhpY3MocGxheWVyKTtcclxuICAgICAgICB0aGlzLm51bWJlck9mU3F1YXJlcyA9IG51bWJlck9mU3F1YXJlcztcclxuICAgICAgICB0aGlzLnZlcmlmeVBsYXllcihwbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMudmVyaWZ5U2hpcFR5cGUodHlwZSk7XHJcbiAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3MuZW5kRmlsbCgpO1xyXG4gICAgICAgIHRoaXMuc2hpcEdyYXBoaWNzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNoaXBHcmFwaGljcy5idXR0b25Nb2RlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1ha2VUaGVTaGlwSW50ZXJhY3RpdmUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnICAgIyBTaW5nbGVTaGlwVmlldyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgZm9yIHRoZSBTaW5nbGVTaGlwVmlldydzIENvbnRhaW5lci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVJQ29udGFpbmVyKCk6IFBJWEkuQ29udGFpbmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaGlwR3JhcGhpY3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgaXQgaXMgYSBob3Jpem9udGFsIG9yIGEgdmVydGljYWwgc2hpcC5cclxuICAgICAqIElmIGl0IGlzIGVpdGhlciBvZiB0aGVzZSB0eXBlcyxpdCBjcmVhdGVzIHRoZSBzaGlwLlxyXG4gICAgICogQHBhcmFtIHR5cGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB2ZXJpZnlTaGlwVHlwZSh0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBHYW1lU2V0dGluZ3MuU2hpcEhvcml6b250YWxUeXBlOlxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZTcXVhcmVzOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3MuZHJhd1JlY3QodGhpcy54UG9zaXRpb24gKyBpICogR2FtZVNldHRpbmdzLlNxdWFyZVdpZHRoLCB0aGlzLnlQb3NpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVNldHRpbmdzLlNxdWFyZVdpZHRoIC0gMywgR2FtZVNldHRpbmdzLlNxdWFyZVdpZHRoIC0gMywpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgR2FtZVNldHRpbmdzLlNoaXBWZXJ0aWNhbFR5cGU6XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5udW1iZXJPZlNxdWFyZXM7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaXBHcmFwaGljcy5kcmF3UmVjdCh0aGlzLnhQb3NpdGlvbiwgdGhpcy55UG9zaXRpb24gKyBpICogR2FtZVNldHRpbmdzLlNxdWFyZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lU2V0dGluZ3MuU3F1YXJlV2lkdGggLSAzLCBHYW1lU2V0dGluZ3MuU3F1YXJlV2lkdGggLSAzLCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2VzIHRoZSBzaGlwJ3MgY29sb3JzIGFjY29yZGluZyB0byB0aGUgcGxheWVyLlxyXG4gICAgICogQHBhcmFtIHBsYXllclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHZlcmlmeVBsYXllcihwbGF5ZXI6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChwbGF5ZXIgPT09IEdhbWVTZXR0aW5ncy5QbGF5ZXJPbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3MubGluZVN0eWxlKDYsIEdhbWVTZXR0aW5ncy5QbGF5ZXJPbmVTaGlwQm9yZGVyQ29sb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNoaXBHcmFwaGljcy5iZWdpbkZpbGwoR2FtZVNldHRpbmdzLlBsYXllck9uZVNoaXBGaWxsQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwbGF5ZXIgPT09IEdhbWVTZXR0aW5ncy5QbGF5ZXJUd28pIHtcclxuICAgICAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3MubGluZVN0eWxlKDYsIEdhbWVTZXR0aW5ncy5QbGF5ZXJUd29TaGlwQm9yZGVyQ29sb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNoaXBHcmFwaGljcy5iZWdpbkZpbGwoR2FtZVNldHRpbmdzLlBsYXllclR3b1NoaXBGaWxsQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgaW50ZXJhY3Rpb24gdG8gdGhlIHNoaXAuXHJcbiAgICAgKiBNYWtlcyB0aGUgc2hpcCBkcmFnZ2FibGUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbWFrZVRoZVNoaXBJbnRlcmFjdGl2ZSgpIHtcclxuICAgICAgICB0aGlzLnNoaXBHcmFwaGljc1xyXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJkb3duJywgb25EcmFnU3RhcnQpXHJcbiAgICAgICAgICAgIC5vbigncG9pbnRlcnVwJywgb25EcmFnRW5kKVxyXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJ1cG91dHNpZGUnLCBvbkRyYWdFbmQpXHJcbiAgICAgICAgICAgIC5vbigncG9pbnRlcm1vdmUnLCBvbkRyYWdNb3ZlKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25EcmFnU3RhcnQoZXZlbnQpOiB2b2lkIHsgLy9DYWxsZWQgd2hlbiB0aGUgcGxheWVyIHN0YXJ0cyBkcmFnZ2luZyB0aGUgc2hpcC5cclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uOiBhbnk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGV2ZW50LmRhdGE7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5wYXJlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLnBpdm90LnNldChwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQodGhpcy5kYXRhLngsIHRoaXMuZGF0YS55KTtcclxuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2Vkb3duID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvbkRyYWdFbmQoKTogdm9pZCB7IC8vQ2FsbGVkIHdoZW4gdGhlIHBsYXllciBkb2Vzbid0IGRyYWcgdGhlIHNoaXAgYW55bW9yZS5cclxuICAgICAgICAgICAgbGV0IHNoaXBUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpZHRoID4gdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHNoaXBUeXBlID0gR2FtZVNldHRpbmdzLlNoaXBIb3Jpem9udGFsVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLndpZHRoIDw9IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBzaGlwVHlwZSA9IEdhbWVTZXR0aW5ncy5TaGlwVmVydGljYWxUeXBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEJhdHRsZVNoaXBGYWNhZGUuZ2V0SW5zdGFuY2UoR2FtZVNldHRpbmdzLkJhdHRsZVNoaXBGYWNhZGVLZXkpXHJcbiAgICAgICAgICAgICAgICAuc2VuZE5vdGlmaWNhdGlvbihNZWRpYXRvckluZm9ybWF0aW9uLlNoaXBzUGxhY2VtZW50LCBbdGhpcy5nZXRCb3VuZHMoKS54LCB0aGlzLmdldEJvdW5kcygpLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLnBsYXllcl0sIHNoaXBUeXBlKTtcclxuICAgICAgICAgICAgdGhpcy5hbHBoYSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvbkRyYWdNb3ZlKCk6IHZvaWQgeyAvL0NhbGxlZCB3aGVuIHRoZSBwbGF5ZXIgaXMgZHJhZ2dpbmcgdGhlIHNoaXAuXHJcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbjogYW55O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnZ2luZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbHBoYSA9IDAuNTtcclxuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gdGhpcy5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5wYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gbmV3UG9zaXRpb24ueDtcclxuICAgICAgICAgICAgICAgIHRoaXMueSA9IG5ld1Bvc2l0aW9uLnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvc2hpcHMvU2luZ2xlU2hpcFZpZXcudHMiLCIvKipcclxuICogQSB2aWV3IHRoYXQgcmVwcmVzZW50cyBhIHNpbmdsZSBzaGlwLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNoaXBHcmFwaGljcyBleHRlbmRzIFBJWEkuR3JhcGhpY3Mge1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXI6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcGxheWVyXHJcbiAgICAgKiBAcGFyYW0gbmF0aXZlTGluZXNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyOiBzdHJpbmcsIG5hdGl2ZUxpbmVzPzogYm9vbGVhbikge1xyXG4gICAgICAgIHN1cGVyKG5hdGl2ZUxpbmVzKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9zaGlwcy9TaGlwR3JhcGhpY3MudHMiLCJpbXBvcnQge0Fic3RyYWN0Q29tbWFuZH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdENvbW1hbmRcIjtcclxuaW1wb3J0IHtCYXR0bGVTaGlwRmFjYWRlfSBmcm9tIFwiLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0ICdwaXhpLmpzJ1xyXG5pbXBvcnQge0Fic3RyYWN0Tm90aWZpY2F0aW9ufSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Tm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vcHJveHkvUGxheWVyXCI7XHJcbmltcG9ydCB7TWVkaWF0b3JJbmZvcm1hdGlvbn0gZnJvbSBcIi4uL3N0YXRpY0luZm9ybWF0aW9uL01lZGlhdG9ySW5mb3JtYXRpb25cIjtcclxuaW1wb3J0IHtHYW1lU2V0dGluZ3N9IGZyb20gXCIuLi9zdGF0aWNJbmZvcm1hdGlvbi9HYW1lU2V0dGluZ3NcIjtcclxuXHJcbi8qKlxyXG4gKiBDb21tYW5kIGNhbGxlZCB3aGVuIGEgc2hpcCBpcyBwbGFjZWQgb24gdGhlIHNjcmVlbiBieSBhIHBsYXllclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNoaXBQbGFjZUNvbW1hbmQgZXh0ZW5kcyBBYnN0cmFjdENvbW1hbmQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4ZWN1dGUobm90aWZpY2F0aW9uOiBBYnN0cmFjdE5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgcGxheWVyOiBzdHJpbmcgPSBub3RpZmljYXRpb24uZ2V0Qm9keSgpWzFdO1xyXG4gICAgICAgIGxldCBmYWNhZGU6IEJhdHRsZVNoaXBGYWNhZGUgPSBCYXR0bGVTaGlwRmFjYWRlLmdldEluc3RhbmNlKEdhbWVTZXR0aW5ncy5CYXR0bGVTaGlwRmFjYWRlS2V5KTtcclxuICAgICAgICBsZXQgcGxheWVyUHJveHk6IGFueSA9IGZhY2FkZS5yZXRyaWV2ZVByb3h5KEJhdHRsZVNoaXBGYWNhZGUuUGxheWVyUHJveHkpO1xyXG4gICAgICAgIGxldCBwbGF5ZXJDOiBQbGF5ZXIgPSBwbGF5ZXJQcm94eS5nZXRQbGF5ZXIocGxheWVyKTtcclxuICAgICAgICBwbGF5ZXJDLnVwZGF0ZU51bWJlck9mU2hpcHNQbGFjZWQoKTtcclxuICAgICAgICB0aGlzLnNlbmROb3RpZmljYXRpb24oTWVkaWF0b3JJbmZvcm1hdGlvbi5HcmlkU2hpcE1hcmtpbmcsIG5vdGlmaWNhdGlvbi5nZXRCb2R5KCksIG5vdGlmaWNhdGlvbi5nZXRUeXBlKCkpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9jb21tYW5kL1NoaXBQbGFjZUNvbW1hbmQudHMiLCJpbXBvcnQge0Fic3RyYWN0Q29tbWFuZH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdENvbW1hbmRcIjtcclxuaW1wb3J0IHtBYnN0cmFjdE5vdGlmaWNhdGlvbn0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQge0JhdHRsZVNoaXBGYWNhZGV9IGZyb20gXCIuLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5pbXBvcnQge1BsYXllclByb3h5fSBmcm9tIFwiLi4vcHJveHkvUGxheWVyUHJveHlcIjtcclxuaW1wb3J0IHtDb21tYW5kSW5mb3JtYXRpb259IGZyb20gXCIuLi9zdGF0aWNJbmZvcm1hdGlvbi9Db21tYW5kSW5mb3JtYXRpb25cIjtcclxuaW1wb3J0IHtHYW1lU2V0dGluZ3N9IGZyb20gXCIuLi9zdGF0aWNJbmZvcm1hdGlvbi9HYW1lU2V0dGluZ3NcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENoZWNrSWZQbGF5ZXJGaW5pc2hlZFBsYWNpbmdUaGVTaGlwc0NvbW1hbmQgZXh0ZW5kcyBBYnN0cmFjdENvbW1hbmQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogIENoZWNrcyBpZiBib3RoIHBsYXllcnMgZmluaXNoZWQgcGxhY2luZyB0aGUgc2hpcHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tJZkJvdGhQbGF5ZXJzRmluaXNoZWRQbGFjaW5nVGhlU2hpcHMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGZhY2FkZTogQmF0dGxlU2hpcEZhY2FkZSA9IEJhdHRsZVNoaXBGYWNhZGUuZ2V0SW5zdGFuY2UoR2FtZVNldHRpbmdzLkJhdHRsZVNoaXBGYWNhZGVLZXkpO1xyXG4gICAgICAgIGxldCBwbGF5ZXJQcm94eTogUGxheWVyUHJveHkgPSBmYWNhZGUucmV0cmlldmVQcm94eShCYXR0bGVTaGlwRmFjYWRlLlBsYXllclByb3h5KTtcclxuXHJcbiAgICAgICAgaWYgKHBsYXllclByb3h5LmdldFBsYXllcihHYW1lU2V0dGluZ3MuUGxheWVyT25lKS5zaGlwc1BsYWNlbWVudEZpbmlzaGVkKCkgPT09IHRydWVcclxuICAgICAgICAgICAgJiYgcGxheWVyUHJveHkuZ2V0UGxheWVyKEdhbWVTZXR0aW5ncy5QbGF5ZXJUd28pLnNoaXBzUGxhY2VtZW50RmluaXNoZWQoKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQm90aCBQbGF5ZXJzIGZpbmlzaGVkIHBsYWNpbmcgdGhlIHNoaXBzJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhlY3V0ZShub3RpZmljYXRpb246IEFic3RyYWN0Tm90aWZpY2F0aW9uKSB7XHJcblxyXG4gICAgICAgIGlmIChDaGVja0lmUGxheWVyRmluaXNoZWRQbGFjaW5nVGhlU2hpcHNDb21tYW5kLmNoZWNrSWZCb3RoUGxheWVyc0ZpbmlzaGVkUGxhY2luZ1RoZVNoaXBzKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZpbmlzaGVkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZE5vdGlmaWNhdGlvbihDb21tYW5kSW5mb3JtYXRpb24uU3RhcnRHYW1lUGxheUNvbW1hbmQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvY29tbWFuZC9DaGVja0lmUGxheWVyRmluaXNoZWRQbGFjaW5nVGhlU2hpcHNDb21tYW5kLnRzIiwiaW1wb3J0IHtBYnN0cmFjdENvbW1hbmR9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb21tYW5kXCI7XHJcbmltcG9ydCB7QWJzdHJhY3ROb3RpZmljYXRpb259IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3ROb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IHtWaWV3TWFuYWdlcn0gZnJvbSBcIi4uL3ZpZXcvbWFpblZpZXcvVmlld01hbmFnZXJcIjtcclxuaW1wb3J0IHtDb21tYW5kSW5mb3JtYXRpb259IGZyb20gXCIuLi9zdGF0aWNJbmZvcm1hdGlvbi9Db21tYW5kSW5mb3JtYXRpb25cIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0YXJ0R2FtZVBsYXlDb21tYW5kIGV4dGVuZHMgQWJzdHJhY3RDb21tYW5kIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKG5vdGlmaWNhdGlvbjogQWJzdHJhY3ROb3RpZmljYXRpb24pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKENvbW1hbmRJbmZvcm1hdGlvbi5IaWRlVGhlU2hpcENvbW1hbmQsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgdGhpcy5zZW5kTm90aWZpY2F0aW9uKFZpZXdNYW5hZ2VyLkdhbWVQbGF5U3RhdGVUZXh0LCB1bmRlZmluZWQpO1xyXG5cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvY29tbWFuZC9TdGFydEdhbWVQbGF5Q29tbWFuZC50cyIsImltcG9ydCB7QWJzdHJhY3RDb21tYW5kfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29tbWFuZFwiO1xyXG5pbXBvcnQge0Fic3RyYWN0Tm90aWZpY2F0aW9ufSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Tm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7TWVkaWF0b3JJbmZvcm1hdGlvbn0gZnJvbSBcIi4uL3N0YXRpY0luZm9ybWF0aW9uL01lZGlhdG9ySW5mb3JtYXRpb25cIjtcclxuXHJcbi8qKlxyXG4gKiAgQWZ0ZXIgYm90aCBwbGF5ZXJzIGZpbmlzaGVkIHBsYWNpbmcgdGhlIHNoaXBzLHRoZSBzaGlwcyB3aWxsIGJlIGhpZGRlbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBIaWRlVGhlU2hpcHNDb21tYW5kIGV4dGVuZHMgQWJzdHJhY3RDb21tYW5kIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKG5vdGlmaWNhdGlvbjogQWJzdHJhY3ROb3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbmROb3RpZmljYXRpb24oTWVkaWF0b3JJbmZvcm1hdGlvbi5IaWRlVGhlU2hpcHMpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9jb21tYW5kL0hpZGVUaGVTaGlwc0NvbW1hbmQudHMiLCJpbXBvcnQge0Fic3RyYWN0Q29tbWFuZH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdENvbW1hbmRcIjtcclxuaW1wb3J0IHtBYnN0cmFjdE5vdGlmaWNhdGlvbn0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQge0JhdHRsZVNoaXBGYWNhZGV9IGZyb20gXCIuLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5pbXBvcnQge0dyaWR9IGZyb20gXCIuLi9wcm94eS9HcmlkXCI7XHJcbmltcG9ydCB7U3F1YXJlfSBmcm9tIFwiLi4vcHJveHkvU3F1YXJlXCI7XHJcbmltcG9ydCB7R2FtZVNldHRpbmdzfSBmcm9tIFwiLi4vc3RhdGljSW5mb3JtYXRpb24vR2FtZVNldHRpbmdzXCI7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVTaGlwUG9zaXRpb25Db21tYW5kIGV4dGVuZHMgQWJzdHJhY3RDb21tYW5kIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc2hpcFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc2hpcFR5cGVcclxuICAgICAqIEBwYXJhbSBncmlkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIGNoZWNrU2hpcFR5cGUoc2hpcFBvc2l0aW9uLCBzaGlwVHlwZTogc3RyaW5nLCBncmlkOiBHcmlkKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGk6IG51bWJlciA9IHNoaXBQb3NpdGlvblswXSwgajogbnVtYmVyID0gc2hpcFBvc2l0aW9uWzFdLCBudW1iZXJPZlNxdWFyZXM6IG51bWJlciA9IHNoaXBQb3NpdGlvblsyXTtcclxuICAgICAgICBsZXQgZ3JpZFNxdWFyZXM6IFNxdWFyZVtdW10gPSBncmlkLmdldEdyaWRTcXVhcmVzKCk7XHJcbiAgICAgICAgc3dpdGNoIChzaGlwVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEdhbWVTZXR0aW5ncy5TaGlwSG9yaXpvbnRhbFR5cGU6XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4OiBudW1iZXIgPSBqOyB4IDwgaiArIG51bWJlck9mU3F1YXJlczsgeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFNxdWFyZXNbaV1beF0uc2hpcE9uU3F1YXJlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBHYW1lU2V0dGluZ3MuU2hpcFZlcnRpY2FsVHlwZTpcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHg6IG51bWJlciA9IGk7IHggPCBpICsgbnVtYmVyT2ZTcXVhcmVzOyB4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBncmlkU3F1YXJlc1t4XVtqXS5zaGlwT25TcXVhcmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKG5vdGlmaWNhdGlvbjogQWJzdHJhY3ROb3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICBsZXQgZmFjYWRlOiBCYXR0bGVTaGlwRmFjYWRlID0gQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShHYW1lU2V0dGluZ3MuQmF0dGxlU2hpcEZhY2FkZUtleSk7XHJcbiAgICAgICAgbGV0IHBsYXllcjogc3RyaW5nID0gbm90aWZpY2F0aW9uLmdldEJvZHkoKVsxXTtcclxuXHJcbiAgICAgICAgbGV0IHNoaXBUeXBlOiBzdHJpbmcgPSBub3RpZmljYXRpb24uZ2V0VHlwZSgpO1xyXG4gICAgICAgIGxldCBzaGlwUG9zaXRpb24gPSBub3RpZmljYXRpb24uZ2V0Qm9keSgpWzBdO1xyXG4gICAgICAgIGxldCBncmlkOiBHcmlkID0gZmFjYWRlLnJldHJpZXZlUHJveHkoQmF0dGxlU2hpcEZhY2FkZS5HcmlkUHJveHkpLmdldEdyaWQocGxheWVyKTtcclxuICAgICAgICBVcGRhdGVTaGlwUG9zaXRpb25Db21tYW5kLmNoZWNrU2hpcFR5cGUoc2hpcFBvc2l0aW9uLCBzaGlwVHlwZSwgZ3JpZCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbW1hbmQvVXBkYXRlU2hpcFBvc2l0aW9uQ29tbWFuZC50cyIsImltcG9ydCB7QWJzdHJhY3RNb2RlbH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE1vZGVsXCI7XHJcblxyXG4vKipcclxuICogVGhlIG1vZGVsIG1hbmFnZXIgdGhhdCBjb250cm9scyB0aGUgcHJveGllcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNb2RlbE1hbmFnZXIgZXh0ZW5kcyBBYnN0cmFjdE1vZGVsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnIE1vZGVsTWFuYWdlciBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcpOiBNb2RlbE1hbmFnZXIge1xyXG4gICAgICAgIGlmICghcHVyZW12Yy5Nb2RlbC5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLk1vZGVsLmluc3RhbmNlTWFwW2tleV0gPSBuZXcgTW9kZWxNYW5hZ2VyKGtleSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLk1vZGVsLmluc3RhbmNlTWFwW2tleV0gYXMgTW9kZWxNYW5hZ2VyO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9tb2RlbC9Nb2RlbE1hbmFnZXIudHMiLCIvKipcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdE1vZGVsIGV4dGVuZHMgcHVyZW12Yy5Nb2RlbCBpbXBsZW1lbnRzIHB1cmVtdmMuSU1vZGVsIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHJlbW92ZU1vZGVsKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVtb3ZlTW9kZWwoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplTW9kZWwoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHByb3h5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3RlclByb3h5KHByb3h5OiBwdXJlbXZjLklQcm94eSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyUHJveHkocHJveHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwcm94eU5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZVByb3h5KHByb3h5TmFtZTogc3RyaW5nKTogcHVyZW12Yy5JUHJveHkge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5yZW1vdmVQcm94eShwcm94eU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwcm94eU5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJldHJpZXZlUHJveHkocHJveHlOYW1lOiBzdHJpbmcpOiBwdXJlbXZjLklQcm94eSB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnJldHJpZXZlUHJveHkocHJveHlOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcHJveHlOYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYXNQcm94eShwcm94eU5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBzdXBlci5oYXNQcm94eShwcm94eU5hbWUpO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE1vZGVsLnRzIiwiaW1wb3J0IHtBYnN0cmFjdENvbW1hbmR9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb21tYW5kXCI7XHJcbmltcG9ydCB7QWJzdHJhY3ROb3RpZmljYXRpb259IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3ROb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IHtDb21tYW5kSW5mb3JtYXRpb259IGZyb20gXCIuLi9zdGF0aWNJbmZvcm1hdGlvbi9Db21tYW5kSW5mb3JtYXRpb25cIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0YXJ0VXBDb21tYW5kIGV4dGVuZHMgQWJzdHJhY3RDb21tYW5kIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4ZWN1dGUobm90aWZpY2F0aW9uOiBBYnN0cmFjdE5vdGlmaWNhdGlvbikge1xyXG5cclxuICAgICAgICB0aGlzLnNlbmROb3RpZmljYXRpb24oQ29tbWFuZEluZm9ybWF0aW9uLkNyZWF0ZUdyaWRDb21tYW5kKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvY29tbWFuZC9TdGFydFVwQ29tbWFuZC50cyIsImltcG9ydCB7QWJzdHJhY3RDb21tYW5kfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29tbWFuZFwiO1xyXG5pbXBvcnQge0Fic3RyYWN0Tm90aWZpY2F0aW9ufSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Tm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7QmF0dGxlU2hpcEZhY2FkZX0gZnJvbSBcIi4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcbmltcG9ydCB7U3F1YXJlfSBmcm9tIFwiLi4vcHJveHkvU3F1YXJlXCI7XHJcbmltcG9ydCB7R3JpZH0gZnJvbSBcIi4uL3Byb3h5L0dyaWRcIjtcclxuaW1wb3J0IHtHYW1lU2V0dGluZ3N9IGZyb20gXCIuLi9zdGF0aWNJbmZvcm1hdGlvbi9HYW1lU2V0dGluZ3NcIjtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIHRoZSBncmlkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENyZWF0ZUdyaWRDb21tYW5kIGV4dGVuZHMgQWJzdHJhY3RDb21tYW5kIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIGdyaWQsaGlzIHNxdWFyZXMuXHJcbiAgICAgKiBDaGFuZ2UgdGhlIHNpemUgb2YgdGhlIGdyaWQgYnkgY2hhbmdpbmcgTnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5IGFuZCBOdW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVRoZUdyaWQoKTogR3JpZCB7XHJcblxyXG4gICAgICAgIGxldCBncmlkU3F1YXJlczogU3F1YXJlW11bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBHYW1lU2V0dGluZ3MuTnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OyBpKyspIHtcclxuICAgICAgICAgICAgZ3JpZFNxdWFyZXNbaV0gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IEdhbWVTZXR0aW5ncy5OdW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGdyaWRTcXVhcmVzW2ldW2pdID0gbmV3IFNxdWFyZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgR3JpZChncmlkU3F1YXJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgdGhlIGdyaWQncyBwcm94eS5cclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4ZWN1dGUobm90aWZpY2F0aW9uOiBBYnN0cmFjdE5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgZmFjYWRlOiBCYXR0bGVTaGlwRmFjYWRlID0gQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShHYW1lU2V0dGluZ3MuQmF0dGxlU2hpcEZhY2FkZUtleSk7XHJcbiAgICAgICAgbGV0IGdyaWQ6IEdyaWQgPSBDcmVhdGVHcmlkQ29tbWFuZC5jcmVhdGVUaGVHcmlkKCk7XHJcbiAgICAgICAgZmFjYWRlLnJldHJpZXZlUHJveHkoQmF0dGxlU2hpcEZhY2FkZS5HcmlkUHJveHkpLnNldERhdGEoW2dyaWQsIGdyaWRdKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvY29tbWFuZC9DcmVhdGVHcmlkQ29tbWFuZC50cyIsImltcG9ydCB7Q29udHJvbGxlck1hbmFnZXJ9IGZyb20gXCIuLi9jb250cm9sbGVyL0NvbnRyb2xsZXJNYW5hZ2VyXCI7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTcXVhcmUge1xyXG5cclxuICAgIHB1YmxpYyBoaXQ6IHN0cmluZyA9IENvbnRyb2xsZXJNYW5hZ2VyLkhpdFRleHQ7XHJcbiAgICBwdWJsaWMgbWlzczogc3RyaW5nID0gQ29udHJvbGxlck1hbmFnZXIuTWlzc1RleHQ7XHJcbiAgICBwdWJsaWMgc3F1YXJlU3RhdGU6IHN0cmluZyA9IENvbnRyb2xsZXJNYW5hZ2VyLkRlZmF1bHRTdGF0ZVRleHQ7XHJcbiAgICBwdWJsaWMgY29udGFpbnNTaGlwOiBzdHJpbmcgPSBDb250cm9sbGVyTWFuYWdlci5TaGlwT25TcXVhcmU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByaW50IGlmIGl0J3MgYSBoaXQgb3IgYSBtaXNzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcHJpbnRTcXVhcmVTdGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNxdWFyZVN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNxdWFyZUhpdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNxdWFyZVN0YXRlID0gdGhpcy5oaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2hlY2tJZkl0SXNBSGl0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNxdWFyZVN0YXRlID09IHRoaXMuY29udGFpbnNTaGlwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNxdWFyZU1pc3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVTdGF0ZSA9IHRoaXMubWlzcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIGEgc2hpcCdzIHBhcnQgaXMgb24gdGhpcyBzcXVhcmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaGlwT25TcXVhcmUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVTdGF0ZSA9IHRoaXMuY29udGFpbnNTaGlwO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9wcm94eS9TcXVhcmUudHMiLCJpbXBvcnQge1NxdWFyZX0gZnJvbSBcIi4vU3F1YXJlXCI7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHcmlkIHtcclxuXHJcbiAgICBwdWJsaWMgZ3JpZFNxdWFyZXM6IFNxdWFyZVtdW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihncmlkU3F1YXJlczogU3F1YXJlW11bXSkge1xyXG4gICAgICAgIHRoaXMuc2V0R3JpZFNxdWFyZXMoZ3JpZFNxdWFyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBncmlkU3F1YXJlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0R3JpZFNxdWFyZXMoZ3JpZFNxdWFyZXM6IFNxdWFyZVtdW10pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdyaWRTcXVhcmVzID0gZ3JpZFNxdWFyZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0R3JpZFNxdWFyZXMoKTogU3F1YXJlW11bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZFNxdWFyZXM7XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9wcm94eS9HcmlkLnRzIiwiaW1wb3J0IHtBYnN0cmFjdENvbW1hbmR9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb21tYW5kXCI7XHJcbmltcG9ydCB7QmF0dGxlU2hpcEZhY2FkZX0gZnJvbSBcIi4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcbmltcG9ydCB7QWJzdHJhY3ROb3RpZmljYXRpb259IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3ROb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IHtHcmlkfSBmcm9tIFwiLi4vcHJveHkvR3JpZFwiO1xyXG5pbXBvcnQge0dhbWVTZXR0aW5nc30gZnJvbSBcIi4uL3N0YXRpY0luZm9ybWF0aW9uL0dhbWVTZXR0aW5nc1wiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTG9nR3JpZFNxdWFyZXNDb21tYW5kIGV4dGVuZHMgQWJzdHJhY3RDb21tYW5kIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZ3JpZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBsb2coZ3JpZDogR3JpZCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBHYW1lU2V0dGluZ3MuTnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHByaW50QXJyYXk6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IEdhbWVTZXR0aW5ncy5OdW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHByaW50QXJyYXkucHVzaChncmlkLmdldEdyaWRTcXVhcmVzKClbaV1bal0ucHJpbnRTcXVhcmVTdGF0ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcmludEFycmF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhlY3V0ZShub3RpZmljYXRpb246IEFic3RyYWN0Tm90aWZpY2F0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGZhY2FkZTogQmF0dGxlU2hpcEZhY2FkZSA9IEJhdHRsZVNoaXBGYWNhZGUuZ2V0SW5zdGFuY2UoR2FtZVNldHRpbmdzLkJhdHRsZVNoaXBGYWNhZGVLZXkpO1xyXG4gICAgICAgIGxldCBwbGF5ZXI6IHN0cmluZyA9IG5vdGlmaWNhdGlvbi5nZXRUeXBlKCk7XHJcbiAgICAgICAgbGV0IGdyaWQ6IGFueSA9IGZhY2FkZS5yZXRyaWV2ZVByb3h5KEJhdHRsZVNoaXBGYWNhZGUuR3JpZFByb3h5KS5nZXRHcmlkKHBsYXllcik7XHJcbiAgICAgICAgTG9nR3JpZFNxdWFyZXNDb21tYW5kLmxvZyhncmlkKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvY29tbWFuZC9Mb2dHcmlkU3F1YXJlc0NvbW1hbmQudHMiLCJpbXBvcnQge0Fic3RyYWN0UHJveHl9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RQcm94eVwiO1xyXG5pbXBvcnQge0dyaWR9IGZyb20gXCIuL0dyaWRcIjtcclxuaW1wb3J0IHtHYW1lU2V0dGluZ3N9IGZyb20gXCIuLi9zdGF0aWNJbmZvcm1hdGlvbi9HYW1lU2V0dGluZ3NcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdyaWRQcm94eSBleHRlbmRzIEFic3RyYWN0UHJveHkge1xyXG5cclxuICAgIHB1YmxpYyBncmlkczogQXJyYXk8R3JpZD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHByb3h5TmFtZVxyXG4gICAgICogQHBhcmFtIGRhdGFcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHJveHlOYW1lPzogc3RyaW5nLCBkYXRhPzogYW55KSB7XHJcbiAgICAgICAgc3VwZXIocHJveHlOYW1lLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gZ3JpZHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldERhdGEoZ3JpZHM6IEFycmF5PEdyaWQ+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ncmlkcyA9IGdyaWRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwbGF5ZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEdyaWQocGxheWVyOiBzdHJpbmcpOiBHcmlkIHtcclxuICAgICAgICBpZiAocGxheWVyID09IEdhbWVTZXR0aW5ncy5QbGF5ZXJPbmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZHNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBsYXllciA9PSBHYW1lU2V0dGluZ3MuUGxheWVyVHdvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyaWRzWzFdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvcHJveHkvR3JpZFByb3h5LnRzIiwiaW1wb3J0IHtBYnN0cmFjdFByb3h5fSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0UHJveHlcIjtcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuL1BsYXllclwiO1xyXG5pbXBvcnQge0dhbWVTZXR0aW5nc30gZnJvbSBcIi4uL3N0YXRpY0luZm9ybWF0aW9uL0dhbWVTZXR0aW5nc1wiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGxheWVyUHJveHkgZXh0ZW5kcyBBYnN0cmFjdFByb3h5IHtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyczogQXJyYXk8UGxheWVyPiA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwcm94eU5hbWVcclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHByb3h5TmFtZT86IHN0cmluZywgZGF0YT86IGFueSkge1xyXG4gICAgICAgIHN1cGVyKHByb3h5TmFtZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBsYXllcnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldERhdGEocGxheWVyczogQXJyYXk8UGxheWVyPik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGxheWVycyA9IHBsYXllcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBsYXllclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0UGxheWVyKHBsYXllcjogc3RyaW5nKTogUGxheWVyIHtcclxuICAgICAgICBpZiAocGxheWVyID09IEdhbWVTZXR0aW5ncy5QbGF5ZXJPbmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGxheWVyID09IEdhbWVTZXR0aW5ncy5QbGF5ZXJUd28pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc1sxXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L3Byb3h5L1BsYXllclByb3h5LnRzIiwiLyoqXHJcbiAqXHJcbiAqL1xyXG5pbXBvcnQge0dhbWVTZXR0aW5nc30gZnJvbSBcIi4uL3N0YXRpY0luZm9ybWF0aW9uL0dhbWVTZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfcGxheWVyOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9zaGlwc1BsYWNlZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3NoaXBzUGxhY2VtZW50Q29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBsYXllclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3BsYXllciA9IHBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgdGhlIG51bWJlciBvZiBzaGlwcyBwbGFjZWQgZm9yIHRoaXMgUGxheWVyIGNsYXNzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlTnVtYmVyT2ZTaGlwc1BsYWNlZCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NoaXBzUGxhY2VkIDw9IEdhbWVTZXR0aW5ncy5NYXhpbXVtTnVtYmVyT2ZTaGlwc09uQUdyaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2hpcHNQbGFjZWQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3NoaXBzUGxhY2VkID09PSBHYW1lU2V0dGluZ3MuTWF4aW11bU51bWJlck9mU2hpcHNPbkFHcmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoaXBzUGxhY2VtZW50Q29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBsYXllciBmaW5pc2hlZCBwbGFjaW5nIHRoZSBzaGlwcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNoaXBzUGxhY2VtZW50RmluaXNoZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NoaXBzUGxhY2VtZW50Q29tcGxldGVkID09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BsYXllcicgKyB0aGlzLl9wbGF5ZXIgKyAnIGZpbmlzaGVkIHBsYWNpbmcgdGhlIHNoaXBzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaGlwc1BsYWNlbWVudENvbXBsZXRlZDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvcHJveHkvUGxheWVyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==