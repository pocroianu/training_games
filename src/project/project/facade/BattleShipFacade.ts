import {ControllerManager} from "../controller/ControllerManager";
import {ViewManager} from "../view/mainView/ViewManager";
import {AbstractFacade} from "../../abstractClasses/AbstractFacade";
import 'pixi.js';
import {GridView} from "../view/grid/GridView";
import {TextView} from "../view/text/TextView";
import {ButtonView} from "../view/button/ButtonView";
import {SquareClickCommand} from "../command/SquareClickCommand";
import {ButtonPressCommand} from "../command/ButtonPressCommand";
import {ButtonViewMediator} from "../mediator/ButtonViewMediator";
import {GridViewMediator} from "../mediator/GridViewMediator";
import {TextViewMediator} from "../mediator/TextViewMediator";
import {PlayerShipsViewMediator} from "../mediator/PlayerShipsViewMediator";
import {PlayerShipsView} from "../view/ships/PlayerShipsView";
import {ShipPlaceCommand} from "../command/ShipPlaceCommand";
import {PlayerFinishedPlacingTheShipsCommand} from "../command/PlayerFinishedPlacingTheShipsCommand";
import {StartGamePlayCommand} from "../command/StartGamePlayCommand";
import {HideTheShipsCommand} from "../command/HideTheShipsCommand";
import {ShipPositionInfoCommand} from "../command/ShipPositionInfoCommand";
import {ModelManager} from "../model/ModelManager";
import {GridProxy} from "../proxy/GridProxy";
import {PlayerProxy} from "../proxy/PlayerProxy";
import {GamePlayProxy} from "../proxy/GamePlayProxy";

export enum MediatorNotifications {
    ShipsPlacement = 'Ships_Placement',
    GridShipMarking = 'GridMarking',
    TextUpdate = 'TextUpdate',
    SquareClickRequest = 'SquareClickR',
    ShipPositionInfo = 'ShipPosition',
    HideTheShips = 'HideThoseDamnShips',
    PlayerHitAShip = 'PlayerHitAShip',
    PlayerMissed = 'PlayerMissed',
    Test = 'Test'
}

export enum TextErrors {

    MaximumNumberOfShipReached = 'Max Number Of Ships to Place Reached'
}

export enum CommandNotifications {

    SquareClickNotification = 'CLICK_HANDLE_COMMAND',
    ButtonPress = 'BUTTON_PRESS_COMMAND',
    ShipsPlacement = 'SHIPS_PLACEMENT_COMMAND'
}

export enum FacadeInformation {

    Grid1XPosition = 100,
    Grid1YPosition = 100,
    Grid1BorderColor = 0x0000ff,
    Grid2XPosition = 100,
    Grid2YPosition = 100,
    Grid2BorderColor = 0xff0000,
    GridScale = 0.5,

    GridSquareFillColor = 0x000000,
    RulerTextColor = 0x000000,
    HitColor = 0x00ff00,
    MissColor = 0xff3300,

    SquareFillColor = 0x00ff00,
    SquareWidth = 80,
    NumberOfSquaresVertically = 12,
    NumberOfSquaresHorizontally = 12,

    TextViewText = 'Game status : \nShips placement',
    TextViewColor = 0x42d1f4,
    FontSize = 30,

    PlayerOneShipFillColor = 0x0000ff,
    PlayerOneShipBorderColor = 0xfff000,
    PlayerTwoShipFillColor = 0xfa0000,
    PlayerTwoShipBorderColor = 0xfff000,
    PlayerOneNumberOfShips = 6,
    PlayerTwoNumberOfShips = 6,

    ButtonViewXPosition = 100,
    ButtonViewYPosition = 100,
    ButtonViewScale = 0.9,


    PlayerOne = '1',
    PlayerTwo = '2',

    BattleShipFacadeKey = 'BattleShip',
    ShipVerticalType = 'Vertical',
    ShipHorizontalType = 'Horizontal',
    MaximumNumberOfShipsOnAGrid = 3
}

/**
 * The main Facade.
 */
export class BattleShipFacade extends AbstractFacade {

    public app: PIXI.Application;

