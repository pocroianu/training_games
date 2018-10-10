import {AbstractProxy} from "../../abstractClasses/AbstractProxy";
import {FacadeInformation} from "../facade/BattleShipFacade";
import {Grid} from "./Grid";

/**
 *
 */
export class GridProxy extends AbstractProxy {

    public grid: Array<Grid> = [];

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
        this.grid = grids;
    }

    /**
     *
     * @param player
     */
    public getGrid(player: string): any {
        if (player == FacadeInformation.PlayerOne) {
            return this.grid[0];
        }
        else if (player == FacadeInformation.PlayerTwo) {
            return this.grid[1];
        }
    }
}