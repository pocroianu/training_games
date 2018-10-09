import {AbstractProxy} from "../../abstractClasses/AbstractProxy";
import {GridController} from "../controller/GridController";

/**
 *
 */
export class GridProxy extends AbstractProxy {

    public gridController: Array<GridController> = [];


    /**
     *
     * @param proxyName
     * @param data
     */
    constructor(proxyName?: string, data?: any) {
        super(proxyName, data);
        console.log('   # GridProxy created');
    }

    /**
     *
     * @param data
     */
    public setData(data: Array<GridController>) {
        this.gridController = data;
    }

    /**
     *
     */
    public getData(): Array<GridController> {
        return this.gridController;
    }
}