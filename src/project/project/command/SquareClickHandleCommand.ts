import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {BattleShipFacade} from "../facade/BattleShipFacade";
import {CommandInformation} from "../staticInformation/CommandInformation";
import {Square} from "../proxy/Square";
import {Grid} from "../proxy/Grid";
import {MediatorInformation} from "../staticInformation/MediatorInformation";
import {GameSettings} from "../staticInformation/GameSettings";

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
        let gridProxy: any = facade.retrieveProxy(BattleShipFacade.GridProxy);
        let player: string = notification.getType();
        let squareClickCoordinates: any = notification.getBody();
        let grid: any = gridProxy.getGrid(player);

        this.checkIfPlayerHitAShip(grid, squareClickCoordinates, player);
        this.sendNotification(CommandInformation.LogGridSquares, undefined, player);
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
            this.sendNotification(MediatorInformation.PlayerHitAShip, squareClickCoordinates, player);
        }
        else {
            gridSquares[x][y].squareMiss();
            this.sendNotification(MediatorInformation.PlayerMissed, squareClickCoordinates, player);
        }
    }
}