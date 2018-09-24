import {AbstractView} from "../../../abstractClasses/AbstractView";
import * as puremvc from '../../../../../public/js/puremvc-typescript-multicore-1.1.js';
import {ButtonViewMediator} from "../../mediator/ButtonViewMediator";
import {BattleShipFacade, CommandNotifications, FacadeInformation} from "../../facade/BattleShipFacade";

/**
 * A button class
 */
export class ButtonView extends AbstractView {

    /**The positions and the scale of the button */
    public xPosition: number;
    public yPosition: number;
    public scale: number;

    /**The sprite that contains the button's png image */
    public sprite: PIXI.Sprite;


    /**
     *
     * @param key
     * @param xPosition
     * @param yPosition
     * @param scale
     */
    constructor(key: string, xPosition: number, yPosition: number, scale: number) {

        super(key);
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.scale = scale;

        this.sprite = PIXI.Sprite.fromImage('images/NextPhaseButton.png');
        this.sprite.scale.set(this.scale);
        this.container.addChild(this.sprite);

        this.initializeButtonInteraction();

        super.registerMediator(new ButtonViewMediator(key, this));

        console.log('   # ButtonView created');
    }

    /**
     * Initializing the Button's view
     */
    public initializeView(): void {
        super.initializeView();
    }

    public getUIContainer(): PIXI.Container {
        this.container.pivot.x = this.container.width / 2;
        this.container.pivot.y = this.container.height / 2;
        return super.getUIContainer();
    }


    private initializeButtonInteraction() {
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;

        this.sprite.on('pointertap', this.handleMouseDown);
    }

    private handleMouseDown(): void {

        BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).sendNotification(CommandNotifications.ButtonPress);
    }

    static getInstance(key: string, xPosition: number, yPosition: number, scale: number): ButtonView {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new ButtonView(key, xPosition, yPosition, scale);

        return puremvc.View.instanceMap[key] as ButtonView;
    }
}