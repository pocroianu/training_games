import 'pixi.js'
import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";
import {AbstractMediator} from "../../abstractClasses/AbstractMediator";
import {ViewManager} from "../view/mainView/ViewManager";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {CommandInformation} from "../staticInformation/CommandInformation";
import {MediatorInformation} from "../staticInformation/MediatorInformation";

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
        this.addView(player);

        console.log('   # ' + super.getMediatorName() + ' created');
    }

    /**
     * The notification that the ViewManagerMediator is interested in.
     */
    public listNotificationInterests(): string[] {
        return [MediatorInformation.ShipsPlacement,
        ];
    }

    /**
     *  This is where the notifications are handled.
     * @param notification
     */
    public handleNotification(notification: AbstractNotification): void {

        switch (notification.getName()) {
            case MediatorInformation.ShipsPlacement:
                let player: any = notification.getBody()[4];
                let shipType: string = notification.getType();

                if (player == this._player) {
                    super.sendNotification(CommandInformation.ShipsPlacement, [notification.getBody(), player], shipType);
                }
                break;
        }
    }

    /**
     *
     * @param player
     */
    private addView(player: string) {
        let containersList: Array<PIXI.Container> = [];
        containersList.push(super.getViewComponent().getUIContainer());
        if (player == FacadeInformation.PlayerOne) {
            BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, ViewManager.PlayerOneShipsContainer);
        }
        else if (player == FacadeInformation.PlayerTwo) {
            BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, ViewManager.PlayerTwoShipsContainer);
        }
    }
}