import {AbstractSimpleView} from "../../../abstractClasses/AbstractSimpleView";
import {FacadeInformation} from "../../facade/BattleShipFacade";

/**
 *  The X inside a square.
 */
export class HitView extends AbstractSimpleView {

    public graphics: PIXI.Graphics;

    /**
     *
     * @param squareXPosition
     * @param squareYPosition
     * @param squareWidth
     */
    constructor(squareXPosition: number, squareYPosition: number, squareWidth: number) {

        super();
        this.graphics = new PIXI.Graphics();
        this.graphics.lineStyle(10, FacadeInformation.HitColor);
        this.graphics.moveTo(squareXPosition + squareWidth / 3, squareYPosition + squareWidth - squareWidth / 3);
        this.graphics.lineTo(squareXPosition + squareWidth - squareWidth / 3, squareYPosition + squareWidth / 3);
        this.graphics.moveTo(squareXPosition + squareWidth / 3, squareYPosition + squareWidth / 3);
        this.graphics.lineTo(squareXPosition + squareWidth - squareWidth / 3, squareYPosition + squareWidth - squareWidth / 3);
        this.addToContainer(this.graphics);
    }
}