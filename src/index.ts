const cache = new WeakMap<IdGenerator, number>();

/**
 * @class
 * @classdesc 数字id生成器，用于生成递增id
 * @param {number} [initValue = 0] 从几开始生成递增id
 * @implements IdGenerator.IIncreaser
 */
export class IdGenerator {
	/**
	 * @member IdGenerator.initValue
	 * @desc id从该值开始递增，在创建实例时进行设置。设置之后将无法修改。
	 * @readonly
	 * @public
	 */
	public constructor(initValue = 0) {
		cache.set(this, initValue);
	}

	/**
	 * @method IdGenerator.prototype.next
	 * @desc 生成新的id
	 * @public
	 * @returns {number} id
	 */
	public next(): number {
		const v = cache.get(this)! + 1;
		cache.set(this, v);
		return v;
	}

	/**
	 * @method IdGenerator.prototype.skip
	 * @desc 生成新的32位uuid
	 * @public
	 * @returns {string} uuid
	 */
	public uuid(): string {
		return crypto.randomUUID();
	}
}
