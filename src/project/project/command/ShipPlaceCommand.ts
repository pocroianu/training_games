import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";
import 'pixi.js'
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {Player} from "../proxy/Player";
import {MediatorInformation} from "../staticInformation/MediatorInformation";

/**
 * Command called when a ship is placed on the screen by a player
 */
export class ShipPlaceCommand extends AbstractCommand {

    /**
     *
     * @param notification
     */
    public execute(notification: AbstractNotification): void {

        let player: string = notification.getBody()[1];
        let facade: BattleShipFacade = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
        let playerProxy: any = facade.retrieveProxy(BattleShipFacade.PlayerProxy);
        let playerC: Player = playerProxy.getPlayer(player);
        playerC.updateNumberOfShipsPlaced();
        this.sendNotification(MediatorInformation.GridShipMarking, notification.getBody(), notification.getType());
    }
}