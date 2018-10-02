import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {CommandNotifications, ControllerNames} from "../facade/BattleShipFacade";
import 'pixi.js'
import {GridController} from "../controller/GridController";

/**
 * Command used when a grid's square is clicked by a player.
 */
export class SquareClickCommand extends AbstractCommand {

    /**
     * Execute this command
     * @param notification
     */
    public execute(notification: puremvc.Notification): void {
        switch (notification.getName()) {

            case CommandNotifications.ClickHandle:
                console.log('SquareClick Handle Request');

                GridController.getInstance(ControllerNames.GridControllerName).updatePosition(notification.getBody());

                break;
        }
        //TODO: Add extra things for the square's interaction
    }
}