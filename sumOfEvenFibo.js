// Fibonacci series
// project euler solution 2
function evenFiboSum(n) {
    var fibo = [0, 1];
    var fiboSum = 0;
    for (var i = 2; i < n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        if (fibo[i] % 2 == 0) {
            fiboSum = fiboSum + fibo[i];
        }
    }
    return fiboSum;
}
console.log(evenFiboSum(34));