import * as puremvc from '../../../../public/js/puremvc-typescript-multicore-1.1.js';
import {SquareClickCommand} from "../command/SquareClickCommand";
import {CommandNotifications} from '../facade/BattleShipFacade'
import {AbstractController} from "../../abstractClasses/AbstractController";
import 'pixi.js'
import {ButtonPressCommand} from "../command/ButtonPressCommand";
import {ShipPlaceCommand} from "../command/ShipPlaceCommand";

export class BattleShipController extends AbstractController {
    constructor(key: string) {
        super(key);

        super.registerCommand(CommandNotifications.ClickHandle, SquareClickCommand);
        super.registerCommand(CommandNotifications.ButtonPress, ButtonPressCommand);
        super.registerCommand(CommandNotifications.ShipsPlacement,ShipPlaceCommand);
        console.log('BattleShipController created');
    }

    static getInstance(key: string): BattleShipController {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new BattleShipController(key);

        return puremvc.Controller.instanceMap[key] as BattleShipController;
    }
}