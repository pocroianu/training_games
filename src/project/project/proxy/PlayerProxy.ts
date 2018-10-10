import {AbstractProxy} from "../../abstractClasses/AbstractProxy";
import {Player} from "./Player";
import {FacadeInformation} from "../facade/BattleShipFacade";

/**
 *
 */
export class PlayerProxy extends AbstractProxy {

    public players: Array<Player> = [];

    /**
     *
     * @param proxyName
     * @param data
     */
    constructor(proxyName?: string, data?: any) {
        super(proxyName, data);
    }

    /**
     *
     * @param players
     */
    public setData(players: Array<Player>): void {
        this.players = players;
    }

    /**
     *
     * @param player
     */
    public getPlayer(player: string): Player {
        if (player == FacadeInformation.PlayerOne) {
            return this.players[0];
        }
        else if (player == FacadeInformation.PlayerTwo) {
            return this.players[1];
        }
    }
}