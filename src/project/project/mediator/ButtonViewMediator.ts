import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";
import 'pixi.js'
import {AbstractMediator} from "../../abstractClasses/AbstractMediator";
import {ButtonView} from "../view/button/ButtonView";
import {BattleShipView} from "../view/mainView/BattleShipView";

/**
 * The button's mediator.
 */
export class ButtonViewMediator extends AbstractMediator {
    public name: String = 'ButtonViewMediator';
    public buttonViewName = 'ButtonView';

    /**
     *
     * @param key
     * @param viewComponent
     */
    constructor(key: string, viewComponent: puremvc.View = null) {
        super(name, viewComponent);

        let containersList: Array<PIXI.Container> = [];
        containersList.push(super.getViewComponent().getUIContainer());
        BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, BattleShipView.GameButtonContainer);

        console.log('   # ' + this.name + ' created');
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

    /**
     *
     */
    public onRegister(): void {

    }
}