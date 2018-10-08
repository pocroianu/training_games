import {AbstractController} from "../../abstractClasses/AbstractController";
import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";
import {BattleShipController} from "./BattleShipController";
import {ViewManager} from "../view/mainView/ViewManager";

/**
 *
 */
export class GamePlayController extends AbstractController {

    /**
     *
     * @param key
     */
    static getInstance(key: string): GamePlayController {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new GamePlayController(key);

        return puremvc.Controller.instanceMap[key] as GamePlayController;
    }

    /**
     *
     */
    public startGamePlayState(): void {
        let facade: any = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
        facade.sendNotification(BattleShipController.HideTheShipCommand, undefined);
        facade.sendNotification(ViewManager.GamePlayStateText, undefined);
    }
}