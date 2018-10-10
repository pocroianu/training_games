import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {ControllerManager} from "../controller/ControllerManager";
import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";

/**
 *
 */
export class PlayerFinishedPlacingTheShipsCommand extends AbstractCommand {

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification) {
        let facade: BattleShipFacade = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);

        if (facade.checkIfBothPlayersFinishedPlacingTheShips()) {
            console.log('Finished');
            super.sendNotification(ControllerManager.StartGamePlayCommand);
        }

    }

}