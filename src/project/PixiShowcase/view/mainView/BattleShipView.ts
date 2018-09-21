import * as puremvc from '../../../../../public/js/puremvc-typescript-multicore-1.1.js';
import {ViewMediator} from "../../mediator/ViewMediator";
import {AbstractView} from "../../../abstractClasses/AbstractView";
import 'pixi.js'
import {Application} from "pixi.js";

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


    static getInstance(key: string): BattleShipView {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new BattleShipView(key);

        return puremvc.View.instanceMap[key] as BattleShipView;
    }
}