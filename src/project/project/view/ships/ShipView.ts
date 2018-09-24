import {BattleShipFacade, FacadeInformation, MediatorNotifications} from "../../facade/BattleShipFacade";
import {AbstractView} from "../../../abstractClasses/AbstractView";
import * as puremvc from '../../../../../public/js/puremvc-typescript-multicore-1.1.js';
import {ShipViewMediator} from "../../mediator/ShipViewMediator";
import 'pixi.js';


/**
 *  Class that represents a single Ship
 */
export class ShipView extends AbstractView {

    public xPosition: number;
    public yPosition: number;
    public shipGraphics: PIXI.Graphics;

    /**
     * @param key
     * @param xPosition
     * @param yPosition
     * @param numberOfSquares
     */
    constructor(key: string, xPosition: number, yPosition: number, numberOfSquares: number) {
        super(key);
        this.xPosition = xPosition;
        this.yPosition = yPosition;

        this.shipGraphics = new PIXI.Graphics();
        this.shipGraphics.lineStyle(7, FacadeInformation.ShipBorderColor);
        this.shipGraphics.beginFill(FacadeInformation.ShipFillColor);
        for (let i: number = 0; i < numberOfSquares; i++) {
            this.shipGraphics.drawRect(this.xPosition + i * FacadeInformation.SquareWidth, this.yPosition,
                FacadeInformation.SquareWidth, FacadeInformation.SquareWidth);
        }
        this.shipGraphics.endFill();

        this.shipGraphics.interactive = true;
        this.shipGraphics.buttonMode = true;

        this.shipGraphics
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);

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

        function onDragMove(): void {
            if (this.dragging) {
                let newPosition = this.data.getLocalPosition(this.parent);
                this.x = newPosition.x;
                this.y = newPosition.y;

            }
        }


        function onDragEnd(): void {

            //Show the end position
            let newPosition = this.data.getLocalPosition(this.parent);


            /*console.log('End X Position : ' + newPosition.x);
            console.log('End Y Position : ' + newPosition.y);*/

            console.log(this.data.getLocalPosition(this.parent.parent));

            BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).sendNotification(MediatorNotifications.ShipsPlacement);

            this.alpha = 1;
            this.dragging = false;

            // set the interaction data to null
            this.data = null;

            this.destroy();
        }

        super.registerMediator(new ShipViewMediator(key, this));
        console.log('   # ShipView created');
    }

    /**
     * Initializing the Ship's view
     */
    public initializeView(): void {
        super.initializeView();
    }

    public getUIContainer(): PIXI.Container {
        return this.shipGraphics;
    }

    /**
     *
     * @param key
     * @param xPosition
     * @param yPosition
     * @param numberOfSquares
     */
    static getInstance(key: string, xPosition: number, yPosition: number, numberOfSquares: number): ShipView {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new ShipView(key, xPosition, yPosition, numberOfSquares);

        return puremvc.View.instanceMap[key] as ShipView;
    }
}