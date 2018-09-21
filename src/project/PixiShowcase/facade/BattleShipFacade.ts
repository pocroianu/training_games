import * as puremvc from "../../../../public/js/puremvc-typescript-multicore-1.1.js";
import {BattleShipController} from "../controller/BattleShipController";
import {BattleShipView} from "../view/mainView/BattleShipView";
import {AbstractFacade} from "../../abstractClasses/AbstractFacade";
import {Application} from 'pixi.js';

export enum MediatorNotifications {
    ShipsPlacement='SHIPS_PLACEMENT_MEDIATOR'
}

export enum CommandNotifications {

    ClickHandle = 'CLICK_HANDLE_COMMAND',
    ButtonPress = 'BUTTON_PRESS_COMMAND',
    StartGame = 'START_GAME_COMMAND',
    ShipsPlacement = 'SHIPS_PLACEMENT_COMMAND'
}

export enum FacadeInformation {
    GridOne = 1,
    GridTwo = 2,

    Grid1XPosition = 100,
    Grid1YPosition = 100,
    Grid1BorderColor = 0x0000ff,

    Grid2XPosition = 100,
    Grid2YPosition = 100,
    Grid2BorderColor = 0xff0000,

    GridSquareFillColor = 0x000000,
    RulerTextColor = 0x000000,
    HitColor = 0xBB0044,
    MissColor = 0xff3300,

    SquareWidth = 80,
    NumberOfSquaresVertically = 10,
    NumberOfSquaresHorizontally = 10,

    TextViewText = 'Game status : \n  Ships placement',
    TextViewColor = 0xffffff,
    FontSize = 30,

    ShipFillColor=0xfff000,
    ShipBorderColor=0xff0000,

    ButtonViewXPosition = 100,
    ButtonViewYPosition = 100,
    ButtonViewScale = 0.9,

    BattleShipFacadeKey = 'BattleShip'
}

export class BattleShipFacade extends AbstractFacade {

    public app: Application;

    //TODO - THE THREE CONTAINERS
    /**The containers that contains the GameBoards */
    public GameBoardContainerOne: PIXI.Container;
    public GameBoardContainerTwo: PIXI.Container;
    /**The container which contains the GameInfo */
    public GameInfoContainer: PIXI.Container;
    /**The container which contains the GameButton */
    public GameButtonContainer: PIXI.Container;
    /**The container that holds information about the battleships */
    public ShipsContainer: PIXI.Container;

    constructor(key: string) {
        super(key);
    }

    /**
     * Initializing the Facade
     */
    public initializeFacade(): void {
        if (this.multitonKey == undefined)
            return;

        this.app = new Application(window.innerWidth, window.innerHeight, {backgroundColor: 0x000000});
        document.body.appendChild(this.app.view);
        this.GameBoardContainerOne = new PIXI.Container;
        this.GameBoardContainerTwo = new PIXI.Container;
        this.GameInfoContainer = new PIXI.Container;
        this.GameButtonContainer = new PIXI.Container;
        this.ShipsContainer = new PIXI.Container;
        this.app.stage.addChild(this.GameBoardContainerOne, this.GameBoardContainerTwo,
            this.GameInfoContainer, this.GameButtonContainer,this.ShipsContainer);

        this.checkStartOrientation();
        this.changeOrientation();
        this.initializeView();
        this.initializeModel();
        this.initializeController();
        console.log('BattleShipFacade created');
    }

    /**
     * Initializing the Facade's Model
     */
    public initializeModel(): void {
        // no model needed yet
    }

    /**
     * Initializing the Facade's View
     */
    public initializeView(): void {
        if (!this.view)
            this.view = BattleShipView.getInstance(this.multitonKey);
    }

    /**
     * Initializing the Facade's Controller
     */
    public initializeController(): void {
        if (!this.controller)
            this.controller = BattleShipController.getInstance(this.multitonKey);
    }

    /**
     * Adds containers to the view screen
     * @param containersList
     * @param type
     */
    public addContainersToView(containersList: Array<PIXI.Container>, type: number): void {
        for (let item of containersList) {
            if (type === 0) {
                /**Adding to the GameBoardOne Container */

                this.GameBoardContainerOne.addChild(item);
            }
            else if (type === 1) {
                /**Adding to the GameBoardTwo Container */
                this.GameBoardContainerTwo.addChild(item);
            }
            else if (type === 2) {
                /**Adding to the GameInfo Container */
                this.GameInfoContainer.addChild(item);
            }
            else if (type === 3) {
                /**Adding to the GameButton Container */
                this.GameButtonContainer.addChild(item);
            }
            else if (type === 4) {
                /**Adding to the ShipsInfo Container */
                this.ShipsContainer.addChild(item);
            }
        }
    }

    public notifyObservers(mNotification): void {
        if (this.view)
            this.view.notifyObservers(mNotification);
    }

    static getInstance(key: string): puremvc.Facade {
        if (!puremvc.Facade.instanceMap[key])
            puremvc.Facade.instanceMap[key] = new BattleShipFacade(key);

        return puremvc.Facade.instanceMap[key] as puremvc.Facade;
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
                this.GameBoardContainerOne.scale.set(0.5);

                this.GameBoardContainerTwo.position.set(3 * width / 6, height / 2);
                this.GameBoardContainerTwo.scale.set(0.5);

                this.GameInfoContainer.position.set(5 * width / 6, height / 4);
                this.GameInfoContainer.scale.set(1);

                this.GameButtonContainer.position.set(5 * width / 6, 3 * height / 4);
                this.GameButtonContainer.scale.set(0.9);

                this.ShipsContainer.position.set(width/4,height/6);
                this.ShipsContainer.scale.set(0.5);

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
                this.GameBoardContainerOne.scale.set(0.5);

                this.GameBoardContainerTwo.position.set(3 * width / 6, height / 2);
                this.GameBoardContainerTwo.scale.set(0.5);

                this.GameInfoContainer.position.set(5 * width / 6, height / 4);
                this.GameInfoContainer.scale.set(1);

                this.GameButtonContainer.position.set(5 * width / 6, 3 * height / 4);
                this.GameButtonContainer.scale.set(0.9);

                this.ShipsContainer.position.set(width/4,height/6);
                this.ShipsContainer.scale.set(0.5);

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
                        this.GameBoardContainerOne.scale.set(0.5);

                        this.GameBoardContainerTwo.position.set(3 * width / 6, height / 2);
                        this.GameBoardContainerTwo.scale.set(0.5);

                        this.GameInfoContainer.position.set(5 * width / 6, height / 4);
                        this.GameInfoContainer.scale.set(1);

                        this.GameButtonContainer.position.set(5 * width / 6, 3 * height / 4);
                        this.GameButtonContainer.scale.set(0.9);

                        this.ShipsContainer.position.set(width/4,height/6);
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

                        this.ShipsContainer.position.set(width/4,height/6);
                        this.ShipsContainer.scale.set(0.5);

                        break;
                }
            }
        );
    }
}