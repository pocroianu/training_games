import {RulerSquare} from "./RulerSquare";
import {AbstractView} from "../../../abstractClasses/AbstractView";
import * as puremvc from '../../../../../public/js/puremvc-typescript-multicore-1.1.js';

/**
 * Class that creates the horizontal and vertical ruler around the grid
 */
export class RulerView extends AbstractView {

    public name:string='Ruler';

    public xPosition: number;
    public yPosition: number;
    public numberOfSquaresVertically: number;
    public numberOfSquaresHorizontally: number;
    public squareWidth: number;
    public borderColor: number;
    public textColor: number;

    private RulerType: Array<string> = ['NUMBER',
        'LETTER'];

    constructor(key: string, xPosition: number, yPosition: number, numberOfSquaresVertically: number,
                numberOfSquaresHorizontally: number, squareWidth: number, borderColor: number, textColor: number) {

        super(key);
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.numberOfSquaresVertically = numberOfSquaresVertically;
        this.numberOfSquaresHorizontally = numberOfSquaresHorizontally;
        this.squareWidth = squareWidth;
        this.borderColor = borderColor;
        this.textColor = textColor;

        this.createRulerVertically();
        this.createRulerHorizontally();
    }

    /**
     * Initializing the Ruler's view
     */
    public initializeView(): void {
        super.initializeView();
        console.log('   # RulerView created');
    }

    /**
     * Creates the horizontal ruler which contains numbers and begins with 0
     */
    private createRulerHorizontally(): void {
        for (let i: number = 0; i < this.numberOfSquaresHorizontally; i++) {
            let rulerSquare: RulerSquare = RulerSquare.getInstance(700*Math.random()+ i +'', this.xPosition + i * this.squareWidth,
                this.yPosition + this.numberOfSquaresVertically * this.squareWidth,
                this.squareWidth, this.borderColor, this.textColor, this.RulerType[0], i + 1);
            this.container.addChild(rulerSquare.getUIContainer());
        }
    }

    /**
     * Creates the vertical ruler which contains letters and begins with A
     */
    private createRulerVertically(): void {

        for (let i: number = 0; i < this.numberOfSquaresVertically; i++) {
            let rulerSquare: RulerSquare = RulerSquare.getInstance(300*Math.random() + i+'', this.xPosition - this.squareWidth, this.yPosition + i * this.squareWidth,
                this.squareWidth, this.borderColor, this.textColor, this.RulerType[1], 65 + i);
            this.container.addChild(rulerSquare.getUIContainer());
        }
    }

    /**
     *
     * @param key
     * @param xPosition
     * @param yPosition
     * @param numberOfSquaresVertically
     * @param numberOfSquaresHorizontally
     * @param squareWidth
     * @param borderColor
     * @param textColor
     */
    static getInstance(key: string, xPosition: number, yPosition: number, numberOfSquaresVertically: number,
                       numberOfSquaresHorizontally: number, squareWidth: number, borderColor: number, textColor: number): RulerView {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new RulerView(key, xPosition, yPosition, numberOfSquaresVertically, numberOfSquaresHorizontally,
                squareWidth, borderColor, textColor);

        return puremvc.View.instanceMap[key] as RulerView;
    }
}