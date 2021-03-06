/**
 * @class
 * @classdesc 数字id生成器，用于生成递增id
 * @param {number} [initValue = 0] 从几开始生成递增id
 * @implements IdGenerator.IIncreaser
 */
var IdGenerator = /** @class */ (function () {
    /**
     * @member IdGenerator.initValue
     * @desc id从该值开始递增，在创建实例时进行设置。设置之后将无法修改。
     * @readonly
     * @public
     */
    function IdGenerator(initValue) {
        if (initValue === void 0) { initValue = 0; }
        this.value = this.initValue = initValue;
    }
    /**
     * @method IdGenerator.prototype.current
     * @desc 返回当前的id
     * @readonly
     * @public
     * @returns {number} id
     */
    IdGenerator.prototype.current = function () {
        return this.value;
    };
    /**
     * @method IdGenerator.prototype.next
     * @desc 生成新的id
     * @public
     * @returns {number} id
     */
    IdGenerator.prototype.next = function () {
        return ++this.value;
    };
    /**
     * @method IdGenerator.prototype.skip
     * @desc 跳过一段值生成新的id
     * @public
     * @param {number} [value = 1] 跳过的范围，必须大于等于1
     * @returns {number} id
     */
    IdGenerator.prototype.skip = function (value) {
        if (value === void 0) { value = 1; }
        if (value < 1) {
            value = 1;
        }
        this.value += value;
        return ++this.value;
    };
    return IdGenerator;
}());

export default IdGenerator;
//# sourceMappingURL=IdGenerator.legacy.module.js.map
