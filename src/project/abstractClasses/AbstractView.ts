import * as puremvc from '../../../public/js/puremvc-typescript-multicore-1.1.js';
import 'pixi.js';

/**
 *  Extend this class
 */
export class AbstractView extends puremvc.View {
    protected container: PIXI.Container;
    private multitonkey: string;
    private _active: boolean;

    constructor(key: string) {
        super(key);
        this.multitonkey = key;

    }

    public getUIContainer(): PIXI.Container {
        return this.container;
    }

    public initializeView(): void {
        this.container = new PIXI.Container();
    }

    public addToContainer(item: any): void {
        this.container.addChild(item);
    }

    public setActive(_active: boolean): void {
        for (let item of this.container.children) {
            item.visible = _active;
        }
        this._active = _active;
    }

    public registerMediator(mediator: puremvc.Mediator) {
        super.registerMediator(mediator);
    }

    get multitonKey(): string {
        return this.multitonkey;
    }

    set multitonKey(key: string) {
        this.multitonkey = key;
    }

    get active(): boolean {
        return this._active;
    }

    set active(key: boolean) {
        this._active = key;
    }
}