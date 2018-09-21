import {AbstractView} from "../../../abstractClasses/AbstractView";
import * as puremvc from '../../../../../public/js/puremvc-typescript-multicore-1.1.js';
/**
 * Has the responsibility to create a single square and inside it to put the coresponding letter
 */
export class RulerSquare extends AbstractView{


    /**
     *
     * @param key
     * @param xPosition
     * @param yPosition
     * @param squareWidth
     * @param borderColor
     * @param textColor
     * @param type
     * @param asciiCode
     */
    constructor(key:string,xPosition: number, yPosition: number, squareWidth: number, borderColor: number, textColor: number, type: string, asciiCode: number) {

        super(key);
        this.container = new PIXI.Container();

        let graphics = new PIXI.Graphics();
        graphics.lineStyle(8, borderColor);
        graphics.beginFill(0xffffff);
        graphics.drawRect(xPosition, yPosition, squareWidth, squareWidth);
        graphics.endFill();

        let text;
        if (type === 'LETTER') {
            text = new PIXI.Text(String.fromCharCode(asciiCode), {fill: textColor});
            text.anchor.set(0.5);
            text.position.set(xPosition + squareWidth / 2, yPosition + squareWidth / 2);
        }
        else if (type === 'NUMBER') {
            text=new PIXI.Text(asciiCode.toString(),{fill:textColor});
            text.anchor.set(0.5);
            text.position.set(xPosition + squareWidth / 2, yPosition + squareWidth / 2);
        }

        this.container.addChild(graphics, text);
    }

    static getInstance(key:string,xPosition: number, yPosition: number, squareWidth: number, borderColor: number, textColor: number, type: string, asciiCode: number): RulerSquare {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new RulerSquare(key,xPosition,yPosition,squareWidth,borderColor,textColor,type,asciiCode);

        return puremvc.View.instanceMap[key] as RulerSquare;
    }
}