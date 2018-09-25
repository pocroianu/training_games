import {ViewMediator} from "../../mediator/ViewMediator";
import {AbstractView} from "../../../abstractClasses/AbstractView";
import 'pixi.js'

/**
 * The main BattleShip view class
 */
export class BattleShipView extends AbstractView {


    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);
        this.multitonKey = key;

        super.registerMediator(new ViewMediator(key, this));

    }

    /**
     * Initializing the BattleShip's view
     */
    public initializeView(): void {
        super.initializeView();
        console.log('BattleShipView created');
    }

    /**
     *
     * @param key
     */
    static getInstance(key: string): AbstractView {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new BattleShipView(key);

        return puremvc.View.instanceMap[key] as AbstractView;
    }
}