import {AbstractView} from "../../../abstractClasses/AbstractView";
import {SingleShipView} from "./SingleShipView";
import {FacadeInformation} from "../../facade/BattleShipFacade";

/**
 * This class will contain all the ships for one player.
 */
export class BundleShipView extends AbstractView {

    public bundleShipViewName = 'BundleShipView';
    public shipView = ['S00', 'S01', 'S02', 'S10', 'S11', 'S12'];
    public shipsArray: Array<SingleShipView> = [];


    /**
     * Constructor
     * @param key
     * @param player
     * @param numberOfShips
     */
    constructor(key: string, player: string, numberOfShips: number) {
        super(key);
        /**Adds the horizontal ships to the bundle */
        for (let i: number = 0; i < numberOfShips / 2; i++) {
            let horizontalShip: SingleShipView = SingleShipView.getInstance(this.shipView[i] + player, 150, i * 100,
                numberOfShips - i - 1, player, FacadeInformation.ShipHorizontalType);
            this.shipsArray.push(horizontalShip);
            this.addToContainer(horizontalShip.getUIContainer());
        }

        /**Adds the vertical ships to the bundle */
        for (let i: number = numberOfShips / 2; i < numberOfShips; i++) {
            let verticalShip: SingleShipView = SingleShipView.getInstance(this.shipView[i] + player, -500 + i * 100, -20,
                i, player, FacadeInformation.ShipVerticalType);
            this.shipsArray.push(verticalShip);
            this.addToContainer(verticalShip.getUIContainer());
        }
        console.log('   #' + this.bundleShipViewName + player);
    }

    /**
     *
     * @param key
     * @param player
     * @param numberOfShips
     */
    static getInstance(key: string, player?: string, numberOfShips?: number): BundleShipView {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new BundleShipView(key, player, numberOfShips);

        return puremvc.View.instanceMap[key] as BundleShipView;
    }

    /**
     *
     */
    public initializeView(): void {
        super.initializeView();
    }
}