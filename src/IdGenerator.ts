let value = 0;
const decoder = new TextDecoder();
const arrbuffer = new Uint8Array(32);

export const IdGenerator = {
	get serialNumber() {
		return ++value;
	},
	get randomString() {
		return decoder.decode(crypto.getRandomValues(arrbuffer));
	}
}
