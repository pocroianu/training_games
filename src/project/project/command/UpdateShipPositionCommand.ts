import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";
import {Grid} from "../proxy/Grid";

/**
 *
 */
export class UpdateShipPositionCommand extends AbstractCommand {

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification): void {
        let facade: BattleShipFacade = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
        let player: string = notification.getBody()[1];

        let shipType: string = notification.getType();
        let shipPosition = notification.getBody()[0];
        let grid: Grid = facade.retrieveProxy(BattleShipFacade.GridProxy).getGrid(player);
        this.checkShipType(shipPosition, shipType, grid);
    }

    /**
     *
     * @param shipPosition
     * @param shipType
     * @param grid
     */
    private checkShipType(shipPosition, shipType: string, grid: Grid): void {
        let i: number = shipPosition[0], j: number = shipPosition[1], numberOfSquares: number = shipPosition[2];
        switch (shipType) {
            case FacadeInformation.ShipHorizontalType:
                for (let x: number = j; x < j + numberOfSquares; x++) {
                    grid[i][x].shipOnSquare();
                }
                break;
            case FacadeInformation.ShipVerticalType:
                for (let x: number = i; x < i + numberOfSquares; x++) {
                    grid[x][j].shipOnSquare();
                }
                break;
        }
    }
}