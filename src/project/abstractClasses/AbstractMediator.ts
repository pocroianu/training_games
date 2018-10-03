/**
 * Extends this.
 */
export class AbstractMediator extends puremvc.Mediator implements puremvc.IMediator {

    /**
     *
     * @param mediatorName
     * @param viewComponent
     */
    constructor(mediatorName: string, viewComponent: any) {
        super(mediatorName, viewComponent);
    }

    /**
     *
     */
    public getViewComponent(): any {
        return super.getViewComponent();
    }

    /**
     *
     */
    public getMediatorName(): string {
        return super.getMediatorName();
    }

    /**
     *
     * @param viewComponent
     */
    public setViewComponent(viewComponent: any): void {
        super.setViewComponent(viewComponent);
    }

    /**
     *
     */
    public listNotificationInterests(): string[] {
        return [];
    }

    /**
     *
     * @param notification
     */
    public handleNotification(notification): void {
        return super.handleNotification(notification);
    }

    /**
     *
     */
    public onRegister(): void {
        super.onRegister();
    }

    /**
     *
     */
    public onRemove(): void {
        super.onRemove();
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

