import {AbstractProxy} from "../../abstractClasses/AbstractProxy";
import {GamePlayController} from "../controller/GamePlayController";

/**
 *
 */
export class GamePlayProxy extends AbstractProxy {

    public gamePlayController: GamePlayController;

    /**
     *
     * @param proxyName
     * @param data
     */
    constructor(proxyName?: string, data?: any) {
        super(proxyName, data);
        console.log('   # GamePLayProxy created');
    }

    /**
     *
     * @param data
     */
    public setData(data: GamePlayController) {
        this.gamePlayController = data;
    }

    /**
     *
     */
    public getData(): GamePlayController {
        return this.gamePlayController;
    }
}

