import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {GridController} from "../controller/GridController";
import {BattleShipController} from "../controller/BattleShipController";
import {FacadeInformation} from "../facade/BattleShipFacade";

/**
 * Command used when a grid's square is clicked by a player.
 */
export class SquareClickCommand extends AbstractCommand {

    /**
     * Execute this command
     * @param notification
     */
    public execute(notification): void {
        console.log('SquareClick Handle Request');
        let player: string = notification.getBody();
        switch (player) {
            case FacadeInformation.PlayerOne:
                GridController.getInstance(BattleShipController.GridPlayerOneControllerName).checkIfPlayerHasHitAShip(notification.getArrayOfNumbers(), player);
                break;
            case FacadeInformation.PlayerTwo:
                GridController.getInstance(BattleShipController.GridPlayerTwoControllerName).checkIfPlayerHasHitAShip(notification.getArrayOfNumbers(), player);
                break;
        }
    }
}