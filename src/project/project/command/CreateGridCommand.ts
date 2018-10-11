import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {BattleShipFacade} from "../facade/BattleShipFacade";
import {Square} from "../proxy/Square";
import {Grid} from "../proxy/Grid";
import {GameSettings} from "../staticInformation/GameSettings";

/**
 * Creates the grid.
 */
export class CreateGridCommand extends AbstractCommand {

    /**
     * Creates the grid,his squares.
     * Change the size of the grid by changing NumberOfSquaresHorizontally and NumberOfSquaresVertically.
     */
    public static createTheGrid(): Grid {

        let gridSquares: Square[][] = [];
        for (let i: number = 0; i < GameSettings.NumberOfSquaresHorizontally; i++) {
            gridSquares[i] = [];
            for (let j: number = 0; j < GameSettings.NumberOfSquaresVertically; j++) {
                gridSquares[i][j] = new Square();
            }
        }
        return new Grid(gridSquares);
    }

    /**
     * Registers the grid's proxy.
     * @param notification
     */
    public execute(notification: AbstractNotification): void {

        let facade: BattleShipFacade = BattleShipFacade.getInstance(GameSettings.BattleShipFacadeKey);
        let grid: Grid = CreateGridCommand.createTheGrid();
        facade.retrieveProxy(BattleShipFacade.GridProxy).setData([grid, grid]);
    }
}