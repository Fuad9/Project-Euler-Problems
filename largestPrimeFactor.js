// finding the largest prime factor

function largestPrimeFactor(n) {
    var i = 2;
    while (i <= n) {
        if (n % i == 0) {
            n /= i;
        } else {
            i++;
        }
    }
    console.log(i);
}
largestPrimeFactor(21);