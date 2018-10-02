import {AbstractView} from "../../../abstractClasses/AbstractView";

/**
 * Class that has the responsibility to show text notifications on the screen
 */
export class TextView extends AbstractView {

    /**Here we save the text string */
    private readonly text: PIXI.Text;

    /**
     * @param key
     * @param text
     * @param fontSize
     * @param color
     */
    constructor(key: string, text: string, fontSize: number, color: number) {
        super(key);

        this.text = new PIXI.Text(text, {fontSize: fontSize, fill: color});
        this.text.anchor.set(0.5, 0.5);

    }

    /**
     * Initializing the Text's view
     */
    public initializeView(): void {
        super.initializeView();
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
     * @param key
     * @param text
     * @param fontSize
     * @param color
     */
    static getInstance(key: string, text?: string, fontSize?: number, color?: number): TextView {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new TextView(key, text, fontSize, color);

        return puremvc.View.instanceMap[key] as TextView;
    }

    /**
     *
     */
    public getUIContainer(): PIXI.Container {
        /*this._container.pivot.x = this._container.width / 2;
        this._container.pivot.y = this._container.height / 2;*/
        return this.text;
    }
}