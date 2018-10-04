import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {MediatorNotifications} from "../facade/BattleShipFacade";
import 'pixi.js'
import {PlayerController} from "../controller/PlayerController";
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

        let player = notification.getBody();
        console.log(player);
        PlayerController.getInstance('P' + player).updateNumberOfShipsPlaced('P' + player);
        super.sendNotification(MediatorNotifications.GridShipMarking, player, notification.getType(), undefined, notification.getArrayOfNumbers());
    }
}