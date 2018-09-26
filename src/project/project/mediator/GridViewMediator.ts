import 'pixi.js'
import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";

/**
 * The grid's mediator.
 */
export class GridViewMediator extends puremvc.Mediator implements puremvc.IMediator {


    /**
     *
     * @param key
     * @param viewComponent
     * @param gridNumber
     */
    constructor(key: string, viewComponent: puremvc.View = null, gridNumber: number) {
        super(name, viewComponent);


        let containersList: Array<PIXI.Container> = [];
        containersList.push(super.getViewComponent().getUIContainer());
        BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, gridNumber - 1);

        console.log('   # ' + super.getMediatorName() + ' created');
    }

    /**
     * The notification that the BattleShipMediator is interested in.
     */
    public listNotificationInterests(): string[] {
        return [];
    }

    /**
     *  This is where the notifications are handled.
     * @param notification
     */
    public handleNotification(notification: puremvc.Notification): void {
        let name: String = notification.name;
    }
}