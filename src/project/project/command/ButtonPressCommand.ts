import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
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
        console.log('ButtonPress Handle Request');

    }
}