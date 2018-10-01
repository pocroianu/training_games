import {BattleShipFacade, FacadeInformation, MediatorNotifications} from "../../facade/BattleShipFacade";
import {AbstractView} from "../../../abstractClasses/AbstractView";
import 'pixi.js';


/**
 *  Class that represents a single Ship.
 */
export class SingleShipView extends AbstractView {

    public xPosition: number;
    public yPosition: number;
    public shipGraphics: PIXI.Graphics;
    public name: string;
    public numberOfSquares: number;

    /**
     * @param key
     * @param xPosition
     * @param yPosition
     * @param numberOfSquares
     * @param player
     */
    constructor(key: string, xPosition: number, yPosition: number, numberOfSquares: number, player: string) {
        super(key);
        this.name = key;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.shipGraphics = new PIXI.Graphics();
        this.numberOfSquares = numberOfSquares;

        if (player === FacadeInformation.PlayerOne) {
            this.shipGraphics.lineStyle(4, FacadeInformation.PlayerOneShipBorderColor);
            this.shipGraphics.beginFill(FacadeInformation.PlayerOneShipFillColor);
        }
        else if (player === FacadeInformation.PlayerTwo) {
            this.shipGraphics.lineStyle(4, FacadeInformation.PlayerTwoShipBorderColor);
            this.shipGraphics.beginFill(FacadeInformation.PlayerTwoShipFillColor);
        }


        for (let i: number = 0; i < this.numberOfSquares; i++) {

            this.shipGraphics.drawRect(this.xPosition + i * FacadeInformation.SquareWidth, this.yPosition,
                FacadeInformation.SquareWidth - 5, FacadeInformation.SquareWidth - 5,);
        }
        this.shipGraphics.endFill();
        this.shipGraphics.interactive = true;
        this.shipGraphics.buttonMode = true;

        this.shipGraphics
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);

        /**
         * When the player starts to drag the ship.
         * @param event
         */
        function onDragStart(event): void {
            this.data = event.data;

            //store this variable for convenience
            let position = this.data.getLocalPosition(this.parent);

            //Print the position


            // Set the pivot point to the new position
            this.pivot.set(position.x, position.y);

            // update the new position of the sprite to the position obtained through
            // the global data. This ensures the position lines up with the location of
            // the mouse on the screen. I'm not certain why, but this is necessary.
            this.position.set(this.data.x, this.data.y);
            this.dragging = true;
        }

        /**
         * When the player is dragging the ship.
         */
        function onDragMove(): void {
            if (this.dragging) {
                let newPosition = this.data.getLocalPosition(this.parent);
                this.x = newPosition.x;
                this.y = newPosition.y;
            }
        }

        /**
         * When the player stops grabbing the ship.
         */
        function onDragEnd(): void {

            //Show the end position
            let newPosition = this.data.getLocalPosition(this.parent.parent.parent);
            let body: number[] = [this.getBounds().x, this.getBounds().y, this.width, this.height];
            let type: any = this;
            let bodyStr: string = body.toString();

            BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey)
                .sendNotification(MediatorNotifications.ShipsPlacement, bodyStr);


            this.alpha = 1;
            this.dragging = false;


            // set the interaction data to null
            this.data = null;
            this.destroy();
        }

        console.log('   # SingleShipView created');
    }

    /**
     * Initializing the Ship's view
     */
    public initializeView(): void {
        super.initializeView();
    }


    /**
     *
     * @param key
     * @param xPosition
     * @param yPosition
     * @param numberOfSquares
     * @param player
     */
    static getInstance(key: string, xPosition?: number, yPosition?: number, numberOfSquares?: number, player?: string): SingleShipView {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new SingleShipView(key, xPosition, yPosition, numberOfSquares, player);

        return puremvc.View.instanceMap[key] as SingleShipView;
    }

    /**
     *
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Getter for the SingleShipView's Container
     */
    public getUIContainer(): PIXI.Container {
        return this.shipGraphics;
    }
}