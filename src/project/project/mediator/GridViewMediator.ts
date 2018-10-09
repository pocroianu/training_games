import 'pixi.js'
import {
    BattleShipFacade,
    CommandNotifications,
    FacadeInformation,
    MediatorNotifications
} from "../facade/BattleShipFacade";
import {AbstractMediator} from "../../abstractClasses/AbstractMediator";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {ControllerManager} from "../controller/ControllerManager";

/**
 * The grid's mediator.
 */
export class GridViewMediator extends AbstractMediator {

    private readonly _player: string;

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
            MediatorNotifications.SquareClickRequest,
            MediatorNotifications.ShipPositionInfo,
            MediatorNotifications.HideTheShips,
            MediatorNotifications.PlayerHitAShip,
            MediatorNotifications.PlayerMissed];
    }

    /**
     *  This is where the notifications are handled.
     * @param notification
     */
    public handleNotification(notification: AbstractNotification): void {
        switch (notification.getName()) {

            case MediatorNotifications.GridShipMarking :
                let shipPositionInfo: Array<number> = notification.getBody()[0];
                console.log(shipPositionInfo);
                let player: string = notification.getBody()[1];
                let shipType: string = notification.getType();
                if (player == this._player)
                    super.getViewComponent().fillGridWithBattleShip(shipPositionInfo, shipType, player);
                break;

            case MediatorNotifications.SquareClickRequest:
                let square = notification.getBody()[1];
                if (super.getViewComponent().hasSquare(square)) {  //if the Grid has this square.
                    let squareClickCoordinates = notification.getBody()[0];
                    super.sendNotification(CommandNotifications.SquareClickNotification, squareClickCoordinates, this._player);
                }
                break;

            case MediatorNotifications.ShipPositionInfo:
                let player1: string = notification.getBody()[1];
                let shipType1: string = notification.getType();
                let shipPositionInfo1 = notification.getBody()[0];
                super.sendNotification(ControllerManager.ShipPositionInfoCommand, notification.getBody(), shipType1);
                break;

            case MediatorNotifications.HideTheShips:
                super.getViewComponent().hideTheShips();
                break;

            case MediatorNotifications.PlayerHitAShip:
                let playerL: string = notification.getType();
                let hitCoordinates = notification.getBody();

                if (this._player == playerL) {
                    super.getViewComponent().updateTheViewWithAHit(hitCoordinates);
                }
                break;

            case MediatorNotifications.PlayerMissed:
                let playerK: string = notification.getType();
                let missCoordinates = notification.getBody();
                if (this._player == playerK) {
                    super.getViewComponent().updateTheViewWithAMiss(missCoordinates);
                }
                break;
        }
    }
}