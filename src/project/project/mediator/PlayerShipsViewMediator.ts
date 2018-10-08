import 'pixi.js'
import {
    BattleShipFacade,
    CommandNotifications,
    FacadeInformation,
    MediatorNotifications
} from "../facade/BattleShipFacade";
import {AbstractMediator} from "../../abstractClasses/AbstractMediator";
import {ViewManager} from "../view/mainView/ViewManager";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";

/**
 *
 */
export class PlayerShipsViewMediator extends AbstractMediator {

    private readonly _player: string;

    /**
     *
     * @param mediatorName
     * @param viewComponent
     * @param player
     */
    constructor(mediatorName?: string, viewComponent?: any, player?: string) {
        super(mediatorName, viewComponent);
        this._player = player;

        let containersList: Array<PIXI.Container> = [];
        containersList.push(super.getViewComponent().getUIContainer());

        if (player == FacadeInformation.PlayerOne) {
            BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, ViewManager.PlayerOneShipsContainer);
        }
        else if (player == FacadeInformation.PlayerTwo) {
            BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, ViewManager.PlayerTwoShipsContainer);
        }

        console.log('   # ' + super.getMediatorName() + ' created');
    }

    /**
     * The notification that the ViewManagerMediator is interested in.
     */
    public listNotificationInterests(): string[] {
        return [MediatorNotifications.ShipsPlacement,
            MediatorNotifications.Test];
    }

    /**
     *  This is where the notifications are handled.
     * @param notification
     */
    public handleNotification(notification: AbstractNotification): void {

        switch (notification.getName()) {
            case MediatorNotifications.ShipsPlacement:
                let player: string = notification.getBody();
                let shipPositionInfo: Array<number> = notification.getArrayOfNumbers();
                if (player == this._player) {
                    super.sendNotification(CommandNotifications.ShipsPlacement, player,
                        notification.getType(), undefined, shipPositionInfo);
                }
                break;
        }
    }
}