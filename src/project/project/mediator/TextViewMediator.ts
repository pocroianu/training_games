import 'pixi.js'
import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";
import {AbstractMediator} from "../../abstractClasses/AbstractMediator";

/**
 *
 */
export class TextViewMediator extends AbstractMediator {
    public name: String = 'TextViewMediator';

    /**
     *
     * @param mediatorName
     * @param viewComponent
     */
    constructor(mediatorName: string, viewComponent: any) {
        super(name, viewComponent);


        let containersList: Array<PIXI.Container> = [];
        containersList.push(super.getViewComponent().getUIContainer());
        BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, 2);
        console.log('   # ' + this.name + ' created');
    }

    /**
     * The notification that the ViewMediator is interested in.
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