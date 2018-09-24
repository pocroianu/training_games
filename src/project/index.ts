import {BattleShipFacade, FacadeInformation} from './project/facade/BattleShipFacade'

new class Main
{
    public myFacade: BattleShipFacade;

    constructor()
    {
        this.myFacade = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
    };
};