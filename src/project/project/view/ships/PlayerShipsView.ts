import {AbstractSimpleView} from "../../../abstractClasses/AbstractSimpleView";
import {SingleShipView} from "./SingleShipView";
import {FacadeInformation} from "../../facade/BattleShipFacade";

/**
 * This class will contain all the ships for one player.
 */
export class PlayerShipsView extends AbstractSimpleView {

    public bundleShipViewName = 'PlayerShipsView';
    public shipView = ['S00', 'S01', 'S02', 'S10', 'S11', 'S12'];
    public shipsArray: Array<SingleShipView> = [];


    /**
     * Constructor
     * @param player
     * @param numberOfShips
     */
    constructor(player: string, numberOfShips: number) {
        super();
        /**Adds the horizontal ships to the bundle */
        for (let i: number = 0; i < numberOfShips / 2; i++) {
            let horizontalShip: SingleShipView = new SingleShipView(150, i * 100,
                numberOfShips - i - 1, player, FacadeInformation.ShipHorizontalType);
            this.shipsArray.push(horizontalShip);
            this.addToContainer(horizontalShip.getUIContainer());
        }

        /**Adds the vertical ships to the bundle */
        for (let i: number = numberOfShips / 2; i < numberOfShips; i++) {
            let verticalShip: SingleShipView = new SingleShipView(-500 + i * 100, -20,
                i, player, FacadeInformation.ShipVerticalType);
            this.shipsArray.push(verticalShip);
            this.addToContainer(verticalShip.getUIContainer());
        }
        console.log('   #' + this.bundleShipViewName + player);
    }

    /**
     *
     */
    public initializeView(): void {
        super.initializeView();
    }
}