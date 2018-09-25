import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {CommandNotifications} from "../facade/BattleShipFacade";
import 'pixi.js'

/**
 * Command called when a ship is placed on the screen by a player
 */
export class ShipPlaceCommand extends AbstractCommand {

    /**
     * Execute this command
     * @param notification
     */
    public execute(notification: puremvc.Notification): void {
        switch (notification.getName()) {

            case CommandNotifications.ShipsPlacement:
                console.log('ShipsPlacement Request');
                break;
        }
    }
}