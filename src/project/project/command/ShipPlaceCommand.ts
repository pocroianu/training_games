import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {CommandNotifications, MediatorNotifications} from "../facade/BattleShipFacade";
import 'pixi.js'

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
                // console.log('ShipsPlacement Request in ShipPlaceCommand');
                super.sendNotification(MediatorNotifications.GridShipMarking, notification.getBody());
                break;
        }
    }
}