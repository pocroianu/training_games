import {AbstractController} from "../../abstractClasses/AbstractController";
import {SquareController} from "./SquareController";
import {BattleShipFacade, FacadeInformation, MediatorNotifications} from "../facade/BattleShipFacade";
import {PlayerShipsController} from "./PlayerShipsController";
import {BattleShipController} from "./BattleShipController";


/**
 * Controls the grid's functionality.
 */
export class GridController extends AbstractController {

    public static SquareControllerKey = 'SquareControllerGG';
    public numberOfSquaresHorizontally: number;
    public numberOfSquaresVertically: number;
    public GridSquares: SquareController[][] = [];
    private readonly _player: string;

    /**
     *
     * @param key
     * @param numberOfSquaresVertically
     * @param numberOfSquaresHorizontally
     * @param player
     */
    constructor(key: string, numberOfSquaresVertically?: number, numberOfSquaresHorizontally?: number, player?: string) {

        super(key);
        this.numberOfSquaresHorizontally = numberOfSquaresHorizontally;
        this.numberOfSquaresVertically = numberOfSquaresVertically;
        this._player = player;
        this.createGridSquares();
    }

    /**
     *
     * @param key
     * @param numberOfSquaresHorizontally
     * @param numberOfSquaresVertically
     * @param player
     */
    static getInstance(key: string, numberOfSquaresVertically?: number, numberOfSquaresHorizontally?: number, player?: string): GridController {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new GridController(key, numberOfSquaresHorizontally, numberOfSquaresVertically, player);

        return puremvc.Controller.instanceMap[key] as GridController;
    }

    /**
     * Creates the Grid.
     */
    public createGridSquares(): void {
        for (let i: number = 0; i < this.numberOfSquaresVertically; i++) {
            this.GridSquares[i] = [];
            for (let j: number = 0; j < this.numberOfSquaresHorizontally; j++) {
                this.GridSquares[i][j] = SquareController.getInstance(GridController.SquareControllerKey + '' + i + j + this.multitonKey);
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
            playerShips = PlayerShipsController.getInstance(BattleShipController.PlayerOneShips);
        }
        if (this._player == FacadeInformation.PlayerTwo) {
            playerShips = PlayerShipsController.getInstance(BattleShipController.PlayerTwoShips);
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
                        this.getPlayerShipsController().addShip(i, j, numberOfSquares, shipType);
                    }
                    break;
                case FacadeInformation.ShipVerticalType:
                    for (let x: number = i; x < i + numberOfSquares; x++) {
                        this.GridSquares[x][j].shipOnSquare();
                        this.getPlayerShipsController().addShip(i, j, numberOfSquares, shipType);
                    }
                    break;
            }
        }
    }
}
