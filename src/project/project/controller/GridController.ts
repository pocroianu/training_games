/**
 * Controls the grid's functionality.
 */
import {AbstractController} from "../../abstractClasses/AbstractController";


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
     * Creates the GRID
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
     *
     */
    public logGridSquares(): void {
        for (let i: number = 0; i < this.numberOfSquaresVertically; i++) {
            console.log(this.GridSquares[i]);
        }
    }

    /**
     *
     * @param index
     */
    public updatePosition(index: string): void {

        let newArray: Array<number> = [];
        let newIndex = index.split(',');
        for (let i of newIndex) {
            newArray.push(+i);
        }

        // console.log(newArray);
        this.GridSquares[newArray[0]][newArray[1]] = 5;
        this.logGridSquares();
    }
}
