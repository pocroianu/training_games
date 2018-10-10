import {SquareController} from "./SquareController";
import {BattleShipFacade, FacadeInformation, MediatorNotifications} from "../facade/BattleShipFacade";
import {PlayerShipsController} from "./PlayerShipsController";


/**
 * Controls the grid's functionality.
 */
export class GridController {

    public numberOfSquaresHorizontally: number;
    public numberOfSquaresVertically: number;
    public GridSquares: SquareController[][] = [];
    private readonly _player: string;


    /**
     *
     * @param numberOfSquaresVertically
     * @param numberOfSquaresHorizontally
     * @param player
     */
    constructor(numberOfSquaresVertically?: number, numberOfSquaresHorizontally?: number, player?: string) {
        this.numberOfSquaresHorizontally = numberOfSquaresHorizontally;
        this.numberOfSquaresVertically = numberOfSquaresVertically;
        this._player = player;
        this.createGridSquares();
    }

    /**
     * Creates the Grid.
     */
    public createGridSquares(): void {
        for (let i: number = 0; i < this.numberOfSquaresVertically; i++) {
            this.GridSquares[i] = [];
            for (let j: number = 0; j < this.numberOfSquaresHorizontally; j++) {
                this.GridSquares[i][j] = new SquareController();
            }
        }
    }

    /**
     *  Print the grid on the screen.
     */
    public logGridSquares(): void {

        for (let i: number = 0; i < this.numberOfSquaresVertically; i++) {
            let printArray: Array<string> = [];
            for (let j: number = 0; j < this.numberOfSquaresHorizontally; j++) {
                printArray.push(this.GridSquares[i][j].printSquareState());
            }
            console.log(printArray);
        }
    }


    /**
     *
     */
    public getPlayerShipsController(): PlayerShipsController {
        let playerShips: PlayerShipsController;
        if (this._player == FacadeInformation.PlayerOne) {
            //    TODO finish this
        }
        if (this._player == FacadeInformation.PlayerTwo) {
            //    TODO finish this
        }
        return playerShips;
    }

    /**
     * Updates the grid with the hits or the misses.
     * @param position
     * @param player
     */
    public checkIfPlayerHasHitAShip(position: Array<number>, player: string): void {
        let facade: BattleShipFacade = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
        /**
         * Updates the element in the 2 dimensional array with a hit or a miss.
         */
        if (player == this._player) {
            if (this.GridSquares[position[0]][position[1]].checkIfItIsAHit()) {
                this.GridSquares[position[0]][position[1]].squareHit();
                //TODO check if a ship was destroyed
                facade.sendNotification(MediatorNotifications.PlayerHitAShip, position, this._player);
            }
            else {
                this.GridSquares[position[0]][position[1]].squareMiss();
                facade.sendNotification(MediatorNotifications.PlayerMissed, position, this._player);
            }
            this.logGridSquares();
        }
    }

    /**
     *
     * @param position
     * @param player
     * @param shipType
     */
    public updateShipsPosition(position: Array<number>, player: string, shipType: string): void {
        if (player === this._player) {
            let i: number = position[0], j: number = position[1], numberOfSquares: number = position[2];
            switch (shipType) {
                case FacadeInformation.ShipHorizontalType:
                    for (let x: number = j; x < j + numberOfSquares; x++) {
                        this.GridSquares[i][x].shipOnSquare();
                        // this.getPlayerShipsController().addShip(i, j, numberOfSquares, shipType);
                    }
                    break;
                case FacadeInformation.ShipVerticalType:
                    for (let x: number = i; x < i + numberOfSquares; x++) {
                        this.GridSquares[x][j].shipOnSquare();
                        // this.getPlayerShipsController().addShip(i, j, numberOfSquares, shipType);
                    }
                    break;
            }
        }
    }
}
