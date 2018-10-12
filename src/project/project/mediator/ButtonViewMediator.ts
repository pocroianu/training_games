import {BattleShipFacade} from "../facade/BattleShipFacade";
import 'pixi.js'
import {AbstractMediator} from "../../abstractClasses/AbstractMediator";
import {ViewManager} from "../view/mainView/ViewManager";
import {GameSettings} from "../staticInformation/GameSettings";

/**
 * The button's mediator.
 */
export class ButtonViewMediator extends AbstractMediator {
    public name: String = 'ButtonViewMediator';

    /**
     *
     * @param key
     * @param viewComponent
     */
    constructor(key: string, viewComponent: any = null) {
        super(name, viewComponent);

        let containersList: Array<PIXI.Container> = [];
        containersList.push(super.getViewComponent().getUIContainer());
        BattleShipFacade.getInstance(GameSettings.BattleShipFacadeKey).addContainersToView(containersList, ViewManager.GameButtonContainer);

        console.log('   # ' + this.name + ' created');
    }

    /**
     * The notification that the ViewManagerMediator is interested in.
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

    /**
     *
     */
    public onRegister(): void {

    }
}