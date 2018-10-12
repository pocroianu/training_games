/**
 *
 */
export class AbstractNotification extends puremvc.Notification {

    public reference: any;

    /**
     *
     * @param key
     * @param reference
     */
    constructor(key: string, reference: any) {
        super(key);
        this.reference = reference;
    }

    /**
     *
     */
    public getName(): string {
        return super.getName();
    }

    /**
     *
     * @param body
     */
    public setBody(body: any): void {
        super.setBody(body);
    }

    /**
     *
     */
    public getBody(): string {
        return super.getBody();
    }

    /**
     *
     * @param type
     */
    public setType(type: string): void {
        super.setType(type);
    }

    /**
     *
     */
    public getType(): string {
        return super.getType();
    }

    /**
     *
     */
    public toString(): string {
        return super.toString();
    }

    /**
     * Return a reference of something we need in the future.
     */
    public getReference(): any {
        return this.reference;
    }
}

