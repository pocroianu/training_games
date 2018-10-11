import {AbstractSimpleView} from "../../../abstractClasses/AbstractSimpleView";
import {SingleShipView} from "./SingleShipView";
import {GameSettings} from "../../staticInformation/GameSettings";

/**
 * This class will contain all the ships for one player.
 */
export class PlayerShipsView extends AbstractSimpleView {

    public bundleShipViewName = 'PlayerShipsView';
    public shipsArray: Array<SingleShipView> = [];

    /**
     * Constructor
     * @param player
     * @param numberOfShips
     */
    constructor(player: string, numberOfShips: number) {
        super();
        this.addHorizontalShips(numberOfShips, player);
        this.addVerticalShips(numberOfShips, player);

        console.log('   #' + this.bundleShipViewName + player);
    }

    /**Adds the horizontal ships*/
    private addHorizontalShips(numberOfShips: number, player: string) {
        for (let i: number = 0; i < numberOfShips / 2; i++) {
            let horizontalShip: SingleShipView = new SingleShipView(150, i * 100,
                numberOfShips - i - 1, player, GameSettings.ShipHorizontalType);
            this.shipsArray.push(horizontalShip);
            this.addToContainer(horizontalShip.getUIContainer());
        }
    }

    /**Adds the vertical ships*/
    private addVerticalShips(numberOfShips: number, player: string) {
        for (let i: number = numberOfShips / 2; i < numberOfShips; i++) {
            let verticalShip: SingleShipView = new SingleShipView(-500 + i * 100, -20,
                i, player, GameSettings.ShipVerticalType);
            this.shipsArray.push(verticalShip);
            this.addToContainer(verticalShip.getUIContainer());
        }
    }
}