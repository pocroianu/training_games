import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {CommandNotifications} from "../facade/BattleShipFacade";
import 'pixi.js'

/**
 * Command called when a button is pressed on the screen by a player.
 */
export class ButtonPressCommand extends AbstractCommand {

    /**
     * Execute this command
     * @param notification
     */
    public execute(notification: puremvc.Notification): void {
        switch (notification.getName()) {

            case CommandNotifications.ButtonPress:
                console.log('ButtonPress Handle Request');
                break;
        }
    }
}