    public gridViewMediator: string[];
    public buttonViewMediator: string;
    public bundleShipViewMediator: string[];
    public textViewMediator: string;

    /**The containers that contains the GameBoards */
    public GameBoardContainerOne: PIXI.Container;
    public GameBoardContainerTwo: PIXI.Container;
    /**The container which contains the GameInfo */
    public GameInfoContainer: PIXI.Container;
    /**The container which contains the GameButton */
    public GameButtonContainer: PIXI.Container;
    /**The container that holds information about the battleships */
    public ShipsContainerOne: PIXI.Container;
    public ShipsContainerTwo: PIXI.Container;

    public static GridProxyName: string = 'GridProxy';
    public static PlayerProxyName: string = 'PlayerProxy';
    public static GamePlayProxyName: string = 'GamePlayProxy';


    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);
    }

    /**
     *
     * @param key
     */
    static getInstance(key: string): BattleShipFacade {
        if (!puremvc.Facade.instanceMap[key])
            puremvc.Facade.instanceMap[key] = new BattleShipFacade(key);

        return puremvc.Facade.instanceMap[key] as BattleShipFacade;
    }

    /**
     * Initializing the Facade's Model
     */
    public initializeModel(): void {
        if (!this.model)
            this.model = ModelManager.getInstance(this.multitonKey);

        /**Registering the proxies */
        super.registerProxy(new GridProxy(BattleShipFacade.GridProxyName));
        super.registerProxy(new PlayerProxy(BattleShipFacade.PlayerProxyName));
        super.registerProxy(new GamePlayProxy(BattleShipFacade.GamePlayProxyName));
    }

    /**
     * Initializing the Facade's View
     */
    public initializeView(): void {
        if (!this.view)
            this.view = ViewManager.getInstance(this.multitonKey);

        /**Keys for the mediators */

        this.gridViewMediator = ['GridOneMediator', 'GridTwoMediator'];
        this.buttonViewMediator = 'ButtonViewMediator';
        this.bundleShipViewMediator = ['ShipPlayerOneMediator', 'ShipPlayerTwoMediator'];
        this.textViewMediator = 'TextViewMediator';

        /**Registering a ButtonMediator */
        super.registerMediator(new ButtonViewMediator(this.buttonViewMediator, new ButtonView(FacadeInformation.ButtonViewXPosition, FacadeInformation.ButtonViewYPosition, FacadeInformation.ButtonViewScale)));

        /**Registering the two GridViews */
        super.registerMediator(new GridViewMediator(this.gridViewMediator[0],
            new GridView(FacadeInformation.PlayerOne), FacadeInformation.PlayerOne));
        super.registerMediator(new GridViewMediator(this.gridViewMediator[1],
            new GridView(FacadeInformation.PlayerTwo), FacadeInformation.PlayerTwo));

        /**Registering the TextMediator */
        super.registerMediator(new TextViewMediator(this.textViewMediator, new TextView(FacadeInformation.TextViewText,
            FacadeInformation.FontSize, FacadeInformation.TextViewColor)));


        /**Registering the Ships Mediators */
        super.registerMediator(new PlayerShipsViewMediator(this.bundleShipViewMediator[0],
            new PlayerShipsView(FacadeInformation.PlayerOne, FacadeInformation.PlayerOneNumberOfShips), FacadeInformation.PlayerOne));
        super.registerMediator(new PlayerShipsViewMediator(this.bundleShipViewMediator[1],
            new PlayerShipsView(FacadeInformation.PlayerTwo, FacadeInformation.PlayerTwoNumberOfShips), FacadeInformation.PlayerTwo));


        //Just for fun
        let count: number = 0;
        this.app.ticker.add(() => {
            count += 0.1;

            let text: any = super.retrieveMediator(this.textViewMediator).getViewComponent().getUIContainer();
            text.scale.set(1 + Math.sin(count) * 0.05);

        });
    }

    /**
     * Initializing the Facade's Controller
     */
    public initializeController(): void {
        if (!this.controller)
            this.controller = ControllerManager.getInstance(this.multitonKey);

        console.log(this.controller);

        /**Registering the commands */
        super.registerCommand(CommandNotifications.SquareClickNotification, SquareClickCommand);
        super.registerCommand(CommandNotifications.ButtonPress, ButtonPressCommand);
        super.registerCommand(CommandNotifications.ShipsPlacement, ShipPlaceCommand);
        super.registerCommand(ControllerManager.ShipPositionInfoCommand, ShipPositionInfoCommand);
        super.registerCommand(ControllerManager.PlayerFinishedPlacingTheShipsCommand, PlayerFinishedPlacingTheShipsCommand);
        super.registerCommand(ControllerManager.StartGamePlayCommand, StartGamePlayCommand);
        super.registerCommand(ControllerManager.HideTheShipCommand, HideTheShipsCommand);
    }

    /**
     * Adds containers to the view screen
     * @param containersList
     * @param type
     */
    public addContainersToView(containersList: Array<PIXI.Container>, type: number): void {
        for (let item of containersList) {
            if (type === ViewManager.PlayerOneGridContainer) {
                /**Adding to the PlayerOneGrid Container */
                this.GameBoardContainerOne.addChild(item);
            }
            else if (type === ViewManager.PlayerTwoGridContainer) {
                /**Adding to the PlayerTwoGrid Container */
                this.GameBoardContainerTwo.addChild(item);
            }
            else if (type === ViewManager.GameInfoContainer) {
                /**Adding to the GameInfo Container */
                this.GameInfoContainer.addChild(item);
            }
            else if (type === ViewManager.GameButtonContainer) {
                /**Adding to the GameButton Container */
                this.GameButtonContainer.addChild(item);
            }
            else if (type === ViewManager.PlayerOneShipsContainer) {
                /**Adding to the PlayerOneShips Container */
                this.ShipsContainerOne.addChild(item);
            }
            else if (type === ViewManager.PlayerTwoShipsContainer) {
                /**Adding to the PlayerTwoShips Container */
                this.ShipsContainerTwo.addChild(item);
            }
        }
    }

    /**
     * Initializing the Facade
     */
    public initializeFacade(): void {
        if (this.multitonKey == undefined)
            return;

        this.app = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x000000});
        document.body.appendChild(this.app.view);
        this.GameBoardContainerOne = new PIXI.Container;
        this.GameBoardContainerTwo = new PIXI.Container;
        this.GameInfoContainer = new PIXI.Container;
        this.GameButtonContainer = new PIXI.Container;
        this.ShipsContainerOne = new PIXI.Container;
        this.ShipsContainerTwo = new PIXI.Container;
        this.app.stage.addChild(this.GameBoardContainerOne, this.GameBoardContainerTwo,
            this.GameInfoContainer, this.GameButtonContainer, this.ShipsContainerOne, this.ShipsContainerTwo);


        this.checkStartOrientation();
        this.changeOrientation();

        this.initializeModel();
        this.initializeController();
        this.initializeView();

        console.log('BattleShipFacade created');
    }

    /**
     * Notifies this facade's view observers.
     * @param mNotification
     */
    public notifyObservers(mNotification): void {
        if (this.view)
            this.view.notifyObservers(mNotification);
    }

    /**
     *  Checks at the Start of the game which orientation it has
     */
    private checkStartOrientation(): void {

        this.app.renderer.resize(window.innerWidth, window.innerHeight);
        let width: number = this.app.view.width;
        let height: number = this.app.view.height;

        switch (window.orientation) {
            case 90 :

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

            case 0 :
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
    }

    /**
     *  When the player rotates the screen
     */
    private changeOrientation(): void {


        window.addEventListener('resize', () => {
                this.app.renderer.resize(window.innerWidth, window.innerHeight);
                let width: number = window.innerWidth;
                let height: number = window.innerHeight;

                console.log('Orientation : ' + window.orientation);

                switch (window.orientation) {
                    case 90 :

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
                        this.GameBoardContainerOne.scale.set(FacadeInformation.GridScale);

                        this.GameBoardContainerTwo.position.set(width / 2, 3 * height / 6);
                        this.GameBoardContainerTwo.scale.set(FacadeInformation.GridScale);

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

                }
            }
        );
    }
}