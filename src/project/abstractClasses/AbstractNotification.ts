import * as puremvc from '../../../public/js/puremvc-typescript-multicore-1.1.js';

export class AbstractNotification extends puremvc.Notification
{
    constructor(key: string)
    {
        super(key);
    }

    public getName(): string
    {
        return super.getName();
    }
}

