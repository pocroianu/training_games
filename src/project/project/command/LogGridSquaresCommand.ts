import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {Grid} from "../proxy/Grid";

/**
 *
 */
export class LogGridSquaresCommand extends AbstractCommand {

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification): void {
        let facade: BattleShipFacade = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
        let player: string = notification.getType();
        let grid: any = facade.retrieveProxy(BattleShipFacade.GridProxy).getGrid(player);
        LogGridSquaresCommand.log(grid);
    }

    /**
     *
     * @param grid
     */
    private static log(grid: Grid): void {
        for (let i: number = 0; i < FacadeInformation.NumberOfSquaresHorizontally; i++) {
            let printArray: Array<string> = [];
            for (let j: number = 0; j < FacadeInformation.NumberOfSquaresVertically; j++) {
                printArray.push(grid.getGridSquares()[i][j].printSquareState());
            }
            console.log(printArray);
        }
    }
}