import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {CommandInformation} from "../staticInformation/CommandInformation";

/**
 *
 */
export class StartUpCommand extends AbstractCommand {
    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification) {

        this.sendNotification(CommandInformation.CreateGridCommand);
    }
}