import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {ViewManager} from "../view/mainView/ViewManager";
import {CommandInformation} from "../staticInformation/CommandInformation";

/**
 *
 */
export class StartGamePlayCommand extends AbstractCommand {

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification): void {

        this.sendNotification(CommandInformation.HideTheShipCommand, undefined);
        this.sendNotification(ViewManager.GamePlayStateText, undefined);

    }
}