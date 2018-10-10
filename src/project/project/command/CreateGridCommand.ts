import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";
import {Square} from "../proxy/Square";
import {Grid} from "../proxy/Grid";

/**
 * Creates the grid.
 */
export class CreateGridCommand extends AbstractCommand {

    /**
     * Registers the grid's proxy.
     * @param notification
     */
    public execute(notification: AbstractNotification): void {

        let facade: BattleShipFacade = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
        let grid: Grid = this.createTheGrid();
        facade.retrieveProxy(BattleShipFacade.GridProxy).setData([grid, grid]);
    }

    /**
     * Creates the grid,his squares.
     * Change the size of the grid by changing NumberOfSquaresHorizontally and NumberOfSquaresVertically.
     */
    public createTheGrid(): Grid {

        let gridSquares: Square[][] = [];
        for (let i: number = 0; i < FacadeInformation.NumberOfSquaresHorizontally; i++) {
            gridSquares[i] = [];
            for (let j: number = 0; j < FacadeInformation.NumberOfSquaresVertically; j++) {
                gridSquares[i][j] = new Square();
            }
        }
        return new Grid(gridSquares);
    }
}