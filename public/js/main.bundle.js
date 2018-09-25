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
    /******/
    return __webpack_require__(__webpack_require__.s = 5);
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
        var BattleShipController_1 = __webpack_require__(6);
        var BattleShipView_1 = __webpack_require__(10);
        var AbstractFacade_1 = __webpack_require__(25);
        __webpack_require__(1);
var MediatorNotifications;
(function (MediatorNotifications) {
    MediatorNotifications["ShipsPlacement"] = "SHIPS_PLACEMENT_MEDIATOR";
})(MediatorNotifications = exports.MediatorNotifications || (exports.MediatorNotifications = {}));
var CommandNotifications;
(function (CommandNotifications) {
    CommandNotifications["ClickHandle"] = "CLICK_HANDLE_COMMAND";
    CommandNotifications["ButtonPress"] = "BUTTON_PRESS_COMMAND";
    CommandNotifications["StartGame"] = "START_GAME_COMMAND";
    CommandNotifications["ShipsPlacement"] = "SHIPS_PLACEMENT_COMMAND";
})(CommandNotifications = exports.CommandNotifications || (exports.CommandNotifications = {}));
var FacadeInformation;
(function (FacadeInformation) {
    FacadeInformation[FacadeInformation["GridOne"] = 1] = "GridOne";
    FacadeInformation[FacadeInformation["GridTwo"] = 2] = "GridTwo";
    FacadeInformation[FacadeInformation["Grid1XPosition"] = 100] = "Grid1XPosition";
    FacadeInformation[FacadeInformation["Grid1YPosition"] = 100] = "Grid1YPosition";
    FacadeInformation[FacadeInformation["Grid1BorderColor"] = 255] = "Grid1BorderColor";
    FacadeInformation[FacadeInformation["Grid2XPosition"] = 100] = "Grid2XPosition";
    FacadeInformation[FacadeInformation["Grid2YPosition"] = 100] = "Grid2YPosition";
    FacadeInformation[FacadeInformation["Grid2BorderColor"] = 16711680] = "Grid2BorderColor";
    FacadeInformation[FacadeInformation["GridSquareFillColor"] = 0] = "GridSquareFillColor";
    FacadeInformation[FacadeInformation["RulerTextColor"] = 0] = "RulerTextColor";
    FacadeInformation[FacadeInformation["HitColor"] = 12255300] = "HitColor";
    FacadeInformation[FacadeInformation["MissColor"] = 16724736] = "MissColor";
    FacadeInformation[FacadeInformation["SquareWidth"] = 80] = "SquareWidth";
    FacadeInformation[FacadeInformation["NumberOfSquaresVertically"] = 10] = "NumberOfSquaresVertically";
    FacadeInformation[FacadeInformation["NumberOfSquaresHorizontally"] = 10] = "NumberOfSquaresHorizontally";
    FacadeInformation["TextViewText"] = "Game status : \n  Ships placement";
    FacadeInformation[FacadeInformation["TextViewColor"] = 16777215] = "TextViewColor";
    FacadeInformation[FacadeInformation["FontSize"] = 30] = "FontSize";
    FacadeInformation[FacadeInformation["ShipFillColor"] = 255] = "ShipFillColor";
    FacadeInformation[FacadeInformation["ShipBorderColor"] = 16773120] = "ShipBorderColor";
    FacadeInformation[FacadeInformation["ButtonViewXPosition"] = 100] = "ButtonViewXPosition";
    FacadeInformation[FacadeInformation["ButtonViewYPosition"] = 100] = "ButtonViewYPosition";
    FacadeInformation[FacadeInformation["ButtonViewScale"] = 0.9] = "ButtonViewScale";
    FacadeInformation["BattleShipFacadeKey"] = "BattleShip";
})(FacadeInformation = exports.FacadeInformation || (exports.FacadeInformation = {}));
var BattleShipFacade = (function (_super) {
    __extends(BattleShipFacade, _super);
    function BattleShipFacade(key) {
        return _super.call(this, key) || this;
    }
    BattleShipFacade.prototype.initializeFacade = function () {
        if (this.multitonKey == undefined)
            return;
        this.app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x000000});
        document.body.appendChild(this.app.view);
        this.GameBoardContainerOne = new PIXI.Container;
        this.GameBoardContainerTwo = new PIXI.Container;
        this.GameInfoContainer = new PIXI.Container;
        this.GameButtonContainer = new PIXI.Container;
        this.ShipsContainer = new PIXI.Container;
        this.app.stage.addChild(this.GameBoardContainerOne, this.GameBoardContainerTwo, this.GameInfoContainer, this.GameButtonContainer, this.ShipsContainer);
        this.checkStartOrientation();
        this.changeOrientation();
        this.initializeView();
        this.initializeModel();
        this.initializeController();
        console.log('BattleShipFacade created');
    };
    BattleShipFacade.prototype.initializeModel = function () {
    };
    BattleShipFacade.prototype.initializeView = function () {
        if (!this.view)
            this.view = BattleShipView_1.BattleShipView.getInstance(this.multitonKey);
    };
    BattleShipFacade.prototype.initializeController = function () {
        if (!this.controller)
            this.controller = BattleShipController_1.BattleShipController.getInstance(this.multitonKey);
    };
    BattleShipFacade.prototype.addContainersToView = function (containersList, type) {
        for (var _i = 0, containersList_1 = containersList; _i < containersList_1.length; _i++) {
            var item = containersList_1[_i];
            if (type === 0) {
                this.GameBoardContainerOne.addChild(item);
            }
            else if (type === 1) {
                this.GameBoardContainerTwo.addChild(item);
            }
            else if (type === 2) {
                this.GameInfoContainer.addChild(item);
            }
            else if (type === 3) {
                this.GameButtonContainer.addChild(item);
            }
            else if (type === 4) {
                this.ShipsContainer.addChild(item);
            }
        }
    };
    BattleShipFacade.prototype.notifyObservers = function (mNotification) {
        if (this.view)
            this.view.notifyObservers(mNotification);
    };
    BattleShipFacade.getInstance = function (key) {
        if (!puremvc.Facade.instanceMap[key])
            puremvc.Facade.instanceMap[key] = new BattleShipFacade(key);
        return puremvc.Facade.instanceMap[key];
    };
    BattleShipFacade.prototype.checkStartOrientation = function () {
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
        var width = this.app.view.width;
        var height = this.app.view.height;
        switch (window.orientation) {
            case 90:
                this.GameBoardContainerOne.position.set(width / 6, height / 2);
                this.GameBoardContainerOne.scale.set(0.5);
                this.GameBoardContainerTwo.position.set(3 * width / 6, height / 2);
                this.GameBoardContainerTwo.scale.set(0.5);
                this.GameInfoContainer.position.set(5 * width / 6, height / 4);
                this.GameInfoContainer.scale.set(1);
                this.GameButtonContainer.position.set(5 * width / 6, 3 * height / 4);
                this.GameButtonContainer.scale.set(0.9);
                this.ShipsContainer.position.set(width / 4, height / 6);
                this.ShipsContainer.scale.set(0.5);
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
                this.GameBoardContainerOne.scale.set(0.5);
                this.GameBoardContainerTwo.position.set(3 * width / 6, height / 2);
                this.GameBoardContainerTwo.scale.set(0.5);
                this.GameInfoContainer.position.set(5 * width / 6, height / 4);
                this.GameInfoContainer.scale.set(1);
                this.GameButtonContainer.position.set(5 * width / 6, 3 * height / 4);
                this.GameButtonContainer.scale.set(0.9);
                this.ShipsContainer.position.set(width / 4, height / 6);
                this.ShipsContainer.scale.set(0.5);
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
                    _this.GameBoardContainerOne.scale.set(0.5);
                    _this.GameBoardContainerTwo.position.set(3 * width / 6, height / 2);
                    _this.GameBoardContainerTwo.scale.set(0.5);
                    _this.GameInfoContainer.position.set(5 * width / 6, height / 4);
                    _this.GameInfoContainer.scale.set(1);
                    _this.GameButtonContainer.position.set(5 * width / 6, 3 * height / 4);
                    _this.GameButtonContainer.scale.set(0.9);
                    _this.ShipsContainer.position.set(width / 4, height / 6);
                    _this.ShipsContainer.scale.set(0.5);
                    break;
                case 0:
                    _this.GameBoardContainerOne.position.set(width / 2, height / 6);
                    _this.GameBoardContainerOne.scale.set(0.7, 0.7);
                    _this.GameBoardContainerTwo.position.set(width / 2, 3 * height / 6);
                    _this.GameBoardContainerTwo.scale.set(0.7, 0.7);
                    _this.GameInfoContainer.position.set(width / 4, 5 * height / 6);
                    _this.GameInfoContainer.scale.set(1.6);
                    _this.GameButtonContainer.position.set(3 * width / 4, 5 * height / 6);
                    _this.GameButtonContainer.scale.set(1.6);
                    break;
                default:
                    _this.GameBoardContainerOne.position.set(width / 6, height / 2);
                    _this.GameBoardContainerOne.scale.set(0.5);
                    _this.GameBoardContainerTwo.position.set(3 * width / 6, height / 2);
                    _this.GameBoardContainerTwo.scale.set(0.5);
                    _this.GameInfoContainer.position.set(5 * width / 6, height / 4);
                    _this.GameInfoContainer.scale.set(1);
                    _this.GameButtonContainer.position.set(5 * width / 6, 3 * height / 4);
                    _this.GameButtonContainer.scale.set(0.9);
                    _this.ShipsContainer.position.set(width / 4, height / 6);
                    _this.ShipsContainer.scale.set(0.5);
                    break;
            }
        });
    };
    return BattleShipFacade;
}(AbstractFacade_1.AbstractFacade));
exports.BattleShipFacade = BattleShipFacade;


/***/ }),
    /* 1 */
    /***/ (function (module, exports) {

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
    AbstractView.prototype.initializeView = function () {
        this._container = new PIXI.Container();
    };
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
        __webpack_require__(1);
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
    return AbstractCommand;
}(puremvc.SimpleCommand));
exports.AbstractCommand = AbstractCommand;


/***/ }),
    /* 5 */
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
        var SquareClickCommand_1 = __webpack_require__(7);
        var BattleShipFacade_1 = __webpack_require__(0);
        var AbstractController_1 = __webpack_require__(8);
        __webpack_require__(1);
        var ButtonPressCommand_1 = __webpack_require__(9);
var BattleShipController = (function (_super) {
    __extends(BattleShipController, _super);
    function BattleShipController(key) {
        var _this = _super.call(this, key) || this;
        _super.prototype.registerCommand.call(_this, BattleShipFacade_1.CommandNotifications.ClickHandle, SquareClickCommand_1.SquareClickCommand);
        _super.prototype.registerCommand.call(_this, BattleShipFacade_1.CommandNotifications.ButtonPress, ButtonPressCommand_1.ButtonPressCommand);
        console.log('BattleShipController created');
        return _this;
    }
    BattleShipController.getInstance = function (key) {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new BattleShipController(key);
        return puremvc.Controller.instanceMap[key];
    };
    return BattleShipController;
}(AbstractController_1.AbstractController));
exports.BattleShipController = BattleShipController;


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
        var AbstractCommand_1 = __webpack_require__(4);
        var BattleShipFacade_1 = __webpack_require__(0);
        __webpack_require__(1);
var SquareClickCommand = (function (_super) {
    __extends(SquareClickCommand, _super);
    function SquareClickCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SquareClickCommand.prototype.execute = function (notification) {
        switch (notification.getName()) {
            case BattleShipFacade_1.CommandNotifications.ClickHandle:
                console.log('SquareClick Handle Request');
                break;
        }
    };
    return SquareClickCommand;
}(AbstractCommand_1.AbstractCommand));
exports.SquareClickCommand = SquareClickCommand;


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
        var AbstractCommand_1 = __webpack_require__(4);
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
        var ViewMediator_1 = __webpack_require__(11);
        var AbstractView_1 = __webpack_require__(2);
        __webpack_require__(1);
