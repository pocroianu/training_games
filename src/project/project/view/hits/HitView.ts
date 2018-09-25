import {AbstractView} from "../../../abstractClasses/AbstractView";
import {FacadeInformation} from "../../facade/BattleShipFacade";

/**
 *  The X inside a square.
 */
export class HitView extends AbstractView {

    public graphics : PIXI.Graphics;

    /**
     *
     * @param key
     * @param squareXPosition
     * @param squareYPosition
     * @param squareWidth
     */
    constructor(key:string, squareXPosition: number, squareYPosition: number, squareWidth: number) {

        super(key);

        this.graphics=new PIXI.Graphics();
        this.graphics.lineStyle(10,FacadeInformation.HitColor);

        this.graphics.moveTo(squareXPosition + squareWidth/3, squareYPosition + squareWidth - squareWidth/3);
        this.graphics.lineTo(squareXPosition + squareWidth - squareWidth/3, squareYPosition + squareWidth/3);

        this.graphics.moveTo(squareXPosition + squareWidth/3, squareYPosition + squareWidth/3);
        this.graphics.lineTo(squareXPosition + squareWidth - squareWidth/3, squareYPosition + squareWidth - squareWidth/3);
        this.addToContainer(this.graphics);

    }

    /**
     * Get an instance of this class
     * @param key
     * @param squareXPosition
     * @param squareYPosition
     * @param squareWidth
     */
    static getInstance(key: string, squareXPosition?: number, squareYPosition?: number, squareWidth?: number): HitView {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new HitView(key, squareXPosition, squareYPosition, squareWidth);

        return puremvc.View.instanceMap[key] as HitView;
    }
}