import 'pixi.js'
import {
    BattleShipFacade,
    CommandNotifications,
    FacadeInformation,
    MediatorNotifications
} from "../facade/BattleShipFacade";
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
            MediatorNotifications.Test,
            MediatorNotifications.SquareClickRequest];
    }

    /**
     *  This is where the notifications are handled.
     * @param notification
     */
    public handleNotification(notification: AbstractNotification): void {
        switch (notification.getName()) {

            case MediatorNotifications.GridShipMarking :
                let shipPositionInfo: Array<number> = notification.getArrayOfNumbers();
                super.getViewComponent().fillGridWithBattleShip(shipPositionInfo, notification.getType());
                break;

            case MediatorNotifications.SquareClickRequest:
                let squareClickCoordinates: Array<number> = notification.getArrayOfNumbers();
                super.sendNotification(CommandNotifications.SquareClickNotification, undefined, undefined, undefined, squareClickCoordinates);
                break;

            case MediatorNotifications.Test:
                console.log(notification.getArrayOfStrings());
                break;
        }
    }
}