var BattleShipView = (function (_super) {
    __extends(BattleShipView, _super);
    function BattleShipView(key) {
        var _this = _super.call(this, key) || this;
        _this.multitonKey = key;
        _super.prototype.registerMediator.call(_this, new ViewMediator_1.ViewMediator(key, _this));
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
    return BattleShipView;
}(AbstractView_1.AbstractView));
exports.BattleShipView = BattleShipView;


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
        var GridView_1 = __webpack_require__(12);
        __webpack_require__(1);
        var BattleShipFacade_1 = __webpack_require__(0);
        var TextView_1 = __webpack_require__(19);
        var ButtonView_1 = __webpack_require__(21);
        var ShipView_1 = __webpack_require__(23);
        var AbstractMediator_1 = __webpack_require__(3);
var ViewMediator = (function (_super) {
    __extends(ViewMediator, _super);
    function ViewMediator(mediatorName, viewComponent) {
        var _this = _super.call(this, mediatorName, viewComponent) || this;
        _this.name = 'ViewMediator';
        _this.gridViewName = ['GridOneBoard', 'GridTwoBoard'];
        _this.textViewName = 'TextView';
        _this.buttonViewName = 'ButtonView';
        _this.shipViewName = 'ShipView';
        GridView_1.GridView.getInstance(_this.gridViewName[0], BattleShipFacade_1.FacadeInformation.GridOne);
        GridView_1.GridView.getInstance(_this.gridViewName[1], BattleShipFacade_1.FacadeInformation.GridTwo);
        TextView_1.TextView.getInstance(_this.textViewName, BattleShipFacade_1.FacadeInformation.TextViewText, BattleShipFacade_1.FacadeInformation.FontSize, BattleShipFacade_1.FacadeInformation.TextViewColor);
        ButtonView_1.ButtonView.getInstance(_this.buttonViewName, BattleShipFacade_1.FacadeInformation.ButtonViewXPosition, BattleShipFacade_1.FacadeInformation.ButtonViewYPosition, BattleShipFacade_1.FacadeInformation.ButtonViewScale);
        for (var i = 0; i < 3; i++) {
            ShipView_1.ShipView.getInstance(_this.shipViewName + '' + i, 0, 100 + i * 100, 5 - i);
        }
        console.log('   # ' + _this.name + ' created');
        return _this;
    }
    ViewMediator.prototype.listNotificationInterests = function () {
        return [];
    };
    ViewMediator.prototype.handleNotification = function (notification) {
        var name = notification.name;
    };
    return ViewMediator;
}(AbstractMediator_1.AbstractMediator));
exports.ViewMediator = ViewMediator;


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
        var AbstractView_1 = __webpack_require__(2);
        var SquareView_1 = __webpack_require__(13);
        var BattleShipFacade_1 = __webpack_require__(0);
        var RulerView_1 = __webpack_require__(16);
        var GridViewMediator_1 = __webpack_require__(18);
        __webpack_require__(1);
var GridView = (function (_super) {
    __extends(GridView, _super);
    function GridView(key, gridNumber) {
        var _this = _super.call(this, key) || this;
        _this.BoardSquaresXPosition = [];
        _this.BoardSquaresYPosition = [];
        _this.RulerName = 'RulerForTheGrid';
        _this.name = 'GridView';
        _this.name = _this.name.concat(gridNumber.toString());
        switch (gridNumber) {
            case 1:
                _this.createBoard(BattleShipFacade_1.FacadeInformation.Grid1XPosition, BattleShipFacade_1.FacadeInformation.Grid1YPosition, BattleShipFacade_1.FacadeInformation.SquareWidth, BattleShipFacade_1.FacadeInformation.NumberOfSquaresVertically, BattleShipFacade_1.FacadeInformation.NumberOfSquaresHorizontally, BattleShipFacade_1.FacadeInformation.Grid1BorderColor, BattleShipFacade_1.FacadeInformation.GridSquareFillColor);
                _this.createRuler(BattleShipFacade_1.FacadeInformation.Grid1XPosition, BattleShipFacade_1.FacadeInformation.Grid1YPosition, BattleShipFacade_1.FacadeInformation.NumberOfSquaresVertically, BattleShipFacade_1.FacadeInformation.NumberOfSquaresHorizontally, BattleShipFacade_1.FacadeInformation.SquareWidth, BattleShipFacade_1.FacadeInformation.Grid1BorderColor, BattleShipFacade_1.FacadeInformation.RulerTextColor);
                break;
            case 2:
                _this.createBoard(BattleShipFacade_1.FacadeInformation.Grid2XPosition, BattleShipFacade_1.FacadeInformation.Grid2YPosition, BattleShipFacade_1.FacadeInformation.SquareWidth, BattleShipFacade_1.FacadeInformation.NumberOfSquaresVertically, BattleShipFacade_1.FacadeInformation.NumberOfSquaresHorizontally, BattleShipFacade_1.FacadeInformation.Grid2BorderColor, BattleShipFacade_1.FacadeInformation.GridSquareFillColor);
                _this.createRuler(BattleShipFacade_1.FacadeInformation.Grid2XPosition, BattleShipFacade_1.FacadeInformation.Grid2YPosition, BattleShipFacade_1.FacadeInformation.NumberOfSquaresVertically, BattleShipFacade_1.FacadeInformation.NumberOfSquaresHorizontally, BattleShipFacade_1.FacadeInformation.SquareWidth, BattleShipFacade_1.FacadeInformation.Grid2BorderColor, BattleShipFacade_1.FacadeInformation.RulerTextColor);
                break;
        }
        _super.prototype.registerMediator.call(_this, new GridViewMediator_1.GridViewMediator(key, _this, gridNumber));
        console.log('   # ' + _this.name + ' created');
        return _this;
    }
    GridView.prototype.initializeView = function () {
        _super.prototype.initializeView.call(this);
    };
    GridView.prototype.getUIContainer = function () {
        this._container.pivot.x = this._container.width / 2;
        this._container.pivot.y = this._container.height / 2;
        return _super.prototype.getUIContainer.call(this);
    };
    GridView.getInstance = function (key, gridNumber) {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new GridView(key, gridNumber);
        return puremvc.View.instanceMap[key];
    };
    GridView.prototype.createBoard = function (gridXPosition, gridYPosition, squareWidth, numberOfSquaresVertically, numberOfSquaresHorizontally, gridBorderColor, gridSquareFillColor) {
        var newXPosition, newYPosition = gridYPosition, square, key = 0;
        this.BoardSquares = [];
        for (var i = 0; i < numberOfSquaresVertically; i++) {
            this.BoardSquares[i] = [];
            this.BoardSquaresXPosition[i] = [];
            this.BoardSquaresYPosition[i] = [];
            newXPosition = gridXPosition;
            for (var j = 0; j < numberOfSquaresHorizontally; j++) {
                key++;
                square = SquareView_1.SquareView.getInstance('Square' + key + Math.random(), newXPosition + j * squareWidth, newYPosition, squareWidth, gridBorderColor, gridSquareFillColor, j, i);
                this.BoardSquares[i][j] = square;
            }
            newYPosition += squareWidth;
        }
        for (var i = 0; i < numberOfSquaresVertically; i++)
            for (var j = 0; j < numberOfSquaresHorizontally; j++)
                this._container.addChild(this.BoardSquares[i][j].getUIContainer());
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
        var HitView_1 = __webpack_require__(14);
        var MissView_1 = __webpack_require__(15);
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
        _this.addToContainer(_this.squareGraphics);
        _this.addToContainer(_this.squareMarking);
        _this.addToContainer(_this.squareGlow);
        _this.initializeSquareInteraction();
        return _this;
    }
    SquareView.prototype.initializeView = function () {
        _super.prototype.initializeView.call(this);
    };
    SquareView.prototype.getPosition = function () {
        return [this.x, this.y];
    };
    SquareView.prototype.initializeSquareInteraction = function () {
        this.squareGraphics
            .on(this.squareEvent, this.handleMouseDown, this)
            .on('pointerover', this.handleMouseOver)
            .on('pointerout', this.handleMouseOut);
    };
    SquareView.prototype.handleMouseDown = function () {
        this.hit();
        BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey).sendNotification(BattleShipFacade_1.CommandNotifications.ClickHandle, [this.horizontalIndex, this.verticalIndex].toString());
    };
    SquareView.prototype.hit = function () {
        this.hitView.setActive(true);
    };
    SquareView.prototype.miss = function () {
        this.missView.setActive(true);
    };
    SquareView.getInstance = function (key, squareXPosition, squareYPosition, squareWidth, borderColor, fillColor, horizontalIndex, verticalIndex) {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new SquareView(key, squareXPosition, squareYPosition, squareWidth, borderColor, fillColor, horizontalIndex, verticalIndex);
        return puremvc.View.instanceMap[key];
    };
    return SquareView;
}(AbstractView_1.AbstractView));
exports.SquareView = SquareView;


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
        var RulerSquare_1 = __webpack_require__(17);
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
    RulerView.getInstance = function (key, xPosition, yPosition, numberOfSquaresVertically, numberOfSquaresHorizontally, squareWidth, borderColor, textColor) {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new RulerView(key, xPosition, yPosition, numberOfSquaresVertically, numberOfSquaresHorizontally, squareWidth, borderColor, textColor);
        return puremvc.View.instanceMap[key];
    };
    return RulerView;
}(AbstractView_1.AbstractView));
exports.RulerView = RulerView;


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
        __webpack_require__(1);
        var BattleShipFacade_1 = __webpack_require__(0);
