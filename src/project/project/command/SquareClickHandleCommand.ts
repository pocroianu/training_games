import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {BattleShipFacade} from "../facade/BattleShipFacade";
import {Notifications} from "../staticInformation/Notifications";
import {Square} from "../proxy/Square";
import {Grid} from "../proxy/Grid";
import {GameSettings} from "../staticInformation/GameSettings";
import {ProxyInformation} from "../staticInformation/ProxyInformation";

/**
 * Command used when a grid's square is clicked by a player.
 */
export class SquareClickHandleCommand extends AbstractCommand {

    /**
     * Execute this command
     * @param notification
     */
    public execute(notification): void {
        console.log('SquareClick Handle Request');

        let facade: BattleShipFacade = BattleShipFacade.getInstance(GameSettings.BattleShipFacadeKey);
        let gridProxy: any = facade.retrieveProxy(ProxyInformation.GridProxy);
        let player: string = notification.getType();
        let squareClickCoordinates: any = notification.getBody();
        let grid: any = gridProxy.getGrid(player);

        this.checkIfPlayerHitAShip(grid, squareClickCoordinates, player);
        this.sendNotification(Notifications.LOG_GRID_SQUARES, undefined, player);
    }

    /**
     * Updates the grid with the hits or the misses.
     * @param grid
     * @param squareClickCoordinates
     * @param player
     */
    private checkIfPlayerHitAShip(grid: Grid, squareClickCoordinates: any, player: string) {
        let x: number = squareClickCoordinates[0], y: number = squareClickCoordinates[1];
        let gridSquares: Square[][] = grid.getGridSquares();
        if (gridSquares[x][y].checkIfItIsAHit()) {
            gridSquares[x][y].squareHit();
            this.sendNotification(Notifications.PLAYER_HIT_A_SHIP, squareClickCoordinates, player);
        }
        else {
            gridSquares[x][y].squareMiss();
            this.sendNotification(Notifications.PLAYER_MISSED, squareClickCoordinates, player);
        }
    }
}