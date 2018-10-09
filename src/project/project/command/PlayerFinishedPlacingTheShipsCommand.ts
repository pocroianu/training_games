import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {ControllerManager} from "../controller/ControllerManager";
import {FacadeInformation} from "../facade/BattleShipFacade";

/**
 *
 */
export class PlayerFinishedPlacingTheShipsCommand extends AbstractCommand {

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification) {
        console.log('Finished');
        if (ControllerManager.getInstance(FacadeInformation.BattleShipFacadeKey).checkIfBothPlayersFinishedPlacingTheShips()) {
            super.sendNotification(ControllerManager.StartGamePlayCommand);
        }

    }

}