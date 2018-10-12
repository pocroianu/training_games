/**
 *
 */
export class AbstractModel extends puremvc.Model implements puremvc.IModel {
    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);
    }

    /**
     *
     * @param key
     */
    static removeModel(key: string): void {
        super.removeModel(key);
    }

    /**
     *
     */
    public initializeModel(): void {
    }

    /**
     *
     * @param proxy
     */
    public registerProxy(proxy: puremvc.IProxy): void {
        super.registerProxy(proxy);
    }

    /**
     *
     * @param proxyName
     */
    public removeProxy(proxyName: string): puremvc.IProxy {
        return super.removeProxy(proxyName);
    }

    /**
     *
     * @param proxyName
     */
    public retrieveProxy(proxyName: string): puremvc.IProxy {
        return super.retrieveProxy(proxyName);
    }

    /**
     *
     * @param proxyName
     */
    public hasProxy(proxyName: string): boolean {
        return super.hasProxy(proxyName);
    }

}