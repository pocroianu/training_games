import {Square} from "./Square";

/**
 *
 */
export class Grid {

    public gridSquares: Square[][];

    /**
     *
     */
    constructor(gridSquares: Square[][]) {
        this.setGridSquares(gridSquares);
    }

    /**
     *
     * @param gridSquares
     */
    public setGridSquares(gridSquares: Square[][]): void {
        this.gridSquares = gridSquares;
    }

    /**
     *
     */
    public getGridSquares(): Square[][] {
        return this.gridSquares;
    }

}