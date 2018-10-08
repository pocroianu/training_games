/**
 * The simple abstract view class.This will be used for all the other classes except the manager one.
 */
export class AbstractSimpleView {
    protected _active: boolean;
    protected _container: PIXI.Container;

    /**
     *
     */
    constructor() {
        this.initializeView();
    }

    /**
     * Initializes the view.
     * Creates an instance of the container.
     */
    public initializeView(): void {
        this._container = new PIXI.Container();
    }


    /**
     * Set this view to be visible.
     * @param active
     */
    public setActive(active: boolean): void {
        for (let item of this._container.children) {
            item.visible = active;
            item.interactive = active;
        }
        this._active = active;
    }


    /**
     *
     */
    public getUIContainer(): PIXI.Container {
        return this._container;
    }

    /**
     * Add a PIXI graphics,sprite,container etc to this view
     * @param item
     */
    public addToContainer(item: any): void {
        this._container.addChild(item);
    }
}