import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {ControllerManager} from "../controller/ControllerManager";
import {ViewManager} from "../view/mainView/ViewManager";

/**
 *
 */
export class StartGamePlayCommand extends AbstractCommand {

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification): void {

        this.sendNotification(ControllerManager.HideTheShipCommand, undefined);
        this.sendNotification(ViewManager.GamePlayStateText, undefined);

    }
}