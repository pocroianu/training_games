import {AbstractController} from "../../abstractClasses/AbstractController";
import {ShipController} from "./ShipController";
import {BattleShipController} from "./BattleShipController";

/**
 *
 */
export class PlayerShipsController extends AbstractController {

    /**Store the ships's references for later use. */
        // public ships: Array<string> = [BattleShipController.];
    public currentNumberOfShips: number = 0;

    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);
    }

    /**
     *
     * @param key
     */
    static getInstance(key: string): PlayerShipsController {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new PlayerShipsController(key);

        return puremvc.Controller.instanceMap[key] as PlayerShipsController;
    }

    /**
     *
     * @param i
     * @param j
     * @param numberOfSquares
     * @param shipType
     */
    public addShip(i: number, j: number, numberOfSquares: number, shipType: string): void {

        ShipController.getInstance(BattleShipController.ShipController, i, j, numberOfSquares, shipType);
        // TODO IMPLEMENT THIS WITH NOTIFICATIONS
    }
}