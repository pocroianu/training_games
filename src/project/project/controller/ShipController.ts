import {AbstractController} from "../../abstractClasses/AbstractController";
import {BattleShipController} from "./BattleShipController";
import {FacadeInformation} from "../facade/BattleShipFacade";

/**
 *
 */
export class ShipController extends AbstractController {


    public positionsOccupied: Array<number[]> = [];
    public shipPartIsHit: any = BattleShipController.ShipPartIsHit;
    public shipPartIsNotHit: any = BattleShipController.ShipPartIsNotHit;


    /**
     *
     * @param key
     * @param i
     * @param j
     * @param numberOfSquares
     * @param shipType
     */
    constructor(key: string, i: number, j: number, numberOfSquares: number, shipType: string) {
        super(key);

        switch (shipType) {

            case FacadeInformation.ShipHorizontalType:

                for (let x: number = j; x < j + numberOfSquares; x++) {
                    this.positionsOccupied.push([i, x, this.shipPartIsNotHit]);
                }
                break;
            case FacadeInformation.ShipVerticalType:
                for (let x: number = i; x < i + numberOfSquares; x++) {
                    this.positionsOccupied.push([x, j, this.shipPartIsNotHit]);
                }
                break;
        }
    }

    /**
     * Gets a ShipController instance.
     * @param key
     * @param i
     * @param j
     * @param numberOfSquares
     * @param shipType
     */
    static getInstance(key: string, i?: number, j?: number, numberOfSquares?: number, shipType?: string): ShipController {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new ShipController(key, i, j, numberOfSquares, shipType);

        return puremvc.Controller.instanceMap[key] as ShipController;
    }

    /**
     *Checks if a ship was destroyed.
     */
    public checkIfShipIsDestroyed(): boolean {
        let numberOfShipPartsDestroyed: number = 0;
        for (let i of this.positionsOccupied) {
            if (i[3] == this.shipPartIsHit) {
                numberOfShipPartsDestroyed++;
            }
        }
        return numberOfShipPartsDestroyed === this.positionsOccupied.length - 1;
    }

    /**
     * If a ship's part was hit.
     */
    public hit(): void {

    }
}