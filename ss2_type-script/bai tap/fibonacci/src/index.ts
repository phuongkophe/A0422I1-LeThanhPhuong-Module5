import "./style.css";

const input = <HTMLInputElement>document.getElementById("n");
const result = <HTMLInputElement>document.getElementById("result");

document.getElementById("compute").addEventListener("click", () => {
    const fn: number = fibonacci(input.valueAsNumber);
    result.value = fn.toString();
});

function fib_crash(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib_crash(n - 1) + fib_crash(n - 2);
}

function fibonacci(n: number, memo: Map<number, number> = new Map()): number {
    if (n === 0) return 0;
    if (n === 1) return 1;

    if (memo.has(n)) return memo.get(n);
    const fn = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    memo.set(n, fn);
    return fn;
}

const fib = trampoline(_fib);

function _fib(n: number, sum = 0, prev = 1): Function {
    return () => (n === 0 ? sum : fib(n - 1, prev + sum, sum));
}

function trampoline(fn: Function): Function {
    return (...args: any[]) => {
        let result = fn(...args);
        while (result && result instanceof Function) {
            result = result();
        }
        return result;
    };
}

const a = fib(1500);
const b = _fib(1500)();
console.log(Number.POSITIVE_INFINITY === a);
console.log(b);
console.log(fib(1476));
console.log(fibonacci(1479));
console.log(fib_crash(10))
