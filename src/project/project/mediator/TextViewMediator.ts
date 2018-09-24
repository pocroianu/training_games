import * as puremvc from '../../../../public/js/puremvc-typescript-multicore-1.1.js';
import 'pixi.js'
import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";

export class TextViewMediator extends puremvc.Mediator implements puremvc.IMediator {
    public name: String = 'TextViewMediator';

    /**
     *
     * @param key
     * @param viewComponent
     */
    constructor(key: string, viewComponent: puremvc.View = null) {
        super(name, viewComponent);


        let containersList: Array<PIXI.Container> = [];
        containersList.push(super.getViewComponent().getUIContainer());
        BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList,2);

        console.log('   # '+this.name+' created');
    }

    /**
     * The notification that the ViewMediator is interested in.
     */
    public listNotificationInterests(): string {
        return '';
    }

    /**
     *  This is where the notifications are handled.
     * @param notification
     */
    public handleNotification(notification: puremvc.Notification): void {
        let name: String = notification.name;
    }
}