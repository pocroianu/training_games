/**
 * The abstract main view manager.
 */
export class AbstractViewManager extends puremvc.View implements puremvc.IView {
    protected _multitonKey: string;

    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);
        this._multitonKey = key;
    }

    /**
     * Register a mediator to this view.
     * @param mediator
     */
    public registerMediator(mediator: puremvc.Mediator): void {
        super.registerMediator(mediator);
    }

    /**
     *
     * @param mediatorName
     */
    public hasMediator(mediatorName: string): boolean {
        return super.hasMediator(mediatorName);
    }
}