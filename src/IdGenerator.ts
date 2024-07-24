let value = 0;
const decoder = new TextDecoder();
const arrbuffer = new Uint8Array(32);

export class IdGenerator {
    static get serialNumber() {
        return ++value;
    }
    static get randomString() {
        return decoder.decode(crypto.getRandomValues(arrbuffer));
    }
}
