import {AbstractNotification} from "./AbstractNotification";

/**
 * Extend this.
 */
export class AbstractFacade extends puremvc.Facade implements puremvc.IFacade {

    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);
        this.multitonKey = key;
    }

    /**
     * Notifies the facade's view observers.
     * @param notification
     */
    public notifyObservers(notification): void {
        if (this.view)
            this.view.notifyObservers(notification);
    }

    /**
     * Sends a notification.
     * @param name
     * @param body
     * @param type
     * @param arrayOfStrings
     * @param arrayOfNumbers
     * @param objectReference
     */
    public sendNotification(name: string, body: string, type?: string, arrayOfStrings?: Array<string>, arrayOfNumbers?: Array<number>, objectReference?: any): void {
        this.notifyObservers(new AbstractNotification(name, body, type, arrayOfStrings, arrayOfNumbers, objectReference));
    }

    /**
     *
     * @param notificationName
     * @param commandClassRef
     */
    public registerCommand(notificationName: string, commandClassRef: Function): void {
        super.registerCommand(notificationName, commandClassRef);
    }

    /**
     *
     * @param proxy
     */
    public registerProxy(proxy: puremvc.IProxy): void {
        super.registerProxy(proxy);
    }

    /**
     *
     * @param proxyName
     */
    public retrieveProxy(proxyName: string): puremvc.IProxy {
        return super.retrieveProxy(proxyName);
    }

    /**
     *
     * @param mediator
     */
    public registerMediator(mediator: puremvc.IMediator): void {
        super.registerMediator(mediator);
    }

    /**
     *
     * @param mediatorName
     */
    public retrieveMediator(mediatorName: string): puremvc.IMediator {
        return super.retrieveMediator(mediatorName);
    }

    /**
     *
     * @param mediatorName
     */
    public hasMediator(mediatorName: string): boolean {
        return super.hasMediator(mediatorName);
    }
}