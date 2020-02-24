export default interface IIncreaser {
    value: number;
    next: () => number;
    skip: (value: number) => number;
}
