/**
 * Extends this.
 */
export class AbstractView extends puremvc.View implements puremvc.IView {
    public ID: number;
    protected _container: PIXI.Container;
    protected _multitonKey: string;
    protected _active: boolean;

    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);
        this._multitonKey = key;
    }


    /**
     *
     */
    get active(): boolean {
        return this._active;
    }

    /**
     *
     * @param key
     */
    set active(key: boolean) {
        this._active = key;
    }

    /**
     * Initializes the view.
     * Creates an instance of the container.
     */
    public initializeView(): void {
        this._container = new PIXI.Container();
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

    /**
     *
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

    /**
     *
     */
    public activateUpdate(): void {
        //todo: override where needed
    }


    /**
     *
     * @param id
     */
    public onClick(id: number): void {
        //todo: override where needed
    }

    /**
     *
     * @param loader
     * @param res
     */
    public onAssetsLoaded(loader, res): void {
        //todo: override where needed
    }

    /**
     *
     * @param loader
     * @param res
     */
    public onConfigLoaded(loader, res): void {
        //todo: override where needed
    }
}