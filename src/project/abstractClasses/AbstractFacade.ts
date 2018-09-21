import * as puremvc from "../../../public/js/puremvc-typescript-multicore-1.1.js";

export class AbstractFacade extends puremvc.Facade
{
    constructor(key: string)
    {
        super(key);
        super.multitonKey = key;
    }

    public notifyObservers(notification): void
    {
        if (super.view)
            super.view.notifyObservers(notification);
    }

    get multitonKey(): string
    {
        return super.multitonKey;
    }
    set multitonKey(mKey: string)
    {
        super.multitonKey = mKey;
    }

    get view(): puremvc.View
    {
        return super.view;
    }

    set view(mView: puremvc.View)
    {
        super.view = mView;
    }

    get controller(): puremvc.Controller
    {
        return super.controller;
    }

    set controller(mController: puremvc.Controller)
    {
        super.controller = mController;
    }

    get model(): puremvc.Model
    {
        return super.model;
    }

    set model(mController: puremvc.Model)
    {
        super.model = mController;
    }
}