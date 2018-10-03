import {AbstractController} from "../../abstractClasses/AbstractController";
import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";
import {BattleShipController} from "./BattleShipController";


/**
 * The Player controller.
 */
export class PlayerController extends AbstractController {

    private _shipsPlaced: number = 0;
    private _player: string;

    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);
        this._player = key;
        console.log('PlayerController created');
    }

    /**
     *
     * @param key
     */
    static getInstance(key: string): PlayerController {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new PlayerController(key);

        return puremvc.Controller.instanceMap[key] as PlayerController;
    }

    /**
     * Updates the number of ships placed for a Player.
     */
    public updateNumberOfShipsPlaced(): void {
        if (this._shipsPlaced <= FacadeInformation.MaximumNumberOfShipsOnAGrid) {
            this._shipsPlaced++;
            console.log('Ships placed in PlayerController' + this._shipsPlaced);
        }
    }

    public shipsPlacementFinished(): void {
        let facade: BattleShipFacade = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
        facade.sendNotification(BattleShipController.PlayerOneFinishedPlacingTheShips, '');
    }
}