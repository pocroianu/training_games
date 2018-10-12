import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {BattleShipFacade} from "../facade/BattleShipFacade";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {Grid} from "../proxy/Grid";
import {GameSettings} from "../staticInformation/GameSettings";
import {ProxyInformation} from "../staticInformation/ProxyInformation";

/**
 *
 */
export class LogGridSquaresCommand extends AbstractCommand {

    /**
     *
     * @param grid
     */
    private static log(grid: Grid): void {
        for (let i: number = 0; i < GameSettings.NumberOfSquaresHorizontally; i++) {
            let printArray: Array<string> = [];
            for (let j: number = 0; j < GameSettings.NumberOfSquaresVertically; j++) {
                printArray.push(grid.getGridSquares()[i][j].printSquareState());
            }
            console.log(printArray);
        }
    }

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification): void {
        let facade: BattleShipFacade = BattleShipFacade.getInstance(GameSettings.BattleShipFacadeKey);
        let player: string = notification.getType();
        let grid: any = facade.retrieveProxy(ProxyInformation.GridProxy).getGrid(player);
        LogGridSquaresCommand.log(grid);
    }
}