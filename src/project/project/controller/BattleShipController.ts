import {AbstractController} from "../../abstractClasses/AbstractController";
import 'pixi.js'
import {GridController} from "./GridController";
import {ControllerNames, FacadeInformation} from "../facade/BattleShipFacade";

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

        GridController.getInstance(ControllerNames.GridControllerName, FacadeInformation.NumberOfSquaresVertically, FacadeInformation.NumberOfSquaresHorizontally);
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