import * as puremvc from '../../../../public/js/puremvc-typescript-multicore-1.1.js';
import {AbstractCommand} from "../../abstractClasses/AbstractCommand";
import {CommandNotifications} from "../facade/BattleShipFacade";
import 'pixi.js'

export class SquareClickCommand extends AbstractCommand
{

    public execute(notification: puremvc.Notification): void
    {
        switch(notification.getName()){

            case CommandNotifications.ClickHandle:
                console.log('SquareClick Handle Request');
                break;
        }

        //TODO: Add extra things
    }
}