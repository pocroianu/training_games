import {AbstractModel} from "../../abstractClasses/AbstractModel";

/**
 * The model manager that controls the proxies.
 */
export class ModelManager extends AbstractModel {

    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);
        console.log(' ModelManager created');
    }

    /**
     *
     * @param key
     */
    static getInstance(key: string): ModelManager {
        if (!puremvc.Model.instanceMap[key])
            puremvc.Model.instanceMap[key] = new ModelManager(key);

        return puremvc.Model.instanceMap[key] as ModelManager;
    }
}