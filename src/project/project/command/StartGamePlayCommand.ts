import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {GamePlayController} from "../controller/GamePlayController";
import {BattleShipController} from "../controller/BattleShipController";

/**
 *
 */
export class StartGamePlayCommand extends AbstractCommand {

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification): void {

        GamePlayController.getInstance(BattleShipController.GamePlayControllerName).startGamePlayState();
    }


}