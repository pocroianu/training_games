import 'pixi.js';

/**
 *  Extend this class.
 */
export class AbstractCommand extends puremvc.SimpleCommand {

    public name: string = 'Command';

    /**
     *
     * @param notification
     */
    public execute(notification: puremvc.INotification): void {
        super.execute(notification);
    }
}