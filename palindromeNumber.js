function largestPalindromeProduct(num) {
    var reverse = 0;
    var temp = num;
    while (temp != 0) {
        var remainder = temp % 10;
        reverse = (reverse * 10) + remainder;
        temp = parseInt(temp / 10);
    }
    if (num == reverse) {
        console.log("palindrome");
    } else {
        console.log("not palindrome")
    }
}
largestPalindromeProduct(323);