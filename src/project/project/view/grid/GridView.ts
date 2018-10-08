import {AbstractSimpleView} from "../../../abstractClasses/AbstractSimpleView";
import {SquareView} from "./SquareView";
import {BattleShipFacade, FacadeInformation, MediatorNotifications, TextErrors} from '../../facade/BattleShipFacade'
import {RulerView} from "../ruler/RulerView";
import 'pixi.js'
import {BattleShipController} from "../../controller/BattleShipController";

/**
 * Creates the grid
 */
export class GridView extends AbstractSimpleView {
    private GridSquares: SquareView[][];
    public RulerName: string = 'RulerForTheGrid';
    public name = 'GridView';
    private maxShipsOnThisGrid: number = FacadeInformation.MaximumNumberOfShipsOnAGrid;
    private currentNumberOfShips: number = 0;
    private readonly _player: string;

    /**
     *
     * @param player
     */
    constructor(player: string) {
        super();
        this.name = this.name.concat(player);
        this._player = player;
        switch (this._player) {
            case FacadeInformation.PlayerOne:
                this.createBoard(FacadeInformation.Grid1XPosition, FacadeInformation.Grid1YPosition, FacadeInformation.SquareWidth,
                    FacadeInformation.NumberOfSquaresVertically, FacadeInformation.NumberOfSquaresHorizontally, FacadeInformation.Grid1BorderColor, FacadeInformation.GridSquareFillColor);
                this.createRuler(FacadeInformation.Grid1XPosition, FacadeInformation.Grid1YPosition, FacadeInformation.NumberOfSquaresVertically,
                    FacadeInformation.NumberOfSquaresHorizontally, FacadeInformation.SquareWidth, FacadeInformation.Grid1BorderColor, FacadeInformation.RulerTextColor);
                break;

            case FacadeInformation.PlayerTwo:
                this.createBoard(FacadeInformation.Grid2XPosition, FacadeInformation.Grid2YPosition, FacadeInformation.SquareWidth,
                    FacadeInformation.NumberOfSquaresVertically, FacadeInformation.NumberOfSquaresHorizontally, FacadeInformation.Grid2BorderColor, FacadeInformation.GridSquareFillColor);
                this.createRuler(FacadeInformation.Grid2XPosition, FacadeInformation.Grid2YPosition, FacadeInformation.NumberOfSquaresVertically,
                    FacadeInformation.NumberOfSquaresHorizontally, FacadeInformation.SquareWidth, FacadeInformation.Grid2BorderColor, FacadeInformation.RulerTextColor);
                break;
        }


        console.log('   # ' + this.name + ' created');
    }

    /**
     *  Initializing the Grid's view
     */
    public initializeView(): void {
        super.initializeView();
    }

    /**
     * Returns this grid's container.
     */
    public getUIContainer(): PIXI.Container {
        this._container.pivot.x = this._container.width / 2;
        this._container.pivot.y = this._container.height / 2;
        return super.getUIContainer();
    }

