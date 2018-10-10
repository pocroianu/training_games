import {AbstractController} from "../../abstractClasses/AbstractController";
import {GridController} from "./GridController";
import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";
import {PlayerController} from "./PlayerController";
import {GamePlayController} from "./GamePlayController";
import {PlayerProxy} from "../proxy/PlayerProxy";

/**
 * The BattleShip controller.
 */
export class ControllerManager extends AbstractController {


    public static PlayerOneControllerName: string = 'P1';
    public static PlayerTwoControllerName: string = 'P2';

    public static ShipPositionInfoCommand: string = 'ShipPositionCommand';
    public static PlayerFinishedPlacingTheShipsCommand: string = 'PlayerFBTS';
    public static StartGamePlayCommand: string = 'StartGamePlay';
    public static HideTheShipCommand: string = 'HideTheShipCommand';

    public static HitText: string = 'Hit';
    public static MissText: string = 'Miss';
    public static DefaultStateText: string = 'Non';
    public static ShipOnSquare: string = 'Shp';
    public static ShipPartIsHit: number = 1;
    public static ShipPartIsNotHit: number = 0;
    public static ShipController: string = 'ShipController';
    public static PlayerOneShips: string = 'PlayerOneShips';
    public static PlayerTwoShips: string = 'PlayerTwoShips';


    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);

        let facade: BattleShipFacade = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
        facade.retrieveProxy(BattleShipFacade.GridProxyName)
            .setData([new GridController(FacadeInformation.NumberOfSquaresVertically, FacadeInformation.NumberOfSquaresHorizontally, FacadeInformation.PlayerOne),
                new GridController(FacadeInformation.NumberOfSquaresVertically, FacadeInformation.NumberOfSquaresHorizontally, FacadeInformation.PlayerTwo)]);
        facade.retrieveProxy(BattleShipFacade.PlayerProxyName)
            .setData([new PlayerController(FacadeInformation.PlayerOne),
                new PlayerController(FacadeInformation.PlayerTwo)]);
        facade.retrieveProxy(BattleShipFacade.GamePlayProxyName).setData(new GamePlayController());

        console.log('ControllerManager created');
    }

    /**
     *
     * @param key
     */
    static getInstance(key: string): ControllerManager {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new ControllerManager(key);

        return puremvc.Controller.instanceMap[key] as ControllerManager;
    }

    /**
     *
     */
    public checkIfBothPlayersFinishedPlacingTheShips(): boolean {
        let facade: BattleShipFacade = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
        let playerProxy: PlayerProxy = facade.retrieveProxy(BattleShipFacade.PlayerProxyName);

        if (playerProxy.getData()[0].shipsPlacementFinished() === true && playerProxy.getData()[1].shipsPlacementFinished() === true) {
            console.log('Both Players finished placing the ships');
            return true;
        }
        return false;
    }
}