import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {BattleShipController} from "../controller/BattleShipController";
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
        if (BattleShipController.getInstance(FacadeInformation.BattleShipFacadeKey).checkIfBothPlayersFinishedPlacingTheShips()) {
            super.sendNotification(BattleShipController.StartGamePlayCommand);
        }

    }

}