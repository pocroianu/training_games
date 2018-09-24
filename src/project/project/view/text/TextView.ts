import {AbstractView} from "../../../abstractClasses/AbstractView";
import * as puremvc from '../../../../../public/js/puremvc-typescript-multicore-1.1.js';
import {TextViewMediator} from "../../mediator/TextViewMediator";

/**
 * Class that has the responsibility to show text notifications on the screen
 */
export class TextView extends AbstractView {

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
        this.text.anchor.set(0, 0);
        this.container.addChild(this.text);

        super.registerMediator(new TextViewMediator(key,this));
    }

    /**
     * Initializing the Text's view
     */
    public initializeView(): void {
        super.initializeView();
    }

    public getUIContainer(): PIXI.Container {
        this.container.pivot.x=this.container.width/2;
        this.container.pivot.y=this.container.height/2;
        return super.getUIContainer();
    }

    /**
     *
     * @param key
     * @param text
     * @param fontSize
     * @param color
     */
    static getInstance(key: string, text: string, fontSize: number, color: number): TextView {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new TextView(key, text, fontSize, color);

        return puremvc.View.instanceMap[key] as TextView;
    }
}