function squareNumbers(num1, num2) {
    let squaredNum1 = num1 * num1;
    let squaredNum2 = num2 * num2;
    let sum = squaredNum1 + squaredNum2;
    let squaredSum = sum * sum;
    return squaredSum;
}

const squareNumbers2 = function (num1, num2) {
    let squaredNum1 = num1 * num1;
    let squaredNum2 = num2 * num2;
    let sum = squaredNum1 + squaredNum2;
    let squaredSum = sum * sum;
    return squaredSum;
};

const squareNumbers3 = (num1, num2) => {
    let squaredNum1 = num1 * num1;
    let squaredNum2 = num2 * num2;
    let sum = squaredNum1 + squaredNum2;
    let squaredSum = sum * sum;
    return squaredSum;
};

console.log(squareNumbers(12, 16));
console.log(squareNumbers2(12, 16));
console.log(squareNumbers3(12, 16));