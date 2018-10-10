import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {BattleShipFacade, FacadeInformation, MediatorNotifications} from "../facade/BattleShipFacade";
import 'pixi.js'
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";

/**
 * Command called when a ship is placed on the screen by a player
 */
export class ShipPlaceCommand extends AbstractCommand {

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification): void {

        let player: string = notification.getBody()[1];
        let facade: BattleShipFacade = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
        let playerProxy: any = facade.retrieveProxy(BattleShipFacade.PlayerProxyName);

        switch (player) {

            case FacadeInformation.PlayerOne:
                playerProxy.getData()[0].updateNumberOfShipsPlaced(FacadeInformation.PlayerOne);
                break;
            case FacadeInformation.PlayerTwo:
                playerProxy.getData()[1].updateNumberOfShipsPlaced(FacadeInformation.PlayerTwo);
                break;
        }
        super.sendNotification(MediatorNotifications.GridShipMarking, notification.getBody(), notification.getType());
    }
}