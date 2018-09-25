import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {CommandNotifications} from "../facade/BattleShipFacade";
import 'pixi.js'

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
                break;
        }
        //TODO: Add extra things for the square's interaction
    }
}