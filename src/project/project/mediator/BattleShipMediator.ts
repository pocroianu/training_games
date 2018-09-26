import 'pixi.js'
import {AbstractMediator} from "../../abstractClasses/AbstractMediator";

/**
 *
 */
export class BattleShipMediator extends AbstractMediator {
    public name: String = 'BattleShipMediator';


    /**
     *
     * @param mediatorName
     * @param viewComponent
     */
    constructor(mediatorName?: string, viewComponent?: any) {
        super(mediatorName, viewComponent);


        console.log('   # ' + this.name + ' created');
    }

    /**
     * The notification that the BattleShipMediator is interested in.
     */
    public listNotificationInterests(): string [] {
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