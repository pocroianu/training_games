import {BattleShipFacade, FacadeInformation} from './PixiShowcase/facade/BattleShipFacade'

new class Main
{
    public myFacade: BattleShipFacade;

    constructor()
    {
        this.myFacade = BattleShipFacade.getInstance(FacadeInformation.BattleShipFacadeKey);
    };
};