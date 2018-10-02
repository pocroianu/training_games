import {HitView} from "../hits/HitView";
import {MissView} from "../hits/MissView";
import {BattleShipFacade, CommandNotifications, FacadeInformation} from "../../facade/BattleShipFacade";
import {AbstractView} from "../../../abstractClasses/AbstractView";

/**
 * Small rectangle class
 */
export class SquareView extends AbstractView {

    public x: number;
    public y: number;
    public width: number;
    public horizontalIndex: number;
    public verticalIndex: number;
    public borderColor: number;
    public fillColor: number;

    public squareGraphics: PIXI.Graphics;
    /**Contains the square's border */
    public squareMarking: PIXI.Graphics;
    /**Contains the marking which will be either a hit either a miss */
    public onClickHandler: Function;
    /**Will call a function within the grid class */
    public squareEvent: string = 'pointertap';

    /**The HitView and the MissView */
    private hitView: HitView;
    private missView: MissView;

    /**Square's glow */
    private readonly squareGlow: PIXI.Graphics;

    /**Ship's Square fill object */
    public shipSquare: PIXI.Graphics;

    /**
     *
     * @param key
     * @param squareXPosition
     * @param squareYPosition
     * @param squareWidth
     * @param borderColor
     * @param fillColor
     * @param horizontalIndex
     * @param verticalIndex
     */
    constructor(key: string, squareXPosition: number, squareYPosition: number, squareWidth: number, borderColor: number, fillColor: number, horizontalIndex?: number, verticalIndex?: number) {
        super(key);
        this.x = squareXPosition;
        this.y = squareYPosition;
        this.width = squareWidth;
        this.borderColor = borderColor;
        this.fillColor = fillColor;
        this.horizontalIndex = horizontalIndex;
        this.verticalIndex = verticalIndex;

        this.squareGraphics = new PIXI.Graphics();
        this.squareMarking = new PIXI.Graphics();
        this.squareGlow = new PIXI.Graphics();
        this.shipSquare = new PIXI.Graphics();

        this.squareGraphics.lineStyle(7, this.borderColor, 1);
        this.squareGraphics.beginFill(this.fillColor);
        this.squareGraphics.drawRect(this.x, this.y, this.width, this.width);
        this.squareGraphics.endFill();

        this.squareGlow.lineStyle(1, 0xff0000, 0.2);
        this.squareGlow.beginFill(0xff0100, 0.2);
        this.squareGlow.drawRect(this.x + 5, this.y + 5, this.width - 5, this.width - 5);
        this.squareGlow.endFill();
        this.squareGlow.visible = false;


        this.hitView = HitView.getInstance(Math.random() + '', this.x, this.y, this.width);
        this.hitView.setActive(false);
        this.missView = MissView.getInstance(Math.random() + '', this.x, this.y, this.width);
        this.missView.setActive(true);
        this.squareMarking.addChild(this.hitView.getUIContainer());
        this.squareGraphics.interactive = true;
        this.squareGraphics.buttonMode = true;

        this.shipSquare.lineStyle(0, FacadeInformation.SquareFillColor);
        this.shipSquare.beginFill(FacadeInformation.SquareFillColor, 0.6);
        this.shipSquare.drawRect(this.x + 5, this.y + 5, this.width - 5, this.width - 5);
        this.shipSquare.endFill();
        this.shipSquare.visible = false;

        this.addToContainer(this.squareGraphics);
        this.addToContainer(this.squareMarking);
        this.addToContainer(this.squareGlow);
        this.addToContainer(this.shipSquare);

        this.initializeSquareInteraction();
    }

    /**
     * initializing the Square's view
     */
    public initializeView(): void {
        super.initializeView();
    }

    /**
     * Returns an instance of the square view
     * @param key
     * @param squareXPosition
     * @param squareYPosition
     * @param squareWidth
     * @param borderColor
     * @param fillColor
     * @param horizontalIndex
     * @param verticalIndex
     */
    static getInstance(key: string, squareXPosition?: number, squareYPosition?: number, squareWidth?: number, borderColor?: number, fillColor?: number, horizontalIndex?: number, verticalIndex?: number): SquareView {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new SquareView(key, squareXPosition, squareYPosition, squareWidth, borderColor, fillColor, horizontalIndex, verticalIndex);

        return puremvc.View.instanceMap[key] as SquareView;
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
        this.hit();
        BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).sendNotification(CommandNotifications.ClickHandle, [this.horizontalIndex, this.verticalIndex].toString());
        // this.onClickHandler.call(this, [this.x, this.y]);
    }

    /**
     * Shows an X on the square.
     */
    private hit(): void {
        this.hitView.setActive(true);
    }

    /**
     * Shows a miss on the square.
     */
    private miss(): void {
        this.missView.setActive(true);
    }

    /**
     * Fill a square with a part of a BattleShip
     */
    public fillSquare(): void {
        this.shipSquare.visible = true;
        this.disableInteraction();
    }

    /**
     * Disable the Square's interaction
     */
    public disableInteraction(): void {
        this.squareGraphics.interactive = false;
        this.squareGlow.interactive = false;
        this.squareMarking.interactive = false;
    }
}