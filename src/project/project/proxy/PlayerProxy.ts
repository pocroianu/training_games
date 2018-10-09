import {AbstractProxy} from "../../abstractClasses/AbstractProxy";
import {PlayerController} from "../controller/PlayerController";

/**
 *
 */
export class PlayerProxy extends AbstractProxy {

    public playerController: Array<PlayerController> = [];

    /**
     *
     * @param proxyName
     * @param data
     */
    constructor(proxyName?: string, data?: any) {
        super(proxyName, data);
        console.log('   # PlayerProxy created');
    }

    /**
     *
     * @param data
     */
    public setData(data: Array<PlayerController>): void {
        this.playerController = data;
    }


    public getData(): Array<PlayerController> {
        return this.playerController;
    }
}