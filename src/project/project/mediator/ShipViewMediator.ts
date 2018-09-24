import * as puremvc from '../../../../public/js/puremvc-typescript-multicore-1.1.js';
import 'pixi.js'
import {
    BattleShipFacade,
    CommandNotifications,
    FacadeInformation,
    MediatorNotifications
} from "../facade/BattleShipFacade";
import {AbstractMediator} from "../../abstractClasses/AbstractMediator";


export class ShipViewMediator extends AbstractMediator {
    public name: String = 'ShipViewMediator';

    /**
     *
     * @param mediatorName
     * @param viewComponent
     */
    constructor(mediatorName?: string, viewComponent?: any) {
        super(mediatorName, viewComponent);


        let containersList: Array<PIXI.Container> = [];
        containersList.push(super.getViewComponent().getUIContainer());
        BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, 4);

        console.log('   # ' + this.name + ' created');
    }

    /**
     * The notification that the ViewMediator is interested in.
     */
    public listNotificationInterests(): string[] {
        return [MediatorNotifications.ShipsPlacement];
    }

    /**
     *  This is where the notifications are handled.
     * @param notification
     */
    public handleNotification(notification: puremvc.Notification): void {
        let name: String = notification.name;

        switch (name) {
            case MediatorNotifications.ShipsPlacement:
                console.log('Ships placement in mediator');
                super.sendNotification(CommandNotifications.ShipsPlacement);
                break;
        }
    }
}