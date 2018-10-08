import {AbstractSimpleView} from "../../../abstractClasses/AbstractSimpleView";
import {FacadeInformation} from "../../facade/BattleShipFacade";

/**
 * Class that creates the miss inside a Grid's square.
 */
export class MissView extends AbstractSimpleView {

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
        this.graphics.lineStyle(8, FacadeInformation.MissColor);
        this.graphics.drawCircle(squareXPosition + squareWidth / 2, squareYPosition + squareWidth / 2, squareWidth / 3.9);
        this.addToContainer(this.graphics);

    }
}