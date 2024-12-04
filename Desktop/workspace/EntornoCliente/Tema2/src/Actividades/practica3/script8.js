"use strict"

function fibonacci(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}
for (let num of fibonacci(10)) {
    console.log(num);
}