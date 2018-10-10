import 'pixi.js'
import {BattleShipFacade, FacadeInformation, MediatorNotifications} from "../facade/BattleShipFacade";
import {AbstractMediator} from "../../abstractClasses/AbstractMediator";
import {ViewManager} from "../view/mainView/ViewManager";

/**
 *  TextViewMediator
 */
export class TextViewMediator extends AbstractMediator {
    public name: String = 'TextViewMediator';
    public count: number[] = [0, 0];

    /**
     *
     * @param mediatorName
     * @param viewComponent
     */
    constructor(mediatorName: string, viewComponent: any) {
        super(mediatorName, viewComponent);


        let containersList: Array<PIXI.Container> = [];
        containersList.push(super.getViewComponent().getText());
        BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey)
            .addContainersToView(containersList, ViewManager.GameInfoContainer);
        console.log('   # ' + this.name + ' created');
    }


    /**
     * The notification that the ViewManagerMediator is interested in.
     */
    public listNotificationInterests(): string[] {
        return [MediatorNotifications.TextUpdate,
            ViewManager.GamePlayStateText];
    }

    /**
     *
     * @param text
     */
    public addTextToTheView(text: string) {
        super.getViewComponent().addText(text);
    }

    /**
     *  This is where the notifications are handled.
     * @param notification
     */
    public handleNotification(notification: puremvc.Notification): void {

        switch (notification.getName()) {
            case MediatorNotifications.TextUpdate:
                let player: string = notification.getType();
                switch (player) {
                    case FacadeInformation.PlayerOne:
                        this.addTextToTheView(notification.getBody() + ' \nfor Player' + player);
                        break;

                    case FacadeInformation.PlayerTwo:
                        this.addTextToTheView(notification.getBody() + ' \nfor Player' + player);
                        break;
                }
                break;
            case ViewManager.GamePlayStateText:
                super.getViewComponent().showGamePlayStateText();
                break;


        }
    }
}