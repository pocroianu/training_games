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
    public static GamePlayControllerName: string = 'GamePlayController';


    public static PlayerFinishedPlacingTheShipsCommand: string = 'PlayerFBTS';
    public static StartGamePlayCommand: string = 'StartGamePlay';
    public static HideTheShipCommand: string = 'HideTheShipCommand';

    public static HitText: string = 'Hit';
    public static MissText: string = 'Miss';
    public static StateText: string = 'Non';
    public static ShipOnSquare: string = 'S';

    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);

        GridController.getInstance(BattleShipController.GridPlayerOneControllerName,
            FacadeInformation.NumberOfSquaresVertically, FacadeInformation.NumberOfSquaresHorizontally, FacadeInformation.PlayerOne);
        GridController.getInstance(BattleShipController.GridPlayerTwoControllerName,
            FacadeInformation.NumberOfSquaresVertically, FacadeInformation.NumberOfSquaresHorizontally, FacadeInformation.PlayerTwo);

        PlayerController.getInstance(BattleShipController.PlayerOneControllerName);
        PlayerController.getInstance(BattleShipController.PlayerTwoControllerName);
        console.log('BattleShipController created');
    }

    public checkIfBothPlayersFinishedPlacingTheShips(): boolean {
        if (PlayerController.getInstance(BattleShipController.PlayerOneControllerName).shipsPlacementFinished() === true &&
            PlayerController.getInstance(BattleShipController.PlayerTwoControllerName).shipsPlacementFinished() === true) {
            console.log('Both Players finished placing the ships');
            return true;
        }
        return false;
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