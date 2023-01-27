(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.IdGenerator = {}));
})(this, (function (exports) { 'use strict';

	// const S4 = () => {
	// 	return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	// };
	/**
	 * @class
	 * @classdesc 数字id生成器，用于生成递增id
	 * @param {number} [initValue = 0] 从几开始生成递增id
	 * @implements IdGenerator.IIncreaser
	 */
	class IdGenerator {
	    initValue;
	    #value;
	    /**
	     * @member IdGenerator.initValue
	     * @desc id从该值开始递增，在创建实例时进行设置。设置之后将无法修改。
	     * @readonly
	     * @public
	     */
	    constructor(initValue = 0) {
	        this.#value = this.initValue = initValue;
	    }
	    /**
	     * @method IdGenerator.prototype.current
	     * @desc 返回当前的id
	     * @readonly
	     * @public
	     * @returns {number} id
	     */
	    current() {
	        return this.#value;
	    }
	    jumpTo(value) {
	        if (this.#value < value) {
	            this.#value = value;
	            return true;
	        }
	        return false;
	    }
	    /**
	     * @method IdGenerator.prototype.next
	     * @desc 生成新的id
	     * @public
	     * @returns {number} id
	     */
	    next() {
	        return ++this.#value;
	    }
	    /**
	     * @method IdGenerator.prototype.skip
	     * @desc 跳过一段值生成新的id
	     * @public
	     * @param {number} [value = 1] 跳过的范围，必须大于等于1
	     * @returns {number} id
	     */
	    skip(value = 1) {
	        this.#value += Math.min(1, value);
	        return ++this.#value;
	    }
	    /**
	     * @method IdGenerator.prototype.skip
	     * @desc 生成新的32位uuid
	     * @public
	     * @returns {string} uuid
	     */
	    uuid() {
	        // if (crypto.randomUUID) {
	        // 	return (crypto as any).randomUUID();
	        // } else {
	        // 	return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
	        // }
	        return crypto.randomUUID();
	    }
	    /**
	     * @method IdGenerator.prototype.skip
	     * @desc 生成新的32位BigInt
	     * @public
	     * @returns {BigInt} uuid
	     */
	    uuidBigInt() {
	        // return bi4(7) + bi4(6) + bi4(5) + bi4(4) + bi4(3) + bi4(2) + bi4(1) + bi4(0);
	        const arr = crypto.getRandomValues(new Uint16Array(8));
	        return (BigInt(arr[0]) * 65536n * 65536n * 65536n * 65536n * 65536n * 65536n * 65536n +
	            BigInt(arr[1]) * 65536n * 65536n * 65536n * 65536n * 65536n * 65536n +
	            BigInt(arr[2]) * 65536n * 65536n * 65536n * 65536n * 65536n +
	            BigInt(arr[3]) * 65536n * 65536n * 65536n * 65536n +
	            BigInt(arr[4]) * 65536n * 65536n * 65536n +
	            BigInt(arr[5]) * 65536n * 65536n +
	            BigInt(arr[6]) * 65536n +
	            BigInt(arr[6]));
	    }
	}

	exports.IdGenerator = IdGenerator;

}));
