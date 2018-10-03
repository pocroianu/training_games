import {AbstractController} from "../../abstractClasses/AbstractController";
import {GridController} from "./GridController";
import {FacadeInformation} from "../facade/BattleShipFacade";
import {PlayerController} from "./PlayerController";

/**
 * The BattleShip controller.
 */
export class BattleShipController extends AbstractController {

    public static GridPlayerOneControllerName: string = 'G1';
    public static GridPlayerTwoControllerName: string = 'G2';
    public static PlayerOneControllerName: string = 'P1';
    public static PlayerTwoControllerName: string = 'P2';

    public static PlayerOneFinishedPlacingTheShips = 'Player1FBTS';
    public static PlayerTwoFinishedPlacingTheShips = 'Player2FBTS';

    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);

        GridController.getInstance(BattleShipController.GridPlayerOneControllerName, FacadeInformation.NumberOfSquaresVertically, FacadeInformation.NumberOfSquaresHorizontally);
        GridController.getInstance(BattleShipController.GridPlayerTwoControllerName, FacadeInformation.NumberOfSquaresVertically, FacadeInformation.NumberOfSquaresHorizontally);

        PlayerController.getInstance(BattleShipController.PlayerOneControllerName);
        PlayerController.getInstance(BattleShipController.PlayerTwoControllerName);
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