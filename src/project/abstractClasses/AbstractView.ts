import * as puremvc from '../../../public/js/puremvc-typescript-multicore-1.1.js';
import 'pixi.js';

/**
 *  Extend this class
 */
export class AbstractView extends puremvc.View {
    protected container: PIXI.Container;
    private multitonkey: string;
    private _active: boolean;

    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);
        this.multitonkey = key;

    }

    /**
     * Returns the view's container
     */
    public getUIContainer(): PIXI.Container {
        return this.container;
    }

    /**
     * Initializes the view.
     * Creates an instance of the container.
     */
    public initializeView(): void {
        this.container = new PIXI.Container();
    }

    /**
     * Add a PIXI graphics,sprite,container etc to this view
     * @param item
     */
    public addToContainer(item: any): void {
        this.container.addChild(item);
    }

    /**
     *
     * @param _active
     */
    public setActive(_active: boolean): void {
        for (let item of this.container.children) {
            item.visible = _active;
        }
        this._active = _active;
    }

    /**
     * Register a mediator to this view
     * @param mediator
     */
    public registerMediator(mediator: puremvc.Mediator) {
        super.registerMediator(mediator);
    }

    /**
     *
     */
    get multitonKey(): string {
        return this.multitonkey;
    }

    /**
     *
     * @param key
     */
    set multitonKey(key: string) {
        this.multitonkey = key;
    }

    /**
     * Getter for the active class property
     */
    get active(): boolean {
        return this._active;
    }

    /**
     * Setter for the active class property
     * @param key
     */
    set active(key: boolean) {
        this._active = key;
    }
}