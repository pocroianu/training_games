import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {CommandNotifications, MediatorNotifications} from "../facade/BattleShipFacade";
import 'pixi.js'
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
        switch (notification.getName()) {

            case CommandNotifications.ClickHandle:
                console.log('SquareClick Handle Request');
                super.sendNotification(MediatorNotifications.Test, '', '', ['WOWWWW']);
                GridController.getInstance(BattleShipController.GridPlayerOneControllerName).updatePosition(notification.getBody());
                break;
        }

    }
}