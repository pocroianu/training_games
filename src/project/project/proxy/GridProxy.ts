import {AbstractProxy} from "../../abstractClasses/AbstractProxy";
import {FacadeInformation} from "../facade/BattleShipFacade";
import {Grid} from "./Grid";

/**
 *
 */
export class GridProxy extends AbstractProxy {

    public grids: Array<Grid>;

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
     * @param grids
     */
    public setData(grids: Array<Grid>): void {
        this.grids = grids;
    }

    /**
     *
     * @param player
     */
    public getGrid(player: string): Grid {
        if (player == FacadeInformation.PlayerOne) {
            return this.grids[0];
        }
        else if (player == FacadeInformation.PlayerTwo) {
            return this.grids[1];
        }
    }
}