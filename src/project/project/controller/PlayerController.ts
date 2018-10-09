import {FacadeInformation} from "../facade/BattleShipFacade";

/**
 * The Player controller.
 */
export class PlayerController {

    private _shipsPlaced: number = 0;
    private readonly _player: string;
    private _shipPlacementFinished: boolean = false;

    /**
     *
     * @param player
     */
    constructor(player: string) {

        this._player = player;
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
    public updateNumberOfShipsPlaced(player: string): void {
        if (player == this._player) {
            if (this._shipsPlaced <= FacadeInformation.MaximumNumberOfShipsOnAGrid) {
                this._shipsPlaced++;
            }
            if (this._shipsPlaced === FacadeInformation.MaximumNumberOfShipsOnAGrid) {
                this._shipPlacementFinished = true;
            }
        }
    }

    /**
     *
     */
    public shipsPlacementFinished(): boolean {
        if (this._shipPlacementFinished == true) {
            console.log('Player' + this._player + ' finished placing the ships');
        }
        return this._shipPlacementFinished;
    }
}