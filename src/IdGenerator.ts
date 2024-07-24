const cache = new WeakMap<IdGenerator, number>();
const decoder = new TextDecoder();
const arrbuffer = new Uint8Array(32);

export class IdGenerator {
    constructor() {
        cache.set(this, 0);
    }
    get serialNumber() {
        const v = cache.get(this) + 1;
        cache.set(this, v);

        return v;
    }
    get randomString() {
        return decoder.decode(crypto.getRandomValues(arrbuffer));
    }
}
