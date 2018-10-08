import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {FacadeInformation, MediatorNotifications} from "../facade/BattleShipFacade";
import 'pixi.js'
import {PlayerController} from "../controller/PlayerController";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {BattleShipController} from "../controller/BattleShipController";

/**
 * Command called when a ship is placed on the screen by a player
 */
export class ShipPlaceCommand extends AbstractCommand {

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification): void {

        let player: string = notification.getBody()[1];

        switch (player) {

            case FacadeInformation.PlayerOne:
                PlayerController.getInstance(BattleShipController.PlayerOneControllerName).updateNumberOfShipsPlaced('P' + player);
                break;
            case FacadeInformation.PlayerTwo:
                PlayerController.getInstance(BattleShipController.PlayerTwoControllerName).updateNumberOfShipsPlaced('P' + player);
                break;
        }
        super.sendNotification(MediatorNotifications.GridShipMarking, notification.getBody(), notification.getType());
    }
}