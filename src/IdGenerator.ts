import IIncreaser from "./IIncreaser";

export default class IdGenerator implements IIncreaser{

	readonly initValue: number;
	value: number;

	constructor(initValue: number = 0) {
		this.value = this.initValue = initValue;
	}

	current = () => {
		return this.value;
	}

	skip = (value: number = 1) => {
		if (value < 1) {
			value = 1;
		}
		this.value += value;
		return ++this.value;
	}

	next = () => {
		return ++this.value;
	}
}
