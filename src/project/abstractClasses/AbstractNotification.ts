/**
 *
 */
export class AbstractNotification extends puremvc.Notification {

    public objectReference: any;
    public arrayOfStrings: Array<string> = [];
    public arrayOfNumbers: Array<number> = [];

    /**
     *
     * @param name
     * @param body
     * @param type
     * @param arrayOfStrings
     * @param arrayOfNumbers
     * @param objectReference
     */
    constructor(name: string, body: string, type?: string, arrayOfStrings?: Array<string>, arrayOfNumbers?: Array<number>, objectReference?: any) {
        super(name, body, type);
        this.objectReference = objectReference;
        this.arrayOfStrings = arrayOfStrings;
        this.arrayOfNumbers = arrayOfNumbers;
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
    public getObjectReference(): any {
        return this.objectReference;
    }

    /**
     *
     * @param objectReference
     */
    public setObjectReference(objectReference: any): void {
        this.objectReference = objectReference;
    }

    /**
     *
     */
    public getArrayOfStrings(): Array<string> {
        return this.arrayOfStrings;
    }

    /**
     *
     */
    public getArrayOfNumbers(): Array<number> {
        return this.arrayOfNumbers;
    }
}

