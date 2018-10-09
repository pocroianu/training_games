import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";

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

        let facade: BattleShipFacade = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
        let gridProxy: any = facade.retrieveProxy(BattleShipFacade.GridProxyName);
        let player: string = notification.getType();
        let squareClickCoordinates = notification.getBody();


        switch (player) {
            case FacadeInformation.PlayerOne:
                gridProxy.getData()[0].checkIfPlayerHasHitAShip(squareClickCoordinates, player);
                break;
            case FacadeInformation.PlayerTwo:
                gridProxy.getData()[1].checkIfPlayerHasHitAShip(squareClickCoordinates, player);
                break;
        }
    }
}