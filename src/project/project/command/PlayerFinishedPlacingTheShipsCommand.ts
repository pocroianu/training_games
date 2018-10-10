import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {ControllerManager} from "../controller/ControllerManager";
import {BattleShipFacade} from "../facade/BattleShipFacade";

/**
 *
 */
export class PlayerFinishedPlacingTheShipsCommand extends AbstractCommand {

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification) {


        if (BattleShipFacade.checkIfBothPlayersFinishedPlacingTheShips()) {
            console.log('Finished');
            super.sendNotification(ControllerManager.StartGamePlayCommand);
        }
    }
}