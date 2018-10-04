import {AbstractController} from "../../abstractClasses/AbstractController";
import {BattleShipController} from "./BattleShipController";

/**
 *
 */
export class SquareController extends AbstractController {

    public hit: string = BattleShipController.HitText;
    public miss: string = BattleShipController.MissText;
    public squareState: string = BattleShipController.StateText;
    public containsShip: string = BattleShipController.ShipOnSquare;

    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);
    }

    /**
     *
     * @param key
     */
    static getInstance(key: string): SquareController {
        if (!puremvc.Controller.instanceMap[key])
            puremvc.Controller.instanceMap[key] = new SquareController(key);

        return puremvc.Controller.instanceMap[key] as SquareController;
    }

    /**
     * Print if it's a hit or a miss.
     */
    public printSquareState(): string {
        return this.squareState;
    }

    /**
     *
     */
    public squareHit(): void {
        this.squareState = this.hit;
    }

    /**
     *
     */
    public squareMiss(): void {
        this.squareState = this.miss;
    }

    /**
     * If a ship's part is on this square.
     */
    public shipOnSquare(): void {
        this.squareState = this.containsShip;
    }
}