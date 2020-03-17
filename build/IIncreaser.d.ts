export default interface IIncreaser {
    current: () => number;
    next: () => number;
    skip: (value: number) => number;
}
