import 'pixi.js'
import {
    BattleShipFacade,
    CommandNotifications,
    FacadeInformation,
    MediatorNotifications
} from "../facade/BattleShipFacade";
import {AbstractMediator} from "../../abstractClasses/AbstractMediator";
import {BattleShipView} from "../view/mainView/BattleShipView";

/**
 *
 */
export class BundleShipViewMediator extends AbstractMediator {

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
            BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, BattleShipView.PlayerOneShipsContainer);
        }
        else if (player == FacadeInformation.PlayerTwo) {
            BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, BattleShipView.PlayerTwoShipsContainer);
        }

        console.log('   # ' + super.getMediatorName() + ' created');
    }

    /**
     * The notification that the BattleShipMediator is interested in.
     */
    public listNotificationInterests(): string[] {
        return [MediatorNotifications.ShipsPlacement,
            MediatorNotifications.Test];
    }

    /**
     *  This is where the notifications are handled.
     * @param notification
     */
    public handleNotification(notification: puremvc.INotification): void {

        switch (notification.getName()) {
            case MediatorNotifications.ShipsPlacement:
                super.sendNotification(CommandNotifications.ShipsPlacement, notification.getBody(), notification.getType());
                break;
        }
    }
}