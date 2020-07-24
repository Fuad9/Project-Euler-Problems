// code to calculate sum of all numbers which are multiples of 3 or 5
// project euler solution 1
var total = 0;
for (var i = 3; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        var total = total + i;

    }
}
console.log(total);