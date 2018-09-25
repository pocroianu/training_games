import {GridView} from '../view/grid/GridView'
import 'pixi.js'
import {FacadeInformation} from "../facade/BattleShipFacade";
import {TextView} from "../view/text/TextView";
import {ButtonView} from "../view/button/ButtonView";
import {ShipView} from "../view/ships/ShipView";
import {AbstractMediator} from "../../abstractClasses/AbstractMediator";

/**
 *
 */
export class ViewMediator extends AbstractMediator {
    public name: String = 'ViewMediator';
    private gridViewName: Array<string> = ['GridOneBoard', 'GridTwoBoard'];
    public textViewName: string = 'TextView';
    public buttonViewName: string = 'ButtonView';
    public shipViewName: string = 'ShipView';

    /**
     *
     * @param mediatorName
     * @param viewComponent
     */
    constructor(mediatorName?: string, viewComponent?: any) {
        super(mediatorName, viewComponent);

        GridView.getInstance(this.gridViewName[0], FacadeInformation.GridOne);
        GridView.getInstance(this.gridViewName[1], FacadeInformation.GridTwo);
        TextView.getInstance(this.textViewName, FacadeInformation.TextViewText, FacadeInformation.FontSize, FacadeInformation.TextViewColor);
        ButtonView.getInstance(this.buttonViewName, FacadeInformation.ButtonViewXPosition, FacadeInformation.ButtonViewYPosition, FacadeInformation.ButtonViewScale);

        for (let i: number = 0; i < 3; i++) {
            ShipView.getInstance(this.shipViewName + '' + i, 0, 100 + i * 100, 5 - i);
        }
        console.log('   # ' + this.name + ' created');
    }

    /**
     * The notification that the ViewMediator is interested in.
     */
    public listNotificationInterests(): string [] {
        return [];
    }

    /**
     *  This is where the notifications are handled.
     * @param notification
     */
    public handleNotification(notification: puremvc.Notification): void {
        let name: String = notification.name;
    }
}