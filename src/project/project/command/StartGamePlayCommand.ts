import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {GamePlayController} from "../controller/GamePlayController";
import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";

/**
 *
 */
export class StartGamePlayCommand extends AbstractCommand {

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification): void {

        let facade: BattleShipFacade = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
        let gamePlay: GamePlayController = facade.retrieveProxy(BattleShipFacade.GamePlayProxyName).getData();
        gamePlay.startGamePlayState();
    }
}