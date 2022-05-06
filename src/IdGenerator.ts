import IIncreaser from "./IIncreaser";

const S4 = () => {
	return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};

/**
 * @class
 * @classdesc 数字id生成器，用于生成递增id
 * @param {number} [initValue = 0] 从几开始生成递增id
 * @implements IdGenerator.IIncreaser
 */
export default class IdGenerator implements IIncreaser {
	public readonly initValue: number;
	private value: number;

	/**
	 * @member IdGenerator.initValue
	 * @desc id从该值开始递增，在创建实例时进行设置。设置之后将无法修改。
	 * @readonly
	 * @public
	 */
	public constructor(initValue = 0) {
		this.value = this.initValue = initValue;
	}

	/**
	 * @method IdGenerator.prototype.current
	 * @desc 返回当前的id
	 * @readonly
	 * @public
	 * @returns {number} id
	 */
	public current(): number {
		return this.value;
	}

	public jumpTo(value: number): boolean {
		if (this.value < value) {
			this.value = value;

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
	public next(): number {
		return ++this.value;
	}

	/**
	 * @method IdGenerator.prototype.skip
	 * @desc 跳过一段值生成新的id
	 * @public
	 * @param {number} [value = 1] 跳过的范围，必须大于等于1
	 * @returns {number} id
	 */
	public skip(value = 1): number {
		if (value < 1) {
			value = 1;
		}
		this.value += value;

		return ++this.value;
	}

	/**
	 * @method IdGenerator.prototype.skip
	 * @desc 生成新的32位uuid
	 * @public
	 * @returns {string} uuid
	 */
	public uuid(): string {
		if ((crypto as any).randomUUID) {
			return (crypto as any).randomUUID();
		} else {
			return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
		}
	}

	/**
	 * @method IdGenerator.prototype.skip
	 * @desc 生成新的32位BigInt
	 * @public
	 * @returns {BigInt} uuid
	 */
	public uuidBigInt(): BigInt {
		// return bi4(7) + bi4(6) + bi4(5) + bi4(4) + bi4(3) + bi4(2) + bi4(1) + bi4(0);
		const arr = crypto.getRandomValues(new Uint16Array(8));

		return (
			BigInt(arr[0]) * 65536n * 65536n * 65536n * 65536n * 65536n * 65536n * 65536n +
			BigInt(arr[1]) * 65536n * 65536n * 65536n * 65536n * 65536n * 65536n +
			BigInt(arr[2]) * 65536n * 65536n * 65536n * 65536n * 65536n +
			BigInt(arr[3]) * 65536n * 65536n * 65536n * 65536n +
			BigInt(arr[4]) * 65536n * 65536n * 65536n +
			BigInt(arr[5]) * 65536n * 65536n +
			BigInt(arr[6]) * 65536n +
			BigInt(arr[6])
		);
	}
}
