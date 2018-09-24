import * as puremvc from '../../../public/js/puremvc-typescript-multicore-1.1.js';
import 'pixi.js';

/**
 *  Extend this class
 */
export class AbstractCommand extends puremvc.SimpleCommand {

    public name: string = 'Command';

    public execute(notification: puremvc.INotification): void {
        super.execute(notification);
    }
}