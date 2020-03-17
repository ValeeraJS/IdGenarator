import IIncreaser from "./IIncreaser";
/**
 * @class
 * @classdesc 数字id生成器，用于生成递增id
 * @param {number} [initValue = 0] 从几开始生成递增id
 */
export default class IdGenerator implements IIncreaser {
    readonly initValue: number;
    private value;
    constructor(initValue?: number);
    current(): number;
    next(): number;
    skip(value?: number): number;
}
