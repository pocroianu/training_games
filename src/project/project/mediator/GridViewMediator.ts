import 'pixi.js'
import {BattleShipFacade, FacadeInformation, MediatorNotifications} from "../facade/BattleShipFacade";
import {AbstractMediator} from "../../abstractClasses/AbstractMediator";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";

/**
 * The grid's mediator.
 */
export class GridViewMediator extends AbstractMediator {

    private _player: string;

    /**
     *
     * @param mediatorName
     * @param viewComponent
     * @param player
     */
    constructor(mediatorName: string, viewComponent: any, player: string) {
        super(mediatorName, viewComponent);
        this._player = player;

        let containersList: Array<PIXI.Container> = [];
        containersList.push(super.getViewComponent().getUIContainer());
        BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, +player - 1);

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
    public handleNotification(notification: AbstractNotification): void {
        switch (notification.getName()) {

            case MediatorNotifications.GridShipMarking :
                // console.log('GridMarkingNotification received');
                let array: any = notification.getBody().split(',', 4);
                let newArray: Array<number> = [];

                for (let i of array) {
                    let j = +i;
                    newArray.push(j);
                }
                super.getViewComponent().fillGridWithBattleShip(newArray, notification.getType());
                break;
            case MediatorNotifications.Test:
                console.log(notification.getArrayOfStrings());
                break;
        }
    }
}