var GridViewMediator = (function (_super) {
    __extends(GridViewMediator, _super);
    function GridViewMediator(key, viewComponent, gridNumber) {
        if (viewComponent === void 0) { viewComponent = null; }
        var _this = _super.call(this, name, viewComponent) || this;
        _this.name = 'GridViewMediator';
        _this.gridName = 'GridBoard';
        _this.name += '' + gridNumber;
        var containersList = [];
        containersList.push(_super.prototype.getViewComponent.call(_this).getUIContainer());
        BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, gridNumber - 1);
        console.log('   # ' + _this.name + ' created');
        return _this;
    }
    GridViewMediator.prototype.listNotificationInterests = function () {
        return [];
    };
    GridViewMediator.prototype.handleNotification = function (notification) {
        var name = notification.name;
    };
    return GridViewMediator;
}(puremvc.Mediator));
exports.GridViewMediator = GridViewMediator;


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
        var TextViewMediator_1 = __webpack_require__(20);
        var TextView = (function (_super) {
            __extends(TextView, _super);

            function TextView(key, text, fontSize, color) {
                var _this = _super.call(this, key) || this;
                _this.text = new PIXI.Text(text, {fontSize: fontSize, fill: color});
                _this.text.anchor.set(0, 0);
                _this._container.addChild(_this.text);
                _super.prototype.registerMediator.call(_this, new TextViewMediator_1.TextViewMediator(key, _this));
                return _this;
            }

            TextView.prototype.initializeView = function () {
                _super.prototype.initializeView.call(this);
            };
            TextView.prototype.getUIContainer = function () {
                this._container.pivot.x = this._container.width / 2;
                this._container.pivot.y = this._container.height / 2;
                return _super.prototype.getUIContainer.call(this);
            };
            TextView.getInstance = function (key, text, fontSize, color) {
                if (!puremvc.View.instanceMap[key])
                    puremvc.View.instanceMap[key] = new TextView(key, text, fontSize, color);
                return puremvc.View.instanceMap[key];
            };
            return TextView;
        }(AbstractView_1.AbstractView));
        exports.TextView = TextView;


        /***/
    }),
    /* 20 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";

        var __extends = (this && this.__extends) || (function () {
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({__proto__: []} instanceof Array && function (d, b) {
                        d.__proto__ = b;
                    }) ||
                    function (d, b) {
                        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                    };
                return extendStatics(d, b);
            }
            return function (d, b) {
                extendStatics(d, b);

                function __() {
                    this.constructor = d;
                }

                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        })();
        Object.defineProperty(exports, "__esModule", {value: true});
        __webpack_require__(1);
        var BattleShipFacade_1 = __webpack_require__(0);
        var AbstractMediator_1 = __webpack_require__(3);
        var TextViewMediator = (function (_super) {
            __extends(TextViewMediator, _super);

            function TextViewMediator(mediatorName, viewComponent) {
                var _this = _super.call(this, name, viewComponent) || this;
                _this.name = 'TextViewMediator';
                var containersList = [];
                containersList.push(_super.prototype.getViewComponent.call(_this).getUIContainer());
                BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, 2);
                console.log('   # ' + _this.name + ' created');
                return _this;
            }

            TextViewMediator.prototype.listNotificationInterests = function () {
                return [];
            };
            TextViewMediator.prototype.handleNotification = function (notification) {
                var name = notification.name;
            };
            return TextViewMediator;
        }(AbstractMediator_1.AbstractMediator));
        exports.TextViewMediator = TextViewMediator;


        /***/
    }),
    /* 21 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";

        var __extends = (this && this.__extends) || (function () {
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({__proto__: []} instanceof Array && function (d, b) {
                        d.__proto__ = b;
                    }) ||
                    function (d, b) {
                        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                    };
                return extendStatics(d, b);
            }
            return function (d, b) {
                extendStatics(d, b);

                function __() {
                    this.constructor = d;
                }

                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        })();
        Object.defineProperty(exports, "__esModule", {value: true});
        var AbstractView_1 = __webpack_require__(2);
        var ButtonViewMediator_1 = __webpack_require__(22);
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
        _super.prototype.registerMediator.call(_this, new ButtonViewMediator_1.ButtonViewMediator(key, _this));
        console.log('   # ButtonView created');
        return _this;
    }
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
    ButtonView.getInstance = function (key, xPosition, yPosition, scale) {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new ButtonView(key, xPosition, yPosition, scale);
        return puremvc.View.instanceMap[key];
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
        var BattleShipFacade_1 = __webpack_require__(0);
        __webpack_require__(1);
        var AbstractMediator_1 = __webpack_require__(3);
var ButtonViewMediator = (function (_super) {
    __extends(ButtonViewMediator, _super);
    function ButtonViewMediator(key, viewComponent) {
        if (viewComponent === void 0) { viewComponent = null; }
        var _this = _super.call(this, name, viewComponent) || this;
        _this.name = 'ButtonViewMediator';
        var containersList = [];
        containersList.push(_super.prototype.getViewComponent.call(_this).getUIContainer());
        BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, 3);
        console.log('   # ' + _this.name + ' created');
        return _this;
    }
    ButtonViewMediator.prototype.listNotificationInterests = function () {
        return [];
    };
    ButtonViewMediator.prototype.handleNotification = function (notification) {
        var name = notification.name;
    };
    return ButtonViewMediator;
}(AbstractMediator_1.AbstractMediator));
exports.ButtonViewMediator = ButtonViewMediator;


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
        var BattleShipFacade_1 = __webpack_require__(0);
        var AbstractView_1 = __webpack_require__(2);
        var ShipViewMediator_1 = __webpack_require__(24);
        __webpack_require__(1);
var ShipView = (function (_super) {
    __extends(ShipView, _super);
    function ShipView(key, xPosition, yPosition, numberOfSquares) {
        var _this = _super.call(this, key) || this;
        _this.xPosition = xPosition;
        _this.yPosition = yPosition;
        _this.shipGraphics = new PIXI.Graphics();
        _this.shipGraphics.lineStyle(7, BattleShipFacade_1.FacadeInformation.ShipBorderColor);
        _this.shipGraphics.beginFill(BattleShipFacade_1.FacadeInformation.ShipFillColor);
        for (var i = 0; i < numberOfSquares; i++) {
            _this.shipGraphics.drawRect(_this.xPosition + i * BattleShipFacade_1.FacadeInformation.SquareWidth, _this.yPosition, BattleShipFacade_1.FacadeInformation.SquareWidth, BattleShipFacade_1.FacadeInformation.SquareWidth);
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
        }
        function onDragMove() {
            if (this.dragging) {
                var newPosition = this.data.getLocalPosition(this.parent);
                this.x = newPosition.x;
                this.y = newPosition.y;
            }
        }
        function onDragEnd() {
            var newPosition = this.data.getLocalPosition(this.parent);
            console.log(this.data.getLocalPosition(this.parent.parent));
            BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey).sendNotification(BattleShipFacade_1.MediatorNotifications.ShipsPlacement, this.data.getLocalPosition(this.parent.parent));
            this.alpha = 1;
            this.dragging = false;
            this.data = null;
            this.destroy();
        }
        _super.prototype.registerMediator.call(_this, new ShipViewMediator_1.ShipViewMediator(key, _this));
        console.log('   # ShipView created');
        return _this;
    }
    ShipView.prototype.initializeView = function () {
        _super.prototype.initializeView.call(this);
    };
    ShipView.prototype.getUIContainer = function () {
        return this.shipGraphics;
    };
    ShipView.getInstance = function (key, xPosition, yPosition, numberOfSquares) {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new ShipView(key, xPosition, yPosition, numberOfSquares);
        return puremvc.View.instanceMap[key];
    };
    return ShipView;
}(AbstractView_1.AbstractView));
exports.ShipView = ShipView;


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
        __webpack_require__(1);
        var BattleShipFacade_1 = __webpack_require__(0);
        var AbstractMediator_1 = __webpack_require__(3);
var ShipViewMediator = (function (_super) {
    __extends(ShipViewMediator, _super);
    function ShipViewMediator(mediatorName, viewComponent) {
        var _this = _super.call(this, mediatorName, viewComponent) || this;
        _this.name = 'ShipViewMediator';
        var containersList = [];
        containersList.push(_super.prototype.getViewComponent.call(_this).getUIContainer());
        BattleShipFacade_1.BattleShipFacade.getInstance(BattleShipFacade_1.FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, 4);
        console.log('   # ' + _this.name + ' created');
        return _this;
    }
    ShipViewMediator.prototype.listNotificationInterests = function () {
        return [BattleShipFacade_1.MediatorNotifications.ShipsPlacement];
    };
    ShipViewMediator.prototype.handleNotification = function (notification) {
        switch (name) {
            case BattleShipFacade_1.MediatorNotifications.ShipsPlacement:
                console.log('Ships placement in mediator');
                _super.prototype.sendNotification.call(this, BattleShipFacade_1.CommandNotifications.ShipsPlacement);
                break;
        }
    };
    return ShipViewMediator;
}(AbstractMediator_1.AbstractMediator));
exports.ShipViewMediator = ShipViewMediator;


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
        _super.prototype.sendNotification.call(this, name, body, type);
    };
    return AbstractFacade;
}(puremvc.Facade));
exports.AbstractFacade = AbstractFacade;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGQ5MDM4NjlkZmI1NDA1NTI1MDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUElYSVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdE1lZGlhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdENvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9jb250cm9sbGVyL0JhdHRsZVNoaXBDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvY29tbWFuZC9TcXVhcmVDbGlja0NvbW1hbmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbW1hbmQvQnV0dG9uUHJlc3NDb21tYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9tYWluVmlldy9CYXR0bGVTaGlwVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L21lZGlhdG9yL1ZpZXdNZWRpYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvZ3JpZC9HcmlkVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvZ3JpZC9TcXVhcmVWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9oaXRzL0hpdFZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L2hpdHMvTWlzc1ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L3J1bGVyL1J1bGVyVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvcnVsZXIvUnVsZXJTcXVhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9HcmlkVmlld01lZGlhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy90ZXh0L1RleHRWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvbWVkaWF0b3IvVGV4dFZpZXdNZWRpYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvYnV0dG9uL0J1dHRvblZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9CdXR0b25WaWV3TWVkaWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L3NoaXBzL1NoaXBWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0L3Byb2plY3QvbWVkaWF0b3IvU2hpcFZpZXdNZWRpYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RGYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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O0lBRUwscUJBQUM7QUFBRCxDQUFDLENBOUJtQyxPQUFPLENBQUMsTUFBTSxHQThCakQ7QUE5Qlksd0NBQWMiLCJmaWxlIjoiLi9qcy9tYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4ZDkwMzg2OWRmYjU0MDU1MjUwNSIsImltcG9ydCB7QmF0dGxlU2hpcENvbnRyb2xsZXJ9IGZyb20gXCIuLi9jb250cm9sbGVyL0JhdHRsZVNoaXBDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7QmF0dGxlU2hpcFZpZXd9IGZyb20gXCIuLi92aWV3L21haW5WaWV3L0JhdHRsZVNoaXBWaWV3XCI7XHJcbmltcG9ydCB7QWJzdHJhY3RGYWNhZGV9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RGYWNhZGVcIjtcclxuaW1wb3J0ICdwaXhpLmpzJztcclxuXHJcbmV4cG9ydCBlbnVtIE1lZGlhdG9yTm90aWZpY2F0aW9ucyB7XHJcbiAgICBTaGlwc1BsYWNlbWVudCA9ICdTSElQU19QTEFDRU1FTlRfTUVESUFUT1InXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENvbW1hbmROb3RpZmljYXRpb25zIHtcclxuXHJcbiAgICBDbGlja0hhbmRsZSA9ICdDTElDS19IQU5ETEVfQ09NTUFORCcsXHJcbiAgICBCdXR0b25QcmVzcyA9ICdCVVRUT05fUFJFU1NfQ09NTUFORCcsXHJcbiAgICBTdGFydEdhbWUgPSAnU1RBUlRfR0FNRV9DT01NQU5EJyxcclxuICAgIFNoaXBzUGxhY2VtZW50ID0gJ1NISVBTX1BMQUNFTUVOVF9DT01NQU5EJ1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBGYWNhZGVJbmZvcm1hdGlvbiB7XHJcbiAgICBHcmlkT25lID0gMSxcclxuICAgIEdyaWRUd28gPSAyLFxyXG5cclxuICAgIEdyaWQxWFBvc2l0aW9uID0gMTAwLFxyXG4gICAgR3JpZDFZUG9zaXRpb24gPSAxMDAsXHJcbiAgICBHcmlkMUJvcmRlckNvbG9yID0gMHgwMDAwZmYsXHJcblxyXG4gICAgR3JpZDJYUG9zaXRpb24gPSAxMDAsXHJcbiAgICBHcmlkMllQb3NpdGlvbiA9IDEwMCxcclxuICAgIEdyaWQyQm9yZGVyQ29sb3IgPSAweGZmMDAwMCxcclxuXHJcbiAgICBHcmlkU3F1YXJlRmlsbENvbG9yID0gMHgwMDAwMDAsXHJcbiAgICBSdWxlclRleHRDb2xvciA9IDB4MDAwMDAwLFxyXG4gICAgSGl0Q29sb3IgPSAweEJCMDA0NCxcclxuICAgIE1pc3NDb2xvciA9IDB4ZmYzMzAwLFxyXG5cclxuICAgIFNxdWFyZVdpZHRoID0gODAsXHJcbiAgICBOdW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5ID0gMTAsXHJcbiAgICBOdW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHkgPSAxMCxcclxuXHJcbiAgICBUZXh0Vmlld1RleHQgPSAnR2FtZSBzdGF0dXMgOiBcXG4gIFNoaXBzIHBsYWNlbWVudCcsXHJcbiAgICBUZXh0Vmlld0NvbG9yID0gMHhmZmZmZmYsXHJcbiAgICBGb250U2l6ZSA9IDMwLFxyXG5cclxuICAgIFNoaXBGaWxsQ29sb3IgPSAweDAwMDBmZixcclxuICAgIFNoaXBCb3JkZXJDb2xvciA9IDB4ZmZmMDAwLFxyXG5cclxuICAgIEJ1dHRvblZpZXdYUG9zaXRpb24gPSAxMDAsXHJcbiAgICBCdXR0b25WaWV3WVBvc2l0aW9uID0gMTAwLFxyXG4gICAgQnV0dG9uVmlld1NjYWxlID0gMC45LFxyXG5cclxuICAgIEJhdHRsZVNoaXBGYWNhZGVLZXkgPSAnQmF0dGxlU2hpcCdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhdHRsZVNoaXBGYWNhZGUgZXh0ZW5kcyBBYnN0cmFjdEZhY2FkZSB7XHJcblxyXG4gICAgcHVibGljIGFwcDogUElYSS5BcHBsaWNhdGlvbjtcclxuXHJcbiAgICAvL1RPRE8gLSBUSEUgVEhSRUUgQ09OVEFJTkVSU1xyXG4gICAgLyoqVGhlIGNvbnRhaW5lcnMgdGhhdCBjb250YWlucyB0aGUgR2FtZUJvYXJkcyAqL1xyXG4gICAgcHVibGljIEdhbWVCb2FyZENvbnRhaW5lck9uZTogUElYSS5Db250YWluZXI7XHJcbiAgICBwdWJsaWMgR2FtZUJvYXJkQ29udGFpbmVyVHdvOiBQSVhJLkNvbnRhaW5lcjtcclxuICAgIC8qKlRoZSBjb250YWluZXIgd2hpY2ggY29udGFpbnMgdGhlIEdhbWVJbmZvICovXHJcbiAgICBwdWJsaWMgR2FtZUluZm9Db250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgLyoqVGhlIGNvbnRhaW5lciB3aGljaCBjb250YWlucyB0aGUgR2FtZUJ1dHRvbiAqL1xyXG4gICAgcHVibGljIEdhbWVCdXR0b25Db250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgLyoqVGhlIGNvbnRhaW5lciB0aGF0IGhvbGRzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBiYXR0bGVzaGlwcyAqL1xyXG4gICAgcHVibGljIFNoaXBzQ29udGFpbmVyOiBQSVhJLkNvbnRhaW5lcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgdGhlIEZhY2FkZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZUZhY2FkZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tdWx0aXRvbktleSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5hcHAgPSBuZXcgUElYSS5BcHBsaWNhdGlvbih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0LCB7YmFja2dyb3VuZENvbG9yOiAweDAwMDAwMH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5hcHAudmlldyk7XHJcbiAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUgPSBuZXcgUElYSS5Db250YWluZXI7XHJcbiAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28gPSBuZXcgUElYSS5Db250YWluZXI7XHJcbiAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXI7XHJcbiAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZSwgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28sXHJcbiAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIsIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lciwgdGhpcy5TaGlwc0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tTdGFydE9yaWVudGF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VPcmllbnRhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVZpZXcoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbnRyb2xsZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQmF0dGxlU2hpcEZhY2FkZSBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgdGhlIEZhY2FkZSdzIE1vZGVsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplTW9kZWwoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gbm8gbW9kZWwgbmVlZGVkIHlldFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6aW5nIHRoZSBGYWNhZGUncyBWaWV3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplVmlldygpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMudmlldylcclxuICAgICAgICAgICAgdGhpcy52aWV3ID0gQmF0dGxlU2hpcFZpZXcuZ2V0SW5zdGFuY2UodGhpcy5tdWx0aXRvbktleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgdGhlIEZhY2FkZSdzIENvbnRyb2xsZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVDb250cm9sbGVyKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5jb250cm9sbGVyKVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBCYXR0bGVTaGlwQ29udHJvbGxlci5nZXRJbnN0YW5jZSh0aGlzLm11bHRpdG9uS2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgY29udGFpbmVycyB0byB0aGUgdmlldyBzY3JlZW5cclxuICAgICAqIEBwYXJhbSBjb250YWluZXJzTGlzdFxyXG4gICAgICogQHBhcmFtIHR5cGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZENvbnRhaW5lcnNUb1ZpZXcoY29udGFpbmVyc0xpc3Q6IEFycmF5PFBJWEkuQ29udGFpbmVyPiwgdHlwZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBjb250YWluZXJzTGlzdCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLyoqQWRkaW5nIHRvIHRoZSBHYW1lQm9hcmRPbmUgQ29udGFpbmVyICovXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgLyoqQWRkaW5nIHRvIHRoZSBHYW1lQm9hcmRUd28gQ29udGFpbmVyICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3by5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAvKipBZGRpbmcgdG8gdGhlIEdhbWVJbmZvIENvbnRhaW5lciAqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAvKipBZGRpbmcgdG8gdGhlIEdhbWVCdXR0b24gQ29udGFpbmVyICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgLyoqQWRkaW5nIHRvIHRoZSBTaGlwc0luZm8gQ29udGFpbmVyICovXHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyLmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTm90aWZpZXMgdGhpcyBmYWNhZGUncyB2aWV3IG9ic2VydmVycy5cclxuICAgICAqIEBwYXJhbSBtTm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBub3RpZnlPYnNlcnZlcnMobU5vdGlmaWNhdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnZpZXcpXHJcbiAgICAgICAgICAgIHRoaXMudmlldy5ub3RpZnlPYnNlcnZlcnMobU5vdGlmaWNhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcpOiBCYXR0bGVTaGlwRmFjYWRlIHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuRmFjYWRlLmluc3RhbmNlTWFwW2tleV0pXHJcbiAgICAgICAgICAgIHB1cmVtdmMuRmFjYWRlLmluc3RhbmNlTWFwW2tleV0gPSBuZXcgQmF0dGxlU2hpcEZhY2FkZShrZXkpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5GYWNhZGUuaW5zdGFuY2VNYXBba2V5XSBhcyBCYXR0bGVTaGlwRmFjYWRlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqICBDaGVja3MgYXQgdGhlIFN0YXJ0IG9mIHRoZSBnYW1lIHdoaWNoIG9yaWVudGF0aW9uIGl0IGhhc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrU3RhcnRPcmllbnRhdGlvbigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5hcHAucmVuZGVyZXIucmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAgICAgICBsZXQgd2lkdGg6IG51bWJlciA9IHRoaXMuYXBwLnZpZXcud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodDogbnVtYmVyID0gdGhpcy5hcHAudmlldy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIHN3aXRjaCAod2luZG93Lm9yaWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgOTAgOlxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnBvc2l0aW9uLnNldCh3aWR0aCAvIDYsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUuc2NhbGUuc2V0KDAuNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28ucG9zaXRpb24uc2V0KDMgKiB3aWR0aCAvIDYsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28uc2NhbGUuc2V0KDAuNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5wb3NpdGlvbi5zZXQoNSAqIHdpZHRoIC8gNiwgaGVpZ2h0IC8gNCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLnNjYWxlLnNldCgxKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIucG9zaXRpb24uc2V0KDUgKiB3aWR0aCAvIDYsIDMgKiBoZWlnaHQgLyA0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5zY2FsZS5zZXQoMC45KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyLnBvc2l0aW9uLnNldCh3aWR0aCAvIDQsIGhlaWdodCAvIDYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lci5zY2FsZS5zZXQoMC41KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgMCA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZS5wb3NpdGlvbi5zZXQod2lkdGggLyAyLCBoZWlnaHQgLyA2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnNjYWxlLnNldCgwLjcsIDAuNyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28ucG9zaXRpb24uc2V0KHdpZHRoIC8gMiwgMyAqIGhlaWdodCAvIDYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28uc2NhbGUuc2V0KDAuNywgMC43KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLnBvc2l0aW9uLnNldCh3aWR0aCAvIDQsIDUgKiBoZWlnaHQgLyA2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIuc2NhbGUuc2V0KDEuNik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLnBvc2l0aW9uLnNldCgzICogd2lkdGggLyA0LCA1ICogaGVpZ2h0IC8gNik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIuc2NhbGUuc2V0KDEuNik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZS5wb3NpdGlvbi5zZXQod2lkdGggLyA2LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnNjYWxlLnNldCgwLjUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLnBvc2l0aW9uLnNldCgzICogd2lkdGggLyA2LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLnNjYWxlLnNldCgwLjUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIucG9zaXRpb24uc2V0KDUgKiB3aWR0aCAvIDYsIGhlaWdodCAvIDQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5zY2FsZS5zZXQoMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLnBvc2l0aW9uLnNldCg1ICogd2lkdGggLyA2LCAzICogaGVpZ2h0IC8gNCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIuc2NhbGUuc2V0KDAuOSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5TaGlwc0NvbnRhaW5lci5wb3NpdGlvbi5zZXQod2lkdGggLyA0LCBoZWlnaHQgLyA2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXIuc2NhbGUuc2V0KDAuNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFdoZW4gdGhlIHBsYXllciByb3RhdGVzIHRoZSBzY3JlZW5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjaGFuZ2VPcmllbnRhdGlvbigpOiB2b2lkIHtcclxuXHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5yZW5kZXJlci5yZXNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2lkdGg6IG51bWJlciA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhlaWdodDogbnVtYmVyID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPcmllbnRhdGlvbiA6ICcgKyB3aW5kb3cub3JpZW50YXRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAod2luZG93Lm9yaWVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5MCA6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lck9uZS5wb3NpdGlvbi5zZXQod2lkdGggLyA2LCBoZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUuc2NhbGUuc2V0KDAuNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3by5wb3NpdGlvbi5zZXQoMyAqIHdpZHRoIC8gNiwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLnNjYWxlLnNldCgwLjUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5wb3NpdGlvbi5zZXQoNSAqIHdpZHRoIC8gNiwgaGVpZ2h0IC8gNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIuc2NhbGUuc2V0KDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQnV0dG9uQ29udGFpbmVyLnBvc2l0aW9uLnNldCg1ICogd2lkdGggLyA2LCAzICogaGVpZ2h0IC8gNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5zY2FsZS5zZXQoMC45KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXIucG9zaXRpb24uc2V0KHdpZHRoIC8gNCwgaGVpZ2h0IC8gNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2hpcHNDb250YWluZXIuc2NhbGUuc2V0KDAuNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUucG9zaXRpb24uc2V0KHdpZHRoIC8gMiwgaGVpZ2h0IC8gNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnNjYWxlLnNldCgwLjcsIDAuNyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3by5wb3NpdGlvbi5zZXQod2lkdGggLyAyLCAzICogaGVpZ2h0IC8gNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyVHdvLnNjYWxlLnNldCgwLjcsIDAuNyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLnBvc2l0aW9uLnNldCh3aWR0aCAvIDQsIDUgKiBoZWlnaHQgLyA2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lSW5mb0NvbnRhaW5lci5zY2FsZS5zZXQoMS42KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5wb3NpdGlvbi5zZXQoMyAqIHdpZHRoIC8gNCwgNSAqIGhlaWdodCAvIDYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIuc2NhbGUuc2V0KDEuNik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJPbmUucG9zaXRpb24uc2V0KHdpZHRoIC8gNiwgaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJvYXJkQ29udGFpbmVyT25lLnNjYWxlLnNldCgwLjUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lQm9hcmRDb250YWluZXJUd28ucG9zaXRpb24uc2V0KDMgKiB3aWR0aCAvIDYsIGhlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCb2FyZENvbnRhaW5lclR3by5zY2FsZS5zZXQoMC41KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUluZm9Db250YWluZXIucG9zaXRpb24uc2V0KDUgKiB3aWR0aCAvIDYsIGhlaWdodCAvIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVJbmZvQ29udGFpbmVyLnNjYWxlLnNldCgxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuR2FtZUJ1dHRvbkNvbnRhaW5lci5wb3NpdGlvbi5zZXQoNSAqIHdpZHRoIC8gNiwgMyAqIGhlaWdodCAvIDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVCdXR0b25Db250YWluZXIuc2NhbGUuc2V0KDAuOSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyLnBvc2l0aW9uLnNldCh3aWR0aCAvIDQsIGhlaWdodCAvIDYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNoaXBzQ29udGFpbmVyLnNjYWxlLnNldCgwLjUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZS50cyIsIm1vZHVsZS5leHBvcnRzID0gdW5kZWZpbmVkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlBJWElcIn1cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIEV4dGVuZHMgdGhpcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdFZpZXcgZXh0ZW5kcyBwdXJlbXZjLlZpZXcgaW1wbGVtZW50cyBwdXJlbXZjLklWaWV3IHtcclxuICAgIHB1YmxpYyBJRDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIF9jb250YWluZXI6IFBJWEkuQ29udGFpbmVyO1xyXG4gICAgcHJvdGVjdGVkIF9tdWx0aXRvbktleTogc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIF9hY3RpdmU6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcbiAgICAgICAgdGhpcy5fbXVsdGl0b25LZXkgPSBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgdmlldy5cclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIGNvbnRhaW5lci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVWaWV3KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgc2V0IGFjdGl2ZShrZXk6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9hY3RpdmUgPSBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0VUlDb250YWluZXIoKTogUElYSS5Db250YWluZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBQSVhJIGdyYXBoaWNzLHNwcml0ZSxjb250YWluZXIgZXRjIHRvIHRoaXMgdmlld1xyXG4gICAgICogQHBhcmFtIGl0ZW1cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFRvQ29udGFpbmVyKGl0ZW06IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYWN0aXZlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRBY3RpdmUoYWN0aXZlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLl9jb250YWluZXIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaXRlbS52aXNpYmxlID0gYWN0aXZlO1xyXG4gICAgICAgICAgICBpdGVtLmludGVyYWN0aXZlID0gYWN0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBtZWRpYXRvciB0byB0aGlzIHZpZXcuXHJcbiAgICAgKiBAcGFyYW0gbWVkaWF0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlZ2lzdGVyTWVkaWF0b3IobWVkaWF0b3I6IHB1cmVtdmMuTWVkaWF0b3IpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5yZWdpc3Rlck1lZGlhdG9yKG1lZGlhdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhY3RpdmF0ZVVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICAvL3RvZG86IG92ZXJyaWRlIHdoZXJlIG5lZWRlZFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uQ2xpY2soaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vdG9kbzogb3ZlcnJpZGUgd2hlcmUgbmVlZGVkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGxvYWRlclxyXG4gICAgICogQHBhcmFtIHJlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25Bc3NldHNMb2FkZWQobG9hZGVyLCByZXMpOiB2b2lkIHtcclxuICAgICAgICAvL3RvZG86IG92ZXJyaWRlIHdoZXJlIG5lZWRlZFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsb2FkZXJcclxuICAgICAqIEBwYXJhbSByZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uQ29uZmlnTG9hZGVkKGxvYWRlciwgcmVzKTogdm9pZCB7XHJcbiAgICAgICAgLy90b2RvOiBvdmVycmlkZSB3aGVyZSBuZWVkZWRcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFZpZXcudHMiLCJpbXBvcnQge0Fic3RyYWN0Vmlld30gZnJvbSBcIi4vQWJzdHJhY3RWaWV3XCI7XHJcblxyXG4vKipcclxuICogRXh0ZW5kcyB0aGlzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0TWVkaWF0b3IgZXh0ZW5kcyBwdXJlbXZjLk1lZGlhdG9yIGltcGxlbWVudHMgcHVyZW12Yy5JTWVkaWF0b3Ige1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZWRpYXRvck5hbWVcclxuICAgICAqIEBwYXJhbSB2aWV3Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1lZGlhdG9yTmFtZTogc3RyaW5nLCB2aWV3Q29tcG9uZW50OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihtZWRpYXRvck5hbWUsIHZpZXdDb21wb25lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFZpZXdDb21wb25lbnQoKTogQWJzdHJhY3RWaWV3IHtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0Vmlld0NvbXBvbmVudCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RNZWRpYXRvci50cyIsImltcG9ydCAncGl4aS5qcyc7XHJcblxyXG4vKipcclxuICogIEV4dGVuZCB0aGlzIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0Q29tbWFuZCBleHRlbmRzIHB1cmVtdmMuU2ltcGxlQ29tbWFuZCB7XHJcblxyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9ICdDb21tYW5kJztcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBleGVjdXRlKG5vdGlmaWNhdGlvbjogcHVyZW12Yy5JTm90aWZpY2F0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuZXhlY3V0ZShub3RpZmljYXRpb24pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29tbWFuZC50cyIsImltcG9ydCB7QmF0dGxlU2hpcEZhY2FkZSwgRmFjYWRlSW5mb3JtYXRpb259IGZyb20gJy4vcHJvamVjdC9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZSdcclxuXHJcbm5ldyBjbGFzcyBNYWluXHJcbntcclxuICAgIHB1YmxpYyBteUZhY2FkZTogQmF0dGxlU2hpcEZhY2FkZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5teUZhY2FkZSA9IEJhdHRsZVNoaXBGYWNhZGUuZ2V0SW5zdGFuY2UoRmFjYWRlSW5mb3JtYXRpb24uQmF0dGxlU2hpcEZhY2FkZUtleSk7XHJcbiAgICB9O1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L2luZGV4LnRzIiwiaW1wb3J0IHtTcXVhcmVDbGlja0NvbW1hbmR9IGZyb20gXCIuLi9jb21tYW5kL1NxdWFyZUNsaWNrQ29tbWFuZFwiO1xyXG5pbXBvcnQge0NvbW1hbmROb3RpZmljYXRpb25zfSBmcm9tICcuLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZSdcclxuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2xsZXJ9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RDb250cm9sbGVyXCI7XHJcbmltcG9ydCAncGl4aS5qcydcclxuaW1wb3J0IHtCdXR0b25QcmVzc0NvbW1hbmR9IGZyb20gXCIuLi9jb21tYW5kL0J1dHRvblByZXNzQ29tbWFuZFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBCYXR0bGVTaGlwIGNvbnRyb2xsZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmF0dGxlU2hpcENvbnRyb2xsZXIgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG5cclxuICAgICAgICBzdXBlci5yZWdpc3RlckNvbW1hbmQoQ29tbWFuZE5vdGlmaWNhdGlvbnMuQ2xpY2tIYW5kbGUsIFNxdWFyZUNsaWNrQ29tbWFuZCk7XHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJDb21tYW5kKENvbW1hbmROb3RpZmljYXRpb25zLkJ1dHRvblByZXNzLCBCdXR0b25QcmVzc0NvbW1hbmQpO1xyXG4gICAgICAgIC8vIHN1cGVyLnJlZ2lzdGVyQ29tbWFuZChDb21tYW5kTm90aWZpY2F0aW9ucy5TaGlwc1BsYWNlbWVudCxTaGlwUGxhY2VDb21tYW5kKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQmF0dGxlU2hpcENvbnRyb2xsZXIgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGtleTogc3RyaW5nKTogQmF0dGxlU2hpcENvbnRyb2xsZXIge1xyXG4gICAgICAgIGlmICghcHVyZW12Yy5Db250cm9sbGVyLmluc3RhbmNlTWFwW2tleV0pXHJcbiAgICAgICAgICAgIHB1cmVtdmMuQ29udHJvbGxlci5pbnN0YW5jZU1hcFtrZXldID0gbmV3IEJhdHRsZVNoaXBDb250cm9sbGVyKGtleSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLkNvbnRyb2xsZXIuaW5zdGFuY2VNYXBba2V5XSBhcyBCYXR0bGVTaGlwQ29udHJvbGxlcjtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvY29udHJvbGxlci9CYXR0bGVTaGlwQ29udHJvbGxlci50cyIsImltcG9ydCB7QWJzdHJhY3RDb21tYW5kfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29tbWFuZFwiO1xyXG5pbXBvcnQge0NvbW1hbmROb3RpZmljYXRpb25zfSBmcm9tIFwiLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0ICdwaXhpLmpzJ1xyXG5cclxuLyoqXHJcbiAqIENvbW1hbmQgdXNlZCB3aGVuIGEgZ3JpZCdzIHNxdWFyZSBpcyBjbGlja2VkIGJ5IGEgcGxheWVyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNxdWFyZUNsaWNrQ29tbWFuZCBleHRlbmRzIEFic3RyYWN0Q29tbWFuZCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeGVjdXRlIHRoaXMgY29tbWFuZFxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhlY3V0ZShub3RpZmljYXRpb246IHB1cmVtdmMuTm90aWZpY2F0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChub3RpZmljYXRpb24uZ2V0TmFtZSgpKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENvbW1hbmROb3RpZmljYXRpb25zLkNsaWNrSGFuZGxlOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NxdWFyZUNsaWNrIEhhbmRsZSBSZXF1ZXN0Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9UT0RPOiBBZGQgZXh0cmEgdGhpbmdzIGZvciB0aGUgc3F1YXJlJ3MgaW50ZXJhY3Rpb25cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3QvY29tbWFuZC9TcXVhcmVDbGlja0NvbW1hbmQudHMiLCIvKipcclxuICogIEV4dGVuZCB0aGlzIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0Q29udHJvbGxlciBleHRlbmRzIHB1cmVtdmMuQ29udHJvbGxlciB7XHJcbiAgICBwcml2YXRlIG11bHRpdG9ua2V5OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJ0NvbnRyb2xsZXInO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMubXVsdGl0b25rZXkgPSBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgY29udHJvbGxlci5cclxuICAgICAqIEl0IGlzIGNhbGxlZCB3aGVuIHN1cGVyIGlzIGNhbGxlZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplQ29udHJvbGxlcigpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplQ29udHJvbGxlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhlY3V0ZSBhIHJlZ2lzdGVyZWQgY29tbWFuZCBiYXNlZCBvbiB0aGUgcmVjZWl2ZWQgbm90aWZpY2F0aW9uLlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhlY3V0ZUNvbW1hbmQobm90aWZpY2F0aW9uOiBwdXJlbXZjLklOb3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5leGVjdXRlQ29tbWFuZChub3RpZmljYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYSBjb21tYW5kIHRvIHRoaXMgY29udHJvbGxlci5cclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25OYW1lXHJcbiAgICAgKiBAcGFyYW0gY29tbWFuZENsYXNzUmVmXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWdpc3RlckNvbW1hbmQobm90aWZpY2F0aW9uTmFtZTogc3RyaW5nLCBjb21tYW5kQ2xhc3NSZWY6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJDb21tYW5kKG5vdGlmaWNhdGlvbk5hbWUsIGNvbW1hbmRDbGFzc1JlZik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWZXJpZmllcyBpZiB0aGlzIGNvbnRyb2xsZXIgaGFzIHJlZ2lzdGVyZWQgYSBjb21tYW5kLlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvbk5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGhhc0NvbW1hbmQobm90aWZpY2F0aW9uTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmhhc0NvbW1hbmQobm90aWZpY2F0aW9uTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgYSBjb21tYW5kIGZyb20gdGhpcyBjb250cm9sbGVyLlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvbk5hbWVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbW92ZUNvbW1hbmQobm90aWZpY2F0aW9uTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIucmVtb3ZlQ29tbWFuZChub3RpZmljYXRpb25OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHRlciBmb3IgdGhlIG11bHRpdG9uS2V5LlxyXG4gICAgICovXHJcbiAgICBnZXQgbXVsdGl0b25LZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXRvbmtleTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHRlciBmb3IgdGhlIG11bHRpdG9uS2V5LlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBzZXQgbXVsdGl0b25LZXkoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm11bHRpdG9ua2V5ID0ga2V5O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29udHJvbGxlci50cyIsImltcG9ydCB7QWJzdHJhY3RDb21tYW5kfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Q29tbWFuZFwiO1xyXG5pbXBvcnQge0NvbW1hbmROb3RpZmljYXRpb25zfSBmcm9tIFwiLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0ICdwaXhpLmpzJ1xyXG5cclxuLyoqXHJcbiAqIENvbW1hbmQgY2FsbGVkIHdoZW4gYSBidXR0b24gaXMgcHJlc3NlZCBvbiB0aGUgc2NyZWVuIGJ5IGEgcGxheWVyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJ1dHRvblByZXNzQ29tbWFuZCBleHRlbmRzIEFic3RyYWN0Q29tbWFuZCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeGVjdXRlIHRoaXMgY29tbWFuZFxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZXhlY3V0ZShub3RpZmljYXRpb246IHB1cmVtdmMuTm90aWZpY2F0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgc3dpdGNoIChub3RpZmljYXRpb24uZ2V0TmFtZSgpKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlIENvbW1hbmROb3RpZmljYXRpb25zLkJ1dHRvblByZXNzOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0J1dHRvblByZXNzIEhhbmRsZSBSZXF1ZXN0Jyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L2NvbW1hbmQvQnV0dG9uUHJlc3NDb21tYW5kLnRzIiwiaW1wb3J0IHtWaWV3TWVkaWF0b3J9IGZyb20gXCIuLi8uLi9tZWRpYXRvci9WaWV3TWVkaWF0b3JcIjtcclxuaW1wb3J0IHtBYnN0cmFjdFZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3XCI7XHJcbmltcG9ydCAncGl4aS5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUgbWFpbiBCYXR0bGVTaGlwIHZpZXcgY2xhc3NcclxuICovXHJcbmV4cG9ydCBjbGFzcyBCYXR0bGVTaGlwVmlldyBleHRlbmRzIEFic3RyYWN0VmlldyB7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMubXVsdGl0b25LZXkgPSBrZXk7XHJcblxyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyTWVkaWF0b3IobmV3IFZpZXdNZWRpYXRvcihrZXksIHRoaXMpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgdGhlIEJhdHRsZVNoaXAncyB2aWV3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplVmlldygpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplVmlldygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCYXR0bGVTaGlwVmlldyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcpOiBBYnN0cmFjdFZpZXcge1xyXG4gICAgICAgIGlmICghcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0pXHJcbiAgICAgICAgICAgIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldID0gbmV3IEJhdHRsZVNoaXBWaWV3KGtleSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSBhcyBBYnN0cmFjdFZpZXc7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvbWFpblZpZXcvQmF0dGxlU2hpcFZpZXcudHMiLCJpbXBvcnQge0dyaWRWaWV3fSBmcm9tICcuLi92aWV3L2dyaWQvR3JpZFZpZXcnXHJcbmltcG9ydCAncGl4aS5qcydcclxuaW1wb3J0IHtGYWNhZGVJbmZvcm1hdGlvbn0gZnJvbSBcIi4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcbmltcG9ydCB7VGV4dFZpZXd9IGZyb20gXCIuLi92aWV3L3RleHQvVGV4dFZpZXdcIjtcclxuaW1wb3J0IHtCdXR0b25WaWV3fSBmcm9tIFwiLi4vdmlldy9idXR0b24vQnV0dG9uVmlld1wiO1xyXG5pbXBvcnQge1NoaXBWaWV3fSBmcm9tIFwiLi4vdmlldy9zaGlwcy9TaGlwVmlld1wiO1xyXG5pbXBvcnQge0Fic3RyYWN0TWVkaWF0b3J9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RNZWRpYXRvclwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmlld01lZGlhdG9yIGV4dGVuZHMgQWJzdHJhY3RNZWRpYXRvciB7XHJcbiAgICBwdWJsaWMgbmFtZTogU3RyaW5nID0gJ1ZpZXdNZWRpYXRvcic7XHJcbiAgICBwcml2YXRlIGdyaWRWaWV3TmFtZTogQXJyYXk8c3RyaW5nPiA9IFsnR3JpZE9uZUJvYXJkJywgJ0dyaWRUd29Cb2FyZCddO1xyXG4gICAgcHVibGljIHRleHRWaWV3TmFtZTogc3RyaW5nID0gJ1RleHRWaWV3JztcclxuICAgIHB1YmxpYyBidXR0b25WaWV3TmFtZTogc3RyaW5nID0gJ0J1dHRvblZpZXcnO1xyXG4gICAgcHVibGljIHNoaXBWaWV3TmFtZTogc3RyaW5nID0gJ1NoaXBWaWV3JztcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVkaWF0b3JOYW1lXHJcbiAgICAgKiBAcGFyYW0gdmlld0NvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZWRpYXRvck5hbWU/OiBzdHJpbmcsIHZpZXdDb21wb25lbnQ/OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihtZWRpYXRvck5hbWUsIHZpZXdDb21wb25lbnQpO1xyXG5cclxuICAgICAgICBHcmlkVmlldy5nZXRJbnN0YW5jZSh0aGlzLmdyaWRWaWV3TmFtZVswXSwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZE9uZSk7XHJcbiAgICAgICAgR3JpZFZpZXcuZ2V0SW5zdGFuY2UodGhpcy5ncmlkVmlld05hbWVbMV0sIEZhY2FkZUluZm9ybWF0aW9uLkdyaWRUd28pO1xyXG4gICAgICAgIFRleHRWaWV3LmdldEluc3RhbmNlKHRoaXMudGV4dFZpZXdOYW1lLCBGYWNhZGVJbmZvcm1hdGlvbi5UZXh0Vmlld1RleHQsIEZhY2FkZUluZm9ybWF0aW9uLkZvbnRTaXplLCBGYWNhZGVJbmZvcm1hdGlvbi5UZXh0Vmlld0NvbG9yKTtcclxuICAgICAgICBCdXR0b25WaWV3LmdldEluc3RhbmNlKHRoaXMuYnV0dG9uVmlld05hbWUsIEZhY2FkZUluZm9ybWF0aW9uLkJ1dHRvblZpZXdYUG9zaXRpb24sIEZhY2FkZUluZm9ybWF0aW9uLkJ1dHRvblZpZXdZUG9zaXRpb24sIEZhY2FkZUluZm9ybWF0aW9uLkJ1dHRvblZpZXdTY2FsZSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgU2hpcFZpZXcuZ2V0SW5zdGFuY2UodGhpcy5zaGlwVmlld05hbWUgKyAnJyArIGksIDAsIDEwMCArIGkgKiAxMDAsIDUgLSBpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgJyArIHRoaXMubmFtZSArICcgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5vdGlmaWNhdGlvbiB0aGF0IHRoZSBWaWV3TWVkaWF0b3IgaXMgaW50ZXJlc3RlZCBpbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKTogc3RyaW5nIFtdIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgVGhpcyBpcyB3aGVyZSB0aGUgbm90aWZpY2F0aW9ucyBhcmUgaGFuZGxlZC5cclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGhhbmRsZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IHB1cmVtdmMuTm90aWZpY2F0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5hbWU6IFN0cmluZyA9IG5vdGlmaWNhdGlvbi5uYW1lO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9WaWV3TWVkaWF0b3IudHMiLCJpbXBvcnQge0Fic3RyYWN0Vmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFZpZXdcIjtcclxuaW1wb3J0IHtTcXVhcmVWaWV3fSBmcm9tIFwiLi9TcXVhcmVWaWV3XCI7XHJcbmltcG9ydCB7RmFjYWRlSW5mb3JtYXRpb259IGZyb20gJy4uLy4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlJ1xyXG5pbXBvcnQge1J1bGVyVmlld30gZnJvbSBcIi4uL3J1bGVyL1J1bGVyVmlld1wiO1xyXG5pbXBvcnQge0dyaWRWaWV3TWVkaWF0b3J9IGZyb20gXCIuLi8uLi9tZWRpYXRvci9HcmlkVmlld01lZGlhdG9yXCI7XHJcbmltcG9ydCAncGl4aS5qcydcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIHRoZSBncmlkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JpZFZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xyXG4gICAgcHJpdmF0ZSBCb2FyZFNxdWFyZXM6IFNxdWFyZVZpZXdbXVtdO1xyXG4gICAgcHJpdmF0ZSBCb2FyZFNxdWFyZXNYUG9zaXRpb246IG51bWJlcltdW10gPSBbXTtcclxuICAgIHByaXZhdGUgQm9hcmRTcXVhcmVzWVBvc2l0aW9uOiBudW1iZXJbXVtdID0gW107XHJcblxyXG4gICAgcHVibGljIFJ1bGVyTmFtZTogc3RyaW5nID0gJ1J1bGVyRm9yVGhlR3JpZCc7XHJcbiAgICBwdWJsaWMgbmFtZSA9ICdHcmlkVmlldyc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIGdyaWROdW1iZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIGdyaWROdW1iZXI6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lLmNvbmNhdChncmlkTnVtYmVyLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHN3aXRjaCAoZ3JpZE51bWJlcikge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJvYXJkKEZhY2FkZUluZm9ybWF0aW9uLkdyaWQxWFBvc2l0aW9uLCBGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMVlQb3NpdGlvbiwgRmFjYWRlSW5mb3JtYXRpb24uU3F1YXJlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgRmFjYWRlSW5mb3JtYXRpb24uTnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseSwgRmFjYWRlSW5mb3JtYXRpb24uTnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5LCBGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMUJvcmRlckNvbG9yLCBGYWNhZGVJbmZvcm1hdGlvbi5HcmlkU3F1YXJlRmlsbENvbG9yKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUnVsZXIoRmFjYWRlSW5mb3JtYXRpb24uR3JpZDFYUG9zaXRpb24sIEZhY2FkZUluZm9ybWF0aW9uLkdyaWQxWVBvc2l0aW9uLCBGYWNhZGVJbmZvcm1hdGlvbi5OdW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5LFxyXG4gICAgICAgICAgICAgICAgICAgIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSwgRmFjYWRlSW5mb3JtYXRpb24uU3F1YXJlV2lkdGgsIEZhY2FkZUluZm9ybWF0aW9uLkdyaWQxQm9yZGVyQ29sb3IsIEZhY2FkZUluZm9ybWF0aW9uLlJ1bGVyVGV4dENvbG9yKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCb2FyZChGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMlhQb3NpdGlvbiwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZDJZUG9zaXRpb24sIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHksIEZhY2FkZUluZm9ybWF0aW9uLk51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZDJCb3JkZXJDb2xvciwgRmFjYWRlSW5mb3JtYXRpb24uR3JpZFNxdWFyZUZpbGxDb2xvcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJ1bGVyKEZhY2FkZUluZm9ybWF0aW9uLkdyaWQyWFBvc2l0aW9uLCBGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMllQb3NpdGlvbiwgRmFjYWRlSW5mb3JtYXRpb24uTnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseSxcclxuICAgICAgICAgICAgICAgICAgICBGYWNhZGVJbmZvcm1hdGlvbi5OdW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHksIEZhY2FkZUluZm9ybWF0aW9uLlNxdWFyZVdpZHRoLCBGYWNhZGVJbmZvcm1hdGlvbi5HcmlkMkJvcmRlckNvbG9yLCBGYWNhZGVJbmZvcm1hdGlvbi5SdWxlclRleHRDb2xvcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJNZWRpYXRvcihuZXcgR3JpZFZpZXdNZWRpYXRvcihrZXksIHRoaXMsIGdyaWROdW1iZXIpKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgJyArIHRoaXMubmFtZSArICcgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIEluaXRpYWxpemluZyB0aGUgR3JpZCdzIHZpZXdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVWaWV3KCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXRpYWxpemVWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoaXMgZ3JpZCdzIGNvbnRhaW5lci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVJQ29udGFpbmVyKCk6IFBJWEkuQ29udGFpbmVyIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIucGl2b3QueCA9IHRoaXMuX2NvbnRhaW5lci53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnBpdm90LnkgPSB0aGlzLl9jb250YWluZXIuaGVpZ2h0IC8gMjtcclxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0VUlDb250YWluZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhbiBpbnN0YW5jZSBvZiB0aGUgR3JpZCdzIHZpZXdcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBncmlkTnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShrZXk6IHN0cmluZywgZ3JpZE51bWJlcj86IG51bWJlcik6IEdyaWRWaWV3IHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBHcmlkVmlldyhrZXksIGdyaWROdW1iZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gYXMgR3JpZFZpZXc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBncmlkWFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gZ3JpZFlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseVxyXG4gICAgICogQHBhcmFtIG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseVxyXG4gICAgICogQHBhcmFtIGdyaWRCb3JkZXJDb2xvclxyXG4gICAgICogQHBhcmFtIGdyaWRTcXVhcmVGaWxsQ29sb3JcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVCb2FyZChncmlkWFBvc2l0aW9uOiBudW1iZXIsIGdyaWRZUG9zaXRpb246IG51bWJlciwgc3F1YXJlV2lkdGg6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseTogbnVtYmVyLCBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk6IG51bWJlciwgZ3JpZEJvcmRlckNvbG9yOiBudW1iZXIsIGdyaWRTcXVhcmVGaWxsQ29sb3I6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBuZXdYUG9zaXRpb246IG51bWJlcixcclxuICAgICAgICAgICAgbmV3WVBvc2l0aW9uOiBudW1iZXIgPSBncmlkWVBvc2l0aW9uLFxyXG4gICAgICAgICAgICBzcXVhcmU6IFNxdWFyZVZpZXcsIGtleTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5Cb2FyZFNxdWFyZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQm9hcmRTcXVhcmVzW2ldID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuQm9hcmRTcXVhcmVzWFBvc2l0aW9uW2ldID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuQm9hcmRTcXVhcmVzWVBvc2l0aW9uW2ldID0gW107XHJcbiAgICAgICAgICAgIG5ld1hQb3NpdGlvbiA9IGdyaWRYUG9zaXRpb247XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGtleSsrO1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlID0gU3F1YXJlVmlldy5nZXRJbnN0YW5jZSgnU3F1YXJlJyArIGtleSArIE1hdGgucmFuZG9tKCksIG5ld1hQb3NpdGlvbiArIGogKiBzcXVhcmVXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBuZXdZUG9zaXRpb24sIHNxdWFyZVdpZHRoLCBncmlkQm9yZGVyQ29sb3IsIGdyaWRTcXVhcmVGaWxsQ29sb3IsIGosIGkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Cb2FyZFNxdWFyZXNbaV1bal0gPSBzcXVhcmU7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1lQb3NpdGlvbiArPSBzcXVhcmVXaWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OyBpKyspXHJcbiAgICAgICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk7IGorKylcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZCh0aGlzLkJvYXJkU3F1YXJlc1tpXVtqXS5nZXRVSUNvbnRhaW5lcigpKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnICAgIyBHcmlkU3F1YXJlcyBjcmVhdGVkJyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0geFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0geVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseVxyXG4gICAgICogQHBhcmFtIG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseVxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKiBAcGFyYW0gZ3JpZEJvcmRlckNvbG9yXHJcbiAgICAgKiBAcGFyYW0gcnVsZXJUZXh0Q29sb3JcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVSdWxlcih4UG9zaXRpb246IG51bWJlciwgeVBvc2l0aW9uOiBudW1iZXIsIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk6IG51bWJlciwgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5OiBudW1iZXIsIHNxdWFyZVdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRCb3JkZXJDb2xvcjogbnVtYmVyLCBydWxlclRleHRDb2xvcjogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJ1bGVyVmlldzogUnVsZXJWaWV3ID0gUnVsZXJWaWV3LmdldEluc3RhbmNlKHRoaXMuUnVsZXJOYW1lICsgJycgKyBNYXRoLnJhbmRvbSgpLCB4UG9zaXRpb24sIHlQb3NpdGlvbiwgbnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseSxcclxuICAgICAgICAgICAgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5LCBzcXVhcmVXaWR0aCwgZ3JpZEJvcmRlckNvbG9yLCBydWxlclRleHRDb2xvcik7XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZChydWxlclZpZXcuZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L3ZpZXcvZ3JpZC9HcmlkVmlldy50cyIsImltcG9ydCB7SGl0Vmlld30gZnJvbSBcIi4uL2hpdHMvSGl0Vmlld1wiO1xyXG5pbXBvcnQge01pc3NWaWV3fSBmcm9tIFwiLi4vaGl0cy9NaXNzVmlld1wiO1xyXG5pbXBvcnQge0JhdHRsZVNoaXBGYWNhZGUsIENvbW1hbmROb3RpZmljYXRpb25zLCBGYWNhZGVJbmZvcm1hdGlvbn0gZnJvbSBcIi4uLy4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcbmltcG9ydCB7QWJzdHJhY3RWaWV3fSBmcm9tIFwiLi4vLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Vmlld1wiO1xyXG5cclxuLyoqXHJcbiAqIFNtYWxsIHJlY3RhbmdsZSBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNxdWFyZVZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xyXG5cclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaG9yaXpvbnRhbEluZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdmVydGljYWxJbmRleDogbnVtYmVyO1xyXG4gICAgcHVibGljIGJvcmRlckNvbG9yOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZmlsbENvbG9yOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIHNxdWFyZUdyYXBoaWNzOiBQSVhJLkdyYXBoaWNzO1xyXG4gICAgLyoqQ29udGFpbnMgdGhlIHNxdWFyZSdzIGJvcmRlciAqL1xyXG4gICAgcHVibGljIHNxdWFyZU1hcmtpbmc6IFBJWEkuR3JhcGhpY3M7XHJcbiAgICAvKipDb250YWlucyB0aGUgbWFya2luZyB3aGljaCB3aWxsIGJlIGVpdGhlciBhIGhpdCBlaXRoZXIgYSBtaXNzICovXHJcbiAgICBwdWJsaWMgb25DbGlja0hhbmRsZXI6IEZ1bmN0aW9uO1xyXG4gICAgLyoqV2lsbCBjYWxsIGEgZnVuY3Rpb24gd2l0aGluIHRoZSBncmlkIGNsYXNzICovXHJcbiAgICBwdWJsaWMgc3F1YXJlRXZlbnQ6IHN0cmluZyA9ICdwb2ludGVydGFwJztcclxuXHJcbiAgICAvKipUaGUgSGl0VmlldyBhbmQgdGhlIE1pc3NWaWV3ICovXHJcbiAgICBwcml2YXRlIGhpdFZpZXc6IEhpdFZpZXc7XHJcbiAgICBwcml2YXRlIG1pc3NWaWV3OiBNaXNzVmlldztcclxuXHJcbiAgICAvKipTcXVhcmUncyBnbG93ICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNxdWFyZUdsb3c6IFBJWEkuR3JhcGhpY3M7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHNxdWFyZVhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKiBAcGFyYW0gYm9yZGVyQ29sb3JcclxuICAgICAqIEBwYXJhbSBmaWxsQ29sb3JcclxuICAgICAqIEBwYXJhbSBob3Jpem9udGFsSW5kZXhcclxuICAgICAqIEBwYXJhbSB2ZXJ0aWNhbEluZGV4XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCBzcXVhcmVYUG9zaXRpb246IG51bWJlciwgc3F1YXJlWVBvc2l0aW9uOiBudW1iZXIsIHNxdWFyZVdpZHRoOiBudW1iZXIsIGJvcmRlckNvbG9yOiBudW1iZXIsIGZpbGxDb2xvcjogbnVtYmVyLCBob3Jpem9udGFsSW5kZXg/OiBudW1iZXIsIHZlcnRpY2FsSW5kZXg/OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMueCA9IHNxdWFyZVhQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnkgPSBzcXVhcmVZUG9zaXRpb247XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHNxdWFyZVdpZHRoO1xyXG4gICAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvcjtcclxuICAgICAgICB0aGlzLmZpbGxDb2xvciA9IGZpbGxDb2xvcjtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxJbmRleCA9IGhvcml6b250YWxJbmRleDtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsSW5kZXggPSB2ZXJ0aWNhbEluZGV4O1xyXG5cclxuICAgICAgICB0aGlzLnNxdWFyZUdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLnNxdWFyZU1hcmtpbmcgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR2xvdyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNxdWFyZUdyYXBoaWNzLmxpbmVTdHlsZSg3LCB0aGlzLmJvcmRlckNvbG9yLCAxKTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdyYXBoaWNzLmJlZ2luRmlsbCh0aGlzLmZpbGxDb2xvcik7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHcmFwaGljcy5kcmF3UmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy53aWR0aCk7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHcmFwaGljcy5lbmRGaWxsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3F1YXJlR2xvdy5saW5lU3R5bGUoMSwgMHhmZjAwMDAsIDAuMik7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHbG93LmJlZ2luRmlsbCgweGZmMDEwMCwgMC4yKTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdsb3cuZHJhd1JlY3QodGhpcy54ICsgNSwgdGhpcy55ICsgNSwgdGhpcy53aWR0aCAtIDUsIHRoaXMud2lkdGggLSA1KTtcclxuICAgICAgICB0aGlzLnNxdWFyZUdsb3cuZW5kRmlsbCgpO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlR2xvdy52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaGl0VmlldyA9IEhpdFZpZXcuZ2V0SW5zdGFuY2UoTWF0aC5yYW5kb20oKSArICcnLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCk7XHJcbiAgICAgICAgdGhpcy5oaXRWaWV3LnNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5taXNzVmlldyA9IE1pc3NWaWV3LmdldEluc3RhbmNlKE1hdGgucmFuZG9tKCkgKyAnJywgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgpO1xyXG4gICAgICAgIHRoaXMubWlzc1ZpZXcuc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuc3F1YXJlTWFya2luZy5hZGRDaGlsZCh0aGlzLmhpdFZpZXcuZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHcmFwaGljcy5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcXVhcmVHcmFwaGljcy5idXR0b25Nb2RlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRUb0NvbnRhaW5lcih0aGlzLnNxdWFyZUdyYXBoaWNzKTtcclxuICAgICAgICB0aGlzLmFkZFRvQ29udGFpbmVyKHRoaXMuc3F1YXJlTWFya2luZyk7XHJcbiAgICAgICAgdGhpcy5hZGRUb0NvbnRhaW5lcih0aGlzLnNxdWFyZUdsb3cpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRpYWxpemVTcXVhcmVJbnRlcmFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaW5pdGlhbGl6aW5nIHRoZSBTcXVhcmUncyB2aWV3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplVmlldygpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgeCBhbmQgeSBjb29yZGluYXRlcyBmb3IgdGhpcyBzcXVhcmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRQb3NpdGlvbigpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVTcXVhcmVJbnRlcmFjdGlvbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNxdWFyZUdyYXBoaWNzXHJcbiAgICAgICAgICAgIC5vbih0aGlzLnNxdWFyZUV2ZW50LCB0aGlzLmhhbmRsZU1vdXNlRG93biwgdGhpcylcclxuICAgICAgICAgICAgLm9uKCdwb2ludGVyb3ZlcicsIHRoaXMuaGFuZGxlTW91c2VPdmVyKVxyXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJvdXQnLCB0aGlzLmhhbmRsZU1vdXNlT3V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBIYW5kbGVzIHRoZSBjbGlja2VkIGRvd24gZXZlbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVNb3VzZURvd24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oaXQoKTtcclxuICAgICAgICBCYXR0bGVTaGlwRmFjYWRlLmdldEluc3RhbmNlKEZhY2FkZUluZm9ybWF0aW9uLkJhdHRsZVNoaXBGYWNhZGVLZXkpLnNlbmROb3RpZmljYXRpb24oQ29tbWFuZE5vdGlmaWNhdGlvbnMuQ2xpY2tIYW5kbGUsIFt0aGlzLmhvcml6b250YWxJbmRleCwgdGhpcy52ZXJ0aWNhbEluZGV4XS50b1N0cmluZygpKTtcclxuICAgICAgICAvLyB0aGlzLm9uQ2xpY2tIYW5kbGVyLmNhbGwodGhpcywgW3RoaXMueCwgdGhpcy55XSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZU1vdXNlT3ZlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNxdWFyZUdsb3cudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVNb3VzZU91dCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNxdWFyZUdsb3cudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3dzIGFuIFggb24gdGhlIHNxdWFyZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oaXRWaWV3LnNldEFjdGl2ZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNob3dzIGEgbWlzcyBvbiB0aGUgc3F1YXJlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1pc3MoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5taXNzVmlldy5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBzcXVhcmUgdmlld1xyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHNxdWFyZVhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKiBAcGFyYW0gYm9yZGVyQ29sb3JcclxuICAgICAqIEBwYXJhbSBmaWxsQ29sb3JcclxuICAgICAqIEBwYXJhbSBob3Jpem9udGFsSW5kZXhcclxuICAgICAqIEBwYXJhbSB2ZXJ0aWNhbEluZGV4XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShrZXk6IHN0cmluZywgc3F1YXJlWFBvc2l0aW9uPzogbnVtYmVyLCBzcXVhcmVZUG9zaXRpb24/OiBudW1iZXIsIHNxdWFyZVdpZHRoPzogbnVtYmVyLCBib3JkZXJDb2xvcj86IG51bWJlciwgZmlsbENvbG9yPzogbnVtYmVyLCBob3Jpem9udGFsSW5kZXg/OiBudW1iZXIsIHZlcnRpY2FsSW5kZXg/OiBudW1iZXIpOiBTcXVhcmVWaWV3IHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBTcXVhcmVWaWV3KGtleSwgc3F1YXJlWFBvc2l0aW9uLCBzcXVhcmVZUG9zaXRpb24sIHNxdWFyZVdpZHRoLCBib3JkZXJDb2xvciwgZmlsbENvbG9yLCBob3Jpem9udGFsSW5kZXgsIHZlcnRpY2FsSW5kZXgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gYXMgU3F1YXJlVmlldztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9ncmlkL1NxdWFyZVZpZXcudHMiLCJpbXBvcnQge0Fic3RyYWN0Vmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFZpZXdcIjtcclxuaW1wb3J0IHtGYWNhZGVJbmZvcm1hdGlvbn0gZnJvbSBcIi4uLy4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcblxyXG4vKipcclxuICogIFRoZSBYIGluc2lkZSBhIHNxdWFyZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBIaXRWaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcclxuXHJcbiAgICBwdWJsaWMgZ3JhcGhpY3MgOiBQSVhJLkdyYXBoaWNzO1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHNxdWFyZVhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHNxdWFyZVdpZHRoXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGtleTpzdHJpbmcsc3F1YXJlWFBvc2l0aW9uOiBudW1iZXIsIHNxdWFyZVlQb3NpdGlvbjogbnVtYmVyLCBzcXVhcmVXaWR0aDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3M9bmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVTdHlsZSgxMCxGYWNhZGVJbmZvcm1hdGlvbi5IaXRDb2xvcik7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubW92ZVRvKHNxdWFyZVhQb3NpdGlvbiArIHNxdWFyZVdpZHRoLzMsIHNxdWFyZVlQb3NpdGlvbiArIHNxdWFyZVdpZHRoIC0gc3F1YXJlV2lkdGgvMyk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8oc3F1YXJlWFBvc2l0aW9uICsgc3F1YXJlV2lkdGggLSBzcXVhcmVXaWR0aC8zLCBzcXVhcmVZUG9zaXRpb24gKyBzcXVhcmVXaWR0aC8zKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5tb3ZlVG8oc3F1YXJlWFBvc2l0aW9uICsgc3F1YXJlV2lkdGgvMywgc3F1YXJlWVBvc2l0aW9uICsgc3F1YXJlV2lkdGgvMyk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lVG8oc3F1YXJlWFBvc2l0aW9uICsgc3F1YXJlV2lkdGggLSBzcXVhcmVXaWR0aC8zLCBzcXVhcmVZUG9zaXRpb24gKyBzcXVhcmVXaWR0aCAtIHNxdWFyZVdpZHRoLzMpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9Db250YWluZXIodGhpcy5ncmFwaGljcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3NcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBzcXVhcmVYUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVZUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVXaWR0aFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIHNxdWFyZVhQb3NpdGlvbj86IG51bWJlciwgc3F1YXJlWVBvc2l0aW9uPzogbnVtYmVyLCBzcXVhcmVXaWR0aD86IG51bWJlcik6IEhpdFZpZXcge1xyXG4gICAgICAgIGlmICghcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0pXHJcbiAgICAgICAgICAgIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldID0gbmV3IEhpdFZpZXcoa2V5LCBzcXVhcmVYUG9zaXRpb24sIHNxdWFyZVlQb3NpdGlvbiwgc3F1YXJlV2lkdGgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gYXMgSGl0VmlldztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9oaXRzL0hpdFZpZXcudHMiLCJpbXBvcnQge0Fic3RyYWN0Vmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFZpZXdcIjtcclxuaW1wb3J0IHtGYWNhZGVJbmZvcm1hdGlvbn0gZnJvbSBcIi4uLy4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgdGhhdCBjcmVhdGVzIHRoZSBtaXNzIGluc2lkZSBhIEdyaWQncyBzcXVhcmUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWlzc1ZpZXcgZXh0ZW5kcyBBYnN0cmFjdFZpZXcge1xyXG5cclxuICAgIHB1YmxpYyBncmFwaGljczogUElYSS5HcmFwaGljcztcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlWFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlWVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlV2lkdGhcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHNxdWFyZVhQb3NpdGlvbjogbnVtYmVyLCBzcXVhcmVZUG9zaXRpb246IG51bWJlciwgc3F1YXJlV2lkdGg6IG51bWJlcikge1xyXG5cclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVN0eWxlKDgsIEZhY2FkZUluZm9ybWF0aW9uLk1pc3NDb2xvcik7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5kcmF3Q2lyY2xlKHNxdWFyZVhQb3NpdGlvbiArIHNxdWFyZVdpZHRoIC8gMiwgc3F1YXJlWVBvc2l0aW9uICsgc3F1YXJlV2lkdGggLyAyLCBzcXVhcmVXaWR0aCAvIDMuOSk7XHJcbiAgICAgICAgdGhpcy5hZGRUb0NvbnRhaW5lcih0aGlzLmdyYXBoaWNzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3NcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSBzcXVhcmVYUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVZUG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVXaWR0aFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIHNxdWFyZVhQb3NpdGlvbj86IG51bWJlciwgc3F1YXJlWVBvc2l0aW9uPzogbnVtYmVyLCBzcXVhcmVXaWR0aD86IG51bWJlcik6IE1pc3NWaWV3IHtcclxuICAgICAgICBpZiAoIXB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldKVxyXG4gICAgICAgICAgICBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSA9IG5ldyBNaXNzVmlldyhrZXksIHNxdWFyZVhQb3NpdGlvbiwgc3F1YXJlWVBvc2l0aW9uLCBzcXVhcmVXaWR0aCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSBhcyBNaXNzVmlldztcclxuICAgIH1cclxuXHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L2hpdHMvTWlzc1ZpZXcudHMiLCJpbXBvcnQge1J1bGVyU3F1YXJlfSBmcm9tIFwiLi9SdWxlclNxdWFyZVwiO1xyXG5pbXBvcnQge0Fic3RyYWN0Vmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFZpZXdcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGNyZWF0ZXMgdGhlIGhvcml6b250YWwgYW5kIHZlcnRpY2FsIHJ1bGVyIGFyb3VuZCB0aGUgZ3JpZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJ1bGVyVmlldyBleHRlbmRzIEFic3RyYWN0VmlldyB7XHJcblxyXG4gICAgcHVibGljIG5hbWU6c3RyaW5nPSdSdWxlcic7XHJcblxyXG4gICAgcHVibGljIHhQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIHlQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzcXVhcmVXaWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGJvcmRlckNvbG9yOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGV4dENvbG9yOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBSdWxlclR5cGU6IEFycmF5PHN0cmluZz4gPSBbJ05VTUJFUicsXHJcbiAgICAgICAgJ0xFVFRFUiddO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSB4UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB5UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5XHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5XHJcbiAgICAgKiBAcGFyYW0gc3F1YXJlV2lkdGhcclxuICAgICAqIEBwYXJhbSBib3JkZXJDb2xvclxyXG4gICAgICogQHBhcmFtIHRleHRDb2xvclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgeFBvc2l0aW9uOiBudW1iZXIsIHlQb3NpdGlvbjogbnVtYmVyLCBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHk6IG51bWJlciwgc3F1YXJlV2lkdGg6IG51bWJlciwgYm9yZGVyQ29sb3I6IG51bWJlciwgdGV4dENvbG9yOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuICAgICAgICB0aGlzLnhQb3NpdGlvbiA9IHhQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnlQb3NpdGlvbiA9IHlQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLm51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHkgPSBudW1iZXJPZlNxdWFyZXNWZXJ0aWNhbGx5O1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5ID0gbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5O1xyXG4gICAgICAgIHRoaXMuc3F1YXJlV2lkdGggPSBzcXVhcmVXaWR0aDtcclxuICAgICAgICB0aGlzLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgdGhpcy50ZXh0Q29sb3IgPSB0ZXh0Q29sb3I7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlUnVsZXJWZXJ0aWNhbGx5KCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVSdWxlckhvcml6b250YWxseSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6aW5nIHRoZSBSdWxlcidzIHZpZXdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluaXRpYWxpemVWaWV3KCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXRpYWxpemVWaWV3KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgUnVsZXJWaWV3IGNyZWF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIGhvcml6b250YWwgcnVsZXIgd2hpY2ggY29udGFpbnMgbnVtYmVycyBhbmQgYmVnaW5zIHdpdGggMFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJ1bGVySG9yaXpvbnRhbGx5KCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm51bWJlck9mU3F1YXJlc0hvcml6b250YWxseTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBydWxlclNxdWFyZTogUnVsZXJTcXVhcmUgPSBSdWxlclNxdWFyZS5nZXRJbnN0YW5jZSg3MDAqTWF0aC5yYW5kb20oKSsgaSArJycsIHRoaXMueFBvc2l0aW9uICsgaSAqIHRoaXMuc3F1YXJlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnlQb3NpdGlvbiArIHRoaXMubnVtYmVyT2ZTcXVhcmVzVmVydGljYWxseSAqIHRoaXMuc3F1YXJlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNxdWFyZVdpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLnRleHRDb2xvciwgdGhpcy5SdWxlclR5cGVbMF0sIGkgKyAxKTtcclxuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyLmFkZENoaWxkKHJ1bGVyU3F1YXJlLmdldFVJQ29udGFpbmVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIHZlcnRpY2FsIHJ1bGVyIHdoaWNoIGNvbnRhaW5zIGxldHRlcnMgYW5kIGJlZ2lucyB3aXRoIEFcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVSdWxlclZlcnRpY2FsbHkoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcnVsZXJTcXVhcmU6IFJ1bGVyU3F1YXJlID0gUnVsZXJTcXVhcmUuZ2V0SW5zdGFuY2UoMzAwKk1hdGgucmFuZG9tKCkgKyBpKycnLCB0aGlzLnhQb3NpdGlvbiAtIHRoaXMuc3F1YXJlV2lkdGgsIHRoaXMueVBvc2l0aW9uICsgaSAqIHRoaXMuc3F1YXJlV2lkdGgsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNxdWFyZVdpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLnRleHRDb2xvciwgdGhpcy5SdWxlclR5cGVbMV0sIDY1ICsgaSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZChydWxlclNxdWFyZS5nZXRVSUNvbnRhaW5lcigpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHlcclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNIb3Jpem9udGFsbHlcclxuICAgICAqIEBwYXJhbSBzcXVhcmVXaWR0aFxyXG4gICAgICogQHBhcmFtIGJvcmRlckNvbG9yXHJcbiAgICAgKiBAcGFyYW0gdGV4dENvbG9yXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShrZXk6IHN0cmluZywgeFBvc2l0aW9uPzogbnVtYmVyLCB5UG9zaXRpb24/OiBudW1iZXIsIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHk/OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZTcXVhcmVzSG9yaXpvbnRhbGx5PzogbnVtYmVyLCBzcXVhcmVXaWR0aD86IG51bWJlciwgYm9yZGVyQ29sb3I/OiBudW1iZXIsIHRleHRDb2xvcj86IG51bWJlcik6IFJ1bGVyVmlldyB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gPSBuZXcgUnVsZXJWaWV3KGtleSwgeFBvc2l0aW9uLCB5UG9zaXRpb24sIG51bWJlck9mU3F1YXJlc1ZlcnRpY2FsbHksIG51bWJlck9mU3F1YXJlc0hvcml6b250YWxseSxcclxuICAgICAgICAgICAgICAgIHNxdWFyZVdpZHRoLCBib3JkZXJDb2xvciwgdGV4dENvbG9yKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldIGFzIFJ1bGVyVmlldztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9ydWxlci9SdWxlclZpZXcudHMiLCJpbXBvcnQge0Fic3RyYWN0Vmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFZpZXdcIjtcclxuXHJcbi8qKlxyXG4gKiBIYXMgdGhlIHJlc3BvbnNpYmlsaXR5IHRvIGNyZWF0ZSBhIHNpbmdsZSBzcXVhcmUgYW5kIGluc2lkZSBpdCB0byBwdXQgdGhlIGNvcmVzcG9uZGluZyBsZXR0ZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBSdWxlclNxdWFyZSBleHRlbmRzIEFic3RyYWN0VmlldyB7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSB4UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB5UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVXaWR0aFxyXG4gICAgICogQHBhcmFtIGJvcmRlckNvbG9yXHJcbiAgICAgKiBAcGFyYW0gdGV4dENvbG9yXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICogQHBhcmFtIGFzY2lpQ29kZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgeFBvc2l0aW9uOiBudW1iZXIsIHlQb3NpdGlvbjogbnVtYmVyLCBzcXVhcmVXaWR0aDogbnVtYmVyLCBib3JkZXJDb2xvcjogbnVtYmVyLCB0ZXh0Q29sb3I6IG51bWJlciwgdHlwZTogc3RyaW5nLCBhc2NpaUNvZGU6IG51bWJlcikge1xyXG5cclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IG5ldyBQSVhJLkNvbnRhaW5lcigpO1xyXG5cclxuICAgICAgICBsZXQgZ3JhcGhpY3MgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSg4LCBib3JkZXJDb2xvcik7XHJcbiAgICAgICAgZ3JhcGhpY3MuYmVnaW5GaWxsKDB4ZmZmZmZmKTtcclxuICAgICAgICBncmFwaGljcy5kcmF3UmVjdCh4UG9zaXRpb24sIHlQb3NpdGlvbiwgc3F1YXJlV2lkdGgsIHNxdWFyZVdpZHRoKTtcclxuICAgICAgICBncmFwaGljcy5lbmRGaWxsKCk7XHJcblxyXG4gICAgICAgIGxldCB0ZXh0O1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnTEVUVEVSJykge1xyXG4gICAgICAgICAgICB0ZXh0ID0gbmV3IFBJWEkuVGV4dChTdHJpbmcuZnJvbUNoYXJDb2RlKGFzY2lpQ29kZSksIHtmaWxsOiB0ZXh0Q29sb3J9KTtcclxuICAgICAgICAgICAgdGV4dC5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgICAgIHRleHQucG9zaXRpb24uc2V0KHhQb3NpdGlvbiArIHNxdWFyZVdpZHRoIC8gMiwgeVBvc2l0aW9uICsgc3F1YXJlV2lkdGggLyAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ05VTUJFUicpIHtcclxuICAgICAgICAgICAgdGV4dCA9IG5ldyBQSVhJLlRleHQoYXNjaWlDb2RlLnRvU3RyaW5nKCksIHtmaWxsOiB0ZXh0Q29sb3J9KTtcclxuICAgICAgICAgICAgdGV4dC5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgICAgIHRleHQucG9zaXRpb24uc2V0KHhQb3NpdGlvbiArIHNxdWFyZVdpZHRoIC8gMiwgeVBvc2l0aW9uICsgc3F1YXJlV2lkdGggLyAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZChncmFwaGljcywgdGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgZm9yIGFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3NcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSB4UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB5UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzcXVhcmVXaWR0aFxyXG4gICAgICogQHBhcmFtIGJvcmRlckNvbG9yXHJcbiAgICAgKiBAcGFyYW0gdGV4dENvbG9yXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICogQHBhcmFtIGFzY2lpQ29kZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIHhQb3NpdGlvbj86IG51bWJlciwgeVBvc2l0aW9uPzogbnVtYmVyLCBzcXVhcmVXaWR0aD86IG51bWJlciwgYm9yZGVyQ29sb3I/OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPzogbnVtYmVyLCB0eXBlPzogc3RyaW5nLCBhc2NpaUNvZGU/OiBudW1iZXIpOiBSdWxlclNxdWFyZSB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gPSBuZXcgUnVsZXJTcXVhcmUoa2V5LCB4UG9zaXRpb24sIHlQb3NpdGlvbiwgc3F1YXJlV2lkdGgsIGJvcmRlckNvbG9yLCB0ZXh0Q29sb3IsIHR5cGUsIGFzY2lpQ29kZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSBhcyBSdWxlclNxdWFyZTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L3Byb2plY3Qvdmlldy9ydWxlci9SdWxlclNxdWFyZS50cyIsImltcG9ydCAncGl4aS5qcydcclxuaW1wb3J0IHtCYXR0bGVTaGlwRmFjYWRlLCBGYWNhZGVJbmZvcm1hdGlvbn0gZnJvbSBcIi4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcblxyXG4vKipcclxuICogVGhlIGdyaWQncyBtZWRpYXRvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBHcmlkVmlld01lZGlhdG9yIGV4dGVuZHMgcHVyZW12Yy5NZWRpYXRvciBpbXBsZW1lbnRzIHB1cmVtdmMuSU1lZGlhdG9yIHtcclxuICAgIHB1YmxpYyBuYW1lOiBTdHJpbmcgPSAnR3JpZFZpZXdNZWRpYXRvcic7XHJcbiAgICBwdWJsaWMgZ3JpZE5hbWU6IHN0cmluZyA9ICdHcmlkQm9hcmQnO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0gdmlld0NvbXBvbmVudFxyXG4gICAgICogQHBhcmFtIGdyaWROdW1iZXJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHZpZXdDb21wb25lbnQ6IHB1cmVtdmMuVmlldyA9IG51bGwsZ3JpZE51bWJlcjpudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCB2aWV3Q29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLm5hbWUrPScnK2dyaWROdW1iZXI7XHJcblxyXG4gICAgICAgIGxldCBjb250YWluZXJzTGlzdDogQXJyYXk8UElYSS5Db250YWluZXI+ID0gW107XHJcbiAgICAgICAgY29udGFpbmVyc0xpc3QucHVzaChzdXBlci5nZXRWaWV3Q29tcG9uZW50KCkuZ2V0VUlDb250YWluZXIoKSk7XHJcbiAgICAgICAgQmF0dGxlU2hpcEZhY2FkZS5nZXRJbnN0YW5jZShGYWNhZGVJbmZvcm1hdGlvbi5CYXR0bGVTaGlwRmFjYWRlS2V5KS5hZGRDb250YWluZXJzVG9WaWV3KGNvbnRhaW5lcnNMaXN0LCBncmlkTnVtYmVyLTEpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnICAgIyAnK3RoaXMubmFtZSsnIGNyZWF0ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBub3RpZmljYXRpb24gdGhhdCB0aGUgVmlld01lZGlhdG9yIGlzIGludGVyZXN0ZWQgaW4uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgVGhpcyBpcyB3aGVyZSB0aGUgbm90aWZpY2F0aW9ucyBhcmUgaGFuZGxlZC5cclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIGhhbmRsZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IHB1cmVtdmMuTm90aWZpY2F0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5hbWU6IFN0cmluZyA9IG5vdGlmaWNhdGlvbi5uYW1lO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC9tZWRpYXRvci9HcmlkVmlld01lZGlhdG9yLnRzIiwiaW1wb3J0IHtBYnN0cmFjdFZpZXd9IGZyb20gXCIuLi8uLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RWaWV3XCI7XHJcbmltcG9ydCB7VGV4dFZpZXdNZWRpYXRvcn0gZnJvbSBcIi4uLy4uL21lZGlhdG9yL1RleHRWaWV3TWVkaWF0b3JcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGhhcyB0aGUgcmVzcG9uc2liaWxpdHkgdG8gc2hvdyB0ZXh0IG5vdGlmaWNhdGlvbnMgb24gdGhlIHNjcmVlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRleHRWaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcclxuXHJcbiAgICAvKipIZXJlIHdlIHNhdmUgdGhlIHRleHQgc3RyaW5nICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHQ6IFBJWEkuVGV4dDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSB0ZXh0XHJcbiAgICAgKiBAcGFyYW0gZm9udFNpemVcclxuICAgICAqIEBwYXJhbSBjb2xvclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgdGV4dDogc3RyaW5nLCBmb250U2l6ZTogbnVtYmVyLCBjb2xvcjogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoa2V5KTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXh0ID0gbmV3IFBJWEkuVGV4dCh0ZXh0LCB7Zm9udFNpemU6IGZvbnRTaXplLCBmaWxsOiBjb2xvcn0pO1xyXG4gICAgICAgIHRoaXMudGV4dC5hbmNob3Iuc2V0KDAsIDApO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnRleHQpO1xyXG5cclxuICAgICAgICBzdXBlci5yZWdpc3Rlck1lZGlhdG9yKG5ldyBUZXh0Vmlld01lZGlhdG9yKGtleSwgdGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6aW5nIHRoZSBUZXh0J3Mgdmlld1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZVZpZXcoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZVZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRVSUNvbnRhaW5lcigpOiBQSVhJLkNvbnRhaW5lciB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnBpdm90LnggPSB0aGlzLl9jb250YWluZXIud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5waXZvdC55ID0gdGhpcy5fY29udGFpbmVyLmhlaWdodCAvIDI7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldFVJQ29udGFpbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHRleHRcclxuICAgICAqIEBwYXJhbSBmb250U2l6ZVxyXG4gICAgICogQHBhcmFtIGNvbG9yXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShrZXk6IHN0cmluZywgdGV4dD86IHN0cmluZywgZm9udFNpemU/OiBudW1iZXIsIGNvbG9yPzogbnVtYmVyKTogVGV4dFZpZXcge1xyXG4gICAgICAgIGlmICghcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0pXHJcbiAgICAgICAgICAgIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldID0gbmV3IFRleHRWaWV3KGtleSwgdGV4dCwgZm9udFNpemUsIGNvbG9yKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldIGFzIFRleHRWaWV3O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L3RleHQvVGV4dFZpZXcudHMiLCJpbXBvcnQgJ3BpeGkuanMnXHJcbmltcG9ydCB7QmF0dGxlU2hpcEZhY2FkZSwgRmFjYWRlSW5mb3JtYXRpb259IGZyb20gXCIuLi9mYWNhZGUvQmF0dGxlU2hpcEZhY2FkZVwiO1xyXG5pbXBvcnQge0Fic3RyYWN0TWVkaWF0b3J9IGZyb20gXCIuLi8uLi9hYnN0cmFjdENsYXNzZXMvQWJzdHJhY3RNZWRpYXRvclwiO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVGV4dFZpZXdNZWRpYXRvciBleHRlbmRzIEFic3RyYWN0TWVkaWF0b3Ige1xyXG4gICAgcHVibGljIG5hbWU6IFN0cmluZyA9ICdUZXh0Vmlld01lZGlhdG9yJztcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVkaWF0b3JOYW1lXHJcbiAgICAgKiBAcGFyYW0gdmlld0NvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZWRpYXRvck5hbWU6IHN0cmluZywgdmlld0NvbXBvbmVudDogYW55KSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgdmlld0NvbXBvbmVudCk7XHJcblxyXG5cclxuICAgICAgICBsZXQgY29udGFpbmVyc0xpc3Q6IEFycmF5PFBJWEkuQ29udGFpbmVyPiA9IFtdO1xyXG4gICAgICAgIGNvbnRhaW5lcnNMaXN0LnB1c2goc3VwZXIuZ2V0Vmlld0NvbXBvbmVudCgpLmdldFVJQ29udGFpbmVyKCkpO1xyXG4gICAgICAgIEJhdHRsZVNoaXBGYWNhZGUuZ2V0SW5zdGFuY2UoRmFjYWRlSW5mb3JtYXRpb24uQmF0dGxlU2hpcEZhY2FkZUtleSkuYWRkQ29udGFpbmVyc1RvVmlldyhjb250YWluZXJzTGlzdCwgMik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgJyArIHRoaXMubmFtZSArICcgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5vdGlmaWNhdGlvbiB0aGF0IHRoZSBWaWV3TWVkaWF0b3IgaXMgaW50ZXJlc3RlZCBpbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBUaGlzIGlzIHdoZXJlIHRoZSBub3RpZmljYXRpb25zIGFyZSBoYW5kbGVkLlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFuZGxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogcHVyZW12Yy5Ob3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICBsZXQgbmFtZTogU3RyaW5nID0gbm90aWZpY2F0aW9uLm5hbWU7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L21lZGlhdG9yL1RleHRWaWV3TWVkaWF0b3IudHMiLCJpbXBvcnQge0Fic3RyYWN0Vmlld30gZnJvbSBcIi4uLy4uLy4uL2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdFZpZXdcIjtcclxuaW1wb3J0IHtCdXR0b25WaWV3TWVkaWF0b3J9IGZyb20gXCIuLi8uLi9tZWRpYXRvci9CdXR0b25WaWV3TWVkaWF0b3JcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGJ1dHRvbiBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25WaWV3IGV4dGVuZHMgQWJzdHJhY3RWaWV3IHtcclxuXHJcbiAgICAvKipUaGUgcG9zaXRpb25zIGFuZCB0aGUgc2NhbGUgb2YgdGhlIGJ1dHRvbiAqL1xyXG4gICAgcHVibGljIHhQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIHlQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIHNjYWxlOiBudW1iZXI7XHJcblxyXG4gICAgLyoqVGhlIHNwcml0ZSB0aGF0IGNvbnRhaW5zIHRoZSBidXR0b24ncyBwbmcgaW1hZ2UgKi9cclxuICAgIHB1YmxpYyBzcHJpdGU6IFBJWEkuU3ByaXRlO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5XHJcbiAgICAgKiBAcGFyYW0geFBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0geVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0gc2NhbGVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHhQb3NpdGlvbjogbnVtYmVyLCB5UG9zaXRpb246IG51bWJlciwgc2NhbGU6IG51bWJlcikge1xyXG5cclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMueFBvc2l0aW9uID0geFBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMueVBvc2l0aW9uID0geVBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBQSVhJLlNwcml0ZS5mcm9tSW1hZ2UoJ2ltYWdlcy9OZXh0UGhhc2VCdXR0b24ucG5nJyk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc2NhbGUuc2V0KHRoaXMuc2NhbGUpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnNwcml0ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUJ1dHRvbkludGVyYWN0aW9uKCk7XHJcblxyXG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyTWVkaWF0b3IobmV3IEJ1dHRvblZpZXdNZWRpYXRvcihrZXksIHRoaXMpKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgICMgQnV0dG9uVmlldyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgdGhlIEJ1dHRvbidzIHZpZXcuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplVmlldygpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGlzIGJ1dHRvbidzIGNvbnRhaW5lciB3aGljaCB3aWxsIGNvbnRhaW4gdGhlIGJ1dHRvbidzIHRleHR1cmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRVSUNvbnRhaW5lcigpOiBQSVhJLkNvbnRhaW5lciB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnBpdm90LnggPSB0aGlzLl9jb250YWluZXIud2lkdGggLyAyO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5waXZvdC55ID0gdGhpcy5fY29udGFpbmVyLmhlaWdodCAvIDI7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldFVJQ29udGFpbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlcyB0aGUgYnV0dG9uIGludGVyYWN0aXZlIHdpdGggdGhlIHBsYXllci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplQnV0dG9uSW50ZXJhY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNwcml0ZS5vbigncG9pbnRlcnRhcCcsIHRoaXMuaGFuZGxlTW91c2VEb3duKTtcclxuICAgIH1cclxuLypcclxuICAgIC8hKipcclxuICAgICAqXHJcbiAgICAgKiEvXHJcbiAgICBwcml2YXRlIGhhbmRsZU1vdXNlRG93bigpOiB2b2lkIHtcclxuICAgICAgICBCYXR0bGVTaGlwRmFjYWRlLmdldEluc3RhbmNlKEZhY2FkZUluZm9ybWF0aW9uLkJhdHRsZVNoaXBGYWNhZGVLZXkpLnNlbmROb3RpZmljYXRpb24oQ29tbWFuZE5vdGlmaWNhdGlvbnMuQnV0dG9uUHJlc3MpO1xyXG4gICAgfSovXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSB4UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB5UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBzY2FsZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIHhQb3NpdGlvbj86IG51bWJlciwgeVBvc2l0aW9uPzogbnVtYmVyLCBzY2FsZT86IG51bWJlcik6IHB1cmVtdmMuSVZpZXcge1xyXG4gICAgICAgIGlmICghcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0pXHJcbiAgICAgICAgICAgIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldID0gbmV3IEJ1dHRvblZpZXcoa2V5LCB4UG9zaXRpb24sIHlQb3NpdGlvbiwgc2NhbGUpO1xyXG4gICAgICAgIHJldHVybiBwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSBhcyBwdXJlbXZjLklWaWV3O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L2J1dHRvbi9CdXR0b25WaWV3LnRzIiwiaW1wb3J0IHtCYXR0bGVTaGlwRmFjYWRlLCBGYWNhZGVJbmZvcm1hdGlvbn0gZnJvbSBcIi4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcbmltcG9ydCAncGl4aS5qcydcclxuaW1wb3J0IHtBYnN0cmFjdE1lZGlhdG9yfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0TWVkaWF0b3JcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgYnV0dG9uJ3MgbWVkaWF0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQnV0dG9uVmlld01lZGlhdG9yIGV4dGVuZHMgQWJzdHJhY3RNZWRpYXRvciB7XHJcbiAgICBwdWJsaWMgbmFtZTogU3RyaW5nID0gJ0J1dHRvblZpZXdNZWRpYXRvcic7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHZpZXdDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHZpZXdDb21wb25lbnQ6IHB1cmVtdmMuVmlldyA9IG51bGwpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCB2aWV3Q29tcG9uZW50KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lcnNMaXN0OiBBcnJheTxQSVhJLkNvbnRhaW5lcj4gPSBbXTtcclxuICAgICAgICBjb250YWluZXJzTGlzdC5wdXNoKHN1cGVyLmdldFZpZXdDb21wb25lbnQoKS5nZXRVSUNvbnRhaW5lcigpKTtcclxuICAgICAgICBCYXR0bGVTaGlwRmFjYWRlLmdldEluc3RhbmNlKEZhY2FkZUluZm9ybWF0aW9uLkJhdHRsZVNoaXBGYWNhZGVLZXkpLmFkZENvbnRhaW5lcnNUb1ZpZXcoY29udGFpbmVyc0xpc3QsMyk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCcgICAjICcrdGhpcy5uYW1lKycgY3JlYXRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5vdGlmaWNhdGlvbiB0aGF0IHRoZSBWaWV3TWVkaWF0b3IgaXMgaW50ZXJlc3RlZCBpbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBUaGlzIGlzIHdoZXJlIHRoZSBub3RpZmljYXRpb25zIGFyZSBoYW5kbGVkLlxyXG4gICAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFuZGxlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogcHVyZW12Yy5Ob3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICBsZXQgbmFtZTogU3RyaW5nID0gbm90aWZpY2F0aW9uLm5hbWU7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L21lZGlhdG9yL0J1dHRvblZpZXdNZWRpYXRvci50cyIsImltcG9ydCB7QmF0dGxlU2hpcEZhY2FkZSwgRmFjYWRlSW5mb3JtYXRpb24sIE1lZGlhdG9yTm90aWZpY2F0aW9uc30gZnJvbSBcIi4uLy4uL2ZhY2FkZS9CYXR0bGVTaGlwRmFjYWRlXCI7XHJcbmltcG9ydCB7QWJzdHJhY3RWaWV3fSBmcm9tIFwiLi4vLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0Vmlld1wiO1xyXG5pbXBvcnQge1NoaXBWaWV3TWVkaWF0b3J9IGZyb20gXCIuLi8uLi9tZWRpYXRvci9TaGlwVmlld01lZGlhdG9yXCI7XHJcbmltcG9ydCAncGl4aS5qcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqICBDbGFzcyB0aGF0IHJlcHJlc2VudHMgYSBzaW5nbGUgU2hpcC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTaGlwVmlldyBleHRlbmRzIEFic3RyYWN0VmlldyB7XHJcblxyXG4gICAgcHVibGljIHhQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIHlQb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHVibGljIHNoaXBHcmFwaGljczogUElYSS5HcmFwaGljcztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBrZXlcclxuICAgICAqIEBwYXJhbSB4UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB5UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSBudW1iZXJPZlNxdWFyZXNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHhQb3NpdGlvbjogbnVtYmVyLCB5UG9zaXRpb246IG51bWJlciwgbnVtYmVyT2ZTcXVhcmVzOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihrZXkpO1xyXG4gICAgICAgIHRoaXMueFBvc2l0aW9uID0geFBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMueVBvc2l0aW9uID0geVBvc2l0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLnNoaXBHcmFwaGljcyA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3MubGluZVN0eWxlKDcsIEZhY2FkZUluZm9ybWF0aW9uLlNoaXBCb3JkZXJDb2xvcik7XHJcbiAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3MuYmVnaW5GaWxsKEZhY2FkZUluZm9ybWF0aW9uLlNoaXBGaWxsQ29sb3IpO1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBudW1iZXJPZlNxdWFyZXM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNoaXBHcmFwaGljcy5kcmF3UmVjdCh0aGlzLnhQb3NpdGlvbiArIGkgKiBGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVXaWR0aCwgdGhpcy55UG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICBGYWNhZGVJbmZvcm1hdGlvbi5TcXVhcmVXaWR0aCwgRmFjYWRlSW5mb3JtYXRpb24uU3F1YXJlV2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNoaXBHcmFwaGljcy5lbmRGaWxsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hpcEdyYXBoaWNzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNoaXBHcmFwaGljcy5idXR0b25Nb2RlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zaGlwR3JhcGhpY3NcclxuICAgICAgICAgICAgLm9uKCdwb2ludGVyZG93bicsIG9uRHJhZ1N0YXJ0KVxyXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJ1cCcsIG9uRHJhZ0VuZClcclxuICAgICAgICAgICAgLm9uKCdwb2ludGVydXBvdXRzaWRlJywgb25EcmFnRW5kKVxyXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJtb3ZlJywgb25EcmFnTW92ZSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdoZW4gdGhlIHBsYXllciBzdGFydHMgdG8gZHJhZyB0aGUgc2hpcC5cclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBvbkRyYWdTdGFydChldmVudCk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBldmVudC5kYXRhO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vc3RvcmUgdGhpcyB2YXJpYWJsZSBmb3IgY29udmVuaWVuY2VcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5wYXJlbnQpO1xyXG5cclxuICAgICAgICAgICAgLy9QcmludCB0aGUgcG9zaXRpb25cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgdGhlIHBpdm90IHBvaW50IHRvIHRoZSBuZXcgcG9zaXRpb25cclxuICAgICAgICAgICAgdGhpcy5waXZvdC5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIG5ldyBwb3NpdGlvbiBvZiB0aGUgc3ByaXRlIHRvIHRoZSBwb3NpdGlvbiBvYnRhaW5lZCB0aHJvdWdoXHJcbiAgICAgICAgICAgIC8vIHRoZSBnbG9iYWwgZGF0YS4gVGhpcyBlbnN1cmVzIHRoZSBwb3NpdGlvbiBsaW5lcyB1cCB3aXRoIHRoZSBsb2NhdGlvbiBvZlxyXG4gICAgICAgICAgICAvLyB0aGUgbW91c2Ugb24gdGhlIHNjcmVlbi4gSSdtIG5vdCBjZXJ0YWluIHdoeSwgYnV0IHRoaXMgaXMgbmVjZXNzYXJ5LlxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh0aGlzLmRhdGEueCwgdGhpcy5kYXRhLnkpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFdoZW4gdGhlIHBsYXllciBpcyBkcmFnZ2luZyB0aGUgc2hpcC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmdW5jdGlvbiBvbkRyYWdNb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnZ2luZykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gdGhpcy5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5wYXJlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gbmV3UG9zaXRpb24ueDtcclxuICAgICAgICAgICAgICAgIHRoaXMueSA9IG5ld1Bvc2l0aW9uLnk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBXaGVuIHRoZSBwbGF5ZXIgc3RvcHMgZ3JhYmJpbmcgdGhlIHNoaXAuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gb25EcmFnRW5kKCk6IHZvaWQge1xyXG5cclxuICAgICAgICAgICAgLy9TaG93IHRoZSBlbmQgcG9zaXRpb25cclxuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gdGhpcy5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5wYXJlbnQpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhLmdldExvY2FsUG9zaXRpb24odGhpcy5wYXJlbnQucGFyZW50KSk7XHJcbiAgICAgICAgICAgIEJhdHRsZVNoaXBGYWNhZGUuZ2V0SW5zdGFuY2UoRmFjYWRlSW5mb3JtYXRpb24uQmF0dGxlU2hpcEZhY2FkZUtleSkuc2VuZE5vdGlmaWNhdGlvbihNZWRpYXRvck5vdGlmaWNhdGlvbnMuU2hpcHNQbGFjZW1lbnQsIHRoaXMuZGF0YS5nZXRMb2NhbFBvc2l0aW9uKHRoaXMucGFyZW50LnBhcmVudCkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hbHBoYSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNldCB0aGUgaW50ZXJhY3Rpb24gZGF0YSB0byBudWxsXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VwZXIucmVnaXN0ZXJNZWRpYXRvcihuZXcgU2hpcFZpZXdNZWRpYXRvcihrZXksIHRoaXMpKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnICAgIyBTaGlwVmlldyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXppbmcgdGhlIFNoaXAncyB2aWV3XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0aWFsaXplVmlldygpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0dGVyIGZvciB0aGUgU2hpcFZpZXcncyBDb250YWluZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVJQ29udGFpbmVyKCk6IFBJWEkuQ29udGFpbmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaGlwR3JhcGhpY3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIHhQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIG51bWJlck9mU3F1YXJlc1xyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2Uoa2V5OiBzdHJpbmcsIHhQb3NpdGlvbj86IG51bWJlciwgeVBvc2l0aW9uPzogbnVtYmVyLCBudW1iZXJPZlNxdWFyZXM/OiBudW1iZXIpOiBTaGlwVmlldyB7XHJcbiAgICAgICAgaWYgKCFwdXJlbXZjLlZpZXcuaW5zdGFuY2VNYXBba2V5XSlcclxuICAgICAgICAgICAgcHVyZW12Yy5WaWV3Lmluc3RhbmNlTWFwW2tleV0gPSBuZXcgU2hpcFZpZXcoa2V5LCB4UG9zaXRpb24sIHlQb3NpdGlvbiwgbnVtYmVyT2ZTcXVhcmVzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHB1cmVtdmMuVmlldy5pbnN0YW5jZU1hcFtrZXldIGFzIFNoaXBWaWV3O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb2plY3QvcHJvamVjdC92aWV3L3NoaXBzL1NoaXBWaWV3LnRzIiwiaW1wb3J0ICdwaXhpLmpzJ1xyXG5pbXBvcnQge1xyXG4gICAgQmF0dGxlU2hpcEZhY2FkZSxcclxuICAgIENvbW1hbmROb3RpZmljYXRpb25zLFxyXG4gICAgRmFjYWRlSW5mb3JtYXRpb24sXHJcbiAgICBNZWRpYXRvck5vdGlmaWNhdGlvbnNcclxufSBmcm9tIFwiLi4vZmFjYWRlL0JhdHRsZVNoaXBGYWNhZGVcIjtcclxuaW1wb3J0IHtBYnN0cmFjdE1lZGlhdG9yfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3RDbGFzc2VzL0Fic3RyYWN0TWVkaWF0b3JcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2hpcFZpZXdNZWRpYXRvciBleHRlbmRzIEFic3RyYWN0TWVkaWF0b3Ige1xyXG4gICAgcHVibGljIG5hbWU6IFN0cmluZyA9ICdTaGlwVmlld01lZGlhdG9yJztcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVkaWF0b3JOYW1lXHJcbiAgICAgKiBAcGFyYW0gdmlld0NvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZWRpYXRvck5hbWU/OiBzdHJpbmcsIHZpZXdDb21wb25lbnQ/OiBhbnkpIHtcclxuICAgICAgICBzdXBlcihtZWRpYXRvck5hbWUsIHZpZXdDb21wb25lbnQpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGNvbnRhaW5lcnNMaXN0OiBBcnJheTxQSVhJLkNvbnRhaW5lcj4gPSBbXTtcclxuICAgICAgICBjb250YWluZXJzTGlzdC5wdXNoKHN1cGVyLmdldFZpZXdDb21wb25lbnQoKS5nZXRVSUNvbnRhaW5lcigpKTtcclxuICAgICAgICBCYXR0bGVTaGlwRmFjYWRlLmdldEluc3RhbmNlKEZhY2FkZUluZm9ybWF0aW9uLkJhdHRsZVNoaXBGYWNhZGVLZXkpLmFkZENvbnRhaW5lcnNUb1ZpZXcoY29udGFpbmVyc0xpc3QsIDQpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnICAgIyAnICsgdGhpcy5uYW1lICsgJyBjcmVhdGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbm90aWZpY2F0aW9uIHRoYXQgdGhlIFZpZXdNZWRpYXRvciBpcyBpbnRlcmVzdGVkIGluLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtNZWRpYXRvck5vdGlmaWNhdGlvbnMuU2hpcHNQbGFjZW1lbnRdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIFRoaXMgaXMgd2hlcmUgdGhlIG5vdGlmaWNhdGlvbnMgYXJlIGhhbmRsZWQuXHJcbiAgICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoYW5kbGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uOiBwdXJlbXZjLklOb3RpZmljYXRpb24pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTWVkaWF0b3JOb3RpZmljYXRpb25zLlNoaXBzUGxhY2VtZW50OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NoaXBzIHBsYWNlbWVudCBpbiBtZWRpYXRvcicpO1xyXG4gICAgICAgICAgICAgICAgc3VwZXIuc2VuZE5vdGlmaWNhdGlvbihDb21tYW5kTm90aWZpY2F0aW9ucy5TaGlwc1BsYWNlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvamVjdC9wcm9qZWN0L21lZGlhdG9yL1NoaXBWaWV3TWVkaWF0b3IudHMiLCIvKipcclxuICogRXh0ZW5kIHRoaXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RGYWNhZGUgZXh0ZW5kcyBwdXJlbXZjLkZhY2FkZSBpbXBsZW1lbnRzIHB1cmVtdmMuSUZhY2FkZSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGtleSk7XHJcbiAgICAgICAgdGhpcy5tdWx0aXRvbktleSA9IGtleTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5vdGlmaWVzIHRoZSBmYWNhZGUncyB2aWV3IG9ic2VydmVycy5cclxuICAgICAqIEBwYXJhbSBub3RpZmljYXRpb25cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5vdGlmeU9ic2VydmVycyhub3RpZmljYXRpb24pOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3KVxyXG4gICAgICAgICAgICB0aGlzLnZpZXcubm90aWZ5T2JzZXJ2ZXJzKG5vdGlmaWNhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZW5kcyBhIG5vdGlmaWNhdGlvbi5cclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gYm9keVxyXG4gICAgICogQHBhcmFtIHR5cGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlbmROb3RpZmljYXRpb24obmFtZTogc3RyaW5nLCBib2R5OiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5zZW5kTm90aWZpY2F0aW9uKG5hbWUsIGJvZHksIHR5cGUpO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9qZWN0L2Fic3RyYWN0Q2xhc3Nlcy9BYnN0cmFjdEZhY2FkZS50cyJdLCJzb3VyY2VSb290IjoiIn0=