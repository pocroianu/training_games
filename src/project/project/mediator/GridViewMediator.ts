import 'pixi.js'
import {BattleShipFacade} from "../facade/BattleShipFacade";
import {AbstractMediator} from "../../abstractClasses/AbstractMediator";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {Notifications} from "../staticInformation/Notifications";
import {GameSettings} from "../staticInformation/GameSettings";

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
        BattleShipFacade.getInstance(GameSettings.BattleShipFacadeKey).addContainersToView(containersList, +player - 1);

        console.log('   # ' + super.getMediatorName() + ' created');
    }

    /**
     * The notification that the GridViewMediator is interested in.
     */
    public listNotificationInterests(): string[] {
        return [Notifications.MARK_THE_SHIP_ON_THE_GRID,
            Notifications.SQUARE_CLICK_REQUEST,
            Notifications.SHIP_POSITION_INFO,
            Notifications.HIDE_THE_SHIPS,
            Notifications.PLAYER_HIT_A_SHIP,
            Notifications.PLAYER_MISSED];
    }

    /**
     *  This is where the notifications are handled.
     * @param notification
     */
    public handleNotification(notification: AbstractNotification): void {
        switch (notification.getName()) {

            case Notifications.MARK_THE_SHIP_ON_THE_GRID :
                let shipPositionInfo: Array<number> = notification.getBody()[0];
                console.log(shipPositionInfo);
                let player: string = notification.getBody()[1];
                let shipType: string = notification.getType();
                if (player == this._player)
                    this.getViewComponent().fillGridWithBattleShip(shipPositionInfo, shipType, player);
                break;

            case Notifications.SQUARE_CLICK_REQUEST:
                let square = notification.getBody()[1];
                if (this.getViewComponent().hasSquare(square)) {  //if the Grid has this square.
                    let squareClickCoordinates = notification.getBody()[0];
                    this.sendNotification(Notifications.SQUARE_CLICK_HANDLE, squareClickCoordinates, this._player);
                }
                break;

            case Notifications.SHIP_POSITION_INFO:
                let player1: string = notification.getBody()[1];
                let shipType1: string = notification.getType();
                let shipPositionInfo1 = notification.getBody()[0];
                super.sendNotification(Notifications.SHIPS_SEND_POSITION_INFO, notification.getBody(), shipType1);
                break;

            case Notifications.HIDE_THE_SHIPS:
                super.getViewComponent().hideTheShips();
                break;

            case Notifications.PLAYER_HIT_A_SHIP:
                let playerL: string = notification.getType();
                let hitCoordinates = notification.getBody();

                if (this._player == playerL) {
                    super.getViewComponent().updateTheViewWithAHit(hitCoordinates);
                }
                break;

            case Notifications.PLAYER_MISSED:
                let playerK: string = notification.getType();
                let missCoordinates = notification.getBody();
                if (this._player == playerK) {
                    super.getViewComponent().updateTheViewWithAMiss(missCoordinates);
                }
                break;
        }
    }
}