import {AbstractView} from "../../../abstractClasses/AbstractView";
import {SingleShipView} from "./SingleShipView";

/**
 * This class will contain all the ships for one player.
 */
export class BundleShipView extends AbstractView {

    public bundleShipViewName = 'BundleShipView';
    public shipView = ['S0', 'S1', 'S2'];
    public shipsID: Array<string> = [];

    /**
     * Constructor
     * @param key
     * @param player
     */
    constructor(key: string, player: string) {
        super(key);
        /**Adds the ships to the bundle */
        for (let i: number = 0; i < 3; i++) {
            let ship: SingleShipView = SingleShipView.getInstance(this.shipView[i] + player, 0, i * 100,
                5 - i, player);
            this.shipsID.push(this.shipView[i] + player);

            this.addToContainer(ship.getUIContainer());
        }
        console.log('   #' + this.bundleShipViewName + player);
    }

    static getInstance(key: string, player?: string): BundleShipView {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new BundleShipView(key, player);

        return puremvc.View.instanceMap[key] as BundleShipView;
    }

    /**
     * Verifies if a ship is contained in this BundleShip
     * @param shipID
     */
    public hasShip(shipID: string): boolean {
        for (let i of this.shipsID) {
            if (i == shipID) return true;
        }
        return false;
    }

    /**
     *
     */
    public initializeView(): void {
        super.initializeView();
    }
}