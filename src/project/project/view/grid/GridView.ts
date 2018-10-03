import {AbstractView} from "../../../abstractClasses/AbstractView";
import {SquareView} from "./SquareView";
import {BattleShipFacade, FacadeInformation, MediatorNotifications, TextErrors} from '../../facade/BattleShipFacade'
import {RulerView} from "../ruler/RulerView";
import 'pixi.js'

/**
 * Creates the grid
 */
export class GridView extends AbstractView {
    private GridSquares: SquareView[][];
    public RulerName: string = 'RulerForTheGrid';
    public name = 'GridView';
    private maxShipsOnThisGrid: number = FacadeInformation.MaximumNumberOfShipsOnAGrid;
    private currentNumberOfShips: number = 0;
    private _player: string;

    /**
     *
     * @param key
     * @param player
     */
    constructor(key: string, player: string) {
        super(key);
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
     * Get an instance of the Grid's view
     * @param key
     * @param player
     */
    static getInstance(key: string, player?: string): GridView {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new GridView(key, player);

        return puremvc.View.instanceMap[key] as GridView;
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
     */
    public fillGridWithBattleShip(position: Array<number>, shipInfo: string): void {

        let gridDimensions: PIXI.Rectangle = this.getUIContainer().getBounds();
        let xPosition: number = position[0];
        let yPosition: number = position[1];
        let newShipInfo: any = shipInfo.split(',');
        console.log(shipInfo);

        console.log('Coordinates received ' + [xPosition, yPosition]);
        let squareWidth: number = FacadeInformation.SquareWidth * FacadeInformation.GridScale;

        // if (newShipInfo[1] == this._player) {

        if ((xPosition > gridDimensions.x) && (xPosition < gridDimensions.x + gridDimensions.width)) {
            if ((yPosition > gridDimensions.y) && (yPosition < gridDimensions.y + gridDimensions.height)) {

                // console.log('Ship is in GridView' + this._gridNumber);

                for (let i: number = 0; i < FacadeInformation.NumberOfSquaresVertically; i++) {
                    for (let j: number = 0; j < FacadeInformation.NumberOfSquaresHorizontally; j++) {
                        let squareXPosition: number = this.GridSquares[i][j].getPosition()[0];
                        let squareYPosition: number = this.GridSquares[i][j].getPosition()[1];
                        let facade = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);

                        if ((xPosition >= squareXPosition && xPosition < squareXPosition + squareWidth) &&
                            (yPosition >= squareYPosition && yPosition < squareYPosition + squareWidth)) {

                            if (newShipInfo[0] == FacadeInformation.ShipHorizontalType) {
                                let numberOfSquares: number = Math.round(position[2] / FacadeInformation.SquareWidth);
                                for (let x: number = j; x < j + numberOfSquares; x++) {

                                    if (this.currentNumberOfShips <= this.maxShipsOnThisGrid + 1) {
                                        this.GridSquares[i][x].fillSquare();

                                    }
                                    else {
                                        facade.sendNotification(MediatorNotifications.TextUpdate, TextErrors.MaximumNumberOfShipReached, this._player);
                                    }
                                }
                                this.currentNumberOfShips++;
                            }
                            else if (newShipInfo[0] == FacadeInformation.ShipVerticalType) {
                                let numberOfSquares: number = Math.round(position[3] / FacadeInformation.SquareWidth);
                                for (let x: number = i; x < i + numberOfSquares; x++) {
                                    if (this.currentNumberOfShips <= this.maxShipsOnThisGrid + 1) {
                                        this.GridSquares[x][j].fillSquare();

                                    }
                                    else {
                                        facade.sendNotification(MediatorNotifications.TextUpdate, TextErrors.MaximumNumberOfShipReached, this._player);
                                    }
                                }
                                this.currentNumberOfShips++;
                            }
                            console.log('GridSquare coordinates : ' + [squareXPosition, squareYPosition] +
                                '\n Index : ' + [i, j]);
                        }
                    }
                }
            }
        }
        // }
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
                square = SquareView.getInstance('Square' + key + Math.random(), newXPosition + j * squareWidth,
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
        let rulerView: RulerView = RulerView.getInstance(this.RulerName + '' + Math.random(), xPosition, yPosition, numberOfSquaresVertically,
            numberOfSquaresHorizontally, squareWidth, gridBorderColor, rulerTextColor);

        this._container.addChild(rulerView.getUIContainer());
    }
}