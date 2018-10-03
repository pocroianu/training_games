import {AbstractController} from "../../abstractClasses/AbstractController";


/**
 * Controls the grid's functionality.
 */
export class GridController extends AbstractController {

    public GridSquares: number[][] = [];
    public numberOfSquaresHorizontally: number;
    public numberOfSquaresVertically: number;

    /**
     *
     * @param key
     * @param numberOfSquaresVertically
     * @param numberOfSquaresHorizontally
     */
    constructor(key: string, numberOfSquaresVertically?: number, numberOfSquaresHorizontally?: number) {

        super(key);
        this.numberOfSquaresHorizontally = numberOfSquaresHorizontally;
        this.numberOfSquaresVertically = numberOfSquaresVertically;
        this.createGridSquares();
    }

    /**
     *
     * @param key
     * @param numberOfSquaresHorizontally
     * @param numberOfSquaresVertically
     */
    static getInstance(key: string, numberOfSquaresVertically?: number, numberOfSquaresHorizontally?: number): GridController {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new GridController(key, numberOfSquaresHorizontally, numberOfSquaresVertically);

        return puremvc.Controller.instanceMap[key] as GridController;
    }

    /**
     * Creates the Grid
     */
    public createGridSquares(): void {
        for (let i: number = 0; i < this.numberOfSquaresVertically; i++) {
            this.GridSquares[i] = [];
            for (let j: number = 0; j < this.numberOfSquaresHorizontally; j++) {
                this.GridSquares[i][j] = -1;
            }
        }
    }

    /**
     *  print the grid on the screen.
     */
    public logGridSquares(): void {
        for (let i: number = 0; i < this.numberOfSquaresVertically; i++) {
            console.log(this.GridSquares[i]);
        }
    }

    /**
     * Updates the grid with the hits or the misses.
     * @param position
     */
    public updatePosition(position: Array<number>): void {

        /**
         * Updates the element in the 2 dimensional array with a hit.
         */
        this.GridSquares[position[0]][position[1]] = 5;
        this.logGridSquares();
    }
}
