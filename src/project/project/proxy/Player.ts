import {FacadeInformation} from "../facade/BattleShipFacade";

/**
 *
 */
export class Player {

    private readonly _player: string;
    private _shipsPlaced: number = 0;
    private _shipsPlacementCompleted: boolean = false;

    /**
     *
     * @param player
     */
    constructor(player: string) {
        this._player = player;
    }

    /**
     * Updates the number of ships placed for this Player class.
     */
    public updateNumberOfShipsPlaced(): void {

        if (this._shipsPlaced <= FacadeInformation.MaximumNumberOfShipsOnAGrid) {
            this._shipsPlaced++;
        }
        if (this._shipsPlaced === FacadeInformation.MaximumNumberOfShipsOnAGrid) {
            this._shipsPlacementCompleted = true;
        }
    }

    /**
     * Returns true if the player finished placing the ships.
     */
    public shipsPlacementFinished(): boolean {
        if (this._shipsPlacementCompleted == true) {
            console.log('Player' + this._player + ' finished placing the ships');
        }
        return this._shipsPlacementCompleted;
    }
}