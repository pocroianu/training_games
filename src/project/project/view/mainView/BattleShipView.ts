import {BattleShipMediator} from "../../mediator/BattleShipMediator";
import {AbstractView} from "../../../abstractClasses/AbstractView";
import 'pixi.js'


/**
 * The main BattleShip view class
 */
export class BattleShipView extends AbstractView {

    /** */
    public static PlayerOneGridContainer: number = 0;
    public static PlayerTwoGridContainer: number = 1;
    public static GameInfoContainer: number = 3;
    public static GameButtonContainer: number = 4;
    public static PlayerOneShipsContainer: number = 5;
    public static PlayerTwoShipsContainer: number = 6;

    public static GamePlayStateText: string = 'GamePlay State';


    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);
        this.multitonKey = key;

        super.registerMediator(new BattleShipMediator(key, this));

    }

    /**
     * Initializing the BattleShip's view
     */
    public initializeView(): void {
        super.initializeView();
        console.log('BattleShipView created');
    }

    /**
     *
     * @param key
     */
    static getInstance(key: string): AbstractView {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new BattleShipView(key);

        return puremvc.View.instanceMap[key] as AbstractView;
    }
}