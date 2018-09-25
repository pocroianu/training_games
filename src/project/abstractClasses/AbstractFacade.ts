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
     */
    public sendNotification(name: string, body: string, type?: string): void {
        super.sendNotification(name, body, type);
    }

}