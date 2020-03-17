/**
 * @class
 * @classdesc 数字id生成器，用于生成递增id
 * @param {number} [initValue = 0] 从几开始生成递增id
 */
var IdGenerator = /** @class */ (function () {
    function IdGenerator(initValue) {
        if (initValue === void 0) { initValue = 0; }
        this.value = this.initValue = initValue;
    }
    IdGenerator.prototype.current = function () {
        return this.value;
    };
    IdGenerator.prototype.next = function () {
        return ++this.value;
    };
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
