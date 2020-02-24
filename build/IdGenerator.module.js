class IdGenerator {
    constructor(initValue = 0) {
        this.current = () => {
            return this.value;
        };
        this.skip = (value = 1) => {
            if (value < 1) {
                value = 1;
            }
            this.value += value;
            return ++this.value;
        };
        this.next = () => {
            return ++this.value;
        };
        this.value = this.initValue = initValue;
    }
}

export default IdGenerator;
