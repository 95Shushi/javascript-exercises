const fibonacci = function (n) {
    if (n < 1) return "OOPS";
    if (n == 1) return 1;
    firstNumber = 0;
    secondNumber = 1;
    sum = 0;

    for (let i = 1; i < n; i++) {
        sum = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;

// 1, 1, 2, 3, 5
// 1, 2, 3, 4, 5