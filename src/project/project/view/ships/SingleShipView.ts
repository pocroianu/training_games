import {BattleShipFacade, FacadeInformation, MediatorNotifications} from "../../facade/BattleShipFacade";
import {AbstractSimpleView} from "../../../abstractClasses/AbstractSimpleView";
import 'pixi.js';
import {ShipGraphics} from "./ShipGraphics";


/**
 *  Class that represents a single Ship.
 */
export class SingleShipView extends AbstractSimpleView {

    public xPosition: number;
    public yPosition: number;
    public shipGraphics: PIXI.Graphics;
    public name: string;
    public numberOfSquares: number;

    /**
     * @param xPosition
     * @param yPosition
     * @param numberOfSquares
     * @param player
     * @param type
     */
    constructor(xPosition: number, yPosition: number, numberOfSquares: number, player: string, type: string) {
        super();
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.shipGraphics = new ShipGraphics(player);
        this.numberOfSquares = numberOfSquares;
        this.verifyPlayer(player);
        this.verifyShipType(type);
        this.shipGraphics.endFill();
        this.shipGraphics.interactive = true;
        this.shipGraphics.buttonMode = true;
        this.makeTheShipInteractive();
        console.log('   # SingleShipView created');
    }

    /**
     * Getter for the SingleShipView's Container.
     */
    public getUIContainer(): PIXI.Container {
        return this.shipGraphics;
    }

    /**
     * Checks if it is a horizontal or a vertical ship.
     * If it is either of these types,it creates the ship.
     * @param type
     */
    private verifyShipType(type: string) {
        switch (type) {
            case FacadeInformation.ShipHorizontalType:
                for (let i: number = 0; i < this.numberOfSquares; i++) {

                    this.shipGraphics.drawRect(this.xPosition + i * FacadeInformation.SquareWidth, this.yPosition,
                        FacadeInformation.SquareWidth - 3, FacadeInformation.SquareWidth - 3,);
                }
                break;
            case FacadeInformation.ShipVerticalType:
                for (let i: number = 0; i < this.numberOfSquares; i++) {

                    this.shipGraphics.drawRect(this.xPosition, this.yPosition + i * FacadeInformation.SquareWidth,
                        FacadeInformation.SquareWidth - 3, FacadeInformation.SquareWidth - 3,);
                }
                break;
        }
    }

    /**
     * Changes the ship's colors according to the player.
     * @param player
     */
    private verifyPlayer(player: string) {
        if (player === FacadeInformation.PlayerOne) {
            this.shipGraphics.lineStyle(6, FacadeInformation.PlayerOneShipBorderColor);
            this.shipGraphics.beginFill(FacadeInformation.PlayerOneShipFillColor);
        }
        else if (player === FacadeInformation.PlayerTwo) {
            this.shipGraphics.lineStyle(6, FacadeInformation.PlayerTwoShipBorderColor);
            this.shipGraphics.beginFill(FacadeInformation.PlayerTwoShipFillColor);
        }
    }

    /**
     * Adds interaction to the ship.
     * Makes the ship draggable.
     */
    private makeTheShipInteractive() {
        this.shipGraphics
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);

        function onDragStart(event): void { //Called when the player starts dragging the ship.
            let position: any;
            this.data = event.data;
            position = this.data.getLocalPosition(this.parent);
            this.pivot.set(position.x, position.y);
            this.position.set(this.data.x, this.data.y);
            this.dragging = true;
            this.mousedown = false;
        }

        function onDragEnd(): void { //Called when the player doesn't drag the ship anymore.
            let shipType: string;
            if (this.width > this.height) {
                shipType = FacadeInformation.ShipHorizontalType;
            }
            else if (this.width <= this.height) {
                shipType = FacadeInformation.ShipVerticalType;
            }
            BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey)
                .sendNotification(MediatorNotifications.ShipsPlacement, [this.getBounds().x, this.getBounds().y, this.width, this.height, this.player], shipType);
            this.alpha = 1;
            this.dragging = false;
            this.data = null;
            this.destroy();
        }

        function onDragMove(): void { //Called when the player is dragging the ship.
            let newPosition: any;
            if (this.dragging) {
                this.alpha = 0.5;
                newPosition = this.data.getLocalPosition(this.parent);
                this.x = newPosition.x;
                this.y = newPosition.y;
            }
        }
    }
}