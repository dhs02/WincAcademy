// 1. Checking if a number is big
const checkNumber = function (number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
};

console.log(checkNumber(500));
console.log(checkNumber(100));
console.log(checkNumber(50));
console.log(checkNumber(-100));
console.log(checkNumber(101));

/* Now think about the categories of functions we discussed: functions that do something and functions that produce something. What kind of function is this?
-Function that produces something. */

// 2. Bouncer at a club
const bouncer = function (maxNumber, currentNumber, age) {
    if (age >= 18) {
        if ((maxNumber - currentNumber) > 0) {
            return 'come in';
        } else {
            return 'it\'s too busy now, come back later';
        }
    } else {
        return 'this is a club for adults';
    }
};

console.log(bouncer(500, 400, 17));
console.log(bouncer(500, 499, 18));
console.log(bouncer(500, 500, 18));

// If you've created one version of the function: can you think of another way to write it?
const bouncer2 = function (maxNumber, currentNumber, age) {
    let answer = '';
    if (age >= 18) {
        if ((maxNumber - currentNumber) > 0) {
            answer = 'come in';
        } else {
            answer = 'it\'s too busy now, come back later';
        }
    } else {
        answer = 'this is a club for adults';
    }
    return answer;
};

console.log(bouncer2(500, 400, 17));
console.log(bouncer2(500, 499, 18));
console.log(bouncer2(500, 500, 18));

/* Now think about the categories of functions we discussed: functions that do something and functions that produce something. What kind of function is this?
-Function that does do both */

// 3. Calculating the average

const calcAverage = function (num1, num2, num3, num4, num5) {
    let sum = num1 + num2 + num3 + num4 + num5;
    let average = Math.round(sum / 5);
    return average;
};

console.log(calcAverage(1, 2, 3, 4, 5));
console.log(calcAverage(5.1, 5.2, 5.3, 5.4, 5.5));
console.log(calcAverage(100.5, 200.9, 300.8, 400.7, 500.6));

/* Now think about the categories of functions we discussed: functions that do something and functions that produce something. What kind of function is this?
-Function that produces something */