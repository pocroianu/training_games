import {SquareClickCommand} from "../command/SquareClickCommand";
import {CommandNotifications} from '../facade/BattleShipFacade'
import {AbstractController} from "../../abstractClasses/AbstractController";
import 'pixi.js'
import {ButtonPressCommand} from "../command/ButtonPressCommand";

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

        super.registerCommand(CommandNotifications.ClickHandle, SquareClickCommand);
        super.registerCommand(CommandNotifications.ButtonPress, ButtonPressCommand);
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