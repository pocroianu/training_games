import {AbstractController} from "../../abstractClasses/AbstractController";
import 'pixi.js'

/**
 * The BattleShip controller.
 */
export class BattleShipController extends AbstractController {

    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);

        // super.registerCommand(CommandNotifications.ShipsPlacement,ShipPlaceCommand);
        console.log('BattleShipController created');
    }

    /**
     *
     * @param key
     */
    static getInstance(key: string): BattleShipController {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new BattleShipController(key);

        return puremvc.Controller.instanceMap[key] as BattleShipController;
    }
}