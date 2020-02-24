import IIncreaser from "./IIncreaser";
export default class IdGenerator implements IIncreaser {
    readonly initValue: number;
    value: number;
    constructor(initValue?: number);
    current: () => number;
    skip: (value?: number) => number;
    next: () => number;
}
