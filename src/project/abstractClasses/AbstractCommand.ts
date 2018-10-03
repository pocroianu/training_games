import 'pixi.js';
import {AbstractNotification} from "./AbstractNotification";
import {AbstractNotifier} from "./AbstractNotifier";
import {AbstractFacade} from "./AbstractFacade";

/**
 *  Extend this class.
 */
export class AbstractCommand extends puremvc.SimpleCommand implements puremvc.ICommand, AbstractNotifier {

    public name: string = 'Command';

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification): void {
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
     * @param arrayOfStrings
     * @param arrayOfNumbers
     * @param objectReference
     */
    public sendNotification(name: string, body?: any, type?: string, arrayOfStrings?: Array<string>, arrayOfNumbers?: Array<number>, objectReference?: any): void {

        let facade: any = AbstractFacade.getInstance(this.multitonKey);
        facade.sendNotification(name, body, type, arrayOfStrings, arrayOfNumbers, objectReference);

    };

}