import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {ViewManager} from "../view/mainView/ViewManager";
import {Notifications} from "../staticInformation/Notifications";

/**
 *
 */
export class StartGamePlayCommand extends AbstractCommand {

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification): void {

        this.sendNotification(Notifications.HIDE_THE_SHIPS, undefined);
        this.sendNotification(ViewManager.GamePlayStateText, undefined);

    }
}