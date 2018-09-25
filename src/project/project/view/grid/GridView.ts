import {AbstractView} from "../../../abstractClasses/AbstractView";
import {SquareView} from "./SquareView";
import {FacadeInformation} from '../../facade/BattleShipFacade'
import {RulerView} from "../ruler/RulerView";
import {GridViewMediator} from "../../mediator/GridViewMediator";
import 'pixi.js'

/**
 * Creates the grid
 */
export class GridView extends AbstractView {
    private BoardSquares: SquareView[][];
    private BoardSquaresXPosition: number[][] = [];
    private BoardSquaresYPosition: number[][] = [];

    public RulerName: string = 'RulerForTheGrid';
    public name = 'GridView';

    /**
     *
     * @param key
     * @param gridNumber
     */
    constructor(key: string, gridNumber: number) {
        super(key);
        this.name = this.name.concat(gridNumber.toString());
        switch (gridNumber) {
            case 1:
                this.createBoard(FacadeInformation.Grid1XPosition, FacadeInformation.Grid1YPosition, FacadeInformation.SquareWidth,
                    FacadeInformation.NumberOfSquaresVertically, FacadeInformation.NumberOfSquaresHorizontally, FacadeInformation.Grid1BorderColor, FacadeInformation.GridSquareFillColor);
                this.createRuler(FacadeInformation.Grid1XPosition, FacadeInformation.Grid1YPosition, FacadeInformation.NumberOfSquaresVertically,
                    FacadeInformation.NumberOfSquaresHorizontally, FacadeInformation.SquareWidth, FacadeInformation.Grid1BorderColor, FacadeInformation.RulerTextColor);
                break;

            case 2:
                this.createBoard(FacadeInformation.Grid2XPosition, FacadeInformation.Grid2YPosition, FacadeInformation.SquareWidth,
                    FacadeInformation.NumberOfSquaresVertically, FacadeInformation.NumberOfSquaresHorizontally, FacadeInformation.Grid2BorderColor, FacadeInformation.GridSquareFillColor);
                this.createRuler(FacadeInformation.Grid2XPosition, FacadeInformation.Grid2YPosition, FacadeInformation.NumberOfSquaresVertically,
                    FacadeInformation.NumberOfSquaresHorizontally, FacadeInformation.SquareWidth, FacadeInformation.Grid2BorderColor, FacadeInformation.RulerTextColor);
                break;
        }
        super.registerMediator(new GridViewMediator(key, this, gridNumber));

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
     * @param gridNumber
     */
    static getInstance(key: string, gridNumber?: number): GridView {
        if (!puremvc.View.instanceMap[key])
            puremvc.View.instanceMap[key] = new GridView(key, gridNumber);

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

        this.BoardSquares = [];
        for (let i: number = 0; i < numberOfSquaresVertically; i++) {
            this.BoardSquares[i] = [];
            this.BoardSquaresXPosition[i] = [];
            this.BoardSquaresYPosition[i] = [];
            newXPosition = gridXPosition;

            for (let j: number = 0; j < numberOfSquaresHorizontally; j++) {
                key++;
                square = SquareView.getInstance('Square' + key + Math.random(), newXPosition + j * squareWidth,
                    newYPosition, squareWidth, gridBorderColor, gridSquareFillColor, j, i);
                this.BoardSquares[i][j] = square;

            }
            newYPosition += squareWidth;
        }

        for (let i: number = 0; i < numberOfSquaresVertically; i++)
            for (let j: number = 0; j < numberOfSquaresHorizontally; j++)
                this._container.addChild(this.BoardSquares[i][j].getUIContainer());
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
    private createRuler(xPosition: number, yPosition: number, numberOfSquaresVertically: number, numberOfSquaresHorizontally: number, squareWidth: number,
                        gridBorderColor: number, rulerTextColor: number) {
        let rulerView: RulerView = RulerView.getInstance(this.RulerName + '' + Math.random(), xPosition, yPosition, numberOfSquaresVertically,
            numberOfSquaresHorizontally, squareWidth, gridBorderColor, rulerTextColor);

        this._container.addChild(rulerView.getUIContainer());
    }
}