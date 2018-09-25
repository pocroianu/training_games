import {AbstractView} from "./AbstractView";

/**
 * Extends this.
 */
export class AbstractMediator extends puremvc.Mediator implements puremvc.IMediator {

    /**
     *
     * @param mediatorName
     * @param viewComponent
     */
    constructor(mediatorName: string, viewComponent: any) {
        super(mediatorName, viewComponent);
    }

    /**
     *
     */
    public getViewComponent(): AbstractView {
        return super.getViewComponent();
    }
}

