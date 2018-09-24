import * as puremvc from '../../../public/js/puremvc-typescript-multicore-1.1.js';


/**
 * Extend this class
 */
export class AbstractMediator extends puremvc.Mediator implements puremvc.IMediator {

    constructor(mediatorName: string, viewComponent: any) {
        super(mediatorName, viewComponent);
    }

    public getMediatorName(): string {
        return super.getMediatorName();
    }

    public getViewComponent(): any {
        return super.getViewComponent();
    }

    public setViewComponent(viewComponent: any): void {
        super.setViewComponent(viewComponent);
    }

    public listNotificationInterests(): string[] {
        return super.listNotificationInterests();
    }

    public handleNotification(notification: puremvc.INotification): void {
        super.handleNotification(notification);
    }

    public onRegister(): void {
        super.onRegister();
    }

    public sendNotification(name: string, body?: any, type?: string): void {
        super.sendNotification(name, body, type);
    }
    public onRemove(): void{
        super.onRemove();
    }
}