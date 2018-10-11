import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {BattleShipFacade} from "../facade/BattleShipFacade";
import {PlayerProxy} from "../proxy/PlayerProxy";
import {CommandInformation} from "../staticInformation/CommandInformation";
import {GameSettings} from "../staticInformation/GameSettings";

/**
 *
 */
export class CheckIfPlayerFinishedPlacingTheShipsCommand extends AbstractCommand {

    /**
     *  Checks if both players finished placing the ships.
     */
    public static checkIfBothPlayersFinishedPlacingTheShips(): boolean {
        let facade: BattleShipFacade = BattleShipFacade.getInstance(GameSettings.BattleShipFacadeKey);
        let playerProxy: PlayerProxy = facade.retrieveProxy(BattleShipFacade.PlayerProxy);

        if (playerProxy.getPlayer(GameSettings.PlayerOne).shipsPlacementFinished() === true
            && playerProxy.getPlayer(GameSettings.PlayerTwo).shipsPlacementFinished() === true) {
            console.log('Both Players finished placing the ships');
            return true;
        }
        return false;
    }

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification) {

        if (CheckIfPlayerFinishedPlacingTheShipsCommand.checkIfBothPlayersFinishedPlacingTheShips()) {
            console.log('Finished');
            this.sendNotification(CommandInformation.StartGamePlayCommand);
        }
    }
}