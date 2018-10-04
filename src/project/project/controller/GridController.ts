import {AbstractController} from "../../abstractClasses/AbstractController";
import {SquareController} from "./SquareController";


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
     * Creates the Grid
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
            let printArray: Array<any> = [];
            for (let j: number = 0; j < this.numberOfSquaresHorizontally; j++) {
                printArray.push(this.GridSquares[i][j].printSquareState());
            }
            console.log(printArray);
        }
    }

    /**
     * Updates the grid with the hits or the misses.
     * @param position
     * @param player
     */
    public updatePosition(position: Array<number>, player: string): void {

        /**
         * Updates the element in the 2 dimensional array with a hit or a miss.
         */
        if (player == this._player) {
            this.GridSquares[position[0]][position[1]].squareHit();
            this.logGridSquares();
        }
    }
}
