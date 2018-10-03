import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {MediatorNotifications} from "../facade/BattleShipFacade";
import 'pixi.js'
import {PlayerController} from "../controller/PlayerController";
import {BattleShipController} from "../controller/BattleShipController";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";

/**
 * Command called when a ship is placed on the screen by a player
 */
export class ShipPlaceCommand extends AbstractCommand {

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification): void {

        PlayerController.getInstance(BattleShipController.PlayerOneControllerName).updateNumberOfShipsPlaced();
        super.sendNotification(MediatorNotifications.GridShipMarking, undefined, notification.getType(), undefined, notification.getArrayOfNumbers());

    }
}