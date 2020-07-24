// finding the smallest prime factor
// poject euler solution 3
function getPrime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            if (i % i == 0 || i % 1 == 0) {
                console.log(i);
            }
            return ("invalid")
        }
    }
}
getPrime(21);