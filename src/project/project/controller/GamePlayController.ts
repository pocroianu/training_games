import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";
import {ControllerManager} from "./ControllerManager";
import {ViewManager} from "../view/mainView/ViewManager";

/**
 *
 */
export class GamePlayController {


    /**
     *
     */
    public startGamePlayState(): void {
        let facade: any = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
        facade.sendNotification(ControllerManager.HideTheShipCommand, undefined);
        facade.sendNotification(ViewManager.GamePlayStateText, undefined);
    }
}