import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {MediatorNotifications} from "../facade/BattleShipFacade";

/**
 *  After both players finished placing the ships,the ships will be hidden.
 */
export class HideTheShipsCommand extends AbstractCommand {

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification): void {
        super.sendNotification(MediatorNotifications.HideTheShips);
    }
}