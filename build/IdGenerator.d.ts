import { IIncreaser } from "./IIncreaser";
/**
 * @class
 * @classdesc 数字id生成器，用于生成递增id
 * @param {number} [initValue = 0] 从几开始生成递增id
 * @implements IdGenerator.IIncreaser
 */
export declare class IdGenerator implements IIncreaser {
    #private;
    readonly initValue: number;
    /**
     * @member IdGenerator.initValue
     * @desc id从该值开始递增，在创建实例时进行设置。设置之后将无法修改。
     * @readonly
     * @public
     */
    constructor(initValue?: number);
    /**
     * @method IdGenerator.prototype.current
     * @desc 返回当前的id
     * @readonly
     * @public
     * @returns {number} id
     */
    current(): number;
    jumpTo(value: number): boolean;
    /**
     * @method IdGenerator.prototype.next
     * @desc 生成新的id
     * @public
     * @returns {number} id
     */
    next(): number;
    /**
     * @method IdGenerator.prototype.skip
     * @desc 跳过一段值生成新的id
     * @public
     * @param {number} [value = 1] 跳过的范围，必须大于等于1
     * @returns {number} id
     */
    skip(value?: number): number;
    /**
     * @method IdGenerator.prototype.skip
     * @desc 生成新的32位uuid
     * @public
     * @returns {string} uuid
     */
    uuid(): string;
    /**
     * @method IdGenerator.prototype.skip
     * @desc 生成新的32位BigInt
     * @public
     * @returns {BigInt} uuid
     */
    uuidBigInt(): BigInt;
}
