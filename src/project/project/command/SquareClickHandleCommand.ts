import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {BattleShipFacade, FacadeInformation, MediatorNotifications} from "../facade/BattleShipFacade";
import {CommandInformation} from "../staticInformation/CommandInformation";

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

        let facade: BattleShipFacade = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
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
    private checkIfPlayerHitAShip(grid: any, squareClickCoordinates: any, player: string) {
        let x: number = squareClickCoordinates[0], y: number = squareClickCoordinates[1];
        if (grid[x][y].checkIfItIsAHit()) {
            grid[x][y].squareHit();
            this.sendNotification(MediatorNotifications.PlayerHitAShip, squareClickCoordinates, player);
        }
        else {
            grid[x][y].squareMiss();
            this.sendNotification(MediatorNotifications.PlayerMissed, squareClickCoordinates, player);
        }
    }
}