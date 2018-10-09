import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";

/**
 * Sends the exacts Ship's index to the GridController
 */
export class ShipPositionInfoCommand extends AbstractCommand {

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification): void {
        let facade: BattleShipFacade = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
        let gridProxy: puremvc.IProxy = facade.retrieveProxy(BattleShipFacade.GridProxyName);

        let player: string = notification.getBody()[1];
        let shipType: string = notification.getType();
        let shipPosition = notification.getBody()[0];

        switch (player) {
            case FacadeInformation.PlayerOne:
                console.log(gridProxy.getData()[0]);
                gridProxy.getData()[0].updateShipsPosition(shipPosition, player, shipType);
                break;
            case FacadeInformation.PlayerTwo:
                gridProxy.getData()[1].updateShipsPosition(shipPosition, player, shipType);
                break;
        }
    }
}