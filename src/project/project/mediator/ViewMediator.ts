import * as puremvc from '../../../../public/js/puremvc-typescript-multicore-1.1.js';
import {GridView} from '../view/grid/GridView'
import 'pixi.js'
import {FacadeInformation} from "../facade/BattleShipFacade";
import {TextView} from "../view/text/TextView";
import {ButtonView} from "../view/button/ButtonView";
import {ShipView} from "../view/ships/ShipView";


export class ViewMediator extends puremvc.Mediator implements puremvc.IMediator {
    public name: String = 'ViewMediator';
    private gridViewName: Array<string> = ['GridOneBoard', 'GridTwoBoard'];
    public textViewName: string = 'TextView';
    public buttonViewName: string = 'ButtonView';
    public shipViewName: string = 'ShipView';

    /**
     *
     * @param key
     * @param viewComponent
     */
    constructor(key: string, viewComponent: puremvc.View = null) {
        super(name, viewComponent);

        GridView.getInstance(this.gridViewName[0], FacadeInformation.GridOne);
        GridView.getInstance(this.gridViewName[1], FacadeInformation.GridTwo);
        let textView: TextView = TextView.getInstance(this.textViewName, FacadeInformation.TextViewText, FacadeInformation.FontSize, FacadeInformation.TextViewColor);
        let buttonView: ButtonView = ButtonView.getInstance(this.buttonViewName, FacadeInformation.ButtonViewXPosition, FacadeInformation.ButtonViewYPosition, FacadeInformation.ButtonViewScale);


        for (let i: number = 0; i < 3; i++) {
            ShipView.getInstance(this.shipViewName + '' + i, 0, 100 + i * 100, 5 - i);
        }

        console.log('   # ' + this.name + ' created');

        GridView.getInstance(this.gridViewName[0], FacadeInformation.GridOne).getSquaresPosition();
    }

    /**
     * The notification that the ViewMediator is interested in.
     */
    public listNotificationInterests(): string {
        return '';
    }

    /**
     *  This is where the notifications are handled.
     * @param notification
     */
    public handleNotification(notification: puremvc.Notification): void {
        let name: String = notification.name;
    }
}