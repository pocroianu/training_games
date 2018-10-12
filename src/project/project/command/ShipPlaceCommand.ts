import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {BattleShipFacade} from "../facade/BattleShipFacade";
import 'pixi.js'
import {AbstractNotification} from "../../abstractClasses/AbstractNotification";
import {Player} from "../proxy/Player";
import {GameSettings} from "../staticInformation/GameSettings";
import {ProxyInformation} from "../staticInformation/ProxyInformation";
import {Notifications} from "../staticInformation/Notifications";

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
        let facade: BattleShipFacade = BattleShipFacade.getInstance(GameSettings.BattleShipFacadeKey);
        let playerProxy: any = facade.retrieveProxy(ProxyInformation.PlayerProxy);
        let playerC: Player = playerProxy.getPlayer(player);
        playerC.updateNumberOfShipsPlaced();
        this.sendNotification(Notifications.MARK_THE_SHIP_ON_THE_GRID, notification.getBody(), notification.getType());
    }
}