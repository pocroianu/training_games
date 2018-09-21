import * as puremvc from '../../../../public/js/puremvc-typescript-multicore-1.1.js';
import {GridView} from '../view/grid/GridView'
import 'pixi.js'
import {BattleShipFacade, FacadeInformation} from "../facade/BattleShipFacade";
import Application = PIXI.Application;
import {SquareView} from "../view/grid/SquareView";

export class GridViewMediator extends puremvc.Mediator implements puremvc.IMediator {
    public name: String = 'GridViewMediator';
    public gridName: string = 'GridBoard';


    /**
     *
     * @param key
     * @param viewComponent
     * @param gridNumber
     */
    constructor(key: string, viewComponent: puremvc.View = null,gridNumber:number) {
        super(name, viewComponent);
        this.name+=''+gridNumber;

        let containersList: Array<PIXI.Container> = [];
        containersList.push(super.getViewComponent().getUIContainer());
        BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey).addContainersToView(containersList, gridNumber-1);

        console.log('   # '+this.name+' created');
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