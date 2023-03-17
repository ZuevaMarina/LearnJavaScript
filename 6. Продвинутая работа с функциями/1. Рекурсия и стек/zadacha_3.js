function fib(n) {
    let a = 1, b = 1, c;

    while (n > 2) {
        c = a + b;
        a = b;
        b = c;
        n--;
    }

    return c;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757