import 'pixi.js';

/**
 *  Extend this class.
 */
export class AbstractCommand extends puremvc.SimpleCommand implements puremvc.ICommand, puremvc.INotifier {

    public name: string = 'Command';

    /**
     *
     * @param notification
     */
    public execute(notification: puremvc.INotification): void {
        super.execute(notification);
    }

    /**
     *
     * @param key
     */
    public initializeNotifier(key: string): void {
        super.initializeNotifier(key);
    }

    /**
     *
     * @param name
     * @param body
     * @param type
     */
    public sendNotification(name: string, body?: any, type?: string): void {
        super.sendNotification(name, body, type);
    }
}