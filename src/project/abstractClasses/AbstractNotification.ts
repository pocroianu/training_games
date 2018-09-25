/**
 *
 */
export class AbstractNotification extends puremvc.Notification {

    /**
     *
     * @param key
     */
    constructor(key: string) {
        super(key);
    }

    /**
     *
     */
    public getName(): string {
        return super.getName();
    }

    /**
     *
     */
    public getBody(): string {
        return super.getBody();
    }
}

