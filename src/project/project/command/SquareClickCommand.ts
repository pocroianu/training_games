import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {GridController} from "../controller/GridController";
import {BattleShipController} from "../controller/BattleShipController";

/**
 * Command used when a grid's square is clicked by a player.
 */
export class SquareClickCommand extends AbstractCommand {

    /**
     * Execute this command
     * @param notification
     */
    public execute(notification): void {
        console.log('SquareClick Handle Request');
        let player: string = notification.getBody();
        console.log(player);
        GridController.getInstance(BattleShipController.GridPlayerOneControllerName).updatePosition(notification.getArrayOfNumbers(), player);
    }
}