import {AbstractView} from "../../../abstractClasses/AbstractView";
import {FacadeInformation} from "../../facade/BattleShipFacade";

/**
 * Class that creates the miss inside a Grid's square.
 */
export class MissView extends AbstractView {

    public graphics: PIXI.Graphics;

    /**
     *
     * @param key
     * @param squareXPosition
     * @param squareYPosition
     * @param squareWidth
     */
    constructor(key: string, squareXPosition: number, squareYPosition: number, squareWidth: number) {

        super(key);
        this.graphics = new PIXI.Graphics();
        this.graphics.lineStyle(8, FacadeInformation.MissColor);
        this.graphics.drawCircle(squareXPosition + squareWidth / 2, squareYPosition + squareWidth / 2, squareWidth / 3.9);
        this.addToContainer(this.graphics);

    }

    /**
     * Returns an instance of this class
     * @param key
     * @param squareXPosition
     * @param squareYPosition
     * @param squareWidth
     */
    static getInstance(key: string, squareXPosition?: number, squareYPosition?: number, squareWidth?: number): MissView {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new MissView(key, squareXPosition, squareYPosition, squareWidth);

        return puremvc.View.instanceMap[key] as MissView;
    }


}