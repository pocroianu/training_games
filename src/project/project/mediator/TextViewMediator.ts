import 'pixi.js'
import {BattleShipFacade, FacadeInformation, MediatorNotifications} from "../facade/BattleShipFacade";
import {AbstractMediator} from "../../abstractClasses/AbstractMediator";

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
        containersList.push(super.getViewComponent().getUIContainer());
        BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, 2);
        console.log('   # ' + this.name + ' created');
    }


    /**
     * The notification that the BattleShipMediator is interested in.
     */
    public listNotificationInterests(): string[] {
        return [MediatorNotifications.TextUpdate];
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
                let gridNumber: number = +notification.getType();
                switch (gridNumber) {
                    case FacadeInformation.GridOne:
                        if (this.count[0] <= 0) {
                            this.addTextToTheView(notification.getBody() + ' \nfor Player' + gridNumber);
                            this.count[0]++;
                        }
                        break;

                    case FacadeInformation.GridTwo:
                        if (this.count[1] <= 0) {
                            this.addTextToTheView(notification.getBody() + ' \nfor Player' + gridNumber);
                            this.count[1]++;
                        }
                        break;
                }


                break;
        }
    }
}