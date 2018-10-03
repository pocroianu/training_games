import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {CommandNotifications, MediatorNotifications} from "../facade/BattleShipFacade";
import 'pixi.js'
import {PlayerController} from "../controller/PlayerController";
import {BattleShipController} from "../controller/BattleShipController";

/**
 * Command called when a ship is placed on the screen by a player
 */
export class ShipPlaceCommand extends AbstractCommand {

    /**
     * Execute this command
     * @param notification
     */
    public execute(notification: puremvc.INotification): void {
        switch (notification.getName()) {

            case CommandNotifications.ShipsPlacement:

                PlayerController.getInstance(BattleShipController.PlayerOneControllerName).updateNumberOfShipsPlaced();
                super.sendNotification(MediatorNotifications.GridShipMarking, notification.getBody(), notification.getType());
                break;
        }
    }
}