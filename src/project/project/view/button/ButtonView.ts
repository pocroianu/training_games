import {AbstractSimpleView} from "../../../abstractClasses/AbstractSimpleView";

/**
 * A button class.
 */
export class ButtonView extends AbstractSimpleView {

    /**The positions and the scale of the button */
    public xPosition: number;
    public yPosition: number;
    public scale: number;

    /**The sprite that contains the button's png image */
    public sprite: PIXI.Sprite;


    /**
     *
     * @param xPosition
     * @param yPosition
     * @param scale
     */
    constructor(xPosition: number, yPosition: number, scale: number) {
        super();
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.scale = scale;

        this.sprite = PIXI.Sprite.fromImage('images/NextPhaseButton.png');
        this.sprite.scale.set(this.scale);
        this._container.addChild(this.sprite);

        this.initializeButtonInteraction();

        // super.registerMediator(new ButtonViewMediator(key, this));

        console.log('   # ButtonView created');
    }


    /**
     * Initializing the Button's view.
     */
    public initializeView(): void {
        super.initializeView();
    }

    /**
     * Returns this button's container which will contain the button's texture.
     */
    public getUIContainer(): PIXI.Container {
        this._container.pivot.x = this._container.width / 2;
        this._container.pivot.y = this._container.height / 2;
        return super.getUIContainer();
    }


    /**
     * Makes the button interactive with the player.
     */
    private initializeButtonInteraction() {
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
    }
}