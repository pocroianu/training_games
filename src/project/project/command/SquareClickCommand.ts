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
        notification.getArrayOfNumbers();
        GridController.getInstance(BattleShipController.GridPlayerOneControllerName).updatePosition(notification.getArrayOfNumbers());
    }
}