    /**
     *
     * @param position
     * @param shipInfo
     * @param player
     */
    public fillGridWithBattleShip(position: Array<number>, shipInfo: string, player: string): void {

        let gridDimensions: PIXI.Rectangle = this.getUIContainer().getBounds();
        let xPosition: number = position[0];
        let yPosition: number = position[1];
        let newShipInfo: any = shipInfo.split(',');
        let squareWidth: number = FacadeInformation.SquareWidth * FacadeInformation.GridScale;

        if (player == this._player) {

            if ((xPosition > gridDimensions.x) && (xPosition < gridDimensions.x + gridDimensions.width)) {
                if ((yPosition > gridDimensions.y) && (yPosition < gridDimensions.y + gridDimensions.height)) {
                    for (let i: number = 0; i < FacadeInformation.NumberOfSquaresVertically; i++) {
                        for (let j: number = 0; j < FacadeInformation.NumberOfSquaresHorizontally; j++) {
                            let squareXPosition: number = this.GridSquares[i][j].getPosition()[0];
                            let squareYPosition: number = this.GridSquares[i][j].getPosition()[1];


                            if ((xPosition >= squareXPosition && xPosition < squareXPosition + squareWidth) &&
                                (yPosition >= squareYPosition && yPosition < squareYPosition + squareWidth)) {

                                if (newShipInfo[0] == FacadeInformation.ShipHorizontalType) {
                                    let numberOfSquares: number = Math.round(position[2] / FacadeInformation.SquareWidth);

                                    if (this.currentNumberOfShips < this.maxShipsOnThisGrid) {
                                        for (let x: number = j; x < j + numberOfSquares; x++) {
                                            this.GridSquares[i][x].fillSquare();
                                        }
                                        this.notifyGridController(i, j, numberOfSquares, FacadeInformation.ShipHorizontalType);
                                        this.currentNumberOfShips++;
                                        this.notifyThatPlayerFinishedPlacingTheShips();
                                    }
                                }
                                else if (newShipInfo[0] == FacadeInformation.ShipVerticalType) {
                                    let numberOfSquares: number = Math.round(position[3] / FacadeInformation.SquareWidth);

                                    if (this.currentNumberOfShips < this.maxShipsOnThisGrid) {
                                        for (let x: number = i; x < i + numberOfSquares; x++) {
                                            this.GridSquares[x][j].fillSquare();
                                        }
                                        this.notifyGridController(i, j, numberOfSquares, FacadeInformation.ShipVerticalType);
                                        this.currentNumberOfShips++;
                                        this.notifyThatPlayerFinishedPlacingTheShips();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     *
     */
    private notifyThatPlayerFinishedPlacingTheShips() {
        if (this.currentNumberOfShips === this.maxShipsOnThisGrid) {
            let facade = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
            facade.sendNotification(MediatorNotifications.TextUpdate, TextErrors.MaximumNumberOfShipReached, this._player);
            facade.sendNotification(BattleShipController.PlayerFinishedPlacingTheShipsCommand, this._player);
        }
    }

    /**
     *
     * @param gridXPosition
     * @param gridYPosition
     * @param squareWidth
     * @param numberOfSquaresVertically
     * @param numberOfSquaresHorizontally
     * @param gridBorderColor
     * @param gridSquareFillColor
     */
    private createBoard(gridXPosition: number, gridYPosition: number, squareWidth: number,
                        numberOfSquaresVertically: number, numberOfSquaresHorizontally: number, gridBorderColor: number, gridSquareFillColor: number): void {
        let newXPosition: number,
            newYPosition: number = gridYPosition,
            square: SquareView, key: number = 0;

        this.GridSquares = [];
        for (let i: number = 0; i < numberOfSquaresVertically; i++) {
            this.GridSquares[i] = [];
            newXPosition = gridXPosition;

            for (let j: number = 0; j < numberOfSquaresHorizontally; j++) {
                key++;
                square = new SquareView(newXPosition + j * squareWidth,
                    newYPosition, squareWidth, gridBorderColor, gridSquareFillColor, j, i);
                this.GridSquares[i][j] = square;

            }
            newYPosition += squareWidth;
        }

        for (let i: number = 0; i < numberOfSquaresVertically; i++)
            for (let j: number = 0; j < numberOfSquaresHorizontally; j++)
                this._container.addChild(this.GridSquares[i][j].getUIContainer());
        console.log('   # GridSquares created');
    }

    /**
     *
     * @param xPosition
     * @param yPosition
     * @param numberOfSquaresVertically
     * @param numberOfSquaresHorizontally
     * @param squareWidth
     * @param gridBorderColor
     * @param rulerTextColor
     */
    private createRuler(xPosition: number, yPosition: number, numberOfSquaresVertically: number,
                        numberOfSquaresHorizontally: number, squareWidth: number, gridBorderColor: number, rulerTextColor: number) {
        let rulerView: RulerView = new RulerView(xPosition, yPosition, numberOfSquaresVertically,
            numberOfSquaresHorizontally, squareWidth, gridBorderColor, rulerTextColor);

        this._container.addChild(rulerView.getUIContainer());
    }

    /**
     * Search for a Square in this Grid.
     * @param squareView
     */
    public hasSquare(squareView: SquareView): boolean {
        for (let i: number = 0; i < FacadeInformation.NumberOfSquaresVertically; i++) {
            for (let j: number = 0; j < FacadeInformation.NumberOfSquaresHorizontally; j++) {
                if (this.GridSquares[i][j] === squareView)
                    return true;
            }
        }
        return false;
    }

    /**
     *
     */
    public hideTheShips(): void {

        for (let i = 0; i < FacadeInformation.NumberOfSquaresHorizontally; i++) {
            for (let j = 0; j < FacadeInformation.NumberOfSquaresVertically; j++) {
                this.GridSquares[i][j].hideTheShipPart();
            }
        }
    }

    /**
     * If a player missed,the controller notifies the View to show the miss on the grid.
     */
    public updateTheViewWithAHit(squarePosition: Array<number>): void {
        let i: number = squarePosition[0], j: number = squarePosition[1];
        this.GridSquares[i][j].hit();
    }

    /**
     * If a player hits,the controller notifies the View to show the miss on the grid.
     * @param squarePosition
     */
    public updateTheViewWithAMiss(squarePosition: Array<number>): void {
        let i: number = squarePosition[0], j: number = squarePosition[1];
        this.GridSquares[i][j].miss();
    }

    /**
     *
     * @param i
     * @param j
     * @param numberOfSquares
     * @param shipType
     */
    private notifyGridController(i: number, j: number, numberOfSquares: number, shipType: FacadeInformation): void {
        let facade: any = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
        facade.sendNotification(MediatorNotifications.ShipPositionInfo, [[i, j, numberOfSquares], this._player], shipType);
    }
}