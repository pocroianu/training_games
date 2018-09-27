import 'pixi.js'
import {BattleShipFacade, FacadeInformation, MediatorNotifications} from "../facade/BattleShipFacade";
import {AbstractMediator} from "../../abstractClasses/AbstractMediator";

/**
 * The grid's mediator.
 */
export class GridViewMediator extends AbstractMediator {


    /**
     *
     * @param mediatorName
     * @param viewComponent
     * @param gridNumber
     */
    constructor(mediatorName: string, viewComponent: any, gridNumber: number) {
        super(mediatorName, viewComponent);

        let containersList: Array<PIXI.Container> = [];
        containersList.push(super.getViewComponent().getUIContainer());
        BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, gridNumber - 1);

        console.log('   # ' + super.getMediatorName() + ' created');
    }

    /**
     * The notification that the GridViewMediator is interested in.
     */
    public listNotificationInterests(): string[] {
        return [MediatorNotifications.GridShipMarking,
            MediatorNotifications.Test];
    }

    /**
     *  This is where the notifications are handled.
     * @param notification
     */
    public handleNotification(notification: puremvc.INotification): void {
        switch (notification.getName()) {

            case MediatorNotifications.GridShipMarking :
                console.log('GridMarkingNotification received');
                let array: any = notification.getBody().split(',', 4);
                let newArray: Array<number> = [];
                for (let i of array) {
                    let j = +i;
                    newArray.push(j);
                }

                super.getViewComponent().fillGridWithBattleShip(newArray);
                break;
            //Some test for a notification.
            /* case MediatorNotifications.Test:
                 console.log('Test');
                 break;*/
        }
    }
}