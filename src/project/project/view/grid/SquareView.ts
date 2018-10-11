import {HitView} from "../hits/HitView";
import {MissView} from "../hits/MissView";
import {BattleShipFacade, FacadeInformation} from "../../facade/BattleShipFacade";
import {AbstractSimpleView} from "../../../abstractClasses/AbstractSimpleView";
import {MediatorInformation} from "../../staticInformation/MediatorInformation";

/**
 * Small rectangle class
 */
export class SquareView extends AbstractSimpleView {

    public x: number;
    public y: number;
    public width: number;
    public horizontalIndex: number;
    public verticalIndex: number;
    public borderColor: number;
    public fillColor: number;

    /**Contains the square's border */
    public squareGraphics: PIXI.Graphics;

    /**Contains the marking which will be either a hit either a miss */
    public squareMarking: PIXI.Graphics;
    public squareEvent: string = 'pointertap';

    /**The HitView and the MissView */
    private hitView: HitView;
    private missView: MissView;

    /**Square's glow */
    private squareGlow: PIXI.Graphics;

    /**Ship's Square fill object */
    public shipSquare: PIXI.Graphics;

    /**
     *
     * @param squareXPosition
     * @param squareYPosition
     * @param squareWidth
     * @param borderColor
     * @param fillColor
     * @param horizontalIndex
     * @param verticalIndex
     */
    constructor(squareXPosition: number, squareYPosition: number, squareWidth: number, borderColor: number, fillColor: number, horizontalIndex?: number, verticalIndex?: number) {
        super();
        this.x = squareXPosition;
        this.y = squareYPosition;
        this.width = squareWidth;
        this.borderColor = borderColor;
        this.fillColor = fillColor;
        this.horizontalIndex = horizontalIndex;
        this.verticalIndex = verticalIndex;

        this.createSquareGraphics();
        this.createSquareGlow();
        this.createHitMissGraphics();
        this.createShipGraphics();
        this.addToContainer(this.squareGraphics);
        this.addToContainer(this.squareMarking);
        this.addToContainer(this.squareGlow);
        this.addToContainer(this.shipSquare);
        this.initializeSquareInteraction();
    }

    /**
     * This contains the square's border.
     */
    private createSquareGraphics() {
        this.squareGraphics = new PIXI.Graphics();
        this.squareMarking = new PIXI.Graphics();
        this.squareGlow = new PIXI.Graphics();
        this.shipSquare = new PIXI.Graphics();

        this.squareGraphics.lineStyle(7, this.borderColor, 1);
        this.squareGraphics.beginFill(this.fillColor);
        this.squareGraphics.drawRect(this.x, this.y, this.width, this.width);
        this.squareGraphics.endFill();
    }


    /**
     * This contains the X (hit) or the O (miss).
     */
    private createHitMissGraphics() {
        this.hitView = new HitView(this.x, this.y, this.width);
        this.hitView.setActive(false);
        this.missView = new MissView(this.x, this.y, this.width);
        this.missView.setActive(false);
        this.squareMarking.addChild(this.hitView.getUIContainer(), this.missView.getUIContainer());
        this.squareGraphics.interactive = true;
        this.squareGraphics.buttonMode = true;
    }

    /**
     * This contains the glow that is shown when a player mouse-overs over this square.
     */
    private createSquareGlow() {
        this.squareGlow.lineStyle(1, 0xff0000, 0.2);
        this.squareGlow.beginFill(0xff0100, 0.2);
        this.squareGlow.drawRect(this.x + 5, this.y + 5, this.width - 5, this.width - 5);
        this.squareGlow.endFill();
        this.squareGlow.visible = false;
    }

    /**
     * This contains a part of the ship.
     */
    private createShipGraphics() {
        this.shipSquare.lineStyle(0, FacadeInformation.SquareFillColor);
        this.shipSquare.beginFill(FacadeInformation.SquareFillColor, 0.6);
        this.shipSquare.drawRect(this.x + 5, this.y + 5, this.width - 5, this.width - 5);
        this.shipSquare.endFill();
        this.shipSquare.visible = false;
    }

    /**
     *
     */
    private initializeSquareInteraction(): void {
        this.squareGraphics
            .on(this.squareEvent, this.handleMouseDown, this)
            .on('pointerover', this.handleMouseOver)
            .on('pointerout', this.handleMouseOut);
    }

    /**
     * Returns the x and y coordinates for this square.
     */
    public getPosition(): [number, number] {
        return [this.squareGraphics.getBounds().x, this.squareGraphics.getBounds().y];
    }

    /**
     *
     */
    private handleMouseOver = () => {
        this.squareGlow.visible = true;
    };

    /**
     *
     */
    private handleMouseOut = () => {
        this.squareGlow.visible = false;
    };

    /**
     *  Handles the clicked down event
     */
    private handleMouseDown(): void {
        BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey)
            .sendNotification(MediatorInformation.SquareClickRequest, [[this.verticalIndex, this.horizontalIndex], this], undefined);
    }

    /**
     * Shows an X on the square.
     */
    public hit(): void {
        this.hitView.setActive(true);
        this.disableInteraction();
    }

    /**
     * Shows a miss on the square.
     */
    public miss(): void {
        this.missView.setActive(true);
        this.disableInteraction();
    }

    /**
     * Fill a square with a part of a BattleShip
     */
    public fillSquare(): void {
        this.shipSquare.visible = true;


    }

    /**
     * Disable the Square's interaction
     */
    public disableInteraction(): void {
        this.squareGraphics.interactive = false;
        this.squareGlow.destroy();
        this.squareMarking.interactive = false;

    }

    /**
     * Hides the ships.
     */
    public hideTheShipPart(): void {
        this.shipSquare.visible = false;
    }
}