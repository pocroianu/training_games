import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {GridController} from "../controller/GridController";
import {FacadeInformation} from "../facade/BattleShipFacade";
import {BattleShipController} from "../controller/BattleShipController";

/**
 * Sends the exacts Ship's index to the GridController
 */
export class ShipPositionInfoCommand extends AbstractCommand {

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification): void {

        let player: string = notification.getBody()[1];
        let shipType: string = notification.getType();
        let shipPosition = notification.getBody()[0];

        switch (player) {
            case FacadeInformation.PlayerOne:
                GridController.getInstance(BattleShipController.GridPlayerOneControllerName)
                    .updateShipsPosition(shipPosition, player, shipType);
                break;
            case FacadeInformation.PlayerTwo:
                GridController.getInstance(BattleShipController.GridPlayerTwoControllerName)
                    .updateShipsPosition(shipPosition, player, shipType);
                break;
        }
    }
}