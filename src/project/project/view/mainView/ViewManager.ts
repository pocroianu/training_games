import {ViewManagerMediator} from "../../mediator/ViewManagerMediator";
import 'pixi.js'
import {AbstractViewManager} from "../../../abstractClasses/AbstractViewManager";


/**
 * The main view manager.
 */
export class ViewManager extends AbstractViewManager {

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
        super.registerMediator(new ViewManagerMediator(key, this));
    }

    /**
     *
     * @param key
     */
    static getInstance(key: string): ViewManager {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new ViewManager(key);

        return puremvc.View.instanceMap[key] as ViewManager;
    }

    /**
     * Initializing the BattleShip's view
     */
    public initializeView(): void {
        super.initializeView();
        console.log('ViewManager created');
    }
}