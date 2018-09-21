import * as puremvc from '../../../public/js/puremvc-typescript-multicore-1.1.js';
import 'pixi.js';

/**
 *  Extend this class
 */
export class AbstractController extends puremvc.Controller {
    private multitonkey: string;
    public name: string = 'Controller';

    constructor(key: string) {
        super(key);
        this.multitonkey = key;
    }


    public initializeController(): void {
        super.initializeController();
    }

    public executeCommand(notification: puremvc.INotification): void {
        super.executeCommand(notification);
    }

    public registerCommand(notificationName: string, commandClassRef: Function): void {
        super.registerCommand(notificationName,commandClassRef);
    }

    public hasCommand(notificationName: string): boolean {
        return super.hasCommand(notificationName);
    }

    public removeCommand(notificationName: string): void {
        super.removeCommand(notificationName);
    }

    get multitonKey(): string {
        return this.multitonkey;
    }

    set multitonKey(key: string) {
        this.multitonkey = key;
    }
}