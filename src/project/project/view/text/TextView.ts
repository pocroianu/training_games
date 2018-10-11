import {AbstractSimpleView} from "../../../abstractClasses/AbstractSimpleView";
import {ViewManager} from "../mainView/ViewManager";

/**
 * Class that has the responsibility to show text notifications on the screen
 */
export class TextView extends AbstractSimpleView {

    /**Here we save the text string */
    private text: PIXI.Text;

    /**

     * @param text
     * @param fontSize
     * @param color
     */
    constructor(text: string, fontSize: number, color: number) {

        super();
        this.text = new PIXI.Text(text, {fontSize: fontSize, fill: color});
        this.text.anchor.set(0.5, 0.5);
    }

    /**
     *
     * @param text
     */
    public addText(text: string) {
        this.text.text += '\n' + text;
    }

    /**
     *
     */
    public showGamePlayStateText(): void {
        this.text.text = ViewManager.GamePlayStateText;
    }

    /**
     *
     */
    public getText(): PIXI.Text {
        return this.text;
    }
}